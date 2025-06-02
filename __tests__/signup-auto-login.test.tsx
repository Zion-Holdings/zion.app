import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthProvider } from '@/context/auth/AuthProvider';
import { useAuth, UserDetails, AuthResponse } from '@/hooks/useAuth'; // Import UserDetails and AuthResponse
import { vi, describe, it, expect, beforeEach } from 'vitest';
import type { AuthChangeEvent, Session, User, AuthError } from '@supabase/supabase-js'; // Supabase types

// Type for the onAuthStateChange callback
type AuthStateChangeCallback = (event: AuthChangeEvent, session: Session | null) => void;

let authCallback: AuthStateChangeCallback | undefined;

// Mock services and hooks
const mockUser: User = {
  id: '1',
  email: 'john@example.com',
  app_metadata: {},
  user_metadata: { name: 'John Doe' },
  aud: 'authenticated',
  created_at: new Date().toISOString(),
};
const mockSession: Session = {
  access_token: 'mock-access-token',
  refresh_token: 'mock-refresh-token',
  expires_in: 3600,
  token_type: 'bearer',
  user: mockUser,
};

const mockSignupResolvedValue: AuthResponse = { data: { user: mockUser, session: mockSession }, error: null };
const mockLoginResolvedValue: AuthResponse = { data: { user: mockUser, session: mockSession }, error: null };


const mockSignupImpl = vi.fn().mockResolvedValue(mockSignupResolvedValue);
const mockLoginImpl = vi.fn().mockResolvedValue(mockLoginResolvedValue);

vi.mock('@/hooks/useAuthOperations', () => ({
  useAuthOperations: () => ({
    login: mockLoginImpl,
    signup: mockSignupImpl,
    logout: vi.fn().mockResolvedValue({ error: null }),
    resetPassword: vi.fn().mockResolvedValue({ error: null }),
    updateProfile: vi.fn().mockResolvedValue({ error: null }),
    loginWithGoogle: vi.fn().mockResolvedValue(undefined),
    loginWithFacebook: vi.fn().mockResolvedValue(undefined),
    loginWithTwitter: vi.fn().mockResolvedValue(undefined),
    loginWithWeb3: vi.fn().mockResolvedValue(undefined),
  }),
}));

const mockLoginUserServiceSuccess = { 
  res: { status: 200, ok: true, json: () => Promise.resolve({ accessToken: 'token', refreshToken: 'ref' }) }, 
  data: { accessToken: 'token', refreshToken: 'ref' } 
};
const mockLoginUser = vi.fn().mockResolvedValue(mockLoginUserServiceSuccess);
vi.mock('@/services/authService', () => ({
  loginUser: mockLoginUser,
}));

vi.mock('@/integrations/supabase/client', () => ({
  supabase: {
    auth: {
      signUp: vi.fn(), // This will be called by useAuthOperations's signup
      signInWithPassword: vi.fn().mockResolvedValue({ data: { session: mockSession, user: mockUser }, error: null }),
      onAuthStateChange: (cb: AuthStateChangeCallback) => {
        authCallback = cb;
        // Simulate initial call with null session if needed, or rely on getSession
        // cb('INITIAL_SESSION', null); 
        return { data: { subscription: { unsubscribe: vi.fn() } } };
      },
      getSession: vi.fn().mockResolvedValue({ data: { session: null }, error: null }),
      // Add other auth methods if used by AuthProvider directly
      signOut: vi.fn().mockResolvedValue({ error: null }),
    },
    // Mock other Supabase client parts if necessary
    from: vi.fn().mockReturnThis(),
    select: vi.fn().mockReturnThis(),
    eq: vi.fn().mockReturnThis(),
    single: vi.fn().mockResolvedValue({ data: null, error: null }), // Default for profile fetches
  },
  // getFromProfiles can be more specific if needed
  getFromProfiles: () => ({
    select: () => ({
      eq: () => ({
        single: () => Promise.resolve({ data: null, error: null }), // Default to no profile found
      }),
    }),
  }),
}));


const TestComponent = () => {
  const { signup, isAuthenticated, user } = useAuth(); // Assuming useAuth() is correctly typed now
  const handleSignup = async () => {
    // Pass UserDetails compatible object
    const signupData: Partial<UserDetails> = { name: 'John Doe', displayName: 'John Doe' };
    await signup('john@example.com', 'password123', signupData);
  };
  return (
    <div>
      <button onClick={handleSignup}>Register</button>
      <span data-testid="auth-state">{String(isAuthenticated)}</span>
      {user && <span data-testid="user-id">{user.id}</span>}
    </div>
  );
};

describe('Signup auto login', () => {
  beforeEach(() => {
    mockSignupImpl.mockClear();
    mockLoginImpl.mockClear();
    mockLoginUser.mockClear();
    authCallback = undefined;
    // Reset getSession to default no-session state for each test
    (require('@/integrations/supabase/client').supabase.auth.getSession as jest.Mock)
      .mockResolvedValue({ data: { session: null }, error: null });
  });
  
  it('sets isAuthenticated to true after signup and onAuthStateChange callback', async () => {
    // Mock getSession to return no active session initially
    (require('@/integrations/supabase/client').supabase.auth.getSession as jest.Mock)
      .mockResolvedValueOnce({ data: { session: null }, error: null });
    
    // Mock profile fetch to return a basic profile after auth state change
    // This happens inside AuthProvider's onAuthStateChange
    global.fetch = vi.fn()
      .mockResolvedValueOnce({ // For /api/users/me call within onAuthStateChange
        ok: true,
        status: 200,
        json: () => Promise.resolve({ id: '1', email: 'john@example.com', name: 'John Doe', displayName: 'John Doe', profileComplete: true }),
      });


    render(
      <MemoryRouter>
        <AuthProvider>
          <TestComponent />
        </AuthProvider>
      </MemoryRouter>
    );

    expect(screen.getByTestId('auth-state')).toHaveTextContent('false');
    fireEvent.click(screen.getByText('Register'));

    // Wait for the signup mock (from useAuthOperations) to have been called
    await waitFor(() => {
      expect(mockSignupImpl).toHaveBeenCalledWith('john@example.com', 'password123', { name: 'John Doe', displayName: 'John Doe' });
    });
    
    // Ensure authCallback has been set by onAuthStateChange mock
    await waitFor(() => expect(authCallback).toBeDefined());

    // Simulate Supabase onAuthStateChange SIGNED_IN event
    // This will trigger the profile fetch inside AuthProvider
    if (authCallback) {
      // Act is needed here because this callback will trigger state updates
      await act(async () => {
        authCallback('SIGNED_IN', mockSession);
      });
    }
    
    // Wait for isAuthenticated and user ID to reflect the new state
    await waitFor(() => {
      expect(screen.getByTestId('auth-state')).toHaveTextContent('true');
    });
    await waitFor(() => {
      expect(screen.getByTestId('user-id')).toHaveTextContent(mockUser.id);
    });
  });
});
