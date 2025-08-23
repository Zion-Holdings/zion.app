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
      <Homepage2045 />
      <PerformanceMonitor showUI={true} />
      <AccessibilityEnhancer>
        <div></div>
      </AccessibilityEnhancer>
      <PerformanceOptimizer showMetrics={true} autoOptimize={true} />
    </ErrorBoundary>
  );
};

const IndexPage: React.FC<HomePageProps> = (props) => {
  const router = useRouter();
  const showDebug = router.query.debug === 'true';
  const showButton = process.env.NODE_ENV === 'development' || showDebug;

  return (
    <main>
      {props.hasError && (
        <div className="container mx-auto px-4 py-4">
          <ErrorBanner msg={props.errorMessage || "Failed to load home page."} />
        </div>
      )}
      <Home />
      {showButton && <ErrorTestButton />}
    </main>
  );
};

export default IndexPage;
