import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../../utils/supabase/server';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { code, status, commission_rate } = req.body || {};
  if (!code) return res.status(400).json({ error: 'Missing code' });

  const usingPlaceholder = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key') === 'placeholder-key';

  try {
    if (usingPlaceholder) {
      return res.status(200).json({ ok: true, mock: true });
    }
    const supabase = getServerSupabase();
    const updates: any = {};
    if (status) updates.status = status;
    if (typeof commission_rate === 'number') updates.commission_rate = commission_rate;

    const { error } = await supabase.from('partners').update(updates).eq('code', String(code).toLowerCase());
    if (error) return res.status(500).json({ error: error.message });

    return res.status(200).json({ ok: true });
  } catch (e: any) {
    return res.status(500).json({ error: e?.message });
  }
}