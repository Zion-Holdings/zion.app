import { describe, it, expect, vi, beforeAll, afterEach, afterAll } from 'vitest';
import apiClient from '@/services/apiClient';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import * as toastMod from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

vi.mock('@/hooks/use-toast', () => ({
  toast: { error: vi.fn() }
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
    expect(toastMod.toast.error).toHaveBeenCalledWith('Unauthorized');
  });

  it('handles 404 error', async () => {
    server.use(
      rest.get('/api/v1/services/test', (_req, res, ctx) => res(ctx.status(404)))
    );
    await expect(apiClient.get('/test')).rejects.toBeTruthy();
    expect(toastMod.toast.error).toHaveBeenCalledWith('Error 404');
  });

  it('handles 500 error', async () => {
    server.use(
      rest.get('/api/v1/services/test', (_req, res, ctx) =>
        res(ctx.status(500), ctx.json({ message: 'Server err' }))
      )
    );
    await expect(apiClient.get('/test')).rejects.toBeTruthy();
    expect(toastMod.toast.error).toHaveBeenCalledWith('Server err');
  });
});
