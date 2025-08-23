import React from 'react';
import SEO from '../components/SEO';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import Link from 'next/link';
import { advancedMicroSaasExpansion2025V2 } from '../data/2025-advanced-micro-saas-expansion-v2';
import { advancedITInfrastructureExpansion2025V2 } from '../data/2025-advanced-it-infrastructure-expansion-v2';
import { advancedAIServicesExpansion2025V2 } from '../data/2025-advanced-ai-services-expansion-v2';

export default function ComprehensivePricing2025V2() {
  const allServices = [
    ...advancedMicroSaasExpansion2025V2,
    ...advancedITInfrastructureExpansion2025V2,
    ...advancedAIServicesExpansion2025V2
  ];

  const categories = [
    {
      name: 'Micro SAAS Solutions',
      services: advancedMicroSaasExpansion2025V2,
      description: 'AI-powered business solutions for modern enterprises'
    },
    {
      name: 'IT Infrastructure Services',
      services: advancedITInfrastructureExpansion2025V2,
      description: 'Enterprise-grade infrastructure with quantum security'
    },
    {
      name: 'AI Services & Solutions',
      services: advancedAIServicesExpansion2025V2,
      description: 'Cutting-edge AI with autonomous capabilities'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="2025 Comprehensive Pricing V2 - Zion Tech Group"
        description="Complete pricing guide for our advanced micro SAAS, IT infrastructure, and AI services. Transparent pricing with enterprise-grade solutions."
        keywords={["pricing", "micro SAAS pricing", "IT services pricing", "AI services pricing", "enterprise solutions", "competitive pricing"]}
      />
      
      <UltraFuturisticBackground>
        {/* Hero Section */}
        <div className="relative z-10 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              2025 Comprehensive Pricing V2
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transparent pricing for our revolutionary micro SAAS, IT infrastructure, and AI services. 
            Choose the perfect plan for your business needs with flexible options and enterprise-grade features.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
              Get Custom Quote
            </Link>
            <Link href="/2025-advanced-services-showcase-v2" className="border border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">
              View All Services
            </Link>
          </div>
        </div>
      </div>

      {/* Pricing Overview */}
      <div className="relative z-10 bg-black/20 backdrop-blur-sm border border-purple-500/30 rounded-lg mx-4 mb-12 p-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Pricing Tiers Overview</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 p-6 rounded-lg border border-blue-500/30">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Starter</h3>
              <p className="text-gray-300 mb-4">Perfect for small businesses and startups</p>
              <p className="text-3xl font-bold text-white mb-2">$199 - $1,299</p>
              <p className="text-gray-400">per month</p>
              <ul className="text-left text-gray-300 mt-4 space-y-2">
                <li>✓ Core features</li>
                <li>✓ Basic support</li>
                <li>✓ Standard integrations</li>
                <li>✓ Community forum</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 p-6 rounded-lg border border-purple-500/30 transform scale-105">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">Professional</h3>
              <p className="text-gray-300 mb-4">Ideal for growing businesses and teams</p>
              <p className="text-3xl font-bold text-white mb-2">$799 - $3,999</p>
              <p className="text-gray-400">per month</p>
              <ul className="text-left text-gray-300 mt-4 space-y-2">
                <li>✓ All Starter features</li>
                <li>✓ Advanced features</li>
                <li>✓ Priority support</li>
                <li>✓ Custom integrations</li>
                <li>✓ Advanced analytics</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-pink-600/20 to-pink-800/20 p-6 rounded-lg border border-pink-500/30">
              <h3 className="text-2xl font-bold text-pink-400 mb-4">Enterprise</h3>
              <p className="text-gray-300 mb-4">For large organizations and enterprises</p>
              <p className="text-3xl font-bold text-white mb-2">$2,199 - $19,999</p>
              <p className="text-gray-400">per month</p>
              <ul className="text-left text-gray-300 mt-4 space-y-2">
                <li>✓ All Professional features</li>
                <li>✓ Custom solutions</li>
                <li>✓ Dedicated support</li>
                <li>✓ SLA guarantees</li>
                <li>✓ On-premise options</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Services by Category with Pricing */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          {categories.map((category) => (
            <div key={category.name} className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {category.name}
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  {category.description}
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {category.services.map((service) => (
                  <div key={service.id} className="bg-black/20 backdrop-blur-sm border border-purple-500/30 rounded-lg p-6 hover:border-purple-400/50 transition-all duration-300">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                      <p className="text-gray-300 text-sm mb-3">{service.tagline}</p>
                      <p className="text-gray-400 text-sm">{service.description}</p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-purple-400 mb-2">Pricing</h4>
                      <div className="space-y-1">
                        <div className="flex justify-between">
                          <span className="text-gray-300">Starter:</span>
                          <span className="text-white font-semibold">{service.pricing.starter}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">Professional:</span>
                          <span className="text-white font-semibold">{service.pricing.professional}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">Enterprise:</span>
                          <span className="text-white font-semibold">{service.pricing.enterprise}</span>
                        </div>
                        {service.pricing.custom && (
                          <div className="flex justify-between">
                            <span className="text-gray-300">Custom:</span>
                            <span className="text-white font-semibold">{service.pricing.custom}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-purple-400 mb-2">Key Benefits</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        {service.benefits.slice(0, 3).map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-green-400 mr-2">✓</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-purple-400 mb-2">Market Size</h4>
                      <p className="text-white font-semibold">{service.marketSize}</p>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <Link 
                        href={`/services/${service.slug}`}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded text-center font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                      >
                        Learn More
                      </Link>
                      <Link 
                        href="/contact"
                        className="border border-purple-400 text-purple-400 px-4 py-2 rounded text-center font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
                      >
                        Get Quote
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Value Proposition */}
      <div className="relative z-10 bg-black/20 backdrop-blur-sm border border-purple-500/30 rounded-lg mx-4 mb-12 p-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Why Our Pricing is Competitive
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="text-xl font-semibold text-purple-400 mb-4">Cost Savings</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Reduce operational costs by 40-80%</li>
                <li>• Eliminate need for expensive hardware</li>
                <li>• Reduce IT staff requirements</li>
                <li>• Pay-as-you-grow model</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-purple-400 mb-4">ROI Benefits</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Faster time to market</li>
                <li>• Improved efficiency and productivity</li>
                <li>• Enhanced competitive advantage</li>
                <li>• Scalable business operations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="relative z-10 bg-black/20 backdrop-blur-sm border border-purple-500/30 rounded-lg mx-4 mb-12 p-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Need Custom Pricing?</h3>
          <p className="text-gray-300 mb-6">
            Contact our sales team for custom pricing, volume discounts, and enterprise solutions.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-gray-300">
            <div>
              <p className="font-semibold text-purple-400">Contact Us</p>
              <p>Mobile: +1 302 464 0950</p>
              <p>Email: kleber@ziontechgroup.com</p>
            </div>
            <div>
              <p className="font-semibold text-purple-400">Visit Our Website</p>
              <a href="https://ziontechgroup.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                https://ziontechgroup.com
              </a>
            </div>
            <div>
              <p className="font-semibold text-purple-400">Office Address</p>
              <p>364 E Main St STE 1008</p>
              <p>Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Choose the perfect plan for your business and start transforming your operations today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
              Contact Sales Team
            </Link>
            <Link href="/2025-advanced-services-showcase-v2" className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300">
              Explore All Services
            </Link>
          </div>
          <p className="text-gray-400 mt-6">
            Get in touch for custom pricing and enterprise solutions
          </p>
        </div>
      </div>
        </UltraFuturisticBackground>
    </div>
  );
}