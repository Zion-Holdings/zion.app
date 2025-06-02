import { createClient, AuthError, AuthApiError } from '@supabase/supabase-js'; // Import Supabase error types
import type { NextApiRequest, NextApiResponse } from 'next';
import type { User, Session } from '@supabase/supabase-js';

// Define expected request body structure
interface LoginRequestBody {
  email?: string;
  password?: string;
}

// Define possible success/error response structures
interface LoginSuccessResponse {
  user: User | null; // Supabase User object
  accessToken: string;
  refreshToken: string;
}
interface ErrorResponse {
  error: string;
  code?: string; // Optional error code for client-side handling
}


const supabaseUrl = process.env.SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY; // Using service role key as per previous files

if (!supabaseUrl || !serviceKey) {
  const errorMessage = 'CRITICAL: SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY is missing for backend auth API. Service cannot start.';
  console.error(errorMessage);
  throw new Error(errorMessage);
}

const supabase = createClient(supabaseUrl, serviceKey);

export default async function handler(req: NextApiRequest, res: NextApiResponse<LoginSuccessResponse | ErrorResponse>) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  const { email, password } = req.body as LoginRequestBody;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required.' });
  }
  
  const normalizedEmail = email.toLowerCase();

  const { data, error } = await supabase.auth.signInWithPassword({
    email: normalizedEmail,
    password,
  });

  if (error) {
    console.error('Supabase signInWithPassword error:', error);

    if (error.message && /Email not confirmed/i.test(error.message)) {
      return res.status(403).json({
        error: "Email not confirmed. Please check your inbox to verify your email.",
        code: "EMAIL_NOT_CONFIRMED"
      });
    } else if (error.message && /Invalid login credentials/i.test(error.message)) {
      return res.status(401).json({ error: 'Invalid credentials', code: 'INVALID_CREDENTIALS' });
    } else if (error instanceof AuthApiError && error.status === 400) {
      // AuthApiError is a specific type of AuthError that has a status
      return res.status(401).json({ error: 'Invalid credentials', code: 'INVALID_CREDENTIALS' });
    } else {
      const status = (error as AuthApiError)?.status || 500; // Try to get status if it's an AuthApiError
      return res.status(status).json({ error: error.message || 'An unexpected error occurred during login.', code: 'LOGIN_FAILED' });
    }
  }

  if (!data?.session || !data.user) { // data.user should also be present
    return res.status(401).json({ error: 'Invalid credentials - no session data', code: 'NO_SESSION_DATA' });
  }

  const accessToken = data.session.access_token;
  const refreshToken = data.session.refresh_token;

  // Set HttpOnly cookie for the access token
  // Note: In a real app, consider cookie options like Max-Age, Secure in production, etc.
  res.setHeader('Set-Cookie', `authToken=${accessToken}; HttpOnly; Path=/; Secure; SameSite=Strict`);

  return res.status(200).json({ user: data.user, accessToken, refreshToken });
}
