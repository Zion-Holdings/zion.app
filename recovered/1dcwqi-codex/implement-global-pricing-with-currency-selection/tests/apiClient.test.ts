import { describe, expect, it, vi } from 'vitest';
import apiClient from '@/services/apiClient';
import { supabase } from '@/integrations/supabase/client';
import * as toastMod from '@/hooks/use-toast';
import * as sentry from '@/utils/sentry';

vi.mock('@/integrations/supabase/client', () => ({
  supabase: { auth: { signOut: vi.fn().mockResolvedValue({}) } }
}));
vi.mock('@/hooks/use-toast', () => ({
  toast: { error: vi.fn() }
}));
vi.mock('@/utils/sentry', () => ({
  captureException: vi.fn()
}));

describe('apiClient interceptor', () => {
  it('logs out on 401 and redirects', async () => {
    const error = { response: { status: 401, data: { message: 'Bad' } } } as any;
    const redirect = vi.spyOn(window.location, 'assign').mockImplementation(() => {});
    // @ts-ignore access internal handler
    const handler = apiClient.interceptors.response.handlers[0].rejected;
    await expect(handler(error)).rejects.toBe(error);
    expect(supabase.auth.signOut).toHaveBeenCalled();
    expect(redirect).toHaveBeenCalledWith('/login');
    expect(toastMod.toast.error).toHaveBeenCalledWith('Bad');
    expect(sentry.captureException).toHaveBeenCalledWith(error);
    redirect.mockRestore();
  });

  it('handles other errors', async () => {
    const error = { response: { status: 500, data: {} } } as any;
    // @ts-ignore access internal handler
    const handler = apiClient.interceptors.response.handlers[0].rejected;
    await expect(handler(error)).rejects.toBe(error);
    expect(toastMod.toast.error).toHaveBeenCalledWith('Unexpected error');
    expect(sentry.captureException).toHaveBeenCalledWith(error);
  });
});

