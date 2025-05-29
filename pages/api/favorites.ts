import { createClient } from '@supabase/supabase-js';

// Basic req/res types
type Req = { method?: string; body?: any; query?: any };
interface JsonRes {
  statusCode?: number;
  setHeader: (name: string, value: string) => void;
  end: (data?: any) => void;
  status: (code: number) => JsonRes;
  json: (data: any) => void;
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
  const userId = req.body?.user_id || req.query?.userId;

  if (!userId) {
    res.status(400).json({ error: 'Missing userId' });
    return;
  }

  if (req.method === 'GET') {
    const { data, error } = await supabase
      .from('favorites')
      .select('item_type, item_id, created_at')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (error) {
      res.status(500).json({ error: error.message });
      return;
    }

    res.status(200).json(data || []);
    return;
  }

  const { item_type, item_id } = req.body || {};
  if (!item_type || !item_id) {
    res.status(400).json({ error: 'Missing item_type or item_id' });
    return;
  }

  if (req.method === 'POST') {
    const { error } = await supabase
      .from('favorites')
      .insert({ user_id: userId, item_type, item_id });

    if (error) {
      res.status(500).json({ error: error.message });
      return;
    }

    res.status(200).json({ success: true });
    return;
  }

  if (req.method === 'DELETE') {
    const { error } = await supabase
      .from('favorites')
      .delete()
      .eq('user_id', userId)
      .eq('item_type', item_type)
      .eq('item_id', item_id);

    if (error) {
      res.status(500).json({ error: error.message });
      return;
    }

    res.status(200).json({ success: true });
    return;
  }

  res.status(405).end();
}
