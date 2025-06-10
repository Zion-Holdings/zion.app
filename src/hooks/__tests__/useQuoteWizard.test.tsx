import { renderHook, waitFor, act } from '@testing-library/react';
import { SWRConfig } from 'swr';
import { useQuoteWizard, ServiceItem } from '../useQuoteWizard';

// Mock Sentry's captureException
jest.mock('@/utils/sentry', () => ({
  captureException: jest.fn(),
}));

const mockFetcher = jest.fn();

// Helper to wrap hook with SWRConfig and a clear cache
const renderUseQuoteWizard = (category: string) => {
  return renderHook(() => useQuoteWizard(category), {
    wrapper: ({ children }) => (
      <SWRConfig value={{ provider: () => new Map(), fetcher: mockFetcher }}>
        {children}
      </SWRConfig>
    ),
  });
};

const mockServiceItems: ServiceItem[] = [
  { id: '1', name: 'Test Service 1', slug: 'test-service-1', price: 100 },
  { id: '2', name: 'Test Service 2', slug: 'test-service-2', price: 200 },
];

describe('useQuoteWizard', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockFetcher.mockReset(); // Reset fetcher mock specifically
  });

  test('should fetch data successfully and return it', async () => {
    mockFetcher.mockResolvedValue(mockServiceItems);

    const { result } = renderUseQuoteWizard('services');

    expect(result.current.isLoading).toBe(true);

    await waitFor(() => expect(result.current.isLoading).toBe(false));

    expect(result.current.data).toEqual(mockServiceItems);
    expect(result.current.error).toBeUndefined();
    expect(mockFetcher).toHaveBeenCalledTimes(1);
    expect(mockFetcher).toHaveBeenCalledWith('/api/services?category=services');
  });

  test('should return empty array for successful fetch with no data', async () => {
    mockFetcher.mockResolvedValue([]);
    const { result } = renderUseQuoteWizard('talent');

    expect(result.current.isLoading).toBe(true);
    await waitFor(() => expect(result.current.isLoading).toBe(false));

    expect(result.current.data).toEqual([]);
    expect(result.current.error).toBeUndefined();
    expect(mockFetcher).toHaveBeenCalledTimes(1);
    expect(mockFetcher).toHaveBeenCalledWith('/api/services?category=talent');
  });

  test('should handle fetch error and set error state', async () => {
    const mockError = new Error('Failed to fetch');
    mockFetcher.mockRejectedValue(mockError); // First call fails

    // Mocking revalidation attempts to also fail
    mockFetcher.mockRejectedValueOnce(mockError); // Initial
    mockFetcher.mockRejectedValueOnce(mockError); // Retry 1
    mockFetcher.mockRejectedValueOnce(mockError); // Retry 2
    mockFetcher.mockRejectedValueOnce(mockError); // Retry 3


    const { result } = renderUseQuoteWizard('equipment');

    expect(result.current.isLoading).toBe(true);

    // Wait for loading to finish and error to be set
    // SWR will retry, so error might not be set immediately
    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    }, { timeout: 5000 }); // Increased timeout for retries

    expect(result.current.error).toEqual(mockError);
    expect(result.current.data).toBeUndefined();
     // SWR default is 1 initial + 3 retries = 4 calls for this setup.
     // The hook's onErrorRetry is configured for 3 retries (retryCount >=3 then return)
     // So, initial (retryCount=0), retry 1 (retryCount=1), retry 2 (retryCount=2).
     // Total calls = 1 (initial) + 3 (retries) = 4
    expect(mockFetcher).toHaveBeenCalledTimes(4); // Initial + 3 retries
  });

  describe.skip('Retry Logic with Fake Timers', () => {
    beforeEach(() => {
      jest.useFakeTimers();
    });

    afterEach(() => {
      jest.runOnlyPendingTimers();
      jest.useRealTimers();
    });

    test('should retry fetching up to 3 times on error then stop', async () => {
      const mockError = new Error('Network Error');
      // Mock fetch to consistently fail
      mockFetcher.mockRejectedValue(mockError);

      const { result } = renderHook(() => useQuoteWizard('services'), {
        wrapper: ({ children }) => (
          <SWRConfig value={{ provider: () => new Map(), fetcher: mockFetcher, dedupingInterval: 0 }}>
            {children}
          </SWRConfig>
        ),
      });

      // Initial state
      expect(result.current.isLoading).toBe(true);
      expect(mockFetcher).toHaveBeenCalledTimes(1); // Initial call

      // Wait for first error and retry attempt scheduling
      await act(async () => {
        jest.advanceTimersByTime(1000); // 1st retry delay (1s)
      });
       await waitFor(() => expect(mockFetcher).toHaveBeenCalledTimes(2));


      await act(async () => {
        jest.advanceTimersByTime(2000); // 2nd retry delay (2s)
      });
      await waitFor(() => expect(mockFetcher).toHaveBeenCalledTimes(3));


      await act(async () => {
        jest.advanceTimersByTime(4000); // 3rd retry delay (4s)
      });
      await waitFor(() => expect(mockFetcher).toHaveBeenCalledTimes(4));

      // After 3 retries (total 4 calls), it should stop
      await act(async () => {
        jest.advanceTimersByTime(8000); // Any further time
      });
      expect(mockFetcher).toHaveBeenCalledTimes(4);


      // Final state
      await waitFor(() => expect(result.current.isLoading).toBe(false));
      expect(result.current.error).toEqual(mockError);
      expect(result.current.data).toBeUndefined();
    });

    test('should not retry if error happens after retryCount >= 3', async () => {
        const mockError = new Error('Persistent Network Error');
        // Let SWR handle retry counts. We just keep failing the fetcher.
        mockFetcher.mockRejectedValue(mockError);

        const { result } = renderHook(() => useQuoteWizard('services'), {
          wrapper: ({ children }) => (
            // Disable SWR's dedupingInterval for tests to ensure fetcher is called as expected
            <SWRConfig value={{ provider: () => new Map(), fetcher: mockFetcher, dedupingInterval: 0 }}>
              {children}
            </SWRConfig>
          ),
        });

        // Initial call
        expect(result.current.isLoading).toBe(true);
        await waitFor(() => expect(mockFetcher).toHaveBeenCalledTimes(1));
        await waitFor(() => !result.current.isLoading); // Wait for first load cycle to complete

        // Retry 1 (retryCount = 0 internally before this retry)
        act(() => { jest.advanceTimersByTime(1000); }); // Advance by 1s for first retry
        await waitFor(() => expect(mockFetcher).toHaveBeenCalledTimes(2));
        await waitFor(() => !result.current.isLoading);

        // Retry 2 (retryCount = 1 internally before this retry)
        act(() => { jest.advanceTimersByTime(2000); }); // Advance by 2s for second retry
        await waitFor(() => expect(mockFetcher).toHaveBeenCalledTimes(3));
        await waitFor(() => !result.current.isLoading);

        // Retry 3 (retryCount = 2 internally before this retry)
        act(() => { jest.advanceTimersByTime(4000); }); // Advance by 4s for third retry
        await waitFor(() => expect(mockFetcher).toHaveBeenCalledTimes(4));
        await waitFor(() => !result.current.isLoading);

        // Should not retry further (retryCount = 3 internally, hook's condition is >= 3)
        act(() => { jest.advanceTimersByTime(8000); }); // Advance by 8s
        expect(mockFetcher).toHaveBeenCalledTimes(4); // Still 4 calls

        expect(result.current.error).toEqual(mockError);
        expect(result.current.data).toBeUndefined();
      });
  });
});
