import React from 'react';
import Homepage2025 from '../components/Homepage2025';
import SEOOptimizer from '../components/SEOOptimizer';
import AnalyticsTracker from '../components/AnalyticsTracker';
import ErrorBoundary from '../components/ErrorBoundary';

const HomePage: React.FC = () => {
  return (
    <ErrorBoundary>
      <SEOOptimizer />
      <AnalyticsTracker />
      <Homepage2025 />
    </ErrorBoundary>
  );
};

export default HomePage;
