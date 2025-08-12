import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { AppLayout } from '@/layout/AppLayout';
import { useAuth } from '@/hooks/useAuth';
import { useGlobalLoader } from '@/context/GlobalLoaderContext';

jest.mock('@/hooks/useAuth');
jest.mock('@/context/GlobalLoaderContext');
jest.mock('@/layout/PrimaryNav', () => ({ PrimaryNav: () => <div data-testid="header" /> }));
jest.mock('@/components/Footer', () => ({ Footer: () => <div data-testid="footer" /> }));
jest.mock('@/components/EmailVerificationBanner', () => {
  const MockBanner = (props: any) => <div data-testid="verify-banner">{props.userEmail}</div>;
  MockBanner.displayName = 'MockEmailVerificationBanner';
  return MockBanner;
});

const mockUseAuth = useAuth as jest.Mock;
const mockUseGlobalLoader = useGlobalLoader as jest.Mock;

beforeEach(() => {
  mockUseGlobalLoader.mockReturnValue({ loading: false, error: null, setError: jest.fn() });
});

function renderRoute(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="*" element={<AppLayout><div data-testid="content" /></AppLayout>} />
      </Routes>
    </MemoryRouter>
  );
}

describe('AppLayout', () => {
  it('hides header on auth routes', () => {
    mockUseAuth.mockReturnValue({ user: null, isAuthenticated: false, isLoading: false });
    renderRoute('/login');
    expect(screen.queryByTestId('header')).not.toBeInTheDocument();
  });

  it('shows header on non-auth routes', () => {
    mockUseAuth.mockReturnValue({ user: null, isAuthenticated: false, isLoading: false });
    renderRoute('/dashboard');
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });

  it('displays email verification banner when user email not verified', () => {
    mockUseAuth.mockReturnValue({ user: { id: '1', email: 'a@b.com', emailVerified: false }, isAuthenticated: true, isLoading: false });
    renderRoute('/dashboard');
    expect(screen.getByTestId('verify-banner')).toBeInTheDocument();
  });
});
