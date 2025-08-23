import React from 'react';
import SEO from '../components/SEO';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import Card from '../components/ui/Card';
import Link from 'next/link';
import { innovative2025MicroSaasExpansions } from '../data/innovative-2025-micro-saas-expansions';
import { innovative2025ITServicesExpansions } from '../data/innovative-2025-it-services-expansions';
import { innovative2025AIServicesExpansions } from '../data/innovative-2025-ai-services-expansions';

export default function Innovative2025ServicesShowcase() {
  const allServices = [
    ...innovative2025MicroSaasExpansions,
    ...innovative2025ITServicesExpansions,
    ...innovative2025AIServicesExpansions
  ];

  const categories = [
    'AI & Data',
    'Cybersecurity & Networking',
    'DevOps & AI',
    'Cloud & Quantum',
    'IoT & Quantum',
    'Blockchain & Quantum',
    '5G & Quantum',
    'Enterprise & AI',
    'AI & Business Automation',
    'AI & Creative Intelligence',
    'AI & Industrial IoT',
    'AI & Customer Intelligence',
    'AI & Financial Intelligence',
    'AI & Healthcare Analytics',
    'AI & Legal Intelligence',
    'AI & Education Intelligence'
  ];

  const getServicesByCategory = (category: string) => {
    return allServices.filter(service => service.category === category);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <SEO 
        title="Innovative 2025 Services Showcase - Zion Tech Group"
        description="Discover our cutting-edge 2025 services including AI-powered solutions, quantum computing platforms, and revolutionary micro SAAS services. Transform your business with next-generation technology."
        keywords="AI services, quantum computing, micro SAAS, IT services, 2025 technology, innovation, Zion Tech Group"
      />
      
      <UltraFuturisticBackground variant="quantum" intensity="high">
        {/* Hero Section */}
        <section className="relative z-10 py-20 px-4 text-center">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-8">
            Innovative 2025
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Services Showcase
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Experience the future of technology with our revolutionary AI-powered, quantum computing, and micro SAAS services. 
            Transform your business with cutting-edge solutions that deliver unprecedented results.
          </p>
          
          {/* Contact Information */}
          <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-lg rounded-2xl p-8 mb-12 border border-blue-500/30">
            <h3 className="text-2xl font-bold text-white mb-6">Get Started Today</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl mb-2">📱</div>
                <h4 className="font-semibold text-blue-400">Mobile</h4>
                <p className="text-white">+1 302 464 0950</p>
              </div>
              <div>
                <div className="text-3xl mb-2">✉️</div>
                <h4 className="font-semibold text-blue-400">Email</h4>
                <p className="text-white">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <div className="text-3xl mb-2">📍</div>
                <h4 className="font-semibold text-blue-400">Address</h4>
                <p className="text-white">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Revolutionary Services for 2025
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Micro SAAS Solutions</h3>
              <p className="text-gray-300">
                Innovative, scalable software-as-a-service solutions that transform how businesses operate and grow.
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-purple-400 mb-4">IT Services</h3>
              <p className="text-gray-300">
                Cutting-edge IT infrastructure, security, and optimization services powered by quantum computing and AI.
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold text-pink-400 mb-4">AI Services</h3>
              <p className="text-gray-300">
                Revolutionary artificial intelligence solutions that automate, optimize, and transform business operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services by Category */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {categories.map((category) => {
            const services = getServicesByCategory(category);
            if (services.length === 0) return null;
            
            return (
              <div key={category} className="mb-20">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                  {category}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {services.map((service) => (
                    <Card key={service.id} className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-lg border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                      <div className="p-6">
                        <div className="text-4xl mb-4">{service.icon}</div>
                        <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                        <p className="text-gray-300 text-sm mb-4">{service.tagline}</p>
                        
                        {/* Pricing */}
                        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg p-4 mb-4">
                          <div className="text-center">
                            <span className="text-2xl font-bold text-white">${service.price.monthly}</span>
                            <span className="text-gray-400">/month</span>
                            <div className="text-sm text-gray-400">
                              ${service.price.yearly}/year (Save {Math.round((1 - service.price.yearly / (service.price.monthly * 12)) * 100)}%)
                            </div>
                          </div>
                        </div>
                        
                        {/* Key Benefits */}
                        <div className="mb-4">
                          <h4 className="font-semibold text-blue-400 mb-2">Key Benefits:</h4>
                          <ul className="text-sm text-gray-300 space-y-1">
                            {service.benefits.slice(0, 3).map((benefit, index) => (
                              <li key={index} className="flex items-start">
                                <span className="text-green-400 mr-2">✓</span>
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* Features */}
                        <div className="mb-4">
                          <h4 className="font-semibold text-purple-400 mb-2">Top Features:</h4>
                          <ul className="text-sm text-gray-300 space-y-1">
                            {service.features.slice(0, 3).map((feature, index) => (
                              <li key={index} className="flex items-start">
                                <span className="text-blue-400 mr-2">•</span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* Market Position */}
                        <div className="mb-4 p-3 bg-gray-800/50 rounded-lg">
                          <h4 className="font-semibold text-yellow-400 mb-2">Market Position:</h4>
                          <p className="text-xs text-gray-300">{service.marketPosition}</p>
                        </div>
                        
                        {/* ROI */}
                        <div className="mb-4 p-3 bg-green-900/30 rounded-lg">
                          <h4 className="font-semibold text-green-400 mb-2">ROI:</h4>
                          <p className="text-sm text-gray-300">{service.roi}</p>
                        </div>
                        
                        {/* CTA */}
                        <div className="text-center">
                          <Link 
                            href={service.link}
                            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105"
                          >
                            Learn More
                          </Link>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Choose Zion Tech Group */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Why Choose Zion Tech Group?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-blue-400 mb-4">Proven Results</h3>
              <p className="text-gray-300">
                Our services deliver measurable ROI with customers seeing 300-1000% returns within 6-24 months.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-purple-400 mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                Leverage the latest AI, quantum computing, and emerging technologies for competitive advantage.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-pink-400 mb-4">Enterprise Security</h3>
              <p className="text-gray-300">
                SOC 2 Type II, ISO 27001, and industry-specific compliance for maximum security and trust.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">💎</div>
              <h3 className="text-xl font-bold text-yellow-400 mb-4">Premium Support</h3>
              <p className="text-gray-300">
                24/7 dedicated support, training programs, and continuous optimization for your success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Join thousands of forward-thinking companies already leveraging our innovative 2025 services. 
            Start your transformation journey today.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">Get Started</h3>
              <p className="text-gray-300 mb-6">
                Contact our team to discuss your needs and discover how our services can transform your business.
              </p>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105"
              >
                Contact Us
              </a>
            </div>
            
            <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">Learn More</h3>
              <p className="text-gray-300 mb-6">
                Explore our comprehensive service catalog and discover the perfect solutions for your business.
              </p>
              <Link 
                href="/services"
                className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105"
              >
                View All Services
              </Link>
            </div>
          </div>
          
          {/* Final Contact Information */}
          <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-lg rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-blue-400 mb-2">Call Us</h4>
                <p className="text-white text-lg">+1 302 464 0950</p>
              </div>
              <div>
                <h4 className="font-semibold text-purple-400 mb-2">Email Us</h4>
                <p className="text-white text-lg">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <h4 className="font-semibold text-pink-400 mb-2">Visit Us</h4>
                <p className="text-white text-lg">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-gray-400">
                Visit our website: <a href="https://ziontechgroup.com" className="text-blue-400 hover:text-blue-300 underline">ziontechgroup.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>
        </UltraFuturisticBackground>
    </div>
  );
}