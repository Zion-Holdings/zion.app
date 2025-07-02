import { describe, it, expect, beforeEach } from 'vitest';
import React from 'react';
import { renderHook, act } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useTalentQuotes } from '@/hooks/useTalentQuotes';
import { quoteRequestService } from '@/services/quoteRequestService';
import { showApiError } from '@/utils/apiErrorHandler';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';

// Mocks
jest.mock('next/config', () => ({ // Changed vi.mock to jest.mock
  default: () => ({
    publicRuntimeConfig: {
      NEXT_PUBLIC_SENTRY_DSN: 'dummy-sentry-dsn',
      // Add other necessary runtime config variables here if needed by Sentry/logError
    },
  }),
}));
jest.mock('@/services/quoteRequestService'); // Changed vi.mock to jest.mock
jest.mock('@/utils/apiErrorHandler'); // Changed vi.mock to jest.mock
jest.mock('@/hooks/useAuth'); // Changed vi.mock to jest.mock
jest.mock('@/hooks/use-toast'); // Changed vi.mock to jest.mock

const mockUser = { id: 'talent-123' };
const mockQuotes = [
  { id: 'q1', talent_id: 'talent-123', status: 'new', is_archived: false, viewed_at: null },
  { id: 'q2', talent_id: 'talent-123', status: 'in_review', is_archived: false, viewed_at: new Date().toISOString() },
  { id: 'q3', talent_id: 'talent-123', status: 'responded', is_archived: true, viewed_at: new Date().toISOString() },
];

describe('useTalentQuotes', () => {
  let queryClient: QueryClient;

  beforeEach(() => {
    jest.clearAllMocks(); // Changed vi.clearAllMocks to jest.clearAllMocks
    queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          retry: false, // Disable retries for testing to avoid interference
        },
      },
    });
    (useAuth as jest.Mock).mockReturnValue({ user: mockUser }); // Changed vi.Mock to jest.Mock
    (useToast as jest.Mock).mockReturnValue({ toast: jest.fn() }); // Changed vi.Mock and vi.fn to jest.Mock and jest.fn
    (quoteRequestService.getByTalentId as jest.Mock).mockResolvedValue(mockQuotes); // Changed vi.Mock to jest.Mock
  });

  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  describe('updateStatusMutation', () => {
    it('should call showApiError with retryCallback on updateStatus failure', async () => {
      const mockError = new Error('Failed to update status');
      (quoteRequestService.updateStatus as jest.Mock).mockRejectedValueOnce(mockError); // Changed vi.Mock to jest.Mock

      const { result } = renderHook(() => useTalentQuotes(), { wrapper });

      const mutationArgs = { id: 'q1', status: 'in_review' as const };
      await act(async () => {
        try {
          await result.current.markAsViewed(mutationArgs.id);
        } catch {
          // Expected to throw if not handled by react-query's error boundary
        }
      });

      // Ensure mutation promise settles
      await new Promise(resolve => setTimeout(resolve, 0));


      expect(showApiError).toHaveBeenCalledTimes(1);
      const [errorArg, messageArg, retryCallback] = (showApiError as jest.Mock).mock.calls[0]; // Changed vi.Mock to jest.Mock
      expect(errorArg).toBe(mockError);
      expect(messageArg).toBe('Failed to update status');
      expect(retryCallback).toBeInstanceOf(Function);

      // Simulate retry
      (quoteRequestService.updateStatus as jest.Mock).mockResolvedValueOnce({ success: true }); // Success on retry, changed vi.Mock
      await act(async () => {
        await retryCallback();
      });
      expect(quoteRequestService.updateStatus).toHaveBeenCalledTimes(2); // Original + retry
      expect(showApiError).toHaveBeenCalledTimes(1); // Not called again
    });
  });

  describe('toggleArchiveMutation', () => {
    it('should call showApiError with retryCallback on toggleArchive failure', async () => {
      const mockError = new Error('Failed to update quote (archive)');
      (quoteRequestService.toggleArchive as jest.Mock).mockRejectedValueOnce(mockError); // Changed vi.Mock to jest.Mock

      const { result } = renderHook(() => useTalentQuotes(), { wrapper });

      const mutationArgs = { id: 'q1', isArchived: true };
      await act(async () => {
        try {
          await result.current.toggleArchive(mutationArgs.id, mutationArgs.isArchived);
        } catch {
          // Expected
        }
      });
      await new Promise(resolve => setTimeout(resolve, 0));


      expect(showApiError).toHaveBeenCalledTimes(1);
      const [errorArg, messageArg, retryCallback] = (showApiError as jest.Mock).mock.calls[0]; // Changed vi.Mock to jest.Mock
      expect(errorArg).toBe(mockError);
      expect(messageArg).toBe('Failed to update quote');
      expect(retryCallback).toBeInstanceOf(Function);

      // Simulate retry
      (quoteRequestService.toggleArchive as jest.Mock).mockResolvedValueOnce({ success: true }); // Success on retry, changed vi.Mock
      await act(async () => {
        await retryCallback();
      });
      expect(quoteRequestService.toggleArchive).toHaveBeenCalledTimes(2);
      expect(showApiError).toHaveBeenCalledTimes(1);
    });
  });
});
