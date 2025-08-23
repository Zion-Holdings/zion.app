import React from 'react';
import Homepage2025 from '../components/Homepage2025';
import SEOOptimizer from '../components/SEOOptimizer';
import AnalyticsTracker from '../components/AnalyticsTracker';
import ErrorBoundary from '../components/ErrorBoundary';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import PerformanceMonitor from '../components/PerformanceMonitor';
import MobileOptimizer from '../components/MobileOptimizer';
import PerformanceDashboard from '../components/PerformanceDashboard';

const HomePage: React.FC = () => {
  return (
    <ErrorBoundary>
      <SEOOptimizer />
      <AnalyticsTracker />
      <PerformanceOptimizer />
      <MobileOptimizer showDebugInfo={false}>
        <AccessibilityEnhancer />
        <Homepage2025 />
        <PerformanceMonitor showUI={true} />
        <PerformanceDashboard />
      </MobileOptimizer>
    </ErrorBoundary>
  );
};

export default HomePage;
