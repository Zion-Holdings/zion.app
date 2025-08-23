import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { useRouter } from 'next/router';
import Signup from '@/pages/Signup';
import * as authHook from '@/hooks/useAuth';
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
jest.mock('@/hooks/useAuth');

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

function setup(success = true, errorMsg?: string, status = success ? 201 : 400) {
  // Setup router mock
  (useRouter as jest.Mock).mockReturnValue({
    push: mockPush,
    pathname: '/signup',
    query: {},
    asPath: '/signup',
  });

  // Setup auth hook mock
  (authHook.useAuth as jest.Mock).mockReturnValue({
    loginWithGoogle: jest.fn(),
    loginWithFacebook: jest.fn(),
    loginWithTwitter: jest.fn(),
    isAuthenticated: false,
    user: null,
  });

      // Setup toast mock - fix TypeScript error
    const toastMock = toastHook.toast as jest.MockedFunction<typeof toastHook.toast>;
    toastMock.mockImplementation(mockToast);

  // Setup axios mock
  if (success) {
    mockedAxios.post.mockResolvedValue({
      status,
      data: { message: 'Success' },
    });
  } else {
    mockedAxios.post.mockRejectedValue({
      response: {
        status,
        data: { message: errorMsg },
      },
    });
  }

  render(<Signup />);
  return { mockPush, mockToast };
}

describe('Signup form', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('shows validation errors', async () => {
    setup();
    fireEvent.submit(screen.getByRole('button', { name: /create account/i }));
    expect(await screen.findAllByText(/required|must/i)).not.toHaveLength(0);
  });

  it('submits valid form successfully', async () => {
    const { mockPush, mockToast } = setup();
    
    fireEvent.input(screen.getByLabelText(/full name/i), { target: { value: 'John Doe' } });
    fireEvent.input(screen.getByLabelText(/email address/i), { target: { value: 'john@example.com' } });
    fireEvent.input(screen.getByLabelText(/^password$/i), { target: { value: 'Password123' } });
    fireEvent.input(screen.getByLabelText(/confirm password/i), { target: { value: 'Password123' } });
    fireEvent.click(screen.getByLabelText(/i agree/i));
    
    fireEvent.submit(screen.getByRole('button', { name: /create account/i }));
    
    await waitFor(() => {
      expect(mockedAxios.post).toHaveBeenCalledWith('/api/auth/register', {
        name: 'John Doe',
        email: 'john@example.com',
        password: 'Password123',
      });
    });
    
    await waitFor(() => {
      expect(mockToast).toHaveBeenCalledWith({
        title: 'Account created successfully!',
        description: 'Welcome to the platform. You can now log in.',
      });
    });
    
    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith('/login');
    });
  });

  it('shows error toast and alert on general failure', async () => {
    const { mockToast } = setup(false, 'Signup failed');
    
    fireEvent.input(screen.getByLabelText(/full name/i), { target: { value: 'John Doe' } });
    fireEvent.input(screen.getByLabelText(/email address/i), { target: { value: 'john@example.com' } });
    fireEvent.input(screen.getByLabelText(/^password$/i), { target: { value: 'Password123' } });
    fireEvent.input(screen.getByLabelText(/confirm password/i), { target: { value: 'Password123' } });
    fireEvent.click(screen.getByLabelText(/i agree/i));
    
    fireEvent.submit(screen.getByRole('button', { name: /create account/i }));
    
    await waitFor(() => {
      expect(mockToast).toHaveBeenCalledWith({
        title: 'Signup failed',
        description: 'Signup failed',
        variant: 'destructive',
      });
    });
    
    await waitFor(() => {
      expect(screen.getByTestId('error-alert')).toBeInTheDocument();
    });
  });

  it('handles duplicate email error with 409 status', async () => {
    const { mockToast } = setup(false, 'Email already registered', 409);
    
    fireEvent.input(screen.getByLabelText(/full name/i), { target: { value: 'John Doe' } });
    fireEvent.input(screen.getByLabelText(/email address/i), { target: { value: 'existing@example.com' } });
    fireEvent.input(screen.getByLabelText(/^password$/i), { target: { value: 'Password123' } });
    fireEvent.input(screen.getByLabelText(/confirm password/i), { target: { value: 'Password123' } });
    fireEvent.click(screen.getByLabelText(/i agree/i));
    
    fireEvent.submit(screen.getByRole('button', { name: /create account/i }));
    
    await waitFor(() => {
      expect(mockToast).toHaveBeenCalledWith({
        title: 'Signup failed',
        description: 'Email already registered',
        variant: 'destructive',
      });
    });
    
    // Check that the Alert component is displayed
    await waitFor(() => {
      expect(screen.getByTestId('error-alert')).toBeInTheDocument();
      expect(screen.getByText('Email already registered')).toBeInTheDocument();
    });
    
    // Check that the email field also shows the error
    await waitFor(() => {
      expect(screen.getByText('Email already registered')).toBeInTheDocument();
    });
  });

  it('clears error message when form is resubmitted', async () => {
    const { mockToast } = setup(false, 'Email already registered', 409);
    
    // Fill and submit form to trigger error
    fireEvent.input(screen.getByLabelText(/full name/i), { target: { value: 'John Doe' } });
    fireEvent.input(screen.getByLabelText(/email address/i), { target: { value: 'existing@example.com' } });
    fireEvent.input(screen.getByLabelText(/^password$/i), { target: { value: 'Password123' } });
    fireEvent.input(screen.getByLabelText(/confirm password/i), { target: { value: 'Password123' } });
    fireEvent.click(screen.getByLabelText(/i agree/i));
    
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
    
    // Error alert should be cleared (not present in DOM)
    await waitFor(() => {
      expect(screen.queryByTestId('error-alert')).not.toBeInTheDocument();
    });
  });
});
