import categoriesApiHandler from '@/pages/api/categories'; // Correctly import the default export
import { CATEGORIES } from '@/data/categories';
// Prisma is now mocked from @prisma/client directly in the jest.mock call
import { createMocks, createRequest as _createRequest, createResponse as _createResponse } from 'node-mocks-http';
import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

// Mock Prisma
jest.mock('@prisma/client', () => {
  const mockPrismaClient = {
    category: {
      findMany: jest.fn(),
    },
    $disconnect: jest.fn(),
  };
  return { PrismaClient: jest.fn(() => mockPrismaClient) };
});

// Mock console.error
let consoleErrorSpy: jest.SpyInstance;

describe('/api/categories API Endpoint', () => {
  let mockPrismaCategory: any;

  beforeEach(() => {
    jest.clearAllMocks();
    consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    // Use the already imported and mocked PrismaClient
    const prisma = new PrismaClient();
    mockPrismaCategory = (prisma as any).category;
  });

  afterEach(() => {
    consoleErrorSpy.mockRestore();
  });

  test('should return categories from DB if query is successful', async () => {
    const dbCategories = [{ id: 'db1', name: 'DB Category', slug: 'db-cat', icon: 'Database' }];
    mockPrismaCategory.findMany.mockResolvedValueOnce(dbCategories);

    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: 'GET',
    });

    await categoriesApiHandler(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual(dbCategories);
    expect(mockPrismaCategory.findMany).toHaveBeenCalledTimes(1);
  });

  test('should return default CATEGORIES if DB query returns empty array and CATEGORIES is not empty', async () => {
    mockPrismaCategory.findMany.mockResolvedValueOnce([]);
    // Ensure CATEGORIES has data for this test case
    const _originalCategories = [...CATEGORIES];
    if (CATEGORIES.length === 0) {
        CATEGORIES.push({ id: 'fallback1', name: 'Fallback Category', slug: 'fallback-cat', icon: 'FallbackIcon' });
    }

    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: 'GET',
    });

    await categoriesApiHandler(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual(CATEGORIES);
    expect(mockPrismaCategory.findMany).toHaveBeenCalledTimes(1);

    // Restore original CATEGORIES if modified
    if (_originalCategories.length === 0 && CATEGORIES.length > 0) {
        CATEGORIES.pop();
    }
  });

  test('should return empty array if DB query returns empty array and CATEGORIES is also empty', async () => {
    mockPrismaCategory.findMany.mockResolvedValueOnce([]);
    const _originalCategories = [...CATEGORIES];
    // Temporarily empty CATEGORIES for this test
    const tempCategoriesStore = [...CATEGORIES];
    CATEGORIES.length = 0;


    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: 'GET',
    });

    await categoriesApiHandler(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual([]);
    expect(mockPrismaCategory.findMany).toHaveBeenCalledTimes(1);

    // Restore CATEGORIES
    CATEGORIES.push(...tempCategoriesStore);
  });

  test('should return 500 and error message if DB query throws error', async () => {
    const dbError = new Error('DB Error');
    mockPrismaCategory.findMany.mockRejectedValueOnce(dbError);

    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: 'GET',
    });

    await categoriesApiHandler(req, res);

    expect(res._getStatusCode()).toBe(500);
    expect(res._getJSONData()).toEqual({ error: 'Failed to fetch categories from database.' });
    expect(mockPrismaCategory.findMany).toHaveBeenCalledTimes(1);
    expect(consoleErrorSpy).toHaveBeenCalledWith('Failed to fetch categories from database:', dbError);
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
    expect(mockPrismaCategory.findMany).not.toHaveBeenCalled();
  });
});
