import type { NextApiRequest, NextApiResponse } from 'next'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceKey) {
  console.error("Supabase URL or Service Role Key is not defined for trust history endpoint.")
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
    const { data: trustScoreHistory, error } = await supabase
      .from('TrustScoreHistory')
      .select('*')
      .eq('userId', parseInt(userId, 10))
      .order('changedAt', { ascending: false })

    if (error) {
      console.error('Error fetching trust score history:', error)
      return res.status(500).json({ error: 'Internal server error while fetching trust score history.' })
    }

    if (!trustScoreHistory || trustScoreHistory.length === 0) {
      return res.status(404).json({ message: 'No trust score history found for this user.' })
    }

    return res.status(200).json(trustScoreHistory)

  } catch (err) {
    console.error('Unexpected error in /api/trust/history/[userId]:', err)
    return res.status(500).json({ error: 'An unexpected error occurred.' })
  }
}
