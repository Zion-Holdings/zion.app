import React from 'react';
import { renderWithProviders, screen, fireEvent, waitFor } from '__tests__/test-utils.tsx';
import { useRouter } from 'next/router';
import axios from 'axios';
import { toast } from '@/hooks/use-toast';
import SignupForm from '@/components/auth/SignupForm';
import { signIn } from 'next-auth/react';
import { vi, describe, test, expect, beforeEach, type MockInstance, type Mocked } from 'vitest';

// Mock dependencies
vi.mock('next/router');
vi.mock('axios');
vi.mock('@/hooks/use-toast', () => ({ // Ensure toast itself is an object with methods
  toast: {
    error: vi.fn(),
    success: vi.fn(),
  }
}));
vi.mock('next-auth/react', () => ({
  signIn: vi.fn(),
}));

const mockPush = vi.fn();
const mockToastError = toast.error as MockInstance<any,any>; // Cast after mocking
const mockToastSuccess = toast.success as MockInstance<any,any>; // Cast after mocking

beforeEach(() => {
  (useRouter as MockInstance<any,any>).mockReturnValue({
    push: mockPush,
  });
  vi.clearAllMocks(); // Clears all mocks including axios and signIn
  mockToastError.mockClear(); // Explicitly clear toast mocks
  mockToastSuccess.mockClear();
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
    (axios.post as MockInstance<any,any>).mockRejectedValueOnce({
      response: {
        status: 409,
        data: { error: 'Email already registered' },
      },
    });

    renderWithProviders(<SignupForm />);
    
    await fillOutForm();
    await fireEvent.click(screen.getByRole('button', { name: /create account/i }));

    await waitFor(() => {
      expect(mockToastError).toHaveBeenCalledWith(
        'That email is already in use. Try logging in instead.'
      );
    });

    await waitFor(() => {
      expect(screen.getByTestId('error-message')).toHaveTextContent(
        'That email is already in use. Try logging in instead.'
      );
    });

    expect(mockPush).not.toHaveBeenCalled();
    expect(mockToastSuccess).not.toHaveBeenCalled();
  });

  test('should handle successful registration with auto-login and redirect', async () => {
    (axios.post as MockInstance<any,any>).mockResolvedValueOnce({
      status: 201,
      data: { message: 'Registration successful' },
    });

    (signIn as MockInstance<any,any>).mockResolvedValueOnce({ ok: true });

    renderWithProviders(<SignupForm />);
    
    await fillOutForm();
    await fireEvent.click(screen.getByRole('button', { name: /create account/i }));

    await waitFor(() => {
      expect(mockToastSuccess).toHaveBeenCalledWith(
        'Welcome to Zion Tech Marketplace 🎉'
      );
    });

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith('/dashboard');
    });

    expect(mockToastError).not.toHaveBeenCalled();
    expect(screen.queryByTestId('error-message')).not.toBeInTheDocument();
  });

  test('should handle other API errors (400, 500, etc.) with generic handling', async () => {
    (axios.post as MockInstance<any,any>).mockRejectedValueOnce({
      response: {
        status: 400,
        data: { error: 'Password is too weak' },
      },
    });

    renderWithProviders(<SignupForm />);
    
    await fillOutForm();
    await fireEvent.click(screen.getByRole('button', { name: /create account/i }));

    await waitFor(() => {
      expect(mockToastError).toHaveBeenCalledWith('Password is too weak');
    });

    await waitFor(() => {
      expect(screen.getByTestId('error-message')).toHaveTextContent(
        'Password is too weak'
      );
    });

    expect(mockPush).not.toHaveBeenCalled();
  });

  test('should handle network errors gracefully', async () => {
    (axios.post as MockInstance<any,any>).mockRejectedValueOnce({
      message: 'Network Error',
    });

    renderWithProviders(<SignupForm />);
    
    await fillOutForm();
    await fireEvent.click(screen.getByRole('button', { name: /create account/i }));

    await waitFor(() => {
      expect(mockToastError).toHaveBeenCalledWith('Network Error');
    });

    await waitFor(() => {
      expect(screen.getByTestId('error-message')).toHaveTextContent('Network Error');
    });

    expect(mockPush).not.toHaveBeenCalled();
  });

  test('should prevent double submission when already submitting', async () => {
    (axios.post as MockInstance<any,any>).mockImplementation(
      () => new Promise(resolve => setTimeout(resolve, 1000))
    );

    renderWithProviders(<SignupForm />);
    
    await fillOutForm();
    
    const submitButton = screen.getByRole('button', { name: /create account/i });
    
    await fireEvent.click(submitButton);
    await fireEvent.click(submitButton);
    await fireEvent.click(submitButton);

    expect(axios.post).toHaveBeenCalledTimes(1);
    
    expect(submitButton).toHaveTextContent('Creating Account...');
    expect(submitButton).toBeDisabled();
  });

  test('should validate form fields before submission', async () => {
    renderWithProviders(<SignupForm />);
    
    await fireEvent.click(screen.getByRole('button', { name: /create account/i }));

    await waitFor(() => {
      expect(screen.getByText('First name is required')).toBeInTheDocument();
      expect(screen.getByText('Last name is required')).toBeInTheDocument();
      expect(screen.getByText('Please enter a valid email')).toBeInTheDocument();
    });

    expect(axios.post).not.toHaveBeenCalled();
  });

  test('should validate password requirements', async () => {
    renderWithProviders(<SignupForm />);
    
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

    await waitFor(() => {
      expect(screen.getByText(/password must be at least 8 characters/i)).toBeInTheDocument();
    });

    expect(axios.post).not.toHaveBeenCalled();
  });
}); 