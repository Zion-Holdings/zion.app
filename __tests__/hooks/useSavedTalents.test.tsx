import { vi, describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useSavedTalents } from '@/hooks/talent/useSavedTalents';
import { supabase } from '@/integrations/supabase/client';
import { showApiError } from '@/utils/apiErrorHandler';
import { toast } from '@/hooks/use-toast'; // Assuming direct toast usage for non-error cases
// Removed unused useRouter import

import { supabase as supabaseClientModule } from '@/integrations/supabase/client';

// Mocks
vi.mock('@/integrations/supabase/client', () => ({
  supabase: {
    from: vi.fn(),
    select: vi.fn(),
    eq: vi.fn(),
    in: vi.fn(),
    insert: vi.fn(),
    delete: vi.fn(),
  },
}));

// Cast the imported module to access its mocked methods
const supabase = supabaseClientModule as unknown as {
  from: vi.Mock;
  select: vi.Mock;
  eq: vi.Mock;
  in: vi.Mock;
  insert: vi.Mock;
  delete: vi.Mock;
};

vi.mock('@/utils/apiErrorHandler', () => ({
  showApiError: vi.fn(),
}));

vi.mock('@/hooks/use-toast', () => ({
  toast: vi.fn(),
}));

vi.mock('@/hooks/talent/useAuthStatus', () => ({
  useAuthStatus: vi.fn(() => ({
    isAuthenticated: true,
    userDetails: { id: 'test-user-id' },
  })),
}));

vi.mock('next/router', () => ({
  useRouter: vi.fn(() => ({
    push: vi.fn(),
    asPath: '/some-path',
  })),
}));


describe('useSavedTalents', () => {
  beforeEach(() => {
    vi.clearAllMocks();

    // Re-establish default behavior on the (now globally mocked) supabase methods
    supabase.from.mockReturnThis();
    supabase.select.mockReturnThis();
    supabase.eq.mockResolvedValue({ data: [], error: null });
    supabase.in.mockResolvedValue({ data: [], error: null });
    supabase.insert.mockResolvedValue({ data: null, error: null });
    supabase.delete.mockReturnThis();
  });

  describe('fetchSavedTalents', () => {
    it('should call showApiError with a retry callback if fetching saved talent IDs fails', async () => {
      const mockError = new Error('Supabase fetch error for saved_talents');
      // Mock supabase to return an error for the first call (fetching IDs)
      supabase.eq.mockResolvedValueOnce({ data: null, error: mockError });

      const { result: _result } = renderHook(() => useSavedTalents());

      // Wait for the useEffect to run and operations to settle
      await act(async () => {
        // No specific action needed here, useEffect runs on mount
        // Adding a slight delay or a more robust way to wait for async ops if needed
        await new Promise(resolve => setTimeout(resolve, 0));
      });

      expect(showApiError).toHaveBeenCalledTimes(1);
      const [errorArg, messageArg, retryCallback] = (showApiError as vi.Mock).mock.calls[0];

      expect(errorArg).toBe(mockError);
      expect(messageArg).toBe('There was a problem loading your saved talents.');
      expect(retryCallback).toBeInstanceOf(Function);

      // Simulate retry
      vi.clearAllMocks(); // Clear mocks before retry
      // Re-setup default mocks for the retry operation
      supabase.from.mockReturnThis();
      supabase.select.mockReturnThis();
      // First .eq() for saved_talents IDs, second .in() for talent_profiles
      supabase.eq.mockResolvedValueOnce({ data: [{ talent_id: 'talent1' }], error: null });
      supabase.in.mockResolvedValueOnce({ data: [{id: 'talent1', full_name: 'Talent 1'}], error: null });

      await act(async () => {
        await retryCallback();
      });

      expect(showApiError).not.toHaveBeenCalled(); // Should not call showApiError on successful retry
      // Check if supabase.from was called again (indicating a retry attempt)
      // It will be called twice in a successful fetchSavedTalents: once for saved_talents, once for talent_profiles
      expect(supabase.from).toHaveBeenCalledTimes(2);
    });

    it('should call showApiError with a retry callback if fetching talent profiles fails', async () => {
      const mockError = new Error('Supabase fetch error for talent_profiles');
      // Mock first call (IDs) to be successful, second call (profiles) to fail
      supabase.eq.mockResolvedValueOnce({ data: [{ talent_id: 'talent1' }], error: null }); // For saved_talents IDs
      supabase.in.mockResolvedValueOnce({ data: null, error: mockError }); // For talent_profiles

      const { result: _result } = renderHook(() => useSavedTalents());

      await act(async () => {
        await new Promise(resolve => setTimeout(resolve, 0));
      });

      expect(showApiError).toHaveBeenCalledTimes(1);
      const [errorArg, messageArg, retryCallback] = (showApiError as vi.Mock).mock.calls[0];

      expect(errorArg).toBe(mockError);
      expect(messageArg).toBe('There was a problem loading your saved talents.');
      expect(retryCallback).toBeInstanceOf(Function);
    });
  });

  describe('toggleSaveTalent', () => {
    it('should call showApiError with a retry callback if deleting a saved talent fails', async () => {
      const talentToToggle = { id: 'talent1', full_name: 'Talent One' } as any;
      // Setup initial state as if 'talent1' is already saved
      supabase.eq.mockResolvedValueOnce({ data: [{ talent_id: 'talent1' }], error: null }); // For initial load of saved IDs
      supabase.in.mockResolvedValueOnce({ data: [talentToToggle], error: null });      // For initial load of talent profiles

      const { result } = renderHook(() => useSavedTalents());
      await act(async () => { await new Promise(resolve => setTimeout(resolve, 0)); }); // Initial fetch

      const mockDeleteError = new Error('Supabase delete error');

      // Setup for the failing delete operation: from -> delete -> eq (user_id) -> eq (talent_id)
      supabase.from.mockReturnThis(); // from('saved_talents')
      supabase.delete.mockReturnThis(); // .delete()
      supabase.eq // First eq for user_id, needs to be chainable for the second eq
        .mockImplementationOnce(() => supabase) // Make the first eq return `this` (the supabase mock)
        .mockResolvedValueOnce({ error: mockDeleteError }); // Second eq for talent_id, resolves with error

      await act(async () => {
        await result.current.toggleSaveTalent(talentToToggle);
      });

      expect(showApiError).toHaveBeenCalledTimes(1);
      const [errorArg, messageArg, retryCallback] = (showApiError as vi.Mock).mock.calls[0];
      // The actual error thrown by Supabase client might be different if a method is not function
      // For this test, we ensure our mock setup leads to the intended mockError being passed.
      // If the chain breaks, errorArg might be a TypeError.
      expect(errorArg.message).toBe(mockDeleteError.message); // Check message if object instances differ
      expect(messageArg).toBe('There was a problem updating your favorites. Please try again.');
      expect(retryCallback).toBeInstanceOf(Function);

      // Simulate retry
      vi.clearAllMocks();
      supabase.from.mockReturnThis();
      supabase.delete.mockReturnThis();
      supabase.eq
        .mockImplementationOnce(() => supabase) // First eq for user_id (retry)
        .mockResolvedValueOnce({ error: null });   // Second eq for talent_id (retry) - success

      await act(async () => {
        await retryCallback();
      });
      expect(showApiError).not.toHaveBeenCalled();
      expect(supabase.delete).toHaveBeenCalledTimes(1); // Called once in the retry path
      expect(toast).toHaveBeenCalledWith(expect.objectContaining({ title: "Removed from favorites" }));
    });

    it('should call showApiError with a retry callback if inserting a new saved talent fails', async () => {
        const talentToToggle = { id: 'talent2', full_name: 'Talent Two' } as any;
        // Initial state: no talents saved for the first call in useEffect
        supabase.eq.mockResolvedValueOnce({ data: [], error: null });
        // No profiles needed if no IDs, so inFn won't be called for initial load

        const { result } = renderHook(() => useSavedTalents());
        await act(async () => { await new Promise(resolve => setTimeout(resolve, 0)); }); // Initial fetch

        const mockInsertError = new Error('Supabase insert error');
        supabase.insert.mockResolvedValueOnce({ error: mockInsertError });

        await act(async () => {
            await result.current.toggleSaveTalent(talentToToggle);
        });

        expect(showApiError).toHaveBeenCalledTimes(1);
        const [errorArg, messageArg, retryCallback] = (showApiError as vi.Mock).mock.calls[0];
        expect(errorArg).toBe(mockInsertError);
        expect(messageArg).toBe('There was a problem updating your favorites. Please try again.');
        expect(retryCallback).toBeInstanceOf(Function);

        // Simulate retry
        vi.clearAllMocks();
        supabase.insert.mockResolvedValueOnce({ error: null }); // Successful insert on retry

        await act(async () => {
            await retryCallback();
        });
        expect(showApiError).not.toHaveBeenCalled();
        expect(supabase.insert).toHaveBeenCalledTimes(1);
        expect(toast).toHaveBeenCalledWith(expect.objectContaining({ title: "Added to favorites" }));
    });
  });
});
