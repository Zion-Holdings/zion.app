import { vi, describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useAuthOperations } from '@/hooks/useAuthOperations';
import { supabase as supabaseClientModule } from '@/integrations/supabase/client';
import { showApiError } from '@/utils/apiErrorHandler';
import { toast } from '@/hooks/use-toast';
import * as referralUtils from '@/utils/referralUtils';
import * as authUtils from '@/utils/authUtils';

// Mock Supabase
vi.mock('@/integrations/supabase/client', () => ({
  supabase: {
    auth: {
      signInWithPassword: vi.fn(),
      signUp: vi.fn(),
      signOut: vi.fn(),
      resetPasswordForEmail: vi.fn(),
      signInWithOAuth: vi.fn(),
    },
    from: vi.fn(),
    rpc: vi.fn(),
  },
}));
const supabase = supabaseClientModule as unknown as {
  auth: {
    signInWithPassword: vi.Mock;
    signUp: vi.Mock;
    signOut: vi.Mock;
    resetPasswordForEmail: vi.Mock;
    signInWithOAuth: vi.Mock;
  };
  from: vi.Mock;
  rpc: vi.Mock;
};

// Mock other utilities
vi.mock('@/utils/apiErrorHandler', () => ({
  showApiError: vi.fn(),
}));
vi.mock('@/hooks/use-toast', () => ({
  toast: vi.fn(),
}));
vi.mock('@/utils/referralUtils', async (importOriginal) => {
    const actual = await importOriginal<typeof referralUtils>();
    return {
        ...actual,
        trackReferral: vi.fn().mockResolvedValue(false),
        checkUrlForReferralCode: vi.fn(),
    };
});
vi.mock('@/utils/authUtils', () => ({
  cleanupAuthState: vi.fn(),
}));

// Mock SWR mutate (if needed, though not directly tested here for calls)
vi.mock('swr', () => ({
  mutate: vi.fn(),
}));

// Mock fetch for points API
global.fetch = vi.fn();


describe('useAuthOperations', () => {
  let setUser: vi.Mock;
  let setIsLoading: vi.Mock;
  let setAvatarUrl: vi.Mock;

  beforeEach(() => {
    vi.clearAllMocks();
    setUser = vi.fn();
    setIsLoading = vi.fn();
    setAvatarUrl = vi.fn();

    // Default successful fetch for points
    (fetch as vi.Mock).mockResolvedValue({
        ok: true,
        json: async () => ({ success: true }),
    });
    // Default successful rpc for referral code generation
    supabase.rpc.mockResolvedValue({ data: null, error: null });
  });

  describe('signUp', () => {
    const signUpParams = {
      email: 'test@example.com',
      password: 'password123',
      display_name: 'Test User',
    };

    it('should call showApiError with retryCallback if supabase.auth.signUp returns an error', async () => {
      const mockError = { message: 'Supabase sign-up error' };
      supabase.auth.signUp.mockResolvedValueOnce({ data: null, error: mockError });

      const { result } = renderHook(() => useAuthOperations(setUser, setIsLoading, setAvatarUrl));

      await act(async () => {
        await result.current.signUp(signUpParams.email, signUpParams.password, { name: signUpParams.display_name });
      });

      expect(showApiError).toHaveBeenCalledTimes(1);
      const [errorArg, messageArg, retryCallback] = (showApiError as vi.Mock).mock.calls[0];

      expect(errorArg).toEqual(mockError);
      expect(messageArg).toBe('Error during signup');
      expect(retryCallback).toBeInstanceOf(Function);

      // Simulate retry
      supabase.auth.signUp.mockResolvedValueOnce({ data: { user: { id: '123' } }, error: null }); // Success on retry
      await act(async () => {
        await retryCallback();
      });
      expect(supabase.auth.signUp).toHaveBeenCalledTimes(2); // Original call + retry
      expect(showApiError).toHaveBeenCalledTimes(1); // Not called again on successful retry
    });

    it('should call showApiError with retryCallback if signUp encounters a generic error in catch block', async () => {
      const mockGenericError = new Error('Generic network failure');
      supabase.auth.signUp.mockRejectedValueOnce(mockGenericError);

      const { result } = renderHook(() => useAuthOperations(setUser, setIsLoading, setAvatarUrl));

      await act(async () => {
        await result.current.signUp(signUpParams.email, signUpParams.password, { name: signUpParams.display_name });
      });

      expect(showApiError).toHaveBeenCalledTimes(1);
      const [errorArg, messageArg, retryCallback] = (showApiError as vi.Mock).mock.calls[0];

      expect(errorArg).toBe(mockGenericError);
      expect(messageArg).toBe('Failed to sign up. Please try again.');
      expect(retryCallback).toBeInstanceOf(Function);

      // Simulate retry
      supabase.auth.signUp.mockResolvedValueOnce({ data: { user: { id: '123' } }, error: null }); // Success on retry
      await act(async () => {
        await retryCallback();
      });
      expect(supabase.auth.signUp).toHaveBeenCalledTimes(2);
      expect(showApiError).toHaveBeenCalledTimes(1);
    });

    it('should call trackReferral and increment points on successful signup', async () => {
      const mockUser = { id: 'user-123', email: signUpParams.email };
      supabase.auth.signUp.mockResolvedValueOnce({ data: { user: mockUser }, error: null });
      (referralUtils.trackReferral as vi.Mock).mockResolvedValueOnce(true); // Simulate referral was used

      const { result } = renderHook(() => useAuthOperations(setUser, setIsLoading, setAvatarUrl));

      await act(async () => {
        await result.current.signUp(signUpParams.email, signUpParams.password, { name: signUpParams.display_name });
      });

      expect(referralUtils.trackReferral).toHaveBeenCalledWith(mockUser.id, signUpParams.email);
      expect(fetch).toHaveBeenCalledWith('/api/points/increment', expect.objectContaining({
        body: JSON.stringify({ userId: mockUser.id, amount: 10, reason: 'signup' })
      }));
      expect(fetch).toHaveBeenCalledWith('/api/points/increment', expect.objectContaining({
        body: JSON.stringify({ userId: mockUser.id, amount: 20, reason: 'referral_signup' }) // Bonus for referral
      }));
      expect(supabase.rpc).toHaveBeenCalledWith('generate_referral_code', { user_id: mockUser.id });
      expect(toast).toHaveBeenCalledWith(expect.objectContaining({ title: "Signup successful!" }));
    });
  });

  // Add more tests for signIn, logout, resetPassword, updateProfile etc. if their error handling changes.
  // For now, only signUp uses showApiError.
});
