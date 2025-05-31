import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import ResetPasswordPage from '../ResetPassword'; // Adjust path as necessary
import * as authService from '@/services/auth'; // To mock resetPassword
import { toast } from '@/hooks/use-toast';

// Mock react-router-dom hooks
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
  useParams: () => ({ token: 'test-token' }), // Default mock for useParams
}));

// Mock the toast hook
jest.mock('@/hooks/use-toast', () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
  },
}));

// Mock the auth service
jest.mock('@/services/auth', () => ({
  resetPassword: jest.fn(),
}));

const TestWrapper = ({ children, initialRoute = '/reset-password/test-token' }) => (
  <MemoryRouter initialEntries={[initialRoute]}>
    <Routes>
      <Route path="/reset-password/:token" element={children} />
      <Route path="/login" element={<div>Login Page</div>} />
    </Routes>
  </MemoryRouter>
);

describe('ResetPasswordPage', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
    // Provide a default successful mock for resetPassword
    authService.resetPassword.mockResolvedValue({});
  });

  it('renders the reset password form', () => {
    render(<TestWrapper><ResetPasswordPage /></TestWrapper>);
    expect(screen.getByText(/Reset Your Password/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Enter new password/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Confirm new password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Reset Password/i })).toBeInTheDocument();
  });

  it('shows error if passwords do not match', async () => {
    render(<TestWrapper><ResetPasswordPage /></TestWrapper>);
    fireEvent.change(screen.getByPlaceholderText(/Enter new password/i), { target: { value: 'password123' } });
    fireEvent.change(screen.getByPlaceholderText(/Confirm new password/i), { target: { value: 'password456' } });
    fireEvent.click(screen.getByRole('button', { name: /Reset Password/i }));

    expect(await screen.findByText(/Passwords do not match/i)).toBeInTheDocument();
    expect(authService.resetPassword).not.toHaveBeenCalled();
    expect(toast.error).toHaveBeenCalledWith('Passwords do not match.');
  });

  it('shows error if password is less than 8 characters', async () => {
    render(<TestWrapper><ResetPasswordPage /></TestWrapper>);
    fireEvent.change(screen.getByPlaceholderText(/Enter new password/i), { target: { value: 'pass' } });
    fireEvent.change(screen.getByPlaceholderText(/Confirm new password/i), { target: { value: 'pass' } });
    fireEvent.click(screen.getByRole('button', { name: /Reset Password/i }));

    expect(await screen.findByText(/Password must be at least 8 characters long/i)).toBeInTheDocument();
    expect(authService.resetPassword).not.toHaveBeenCalled();
    expect(toast.error).toHaveBeenCalledWith('Password must be at least 8 characters long.');
  });

  it('calls resetPassword service and navigates on successful submission', async () => {
    render(<TestWrapper><ResetPasswordPage /></TestWrapper>);
    fireEvent.change(screen.getByPlaceholderText(/Enter new password/i), { target: { value: 'newpassword123' } });
    fireEvent.change(screen.getByPlaceholderText(/Confirm new password/i), { target: { value: 'newpassword123' } });
    fireEvent.click(screen.getByRole('button', { name: /Reset Password/i }));

    await waitFor(() => expect(authService.resetPassword).toHaveBeenCalledWith('test-token', 'newpassword123'));
    expect(toast.success).toHaveBeenCalledWith('Password has been reset successfully!');
    expect(mockNavigate).toHaveBeenCalledWith('/login');
  });

  it('shows error message if resetPassword service fails', async () => {
    authService.resetPassword.mockRejectedValueOnce(new Error('Invalid token'));
    render(<TestWrapper><ResetPasswordPage /></TestWrapper>);

    fireEvent.change(screen.getByPlaceholderText(/Enter new password/i), { target: { value: 'newpassword123' } });
    fireEvent.change(screen.getByPlaceholderText(/Confirm new password/i), { target: { value: 'newpassword123' } });
    fireEvent.click(screen.getByRole('button', { name: /Reset Password/i }));

    await waitFor(() => expect(authService.resetPassword).toHaveBeenCalledWith('test-token', 'newpassword123'));
    expect(await screen.findByText(/Invalid token/i)).toBeInTheDocument();
    expect(toast.error).toHaveBeenCalledWith('Invalid token');
    expect(mockNavigate).not.toHaveBeenCalled();
  });

  it('displays error if token is missing (simulated by different route)', () => {
    // Override useParams mock for this specific test
    jest.spyOn(require('react-router-dom'), 'useParams').mockReturnValueOnce({});
    render(
      <MemoryRouter initialEntries={['/reset-password/']}>
        <Routes>
          <Route path="/reset-password/" element={<ResetPasswordPage />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText(/Invalid or missing reset token./i)).toBeInTheDocument();
  });
});
