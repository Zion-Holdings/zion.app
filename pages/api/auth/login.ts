import { createClient } from '@supabase/supabase-js';

// Generic request/response types to avoid requiring Next.js
type Req = {
  method?: string;
  body?: unknown;
};

type Res = {
  statusCode?: number;
  setHeader: (name: string, value: string) => void;
  end: (data?: unknown) => void;
};

interface JsonRes extends Res {
  status: (code: number) => JsonRes;
  json: (data: unknown) => void;
}

const supabaseUrl = process.env.SUPABASE_URL;
// For user sign-in (signInWithPassword), the ANONYMOUS key is appropriate and recommended.
// It operates within the user's permission scope and relies on Supabase's
// built-in authentication mechanisms. Using a service role key here would be unnecessary
// and against the principle of least privilege for this specific operation.
const anonKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !anonKey) {
  const errorMessage = 'CRITICAL: SUPABASE_URL or SUPABASE_ANON_KEY is missing for backend auth API. Service cannot start.';
  console.error(errorMessage);
  throw new Error(errorMessage);
}

const supabase = createClient(supabaseUrl, anonKey);

export default async function handler(req: Req, res: JsonRes) {
  if (req.method !== 'POST') {
    res.status(405).end();
    return;
  }

  const { email, password } = req.body as { email: string; password: string };

  // Normalize email before attempting lookup/login
  const normalizedEmail = email.toLowerCase();

  const { data, error } = await supabase.auth.signInWithPassword({
    email: normalizedEmail,
    password,
  });

  if (error) {
    // Log the full error for debugging purposes on the server
    console.error('Supabase signInWithPassword error:', error);

    if (error.message && /Email not confirmed/i.test(error.message)) {
      // This check seems to be good, keep it.
      res.status(403).json({
        error: "Email not confirmed. Please check your inbox to verify your email.",
        code: "EMAIL_NOT_CONFIRMED"
      });
    } else if (error.message && /Invalid login credentials/i.test(error.message)) {
      // This is a common Supabase error for wrong password or user not found
      res.status(401).json({ error: 'Invalid credentials', code: 'INVALID_CREDENTIALS' });
    } else if (error.name === 'AuthApiError' && error.status === 400) {
      // Catchall for other Bad Request errors from Supabase Auth, often due to invalid input client-side but sometimes for other auth issues
      // Treat as invalid credentials if not more specific.
      res.status(401).json({ error: 'Invalid credentials', code: 'INVALID_CREDENTIALS' });
    } else {
      // Generic fallback for other errors
      res.status(error.status || 500).json({ error: error.message || 'An unexpected error occurred during login.', code: 'LOGIN_FAILED' });
    }
    return;
  }

  if (!data?.session) {
    // This case should ideally be caught by the 'error' above, but as a fallback:
    res.status(401).json({ error: 'Invalid credentials - no session data', code: 'NO_SESSION_DATA' });
    return;
  }

  const accessToken = data.session.access_token;
  const refreshToken = data.session.refresh_token;

  // Set HttpOnly cookie for the access token
  res.setHeader('Set-Cookie', `authToken=${accessToken}; HttpOnly; Path=/; Secure; SameSite=Strict`);

  res.status(200).json({ user: data.user, accessToken, refreshToken });
}
