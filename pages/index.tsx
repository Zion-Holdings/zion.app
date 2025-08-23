import React from 'react';
import Homepage2043 from '../components/Homepage2043';
import SEOOptimizer from '../components/SEOOptimizer';
import Analytics from '../components/Analytics';
import ErrorBoundary from '../components/ErrorBoundary';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import PerformanceMonitor from '../components/PerformanceMonitor';
import MobileOptimizer from '../components/MobileOptimizer';

const HomePage: React.FC = () => {
  return (
    <ErrorBoundary>
      <SEOOptimizer />
      <Analytics />
      <AccessibilityEnhancer />
      <MobileOptimizer showDebugInfo={false}>
        <Homepage2043 />
        <PerformanceMonitor showMetrics={true} />
      </MobileOptimizer>
    </ErrorBoundary>
  );
};

export default HomePage;
