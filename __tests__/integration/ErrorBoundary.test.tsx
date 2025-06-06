import React from 'react';
import { render, screen, act, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../../src/App';
import { vi } from 'vitest';
import type { ReactNode } from 'react'; // Import necessary types, removed ErrorInfo
import { captureException } from '../../src/utils/sentry'; // Import the mocked captureException

// Mock Sentry's captureException to avoid actual Sentry calls and console noise during tests
// This is done above the import now, standard practice for vi.mock
vi.mock('../../src/utils/sentry', () => ({
  captureException: vi.fn(),
}));

// Mock console.error to keep test output clean from expected error messages
const originalConsoleError = console.error;
const originalEnv = process.env;

beforeAll(() => {
  process.env = {
    ...originalEnv,
    NEXT_PUBLIC_SENTRY_DSN: 'test-dsn', // Ensure Sentry is "active"
  };
  console.error = (...args: unknown[]) => {
    const firstArg = args[0];
    if (typeof firstArg === 'string' && firstArg.includes('Test error from ErrorThrowingComponent')) {
      return;
    }
    // Check if the first argument is an Error object with the specific message
    if (typeof firstArg === 'object' && firstArg !== null && (firstArg as Error).message?.includes('Test error from ErrorThrowingComponent')) {
      return;
    }
    originalConsoleError.apply(console, args);
  };
});

afterAll(() => {
  console.error = originalConsoleError; // Restore original console.error
  process.env = originalEnv; // Restore original env
});

// This is the component that will throw an error
const ErrorThrowingComponent = (): ReactNode => {
  throw new Error('Test error from ErrorThrowingComponent');
};

// Mock a component that is used in App's routing, e.g., Home.
// When this mocked component is rendered, it will instead render ErrorThrowingComponent.
vi.mock('../../src/pages/Home', () => ({
  __esModule: true,
  default: (): ReactNode => <ErrorThrowingComponent />,
}));


describe('GlobalErrorBoundary Integration Test', () => {
  beforeEach(() => {
    // Reset mocks before each test
    vi.clearAllMocks();
    // Setup window.location.reload mock for each test
    const originalWindowLocation = window.location;
    // @ts-expect-error JSDOM doesn't fully implement location.reload
    delete window.location;
    // @ts-expect-error JSDOM doesn't fully implement location.reload
    window.location = { ...originalWindowLocation, assign: vi.fn(), reload: vi.fn() };
  });

  it('should display fallback UI, call Sentry with route, and handle retry', () => {
    act(() => {
      render(
        <MemoryRouter initialEntries={['/test-route']}>
          {/* Mocking Home to throw error, App will render it for '/' or '/test-route' if Home is default */}
          {/* Forcing a specific error-throwing route might be cleaner if Home is not guaranteed for /test-route */}
          {/* But current Home mock will throw for any route it's mapped to, assuming '/' is one such route */}
          <App />
        </MemoryRouter>
      );
    });

    // Assert that the GlobalErrorFallback UI is rendered
    expect(screen.getByText("Oops! Something went wrong.")).toBeInTheDocument();
    expect(screen.getByText("Please try again. If the problem continues, please contact support.")).toBeInTheDocument();
    const retryButton = screen.getByRole('button', { name: /Retry/i });
    expect(retryButton).toBeInTheDocument();

    // Assert Sentry call
    expect(captureException).toHaveBeenCalledTimes(1);
    expect(captureException).toHaveBeenCalledWith(
      expect.objectContaining({ message: 'Test error from ErrorThrowingComponent' }),
      expect.objectContaining({
        extra: { route: '/test-route' }, // Pathname from MemoryRouter initialEntry
      })
    );

    // Simulate user clicking retry
    fireEvent.click(retryButton);
    expect(window.location.reload).toHaveBeenCalledTimes(1);
  });
});
