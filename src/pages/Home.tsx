
import React from 'react';
import { ExpandedServicesShowcase } from "@/components/home/ExpandedServicesShowcase";
import { SEO } from "@/components/SEO";

export function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Zion - The Tech & AI Marketplace" 
        description="Discover top AI and tech talent, services, and equipment in one place."
        keywords="AI, technology, marketplace, services, talent"
        canonical="https://ziontechgroup.com/"
      />

      {/* Simple Hero Section */}
      <section className="py-20 bg-gradient-to-r from-zion-blue to-zion-purple text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Zion Tech Group
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Cutting-edge AI, IT, and micro SAAS solutions for modern businesses
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/expanded-services" className="bg-zion-cyan text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-zion-cyan-dark transition-colors">
              View All Services
            </a>
            <a href="/services-overview" className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-zion-blue transition-colors">
              Services Overview
            </a>
          </div>
        </div>
      </section>

      {/* Expanded Services Showcase - This is the main component we want to work */}
      <ExpandedServicesShowcase />
      
      {/* Simple Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your project requirements and get a free consultation.
          </p>
          <div className="space-y-4">
            <div className="text-lg">
              <strong>Phone:</strong> +1 302 464 0950
            </div>
            <div className="text-lg">
              <strong>Email:</strong> kleber@ziontechgroup.com
            </div>
            <div className="text-lg">
              <strong>Address:</strong> 364 E Main St STE 1008 Middletown DE 19709
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
