import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import GlobalErrorBoundary from '@/components/GlobalErrorBoundary';
// We might not need GlobalErrorFallback directly if we test through GlobalErrorBoundary
// import GlobalErrorFallback from '@/components/GlobalErrorBoundary'; // Keep if direct testing is chosen

// Mocking logError to prevent actual logging during tests
jest.mock('@/utils/logError', () => ({
  logError: jest.fn(),
}));

// Mocking console.error to keep test output clean
let consoleErrorMock: jest.SpyInstance;

beforeAll(() => {
  consoleErrorMock = jest.spyOn(console, 'error').mockImplementation(() => {});
});

afterAll(() => {
  consoleErrorMock.mockRestore();
});

describe('GlobalErrorBoundary', () => {
  // Test Case 1: Renders children when there is no error
  it('renders children when there is no error', () => {
    const TestChild = () => <div>Test Child Content</div>;
    render(
      <GlobalErrorBoundary>
        <TestChild />
      </GlobalErrorBoundary>
    );
    expect(screen.getByText('Test Child Content')).toBeInTheDocument();
  });

  // Test Case 2: Catches an error and renders the fallback UI
  it('catches an error and renders the fallback UI with error details', () => {
    const ErrorComponent = () => {
      throw new Error('Test error');
    };
    render(
      <GlobalErrorBoundary>
        <ErrorComponent />
      </GlobalErrorBoundary>
    );
    // Check for fallback UI elements
    expect(screen.getByText('Oops! Something went wrong.')).toBeInTheDocument();
    expect(screen.getByText('We apologize for the inconvenience.')).toBeInTheDocument();
    expect(screen.getByText('Our team has been notified and is working to fix the issue.')).toBeInTheDocument();

    // Check for error details (assuming it's displayed)
    // Open the details section first if necessary
    const detailsSummary = screen.getByText('Error Details');
    fireEvent.click(detailsSummary);
    expect(screen.getByText('Test error')).toBeInTheDocument();
  });

  // Test Case 3: "Reload" button in fallback UI attempts to refresh the page
  it('"Reload" button in fallback UI attempts to refresh the page', () => {
    const ErrorComponent = () => {
      throw new Error('Another test error');
    };

    // Mock window.location.reload
    const originalLocation = window.location;
    // @ts-expect-error - Intentionally deleting window.location for test mocking
    delete window.location;
    // Intentionally overriding window.location with mock for testing
    window.location = { ...originalLocation, reload: jest.fn() };

    render(
      <GlobalErrorBoundary>
        <ErrorComponent />
      </GlobalErrorBoundary>
    );

    const reloadButton = screen.getByRole('button', { name: /Reload/i });
    fireEvent.click(reloadButton);
    expect(window.location.reload).toHaveBeenCalledTimes(1);

    // Restore original window.location
    window.location = originalLocation;
  });
});
