import type { NextApiRequest, NextApiResponse } from 'next';
import { MARKETPLACE_LISTINGS } from '@/data/listingData';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
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

    console.log(`[API] Returning ${items.length} products (page ${page}, limit ${limit})`);
    res.status(200).json(items);
  } catch (error) {
    console.error('[API] Error in /api/products:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
