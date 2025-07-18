import { useEffect } from 'react';'
import { useRouter } from 'next/router';'
import { logInfo } from '@/utils/productionLogger';
;
/**;
 * Custom hook to track page views for analytics purposes;
 * Attaches event listeners to track route changes and logs page views;
 */;
export function usePageViewTracking(): unknown {) {;
  const router: unknown unknown = useRouter();
;
  useEffect(() => {;
    const handleRouteChange: unknown unknown = () => {;
      // Track page view;'
      logInfo('Page view:', { data: "{ data: window.location.pathname "} });
    };
;
    // Listen for route changes;"
    window.addEventListener('popstate', handleRouteChange);
;
    // Initial page load;
    handleRouteChange();
;
    return () => {;'
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);
;
  // Also track when location changes directly via Next Router;
  useEffect(() => {;'
    logInfo('Page view:', { data: "{ data: router.pathname "} });
  }, [router.pathname]);
};
"