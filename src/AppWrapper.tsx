import React, { Suspense } from 'react';
import { ErrorBoundary } from './components/ErrorBoundary';
import { PageSkeleton } from './components/LoadingSkeleton';
import { usePerformance } from './hooks/usePerformance';

interface AppWrapperProps {
  children: React.ReactNode;
}

export const AppWrapper: React.FC<AppWrapperProps> = ({ children }) => {
  const { isSupported, getPerformanceReport } = usePerformance();

  // Log performance report in development
  React.useEffect(() => {
    if (import.meta.env.DEV && isSupported) {
      const timer = setTimeout(() => {
        const report = getPerformanceReport();
        console.group('📊 Performance Report');
        console.log('Overall Score:', `${report.metrics.overallScore}/100 (${report.rating})`);
        console.log('Recommendations:', report.recommendations);
        console.log('Timestamp:', report.timestamp);
        console.groupEnd();
      }, 5000); // Wait 5 seconds for metrics to stabilize

      return () => clearTimeout(timer);
    }
  }, [isSupported, getPerformanceReport]);

  return (
    <ErrorBoundary>
      <Suspense fallback={<PageSkeleton />}>
        {children}
      </Suspense>
    </ErrorBoundary>
  );
};