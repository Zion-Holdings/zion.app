import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from '@/components/ProtectedRoute';
import { useAuth } from '@/hooks/useAuth';
import { useTenantAdminStatus } from '@/hooks/useWhitelabelTenant';
import { useWhitelabel } from '@/context/WhitelabelContext';

jest.mock('@/hooks/useAuth');
jest.mock('@/hooks/useWhitelabelTenant');
jest.mock('@/context/WhitelabelContext');

const mockUseAuth = useAuth as jest.Mock;
const mockUseTenantAdminStatus = useTenantAdminStatus as jest.Mock;
const mockUseWhitelabel = useWhitelabel as jest.Mock;

beforeEach(() => {
  mockUseTenantAdminStatus.mockReturnValue({ isAdmin: false, isLoading: false });
  mockUseWhitelabel.mockReturnValue({ tenant: null });
});

function renderWithRouter(ui: React.ReactElement, initialEntries: string[]) {
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      <Routes>
        <Route path="/login" element={<div data-testid="login-page" />} />
        <Route path="/unauthorized" element={<div data-testid="unauthorized-page" />} />
        <Route path="/protected" element={ui} />
      </Routes>
    </MemoryRouter>
  );
}

describe('ProtectedRoute', () => {
  it('renders children when user is authenticated', () => {
    mockUseAuth.mockReturnValue({ user: { id: '1', userType: 'creator' }, isLoading: false });
    renderWithRouter(
      <ProtectedRoute>
        <div data-testid="child" />
      </ProtectedRoute>,
      ['/protected']
    );
    expect(screen.getByTestId('child')).toBeInTheDocument();
  });

  it('redirects to login when not authenticated', () => {
    mockUseAuth.mockReturnValue({ user: null, isLoading: false });
    renderWithRouter(
      <ProtectedRoute>
        <div data-testid="child" />
      </ProtectedRoute>,
      ['/protected']
    );
    expect(screen.getByTestId('login-page')).toBeInTheDocument();
  });

  it('redirects to unauthorized when adminOnly and user lacks permissions', () => {
    mockUseAuth.mockReturnValue({ user: { id: '1', userType: 'creator' }, isLoading: false });
    renderWithRouter(
      <ProtectedRoute adminOnly>
        <div data-testid="admin" />
      </ProtectedRoute>,
      ['/protected']
    );
    expect(screen.getByTestId('unauthorized-page')).toBeInTheDocument();
  });
});
