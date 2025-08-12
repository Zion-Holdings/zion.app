import React from 'react';
import { render, screen, fireEvent, waitFor as _waitFor } from '@testing-library/react';
import { AppHeader } from '@/layout/AppHeader'; // Adjust path as necessary
import { AuthProviderValue } from '@/context/auth/AuthContext'; // Adjust path
import { useAuth } from '@/hooks/useAuth'; // Adjust path
import { useMessaging } from '@/context/MessagingContext'; // Adjust path
import { useRouter } from 'next/router'; // Mock this

// Mock next/router
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

// Mock useAuth hook
jest.mock('@/hooks/useAuth', () => ({
  useAuth: jest.fn(),
}));

// Mock useMessaging hook
jest.mock('@/context/MessagingContext', () => ({
  useMessaging: jest.fn(),
}));

// Mock react-i18next
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key, // Simple mock for t function
    i18n: {
      changeLanguage: jest.fn(),
      language: 'en',
    },
  }),
}));

// Mock lucide-react icons
jest.mock('lucide-react', () => ({
  Menu: () => React.createElement('div', { 'data-testid': 'menu-icon' }),
  X: () => React.createElement('div', { 'data-testid': 'x-icon' }),
}));

describe('AppHeader', () => {
  const mockPush = jest.fn();
  const mockUseRouter = useRouter as jest.Mock;
  const mockUseAuth = useAuth as jest.Mock;
  const mockUseMessaging = useMessaging as jest.Mock;

  beforeEach(() => {
    // Reset mocks before each test
    mockPush.mockClear();
    mockUseRouter.mockReturnValue({
      push: mockPush,
      pathname: '/',
      query: {},
      asPath: '/',
    });
    mockUseAuth.mockReturnValue({
      user: null, // Simulate logged-out user to show Login link
      loading: false,
      isWhitelabel: false,
      // Add other properties expected by useAuth if any
    } as AuthProviderValue); // Cast to AuthProviderValue
    mockUseMessaging.mockReturnValue({
      unreadCount: 0, // Default unread count
    });
  });

  it('should render the Login link when user is not authenticated', () => {
    render(<AppHeader />);
    expect(screen.getByTestId('login-link')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  it('should navigate to /login when Login link is clicked', () => {
    render(<AppHeader />);
    const loginLink = screen.getByTestId('login-link');

    // Check if it's a NavLink (Next.js Link)
    expect(loginLink.tagName).toBe('A'); // next/link renders an <a> tag
    expect(loginLink).toHaveAttribute('href', '/login');

    fireEvent.click(loginLink);
    expect(mockPush).toHaveBeenCalledTimes(1);
    expect(mockPush).toHaveBeenCalledWith('/login');
  });

  it('should not render the Login link when user is authenticated', () => {
    mockUseAuth.mockReturnValue({
      user: { id: '1', name: 'Test User' }, // Simulate logged-in user
      loading: false,
      isWhitelabel: false,
    } as AuthProviderValue);
    render(<AppHeader />);
    expect(screen.queryByTestId('login-link')).not.toBeInTheDocument();
  });
});
