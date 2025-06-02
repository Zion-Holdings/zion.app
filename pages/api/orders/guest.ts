import { createClient, PostgrestError, SupabaseClient } from '@supabase/supabase-js';
import { withErrorLogging } from '@/utils/withErrorLogging';
import { randomUUID } from 'crypto';
import type { NextApiRequest, NextApiResponse } from 'next';

// Define or import OrderItem structure
interface OrderItem {
  product_id: string; // Or some identifier
  quantity: number;
  price: number; // Price per unit at the time of order
  name?: string; // Optional
  // Add other relevant item properties
}

interface GuestOrderPostBody {
  email?: string;
  items?: OrderItem[];
  // Add any other fields expected for a guest order
}

interface GuestOrderSuccessResponse {
  orderId: string;
  token: string; // Token for guest to retrieve order later
}

interface ErrorResponse {
  error: string;
  details?: string;
}

const supabaseUrl = process.env.SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceKey) {
  const errorMessage = 'CRITICAL: SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY is missing for backend API (orders/guest). Service cannot start.';
  console.error(errorMessage);
  throw new Error(errorMessage);
}
const supabase: SupabaseClient = createClient(supabaseUrl, serviceKey);

async function handler(
  req: NextApiRequest, 
  res: NextApiResponse<GuestOrderSuccessResponse | ErrorResponse>
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  const { email, items = [] } = req.body as GuestOrderPostBody;

  if (!email || typeof email !== 'string') {
    return res.status(400).json({ error: 'Missing or invalid email' });
  }
  if (!Array.isArray(items)) {
    return res.status(400).json({ error: 'Items must be an array.' });
  }

  const token = randomUUID();
  const total = items.reduce((sum: number, item: OrderItem) => {
    const itemPrice = typeof item.price === 'number' ? item.price : 0;
    const itemQuantity = typeof item.quantity === 'number' ? item.quantity : 1;
    return sum + itemPrice * itemQuantity;
  }, 0);

  try {
    const { data, error } = await supabase
      .from('orders')
      .insert({ 
        user_id: null, 
        email, 
        items: items, // Removed 'as any'. Supabase client should handle typed arrays for JSONB.
        total, 
        status: 'pending', 
        token 
      })
      .select('id') 
      .single();

    if (error || !data) {
      console.error('Guest Order Creation Error (Supabase):', error);
      return res.status(500).json({ error: error?.message || 'Failed to create guest order' });
    }

    return res.status(200).json({ orderId: data.id, token });

  } catch (e: unknown) {
    console.error('Unexpected error creating guest order:', e);
    const message = e instanceof Error ? e.message : 'An unexpected server error occurred.';
    return res.status(500).json({ error: message });
  }
}

export default withErrorLogging(handler);
