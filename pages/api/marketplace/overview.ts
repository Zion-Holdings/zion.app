import type { NextApiRequest, NextApiResponse } from 'next';
import { MARKETPLACE_LISTINGS } from '@/data/marketplaceData';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }

  // Limit query param ?limit=
  const limitParam = parseInt(req.query.limit as string, 10);
  const listings = Number.isFinite(limitParam)
    ? MARKETPLACE_LISTINGS.slice(0, Math.max(limitParam, 0))
    : MARKETPLACE_LISTINGS;

  return res.status(200).json(listings);
} 