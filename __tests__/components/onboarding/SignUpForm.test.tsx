import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SignUpForm } from '@/mobile/components/onboarding/SignUpForm';

jest.mock('@/hooks/useAuth', () => ({
  useAuth: () => ({
    signup: jest.fn().mockResolvedValue({}),
    login: jest.fn().mockResolvedValue({}),
    loginWithGoogle: jest.fn(),
  }),
}));

jest.mock('react-router-dom', () => {
  const actual = jest.requireActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => jest.fn(),
  };
});

describe('SignUpForm', () => {
  test('calls loginWithGoogle when Google button is clicked', () => {
    const { loginWithGoogle } = require('@/hooks/useAuth').useAuth();
    render(
      <MemoryRouter>
        <SignUpForm />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole('button', { name: /continue with google/i }));
    expect(loginWithGoogle).toHaveBeenCalled();
  });

  test('updates form fields', () => {
    render(
      <MemoryRouter>
        <SignUpForm />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText(/email address/i), { target: { value: 'user@example.com' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'secret' } });

    expect(screen.getByLabelText(/email address/i)).toHaveValue('user@example.com');
    expect(screen.getByLabelText(/password/i)).toHaveValue('secret');
  });
});
