import { createClient } from '@supabase/supabase-js';
import { serializeOrders } from './orders/serializer';

// Generic request/response types so the handler works in Node or Next.js
type Req = {
  method?: string;
  query?: { userId?: string; user_id?: string };
  headers?: Record<string, string | undefined>;
};
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

export default async function handler(req: Req, res: JsonRes) {
  if (req.method !== 'GET') {
    res.status(405).end();
    return;
  }

  const idParam = req.query?.userId || req.query?.user_id;
  const userId = idParam === 'me' ? (req.headers['x-user-id'] as string | undefined) : idParam;
  if (!userId) {
    res.status(400).json({ error: 'Missing userId' });
    return;
  }

  const { data, error } = await supabase
    .from('orders')
    .select('id, created_at, total, status, invoice_url')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });

  if (error) {
    res.status(500).json({ error: error.message });
    return;
  }

  res.status(200).json(serializeOrders(data || []));
}
