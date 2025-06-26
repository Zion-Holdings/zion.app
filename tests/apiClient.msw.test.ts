import { describe, it, expect, vi, beforeAll, afterEach, afterAll } from 'vitest';
// Import apiClient for its own tests, and globalAxiosErrorHandler for direct testing
import apiClient, { globalAxiosErrorHandler } from '@/services/apiClient';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import * as apiError from '@/utils/apiErrorHandler';
import { supabase } from '@/integrations/supabase/client';
import axios from 'axios'; // Import axios to inspect its interceptors if needed for debugging

vi.mock('@/utils/apiErrorHandler', () => ({
  showApiError: vi.fn(),
  parseApiError: vi.fn((e) => ({ status: e?.response?.status, code: e?.response?.data?.code ?? e?.response?.status, message: e?.response?.data?.message || 'Unexpected error – please try again later.' }))
}));
vi.mock('@/integrations/supabase/client', () => ({
  supabase: { auth: { signOut: vi.fn().mockResolvedValue({}) } }
}));

const server = setupServer();

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
  vi.clearAllMocks();
});

afterAll(() => {
  server.close();
});


describe('apiClient request functionality (actual requests through MSW)', () => {
  // These tests verify the behavior of the apiClient instance.
  // apiClient includes axios-retry and its own specific interceptors.
  // The globalAxiosErrorHandler will also apply to requests made by apiClient.

  it('handles 401 error, calls showApiError, and signs out', async () => {
    server.use(
      rest.get(apiClient.defaults.baseURL + '/test', (_req, res, ctx) =>
        res(ctx.status(401), ctx.json({ message: 'Unauthorized' }))
      )
    );
    await expect(apiClient.get('/test')).rejects.toBeTruthy();
    expect(supabase.auth.signOut).toHaveBeenCalled();
    // For a 401, globalAxiosErrorHandler should call showApiError.
    expect(apiError.showApiError).toHaveBeenCalledWith(expect.objectContaining({ response: { status: 401, data: { message: 'Unauthorized' } } }));
  });

  it('handles 404 error (final attempt via apiClient), calls showApiError', async () => {
    // This test ensures that after apiClient's internal retries are exhausted for a 404,
    // the globalAxiosErrorHandler (correctly) decides to show the error.
    server.use(
      rest.get(apiClient.defaults.baseURL + '/test', (_req, res, ctx) => res(ctx.status(404)))
    );
    await expect(apiClient.get('/test')).rejects.toBeTruthy();
    // When apiClient itself gives up on retries, the error it throws will have
    // config['axios-retry'] with attemptNumber > retryCount (e.g., attempt 4, retryCount 3).
    // In this state, globalAxiosErrorHandler should call showApiError.
    expect(apiError.showApiError).toHaveBeenCalledWith(expect.objectContaining({ response: { status: 404 } }));
  });

  it('handles 500 error (via apiClient), calls showApiError', async () => {
    server.use(
      rest.get(apiClient.defaults.baseURL + '/test', (_req, res, ctx) =>
        res(ctx.status(500), ctx.json({ message: 'Server err' }))
      )
    );
    await expect(apiClient.get('/test')).rejects.toBeTruthy();
    // For a 500, globalAxiosErrorHandler should call showApiError.
    expect(apiError.showApiError).toHaveBeenCalledWith(expect.objectContaining({ response: { status: 500, data: { message: 'Server err' } } }));
  });

  it('handles network failure (via apiClient), calls showApiError', async () => {
    server.use(
      rest.get(apiClient.defaults.baseURL + '/test', (_req, res) => res.networkError('Network Error'))
    );
    await expect(apiClient.get('/test')).rejects.toBeTruthy();
    // Network errors are retried by axios-retry. If all retries fail,
    // globalAxiosErrorHandler should call showApiError.
    expect(apiError.showApiError).toHaveBeenCalled();
  });

  it('handles validation error (400 via apiClient), calls showApiError', async () => {
    server.use(
      rest.get(apiClient.defaults.baseURL + '/test', (_req, res, ctx) =>
        res(ctx.status(400), ctx.json({ code: 'VALIDATION_ERROR', message: 'Invalid data' }))
      )
    );
    await expect(apiClient.get('/test')).rejects.toBeTruthy();
    // For a 400, globalAxiosErrorHandler should call showApiError.
    expect(apiError.showApiError).toHaveBeenCalledWith(
      expect.objectContaining({
        response: { status: 400, data: { code: 'VALIDATION_ERROR', message: 'Invalid data' } }
      })
    );
  });
});


// New describe block for testing the globalAxiosErrorHandler logic directly
describe('globalAxiosErrorHandler Direct Tests', () => {
  beforeEach(() => {
    vi.clearAllMocks(); // Clear showApiError mock before each test
  });

  it('should NOT call showApiError for a 404 if retries are pending (attemptNumber <= retryCount)', async () => {
    const errorPending: any = {
      isAxiosError: true,
      response: { status: 404, data: { message: 'Not Found' } },
      config: { 'axios-retry': { attemptNumber: 1, retryCount: 3 } }, // Initial attempt failed
    };
    try { await globalAxiosErrorHandler(errorPending); } catch (e) {
      // Expected error, test continues
    }
    expect(apiError.showApiError).not.toHaveBeenCalled();

    const errorMidRetry: any = {
      isAxiosError: true,
      response: { status: 404, data: { message: 'Not Found' } },
      config: { 'axios-retry': { attemptNumber: 3, retryCount: 3 } }, // A mid-retry attempt failed (e.g. 2nd retry, if initial is 1st attempt)
    };
    try { await globalAxiosErrorHandler(errorMidRetry); } catch (e) {
      // Expected error, test continues
    }
    expect(apiError.showApiError).not.toHaveBeenCalled();
  });

  it('should call showApiError for a 404 if it is past configured retries (attemptNumber > retryCount)', async () => {
    const errorFinalAttempt: any = {
      isAxiosError: true,
      response: { status: 404, data: { message: 'Not Found' } },
      config: {
        // attemptNumber is 1-indexed. retryCount = 3 means 3 retries *after* the initial attempt.
        // So, total attempts = 1 (initial) + 3 (retries) = 4.
        // If attemptNumber is 4, this is the failure of the last configured retry.
        // Condition for suppression: status === 404 && attemptNumber <= retryCount
        // Here for attempt 4: 404 && (4 <= 3) -> 404 && false -> false. So, showApiError should be called.
        'axios-retry': { attemptNumber: 4, retryCount: 3 },
      },
    };
    try { await globalAxiosErrorHandler(errorFinalAttempt); } catch (e) {
      // Expected error, test continues
    }
    expect(apiError.showApiError).toHaveBeenCalledWith(errorFinalAttempt);
  });

  it('should call showApiError for a 404 if not handled by axios-retry (no axios-retry config)', async () => {
    const errorNoRetry: any = {
      isAxiosError: true,
      response: { status: 404, data: { message: 'Not Found' } },
      config: {}, // No axios-retry state
    };
    try { await globalAxiosErrorHandler(errorNoRetry); } catch (e) {
      // Expected error, test continues
    }
    expect(apiError.showApiError).toHaveBeenCalledWith(errorNoRetry);
  });

  it('should call showApiError for a non-404 error (e.g., 500) even if retries are pending', async () => {
    const error500: any = {
      isAxiosError: true,
      response: { status: 500, data: { message: 'Server Error' } },
      config: { 'axios-retry': { attemptNumber: 1, retryCount: 3 } }, // Retries pending
    };
    try { await globalAxiosErrorHandler(error500); } catch (e) {
      // Expected error, test continues
    }
    expect(apiError.showApiError).toHaveBeenCalledWith(error500);
  });

  it('should call showApiError for an error with no response (network error, etc.)', async () => {
    const networkError: any = {
      isAxiosError: true,
      message: 'Network Error',
      config: { 'axios-retry': { attemptNumber: 1, retryCount: 3 } }, // Potentially retrying
    };
    try { await globalAxiosErrorHandler(networkError); } catch (e) {
      // Expected error, test continues
    }
    // Network errors (no response status) should still be shown.
    // Our logic is specific to `status === 404`.
    expect(apiError.showApiError).toHaveBeenCalledWith(networkError);
  });

   it('should call showApiError for a 404 if axios-retry state is present but retryCount is 0', async () => {
    const errorRetryCountZero: any = {
      isAxiosError: true,
      response: { status: 404, data: { message: 'Not Found' } },
      config: { 'axios-retry': { attemptNumber: 1, retryCount: 0 } }, // Retries configured to 0
    };
    // attemptNumber 1, retryCount 0. 1 <= 0 is false. So should show.
    try { await globalAxiosErrorHandler(errorRetryCountZero); } catch (e) {
      // Expected error, test continues
    }
    expect(apiError.showApiError).toHaveBeenCalledWith(errorRetryCountZero);
  });
});
