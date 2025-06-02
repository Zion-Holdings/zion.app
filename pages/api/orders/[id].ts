import { createClient } from '@supabase/supabase-js';
import { serializeOrder } from './serializer';

type Req = { method?: string; query?: { id?: string } };
interface JsonRes {
  status: (code: number) => JsonRes;
  json: (data: any) => void;
  end: (data?: any) => void;
  setHeader: (name: string, value: string) => void;
}

const supabaseUrl = process.env.SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceKey) {
  const errorMessage = 'CRITICAL: SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY is missing for backend API (orders/[id]). Service cannot start.';
  console.error(errorMessage);
  throw new Error(errorMessage);
}
const supabase = createClient(supabaseUrl, serviceKey);

export default async function handler(req: Req, res: JsonRes) {
  if (req.method !== 'GET') {
    res.status(405).end();
    return;
  }

  const id = req.query?.id;
  if (!id) {
    res.status(400).json({ error: 'Missing id' });
    return;
  }

  const { data, error } = await supabase
    .from('orders')
    .select('id, created_at, total, status, invoice_url, tracking_number, tracking_status, tracking_events, items, shipping_address')
    .eq('id', id)
    .single();

  if (error || !data) {
    res.status(404).json({ error: error?.message || 'Order not found' });
    return;
  }

  res.status(200).json(serializeOrder(data));
}
