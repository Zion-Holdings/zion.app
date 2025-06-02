import { createClient } from '@supabase/supabase-js';
import { randomUUID } from 'crypto';
import { withErrorLogging } from '@/utils/withErrorLogging';
const supabaseUrl = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, serviceKey);
async function handler(req, res) {
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
