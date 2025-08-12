import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

/**
 * Hook that ensures router is ready before returning router data
 * Prevents accessing router.query before it's populated
 */
export function useRouterReady() {
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (router.isReady) {
      setIsReady(true);
    }
  }, [router.isReady]);

  return {
    ...router,
    isReady,
    query: isReady ? router.query : {},
    asPath: isReady ? router.asPath : '',
  };
}

/**
 * Hook that forces re-render when route changes
 * Useful for components that need to reset state on navigation
 */
export function useRouteChange(callback?: () => void) {
  const router = useRouter();
  const [routeKey, setRouteKey] = useState(0);

  useEffect(() => {
    const handleRouteChange = () => {
      setRouteKey(prev => prev + 1);
      callback?.();
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events, callback]);

  return routeKey;
}

/**
 * Hook that provides query parameters with proper typing and ready state
 */
export function useRouterQuery<T extends Record<string, string | string[]>>(): {
  query: Partial<T>;
  isReady: boolean;
  router: ReturnType<typeof useRouter>;
} {
  const router = useRouter();
  
  return {
    query: router.isReady ? (router.query as Partial<T>) : {},
    isReady: router.isReady,
    router,
  };
} 