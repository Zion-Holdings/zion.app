import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { AuthButtons } from './AuthButtons';

// Mock next-auth/react
jest.mock('next-auth/react', () => ({
  signIn: jest.fn(),
}));

// Mock lucide-react Facebook icon
jest.mock('lucide-react', () => ({
  Facebook: () => <svg data-testid="facebook-icon" />,
}));

// Mock Button component
jest.mock('@/components/ui/button', () => ({
  Button: ({ children, onClick, disabled, ...props }: any) => (
    <button onClick={onClick} disabled={disabled} {...props}>
      {children}
    </button>
  ),
}));

describe('AuthButtons', () => {
  beforeEach(() => {
    // Reset mocks before each test
    jest.clearAllMocks();
    // Ensure React is defined for these tests if not using automatic runtime fully.
    // However, previous steps configured automatic runtime, so this is more of a safeguard.
    (global as any).React = React;
  });

  it('renders all sign-in buttons', () => {
    render(<AuthButtons />);
    expect(screen.getByRole('button', { name: /sign in with google/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /sign in with facebook/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /email login/i })).toBeInTheDocument();
  });

  it('calls signIn with "google" when Google button is clicked', async () => {
    const { signIn } = require('next-auth/react');
    render(<AuthButtons />);
    const googleButton = screen.getByRole('button', { name: /sign in with google/i });
    fireEvent.click(googleButton);
    expect(signIn).toHaveBeenCalledWith('google');
  });

  it('calls signIn with "facebook" when Facebook button is clicked', async () => {
    const { signIn } = require('next-auth/react');
    render(<AuthButtons />);
    const facebookButton = screen.getByRole('button', { name: /sign in with facebook/i });
    fireEvent.click(facebookButton);
    expect(signIn).toHaveBeenCalledWith('facebook');
  });

  it('calls signIn with "credentials" when Email Login button is clicked', async () => {
    const { signIn } = require('next-auth/react');
    render(<AuthButtons />);
    const emailButton = screen.getByRole('button', { name: /email login/i });
    fireEvent.click(emailButton);
    expect(signIn).toHaveBeenCalledWith('credentials');
  });

  it('shows spinner and disables buttons when Google sign-in is in progress', async () => {
    const { signIn } = require('next-auth/react');
    signIn.mockImplementationOnce(() => new Promise(() => {})); // Simulate pending promise

    render(<AuthButtons />);
    const googleButton = screen.getByRole('button', { name: /sign in with google/i });
    fireEvent.click(googleButton);

    expect(googleButton.querySelector('svg.animate-spin')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /sign in with facebook/i })).toBeDisabled();
    expect(screen.getByRole('button', { name: /email login/i })).toBeDisabled();
  });

  it('shows spinner and disables buttons when Facebook sign-in is in progress', async () => {
    const { signIn } = require('next-auth/react');
    signIn.mockImplementationOnce(() => new Promise(() => {})); // Simulate pending promise

    render(<AuthButtons />);
    const facebookButton = screen.getByRole('button', { name: /sign in with facebook/i });
    fireEvent.click(facebookButton);

    expect(facebookButton.querySelector('svg.animate-spin')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /sign in with google/i })).toBeDisabled();
    expect(screen.getByRole('button', { name: /email login/i })).toBeDisabled();
  });

  it('shows spinner and disables buttons when Email sign-in is in progress', async () => {
    const { signIn } = require('next-auth/react');
    signIn.mockImplementationOnce(() => new Promise(() => {})); // Simulate pending promise

    render(<AuthButtons />);
    const emailButton = screen.getByRole('button', { name: /email login/i });
    fireEvent.click(emailButton);

    expect(emailButton.querySelector('svg.animate-spin')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /sign in with google/i })).toBeDisabled();
    expect(screen.getByRole('button', { name: /sign in with facebook/i })).toBeDisabled();
  });

  it('re-enables buttons after Google sign-in attempt (e.g. success/failure)', async () => {
    const { signIn } = require('next-auth/react');
    signIn.mockImplementationOnce(() => Promise.resolve()); // Simulate completed promise

    render(<AuthButtons />);
    const googleButton = screen.getByRole('button', { name: /sign in with google/i });
    fireEvent.click(googleButton);

    await waitFor(() => {
      expect(googleButton.querySelector('svg.animate-spin')).not.toBeInTheDocument();
    });

    expect(screen.getByRole('button', { name: /sign in with facebook/i })).not.toBeDisabled();
    expect(screen.getByRole('button', { name: /email login/i })).not.toBeDisabled();
  });
});
