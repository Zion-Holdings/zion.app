import React from 'react';
import SEO from '../components/SEO';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import AdvancedServiceCard2025 from '../components/ui/AdvancedServiceCard2025';
import Link from 'next/link';
import { advancedMicroSaasExpansion2025V2 } from '../data/2025-advanced-micro-saas-expansion-v2';
import { advancedITInfrastructureExpansion2025V2 } from '../data/2025-advanced-it-infrastructure-expansion-v2';
import { advancedAIServicesExpansion2025V2 } from '../data/2025-advanced-ai-services-expansion-v2';

export default function AdvancedServicesShowcase2025V2() {
  const allServices = [
    ...advancedMicroSaasExpansion2025V2,
    ...advancedITInfrastructureExpansion2025V2,
    ...advancedAIServicesExpansion2025V2
  ];

  const categories = [
    'AI & Data',
    'Developer Tools',
    'Cloud & Infrastructure',
    'Security & Compliance',
    'Content & Marketing',
    'E-commerce & Analytics',
    'Financial Technology',
    'Research & Development',
    'Quantum Computing',
    'Edge Computing',
    'DevOps & Automation',
    'Testing & Quality Assurance'
  ];

  const getCategoryServices = (category: string) => {
    return allServices.filter(service => 
      service.category.includes(category) || 
      service.type.includes(category)
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="2025 Advanced Services Showcase V2 - Zion Tech Group"
        description="Discover our cutting-edge micro SAAS, IT infrastructure, and AI services for 2025. Advanced solutions with AI-powered automation, quantum computing, and intelligent systems."
        keywords={["micro SAAS", "IT services", "AI services", "quantum computing", "edge computing", "DevOps automation", "AI security", "content creation", "e-commerce analytics"]}
      />
      
      <UltraFuturisticBackground>
        {/* Hero Section */}
        <div className="relative z-10 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              2025 Advanced Services Showcase V2
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Revolutionary micro SAAS, IT infrastructure, and AI services that transform businesses with cutting-edge technology, 
            intelligent automation, and quantum computing capabilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
              Get Started Today
            </Link>
            <Link href="/services" className="border border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">
              View All Services
            </Link>
          </div>
        </div>
      </div>

      {/* Contact Information Banner */}
      <div className="relative z-10 bg-black/20 backdrop-blur-sm border border-purple-500/30 rounded-lg mx-4 mb-12 p-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
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

      {/* Services by Category */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          {categories.map((category) => {
            const categoryServices = getCategoryServices(category);
            if (categoryServices.length === 0) return null;

            return (
              <div key={category} className="mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {category}
                  </span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryServices.map((service) => (
                    <AdvancedServiceCard2025
                      key={service.id}
                      service={service}
                      className="h-full"
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Market Overview Section */}
      <div className="relative z-10 bg-black/20 backdrop-blur-sm border border-purple-500/30 rounded-lg mx-4 mb-12 p-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Market Overview & Investment Opportunities
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="text-xl font-semibold text-purple-400 mb-4">Micro SAAS Market</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Global market size: $157B by 2025</li>
                <li>• Growth rate: 23.4% CAGR</li>
                <li>• High demand for AI-powered solutions</li>
                <li>• Low barrier to entry for businesses</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-purple-400 mb-4">IT Infrastructure Market</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Global market size: $89B by 2025</li>
                <li>• Growth rate: 18.7% CAGR</li>
                <li>• Cloud adoption accelerating</li>
                <li>• Security and compliance focus</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Strategy Section */}
      <div className="relative z-10 bg-black/20 backdrop-blur-sm border border-purple-500/30 rounded-lg mx-4 mb-12 p-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Competitive Pricing Strategy
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-6 rounded-lg border border-blue-500/30">
              <h3 className="text-xl font-semibold text-blue-400 mb-3">Starter Plans</h3>
              <p className="text-gray-300">Perfect for small businesses and startups</p>
              <p className="text-2xl font-bold text-white mt-2">$199 - $1,299/month</p>
            </div>
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-6 rounded-lg border border-purple-500/30">
              <h3 className="text-xl font-semibold text-purple-400 mb-3">Professional Plans</h3>
              <p className="text-gray-300">Ideal for growing businesses and teams</p>
              <p className="text-2xl font-bold text-white mt-2">$799 - $3,999/month</p>
            </div>
            <div className="bg-gradient-to-br from-pink-600/20 to-red-600/20 p-6 rounded-lg border border-pink-500/30">
              <h3 className="text-xl font-semibold text-pink-400 mb-3">Enterprise Plans</h3>
              <p className="text-gray-300">For large organizations and enterprises</p>
              <p className="text-2xl font-bold text-white mt-2">$2,199 - $19,999/month</p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Benefits Section */}
      <div className="relative z-10 bg-black/20 backdrop-blur-sm border border-purple-500/30 rounded-lg mx-4 mb-12 p-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Why Choose Zion Tech Group Services?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-left">
              <h3 className="text-xl font-semibold text-purple-400 mb-4">Technology Advantages</h3>
              <ul className="text-gray-300 space-y-2">
                <li>✓ AI-powered automation and optimization</li>
                <li>✓ Quantum computing capabilities</li>
                <li>✓ Edge computing and IoT integration</li>
                <li>✓ Advanced security and compliance</li>
                <li>✓ Real-time analytics and insights</li>
                <li>✓ Scalable cloud infrastructure</li>
              </ul>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold text-purple-400 mb-4">Business Benefits</h3>
              <ul className="text-gray-300 space-y-2">
                <li>✓ Reduce operational costs by 40-80%</li>
                <li>✓ Improve efficiency and productivity</li>
                <li>✓ Faster time to market</li>
                <li>✓ Enhanced competitive advantage</li>
                <li>✓ Scalable business operations</li>
                <li>✓ Future-proof technology stack</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of businesses already leveraging our advanced services to gain competitive advantages, 
            reduce costs, and accelerate growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
              Start Your Transformation Today
            </Link>
            <Link href="/quote" className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300">
              Get Custom Quote
            </Link>
          </div>
          <p className="text-gray-400 mt-6">
            Contact us at <span className="text-purple-400">kleber@ziontechgroup.com</span> or call <span className="text-purple-400">+1 302 464 0950</span>
          </p>
        </div>
      </div>
        </UltraFuturisticBackground>
    </div>
  );
}