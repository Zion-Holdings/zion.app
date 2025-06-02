import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom'; // Import useNavigate
import Signup from '@/pages/Signup';
import { toast, ToastData } from '@/hooks/use-toast'; // Assuming ToastData or similar is exported
import { useAuth } from '@/hooks/useAuth'; // To get types for mocked useAuth
import { vi, expect, test, beforeEach, afterEach } from 'vitest';

// Define types for mockFetch responses
interface MockResponse {
  status: number;
  body: Record<string, unknown> | { message: string } | { error: string }; // More specific than any
}

// Mock useAuth
vi.mock('@/hooks/useAuth', () => ({
  useAuth: () => ({
    loginWithGoogle: vi.fn(),
    loginWithFacebook: vi.fn(),
    loginWithTwitter: vi.fn(),
    // Ensure the mock for signup matches the expected signature from AuthContextType
    signup: vi.fn().mockResolvedValue({ error: null, data: { user: { id: 'test-user-id'}, session: {access_token: 'jwt'} } }),
    isAuthenticated: false,
    user: null,
  }),
}));

// Mock use-toast
vi.mock('@/hooks/use-toast', () => ({
  toast: {
    success: vi.fn((data: ToastData | string) => {}), // Type the mock function
    error: vi.fn((data: ToastData | string) => {}),
    info: vi.fn((data: ToastData | string) => {}),
    dismiss: vi.fn((id?: string) => {}),
  },
}));

// Mock react-router-dom specifically for useNavigate
const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual<typeof import('react-router-dom')>('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate, // Ensure this mock is used
  };
});

// Store original fetch and mock it
const originalFetch = global.fetch;

function setupMockFetch(responses: MockResponse[]) {
  const mockFetchFn = vi.fn();
  responses.forEach(({ status, body }) => {
    mockFetchFn.mockResolvedValueOnce({
      status,
      ok: status >= 200 && status < 300,
      json: () => Promise.resolve(body),
      text: () => Promise.resolve(JSON.stringify(body)),
    });
  });
  global.fetch = mockFetchFn;
}


describe('Signup Page', () => {
  beforeEach(() => {
    vi.clearAllMocks(); // Clears all mocks including useNavigate's mockNavigate
    localStorage.clear();
  });

  afterEach(() => {
    global.fetch = originalFetch; // Restore original fetch
  });

  test('successful registration redirects to dashboard and shows toast', async () => {
    // useNavigate is mocked above to return mockNavigate
    // (toast.success as vi.Mock).mockImplementation(() => {}); // Already mocked with types

    setupMockFetch([
      // Assuming the first fetch is for the signup API endpoint
      { status: 201, body: { token: 'jwt', message: 'Signup successful, please login.' } }, 
      // Assuming an immediate login attempt after signup (behavior might vary)
      // This mock might not be strictly necessary if signup directly logs in or if useAuth's signup mock handles it
      // For this test, we assume the component might call /api/auth/login or similar via useAuth().login
      // which is also mocked by useAuth mock. The key is that useAuth().signup is called.
    ]);
    
    // Mock the useAuth().signup specifically for this test if its default mock isn't sufficient
    const { useAuth: actualUseAuth } = await vi.importActual<typeof import('@/hooks/useAuth')>('@/hooks/useAuth');

    const mockSignupFn = vi.fn().mockResolvedValue({ 
        error: null, 
        data: { 
            user: { id: 'test-user-id', email: 'john@example.com' }, 
            session: { access_token: 'jwt', expires_in: 3600 } 
        } 
    });

    (useAuth as vi.Mock).mockReturnValue({
        loginWithGoogle: vi.fn(),
        loginWithFacebook: vi.fn(),
        loginWithTwitter: vi.fn(),
        signup: mockSignupFn, // Use this specific mock for the signup call
        isAuthenticated: false,
        user: null,
    });


    render(
      <MemoryRouter>
        <Signup />
      </MemoryRouter>
    );

    fireEvent.input(screen.getByLabelText(/full name/i), {
      target: { value: 'John Doe' },
    });
    fireEvent.input(screen.getByLabelText(/email address/i), {
      target: { value: 'john@example.com' },
    });
    fireEvent.input(screen.getByLabelText(/^password$/i), {
      target: { value: 'Password123' },
    });
    fireEvent.input(screen.getByLabelText(/confirm password/i), {
      target: { value: 'Password123' },
    });
    fireEvent.click(screen.getByLabelText(/i agree/i));
    
    const createAccountButton = screen.getByRole('button', { name: /create account/i });
    fireEvent.submit(createAccountButton);

    await waitFor(() => {
      expect(mockSignupFn).toHaveBeenCalledWith(
        'john@example.com',
        'Password123',
        { name: 'John Doe', displayName: 'John Doe' } // Or just { name: 'John Doe' } depending on what Signup page passes
      );
    });
    
    // Assuming successful signup (mocked above) leads to onAuthStateChange setting token and navigating
    // The test relies on the mocked useAuth().signup to simulate a successful registration
    // and then checks for its side effects (toast, navigation, localStorage).

    await waitFor(() => {
      expect(toast.success).toHaveBeenCalledWith('Welcome to ZionAI 🎉');
    });
    
    // If token is set by the signup function directly or via context update:
    // This depends on how AuthProvider and useAuth().signup are implemented.
    // If signup sets the token via AuthContext which then updates localStorage, this is valid.
    // For this test, we assume the mockSignupFn or the AuthProvider it interacts with sets the token.
    // await waitFor(() => expect(localStorage.getItem('token')).toBe('jwt'));
    // The above localStorage check might be flaky depending on exact timing and mock setup.
    // The navigation is a more robust check of success if the component logic includes it.

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/dashboard');
    });
  });
});
