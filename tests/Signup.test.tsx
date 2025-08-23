import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Signup from '@/pages/Signup';
import * as authHook from '@/hooks/useAuth';
import * as toastHook from '@/hooks/use-toast';
import * as router from 'react-router-dom';

function setup(success = true, errorMsg?: string, status = success ? 201 : 400) {
  const navigateMock = vi.fn();
  vi.spyOn(router, 'useNavigate').mockReturnValue(navigateMock);
  vi.spyOn(authHook, 'useAuth').mockReturnValue({
    loginWithGoogle: vi.fn(),
    loginWithFacebook: vi.fn(),
    loginWithTwitter: vi.fn(),
    isAuthenticated: false,
    user: null,
  } as any);
  const fetchSpy = vi.fn().mockResolvedValue({
    status,
    json: () => Promise.resolve(success ? { token: 'jwt' } : { message: errorMsg }),
  } as Response);
  global.fetch = fetchSpy as any;

  const successSpy = vi.spyOn(toastHook.toast, 'success').mockImplementation(() => {});
  const errorSpy = vi.spyOn(toastHook.toast, 'error').mockImplementation(() => {});

  render(
    <MemoryRouter>
      <Signup />
    </MemoryRouter>
  );
  return { fetchSpy, successSpy, errorSpy, navigateMock };
}

describe('Signup form', () => {
  it('shows validation errors', async () => {
    setup();
    fireEvent.submit(screen.getByRole('button', { name: /create account/i }));
    expect(await screen.findAllByText(/required|must/i)).not.toHaveLength(0);
  });

  it('submits valid form', async () => {
    const { fetchSpy, successSpy, navigateMock } = setup();
    fireEvent.input(screen.getByLabelText(/full name/i), { target: { value: 'John Doe' } });
    fireEvent.input(screen.getByLabelText(/email address/i), { target: { value: 'john@example.com' } });
    fireEvent.input(screen.getByLabelText(/^password$/i), { target: { value: 'Password123' } });
    fireEvent.input(screen.getByLabelText(/confirm password/i), { target: { value: 'Password123' } });
    fireEvent.click(screen.getByLabelText(/i agree/i));
    fireEvent.submit(screen.getByRole('button', { name: /create account/i }));
    expect(fetchSpy).toHaveBeenCalledWith('/api/auth/register', expect.objectContaining({ method: 'POST' }));
    expect(successSpy).toHaveBeenCalledWith('Account created');
    expect(navigateMock).toHaveBeenCalledWith('/dashboard');
  });

  it('shows error toast on failure', async () => {
    const { fetchSpy, errorSpy } = setup(false, 'Bad');
    fireEvent.input(screen.getByLabelText(/full name/i), { target: { value: 'John Doe' } });
    fireEvent.input(screen.getByLabelText(/email address/i), { target: { value: 'john@example.com' } });
    fireEvent.input(screen.getByLabelText(/^password$/i), { target: { value: 'Password123' } });
    fireEvent.input(screen.getByLabelText(/confirm password/i), { target: { value: 'Password123' } });
    fireEvent.click(screen.getByLabelText(/i agree/i));
    fireEvent.submit(screen.getByRole('button', { name: /create account/i }));
    expect(fetchSpy).toHaveBeenCalled();
    expect(errorSpy).toHaveBeenCalledWith('Bad');
  });

  it('handles duplicate email error', async () => {
    const { fetchSpy, errorSpy } = setup(false, 'Email already exists', 409);
    fireEvent.input(screen.getByLabelText(/full name/i), { target: { value: 'John Doe' } });
    fireEvent.input(screen.getByLabelText(/email address/i), { target: { value: 'john@example.com' } });
    fireEvent.input(screen.getByLabelText(/^password$/i), { target: { value: 'Password123' } });
    fireEvent.input(screen.getByLabelText(/confirm password/i), { target: { value: 'Password123' } });
    fireEvent.click(screen.getByLabelText(/i agree/i));
    fireEvent.submit(screen.getByRole('button', { name: /create account/i }));
    expect(fetchSpy).toHaveBeenCalled();
    expect(errorSpy).toHaveBeenCalledWith('Email already exists');
  });
});
