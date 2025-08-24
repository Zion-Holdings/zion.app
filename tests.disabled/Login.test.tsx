import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { vi } from 'vitest';
import { LoginForm } from '@/components/auth/login';
import { Toaster } from '@/components/ui/toaster';
import * as authService from '@/services/authService';
import * as authHook from '@/hooks/useAuth';

vi.mock('@/services/auth');

describe('LoginForm', () => {
  it('shows error toast on 401 response', async () => {
    vi.spyOn(authService, 'loginUser').mockResolvedValue({
      res: { ok: false, status: 401 } as Response,
      data: { error: 'Invalid credentials' },
    });

    render(
      <MemoryRouter>
        <>
          <Toaster />
          <LoginForm />
        </>
      </MemoryRouter>
    );

    fireEvent.input(screen.getByLabelText(/email/i), { target: { value: 'a@b.com' } });
    fireEvent.input(screen.getByLabelText(/password/i), { target: { value: 'secret' } });
    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    // wait for login submission to resolve
    await screen.findByRole('button', { name: /login/i });

    expect(await screen.findByText(/invalid credentials/i)).toBeInTheDocument();
  });
});
