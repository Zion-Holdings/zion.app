import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import { SignUpForm } from '@/mobile/components/onboarding/SignUpForm';
import { vi, describe, test, expect } from 'vitest';
import * as AuthHook from '@/hooks/useAuth'; // Import namespace

vi.mock('@/hooks/useAuth', () => ({
  useAuth: () => ({
    signup: vi.fn().mockResolvedValue({}),
    login: vi.fn().mockResolvedValue({}),
    loginWithGoogle: vi.fn(),
  }),
}));

vi.mock('next/router', () => require('next-router-mock'));

describe('SignUpForm', () => {
  test('calls loginWithGoogle when Google button is clicked', () => {
    const authSpy = vi.spyOn(AuthHook, 'useAuth');
    const loginWithGoogleMock = vi.fn();
    authSpy.mockReturnValue({
        signup: vi.fn().mockResolvedValue({}),
        login: vi.fn().mockResolvedValue({}),
        loginWithGoogle: loginWithGoogleMock,
    } as any);

    render(
      <MemoryRouterProvider>
        <SignUpForm />
      </MemoryRouterProvider>
    );

    fireEvent.click(screen.getByRole('button', { name: /continue with google/i }));
    expect(loginWithGoogleMock).toHaveBeenCalled();
    authSpy.mockRestore();
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
