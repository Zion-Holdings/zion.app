import React from 'react';
import { SEO } from '@/components/SEO';

const TalentDirectory: React.FC = () => {
  return (
    <>
      <SEO 
        title="Talent Directory - Zion Tech Group"
        description="Browse our directory of talented professionals and experts"
        canonical="https://ziontechgroup.com/talent"
      />
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Talent Directory
            </h1>
            <p className="text-xl text-zion-slate-light mb-8">
              Browse our directory of talented professionals and experts
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto">
              <p className="text-white">
                Our talent directory is coming soon. You'll be able to browse and connect with skilled professionals across various industries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TalentDirectory;