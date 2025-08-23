import React from 'react';
import Homepage2043 from '../components/Homepage2043';
import EnhancedSEO from '../components/EnhancedSEO';
import Analytics from '../components/Analytics';
import ErrorBoundary from '../components/ErrorBoundary';
import EnhancedAccessibility from '../components/EnhancedAccessibility';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import EnhancedMobileExperience from '../components/EnhancedMobileExperience';
import PerformanceMonitor from '../components/PerformanceMonitor';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';

const HomePage: React.FC = () => {
  // Structured data for better SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
    "description": "Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide.",
    "foundingDate": "2020",
    "industry": "Technology",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://linkedin.com/company/zion-tech-group",
      "https://twitter.com/ziontechgroup"
    ],
    "offers": {
      "@type": "Offer",
      "description": "Revolutionary AI consciousness, quantum computing, and autonomous solutions",
      "category": "Technology Services"
    }
  };

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
}
