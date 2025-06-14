import { createClient } from '@supabase/supabase-js';
import type { NextApiRequest, NextApiResponse } from 'next';
import { withErrorLogging } from '@/utils/withErrorLogging';
import { TALENT_SEEDS } from '@/data/talentSeeds';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY as string;
const supabase = createClient(supabaseUrl, supabaseKey);

async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const page = parseInt(req.query.page as string, 10) || 1;
  const limit = parseInt(req.query.limit as string, 10) || 10;
  const from = (page - 1) * limit;
  const to = from + limit - 1;

  // If Supabase credentials are not available, return seed data for demo
  if (!supabaseUrl || !supabaseKey) {
    return res.status(200).json(TALENT_SEEDS);
  }

  const { data, error } = await supabase
    .from('talent_profiles')
    .select('*')
    .range(from, to);

  if (error) {
    console.error('Error fetching talent profiles:', error);
    // Fallback to seed data in case of error
    return res.status(200).json(TALENT_SEEDS);
  }

  return res.status(200).json(data ?? TALENT_SEEDS);
}

export default withErrorLogging(handler);
