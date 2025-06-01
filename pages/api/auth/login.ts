import { createClient } from '@supabase/supabase-js';

// Generic request/response types to avoid requiring Next.js
type Req = {
  method?: string;
  body?: any;
};

type Res = {
  statusCode?: number;
  setHeader: (name: string, value: string) => void;
  end: (data?: any) => void;
};

interface JsonRes extends Res {
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
    if (/Email not confirmed/i.test(error.message)) {
      res.status(403).json({
        error: "Email not confirmed. Please check your inbox to verify your email.",
        code: "EMAIL_NOT_CONFIRMED"
      });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
    return;
  }

  if (!data?.session) {
    // This case should ideally be caught by the 'error' above, but as a fallback:
    res.status(401).json({ error: 'Invalid credentials - no session data' });
    return;
  }

  const accessToken = data.session.access_token;
  const refreshToken = data.session.refresh_token;

  // Set HttpOnly cookie for the access token
  res.setHeader('Set-Cookie', `authToken=${accessToken}; HttpOnly; Path=/; Secure; SameSite=Strict`);

  res.status(200).json({ user: data.user, accessToken, refreshToken });
}
