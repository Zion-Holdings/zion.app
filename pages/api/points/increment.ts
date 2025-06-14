import { createClient } from '@supabase/supabase-js';
import type { NextApiRequest, NextApiResponse } from 'next';
import { withErrorLogging } from '@/utils/withErrorLogging';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY as string;
const supabase = createClient(supabaseUrl, supabaseKey);

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end();
  }

  const { userId, amount, reason } = req.body || {};
  if (!userId || typeof amount !== 'number') {
    return res.status(400).json({ error: 'userId and amount required' });
  }

  try {
    const { error: insertError } = await supabase.from('points_ledger').insert({
      user_id: userId,
      delta: amount,
      reason: reason ?? null,
      order_id: null,
    });
    if (insertError) {
      console.error('points_ledger insert error:', insertError);
      return res.status(500).json({ error: 'Failed to log points' });
    }

    const { data: profile, error: fetchError } = await supabase
      .from('profiles')
      .select('points')
      .eq('id', userId)
      .single();
    if (fetchError) {
      console.error('fetch profile error:', fetchError);
      return res.status(500).json({ error: 'Failed to fetch user' });
    }

    const current = profile?.points ?? 0;
    const { error: updateError } = await supabase
      .from('profiles')
      .update({ points: current + amount })
      .eq('id', userId);
    if (updateError) {
      console.error('update points error:', updateError);
      return res.status(500).json({ error: 'Failed to update points' });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('unexpected increment error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

export default withErrorLogging(handler);
