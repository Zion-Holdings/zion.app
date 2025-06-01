import { createClient } from '@supabase/supabase-js';
import { withErrorLogging } from '@/utils/withErrorLogging';

type Req = { method?: string; body?: any };
interface JsonRes {
  status: (code: number) => JsonRes;
  json: (data: any) => void;
  end: (data?: any) => void;
  setHeader: (name: string, value: string) => void;
}

const supabaseUrl =
  process.env.SUPABASE_URL ||
  process.env.VITE_SUPABASE_URL ||
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  '';
const serviceKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  process.env.VITE_SUPABASE_ANON_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  '';
const supabase = createClient(supabaseUrl, serviceKey);

async function handler(req: Req, res: JsonRes) {
  if (req.method !== 'POST') {
    res.status(405).end();
    return;
  }

  const { userId, amount, orderId, reason = 'order' } = req.body || {};
  if (!userId || typeof amount !== 'number') {
    res.status(400).json({ error: 'Missing userId or amount' });
    return;
  }

  const delta = Math.round(amount);
  const { error } = await supabase.from('points_ledger').insert({
    user_id: userId,
    delta,
    reason,
    order_id: orderId || null,
  });

  if (error) {
    res.status(500).json({ error: error.message });
    return;
  }

  // Update profile points balance
  const { data: profile } = await supabase
    .from('profiles')
    .select('points')
    .eq('id', userId)
    .single();

  const current = profile?.points ?? 0;
  await supabase
    .from('profiles')
    .update({ points: current + delta })
    .eq('id', userId);

  res.status(200).json({ success: true });
}

export default withErrorLogging(handler);
