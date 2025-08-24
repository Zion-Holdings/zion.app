
import React from 'react';
import { SEO } from "@/components/SEO";
import { MicroSaasHero } from "@/components/home/MicroSaasHero";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Zion Tech Group - The Tech & AI Marketplace" 
        description="Discover top AI and tech talent, services, and equipment in one place. Transform your business with our comprehensive micro SAAS solutions."
        keywords="AI, technology, marketplace, services, talent, micro SAAS, cybersecurity, cloud management, DevOps, blockchain, quantum computing"
        canonical="https://ziontechgroup.com/"
      />

      {/* New Micro SAAS Hero Section */}
      <MicroSaasHero />

      {/* Simple Hero Section */}
      <section className="py-20 bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-blue">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
            Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Your comprehensive marketplace for all things technology and AI. 
            Discover top AI and tech talent, services, and equipment in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/micro-saas-services" 
              className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan/90 hover:to-zion-purple/90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Explore Services
            </a>
            <a 
              href="/contact" 
              className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gradient-to-br from-zion-blue via-zion-slate to-zion-blue-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Our Micro SAAS Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-zion-blue-light/20 hover:border-zion-cyan/40 transition-all duration-300 hover:scale-105">
              <div className="text-zion-cyan text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold text-white mb-3">AI & Chatbots</h3>
              <p className="text-zion-slate-light">
                Intelligent customer support automation with advanced AI capabilities
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-zion-blue-light/20 hover:border-zion-cyan/40 transition-all duration-300 hover:scale-105">
              <div className="text-zion-purple text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold text-white mb-3">Cybersecurity</h3>
              <p className="text-zion-slate-light">
                Enterprise-grade threat protection and security solutions
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-zion-blue-light/20 hover:border-zion-cyan/40 transition-all duration-300 hover:scale-105">
              <div className="text-zion-cyan text-4xl mb-4">☁️</div>
              <h3 className="text-xl font-semibold text-white mb-3">Cloud Management</h3>
              <p className="text-zion-slate-light">
                Multi-cloud optimization and infrastructure management
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <a 
              href="/micro-saas-services" 
              className="inline-flex items-center bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan/90 hover:to-zion-purple/90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              View All Services
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Join hundreds of companies already leveraging our expertise to drive innovation and growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan/90 hover:to-zion-purple/90 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Contact Us Today
            </a>
            <a 
              href="/micro-saas-services" 
              className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
