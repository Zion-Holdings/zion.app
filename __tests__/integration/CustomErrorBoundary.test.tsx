import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import CustomErrorBoundary from '@/components/CustomErrorBoundary';
import CustomErrorPage from '@/pages/_error'; // Import the actual custom error page
import { vi } from 'vitest';
import { logError } from '@/utils/logError'; // Import the mocked function

// Mock the logError utility
vi.mock('@/utils/logError', () => ({
  logError: vi.fn(),
}));

// Mock next/head
vi.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({ children }: { children: Array<React.ReactElement> | React.ReactElement }) => {
      return <>{children}</>;
    },
  };
});


// Define a component that will throw an error
const ProblematicComponent = () => {
  throw new Error('Test client-side error');
};

// Placeholder for status page URL and support email - ensure these match _error.tsx
const STATUS_PAGE_URL = 'https://status.ziontech.com'; // Example URL
const SUPPORT_EMAIL = 'support@ziontech.com'; // Example email


describe('CustomErrorBoundary', () => {
  const originalConsoleError = console.error;
  let mockReload: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    // Suppress console.error output from jsdom due to the expected error
    console.error = vi.fn();
    // Mock window.location.reload
    mockReload = vi.fn();
    const originalWindowLocation = window.location;
    // @ts-expect-error JSDOM doesn't fully implement location.reload
    delete window.location;
    // @ts-expect-error JSDOM doesn't fully implement location.reload
    window.location = { ...originalWindowLocation, assign: vi.fn(), reload: mockReload };
  });

  afterEach(() => {
    // Restore console.error
    console.error = originalConsoleError;
    // Clear mocks
    vi.clearAllMocks();
  });

  it('should catch an error and render the custom error page with all elements', () => {
    act(() => {
      render(
        <CustomErrorBoundary>
          <ProblematicComponent />
        </CustomErrorBoundary>
      );
    });

    // Check for Zion Tech Logo (assuming alt text is "Zion Tech Logo")
    expect(screen.getByAltText('Zion Tech Logo')).toBeInTheDocument();

    // Check for the main error message
    expect(screen.getByText('Oops! Something went wrong.')).toBeInTheDocument();

    // Check for the apology message
    expect(screen.getByText('We apologize for the inconvenience. Our team has been notified.')).toBeInTheDocument();

    // Check for the "Reload Page" button
    const reloadButton = screen.getByRole('button', { name: 'Reload Page' });
    expect(reloadButton).toBeInTheDocument();

    // Check for the status page link
    const statusLink = screen.getByText('status page');
    expect(statusLink).toBeInTheDocument();
    expect(statusLink.closest('a')).toHaveAttribute('href', STATUS_PAGE_URL);

    // Check for the support email link
    const supportLink = screen.getByText(SUPPORT_EMAIL);
    expect(supportLink).toBeInTheDocument();
    expect(supportLink.closest('a')).toHaveAttribute('href', `mailto:${SUPPORT_EMAIL}`);

    // Check if logError was called (optional, but good for completeness)
    expect(logError).toHaveBeenCalled();
  });

  it('should call window.location.reload when "Reload Page" button is clicked', () => {
    act(() => {
      render(
        <CustomErrorBoundary>
          <ProblematicComponent />
        </CustomErrorBoundary>
      );
    });

    const reloadButton = screen.getByRole('button', { name: 'Reload Page' });
    fireEvent.click(reloadButton);
    expect(mockReload).toHaveBeenCalledTimes(1);
  });

  it('should render children if no error is thrown', () => {
    const HealthyComponent = () => <div>Everything is fine!</div>;
    act(() => {
      render(
        <CustomErrorBoundary>
          <HealthyComponent />
        </CustomErrorBoundary>
      );
    });
    expect(screen.getByText('Everything is fine!')).toBeInTheDocument();
  });
});
