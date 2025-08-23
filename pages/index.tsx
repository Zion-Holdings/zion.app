import React from 'react';
import Homepage2045 from '../components/Homepage2045';
import SEOOptimizer from '../components/SEOOptimizer';
import AnalyticsTracker from '../components/AnalyticsTracker';
import ErrorBoundary from '../components/ErrorBoundary';
import PerformanceMonitor from '../components/PerformanceMonitor';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';

const HomePage: React.FC = () => {
  return (
    <ErrorBoundary>
      <SEOOptimizer />
      <AnalyticsTracker />
      <Homepage2045 />
      <PerformanceMonitor showUI={true} />
      <AccessibilityEnhancer>
        <PerformanceOptimizer showMetrics={true} autoOptimize={true} />
      </AccessibilityEnhancer>
    </ErrorBoundary>
  );
};

export default HomePage;
