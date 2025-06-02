import { createClient, PostgrestError } from '@supabase/supabase-js';
import type { NextApiRequest, NextApiResponse } from 'next';

interface NotificationPatchBody {
  read?: boolean;
}

interface MutationSuccessResponse {
  success: boolean;
  message?: string;
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
  res: NextApiResponse<MutationSuccessResponse | ErrorResponse>
) {
  const { id } = req.query;

  if (!id || typeof id !== 'string') { // Validate id is a single string
    return res.status(400).json({ error: 'Missing or invalid notification id' });
  }

  if (req.method === 'PATCH') {
    const { read } = req.body as NotificationPatchBody;
    
    // Validate 'read' input if necessary, e.g., ensure it's a boolean if provided
    if (read !== undefined && typeof read !== 'boolean') {
        return res.status(400).json({ error: "'read' field must be a boolean." });
    }

    const { error } = await supabase
      .from('notifications')
      .update({ read: read === undefined ? true : read }) // Default to true if 'read' is not in body
      .eq('id', id);

    if (error) {
      console.error('PATCH Notification Error:', error);
      return res.status(500).json({ error: error.message });
    }
    return res.status(200).json({ success: true, message: 'Notification updated.' });
  }

  if (req.method === 'DELETE') {
    const { error } = await supabase
      .from('notifications')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('DELETE Notification Error:', error);
      return res.status(500).json({ error: error.message });
    }
    return res.status(200).json({ success: true, message: 'Notification deleted.' });
  }

  res.setHeader('Allow', ['PATCH', 'DELETE']);
  return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
}
