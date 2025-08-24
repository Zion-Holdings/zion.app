import React from 'react';
import { Link } from 'react-router-dom';

export function HeroSection() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-blue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          The Future of
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">
            AI & Tech
          </span>
          is Here
        </h1>
        
        <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto leading-relaxed">
          Zion Tech Group delivers cutting-edge AI services, cybersecurity solutions, and innovative IT services 
          to help your business thrive in the digital age.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/services"
            className="px-8 py-4 bg-zion-cyan text-white rounded-lg font-semibold text-lg hover:bg-zion-cyan/90 transition-colors shadow-lg"
          >
            Explore Services
          </Link>
          <Link
            to="/contact"
            className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-colors"
          >
            Get Started
          </Link>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-zion-cyan mb-2">500+</div>
            <div className="text-zion-slate-light">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-zion-cyan mb-2">1000+</div>
            <div className="text-zion-slate-light">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-zion-cyan mb-2">99.9%</div>
            <div className="text-zion-slate-light">Uptime Guarantee</div>
          </div>
        </div>
      </div>
    </section>
  );
}