import { describe, expect, it, vi } from 'vitest';
import apiClient from '@/services/apiClient';
import axios from 'axios';
import { supabase } from '@/integrations/supabase/client';
import * as toastUtils from '@/utils/showToast';
import * as sentry from '@/utils/sentry';

vi.mock('@/integrations/supabase/client', () => ({
  supabase: { auth: { signOut: vi.fn().mockResolvedValue({}) } }
}));
vi.mock('@/utils/showToast', () => ({
  showError: vi.fn()
}));
vi.mock('@/utils/sentry', () => ({
  captureException: vi.fn()
}));

describe('apiClient interceptor', () => {
  it('logs out on 401 and redirects', async () => {
    const error = { response: { status: 401, data: { message: 'Bad' } } } as any;
    const redirect = vi.spyOn(window.location, 'assign').mockImplementation(() => {});
    // @ts-ignore access internal handler
    const instanceHandler = apiClient.interceptors.response.handlers[0].rejected;
    const globalHandler = axios.interceptors.response.handlers[0].rejected;
    await expect(instanceHandler(error)).rejects.toBe(error);
    await expect(globalHandler(error)).rejects.toBe(error);
    expect(supabase.auth.signOut).toHaveBeenCalled();
    expect(redirect).toHaveBeenCalledWith('/login');
    expect(toastUtils.showError).toHaveBeenCalledWith(
      'api-401',
      'Authentication required'
    );
    expect(sentry.captureException).toHaveBeenCalledWith(
      error,
      expect.anything()
    );
    redirect.mockRestore();
  });

  it('handles other errors', async () => {
    const error = { response: { status: 500, data: {} } } as any;
    // @ts-ignore access internal handler
    const instanceHandler = apiClient.interceptors.response.handlers[0].rejected;
    const globalHandler = axios.interceptors.response.handlers[0].rejected;
    await expect(instanceHandler(error)).rejects.toBe(error);
    await expect(globalHandler(error)).rejects.toBe(error);
    expect(toastUtils.showError).toHaveBeenCalledWith('api-500', 'Server error');
    expect(sentry.captureException).toHaveBeenCalledWith(
      error,
      expect.anything()
    );
  });
});

