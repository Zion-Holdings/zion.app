import React, { useEffect, ReactElement } from 'react'; // Added ReactElement
import { useRouter } from 'next/router';
import { useAuth } from '@/hooks/useAuth';
import { safeStorage } from '@/utils/safeStorage';
import { LoginContent } from '@/components/auth/login';
import { AuthLayout } from '@/layout/AuthLayout'; // Keep AuthLayout import for getLayout
import { ErrorBoundary } from 'react-error-boundary';
import LoginErrorFallback from '@/components/auth/login/LoginErrorFallback';
import { useCart } from '@/context/CartContext';
// import { toast } from '@/hooks/use-toast'; // toast seems unused directly here after AuthProvider changes

// Define the main Login component
const LoginPage = () => {
  const { isAuthenticated, user, isLoading } = useAuth();
  const router = useRouter();
  const { dispatch } = useCart(); // dispatch seems unused, consider removing if not needed

  useEffect(() => {
    const queryString = router.asPath.split('?')[1] || '';
    const params = new URLSearchParams(queryString);
    const token = params.get('token');
    if (token) {
      safeStorage.setItem('zion_token', token);
      router.replace(router.pathname, undefined, { shallow: true });
    }
  }, [router]); // Simplified router dependency

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      const redirectTo = router.query.redirectTo || '/dashboard';
      router.replace(Array.isArray(redirectTo) ? redirectTo[0] : redirectTo);
    }
  }, [isAuthenticated, isLoading, router]);

  // Render LoginContent if not authenticated and auth is not loading
  // AuthLayout will be applied by getLayout
  if (!isAuthenticated && !isLoading) {
    return (
      <ErrorBoundary FallbackComponent={LoginErrorFallback}>
        <LoginContent />
      </ErrorBoundary>
    );
  }

  if (isLoading) {
    return <div className="p-4 text-center text-foreground">Loading...</div>;
  }

  return null; // Or some other placeholder if needed before redirect
};

// Assign getLayout to the LoginPage component
LoginPage.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default LoginPage;
