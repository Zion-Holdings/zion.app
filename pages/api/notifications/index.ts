import { createClient } from '@supabase/supabase-js';

// Generic request/response types
interface Req {
  method?: string;
  query?: { userId?: string };
  body?: any;
}
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

  const userId = req.query?.userId;
  if (!userId) {
    res.status(400).json({ error: 'Missing userId' });
    return;
  }

  const { data, error } = await supabase
    .from('notifications')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });

  if (error) {
    res.status(500).json({ error: error.message });
    return;
  }

  res.status(200).json(data || []);
}
