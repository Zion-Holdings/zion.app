import type { NextApiRequest, NextApiResponse } from 'next';
import { assertAdminServer } from '../../../../utils/permissions';
import { getJobMetrics, incrementMetric } from '../../../../utils/tracking';
import type { BoardName } from '../../../../utils/types/jobs';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const jobId = String(req.query.jobId || '');
    if (!jobId) return res.status(400).json({ error: 'Missing jobId' });
    return res.status(200).json(getJobMetrics(jobId));
  }

  if (req.method === 'POST') {
    if (!assertAdminServer(req, res)) return;
    const jobId = String(req.body?.jobId || '');
    const board = String(req.body?.board || '') as BoardName;
    const type = String(req.body?.type || '');
    if (!jobId || !board || !['clicks', 'applications'].includes(type)) {
      return res.status(400).json({ error: 'Missing or invalid fields' });
    }
    const data = incrementMetric(jobId, board, type as 'clicks' | 'applications', 1);
    return res.status(200).json(data);
  }

  return res.status(405).json({ error: 'Method Not Allowed' });
}