import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, vi, afterEach } from 'vitest';
import { LoginForm } from '@/components/auth/login';
import * as authService from '@/services/authService';
import * as authHook from '@/hooks/useAuth';

// Use the real loginUser but spy on it
vi.spyOn(authService, 'loginUser');

vi.mock('@/hooks/useAuth', () => ({
  useAuth: () => ({
    isLoading: false,
    login: async (email: string, password: string) => {
      const { res } = await authService.loginUser(email, password);
      return { error: res.ok ? null : 'error' };
    }
  })
}));

describe('LoginForm fetch', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('submits valid credentials and calls /auth/login', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => ({ token: 'jwt' })
    }) as any;

    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );

    fireEvent.input(screen.getByLabelText(/email address/i), { target: { value: 'user@test.com' } });
    fireEvent.input(screen.getByLabelText(/password/i), { target: { value: 'secret123' } });
    fireEvent.submit(screen.getByRole('button', { name: /login/i }));

    await screen.findByRole('button', { name: /login/i });

    expect(global.fetch).toHaveBeenCalledWith(expect.stringContaining('/auth/login'), expect.any(Object));
  });
});
