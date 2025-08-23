import React from 'react';
import Homepage2040 from '../components/Homepage2040';
import SEOOptimizer from '../components/SEOOptimizer';
import AnalyticsTracker from '../components/AnalyticsTracker';
import ErrorBoundary from '../components/ErrorBoundary';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import PerformanceMonitor from '../components/PerformanceMonitor';
import MobileOptimizer from '../components/MobileOptimizer';
import UltraFuturisticBackground2040 from '../components/backgrounds/UltraFuturisticBackground2040';

const HomePage: React.FC = () => {
  return (
    <ErrorBoundary>
      <SEOOptimizer />
      <AnalyticsTracker />
      <PerformanceOptimizer showMetrics={false} autoOptimize={true} />
      <MobileOptimizer showDebugInfo={false}>
        <AccessibilityEnhancer showPanel={false} autoOptimize={true} />
        <UltraFuturisticBackground2040 />
        <Homepage2040 />
        <PerformanceMonitor showUI={true} />
      </MobileOptimizer>
    </ErrorBoundary>
  );
};

export default HomePage;
