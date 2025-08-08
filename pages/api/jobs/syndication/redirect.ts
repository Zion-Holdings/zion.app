import type { NextApiRequest, NextApiResponse } from 'next';
import { incrementMetric } from '../../../../utils/tracking';
import type { BoardName } from '../../../../utils/types/jobs';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const jobId = String(req.query.jobId || '');
    const board = String(req.query.board || '') as BoardName;
    const target = String(req.query.target || '');

    if (!jobId || !board || !target) {
      return res.status(400).json({ error: 'Missing params' });
    }

    incrementMetric(jobId, board, 'clicks', 1);

    res.setHeader('Location', target);
    res.status(302).end();
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Redirect failed' });
  }
}