import { createClient, PostgrestError, SupabaseClient } from '@supabase/supabase-js';
import { serializeOrder, SerializedOrder } from './serializer'; // Assuming SerializedOrder can also represent a detailed order
import type { NextApiRequest, NextApiResponse } from 'next';

// Define a more detailed order structure if different from SerializedOrder list item
// For now, we'll assume SerializedOrder is sufficient or serializeOrder handles the detail.
// If serializeOrder returns a more detailed type, that should be used here.
type OrderDetailResponse = SerializedOrder; 

interface ErrorResponse {
  error: string;
  details?: string;
}

const supabaseUrl = process.env.SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceKey) {
  const errorMessage = 'CRITICAL: SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY is missing for backend API (orders/[id]). Service cannot start.';
  console.error(errorMessage);
  throw new Error(errorMessage);
}
const supabase: SupabaseClient = createClient(supabaseUrl, serviceKey);

export default async function handler(
  req: NextApiRequest, 
  res: NextApiResponse<OrderDetailResponse | ErrorResponse>
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  const { id } = req.query;

  if (!id || typeof id !== 'string') { // Ensure id is a single string
    return res.status(400).json({ error: 'Missing or invalid order id' });
  }

  try {
    const { data, error } = await supabase
      .from('orders')
      .select('id, created_at, total, status, invoice_url, tracking_number, tracking_status, tracking_events, items, shipping_address') // Adjust select based on what serializeOrder needs
      .eq('id', id)
      .single();

    if (error) {
      console.error(`Error fetching order ${id}:`, error);
      if (error.code === 'PGRST116') { // PostgREST error for "Not a single row" (e.g. 0 rows)
        return res.status(404).json({ error: 'Order not found' });
      }
      return res.status(500).json({ error: error.message });
    }

    if (!data) { // Should be caught by error.code PGRST116, but as a fallback
      return res.status(404).json({ error: 'Order not found' });
    }

    // Assuming 'data' might need to be cast or validated before serialization
    // if its structure isn't guaranteed or if serializeOrder is very specific.
    // For now, direct pass-through.
    return res.status(200).json(serializeOrder(data));

  } catch (e: unknown) {
    console.error(`Unexpected error fetching order ${id}:`, e);
    const message = e instanceof Error ? e.message : 'An unexpected error occurred.';
    return res.status(500).json({ error: 'Failed to retrieve order details.', details: message });
  }
}
