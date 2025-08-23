import React from 'react';
import SEO from '../components/SEO';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import UltraFuturisticServiceCard2026 from '../components/ui/UltraFuturisticServiceCard2026';
import Link from 'next/link';
import { real2037AIServicesAdditions } from '../data/real-2037-ai-services-additions';
import { real2037ITServicesAdditions } from '../data/real-2037-it-services-additions';
import { real2037MicroSaasAdditions } from '../data/real-2037-micro-saas-additions';

function toSlug(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

const categories = [
  'AI & Machine Learning',
  'IT Infrastructure',
  'Micro SAAS Solutions',
  'Quantum Computing',
  'Cybersecurity',
  'Edge Computing',
  'Autonomous Systems',
  'Healthcare Technology',
  'Creative AI',
  'Financial Technology'
];

export default function Ultimate2037FuturisticServicesShowcase() {
  const allServices = [
    ...real2037AIServicesAdditions,
    ...real2037ITServicesAdditions,
    ...real2037MicroSaasAdditions
  ];

  const popularServices = allServices.filter(service => service.popular);
  const aiServices = real2037AIServicesAdditions;
  const itServices = real2037ITServicesAdditions;
  const microSaasServices = real2037MicroSaasAdditions;

  // Map service variants to component variants
  const mapVariant = (serviceVariant: string) => {
    if (serviceVariant.includes('ai')) return 'ai';
    if (serviceVariant.includes('quantum')) return 'quantum';
    if (serviceVariant.includes('automation') || serviceVariant.includes('devops')) return 'automation';
    if (serviceVariant.includes('security') || serviceVariant.includes('enterprise')) return 'enterprise';
    if (serviceVariant.includes('edge') || serviceVariant.includes('emerging') || serviceVariant.includes('blockchain')) return 'emerging';
    return 'default';
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <SEO
        title="Ultimate 2037 Futuristic Services Showcase | Zion Tech Group"
        description="Discover our cutting-edge 2037 services: AI-powered solutions, quantum-secure infrastructure, autonomous systems, and innovative micro SAAS platforms. Transform your business with future-ready technology."
        keywords={["2037 services", "AI services", "quantum computing", "autonomous systems", "edge computing", "cybersecurity", "micro SAAS", "Zion Tech Group"]}
        image="/og-2037-services.jpg"
      />
      
      <UltraFuturisticBackground variant="quantum" intensity="high">

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-8">
            2037 Futuristic Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Experience the future of technology with our revolutionary 2037 services. 
            From quantum-secure infrastructure to autonomous AI agents, we're building tomorrow's solutions today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="#ai-services" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full text-white font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
              Explore AI Services
            </Link>
            <Link href="#it-services" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
              Discover IT Solutions
            </Link>
            <Link href="#micro-saas" className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full text-white font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300">
              Micro SAAS Platform
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Services Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            🌟 Most Popular 2037 Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularServices.map((service) => (
              <UltraFuturisticServiceCard2026
                key={service.id}
                service={service}
                variant={mapVariant(service.variant)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section id="ai-services" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            🤖 AI & Machine Learning Services
          </h2>
          <p className="text-xl text-gray-300 text-center mb-16 max-w-4xl mx-auto">
            Revolutionary AI services that push the boundaries of what's possible. 
            From autonomous agents to emotional intelligence, our AI solutions transform industries.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service) => (
              <UltraFuturisticServiceCard2026
                key={service.id}
                service={service}
                variant={mapVariant(service.variant)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* IT Services Section */}
      <section id="it-services" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            ⚡ IT Infrastructure & Security
          </h2>
          <p className="text-xl text-gray-300 text-center mb-16 max-w-4xl mx-auto">
            Future-proof IT infrastructure with quantum-secure cloud platforms, 
            autonomous DevOps, and zero-trust security automation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service) => (
              <UltraFuturisticServiceCard2026
                key={service.id}
                service={service}
                variant={mapVariant(service.variant)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Micro SAAS Section */}
      <section id="micro-saas" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
            🚀 Micro SAAS Solutions
          </h2>
          <p className="text-xl text-gray-300 text-center mb-16 max-w-4xl mx-auto">
            Specialized business solutions that solve specific problems with precision. 
            From inventory optimization to smart contracts, our micro SAAS platforms drive efficiency.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service) => (
              <UltraFuturisticServiceCard2026
                key={service.id}
                service={service}
                variant={mapVariant(service.variant)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Market Insights Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            📊 2037 Market Insights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 p-8 rounded-2xl border border-blue-500/30">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">AI Services Market</h3>
              <p className="text-gray-300 mb-4">The AI services market is projected to reach $95B+ by 2035, with autonomous AI agents and emotional intelligence leading growth.</p>
              <div className="text-sm text-blue-300">
                <p>• Growth Rate: 250% YoY</p>
                <p>• Key Drivers: Automation, Personalization</p>
                <p>• Market Leaders: OpenAI, Anthropic, Zion Tech Group</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 p-8 rounded-2xl border border-purple-500/30">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">IT Infrastructure</h3>
              <p className="text-gray-300 mb-4">Cloud infrastructure market expected to reach $120B+ by 2035, with quantum security and edge computing driving innovation.</p>
              <div className="text-sm text-purple-300">
                <p>• Growth Rate: 200% YoY</p>
                <p>• Key Drivers: Security, Performance, Scalability</p>
                <p>• Market Leaders: AWS, Azure, Zion Tech Group</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 p-8 rounded-2xl border border-green-500/30">
              <h3 className="text-2xl font-bold text-green-400 mb-4">Micro SAAS</h3>
              <p className="text-gray-300 mb-4">Micro SAAS market growing at 180% YoY, with specialized solutions for inventory, HR, and customer analytics leading adoption.</p>
              <div className="text-sm text-green-300">
                <p>• Growth Rate: 180% YoY</p>
                <p>• Key Drivers: Specialization, ROI, Integration</p>
                <p>• Market Leaders: Shopify, HubSpot, Zion Tech Group</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & CTA Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Ready to Experience 2037?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Transform your business with our cutting-edge 2037 services. 
            Get in touch to discuss how we can help you stay ahead of the curve.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-xl font-semibold text-white mb-2">Mobile</h3>
              <p className="text-blue-400">+1 302 464 0950</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">✉️</div>
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-blue-400">kleber@ziontechgroup.com</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">📍</div>
              <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
              <p className="text-blue-400">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="https://ziontechgroup.com/contact" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full text-white font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
              Get Started Today
            </Link>
            <Link href="https://ziontechgroup.com/services" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 mb-4">
            © 2027 Zion Tech Group. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Transforming businesses with cutting-edge 2037 technology solutions.
          </p>
        </div>
      </footer>
        </UltraFuturisticBackground>
    </div>
  );
}