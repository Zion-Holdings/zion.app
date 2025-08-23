import React, { Suspense } from 'react';
import Homepage2025 from '../components/Homepage2025';
import SEOOptimizer from '../components/SEOOptimizer';
import AnalyticsTracker from '../components/AnalyticsTracker';
import ErrorBoundary from '../components/ErrorBoundary';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import PerformanceMonitor from '../components/PerformanceMonitor';

const HomePage: React.FC = () => {
  return (
    <ErrorBoundary>
      <SEOOptimizer />
      <AnalyticsTracker />
      <AccessibilityEnhancer>
        <Suspense fallback={
          <div className="min-h-screen bg-black text-white flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-cyan-400 mx-auto mb-4"></div>
              <p className="text-xl text-gray-400">Loading Zion Tech Group...</p>
            </div>
          </div>
        }>
          <Homepage2025 />
        </Suspense>
        
        {/* Performance Monitor - Only show in development */}
        {process.env.NODE_ENV === 'development' && (
          <PerformanceMonitor 
            enableRealTime={true}
            showMetrics={true}
            onMetricsUpdate={() => {
              // Performance metrics are logged internally by the component
            }}
          />
        )}
      </AccessibilityEnhancer>
    </ErrorBoundary>
  );
};

export default HomePage;
