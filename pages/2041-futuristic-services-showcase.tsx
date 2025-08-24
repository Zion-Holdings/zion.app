import React, { useState } from 'react';
import SEO from '../components/SEO';
import UltraFuturisticBackground2041 from '../components/ui/UltraFuturisticBackground2041';
import UltraFuturisticServiceCard2026 from '../components/ui/UltraFuturisticServiceCard2026';
import Link from 'next/link';
import { innovative2041MicroSaasServices } from '../data/innovative-2041-micro-saas-services';
import { innovative2041ITServices } from '../data/innovative-2041-it-services';
import { innovative2041AIServices } from '../data/innovative-2041-ai-services';

function toSlug(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

const categories = [
  'All Services',
  'AI & Consciousness',
  'Quantum Computing',
  'Space Technology',
  'Metaverse & VR',
  'AI & Automation',
  'Cybersecurity',
  'Cloud Infrastructure',
  'DevOps & Automation',
  'AI & Creativity',
  'AI & Analytics',
  'AI & Psychology',
  'AI & Education',
  'AI & Ethics',
  'AI & Finance',
  'AI & Healthcare',
  'Neural Technology',
  'Data Center Infrastructure',
  'Network Security',
  'IT Operations'
];

export default function FuturisticServicesShowcase2041() {
  const [selectedCategory, setSelectedCategory] = useState('All Services');
  const [searchQuery, setSearchQuery] = useState('');

  const allServices = [
    ...innovative2041MicroSaasServices,
    ...innovative2041ITServices,
    ...innovative2041AIServices
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'All Services' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search functionality is handled by the filter
  };

  return (
    <>
      <SEO 
        title="2041 Futuristic Services Showcase - Zion Tech Group"
        description="Explore our revolutionary 2041 futuristic services including AI consciousness evolution, quantum computing, space mining automation, and more cutting-edge solutions."
        keywords={["2041 services", "futuristic technology", "AI consciousness", "quantum computing", "space mining", "metaverse", "brain-computer interface", "Zion Tech Group"]}
        image="/images/2041-futuristic-services-showcase.jpg"
        url="https://ziontechgroup.com/2041-futuristic-services-showcase"
      />
      
      <UltraFuturisticBackground2041>
        <div className="min-h-screen relative z-10">
          {/* Hero Section */}
          <section className="pt-32 pb-20 px-4 text-center">
            <div className="max-w-7xl mx-auto">
              <motion.h1 
                className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                2041 Futuristic Services
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Experience the future of technology with our revolutionary 2041 services. 
                From AI consciousness evolution to quantum space mining, discover solutions that redefine what's possible.
              </motion.p>
              
              {/* Search Bar */}
              <motion.div 
                className="max-w-2xl mx-auto mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <form onSubmit={handleSearch} className="relative">
                  <input
                    type="text"
                    placeholder="Search futuristic services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-6 py-4 bg-black/50 border border-cyan-500/30 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent backdrop-blur-sm"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-2 px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                  >
                    Search
                  </button>
                </form>
              </motion.div>
            </div>
          </section>

          {/* Category Filter */}
          <section className="px-4 mb-16">
            <div className="max-w-7xl mx-auto">
              <motion.div 
                className="flex flex-wrap justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                        : 'bg-black/30 border border-gray-600 text-gray-300 hover:border-cyan-500/50 hover:text-cyan-400'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="px-4 pb-20">
            <div className="max-w-7xl mx-auto">
              <motion.div 
                className="mb-12 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {selectedCategory === 'All Services' ? 'All Futuristic Services' : selectedCategory}
                </h2>
                <p className="text-xl text-gray-400">
                  {filteredServices.length} revolutionary services available
                </p>
              </motion.div>

              {filteredServices.length === 0 ? (
                <motion.div 
                  className="text-center py-20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-6xl mb-6">🔍</div>
                  <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
                  <p className="text-gray-400 mb-8">
                    Try adjusting your search or category filter
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('All Services');
                    }}
                    className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                  >
                    Reset Filters
                  </button>
                </motion.div>
              ) : (
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                >
                  {filteredServices.map((service, index) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                    >
                      <UltraFuturisticServiceCard2026 service={service} />
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>
          </section>

          {/* CTA Section */}
          <section className="px-4 pb-20">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div 
                className="bg-gradient-to-r from-black/50 to-gray-900/50 border border-cyan-500/30 rounded-3xl p-12 backdrop-blur-sm"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.5 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Experience the Future?
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Join the technological revolution with our cutting-edge 2041 services. 
                  Transform your business, accelerate innovation, and lead the future.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Get Started Today
                  </Link>
                  <Link
                    href="/services"
                    className="px-8 py-4 border border-cyan-500/50 text-cyan-400 rounded-2xl font-semibold hover:bg-cyan-500/10 transition-all duration-300"
                  >
                    Explore All Services
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
              </UltraFuturisticBackground2041>
    </>
  );
}

// Import motion from framer-motion
import { motion } from 'framer-motion';