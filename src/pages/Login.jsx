import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { safeStorage } from '@/utils/safeStorage';
import { LoginContent } from '@/components/auth/login';
import ErrorBoundary from '@/components/ErrorBoundary';
import { useCart } from '@/context/CartContext';
import { SAMPLE_EQUIPMENT } from './EquipmentDetail';
import { toast } from '@/hooks/use-toast';

export default function Login() {
  const { isAuthenticated, user, isLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { dispatch } = useCart();

  useEffect(() => {
    // This effect handles token processing (e.g., from magic link)
    // It runs when component mounts or location.search changes
    const params = new URLSearchParams(location.search);
    const token = params.get('token');
    if (token) {
      safeStorage.setItem('auth.token', token);
      // Clear token from URL to prevent re-processing and clean up history
      // The actual authentication state will update via useAuth's listeners,
      // which should trigger the other useEffect.
      navigate(location.pathname, { replace: true });
    }
  }, [location.search, navigate]);

  useEffect(() => {
    // This effect handles navigation and actions AFTER authentication state is known
    if (isLoading) { // Don't do anything while auth state is loading
      return;
    }

    if (isAuthenticated) {
      const params = new URLSearchParams(location.search);
      const nextUrl = params.get('next');
      const message = params.get('msg');

      if (message === 'login_required' && nextUrl) {
        // Extract product ID from nextUrl. Example: /equipment/pro-camera-x1000
        // Assumes product ID is the last segment of the path before any query params.
        const pathBeforeQuery = nextUrl.split('?')[0];
        const pathSegments = pathBeforeQuery.split('/');
        const productId = pathSegments[pathSegments.length - 1];

        const product = productId && SAMPLE_EQUIPMENT[productId] ? SAMPLE_EQUIPMENT[productId] : null;

        if (product) {
          dispatch({
            type: 'ADD_ITEM',
            payload: { id: product.id, name: product.name, price: product.price, quantity: 1 }
          });
          toast.success(`${product.name} added to cart!`);
          // Clear relevant query params before navigating to cart
          params.delete('next');
          params.delete('msg');
          const queryString = params.toString();
          navigate(`/cart${queryString ? '?' + queryString : ''}`, { replace: true });
        } else {
          toast.error('Item details not found for cart. Redirecting to original page.');
          // Clear our specific message before navigating
          params.delete('msg');
          const queryString = params.toString();
          navigate(nextUrl.split('?')[0] + `${queryString ? '?' + queryString : ''}` , { replace: true });
        }
      } else if (nextUrl) {
        navigate(nextUrl, { replace: true });
      } else if (user?.profileComplete) {
        navigate('/', { replace: true });
      } else {
        // User is authenticated but profile is not complete
        navigate('/onboarding', { replace: true });
      }
    }
    // If not authenticated and not loading, LoginContent will be rendered.
  }, [isAuthenticated, user, isLoading, navigate, dispatch, location.search, location.pathname]);

  // Render LoginContent if not authenticated and auth is not loading
  if (!isAuthenticated && !isLoading) {
    return (
      <ErrorBoundary fallbackRender={(error) => (
        <div style={{ padding: '20px', textAlign: 'center', color: 'red' }}>
          <h1>Login Error</h1>
          <p>Sorry, the login form could not be displayed due to an error.</p>
          {process.env.NODE_ENV === 'development' && (
            <pre>{error.stack}</pre>
          )}
        </div>
      )}>
        <LoginContent />
      </ErrorBoundary>
    );
  }

  // Optional: Render a loading indicator while isLoading is true
  if (isLoading) {
    return <div>Loading...</div>; // Or a proper loading spinner component
  }

  // If authenticated and isLoading is false, the useEffect above should have navigated.
  // Return null or a minimal layout if needed, though direct navigation is preferred.
  return null;
}
