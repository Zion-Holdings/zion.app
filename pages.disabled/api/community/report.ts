import type { NextApiRequest, NextApiResponse } from 'next';
import { createReport } from '../../../utils/community/storage';
import { getRequestUser, requireAuth } from '../../../utils/community/auth';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });
    const user = getRequestUser(req);
    requireAuth(user);
    const { targetType, targetId, reason } = req.body || {};
    if (!['thread', 'reply'].includes(targetType) || !targetId || !reason) return res.status(400).json({ error: 'Invalid params' });
    const report = createReport({ targetType, targetId, reason, reporterId: user!.id });
    res.status(201).json({ report });
  } catch (err: any) {
    const status = err?.statusCode || 500;
    return res.status(status).json({ error: err?.message || 'Internal Error' });
  }
}