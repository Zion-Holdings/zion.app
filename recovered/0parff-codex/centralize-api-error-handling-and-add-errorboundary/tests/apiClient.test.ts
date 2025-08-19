import { describe, it, expect, vi } from 'vitest';
import apiClient from '@/services/apiClient';
import { supabase } from '@/integrations/supabase/client';

vi.mock('@/integrations/supabase/client', () => ({
  supabase: { auth: { signOut: vi.fn().mockResolvedValue({}) } }
}));

describe('apiClient interceptor', () => {
  it('logs out on 401 and redirects', async () => {
    const error = { response: { status: 401, data: {} } } as any;
    const redirect = vi.spyOn(window.location, 'assign').mockImplementation(() => {});
    // @ts-ignore access internal handler
    const handler = apiClient.interceptors.response.handlers[0].rejected;
    await expect(handler(error)).rejects.toBe(error);
    expect(supabase.auth.signOut).toHaveBeenCalled();
    expect(redirect).toHaveBeenCalledWith('/login');
    redirect.mockRestore();
  });
});

