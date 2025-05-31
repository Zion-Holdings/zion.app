import type { NextApiRequest, NextApiResponse } from 'next'
import { createClient } from '@supabase/supabase-js'

// Initialize Supabase client
// Ensure these environment variables are set in your Next.js environment
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceKey) {
  console.error("Supabase URL or Service Role Key is not defined.")
  // Optionally throw an error or handle it gracefully
}

const supabase = createClient(supabaseUrl!, supabaseServiceKey!)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET'])
    return res.status(405).end(`Method ${req.method} Not Allowed`)
  }

  const { userId } = req.query

  if (!userId || typeof userId !== 'string') {
    return res.status(400).json({ error: 'User ID is required and must be a string.' })
  }

  try {
    const { data: trustScore, error } = await supabase
      .from('TrustScore')
      .select(`
        *,
        components:TrustScoreComponent(*)
      `)
      .eq('userId', parseInt(userId, 10))
      .order('createdAt', { ascending: false }) // Get the latest score if multiple (though schema has userId as unique)
      .limit(1)
      .single() // Expecting one record due to unique constraint on userId

    if (error) {
      if (error.code === 'PGRST116') { // PostgREST error code for "single row not found"
        return res.status(404).json({ error: 'Trust score not found for this user.' })
      }
      console.error('Error fetching trust score:', error)
      return res.status(500).json({ error: 'Internal server error while fetching trust score.' })
    }

    if (!trustScore) {
      return res.status(404).json({ error: 'Trust score not found for this user.' })
    }

    return res.status(200).json(trustScore)

  } catch (err) {
    console.error('Unexpected error in /api/trust/score/[userId]:', err)
    return res.status(500).json({ error: 'An unexpected error occurred.' })
  }
}
