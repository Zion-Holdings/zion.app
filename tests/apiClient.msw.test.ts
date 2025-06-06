import { describe, it, expect, vi, beforeAll, afterEach, afterAll } from 'vitest';
import apiClient from '@/services/apiClient';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import * as apiError from '@/utils/apiErrorHandler';
import { supabase } from '@/integrations/supabase/client';

vi.mock('@/utils/apiErrorHandler', () => ({
  showApiError: vi.fn(),
  parseApiError: vi.fn((e) => ({ status: e?.response?.status, code: e?.response?.data?.code ?? e?.response?.status, message: e?.response?.data?.message || 'Unexpected error – please try again later.' }))
}));
vi.mock('@/integrations/supabase/client', () => ({
  supabase: { auth: { signOut: vi.fn().mockResolvedValue({}) } }
}));

const server = setupServer();

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  vi.clearAllMocks();
});
afterAll(() => server.close());

describe('apiClient with msw', () => {
  it('handles 401 error', async () => {
    server.use(
      rest.get('/api/v1/services/test', (_req, res, ctx) =>
        res(ctx.status(401), ctx.json({ message: 'Unauthorized' }))
      )
    );
    await expect(apiClient.get('/test')).rejects.toBeTruthy();
    expect(supabase.auth.signOut).toHaveBeenCalled();
    expect(apiError.showApiError).toHaveBeenCalledWith(expect.objectContaining({ response: { status: 401, data: { message: 'Unauthorized' } } }));
  });

  it('handles 404 error', async () => {
    server.use(
      rest.get('/api/v1/services/test', (_req, res, ctx) => res(ctx.status(404)))
    );
    await expect(apiClient.get('/test')).rejects.toBeTruthy();
    expect(apiError.showApiError).toHaveBeenCalledWith(expect.objectContaining({ response: { status: 404 } }));
  });

  it('handles 500 error', async () => {
    server.use(
      rest.get('/api/v1/services/test', (_req, res, ctx) =>
        res(ctx.status(500), ctx.json({ message: 'Server err' }))
      )
    );
    await expect(apiClient.get('/test')).rejects.toBeTruthy();
    expect(apiError.showApiError).toHaveBeenCalledWith(expect.objectContaining({ response: { status: 500, data: { message: 'Server err' } } }));
  });

  it('handles network failure', async () => {
    server.use(
      rest.get('/api/v1/services/test', (_req, res) => res.networkError('fail'))
    );
    await expect(apiClient.get('/test')).rejects.toBeTruthy();
    expect(apiError.showApiError).toHaveBeenCalled();
  });

  it('handles validation error', async () => {
    server.use(
      rest.get('/api/v1/services/test', (_req, res, ctx) =>
        res(
          ctx.status(400),
          ctx.json({ code: 'VALID', message: 'Invalid data' })
        )
      )
    );
    await expect(apiClient.get('/test')).rejects.toBeTruthy();
    expect(apiError.showApiError).toHaveBeenCalledWith(
      expect.objectContaining({
        response: { status: 400, data: { code: 'VALID', message: 'Invalid data' } }
      })
    );
  });
});
