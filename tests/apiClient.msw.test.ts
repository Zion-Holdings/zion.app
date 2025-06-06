import { describe, it, expect, vi, beforeAll, afterEach, afterAll } from 'vitest';
import apiClient from '@/services/apiClient';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import * as toastUtils from '@/utils/showToast';
import { supabase } from '@/integrations/supabase/client';

vi.mock('@/utils/showToast', () => ({
  showError: vi.fn()
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
    expect(toastUtils.showError).toHaveBeenCalledWith('api-401', 'Unauthorized');
  });

  it('handles 404 error', async () => {
    server.use(
      rest.get('/api/v1/services/test', (_req, res, ctx) => res(ctx.status(404)))
    );
    await expect(apiClient.get('/test')).rejects.toBeTruthy();
    expect(toastUtils.showError).toHaveBeenCalledWith('api-404', 'Error 404');
  });

  it('handles 500 error', async () => {
    server.use(
      rest.get('/api/v1/services/test', (_req, res, ctx) =>
        res(ctx.status(500), ctx.json({ message: 'Server err' }))
      )
    );
    await expect(apiClient.get('/test')).rejects.toBeTruthy();
    expect(toastUtils.showError).toHaveBeenCalledWith('api-500', 'Server err');
  });
});
