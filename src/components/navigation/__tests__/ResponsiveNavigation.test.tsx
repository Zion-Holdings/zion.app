import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ResponsiveNavigation } from '../ResponsiveNavigation';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

jest.mock('@/hooks/useAuth');
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));
jest.mock('react-i18next', () => ({
  useTranslation: jest.fn(),
}));

const mockedUseAuth = useAuth as jest.MockedFunction<typeof useAuth>;
const mockedUseRouter = useRouter as jest.Mock;
const mockedUseTranslation = useTranslation as jest.MockedFunction<typeof useTranslation>;

beforeEach(() => {
  mockedUseAuth.mockReturnValue({ user: null });
  mockedUseRouter.mockReturnValue({ pathname: '/' });
  mockedUseTranslation.mockReturnValue({
    t: (key: string, fallback?: string) => fallback ?? key,
    i18n: { language: 'en', changeLanguage: jest.fn() },
  } as any);
});

test('opens marketplace submenu when trigger is clicked', () => {
  render(<ResponsiveNavigation />);
  const trigger = screen.getByText('Marketplace');
  fireEvent.click(trigger);
  expect(screen.getByText('Overview')).toBeInTheDocument();
  expect(screen.getByText('Categories')).toBeInTheDocument();
});
