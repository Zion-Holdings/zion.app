import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/hooks/useAuth';
import { safeStorage } from '@/utils/safeStorage';
import { LoginContent } from '@/components/auth/login';
import { ErrorBoundary } from 'react-error-boundary';
import LoginErrorFallback from '@/components/auth/login/LoginErrorFallback';
import { useCart } from '@/context/CartContext';
import { SAMPLE_EQUIPMENT } from './EquipmentDetail';
import { toast } from '@/hooks/use-toast';

export default function Login() {
  const { isAuthenticated, user, isLoading } = useAuth();
  const router = useRouter();
  const { dispatch } = useCart();

  useEffect(() => {
    // This effect handles token processing (e.g., from magic link)
    // It runs when component mounts or router.asPath changes (for query params)
    const queryString = router.asPath.split('?')[1] || '';
    const params = new URLSearchParams(queryString);
    const token = params.get('token');
    if (token) {
      safeStorage.setItem('auth.token', token);
      // Clear token from URL to prevent re-processing and clean up history
      // The actual authentication state will update via useAuth's listeners,
      // which should trigger the other useEffect.
      router.replace(router.pathname, undefined, { shallow: true });
    }
  }, [router.asPath, router]);

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      router.replace('/dashboard');
    }
  }, [isAuthenticated, isLoading, router]);

  // Render LoginContent if not authenticated and auth is not loading
  if (!isAuthenticated && !isLoading) {
    return (
      <ErrorBoundary FallbackComponent={LoginErrorFallback}>
        <LoginContent />
      </ErrorBoundary>
    );
  }

  // Optional: Render a loading indicator while isLoading is true
  if (isLoading) {
    return <div className="p-4 text-center text-foreground">Loading...</div>; // Or a proper loading spinner component
  }

  // If authenticated and isLoading is false, the useEffect above should have navigated.
  // Return null or a minimal layout if needed, though direct navigation is preferred.
  return null;
}
