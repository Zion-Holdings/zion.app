import type { NextApiRequest, NextApiResponse } from 'next';

// Mock reviews data for fallback
const MOCK_REVIEWS = [
  {
    id: 'review-1',
    productId: 'ai-model-1',
    rating: 5,
    comment: 'Excellent AI integration package! Saved us weeks of development.',
    userId: 'user-1',
    createdAt: '2024-01-15T10:30:00.000Z'
  },
  {
    id: 'review-2', 
    productId: 'ai-model-1',
    rating: 4,
    comment: 'Very good documentation and support. Minor issues with initial setup.',
    userId: 'user-2',
    createdAt: '2024-01-10T14:20:00.000Z'
  }
];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'GET') {
    // Handle GET requests for fetching reviews by product ID
    const { productId } = req.query;
    
    if (!productId || typeof productId !== 'string') {
      return res.status(400).json({ error: 'productId is required as query parameter' });
    }

    try {
      // For now, return mock data filtered by productId
      const productReviews = MOCK_REVIEWS.filter(review => review.productId === productId);
      return res.status(200).json(productReviews);
    } catch (error) {
      console.error('Error fetching reviews:', error);
      return res.status(500).json({ error: 'Failed to fetch reviews' });
    }
  }

  if (req.method === 'POST') {
    // Handle POST requests for creating new reviews
    try {
      const { productId, rating, comment } = req.body || {};

      // Validate input
      if (!productId || typeof productId !== 'string') {
        return res.status(400).json({ error: 'productId is required' });
      }

      const parsedRating = Number(rating);
      if (!rating || isNaN(parsedRating) || parsedRating < 1 || parsedRating > 5) {
        return res.status(400).json({ error: 'Rating must be a number between 1 and 5' });
      }

      // For development, simulate creating a review
      const newReview = {
        id: `review-${Date.now()}`,
        productId,
        rating: parsedRating,
        comment: comment || '',
        userId: 'guest-user',
        createdAt: new Date().toISOString()
      };

      console.log('Mock review created:', newReview);
      
      return res.status(201).json({
        ...newReview,
        message: 'Review submitted successfully! (Demo mode - review not actually saved)'
      });
    } catch (error) {
      console.error('Error creating review:', error);
      return res.status(500).json({ error: 'Failed to create review' });
    }
  }

  // Method not allowed
  res.setHeader('Allow', ['GET', 'POST']);
  return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
}
