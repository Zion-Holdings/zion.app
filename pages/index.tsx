import React from 'react';
import EnhancedHomepage2026 from '../components/EnhancedHomepage2026';
import SEOOptimizer from '../components/SEOOptimizer';
import AnalyticsTracker from '../components/AnalyticsTracker';
import ErrorBoundary from '../components/ErrorBoundary';

const HomePage: React.FC = () => {
  return (
    <ErrorBoundary>
      <SEOOptimizer />
      <AnalyticsTracker />
      <PerformanceOptimizer>
        <EnhancedHomepage2026 />
      </PerformanceOptimizer>
      <PerformanceMonitor />
      <AccessibilityEnhancer />
    </ErrorBoundary>
  );
};

export default HomePage;
