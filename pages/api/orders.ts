import { createClient, PostgrestError, SupabaseClient } from '@supabase/supabase-js';
import { serializeOrders, SerializedOrder } from './orders/serializer'; // Assuming SerializedOrder is exported
import { sendEmailWithSendGrid } from '../../src/lib/email';
import type { NextApiRequest, NextApiResponse } from 'next';

// Define interfaces for request and response types
interface OrderItem {
  // Define structure based on what 'items' contains, e.g.:
  product_id: string;
  quantity: number;
  price: number; // Price per unit at the time of order
  name?: string; // Optional, but good for records
}

interface OrderPOSTBody {
  userId?: string; // Optional, for guest checkouts or if derived from auth
  email: string;
  items: OrderItem[];
  total: number;
  // Add any other fields expected in the order creation
}

interface OrderPOSTSuccessResponse {
  orderId: string;
}

type OrderGETResponse = SerializedOrder[];

interface ErrorResponse {
  error: string;
  details?: string;
}

const supabaseUrl = process.env.SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceKey) {
  const errorMessage = 'CRITICAL: SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY is missing for backend API (orders). Service cannot start.';
  console.error(errorMessage);
  throw new Error(errorMessage);
}
const supabase: SupabaseClient = createClient(supabaseUrl, serviceKey); // Explicitly type Supabase client

export default async function handler(
  req: NextApiRequest, 
  res: NextApiResponse<OrderPOSTSuccessResponse | OrderGETResponse | ErrorResponse>
) {
  if (req.method === 'POST') {
    const { userId, email, items = [], total = 0 } = req.body as OrderPOSTBody;

    if (!email || !Array.isArray(items) || items.length === 0 || typeof total !== 'number') {
      return res.status(400).json({ error: 'Missing required fields: email, items array, and total are required.' });
    }

    try {
      const { data, error } = await supabase
        .from('orders')
        .insert({
          user_id: userId || null, 
          email,
          items: items, // Removed 'as any'. Supabase client should handle typed arrays for JSONB.
          total,
          status: 'paid', 
        })
        .select('id')
        .single();

      if (error || !data) {
        console.error('POST Order Error (Supabase):', error);
        return res.status(500).json({ error: error?.message || 'Failed to create order' });
      }

      const orderId = data.id;

      if (userId) {
        const points = Math.floor(total / 100) * 10; 
        if (points > 0) {
          try {
            await supabase.from('points_ledger').insert({
              user_id: userId,
              delta: points,
              reason: 'purchase',
              order_id: orderId,
            });

            const { data: profileData, error: profileError } = await supabase
              .from('profiles')
              .select('points')
              .eq('id', userId)
              .single();

            if (profileError) throw profileError;

            const currentPoints = profileData?.points ?? 0;
            await supabase
              .from('profiles')
              .update({ points: currentPoints + points })
              .eq('id', userId);
          } catch (pointError: unknown) {
            console.error("Error updating points for order:", orderId, pointError);
          }
        }
      }

      if (process.env.SENDGRID_ORDER_CONFIRMATION_TEMPLATE_ID && process.env.SENDGRID_API_KEY && process.env.SENDGRID_FROM_EMAIL) {
        try {
          await sendEmailWithSendGrid({
            to: email,
            templateId: process.env.SENDGRID_ORDER_CONFIRMATION_TEMPLATE_ID,
            dynamicTemplateData: { orderId },
          });
        } catch(emailError: unknown) {
            console.error("Error sending order confirmation email for order:", orderId, emailError);
        }
      } else {
        console.warn("SendGrid order confirmation not configured, skipping email for order:", orderId);
      }

      return res.status(200).json({ orderId });

    } catch (dbError: unknown) { 
        console.error('POST Order Database Error:', dbError);
        const message = dbError instanceof Error ? dbError.message : 'Database operation failed.';
        return res.status(500).json({ error: 'Failed to create order due to a database issue.', details: message });
    }
  }


  if (req.method === 'GET') {
    const idParam = req.query?.userId || req.query?.user_id;
    const userIdValue = Array.isArray(idParam) ? idParam[0] : idParam; 
    
    const effectiveUserId = userIdValue === 'me' ? (req.headers['x-user-id'] as string | undefined) : userIdValue;

    if (!effectiveUserId || typeof effectiveUserId !== 'string') {
      return res.status(400).json({ error: 'Missing or invalid userId' });
    }

    try {
      const { data, error } = await supabase
        .from('orders')
        .select('id, created_at, total, status, invoice_url, tracking_status') 
        .eq('user_id', effectiveUserId)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('GET Orders Error:', error);
        return res.status(500).json({ error: error.message });
      }
      
      return res.status(200).json(serializeOrders(data || []));

    } catch (fetchError: unknown) {
        console.error('GET Orders Fetch Error:', fetchError);
        const message = fetchError instanceof Error ? fetchError.message : 'An unexpected error occurred.';
        return res.status(500).json({ error: 'Failed to retrieve orders.', details: message });
    }
  }

  res.setHeader('Allow', ['GET', 'POST']);
  return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
}
