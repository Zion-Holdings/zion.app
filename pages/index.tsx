import Homepage2037 from '../components/Homepage2037';
import SEOOptimizer from '../components/SEOOptimizer';
import AnalyticsTracker from '../components/AnalyticsTracker';
=======
import React from 'react';
import EnhancedHomepage2045 from '../components/EnhancedHomepage2045';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import ErrorBoundary from '../components/ErrorBoundary';
import PerformanceMonitor from '../components/PerformanceMonitor';
import PageLoader from '../components/ui/PageLoader';

const HomePage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time and ensure smooth transition
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ErrorBoundary>
      <PerformanceOptimizer onMetricsUpdate={handlePerformanceMetrics}>
        <AccessibilityEnhancer>
          <EnhancedHomepage2045 />
        </AccessibilityEnhancer>
      </PerformanceOptimizer>
    </ErrorBoundary>
  );
};

export default HomePage;
