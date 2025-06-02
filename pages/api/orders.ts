import { createClient } from '@supabase/supabase-js';
import { serializeOrders } from './orders/serializer';
import { sendEmailWithSendGrid } from '../../src/lib/email';

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

const supabaseUrl = process.env.SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceKey) {
  const errorMessage = 'CRITICAL: SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY is missing for backend API (orders). Service cannot start.';
  console.error(errorMessage);
  throw new Error(errorMessage);
}
const supabase = createClient(supabaseUrl, serviceKey);

export default async function handler(req: Req, res: JsonRes) {
  if (req.method === 'POST') {
    const { userId, email, items = [], total = 0 } = req.body || {};
    if (!email) {
      res.status(400).json({ error: 'Missing email' });
      return;
    }

    const { data, error } = await supabase
      .from('orders')
      .insert({
        user_id: userId || null,
        email,
        items,
        total,
        status: 'paid',
      })
      .select('id')
      .single();

    if (error || !data) {
      res.status(500).json({ error: error?.message || 'Failed to create order' });
      return;
    }

    if (userId) {
      const points = Math.floor(total / 100) * 10;
      if (points > 0) {
        await supabase.from('points_ledger').insert({
          user_id: userId,
          delta: points,
          reason: 'purchase',
          order_id: data.id,
        });

        const { data: profile } = await supabase
          .from('profiles')
          .select('points')
          .eq('id', userId)
          .single();

        const current = profile?.points ?? 0;
        await supabase
          .from('profiles')
          .update({ points: current + points })
          .eq('id', userId);
      }
    }

    if (process.env.SENDGRID_ORDER_CONFIRMATION_TEMPLATE_ID) {
      await sendEmailWithSendGrid({
        to: email,
        templateId: process.env.SENDGRID_ORDER_CONFIRMATION_TEMPLATE_ID,
        dynamicTemplateData: { orderId: data.id },
      });
    }

    res.status(200).json({ orderId: data.id });
    return;
  }

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
    .select('id, created_at, total, status, invoice_url, tracking_status')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });

  if (error) {
    res.status(500).json({ error: error.message });
    return;
  }

  res.status(200).json(serializeOrders(data || []));
}
