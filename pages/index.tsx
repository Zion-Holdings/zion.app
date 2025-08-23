import React, { useState, useEffect } from 'react';
import Homepage2025 from '../components/Homepage2025';
import SEOOptimizer from '../components/SEOOptimizer';
import AnalyticsTracker from '../components/AnalyticsTracker';
import ErrorBoundary from '../components/ErrorBoundary';
import PerformanceMonitor from '../components/PerformanceMonitor';
import PageLoader from '../components/ui/PageLoader';

const HomePage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time and ensure smooth transition
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ErrorBoundary>
      <SEOOptimizer />
      <AnalyticsTracker />
      <PerformanceMonitor showMetrics={true} enableRealTime={true} />
      
      <PageLoader 
        isLoading={isLoading} 
        loadingText="Preparing the future of technology..."
        onLoadingComplete={() => {
          // Page loaded successfully
        }}
      />
      
      {!isLoading && <Homepage2025 />}
    </ErrorBoundary>
  );
};

export default HomePage;
