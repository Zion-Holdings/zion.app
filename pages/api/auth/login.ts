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
// For auth operations like signInWithPassword, Supabase typically uses the anon key.
// However, if this client instance were to be used for other admin operations
// within the same file (which it isn't currently), a service_role_key might be intended.
// Given the task is to standardize backend API routes to service_role_key for data access,
// but auth operations are special, this is a point of attention.
// For strictness and consistency with the subtask, we'll use SERVICE_ROLE_KEY here,
// but acknowledge that for `signInWithPassword`, the key used by `createClient`
// doesn't alter the auth behavior itself (it's governed by Supabase internal policies).
// The more significant aspect is that this client *could* be used for privileged operations
// if it were initialized with a service key.
// If this file *only* ever does auth and never data access, an anon key client would be fine too.
// Sticking to SERVICE_ROLE_KEY as per broader instruction for backend routes.
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceKey) {
  const errorMessage = 'CRITICAL: SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY is missing for backend auth API. Service cannot start.';
  console.error(errorMessage);
  throw new Error(errorMessage);
}

const supabase = createClient(supabaseUrl, serviceKey);

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
