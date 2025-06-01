import { loginUser, registerUser } from '@/services/authService';
import { NextApiRequest, NextApiResponse } from 'next';
import { vi, Mock } from 'vitest';

// Declare variables that will hold the mock functions.
// These will be assigned after the mock setup.
let mockSignInWithPassword: Mock;
let mockSignUp: Mock;

vi.mock('@supabase/supabase-js', async (importOriginal) => {
  const actual = await importOriginal() as any;

  // Define the mock functions inside the factory.
  const _mockSignInWithPassword = vi.fn();
  const _mockSignUp = vi.fn();
  const _mockOnAuthStateChange = vi.fn(() => ({ data: { subscription: { unsubscribe: vi.fn() } } }));
  const _mockGetSession = vi.fn().mockResolvedValue({ data: { session: null }, error: null });
  const _mockFrom = vi.fn(() => ({
    select: vi.fn().mockReturnThis(),
    insert: vi.fn().mockReturnThis(),
    update: vi.fn().mockReturnThis(),
    delete: vi.fn().mockReturnThis(),
    eq: vi.fn().mockReturnThis(),
    neq: vi.fn().mockReturnThis(),
    in: vi.fn().mockReturnThis(),
    single: vi.fn().mockResolvedValue({ data: {}, error: null }),
  }));

  // Assign to the outer scope variables for use in tests *after* import.
  // This is done by importing these exported mocks below.
  // For now, these are just the functions used by createClient's return.

  return {
    ...actual,
    createClient: vi.fn(() => ({
      auth: {
        signInWithPassword: _mockSignInWithPassword,
        signUp: _mockSignUp,
        onAuthStateChange: _mockOnAuthStateChange,
        getSession: _mockGetSession,
      },
      from: _mockFrom,
    })),
    // Export the internal mocks so they can be imported and used in the test file.
    __internalMockSignInWithPassword: _mockSignInWithPassword,
    __internalMockSignUp: _mockSignUp,
    __internalMockGetSession: _mockGetSession, // if needed for direct manipulation
    // ... any other internal mocks you need to control
  };
});

// Import the handlers first
import registerHandler from '../../pages/api/auth/register';
import loginHandler from '../../pages/api/auth/login';

// Now import the mock functions from the mocked module
// This ensures that mockSignInWithPassword and mockSignUp are the actual mock functions
// used by the Supabase client in the handlers.
const supabaseMock = await import('@supabase/supabase-js');
mockSignInWithPassword = (supabaseMock as any).__internalMockSignInWithPassword;
mockSignUp = (supabaseMock as any).__internalMockSignUp;
// Example if you needed to control getSession:
// const mockGetSession = (supabaseMock as any).__internalMockGetSession;


// Mock NextApiResponse
const mockRes = () => {
  const res: Partial<NextApiResponse> = {
    status: vi.fn().mockReturnThis(),
    json: vi.fn().mockReturnThis(),
    setHeader: vi.fn().mockReturnThis(),
    end: vi.fn().mockReturnThis(),
  };
  return res as NextApiResponse;
};

describe('Login API and Service', () => {
  let originalFetch: typeof global.fetch;

  beforeEach(() => {
    originalFetch = global.fetch;
  });

  afterEach(() => {
    global.fetch = originalFetch;
    vi.restoreAllMocks();
  });

  it('should register a user and then log them in, setting authToken cookie', async () => {
    const testEmail = 'testlogin@example.com';
    const testPassword = 'password123';
    const testName = 'Test User';
    const mockAuthToken = 'mockAuthTokenString';

    // Ensure mocks are defined before use, then reset them.
    if (mockSignInWithPassword) mockSignInWithPassword.mockReset();
    if (mockSignUp) mockSignUp.mockReset();
    // if (mockGetSession) mockGetSession.mockReset(); // if used

    // Mock fetch for the service functions (registerUser, loginUser)
    // These call /api/auth/register and /api/auth/login which are NOT the handlers being tested with Supabase mock here.
    // This global.fetch mock is for client-side services, not the server-side API handler's Supabase client.
    const serviceFetchMock = vi.fn((url, options) => {
      const urlStr = url.toString();
      if (urlStr.endsWith('/auth/register')) { // Mock for registerUser service call
        return Promise.resolve({
          ok: true, status: 201,
          json: () => Promise.resolve({ user: { id: '123', email: testEmail }, token: mockAuthToken }),
          headers: new Headers({'Set-Cookie': `authToken=${mockAuthToken}; HttpOnly; Path=/; Secure; SameSite=Strict`})
        } as Response);
      }
      if (urlStr.endsWith('/auth/login')) { // Mock for loginUser service call
        return Promise.resolve({
          ok: true, status: 200,
          json: () => Promise.resolve({ user: { id: '123', email: testEmail }, accessToken: mockAuthToken }),
          headers: new Headers({'Set-Cookie': `authToken=${mockAuthToken}; HttpOnly; Path=/; Secure; SameSite=Strict`})
        } as Response);
      }
      return Promise.reject(new Error(`Unexpected service fetch call to ${url}`));
    });
    global.fetch = serviceFetchMock;

    // 1. Simulate user registration (calling the service)
    await registerUser(testName, testEmail, testPassword);

    // 2. Simulate user login (calling the service)
    const { res: loginServiceRes, data: loginServiceData } = await loginUser(testEmail, testPassword);

    // 3. Assert login service call response status
    expect(loginServiceRes.status).toBe(200);
    expect(loginServiceData.accessToken).toBe(mockAuthToken);

    // 4. Assert that the authToken cookie was set by the login *service* (via its mocked fetch)
    const loginServiceFetchCall = serviceFetchMock.mock.calls.find(call => call[0].toString().endsWith('/auth/login'));
    expect(loginServiceFetchCall).toBeDefined();
    // Check actual header from the Response object returned by the mock
    const loginServiceHeaders = (loginServiceFetchCall![1] as Response).headers; // Actually, this is not how to get response headers from fetch mock.
                                                                            // The mock returns a Response, loginRes is that Response.
    expect(loginServiceRes.headers.get('Set-Cookie')).toBe(`authToken=${mockAuthToken}; HttpOnly; Path=/; Secure; SameSite=Strict`);

    // 5. Now, test the login API handler (/pages/api/auth/login.ts) directly
    //    This handler uses the Supabase client, which is mocked via vi.mock('@supabase/supabase-js')
    const loginApiReq = { method: 'POST', body: { email: testEmail, password: testPassword } } as NextApiRequest;
    const loginApiRes = mockRes();

    // Configure the mock for supabase.auth.signInWithPassword for this specific API handler test
    mockSignInWithPassword.mockResolvedValueOnce({
      data: { session: { access_token: mockAuthToken, refresh_token: 'mockRefresh' }, user: { id: '123', email: testEmail } },
      error: null,
    });

    await loginHandler(loginApiReq, loginApiRes);

    expect(loginApiRes.status).toHaveBeenCalledWith(200);
    expect(loginApiRes.json).toHaveBeenCalledWith(expect.objectContaining({ accessToken: mockAuthToken }));
    expect(loginApiRes.setHeader).toHaveBeenCalledWith(
      'Set-Cookie',
      `authToken=${mockAuthToken}; HttpOnly; Path=/; Secure; SameSite=Strict`
    );
    expect(mockSignInWithPassword).toHaveBeenCalledWith({email: testEmail.toLowerCase(), password: testPassword});

    // Optionally, you might want to test the registration handler similarly if it's complex,
    // but the subtask is focused on login. For now, the service call to registerUser is enough
    // to set up the premise for login. If registerHandler had complex logic involving Supabase
    // that wasn't covered by the service call's mock, you'd test it directly too.
    // For example, to ensure `mockSignUp` was called by `registerHandler`:
    // const registerApiReq = { method: 'POST', body: { name: testName, email: "registertest@example.com", password: testPassword } } as NextApiRequest;
    // const registerApiRes = mockRes();
    // mockSignUp.mockResolvedValueOnce({
    //   data: { session: { access_token: 'regToken' }, user: { id: '456' } },
    //   error: null
    // });
    // await registerHandler(registerApiReq, registerApiRes);
    // expect(mockSignUp).toHaveBeenCalled();

  });

  it('should return 401 on login failure', async () => {
    const testEmail = 'fail@example.com';
    const testPassword = 'wrongpassword';

    // Reset the mock before use
    if (mockSignInWithPassword) mockSignInWithPassword.mockReset();

    // Configure the mock for supabase.auth.signInWithPassword to return an error
    mockSignInWithPassword.mockResolvedValueOnce({
      data: { session: null, user: null },
      error: { message: 'Invalid login credentials', name: 'AuthApiError', status: 400 },
    });

    const loginApiReq = { method: 'POST', body: { email: testEmail, password: testPassword } } as NextApiRequest;
    const loginApiRes = mockRes();

    await loginHandler(loginApiReq, loginApiRes);

    expect(mockSignInWithPassword).toHaveBeenCalledWith({email: testEmail.toLowerCase(), password: testPassword});
    expect(loginApiRes.status).toHaveBeenCalledWith(401);
    expect(loginApiRes.json).toHaveBeenCalledWith({ error: 'Invalid credentials' });
  });
});
