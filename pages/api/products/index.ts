import type { NextApiRequest, NextApiResponse } from 'next';
import { MARKETPLACE_LISTINGS } from '@/data/marketplaceData';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const page = parseInt(req.query.page as string, 10) || 1;
  const limit = parseInt(req.query.limit as string, 10) || 20;
  const category = (req.query.category as string | undefined)?.toLowerCase();

  let products = MARKETPLACE_LISTINGS;

  if (category) {
    products = products.filter(
      (p) => p.category?.toLowerCase() === category
    );
  }

  const start = (page - 1) * limit;
  const end = start + limit;
  const items = products.slice(start, end);

  res.status(200).json(items);
}
