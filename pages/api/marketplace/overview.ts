import type { NextApiRequest, NextApiResponse } from 'next';
import { MARKETPLACE_LISTINGS } from '@/data/marketplaceData';
import * as Sentry from '@sentry/nextjs';
import {logErrorToProduction} from '@/utils/productionLogger';

export default function handler(req: NextApiRequest, res: NextApiResponse) {

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
    logErrorToProduction('Error in marketplace overview API:', { data: error });
    
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
