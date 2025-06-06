import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { safeStorage } from '@/utils/safeStorage';
import { toast } from '@/hooks/use-toast'; // Optional: for user feedback

const OAuthCallback = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get('token');
    const error = params.get('error'); // Handle potential errors from OAuth provider

    if (error) {
      console.error('OAuth Error:', error);
      toast.error(`Authentication failed: ${error}`);
      navigate('/login', { replace: true });
      return;
    }

    if (token) {
      safeStorage.setItem('auth.token', token);
      // Redirect to login, which will handle the token and further redirection.
      // This reuses the logic in Login.jsx for token processing and redirecting
      // to the intended page (e.g., dashboard, onboarding, or 'next' URL).
      navigate('/login', { replace: true });
    } else {
      // No token found, something went wrong or accessed directly
      toast.error('Authentication token not found. Please try logging in again.');
      navigate('/login', { replace: true });
    }
  }, [location, navigate]);

  // Render a loading state or null while processing
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <p>Processing authentication...</p>
    </div>
  );
};

export default OAuthCallback;
