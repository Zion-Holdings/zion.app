import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Signup from '@/pages/Signup';
import * as toastHook from '@/hooks/use-toast';
import * as router from 'react-router-dom';
import { vi, expect, test } from 'vitest';

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

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual<typeof import('react-router-dom')>(
    'react-router-dom'
  );
  return {
    ...actual,
    useNavigate: vi.fn(),
  };
});

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
  (router.useNavigate as any).mockReturnValue(navigateMock);
  (toastHook.toast.success as any).mockImplementation(() => {});
  mockFetch([
    { status: 201, body: { accessToken: 'jwt' } },
    { status: 200, body: { accessToken: 'jwt', refreshToken: 'ref' } }
  ]);

  render(
    <MemoryRouter>
      <Signup />
    </MemoryRouter>
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

