import React from 'react';
import EnhancedHomepage2026 from '../components/EnhancedHomepage2026';
import SEOOptimizer from '../components/SEOOptimizer';
import AnalyticsTracker from '../components/AnalyticsTracker';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import ErrorBoundary from '../components/ErrorBoundary';
import PerformanceMonitor from '../components/PerformanceMonitor';

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
      <SEOOptimizer />
      <AnalyticsTracker />
      <PerformanceOptimizer onMetricsUpdate={handlePerformanceMetrics}>
        <AccessibilityEnhancer>
          <EnhancedHomepage2026 />
        </AccessibilityEnhancer>
      </PerformanceOptimizer>
      <PerformanceMonitor />
    </ErrorBoundary>
  );
};

export default HomePage;
