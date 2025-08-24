import { createMocks, RequestMethod } from 'node-mocks-http';
import type { NextApiRequest, NextApiResponse } from 'next';
import handler from '@/pages/api/admin/generate-pitch-deck'; // Adjust path as needed
import { supabase } from '@/integrations/supabase/client'; // Adjust path

// Mock Supabase client
jest.mock('@/integrations/supabase/client', () => ({
  supabase: {
    auth: {
      getUser: jest.fn(),
    },
    from: jest.fn().mockReturnThis(), // Ensure 'from' returns 'this' for chaining
    select: jest.fn(),
    eq: jest.fn().mockReturnThis(), // Ensure 'eq' returns 'this' for chaining
    single: jest.fn(), // Mock 'single' if it's used after 'eq'
  },
}));


describe('/api/admin/generate-pitch-deck API Endpoint', () => {
  const mockInputData = { companyMission: 'Test', currentFundingStage: 'Seed', visionGoals: 'Conquer', roundType: 'Seed', targetRaiseAmount: '100k' };
  const mockSyncedData = { activeUsers30d: '1000', gmv: '50k' , notableClients: []};
  const mockPrompt = "Test prompt";

  beforeEach(() => { // Changed from afterEach to beforeEach for clarity, or use mockClear() in afterEach
    jest.clearAllMocks();

    // Default mock implementations for Supabase
    (supabase.auth.getUser as jest.Mock).mockResolvedValue({ data: { user: { id: 'test-user-id' } }, error: null });
    // Chainable mocks for Supabase query builder
    (supabase.from as jest.Mock).mockReturnThis();
    (supabase.select as jest.Mock).mockReturnThis();
    (supabase.eq as jest.Mock).mockReturnThis();
    (supabase.single as jest.Mock).mockResolvedValue({ data: { role: 'admin' }, error: null });
  });

  test('should return 405 if method is not POST', async () => {
    const { req, res } = createMocks({
      method: 'GET' as RequestMethod,
    });

    await handler(req as NextApiRequest, res as NextApiResponse<any>);

    expect(res._getStatusCode()).toBe(405);
    expect(res._getHeaders().allow).toContain('POST');
  });

  test('should return 401 if Authorization header is missing', async () => {
    // No need to mock supabase.auth.getUser for this, as it fails before that
    const { req, res } = createMocks({
        method: 'POST' as RequestMethod,
        headers: { /* No Authorization header */ },
        body: { prompt: mockPrompt, inputData: mockInputData, syncedData: mockSyncedData },
    });
    await handler(req as NextApiRequest, res as NextApiResponse<any>);
    expect(res._getStatusCode()).toBe(401);
    expect(res._getJSONData().message).toBe('Unauthorized: Missing or invalid token.');
  });


  test('should return 401 if token is invalid or user not found', async () => {
    (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ data: { user: null }, error: new Error('Invalid token') });

    const { req, res } = createMocks({
      method: 'POST' as RequestMethod,
      headers: { Authorization: 'Bearer invalid-token' },
      body: { prompt: mockPrompt, inputData: mockInputData, syncedData: mockSyncedData },
    });

    await handler(req as NextApiRequest, res as NextApiResponse<any>);
    expect(res._getStatusCode()).toBe(401);
    expect(res._getJSONData().message).toBe('Unauthorized: Invalid token or user not found.');
  });

  test('should return 403 if user role is not authorized', async () => {
    (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ data: { user: { id: 'user-id' } }, error: null });
    // Mock profile fetch to return a non-authorized role
    (supabase.from as jest.Mock).mockReturnValueOnce({
        select: jest.fn().mockReturnValueOnce({
            eq: jest.fn().mockReturnValueOnce({
                single: jest.fn().mockResolvedValueOnce({ data: { role: 'user' }, error: null })
            })
        })
    });


    const { req, res } = createMocks({
      method: 'POST' as RequestMethod,
      headers: { Authorization: 'Bearer valid-token-for-user-role' },
      body: { prompt: mockPrompt, inputData: mockInputData, syncedData: mockSyncedData },
    });

    await handler(req as NextApiRequest, res as NextApiResponse<any>);
    expect(res._getStatusCode()).toBe(403);
    expect(res._getJSONData().message).toBe('Forbidden: Access denied. Insufficient privileges.');
  });


  test('should return 400 if required parameters are missing', async () => {
    // Auth and role are fine for this test
    (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ data: { user: { id: 'user-id' } }, error: null });
    (supabase.from('profiles').select as jest.Mock).mockResolvedValueOnce({ data: { role: 'admin' }, error: null });


    const { req, res } = createMocks({
      method: 'POST' as RequestMethod,
      headers: { Authorization: 'Bearer valid-token' },
      body: { /* prompt: mockPrompt, */ inputData: mockInputData, syncedData: mockSyncedData }, // Missing prompt
    });

    await handler(req as NextApiRequest, res as NextApiResponse<any>);
    expect(res._getStatusCode()).toBe(400);
    expect(res._getJSONData().message).toContain('Missing required parameters');
  });

  test('should return 200 and mock deck data on successful generation', async () => {
    // Auth and role are fine
    (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ data: { user: { id: 'user-id' } }, error: null });
    (supabase.from('profiles').select as jest.Mock).mockResolvedValueOnce({ data: { role: 'admin' }, error: null });


    const { req, res } = createMocks({
      method: 'POST' as RequestMethod,
      headers: { Authorization: 'Bearer valid-token' },
      body: { prompt: mockPrompt, inputData: mockInputData, syncedData: mockSyncedData },
    });

    await handler(req as NextApiRequest, res as NextApiResponse<any>);
    expect(res._getStatusCode()).toBe(200);
    const responseData = res._getJSONData();
    expect(responseData.slides).toBeInstanceOf(Array);
    expect(responseData.slides.length).toBeGreaterThan(0);
    expect(responseData.slides[0].title).toBeDefined();
  });

  test('should return 500 if fetching profile fails', async () => {
    (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ data: { user: { id: 'user-id' } }, error: null });
    // Simulate profile fetch error
     (supabase.from as jest.Mock).mockReturnValueOnce({
        select: jest.fn().mockReturnValueOnce({
            eq: jest.fn().mockReturnValueOnce({
                single: jest.fn().mockResolvedValueOnce({ data: null, error: new Error('Failed to fetch profile') })
            })
        })
    });

    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    const { req, res } = createMocks({
        method: 'POST' as RequestMethod,
        headers: { Authorization: 'Bearer valid-token' },
        body: { prompt: mockPrompt, inputData: mockInputData, syncedData: mockSyncedData },
    });

    await handler(req as NextApiRequest, res as NextApiResponse<any>);

    expect(res._getStatusCode()).toBe(500);
    expect(res._getJSONData().message).toBe('Error fetching user profile.');

    consoleErrorSpy.mockRestore();
  });

  // Test for internal server error in generateDeckWithGPT (less direct to test)
  test('should return 500 if an unexpected error occurs during deck generation', async () => {
    (supabase.auth.getUser as jest.Mock).mockResolvedValueOnce({ data: { user: { id: 'user-id' } }, error: null });
    (supabase.from('profiles').select as jest.Mock).mockResolvedValueOnce({ data: { role: 'admin' }, error: null });

    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    const originalStringify = JSON.stringify;
    // Simulate an error within the try block of the handler, after auth.
    JSON.stringify = () => { throw new Error("Mock JSON.stringify error during processing"); };

    const { req, res } = createMocks({
        method: 'POST' as RequestMethod,
        headers: { Authorization: 'Bearer valid-token' },
        body: { prompt: mockPrompt, inputData: mockInputData, syncedData: mockSyncedData },
    });

    await handler(req as NextApiRequest, res as NextApiResponse<any>);

    expect(res._getStatusCode()).toBe(500);
    // The error message comes from the catch block: error.message || 'Internal Server Error...'
    expect(res._getJSONData().message).toBe("Mock JSON.stringify error during processing");

    JSON.stringify = originalStringify;
    consoleErrorSpy.mockRestore();
  });

});
