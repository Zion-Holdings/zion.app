
import { useEffect } from 'react';
import { useRouter } from 'next/router';

/**
 * Custom hook to track page views for analytics purposes
 * Attaches event listeners to track route changes and logs page views
 */
export function usePageViewTracking() {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      // Track page view
      console.log('Page view:', window.location.pathname);
    };
    
    // Listen for route changes
    window.addEventListener('popstate', handleRouteChange);
    
    // Initial page load
    handleRouteChange();
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  // Also track when location changes directly via Next Router
  useEffect(() => {
    console.log('Page view:', router.pathname);
  }, [router.pathname]);
}
