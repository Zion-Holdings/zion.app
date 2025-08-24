
import React from 'react';
import { FuturisticBackground } from '../components/FuturisticBackground';
import { ServiceShowcase } from '../components/ServiceShowcase';
import { MICRO_SAAS_SERVICES } from '../data/microSaasServices';

export default function Home() {
  const featuredServices = MICRO_SAAS_SERVICES.filter(service => service.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white relative overflow-hidden">
      <FuturisticBackground />
      
      {/* Hero Section */}
      <div className="relative z-10 pt-20 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent animate-holographic-shift">
            Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Pioneering the future of technology with revolutionary AI consciousness, 
            quantum computing, and autonomous solutions that transform businesses worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-neon transition-all duration-300 hover:scale-105">
              Get Started
            </button>
            <button className="px-8 py-4 bg-zinc-800/50 text-zion-cyan border border-zion-cyan/30 rounded-lg text-lg font-semibold hover:bg-zinc-700/50 transition-all duration-300 hover:scale-105">
              Explore Services
            </button>
          </div>
        </div>
      </div>

      {/* Service Showcase */}
      <ServiceShowcase services={featuredServices} />

      {/* Contact Information */}
      <div className="relative z-10 py-16 bg-gradient-to-r from-zinc-800/50 to-zinc-700/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ready to Transform Your Business?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-zinc-300">+1 302 464 0950</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✉️</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <p className="text-zinc-300">kleber@ziontechgroup.com</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-zion-blue to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-zinc-300">364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
