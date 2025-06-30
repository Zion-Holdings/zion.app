import React from 'react';
import { render, act, screen, waitFor } from '@testing-library/react';
import { AuthProvider, useAuth } from '@/context/auth/AuthProvider';
import * as authService from '@/services/authService';
import { toast as originalToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { vi, describe, test, expect, beforeEach, afterEach, type Mocked, type MockInstance } from 'vitest';
import * as nextRouter from 'next/router';


// Mock services and hooks
vi.mock('@/services/authService');
vi.mock('@/hooks/use-toast', () => ({
  toast: vi.fn(),
}));
vi.mock('@/integrations/supabase/client', () => ({
  supabase: {
    auth: {
      onAuthStateChange: vi.fn().mockReturnValue({
        data: { subscription: { unsubscribe: vi.fn() } },
      }),
      signInWithPassword: vi.fn(),
      setSession: vi.fn(),
    },
    from: vi.fn(() => ({
      select: vi.fn(() => ({
        eq: vi.fn(() => ({
          single: vi.fn().mockResolvedValue({ data: { id: 'user-id', name: 'Test User', email: 'test@example.com' }, error: null }),
        })),
      })),
    })),
  },
}));

vi.mock('next/router', () => ({
  useRouter: vi.fn(),
}));


const mockedAuthService = authService as Mocked<typeof authService>;
const mockedToast = originalToast as MockInstance<any,any>;
const mockedSupabase = supabase as Mocked<typeof supabase>;

const TestConsumer: React.FC<{loginPayload?: {email: string, pass: string}}> = ({ loginPayload }) => {
  const { login, isLoading, user } = useAuth();

  const handleLogin = async () => {
    if (loginPayload) {
      try {
        const result = await login(loginPayload.email, loginPayload.pass);
        // Error handling is done within AuthProvider and toasts are called there
      } catch (error) {
        // Errors are handled by AuthProvider
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
    vi.useFakeTimers();
    mockedToast.mockClear();
    mockedAuthService.loginUser.mockClear();
    (mockedSupabase.auth.signInWithPassword as MockInstance<any,any>).mockClear();
    (mockedSupabase.auth.onAuthStateChange as MockInstance<any,any>).mockImplementation(vi.fn().mockReturnValue({
        data: { subscription: { unsubscribe: vi.fn() } },
    }));
    (nextRouter.useRouter as MockInstance<any,any>).mockReturnValue({ // Ensure router mock is reset/set
        push: vi.fn(),
        replace: vi.fn(),
        query: {},
        asPath: '',
        pathname: '',
    });
  });

  afterEach(() => {
    vi.clearAllTimers();
    vi.useRealTimers();
  });

  it('should timeout if loginUser takes too long', async () => {
    mockedAuthService.loginUser.mockImplementation(() => {
      return new Promise(resolve => setTimeout(() => resolve({ res: { ok: true }, data: { user: { id: '1', email: 'test@example.com' } } } as any), 20000));
    });

    render(
      <AuthProvider>
        <TestConsumer loginPayload={{email: 'test@example.com', pass: 'password'}} />
      </AuthProvider>
    );

    act(() => {
      screen.getByText('Login').click();
    });

    expect(screen.getByTestId('isLoading').textContent).toBe('true');

    await act(async () => {
      vi.advanceTimersByTime(16000);
    });

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
    mockedAuthService.loginUser.mockResolvedValue(mockApiResponse as any);

    (mockedSupabase.auth.signInWithPassword as MockInstance<any,any>).mockResolvedValue({
      data: { user: { id: 'supabase-user-id', email: 'success@example.com' } as any, session: {} as any },
      error: null,
    });

    (mockedSupabase.auth.onAuthStateChange as MockInstance<any,any>).mockImplementation((callback:any) => {
        act(() => {
            callback('SIGNED_IN', { user: { id: 'supabase-user-id', email: 'success@example.com' }, session: {} });
        });
        return { data: { subscription: { unsubscribe: vi.fn() } } };
    });
    (mockedSupabase.from as MockInstance<any,any>).mockReturnValue({
        select: vi.fn().mockReturnThis(),
        eq: vi.fn().mockReturnThis(),
        single: vi.fn().mockResolvedValue({ data: { id: 'supabase-user-id', ...mockUserData }, error: null }),
    } as any);


    render(
      <AuthProvider>
        <TestConsumer loginPayload={{email: 'success@example.com', pass: 'password'}} />
      </AuthProvider>
    );

    await act(async () => {
      screen.getByText('Login').click();
    });

    await act(async () => {
      vi.advanceTimersByTime(5000);
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
      vi.advanceTimersByTime(5000);
    });

    await waitFor(() => {
        expect(screen.getByTestId('isLoading').textContent).toBe('false');
    });

    expect(mockedToast).toHaveBeenCalledWith({
      title: "Login Failed",
      description: "Invalid email or password.",
      variant: "destructive",
    });
    expect(screen.getByTestId('user').textContent).toBe('null');
  });
});
