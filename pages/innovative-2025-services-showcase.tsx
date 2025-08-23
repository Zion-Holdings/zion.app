import React from 'react';
import Head from 'next/head';
import { innovativeMicroSaasServices } from '../data/innovative-2025-micro-saas-expansions';
import { innovativeITServices } from '../data/innovative-2025-it-services-expansions';
import { innovativeAIServices } from '../data/innovative-2025-ai-services-expansions';

const Innovative2025ServicesShowcase: React.FC = () => {
  const allServices = [
    ...innovativeMicroSaasServices,
    ...innovativeITServices,
    ...innovativeAIServices
  ];

  return (
    <>
      <Head>
        <title>Innovative 2025 Services Showcase - Zion Tech Group</title>
        <meta name="description" content="Discover our cutting-edge 2025 services including AI-powered solutions, quantum computing services, and innovative IT solutions. Transform your business with Zion Tech Group's advanced technology services." />
        <meta name="keywords" content="AI services, quantum computing, IT solutions, micro SAAS, 2025 technology, Zion Tech Group" />
        <meta property="og:title" content="Innovative 2025 Services Showcase - Zion Tech Group" />
        <meta property="og:description" content="Discover our cutting-edge 2025 services including AI-powered solutions, quantum computing services, and innovative IT solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/innovative-2025-services-showcase" />
        <link rel="canonical" href="https://ziontechgroup.com/innovative-2025-services-showcase" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Innovative 2025
                </span>
                <br />
                <span className="text-white">Services Showcase</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
                Discover our cutting-edge micro SAAS, IT services, and AI solutions that are transforming industries and driving innovation in 2025 and beyond.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#services"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Explore Services
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="font-semibold text-lg mb-2">📱 Contact Us</h3>
                <p className="text-blue-100">+1 302 464 0950</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">✉️ Email</h3>
                <p className="text-blue-100">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">📍 Address</h3>
                <p className="text-blue-100">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>

        {/* Services Overview */}
        <div className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Comprehensive Service Portfolio
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our innovative 2025 services span across three key domains, providing comprehensive solutions for modern businesses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 p-8 rounded-2xl border border-blue-500/30">
                <div className="text-6xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold text-white mb-4">Micro SAAS Services</h3>
                <p className="text-gray-300 mb-4">
                  {innovativeMicroSaasServices.length} innovative micro SAAS solutions designed for rapid deployment and scalability.
                </p>
                <div className="text-blue-400 font-semibold">
                  Starting from $199/month
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 p-8 rounded-2xl border border-purple-500/30">
                <div className="text-6xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold text-white mb-4">IT Services & Solutions</h3>
                <p className="text-gray-300 mb-4">
                  {innovativeITServices.length} cutting-edge IT services covering infrastructure, security, and emerging technologies.
                </p>
                <div className="text-purple-400 font-semibold">
                  Starting from $299/month
                </div>
              </div>

              <div className="bg-gradient-to-br from-emerald-600/20 to-emerald-800/20 p-8 rounded-2xl border border-emerald-500/30">
                <div className="text-6xl mb-4">🤖</div>
                <h3 className="text-2xl font-bold text-white mb-4">AI Services & Solutions</h3>
                <p className="text-gray-300 mb-4">
                  {innovativeAIServices.length} advanced AI services leveraging machine learning, quantum computing, and autonomous systems.
                </p>
                <div className="text-emerald-400 font-semibold">
                  Starting from $299/month
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div id="services" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our most popular and innovative services that are transforming businesses across industries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-slate-600/30 hover:border-slate-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{service.icon}</div>
                    {service.popular && (
                      <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Popular
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{service.tagline}</p>

                  <div className="mb-4">
                    <div className="text-3xl font-bold text-white mb-1">
                      {service.price}
                      <span className="text-lg text-gray-400">{service.period}</span>
                    </div>
                    <div className="text-sm text-gray-400">
                      {service.trialDays} days free trial • {service.setupTime} setup
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm text-gray-400 mb-2">Category:</div>
                    <span className="inline-block bg-slate-700 text-slate-200 px-3 py-1 rounded-full text-sm">
                      {service.category}
                    </span>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm text-gray-400 mb-2">Key Features:</div>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="text-sm text-gray-300 flex items-center">
                          <span className="text-green-400 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm text-gray-400 mb-2">ROI Impact:</div>
                    <div className="text-sm text-green-400 font-semibold">{service.roi}</div>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm text-gray-400 mb-2">Market Position:</div>
                    <div className="text-sm text-gray-300">{service.marketPosition}</div>
                  </div>

                  <div className="mb-6">
                    <div className="text-sm text-gray-400 mb-2">Customer Rating:</div>
                    <div className="flex items-center">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={i < Math.floor(service.rating) ? 'text-yellow-400' : 'text-gray-600'}>
                            ★
                          </span>
                        ))}
                      </div>
                      <span className="text-white ml-2">{service.rating}</span>
                      <span className="text-gray-400 ml-2">({service.reviews} reviews)</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <a
                      href={service.link}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                    >
                      Learn More
                    </a>
                    <a
                      href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.name}&body=Hi, I'm interested in learning more about your ${service.name} service. Please provide additional information about pricing, features, and implementation.`}
                      className="border border-slate-600 text-slate-300 text-center py-3 px-4 rounded-lg font-semibold hover:bg-slate-700 hover:text-white transition-all duration-300"
                    >
                      Get Quote
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Zion Tech Group */}
        <div className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine cutting-edge technology with proven expertise to deliver exceptional results for our clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-white mb-3">Proven Expertise</h3>
                <p className="text-gray-300">
                  Over 15 years of experience in delivering innovative technology solutions across industries.
                </p>
              </div>

              <div className="text-center">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-white mb-3">Rapid Implementation</h3>
                <p className="text-gray-300">
                  Quick setup and deployment with most services ready in 1-4 weeks.
                </p>
              </div>

              <div className="text-center">
                <div className="text-5xl mb-4">🔒</div>
                <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
                <p className="text-gray-300">
                  Bank-level security and compliance with SOC 2, GDPR, and industry standards.
                </p>
              </div>

              <div className="text-center">
                <div className="text-5xl mb-4">📈</div>
                <h3 className="text-xl font-bold text-white mb-3">Measurable ROI</h3>
                <p className="text-gray-300">
                  Proven results with documented ROI improvements across all service categories.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of organizations already leveraging our innovative 2025 services to gain competitive advantages and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Service Consultation Request&body=Hi, I would like to schedule a consultation to discuss how Zion Tech Group services can help transform my business. Please let me know your availability for a call."
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Schedule Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Call Now: +1 302 464 0950
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-slate-900 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-white font-bold text-lg mb-4">Zion Tech Group</h3>
                <p className="text-gray-400 text-sm">
                  Leading provider of innovative technology solutions for modern businesses.
                </p>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-4">Contact Info</h3>
                <div className="text-gray-400 text-sm space-y-2">
                  <p>📱 +1 302 464 0950</p>
                  <p>✉️ kleber@ziontechgroup.com</p>
                  <p>📍 364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-4">Services</h3>
                <div className="text-gray-400 text-sm space-y-2">
                  <p>🚀 Micro SAAS Solutions</p>
                  <p>⚡ IT Services & Solutions</p>
                  <p>🤖 AI Services & Solutions</p>
                </div>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
                <div className="text-gray-400 text-sm space-y-2">
                  <a href="https://ziontechgroup.com" className="block hover:text-white transition-colors">Website</a>
                  <a href="mailto:kleber@ziontechgroup.com" className="block hover:text-white transition-colors">Contact</a>
                  <a href="tel:+13024640950" className="block hover:text-white transition-colors">Call Us</a>
                </div>
              </div>
            </div>
            <div className="border-t border-slate-700 mt-8 pt-8 text-center">
              <p className="text-gray-400 text-sm">
                © 2025 Zion Tech Group. All rights reserved. | 
                <a href="https://ziontechgroup.com" className="text-blue-400 hover:text-blue-300 ml-1">
                  ziontechgroup.com
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Innovative2025ServicesShowcase;