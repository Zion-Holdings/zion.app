import React from 'react';
import SEO from '../components/SEO';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import Link from 'next/link';
import { innovative2025Q4Services } from '../data/innovative-2025-q4-services';
import { emergingTech2025Services } from '../data/emerging-tech-2025-services';
import { specializedBusiness2025Services } from '../data/specialized-business-2025-services';

export default function Innovative2025Q4ShowcasePage() {
  const allServices = [
    ...innovative2025Q4Services,
    ...emergingTech2025Services,
    ...specializedBusiness2025Services
  ];

  const contact = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <SEO 
        title="Innovative 2025 Q4 Micro SAAS Services Showcase | Zion Tech Group"
        description="Discover cutting-edge micro SAAS services including AI platforms, blockchain solutions, IoT platforms, and specialized business solutions. Transform your business with innovative technology."
        keywords={[
          'micro SAAS', 'AI services', 'blockchain', 'IoT', 'edge computing', 
          'business automation', 'healthcare compliance', 'financial services', 
          'innovation management'
        ]}
      />
      
      <UltraFuturisticBackground variant="quantum" intensity="high">
        {/* Hero Section */}
        <section className="relative z-10 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
            Innovative 2025 Q4
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            Micro SAAS Services Showcase
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Discover the future of business technology with our cutting-edge micro SAAS services. 
            From AI-powered platforms to blockchain solutions, we're revolutionizing how businesses operate.
          </p>
          
          {/* Contact Information */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 mb-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">Ready to Transform Your Business?</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">Contact Information</h4>
                <p className="text-gray-300 mb-2">📱 Mobile: {contact.mobile}</p>
                <p className="text-gray-300 mb-2">✉️ Email: {contact.email}</p>
                <p className="text-gray-300">📍 Address: {contact.address}</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">Get Started Today</h4>
                <p className="text-gray-300 mb-4">
                  All services include free trials and expert support to ensure your success.
                </p>
                <Link 
                  href={`mailto:${contact.email}?subject=Innovative 2025 Q4 Services Inquiry`}
                  className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Contact Us Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Revolutionary Services for the Future
          </h2>
          
          {/* Service Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: 'AI & Machine Learning',
                description: 'Cutting-edge AI platforms for content creation, research, and business intelligence',
                icon: '🤖',
                count: allServices.filter(s => s.category === 'AI & Data').length,
                color: 'from-blue-600 to-cyan-700'
              },
              {
                title: 'Blockchain & Web3',
                description: 'Decentralized solutions for identity management and smart contract security',
                icon: '🔗',
                count: allServices.filter(s => s.category === 'Blockchain & Web3').length,
                color: 'from-purple-600 to-indigo-700'
              },
              {
                title: 'IoT & Edge Computing',
                description: 'Next-generation IoT platforms and edge AI inference solutions',
                icon: '🌐',
                count: allServices.filter(s => s.category === 'IoT & Edge Computing').length,
                color: 'from-green-600 to-emerald-700'
              },
              {
                title: 'Cybersecurity',
                description: 'Advanced security solutions with AI-powered threat detection',
                icon: '🛡️',
                count: allServices.filter(s => s.category === 'Cybersecurity').length,
                color: 'from-red-600 to-orange-700'
              },
              {
                title: 'Enterprise Solutions',
                description: 'Comprehensive automation and workflow optimization platforms',
                icon: '⚙️',
                count: allServices.filter(s => s.category === 'Enterprise Solutions').length,
                color: 'from-indigo-600 to-blue-700'
              },
              {
                title: 'Specialized Industry',
                description: 'Tailored solutions for healthcare, finance, and specialized sectors',
                icon: '🏢',
                count: allServices.filter(s => ['Healthcare', 'Financial Services', 'Manufacturing', 'Education', 'Government'].includes(s.category)).length,
                color: 'from-teal-600 to-green-700'
              }
            ].map((category, index) => (
              <div key={index} className={`bg-gradient-to-br ${category.color} p-6 rounded-2xl text-white`}>
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                <p className="text-sm opacity-90 mb-4">{category.description}</p>
                <div className="text-2xl font-bold">{category.count} Services</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Featured Services
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.filter(s => s.popular).slice(0, 6).map((service, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{service.tagline}</p>
                <div className="text-2xl font-bold text-blue-400 mb-4">
                  {service.price}{service.period}
                </div>
                <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.slice(0, 3).map((feature, fIndex) => (
                    <span key={fIndex} className="bg-blue-900/50 text-blue-300 text-xs px-2 py-1 rounded">
                      {feature}
                    </span>
                  ))}
                </div>
                <Link 
                  href={service.link}
                  className="block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories Detailed */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Service Categories
          </h2>
          
          {[
            {
              title: 'AI & Machine Learning Services',
              description: 'Revolutionary AI platforms that transform how businesses operate',
              services: allServices.filter(s => s.category === 'AI & Data'),
              color: 'from-blue-600 to-cyan-700'
            },
            {
              title: 'Blockchain & Web3 Solutions',
              description: 'Decentralized technologies for the future of digital business',
              services: allServices.filter(s => s.category === 'Blockchain & Web3'),
              color: 'from-purple-600 to-indigo-700'
            },
            {
              title: 'IoT & Edge Computing Platforms',
              description: 'Next-generation IoT solutions with edge AI capabilities',
              services: allServices.filter(s => s.category === 'IoT & Edge Computing'),
              color: 'from-green-600 to-emerald-700'
            },
            {
              title: 'Cybersecurity & Privacy',
              description: 'Advanced security solutions for modern business threats',
              services: allServices.filter(s => s.category === 'Cybersecurity'),
              color: 'from-red-600 to-orange-700'
            },
            {
              title: 'Enterprise Automation',
              description: 'Comprehensive business process automation and optimization',
              services: allServices.filter(s => s.category === 'Enterprise Solutions'),
              color: 'from-indigo-600 to-blue-700'
            }
          ].map((category, index) => (
            <div key={index} className="mb-16">
              <div className={`bg-gradient-to-r ${category.color} p-8 rounded-2xl mb-8`}>
                <h3 className="text-3xl font-bold text-white mb-4">{category.title}</h3>
                <p className="text-xl text-white/90">{category.description}</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service, sIndex) => (
                  <div key={sIndex} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                    <div className="text-3xl mb-3">{service.icon}</div>
                    <h4 className="text-lg font-bold text-white mb-2">{service.name}</h4>
                    <p className="text-gray-300 text-sm mb-3">{service.tagline}</p>
                    <div className="text-xl font-bold text-blue-400 mb-3">
                      {service.price}{service.period}
                    </div>
                    <div className="text-xs text-gray-400 mb-3">
                      <strong>Market Size:</strong> {service.marketSize}<br/>
                      <strong>Growth Rate:</strong> {service.growthRate}<br/>
                      <strong>ROI:</strong> {service.roi}
                    </div>
                    <Link 
                      href={service.link}
                      className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Pricing Overview
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                tier: 'Starter',
                price: '$199',
                period: '/month',
                description: 'Perfect for small businesses and startups',
                features: [
                  'AI-powered analytics',
                  'Basic automation',
                  'Standard support',
                  'Core integrations'
                ],
                color: 'from-green-600 to-emerald-700'
              },
              {
                tier: 'Professional',
                price: '$399',
                period: '/month',
                description: 'Ideal for growing businesses',
                features: [
                  'Advanced AI capabilities',
                  'Full automation suite',
                  'Priority support',
                  'Advanced integrations',
                  'Custom workflows'
                ],
                color: 'from-blue-600 to-indigo-700',
                popular: true
              },
              {
                tier: 'Enterprise',
                price: '$799',
                period: '/month',
                description: 'For large organizations',
                features: [
                  'Enterprise AI platform',
                  'Full process automation',
                  'Dedicated support',
                  'Custom development',
                  'Advanced security',
                  'Compliance features'
                ],
                color: 'from-purple-600 to-pink-700'
              }
            ].map((plan, index) => (
              <div key={index} className={`relative bg-gradient-to-br ${plan.color} p-8 rounded-2xl text-white ${plan.popular ? 'ring-4 ring-yellow-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.tier}</h3>
                <div className="text-4xl font-bold mb-2">{plan.price}<span className="text-lg">{plan.period}</span></div>
                <p className="text-white/90 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center">
                      <span className="text-green-300 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  href={`mailto:${contact.email}?subject=${plan.tier} Plan Inquiry`}
                  className="block w-full text-center bg-white text-black font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Join hundreds of businesses already using our innovative services to gain competitive advantages, 
            reduce costs, and accelerate growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href={`mailto:${contact.email}?subject=Innovative 2025 Q4 Services Consultation`}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
            >
              Schedule Consultation
            </Link>
            <Link 
              href="tel:+13024640950"
              className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              Call Now: {contact.mobile}
            </Link>
          </div>
          
          <div className="mt-12 text-gray-400">
            <p>All services include free trials • Expert support • No long-term contracts</p>
            <p className="mt-2">Visit us at <a href={contact.website} className="text-blue-400 hover:underline">{contact.website}</a></p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-gray-900/50 backdrop-blur-sm py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Contact Information</h3>
              <p className="text-gray-300 mb-2">📱 {contact.mobile}</p>
              <p className="text-gray-300 mb-2">✉️ {contact.email}</p>
              <p className="text-gray-300">{contact.address}</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link href="/services" className="block text-gray-300 hover:text-white transition-colors">
                  All Services
                </Link>
                <Link href="/about" className="block text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
                <Link href="/contact" className="block text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Why Choose Zion Tech Group?</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>✓ Cutting-edge technology</li>
                <li>✓ Expert support team</li>
                <li>✓ Proven ROI results</li>
                <li>✓ Flexible pricing</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400">
              © 2025 Zion Tech Group. All rights reserved. Transforming businesses through innovative technology.
            </p>
          </div>
                  </div>
        </footer>
        </UltraFuturisticBackground>
      </div>
    );
  }
