import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ForgotPasswordPage from '../pages/forgot-password';
import * as Sentry from '@sentry/nextjs';

jest.mock('next/link', () => {
  const MockLink = ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  );
  MockLink.displayName = 'MockLink';
  return MockLink;
});

jest.mock('@sentry/nextjs', () => ({
  captureException: jest.fn(),
}));

describe('ForgotPasswordPage fetch failure', () => {
  beforeEach(() => {
    (fetch as jest.Mock).mockReset();
    (Sentry.captureException as jest.Mock).mockClear();
  });

  it('shows alert and logs error on 500', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      status: 500,
      json: async () => ({ error: 'Server error' }),
    } as Response);

    render(<ForgotPasswordPage />);
    fireEvent.change(screen.getByLabelText(/email address/i), {
      target: { value: 'fail@test.com' },
    });
    fireEvent.submit(screen.getByRole('button', { name: /send reset link/i }));

    await waitFor(() => {
      expect(Sentry.captureException).toHaveBeenCalledTimes(1);
    });

    expect(screen.getByRole('alert')).toBeInTheDocument();
  });
});

