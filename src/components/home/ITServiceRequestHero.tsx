import React from 'react';
import { Link } from 'react-router-dom';

export const ITServiceRequestHero: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Transform Your Business with
          <span className="block bg-gradient-to-r from-zion-cyan to-zion-gold bg-clip-text text-transparent">
            Zion Tech Group
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
          Comprehensive AI, IT, and business solutions designed to accelerate your growth and innovation
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            to="/comprehensive-services"
            className="bg-zion-cyan text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-zion-cyan-light transition-colors"
          >
            Explore Services
          </Link>
          <Link
            to="/contact"
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-zion-blue-dark transition-colors"
          >
            Get Started
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl mb-2">🚀</div>
            <h3 className="text-white font-semibold mb-2">AI-Powered</h3>
            <p className="text-zion-slate-light text-sm">Cutting-edge artificial intelligence solutions</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">⚡</div>
            <h3 className="text-white font-semibold mb-2">Fast & Reliable</h3>
            <p className="text-zion-slate-light text-sm">Quick deployment and 24/7 support</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">💰</div>
            <h3 className="text-white font-semibold mb-2">Cost Effective</h3>
            <p className="text-zion-slate-light text-sm">Competitive pricing with flexible plans</p>
          </div>
        </div>
      </div>
    </section>
  );
};