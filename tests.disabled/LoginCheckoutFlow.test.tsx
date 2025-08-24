import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { vi } from 'vitest';
import { LoginForm } from '@/components/auth/login';
import * as authService from '@/services/authService';
import * as authHook from '@/hooks/useAuth';
import * as router from 'react-router-dom';

vi.spyOn(authHook, 'useAuth').mockReturnValue({ isLoading: false, login: vi.fn() } as any);

it('redirects to checkout with stored product after login', async () => {
  const navigateMock = vi.fn();
  vi.spyOn(router, 'useNavigate').mockReturnValue(navigateMock);
  vi.spyOn(authService, 'loginUser').mockResolvedValue({ res: { status: 200 } as Response, data: {} });

  sessionStorage.setItem('intendedProduct', 'prod123');

  render(
    <MemoryRouter initialEntries={[ '/login?next=/checkout' ]}>
      <LoginForm />
    </MemoryRouter>
  );

  fireEvent.input(screen.getByLabelText(/email address/i), { target: { value: 'a@b.com' } });
  fireEvent.input(screen.getByLabelText(/password/i), { target: { value: 'secret' } });
  fireEvent.submit(screen.getByRole('button', { name: /login/i }));

  await waitFor(() => {
    expect(navigateMock).toHaveBeenCalledWith('/checkout?product=prod123');
  });
});
