import React from 'react';
import Homepage2025 from '../components/Homepage2025';
import SEOOptimizer from '../components/SEOOptimizer';
import AnalyticsTracker from '../components/AnalyticsTracker';
import EnhancedErrorBoundary from '../components/EnhancedErrorBoundary';
import PerformanceOptimizer from '../components/PerformanceOptimizer';

const HomePage: React.FC = () => {
  return (
    <EnhancedErrorBoundary>
      <SEOOptimizer />
      <AnalyticsTracker />
      <PerformanceOptimizer>
        <Homepage2025 />
      </PerformanceOptimizer>
    </EnhancedErrorBoundary>
  );
};

export default HomePage;
