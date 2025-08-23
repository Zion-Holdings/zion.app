import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MarketplaceErrorBoundary } from '@/components/MarketplaceErrorBoundary';
import * as Sentry from '@sentry/nextjs';
import { mutate } from 'swr';

// Mock dependencies
jest.mock('@sentry/nextjs');
jest.mock('swr');

const ThrowError = ({ shouldThrow }: { shouldThrow: boolean }) => {
  if (shouldThrow) {
    throw new Error('Test error');
  }
  return <div>Working component</div>;
};

describe('MarketplaceErrorBoundary', () => {
  const mockMutate = mutate as jest.MockedFunction<typeof mutate>;
  
  beforeEach(() => {
    jest.clearAllMocks();
    // Suppress console.error for tests
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    (console.error as jest.Mock).mockRestore();
  });

  it('renders children when there is no error', () => {
    render(
      <MarketplaceErrorBoundary>
        <ThrowError shouldThrow={false} />
      </MarketplaceErrorBoundary>
    );

    expect(screen.getByText('Working component')).toBeInTheDocument();
  });

  it('renders error fallback when there is an error', () => {
    render(
      <MarketplaceErrorBoundary>
        <ThrowError shouldThrow={true} />
      </MarketplaceErrorBoundary>
    );

    expect(screen.getByText('Something went wrong in the marketplace')).toBeInTheDocument();
    expect(screen.getByText('Test error')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /retry/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /reload page/i })).toBeInTheDocument();
  });

  it('logs error to Sentry when an error occurs', () => {
    const mockWithScope = jest.fn((callback) => {
      const scope = {
        setTag: jest.fn(),
        setContext: jest.fn(),
        setLevel: jest.fn(),
      };
      callback(scope);
    });
    (Sentry.withScope as jest.Mock).mockImplementation(mockWithScope);

    render(
      <MarketplaceErrorBoundary>
        <ThrowError shouldThrow={true} />
      </MarketplaceErrorBoundary>
    );

    expect(Sentry.withScope).toHaveBeenCalled();
    expect(Sentry.captureException).toHaveBeenCalledWith(expect.any(Error));
  });

  it('calls SWR mutate when retry button is clicked', async () => {
    mockMutate.mockResolvedValue(undefined);

    render(
      <MarketplaceErrorBoundary>
        <ThrowError shouldThrow={true} />
      </MarketplaceErrorBoundary>
    );

    const retryButton = screen.getByRole('button', { name: /retry/i });
    fireEvent.click(retryButton);

    await waitFor(() => {
      expect(mockMutate).toHaveBeenCalledWith(
        expect.any(Function),
        undefined,
        { revalidate: true }
      );
    });
  });

  it('reloads page when reload button is clicked', () => {
    const mockReload = jest.fn();
    Object.defineProperty(window, 'location', {
      value: { reload: mockReload },
      writable: true,
    });

    render(
      <MarketplaceErrorBoundary>
        <ThrowError shouldThrow={true} />
      </MarketplaceErrorBoundary>
    );

    const reloadButton = screen.getByRole('button', { name: /reload page/i });
    fireEvent.click(reloadButton);

    expect(mockReload).toHaveBeenCalled();
  });
}); 