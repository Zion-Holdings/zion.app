import { createClient } from '@supabase/supabase-js';
import { serializeOrder } from './serializer';
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
