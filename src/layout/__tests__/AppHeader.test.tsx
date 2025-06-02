import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom'; // Needed because AppHeader contains NavLink/Link components via MainNavigation
import { AppHeader } from '../AppHeader'; // Adjust path as necessary
import { useAuth } from '@/hooks/useAuth';
import type { AuthContextType } from '@/types/auth';
import { useTranslation } from 'react-i18next';
import { useIsMobile } from '@/hooks/use-mobile';
import { useMessaging } from '@/context/MessagingContext';

// Mock hooks
jest.mock('@/hooks/useAuth');
const mockedUseAuth = useAuth as jest.MockedFunction<typeof useAuth>;

jest.mock('react-i18next', () => ({
  useTranslation: jest.fn(),
}));
const mockedUseTranslation = useTranslation as jest.MockedFunction<typeof useTranslation>;

jest.mock('@/hooks/use-mobile');
const mockedUseIsMobile = useIsMobile as jest.MockedFunction<typeof useIsMobile>;

jest.mock('@/context/MessagingContext');
const mockedUseMessaging = useMessaging as jest.MockedFunction<typeof useMessaging>;

// Mock child components that are not the focus of these tests
jest.mock('@/components/header/Logo', () => ({
  Logo: () => <div data-testid="logo">Logo</div>,
}));

jest.mock('../MainNavigation', () => ({
  MainNavigation: () => <nav data-testid="main-navigation">Main Navigation</nav>,
}));

jest.mock('@/components/header/LanguageSelector', () => ({
  LanguageSelector: () => <div data-testid="language-selector">Language Selector</div>,
}));

jest.mock('@/components/loyalty/PointsBadge', () => ({
  PointsBadge: () => <div data-testid="points-badge">Points Badge</div>,
}));

// Mock AvatarMenu to check for its presence by a data-testid
jest.mock('@/components/header/AvatarMenu', () => ({
  AvatarMenu: () => <div data-testid="avatar-menu">AvatarMenu</div>,
}));

// Mock MobileMenu and MobileBottomNav as they are complex and not central to these tests
jest.mock('@/components/header/MobileMenu', () => ({
  MobileMenu: () => <div data-testid="mobile-menu">Mobile Menu</div>,
}));
jest.mock('@/components/header/MobileBottomNav', () => ({
    MobileBottomNav: () => <div data-testid="mobile-bottom-nav">Mobile Bottom Nav</div>,
  }));


describe('AppHeader', () => {
  const mockT = jest.fn((key: string) => key) as jest.MockedFunction<(key: string) => string>; // Simple translation mock

  beforeEach(() => {
    mockedUseAuth.mockClear();
    mockedUseTranslation.mockClear();
    mockedUseIsMobile.mockClear();
    mockedUseMessaging.mockClear();
    mockT.mockClear();

    // Default mocks
    mockedUseTranslation.mockReturnValue({ t: mockT as any, i18n: {} as any } as any);
    mockedUseIsMobile.mockReturnValue(false); // Default to not mobile
    mockedUseMessaging.mockReturnValue({
      messages: [],
      conversations: [],
      unreadCount: 0,
      activeConversation: null,
      activeMessages: [],
      isLoading: false,
      sendMessage: jest.fn(),
      createConversation: jest.fn(),
      markAsRead: jest.fn(),
      setActiveConversation: jest.fn(),
      fetchConversations: jest.fn(),
      loadMessages: jest.fn(),
    }); // Default no unread messages
  });

  describe('when user is logged in', () => {
    beforeEach(() => {
      mockedUseAuth.mockReturnValue({
        user: { id: '1', displayName: 'Test User', name: 'Test User', email: 'test@example.com' },
        isLoading: false,
        // ... other properties returned by useAuth
      } as unknown as AuthContextType);
    });

    it('renders LanguageSelector', () => {
      render(<MemoryRouter><AppHeader /></MemoryRouter>);
      expect(screen.getByTestId('language-selector')).toBeInTheDocument();
    });

    it('renders AvatarMenu', () => {
      render(<MemoryRouter><AppHeader /></MemoryRouter>);
      expect(screen.getByTestId('avatar-menu')).toBeInTheDocument();
    });

    it('does NOT render the old "Hello, {firstName}!" greeting', () => {
      render(<MemoryRouter><AppHeader /></MemoryRouter>);
      // The greeting span had data-testid="header-greeting"
      // If AvatarMenu is rendered, the greeting span should not be.
      expect(screen.queryByTestId('header-greeting')).not.toBeInTheDocument();
      expect(screen.queryByText(/Hello, Test!/i)).not.toBeInTheDocument();
    });

    it('does NOT render the Login link', () => {
      render(<MemoryRouter><AppHeader /></MemoryRouter>);
      expect(screen.queryByTestId('login-link')).not.toBeInTheDocument();
    });
  });

  describe('when user is logged out', () => {
    beforeEach(() => {
      mockedUseAuth.mockReturnValue({
        user: null,
        isLoading: false,
        // ... other properties
      } as unknown as AuthContextType);
    });

    it('does NOT render AvatarMenu', () => {
      render(<MemoryRouter><AppHeader /></MemoryRouter>);
      expect(screen.queryByTestId('avatar-menu')).not.toBeInTheDocument();
    });

    it('renders the Login link', () => {
      render(<MemoryRouter><AppHeader /></MemoryRouter>);
      const loginLink = screen.getByTestId('login-link');
      expect(loginLink).toBeInTheDocument();
      expect(loginLink).toHaveAttribute('href', '/login');
    });

    it('renders LanguageSelector (assuming it is shown for logged-out users too)', () => {
      render(<MemoryRouter><AppHeader /></MemoryRouter>);
      expect(screen.getByTestId('language-selector')).toBeInTheDocument();
    });
  });
});
