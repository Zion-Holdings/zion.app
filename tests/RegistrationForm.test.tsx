import { render, screen, fireEvent, waitFor } from '@testing-library/react'; // Added waitFor
import { MemoryRouter } from 'react-router-dom';
import Signup from '@/pages/Signup';
import * as toastHook from '@/hooks/use-toast';
import * as router from 'react-router-dom';
import { mockFetch } from './__mocks__/server';
// import { vi } from 'vitest'; // Removed Vitest import

// Mock useAuth
jest.mock('@/hooks/useAuth', () => ({ // Changed vi.mock to jest.mock
  useAuth: () => ({
    loginWithGoogle: jest.fn(), // Changed vi.fn to jest.fn
    loginWithFacebook: jest.fn(), // Changed vi.fn to jest.fn
    loginWithTwitter: jest.fn(), // Changed vi.fn to jest.fn
    isAuthenticated: false,
    user: null,
  }),
}));

// Mock use-toast
jest.mock('@/hooks/use-toast'); // Changed vi.mock to jest.mock

// Mock react-router-dom
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => {
  const actual = jest.requireActual<typeof router>('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe('RegistrationForm', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Changed vi.clearAllMocks to jest.clearAllMocks
    mockNavigate.mockClear();
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
    (toastHook.toast.success as jest.Mock).mockImplementation(() => {}); // Changed vi.Mock to jest.Mock
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

    await waitFor(() => { // Changed vi.waitFor to waitFor
      expect(global.fetch).toHaveBeenCalledWith(
        expect.stringContaining('/auth/signup'),
        expect.objectContaining({ method: 'POST' })
      );
    });
    await waitFor(() => { // Changed vi.waitFor to waitFor
      expect(toastHook.toast.success).toHaveBeenCalledWith('Account created');
    });
    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/dashboard');
    });
  });

  it('shows error toast on server 400', async () => {
    (toastHook.toast.error as jest.Mock).mockImplementation(() => {}); // Changed vi.Mock to jest.Mock
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

    await waitFor(() => { // Changed vi.waitFor to waitFor
      expect(toastHook.toast.error).toHaveBeenCalledWith('Bad');
    });
  });
});
