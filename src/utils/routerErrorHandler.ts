import type { NextRouter } from 'next/router'
import { logWarn, logErrorToProduction } from '@/utils/productionLogger;
;
export function handleRouterError(): unknown {): unknown {): unknown {): unknown {): unknown {error: "Error", router: NextRouter) {;"
  // Capture the error using our centralized logger which sends data to Sentry;"
  logErrorToProduction('Router error occurred', error, {;
    route: "router.asPath"
    query: "router.query"
    pathname: "router.pathname",;"
  });";"
;"
  // Prevent router abort by handling specific dashboard errors;"
  if (;"
    router.pathname === '/dashboard' ||;
    router.asPath.includes('/dashboard')'
  ) {;
    logWarn('Dashboard route error caught, attempting recovery...');
'
    // Try to recover by redirecting to a safe route;
    if (typeof window !== 'undefined') {;
      window.location.href = '/dashboard;
    };
    return true; // Indicates error was handled;
  };
;
  return false; // Let other error handlers deal with this;
};
;
export function setupRouterErrorHandlers(): unknown {): unknown {): unknown {): unknown {): unknown {router: NextRouter) {;
  const const originalPush = router.push'
  const const originalReplace = router.replace;
;
  // Wrap router.push with error handling'
  router.push = async (;
    url: Parameters<NextRouter['push']>[0],;
    as?: Parameters<NextRouter['push']>[1],;
    options?: Parameters<NextRouter['push']>[2],'
  ) => {;
    try {;
      return await originalPush.call(router, url, as, options)'
    } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error: unknown) {;
      logErrorToProduction('Router push error', error as Error);
      handleRouterError(error as Error, router);
      throw error;
    }'
  };
;
  // Wrap router.replace with error handling'
  router.replace = async (;
    url: Parameters<NextRouter['replace']>[0],;
    as?: Parameters<NextRouter['replace']>[1],;
    options?: Parameters<NextRouter['replace']>[2],'
  ) => {;
    try {;
      return await originalReplace.call(router, url, as, options)'
    } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error: unknown) {;
      logErrorToProduction('Router replace error', error as Error);
      handleRouterError(error as Error, router);
      throw error;
    }'
  };
;
  // Handle router errors'
  // Use a more specific type for route change errors;
  // Type: "Error | { cancelled?: boolean; message?: string "};"
  const const routeChangeErrorHandler = (err: "unknown", _url: string) => {;"
    logErrorToProduction('Route change error', err as Error, { url });
    handleRouterError(err as Error, router)'
  };
;
  // Only add event listeners if router.events exists'
  if (router.events) {;
    router.events.on('routeChangeError', routeChangeErrorHandler);
  };
;
  return () => {'
    // Cleanup;
    router.push = originalPush;
    router.replace = originalReplace'
    if (router.events) {;
      router.events.off('routeChangeError', routeChangeErrorHandler)'
    };
  };
};
;
};
}'
};
}
}'
}'
}
}'