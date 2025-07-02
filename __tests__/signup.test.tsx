import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import Signup from '@/pages/Signup';
import * as toastHook from '@/hooks/use-toast';
import { useRouter } from 'next/router';
import { vi, expect, test } from 'vitest';
import nextRouterMock from 'next-router-mock';

vi.mock('@/hooks/useAuth', () => ({
  useAuth: () => ({
    loginWithGoogle: vi.fn(),
    loginWithFacebook: vi.fn(),
    loginWithTwitter: vi.fn(),
    login: vi.fn().mockResolvedValue({ error: null }),
    isAuthenticated: false,
    user: null,
  }),
}));

vi.mock('@/hooks/use-toast');

vi.mock('next/router', () => nextRouterMock);

function mockFetch(responses: { status: number; body: any }[]) {
  global.fetch = vi.fn();
  responses.forEach(({ status, body }) => {
    (global.fetch as any).mockResolvedValueOnce({
      status,
      json: () => Promise.resolve(body),
    });
  });
}

test('successful registration redirects to dashboard', async () => {
  const navigateMock = vi.fn();
  (useRouter as any).mockReturnValue({ push: navigateMock, pathname: '/signup', asPath: '/signup' });
  (toastHook.toast.success as any).mockImplementation(() => {});
  mockFetch([
    { status: 201, body: { accessToken: 'jwt' } },
    { status: 200, body: { accessToken: 'jwt', refreshToken: 'ref' } }
  ]);

  render(
    <MemoryRouterProvider>
      <Signup />
    </MemoryRouterProvider>
  );

  // Verify form fields are present
  expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/^password$/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/confirm password/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/i agree to the terms and conditions/i)).toBeInTheDocument(); // Adjusted label text
  expect(screen.getByRole('button', { name: /create account/i })).toBeInTheDocument();

  fireEvent.input(screen.getByLabelText(/full name/i), {
    target: { value: 'John Doe' },
  });
  fireEvent.input(screen.getByLabelText(/email address/i), {
    target: { value: 'john@example.com' },
  });
  fireEvent.input(screen.getByLabelText(/^password$/i), {
    target: { value: 'Password123' },
  });
  fireEvent.input(screen.getByLabelText(/confirm password/i), {
    target: { value: 'Password123' },
  });
  fireEvent.click(screen.getByLabelText(/i agree to the terms and conditions/i)); // Adjusted label text
  fireEvent.submit(screen.getByRole('button', { name: /create account/i }));

  await screen.findByRole('button', { name: /create account/i });
  expect(toastHook.toast.success).toHaveBeenCalledWith('Welcome to ZionAI 🎉');
  expect(localStorage.getItem('token')).toBe('jwt');
  expect(navigateMock).toHaveBeenCalledWith('/dashboard');
});

