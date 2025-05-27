import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Signup from '@/pages/Signup';
import * as toastHook from '@/hooks/use-toast';
import * as router from 'react-router-dom';
import { jest } from '@jest/globals';


jest.mock('@/hooks/useAuth', () => ({
  useAuth: () => ({
    loginWithGoogle: jest.fn(),
    loginWithFacebook: jest.fn(),
    loginWithTwitter: jest.fn(),
    isAuthenticated: false,
    user: null,
  }),
}));

jest.mock('@/hooks/use-toast');

jest.mock('react-router-dom', () => {
  const actual = jest.requireActual<typeof import('react-router-dom')>(
    'react-router-dom'
  );
  return {
    ...actual,
    useNavigate: jest.fn(),
  };
});

function mockFetch(response: any, status = 200) {
  global.fetch = jest.fn().mockResolvedValue({
    status,
    json: () => Promise.resolve(response),
  }) as any;
}

test('successful registration redirects to dashboard', async () => {
  const navigateMock = jest.fn();
  (router.useNavigate as any).mockReturnValue(navigateMock);
  (toastHook.toast.success as any).mockImplementation(() => {});
  mockFetch({ token: 'jwt' }, 201);

  render(
    <MemoryRouter>
      <Signup />
    </MemoryRouter>
  );

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
  fireEvent.click(screen.getByLabelText(/i agree/i));
  fireEvent.submit(screen.getByRole('button', { name: /create account/i }));

  await screen.findByRole('button', { name: /create account/i });
  expect(toastHook.toast.success).toHaveBeenCalledWith('Welcome to ZionAI 🎉');
  expect(navigateMock).toHaveBeenCalledWith('/dashboard');
});

