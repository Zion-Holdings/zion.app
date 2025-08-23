import React from 'react';
import SEO from '../../components/SEO';
import UltraFuturisticBackground from '../../components/ui/UltraFuturisticBackground';
import UltraFuturisticServiceCard2026 from '../../components/ui/UltraFuturisticServiceCard2026';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

// Import our new service data
import { innovative2045AdvancedServices } from '../../data/innovative-2045-advanced-services';
import { innovative2045ITServices } from '../../data/innovative-2045-it-services';
import { innovative2045MicroSAASServices } from '../../data/innovative-2045-micro-saas-services';
import { aiBusinessIntelligenceServices } from '../../data/ai-business-intelligence-services';
import { cybersecurityComplianceServices } from '../../data/cybersecurity-compliance-services';
import { digitalTransformationServices } from '../../data/digital-transformation-services';
import { emergingTechnologyServices } from '../../data/emerging-technology-services';
import { industrySpecificSolutions } from '../../data/industry-specific-solutions';

// Combine all services
const allServices = [
  ...innovative2045AdvancedServices,
  ...innovative2045ITServices,
  ...innovative2045MicroSAASServices,
  ...aiBusinessIntelligenceServices,
  ...cybersecurityComplianceServices,
  ...digitalTransformationServices,
  ...emergingTechnologyServices,
  ...industrySpecificSolutions
];

// Get unique categories
const categories = [...new Set(allServices.map(service => service.category))];

// Get featured services (first 6)
const featuredServices = allServices.slice(0, 6);

// Get latest services (last 6)
const latestServices = allServices.slice(-6);

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <SEO 
        title="Services - Zion Tech Group"
        description="Discover our comprehensive suite of cutting-edge technology solutions including AI, Quantum Computing, Space Technology, and more."
        keywords={["AI services", "quantum computing", "space technology", "metaverse", "cybersecurity", "IT services", "micro SAAS"]}
      />
      
      <UltraFuturisticBackground>
        <div className="relative z-10 pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-20">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Our Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
                Discover our comprehensive suite of cutting-edge technology solutions designed to transform your business and drive innovation
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-300">
                  {allServices.length}+ Services
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-300">
                  {categories.length} Categories
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full text-green-300">
                  Latest 2025 Tech
                </span>
              </div>
              
              {/* New Comprehensive Services Showcase Link */}
              <div className="mt-12">
                <Link href="/comprehensive-2025-services-showcase">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-3 mx-auto"
                  >
                    <Sparkles className="w-6 h-6" />
                    🚀 NEW: Comprehensive 2025 Services Showcase
                    <ArrowRight className="w-6 h-6" />
                  </motion.button>
                </Link>
                <p className="text-gray-400 mt-3 text-lg">
                  Explore our complete portfolio of {allServices.length}+ innovative services with detailed features, pricing, and real-world implementations
                </p>
              </div>
            </div>

            {/* Featured Services */}
            {featuredServices.length > 0 && (
              <section className="mb-20">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Featured Services
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {featuredServices.map((service, index) => (
                    <div key={service.id} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300">
                      <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                      <p className="text-gray-300 text-sm mb-3">{service.tagline}</p>
                      <p className="text-gray-400 mb-4">{service.description}</p>
                      <div className="mb-4">
                        <span className="inline-block bg-gray-700 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium mb-2">
                          {service.category}
                        </span>
                        <div className="text-2xl font-bold text-white">{service.price}</div>
                      </div>
                      <div className="flex gap-3">
                        <Link href={service.link}>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                          >
                            Learn More
                          </motion.button>
                        </Link>
                        <Link href="/contact">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="border border-cyan-400 text-cyan-400 px-4 py-2 rounded-lg font-medium hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
                          >
                            Contact
                          </motion.button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* CTA Section */}
            <section className="text-center">
              <div className="bg-gradient-to-r from-cyan-900/20 to-purple-900/20 border border-cyan-500/20 rounded-2xl p-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Let our team of experts help you implement the right solutions for your organization.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/comprehensive-2025-services-showcase"
                    className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                  >
                    Explore All Services
                  </Link>
                  <Link
                    href="/contact"
                    className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
                  >
                    Contact Us
                  </Link>
                </div>
                <div className="mt-8 text-gray-400">
                  <p>Mobile: +1 302 464 0950</p>
                  <p>Email: kleber@ziontechgroup.com</p>
                  <p>Address: 364 E Main St STE 1008 Middletown DE 19709</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </UltraFuturisticBackground>
    </div>
  );
};

export default ServicesPage;