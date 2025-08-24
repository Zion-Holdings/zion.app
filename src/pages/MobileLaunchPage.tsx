import React from 'react';
import { SEO } from '@/components/SEO';

const MobileLaunchPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Mobile Launch - Zion Tech Group"
        description="Launch our mobile application"
        canonical="https://ziontechgroup.com/mobile-launch"
      />
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Mobile Launch
            </h1>
            <p className="text-xl text-zion-slate-light mb-8">
              Launch our mobile application
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto">
              <p className="text-white">
                Our mobile application is coming soon. You'll be able to access Zion Tech Group on the go with our mobile app.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileLaunchPage;