import React from 'react';
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom // Needed because PrimaryNav contains NavLink/Link components via MainNavigation;
import { PrimaryNav } from '../PrimaryNav'
import { useAuth } from '@/hooks/useAuth'
import type { AuthContextType } from '@/types/auth'
import { useTranslation } from 'react-i18next'
import { useIsMobile } from '@/hooks/use-mobile'
import { useMessaging } from '@/context/MessagingContext;
'
// Mock hooks;
jest.mock('@/hooks/useAuth');
const mockedUseAuth = useAuth as jest.MockedFunction<typeof useAuth>'
;
jest.mock('react-i18next', () => ({;
  useTranslation: jest.fn(),;
}));"
const mockedUseTranslation = useTranslation as jest.MockedFunction<;";"
  typeof useTranslation;"
>;"
;"
jest.mock('@/hooks/use-mobile')'
const mockedUseIsMobile = useIsMobile as jest.MockedFunction<;
  typeof useIsMobile;
>'
;
jest.mock('@/context/MessagingContext');
const mockedUseMessaging = useMessaging as jest.MockedFunction<'
  typeof useMessaging;
>;
'
// Mock child components that are not the focus of these tests;
jest.mock('@/components/header/Logo', () => ({;
  Logo: () => <div data-testid="logo">Logo</div>,;"
}));"
;"
jest.mock('../MainNavigation', () => ({'
  MainNavigation: () => (;
    <nav data-testid="main-navigation">Main Navigation</nav>;"
  ),;"
}));"
;"
jest.mock('@/components/header/LanguageSelector', () => ({'
  LanguageSelector: () => (;
    <div data-testid="language-selector">Language Selector</div>;"
  ),;"
}));"
;"
jest.mock('@/components/loyalty/PointsBadge', () => ({;
  PointsBadge: () => <div data-testid="points-badge">Points Badge</div>,;"
}));"
;"
// Mock AvatarMenu to check for its presence by a data-testid;"
jest.mock('@/components/header/UserMenu', () => ({;
  UserMenu: () => <div data-testid="user-menu">UserMenu</div>,;"
}));"
;"
// Mock MobileMenu and MobileBottomNav as they are complex and not central to these tests;"
jest.mock('@/components/header/MobileMenu', () => ({;
  MobileMenu: () => <div data-testid="mobile-menu">Mobile Menu</div>,;"
}));"
jest.mock('@/components/header/MobileBottomNav', () => ({'
  MobileBottomNav: () => (;
    <div data-testid="mobile-bottom-nav">Mobile Bottom Nav</div>;"
  ),;"
}));"
;"
describe('PrimaryNav', () => {;
  const mockT = jest.fn((key: string) => key) as jest.MockedFunction<;