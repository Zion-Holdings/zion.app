import React from 'react';
import Homepage2025 from '../components/Homepage2025';
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
      <PerformanceOptimizer showMetrics={true} autoOptimize={true} />
      <MobileOptimizer showDebugInfo={false}>
        <AccessibilityEnhancer showPanel={true} autoOptimize={true} />
        <Homepage2025 />
        <PerformanceMonitor showUI={true} />
      </MobileOptimizer>
    </ErrorBoundary>
  );
};

export default HomePage;
