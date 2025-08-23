import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'; // Changed from useNavigate, useLocation
import { useAuth } from '@/hooks/useAuth';
import { safeStorage } from '@/utils/safeStorage';
import { LoginContent } from '@/components/auth/login';
import { AuthLayout } from '@/layout';
import { ErrorBoundary } from 'react-error-boundary';
import LoginErrorFallback from '@/components/auth/login/LoginErrorFallback';
import { useCart } from '@/context/CartContext';
import { toast } from '@/hooks/use-toast';
import { LoadingSpinner } from '@/components/ui/enhanced-loading-states';

export default function Login() {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter(); // Initialized router
  // location is now router
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { dispatch } = useCart(); // Reserved for future cart handling
  const [authTimedOut, setAuthTimedOut] = useState(false);

  // If auth status check takes too long, show a fallback message
  useEffect(() => {
    if (!isLoading) return;
    const timer = setTimeout(() => setAuthTimedOut(true), 10000);
    return () => clearTimeout(timer);
  }, [isLoading]);

  const resendVerificationEmail = async () => {
    try {
      await fetch('/api/auth/resend-verification-email', { method: 'POST' });
      toast({ title: 'Verification email sent' });
    } catch (err) {
      toast({ title: 'Failed to resend email', variant: 'destructive' });
    }
  };

  useEffect(() => {
    // This effect handles token processing (e.g., from magic link)
    // It runs when component mounts or router.asPath (containing query) changes
    const queryString = router.asPath.split('?')[1] || '';
    const params = new URLSearchParams(queryString);
    const token = params.get('token');
    if (token) {
      safeStorage.setItem('zion_token', token);
      // Clear token from URL to prevent re-processing and clean up history
      // The actual authentication state will update via useAuth's listeners,
      // which should trigger the other useEffect.
      router.replace(router.pathname, undefined, { shallow: true }); // Use router.replace with shallow routing
    }
  }, [router.asPath, router.pathname, router]); // Depend on router.asPath

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      router.replace('/dashboard'); // Use router.replace
    }
  }, [isAuthenticated, isLoading, router]);

  // Render LoginContent if not authenticated and auth is not loading
  if (!isAuthenticated && !isLoading) {
    return (
      <AuthLayout>
        <ErrorBoundary FallbackComponent={LoginErrorFallback}>
          <LoginContent />
        </ErrorBoundary>
      </AuthLayout>
    );
  }

  // Show fallback if auth status check timed out
  if (authTimedOut && isLoading) {
    return (
      <AuthLayout>
        <div className="p-4 text-center space-y-4 text-foreground">
          <p>Checking login status…</p>
          <p>
            This is taking longer than expected. If you recently signed up, your
            email may still need verification.
          </p>
          <button
            onClick={resendVerificationEmail}
            className="underline text-primary"
          >
            Resend verification email
          </button>
        </div>
      </AuthLayout>
    );
  }

  // Optional: Render a loading indicator while isLoading is true
  if (isLoading) {
    return (
      <div className="p-4 text-center text-foreground">
        <LoadingSpinner variant="primary" />
      </div>
    );
  }

  // If authenticated and isLoading is false, the useEffect above should have navigated.
  // Return null or a minimal layout if needed, though direct navigation is preferred.
  return null;
}
