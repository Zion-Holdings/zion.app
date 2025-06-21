import { handler as categoriesApiHandler } from '@/pages/api/categories';
import { CATEGORIES } from '@/data/categories';
import { prisma } from '@/lib/prisma'; // Adjust if your prisma instance is exported differently
import { createMocks, createRequest, createResponse } from 'node-mocks-http';
import type { NextApiRequest, NextApiResponse } from 'next';

// Mock Prisma
jest.mock('@/lib/prisma', () => ({
  prisma: {
    category: {
      findMany: jest.fn(),
    },
  },
}));

// Mock console.error
let consoleErrorSpy: jest.SpyInstance;

describe('/api/categories API Endpoint', () => {
  let mockPrismaClient: any; // Type for the mocked prisma client

  beforeEach(() => {
    jest.clearAllMocks();
    consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    // Get the mocked prisma client
    mockPrismaClient = require('@/lib/prisma').prisma;
  });

  afterEach(() => {
    consoleErrorSpy.mockRestore();
  });

  test('should return categories from DB if query is successful', async () => {
    const dbCategories = [{ id: 'db1', name: 'DB Category', slug: 'db-cat', icon: 'Database' }];
    mockPrismaClient.category.findMany.mockResolvedValueOnce(dbCategories);

    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: 'GET',
    });

    await categoriesApiHandler(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual(dbCategories);
    expect(mockPrismaClient.category.findMany).toHaveBeenCalledTimes(1);
  });

  test('should return default CATEGORIES if DB query returns empty array', async () => {
    mockPrismaClient.category.findMany.mockResolvedValueOnce([]);

    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: 'GET',
    });

    await categoriesApiHandler(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual(CATEGORIES);
    expect(mockPrismaClient.category.findMany).toHaveBeenCalledTimes(1);
  });

  test('should return default CATEGORIES and log error if DB query throws error', async () => {
    const dbError = new Error('DB Error');
    mockPrismaClient.category.findMany.mockRejectedValueOnce(dbError);

    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: 'GET',
    });

    await categoriesApiHandler(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual(CATEGORIES);
    expect(mockPrismaClient.category.findMany).toHaveBeenCalledTimes(1);
    expect(consoleErrorSpy).toHaveBeenCalledWith('Error fetching categories from DB, falling back to default. Error:', dbError);
  });

  test('should return 405 if method is not GET', async () => {
    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: 'POST',
      body: {
        name: 'Test Category',
      },
    });

    await categoriesApiHandler(req, res);

    expect(res._getStatusCode()).toBe(405);
    expect(res._getJSONData()).toEqual({ error: 'Method POST Not Allowed' });
    expect(mockPrismaClient.category.findMany).not.toHaveBeenCalled();
  });
});
