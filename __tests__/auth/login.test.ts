import { loginUser } from '@/services/authService'; // registerUser removed as it's not the focus
import { NextApiRequest, NextApiResponse } from 'next';
import { vi, Mock, describe, it, expect, beforeEach, afterEach } from 'vitest';

// Mock Supabase client
// Changed from let to const as mockSignInWithPassword is not reassigned, only its properties (mock state) are changed.
const mockSignInWithPassword: Mock = vi.fn();

vi.mock('@supabase/supabase-js', async (importOriginal) => {
  // Using Record<string, unknown> for a general module structure.
  const actual = await importOriginal() as Record<string, unknown>; 
  // _mockSignInWithPassword is assigned to the global mockSignInWithPassword later
  // const _mockSignInWithPassword = vi.fn(); 
  const _mockSignUp = vi.fn();
  const _mockOnAuthStateChange = vi.fn(() => ({ data: { subscription: { unsubscribe: vi.fn() } } }));
  const _mockGetSession = vi.fn().mockResolvedValue({ data: { session: null }, error: null });

  return {
    ...actual,
    createClient: vi.fn(() => ({
      auth: {
        signInWithPassword: mockSignInWithPassword, // Use the global mock
        signUp: _mockSignUp, 
        onAuthStateChange: _mockOnAuthStateChange,
        getSession: _mockGetSession,
      },
      from: vi.fn().mockReturnThis(), 
    })),
    // This allows us to grab the instance of the mock used by the module
    __internalMockSignInWithPassword: mockSignInWithPassword, 
  };
});

// Import the handler
import loginHandler from '../../pages/api/auth/login';

// Import the mock functions from the mocked module
// More specific type for the imported module if its structure is known.
const supabaseMockModule = await import('@supabase/supabase-js') as { __internalMockSignInWithPassword: Mock };
// Assign the mock from the module to the global one. This was the previous behavior.
// However, since mockSignInWithPassword is now passed directly in createClient, this line might be redundant
// but kept for safety to ensure the global mock is the one used.
// mockSignInWithPassword = supabaseMockModule.__internalMockSignInWithPassword; // This line is problematic if mockSignInWithPassword is const.
// The key is that the vi.mock setup ensures the mockSignInWithPassword inside createClient is *our* mockSignInWithPassword.

// Helper to create mock NextApiRequest
const mockApiReq = (body: unknown, method: string = 'POST') => ({
  method,
  body,
} as NextApiRequest);

// Helper to create mock NextApiResponse
const mockApiRes = () => {
  const res: Partial<NextApiResponse> = {
    status: vi.fn().mockReturnThis(),
    json: vi.fn().mockReturnThis(),
    setHeader: vi.fn().mockReturnThis(),
    end: vi.fn().mockReturnThis(),
  };
  return res as NextApiResponse;
};

describe('/api/auth/login API Handler', () => {
  beforeEach(() => {
    // Reset the state of the mock, not reassign the variable
    mockSignInWithPassword.mockReset(); 
  });

  it('should return 405 if method is not POST', async () => {
    const req = mockApiReq({}, 'GET');
    const res = mockApiRes();
    await loginHandler(req, res);
    expect(res.status).toHaveBeenCalledWith(405);
    expect(res.end).toHaveBeenCalled();
  });

  it('should successfully log in a verified user and set authToken cookie', async () => {
    const testEmail = 'verified@example.com';
    const testPassword = 'password123';
    const mockAuthToken = 'mock-access-token';
    const mockSessionData = {
      access_token: mockAuthToken,
      refresh_token: 'mock-refresh-token',
    };
    const mockUserData = { id: 'user-123', email: testEmail };

    mockSignInWithPassword.mockResolvedValueOnce({
      data: { session: mockSessionData, user: mockUserData },
      error: null,
    });

    const req = mockApiReq({ email: testEmail, password: testPassword });
    const res = mockApiRes();
    await loginHandler(req, res);

    expect(mockSignInWithPassword).toHaveBeenCalledWith({ email: testEmail.toLowerCase(), password: testPassword });
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ user: mockUserData, accessToken: mockAuthToken, refreshToken: mockSessionData.refresh_token });
    expect(res.setHeader).toHaveBeenCalledWith(
      'Set-Cookie',
      `authToken=${mockAuthToken}; HttpOnly; Path=/; Secure; SameSite=Strict`
    );
  });

  it('should return 403 for login with unconfirmed email', async () => {
    const testEmail = 'unconfirmed@example.com';
    const testPassword = 'password123';

    mockSignInWithPassword.mockResolvedValueOnce({
      data: { session: null, user: null },
      error: { message: 'Email not confirmed' },
    });

    const req = mockApiReq({ email: testEmail, password: testPassword });
    const res = mockApiRes();
    await loginHandler(req, res);

    expect(mockSignInWithPassword).toHaveBeenCalledWith({ email: testEmail.toLowerCase(), password: testPassword });
    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.json).toHaveBeenCalledWith({
      error: 'Email not confirmed. Please check your inbox to verify your email.',
      code: 'EMAIL_NOT_CONFIRMED',
    });
    expect(res.setHeader).not.toHaveBeenCalledWith('Set-Cookie', expect.any(String));
  });

  it('should return 401 for invalid credentials', async () => {
    const testEmail = 'wrong@example.com';
    const testPassword = 'wrongpassword';

    mockSignInWithPassword.mockResolvedValueOnce({
      data: { session: null, user: null },
      error: { message: 'Invalid login credentials' },
    });

    const req = mockApiReq({ email: testEmail, password: testPassword });
    const res = mockApiRes();
    await loginHandler(req, res);

    expect(mockSignInWithPassword).toHaveBeenCalledWith({ email: testEmail.toLowerCase(), password: testPassword });
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ error: 'Invalid credentials', code: 'INVALID_CREDENTIALS' });
    expect(res.setHeader).not.toHaveBeenCalledWith('Set-Cookie', expect.any(String));
  });

  it('should return 401 for AuthApiError with status 400', async () => {
    const testEmail = 'authapierror@example.com';
    const testPassword = 'password123';

    mockSignInWithPassword.mockResolvedValueOnce({
      data: null,
      error: { name: 'AuthApiError', status: 400, message: 'Bad request by client' },
    });

    const req = mockApiReq({ email: testEmail, password: testPassword });
    const res = mockApiRes();
    await loginHandler(req, res);

    expect(mockSignInWithPassword).toHaveBeenCalledWith({ email: testEmail.toLowerCase(), password: testPassword });
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ error: 'Invalid credentials', code: 'INVALID_CREDENTIALS' });
    expect(res.setHeader).not.toHaveBeenCalledWith('Set-Cookie', expect.any(String));
  });

  it('should return 500 for generic error with status', async () => {
    const testEmail = 'servererror@example.com';
    const testPassword = 'password123';

    mockSignInWithPassword.mockResolvedValueOnce({
      data: null,
      error: { message: 'Some other error', status: 500 },
    });

    const req = mockApiReq({ email: testEmail, password: testPassword });
    const res = mockApiRes();
    await loginHandler(req, res);

    expect(mockSignInWithPassword).toHaveBeenCalledWith({ email: testEmail.toLowerCase(), password: testPassword });
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: 'Some other error', code: 'LOGIN_FAILED' });
    expect(res.setHeader).not.toHaveBeenCalledWith('Set-Cookie', expect.any(String));
  });

  it('should return 500 for generic error without status (defaults to 500)', async () => {
    const testEmail = 'genericerror@example.com';
    const testPassword = 'password123';

    mockSignInWithPassword.mockResolvedValueOnce({
      data: null,
      error: { message: 'Another error without status' }, // No status property
    });

    const req = mockApiReq({ email: testEmail, password: testPassword });
    const res = mockApiRes();
    await loginHandler(req, res);

    expect(mockSignInWithPassword).toHaveBeenCalledWith({ email: testEmail.toLowerCase(), password: testPassword });
    expect(res.status).toHaveBeenCalledWith(500); // Default status
    expect(res.json).toHaveBeenCalledWith({ error: 'Another error without status', code: 'LOGIN_FAILED' });
    expect(res.setHeader).not.toHaveBeenCalledWith('Set-Cookie', expect.any(String));
  });

  it('should also return 401 if Supabase returns no error but no session (fallback)', async () => {
    const testEmail = 'noerrornosession@example.com';
    const testPassword = 'password123';

    mockSignInWithPassword.mockResolvedValueOnce({
      data: { session: null, user: { id: '123', email: testEmail } },
      error: null,
    });

    const req = mockApiReq({ email: testEmail, password: testPassword });
    const res = mockApiRes();
    await loginHandler(req, res);

    expect(mockSignInWithPassword).toHaveBeenCalledWith({ email: testEmail.toLowerCase(), password: testPassword });
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ error: 'Invalid credentials - no session data', code: 'NO_SESSION_DATA' });
    expect(res.setHeader).not.toHaveBeenCalledWith('Set-Cookie', expect.any(String));
  });
});


describe('loginUser Service', () => {
  let originalFetch: typeof global.fetch;

  beforeEach(() => {
    originalFetch = global.fetch;
  });

  afterEach(() => {
    global.fetch = originalFetch;
    vi.restoreAllMocks();
  });

  it('should handle successful login', async () => {
    const mockSuccessResponse = {
      user: { id: 'user-123', email: 'test@example.com' },
      accessToken: 'mock-access-token',
      refreshToken: 'mock-refresh-token'
    };
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => mockSuccessResponse,
      headers: new Headers({ 'Set-Cookie': `authToken=${mockSuccessResponse.accessToken}; HttpOnly; Path=/; Secure; SameSite=Strict` })
    });

    const { res, data } = await loginUser('test@example.com', 'password123');
    expect(res.status).toBe(200);
    expect(data).toEqual(mockSuccessResponse);
    expect(global.fetch).toHaveBeenCalledWith(expect.stringContaining('/api/auth/login'), expect.any(Object));
  });

  it('should handle "Email not confirmed" (403) from API', async () => {
    const mockErrorResponse = {
      error: 'Email not confirmed. Please check your inbox to verify your email.',
      code: 'EMAIL_NOT_CONFIRMED',
    };
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 403,
      json: async () => mockErrorResponse,
      headers: new Headers()
    });

    const { res, data } = await loginUser('unconfirmed@example.com', 'password123');
    expect(res.status).toBe(403);
    expect(data).toEqual(mockErrorResponse);
  });

  it('should handle "Invalid credentials" (401) from API', async () => {
    const mockErrorResponse = { error: 'Invalid credentials', code: 'INVALID_CREDENTIALS' };
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 401,
      json: async () => mockErrorResponse,
      headers: new Headers()
    });

    const { res, data } = await loginUser('wrong@example.com', 'password123');
    expect(res.status).toBe(401);
    expect(data).toEqual(mockErrorResponse); 
  });

  it('should handle other errors (e.g., 500) from API', async () => {
    const mockErrorResponse = { error: 'Server error', code: 'LOGIN_FAILED' };
     global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 500,
      json: async () => mockErrorResponse,
      headers: new Headers()
    });
    const { res, data } = await loginUser('test@example.com', 'password');
    expect(res.status).toBe(500);
    expect(data).toEqual(mockErrorResponse); 
  });

  it('should handle network errors during fetch', async () => {
    global.fetch = vi.fn().mockRejectedValue(new Error('Network failed'));
    try {
      await loginUser('test@example.com', 'password');
    } catch (e: unknown) { // Changed from any to unknown
      if (e instanceof Error) { // Type check
        expect(e.message).toBe('Network failed');
      } else {
        // If it's not an Error instance, rethrow or handle differently
        throw e; 
      }
    }
  });
});
