
import React from 'react';
import { motion } from 'framer-motion';
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { CategoriesSection } from "@/components/CategoriesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection";
import { SEO } from "@/components/SEO";
import { QuickAccess } from "@/components/home/QuickAccess";
import { FeatureCTAs } from "@/components/home/FeatureCTAs";
import { FeatureHighlights } from "@/components/home/FeatureHighlights";
import { ITServiceRequestHero } from "@/components/home/ITServiceRequestHero";
import { AnimatedBackground, FloatingOrbs } from "@/components/ui/AnimatedBackground";

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <SEO 
        title="Zion Tech Group - The Future of Technology is Here" 
        description="Transform your business with cutting-edge AI solutions, enterprise-grade security, and innovative micro SAAS services. Join the digital revolution."
        keywords="AI, technology, marketplace, services, talent, cybersecurity, cloud, digital transformation"
        canonical="https://ziontechgroup.com/"
      />

      {/* Futuristic Animated Backgrounds */}
      <AnimatedBackground variant="grid" intensity="low" />
      <FloatingOrbs count={8} />

      {/* Hero Section */}
      <HeroSection />

      {/* IT Service Request Hero */}
      <ITServiceRequestHero />

      {/* Services Section */}
      <ServicesSection />

      {/* Quick Access Section */}
      <QuickAccess />

      {/* Feature Highlights */}
      <FeatureHighlights />

      {/* Categories Section */}
      <CategoriesSection />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Featured Listings */}
      <FeaturedListingsSection />

      {/* Feature CTAs */}
      <FeatureCTAs />

      {/* Newsletter Section */}
      <NewsletterSection />
    </div>
  );
}
