import React from 'react';
import { render, act, screen, waitFor } from '@testing-library/react';
import { AuthProvider, useAuth } from '@/context/auth/AuthProvider';
import * as authService from '@/services/authService';
import { toast as originalToast } from '@/hooks/use-toast'; // Import original toast
import { supabase } from '@/integrations/supabase/client';

// Mock services and hooks
jest.mock('@/services/authService');
jest.mock('@/hooks/use-toast', () => ({
  toast: jest.fn(),
}));
jest.mock('@/integrations/supabase/client', () => ({
  supabase: {
    auth: {
      onAuthStateChange: jest.fn().mockReturnValue({
        data: { subscription: { unsubscribe: jest.fn() } },
      }),
      signInWithPassword: jest.fn(),
      setSession: jest.fn(),
      // Add other Supabase auth methods if needed by AuthProvider initialization or other functions
    },
    from: jest.fn(() => ({
      select: jest.fn(() => ({
        eq: jest.fn(() => ({
          single: jest.fn().mockResolvedValue({ data: { id: 'user-id', name: 'Test User', email: 'test@example.com' }, error: null }),
        })),
      })),
    })),
  },
}));

// Mock next/router
jest.mock('next/router', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    query: {},
    asPath: '',
    pathname: '',
  }),
}));


const mockedAuthService = authService as jest.Mocked<typeof authService>;
const mockedToast = originalToast as jest.MockedFunction<typeof originalToast>; // Use the originalToast for type
const mockedSupabase = supabase as jest.Mocked<typeof supabase>;

const TestConsumer: React.FC<{loginPayload?: {email: string, pass: string}}> = ({ loginPayload }) => {
  const { login, isLoading, user } = useAuth();

  const handleLogin = async () => {
    if (loginPayload) {
      try {
        const result = await login(loginPayload.email, loginPayload.pass);
        if (result && result.error) {
          // Error already toasted by AuthProvider
        }
      } catch {
        // Error already toasted
      }
    }
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <div data-testid="isLoading">{isLoading ? 'true' : 'false'}</div>
      <div data-testid="user">{user ? user.email : 'null'}</div>
    </div>
  );
};

describe('AuthProvider Login Timeout', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    mockedToast.mockClear();
    mockedAuthService.loginUser.mockClear();
    // @ts-expect-error - Intentionally accessing mock methods for test setup
    mockedSupabase.auth.signInWithPassword.mockClear();
     // Reset onAuthStateChange mock for each test to ensure clean state
    // @ts-expect-error - Intentionally accessing mock methods for test setup
    mockedSupabase.auth.onAuthStateChange.mockImplementation(jest.fn().mockReturnValue({
        data: { subscription: { unsubscribe: jest.fn() } },
    }));
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.useRealTimers();
  });

  it('should timeout if loginUser takes too long', async () => {
    // Mock loginUser to simulate a long delay
    mockedAuthService.loginUser.mockImplementation(() => {
      return new Promise(resolve => setTimeout(() => resolve({ res: { ok: true }, data: { user: { id: '1', email: 'test@example.com' } } }), 20000)); // 20s > 15s timeout
    });

    render(
      <AuthProvider>
        <TestConsumer loginPayload={{email: 'test@example.com', pass: 'password'}} />
      </AuthProvider>
    );

    // Click login button
    act(() => {
      screen.getByText('Login').click();
    });

    // Expect isLoading to be true initially
    expect(screen.getByTestId('isLoading').textContent).toBe('true');

    // Advance timers past the 15s timeout defined in AuthProvider
    await act(async () => {
      jest.advanceTimersByTime(16000); // 16 seconds
    });

    // Wait for state updates
    await waitFor(() => {
      expect(screen.getByTestId('isLoading').textContent).toBe('false');
    });

    expect(mockedToast).toHaveBeenCalledWith({
      title: "Login Failed",
      description: "Login request timed out. Please check your connection and try again.",
      variant: "destructive",
    });
    expect(screen.getByTestId('user').textContent).toBe('null');
  });

  it('should not timeout and login successfully if loginUser resolves quickly', async () => {
    const mockUserData = { id: '123', email: 'success@example.com', name: 'Success User' };
    const mockApiResponse = { res: { status: 200 }, data: { user: mockUserData, session: { access_token: 'fake-token', refresh_token: 'fake-refresh' } } };
    mockedAuthService.loginUser.mockResolvedValue(mockApiResponse);

    // For this test, we need signInWithPassword to succeed for the Supabase path
    // @ts-expect-error - Intentionally accessing mock methods for test setup
    mockedSupabase.auth.signInWithPassword.mockResolvedValue({
      data: { user: { id: 'supabase-user-id', email: 'success@example.com' }, session: {} },
      error: null,
    });

    // Mock onAuthStateChange to simulate Supabase returning a user and profile
    // @ts-expect-error - Intentionally accessing mock methods for test setup
    mockedSupabase.auth.onAuthStateChange.mockImplementation((callback) => {
        act(() => {
            callback('SIGNED_IN', { user: { id: 'supabase-user-id', email: 'success@example.com' }, session: {} });
        });
        return { data: { subscription: { unsubscribe: jest.fn() } } };
    });
    // @ts-expect-error - Intentionally accessing mock methods for test setup
    mockedSupabase.from.mockReturnValue({
        select: jest.fn().mockReturnThis(),
        eq: jest.fn().mockReturnThis(),
        single: jest.fn().mockResolvedValue({ data: { id: 'supabase-user-id', ...mockUserData }, error: null }),
    });


    render(
      <AuthProvider>
        <TestConsumer loginPayload={{email: 'success@example.com', pass: 'password'}} />
      </AuthProvider>
    );

    await act(async () => {
      screen.getByText('Login').click();
    });

    // Advance timers by less than the timeout to ensure it's not a timeout case
    await act(async () => {
      jest.advanceTimersByTime(5000); // 5 seconds
    });

    await waitFor(() => {
      expect(screen.getByTestId('isLoading').textContent).toBe('false');
    });
    await waitFor(() => {
      expect(screen.getByTestId('user').textContent).toBe('success@example.com');
    });
    expect(mockedToast).not.toHaveBeenCalledWith(expect.objectContaining({
      description: "Login request timed out. Please check your connection and try again.",
    }));
  });

  it('should handle API errors correctly without timing out', async () => {
    const apiError = {
        isAxiosError: true,
        response: { data: { error: 'Invalid credentials' }, status: 401 },
        message: 'Request failed with status code 401'
    };
    mockedAuthService.loginUser.mockRejectedValue(apiError);

    render(
      <AuthProvider>
        <TestConsumer loginPayload={{email: 'fail@example.com', pass: 'wrongpassword'}} />
      </AuthProvider>
    );

    await act(async () => {
      screen.getByText('Login').click();
    });

    await act(async () => {
      jest.advanceTimersByTime(5000); // 5 seconds, less than timeout
    });

    await waitFor(() => {
        expect(screen.getByTestId('isLoading').textContent).toBe('false');
    });

    expect(mockedToast).toHaveBeenCalledWith({
      title: "Login Failed",
      description: "Invalid email or password.", // Specific message from error handling
      variant: "destructive",
    });
    expect(screen.getByTestId('user').textContent).toBe('null');
  });
});
