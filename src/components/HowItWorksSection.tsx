import React from 'react';

export const HowItWorksSection: React.FC = () => {
  return (
    <section className="py-16 bg-zion-slate-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Simple steps to get started with Zion Tech Group services
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold text-white">
              1
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Choose Your Service</h3>
            <p className="text-zion-slate-light">
              Browse our comprehensive catalog of AI, IT, and business solutions
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-zion-purple rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold text-white">
              2
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Get a Quote</h3>
            <p className="text-zion-slate-light">
              Contact our team for personalized pricing and implementation details
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-zion-gold rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold text-white">
              3
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Launch & Scale</h3>
            <p className="text-zion-slate-light">
              Deploy quickly with our expert support and scale as you grow
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};