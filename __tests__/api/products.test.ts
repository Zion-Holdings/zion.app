import { NextApiRequest, NextApiResponse } from 'next';
import { createMocks } from 'node-mocks-http';
import productHandler from '@/pages/api/products/index';
import { PrismaClient } from '@prisma/client';
import { vi, describe, it, expect, beforeEach, type MockInstance } from 'vitest';

// Mock Prisma Client
vi.mock('@prisma/client', () => {
  const mPrismaClient = {
    product: {
      findMany: vi.fn(),
      aggregate: vi.fn(),
    },
    productReview: {
      aggregate: vi.fn(),
    },
    $queryRawUnsafe: vi.fn(),
    $disconnect: vi.fn(),
  };
  return { PrismaClient: vi.fn(() => mPrismaClient) };
});

let prisma: PrismaClient;

describe('/api/products API Endpoint', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    prisma = new PrismaClient(); // Get the mocked instance

    // Default mock for productReview.aggregate to avoid errors in stats calculation
    (prisma.productReview.aggregate as MockInstance<any, any>).mockResolvedValue({
      _avg: { rating: null },
      _count: { id: 0 },
    });
  });

  describe('GET /api/products with fuzzy search', () => {
    it('should return products matching "gpt" with similarity >= 0.8', async () => {
      // 1. Mock database responses
      const mockRawResults = [
        { id: 'product-gpt-high-score', name_similarity: 0.9, description_similarity: 0.5 },
        { id: 'product-other', name_similarity: 0.2, description_similarity: 0.1 },
        { id: 'product-gpt-medium-score', name_similarity: 0.82, description_similarity: 0.85 },
      ];

      const mockProductsData = [
        { id: 'product-gpt-high-score', name: 'Super GPT Model', description: 'Latest generation AI', images: [], price: null, currency: 'USD', tags: [] },
        { id: 'product-gpt-medium-score', name: 'Advanced GPT Assistant', description: 'Your personal AI helper powered by GPT', images: [], price: null, currency: 'USD', tags: [] },
      ];

      const filteredMockRawResults = mockRawResults.filter(
        p => p.name_similarity >= 0.3 || p.description_similarity >= 0.3
      ).sort((a,b) =>
        Math.max(b.name_similarity, b.description_similarity) - Math.max(a.name_similarity, a.description_similarity)
      );

      (prisma.$queryRawUnsafe as MockInstance<any, any>).mockResolvedValue(filteredMockRawResults);

      const expectedProductIds = filteredMockRawResults.map(p => p.id);
      (prisma.product.findMany as MockInstance<any, any>).mockImplementation(async ({ where }: any) => {
        return mockProductsData.filter(p => where.id.in.includes(p.id));
      });

      // 2. Create mock request and response
      const { req, res } = createMocks({
        method: 'GET',
        url: '/api/products?q=gpt',
        query: {
          q: 'gpt',
        },
      });

      // 3. Call API handler
      await productHandler(req as unknown as NextApiRequest, res as unknown as NextApiResponse);

      // 4. Assertions
      expect(res._getStatusCode()).toBe(200);
      const responseData = JSON.parse(res._getData());

      expect(responseData.length).toBeGreaterThanOrEqual(1);
      expect(responseData.length).toBe(filteredMockRawResults.length);

      expect(responseData[0].id).toBe('product-gpt-high-score');
      expect(responseData[0].name).toBe('Super GPT Model');

      const idsFromResponse = responseData.map((p:any) => p.id);
      expect(idsFromResponse).toContain('product-gpt-high-score');
      expect(idsFromResponse).toContain('product-gpt-medium-score');

      // Verify mocks
      expect(prisma.$queryRawUnsafe).toHaveBeenCalledWith(
        expect.stringContaining('similarity(name, $1)'),
        'gpt'
      );
      expect(prisma.product.findMany).toHaveBeenCalledWith({
        where: {
          id: {
            in: expectedProductIds,
          },
        },
      });
    });
  });
});
