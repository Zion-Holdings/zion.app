import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { vi } from 'vitest';
import { LoginForm } from '@/components/auth/login';
import * as authService from '@/services/authService';
import { Toaster } from '@/components/ui/toaster';
import * as authHook from '@/hooks/useAuth';

vi.spyOn(authHook, 'useAuth').mockReturnValue({ isLoading: false } as any);

describe('LoginForm', () => {
  it('shows error toast on 401 response', async () => {
    vi.spyOn(authService, 'loginUser').mockResolvedValue({
      res: { ok: false, status: 401 } as Response,
      data: { error: 'Invalid credentials' },
    });

    render(
      <MemoryRouter>
        <LoginForm />
        <Toaster />
      </MemoryRouter>
    );

    fireEvent.input(screen.getByLabelText(/email address/i), {
      target: { value: 'a@b.com' },
    });
    fireEvent.input(screen.getByLabelText(/password/i), {
      target: { value: 'secret' },
    });
    fireEvent.submit(screen.getByRole('button', { name: /login/i }));

    // Wait for toast to appear in the DOM
    const toastMsg = await screen.findByText('Invalid credentials');
    expect(toastMsg).toBeInTheDocument();
  });
});
