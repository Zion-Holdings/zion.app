import React from 'react';
import Homepage2043 from '../components/Homepage2043';
import EnhancedSEO from '../components/EnhancedSEO';
import Analytics from '../components/Analytics';
import ErrorBoundary from '../components/ErrorBoundary';
import EnhancedAccessibility from '../components/EnhancedAccessibility';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import EnhancedMobileExperience from '../components/EnhancedMobileExperience';
import PerformanceMonitor from '../components/PerformanceMonitor';
import MobileOptimizer from '../components/MobileOptimizer';

const HomePage: React.FC = () => {
  return (
    <ErrorBoundary>
      <EnhancedSEO 
        title="Zion Tech Group - Revolutionary AI, Quantum Computing & Space Technology Solutions"
        description="Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide."
        keywords={['AI Consciousness', 'Quantum Computing', 'Space Technology', 'Cybersecurity', 'Business Solutions', 'Technology Innovation', '2043 Technology']}
        type="website"
      />
      <Analytics />
      <EnhancedAccessibility />
      <MobileOptimizer showDebugInfo={false}>
        <Homepage2043 />
        <PerformanceMonitor showUI={true} />
      </MobileOptimizer>
      
      {/* Enhancement Components */}
      <PerformanceOptimizer />
      <EnhancedMobileExperience />
    </ErrorBoundary>
  );
};

export default HomePage;
