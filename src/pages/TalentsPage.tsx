import React from 'react';
import { SEO } from '@/components/SEO';

const TalentsPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Talents - Zion Tech Group"
        description="Discover talented professionals and experts"
        url="https://ziontechgroup.com/talents"
      />
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Talents
            </h1>
            <p className="text-xl text-zion-slate-light mb-8">
              Discover talented professionals and experts
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto">
              <p className="text-white">
                Our talents page is coming soon. You'll be able to discover and connect with skilled professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TalentsPage;