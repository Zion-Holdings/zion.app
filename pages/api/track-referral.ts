import { createClient } from '@supabase/supabase-js';

// Basic request/response types to keep Next.js optional
type Req = { method?: string; body?: any; headers?: any };
interface JsonRes {
  statusCode?: number;
  setHeader: (name: string, value: string) => void;
  end: (data?: any) => void;
  status: (code: number) => JsonRes;
  json: (data: any) => void;
}

const supabaseUrl = process.env.SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceKey) {
  const err = 'CRITICAL: SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY is missing for track-referral API.';
  console.error(err);
  throw new Error(err);
}

const supabase = createClient(supabaseUrl, serviceKey);

export default async function handler(req: Req, res: JsonRes) {
  if (req.method !== 'POST') {
    res.status(405).end();
    return;
  }

  const { refCode, userId, email } = req.body || {};
  if (!refCode || !userId) {
    res.status(400).json({ error: 'Missing refCode or userId' });
    return;
  }

  const ipAddress = (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() || '';

  const { data, error } = await supabase.functions.invoke('track-referral', {
    body: { refCode, userId, email, ipAddress },
  });

  if (error) {
    console.error('Error invoking track-referral function:', error);
    res.status(500).json({ error: 'Failed to track referral' });
    return;
  }

  res.status(200).json(data);
}
