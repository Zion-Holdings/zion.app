import { describe, it, expect, beforeEach, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useAuthOperations } from '@/hooks/useAuthOperations';
import { supabase as supabaseClientModule } from '@/integrations/supabase/client';
import { showApiError } from '@/utils/apiErrorHandler';
import { toast } from '@/hooks/use-toast';
import * as referralUtils from '@/utils/referralUtils';
// Removed unused authUtils import

// Mock Supabase
vi.mock('@/integrations/supabase/client', () => ({ // Changed vi.mock to vi.mock
  supabase: {
    auth: {
      signInWithPassword: vi.fn(), // Changed vi.fn to vi.fn
      signUp: vi.fn(), // Changed vi.fn to vi.fn
      signOut: vi.fn(), // Changed vi.fn to vi.fn
      resetPasswordForEmail: vi.fn(), // Changed vi.fn to vi.fn
      signInWithOAuth: vi.fn(), // Changed vi.fn to vi.fn
    },
    from: vi.fn(), // Changed vi.fn to vi.fn
    rpc: vi.fn(), // Changed vi.fn to vi.fn
  },
}));
const supabase = supabaseClientModule as unknown as {
  auth: {
    signInWithPassword: vi.Mock; // Changed vi.Mock to vi.Mock
    signUp: vi.Mock; // Changed vi.Mock to vi.Mock
    signOut: vi.Mock; // Changed vi.Mock to vi.Mock
    resetPasswordForEmail: vi.Mock; // Changed vi.Mock to vi.Mock
    signInWithOAuth: vi.Mock; // Changed vi.Mock to vi.Mock
  };
  from: vi.Mock; // Changed vi.Mock to vi.Mock
  rpc: vi.Mock; // Changed vi.Mock to vi.Mock
};

// Mock other utilities
vi.mock('@/utils/apiErrorHandler', () => ({ // Changed vi.mock to vi.mock
  showApiError: vi.fn(), // Changed vi.fn to vi.fn
}));
vi.mock('@/hooks/use-toast', () => ({ // Changed vi.mock to vi.mock
  toast: vi.fn(), // Changed vi.fn to vi.fn
}));
vi.mock('@/utils/referralUtils', async (importOriginal) => { // Changed vi.mock to vi.mock
    const actual = await importOriginal<typeof referralUtils>();
    return {
        ...actual,
        trackReferral: vi.fn().mockResolvedValue(false), // Changed vi.fn to vi.fn
        checkUrlForReferralCode: vi.fn(), // Changed vi.fn to vi.fn
    };
});
vi.mock('@/utils/authUtils', () => ({ // Changed vi.mock to vi.mock
  cleanupAuthState: vi.fn(), // Changed vi.fn to vi.fn
}));

// Mock SWR mutate (if needed, though not directly tested here for calls)
vi.mock('swr', () => ({ // Changed vi.mock to vi.mock
  mutate: vi.fn(), // Changed vi.fn to vi.fn
}));

// Mock fetch for points API
global.fetch = vi.fn(); // Changed vi.fn to vi.fn


describe('useAuthOperations', () => {
  let _setUser: vi.Mock; // Changed vi.Mock to vi.Mock
  let setIsLoading: vi.Mock; // Changed vi.Mock to vi.Mock
  let setAvatarUrl: vi.Mock; // Changed vi.Mock to vi.Mock

  beforeEach(() => {
    vi.clearAllMocks(); // Changed vi.clearAllMocks to vi.clearAllMocks
    setUser = vi.fn(); // Changed vi.fn to vi.fn
    setIsLoading = vi.fn(); // Changed vi.fn to vi.fn
    setAvatarUrl = vi.fn(); // Changed vi.fn to vi.fn

    // Default successful fetch for points
    (fetch as vi.Mock).mockResolvedValue({ // Changed vi.Mock to vi.Mock
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

      const { _result } = renderHook(() => useAuthOperations(setUser, setIsLoading, setAvatarUrl));

      await act(async () => {
        await result.current.signUp(signUpParams.email, signUpParams.password, { name: signUpParams.display_name });
      });

      expect(showApiError).toHaveBeenCalledTimes(1);
      const [errorArg, messageArg, retryCallback] = (showApiError as vi.Mock).mock.calls[0]; // Changed vi.Mock to vi.Mock

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

      const { _result } = renderHook(() => useAuthOperations(setUser, setIsLoading, setAvatarUrl));

      await act(async () => {
        await result.current.signUp(signUpParams.email, signUpParams.password, { name: signUpParams.display_name });
      });

      expect(showApiError).toHaveBeenCalledTimes(1);
      const [errorArg, messageArg, retryCallback] = (showApiError as vi.Mock).mock.calls[0]; // Changed vi.Mock to vi.Mock

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
      (referralUtils.trackReferral as vi.Mock).mockResolvedValueOnce(true); // Simulate referral was used, changed vi.Mock

      const { _result } = renderHook(() => useAuthOperations(setUser, setIsLoading, setAvatarUrl));

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
