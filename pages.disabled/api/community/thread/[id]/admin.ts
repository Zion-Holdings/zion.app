import type { NextApiRequest, NextApiResponse } from 'next';
import { adminUpdateThread } from '../../../../../utils/community/storage';
import { getRequestUser, requireModerator } from '../../../../../utils/community/auth';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });
    const user = getRequestUser(req);
    requireModerator(user);
    const { id } = req.query as { id: string };
    const { isPinned, isLocked, isFeatured } = req.body || {};
    const updated = adminUpdateThread(id, { isPinned, isLocked, isFeatured });
    if (!updated) return res.status(404).json({ error: 'Thread not found' });
    return res.status(200).json({ thread: updated });
  } catch (err: any) {
    const status = err?.statusCode || 500;
    return res.status(status).json({ error: err?.message || 'Internal Error' });
  }
}