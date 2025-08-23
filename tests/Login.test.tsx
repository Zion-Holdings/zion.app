import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';
import { LoginForm } from '@/components/auth/login';
import * as authService from '@/services/authService';
import * as authHook from '@/hooks/useAuth';

vi.spyOn(authHook, 'useAuth').mockReturnValue({ isLoading: false, login: vi.fn() } as any);

describe('LoginForm', () => {
  it('shows server error on 401 response', async () => {
    vi.spyOn(authService, 'loginUser').mockResolvedValue({
      res: { status: 401 } as Response,
      data: { error: 'Invalid credentials' },
    });

    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );

    fireEvent.input(screen.getByLabelText(/email address/i), { target: { value: 'a@b.com' } });
    fireEvent.input(screen.getByLabelText(/password/i), { target: { value: 'secret' } });
    fireEvent.submit(screen.getByRole('button', { name: /login/i }));

    // wait for error message to appear
    await screen.findByText('Incorrect email or password');
  });
});
