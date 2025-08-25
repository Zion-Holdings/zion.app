
import React from 'react';
import { HeroSection } from '@/components/HeroSection';
import { QuickAccess } from '@/components/home/QuickAccess';
import { FeatureHighlights } from '@/components/home/FeatureHighlights';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { BenefitsSection } from '@/components/BenefitsSection';
import { CategoriesSection } from '@/components/CategoriesSection';
import { ServicesShowcase } from '@/components/ServicesShowcase';
import { FeaturedListingsSection } from '@/components/FeaturedListingsSection';
import { NewsletterSection } from '@/components/NewsletterSection';
import { TrustedBySection } from '@/components/TrustedBySection';
import { FloatingCTA } from '@/components/FloatingCTA';
import { SEO } from '@/components/SEO';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Zion Tech Group - AI-Powered Tech Talent Marketplace"
        description="Connect with top tech talent and innovative services. AI-powered matching, comprehensive solutions, and cutting-edge technology services."
        keywords="tech talent, AI services, technology marketplace, Zion Tech Group, innovation, digital solutions"
      />
      
      {/* Hero Section with Enhanced Design */}
      <HeroSection />
      
      {/* Quick Access Section */}
      <QuickAccess />
      
      {/* Feature Highlights */}
      <FeatureHighlights />
      
      {/* How It Works */}
      <HowItWorksSection />
      
      {/* Benefits Section */}
      <BenefitsSection />
      
      {/* Categories Section */}
      <CategoriesSection />
      
      {/* Services Showcase */}
      <ServicesShowcase />
      
      {/* Featured Listings */}
      <FeaturedListingsSection />
      
      {/* Trusted By Section */}
      <TrustedBySection />
      
      {/* Newsletter Section */}
      <NewsletterSection />
      
      {/* Floating CTA */}
      <FloatingCTA />
    </div>
  );
}
