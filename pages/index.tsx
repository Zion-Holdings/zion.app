import React from 'react';
import Homepage2045 from '../components/Homepage2045';
import SEOOptimizer from '../components/SEOOptimizer';
import Analytics from '../components/Analytics';
import ErrorBoundary from '../components/ErrorBoundary';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import PerformanceMonitor from '../components/PerformanceMonitor';

const HomePage: React.FC = () => {
  return (
    <ErrorBoundary>
      <SEOOptimizer />
      <Analytics />
      <Homepage2045 />
      <PerformanceMonitor showUI={true} />
      <AccessibilityEnhancer>
        <div></div>
      </AccessibilityEnhancer>
    </ErrorBoundary>
  );
};

export default HomePage;
