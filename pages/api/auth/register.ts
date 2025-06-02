import { createClient, User, Session, AuthError, AuthApiError, UserIdentity } from '@supabase/supabase-js';
import { z } from 'zod';
import { withErrorLogging } from '@/utils/withErrorLogging';
import type { NextApiRequest, NextApiResponse } from 'next';

// Define expected request body structure via Zod schema
const registerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});
type RegisterRequestBody = z.infer<typeof registerSchema>;

// Define possible success/error response structures
interface RegisterSuccessResponse {
  message?: string;
  emailVerificationRequired?: boolean;
  user: { // Subset of Supabase User relevant to client
    id: string;
    email?: string;
    display_name?: string;
    // Add other relevant fields from data.user or data.user.user_metadata
  };
  session?: Session | null; // Supabase Session object
  token?: string;
}
interface ErrorResponse {
  message: string;
  error?: string; // For additional error details if any
}

const supabaseUrl = process.env.SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceKey) {
  const errorMessage = 'CRITICAL: SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY is missing for backend auth API. Service cannot start.';
  console.error(errorMessage);
  throw new Error(errorMessage);
}
const supabase = createClient(supabaseUrl, serviceKey);


async function handler(req: NextApiRequest, res: NextApiResponse<RegisterSuccessResponse | ErrorResponse>) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }

  const result = registerSchema.safeParse(req.body);
  if (!result.success) {
    const message = result.error.issues[0]?.message || 'Invalid input';
    return res.status(400).json({ message });
  }

  const { name, email, password } = result.data;
  try {
    let data: { user: User | null; session: Session | null } | null = null;
    let error: AuthError | null = null;
    
    try {
      const siteURL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
      const signUpResponse = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { display_name: name }, // This goes into user_metadata
          emailRedirectTo: `${siteURL}/auth/verify-email`,
        },
      });
      data = signUpResponse.data;
      error = signUpResponse.error;
    } catch (networkErr: unknown) {
      console.error('signUp network error', networkErr);
      return res.status(503).json({ message: 'Network error. Please try again.' });
    }

    if (error) {
      let message = error.message;
      let status = error instanceof AuthApiError ? error.status : 400;

      if (status === 400 && /user already registered/i.test(message)) {
        status = 409; 
        message = 'Email already registered.';
      } else if (status === 400 && /weak password/i.test(message)) {
        message = 'Password is too weak. Please choose a stronger password.';
      } else if (!(error instanceof AuthApiError)) {
        console.error('Supabase signUp error without specific status:', error);
        status = 500; 
        message = 'An unexpected error occurred during registration.';
      }
      
      if (status !== 409 && status !== 400) console.error('Registration error:', error);
      return res.status(status).json({ message });
    }

    if (data?.user) {
      // Check for email verification requirement:
      // A session is typically only created if email is confirmed or auto-confirmed.
      // Supabase User object's identities array can be checked.
      // If identities is null/empty OR no identity has email_verified true (for email provider)
      let emailVerificationRequired = true;
      if (data.session) { // If session exists, email is typically confirmed
        emailVerificationRequired = false;
      } else if (data.user.identities && data.user.identities.length > 0) {
        emailVerificationRequired = !data.user.identities.some(
          (identity: UserIdentity) => identity.identity_data && (identity.identity_data as {email_verified?: boolean}).email_verified
        );
      } else if (data.user.email_confirmed_at) { // Fallback if identities is not as expected
         emailVerificationRequired = false;
      }


      const responseJson: RegisterSuccessResponse = {
        user: {
          id: data.user.id,
          email: data.user.email,
          display_name: data.user.user_metadata?.display_name,
        },
        session: data.session,
      };

      if (data.session?.access_token) {
        responseJson.token = data.session.access_token;
        res.setHeader('Set-Cookie', `authToken=${data.session.access_token}; HttpOnly; Path=/; Secure; SameSite=Strict; Max-Age=${data.session.expires_in}`);
      }

      if (emailVerificationRequired) {
        responseJson.message = "Registration successful. Please check your email to verify your account.";
        responseJson.emailVerificationRequired = true;
      } else {
        responseJson.message = "Registration successful."; // Or remove if no message needed for auto-confirmed
        responseJson.emailVerificationRequired = false;
      }
      return res.status(201).json(responseJson);

    } else {
      console.error('Unexpected state: No error but no user data after signUp.');
      return res.status(500).json({ message: 'An unexpected error occurred during registration.' });
    }
  } catch (err: unknown) {
    console.error('Outer catch block error:', err);
    const message = err instanceof Error ? err.message : 'An internal server error occurred.';
    return res.status(500).json({ message });
  }
}

export default withErrorLogging(handler);
