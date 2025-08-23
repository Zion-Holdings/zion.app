import React from 'react';
import SEO from '../components/SEO';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import UltraFuturisticServiceCard2026 from '../components/ui/UltraFuturisticServiceCard2026';
import Link from 'next/link';
import { innovativeMicroSaasServices } from '../data/innovative-2025-micro-saas-expansions';
import { innovativeITServices } from '../data/innovative-2025-it-services-expansions';
import { innovativeAIServices } from '../data/innovative-2025-ai-services-expansions';

function toSlug(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

const categories = [
  'AI & Data',
  'Developer Tools',
  'Cloud & FinOps',
  'Observability',
  'Quality & Monitoring',
  'Cybersecurity',
  'Supply Chain',
  'Financial Services',
  'Healthcare',
  'Manufacturing',
  'Retail',
  'Energy',
  'IT Services'
];

export default function Innovative2025ExpansionsShowcase() {
      const allServices = [
      ...innovativeMicroSaasServices,
      ...innovativeITServices,
      ...innovativeAIServices
    ];

  // Group services by category
  const servicesByCategory = categories.reduce((acc, category) => {
    acc[category] = allServices.filter((service: any) => 
      service.category && service.category.toLowerCase().includes(category.toLowerCase().replace(/\s+/g, ''))
    );
    return acc;
  }, {} as Record<string, any[]>);

  // Get featured services (marked as popular)
  const featuredServices = allServices.filter((service: any) => service.popular).slice(0, 8);

  // Get latest services (assuming they have a launchDate)
  const latestServices = allServices
    .filter((service: any) => service.launchDate)
    .sort((a: any, b: any) => new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime())
    .slice(0, 8);

  return (
    <div className="min-h-screen bg-black text-white">
      <SEO 
        title="Innovative 2025 Services & Solutions - Zion Tech Group"
        description="Discover our cutting-edge innovative services including AI-powered solutions, enterprise IT services, and revolutionary micro SAAS platforms designed for 2025 and beyond."
        keywords={["AI services", "IT services", "micro SAAS", "enterprise solutions", "innovation 2025", "digital transformation", "automation"]}
      />
      
      <UltraFuturisticBackground>
        <div className="relative z-10 pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-20">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Innovative 2025 Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
                Revolutionary micro SAAS, IT services, and AI solutions designed to transform your business and drive innovation in 2025 and beyond
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-300">
                  {allServices.length}+ Innovative Services
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-300">
                  {categories.length} Categories
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full text-green-300">
                  AI-Powered Solutions
                </span>
              </div>
            </div>

            {/* Featured Services */}
            <div className="mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Featured Innovative Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuredServices.map((service: any) => (
                  <div key={service.id} className="group">
                    <Link href={`/services/${toSlug(service.name)}`}>
                      <UltraFuturisticServiceCard2026
                        service={service}
                        variant={service.variant?.includes('ai') ? 'ai' : 
                               service.variant?.includes('quantum') ? 'quantum' : 
                               service.variant?.includes('security') ? 'enterprise' : 'default'}
                        theme="quantum"
                        className="h-full transition-all duration-300 group-hover:scale-105"
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Latest Services */}
            <div className="mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Latest Innovative Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {latestServices.map((service: any) => (
                  <div key={service.id} className="group">
                    <Link href={`/services/${toSlug(service.name)}`}>
                      <UltraFuturisticServiceCard2026
                        service={service}
                        variant={service.variant?.includes('ai') ? 'ai' : 
                               service.variant?.includes('quantum') ? 'quantum' : 
                               service.variant?.includes('security') ? 'enterprise' : 'default'}
                        theme="quantum"
                        className="h-full transition-all duration-300 group-hover:scale-105"
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Services by Category */}
            <div className="space-y-20">
              {categories.map((category) => {
                const categoryServices = servicesByCategory[category];
                if (!categoryServices || categoryServices.length === 0) return null;

                return (
                  <div key={category}>
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                      {category}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {categoryServices.map((service: any) => (
                        <div key={service.id} className="group">
                          <Link href={`/services/${toSlug(service.name)}`}>
                            <UltraFuturisticServiceCard2026
                              service={service}
                              variant={service.variant?.includes('ai') ? 'ai' : 
                                     service.variant?.includes('quantum') ? 'quantum' : 
                                     service.variant?.includes('security') ? 'enterprise' : 'default'}
                              theme="quantum"
                              className="h-full transition-all duration-300 group-hover:scale-105"
                            />
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-20">
              <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-2xl p-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Ready to Transform Your Business?
                </h3>
                <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
                  Our innovative 2025 services are designed to give you a competitive edge. 
                  Contact us today to learn how we can help you achieve your digital transformation goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                      Get Started Today
                    </button>
                  </Link>
                  <Link href="/services">
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