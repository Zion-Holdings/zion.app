import React from 'react';
import Homepage2025 from '../components/Homepage2025';
import SEOOptimizer from '../components/SEOOptimizer';
import AnalyticsTracker from '../components/AnalyticsTracker';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import ErrorBoundary from '../components/ErrorBoundary';

const HomePage: React.FC = () => {
  return (
    <ErrorBoundary>
      <SEOOptimizer pageType="homepage" />
      <AnalyticsTracker />
      <Homepage2025 />
      <PerformanceOptimizer />
      <AccessibilityEnhancer />
    </ErrorBoundary>
  );
};

export default HomePage;
