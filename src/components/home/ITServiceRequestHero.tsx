import React from 'react';

export const ITServiceRequestHero: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-zion-blue to-zion-purple text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          IT Services & AI Solutions
        </h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Transform your business with cutting-edge technology solutions. From AI chatbots to cloud infrastructure, 
          we deliver results that drive growth and innovation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-zion-cyan text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-zion-cyan-dark transition-colors">
            Get Free Consultation
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-zion-blue transition-colors">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};