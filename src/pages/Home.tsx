
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, TrendingUp, Zap, Shield, Code, Cloud } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { HeroSection } from '@/components/HeroSection';
import { FeatureHighlights } from '@/components/FeatureHighlights';
import { MicroSaasServicesSection } from '@/components/home/MicroSaasServicesSection';
import { CategoriesSection } from '@/components/CategoriesSection';
import { ITServiceRequestHero } from '@/components/ITServiceRequestHero';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate-dark">
      <SEO
        title="Zion Tech Group - AI, IT & Micro SAAS Solutions"
        description="Leading provider of innovative AI, IT, and micro SAAS solutions. Transform your business with cutting-edge technology and expert guidance."
        keywords="AI solutions, IT services, micro SAAS, business automation, Zion Tech Group, technology consulting"
        canonical="https://ziontechgroup.com"
      />

      {/* Hero Section */}
      <HeroSection />

      {/* Feature Highlights */}
      <FeatureHighlights />

      {/* Micro SAAS Services Section */}
      <MicroSaasServicesSection />

      {/* Categories Section */}
      <CategoriesSection />

      {/* IT Service Request Hero */}
      <ITServiceRequestHero />
    </div>
  );
}
