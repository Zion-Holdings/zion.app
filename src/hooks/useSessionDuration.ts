import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAnalytics } from '@/context/AnalyticsContext';

/**
 * Track how long a user spends on each page.
 * Sends a `session_duration` event when the route changes or the page unloads.
 */
export function useSessionDuration() {
  const { trackEvent } = useAnalytics();
  const router = useRouter();

  useEffect(() => {
    const start = Date.now();

    const sendDuration = () => {
      const duration = Date.now() - start;
      // duration in milliseconds
      trackEvent('session_duration', { path: router.pathname, duration });
    };

    window.addEventListener('beforeunload', sendDuration);
    return () => {
      sendDuration();
      window.removeEventListener('beforeunload', sendDuration);
    };
    // trackEvent is stable from context
  }, [router.pathname, trackEvent]);
}
