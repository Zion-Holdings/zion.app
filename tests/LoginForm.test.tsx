import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, beforeEach, expect, vi } from 'vitest';
import { LoginForm } from '@/components/auth/login';
import * as authService from '@/services/authService';
import * as toastMod from '@/hooks/use-toast';
import * as router from 'react-router-dom';

vi.mock('@/hooks/useAuth', () => ({
  useAuth: () => ({ isLoading: false, login: vi.fn() }),
}));
vi.mock('@/hooks/use-toast');
vi.mock('@/services/authService');
vi.mock('react-router-dom', async () => {
  const actual = (await vi.importActual<typeof import('react-router-dom')>(
    'react-router-dom'
  )) as any;
  return {
    ...actual,
    useNavigate: vi.fn(),
  };
});

describe('LoginForm', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('valid credentials navigates to dashboard', async () => {
    (authService.loginUser as vi.Mock).mockResolvedValue({
      res: { status: 200 },
      data: { token: 'jwt' },
    });
    (toastMod.toast.error as vi.Mock).mockImplementation(() => {});
    const navigateMock = vi.fn();
    (router.useNavigate as vi.Mock).mockReturnValue(navigateMock);

    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );

    fireEvent.input(screen.getByLabelText(/email address/i), { target: { value: 'user@test.com' } });
    fireEvent.input(screen.getByLabelText(/password/i), { target: { value: 'secret' } });
    fireEvent.submit(screen.getByRole('button', { name: /login/i }));

    await screen.findByRole('button', { name: /login/i });
    expect(authService.loginUser).toHaveBeenCalledWith('user@test.com', 'secret');
    expect(navigateMock).toHaveBeenCalledWith('/');
  });

  it('invalid credentials show error', async () => {
    (authService.loginUser as vi.Mock).mockResolvedValue({
      res: { status: 401 },
      data: { error: 'Invalid credentials' },
    });
    (toastMod.toast.error as vi.Mock).mockImplementation(() => {});

    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );

    fireEvent.input(screen.getByLabelText(/email address/i), { target: { value: 'bad@test.com' } });
    fireEvent.input(screen.getByLabelText(/password/i), { target: { value: 'wrong' } });
    fireEvent.submit(screen.getByRole('button', { name: /login/i }));

    await screen.findByRole('button', { name: /login/i });
    expect(toastMod.toast.error).toHaveBeenCalledWith('Incorrect email or password');
  });
});

