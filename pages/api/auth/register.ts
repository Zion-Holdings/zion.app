import { createClient } from '@supabase/supabase-js';
import { z } from 'zod';
import { withErrorLogging } from '@/utils/withErrorLogging';

// Generic request/response types so this file can run in Node or Next.js
type Req = { method?: string; body?: any };
interface JsonRes {
  statusCode?: number;
  setHeader: (name: string, value: string) => void;
  end: (data?: any) => void;
  status: (code: number) => JsonRes;
  json: (data: any) => void;
}

const supabaseUrl =
  process.env.SUPABASE_URL ||
  process.env.VITE_SUPABASE_URL ||
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  '';
const serviceKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  process.env.VITE_SUPABASE_ANON_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  '';
const supabase = createClient(supabaseUrl, serviceKey);

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

async function handler(req: Req, res: JsonRes) {
  if (req.method !== 'POST') {
    res.status(405).end();
    return;
  }

  const result = schema.safeParse(req.body);
  if (!result.success) {
    const message = result.error.issues[0]?.message || 'Invalid input';
    res.status(400).json({ message });
    return;
  }

  const { name, email, password } = result.data;
  try {
    let data;
    let error;
    try {
      const siteURL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
      ({ data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { display_name: name },
          emailRedirectTo: `${siteURL}/auth/verify-email`,
        },
      }));
    } catch (networkErr: any) {
      console.error('signUp network error', networkErr);
      res.status(503).json({ message: 'Network error. Please try again.' });
      return;
    }

    // Handle errors from supabase.auth.signUp
    if (error) {
      let message = error.message;
      let status = error.status || 400; // Default to 400 if status is not available

      if (status === 400 && /user already registered/i.test(message)) {
        status = 409; // Conflict
        message = 'Email already registered.';
      } else if (status === 400 && /weak password/i.test(message)) {
        // Status is already 400, but we provide a more specific message
        message = 'Password is too weak. Please choose a stronger password.';
      } else if (!error.status) {
        // Handle cases where error.status is undefined (e.g. network errors not caught by the previous block)
        console.error('Supabase signUp error without status:', error);
        status = 500; // Internal Server Error for unexpected errors
        message = 'An unexpected error occurred during registration.';
      }
      // It's good practice to log the original error for debugging
      if (status !== 409 && status !== 400) console.error('Registration error:', error);

      res.status(status).json({ message });
      return;
    }

    // If there's no error and data.user exists
    if (data.user) {
      const emailVerificationRequired = !data.session && data.user && (!data.user.identities || data.user.identities.length === 0 || !data.user.identities.some(identity => identity.identity_data?.email_verified || identity.identity_data?.email));

      // Prepare base response object
      const responseJson: {
        message?: string;
        emailVerificationRequired?: boolean;
        user: any;
        session?: any;
        token?: string;
      } = {
        user: {
          id: data.user.id,
          email: data.user.email,
          display_name: data.user.user_metadata?.display_name,
          // You can add other relevant user fields from data.user here
          // For example: created_at: data.user.created_at
        },
      };

      if (data.session?.access_token) {
        responseJson.session = data.session;
        responseJson.token = data.session.access_token;
        // Set HttpOnly cookie (as in the original code)
        res.setHeader('Set-Cookie', `authToken=${data.session.access_token}; HttpOnly; Path=/; Secure; SameSite=Strict; Max-Age=${data.session.expires_in}`);
      }

      if (emailVerificationRequired) {
        responseJson.message = "Registration successful. Please check your email to verify your account.";
        responseJson.emailVerificationRequired = true;
        // If data.session was null, responseJson.token will be undefined here.
        // This is consistent with a token not being available if verification is required AND no session was created by Supabase.
      } else {
        // Email is auto-verified or verification is not strictly needed.
        // A session and token should ideally exist here.
        if (!data.session?.access_token) {
             // This state (no email verification required but no session/token) is unexpected.
             console.error('User session not found during registration when email verification is not required.');
             // Depending on strictness, you might want to return an error or handle this.
             // For now, the response will proceed without session/token if they are missing.
        }
        // If a general success message is desired when no verification is needed:
        // responseJson.message = "Registration successful.";
      }
      res.status(201).json(responseJson);

    } else {
      // Handle unexpected errors (as in existing code)
      console.error('Unexpected state: No error but no user data after signUp.');
      res.status(500).json({ message: 'An unexpected error occurred during registration.' });
    }
  } catch (err: any) {
    console.error('Outer catch block error:', err);
    res.status(500).json({ message: err.message || 'An internal server error occurred.' });
  }
}

export default withErrorLogging(handler);
