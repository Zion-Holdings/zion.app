import { createMocks, RequestMethod } from 'node-mocks-http';
import type { NextApiRequest, NextApiResponse } from 'next';
import reviewsHandler from '@/pages/api/reviews'; // Handler for POST /api/reviews
import productReviewsHandler from '@/pages/api/reviews/[productId]'; // Handler for GET /api/reviews/[productId]
import { PrismaClient, ProductReview, User as PrismaUser, Prisma } from '@prisma/client'; // Import Prisma types
import { supabase } from '@/integrations/supabase/client';
import type { User as SupabaseUser, Session, AuthError } from '@supabase/supabase-js'; // Supabase types
import { describe, it, expect, beforeEach, vi } from 'vitest';

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
  return { 
    PrismaClient: jest.fn(() => mockPrismaClient),
    // Mock Prisma known request error for testing specific error codes
    Prisma: {
      PrismaClientKnownRequestError: class PrismaClientKnownRequestError extends Error {
        code: string;
        meta?: Record<string, unknown>;
        constructor(message: string, code: string, clientVersion: string, meta?: Record<string, unknown>) {
          super(message);
          this.code = code;
          this.meta = meta;
          this.name = 'PrismaClientKnownRequestError';
        }
      }
    }
  };
});

// Mock Supabase Client
jest.mock('@/integrations/supabase/client', () => ({
  supabase: {
    auth: {
      getSession: jest.fn(),
    },
  },
}));

// Define expected response types
interface ErrorResponse {
  error: string;
  details?: string;
}
// For POST /api/reviews, success is the created ProductReview
type PostReviewSuccessResponse = ProductReview;
// For GET /api/reviews/[productId], success is ProductReview[]
type GetReviewsSuccessResponse = ProductReview[];


describe('/api/reviews API Endpoint', () => {
  let prismaMock: PrismaClient; // Use PrismaClient type for the mock

  beforeEach(() => {
    prismaMock = new PrismaClient();
    (prismaMock.productReview.create as jest.Mock).mockReset();
    (prismaMock.productReview.findMany as jest.Mock).mockReset();
    (prismaMock.user.findUnique as jest.Mock).mockReset();
    (prismaMock.$disconnect as jest.Mock).mockReset(); // This is not typically called in handlers
    (supabase.auth.getSession as jest.Mock).mockReset();
  });

  describe('POST /api/reviews', () => {
    it('should successfully create a review (201)', async () => {
      const mockPrismaUser: PrismaUser = { id: 1, email: 'test@example.com', name: 'Test User', passwordHash: '', createdAt: new Date(), updatedAt: new Date(), avatarUrl: null, bio: null, companyId: null, headline: null, lastLoginAt: null, notifications: {}, profileComplete: false, resetToken: null, resetTokenExpiry: null, role: 'USER', softDeleted: false, userType: 'individual'};
      const mockReviewResponse: ProductReview = { id: 'review1', productId: 'prod1', userId: 1, rating: 5, comment: 'Great!', createdAt: new Date(), updatedAt: new Date() };
      const mockSupabaseSession: Session = { user: { id: 'supaUserId', email: 'test@example.com' } as SupabaseUser, access_token: 'token', refresh_token: 'ref', expires_in: 3600, token_type: 'bearer', expires_at: Date.now()+3600000 };


      (supabase.auth.getSession as jest.Mock).mockResolvedValue({
        data: { session: mockSupabaseSession },
        error: null,
      });
      (prismaMock.user.findUnique as jest.Mock).mockResolvedValue(mockPrismaUser);
      (prismaMock.productReview.create as jest.Mock).mockResolvedValue(mockReviewResponse);

      const { req, res } = createMocks({
        method: 'POST' as RequestMethod,
        body: { productId: 'prod1', rating: 5, comment: 'Great!' },
      });

      await reviewsHandler(req as NextApiRequest, res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse>);

      expect(res._getStatusCode()).toBe(201);
      expect(res._getJSONData()).toEqual(mockReviewResponse); // Assuming ProductReview is directly returned
      expect(prismaMock.productReview.create).toHaveBeenCalledWith({
        data: { productId: 'prod1', rating: 5, comment: 'Great!', userId: mockPrismaUser.id },
      });
    });

    it('should fail if user already reviewed the product (409)', async () => {
      const mockSupabaseSession: Session = { user: { id: 'supaUserId', email: 'test@example.com' } as SupabaseUser, access_token: 'token', refresh_token: 'ref', expires_in: 3600, token_type: 'bearer', expires_at: Date.now()+3600000 };

      (supabase.auth.getSession as jest.Mock).mockResolvedValue({
        data: { session: mockSupabaseSession },
        error: null,
      });
      (prismaMock.user.findUnique as jest.Mock).mockResolvedValue({ id: 1, email: 'test@example.com' });
      (prismaMock.productReview.create as jest.Mock).mockRejectedValue(
        new Prisma.PrismaClientKnownRequestError('Unique constraint failed', 'P2002', 'client-version', {
          target: ['productId', 'userId'],
        })
      );

      const { req, res } = createMocks({
        method: 'POST' as RequestMethod,
        body: { productId: 'prod1', rating: 5, comment: 'Another great review!' },
      });

      await reviewsHandler(req as NextApiRequest, res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse>);

      expect(res._getStatusCode()).toBe(409);
      expect(res._getJSONData()).toEqual({ error: 'You have already reviewed this product.' });
    });
    
    it('should fail with invalid rating (400) - too high', async () => {
      const { req, res } = createMocks({
        method: 'POST' as RequestMethod,
        body: { productId: 'prod1', rating: 6, comment: 'Too good!' },
      });
      await reviewsHandler(req as NextApiRequest, res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse>);
      expect(res._getStatusCode()).toBe(400);
      expect(res._getJSONData()).toEqual({ error: 'Rating is required and must be a number between 1 and 5.' });
    });

    it('should fail with invalid rating (400) - not a number', async () => {
        const { req, res } = createMocks({
          method: 'POST' as RequestMethod,
          body: { productId: 'prod1', rating: "five-stars", comment: 'Text rating!' },
        });
        await reviewsHandler(req as NextApiRequest, res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse>);
        expect(res._getStatusCode()).toBe(400);
        expect(res._getJSONData()).toEqual({ error: 'Rating is required and must be a number between 1 and 5.' });
      });


    it('should fail if not authenticated (401)', async () => {
      (supabase.auth.getSession as jest.Mock).mockResolvedValue({ data: { session: null }, error: null });

      const { req, res } = createMocks({
        method: 'POST' as RequestMethod,
        body: { productId: 'prod1', rating: 5, comment: 'Trying to review without login' },
      });

      await reviewsHandler(req as NextApiRequest, res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse>);
      expect(res._getStatusCode()).toBe(401);
      expect(res._getJSONData()).toEqual({ error: 'Not authenticated or session error.' });
    });

    it('should fail if Supabase user email is missing (401)', async () => {
      const mockSupabaseSessionNoEmail: Session = { user: { id: 'supaUserId', email: undefined } as SupabaseUser, access_token: 'token', refresh_token: 'ref', expires_in: 3600, token_type: 'bearer', expires_at: Date.now()+3600000 };
      (supabase.auth.getSession as jest.Mock).mockResolvedValue({
        data: { session: mockSupabaseSessionNoEmail },
        error: null,
      });
       const { req, res } = createMocks({
        method: 'POST' as RequestMethod,
        body: { productId: 'prod1', rating: 5, comment: 'Review with no email in session' },
      });
      await reviewsHandler(req as NextApiRequest, res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse>);
      expect(res._getStatusCode()).toBe(401);
      expect(res._getJSONData()).toEqual({ error: 'User email not found in session.' });
    });

    it('should fail if user not found in Prisma database (404)', async () => {
      const mockSupabaseSession: Session = { user: { id: 'supaUserId', email: 'unknown@example.com' } as SupabaseUser, access_token: 'token', refresh_token: 'ref', expires_in: 3600, token_type: 'bearer', expires_at: Date.now()+3600000 };
      (supabase.auth.getSession as jest.Mock).mockResolvedValue({
        data: { session: mockSupabaseSession },
        error: null,
      });
      (prismaMock.user.findUnique as jest.Mock).mockResolvedValue(null); 

      const { req, res } = createMocks({
        method: 'POST' as RequestMethod,
        body: { productId: 'prod1', rating: 5, comment: 'User exists in Supa, not Prisma' },
      });
      await reviewsHandler(req as NextApiRequest, res as NextApiResponse<PostReviewSuccessResponse | ErrorResponse>);
      expect(res._getStatusCode()).toBe(404);
      expect(res._getJSONData()).toEqual({ error: 'User not found in our database.' });
    });
  });

  describe('GET /api/reviews/[productId]', () => {
    it('should successfully fetch reviews for a product (200)', async () => {
      const mockReviewsList: ProductReview[] = [
        { id: 'rev1', productId: 'prod123', userId: 1, rating: 5, comment: 'Excellent!', createdAt: new Date(), updatedAt: new Date() },
        { id: 'rev2', productId: 'prod123', userId: 2, rating: 4, comment: 'Very good.', createdAt: new Date(), updatedAt: new Date()},
      ];
      (prismaMock.productReview.findMany as jest.Mock).mockResolvedValue(mockReviewsList);

      const { req, res } = createMocks({
        method: 'GET' as RequestMethod,
        query: { productId: 'prod123' },
      });

      await productReviewsHandler(req as NextApiRequest, res as NextApiResponse<GetReviewsSuccessResponse | ErrorResponse>);

      expect(res._getStatusCode()).toBe(200);
      expect(res._getJSONData()).toEqual(mockReviewsList);
      expect(prismaMock.productReview.findMany).toHaveBeenCalledWith(expect.objectContaining({
        where: { productId: 'prod123' },
      }));
    });

    it('should return an empty array if no reviews found (200)', async () => {
      (prismaMock.productReview.findMany as jest.Mock).mockResolvedValue([]);

      const { req, res } = createMocks({
        method: 'GET' as RequestMethod,
        query: { productId: 'prodNonExistent' },
      });

      await productReviewsHandler(req as NextApiRequest, res as NextApiResponse<GetReviewsSuccessResponse | ErrorResponse>);

      expect(res._getStatusCode()).toBe(200);
      expect(res._getJSONData()).toEqual([]);
    });

    it('should fail if productId is missing (400)', async () => {
      const { req, res } = createMocks({
        method: 'GET' as RequestMethod,
        query: {}, // No productId
      });

      await productReviewsHandler(req as NextApiRequest, res as NextApiResponse<GetReviewsSuccessResponse | ErrorResponse>);

      expect(res._getStatusCode()).toBe(400);
      expect(res._getJSONData()).toEqual({ error: 'productId is required in the URL path and must be a string.' });
    });
  });
});
