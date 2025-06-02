import { describe, expect, test, vi, beforeEach } from 'vitest';
import handler from '@/pages/api/auth/register'; // Assuming this is the Next.js API handler
import { z } from 'zod'; // Used by the handler
import type { NextApiRequest, NextApiResponse } from 'next';

// Mock the Supabase client
const signUpMock = vi.fn();
vi.mock('@supabase/supabase-js', () => ({
  createClient: () => ({
    auth: {
      signUp: signUpMock,
    },
  }),
}));

// Define a more specific type for the mocked response
interface MockApiResponse extends NextApiResponse {
  status: vi.Mock<[number], MockApiResponse>;
  json: vi.Mock<[unknown], MockApiResponse>; // Parameter of json can be unknown
  setHeader: vi.Mock<[string, string | string[]], void>;
  end: vi.Mock<[((cb?: () => void) => void)?], void>; // end can be called with no args
}

// Helper to create mock request object
function mockReq(body: unknown, method: string = 'POST'): NextApiRequest {
  return { method, body, headers: {}, query: {}, cookies: {} } as NextApiRequest;
}

// Helper to create mock response object
function mockRes(): MockApiResponse {
  const res: Partial<MockApiResponse> = {};
  res.status = vi.fn().mockReturnValue(res as MockApiResponse);
  res.json = vi.fn().mockReturnValue(res as MockApiResponse);
  res.setHeader = vi.fn();
  res.end = vi.fn();
  return res as MockApiResponse;
}

describe('/api/auth/register', () => {
  beforeEach(() => {
    vi.clearAllMocks(); // Clear mocks before each test
  });

  test('should return 405 if method is not POST', async () => {
    // Explicitly type req, ensure it has minimal properties handler might expect for a 405
    const req = { method: 'GET', body: undefined, headers: {}, query: {}, cookies: {} } as NextApiRequest;
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
            identities: [], 
            user_metadata: { display_name: 'Test User' }
          },
          session: null, 
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
        data: { user: null, session: null }, 
        error: { message: 'User already registered', status: 400 }, 
      });

      const req = mockReq({ name: 'Test User', email: 'exists@example.com', password: 'Password123!' });
      const res = mockRes();
      await handler(req, res);

      expect(res.status).toHaveBeenCalledWith(409);
      expect(res.json).toHaveBeenCalledWith({ message: 'Email already registered' });
    });

    test('handles registration failure due to weak password', async () => {
      signUpMock.mockResolvedValue({
        data: { user: null, session: null },
        error: { message: 'Password should be stronger', status: 400 }, 
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

      expect(res.status).toHaveBeenCalledWith(500); 
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
