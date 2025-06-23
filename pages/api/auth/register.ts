import type { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';
import { withErrorLogging } from '@/utils/withErrorLogging';

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must include an uppercase letter')
    .regex(/[a-z]/, 'Password must include a lowercase letter')
    .regex(/[0-9]/, 'Password must include a number'),
});

async function getAuth0ManagementToken() {
  const domain = process.env.AUTH0_ISSUER_BASE_URL;
  const clientId = process.env.AUTH0_CLIENT_ID;
  const clientSecret = process.env.AUTH0_CLIENT_SECRET;

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

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Validate input
  const result = schema.safeParse(req.body);
  if (!result.success) {
    const errorMessage = result.error.errors[0].message;
    return res.status(400).json({ 
      error: errorMessage,
      message: errorMessage
    });
  }

  const { name, email, password } = result.data;
  const domain = process.env.AUTH0_ISSUER_BASE_URL;

  if (!domain) {
    return res.status(500).json({
      error: 'Authentication service not configured',
      message: 'Authentication service not configured'
    });
  }

  try {
    // Get management API token
    const managementToken = await getAuth0ManagementToken();

    // Create user in Auth0
    const createUserResponse = await fetch(`${domain}/api/v2/users`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${managementToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email.toLowerCase(),
        password,
        name,
        connection: 'Username-Password-Authentication', // Default Auth0 database connection
        email_verified: false,
        verify_email: true, // Send verification email
        user_metadata: {
          display_name: name
        }
      }),
    });

    if (!createUserResponse.ok) {
      const errorData = await createUserResponse.json();
      console.error('Auth0 user creation failed:', errorData);
      
      // Handle specific Auth0 errors
      if (errorData.statusCode === 409 || errorData.message?.includes('already exists')) {
        return res.status(409).json({
          error: 'Email already registered',
          message: 'Email already registered'
        });
      }
      
      if (errorData.message?.includes('password')) {
        return res.status(400).json({
          error: 'Password does not meet requirements',
          message: 'Password does not meet requirements'
        });
      }

      return res.status(500).json({
        error: 'Failed to create account',
        message: 'Failed to create account'
      });
    }

    const userData = await createUserResponse.json();
    
    return res.status(201).json({
      message: 'Registration successful. Please check your email to verify your account.',
      emailVerificationRequired: true,
      user: {
        id: userData.user_id,
        email: userData.email,
        display_name: userData.name,
      },
    });

  } catch (err: any) {
    console.error('Registration error:', err);
    return res.status(500).json({
      error: 'Registration failed. Please try again.',
      message: 'Registration failed. Please try again.'
    });
  }
}

export default withErrorLogging(handler); 