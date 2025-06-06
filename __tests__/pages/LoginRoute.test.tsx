import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AuthRoutes from '@/routes/AuthRoutes';

jest.mock('@/components/auth/login', () => ({
  LoginForm: () => (
    <form>
      <label htmlFor="email-input">Email</label>
      <input id="email-input" />
    </form>
  ),
  LoginErrorFallback: ({ error }: { error: Error }) => (
    <div role="alert">{error.message}</div>
  ),
}));

// Silence react-error-boundary console error output for the test
jest.spyOn(console, 'error').mockImplementation(() => {});

describe('Login route', () => {
  it('renders login form on /login', () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <AuthRoutes />
      </MemoryRouter>
    );
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  });
});
