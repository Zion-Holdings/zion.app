import type { NextApiRequest, NextApiResponse } from 'next';
import { createThread, listCategories, listThreads } from '../../../utils/community/storage';
import { getRequestUser, requireAuth } from '../../../utils/community/auth';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'GET') {
      const { categoryId, tag, sort } = req.query as { categoryId?: string; tag?: string; sort?: 'new' | 'top' | 'active' };
      const threads = listThreads({ categoryId, tag, sort });
      return res.status(200).json({ threads });
    }

    if (req.method === 'POST') {
      const user = getRequestUser(req);
      requireAuth(user);
      const { categoryId, title, body, tags } = req.body || {};
      if (!categoryId || !title || !body) return res.status(400).json({ error: 'Missing fields' });
      const categories = listCategories();
      const cat = categories.find((c) => c.id === categoryId);
      if (!cat) return res.status(404).json({ error: 'Category not found' });
      if (cat.isAdminOnly && user!.role !== 'Admin') return res.status(403).json({ error: 'Only admins can post in this category' });

      const thread = createThread({
        categoryId,
        title,
        body,
        tags: Array.isArray(tags) ? tags : [],
        authorId: user!.id,
        authorName: user!.name,
        authorRole: user!.role,
      });
      return res.status(201).json({ thread });
    }

    return res.status(405).json({ error: 'Method Not Allowed' });
  } catch (err: any) {
    const status = err?.statusCode || 500;
    return res.status(status).json({ error: err?.message || 'Internal Error' });
  }
}