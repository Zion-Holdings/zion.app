import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { vi } from 'vitest';
import { LoginForm } from '@/components/auth/login';
import * as authHook from '@/hooks/useAuth';
import axios from 'axios';

vi.mock('axios', () => {
  const instance = { post: vi.fn(), interceptors: { request: { use: vi.fn() } } };
  return { default: { create: () => instance } };
}, { virtual: true });

vi.spyOn(authHook, 'useAuth').mockReturnValue({ isLoading: false } as any);

// Get the mocked axios instance
const mockedAxios: any = (axios as any).create();

describe('LoginForm', () => {
  it('redirects to dashboard on successful login', async () => {
    mockedAxios.post.mockResolvedValue({ status: 200, data: { token: 'abc' } });
    const navigateMock = vi.fn();
    vi.spyOn(require('react-router-dom'), 'useNavigate').mockReturnValue(navigateMock);

    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );

    fireEvent.input(screen.getByLabelText(/email address/i), { target: { value: 'a@b.com' } });
    fireEvent.input(screen.getByLabelText(/password/i), { target: { value: 'secret' } });
    fireEvent.submit(screen.getByRole('button', { name: /login/i }));

    await waitFor(() => {
      expect(navigateMock).toHaveBeenCalledWith('/dashboard');
    });
  });
});
