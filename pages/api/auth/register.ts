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
  userType: z.string().optional(),
  source: z.string().optional(),
  metadata: z.object({
    partnerProgram: z.boolean().optional(),
    signupType: z.string().optional(),
  }).optional(),
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
  console.log('Registration API called with:', { 
    method: req.method, 
    body: req.body ? { 
      name: req.body.name, 
      email: req.body.email?.toLowerCase(), 
      hasPassword: !!req.body.password,
      userType: req.body.userType,
      source: req.body.source 
    } : 'no body' 
  });

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Validate input
  const result = schema.safeParse(req.body);
  if (!result.success) {
    const errorMessage = result.error.errors[0].message;
    console.error('Registration validation failed:', result.error.errors);
    return res.status(400).json({ 
      error: errorMessage,
      message: errorMessage
    });
  }

  const { name, email, password, userType, source, metadata } = result.data;
  const domain = process.env.AUTH0_ISSUER_BASE_URL;

  console.log('Auth0 domain:', domain ? `${domain.substring(0, 20)}...` : 'NOT SET');

  if (!domain) {
    console.error('AUTH0_ISSUER_BASE_URL not configured');
    return res.status(500).json({
      error: 'Authentication service not configured',
      message: 'Authentication service not configured'
    });
  }

  try {
    console.log('Getting Auth0 management token...');
    // Get management API token
    const managementToken = await getAuth0ManagementToken();
    console.log('Management token obtained successfully');

    // Create user in Auth0
    const userPayload = {
      email: email.toLowerCase(),
      password,
      name,
      connection: 'Username-Password-Authentication', // Default Auth0 database connection
      email_verified: false,
      verify_email: true, // Send verification email
      user_metadata: {
        display_name: name,
        userType: userType || 'user',
        signupSource: source || 'direct',
        ...(metadata && { partnerProgram: metadata.partnerProgram })
      },
      app_metadata: {
        ...(userType === 'partner' && { 
          role: 'partner',
          partnerProgram: true,
          partnerStatus: 'pending_approval'
        })
      }
    };

    console.log('Creating Auth0 user with payload:', { 
      email: userPayload.email, 
      name: userPayload.name, 
      connection: userPayload.connection,
      userType: userType || 'user'
    });

    const createUserResponse = await fetch(`${domain}/api/v2/users`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${managementToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userPayload),
    });

    console.log('Auth0 user creation response status:', createUserResponse.status);

    if (!createUserResponse.ok) {
      const errorData = await createUserResponse.json().catch(() => ({ message: 'Unknown error' }));
      console.error('Auth0 user creation failed:', {
        status: createUserResponse.status,
        statusText: createUserResponse.statusText,
        errorData
      });
      
      // Handle specific Auth0 errors
      if (errorData.statusCode === 409 || errorData.message?.includes('already exists')) {
        console.log('User already exists error');
        return res.status(409).json({
          error: 'Email already registered',
          message: 'Email already registered'
        });
      }
      
      if (errorData.message?.includes('password')) {
        console.log('Password requirements error');
        return res.status(400).json({
          error: 'Password does not meet requirements',
          message: 'Password does not meet requirements'
        });
      }

      // Check if it's an Auth0 configuration issue
      if (createUserResponse.status === 401) {
        console.error('Auth0 authentication failed - check client credentials');
        return res.status(500).json({
          error: 'Authentication service configuration error',
          message: 'Authentication service configuration error'
        });
      }

      if (createUserResponse.status === 403) {
        console.error('Auth0 authorization failed - check scopes and permissions');
        return res.status(500).json({
          error: 'Authentication service permissions error',
          message: 'Authentication service permissions error'
        });
      }

      console.error('Generic Auth0 user creation error');
      return res.status(500).json({
        error: `Failed to create account: ${errorData.message || 'Unknown error'}`,
        message: `Failed to create account: ${errorData.message || 'Unknown error'}`
      });
    }

    const userData = await createUserResponse.json();
    console.log('User created successfully:', { 
      userId: userData.user_id, 
      email: userData.email,
      name: userData.name 
    });
    
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
    console.error('Registration error:', {
      message: err.message,
      stack: err.stack,
      name: err.name,
      ...(err.cause && { cause: err.cause })
    });
    
    // Check if it's a network/connection error
    if (err.message?.includes('fetch') || err.code === 'ECONNREFUSED' || err.code === 'ENOTFOUND') {
      return res.status(500).json({
        error: 'Connection error to authentication service. Please try again.',
        message: 'Connection error to authentication service. Please try again.'
      });
    }
    
    // Check if it's an Auth0 configuration error
    if (err.message?.includes('Auth0 configuration missing')) {
      return res.status(500).json({
        error: 'Authentication service not properly configured',
        message: 'Authentication service not properly configured'
      });
    }
    
    return res.status(500).json({
      error: `Registration failed: ${err.message || 'Unknown error'}. Please try again.`,
      message: `Registration failed: ${err.message || 'Unknown error'}. Please try again.`
    });
  }
}

export default withErrorLogging(handler); 