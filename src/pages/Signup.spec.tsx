import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Signup from './Signup';
import { AuthContext } from '@/context/auth/AuthContext';
import type { AuthContextType } from '@/types/auth';
import { registerUser } from '@/services/authService';
import { toast } from '@/hooks/use-toast';
import { safeStorage } from '@/utils/safeStorage';
// mailchimpService is imported within Signup.tsx but its usage is conditional.
// Mocking it to prevent potential issues if it's called.
jest.mock('@/integrations/mailchimp', () => ({
  mailchimpService: {
    addSubscriber: jest.fn().mockResolvedValue({}),
    sendWelcomeEmail: jest.fn().mockResolvedValue({}),
  },
}));

// --- Mocks ---
jest.mock('@/services/authService');
jest.mock('@/hooks/use-toast');
jest.mock('@/utils/safeStorage');

const mockNavigate = jest.fn();
// Mock useLocation at the module level for default behavior (will be used by mockUseRouter)
const mockRawLocation = { search: '', pathname: '/signup' }; // Store the raw parts
const mockUseLocationValues = jest.fn(() => mockRawLocation);


jest.mock('next/router', () => ({
  ...jest.requireActual('next/router'), // Import and retain default behavior
  useRouter: () => {
    const { search, pathname } = mockUseLocationValues(); // Get current mocked location values
    return {
      push: mockNavigate,
      replace: mockNavigate, // Assuming replace can also use mockNavigate for testing
      pathname: pathname,
      asPath: pathname + search,
      query: Object.fromEntries(new URLSearchParams(search)),
      isReady: true, // Important for tests that might depend on router.isReady
    };
  },
}));

// Typed mock for registerUser
const mockRegisterUser = registerUser as jest.Mock;

describe('Signup Page', () => {
  let mockSetUser: jest.Mock;
  let mockAuthContextValue: AuthContextType;

  beforeEach(() => {
    jest.clearAllMocks();
    mockSetUser = jest.fn();

    // Reset useLocation mock to default before each test
    // Update the raw location object that mockUseLocationValues will use
    mockRawLocation.search = '';
    mockRawLocation.pathname = '/signup';


    mockAuthContextValue = {
      user: null,
      isAuthenticated: false,
      isLoading: false,
      setUser: mockSetUser,
      login: jest.fn(),
      register: jest.fn(),
      signup: jest.fn(),
      logout: jest.fn(),
      resetPassword: jest.fn(),
      updateProfile: jest.fn(),
      loginWithGoogle: jest.fn(),
      loginWithFacebook: jest.fn(),
      loginWithTwitter: jest.fn(),
      loginWithWeb3: jest.fn(),
      onboardingStep: 0,
      setOnboardingStep: jest.fn(),
      tokens: null,
    };
  });

  const renderSignup = (initialEntries = ['/signup']) => {
    return render(
      <MemoryRouter initialEntries={initialEntries}>
        <AuthContext.Provider value={mockAuthContextValue}>
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<div>Home Page</div>} />
            <Route path="/dashboard" element={<div>Dashboard Page</div>} />
            <Route path="/login" element={<div>Login Page</div>} />
            <Route path="/custom-path" element={<div>Custom Path Page</div>} />
          </Routes>
        </AuthContext.Provider>
      </MemoryRouter>
    );
  };

  const fillForm = (overrideEmail?: string) => {
    fireEvent.input(screen.getByTestId('display-name-input'), { target: { value: 'Test User' } });
    fireEvent.input(screen.getByTestId('email-input'), { target: { value: overrideEmail || 'test@example.com' } });
    fireEvent.input(screen.getByTestId('password-input'), { target: { value: 'Password123' } });
    fireEvent.input(screen.getByTestId('confirm-password-input'), { target: { value: 'Password123' } });
    // Click the "I agree to the Terms of Service and Privacy Policy" checkbox
    const termsCheckbox = screen.getByRole('checkbox', { name: /i agree to the terms of service/i });
    fireEvent.click(termsCheckbox);
  };

  const fillFormWithNewsletter = (overrideEmail?: string) => {
    fillForm(overrideEmail);
    // Click the newsletter checkbox
     const newsletterCheckbox = screen.getByRole('checkbox', { name: /subscribe to our newsletter/i });
     fireEvent.click(newsletterCheckbox);
  };


  it('should successfully register, store token, update context, and redirect to home', async () => {
    const mockToken = 'test-auth-token';
    const mockUser = { id: '1', email: 'test@example.com', name: 'Test User' };
    mockRegisterUser.mockResolvedValue({
      res: { ok: true, status: 201 },
      data: { token: mockToken, user: mockUser },
    });

    renderSignup();
    fillFormWithNewsletter(); // Includes newsletter opt-in
    fireEvent.click(screen.getByTestId('create-account-button'));

    await waitFor(() => {
      expect(safeStorage.setItem).toHaveBeenCalledWith('authToken', mockToken);
    });
    expect(mockSetUser).toHaveBeenCalledWith(mockUser);
    expect(mockNavigate).toHaveBeenCalledWith('/', { replace: true });
    expect(toast.success).toHaveBeenCalledWith('Registration successful! Welcome!');

    // Check Mailchimp calls because newsletter was opted-in
    const { mailchimpService } = jest.requireMock('@/integrations/mailchimp');
    expect(mailchimpService.addSubscriber).toHaveBeenCalledWith({
      email: 'test@example.com',
      mergeFields: { FNAME: 'Test User' }
    });
    expect(mailchimpService.sendWelcomeEmail).toHaveBeenCalledWith('test@example.com', 'NEW10');
  });

  it('should show "Email already registered – please login." toast for duplicate email error', async () => {
    mockRegisterUser.mockResolvedValue({
      res: { ok: false, status: 409 },
      data: { message: 'Email is already registered', code: 'EMAIL_EXISTS' },
    });

    renderSignup();
    fillForm();
    fireEvent.click(screen.getByTestId('create-account-button'));

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith('Email already registered – please login.');
    });
    expect(screen.getByText('Email is already registered')).toBeInTheDocument(); // Check form field error
    expect(safeStorage.setItem).not.toHaveBeenCalled();
    expect(mockSetUser).not.toHaveBeenCalled();
    expect(mockNavigate).not.toHaveBeenCalled();
  });

  it('should redirect to "next" path on successful registration if provided', async () => {
    const mockToken = 'test-auth-token-next';
    const mockUser = { id: '2', email: 'nextuser@example.com', name: 'Next User' };
    mockRegisterUser.mockResolvedValue({
      res: { ok: true, status: 201 },
      data: { token: mockToken, user: mockUser },
    });

    // Mock useLocation to return a search string with a 'next' param for this specific test
    // Update the raw location object for this specific test
    mockRawLocation.search = '?next=/custom-path';
    mockRawLocation.pathname = '/signup';


    renderSignup(['/signup?next=/custom-path']); // Initial entry for MemoryRouter
    fillForm('nextuser@example.com'); // Use a unique email for this test
    fireEvent.click(screen.getByTestId('create-account-button'));

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/custom-path', { replace: true });
    });
    expect(safeStorage.setItem).toHaveBeenCalledWith('authToken', mockToken);
    expect(mockSetUser).toHaveBeenCalledWith(mockUser);
    expect(toast.success).toHaveBeenCalledWith('Registration successful! Welcome!');
  });

  it('should show password mismatch error if passwords do not match', async () => {
    renderSignup();
    // Fill form with mismatched passwords
    fireEvent.input(screen.getByTestId('display-name-input'), { target: { value: 'Test User' } });
    fireEvent.input(screen.getByTestId('email-input'), { target: { value: 'test@example.com' } });
    fireEvent.input(screen.getByTestId('password-input'), { target: { value: 'Password123' } });
    fireEvent.input(screen.getByTestId('confirm-password-input'), { target: { value: 'PasswordMismatch' } });
    const termsCheckbox = screen.getByRole('checkbox', { name: /i agree to the terms of service/i });
    fireEvent.click(termsCheckbox);

    fireEvent.click(screen.getByTestId('create-account-button'));

    await waitFor(() => {
      // This specific message comes from the zod schema refinement check in Signup.tsx
      // which calls toast.error directly before attempting API call.
      expect(toast.error).toHaveBeenCalledWith("Passwords do not match");
    });
    // Also check that the form field error is displayed
     expect(screen.getByText("Passwords do not match")).toBeInTheDocument();

    expect(mockRegisterUser).not.toHaveBeenCalled(); // API call should not be made
    expect(safeStorage.setItem).not.toHaveBeenCalled();
    expect(mockSetUser).not.toHaveBeenCalled();
  });

  it('should show generic error toast for 500 server error', async () => {
    mockRegisterUser.mockResolvedValue({
      res: { ok: false, status: 500 },
      data: { message: 'Internal Server Error' },
    });

    renderSignup();
    fillForm();
    fireEvent.click(screen.getByTestId('create-account-button'));

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith('Internal Server Error');
    });
    // Check that the error is displayed in the form's root error area
    expect(screen.getByText('Internal Server Error')).toBeInTheDocument();
    expect(safeStorage.setItem).not.toHaveBeenCalled();
    expect(mockSetUser).not.toHaveBeenCalled();
  });

  it('should not call mailchimpService if newsletter is not opted in', async () => {
    const mockToken = 'test-auth-token-no-newsletter';
    const mockUser = { id: '3', email: 'nonewsletter@example.com', name: 'No Newsletter User' };
    mockRegisterUser.mockResolvedValue({
      res: { ok: true, status: 201 },
      data: { token: mockToken, user: mockUser },
    });

    renderSignup();
    fillForm('nonewsletter@example.com'); // Does not click newsletter checkbox
    fireEvent.click(screen.getByTestId('create-account-button'));

    await waitFor(() => {
      expect(toast.success).toHaveBeenCalledWith('Registration successful! Welcome!');
    });

    const { mailchimpService } = jest.requireMock('@/integrations/mailchimp');
    expect(mailchimpService.addSubscriber).not.toHaveBeenCalled();
    expect(mailchimpService.sendWelcomeEmail).not.toHaveBeenCalled();
  });

  it('should display validation error for empty required fields', async () => {
    renderSignup();
    fireEvent.click(screen.getByTestId('create-account-button')); // Submit with empty form

    await waitFor(() => {
      // Check for some of the expected validation messages
      expect(screen.getByText('Full Name must be at least 2 characters')).toBeInTheDocument();
      expect(screen.getByText('Please enter a valid email')).toBeInTheDocument();
      expect(screen.getByText('Password must be at least 8 characters')).toBeInTheDocument();
      // For terms accepted:
      expect(screen.getByText('You must accept the terms and conditions')).toBeInTheDocument();
    });
    expect(mockRegisterUser).not.toHaveBeenCalled();
  });
});
