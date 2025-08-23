import React from 'react';
import Homepage2045 from '../components/Homepage2045';
import SEOOptimizer from '../components/SEOOptimizer';
import EnhancedAnalytics from '../components/EnhancedAnalytics';
import ErrorBoundary from '../components/ErrorBoundary';
import PerformanceMonitor from '../components/PerformanceMonitor';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import MobileOptimizer from '../components/MobileOptimizer';

const HomePage: React.FC = () => {
  return (
    <ErrorBoundary>
      <SEOOptimizer />
      <EnhancedAnalytics />
      <Homepage2045 />
      <PerformanceMonitor showUI={true} />
      <AccessibilityEnhancer>
        <div></div>
      </AccessibilityEnhancer>
      <MobileOptimizer>
        <div></div>
      </MobileOptimizer>
    </ErrorBoundary>
  );
};

export default HomePage;
