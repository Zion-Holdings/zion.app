import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { logWarn } from '@/utils/productionLogger';


interface RouteChangeHandlerProps {
  onRouteChange?: (url: string) => void;
  resetScrollOnChange?: boolean;
  forceRerender?: boolean;
}

/**
 * Component that handles route changes and provides hooks for route-based actions
 * Place this at the root of your app or in specific pages that need route change handling
 */
export function RouteChangeHandler({ 
  onRouteChange, 
  resetScrollOnChange = true,
  forceRerender = false 
}: RouteChangeHandlerProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChangeStart = (url: string) => {
      // Clear any pending timeouts or intervals - simplified approach
      if (typeof window !== 'undefined') {
        // Clear intervals up to a reasonable range
        for (let i = 1; i < 100; i++) {
          clearInterval(i);
          clearTimeout(i);
        }
      }
    };

    const handleRouteChangeComplete = (url: string) => {
      // Reset scroll position
      if (resetScrollOnChange) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }

      // Call custom handler
      onRouteChange?.(url);

      // Force rerender if needed
      if (forceRerender) {
        // Trigger a small delay to ensure DOM updates
        setTimeout(() => {
          const event = new CustomEvent('routeChangeComplete', { detail: { url } });
          window.dispatchEvent(event);
        }, 0);
      }
    };

    const handleRouteChangeError = () => {
      logWarn('Route change error occurred');
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    router.events.on('routeChangeError', handleRouteChangeError);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
      router.events.off('routeChangeError', handleRouteChangeError);
    };
  }, [router.events, onRouteChange, resetScrollOnChange, forceRerender]);

  return null;
} 