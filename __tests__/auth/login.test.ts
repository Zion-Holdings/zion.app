import { loginUser } from '@/services/authService'; // registerUser removed as it's not the focus
import { NextApiRequest, NextApiResponse } from 'next';
import { vi, Mock, describe, it, expect, beforeEach, afterEach } from 'vitest';

// Mock Supabase client
let mockSignInWithPassword: Mock;

vi.mock('@supabase/supabase-js', async (importOriginal) => {
  const actual = await importOriginal() as any;
  const _mockSignInWithPassword = vi.fn();
  // Keep other mocks if they are used by other parts of the handler or related code
  const _mockSignUp = vi.fn();
  const _mockOnAuthStateChange = vi.fn(() => ({ data: { subscription: { unsubscribe: vi.fn() } } }));
  const _mockGetSession = vi.fn().mockResolvedValue({ data: { session: null }, error: null });

  return {
    ...actual,
    createClient: vi.fn(() => ({
      auth: {
        signInWithPassword: _mockSignInWithPassword,
        signUp: _mockSignUp, // Keep if registerHandler is also tested here or needed by setup
        onAuthStateChange: _mockOnAuthStateChange,
        getSession: _mockGetSession,
      },
      from: vi.fn().mockReturnThis(), // Generic from mock
    })),
    __internalMockSignInWithPassword: _mockSignInWithPassword,
  };
});

// Import the handler
import loginHandler from '../../pages/api/auth/login';

// Import the mock functions from the mocked module
const supabaseMockModule = await import('@supabase/supabase-js');
mockSignInWithPassword = (supabaseMockModule as any).__internalMockSignInWithPassword;

// Helper to create mock NextApiRequest
const mockApiReq = (body: any, method: string = 'POST') => ({
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
    expect(global.fetch).toHaveBeenCalledWith(expect.stringContaining('/auth/login'), expect.any(Object));
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
    // Updated to expect the new error structure with 'code'
    const mockErrorResponse = { error: 'Invalid credentials', code: 'INVALID_CREDENTIALS' };
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 401,
      json: async () => mockErrorResponse,
      headers: new Headers()
    });

    const { res, data } = await loginUser('wrong@example.com', 'password123');
    expect(res.status).toBe(401);
    expect(data).toEqual(mockErrorResponse); // Verify the data includes the code
  });

  it('should handle other errors (e.g., 500) from API', async () => {
    // Updated to expect the new error structure with 'code'
    const mockErrorResponse = { error: 'Server error', code: 'LOGIN_FAILED' };
     global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 500,
      json: async () => mockErrorResponse,
      headers: new Headers()
    });
    const { res, data } = await loginUser('test@example.com', 'password');
    expect(res.status).toBe(500);
    expect(data).toEqual(mockErrorResponse); // Verify the data includes the code
  });

  it('should handle network errors during fetch', async () => {
    global.fetch = vi.fn().mockRejectedValue(new Error('Network failed'));
    try {
      await loginUser('test@example.com', 'password');
    } catch (e: any) {
      expect(e.message).toBe('Network failed');
    }
  });
  // Removed the duplicate test for "should return 401 on login failure" as it was part of the API handler tests
  // and the new tests cover various error scenarios more comprehensively.
});
