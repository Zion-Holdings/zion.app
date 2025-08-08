import type { NextApiRequest, NextApiResponse } from 'next';
import { getSuggestedMatches } from '../../utils/db/matches';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const jobId = (req.query.jobId || req.body?.jobId)?.toString();
  if (!jobId) return res.status(400).json({ error: 'Missing jobId' });

  try {
    const matches = await getSuggestedMatches(jobId);
    res.status(200).json({ jobId, matches });
  } catch (e: any) {
    res.status(500).json({ error: 'Failed to fetch matches', details: e?.message });
  }
}