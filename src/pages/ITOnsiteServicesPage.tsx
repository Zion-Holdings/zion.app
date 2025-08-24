import React from 'react';
import { SEO } from '@/components/SEO';

const ITOnsiteServicesPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="IT Onsite Services - Zion Tech Group"
        description="Professional IT services delivered on-site"
        canonical="https://ziontechgroup.com/it-onsite-services"
      />
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              IT Onsite Services
            </h1>
            <p className="text-xl text-zion-slate-light mb-8">
              Professional IT services delivered on-site
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto">
              <p className="text-white">
                Our IT onsite services page is coming soon. You'll be able to learn about our professional IT services that we deliver directly at your location.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ITOnsiteServicesPage;