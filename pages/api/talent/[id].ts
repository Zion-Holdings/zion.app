import type { NextApiRequest, NextApiResponse } from 'next';
import { withErrorLogging } from '@/utils/withErrorLogging';
import { TALENT_SEEDS } from '@/data/talentSeeds';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { id } = req.query as { id?: string };
  const profile = TALENT_SEEDS.find((t) => t.id === id);

  if (!profile) {
    return res.status(404).json({ error: 'Talent not found' });
  }

  return res.status(200).json({ profile });
}

export default withErrorLogging(handler);
