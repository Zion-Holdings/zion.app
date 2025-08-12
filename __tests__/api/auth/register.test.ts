import { createMocks } from 'node-mocks-http';
import type { NextApiRequest, NextApiResponse } from 'next';
// Import the handler directly to test it
// We will extract getAuth0ManagementToken for separate unit tests later if needed,
// or test it implicitly via the main handler. For now, let's focus on the handler.
import registerHandler from '../../../pages/api/auth/register';

// Mock the global fetch function
global.fetch = jest.fn();

const mockFetch = global.fetch as jest.Mock;

describe('/api/auth/register API Endpoint', () => {
  const ORIGINAL_ENV = { ...process.env };
  const MOCK_AUTH0_DOMAIN = 'https://test-tenant.us.auth0.com';

  beforeEach(() => {
    jest.resetModules(); // Clears module cache, useful if modules have internal state or rely on env vars at import time
    process.env = {
      ...ORIGINAL_ENV,
      AUTH0_ISSUER_BASE_URL: MOCK_AUTH0_DOMAIN,
      AUTH0_CLIENT_ID: 'test-client-id',
      AUTH0_CLIENT_SECRET: 'test-client-secret',
    };
    mockFetch.mockReset();
    // Reset console spies if any, e.g., jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterAll(() => {
    process.env = ORIGINAL_ENV; // Restore original environment
    jest.restoreAllMocks(); // Restore all mocks, including console if spied upon
  });

  it('should return 405 if method is not POST', async () => {
    const { req, res } = createMocks({
      method: 'GET',
    });

    await registerHandler(req as NextApiRequest, res as NextApiResponse);

    expect(res._getStatusCode()).toBe(405);
    expect(res._getHeaders().allow).toContain('POST');
  });

  it('should return 400 if name is missing', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: { email: 'test@example.com', password: 'Password123' }, // Missing name
    });

    await registerHandler(req as NextApiRequest, res as NextApiResponse);

    expect(res._getStatusCode()).toBe(400);
    expect(res._getJSONData().error).toContain('Name is required');
  });

  it('should return 400 if email is invalid', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: { name: 'Test User', email: 'invalid-email', password: 'Password123' },
    });

    await registerHandler(req as NextApiRequest, res as NextApiResponse);
    expect(res._getStatusCode()).toBe(400);
    expect(res._getJSONData().error).toContain('Invalid email address');
  });

  it('should return 400 if password is too short', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: { name: 'Test User', email: 'test@example.com', password: 'short' },
    });

    await registerHandler(req as NextApiRequest, res as NextApiResponse);
    expect(res._getStatusCode()).toBe(400);
    expect(res._getJSONData().error).toContain('Password must be at least 8 characters');
  });


  it('should return 500 if AUTH0_ISSUER_BASE_URL is not set', async () => {
    delete process.env.AUTH0_ISSUER_BASE_URL; // Ensure it's not set

    const { req, res } = createMocks({
      method: 'POST',
      body: { name: 'Test User', email: 'test@example.com', password: 'Password123' },
    });

    await registerHandler(req as NextApiRequest, res as NextApiResponse);

    expect(res._getStatusCode()).toBe(500);
    expect(res._getJSONData()).toEqual({
      error: 'Authentication service not configured',
      message: 'Authentication service not configured',
    });
  });

  describe('Auth0 Management Token Retrieval and User Creation', () => {
    const validRequestBody = {
      name: 'Test User',
      email: 'test@example.com',
      password: 'Password123!',
    };

    it('should return 201 on successful registration', async () => {
      mockFetch
        .mockResolvedValueOnce({ // Mock for getAuth0ManagementToken
          ok: true,
          json: async () => ({ access_token: 'fake-management-token' }),
        })
        .mockResolvedValueOnce({ // Mock for createUser in Auth0
          ok: true,
          status: 201,
          json: async () => ({ user_id: 'auth0|123', email: 'test@example.com', name: 'Test User' }),
        });

      const { req, res } = createMocks({
        method: 'POST',
        body: validRequestBody,
      });

      await registerHandler(req as NextApiRequest, res as NextApiResponse);

      expect(res._getStatusCode()).toBe(201);
      expect(res._getJSONData().message).toBe('Registration successful. Please check your email to verify your account.');
      expect(mockFetch).toHaveBeenCalledTimes(2);
      expect(mockFetch.mock.calls[0][0]).toBe(`${MOCK_AUTH0_DOMAIN}/oauth/token`);
      expect(mockFetch.mock.calls[1][0]).toBe(`${MOCK_AUTH0_DOMAIN}/api/v2/users`);
    });

    it('should return 500 if AUTH0_CLIENT_ID is missing (config error before fetch)', async () => {
      delete process.env.AUTH0_CLIENT_ID;
      const { req, res } = createMocks({
        method: 'POST',
        body: validRequestBody,
      });
      await registerHandler(req as NextApiRequest, res as NextApiResponse);
      expect(res._getStatusCode()).toBe(500);
      expect(res._getJSONData().error).toContain('Auth0 configuration missing');
      expect(mockFetch).not.toHaveBeenCalled();
    });

    it('should handle 401 from token endpoint (non-retryable)', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: false,
        status: 401,
        text: async () => 'Unauthorized client',
      });

      const { req, res } = createMocks({
        method: 'POST',
        body: validRequestBody,
      });
      await registerHandler(req as NextApiRequest, res as NextApiResponse);

      expect(res._getStatusCode()).toBe(500);
      expect(res._getJSONData().error).toMatch(/Failed to get management token \(401\): Unauthorized client\. This usually indicates that the application is not authorized/);
      expect(mockFetch).toHaveBeenCalledTimes(1); // No retry
    });

    it('should handle 403 from token endpoint (non-retryable)', async () => {
        mockFetch.mockResolvedValueOnce({
          ok: false,
          status: 403,
          text: async () => 'Client is not authorized to access this audience',
        });

        const { req, res } = createMocks({
          method: 'POST',
          body: validRequestBody,
        });
        await registerHandler(req as NextApiRequest, res as NextApiResponse);

        expect(res._getStatusCode()).toBe(500);
        expect(res._getJSONData().error).toMatch(/Failed to get management token \(403\): Client is not authorized to access this audience\. This usually indicates that the application is not authorized/);
        expect(mockFetch).toHaveBeenCalledTimes(1); // No retry
      });

    it('should handle 404 from token endpoint (non-retryable)', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: false,
        status: 404,
        text: async () => 'Not Found',
      });

      const { req, res } = createMocks({
        method: 'POST',
        body: validRequestBody,
      });
      await registerHandler(req as NextApiRequest, res as NextApiResponse);
      expect(res._getStatusCode()).toBe(500);
      expect(res._getJSONData().error).toMatch(/Failed to get management token \(404\): Not Found\. This might indicate an incorrect Auth0 domain or audience configuration/);
      expect(mockFetch).toHaveBeenCalledTimes(1);
    });

    it('should retry on 500 from token endpoint then succeed', async () => {
      mockFetch
        .mockResolvedValueOnce({ // First attempt - fails
          ok: false,
          status: 500,
          text: async () => 'Internal Server Error',
        })
        .mockResolvedValueOnce({ // Second attempt - succeeds (token)
          ok: true,
          json: async () => ({ access_token: 'fake-management-token-retry' }),
        })
        .mockResolvedValueOnce({ // User creation - succeeds
          ok: true,
          status: 201,
          json: async () => ({ user_id: 'auth0|456', email: 'test@example.com', name: 'Test User' }),
        });

      const { req, res } = createMocks({
        method: 'POST',
        body: validRequestBody,
      });
      await registerHandler(req as NextApiRequest, res as NextApiResponse);

      expect(res._getStatusCode()).toBe(201);
      expect(mockFetch).toHaveBeenCalledTimes(3); // 1 failed token, 1 successful token, 1 user creation
      expect(mockFetch.mock.calls[0][0]).toBe(`${MOCK_AUTH0_DOMAIN}/oauth/token`);
      expect(mockFetch.mock.calls[1][0]).toBe(`${MOCK_AUTH0_DOMAIN}/oauth/token`);
      expect(mockFetch.mock.calls[2][0]).toBe(`${MOCK_AUTH0_DOMAIN}/api/v2/users`);
    });

    it('should exhaust retries on consistent 503 from token endpoint', async () => {
      mockFetch
        .mockResolvedValue({ // All attempts fail
          ok: false,
          status: 503,
          text: async () => 'Service Unavailable',
        });

      // Suppress console.warn and console.error for this test to keep output clean
      const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
      const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

      const { req, res } = createMocks({
        method: 'POST',
        body: validRequestBody,
      });
      await registerHandler(req as NextApiRequest, res as NextApiResponse);

      expect(res._getStatusCode()).toBe(500);
      // The MAX_RETRIES is 3, so it will try 3 times.
      expect(mockFetch).toHaveBeenCalledTimes(3);
      expect(mockFetch.mock.calls.every(call => call[0] === `${MOCK_AUTH0_DOMAIN}/oauth/token`)).toBe(true);
      expect(res._getJSONData().error).toMatch(/Failed to get management token \(attempt 3\/3, status 503\): Service Unavailable/);

      consoleWarnSpy.mockRestore();
      consoleErrorSpy.mockRestore();
    });

    it('should handle missing access_token in successful token response', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({ token_type: 'Bearer' }), // No access_token
      });
      const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});


      const { req, res } = createMocks({
        method: 'POST',
        body: validRequestBody,
      });
      await registerHandler(req as NextApiRequest, res as NextApiResponse);

      expect(res._getStatusCode()).toBe(500);
      expect(res._getJSONData().error).toBe('Failed to get management token: No access_token in response.');
      expect(mockFetch).toHaveBeenCalledTimes(1);
      consoleErrorSpy.mockRestore();
    });

    it('should handle network error during token fetch and retry', async () => {
      mockFetch
        .mockRejectedValueOnce(new Error('Simulated Network Error')) // First attempt fails (network)
        .mockResolvedValueOnce({ // Second attempt - succeeds (token)
          ok: true,
          json: async () => ({ access_token: 'fake-management-token-network-retry' }),
        })
        .mockResolvedValueOnce({ // User creation - succeeds
          ok: true,
          status: 201,
          json: async () => ({ user_id: 'auth0|789', email: 'test@example.com', name: 'Test User' }),
        });

      const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
      const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

      const { req, res } = createMocks({
        method: 'POST',
        body: validRequestBody,
      });
      await registerHandler(req as NextApiRequest, res as NextApiResponse);

      expect(res._getStatusCode()).toBe(201);
      expect(mockFetch).toHaveBeenCalledTimes(3); // 1 failed (network), 1 successful token, 1 user creation

      consoleWarnSpy.mockRestore();
      consoleErrorSpy.mockRestore();
    });

    it('should return 409 if user already exists in Auth0', async () => {
      mockFetch
        .mockResolvedValueOnce({ // Token success
          ok: true,
          json: async () => ({ access_token: 'fake-management-token' }),
        })
        .mockResolvedValueOnce({ // User creation fails - 409
          ok: false,
          status: 409,
          json: async () => ({ statusCode: 409, message: 'The user already exists.'}),
        });

      const { req, res } = createMocks({
        method: 'POST',
        body: validRequestBody,
      });
      await registerHandler(req as NextApiRequest, res as NextApiResponse);

      expect(res._getStatusCode()).toBe(409);
      expect(res._getJSONData().error).toBe('Email already registered');
    });

    it('should return 400 if Auth0 password policy fails', async () => {
        mockFetch
          .mockResolvedValueOnce({ // Token success
            ok: true,
            json: async () => ({ access_token: 'fake-management-token' }),
          })
          .mockResolvedValueOnce({ // User creation fails - 400 (password policy)
            ok: false,
            status: 400,
            json: async () => ({
                statusCode: 400,
                message: 'PasswordStrengthError: Password is too weak',
                errorCode: 'auth0_password_strength_error'
            }),
          });

        const { req, res } = createMocks({
          method: 'POST',
          body: validRequestBody,
        });
        await registerHandler(req as NextApiRequest, res as NextApiResponse);

        expect(res._getStatusCode()).toBe(400);
        expect(res._getJSONData().error).toBe('Password does not meet requirements');
      });
  });
});
