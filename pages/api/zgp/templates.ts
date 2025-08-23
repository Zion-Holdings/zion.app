import type { NextApiRequest, NextApiResponse } from 'next';
import { loadTemplates } from '@/utils/zgp-storage';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const templates = loadTemplates();
    if (req.method === 'GET') {
      const byCategory = templates.reduce<Record<string, typeof templates>>((acc, t) => {
        acc[t.category] = acc[t.category] || [];
        acc[t.category].push(t);
        return acc;
      }, {});
      res.status(200).json({ templates, byCategory });
      return;
    }
    res.setHeader('Allow', 'GET');
    res.status(405).json({ error: 'Method Not Allowed' });
  } catch (e: any) {
    res.status(500).json({ error: e.message || 'Internal Server Error' });
  }
}