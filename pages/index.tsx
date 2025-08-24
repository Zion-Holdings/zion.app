import React from 'react';
import Head from 'next/head';
import { HeroSection } from '../src/components/HeroSection';
import { QuickAccess } from '../src/components/home/QuickAccess';
import { FeatureCTAs } from '../src/components/home/FeatureCTAs';
import { FeatureHighlights } from '../src/components/home/FeatureHighlights';
import { ITServiceRequestHero } from '../src/components/home/ITServiceRequestHero';
import { ServicesShowcase } from '../src/components/ServicesShowcase';
import EnhancedServicesOverview from '../src/components/home/EnhancedServicesOverview';
import { CategoriesSection } from '../src/components/CategoriesSection';
import { BenefitsSection } from '../src/components/BenefitsSection';
import { HowItWorksSection } from '../src/components/HowItWorksSection';

import { SEO } from '../src/components/SEO';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Zion - The Tech & AI Marketplace"
        description="Discover top AI and tech talent, services, and equipment in one place. Connect with verified professionals and cutting-edge technology solutions."
        keywords="AI, technology, marketplace, services, talent, IT support, cybersecurity, cloud computing, digital transformation"
        canonical="https://app.ziontechgroup.com/"
      />
      <ITServiceRequestHero />
      <HeroSection />
      <QuickAccess />
      <FeatureCTAs />
      <FeatureHighlights />
      <ServicesShowcase />
      <EnhancedServicesOverview />
      <CategoriesSection />
      <BenefitsSection />
      <HowItWorksSection />

    </div>
  );
}
