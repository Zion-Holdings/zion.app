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

const RETRYABLE_STATUS_CODES = [500, 502, 503, 504];
const MAX_RETRIES = 3;
const INITIAL_BACKOFF_MS = 250;

async function getAuth0ManagementToken() {
  const domain = process.env.AUTH0_ISSUER_BASE_URL;
  const clientId = process.env.AUTH0_CLIENT_ID;
  const clientSecret = process.env.AUTH0_CLIENT_SECRET;

  if (!domain || !clientId || !clientSecret) {
    throw new Error('Auth0 configuration missing: Ensure AUTH0_ISSUER_BASE_URL, AUTH0_CLIENT_ID, and AUTH0_CLIENT_SECRET are set.');
  }

  const audience = `${domain}/api/v2/`;
  const tokenUrl = `${domain}/oauth/token`;

  console.log(`Requesting Management API token from ${tokenUrl} for audience ${audience}`);

  let lastError: Error | null = null;

  for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
    try {
      const response = await fetch(tokenUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          grant_type: 'client_credentials',
          client_id: clientId,
          client_secret: clientSecret,
          audience: audience,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        if (!data.access_token) {
          console.error("Auth0 management token response did not include access_token:", data);
          // This is a non-retryable error, as the request was successful but the payload is wrong.
          throw new Error('Failed to get management token: No access_token in response.');
        }
        return data.access_token;
      }

      // Non-retryable errors
      if (!RETRYABLE_STATUS_CODES.includes(response.status) && response.status !== 429) { // 429 Too Many Requests might be retryable with backoff
        const errorText = await response.text();
        let errorMessage = `Failed to get management token: ${errorText}`;
        if (response.status === 401 || response.status === 403) {
          errorMessage = `Failed to get management token (${response.status}): ${errorText}. This usually indicates that the application is not authorized for the Auth0 Management API or lacks necessary permissions. Please check the Auth0 dashboard: Applications -> APIs -> Auth0 Management API -> Machine to Machine Applications. Ensure this application is authorized and has scopes like 'create:users'.`;
        } else if (response.status === 404) {
          errorMessage = `Failed to get management token (${response.status}): ${errorText}. This might indicate an incorrect Auth0 domain or audience configuration. Ensure AUTH0_ISSUER_BASE_URL is correct and the Management API (audience: ${audience}) is enabled for your tenant.`;
        }
        console.error("Error fetching Auth0 management token (non-retryable):", { status: response.status, statusText: response.statusText, errorBody: errorText });
        throw new Error(errorMessage);
      }

      // Retryable error
      const errorText = await response.text();
      lastError = new Error(`Failed to get management token (attempt ${attempt + 1}/${MAX_RETRIES}, status ${response.status}): ${errorText}`);
      console.warn(lastError.message);

    } catch (error: any) {
      lastError = error; // Capture network errors or other exceptions
      // If it's a non-retryable error thrown from within the try block (e.g., bad payload)
      if (error.message.startsWith('Failed to get management token: No access_token in response') ||
          error.message.includes('not authorized for the Auth0 Management API') ||
          error.message.includes('incorrect Auth0 domain or audience configuration')) {
        throw error;
      }
      console.warn(`Attempt ${attempt + 1}/${MAX_RETRIES} failed to get management token: ${error.message}`);
    }

    if (attempt < MAX_RETRIES - 1) {
      const delay = INITIAL_BACKOFF_MS * Math.pow(2, attempt);
      console.log(`Retrying in ${delay}ms...`);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }

  console.error("Failed to get Auth0 management token after multiple retries.");
  throw lastError || new Error("Failed to get Auth0 management token after multiple retries due to an unknown error.");
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
    const errorMessage = result.error.errors[0]?.message || 'Invalid input';
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