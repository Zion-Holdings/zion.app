import React from 'react';
import SEO from '../components/SEO';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import UltraFuturisticServiceCard2026 from '../components/ui/UltraFuturisticServiceCard2026';
import Link from 'next/link';
import { innovativeMicroSaasExpansion2025 } from '../data/2025-innovative-micro-saas-expansion';
import { innovative2025ITSolutionsExpansion } from '../data/2025-innovative-it-solutions-expansion';
import { innovative2025AISolutionsExpansion } from '../data/2025-innovative-ai-solutions-expansion';

export default function InnovativeServicesShowcase2025() {
  const allServices = [
    ...innovativeMicroSaasExpansion2025,
    ...innovative2025ITSolutionsExpansion,
    ...innovative2025AISolutionsExpansion
  ];

  const categories = [
    'AI & Machine Learning',
    'Cybersecurity & Compliance',
    'Edge Computing & IoT',
    'Quantum Computing',
    'Blockchain & Supply Chain',
    'Financial Services',
    'Healthcare & Predictive Medicine',
    'Content Creation & Marketing',
    'DevOps & Cloud Infrastructure',
    'Metaverse & Virtual Reality'
  ];

  const getServicesByCategory = (category: string) => {
    return allServices.filter(service => 
      service.category && service.category.toLowerCase().includes(category.toLowerCase().replace(/\s+/g, ''))
    );
  };

  const featuredServices = allServices.filter(service => service.popular).slice(0, 8);
  const latestServices = allServices
    .filter(service => service.launchDate)
    .sort((a, b) => new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime())
    .slice(0, 6);

  return (
    <div className="min-h-screen bg-black text-white">
      <SEO 
        title="2025 Innovative Services Showcase - Zion Tech Group"
        description="Discover our cutting-edge 2025 innovative services including AI-powered solutions, quantum computing, edge computing, and more. Transform your business with next-generation technology."
        keywords={["2025 innovative services", "AI services", "quantum computing", "edge computing", "blockchain", "cybersecurity", "IT solutions", "micro SAAS"]}
      />
      
      <UltraFuturisticBackground>
        <div className="relative z-10 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
              2025 Innovative Services Showcase
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Experience the future of technology with our cutting-edge innovative services. 
              From AI-powered solutions to quantum computing and edge computing, 
              we're delivering tomorrow's technology today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/services"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Explore All Services
              </Link>
              <Link 
                href="/contact"
                className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </UltraFuturisticBackground>



      {/* Contact Information Banner */}
      <div className="relative z-10 bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-sm border border-blue-500/30 mx-4 sm:mx-6 lg:mx-8 rounded-xl p-6 mb-12">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-blue-400 mb-4">Ready to Transform Your Business?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div>
              <p className="text-gray-300">📱 Mobile</p>
              <p className="text-white font-semibold">+1 302 464 0950</p>
            </div>
            <div>
              <p className="text-gray-300">✉️ Email</p>
              <p className="text-white font-semibold">kleber@ziontechgroup.com</p>
            </div>
            <div>
              <p className="text-gray-300">🌐 Website</p>
              <p className="text-white font-semibold">https://ziontechgroup.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Services */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Featured Innovative Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredServices.map((service) => (
              <UltraFuturisticServiceCard2026 key={service.id} service={service} />
            ))}
          </div>
        </div>
      </div>

      {/* Latest Services */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Latest Innovations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestServices.map((service) => (
              <UltraFuturisticServiceCard2026 key={service.id} service={service} />
            ))}
          </div>
        </div>
      </div>

      {/* Services by Category */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Explore by Category
          </h2>
          <div className="space-y-12">
            {categories.map((category) => {
              const categoryServices = getServicesByCategory(category);
              if (categoryServices.length === 0) return null;
              
              return (
                <div key={category} className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-white mb-6">{category}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoryServices.map((service) => (
                      <UltraFuturisticServiceCard2026 key={service.id} service={service} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Why Choose Zion Tech Group */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Why Choose Zion Tech Group?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-b from-blue-900/30 to-purple-900/30 rounded-xl border border-blue-500/30">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-3 text-blue-400">Cutting-Edge Innovation</h3>
              <p className="text-gray-300">
                We're at the forefront of technology, delivering solutions that define the future of business and technology.
              </p>
            </div>
            <div className="text-center p-6 bg-gradient-to-b from-green-900/30 to-blue-900/30 rounded-xl border border-green-500/30">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-bold mb-3 text-green-400">Proven Expertise</h3>
              <p className="text-gray-300">
                With years of experience and a track record of successful implementations, we deliver results that exceed expectations.
              </p>
            </div>
            <div className="text-center p-6 bg-gradient-to-b from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-500/30">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3 text-purple-400">Dedicated Support</h3>
              <p className="text-gray-300">
                Our team provides comprehensive support and guidance throughout your journey to digital transformation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Market Insights */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent">
            Market Insights & Trends
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-xl p-6 border border-blue-500/30">
              <h3 className="text-xl font-bold mb-4 text-blue-400">AI & Machine Learning</h3>
              <p className="text-gray-300 mb-4">
                The AI market is experiencing unprecedented growth, with businesses increasingly adopting AI solutions to gain competitive advantages.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• AI market expected to reach $1.8 trillion by 2030</li>
                <li>• 85% of customer interactions will be AI-powered by 2025</li>
                <li>• AI adoption growing 35% annually across industries</li>
              </ul>
            </div>
            <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-xl p-6 border border-purple-500/30">
              <h3 className="text-xl font-bold mb-4 text-purple-400">Quantum Computing</h3>
              <p className="text-gray-300 mb-4">
                Quantum computing is revolutionizing industries by solving previously intractable problems in optimization and cryptography.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Quantum computing market to reach $65B+ by 2030</li>
                <li>• 10-100x performance improvements for optimization problems</li>
                <li>• Early adopters gaining significant competitive advantages</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-900/50 via-purple-900/50 to-pink-900/50 backdrop-blur-sm border border-blue-500/30 rounded-xl p-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Ready to Embrace the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the ranks of forward-thinking organizations that are already transforming their businesses with our innovative services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Start Your Transformation
              </Link>
              <Link 
                href="/services"
                className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                Explore All Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Contact */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6 text-white">Get in Touch</h3>
              <p className="text-gray-300 mb-6">
                Ready to discuss how our innovative services can transform your business? 
                Our team of experts is here to help you navigate the future of technology.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-gray-400 mb-2">📱 Mobile</p>
                  <p className="text-white font-semibold">+1 302 464 0950</p>
                </div>
                <div>
                  <p className="text-gray-400 mb-2">✉️ Email</p>
                  <p className="text-white font-semibold">kleber@ziontechgroup.com</p>
                </div>
                <div>
                  <p className="text-gray-400 mb-2">📍 Address</p>
                  <p className="text-white font-semibold">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}