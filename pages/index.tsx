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
      <EnhancedHomepage2026 />
    </ErrorBoundary>
  );
};

export default HomePage;
