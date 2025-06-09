import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import AuthGuard from './AuthGuard'; // Default import
import type { AppRouteObject } from '@/routes/config'; // Assuming path

// Mock useAuth hook
const mockUseAuth = jest.fn();
jest.mock('@/hooks/useAuth', () => ({
  useAuth: () => mockUseAuth(),
}));

// Mock next/router
const mockRouterReplace = jest.fn();
const mockRouter = {
  pathname: '/',
  asPath: '/',
  replace: mockRouterReplace,
};
jest.mock('next/router', () => ({
  useRouter: () => mockRouter,
}));

// Mock children component
const MockChildren = () => <div data-testid="mock-children">Protected Content</div>;

describe('AuthGuard', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    // Reset router paths for each test if necessary, or set specific ones per test
    mockRouter.pathname = '/';
    mockRouter.asPath = '/';
  });

  const defaultRoute: AppRouteObject = { requiresAuth: true, path: '/protected' };

  it('should render nothing (null) when auth state is loading', () => {
    mockUseAuth.mockReturnValue({ user: null, isLoading: true });
    const { container } = render(<AuthGuard route={defaultRoute}><MockChildren /></AuthGuard>);
    expect(container.firstChild).toBeNull();
    expect(screen.queryByTestId('mock-children')).not.toBeInTheDocument();
  });

  describe('Authenticated User', () => {
    beforeEach(() => {
      mockUseAuth.mockReturnValue({ user: { id: 'test-user' }, isLoading: false });
    });

    it('should render children on a protected route if authenticated', () => {
      mockRouter.pathname = '/protected';
      mockRouter.asPath = '/protected';
      render(<AuthGuard route={{ ...defaultRoute, path: '/protected' }}><MockChildren /></AuthGuard>);
      expect(screen.getByTestId('mock-children')).toBeInTheDocument();
      expect(mockRouterReplace).not.toHaveBeenCalled();
    });

    it('should redirect to /marketplace if authenticated and on /login page', async () => {
      mockRouter.pathname = '/login';
      mockRouter.asPath = '/login';
      const { container } = render(<AuthGuard route={{ path: '/login', requiresAuth: false }}><MockChildren /></AuthGuard>);

      await waitFor(() => {
        expect(mockRouterReplace).toHaveBeenCalledWith('/marketplace');
      });
      expect(container.firstChild).toBeNull(); // Renders null while redirecting
    });

    it('should redirect to /marketplace if authenticated and on /register page', async () => {
      mockRouter.pathname = '/register';
      mockRouter.asPath = '/register';
      render(<AuthGuard route={{ path: '/register', requiresAuth: false }}><MockChildren /></AuthGuard>);
      await waitFor(() => {
        expect(mockRouterReplace).toHaveBeenCalledWith('/marketplace');
      });
    });
  });

  describe('Unauthenticated User', () => {
    beforeEach(() => {
      mockUseAuth.mockReturnValue({ user: null, isLoading: false });
    });

    it('should redirect to /login if unauthenticated and on a protected route', async () => {
      mockRouter.pathname = '/protected-path';
      mockRouter.asPath = '/protected-path?query=1';
      const routeConfig: AppRouteObject = { path: '/protected-path', requiresAuth: true };
      const { container } = render(<AuthGuard route={routeConfig}><MockChildren /></AuthGuard>);

      const expectedRedirectUrl = `/login?next=${encodeURIComponent('/protected-path?query=1')}`;
      await waitFor(() => {
        expect(mockRouterReplace).toHaveBeenCalledWith(expectedRedirectUrl);
      });
      expect(container.firstChild).toBeNull(); // Renders null while redirecting
    });

    it('should render children if unauthenticated and on a public route', () => {
      mockRouter.pathname = '/public';
      mockRouter.asPath = '/public';
      const routeConfig: AppRouteObject = { path: '/public', requiresAuth: false };
      render(<AuthGuard route={routeConfig}><MockChildren /></AuthGuard>);
      expect(screen.getByTestId('mock-children')).toBeInTheDocument();
      expect(mockRouterReplace).not.toHaveBeenCalled();
    });

    it('should use router.pathname as fallback if route.path is undefined for auth pages check', async () => {
      mockUseAuth.mockReturnValue({ user: { id: 'test-user' }, isLoading: false }); // Authenticated
      mockRouter.pathname = '/login'; // Current actual path
      mockRouter.asPath = '/login';
      // Route object where path is undefined, so AuthGuard should use router.pathname
      const routeConfig: AppRouteObject = { requiresAuth: false };
      render(<AuthGuard route={routeConfig}><MockChildren /></AuthGuard>);

      await waitFor(() => {
        expect(mockRouterReplace).toHaveBeenCalledWith('/marketplace');
      });
    });
  });
});
