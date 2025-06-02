import { createClient } from '@supabase/supabase-js';
import { parseShippoWebhook } from '@/services/shippoService';
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
    if (req.method !== 'POST') {
        res.status(405).end();
        return;
    }
    const { trackingNumber, trackingStatus, events } = parseShippoWebhook(req.body);
    if (!trackingNumber) {
        res.status(200).json({});
        return;
    }
    const { data: order } = await supabase
        .from('orders')
        .select('id, user_id')
        .eq('tracking_number', trackingNumber)
        .single();
    if (!order) {
        res.status(200).json({});
        return;
    }
    await supabase
        .from('orders')
        .update({ tracking_status: trackingStatus, tracking_events: events })
        .eq('id', order.id);
    await supabase.from('notifications').insert({
        user_id: order.user_id,
        title: 'Shipment Update',
        message: `Order #${order.id} ${trackingStatus}`
    });
    res.status(200).json({ success: true });
}
