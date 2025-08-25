import React from 'react';
import { SEO } from '@/components/SEO';

const PartnersPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Partners - Zion Tech Group"
        description="Meet our trusted partners and collaborators"
        canonical="https://ziontechgroup.com/partners"
      />
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Partners
            </h1>
            <p className="text-xl text-zion-slate-light mb-8">
              Meet our trusted partners and collaborators
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto">
              <p className="text-white">
                Our partners page is coming soon. You'll be able to meet our trusted partners and collaborators who help us deliver exceptional services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnersPage;