import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Grid, List, Filter, Star, TrendingUp,
  Brain, Atom, Shield, Rocket, Cpu, Zap,
  ArrowRight, Check, Eye, Award, Users, Globe,
  ChevronDown, ChevronUp, X
} from 'lucide-react';
import Layout from '../components/layout/Layout';
import UltraFuturisticServiceCard2040 from '../components/ui/UltraFuturisticServiceCard2040';

// Import all the new service data
import { innovativeAIAutomationServices2025 } from '../data/2025-innovative-ai-automation-services';
import { innovativeITInfrastructureServices2025 } from '../data/2025-innovative-it-infrastructure-services';
import { innovativeMicroSaasExpansions2025 } from '../data/2025-innovative-micro-saas-expansions';
import { innovativeAIServicesExpansions2025 } from '../data/2025-innovative-ai-services-expansions';
import { emergingTechInnovations2025 } from '../data/2025-emerging-tech-innovations';

// Combine all services
const allServices = [
  ...innovativeAIAutomationServices2025,
  ...innovativeITInfrastructureServices2025,
  ...innovativeMicroSaasExpansions2025,
  ...innovativeAIServicesExpansions2025,
  ...emergingTechInnovations2025
];

// Service categories
const categories = [
  { id: 'all', name: 'All Services', icon: <Globe className="w-4 h-4" />, count: allServices.length },
  { id: 'ai-automation', name: 'AI Automation', icon: <Brain className="w-4 h-4" />, count: innovativeAIAutomationServices2025.length },
  { id: 'it-infrastructure', name: 'IT Infrastructure', icon: <Shield className="w-4 h-4" />, count: innovativeITInfrastructureServices2025.length },
  { id: 'micro-saas', name: 'Micro SAAS', icon: <Rocket className="w-4 h-4" />, count: innovativeMicroSaasExpansions2025.length },
  { id: 'ai-services', name: 'AI Services', icon: <Cpu className="w-4 h-4" />, count: innovativeAIServicesExpansions2025.length },
  { id: 'emerging-tech', name: 'Emerging Tech', icon: <Atom className="w-4 h-4" />, count: emergingTechInnovations2025.length }
];

const Comprehensive2040ServicesShowcase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating' | 'popularity'>('popularity');
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 20000]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || 
                             service.category.toLowerCase().includes(selectedCategory.replace('-', ' '));
      
      const matchesPrice = service.price.monthly >= priceRange[0] && service.price.monthly <= priceRange[1];
      
      const matchesFeatures = selectedFeatures.length === 0 || 
                             selectedFeatures.some(feature => 
                               service.features.some(f => f.toLowerCase().includes(feature.toLowerCase()))
                             );
      
      return matchesSearch && matchesCategory && matchesPrice && matchesFeatures;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price':
          return a.price.monthly - b.price.monthly;
        case 'rating':
          return b.rating - a.rating;
        case 'popularity':
          return b.customers - a.customers;
        default:
          return 0;
      }
    });

  // Get unique features for filtering
  const allFeatures = Array.from(new Set(allServices.flatMap(service => service.features)));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <Layout seo={{
      title: "Comprehensive 2040 Services Showcase - Zion Tech Group",
      description: "Explore our revolutionary AI, IT infrastructure, micro SAAS, and emerging technology services. Discover the future of technology with Zion Tech Group.",
      keywords: "AI services, IT infrastructure, micro SAAS, emerging technology, quantum computing, space technology, Zion Tech Group",
      url: "https://ziontechgroup.com/comprehensive-2040-services-showcase"
    }}>
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,255,255,0.1)_0%,_transparent_70%)]" />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
            >
              Comprehensive 2040
              <br />
              Services Showcase
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
            >
              Discover our revolutionary portfolio of AI automation, IT infrastructure, micro SAAS, and emerging technology services that are shaping the future of business and technology.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4 text-sm"
            >
              {categories.map(category => (
                <div key={category.id} className="flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  {category.icon}
                  <span className="text-white">{category.name}</span>
                  <span className="text-cyan-400 font-semibold">({category.count})</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Search and Filters Section */}
        <section className="px-4 sm:px-6 lg:px-8 pb-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-black/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              {/* Search Bar */}
              <div className="flex flex-col lg:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services by name, description, or category..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
                
                <div className="flex gap-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`px-4 py-3 rounded-xl border transition-all duration-200 ${
                      viewMode === 'grid' 
                        ? 'bg-cyan-500 border-cyan-500 text-black' 
                        : 'bg-white/5 border-white/20 text-white hover:bg-white/10'
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  
                  <button
                    onClick={() => setViewMode('list')}
                    className={`px-4 py-3 rounded-xl border transition-all duration-200 ${
                      viewMode === 'list' 
                        ? 'bg-cyan-500 border-cyan-500 text-black' 
                        : 'bg-white/5 border-white/20 text-white hover:bg-white/10'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                  
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className={`px-4 py-3 rounded-xl border transition-all duration-200 ${
                      showFilters 
                        ? 'bg-purple-500 border-purple-500 text-black' 
                        : 'bg-white/5 border-white/20 text-white hover:bg-white/10'
                    }`}
                  >
                    <Filter className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Category Tabs */}
              <div className="flex flex-wrap gap-2 mb-6">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-xl border transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 border-transparent text-black'
                        : 'bg-white/5 border-white/20 text-white hover:bg-white/10'
                    }`}
                  >
                    {category.icon}
                    <span>{category.name}</span>
                    <span className="text-xs opacity-75">({category.count})</span>
                  </button>
                ))}
              </div>

              {/* Advanced Filters */}
              <AnimatePresence>
                {showFilters && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="border-t border-white/10 pt-6"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      {/* Sort By */}
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Sort By</label>
                        <select
                          value={sortBy}
                          onChange={(e) => setSortBy(e.target.value as any)}
                          className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        >
                          <option value="popularity">Popularity</option>
                          <option value="rating">Rating</option>
                          <option value="price">Price</option>
                          <option value="name">Name</option>
                        </select>
                      </div>

                      {/* Price Range */}
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Price Range: ${priceRange[0]} - ${priceRange[1]}
                        </label>
                        <input
                          type="range"
                          min="0"
                          max="20000"
                          value={priceRange[1]}
                          onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                          className="w-full"
                        />
                      </div>

                      {/* Features Filter */}
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Features</label>
                        <div className="max-h-32 overflow-y-auto">
                          {allFeatures.slice(0, 10).map(feature => (
                            <label key={feature} className="flex items-center space-x-2 text-sm text-gray-400">
                              <input
                                type="checkbox"
                                checked={selectedFeatures.includes(feature)}
                                onChange={(e) => {
                                  if (e.target.checked) {
                                    setSelectedFeatures([...selectedFeatures, feature]);
                                  } else {
                                    setSelectedFeatures(selectedFeatures.filter(f => f !== feature));
                                  }
                                }}
                                className="rounded border-white/20 text-cyan-500 focus:ring-cyan-500"
                              />
                              <span>{feature}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-7xl mx-auto">
            {/* Results Summary */}
            <div className="flex items-center justify-between mb-8">
              <div className="text-gray-400">
                Showing <span className="text-white font-semibold">{filteredServices.length}</span> of{' '}
                <span className="text-white font-semibold">{allServices.length}</span> services
              </div>
              
              {searchTerm && (
                <div className="text-sm text-gray-400">
                  Search results for: <span className="text-cyan-400 font-medium">"{searchTerm}"</span>
                </div>
              )}
            </div>

            {/* Services Display */}
            {filteredServices.length > 0 ? (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className={
                  viewMode === 'grid' 
                    ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                    : 'space-y-6'
                }
              >
                {filteredServices.map((service, index) => (
                  <motion.div key={service.id} variants={itemVariants}>
                    <UltraFuturisticServiceCard2040 
                      service={service} 
                      index={index}
                    />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-20"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-gray-400 mb-6">
                  Try adjusting your search terms or filters to find what you're looking for.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setSelectedFeatures([]);
                    setPriceRange([0, 20000]);
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
                >
                  Clear All Filters
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-cyan-500/20 rounded-3xl p-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join thousands of companies already leveraging our revolutionary technology services to stay ahead of the competition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-bold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 transform hover:scale-105"
                >
                  Get Started Today
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all duration-200"
                >
                  View All Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Comprehensive2040ServicesShowcase;