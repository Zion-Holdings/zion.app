import React from 'react';
import Homepage2045 from '../components/Homepage2045';
import SEOOptimizer from '../components/SEOOptimizer';
import Analytics from '../components/Analytics';
import ErrorBoundary from '../components/ErrorBoundary';
import PerformanceMonitor from '../components/PerformanceMonitor';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import MobileOptimizer from '../components/MobileOptimizer';

const HomePage: React.FC = () => {
  return (
    <ErrorBoundary>
      <AccessibilityEnhancer>
        <MobileOptimizer>
          <SEOOptimizer />
          <Analytics showUI={true} autoRefresh={true} refreshInterval={60000} />
          <Homepage2045 />
          <PerformanceMonitor showUI={true} />
        </MobileOptimizer>
      </AccessibilityEnhancer>
    </ErrorBoundary>
  );
};

export default HomePage;
