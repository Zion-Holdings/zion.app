import React from 'react';
import { SEO } from '@/components/SEO';

const MobileLaunchPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Mobile Launch - Zion Tech Group" 
        description="Launch your mobile app with our comprehensive mobile development services."
      />
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Mobile Launch
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Launch your mobile app with our comprehensive mobile development services.
              From concept to app store, we've got you covered.
            </p>
          </div>
          
          <div className="bg-zion-blue-dark/50 backdrop-blur-sm rounded-xl p-8 border border-zion-blue-light/30">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Coming Soon
              </h2>
              <p className="text-zion-slate-light mb-6">
                Our mobile launch platform is currently under development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileLaunchPage;