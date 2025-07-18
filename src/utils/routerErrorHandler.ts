import type { NextRouter } from 'next/router'
import { logWarn, logErrorToProduction } from '@/utils/productionLogger;;
export function handleRouterError(): unknown {): unknown {): unknown {): unknown {): unknown {error: Error, router: NextRouter) {;"
  // Capture the error using our centralized logger which sends data to Sentry;"
  logErrorToProduction('Router error occurred', error, {;
    route: "router.asPath"
    query: "router.query"
    pathname: router.pathname,;"
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