import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useAuthOperations } from '@/hooks/useAuthOperations';
import { supabase as supabaseClientModule } from '@/integrations/supabase/client';
import { showApiError } from '@/utils/apiErrorHandler';
import { toast } from '@/hooks/use-toast';
import * as referralUtils from '@/utils/referralUtils';
// Removed unused authUtils import

// Mock Supabase
jest.mock('@/integrations/supabase/client', () => ({ // Changed vi.mock to jest.mock
  supabase: {
    auth: {
      signInWithPassword: jest.fn(), // Changed vi.fn to jest.fn
      signUp: jest.fn(), // Changed vi.fn to jest.fn
      signOut: jest.fn(), // Changed vi.fn to jest.fn
      resetPasswordForEmail: jest.fn(), // Changed vi.fn to jest.fn
      signInWithOAuth: jest.fn(), // Changed vi.fn to jest.fn
    },
    from: jest.fn(), // Changed vi.fn to jest.fn
    rpc: jest.fn(), // Changed vi.fn to jest.fn
  },
}));
const supabase = supabaseClientModule as unknown as {
  auth: {
    signInWithPassword: jest.Mock; // Changed vi.Mock to jest.Mock
    signUp: jest.Mock; // Changed vi.Mock to jest.Mock
    signOut: jest.Mock; // Changed vi.Mock to jest.Mock
    resetPasswordForEmail: jest.Mock; // Changed vi.Mock to jest.Mock
    signInWithOAuth: jest.Mock; // Changed vi.Mock to jest.Mock
  };
  from: jest.Mock; // Changed vi.Mock to jest.Mock
  rpc: jest.Mock; // Changed vi.Mock to jest.Mock
};

// Mock other utilities
jest.mock('@/utils/apiErrorHandler', () => ({ // Changed vi.mock to jest.mock
  showApiError: jest.fn(), // Changed vi.fn to jest.fn
}));
jest.mock('@/hooks/use-toast', () => ({ // Changed vi.mock to jest.mock
  toast: jest.fn(), // Changed vi.fn to jest.fn
}));
jest.mock('@/utils/referralUtils', async (importOriginal) => { // Changed vi.mock to jest.mock
    const actual = await importOriginal<typeof referralUtils>();
    return {
        ...actual,
        trackReferral: jest.fn().mockResolvedValue(false), // Changed vi.fn to jest.fn
        checkUrlForReferralCode: jest.fn(), // Changed vi.fn to jest.fn
    };
});
jest.mock('@/utils/authUtils', () => ({ // Changed vi.mock to jest.mock
  cleanupAuthState: jest.fn(), // Changed vi.fn to jest.fn
}));

// Mock SWR mutate (if needed, though not directly tested here for calls)
jest.mock('swr', () => ({ // Changed vi.mock to jest.mock
  mutate: jest.fn(), // Changed vi.fn to jest.fn
}));

// Mock fetch for points API
global.fetch = jest.fn(); // Changed vi.fn to jest.fn


describe('useAuthOperations', () => {
  let setUser: jest.Mock; // Changed vi.Mock to jest.Mock
  let setIsLoading: jest.Mock; // Changed vi.Mock to jest.Mock
  let setAvatarUrl: jest.Mock; // Changed vi.Mock to jest.Mock

  beforeEach(() => {
    jest.clearAllMocks(); // Changed vi.clearAllMocks to jest.clearAllMocks
    setUser = jest.fn(); // Changed vi.fn to jest.fn
    setIsLoading = jest.fn(); // Changed vi.fn to jest.fn
    setAvatarUrl = jest.fn(); // Changed vi.fn to jest.fn

    // Default successful fetch for points
    (fetch as jest.Mock).mockResolvedValue({ // Changed vi.Mock to jest.Mock
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
      const [errorArg, messageArg, retryCallback] = (showApiError as jest.Mock).mock.calls[0]; // Changed vi.Mock to jest.Mock

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
      const [errorArg, messageArg, retryCallback] = (showApiError as jest.Mock).mock.calls[0]; // Changed vi.Mock to jest.Mock

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
      (referralUtils.trackReferral as jest.Mock).mockResolvedValueOnce(true); // Simulate referral was used, changed vi.Mock

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
