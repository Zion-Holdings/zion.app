import React from 'react';
import Homepage2046 from '../components/Homepage2046';
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
      <Homepage2046 />
      <PerformanceMonitor showUI={true} />
      <AccessibilityEnhancer>
        <div></div>
      </AccessibilityEnhancer>
    </ErrorBoundary>
  );
};

export default HomePage;
