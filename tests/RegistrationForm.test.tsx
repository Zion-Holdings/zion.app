import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Signup from '@/pages/Signup';
import * as toastHook from '@/hooks/use-toast';
import * as router from 'react-router-dom';
import { mockFetch } from './__mocks__/server';

jest.mock('@/hooks/useAuth', () => ({
  useAuth: () => ({
    loginWithGoogle: jest.fn(),
    loginWithFacebook: jest.fn(),
    loginWithTwitter: jest.fn(),
    isAuthenticated: false,
    user: null,
  }),
}));

jest.mock('@/hooks/use-toast');

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: jest.fn(),
}));

describe('RegistrationForm', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders form fields', () => {
    render(
      <MemoryRouter>
        <Signup />
      </MemoryRouter>
    );

    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^password$/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/confirm password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /create account/i })).toBeInTheDocument();
  });

  it('submits valid form', async () => {
    const navigateMock = jest.fn();
    (router.useNavigate as jest.Mock).mockReturnValue(navigateMock);
    (toastHook.toast.success as jest.Mock).mockImplementation(() => {});
    mockFetch({ token: 'jwt' }, 201);

    render(
      <MemoryRouter>
        <Signup />
      </MemoryRouter>
    );

    fireEvent.input(screen.getByLabelText(/full name/i), { target: { value: 'John Doe' } });
    fireEvent.input(screen.getByLabelText(/email address/i), { target: { value: 'john@example.com' } });
    fireEvent.input(screen.getByLabelText(/^password$/i), { target: { value: 'Password123' } });
    fireEvent.input(screen.getByLabelText(/confirm password/i), { target: { value: 'Password123' } });
    fireEvent.click(screen.getByLabelText(/i agree/i));
    fireEvent.submit(screen.getByRole('button', { name: /create account/i }));

    expect(global.fetch).toHaveBeenCalledWith('/api/auth/register', expect.objectContaining({ method: 'POST' }));
    expect(toastHook.toast.success).toHaveBeenCalledWith('Account created');
    expect(navigateMock).toHaveBeenCalledWith('/dashboard');
  });

  it('shows error toast on server 400', async () => {
    (toastHook.toast.error as jest.Mock).mockImplementation(() => {});
    mockFetch({ message: 'Bad' }, 400);

    render(
      <MemoryRouter>
        <Signup />
      </MemoryRouter>
    );

    fireEvent.input(screen.getByLabelText(/full name/i), { target: { value: 'John Doe' } });
    fireEvent.input(screen.getByLabelText(/email address/i), { target: { value: 'john@example.com' } });
    fireEvent.input(screen.getByLabelText(/^password$/i), { target: { value: 'Password123' } });
    fireEvent.input(screen.getByLabelText(/confirm password/i), { target: { value: 'Password123' } });
    fireEvent.click(screen.getByLabelText(/i agree/i));
    fireEvent.submit(screen.getByRole('button', { name: /create account/i }));

    expect(toastHook.toast.error).toHaveBeenCalledWith('Bad');
  });
});

