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
      // ... other session properties
    };
    const mockUserData = { id: 'user-123', email: testEmail /* ... other user properties */ };

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
      data: { session: null, user: null }, // Or Supabase might return user object here too
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
    expect(res.json).toHaveBeenCalledWith({ error: 'Invalid credentials' });
    expect(res.setHeader).not.toHaveBeenCalledWith('Set-Cookie', expect.any(String));
  });

  it('should also return 401 if Supabase returns no error but no session (fallback)', async () => {
    const testEmail = 'noerrornosession@example.com';
    const testPassword = 'password123';

    mockSignInWithPassword.mockResolvedValueOnce({
      data: { session: null, user: { id: '123', email: testEmail } }, // User might be present, but no session
      error: null,
    });

    const req = mockApiReq({ email: testEmail, password: testPassword });
    const res = mockApiRes();
    await loginHandler(req, res);

    expect(mockSignInWithPassword).toHaveBeenCalledWith({ email: testEmail.toLowerCase(), password: testPassword });
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ error: 'Invalid credentials - no session data' });
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
    vi.restoreAllMocks(); // Restore all mocks, including fetch
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
      ok: false, // ok is false for 4xx/5xx responses
      status: 403,
      json: async () => mockErrorResponse,
      headers: new Headers()
    });

    const { res, data } = await loginUser('unconfirmed@example.com', 'password123');
    expect(res.status).toBe(403);
    expect(data).toEqual(mockErrorResponse);
  });

  it('should handle "Invalid credentials" (401) from API', async () => {
    const mockErrorResponse = { error: 'Invalid credentials' };
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
    const mockErrorResponse = { error: 'Server error' };
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

    // Expect loginUser to throw or return a specific error structure for network issues
    // This depends on how loginUser is implemented. Assuming it might re-throw or return a custom error.
    // For this example, let's assume it might return a result that indicates failure.
    // If loginUser re-throws, use expect(...).rejects.toThrow(...)
    try {
      await loginUser('test@example.com', 'password');
    } catch (e: any) {
      expect(e.message).toBe('Network failed'); // Or however your service formats this
    }
    // Or if it returns a specific structure:
    // const { res, data } = await loginUser('test@example.com', 'password');
    // expect(res.ok).toBe(false); // Or similar check
    // expect(data.error).toContain('Network failed');
  });
});
