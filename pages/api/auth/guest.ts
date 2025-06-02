import { createClient } from '@supabase/supabase-js';
import { randomUUID } from 'crypto';
import { withErrorLogging } from '@/utils/withErrorLogging';

interface Req { method?: string; body?: any }
interface JsonRes { status:(c:number)=>JsonRes; json:(d:any)=>void; end:(d?:any)=>void; setHeader:(n:string,v:string)=>void }

const supabaseUrl = process.env.SUPABASE_URL;
// This route uses supabase.auth.admin.createUser, which REQUIRES the service role key.
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceKey) {
  const errorMessage = 'CRITICAL: SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY is missing for backend auth (guest creation) API. Service cannot start.';
  console.error(errorMessage);
  throw new Error(errorMessage);
}
const supabase = createClient(supabaseUrl, serviceKey);

async function handler(req: Req, res: JsonRes) {
  if (req.method !== 'POST') {
    res.status(405).end();
    return;
  }

  const { email, name = 'Guest' } = req.body || {};
  if (!email) {
    res.status(400).json({ error: 'Missing email' });
    return;
  }

  const password = randomUUID();
  const { data, error } = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    user_metadata: { display_name: name, is_guest: true },
  });

  if (error || !data?.user) {
    res.status(500).json({ error: error?.message || 'Failed to create guest user' });
    return;
  }

  res.status(200).json({ userId: data.user.id });
}

export default withErrorLogging(handler);
