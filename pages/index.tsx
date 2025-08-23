import React from 'react';
import EnhancedHomepage2040 from '../components/EnhancedHomepage2040';
import SEOOptimizer from '../components/SEOOptimizer';
import AnalyticsTracker from '../components/AnalyticsTracker';
import ErrorBoundary from '../components/ErrorBoundary';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import PerformanceMonitor from '../components/PerformanceMonitor';
import MobileOptimizer from '../components/MobileOptimizer';

const HomePage: React.FC = () => {
  return (
    <ErrorBoundary>
      <SEOOptimizer />
      <AnalyticsTracker />
      <PerformanceOptimizer>
        <MobileOptimizer showDebugInfo={false}>
          <AccessibilityEnhancer>
            <EnhancedHomepage2040 />
            <PerformanceMonitor showUI={true} />
          </AccessibilityEnhancer>
        </MobileOptimizer>
      </PerformanceOptimizer>
    </ErrorBoundary>
  );
};

export default HomePage;
