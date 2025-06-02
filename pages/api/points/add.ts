import { createClient, SupabaseClient, PostgrestError } from '@supabase/supabase-js';
import { withErrorLogging } from '@/utils/withErrorLogging';
import type { NextApiRequest, NextApiResponse } from 'next';

interface AddPointsRequestBody {
  userId?: string;
  amount?: number;
  orderId?: string;
  reason?: string;
}

interface MutationSuccessResponse {
  success: boolean;
  message?: string;
}

interface ErrorResponse {
  error: string;
  details?: string;
}

interface ProfileData {
  points: number;
}

const supabaseUrl = process.env.SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceKey) {
  const errorMessage = 'CRITICAL: SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY is missing for backend API (points/add). Service cannot start.';
  console.error(errorMessage);
  throw new Error(errorMessage);
}
const supabase: SupabaseClient = createClient(supabaseUrl, serviceKey);

async function handler(
  req: NextApiRequest, 
  res: NextApiResponse<MutationSuccessResponse | ErrorResponse>
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  const { 
    userId, 
    amount, 
    orderId, 
    reason = 'order' // Default reason if not provided
  } = req.body as AddPointsRequestBody;

  if (!userId || typeof amount !== 'number') {
    return res.status(400).json({ error: 'Missing or invalid userId or amount. Both userId (string) and amount (number) are required.' });
  }

  const delta = Math.round(amount);

  try {
    // Log to points_ledger
    const { error: ledgerError } = await supabase.from('points_ledger').insert({
      user_id: userId,
      delta,
      reason,
      order_id: orderId || null, // Ensure order_id is null if not provided
    });

    if (ledgerError) {
      console.error('Error inserting into points_ledger:', ledgerError);
      return res.status(500).json({ error: 'Failed to record points transaction.', details: ledgerError.message });
    }

    // Update profile points balance
    const { data: profile, error: profileSelectError } = await supabase
      .from('profiles')
      .select('points')
      .eq('id', userId)
      .single<ProfileData>(); // Specify type for single record fetch

    if (profileSelectError) {
      // If profile doesn't exist, this might be an issue. Or points_ledger is source of truth and profile is just a cache.
      // Depending on system design, this might be a critical error or just a warning.
      console.error(`Error fetching profile for points update (userId: ${userId}):`, profileSelectError);
      // Proceeding to update, assuming points can be created/updated even if profile fetch had minor issue / profile is new
    }
    
    const currentPoints = profile?.points ?? 0;
    const { error: profileUpdateError } = await supabase
      .from('profiles')
      .update({ points: currentPoints + delta })
      .eq('id', userId);

    if (profileUpdateError) {
      console.error(`Error updating profile points (userId: ${userId}):`, profileUpdateError);
      // This is more critical as it means the balance might be out of sync.
      // Depending on desired atomicity, you might consider rolling back ledger entry or flagging for reconciliation.
      return res.status(500).json({ error: 'Failed to update user profile points.', details: profileUpdateError.message });
    }

    return res.status(200).json({ success: true, message: 'Points added successfully.' });

  } catch (e: unknown) {
    console.error('Unexpected error in /api/points/add:', e);
    const message = e instanceof Error ? e.message : 'An unexpected server error occurred.';
    return res.status(500).json({ error: 'Failed to add points due to an unexpected error.', details: message });
  }
}

export default withErrorLogging(handler);
