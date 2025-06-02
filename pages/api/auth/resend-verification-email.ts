import { createClient, AuthError } from '@supabase/supabase-js'; // Import AuthError
import type { NextApiRequest, NextApiResponse } from 'next';

// Define a type for the expected successful response
interface SuccessResponse {
  message: string;
}

// Define a type for error responses
interface ErrorResponse {
  message: string;
  error?: string; // Optional error details
}

const supabaseUrl = process.env.SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceKey) {
  const errorMessage = 'CRITICAL: SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY is missing for backend auth API. Service cannot start.';
  console.error(errorMessage);
  throw new Error(errorMessage);
}
const supabase = createClient(supabaseUrl, serviceKey);

export default async function handler(req: NextApiRequest, res: NextApiResponse<SuccessResponse | ErrorResponse>) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }

  try {
    let jwt = req.cookies['supabase-auth-token'];
    if (!jwt) {
      const commonSupabaseCookieKey = Object.keys(req.cookies).find(key => key.startsWith('sb-') && key.endsWith('-access-token'));
      if (commonSupabaseCookieKey) {
        jwt = req.cookies[commonSupabaseCookieKey];
      }
    }
    // Also check Authorization header as a fallback
    if(!jwt && req.headers.authorization?.startsWith('Bearer ')) {
        jwt = req.headers.authorization.split('Bearer ')[1];
    }


    if (!jwt) {
      console.log('No Supabase auth token cookie found in resend-verification-email.');
      return res.status(401).json({ message: 'Unauthorized: Auth token not found.' });
    }

    const { data: { user }, error: authError } = await supabase.auth.getUser(jwt);

    if (authError || !user) {
      console.error('Auth error in resend-verification-email:', authError?.message);
      return res.status(401).json({ message: authError?.message || 'Unauthorized: No active session or auth error.' });
    }

    if (!user.email) {
      console.error('User object from Supabase does not contain an email for resend.');
      return res.status(400).json({ message: 'Bad Request: User email not found in token.' });
    }

    const siteURL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    const emailRedirectTo = `${siteURL}/auth/verify-email`;

    const { error: resendError } = await supabase.auth.resend({
        type: 'signup', 
        email: user.email,
        options: {
            emailRedirectTo: emailRedirectTo,
        }
    });

    if (resendError) {
      console.error('Supabase resend error:', resendError.message);
      if (resendError.message.toLowerCase().includes('already confirmed')) {
        return res.status(400).json({ message: 'Email is already verified.' });
      }
      if (resendError.message.toLowerCase().includes('rate limit')) { 
        return res.status(429).json({ message: 'Rate limit exceeded. Please try again later.' });
      }
      return res.status(resendError instanceof AuthError ? resendError.status || 500 : 500).json({ message: resendError.message || 'Failed to resend verification email.' });
    }

    return res.status(200).json({ message: 'Verification email successfully resent to ' + user.email + '.' });

  } catch (error: unknown) {
    let message = 'Internal server error';
    let errorDetails: string | undefined;

    if (error instanceof Error) {
      message = error.message;
      errorDetails = error.stack; // Or some other detail
    } else if (typeof error === 'string') {
      message = error;
    }
    console.error('Unexpected error in resend-verification-email:', error);
    return res.status(500).json({ message, error: errorDetails });
  }
}
