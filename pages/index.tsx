import React from 'react';
import Homepage2038 from '../components/Homepage2038';
import SEOOptimizer from '../components/SEOOptimizer';
import AnalyticsTracker from '../components/AnalyticsTracker';
import ErrorBoundary from '../components/ErrorBoundary';
import PerformanceOptimizer from '../components/PerformanceOptimizer';

const HomePage: React.FC = () => {
  return (
    <ErrorBoundary>
      <SEOOptimizer />
      <AnalyticsTracker />
      <PerformanceOptimizer>
        <Homepage2038 />
      </PerformanceOptimizer>
    </ErrorBoundary>
  );
};

export default HomePage;
