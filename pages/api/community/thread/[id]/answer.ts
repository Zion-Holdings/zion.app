import type { NextApiRequest, NextApiResponse } from 'next';
import { getThread, markAnswered } from '../../../../../utils/community/storage';
import { getRequestUser, requireAuth } from '../../../../../utils/community/auth';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });
    const user = getRequestUser(req);
    requireAuth(user);
    const { id } = req.query as { id: string };
    const { answered } = req.body || {} as { answered: boolean };
    const { thread } = getThread(id);
    if (!thread) return res.status(404).json({ error: 'Thread not found' });
    const canMark = user!.id === thread.authorId || ['Moderator', 'Admin'].includes(user!.role);
    if (!canMark) return res.status(403).json({ error: 'Forbidden' });
    const updated = markAnswered(id, !!answered);
    return res.status(200).json({ thread: updated });
  } catch (err: any) {
    const status = err?.statusCode || 500;
    return res.status(status).json({ error: err?.message || 'Internal Error' });
  }
}