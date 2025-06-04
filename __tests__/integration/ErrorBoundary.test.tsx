import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../../src/App';
import { vi } from 'vitest';
import type { ReactNode } from 'react'; // Import necessary types, removed ErrorInfo

// Mock Sentry's captureException to avoid actual Sentry calls and console noise during tests
vi.mock('../../src/utils/sentry', () => ({
  captureException: vi.fn(),
}));

// Mock console.error to keep test output clean from expected error messages
const originalConsoleError = console.error;
beforeAll(() => {
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


describe('ErrorBoundary Integration Test', () => {
  it('should render RootErrorFallback when a child component (mocked Home) throws an error', () => {
    // Temporarily modify window properties that might interfere with the test
    const testWindow = window as Window & typeof globalThis & { Sentry: any };
    const originalSentry = testWindow.Sentry;
    testWindow.Sentry = undefined;

    const originalWindowLocation = window.location;
    // @ts-expect-error JSDOM doesn't fully implement location.reload
    delete window.location;
    // @ts-expect-error JSDOM doesn't fully implement location.reload
    window.location = { ...originalWindowLocation, reload: vi.fn() };

    act(() => {
      render(
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      );
    });

    // Assert that the RootErrorFallback UI is rendered
    expect(screen.getByText("Oops! An Error Occurred")).toBeInTheDocument();
    expect(screen.getByText(/We're sorry for the inconvenience/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Retry/i })).toBeInTheDocument();

    // Restore window properties
    const finalWindow = window as Window & typeof globalThis & { Sentry: any };
    finalWindow.Sentry = originalSentry;
    window.location = originalWindowLocation;
  });
});
