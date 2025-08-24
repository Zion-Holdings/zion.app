import type { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';

export type AuthenticatedUser = { id: string };

export async function requireAuth(req: NextApiRequest, res: NextApiResponse): Promise<AuthenticatedUser> {
  const authHeader = req.headers.authorization || '';
  const token = authHeader.startsWith('Bearer ') ? authHeader.substring('Bearer '.length) : '';

  if (!token) {
    res.status(401).json({ error: 'Unauthorized' });
    throw new Error('Unauthorized');
  }

  const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    global: { headers: { Authorization: `Bearer ${token}` } },
  });

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user?.id) {
    res.status(401).json({ error: 'Unauthorized' });
    throw new Error('Unauthorized');
  }

  return { id: data.user.id };
}