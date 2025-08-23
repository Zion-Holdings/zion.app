import React from 'react';
import SEO from '../components/SEO';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import Link from 'next/link';
import { innovativeMicroSaasExpansions } from '../data/innovative-2025-micro-saas-expansions';
import { innovativeITServicesExpansions } from '../data/innovative-2025-it-services-expansions';
import { innovativeAIServicesExpansions } from '../data/innovative-2025-ai-services-expansions';

function toSlug(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

const pricingTiers = [
  {
    name: 'Starter',
    price: '$99',
    period: '/month',
    description: 'Perfect for small businesses and startups',
    features: ['Basic features', 'Standard support', 'Community access', 'Basic integrations'],
    color: 'from-green-500 to-emerald-600',
    textColor: 'text-green-400'
  },
  {
    name: 'Professional',
    price: '$299',
    period: '/month',
    description: 'Ideal for growing businesses and teams',
    features: ['Advanced features', 'Priority support', 'Custom integrations', 'Analytics dashboard'],
    color: 'from-blue-500 to-indigo-600',
    textColor: 'text-blue-400'
  },
  {
    name: 'Enterprise',
    price: '$599',
    period: '/month',
    description: 'For large organizations with complex needs',
    features: ['Full feature set', '24/7 support', 'Custom development', 'Dedicated account manager'],
    color: 'from-purple-500 to-pink-600',
    textColor: 'text-purple-400'
  }
];

export default function Innovative2025PricingShowcase() {
  const allServices = [
    ...innovativeMicroSaasExpansions,
    ...innovativeITServicesExpansions,
    ...innovativeAIServicesExpansions
  ];

  // Group services by price range
  const servicesByPriceRange = {
    'Under $200': allServices.filter(service => parseInt(service.price.replace('$', '')) < 200),
    '$200 - $400': allServices.filter(service => {
      const price = parseInt(service.price.replace('$', ''));
      return price >= 200 && price < 400;
    }),
    '$400 - $600': allServices.filter(service => {
      const price = parseInt(service.price.replace('$', ''));
      return price >= 400 && price < 600;
    }),
    '$600+': allServices.filter(service => parseInt(service.price.replace('$', '')) >= 600)
  };

  // Get services by category for comparison
  const aiServices = allServices.filter(service => service.category === 'AI & Data');
  const itServices = allServices.filter(service => service.category === 'IT Services');
  const microSaasServices = allServices.filter(service => service.category !== 'AI & Data' && service.category !== 'IT Services');

  return (
    <div className="min-h-screen bg-black text-white">
      <SEO 
        title="Innovative 2025 Pricing & Value - Zion Tech Group"
        description="Discover competitive pricing for our innovative 2025 services including AI solutions, IT services, and micro SAAS platforms. Compare value and choose the right plan for your business."
        keywords={["pricing", "AI services pricing", "IT services pricing", "micro SAAS pricing", "competitive pricing", "value proposition", "ROI"]}
      />
      
      <UltraFuturisticBackground>
        <div className="relative z-10 pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-20">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Innovative 2025 Pricing
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
                Competitive pricing for cutting-edge services that deliver exceptional ROI and transform your business
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-300">
                  {allServices.length}+ Services
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-300">
                  Competitive Pricing
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full text-green-300">
                  Proven ROI
                </span>
              </div>
            </div>

            {/* Pricing Tiers */}
            <div className="mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Flexible Pricing Tiers
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricingTiers.map((tier, index) => (
                  <div key={index} className={`bg-gradient-to-br ${tier.color} p-8 rounded-2xl border border-white/20`}>
                    <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold">{tier.price}</span>
                      <span className="text-lg text-gray-200">{tier.period}</span>
                    </div>
                    <p className="text-gray-200 mb-6">{tier.description}</p>
                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <span className="text-green-400 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className={`w-full py-3 px-6 bg-white/10 hover:bg-white/20 rounded-lg font-semibold transition-all duration-300 ${tier.textColor}`}>
                      Get Started
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Services by Price Range */}
            <div className="mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Services by Price Range
              </h2>
              <div className="space-y-12">
                {Object.entries(servicesByPriceRange).map(([range, services]) => (
                  <div key={range}>
                    <h3 className="text-2xl font-bold mb-6 text-center">{range}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {services.map((service: any) => (
                        <div key={service.id} className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-6 rounded-xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-2xl">{service.icon}</span>
                            <span className="text-xl font-bold text-green-400">{service.price}{service.period}</span>
                          </div>
                          <h4 className="text-lg font-semibold mb-2">{service.name}</h4>
                          <p className="text-gray-300 text-sm mb-4">{service.tagline}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-400">{service.category}</span>
                            <Link 
                              href={`/services/${toSlug(service.name)}`}
                              className="text-blue-400 hover:text-blue-300 text-sm transition-colors duration-300"
                            >
                              Learn More →
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Value Proposition Comparison */}
            <div className="mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Value Proposition Comparison
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* AI Services */}
                <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 p-6 rounded-xl border border-purple-500/30">
                  <h3 className="text-xl font-bold mb-4 text-purple-400">AI & Data Services</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Average Price:</span>
                      <span className="font-semibold">${Math.round(aiServices.reduce((acc, service) => acc + parseInt(service.price.replace('$', '')), 0) / aiServices.length)}/month</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Services:</span>
                      <span className="font-semibold">{aiServices.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Avg. ROI:</span>
                      <span className="font-semibold text-green-400">40-60%</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-purple-500/30">
                    <p className="text-sm text-gray-300">
                      AI-powered solutions that deliver intelligent automation, predictive analytics, and data-driven insights.
                    </p>
                  </div>
                </div>

                {/* IT Services */}
                <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 p-6 rounded-xl border border-blue-500/30">
                  <h3 className="text-xl font-bold mb-4 text-blue-400">IT Services</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Average Price:</span>
                      <span className="font-semibold">${Math.round(itServices.reduce((acc, service) => acc + parseInt(service.price.replace('$', '')), 0) / itServices.length)}/month</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Services:</span>
                      <span className="font-semibold">{itServices.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Avg. ROI:</span>
                      <span className="font-semibold text-green-400">30-50%</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-blue-500/30">
                    <p className="text-sm text-gray-300">
                      Enterprise-grade IT solutions for governance, compliance, and operational excellence.
                    </p>
                  </div>
                </div>

                {/* Micro SAAS Services */}
                <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 p-6 rounded-xl border border-green-500/30">
                  <h3 className="text-xl font-bold mb-4 text-green-400">Micro SAAS Services</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Average Price:</span>
                      <span className="font-semibold">${Math.round(microSaasServices.reduce((acc, service) => acc + parseInt(service.price.replace('$', '')), 0) / microSaasServices.length)}/month</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Services:</span>
                      <span className="font-semibold">{microSaasServices.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Avg. ROI:</span>
                      <span className="font-semibold text-green-400">50-80%</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-green-500/30">
                    <p className="text-sm text-gray-300">
                      Specialized solutions for specific business needs with rapid implementation and high ROI.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ROI Calculator */}
            <div className="mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                ROI Calculator
              </h2>
              <div className="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 p-8 rounded-2xl border border-yellow-500/30">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Calculate Your ROI</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Current Monthly Cost</label>
                        <input 
                          type="number" 
                          placeholder="$1000" 
                          className="w-full px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Expected Efficiency Gain (%)</label>
                        <input 
                          type="number" 
                          placeholder="30" 
                          className="w-full px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Service Cost</label>
                        <input 
                          type="number" 
                          placeholder="$299" 
                          className="w-full px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">ROI Results</h3>
                    <div className="space-y-4">
                      <div className="bg-gray-800/30 p-4 rounded-lg">
                        <div className="flex justify-between">
                          <span>Monthly Savings:</span>
                          <span className="font-semibold text-green-400">$300</span>
                        </div>
                      </div>
                      <div className="bg-gray-800/30 p-4 rounded-lg">
                        <div className="flex justify-between">
                          <span>Net Monthly Benefit:</span>
                          <span className="font-semibold text-green-400">$1</span>
                        </div>
                      </div>
                      <div className="bg-gray-800/30 p-4 rounded-lg">
                        <div className="flex justify-between">
                          <span>Annual ROI:</span>
                          <span className="font-semibold text-green-400">4%</span>
                        </div>
                      </div>
                      <div className="bg-gray-800/30 p-4 rounded-lg">
                        <div className="flex justify-between">
                          <span>Payback Period:</span>
                          <span className="font-semibold text-green-400">12 months</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Competitive Analysis */}
            <div className="mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Competitive Analysis
              </h2>
              <div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 p-8 rounded-2xl border border-indigo-500/30">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Market Position</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Traditional Solutions:</span>
                        <span className="text-red-400">$500-2000/month</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Our Innovative Services:</span>
                        <span className="text-green-400">$99-899/month</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Cost Savings:</span>
                        <span className="text-green-400">60-80%</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Value Advantages</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="text-green-400 mr-2">✓</span>
                        AI-powered automation
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-400 mr-2">✓</span>
                        Faster implementation
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-400 mr-2">✓</span>
                        Better ROI
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-400 mr-2">✓</span>
                        Modern technology stack
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-2xl p-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Ready to See the Value?
                </h3>
                <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
                  Our innovative 2025 services offer exceptional value with proven ROI. 
                  Contact us today for a personalized consultation and pricing quote.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                      Get Custom Quote
                    </button>
                  </Link>
                  <Link href="/innovative-2025-expansions-showcase">
                    <button className="px-8 py-3 border border-purple-500/50 hover:border-purple-400/70 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                      View All Services
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border border-blue-500/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Contact Zion Tech Group
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
                  <div>
                    <h4 className="font-semibold text-blue-400 mb-2">Phone</h4>
                    <p>+1 302 464 0950</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-400 mb-2">Email</h4>
                    <p>kleber@ziontechgroup.com</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-400 mb-2">Address</h4>
                    <p>364 E Main St STE 1008<br />Middletown DE 19709</p>
                  </div>
                </div>
                <div className="mt-6">
                  <a 
                    href="https://ziontechgroup.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  >
                    Visit our website →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UltraFuturisticBackground>
    </div>
  );
}