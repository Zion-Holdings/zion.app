import type { NextApiRequest, NextApiResponse } from 'next';
import { MARKETPLACE_LISTINGS } from '@/data/listingData';
import { applyCorsHeaders } from '@/middleware/cors';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Apply CORS headers for API documentation
  applyCorsHeaders(req, res);

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const page = parseInt(req.query.page as string, 10) || 1;
    const limit = parseInt(req.query.limit as string, 10) || 20;
    const category = (req.query.category as string | undefined)?.toLowerCase();

    let products = [...MARKETPLACE_LISTINGS]; // Create a copy to avoid mutations

    // Apply category filter if specified
    if (category) {
      products = products.filter(
        (p) => p.category?.toLowerCase() === category
      );
    }

    // Apply pagination
    const start = (page - 1) * limit;
    const end = start + limit;
    const items = products.slice(start, end);

    console.log(`[API] /api/products - Found ${products.length} total products, returning ${items.length} for page ${page} (limit: ${limit})`);
    
    // Add metadata for better debugging
    const response = {
      products: items,
      pagination: {
        page,
        limit,
        total: products.length,
        hasMore: end < products.length
      },
      filters: {
        category: category || null
      }
    };

    return res.status(200).json(response);
  } catch (error) {
    console.error('[API] Error in /api/products:', error);
    // Return fallback data instead of error to prevent empty marketplace
    return res.status(200).json({
      products: MARKETPLACE_LISTINGS.slice(0, 20),
      pagination: { page: 1, limit: 20, total: MARKETPLACE_LISTINGS.length, hasMore: false },
      filters: { category: null },
      fallback: true
    });
  }
}
