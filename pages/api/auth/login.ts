import { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL as string;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY as string;
const supabase = createClient(supabaseUrl, serviceKey);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { email, password } = req.body as { email: string; password: string };

  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error || !data?.session) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const token = data.session.access_token;
  res.setHeader('Set-Cookie', `token=${token}; HttpOnly; Path=/`);
  return res.status(200).json({ user: data.user, token });
}
