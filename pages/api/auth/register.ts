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

    if (error || !data.user) {
      let message = error?.message || 'Registration failed';
      let status = error?.status || 400;
      if (/already\s*registered|exists/i.test(message)) {
        status = 409;
        message = 'Email already registered';
      } else if (/weak|strength/i.test(message)) {
        status = 400;
        message = 'Password is too weak';
      }
      res.status(status).json({ message });
      return;
    }
fix/auth-flow-email-verification
    // Check if email verification is required
    const emailVerificationRequired = !data.session && data.user && (!data.user.identities || data.user.identities.length === 0);

    if (emailVerificationRequired) {
      // Email verification is required
      res.status(201).json({
        message: "Registration successful. Please check your email to verify your account.",
        emailVerificationRequired: true,
        user: { email: data.user.email, id: data.user.id, display_name: data.user.user_metadata?.display_name },
      });
    } else {
      // Email is already verified or auto-confirmation is enabled
      const token = data.session?.access_token;
      if (token) {
        res.setHeader('Set-Cookie', `authToken=${token}; HttpOnly; Path=/; Secure; SameSite=Strict`);
      }
      res.status(201).json({ user: data.user, session: data.session });
main
    }
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ message: err.message || 'Registration failed' });
  }
}

export default withErrorLogging(handler);
