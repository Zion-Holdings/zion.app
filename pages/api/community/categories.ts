import type { NextApiRequest, NextApiResponse } from 'next';
import { listCategories } from '../../../utils/community/storage';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method Not Allowed' });
  const categories = listCategories();
  res.status(200).json({ categories });
}