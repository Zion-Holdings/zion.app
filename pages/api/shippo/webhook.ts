import { createClient, SupabaseClient, PostgrestError } from '@supabase/supabase-js';
import { parseShippoWebhook, ParsedShippoWebhookData, ShippoTrackingEvent } from '@/services/shippoService'; // Assuming these are exported
import type { NextApiRequest, NextApiResponse } from 'next';
// Removed Prisma import as it's not used.

// Define expected response types
interface SuccessResponse {
  success: boolean;
  message?: string;
}
interface AcknowledgedResponse { // For status 200 with a simple acknowledgment
  message: string; 
}
interface ErrorResponse {
  error: string;
  details?: string;
}

// Define structure for order data fetched from Supabase
interface OrderData {
  id: string;
  user_id: string | null; 
}

const supabaseUrl =
  process.env.SUPABASE_URL ||
  process.env.VITE_SUPABASE_URL ||
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  '';
const serviceKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY || 
  process.env.VITE_SUPABASE_SERVICE_ROLE_KEY || 
  process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY || '';

if (!supabaseUrl || !serviceKey) {
  const errorMessage = 'CRITICAL: Supabase URL or Service Role Key is missing for Shippo webhook. Service cannot start.';
  console.error(errorMessage);
  throw new Error(errorMessage);
}
const supabase: SupabaseClient = createClient(supabaseUrl, serviceKey);

// Assuming withErrorLogging HOC is compatible with NextApiHandler
// For the purpose of this subtask, we ensure the handler itself is correctly typed.
const originalHandler = async function handler(
  req: NextApiRequest, 
  res: NextApiResponse<SuccessResponse | ErrorResponse | AcknowledgedResponse>
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  try {
    const { trackingNumber, trackingStatus, events } = parseShippoWebhook(req.body); 
    
    if (!trackingNumber) {
      console.log("Shippo webhook received: No tracking number, or not relevant for processing. Body:", req.body);
      return res.status(200).json({ message: "Webhook acknowledged, no tracking number." }); 
    }

    const { data: order, error: orderError } = await supabase
      .from('orders')
      .select('id, user_id')
      .eq('tracking_number', trackingNumber)
      .single<OrderData>();

    if (orderError) {
      console.error(`Error fetching order by tracking number ${trackingNumber}:`, orderError);
      return res.status(200).json({ success: false, message: `Order not found for tracking: ${trackingNumber}. Webhook acknowledged.` });
    }

    if (!order) {
      console.log(`No order found for tracking number: ${trackingNumber}. Webhook acknowledged.`);
      return res.status(200).json({ message: `No order found for tracking: ${trackingNumber}. Webhook acknowledged.` });
    }

    const updatePayload: { tracking_status?: string; tracking_events?: ShippoTrackingEvent[] } = {};
    if (trackingStatus) updatePayload.tracking_status = trackingStatus;
    if (events && events.length > 0) updatePayload.tracking_events = events;

    if (Object.keys(updatePayload).length > 0) {
      const { error: updateError } = await supabase
        .from('orders')
        .update(updatePayload) 
        .eq('id', order.id);

      if (updateError) {
        console.error(`Error updating order ${order.id} with tracking info:`, updateError);
        return res.status(200).json({ success: false, message: 'Failed to update order tracking. Webhook acknowledged.' });
      }
    }

    if (order.user_id && trackingStatus) { 
      const { error: notificationError } = await supabase.from('notifications').insert({
        user_id: order.user_id,
        message: `Order #${order.id} tracking update: ${trackingStatus}`, 
        type: 'shipment_update', 
        link_to: `/orders/${order.id}` 
      });
      if (notificationError) {
        console.error(`Error creating notification for order ${order.id}:`, notificationError);
      }
    }
    
    return res.status(200).json({ success: true, message: 'Webhook processed successfully.' });

  } catch (processingError: unknown) {
    console.error('Error processing Shippo webhook:', processingError);
    let message = 'Webhook received but failed to process internally due to an unexpected error.';
    if (processingError instanceof Error) {
        message = `Error processing webhook: ${processingError.message}`;
    }
    return res.status(200).json({ success: false, message });
  }
};

// Assuming withErrorLogging is correctly typed to wrap a NextApiHandler
// For example: const withErrorLogging = (handler: NextApiHandler): NextApiHandler => { ... }
// If withErrorLogging is not correctly typed, it might cause issues elsewhere.
// For this file, the handler itself is now typed.
import { withErrorLogging } from '@/utils/withErrorLogging';
export default withErrorLogging(originalHandler);
