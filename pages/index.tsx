import React from 'react';
import EnhancedHomepage2026 from '../components/EnhancedHomepage2026';
import SEOOptimizer from '../components/SEOOptimizer';
import AnalyticsTracker from '../components/AnalyticsTracker';
import ErrorBoundary from '../components/ErrorBoundary';
import PerformanceMonitor from '../components/PerformanceMonitor';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';

const HomePage: React.FC = () => {
  return (
    <ErrorBoundary>
      <SEOOptimizer />
      <AnalyticsTracker />
      <EnhancedHomepage2026 />
      <PerformanceMonitor />
      <AccessibilityEnhancer />
    </ErrorBoundary>
  );
};

export default HomePage;
