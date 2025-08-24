
import React from 'react';
import { CategoriesSection } from "@/components/CategoriesSection";
import { FeatureCTAs } from "@/components/home/FeatureCTAs";
import { ServicesShowcase } from "@/components/home/ServicesShowcase";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Enhanced Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-zion-blue via-zion-blue-dark to-slate-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-24">
          <div className="text-center text-white">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8 leading-relaxed">
              Discover top AI and tech talent, services, and equipment in one place.
              Your comprehensive marketplace for all things technology and AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-white text-zion-blue font-semibold rounded-lg hover:bg-blue-50 transition-all duration-200 transform hover:scale-105 shadow-lg">
                Get Started Today
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-blue transition-all duration-200 transform hover:scale-105">
                Explore Services
              </button>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-200 mb-2">500+</div>
                <div className="text-blue-100">Verified Professionals</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-200 mb-2">1000+</div>
                <div className="text-blue-100">Successful Projects</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-200 mb-2">24/7</div>
                <div className="text-blue-100">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <FeatureCTAs />
        
        <ServicesShowcase />
        
        <CategoriesSection />
        
        {/* Call to Action Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-zion-blue to-zion-purple rounded-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of companies that trust Zion Tech Group for their technology needs.
              Get started today and experience the future of tech collaboration.
            </p>
            <button className="px-10 py-4 bg-white text-zion-blue font-semibold rounded-lg hover:bg-blue-50 transition-all duration-200 transform hover:scale-105 shadow-lg">
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
