import { createClient, PostgrestError } from '@supabase/supabase-js';
import type { NextApiRequest, NextApiResponse } from 'next';

// Define the structure of a Notification object based on your DB schema
interface Notification {
  id: string;
  user_id: string;
  type: string; // e.g., 'new_message', 'project_update', 'offer_received'
  message: string;
  read: boolean;
  link_to?: string; // Optional link related to the notification
  created_at: string;
  // Add any other relevant fields from your 'notifications' table
}

interface ErrorResponse {
  error: string;
  details?: string;
}

const supabaseUrl = process.env.SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceKey) {
  const errorMessage = 'CRITICAL: SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY is missing for backend API (notifications). Service cannot start.';
  console.error(errorMessage);
  throw new Error(errorMessage);
}
const supabase = createClient(supabaseUrl, serviceKey);

export default async function handler(
  req: NextApiRequest, 
  res: NextApiResponse<Notification[] | ErrorResponse>
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  const { userId } = req.query;

  if (!userId || typeof userId !== 'string') { // Validate userId
    return res.status(400).json({ error: 'Missing or invalid userId query parameter' });
  }

  try {
    const { data, error } = await supabase
      .from('notifications')
      .select('*') // Select all fields, or specify to match the Notification interface
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('GET Notifications Error:', error);
      return res.status(500).json({ error: error.message });
    }

    // Assuming 'data' from Supabase matches Notification[] structure
    // If not, transformation/validation might be needed here.
    return res.status(200).json((data as Notification[]) || []);
  } catch (e: unknown) {
    console.error('Unexpected error fetching notifications:', e);
    const message = e instanceof Error ? e.message : 'An unexpected error occurred.';
    return res.status(500).json({ error: 'Failed to retrieve notifications.', details: message });
  }
}
