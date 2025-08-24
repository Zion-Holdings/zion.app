import React from 'react';
import { SEO } from '@/components/SEO';

const RequestQuotePage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Request Quote - Zion Tech Group"
        description="Get a custom quote for your project"
        canonical="https://ziontechgroup.com/request-quote"
      />
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Request Quote
            </h1>
            <p className="text-xl text-zion-slate-light mb-8">
              Get a custom quote for your project
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto">
              <p className="text-white">
                Our request quote page is coming soon. You'll be able to get custom quotes for your projects and receive personalized pricing information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestQuotePage;