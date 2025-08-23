import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { vi } from 'vitest';
import Login from '@/pages/auth/Login';
import * as authApi from '@/services/auth';

vi.mock('@/services/auth');

describe('Login page', () => {
  it('redirects to /dashboard on successful login', async () => {
    vi.spyOn(authApi, 'login').mockResolvedValue({ status: 200, data: { token: 'x' } } as any);

    render(
      <MemoryRouter initialEntries={['/login']}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<div>Dashboard</div>} />
        </Routes>
      </MemoryRouter>
    );

    fireEvent.input(screen.getByLabelText(/email/i), { target: { value: 'a@b.com' } });
    fireEvent.input(screen.getByLabelText(/password/i), { target: { value: 'secret' } });
    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    await waitFor(() => expect(screen.getByText('Dashboard')).toBeInTheDocument());
  });
});
