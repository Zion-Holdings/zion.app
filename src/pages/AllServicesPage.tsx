import React from 'react';
import { MicroSaasServicesShowcase } from '@/components/services/MicroSaasServicesShowcase';
import { SEO } from '@/components/SEO';
import { TrustedBySection } from '@/components/TrustedBySection';
import { ContactSection } from '@/components/ContactSection';

export default function AllServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Zion Tech Services - AI, IT & Micro SAAS Solutions" 
        description="Discover our comprehensive suite of AI-powered services, IT solutions, and micro SAAS platforms. From AI content generation to cybersecurity, we have solutions for every business need."
        keywords="AI services, IT services, micro SAAS, cloud migration, cybersecurity, business automation, web development, mobile apps, business intelligence"
        canonical="https://ziontechgroup.com/services"
      />

      <MicroSaasServicesShowcase />
      
      <TrustedBySection />
      
      <ContactSection />
    </div>
  );
}