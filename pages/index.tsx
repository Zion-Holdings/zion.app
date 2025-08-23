import React from 'react';
import EnhancedHomepage2045 from '../components/EnhancedHomepage2045';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import ErrorBoundary from '../components/ErrorBoundary';

const HomePage: React.FC = () => {
  const handlePerformanceMetrics = (metrics: any) => {
    // Log performance metrics for monitoring
    if (process.env.NODE_ENV === 'development') {
      console.log('Performance Metrics:', metrics);
    }
    
    // Send to analytics in production
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'performance_metrics', {
        load_time: metrics.loadTime,
        fcp: metrics.firstContentfulPaint,
        lcp: metrics.largestContentfulPaint,
        cls: metrics.cumulativeLayoutShift
      });
    }
  };

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
