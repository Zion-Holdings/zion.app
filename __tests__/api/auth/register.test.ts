import { createMocks, RequestMethod } from 'node-mocks-http';
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import registerHandler from '../../../pages/api/auth/register'; // Adjust path as needed

// Mock axios
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('/api/auth/register API Endpoint', () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules(); // Most important - it clears the cache
    process.env = { ...OLD_ENV }; // Make a copy
    mockedAxios.post.mockReset(); // Reset mock usage history
  });

  afterAll(() => {
    process.env = OLD_ENV; // Restore old environment
  });

  it('should return 405 if method is not POST', async () => {
    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: 'GET',
    });

    await registerHandler(req, res);

    expect(res._getStatusCode()).toBe(405);
    expect(res._getHeaders().allow).toContain('POST');
  });

  it('should return 400 if required fields are missing', async () => {
    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: 'POST',
      body: { email: 'test@example.com', password: 'password' }, // Missing name
    });

    await registerHandler(req, res);

    expect(res._getStatusCode()).toBe(400);
    expect(res._getJSONData()).toEqual({
      message: 'Missing required fields: name, email, and password are required.',
    });
  });

  it('should return 500 if INTERNAL_AUTH_SERVICE_URL is not set', async () => {
    delete process.env.INTERNAL_AUTH_SERVICE_URL; // Ensure it's not set

    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: 'POST',
      body: { name: 'Test User', email: 'test@example.com', password: 'password123' },
    });

    await registerHandler(req, res);

    expect(res._getStatusCode()).toBe(500);
    expect(res._getJSONData()).toEqual({
      message: 'Server configuration error: Auth service URL not set.',
    });
  });

  it('should forward the request and return 201 on successful registration', async () => {
    process.env.INTERNAL_AUTH_SERVICE_URL = 'http://fake-auth-service.com';
    const mockAuthResponse = { user: { id: '123', email: 'test@example.com' }, token: 'fake-token' };
    mockedAxios.post.mockResolvedValueOnce({ status: 201, data: mockAuthResponse });

    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: 'POST',
      body: { name: 'Test User', email: 'test@example.com', password: 'password123' },
    });

    await registerHandler(req, res);

    expect(mockedAxios.post).toHaveBeenCalledWith(
      'http://fake-auth-service.com/register',
      { name: 'Test User', email: 'test@example.com', password: 'password123' }
    );
    expect(res._getStatusCode()).toBe(201);
    expect(res._getJSONData()).toEqual(mockAuthResponse);
  });

  it('should relay error response from auth service (e.g., 409 Email exists)', async () => {
    process.env.INTERNAL_AUTH_SERVICE_URL = 'http://fake-auth-service.com';
    const mockErrorResponse = { message: 'Email already exists' };
    mockedAxios.post.mockRejectedValueOnce({
      isAxiosError: true,
      response: { status: 409, data: mockErrorResponse },
    });

    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: 'POST',
      body: { name: 'Test User', email: 'test@example.com', password: 'password123' },
    });

    await registerHandler(req, res);

    expect(mockedAxios.post).toHaveBeenCalledTimes(1);
    expect(res._getStatusCode()).toBe(409);
    expect(res._getJSONData()).toEqual(mockErrorResponse);
  });

  it('should return 500 for non-Axios errors during auth service call', async () => {
    process.env.INTERNAL_AUTH_SERVICE_URL = 'http://fake-auth-service.com';
    mockedAxios.post.mockRejectedValueOnce(new Error('Network connection failed'));

    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: 'POST',
      body: { name: 'Test User', email: 'test@example.com', password: 'password123' },
    });

    await registerHandler(req, res);

    expect(mockedAxios.post).toHaveBeenCalledTimes(1);
    expect(res._getStatusCode()).toBe(500);
    expect(res._getJSONData()).toEqual({
      message: 'An unexpected error occurred while processing the signup request.',
    });
  });

  it('rate limits after too many requests', async () => {
    process.env.INTERNAL_AUTH_SERVICE_URL = 'http://fake-auth-service.com';
    const body = { name: 'Test', email: 'a@b.com', password: 'pass1234' };
    for (let i = 0; i < 5; i++) {
      mockedAxios.post.mockResolvedValueOnce({ status: 201, data: {} });
      const { req, res } = createMocks<NextApiRequest, NextApiResponse>({ method: 'POST', body });
      await registerHandler(req, res);
    }
    mockedAxios.post.mockResolvedValueOnce({ status: 201, data: {} });
    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({ method: 'POST', body });
    await registerHandler(req, res);
    expect(res._getStatusCode()).toBe(429);
  });
});
