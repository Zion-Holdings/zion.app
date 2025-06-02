import { createClient } from '@supabase/supabase-js';

interface Req {
  method?: string;
  query?: { id?: string };
  body?: any;
}
interface JsonRes {
  status: (code: number) => JsonRes;
  json: (data: any) => void;
  end: (data?: any) => void;
  setHeader: (name: string, value: string) => void;
}

const supabaseUrl = process.env.SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceKey) {
  const errorMessage = 'CRITICAL: SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY is missing for backend API (notifications). Service cannot start.';
  console.error(errorMessage);
  throw new Error(errorMessage);
}
const supabase = createClient(supabaseUrl, serviceKey);

export default async function handler(req: Req, res: JsonRes) {
  const id = req.query?.id;
  if (!id) {
    res.status(400).json({ error: 'Missing id' });
    return;
  }

  if (req.method === 'PATCH') {
    const { read } = req.body || {};
    const { error } = await supabase
      .from('notifications')
      .update({ read: read !== false })
      .eq('id', id);

    if (error) {
      res.status(500).json({ error: error.message });
      return;
    }
    res.status(200).json({ success: true });
    return;
  }

  if (req.method === 'DELETE') {
    const { error } = await supabase
      .from('notifications')
      .delete()
      .eq('id', id);

    if (error) {
      res.status(500).json({ error: error.message });
      return;
    }
    res.status(200).json({ success: true });
    return;
  }

  res.status(405).end();
}
