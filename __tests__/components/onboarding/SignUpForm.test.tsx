import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import SignUpForm from '@/components/onboarding/SignUpForm';
import { useAuth as _useAuth } from '@/hooks/useAuth';

// Create mock functions that can be accessed in tests
const mockLoginWithGoogle = jest.fn();
const mockSignup = jest.fn().mockResolvedValue({});
const mockLogin = jest.fn().mockResolvedValue({});

jest.mock('@/hooks/useAuth', () => ({
  useAuth: () => ({
    signup: mockSignup,
    login: mockLogin,
    loginWithGoogle: mockLoginWithGoogle,
  }),
}));

vi.mock('next/router', () => import('next-router-mock'));

describe('SignUpForm', () => {
  test('calls loginWithGoogle when Google button is clicked', () => {
    render(
      <MemoryRouterProvider>
        <SignUpForm />
      </MemoryRouterProvider>
    );

    fireEvent.click(screen.getByRole('button', { name: /continue with google/i }));
    expect(mockLoginWithGoogle).toHaveBeenCalled();
  });

  test('updates form fields', () => {
    render(
      <MemoryRouterProvider>
        <SignUpForm />
      </MemoryRouterProvider>
    );

    fireEvent.change(screen.getByLabelText(/email address/i), { target: { value: 'user@example.com' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'secret' } });

    expect(screen.getByLabelText(/email address/i)).toHaveValue('user@example.com');
    expect(screen.getByLabelText(/password/i)).toHaveValue('secret');
  });
});
