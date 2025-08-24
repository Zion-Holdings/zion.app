
import React from 'react';
import { CategoriesSection } from "@/components/CategoriesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection";
import { SEO } from "@/components/SEO";
import { EnhancedHeroSection } from "@/components/home/EnhancedHeroSection";
import { QuickAccess } from "@/components/home/QuickAccess";
import { FeatureCTAs } from "@/components/home/FeatureCTAs";
import { FeatureHighlights } from "@/components/home/FeatureHighlights";
import { ITServiceRequestHero } from "@/components/home/ITServiceRequestHero";
import { FuturisticBackground } from "@/components/ui/FuturisticBackground";
import { ServicesShowcase } from "@/components/home/ServicesShowcase";

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Futuristic Background */}
      <FuturisticBackground variant="default" intensity="medium" />
      
      <SEO 
        title="Zion Tech Group - Leading AI & Technology Marketplace" 
        description="Transform your business with cutting-edge AI and technology solutions. Connect with world-class experts, innovative services, and enterprise-grade solutions."
        keywords="AI, artificial intelligence, technology marketplace, cloud services, cybersecurity, data analytics, machine learning, blockchain, IoT, enterprise solutions"
        canonical="https://ziontechgroup.com/"
      />

      {/* Enhanced Hero Section */}
      <EnhancedHeroSection />

      {/* IT Service Request Hero */}
      <ITServiceRequestHero />
      
      {/* Quick Access */}
      <QuickAccess />
      
      {/* Feature Highlights */}
      <FeatureHighlights />
      
      {/* Feature CTAs with new services */}
      <FeatureCTAs />
      
      {/* Services Showcase */}
      <ServicesShowcase />
      
      {/* Categories Section */}
      <CategoriesSection />
      
      {/* Benefits Section */}
      <BenefitsSection />
      
      {/* How It Works Section */}
      <HowItWorksSection />
      
      {/* Featured Listings */}
      <FeaturedListingsSection />
      
      {/* Newsletter Section */}
      <NewsletterSection />
    </div>
  );
}
