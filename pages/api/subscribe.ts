import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../utils/supabase/client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');
  const { email } = req.body || {};
  if (!email || typeof email !== 'string') return res.status(400).send('Invalid email');

  try {
    // Basic validation
    const normalized = email.trim().toLowerCase();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized);
    if (!isValid) return res.status(400).send('Invalid email format');

    // If placeholders are still used, just accept without DB write
    const isPlaceholder = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').includes('placeholder');
    if (isPlaceholder) {
      return res.status(200).json({ ok: true, simulated: true });
    }

    const { data, error } = await supabase
      .from('email_signups')
      .insert({ email: normalized, source: 'mobile-launch', created_at: new Date().toISOString() })
      .select('*')
      .single();

    if (error) {
      if (error.message && error.message.includes('duplicate')) {
        return res.status(200).json({ ok: true, duplicate: true });
      }
      return res.status(500).send(error.message || 'Database error');
    }

    return res.status(200).json({ ok: true, data });
  } catch (e: any) {
    return res.status(500).send(e?.message || 'Unexpected error');
  }
}