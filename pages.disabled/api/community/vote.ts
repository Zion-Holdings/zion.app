import type { NextApiRequest, NextApiResponse } from 'next';
import { vote } from '../../../utils/community/storage';
import { getRequestUser, requireAuth } from '../../../utils/community/auth';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });
    const user = getRequestUser(req);
    requireAuth(user);
    const { type, id, direction } = req.body || {} as { type: 'thread' | 'reply'; id: string; direction: 1 | -1 };
    if (!type || !id || ![1, -1].includes(direction)) return res.status(400).json({ error: 'Invalid params' });
    const value = vote({ type, id }, direction);
    res.status(200).json({ value });
  } catch (err: any) {
    const status = err?.statusCode || 500;
    return res.status(status).json({ error: err?.message || 'Internal Error' });
  }
}