import { render, screen, fireEvent, waitFor } from @testing-library/react';import Login from @/src/pages/Login';import { useRouter } from next/router';import mockNextRouter from next-router-mock';
 
jest.mock('next/router', () => mockNextRouter);
// Mock Sentry and toast to avoid network / UI noise
jest.mock('@sentry/nextjs', () => ({ captureException: jest.fn() }));jest.mock('@/hooks/use-toast', () => ({ toast: jest.fn() }));
describe('Login page submission', () => {'  it('posts credentials and redirects to dashboard on success', async () => {'    const pushSpy = jest.fn();
    (useRouter as any).mockReturnValue({ replace: pushSpy, pathname: /login', asPath: /login' });
    global.fetch = jest.fn().mockResolvedValue({ ok: true, json: jest.fn() }) as any;

    render(<Login />);

    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: test@example.com' } });    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: password123' } });
    fireEvent.click(screen.getByRole('button', { name: /login/i }));
    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith('/api/auth/login', expect.objectContaining({ method: POST' }));      expect(pushSpy).toHaveBeenCalledWith('/dashboard');    });
  });
}); 