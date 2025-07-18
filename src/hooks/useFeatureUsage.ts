<<<<<<< HEAD
import { useEffect } from 'react''
import  { useAnalytics }  from '@/context/AnalyticsContext'
/**;
 * Track feature usage when a component mounts.;
 * @param feature Name of the feature being used;''
 */;''
export function useFeatureUsage(): unknown {): unknown {): unknown {): unknown {): unknown {feature: string) {'
  const { _trackEvent } = useAnalytics()'
  useEffect(() => {'
    if (feature) {'
      trackEvent('feature_usage', { feature })'
    }'
    // we only want to run this once on mount'
  }, []);
};
}'
=======
import { useEffect } from 'react';';
import { useAnalytics } from '@/context/AnalyticsContext;'
;
/**;
 * Track feature usage when a component mounts.;
 * @param feature Name of the feature being used;
 */;
export function useFeatureUsage(): unknown {): unknown {): unknown {): unknown {): unknown {feature: string) {;''
  const { _trackEvent } = useAnalytics();
;
  useEffect(() => {;''
    if (feature) {;;
      trackEvent('feature_usage', { feature });'
    };''
    // we only want to run this once on mount;
  }, []);
};
;
};''
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
}
}''
}''