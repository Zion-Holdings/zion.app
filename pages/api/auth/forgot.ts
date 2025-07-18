import type { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';
import { withErrorLogging } from '@/utils/withErrorLogging';
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';

// Input validation schema
const schema = z.object({
  email: z.string().email('Invalid email address'),
});

// Rate limiting - simple in-memory store (for production, use Redis or database)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

const RATE_LIMIT = {
  MAX_REQUESTS: 5,
  WINDOW_MS: 15 * 60 * 1000, // 15 minutes
};

function isRateLimited(email: string): boolean {
  const now = Date.now();
  const record = rateLimitStore.get(email);

  if (!record || now > record.resetTime) {
    rateLimitStore.set(email, { count: 1, resetTime: now + RATE_LIMIT.WINDOW_MS });
    return false;
  }

  if (record.count >= RATE_LIMIT.MAX_REQUESTS) {
    return true;
  }

  record.count++;
  return false;
}

export default withErrorLogging(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email } = schema.parse(req.body);

    // Check rate limiting
    if (isRateLimited(email)) {
      return res.status(429).json({
        error: 'Too many requests. Please try again later.',
        retryAfter: Math.ceil(RATE_LIMIT.WINDOW_MS / 1000)
      });
    }

    // Here you would typically:
    // 1. Check if the email exists in your database
    // 2. Generate a password reset token
    // 3. Send an email with the reset link
    // 4. Store the token with an expiration time

    logInfo('Password reset requested for email:', { email });

    // For now, we'll just return a success response
    // In a real implementation, you'd send an actual email
    res.status(200).json({
      message: 'If an account with that email exists, a password reset link has been sent.',
      success: true
    });

  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        error: 'Invalid input',
        details: error.errors
      });
    }

    logErrorToProduction('Password reset error:', error);
    res.status(500).json({
      error: 'Internal server error'
    });
  }
});