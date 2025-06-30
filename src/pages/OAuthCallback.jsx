import { useEffect } from 'react';
import { useRouter } from 'next/router'; // Changed from useLocation, useNavigate
import { useAuth } from '@/hooks/useAuth';
import { safeStorage } from '@/utils/safeStorage';
import {logErrorToProduction} from '@/utils/productionLogger';


function decodeToken(token) {
  try {
    const payload = token.split('.')[1];
    return JSON.parse(atob(payload));
  } catch (e) {
    logErrorToProduction('Failed to decode token', { data:  e });
    return null;
  }
}

export default function OAuthCallback() {
  const router = useRouter(); // Initialized router
  // location is now router
  const { setUser } = useAuth();

  useEffect(() => {
    // Check if router.isReady is true before accessing router.query or router.asPath
    if (!router.isReady) return;

    const queryString = router.asPath.split('?')[1] || '';
    const params = new URLSearchParams(queryString);
    const token = params.get('token');
    const next = params.get('next');
    if (token) {
      safeStorage.setItem('zion_token', token);
      if (setUser) {
        const user = decodeToken(token);
        if (user) setUser(user);
      }
      router.replace(next || '/'); // Use router.replace
    }
  }, [router.isReady, router.asPath, router, setUser]); // Added router.isReady and router.asPath to dependencies

  return <div>Loading...</div>;
}
