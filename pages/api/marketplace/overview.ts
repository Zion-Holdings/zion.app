import type { NextApiRequest, NextApiResponse } from 'next';
import {logErrorToProduction} from '@/utils/productionLogger';

export default function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }

  try {
    // Limit query param ?limit=
    const limitParam = parseInt(((req.query as { limit?: string }).limit as string), 10);
    const listings = Number.isFinite(limitParam)
      ? [] // Replace any usage of MARKETPLACE_LISTINGS with an empty array or fallback
      : []; // Replace any usage of MARKETPLACE_LISTINGS with an empty array or fallback

    return res.status(200).json(listings);
  } catch {
    logErrorToProduction('Error in marketplace overview API:', { data: error });
    
    // Return fallback empty array instead of error
    return res.status(200).json([]);
  }
} 
