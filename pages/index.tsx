import React from 'react';
import SEO from '../components/SEO';
import Homepage2044 from '../components/Homepage2044';
import ErrorBoundary from '../components/ErrorBoundary';

const HomePage: React.FC = () => {
  const handlePerformanceMetrics = (metrics: any) => {
    // Log performance metrics for monitoring
    if (process.env.NODE_ENV === 'development') {
      console.log('Performance Metrics:', metrics);
    }
    
    // Send to analytics in production
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'performance_metrics', {
        load_time: metrics.loadTime,
        fcp: metrics.firstContentfulPaint,
        lcp: metrics.largestContentfulPaint,
        cls: metrics.cumulativeLayoutShift
      });
    }
  };

  return (
    <>
      <SEO 
        title="Zion Tech Group - Revolutionary AI, Quantum Computing & Space Technology Solutions"
        description="Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide. Leading-edge services in AI, cybersecurity, space tech, and quantum solutions."
        keywords="AI, artificial intelligence, quantum computing, space technology, cybersecurity, machine learning, automation, Zion Tech Group, technology solutions, enterprise software, cloud computing, blockchain, IoT, robotics"
        type="website"
        url="https://ziontechgroup.com"
      />
      <ErrorBoundary>
        <Homepage2044 />
      </ErrorBoundary>
    </>
  );
};

export default HomePage;
