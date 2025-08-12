import { createMocks, RequestMethod } from 'node-mocks-http';
import type { NextApiRequest, NextApiResponse } from 'next';
import reviewsHandler from '@/pages/api/reviews'; // Handler for POST /api/reviews
import productReviewsHandler from '@/pages/api/reviews/[productId]'; // Handler for GET /api/reviews/[productId]
import { PrismaClient } from '@prisma/client';
import { supabase } from '@/integrations/supabase/client';

// Mock Prisma Client
jest.mock('@prisma/client', () => {
  const mockPrismaClient = {
    productReview: {
      create: jest.fn(),
      findMany: jest.fn(),
    },
    user: {
      findUnique: jest.fn(),
    },
    $disconnect: jest.fn(),
  };
  return { PrismaClient: jest.fn(() => mockPrismaClient) };
});

// Mock Supabase Client
jest.mock('@/integrations/supabase/client', () => ({
  supabase: {
    auth: {
      getSession: jest.fn(),
    },
  },
}));

describe('/api/reviews API Endpoint', () => {
  let prisma: PrismaClient;

  beforeEach(() => {
    prisma = new PrismaClient();
    // Reset all mocks before each test
    (prisma.productReview.create as jest.Mock).mockReset();
    (prisma.productReview.findMany as jest.Mock).mockReset();
    (prisma.user.findUnique as jest.Mock).mockReset();
    (prisma.$disconnect as jest.Mock).mockReset();
    (supabase.auth.getSession as jest.Mock).mockReset();
  });

  describe('POST /api/reviews', () => {
    it('should successfully create a review (201)', async () => {
      const mockUser = { id: 1, email: 'test@example.com', name: 'Test User' };
      const mockReview = { id: 'review1', productId: 'prod1', userId: 1, rating: 5, comment: 'Great!' };

      (supabase.auth.getSession as jest.Mock).mockResolvedValue({
        data: { session: { user: { id: 'supaUserId', email: 'test@example.com' } } },
        error: null,
      });
      (prisma.user.findUnique as jest.Mock).mockResolvedValue(mockUser);
      (prisma.productReview.create as jest.Mock).mockResolvedValue(mockReview);

      const { req, res } = createMocks({
        method: 'POST' as RequestMethod,
        body: { productId: 'prod1', rating: 5, comment: 'Great!' },
      });

      await reviewsHandler(req as NextApiRequest, res as NextApiResponse);

      expect(res._getStatusCode()).toBe(201);
      expect(JSON.parse(res._getData())).toEqual(mockReview);
      expect(prisma.productReview.create).toHaveBeenCalledWith({
        data: { productId: 'prod1', rating: 5, comment: 'Great!', userId: mockUser.id },
      });
    });

    it('should fail if user already reviewed the product (409)', async () => {
      (supabase.auth.getSession as jest.Mock).mockResolvedValue({
        data: { session: { user: { id: 'supaUserId', email: 'test@example.com' } } },
        error: null,
      });
      (prisma.user.findUnique as jest.Mock).mockResolvedValue({ id: 1, email: 'test@example.com' });
      (prisma.productReview.create as jest.Mock).mockRejectedValue({
        code: 'P2002',
        meta: { target: ['productId', 'userId'] }, // Simplified, actual target might be more complex
      });

      const { req, res } = createMocks({
        method: 'POST' as RequestMethod,
        body: { productId: 'prod1', rating: 5, comment: 'Another great review!' },
      });

      await reviewsHandler(req as NextApiRequest, res as NextApiResponse);

      expect(res._getStatusCode()).toBe(409);
      expect(JSON.parse(res._getData())).toEqual({ error: 'You have already reviewed this product.' });
    });

    it('should fail with invalid rating (400) - too high', async () => {
      const { req, res } = createMocks({
        method: 'POST' as RequestMethod,
        body: { productId: 'prod1', rating: 6, comment: 'Too good!' },
      });
      await reviewsHandler(req as NextApiRequest, res as NextApiResponse);
      expect(res._getStatusCode()).toBe(400);
      expect(JSON.parse(res._getData())).toEqual({ error: 'Rating is required and must be a number between 1 and 5.' });
    });

    it('should fail with invalid rating (400) - not a number', async () => {
        const { req, res } = createMocks({
          method: 'POST' as RequestMethod,
          body: { productId: 'prod1', rating: "five-stars", comment: 'Text rating!' },
        });
        await reviewsHandler(req as NextApiRequest, res as NextApiResponse);
        expect(res._getStatusCode()).toBe(400);
        expect(JSON.parse(res._getData())).toEqual({ error: 'Rating is required and must be a number between 1 and 5.' });
      });


    it('should fail if not authenticated (401)', async () => {
      (supabase.auth.getSession as jest.Mock).mockResolvedValue({ data: { session: null }, error: null });

      const { req, res } = createMocks({
        method: 'POST' as RequestMethod,
        body: { productId: 'prod1', rating: 5, comment: 'Trying to review without login' },
      });

      await reviewsHandler(req as NextApiRequest, res as NextApiResponse);
      expect(res._getStatusCode()).toBe(401);
      expect(JSON.parse(res._getData())).toEqual({ error: 'Not authenticated or session error.' });
    });

    it('should fail if Supabase user email is missing (401)', async () => {
      (supabase.auth.getSession as jest.Mock).mockResolvedValue({
        data: { session: { user: { id: 'supaUserId', email: null } } }, // No email
        error: null,
      });
       const { req, res } = createMocks({
        method: 'POST' as RequestMethod,
        body: { productId: 'prod1', rating: 5, comment: 'Review with no email in session' },
      });
      await reviewsHandler(req as NextApiRequest, res as NextApiResponse);
      expect(res._getStatusCode()).toBe(401);
      expect(JSON.parse(res._getData())).toEqual({ error: 'User email not found in session.' });
    });

    it('should fail if user not found in Prisma database (404)', async () => {
      (supabase.auth.getSession as jest.Mock).mockResolvedValue({
        data: { session: { user: { id: 'supaUserId', email: 'unknown@example.com' } } },
        error: null,
      });
      (prisma.user.findUnique as jest.Mock).mockResolvedValue(null); // User not found in Prisma

      const { req, res } = createMocks({
        method: 'POST' as RequestMethod,
        body: { productId: 'prod1', rating: 5, comment: 'User exists in Supa, not Prisma' },
      });
      await reviewsHandler(req as NextApiRequest, res as NextApiResponse);
      expect(res._getStatusCode()).toBe(404);
      expect(JSON.parse(res._getData())).toEqual({ error: 'User not found in our database.' });
    });
  });

  describe('GET /api/reviews/[productId]', () => {
    it('should successfully fetch reviews for a product (200)', async () => {
      const mockReviewsList = [
        { id: 'rev1', productId: 'prod123', userId: 1, rating: 5, comment: 'Excellent!', createdAt: new Date().toISOString() },
        { id: 'rev2', productId: 'prod123', userId: 2, rating: 4, comment: 'Very good.', createdAt: new Date().toISOString() },
      ];
      (prisma.productReview.findMany as jest.Mock).mockResolvedValue(mockReviewsList);

      const { req, res } = createMocks({
        method: 'GET' as RequestMethod,
        query: { productId: 'prod123' },
      });

      await productReviewsHandler(req as NextApiRequest, res as NextApiResponse);

      expect(res._getStatusCode()).toBe(200);
      expect(JSON.parse(res._getData())).toEqual(mockReviewsList);
      expect(prisma.productReview.findMany).toHaveBeenCalledWith(expect.objectContaining({
        where: { productId: 'prod123' },
      }));
    });

    it('should return an empty array if no reviews found (200)', async () => {
      (prisma.productReview.findMany as jest.Mock).mockResolvedValue([]);

      const { req, res } = createMocks({
        method: 'GET' as RequestMethod,
        query: { productId: 'prodNonExistent' },
      });

      await productReviewsHandler(req as NextApiRequest, res as NextApiResponse);

      expect(res._getStatusCode()).toBe(200);
      expect(JSON.parse(res._getData())).toEqual([]);
    });

    it('should fail if productId is missing (400)', async () => {
      // Simulate how Next.js might pass undefined if param is missing or route is mistyped by test
      const { req, res } = createMocks({
        method: 'GET' as RequestMethod,
        query: {}, // No productId
      });

      await productReviewsHandler(req as NextApiRequest, res as NextApiResponse);

      expect(res._getStatusCode()).toBe(400);
      expect(JSON.parse(res._getData())).toEqual({ error: 'productId is required in the URL path and must be a string.' });
    });
  });
});
