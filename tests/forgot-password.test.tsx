import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ForgotPasswordPage from '../pages/forgot-password';
import * as Sentry from '@sentry/nextjs';
import { vi, describe, it, expect, beforeEach, type MockInstance } from 'vitest';

vi.mock('next/link', () => {
  return {
    default: ({ children, href }: { children: React.ReactNode; href: string }) => (
      <a href={href}>{children}</a>
    )
  };
});

vi.mock('@sentry/nextjs', () => ({
  captureException: vi.fn(),
}));

describe('ForgotPasswordPage fetch failure', () => {
  beforeEach(() => {
    (fetch as unknown as MockInstance<any,any>).mockReset(); // Cast fetch to mock
    (Sentry.captureException as MockInstance<any,any>).mockClear();
  });

  it('shows alert and logs error on 500', async () => {
    (fetch as unknown as MockInstance<any,any>).mockResolvedValueOnce({
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

