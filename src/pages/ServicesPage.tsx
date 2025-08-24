import React from 'react';
import { SEO } from '@/components/SEO';

const ServicesPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Services - Zion Tech Group"
        description="Explore our comprehensive range of technology services"
        canonical="https://ziontechgroup.com/services"
      />
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Services
            </h1>
            <p className="text-xl text-zion-slate-light mb-8">
              Explore our comprehensive range of technology services
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto">
              <p className="text-white">
                Our services page is coming soon. You'll be able to explore our comprehensive range of technology services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;