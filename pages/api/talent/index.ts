import type { NextApiRequest, NextApiResponse } from 'next';
import { withErrorLogging } from '@/utils/withErrorLogging';
import { TALENT_PROFILES } from '@/data/talentData';
import { TalentProfile } from '@/types/talent';

function handler(req: NextApiRequest, res: NextApiResponse<{ profiles: TalentProfile[] } | { error: string }>) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  return res.status(200).json({ profiles: TALENT_PROFILES });
}

export default withErrorLogging(handler);
