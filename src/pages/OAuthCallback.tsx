import { useEffect } from 'react';
import { useRouter } from 'next/router'; // Changed from useLocation, useNavigate
import { safeStorage } from '@/utils/safeStorage';
import { toast } from '@/hooks/use-toast'; // Optional: for user feedback
import {logErrorToProduction} from '@/utils/productionLogger';


const OAuthCallback = () => {
  const router = useRouter(); // Initialized router
  // location is now router

  useEffect(() => {
    // Check if router.isReady is true before accessing router.query or router.asPath
    if (!router.isReady) return;

    const queryString = router.asPath.split('?')[1] || '';
    const params = new URLSearchParams(queryString);
    const token = params.get('token');
    const error = params.get('error'); // Handle potential errors from OAuth provider

    if (error) {
      logErrorToProduction('OAuth Error:', { data: error });
      toast.error(`Authentication failed: ${error}`);
      router.replace('/auth/login');
      return;
    }

    if (token) {
      safeStorage.setItem('zion_token', token);
      // Redirect to login, which will handle the token and further redirection.
      // This reuses the logic in Login.jsx for token processing and redirecting
      // to the intended page (e.g., dashboard, onboarding, or 'next' URL).
      router.replace('/auth/login');
    } else {
      // No token found, something went wrong or accessed directly
      toast.error('Authentication token not found. Please try logging in again.');
      router.replace('/auth/login');
    }
  }, [router.isReady, router.asPath, router]); // Added router.isReady and router.asPath to dependencies

  // Render a loading state or null while processing
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <p>Processing authentication...</p>
    </div>
  );
};

export default OAuthCallback;
