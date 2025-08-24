import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../utils/supabase/server';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const code = (req.query.code as string)?.toLowerCase();
  if (!code) return res.status(400).json({ error: 'Missing code' });

  const usingPlaceholder = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key') === 'placeholder-key';

  try {
    if (usingPlaceholder) {
      const csv = 'event,timestamp\nvisit,2025-01-01T00:00:00Z\nsignup,2025-01-02T00:00:00Z';
      res.setHeader('Content-Type', 'text/csv');
      res.setHeader('Content-Disposition', `attachment; filename="${code}-referrals.csv"`);
      return res.status(200).send(csv);
    }

    const supabase = getServerSupabase();
    const { data, error } = await supabase
      .from('referral_events')
      .select('event, created_at')
      .eq('partner_code', code)
      .order('created_at', { ascending: false });

    if (error) return res.status(500).json({ error: error.message });

    const rows = [['event', 'timestamp'], ...(data || []).map((r: any) => [r.event, r.created_at])];
    const csv = rows.map(r => r.join(',')).join('\n');

    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', `attachment; filename="${code}-referrals.csv"`);
    return res.status(200).send(csv);
  } catch (e: any) {
    return res.status(500).json({ error: e?.message });
  }
}