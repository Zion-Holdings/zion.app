import React from 'react';
import Homepage2045 from '../components/Homepage2045';
import SEOOptimizer from '../components/SEOOptimizer';
import Analytics from '../components/Analytics';
import ErrorBoundary from '../components/ErrorBoundary';

const HomePage: React.FC = () => {
  return (
    <ErrorBoundary>
      <SEOOptimizer />
      <Analytics />
      <Homepage2045 />
    </ErrorBoundary>
  );
};

export default HomePage;
