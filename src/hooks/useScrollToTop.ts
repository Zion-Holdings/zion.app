import { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Enhanced scroll to top hook with smooth scrolling and better UX
 */
export function useScrollToTop() {
  const { pathname } = useLocation();

  const scrollToTop = useCallback((behavior: ScrollBehavior = 'smooth') => {
    // Check if smooth scrolling is supported
    if ('scrollBehavior' in document.documentElement.style) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior
      });
    } else {
      // Fallback for older browsers
      window.scrollTo(0, 0);
    }
  }, []);

  useEffect(() => {
    // Use smooth scrolling for route changes
    scrollToTop('smooth');
  }, [pathname, scrollToTop]);

  // Expose the function for manual use
  return { scrollToTop };
}
