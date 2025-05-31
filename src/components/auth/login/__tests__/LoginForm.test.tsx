import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';

import { LoginForm } from '../LoginForm';
import { AuthProvider } from '@/context/auth/AuthProvider'; // Assuming AuthProvider wraps useAuth
import { safeStorage, safeSessionStorage } from '@/utils/safeStorage'; // Mocked in setupTests
import { toast } from '@/hooks/use-toast'; // Also potentially mocked or spied

// Mock useAuth hook
const mockLogin = vi.fn();
const mockUseAuth = vi.fn(() => ({
  isLoading: false,
  login: mockLogin,
  // Add other properties/functions returned by useAuth if LoginForm uses them
}));
vi.mock('@/hooks/useAuth', () => ({
  useAuth: () => mockUseAuth(),
}));

// Mock toast if not already fully mocked in setupTests, or if specific assertions on it are needed
vi.mock('@/hooks/use-toast', async (importOriginal) => {
  const actual = await importOriginal() as any;
  return {
    ...actual,
    toast: vi.fn(),
  };
});


describe('LoginForm', () => {
  beforeEach(() => {
    vi.clearAllMocks(); // Clear mocks before each test
    mockLogin.mockResolvedValue({ error: null }); // Default successful login
  });

  const renderComponent = () => {
    render(
      <MemoryRouter>
        <AuthProvider> {/* Ensure LoginForm is within AuthProvider if useAuth relies on it */}
          <LoginForm />
        </AuthProvider>
      </MemoryRouter>
    );
  };

  it('renders email and password fields', () => {
    renderComponent();
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/remember me/i)).toBeInTheDocument();
  });

  it('calls login with email, password, and rememberMe=true when submitted and checkbox is checked', async () => {
    renderComponent();

    fireEvent.input(screen.getByLabelText(/email address/i), { target: { value: 'test@example.com' } });
    fireEvent.input(screen.getByLabelText(/password/i), { target: { value: 'password123' } });
    fireEvent.click(screen.getByLabelText(/remember me/i)); // Check the checkbox
    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    await waitFor(() => {
      expect(mockLogin).toHaveBeenCalledWith('test@example.com', 'password123', true);
    });
  });

  it('calls login with rememberMe=false when checkbox is not checked', async () => {
    renderComponent();

    fireEvent.input(screen.getByLabelText(/email address/i), { target: { value: 'test@example.com' } });
    fireEvent.input(screen.getByLabelText(/password/i), { target: { value: 'password123' } });
    // "Remember me" is false by default
    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    await waitFor(() => {
      expect(mockLogin).toHaveBeenCalledWith('test@example.com', 'password123', false);
    });
  });

  it('displays an error message from useAuth if login fails', async () => {
    mockLogin.mockResolvedValueOnce({ error: { message: 'Auth hook error' } });
    renderComponent();

    fireEvent.input(screen.getByLabelText(/email address/i), { target: { value: 'test@example.com' } });
    fireEvent.input(screen.getByLabelText(/password/i), { target: { value: 'password123' } });
    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    await waitFor(() => {
      expect(screen.getByText('Auth hook error')).toBeInTheDocument();
    });
    expect(safeStorage.setItem).not.toHaveBeenCalled();
    expect(safeSessionStorage.setItem).not.toHaveBeenCalled();
  });

  it('shows validation errors for empty fields', async () => {
    renderComponent();
    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    expect(await screen.findByText(/email is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/password must be at least 6 characters/i)).toBeInTheDocument();
    expect(mockLogin).not.toHaveBeenCalled();
  });

  it('shows validation error for invalid email format', async () => {
    renderComponent();
    fireEvent.input(screen.getByLabelText(/email address/i), { target: { value: 'invalidemail' } });
    fireEvent.input(screen.getByLabelText(/password/i), { target: { value: 'password123' } });
    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    expect(await screen.findByText(/please enter a valid email/i)).toBeInTheDocument();
    expect(mockLogin).not.toHaveBeenCalled();
  });

  it('shows validation error for short password', async () => {
    renderComponent();
    fireEvent.input(screen.getByLabelText(/email address/i), { target: { value: 'test@example.com' } });
    fireEvent.input(screen.getByLabelText(/password/i), { target: { value: '123' } });
    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    expect(await screen.findByText(/password must be at least 6 characters/i)).toBeInTheDocument();
    expect(mockLogin).not.toHaveBeenCalled();
  });
});
