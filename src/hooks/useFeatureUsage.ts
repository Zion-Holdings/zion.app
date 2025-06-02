import { useEffect } from 'react';
import { useAnalytics } from '@/context/AnalyticsContext';

/**
 * Track feature usage when a component mounts.
 * @param feature Name of the feature being used
 */
export function useFeatureUsage(feature: string) {
  const { trackEvent } = useAnalytics();

  useEffect(() => {
    if (feature) {
      trackEvent('feature_usage', { feature });
    }
    // we only want to run this once on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
