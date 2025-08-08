import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../utils/supabase/server';

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  const usingPlaceholder = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key') === 'placeholder-key';
  try {
    if (usingPlaceholder) {
      return res.status(200).json({
        leaders: [
          { code: 'aihub', profile_completions: 9 },
          { code: 'modelmasters', profile_completions: 7 },
          { code: 'promptpro', profile_completions: 5 },
        ],
      });
    }

    const supabase = getServerSupabase();
    const startOfMonth = new Date();
    startOfMonth.setDate(1);
    startOfMonth.setHours(0, 0, 0, 0);

    const { data, error } = await supabase
      .from('referral_events')
      .select('partner_code, event, created_at')
      .gte('created_at', startOfMonth.toISOString());
    if (error) return res.status(500).json({ error: error.message });

    const map = new Map<string, number>();
    for (const row of data || []) {
      if (row.event !== 'profile_completed') continue;
      const key = row.partner_code as string;
      map.set(key, (map.get(key) || 0) + 1);
    }

    const leaders = Array.from(map.entries())
      .map(([code, profile_completions]) => ({ code, profile_completions }))
      .sort((a, b) => b.profile_completions - a.profile_completions)
      .slice(0, 10);

    return res.status(200).json({ leaders });
  } catch (e: any) {
    return res.status(500).json({ error: e?.message });
  }
}