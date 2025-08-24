import { NextApiRequest, NextApiResponse } from 'next';
import { getUserIdFromRequest } from '../../../utils/devportal/auth';
import { getApiLogs } from '../../../utils/devportal/storage';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).json({ error: { code: 'method_not_allowed', message: 'Method not allowed' } });
  const userId = getUserIdFromRequest(req);
  const logs = getApiLogs().filter((l) => l.userId === userId);
  return res.status(200).json({ data: logs.slice(0, 250) });
}