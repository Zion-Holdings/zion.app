import React from 'react';
import { ComprehensiveServicesShowcase } from '@/components/ComprehensiveServicesShowcase';
import { ServicesComparisonTable } from '@/components/ServicesComparisonTable';
import { ServicesBenefitsShowcase } from '@/components/ServicesBenefitsShowcase';
import { SEO } from '@/components/SEO';

export default function ComprehensiveServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Comprehensive Tech Services - Zion Tech Group" 
        description="Discover our cutting-edge micro SAAS services, enterprise IT solutions, and advanced AI capabilities. Transform your business with innovative technology solutions."
        keywords="AI services, IT services, micro SAAS, cloud migration, cybersecurity, DevOps, machine learning, digital transformation, Zion Tech Group"
        canonical="https://ziontechgroup.com/comprehensive-services"
      />
      
      <ComprehensiveServicesShowcase />
      <ServicesBenefitsShowcase />
      <ServicesComparisonTable />
    </div>
  );
}