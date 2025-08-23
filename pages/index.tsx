import React from 'react';
import Homepage2037 from '../components/Homepage2037';
import SEOOptimizer from '../components/SEOOptimizer';
import AnalyticsTracker from '../components/AnalyticsTracker';
import ErrorBoundary from '../components/ErrorBoundary';

const HomePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Combine all services for showcase
  const allServices = [
    ...innovativeAIAutonomousServicesExpansion2025,
    ...innovativeITInfrastructureExpansion2025,
    ...innovativeMicroSaasExpansionV32025,
    ...realMicroSaasServices,
    ...innovativeAIServices,
    ...enterpriseITServices,
    ...emergingTechServices,
    ...newRealServices,
    ...realOperationalServices,
    ...marketReadyServices,
    ...marketValidatedServices,
    ...industryRealServices
  ];

  // Get featured services
  const featuredServices = allServices.slice(0, 6);

  const categories = [
    { id: 'all', name: 'All Services', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { id: 'ai', name: 'AI & Autonomous', icon: Brain, color: 'from-cyan-500 to-blue-500' },
    { id: 'quantum', name: 'Quantum Technology', icon: Atom, color: 'from-blue-500 to-indigo-500' },
    { id: 'infrastructure', name: 'IT Infrastructure', icon: Cpu, color: 'from-green-500 to-teal-500' },
    { id: 'micro-saas', name: 'Micro SAAS', icon: Building, color: 'from-orange-500 to-red-500' }
  ];

  return (
    <ErrorBoundary>
      <SEOOptimizer />
      <AnalyticsTracker />
      <PerformanceOptimizer />
      <MobileOptimizer showDebugInfo={false}>
        <AccessibilityEnhancer />
        <Homepage2025 />
        <PerformanceMonitor showUI={true} />
      </MobileOptimizer>
    </ErrorBoundary>
  );
};

export default HomePage;
