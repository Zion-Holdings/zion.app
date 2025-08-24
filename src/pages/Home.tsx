
import React from 'react';
import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/HeroSection";
import { CategoriesSection } from "@/components/CategoriesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { PerformanceOptimizations } from "@/components/PerformanceOptimizations";
import { AdvancedAnalytics } from "@/components/AdvancedAnalytics";

export default function Home() {
  return (
    <div className="min-h-screen bg-background" id="main-content">
      <SEO 
        title="Zion - The Tech & AI Marketplace" 
        description="Discover top AI and tech talent, services, and equipment in one place."
        keywords="AI, technology, marketplace, services, talent"
        canonical="https://ziontechgroup.com/"
      />

      <HeroSection />
      
      <CategoriesSection />
      <BenefitsSection />
      
      {/* New Performance Section */}
      <section className="py-16 bg-gradient-to-br from-zion-slate/5 to-zion-blue/5">
        <PerformanceOptimizations />
      </section>
      
      {/* New Analytics Section */}
      <section className="py-16">
        <AdvancedAnalytics />
      </section>
    </div>
  );
}
