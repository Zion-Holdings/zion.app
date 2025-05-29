import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Signup from '@/pages/Signup';
import * as toastHook from '@/hooks/use-toast';
import * as router from 'react-router-dom'; // Used to access the mocked useNavigate
import { mockFetch } from './__mocks__/server';
import { vi } from 'vitest'; // Import vi

// Mock useAuth
vi.mock('@/hooks/useAuth', () => ({
  useAuth: () => ({
    loginWithGoogle: vi.fn(),
    loginWithFacebook: vi.fn(),
    loginWithTwitter: vi.fn(),
    isAuthenticated: false,
    user: null,
  }),
}));

// Mock use-toast
vi.mock('@/hooks/use-toast');

// Mock react-router-dom
const navigateMock = vi.fn(); // Define here to be accessible in tests
vi.mock('react-router-dom', async (importOriginal) => {
  const actual = await importOriginal<typeof router>();
  return {
    ...actual,
    useNavigate: () => navigateMock, // Ensure useNavigate returns our shared mock
  };
});

describe('RegistrationForm', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    navigateMock.mockClear(); // Also clear the specific navigateMock
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
    // navigateMock is already configured by the vi.mock above
    (toastHook.toast.success as vi.Mock).mockImplementation(() => {}); // Cast to vi.Mock
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

    // Wait for async operations to complete
    await vi.waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        expect.stringContaining('/auth/register'),
        expect.objectContaining({ method: 'POST' })
      );
    });
    await vi.waitFor(() => {
      expect(toastHook.toast.success).toHaveBeenCalledWith('Account created');
    });
    await vi.waitFor(() => {
      expect(navigateMock).toHaveBeenCalledWith('/dashboard');
    });
  });

  it('shows error toast on server 400', async () => {
    (toastHook.toast.error as vi.Mock).mockImplementation(() => {}); // Cast to vi.Mock
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

    await vi.waitFor(() => {
      expect(toastHook.toast.error).toHaveBeenCalledWith('Bad');
    });
  });
});
