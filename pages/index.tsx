import React from 'react';
import Homepage2037 from '../components/Homepage2037';
import SEOOptimizer from '../components/SEOOptimizer';
import AnalyticsTracker from '../components/AnalyticsTracker';
import ErrorBoundary from '../components/ErrorBoundary';

const HomePage: React.FC = () => {
  return (
    <ErrorBoundary>
      <SEOOptimizer />
      <AnalyticsTracker />
      <PerformanceOptimizer />
      <AccessibilityEnhancer />
      <MobileOptimizer showDebugInfo={false}>
        <Homepage2025 />
        <PerformanceMonitor showUI={true} />
      </MobileOptimizer>
    </ErrorBoundary>
  );
};

export default HomePage;
