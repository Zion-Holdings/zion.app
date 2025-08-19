import { createClient } from '@supabase/supabase-js';
import { z } from 'zod';

// Generic request/response types so this file can run in Node or Next.js
type Req = { method?: string; body?: any };
interface JsonRes {
  statusCode?: number;
  setHeader: (name: string, value: string) => void;
  end: (data?: any) => void;
  status: (code: number) => JsonRes;
  json: (data: any) => void;
}

const supabaseUrl = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL || '';
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, serviceKey);

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

export default async function handler(req: Req, res: JsonRes) {
  if (req.method !== 'POST') {
    res.status(405).end();
    return;
  }

  const result = schema.safeParse(req.body);
  if (!result.success) {
    const message = result.error.issues[0]?.message || 'Invalid input';
    res.status(400).json({ error: message });
    return;
  }

  const { name, email, password } = result.data;
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { display_name: name } },
    });

    if (error || !data.user) {
      const status = error?.status || (error?.message?.includes('already registered') ? 409 : 400);
      res.status(status).json({ error: error?.message || 'Registration failed' });
      return;
    }

    const token = data.session?.access_token;
    if (token) {
      res.setHeader('Set-Cookie', `token=${token}; HttpOnly; Path=/`);
    }
    res.status(201).json({ user: data.user, token });
  } catch (err: any) {
    res.status(500).json({ error: err.message || 'Registration failed' });
  }
}
