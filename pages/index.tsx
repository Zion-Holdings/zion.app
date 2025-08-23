import React from 'react';
import EnhancedHomepage2026 from '../components/EnhancedHomepage2026';
import EnhancedSEOOptimizer from '../components/EnhancedSEOOptimizer';
import EnhancedAnalyticsTracker from '../components/EnhancedAnalyticsTracker';
import ErrorBoundary from '../components/ErrorBoundary';
import EnhancedPerformanceOptimizer from '../components/EnhancedPerformanceOptimizer';
import EnhancedAccessibilityEnhancer from '../components/EnhancedAccessibilityEnhancer';
import SecurityEnhancer from '../components/SecurityEnhancer';

const HomePage: React.FC = () => {
  return (
    <ErrorBoundary>
      <EnhancedSEOOptimizer />
      <EnhancedAnalyticsTracker />
      <EnhancedPerformanceOptimizer>
        <EnhancedHomepage2026 />
      </EnhancedPerformanceOptimizer>
      <EnhancedAccessibilityEnhancer />
      <SecurityEnhancer />
    </ErrorBoundary>
  );
};

export default HomePage;
