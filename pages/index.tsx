import React from 'react';
import { HeroSection } from '../src/components/HeroSection';
import { QuickAccess } from '../src/components/home/QuickAccess';
import { FeatureCTAs } from '../src/components/home/FeatureCTAs';
import { ServicesShowcase } from '../src/components/ServicesShowcase';
import { TestimonialsSection } from '../src/components/TestimonialsSection';
import { BenefitsSection } from '../src/components/BenefitsSection';
import { CategoriesSection } from '../src/components/CategoriesSection';
import { HowItWorksSection } from '../src/components/HowItWorksSection';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <HeroSection />
      <QuickAccess />
      <FeatureCTAs />
      <ServicesShowcase />
      <BenefitsSection />
      <CategoriesSection />
      <HowItWorksSection />
      <TestimonialsSection />
    </div>
  );
}
