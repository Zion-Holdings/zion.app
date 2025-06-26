import { describe, expect, it, vi } from 'vitest';
import apiClient from '@/services/apiClient';
import axios from 'axios';
import { supabase } from '@/integrations/supabase/client';
import * as apiError from '@/utils/apiErrorHandler';
import * as sentry from '@/utils/sentry';

vi.mock('@/integrations/supabase/client', () => ({
  supabase: { auth: { signOut: vi.fn().mockResolvedValue({}) } }
}));
vi.mock('@/utils/apiErrorHandler', () => ({
  showApiError: vi.fn(),
  parseApiError: vi.fn((e) => ({ status: e?.response?.status, code: e?.response?.data?.code ?? e?.response?.status, message: e?.response?.data?.message || 'Unexpected error – please try again later.' }))
}));
vi.mock('@/utils/sentry', () => ({
  captureException: vi.fn()
}));

describe('apiClient interceptor', () => {
  it('logs out on 401 and redirects', async () => {
    const error = { response: { status: 401, data: { message: 'Bad' } } } as any;
    const redirect = vi.spyOn(window.location, 'assign').mockImplementation(() => {});
    // @ts-expect-error - accessing internal handler for testing
    const instanceHandler = apiClient.interceptors.response.handlers[0].rejected;
    const globalHandler = axios.interceptors.response.handlers[0].rejected;
    await expect(instanceHandler(error)).rejects.toBe(error);
    await expect(globalHandler(error)).rejects.toBe(error);
    expect(supabase.auth.signOut).toHaveBeenCalled();
    expect(redirect).toHaveBeenCalledWith('/login');
    expect(apiError.showApiError).toHaveBeenCalledWith(error);
    expect(sentry.captureException).toHaveBeenCalledWith(error);
    redirect.mockRestore();
  });

  it('handles other errors', async () => {
    const error = { response: { status: 500, data: {} } } as any;
    // @ts-expect-error - accessing internal handler for testing
    const instanceHandler = apiClient.interceptors.response.handlers[0].rejected;
    const globalHandler = axios.interceptors.response.handlers[0].rejected;
    await expect(instanceHandler(error)).rejects.toBe(error);
    await expect(globalHandler(error)).rejects.toBe(error);
    expect(apiError.showApiError).toHaveBeenCalledWith(error);
    expect(sentry.captureException).toHaveBeenCalledWith(error);
  });
});

