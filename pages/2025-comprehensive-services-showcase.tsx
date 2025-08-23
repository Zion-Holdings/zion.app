import React from 'react';
import SEO from '../components/SEO';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import UltraFuturisticServiceCard2026 from '../components/ui/UltraFuturisticServiceCard2026';
import Link from 'next/link';
import { innovativeMicroSaasExpansionV2 } from '../data/2025-innovative-micro-saas-expansion-v2';
import { enterpriseAISolutionsExpansion } from '../data/2025-enterprise-ai-solutions-expansion';
import { emergingTechInnovations } from '../data/2025-emerging-tech-innovations';

export default function ComprehensiveServicesShowcase2025() {
  const allNewServices = [
    ...innovativeMicroSaasExpansionV2,
    ...enterpriseAISolutionsExpansion,
    ...emergingTechInnovations
  ];

  // Map ServiceVariant to UltraFuturisticServiceCard2026 variant
  const mapServiceVariantToCardVariant = (serviceVariant: string): 'default' | 'quantum' | 'ai' | 'automation' | 'it' | 'emerging' | 'enterprise' | 'premium' => {
    if (serviceVariant.includes('quantum')) return 'quantum';
    if (serviceVariant.includes('ai')) return 'ai';
    if (serviceVariant.includes('autonomous')) return 'automation';
    if (serviceVariant.includes('enterprise')) return 'enterprise';
    if (serviceVariant.includes('emerging')) return 'emerging';
    if (serviceVariant.includes('it') || serviceVariant.includes('devops')) return 'it';
    if (serviceVariant.includes('premium') || serviceVariant.includes('advanced')) return 'premium';
    return 'default';
  };

  const categories = [
    'AI & Data',
    'Developer Tools',
    'Cloud & FinOps',
    'Observability',
    'Quality & Monitoring',
    'Quantum Computing',
    'Space Technology',
    'Metaverse',
    'Cybersecurity',
    'Supply Chain',
    'Financial Services',
    'Healthcare',
    'Manufacturing',
    'Retail',
    'Education',
    'Government',
    'Energy',
    'Transportation',
    'Emerging Technology',
    'Blockchain & Web3',
    'IoT & Edge Computing'
  ];

  const servicesByCategory = categories.reduce((acc, category) => {
    acc[category] = allNewServices.filter(service => 
      service.category && service.category.toLowerCase().includes(category.toLowerCase().replace(/\s+/g, ''))
    );
    return acc;
  }, {} as Record<string, any[]>);

  const featuredServices = allNewServices.filter(service => service.popular).slice(0, 8);

  return (
    <div className="min-h-screen bg-black text-white">
      <SEO 
        title="2025 Comprehensive Services Showcase - Zion Tech Group"
        description="Discover our comprehensive portfolio of innovative micro SAAS services, IT solutions, and AI services. From quantum computing to autonomous systems, we deliver cutting-edge technology solutions."
        keywords={["micro SAAS", "IT services", "AI services", "quantum computing", "autonomous systems", "emerging technology", "Zion Tech Group"]}
      />
      
      <UltraFuturisticBackground variant="quantum" intensity="high">
        {/* Hero Section */}
        <section className="relative z-10 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
            2025 Comprehensive Services Showcase
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Discover our revolutionary portfolio of innovative micro SAAS services, enterprise IT solutions, and cutting-edge AI services. 
            From quantum computing to autonomous systems, we deliver the future of technology today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link 
              href="/services"
              className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="relative z-10 py-8 bg-gradient-to-r from-slate-900 to-gray-900 border-t border-b border-cyan-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">Ready to Transform Your Business?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
              <div>
                <p className="font-semibold text-white">📱 Contact Us</p>
                <p className="text-cyan-400">+1 302 464 0950</p>
              </div>
              <div>
                <p className="font-semibold text-white">✉️ Email</p>
                <p className="text-cyan-400">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <p className="font-semibold text-white">🌐 Website</p>
                <p className="text-cyan-400">https://ziontechgroup.com</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              364 E Main St STE 1008 Middletown DE 19709
            </p>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Featured Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service) => (
              <UltraFuturisticServiceCard2026
                key={service.id}
                service={service}
                variant={mapServiceVariantToCardVariant(service.variant || 'ai-futuristic')}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services by Category */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Services by Category
          </h2>
          
          {categories.map((category) => {
            const services = servicesByCategory[category];
            if (!services || services.length === 0) return null;
            
            return (
              <div key={category} className="mb-16">
                <h3 className="text-3xl font-bold mb-8 text-white border-b border-cyan-500/30 pb-4">
                  {category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {services.map((service) => (
                    <UltraFuturisticServiceCard2026
                      key={service.id}
                      service={service}
                      variant={mapServiceVariantToCardVariant(service.variant || 'ai-futuristic')}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Market Overview */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900/50 to-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
            Market Overview & Pricing
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-cyan-500/30">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Micro SAAS Services</h3>
              <p className="text-gray-300 mb-4">
                Starting from $149/month for innovative micro SAAS solutions that solve specific business challenges.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• AI-powered content optimization</li>
                <li>• Blockchain identity verification</li>
                <li>• Edge computing orchestration</li>
                <li>• Biometric authentication</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-cyan-500/30">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Enterprise AI Solutions</h3>
              <p className="text-gray-300 mb-4">
                Starting from $299/month for enterprise-grade AI solutions that transform business operations.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• AI governance platforms</li>
                <li>• Autonomous customer success</li>
                <li>• Sales intelligence suites</li>
                <li>• Data fabric platforms</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-cyan-500/30">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Emerging Technology</h3>
              <p className="text-gray-300 mb-4">
                Starting from $599/month for cutting-edge emerging technology solutions and quantum computing platforms.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Brain-computer interfaces</li>
                <li>• Quantum internet security</li>
                <li>• Autonomous vehicle AI</li>
                <li>• Holographic communication</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Zion Tech Group */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Why Choose Zion Tech Group?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-2">Innovation First</h3>
              <p className="text-gray-400">
                We stay ahead of the curve with cutting-edge technologies and innovative solutions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-xl font-bold text-white mb-2">Quality Assured</h3>
              <p className="text-gray-400">
                Every service is built with enterprise-grade quality and reliability in mind.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-white mb-2">Security Focused</h3>
              <p className="text-gray-400">
                Advanced security measures and compliance with industry standards.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-white mb-2">Proven ROI</h3>
              <p className="text-gray-400">
                Our solutions deliver measurable business value and competitive advantage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of organizations already leveraging our innovative technology solutions to gain competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Start Your Journey
            </Link>
            <Link 
              href="https://ziontechgroup.com"
              className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Visit Our Website
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Contact */}
      <section className="relative z-10 py-12 bg-gradient-to-r from-slate-900 to-gray-900 border-t border-cyan-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300 mb-6">
            <div>
              <p className="font-semibold text-white">📱 Mobile</p>
              <p className="text-cyan-400">+1 302 464 0950</p>
            </div>
            <div>
              <p className="font-semibold text-white">✉️ Email</p>
              <p className="text-cyan-400">kleber@ziontechgroup.com</p>
            </div>
            <div>
              <p className="font-semibold text-white">🌐 Website</p>
              <p className="text-cyan-400">https://ziontechgroup.com</p>
            </div>
          </div>
          <p className="text-sm text-gray-400">
            364 E Main St STE 1008 Middletown DE 19709
          </p>
        </div>
      </section>
      </UltraFuturisticBackground>
    </div>
  );
}