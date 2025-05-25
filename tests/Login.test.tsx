import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { vi } from 'vitest';
import { LoginForm } from '@/components/auth/login';
import * as authService from '@/services/authService';
import * as toastMod from '@/hooks/use-toast';
import * as authHook from '@/hooks/useAuth';

vi.spyOn(authHook, 'useAuth').mockReturnValue({ isLoading: false } as any);

describe('LoginForm', () => {
  it('shows error toast on 401 response', async () => {
    vi.spyOn(authService, 'loginUser').mockResolvedValue({
      res: { status: 401, ok: false } as Response,
      data: { error: 'Invalid credentials' },
    });
    const toastSpy = vi.spyOn(toastMod.toast, 'error').mockImplementation(() => {});

    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );

    fireEvent.input(screen.getByLabelText(/email address/i), { target: { value: 'a@b.com' } });
    fireEvent.input(screen.getByLabelText(/password/i), { target: { value: 'secret' } });
    fireEvent.submit(screen.getByRole('button', { name: /login/i }));

    // wait for toast call and confirm message appears
    await screen.findByText('Invalid credentials');

    expect(toastSpy).toHaveBeenCalledWith('Invalid credentials');
  });
});
