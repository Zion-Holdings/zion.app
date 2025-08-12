import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ApiErrorBoundary } from '@/components/ApiErrorBoundary';

// Mock Sentry
jest.mock('@sentry/nextjs', () => ({
  withScope: jest.fn((callback) => callback({
    setTag: jest.fn(),
    setContext: jest.fn(),
    setLevel: jest.fn(),
  })),
  captureException: jest.fn(),
}));

// Component that throws an error
const ThrowError = ({ shouldError }: { shouldError: boolean }) => {
  if (shouldError) {
    throw new Error('Test error for ApiErrorBoundary');
  }
  return <div>No error</div>;
};

describe('ApiErrorBoundary', () => {
  let queryClient: QueryClient;

  beforeEach(() => {
    queryClient = new QueryClient({
      defaultOptions: {
        queries: { retry: false },
        mutations: { retry: false },
      },
    });
    // Mock console.error to avoid noise in tests
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders children when there is no error', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <ApiErrorBoundary queryClient={queryClient}>
          <ThrowError shouldError={false} />
        </ApiErrorBoundary>
      </QueryClientProvider>
    );

    expect(screen.getByText('No error')).toBeInTheDocument();
  });

  it('displays error UI when an error occurs', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <ApiErrorBoundary queryClient={queryClient}>
          <ThrowError shouldError={true} />
        </ApiErrorBoundary>
      </QueryClientProvider>
    );

    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
    expect(screen.getByText('An unexpected error occurred while loading the page.')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /try again/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /reload page/i })).toBeInTheDocument();
  });

  it('shows network error message for network-related errors', () => {
    const NetworkError = () => {
      throw new Error('fetch failed: network error');
    };

    render(
      <QueryClientProvider client={queryClient}>
        <ApiErrorBoundary queryClient={queryClient}>
          <NetworkError />
        </ApiErrorBoundary>
      </QueryClientProvider>
    );

    expect(screen.getByText('Connection Problem')).toBeInTheDocument();
    expect(screen.getByText(/Unable to connect to our servers/)).toBeInTheDocument();
  });

  it('shows retry button that can be clicked', async () => {
    const mockInvalidateQueries = jest.spyOn(queryClient, 'invalidateQueries').mockResolvedValue();
    const mockRefetchQueries = jest.spyOn(queryClient, 'refetchQueries').mockResolvedValue([]);

    render(
      <QueryClientProvider client={queryClient}>
        <ApiErrorBoundary queryClient={queryClient}>
          <ThrowError shouldError={true} />
        </ApiErrorBoundary>
      </QueryClientProvider>
    );

    const retryButton = screen.getByRole('button', { name: /try again/i });
    fireEvent.click(retryButton);

    expect(screen.getByText('Retrying...')).toBeInTheDocument();

    await waitFor(() => {
      expect(mockInvalidateQueries).toHaveBeenCalled();
      expect(mockRefetchQueries).toHaveBeenCalled();
    });
  });

  it('shows custom fallback when provided', () => {
    const customFallback = <div>Custom error message</div>;

    render(
      <QueryClientProvider client={queryClient}>
        <ApiErrorBoundary queryClient={queryClient} fallback={customFallback}>
          <ThrowError shouldError={true} />
        </ApiErrorBoundary>
      </QueryClientProvider>
    );

    expect(screen.getByText('Custom error message')).toBeInTheDocument();
    expect(screen.queryByText('Something went wrong')).not.toBeInTheDocument();
  });
}); 