import React from 'react';
import { SEO } from '@/components/SEO';

const Signup: React.FC = () => {
  return (
    <>
      <SEO 
        title="Sign Up - Zion Tech Group"
        description="Create your Zion Tech Group account"
        canonical="https://ziontechgroup.com/signup"
      />
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Sign Up
            </h1>
            <p className="text-xl text-zion-slate-light mb-8">
              Create your Zion Tech Group account
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto">
              <p className="text-white">
                Our signup page is coming soon. You'll be able to create your Zion Tech Group account and start using all our services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;