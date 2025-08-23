import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import ForgotPasswordPage from '../../pages/forgot-password'; // Adjust path if needed
import { forgotPassword } from '../../src/services/auth'; // Adjust path if needed

// Mock the auth service
jest.mock('../../src/services/auth', () => ({
  forgotPassword: jest.fn(),
}));

// Mock next/link
jest.mock('next/link', () => {
  const MockLink = ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>;
  };
  MockLink.displayName = 'MockLink';
  return MockLink;
});

describe('ForgotPasswordPage', () => {
  const mockForgotPassword = forgotPassword as jest.Mock;

  beforeEach(() => {
    // Clear mock history and reset implementation before each test
    mockForgotPassword.mockClear();
    // Reset to a default resolved value, can be overridden in specific tests
    mockForgotPassword.mockResolvedValue({});
  });

  test('renders correctly with email input and submit button', () => {
    render(<ForgotPasswordPage />);
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send reset link/i })).toBeInTheDocument();
  });

  test('email input updates its value on user typing', () => {
    render(<ForgotPasswordPage />);
    const emailInput = screen.getByLabelText(/email address/i) as HTMLInputElement;
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    expect(emailInput.value).toBe('test@example.com');
  });

  test('clicking submit calls forgotPassword with the entered email and shows loading/success', async () => {
    mockForgotPassword.mockResolvedValueOnce({});
    render(<ForgotPasswordPage />);
    const emailInput = screen.getByLabelText(/email address/i);
    const submitButton = screen.getByRole('button', { name: /send reset link/i });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.click(submitButton);

    // Check for loading state (button disabled and text changes)
    expect(submitButton).toBeDisabled();
    expect(screen.getByRole('button', { name: /sending.../i})).toBeInTheDocument();

    // Wait for forgotPassword to be called
    await waitFor(() => expect(mockForgotPassword).toHaveBeenCalledWith('test@example.com'));

    // Check for success message
    await waitFor(() => {
      expect(screen.getByText(/if your email address is registered, you will receive a password reset link shortly./i)).toBeInTheDocument();
    });

    // Button should be re-enabled
    expect(submitButton).not.toBeDisabled();
    expect(screen.getByRole('button', { name: /send reset link/i })).toBeInTheDocument();

  });

  test('displays an error message when forgotPassword rejects', async () => {
    const errorMessage = 'Network Error. Please try again.';
    mockForgotPassword.mockRejectedValueOnce(new Error(errorMessage));
    render(<ForgotPasswordPage />);
    const emailInput = screen.getByLabelText(/email address/i);
    const submitButton = screen.getByRole('button', { name: /send reset link/i });

    fireEvent.change(emailInput, { target: { value: 'error@example.com' } });
    fireEvent.click(submitButton);

    // Check for loading state
    expect(submitButton).toBeDisabled();
    expect(screen.getByRole('button', { name: /sending.../i})).toBeInTheDocument();

    // Wait for forgotPassword to be called
    await waitFor(() => expect(mockForgotPassword).toHaveBeenCalledWith('error@example.com'));

    // Check for error message
    await waitFor(() => {
      expect(screen.getByText(errorMessage)).toBeInTheDocument();
    });

    // Button should be re-enabled
    expect(submitButton).not.toBeDisabled();
    expect(screen.getByRole('button', { name: /send reset link/i })).toBeInTheDocument();
  });

  test('displays a generic error message when forgotPassword rejects without a message', async () => {
    mockForgotPassword.mockRejectedValueOnce(new Error()); // Error without a message
    render(<ForgotPasswordPage />);
    const emailInput = screen.getByLabelText(/email address/i);
    const submitButton = screen.getByRole('button', { name: /send reset link/i });

    fireEvent.change(emailInput, { target: { value: 'genericerror@example.com' } });
    fireEvent.click(submitButton);

    await waitFor(() => expect(mockForgotPassword).toHaveBeenCalledWith('genericerror@example.com'));

    await waitFor(() => {
      expect(screen.getByText(/failed to send reset link. please try again./i)).toBeInTheDocument();
    });
  });

  test('Link to the login page points to /auth/login', () => {
    render(<ForgotPasswordPage />);
    const loginLink = screen.getByText(/login/i); // Assuming the link text is "Login"
    expect(loginLink).toBeInTheDocument();
    expect(loginLink.closest('a')).toHaveAttribute('href', '/auth/login');
  });
});
