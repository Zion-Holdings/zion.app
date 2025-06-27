import type { NextApiRequest, NextApiResponse } from 'next';
import { MARKETPLACE_LISTINGS } from '@/data/marketplaceData';
import * as Sentry from '@sentry/nextjs';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
import { logError } from '@/utils/productionLogger';

  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }

  try {
    // Limit query param ?limit=
    const limitParam = parseInt(((req.query as any).limit as string), 10);
    const listings = Number.isFinite(limitParam)
      ? MARKETPLACE_LISTINGS.slice(0, Math.max(limitParam, 0))
      : MARKETPLACE_LISTINGS;

    return res.status(200).json(listings);
  } catch (error) {
    logError('Error in marketplace overview API:', error);
    
    // Log to Sentry
    Sentry.withScope((scope) => {
      scope.setTag('api', 'marketplace-overview');
      scope.setContext('query', req.query as Record<string, any>);
      scope.setLevel('error');
      Sentry.captureException(error);
    });
    
    // Return fallback empty array instead of error
    return res.status(200).json([]);
  }
} 
