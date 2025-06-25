import type { NextApiRequest, NextApiResponse } from 'next';

// Mock reviews data for fallback
const MOCK_REVIEWS = [
  {
    id: 'review-1',
    productId: 'ai-model-1',
    rating: 5,
    comment: 'Excellent AI integration package! Saved us weeks of development.',
    userId: 'user-1',
    userName: 'Alex Johnson',
    createdAt: '2024-01-15T10:30:00.000Z'
  },
  {
    id: 'review-2', 
    productId: 'ai-model-1',
    rating: 4,
    comment: 'Very good documentation and support. Minor issues with initial setup.',
    userId: 'user-2',
    userName: 'Sarah Chen',
    createdAt: '2024-01-10T14:20:00.000Z'
  },
  {
    id: 'review-3',
    productId: 'ai-service-2',
    rating: 5,
    comment: 'Outstanding custom ML development service. Highly professional team.',
    userId: 'user-3',
    userName: 'Mike Rodriguez',
    createdAt: '2024-02-20T09:15:00.000Z'
  },
  {
    id: 'review-4',
    productId: 'ai-service-2', 
    rating: 4,
    comment: 'Great results, though timeline was a bit longer than expected.',
    userId: 'user-4',
    userName: 'Emily Davis',
    createdAt: '2024-02-18T16:45:00.000Z'
  }
];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { productId } = req.query;
  if (!productId || typeof productId !== 'string') {
    return res.status(400).json({
      error: 'productId is required in the URL path and must be a string.',
    });
  }

  try {
    // Filter mock reviews by productId
    const productReviews = MOCK_REVIEWS.filter(review => review.productId === productId);
    
    console.log(`[API] Returning ${productReviews.length} reviews for product ${productId}`);
    return res.status(200).json(productReviews);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return res.status(500).json({ 
      error: 'Internal server error while fetching reviews.',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
