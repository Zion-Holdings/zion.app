
import React from 'react';
import { CategoriesSection } from "@/components/CategoriesSection";
import { FeatureCTAs } from "@/components/home/FeatureCTAs";
import { ServicesShowcase } from "@/components/home/ServicesShowcase";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-zion-blue mb-6">
            Zion Tech Group
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Discover top AI and tech talent, services, and equipment in one place.
            Your comprehensive marketplace for all things technology and AI.
          </p>
        </div>
        
        <FeatureCTAs />
        
        <ServicesShowcase />
        
        <CategoriesSection />
      </div>
    </div>
  );
}
