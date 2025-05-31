import { createMocks, createRequest, createResponse } from 'node-mocks-http';
import type { NextApiRequest, NextApiResponse } from 'next';
import handler from '../../pages/api/trust/score/[userId]'; // Adjust path as needed

// Mock the Supabase client
const mockSupabaseFrom = jest.fn().mockReturnThis();
const mockSupabaseSelect = jest.fn().mockReturnThis();
const mockSupabaseEq = jest.fn().mockReturnThis();
const mockSupabaseOrder = jest.fn().mockReturnThis();
const mockSupabaseLimit = jest.fn().mockReturnThis();
const mockSupabaseSingle = jest.fn();

jest.mock('@supabase/supabase-js', () => ({
  createClient: jest.fn(() => ({
    from: mockSupabaseFrom,
    select: mockSupabaseSelect,
    eq: mockSupabaseEq,
    order: mockSupabaseOrder,
    limit: mockSupabaseLimit,
    single: mockSupabaseSingle,
  })),
}));

describe('/api/trust/score/[userId] API Endpoint', () => {
  beforeEach(() => {
    // Reset mocks before each test
    mockSupabaseFrom.mockClear();
    mockSupabaseSelect.mockClear();
    mockSupabaseEq.mockClear();
    mockSupabaseOrder.mockClear();
    mockSupabaseLimit.mockClear();
    mockSupabaseSingle.mockClear();
  });

  test('should return 405 if method is not GET', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      query: { userId: '1' },
    });

    await handler(req as unknown as NextApiRequest, res as unknown as NextApiResponse);

    expect(res._getStatusCode()).toBe(405);
    expect(res._getHeaders().allow).toBe('GET');
  });

  test('should return 400 if userId is missing', async () => {
    const { req, res } = createMocks({
      method: 'GET',
      query: {}, // No userId
    });

    await handler(req as unknown as NextApiRequest, res as unknown as NextApiResponse);

    expect(res._getStatusCode()).toBe(400);
    expect(JSON.parse(res._getData())).toEqual({ error: 'User ID is required and must be a string.' });
  });

  test('should return 400 if userId is not a string (e.g. array)', async () => {
    const { req, res } = createMocks({
      method: 'GET',
      query: { userId: ['1', '2'] },
    });

    await handler(req as unknown as NextApiRequest, res as unknown as NextApiResponse);

    expect(res._getStatusCode()).toBe(400);
    expect(JSON.parse(res._getData())).toEqual({ error: 'User ID is required and must be a string.' });
  });


  test('should return trust score data if user and score are found', async () => {
    const mockScoreData = {
      id: 1,
      score: 85,
      userId: 123,
      operatorGptAnalysis: 'Looks good',
      components: [{ id: 1, componentType: 'completionRate', value: 0.9, weight: 0.3 }],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    mockSupabaseSingle.mockResolvedValueOnce({ data: mockScoreData, error: null });

    const { req, res } = createMocks({
      method: 'GET',
      query: { userId: '123' },
    });

    await handler(req as unknown as NextApiRequest, res as unknown as NextApiResponse);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual(mockScoreData);
    expect(mockSupabaseFrom).toHaveBeenCalledWith('TrustScore');
    expect(mockSupabaseSelect).toHaveBeenCalledWith(expect.stringContaining('components:TrustScoreComponent(*)'));
    expect(mockSupabaseEq).toHaveBeenCalledWith('userId', 123); // Ensure string '123' is parsed to number
    expect(mockSupabaseOrder).toHaveBeenCalledWith('createdAt', { ascending: false });
    expect(mockSupabaseLimit).toHaveBeenCalledWith(1);
    expect(mockSupabaseSingle).toHaveBeenCalled();
  });

  test('should return 404 if trust score is not found for the user', async () => {
    mockSupabaseSingle.mockResolvedValueOnce({ data: null, error: { code: 'PGRST116', message: 'Row not found' } });

    const { req, res } = createMocks({
      method: 'GET',
      query: { userId: '124' },
    });

    await handler(req as unknown as NextApiRequest, res as unknown as NextApiResponse);

    expect(res._getStatusCode()).toBe(404);
    expect(JSON.parse(res._getData())).toEqual({ error: 'Trust score not found for this user.' });
  });

  test('should also return 404 if data is null without specific PGRST116 error (general not found)', async () => {
    // This covers cases where .single() might return {data: null, error: null} if no row matches but no DB error occurs.
    mockSupabaseSingle.mockResolvedValueOnce({ data: null, error: null });

    const { req, res } = createMocks({
      method: 'GET',
      query: { userId: '125' },
    });

    await handler(req as unknown as NextApiRequest, res as unknown as NextApiResponse);

    expect(res._getStatusCode()).toBe(404);
    expect(JSON.parse(res._getData())).toEqual({ error: 'Trust score not found for this user.' });
  });


  test('should return 500 if there is a database error (not PGRST116)', async () => {
    const dbError = { message: 'Internal server error', code: 'XXYYZ' };
    mockSupabaseSingle.mockResolvedValueOnce({ data: null, error: dbError });

    const { req, res } = createMocks({
      method: 'GET',
      query: { userId: '126' },
    });

    await handler(req as unknown as NextApiRequest, res as unknown as NextApiResponse);

    expect(res._getStatusCode()).toBe(500);
    expect(JSON.parse(res._getData())).toEqual({ error: 'Internal server error while fetching trust score.' });
  });

  // This assumes that NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are set in the test environment
  // or the module handles their absence gracefully (which it should, by console.error but not crashing).
  // For a more robust test, you might set these env vars during test setup.
  test('handler initializes Supabase client (conceptual check)', () => {
    // This test just ensures the module doesn't crash on import due to env var issues.
    // Actual Supabase client functionality is tested by the other cases via mocks.
    expect(handler).toBeDefined();
  });

});
