import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../utils/supabase/server';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { code, amount } = req.body || {};
  if (!code) return res.status(400).json({ error: 'Missing code' });

  const usingPlaceholder = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key') === 'placeholder-key';

  try {
    if (usingPlaceholder) {
      return res.status(200).json({ ok: true, status: 'queued', mock: true });
    }

    const supabase = getServerSupabase();
    const { error } = await supabase.from('payout_requests').insert({
      partner_code: String(code).toLowerCase(),
      amount: Number(amount) || null,
      status: 'requested',
    });
    if (error) return res.status(500).json({ error: error.message });

    return res.status(200).json({ ok: true, status: 'requested' });
  } catch (e: any) {
    return res.status(500).json({ error: e?.message });
  }
}