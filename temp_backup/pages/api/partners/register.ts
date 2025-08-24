import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../utils/supabase/server';

function sanitizeCode(input: string): string {
  return input.toLowerCase().replace(/[^a-z0-9-]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { name, niche, socials, payout_method, desired_code } = req.body || {};
  if (!name || !desired_code) return res.status(400).json({ error: 'Missing required fields' });

  const code = sanitizeCode(desired_code);
  if (!code) return res.status(400).json({ error: 'Invalid code' });

  const usingPlaceholder = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key') === 'placeholder-key';

  try {
    if (usingPlaceholder) {
      return res.status(200).json({ ok: true, code, status: 'pending', mock: true });
    }

    const supabase = getServerSupabase();

    const { data: existing, error: existingErr } = await supabase
      .from('partners')
      .select('code')
      .eq('code', code)
      .maybeSingle();

    if (existingErr) return res.status(500).json({ error: existingErr.message });
    if (existing) return res.status(409).json({ error: 'Code already taken' });

    const { error } = await supabase.from('partners').insert({
      code,
      name,
      niche: niche || null,
      socials: socials || null,
      payout_method: payout_method || null,
      status: 'pending',
      commission_rate: 0.15,
    });

    if (error) return res.status(500).json({ error: error.message });

    return res.status(200).json({ ok: true, code, status: 'pending' });
  } catch (e: any) {
    return res.status(500).json({ error: e?.message });
  }
}