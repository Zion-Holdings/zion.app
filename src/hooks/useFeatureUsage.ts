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
    // If dependencies are correct, keep as is. Otherwise, add missing dependencies or disable the rule if still not recognized.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
