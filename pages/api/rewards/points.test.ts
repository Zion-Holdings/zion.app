/// <reference types="vitest/globals" />
import { createMocks, RequestMethod } from 'node-mocks-http';
import type { NextApiRequest, NextApiResponse } from 'next';
import pointsHandler from './points'; // Adjust path if your handler is default exported

// Mock Supabase
const mockSupabaseFrom = vi.fn().mockReturnThis();
const mockSupabaseSelect = vi.fn().mockReturnThis();
const mockSupabaseEq = vi.fn();

vi.mock('@supabase/supabase-js', () => ({
  createClient: vi.fn(() => ({
    from: mockSupabaseFrom,
    select: mockSupabaseSelect,
    eq: mockSupabaseEq,
    auth: {
      getUser: vi.fn((token) => {
        if (token === 'valid-token') {
          return Promise.resolve({ data: { user: { id: 'user-123' } }, error: null });
        }
        if (token === 'error-token') {
          return Promise.resolve({ data: { user: null }, error: { message: 'Token processing error' } });
        }
        return Promise.resolve({ data: { user: null }, error: { message: 'Invalid token' } });
      }),
    },
  })),
}));

describe('/api/rewards/points API Endpoint', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // Reset process.env mocks if any were set elsewhere
    process.env.NEXT_PUBLIC_SUPABASE_URL = 'test-url';
    process.env.SUPABASE_SERVICE_ROLE_KEY = 'test-key';
  });

  const mockRequest = (method: RequestMethod = 'GET', headers: any = {}) => {
    return createMocks<NextApiRequest, NextApiResponse>({ method, headers }).req;
  };

  const mockResponse = () => {
    return createMocks<NextApiRequest, NextApiResponse>().res;
  };

  test('should return 405 if method is not GET', async () => {
    const req = mockRequest('POST');
    const res = mockResponse();

    await pointsHandler(req, res);

    expect(res.statusCode).toBe(405);
    expect(res._getHeaders().allow).toContain('GET');
  });

  test('should return 401 if no valid auth token is provided', async () => {
    const req = mockRequest('GET', { authorization: 'Bearer invalid-token' });
    const res = mockResponse();

    await pointsHandler(req, res);

    expect(res.statusCode).toBe(401);
    expect(res._getJSONData()).toEqual({ error: 'Unauthorized: User not authenticated.' });
  });

  test('should return 401 if auth token processing leads to error', async () => {
    const req = mockRequest('GET', { authorization: 'Bearer error-token' });
    const res = mockResponse();

    await pointsHandler(req, res);

    expect(res.statusCode).toBe(401);
    expect(res._getJSONData()).toEqual({ error: 'Unauthorized: User not authenticated.' });
  });

  test('should return 200 and points balance for a valid user', async () => {
    const req = mockRequest('GET', { authorization: 'Bearer valid-token' });
    const res = mockResponse();
    const mockPointsData = [{ delta: 100 }, { delta: 50 }, { delta: -20 }];
    mockSupabaseEq.mockResolvedValueOnce({ data: mockPointsData, error: null });

    await pointsHandler(req, res);

    expect(res.statusCode).toBe(200);
    expect(res._getJSONData()).toEqual({ points: 130 });
    expect(mockSupabaseFrom).toHaveBeenCalledWith('points_ledger');
    expect(mockSupabaseSelect).toHaveBeenCalledWith('delta');
    expect(mockSupabaseEq).toHaveBeenCalledWith('user_id', 'user-123');
  });

  test('should return 200 and 0 points if user has no ledger entries', async () => {
    const req = mockRequest('GET', { authorization: 'Bearer valid-token' });
    const res = mockResponse();
    mockSupabaseEq.mockResolvedValueOnce({ data: [], error: null });

    await pointsHandler(req, res);

    expect(res.statusCode).toBe(200);
    expect(res._getJSONData()).toEqual({ points: 0 });
  });

  test('should return 200 and 0 points if ledger data is null', async () => {
    const req = mockRequest('GET', { authorization: 'Bearer valid-token' });
    const res = mockResponse();
    mockSupabaseEq.mockResolvedValueOnce({ data: null, error: null });

    await pointsHandler(req, res);

    expect(res.statusCode).toBe(200);
    expect(res._getJSONData()).toEqual({ points: 0 });
  });

  test('should return 500 if Supabase query fails', async () => {
    const req = mockRequest('GET', { authorization: 'Bearer valid-token' });
    const res = mockResponse();
    mockSupabaseEq.mockResolvedValueOnce({ data: null, error: { message: 'Supabase error' } });

    await pointsHandler(req, res);

    expect(res.statusCode).toBe(500);
    expect(res._getJSONData()).toEqual(expect.objectContaining({ error: 'Failed to fetch points' }));
  });
});
