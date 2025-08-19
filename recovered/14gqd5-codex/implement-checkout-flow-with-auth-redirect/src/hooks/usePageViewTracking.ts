
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Custom hook to track page views for analytics purposes
 * Attaches event listeners to track route changes and logs page views
 */
export function usePageViewTracking() {
  const location = useLocation();

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

  // Also track when location changes directly via React Router
  useEffect(() => {
    console.log('Page view:', location.pathname);
  }, [location.pathname]);
}
