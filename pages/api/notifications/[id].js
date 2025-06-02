import { createClient } from '@supabase/supabase-js';
const supabaseUrl = process.env.SUPABASE_URL ||
    process.env.VITE_SUPABASE_URL ||
    process.env.NEXT_PUBLIC_SUPABASE_URL ||
    '';
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.VITE_SUPABASE_ANON_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    '';
const supabase = createClient(supabaseUrl, serviceKey);
export default async function handler(req, res) {
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
