import React from 'react';
import EnhancedHomepage2026 from '../components/EnhancedHomepage2026';
import SEOOptimizer from '../components/SEOOptimizer';
import AnalyticsTracker from '../components/AnalyticsTracker';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import ErrorBoundary from '../components/ErrorBoundary';
import PerformanceMonitor from '../components/PerformanceMonitor';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';

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
}
