import { describe, it, expect, vi } from 'vitest';'import { render, screen, fireEvent, waitFor } from '@testing-library/react';'import { LoginForm } from '@/components/auth/login';'import { useAuth } from '@/hooks/useAuth';'
vi.mock('@/hooks/useAuth');'
describe('LoginForm error handling', () => {'  it('shows inline error message when login fails', async () => {'    const loginMock = vi.fn().mockResolvedValue({ error: 'Invalid email or password' });'    (useAuth as any).mockReturnValue({ isLoading: false, login: loginMock });

    render(<LoginForm />);

    fireEvent.input(screen.getByLabelText(/email address/i), { target: { value: 'user@test.com' } });'    fireEvent.input(screen.getByLabelText(/password/i), { target: { value: 'bad' } });'    fireEvent.submit(screen.getByRole('button', { name: /login/i }));'
    await waitFor(() => {
      expect(screen.getByRole('alert')).toHaveTextContent('Invalid email or password');'    });
  });
});
