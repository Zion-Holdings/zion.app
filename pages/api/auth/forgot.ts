import type { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';
import { withErrorLogging } from '@/utils/withErrorLogging';
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';


// Input validation schema
const schema = z.object({
  email: z.string().email('Invalid email address'),
});

// Rate limiting - simple in-memory store (for production, use Redis or database)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const MAX_ATTEMPTS = 5;
const WINDOW_MS = 15 * 60 * 1000; // 15 minutes

function getRateLimitKey(req: NextApiRequest): string {
  const headers = req.headers as Record<string, string | string[] | undefined>;
  const forwarded = headers['x-forwarded-for'];
  const ip = forwarded ? String(forwarded).split(',')[0] : (req as { connection?: { remoteAddress?: string } }).connection?.remoteAddress || 'unknown';
  return `forgot_password:${ip}`;
}

function checkRateLimit(key: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(key);
  
  if (!record || now > record.resetTime) {
    rateLimitMap.set(key, { count: 1, resetTime: now + WINDOW_MS });
    return true;
  }
  
  if (record.count >= MAX_ATTEMPTS) {
    return false;
  }
  
  record.count++;
  return true;
}

async function getAuth0ManagementToken() {
  const domain = process.env['AUTH0_ISSUER_BASE_URL'];
  const clientId = process.env['AUTH0_CLIENT_ID'];
  const clientSecret = process.env['AUTH0_CLIENT_SECRET'];

  if (!domain || !clientId || !clientSecret) {
    throw new Error('Auth0 configuration missing');
  }

  const response = await fetch(`${domain}/oauth/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      grant_type: 'client_credentials',
      client_id: clientId,
      client_secret: clientSecret,
      audience: `${domain}/api/v2/`,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to get management token: ${error}`);
  }

  const data = await response.json();
  return data.access_token;
}

// Ensure correct handler signature and returns
async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  // Rate limiting
  const rateLimitKey = getRateLimitKey(req);
  if (!checkRateLimit(rateLimitKey)) {
    res.status(429).json({
      error: 'Too many requests. Please try again later.',
      message: 'Too many requests. Please try again later.'
    });
    return;
  }

  // Validate input
  const result = schema.safeParse(req.body);
  if (!result.success) {
    const errorMessage = result.error.issues[0]?.message || 'Invalid input';
    res.status(400).json({ 
      error: errorMessage,
      message: errorMessage
    });
    return;
  }

  const { _email } = result.data;
  const domain = process.env['AUTH0_ISSUER_BASE_URL'];

  if (!domain) {
    res.status(500).json({
      error: 'Authentication service not configured',
      message: 'Authentication service not configured'
    });
    return;
  }

  try {
    // Get management API token
    const managementToken = await getAuth0ManagementToken();

    // Create password change ticket using Auth0 Management API
    const createTicketResponse = await fetch(`${domain}/api/v2/tickets/password-change`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${managementToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email.toLowerCase(),
        connection: 'Username-Password-Authentication', // Default Auth0 database connection
        client_id: process.env['AUTH0_CLIENT_ID'],
        result_url: `${process.env['AUTH0_BASE_URL'] || process.env['NEXT_PUBLIC_APP_URL']}/login?reset=success`,
        includeEmailInRedirect: false,
        ttl_sec: 432000, // 5 days (as per Auth0 default)
        mark_email_as_verified: false
      }),
    });

    if (!createTicketResponse.ok) {
      const errorData = await createTicketResponse.json();
      logErrorToProduction('Auth0 password reset ticket creation failed:', { data: errorData });
      if (errorData.statusCode === 404 || errorData.message?.includes('user does not exist')) {
        res.status(200).json({
          message: 'If your email address is registered, you will receive a password reset link shortly.'
        });
        return;
      }
      if (errorData.statusCode === 429) {
        res.status(429).json({
          error: 'Too many requests. Please try again later.',
          message: 'Too many requests. Please try again later.'
        });
        return;
      }
      res.status(500).json({
        error: 'Failed to send reset link. Please try again.',
        message: 'Failed to send reset link. Please try again.'
      });
      return;
    }

    logInfo('Password reset ticket created successfully for:', { data:  { data: email } });
    res.status(200).json({
      message: 'If your email address is registered, you will receive a password reset link shortly.',
      success: true
    });
    return;
  } catch (err: unknown) {
    logErrorToProduction('Password reset error:', { data: err });
    res.status(500).json({
      error: 'Failed to send reset link. Please try again.',
      message: 'Failed to send reset link. Please try again.'
    });
    return;
  }
}

export default withErrorLogging(handler); 