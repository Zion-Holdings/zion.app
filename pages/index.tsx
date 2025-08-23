import React from 'react';
import Homepage2025 from '../components/Homepage2025';
import SEOEnhancer from '../components/SEOEnhancer';
import PerformanceEnhancer from '../components/PerformanceEnhancer';
import AnalyticsTracker from '../components/AnalyticsTracker';
import ErrorBoundary from '../components/ErrorBoundary';
import PerformanceOptimizer from '../components/PerformanceOptimizer';

const HomePage: React.FC = () => {
  return (
    <ErrorBoundary>
      <SEOEnhancer />
      <AnalyticsTracker />
      <PerformanceOptimizer>
        <PerformanceEnhancer>
          <Homepage2025 />
        </PerformanceEnhancer>
      </PerformanceOptimizer>
    </ErrorBoundary>
  );
};

export default HomePage;
