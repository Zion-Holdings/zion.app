
import React from 'react';
import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/HeroSection";
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

      <HeroSection />
      
      <FeatureCTAs />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-zion-blue mb-6">
            Welcome to Zion Tech Group
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Your comprehensive destination for AI services, IT solutions, and Micro SAAS services. 
            Connect with experts and find innovative solutions to accelerate your digital transformation.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-zion-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold text-zion-slate mb-2">AI Services</h3>
              <p className="text-zion-slate-light">Cutting-edge AI solutions for modern businesses</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-zion-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">💻</span>
              </div>
              <h3 className="text-xl font-semibold text-zion-slate mb-2">IT Services</h3>
              <p className="text-zion-slate-light">Comprehensive IT solutions and infrastructure</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-zion-cyan rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-zion-slate mb-2">Micro SAAS</h3>
              <p className="text-zion-slate-light">Affordable software solutions for growth</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
