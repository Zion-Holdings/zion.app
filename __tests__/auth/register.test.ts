import { describe, expect, test, vi, beforeEach } from 'vitest';
import handler from '@/pages/api/auth/register'; // Assuming this is the Next.js API handler

// Mock the Supabase client
const signUpMock = vi.fn();
vi.mock('@supabase/supabase-js', () => ({
  createClient: () => ({
    auth: {
      signUp: signUpMock,
    },
  }),
}));

// Helper to create mock request object
function mockReq(body: any) {
  return { method: 'POST', body } as any;
}

// Helper to create mock response object
function mockRes() {
  const res: any = {};
  res.status = vi.fn().mockReturnValue(res);
  res.json = vi.fn().mockReturnValue(res);
  res.setHeader = vi.fn();
  res.end = vi.fn(); // For 405 method not allowed
  return res;
}

describe('/api/auth/register', () => {
  beforeEach(() => {
    vi.clearAllMocks(); // Clear mocks before each test
  });

  test('should return 405 if method is not POST', async () => {
    const req = { method: 'GET' } as any;
    const res = mockRes();
    await handler(req, res);
    expect(res.status).toHaveBeenCalledWith(405);
    expect(res.end).toHaveBeenCalled();
  });

  test('should return 400 for invalid input (schema validation failed)', async () => {
    const req = mockReq({ email: 'invalid-email', password: 'short' }); // name is missing
    const res = mockRes();
    await handler(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
      message: expect.any(String) // zod error message
    }));
  });

  describe('Successful Registration Scenarios', () => {
    test('handles successful registration with email verification required', async () => {
      signUpMock.mockResolvedValue({
        data: {
          user: {
            id: 'user-id-123',
            email: 'test@example.com',
            identities: [], // Important for the "identities empty" check
            user_metadata: { display_name: 'Test User' }
          },
          session: null, // No session means email verification is likely pending
        },
        error: null,
      });

      const req = mockReq({ name: 'Test User', email: 'test@example.com', password: 'Password123!' });
      const res = mockRes();
      await handler(req, res);

      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({
        message: 'Registration successful. Please check your email to verify your account.',
        emailVerificationRequired: true,
        user: { email: 'test@example.com', id: 'user-id-123', display_name: 'Test User' },
      });
      expect(res.setHeader).not.toHaveBeenCalledWith('Set-Cookie', expect.any(String));
    });

    test('handles successful registration with auto-confirmation (email already verified)', async () => {
      const mockSession = { access_token: 'mock-access-token', refresh_token: 'mock-refresh-token', user: { id: 'user-id-123', email: 'test@example.com', user_metadata: { display_name: 'Test User' } } };
      signUpMock.mockResolvedValue({
        data: {
          user: mockSession.user,
          session: mockSession,
        },
        error: null,
      });

      const req = mockReq({ name: 'Test User', email: 'test@example.com', password: 'Password123!' });
      const res = mockRes();
      await handler(req, res);

      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({
        user: mockSession.user,
        session: mockSession,
      });
      expect(res.setHeader).toHaveBeenCalledWith(
        'Set-Cookie',
        `authToken=${mockSession.access_token}; HttpOnly; Path=/; Secure; SameSite=Strict`
      );
    });
  });

  describe('Registration Failure Scenarios', () => {
    test('handles registration failure when email already exists', async () => {
      signUpMock.mockResolvedValue({
        data: { user: null, session: null }, // Or sometimes Supabase returns user object even on error
        error: { message: 'User already registered', status: 400 }, // Supabase might use 400 or 422
      });

      const req = mockReq({ name: 'Test User', email: 'exists@example.com', password: 'Password123!' });
      const res = mockRes();
      await handler(req, res);

      // The API handler converts "already registered" to 409
      expect(res.status).toHaveBeenCalledWith(409);
      expect(res.json).toHaveBeenCalledWith({ message: 'Email already registered' });
    });

    test('handles registration failure due to weak password', async () => {
      signUpMock.mockResolvedValue({
        data: { user: null, session: null },
        error: { message: 'Password should be stronger', status: 400 }, // Or similar message
      });

      const req = mockReq({ name: 'Test User', email: 'test@example.com', password: 'weak' });
      const res = mockRes();
      await handler(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ message: 'Password is too weak' });
    });

    test('handles other Supabase sign-up errors', async () => {
      signUpMock.mockResolvedValue({
        data: { user: null, session: null },
        error: { message: 'Some generic Supabase error', status: 500 },
      });

      const req = mockReq({ name: 'Test User', email: 'test@example.com', password: 'Password123!' });
      const res = mockRes();
      await handler(req, res);

      expect(res.status).toHaveBeenCalledWith(500); // Or whatever status the handler maps it to
      expect(res.json).toHaveBeenCalledWith({ message: 'Some generic Supabase error' });
    });

    test('handles network error during signUp', async () => {
      signUpMock.mockRejectedValue(new Error('Network failure'));

      const req = mockReq({ name: 'Test User', email: 'test@example.com', password: 'Password123!' });
      const res = mockRes();
      await handler(req, res);

      expect(res.status).toHaveBeenCalledWith(503);
      expect(res.json).toHaveBeenCalledWith({ message: 'Network error. Please try again.' });
    });
  });
});
