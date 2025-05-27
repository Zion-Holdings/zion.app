import apiClient from '@/services/apiClient';
import { supabase } from '@/integrations/supabase/client';

jest.mock('@/integrations/supabase/client', () => ({
  supabase: { auth: { signOut: jest.fn().mockResolvedValue({}) } }
}));

describe('apiClient interceptor', () => {
  it('logs out on 401 and redirects', async () => {
    const error = { response: { status: 401, data: {} } } as any;
    const redirect = jest.spyOn(window.location, 'assign').mockImplementation(() => {});
    // @ts-ignore access internal handler
    const handler = apiClient.interceptors.response.handlers[0].rejected;
    await expect(handler(error)).rejects.toBe(error);
    expect(supabase.auth.signOut).toHaveBeenCalled();
    expect(redirect).toHaveBeenCalledWith('/login');
    redirect.mockRestore();
  });
});

