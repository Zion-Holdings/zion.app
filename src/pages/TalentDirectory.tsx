import React from 'react';
import { SEO } from '@/components/SEO';

const TalentDirectory: React.FC = () => {
  return (
    <>
      <SEO 
        title="Talent Directory - Zion Tech Group" 
        description="Discover top AI experts, developers, and tech specialists in our comprehensive talent directory."
      />
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Talent Directory
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Connect with verified AI experts, developers, and tech specialists from around the world.
              Find the perfect talent for your next project.
            </p>
          </div>
          
          <div className="bg-zion-blue-dark/50 backdrop-blur-sm rounded-xl p-8 border border-zion-blue-light/30">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Coming Soon
              </h2>
              <p className="text-zion-slate-light mb-6">
                Our comprehensive talent directory is currently under development. 
                We're building a platform to connect you with the best tech talent worldwide.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-6 py-3 bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue-dark font-medium rounded-lg transition-colors">
                  Get Notified
                </button>
                <button className="px-6 py-3 border border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 font-medium rounded-lg transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TalentDirectory;