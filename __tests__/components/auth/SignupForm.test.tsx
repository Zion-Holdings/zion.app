import React from 'react';
import { renderWithProviders, screen, fireEvent, waitFor } from '__tests__/test-utils.tsx';
import { useRouter } from 'next/router';
import axios from 'axios';
import { toast } from '@/hooks/use-toast';
import SignupForm from '@/components/auth/SignupForm';
import { signIn } from 'next-auth/react';

// Mock dependencies
jest.mock('next/router');
jest.mock('axios');
jest.mock('@/hooks/use-toast');
jest.mock('next-auth/react', () => ({
  signIn: jest.fn(),
}));

const mockPush = jest.fn();
const mockToastError = jest.fn();
const mockToastSuccess = jest.fn();

beforeEach(() => {
  (useRouter as jest.Mock).mockReturnValue({
    push: mockPush,
  });
  (toast as any).error = mockToastError;
  (toast as any).success = mockToastSuccess;
  jest.clearAllMocks();
});

describe('SignupForm', () => {
  const fillOutForm = async () => {
    await fireEvent.change(screen.getByLabelText(/first name/i), {
      target: { value: 'John' },
    });
    await fireEvent.change(screen.getByLabelText(/last name/i), {
      target: { value: 'Doe' },
    });
    await fireEvent.change(screen.getByLabelText(/email address/i), {
      target: { value: 'john.doe@example.com' },
    });
    await fireEvent.change(screen.getByLabelText(/^password$/i), {
      target: { value: 'SecurePass123' },
    });
    await fireEvent.change(screen.getByLabelText(/confirm password/i), {
      target: { value: 'SecurePass123' },
    });
    await fireEvent.click(screen.getByRole('checkbox'));
  };

  test('should handle duplicate email error (409) with specific message', async () => {
    // Mock 409 response for duplicate email
    (axios.post as jest.Mock).mockRejectedValueOnce({
      response: {
        status: 409,
        data: { error: 'Email already registered' },
      },
    });

    renderWithProviders(<SignupForm />);
    
    await fillOutForm();
    await fireEvent.click(screen.getByRole('button', { name: /create account/i }));

    await waitFor(() => {
      // Verify specific error message for duplicate email
      expect(mockToastError).toHaveBeenCalledWith(
        'That email is already in use. Try logging in instead.'
      );
    });

    await waitFor(() => {
      // Verify error banner is displayed
      expect(screen.getByTestId('error-message')).toHaveTextContent(
        'That email is already in use. Try logging in instead.'
      );
    });

    // Verify user is NOT redirected to dashboard
    expect(mockPush).not.toHaveBeenCalled();
    
    // Verify success toast is NOT shown
    expect(mockToastSuccess).not.toHaveBeenCalled();
  });

  test('should handle successful registration with auto-login and redirect', async () => {
    // Mock successful registration
    (axios.post as jest.Mock).mockResolvedValueOnce({
      status: 201,
      data: { message: 'Registration successful' },
    });

    // Mock successful sign-in
    signIn.mockResolvedValueOnce({ ok: true });

    renderWithProviders(<SignupForm />);
    
    await fillOutForm();
    await fireEvent.click(screen.getByRole('button', { name: /create account/i }));

    await waitFor(() => {
      // Verify success message
      expect(mockToastSuccess).toHaveBeenCalledWith(
        'Welcome to Zion Tech Marketplace 🎉'
      );
    });

    await waitFor(() => {
      // Verify redirect to dashboard
      expect(mockPush).toHaveBeenCalledWith('/dashboard');
    });

    // Verify no error toast or banner
    expect(mockToastError).not.toHaveBeenCalled();
    expect(screen.queryByTestId('error-message')).not.toBeInTheDocument();
  });

  test('should handle other API errors (400, 500, etc.) with generic handling', async () => {
    // Mock 400 response for validation error
    (axios.post as jest.Mock).mockRejectedValueOnce({
      response: {
        status: 400,
        data: { error: 'Password is too weak' },
      },
    });

    renderWithProviders(<SignupForm />);
    
    await fillOutForm();
    await fireEvent.click(screen.getByRole('button', { name: /create account/i }));

    await waitFor(() => {
      // Verify generic error handling
      expect(mockToastError).toHaveBeenCalledWith('Password is too weak');
    });

    await waitFor(() => {
      // Verify error banner shows the API error message
      expect(screen.getByTestId('error-message')).toHaveTextContent(
        'Password is too weak'
      );
    });

    // Verify user is NOT redirected
    expect(mockPush).not.toHaveBeenCalled();
  });

  test('should handle network errors gracefully', async () => {
    // Mock network error
    (axios.post as jest.Mock).mockRejectedValueOnce({
      message: 'Network Error',
    });

    renderWithProviders(<SignupForm />);
    
    await fillOutForm();
    await fireEvent.click(screen.getByRole('button', { name: /create account/i }));

    await waitFor(() => {
      // Verify fallback error message
      expect(mockToastError).toHaveBeenCalledWith('Network Error');
    });

    await waitFor(() => {
      // Verify error banner
      expect(screen.getByTestId('error-message')).toHaveTextContent('Network Error');
    });

    // Verify user is NOT redirected
    expect(mockPush).not.toHaveBeenCalled();
  });

  test('should prevent double submission when already submitting', async () => {
    // Mock a slow API call
    (axios.post as jest.Mock).mockImplementation(
      () => new Promise(resolve => setTimeout(resolve, 1000))
    );

    renderWithProviders(<SignupForm />);
    
    await fillOutForm();
    
    const submitButton = screen.getByRole('button', { name: /create account/i });
    
    // Click submit button multiple times rapidly
    await fireEvent.click(submitButton);
    await fireEvent.click(submitButton);
    await fireEvent.click(submitButton);

    // Verify API is only called once
    expect(axios.post).toHaveBeenCalledTimes(1);
    
    // Verify button shows loading state
    expect(submitButton).toHaveTextContent('Creating Account...');
    expect(submitButton).toBeDisabled();
  });

  test('should validate form fields before submission', async () => {
    renderWithProviders(<SignupForm />);
    
    // Try to submit empty form
    await fireEvent.click(screen.getByRole('button', { name: /create account/i }));

    // Verify form validation errors appear
    await waitFor(() => {
      expect(screen.getByText('First name is required')).toBeInTheDocument();
      expect(screen.getByText('Last name is required')).toBeInTheDocument();
      expect(screen.getByText('Please enter a valid email')).toBeInTheDocument();
    });

    // Verify API is not called when form is invalid
    expect(axios.post).not.toHaveBeenCalled();
  });

  test('should validate password requirements', async () => {
    renderWithProviders(<SignupForm />);
    
    // Fill form with weak password
    await fireEvent.change(screen.getByLabelText(/first name/i), {
      target: { value: 'John' },
    });
    await fireEvent.change(screen.getByLabelText(/last name/i), {
      target: { value: 'Doe' },
    });
    await fireEvent.change(screen.getByLabelText(/email address/i), {
      target: { value: 'john.doe@example.com' },
    });
    await fireEvent.change(screen.getByLabelText(/^password$/i), {
      target: { value: 'weak' },
    });
    await fireEvent.change(screen.getByLabelText(/confirm password/i), {
      target: { value: 'weak' },
    });

    await fireEvent.click(screen.getByRole('button', { name: /create account/i }));

    // Verify password validation errors
    await waitFor(() => {
      expect(screen.getByText(/password must be at least 8 characters/i)).toBeInTheDocument();
    });

    // Verify API is not called when password is invalid
    expect(axios.post).not.toHaveBeenCalled();
  });
}); 