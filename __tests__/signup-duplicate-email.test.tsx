import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { useRouter } from 'next/router';
import Signup from '@/pages/Signup';
import * as toastHook from '@/hooks/use-toast';
import axios from 'axios';

// Mock Next.js router
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

// Mock axios
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

// Mock toast hook
jest.mock('@/hooks/use-toast', () => ({
  toast: jest.fn(),
}));

// Mock auth hook
jest.mock('@/hooks/useAuth', () => ({
  useAuth: () => ({
    loginWithGoogle: jest.fn(),
    loginWithFacebook: jest.fn(),
    loginWithTwitter: jest.fn(),
    isAuthenticated: false,
    user: null,
  }),
}));

// Mock Next.js Head
jest.mock('next/head', () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

// Mock AuthLayout
jest.mock('@/layout', () => ({
  AuthLayout: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

const mockPush = jest.fn();
const mockToast = jest.fn();

describe('Signup - Duplicate Email Error Handling', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    
    // Setup router mock
    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
      pathname: '/signup',
      query: {},
      asPath: '/signup',
    });

    // Setup toast mock - fix TypeScript error
    const toastMock = toastHook.toast as jest.MockedFunction<typeof toastHook.toast>;
    toastMock.mockImplementation(mockToast);
  });

  const fillSignupForm = (email = 'test@example.com') => {
    fireEvent.input(screen.getByLabelText(/full name/i), { target: { value: 'John Doe' } });
    fireEvent.input(screen.getByLabelText(/email address/i), { target: { value: email } });
    fireEvent.input(screen.getByLabelText(/^password$/i), { target: { value: 'Password123' } });
    fireEvent.input(screen.getByLabelText(/confirm password/i), { target: { value: 'Password123' } });
    fireEvent.click(screen.getByLabelText(/i agree/i));
  };

  it('should show error toast when email already exists', async () => {
    // Mock 409 duplicate email error
    mockedAxios.post.mockRejectedValue({
      response: {
        status: 409,
        data: { message: 'Email already registered' },
      },
    });

    render(<Signup />);
    fillSignupForm('existing@example.com');
    fireEvent.submit(screen.getByRole('button', { name: /create account/i }));

    // Verify API call was made
    await waitFor(() => {
      expect(mockedAxios.post).toHaveBeenCalledWith('/api/auth/register', {
        name: 'John Doe',
        email: 'existing@example.com',
        password: 'Password123',
      });
    });

    // Verify toast notification was shown
    await waitFor(() => {
      expect(mockToast).toHaveBeenCalledWith({
        title: 'Signup failed',
        description: 'Email already registered',
        variant: 'destructive',
      });
    });
  });

  it('should show Alert component with error message for duplicate email', async () => {
    // Mock 409 duplicate email error
    mockedAxios.post.mockRejectedValue({
      response: {
        status: 409,
        data: { message: 'Email already registered' },
      },
    });

    render(<Signup />);
    fillSignupForm('existing@example.com');
    fireEvent.submit(screen.getByRole('button', { name: /create account/i }));

    // Verify Alert component is displayed
    await waitFor(() => {
      expect(screen.getByTestId('error-alert')).toBeInTheDocument();
    });

    // Verify error message is displayed in Alert
    await waitFor(() => {
      expect(screen.getByText('Email already registered')).toBeInTheDocument();
    });
  });

  it('should show error on email field for duplicate email', async () => {
    // Mock 409 duplicate email error
    mockedAxios.post.mockRejectedValue({
      response: {
        status: 409,
        data: { message: 'Email already registered' },
      },
    });

    render(<Signup />);
    fillSignupForm('existing@example.com');
    fireEvent.submit(screen.getByRole('button', { name: /create account/i }));

    // Verify field-level error is shown
    await waitFor(() => {
      const errorElements = screen.getAllByText('Email already registered');
      expect(errorElements.length).toBeGreaterThan(0);
    });
  });

  it('should clear error when user tries again with different email', async () => {
    // Mock 409 duplicate email error first
    mockedAxios.post.mockRejectedValue({
      response: {
        status: 409,
        data: { message: 'Email already registered' },
      },
    });

    render(<Signup />);
    fillSignupForm('existing@example.com');
    fireEvent.submit(screen.getByRole('button', { name: /create account/i }));

    // Wait for error to appear
    await waitFor(() => {
      expect(screen.getByTestId('error-alert')).toBeInTheDocument();
    });

    // Mock successful response for retry
    mockedAxios.post.mockResolvedValue({
      status: 201,
      data: { message: 'Success' },
    });

    // Change email and resubmit
    fireEvent.input(screen.getByLabelText(/email address/i), { target: { value: 'new@example.com' } });
    fireEvent.submit(screen.getByRole('button', { name: /create account/i }));

    // Verify error alert is cleared
    await waitFor(() => {
      expect(screen.queryByTestId('error-alert')).not.toBeInTheDocument();
    });

    // Verify success toast is shown
    await waitFor(() => {
      expect(mockToast).toHaveBeenCalledWith({
        title: 'Account created successfully!',
        description: 'Welcome to the platform. You can now log in.',
      });
    });
  });

  it('should handle 409 error with different error message format', async () => {
    // Mock 409 error with different message
    mockedAxios.post.mockRejectedValue({
      response: {
        status: 409,
        data: { message: 'User with this email already exists' },
      },
    });

    render(<Signup />);
    fillSignupForm('existing@example.com');
    fireEvent.submit(screen.getByRole('button', { name: /create account/i }));

    // Should still show the standardized message
    await waitFor(() => {
      expect(mockToast).toHaveBeenCalledWith({
        title: 'Signup failed',
        description: 'Email already registered',
        variant: 'destructive',
      });
    });

    await waitFor(() => {
      expect(screen.getByText('Email already registered')).toBeInTheDocument();
    });
  });

  it('should not redirect to login page when duplicate email error occurs', async () => {
    // Mock 409 duplicate email error
    mockedAxios.post.mockRejectedValue({
      response: {
        status: 409,
        data: { message: 'Email already registered' },
      },
    });

    render(<Signup />);
    fillSignupForm('existing@example.com');
    fireEvent.submit(screen.getByRole('button', { name: /create account/i }));

    // Wait for error handling
    await waitFor(() => {
      expect(screen.getByTestId('error-alert')).toBeInTheDocument();
    });

    // Verify router.push was NOT called
    expect(mockPush).not.toHaveBeenCalled();
  });

  it('should handle server error without error message', async () => {
    // Mock 409 error without message
    mockedAxios.post.mockRejectedValue({
      response: {
        status: 409,
        data: {},
      },
    });

    render(<Signup />);
    fillSignupForm('existing@example.com');
    fireEvent.submit(screen.getByRole('button', { name: /create account/i }));

    // Should still show the standardized duplicate email message
    await waitFor(() => {
      expect(mockToast).toHaveBeenCalledWith({
        title: 'Signup failed',
        description: 'Email already registered',
        variant: 'destructive',
      });
    });
  });
}); 