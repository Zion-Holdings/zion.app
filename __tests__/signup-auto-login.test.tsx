import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthProvider } from '@/context/auth/AuthProvider';
import { useAuth } from '@/hooks/useAuth';
import { vi } from 'vitest';

// Capture onAuthStateChange callback
let authCallback: any;

// Mock services and hooks
const mockSignupImpl = vi.fn().mockResolvedValue({ data: { user: { id: '1', email: 'john@example.com' } }, error: null });
const mockLoginImpl = vi.fn().mockResolvedValue({ data: {}, error: null });
vi.mock('@/hooks/useAuthOperations', () => ({
  useAuthOperations: () => ({
    login: mockLoginImpl,
    signup: mockSignupImpl,
    logout: vi.fn(),
    resetPassword: vi.fn(),
    updateProfile: vi.fn(),
    loginWithGoogle: vi.fn(),
    loginWithFacebook: vi.fn(),
    loginWithTwitter: vi.fn(),
    loginWithWeb3: vi.fn(),
  }),
}));

const mockLoginUser = vi.fn().mockResolvedValue({ res: { status: 200 }, data: { accessToken: 'token', refreshToken: 'ref' } });
vi.mock('@/services/authService', () => ({
  loginUser: mockLoginUser,
}));

vi.mock('@/integrations/supabase/client', () => ({
  supabase: {
    auth: {
      signUp: vi.fn(),
      signInWithPassword: vi.fn().mockResolvedValue({ data: {}, error: null }),
      onAuthStateChange: (cb: any) => {
        authCallback = cb;
        return { data: { subscription: { unsubscribe: vi.fn() } } };
      },
      getSession: vi.fn().mockResolvedValue({ data: { session: null }, error: null }),
    },
  },
  from: () => ({
    select: () => ({
      eq: () => ({
        single: () => Promise.resolve({ data: null, error: null }),
      }),
    }),
  }),
}));

const TestComponent = () => {
  const { signup, isAuthenticated } = useAuth();
  return (
    <div>
      <button onClick={() => signup('john@example.com', 'pass', { name: 'John Doe' })}>Register</button>
      <span data-testid="auth-state">{String(isAuthenticated)}</span>
    </div>
  );
};

describe('Signup auto login', () => {
  it('sets isAuthenticated to true after signup', async () => {
    render(
      <MemoryRouter>
        <AuthProvider>
          <TestComponent />
        </AuthProvider>
      </MemoryRouter>
    );

    expect(screen.getByTestId('auth-state')).toHaveTextContent('false');
    fireEvent.click(screen.getByText('Register'));

    await waitFor(() => {
      expect(mockSignupImpl).toHaveBeenCalled();
    });

    // simulate auth state change from supabase after login
    authCallback('SIGNED_IN', { user: { id: '1', email: 'john@example.com' } });

    await waitFor(() => {
      expect(screen.getByTestId('auth-state')).toHaveTextContent('true');
    });
  });
});
