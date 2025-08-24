import type { NextApiRequest, NextApiResponse } from 'next';
import { addReply, getThread } from '../../../../../utils/community/storage';
import { getRequestUser, requireAuth } from '../../../../../utils/community/auth';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });
    const user = getRequestUser(req);
    requireAuth(user);
    const { id } = req.query as { id: string };
    const { parentReplyId, body } = req.body || {};
    if (!body) return res.status(400).json({ error: 'Missing body' });
    const { thread } = getThread(id);
    if (!thread) return res.status(404).json({ error: 'Thread not found' });
    if (thread.isLocked) return res.status(423).json({ error: 'Thread is locked' });
    const reply = addReply({ threadId: id, parentReplyId, body, authorId: user!.id, authorName: user!.name, authorRole: user!.role });
    return res.status(201).json({ reply });
  } catch (err: any) {
    const status = err?.statusCode || 500;
    return res.status(status).json({ error: err?.message || 'Internal Error' });
  }
}