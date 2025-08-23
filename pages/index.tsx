import React from 'react';
import Homepage2040 from '../components/Homepage2040';
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
      <Homepage2040 />
      <PerformanceMonitor showUI={true} />
      <AccessibilityEnhancer showPanel={true} autoOptimize={true} />
      <PerformanceOptimizer showMetrics={true} autoOptimize={true} />
    </ErrorBoundary>
  );
};

export default HomePage;
