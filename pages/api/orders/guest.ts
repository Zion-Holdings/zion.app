import { createClient } from '@supabase/supabase-js';
import { withErrorLogging } from '@/utils/withErrorLogging';
import { randomUUID } from 'crypto';

interface Req { method?: string; body?: any }
interface JsonRes { status:(c:number)=>JsonRes; json:(d:any)=>void; end:(d?:any)=>void; setHeader:(n:string,v:string)=>void }

const supabaseUrl = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, serviceKey);

async function handler(req: Req, res: JsonRes) {
  if (req.method !== 'POST') {
    res.status(405).end();
    return;
  }

  const { email, items = [] } = req.body || {};
  if (!email) {
    res.status(400).json({ error: 'Missing email' });
    return;
  }

  const token = randomUUID();
  const total = Array.isArray(items) ? items.reduce((s: number, i: any) => s + (i.price || 0) * (i.quantity || 1), 0) : 0;

  const { data, error } = await supabase
    .from('orders')
    .insert({ user_id: null, email, items, total, status: 'pending', token })
    .select('id')
    .single();

  if (error || !data) {
    res.status(500).json({ error: error?.message || 'Failed to create order' });
    return;
  }

  res.status(200).json({ orderId: data.id, token });
}

export default withErrorLogging(handler);
