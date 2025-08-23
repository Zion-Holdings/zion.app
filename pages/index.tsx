import React from 'react';
import Homepage2040 from '../components/Homepage2040';
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
      <Homepage2040 />
      <PerformanceMonitor />
      <AccessibilityEnhancer />
    </ErrorBoundary>
  );
};

export default HomePage;
