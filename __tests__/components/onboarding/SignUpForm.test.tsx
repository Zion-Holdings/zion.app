import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import SignUpForm from '@/components/onboarding/SignUpForm';

jest.mock('@/hooks/useAuth', () => ({
  useAuth: () => ({
    signup: jest.fn().mockResolvedValue({}),
    login: jest.fn().mockResolvedValue({}),
    loginWithGoogle: jest.fn(),
  }),
}));

vi.mock('next/router', () => import('next-router-mock'));

describe('SignUpForm', () => {
  test('calls loginWithGoogle when Google button is clicked', () => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { loginWithGoogle } = require('@/hooks/useAuth').useAuth();
    render(
      <MemoryRouterProvider>
        <SignUpForm />
      </MemoryRouterProvider>
    );

    fireEvent.click(screen.getByRole('button', { name: /continue with google/i }));
    expect(loginWithGoogle).toHaveBeenCalled();
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
