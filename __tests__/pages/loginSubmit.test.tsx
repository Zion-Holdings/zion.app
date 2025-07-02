import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Login from '@/pages/Login';
import { useRouter } from 'next/router';
import nextRouterMock from 'next-router-mock';

/* eslint-disable @typescript-eslint/no-require-imports */
jest.mock('next/router', () => nextRouterMock);

// Mock Sentry and toast to avoid network / UI noise
jest.mock('@sentry/nextjs', () => ({ captureException: jest.fn() }));
jest.mock('@/hooks/use-toast', () => ({ toast: jest.fn() }));

describe('Login page submission', () => {
  it('posts credentials and redirects to dashboard on success', async () => {
    const pushSpy = jest.fn();
    (useRouter as any).mockReturnValue({ replace: pushSpy, pathname: '/login', asPath: '/login' });

    global.fetch = jest.fn().mockResolvedValue({ ok: true, json: jest.fn() }) as any;

    render(<Login />);

    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'password123' } });

    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith('/api/auth/login', expect.objectContaining({ method: 'POST' }));
      expect(pushSpy).toHaveBeenCalledWith('/dashboard');
    });
  });
}); 