import React from 'react';
import Homepage2045 from '../components/Homepage2045';
import SEOOptimizer from '../components/SEOOptimizer';
import AnalyticsTracker from '../components/AnalyticsTracker';
import ErrorBoundary from '../components/ErrorBoundary';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import PerformanceMonitor from '../components/PerformanceMonitor';
import MobileOptimizer from '../components/MobileOptimizer';

const HomePage: React.FC = () => {
  const seoConfig = {
    title: "Zion Tech Group - Revolutionary AI & Quantum Technology Solutions 2025",
    description: "Pioneering the future of technology with innovative AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide. Leading-edge 2040-2041 technology with cutting-edge micro SAAS services.",
    keywords: "AI, artificial intelligence, quantum computing, autonomous systems, technology solutions, business transformation, Zion Tech Group, 2040 technology, consciousness AI, micro SAAS, IT services, AI services, futuristic technology",
    image: "/og-image.svg",
    url: "https://ziontechgroup.com",
    type: "website"
  };

  return (
    <ErrorBoundary>
      <SEOOptimizer />
      <AnalyticsTracker />
      <Homepage2045 />
      <PerformanceMonitor showUI={true} />
      <AccessibilityEnhancer showPanel={true} autoOptimize={true} />
      <PerformanceOptimizer showMetrics={true} autoOptimize={true} />
    </ErrorBoundary>
  );
};

export default HomePage;
