import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from '@/pages/Login'; // Target the correct Login page
import { useAuth } from '@/context/auth/AuthProvider'; // Correct path to mock
import { useRouter } from 'next/router';

// Mock next/router
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

// Mock useAuth hook from AuthProvider
jest.mock('@/context/auth/AuthProvider', () => ({
  useAuth: jest.fn(),
}));

// Mock toast as it's used in handleSubmit, though not directly related to fallback UI
jest.mock('@/hooks/use-toast', () => ({
    toast: jest.fn(),
}));

const mockedUseAuth = useAuth as jest.Mock;
const mockedUseRouter = useRouter as jest.Mock;

describe('Login Page Fallback UI for Long Loading', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    mockedUseAuth.mockReset();
    mockedUseRouter.mockReturnValue({
      push: jest.fn(),
      replace: jest.fn(),
      query: {},
      asPath: '/',
      pathname: '/login',
    });
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.useRealTimers();
  });

  it('should display fallback message if loading takes too long', () => {
    mockedUseAuth.mockReturnValue({
      isLoading: true,
      isAuthenticated: false,
      login: jest.fn(),
      user: null,
      // Provide other values if Login component expects them from useAuth
    });

    render(<Login />);

    // Initially, the "Loading..." text should be visible (or "Redirecting..." if isAuthenticated was true)
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    // The fallback message should not be visible yet
    expect(screen.queryByText(/Login is taking longer than usual/i)).not.toBeInTheDocument();

    // Advance timers past the 25-second threshold defined in Login.tsx
    act(() => {
      jest.advanceTimersByTime(26000); // 26 seconds
    });

    // Now the fallback message should be visible
    expect(screen.getByText(/Login is taking longer than usual/i)).toBeInTheDocument();
    // The original "Loading..." text should still be there
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('should not display fallback message if loading completes quickly', () => {
    // Initial state: loading
    mockedUseAuth.mockReturnValue({
      isLoading: true,
      isAuthenticated: false,
      login: jest.fn(),
      user: null,
    });

    const { rerender } = render(<Login />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();
    expect(screen.queryByText(/Login is taking longer than usual/i)).not.toBeInTheDocument();

    // Advance timers by less than 25 seconds
    act(() => {
      jest.advanceTimersByTime(10000); // 10 seconds
    });

    // Fallback message should still not be visible
    expect(screen.queryByText(/Login is taking longer than usual/i)).not.toBeInTheDocument();

    // Simulate loading finished: isLoading becomes false
    // Also simulate authentication success for realism, leading to "Redirecting..."
    mockedUseAuth.mockReturnValue({
      isLoading: false,
      isAuthenticated: true,
      login: jest.fn(),
      user: { email: 'test@example.com', id: '1' },
    });

    rerender(<Login />);

    // The "Loading..." text might change to "Redirecting..." or disappear if form is shown
    // In this case, since isAuthenticated is true, it shows "Redirecting..."
    expect(screen.getByText('Redirecting...')).toBeInTheDocument();
    // Crucially, the fallback message should not appear
    expect(screen.queryByText(/Login is taking longer than usual/i)).not.toBeInTheDocument();

    // Advance timers past the original 25-second threshold just to be sure
    // (e.g. if the timer wasn't cleaned up properly, this might catch it)
    act(() => {
      jest.advanceTimersByTime(16000); // Total 26 seconds from start
    });
    expect(screen.queryByText(/Login is taking longer than usual/i)).not.toBeInTheDocument();
  });

  it('should hide fallback message if it was shown and then loading completes', () => {
    mockedUseAuth.mockReturnValue({
      isLoading: true,
      isAuthenticated: false,
      login: jest.fn(),
      user: null,
    });

    const { rerender } = render(<Login />);

    // Show the fallback message
    act(() => {
      jest.advanceTimersByTime(26000); // 26 seconds
    });
    expect(screen.getByText(/Login is taking longer than usual/i)).toBeInTheDocument();

    // Simulate loading finished
    mockedUseAuth.mockReturnValue({
      isLoading: false,
      isAuthenticated: false, // e.g. login failed, but loading is done
      login: jest.fn(),
      user: null,
    });
    rerender(<Login />);

    // Fallback message should disappear, and the login form should be visible
    expect(screen.queryByText(/Login is taking longer than usual/i)).not.toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /welcome back/i })).toBeInTheDocument(); // Check for form
  });
});
