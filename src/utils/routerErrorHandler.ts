import { NextRouter } from 'next/router';
import { logError } from './productionLogger';

export function handleRouterError(error: Error, router: NextRouter) {
  logError('Router error occurred:', error, {
    route: router.asPath,
    query: router.query,
    pathname: router.pathname,
  });

  // Prevent router abort by handling specific dashboard errors
  if (router.pathname === '/dashboard' || router.asPath.includes('/dashboard')) {
    console.warn('Dashboard route error caught, attempting recovery...');
    
    // Try to recover by redirecting to a safe route
    if (typeof window !== 'undefined') {
      window.location.href = '/dashboard';
    }
    return true; // Indicates error was handled
  }

  return false; // Let other error handlers deal with this
}

export function setupRouterErrorHandlers(router: NextRouter) {
  const originalPush = router.push;
  const originalReplace = router.replace;

  // Wrap router.push with error handling
  router.push = async (url, as, options) => {
    try {
      return await originalPush.call(router, url, as, options);
    } catch (error) {
      console.error('Router push error:', error);
      handleRouterError(error as Error, router);
      throw error;
    }
  };

  // Wrap router.replace with error handling
  router.replace = async (url, as, options) => {
    try {
      return await originalReplace.call(router, url, as, options);
    } catch (error) {
      console.error('Router replace error:', error);
      handleRouterError(error as Error, router);
      throw error;
    }
  };

  // Handle router errors
  router.events.on('routeChangeError', (err, url) => {
    console.error('Route change error:', err, 'URL:', url);
    handleRouterError(err, router);
  });

  return () => {
    // Cleanup
    router.push = originalPush;
    router.replace = originalReplace;
    router.events.off('routeChangeError', handleRouterError);
  };
} 