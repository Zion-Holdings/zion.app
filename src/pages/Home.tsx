
import React from 'react';
import { CategoriesSection } from "@/components/CategoriesSection";
import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Zion - The Tech & AI Marketplace" 
        description="Discover top AI and tech talent, services, and equipment in one place."
        keywords="AI, technology, marketplace, services, talent"
        canonical="https://app.ziontechgroup.com/"
      />

      <HeroSection />
      
      <CategoriesSection />
    </div>
  );
}
