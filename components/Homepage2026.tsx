import React, { useState } from 'react';
import Layout from './layout/Layout';
import UltraAdvancedFuturisticServiceCard2036 from './ui/UltraAdvancedFuturisticServiceCard2036';
import { innovative2026AIServicesV4 } from '../data/innovative-2026-ai-services-v4';
import { innovative2026ITServicesV4 } from '../data/innovative-2026-it-services-v4';
import { innovative2026MicroSaasV4 } from '../data/innovative-2026-micro-saas-v4';
import { motion } from 'framer-motion';

const Homepage2026: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const allServices = [
    ...innovative2026AIServicesV4,
    ...innovative2026ITServicesV4,
    ...innovative2026MicroSaasV4
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀' },
    { id: 'ai', name: 'AI & Machine Learning', icon: '🧠' },
    { id: 'quantum', name: 'Quantum Technology', icon: '⚛️' },
    { id: 'security', name: 'Cybersecurity', icon: '🛡️' },
    { id: 'iot', name: 'IoT & Edge', icon: '🌐' },
    { id: 'fintech', name: 'Financial Tech', icon: '💰' },
    { id: 'it', name: 'IT Infrastructure', icon: '⚡' }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = activeCategory === 'all' || 
      service.category.toLowerCase().includes(activeCategory) ||
      service.variant.includes(activeCategory);
    
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  const getServiceVariant = (service: any) => {
    if (service.category.toLowerCase().includes('ai') || service.variant.includes('ai')) return 'ai';
    if (service.category.toLowerCase().includes('quantum') || service.variant.includes('quantum')) return 'quantum';
    if (service.category.toLowerCase().includes('security') || service.variant.includes('security')) return 'security';
    if (service.category.toLowerCase().includes('iot') || service.variant.includes('iot')) return 'iot';
    if (service.category.toLowerCase().includes('financial') || service.variant.includes('fintech')) return 'fintech';
    if (service.category.toLowerCase().includes('it') || service.variant.includes('it')) return 'it';
    return 'default';
  };

  return (
    <Layout>
      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-20 blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          <div className="text-center max-w-6xl mx-auto relative z-10">
            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Zion Tech Group
            </motion.h1>
            
            <motion.p 
              className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Pioneering the future of technology with innovative AI, Quantum Computing, and cutting-edge solutions that drive business transformation
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <motion.button 
                className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-lg rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-cyan-500/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Services
              </motion.button>
              
              <motion.button 
                className="px-10 py-5 border-2 border-cyan-400 text-cyan-400 font-semibold text-lg rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              className="mt-12 text-center text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <p className="text-lg mb-2">Ready to transform your business?</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
                <span>📱 +1 302 464 0950</span>
                <span>✉️ kleber@ziontechgroup.com</span>
                <span>📍 364 E Main St STE 1008 Middletown DE 19709</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Our Innovative Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover cutting-edge solutions that combine AI, Quantum Computing, and advanced technologies to solve tomorrow's challenges today.
              </p>
            </motion.div>

            {/* Search and Filter */}
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                {/* Search Bar */}
                <div className="relative flex-1 max-w-md">
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    🔍
                  </div>
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap gap-3">
                  {categories.map((category) => (
                    <motion.button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                        activeCategory === category.id
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                          : 'bg-black/30 border border-gray-600 text-gray-300 hover:border-cyan-500 hover:text-cyan-400'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>{category.icon}</span>
                      <span className="hidden sm:inline">{category.name}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Services Grid */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <UltraAdvancedFuturisticServiceCard2036
                    service={service}
                    variant={getServiceVariant(service)}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* No Results */}
            {filteredServices.length === 0 && (
              <motion.div 
                className="text-center py-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-semibold text-gray-300 mb-2">No services found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-black/50 to-gray-900/50">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div>
                <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">
                  {allServices.length}+
                </div>
                <div className="text-gray-400">Innovative Services</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                  {allServices.reduce((sum, service) => sum + service.customers, 0).toLocaleString()}+
                </div>
                <div className="text-gray-400">Happy Customers</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">
                  {allServices.reduce((sum, service) => sum + service.reviews, 0).toLocaleString()}+
                </div>
                <div className="text-gray-400">Customer Reviews</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">
                  4.8⭐
                </div>
                <div className="text-gray-400">Average Rating</div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Homepage2026;