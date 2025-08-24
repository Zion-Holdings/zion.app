
import React from 'react';
import { SEO } from "@/components/SEO";
import { FeatureCTAs } from "@/components/home/FeatureCTAs";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Zion - The Tech & AI Marketplace" 
        description="Discover top AI and tech talent, services, and equipment in one place."
        keywords="AI, technology, marketplace, services, talent"
        canonical="https://ziontechgroup.com/"
      />

      <div className="py-20 bg-gradient-to-r from-zion-purple-dark via-zion-purple to-zion-cyan">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl text-zion-cyan-light mb-8 max-w-3xl mx-auto">
            The world's first comprehensive marketplace dedicated to high-tech and artificial intelligence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/micro-saas-services"
              className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-slate-dark font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Explore Micro SAAS Services
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <FeatureCTAs />
    </div>
  );
}
