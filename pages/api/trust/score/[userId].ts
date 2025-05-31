import type { Request, Response } from 'express';
import { createClient } from '@supabase/supabase-js'

// Initialize Supabase client
// Ensure these environment variables are set
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceKey) {
  console.error("Supabase URL or Service Role Key is not defined for /api/trust/score/[userId] endpoint.")
  // Optionally throw an error or handle it gracefully in a real app
}

const supabase = createClient(supabaseUrl!, supabaseServiceKey!)

export default async function handler(
  req: Request,
  res: Response
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).send(`Method ${req.method} Not Allowed`);
  }

  const { userId } = req.params; // Express uses req.params for route parameters

  if (!userId || typeof userId !== 'string') {
    // This check might be redundant if the route matching ensures userId is a string
    return res.status(400).json({ error: 'User ID is required in the URL path and must be a string.' });
  }

  try {
    const { data: trustScore, error } = await supabase
      .from('TrustScore')
      .select(`
        *,
        components:TrustScoreComponent(*)
      `)
      .eq('userId', parseInt(userId, 10))
      .order('createdAt', { ascending: false }) // Get the latest score if multiple (though schema has userId as unique on TrustScore)
      .limit(1)
      .single(); // Expecting one record due to unique constraint on userId in TrustScore table

    if (error) {
      if (error.code === 'PGRST116') { // PostgREST error code for "single row not found"
        return res.status(404).json({ error: 'Trust score not found for this user.' });
      }
      console.error('Error fetching trust score:', error);
      return res.status(500).json({ error: 'Internal server error while fetching trust score.' });
    }

    // .single() will return error PGRST116 if no rows, but as a fallback:
    if (!trustScore) {
      return res.status(404).json({ error: 'Trust score not found for this user.' });
    }

    return res.status(200).json(trustScore);

  } catch (err: any) {
    console.error('Unexpected error in /api/trust/score/[userId]:', err);
    return res.status(500).json({ error: 'An unexpected error occurred.' });
  }
}
