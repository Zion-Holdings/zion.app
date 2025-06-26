import type { NextApiRequest, NextApiResponse } from 'next';
import { withErrorLogging } from '@/utils/withErrorLogging';
import { TALENT_PROFILES } from '@/data/talentData';

function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  const { id } = req.query as { id: string | string[] };
  if (typeof id !== 'string') {
    return res.status(400).json({ error: 'Invalid id' });
  }

  const profile = TALENT_PROFILES.find((p) => p.id === id);
  if (!profile) {
    return res.status(404).json({ error: 'Talent not found' });
  }

  return res.status(200).json({ profile });
}

export default withErrorLogging(handler);
