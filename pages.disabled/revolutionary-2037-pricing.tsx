import React from 'react';
import SEO from '../components/SEO';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import Link from 'next/link';
import { real2037AIServicesAdditions } from '../data/real-2037-ai-services-additions';
import { real2037ITServicesAdditions } from '../data/real-2037-it-services-additions';
import { real2037MicroSaasAdditions } from '../data/real-2037-micro-saas-additions';

export default function Revolutionary2037Pricing() {
  const allServices = [
    ...real2037AIServicesAdditions,
    ...real2037ITServicesAdditions,
    ...real2037MicroSaasAdditions
  ];

  const popularServices = allServices.filter(service => service.popular);
  const aiServices = real2037AIServicesAdditions;
  const itServices = real2037ITServicesAdditions;
  const microSaasServices = real2037MicroSaasAdditions;

  return (
    <div className="min-h-screen bg-black text-white">
      <SEO
        title="Revolutionary 2037 Pricing | Zion Tech Group"
        description="Discover competitive pricing for our cutting-edge 2037 services: AI platforms, quantum-secure infrastructure, and innovative micro SAAS solutions. Get the best value for future-ready technology."
        keywords={["2037 pricing", "AI services pricing", "quantum computing pricing", "micro SAAS pricing", "Zion Tech Group pricing"]}
        image="/og-2037-pricing.jpg"
      />
      
      <UltraFuturisticBackground variant="quantum" intensity="high">
        {/* Hero Section */}
        <section className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 bg-clip-text text-transparent mb-8">
            2037 Revolutionary Pricing
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Experience cutting-edge 2037 technology at competitive market prices. 
            Our services deliver exceptional ROI while keeping you ahead of the competition.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="#ai-pricing" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full text-white font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
              AI Services Pricing
            </Link>
            <Link href="#it-pricing" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
              IT Infrastructure Pricing
            </Link>
            <Link href="#micro-saas-pricing" className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full text-white font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300">
              Micro SAAS Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Market Overview */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            📊 2037 Market Pricing Analysis
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 p-8 rounded-2xl border border-blue-500/30">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">AI Services Market</h3>
              <div className="space-y-3 text-gray-300">
                <p><span className="text-blue-300 font-semibold">Market Size:</span> $95B+ by 2035</p>
                <p><span className="text-blue-300 font-semibold">Growth Rate:</span> 250% YoY</p>
                <p><span className="text-blue-300 font-semibold">Average Price Range:</span> $2,000 - $6,000/month</p>
                <p><span className="text-blue-300 font-semibold">ROI Expectation:</span> 300-500% within 12 months</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 p-8 rounded-2xl border border-purple-500/30">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">IT Infrastructure</h3>
              <div className="space-y-3 text-gray-300">
                <p><span className="text-purple-300 font-semibold">Market Size:</span> $120B+ by 2035</p>
                <p><span className="text-purple-300 font-semibold">Growth Rate:</span> 200% YoY</p>
                <p><span className="text-purple-300 font-semibold">Average Price Range:</span> $3,000 - $7,000/month</p>
                <p><span className="text-purple-300 font-semibold">ROI Expectation:</span> 200-400% within 18 months</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 p-8 rounded-2xl border border-green-500/30">
              <h3 className="text-2xl font-bold text-green-400 mb-4">Micro SAAS</h3>
              <div className="space-y-3 text-gray-300">
                <p><span className="text-green-300 font-semibold">Market Size:</span> $45B+ by 2035</p>
                <p><span className="text-green-300 font-semibold">Growth Rate:</span> 180% YoY</p>
                <p><span className="text-green-300 font-semibold">Average Price Range:</span> $700 - $1,500/month</p>
                <p><span className="text-green-300 font-semibold">ROI Expectation:</span> 150-300% within 6 months</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Services Pricing */}
      <section id="ai-pricing" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            🤖 AI Services Pricing
          </h2>
          <p className="text-xl text-gray-300 text-center mb-16 max-w-4xl mx-auto">
            Revolutionary AI services at competitive market prices. Our AI solutions deliver 
            exceptional value with proven ROI and cutting-edge technology.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {aiServices.map((service) => (
              <div key={service.id} className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-4xl">{service.icon}</div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-blue-400">{service.price}</div>
                    <div className="text-gray-400">{service.period}</div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{service.name}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 5).map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <span className="text-green-400 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div>
                    <span className="text-gray-400">Setup Time:</span>
                    <div className="text-white font-semibold">{service.setupTime}</div>
                  </div>
                  <div>
                    <span className="text-gray-400">Trial:</span>
                    <div className="text-white font-semibold">{service.trialDays} days</div>
                  </div>
                  <div>
                    <span className="text-gray-400">ROI:</span>
                    <div className="text-green-400 font-semibold">{service.roi}</div>
                  </div>
                  <div>
                    <span className="text-gray-400">Market Size:</span>
                    <div className="text-white font-semibold">{service.marketSize}</div>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Link href={service.link} className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-center py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                    Get Started
                  </Link>
                  <Link href={`/services/${service.id}`} className="bg-gray-700 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-600 transition-all duration-300">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services Pricing */}
      <section id="it-pricing" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            ⚡ IT Infrastructure Pricing
          </h2>
          <p className="text-xl text-gray-300 text-center mb-16 max-w-4xl mx-auto">
            Future-proof IT infrastructure with quantum-secure cloud platforms and 
            autonomous DevOps solutions at competitive enterprise pricing.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {itServices.map((service) => (
              <div key={service.id} className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-8 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-4xl">{service.icon}</div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-purple-400">{service.price}</div>
                    <div className="text-gray-400">{service.period}</div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{service.name}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-purple-400 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 5).map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <span className="text-green-400 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div>
                    <span className="text-gray-400">Setup Time:</span>
                    <div className="text-white font-semibold">{service.setupTime}</div>
                  </div>
                  <div>
                    <span className="text-gray-400">Trial:</span>
                    <div className="text-white font-semibold">{service.trialDays} days</div>
                  </div>
                  <div>
                    <span className="text-gray-400">ROI:</span>
                    <div className="text-green-400 font-semibold">{service.roi}</div>
                  </div>
                  <div>
                    <span className="text-gray-400">Market Size:</span>
                    <div className="text-white font-semibold">{service.marketSize}</div>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Link href={service.link} className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                    Get Started
                  </Link>
                  <Link href={`/services/${service.id}`} className="bg-gray-700 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-600 transition-all duration-300">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SAAS Pricing */}
      <section id="micro-saas-pricing" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
            🚀 Micro SAAS Pricing
          </h2>
          <p className="text-xl text-gray-300 text-center mb-16 max-w-4xl mx-auto">
            Specialized business solutions at accessible prices. Our micro SAAS platforms 
            deliver focused value with rapid implementation and quick ROI.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {microSaasServices.map((service) => (
              <div key={service.id} className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-8 rounded-2xl border border-gray-700 hover:border-green-500/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-4xl">{service.icon}</div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-green-400">{service.price}</div>
                    <div className="text-gray-400">{service.period}</div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{service.name}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-green-400 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 5).map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <span className="text-green-400 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div>
                    <span className="text-gray-400">Setup Time:</span>
                    <div className="text-white font-semibold">{service.setupTime}</div>
                  </div>
                  <div>
                    <span className="text-gray-400">Trial:</span>
                    <div className="text-white font-semibold">{service.trialDays} days</div>
                  </div>
                  <div>
                    <span className="text-gray-400">ROI:</span>
                    <div className="text-green-400 font-semibold">{service.roi}</div>
                  </div>
                  <div>
                    <span className="text-gray-400">Market Size:</span>
                    <div className="text-white font-semibold">{service.marketSize}</div>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Link href={service.link} className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white text-center py-3 px-6 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300">
                    Get Started
                  </Link>
                  <Link href={`/services/${service.id}`} className="bg-gray-700 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-600 transition-all duration-300">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            💎 Why Choose Zion Tech Group?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-3">Future-Ready Technology</h3>
              <p className="text-gray-300">Cutting-edge solutions that keep you ahead of the competition</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-white mb-3">Proven ROI</h3>
              <p className="text-gray-300">Documented returns of 200-500% within 6-18 months</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
              <p className="text-gray-300">Quantum-resistant security and compliance standards</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-3">Market Leadership</h3>
              <p className="text-gray-300">Leading edge in AI, quantum computing, and edge technology</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & CTA Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Get competitive pricing and exceptional value for our cutting-edge 2037 services. 
            Contact us today to discuss your needs and get a personalized quote.
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
              Get Custom Quote
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
            Competitive pricing for cutting-edge 2037 technology solutions.
          </p>
        </div>
      </footer>
        </UltraFuturisticBackground>
    </div>
  );
}