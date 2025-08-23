import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check,
  Brain, Atom, Shield, Target, Rocket, Palette, Heart, 
  Building, Cpu, Globe, Zap
} from 'lucide-react';

// Import all new comprehensive services
import { comprehensiveNewServices2025, newServiceCategories, totalNewServicesSummary, zionTechGroupContactInfo, serviceHighlights, technologyStackSummary } from '../data/2025-comprehensive-new-services-summary';

const ComprehensiveNewServicesShowcase2025: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);





  return (
    <>
      <SEO 
        title="2025 Comprehensive New Services Showcase | Zion Tech Group" 
        description="Discover our comprehensive portfolio of innovative 2025 services including AI, cybersecurity, cloud, healthcare, fintech, sustainability, space tech, and quantum computing solutions." 
        canonical="https://ziontechgroup.com/2025-comprehensive-new-services-showcase/" 
      />

      <div className="min-h-screen bg-black text-white pt-24">
        {/* Hero Section */}
        <AnimatePresence>
          {isVisible && (
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="py-20 relative overflow-hidden"
            >
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
                <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
              </div>

              <div className="container mx-auto px-4 relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-center max-w-4xl mx-auto"
                >
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    2025 Comprehensive New Services
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                    Discover our revolutionary portfolio of {totalNewServicesSummary.totalServices} innovative services across {totalNewServicesSummary.totalCategories} cutting-edge categories
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 mb-8">
                    <div className="bg-cyan-500/20 border border-cyan-500/30 rounded-full px-6 py-3">
                      <span className="text-cyan-400 font-semibold">Total Market Size: {totalNewServicesSummary.totalMarketSize}</span>
                    </div>
                    <div className="bg-purple-500/20 border border-purple-500/30 rounded-full px-6 py-3">
                      <span className="text-purple-400 font-semibold">Avg Growth: {totalNewServicesSummary.averageGrowthRate}</span>
                    </div>
                    <div className="bg-green-500/20 border border-green-500/30 rounded-full px-6 py-3">
                      <span className="text-green-400 font-semibold">Rating: {totalNewServicesSummary.averageRating}/5.0</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* Service Categories Overview */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-center mb-12 text-white"
            >
              Service Categories
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newServiceCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 border border-gray-700/30 rounded-2xl p-6 backdrop-blur-xl hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{category.name}</h3>
                    <span className="bg-cyan-500/20 text-cyan-400 text-sm px-3 py-1 rounded-full">
                      {category.count} services
                    </span>
                  </div>
                  <div className="space-y-2 text-sm text-gray-300">
                    <p>Market Size: {category.totalMarketSize}</p>
                    <p>Growth Rate: {category.averageGrowthRate}</p>
                  </div>
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Services:</h4>
                    <div className="space-y-1">
                      {category.services.slice(0, 3).map((service, idx) => (
                        <p key={idx} className="text-xs text-gray-400">• {service}</p>
                      ))}
                      {category.services.length > 3 && (
                        <p className="text-xs text-gray-500">+{category.services.length - 3} more</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Highlights */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-center mb-12 text-white"
            >
              Why Choose Our Services?
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceHighlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 border border-gray-700/30 rounded-2xl p-6 backdrop-blur-xl hover:border-green-500/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-300 leading-relaxed">{highlight}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-center mb-12 text-white"
            >
              Technology Stack
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {technologyStackSummary.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 border border-gray-700/30 rounded-xl p-4 backdrop-blur-xl hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-300 font-medium">{tech}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 border border-gray-700/30 rounded-2xl p-8 backdrop-blur-xl text-center"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Ready to Transform Your Business?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                {zionTechGroupContactInfo.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">Website</h3>
                  <a href={zionTechGroupContactInfo.website} className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    {zionTechGroupContactInfo.website}
                  </a>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">Email</h3>
                  <a href={`mailto:${zionTechGroupContactInfo.email}`} className="text-green-400 hover:text-green-300 transition-colors">
                    {zionTechGroupContactInfo.email}
                  </a>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Building className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">Address</h3>
                  <p className="text-purple-400">{zionTechGroupContactInfo.address}</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Service Summary</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-cyan-400">{totalNewServicesSummary.totalServices}</div>
                    <div className="text-sm text-gray-400">Total Services</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-400">{totalNewServicesSummary.totalCategories}</div>
                    <div className="text-sm text-gray-400">Categories</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-400">{totalNewServicesSummary.totalMarketSize}</div>
                    <div className="text-sm text-gray-400">Market Size</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-yellow-400">{totalNewServicesSummary.averageRating}</div>
                    <div className="text-sm text-gray-400">Avg Rating</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ComprehensiveNewServicesShowcase2025;