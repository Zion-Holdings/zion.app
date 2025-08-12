import { render, screen, fireEvent as rtlFireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LoginForm } from '../LoginForm';
import { useAuth } from '@/context/auth/AuthProvider';
import { fireEvent as analyticsFireEvent } from '@/lib/analytics';

// Mock dependencies
jest.mock('@/context/auth/AuthProvider', () => ({
  useAuth: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // import and retain default behavior
  Link: ({ children, to }: { children: React.ReactNode; to: string }) => (
    <a href={to}>{children}</a>
  ),
}));

jest.mock('@/lib/analytics', () => ({
  fireEvent: jest.fn(),
}));

const mockLogin = jest.fn();

describe('LoginForm', () => {
  beforeEach(() => {
    // Reset mocks before each test
    jest.clearAllMocks();
    (useAuth as jest.Mock).mockReturnValue({
      login: mockLogin,
      isLoading: false,
    });
  });

  test('Email Not Confirmed Error', async () => {
    mockLogin.mockResolvedValue({ error: { message: "Email not confirmed. Please check your email." } });

    render(<LoginForm />);

    await userEvent.type(screen.getByLabelText(/email address/i), 'test@example.com');
    await userEvent.type(screen.getByLabelText(/password/i), 'password123');
    await userEvent.click(screen.getByRole('button', { name: /login/i }));

    await waitFor(() => {
      const alert = screen.getByRole('alert');
      expect(alert).toBeInTheDocument();
      expect(alert).toHaveTextContent('Your email is not confirmed. Please check your inbox for a confirmation link.');
    });
  });

  test('Generic Login Error', async () => {
    mockLogin.mockResolvedValue({ error: { message: "Invalid credentials" } });

    render(<LoginForm />);

    await userEvent.type(screen.getByLabelText(/email address/i), 'test@example.com');
    await userEvent.type(screen.getByLabelText(/password/i), 'password123');
    await userEvent.click(screen.getByRole('button', { name: /login/i }));

    await waitFor(() => {
      const alert = screen.getByRole('alert');
      expect(alert).toBeInTheDocument();
      expect(alert).toHaveTextContent('Invalid credentials');
    });
  });

  test('Login Success', async () => {
    mockLogin.mockResolvedValue({ error: null });

    render(<LoginForm />);

    await userEvent.type(screen.getByLabelText(/email address/i), 'test@example.com');
    await userEvent.type(screen.getByLabelText(/password/i), 'password123');
    await userEvent.click(screen.getByRole('button', { name: /login/i }));

    await waitFor(() => {
      expect(screen.queryByRole('alert')).not.toBeInTheDocument();
      expect(analyticsFireEvent).toHaveBeenCalledWith('login', { method: 'email' });
    });
  });
});
