import type { NextApiRequest, NextApiResponse } from 'next';
import { EQUIPMENT_DETAILS } from '@/data/equipmentDetails';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query;
  const item = typeof slug === 'string' ? EQUIPMENT_DETAILS[slug] : undefined;
  if (!item) {
    res.status(404).json({ error: 'Not found' });
    return;
  }
  res.status(200).json(item);
}
