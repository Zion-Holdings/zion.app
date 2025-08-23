import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Grid, List, Filter,
  Brain, Atom, Shield, Target, Rocket,
  ArrowRight, Check, Palette, Heart, Truck, GraduationCap,
  Building, Cpu, Star, Zap, Globe, Lock, ChartBar,
  Users, Database, Cloud, Server, Network
} from 'lucide-react';

// Import our new comprehensive service data
import { advancedAIAutomationPlatforms2025 } from '../data/2025-advanced-ai-automation-platforms';
import { emergingTechBreakthroughServices2025 } from '../data/2025-emerging-tech-breakthrough-services';
import { advancedITInfrastructurePlatforms2025 } from '../data/2025-advanced-it-infrastructure-platforms';
import { advancedBusinessIntelligencePlatforms2025 } from '../data/2025-advanced-business-intelligence-platforms';

// Import existing service data for comprehensive coverage
import { ultimateRealMicroSaasServices2025 } from '../data/2025-ultimate-real-micro-saas-services';
import { innovativeAIServices } from '../data/innovative-ai-services';
import { enterpriseITServices } from '../data/enterprise-it-services';

const ComprehensiveInnovativeServicesShowcase2025: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'popular' | 'price' | 'rating'>('popular');

  // Combine all services for comprehensive showcase
  const allServices = [
    ...advancedAIAutomationPlatforms2025,
    ...emergingTechBreakthroughServices2025,
    ...advancedITInfrastructurePlatforms2025,
    ...advancedBusinessIntelligencePlatforms2025,
    ...ultimateRealMicroSaasServices2025,
    ...innovativeAIServices,
    ...enterpriseITServices
  ];

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(allServices.map(service => service.category || 'Other')))];

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'popular':
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
        case 'price':
          return parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', ''));
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
        default:
          return 0;
      }
    });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <SEO 
        title="2025 Comprehensive Innovative Services Showcase | Zion Tech Group"
        description="Discover our comprehensive portfolio of innovative micro SAAS services, AI solutions, IT infrastructure platforms, and emerging technology breakthroughs. Real services with proven ROI and market validation."
        keywords={[
          'micro SAAS', 'AI services', 'IT infrastructure', 'quantum computing', 
          'space technology', 'cybersecurity', 'business automation', 'Zion Tech Group'
        ]}
        image="https://ziontechgroup.com/og-innovative-services-2025.jpg"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            2025 Comprehensive
            <br />
            <span className="text-white">Innovative Services</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover our cutting-edge portfolio of real, market-validated micro SAAS services, 
            AI-powered solutions, and emerging technology breakthroughs that deliver 
            <span className="text-cyan-400 font-semibold"> proven ROI and competitive advantages</span>
          </motion.p>

          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center space-x-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full px-6 py-3">
              <Star className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-medium">Real Services</span>
            </div>
            <div className="flex items-center space-x-2 bg-blue-500/20 border border-blue-500/30 rounded-full px-6 py-3">
              <Zap className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 font-medium">Proven ROI</span>
            </div>
            <div className="flex items-center space-x-2 bg-purple-500/20 border border-purple-500/30 rounded-full px-6 py-3">
              <Brain className="w-5 h-5 text-purple-400" />
              <span className="text-purple-400 font-medium">AI-Powered</span>
            </div>
            <div className="flex items-center space-x-2 bg-green-500/20 border border-green-500/30 rounded-full px-6 py-3">
              <Globe className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-medium">Market Ready</span>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/30 rounded-2xl p-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">Ready to Transform Your Business?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Database className="w-4 h-4 text-blue-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-green-400" />
                <span>ziontechgroup.com</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search innovative services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-gray-800/50 border border-gray-700/30 rounded-xl text-white focus:outline-none focus:border-cyan-500/50"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>

              {/* Sort Options */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-4 py-3 bg-gray-800/50 border border-gray-700/30 rounded-xl text-white focus:outline-none focus:border-cyan-500/50"
              >
                <option value="popular">Most Popular</option>
                <option value="price">Price: Low to High</option>
                <option value="rating">Highest Rated</option>
              </select>

              {/* View Mode Toggle */}
              <div className="flex bg-gray-800/50 border border-gray-700/30 rounded-xl p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-cyan-500/20 text-cyan-400' : 'text-gray-400 hover:text-white'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-cyan-500/20 text-cyan-400' : 'text-gray-400 hover:text-white'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}
          >
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id || index}
                variants={itemVariants}
                className={viewMode === 'grid' ? '' : 'bg-gray-800/30 border border-gray-700/30 rounded-2xl p-6'}
              >
                {viewMode === 'grid' ? (
                  <ServiceCard service={service} />
                ) : (
                  <ServiceListItem service={service} />
                )}
              </motion.div>
            ))}
          </motion.div>

          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-gray-400 text-xl mb-4">No services found matching your criteria</div>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-xl transition-colors"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 border border-cyan-500/30 rounded-3xl p-12"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">
              Ready to Transform Your Business with Innovation?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of companies already leveraging our cutting-edge services to gain 
              competitive advantages and achieve breakthrough results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(6,182,212,0.3)]"
              >
                Get Started Today
              </a>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 bg-gray-800/50 border border-gray-700/30 text-white font-semibold rounded-xl hover:bg-gray-700/50 transition-all duration-300"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Enhanced Service Card Component
const ServiceCard: React.FC<{ service: any }> = ({ service }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group cursor-pointer h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative p-6 bg-gradient-to-br from-gray-900/60 to-gray-800/60 border border-gray-700/30 rounded-2xl backdrop-blur-xl hover:border-cyan-500/50 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] h-full">
        {/* Background Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Header */}
        <div className="relative z-10 mb-4">
          <div className="flex items-center justify-between mb-3">
            <div className={`w-12 h-12 bg-gradient-to-br ${service.color || 'from-cyan-500 to-blue-600'} rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.3)]`}>
              <span className="text-2xl">{service.icon || '🚀'}</span>
            </div>
            
            {/* Popular Badge */}
            {service.popular && (
              <div className="flex items-center space-x-1 bg-amber-500/20 border border-amber-500/30 rounded-full px-3 py-1">
                <Star className="w-3 h-3 text-amber-400 fill-current" />
                <span className="text-xs text-amber-400 font-medium">Popular</span>
              </div>
            )}
          </div>
          
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
            {service.name}
          </h3>
          
          <p className="text-gray-400 text-sm leading-relaxed mb-3">
            {service.tagline}
          </p>

          <p className="text-gray-300 text-sm leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Category and Price */}
        <div className="relative z-10 mb-4">
          <div className="flex items-center justify-between mb-3">
            <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full border border-cyan-500/30">
              {service.category || service.type || 'Innovation'}
            </span>
            <div className="text-right">
              <div className="text-white font-bold text-lg">
                {service.price}
                <span className="text-gray-400 text-sm font-normal">{service.period}</span>
              </div>
              {service.trialDays && (
                <div className="text-cyan-400 text-xs">
                  {service.trialDays}-day free trial
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Key Features */}
        {service.features && service.features.length > 0 && (
          <div className="relative z-10 mb-4">
            <div className="space-y-2">
              {service.features.slice(0, 3).map((feature: string, index: number) => (
                <div key={index} className="flex items-center space-x-2 text-sm text-gray-300">
                  <Check className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                  <span className="line-clamp-2">{feature}</span>
                </div>
              ))}
              {service.features.length > 3 && (
                <div className="text-xs text-gray-500 text-center pt-2">
                  +{service.features.length - 3} more features
                </div>
              )}
            </div>
          </div>
        )}

        {/* Market Position */}
        {service.marketPosition && (
          <div className="relative z-10 mb-4">
            <div className="bg-gray-800/40 rounded-lg p-3">
              <div className="text-xs text-gray-400 mb-1">Market Position</div>
              <div className="text-sm text-gray-300 line-clamp-3">
                {service.marketPosition}
              </div>
            </div>
          </div>
        )}

        {/* Action Button */}
        <div className="relative z-10">
          <a
            href={service.link || `https://ziontechgroup.com/${service.id}`}
            className="w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(6,182,212,0.3)] flex items-center justify-center space-x-2"
          >
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Hover Effects */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
          animate={{ opacity: isHovered ? 1 : 0 }}
        />
      </div>
    </motion.div>
  );
};

// Service List Item Component
const ServiceListItem: React.FC<{ service: any }> = ({ service }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 items-start">
      <div className="flex-shrink-0">
        <div className={`w-16 h-16 bg-gradient-to-br ${service.color || 'from-cyan-500 to-blue-600'} rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.3)]`}>
          <span className="text-3xl">{service.icon || '🚀'}</span>
        </div>
      </div>
      
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
            <p className="text-gray-400 text-lg mb-2">{service.tagline}</p>
            <p className="text-gray-300">{service.description}</p>
          </div>
          
          <div className="text-right ml-4">
            <div className="text-white font-bold text-2xl mb-1">
              {service.price}
              <span className="text-gray-400 text-lg font-normal">{service.period}</span>
            </div>
            {service.trialDays && (
              <div className="text-cyan-400 text-sm">
                {service.trialDays}-day free trial
              </div>
            )}
            {service.rating && (
              <div className="flex items-center justify-center space-x-1 mt-2">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-sm text-gray-300">{service.rating}</span>
                {service.reviews && (
                  <span className="text-xs text-gray-500">({service.reviews})</span>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Features</h4>
            <div className="space-y-2">
              {service.features?.slice(0, 5).map((feature: string, index: number) => (
                <div key={index} className="flex items-center space-x-2 text-sm text-gray-300">
                  <Check className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-blue-400 mb-3">Market Position</h4>
            <p className="text-sm text-gray-300 mb-3">{service.marketPosition}</p>
            
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Target Audience:</span>
                <span className="text-gray-300">{service.targetAudience}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Setup Time:</span>
                <span className="text-gray-300">{service.setupTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">ROI:</span>
                <span className="text-green-400">{service.roi}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <a
            href={service.link || `https://ziontechgroup.com/${service.id}`}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
          >
            <span>Explore Service</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveInnovativeServicesShowcase2025;