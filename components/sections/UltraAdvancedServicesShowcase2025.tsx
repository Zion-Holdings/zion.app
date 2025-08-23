import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, Rocket, Atom, Cpu, Target,
  ArrowRight, Star, Zap, Users, Award, Globe, Search,
  ExternalLink, Sparkles, Eye,
  Clock, CheckCircle, TrendingUp, DollarSign, Phone
} from 'lucide-react';

// Import service data
import { advancedFuturisticMicroSaasServices2025 } from '../../data/2025-advanced-futuristic-micro-saas';
import { cuttingEdgeAIInnovations2025 } from '../../data/2025-cutting-edge-ai-innovations';
import { innovativeRealMicroSaasServices2025 } from '../../data/2025-innovative-real-micro-saas-services';
import { innovativeAIServicesEnhanced2025 } from '../../data/2025-innovative-ai-services-enhanced';
import { innovativeITServicesEnhanced2025 } from '../../data/2025-innovative-it-services-enhanced';
import { emergingTechServicesEnhanced2025 } from '../../data/2025-emerging-tech-services-enhanced';
import { advancedAIAutomationServices2025 } from '../../data/2025-advanced-ai-automation-services';
import { advancedITInfrastructureServices } from '../../data/2025-advanced-it-infrastructure-services';
import { innovativeBusinessSolutions2025 } from '../../data/2025-innovative-business-solutions';

const UltraAdvancedServicesShowcase2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('popularity');
  const [viewMode, setViewMode] = useState('grid');
  const [displayCount, setDisplayCount] = useState(24);

  // Combine all services
  const allServices = [
    ...advancedFuturisticMicroSaasServices2025,
    ...cuttingEdgeAIInnovations2025,
    ...innovativeRealMicroSaasServices2025,
    ...innovativeAIServicesEnhanced2025,
    ...innovativeITServicesEnhanced2025,
    ...emergingTechServicesEnhanced2025,
    ...advancedAIAutomationServices2025,
    ...advancedITInfrastructureServices,
    ...innovativeBusinessSolutions2025
  ];

  // Categories
  const categories = [
    { id: 'all', name: 'All Services', icon: <Globe className="w-5 h-5" />, count: allServices.length },
    { id: 'ai', name: 'AI & Machine Learning', icon: <Brain className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('AI') || s.category.includes('Machine Learning')).length },
    { id: 'quantum', name: 'Quantum & Emerging Tech', icon: <Atom className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('Quantum') || s.category.includes('Emerging')).length },
    { id: 'it', name: 'IT & Infrastructure', icon: <Cpu className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('IT') || s.category.includes('Infrastructure')).length },
    { id: 'saas', name: 'Micro SAAS', icon: <Rocket className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('SAAS') || s.category.includes('Business')).length },
    { id: 'automation', name: 'Automation', icon: <Zap className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('Automation')).length }
  ];

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesCategory = selectedCategory === 'all' || 
        service.category.toLowerCase().includes(selectedCategory) ||
        service.name.toLowerCase().includes(selectedCategory);
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'popularity': {
          // Handle both old and new service structures
          const aPopular = 'popular' in a ? a.popular : false;
          const bPopular = 'popular' in b ? b.popular : false;
          return (bPopular ? 1 : 0) - (aPopular ? 1 : 0);
        }
        case 'price-low': {
          const aPrice = 'price' in a && typeof a.price === 'string' ? parseFloat(a.price.replace(/[^0-9.]/g, '')) : 
                         'pricing' in a && typeof a.pricing === 'object' && a.pricing && 'starter' in a.pricing ? (a.pricing as any).starter : 0;
          const bPrice = 'price' in b && typeof b.price === 'string' ? parseFloat(b.price.replace(/[^0-9.]/g, '')) : 
                         'pricing' in b && typeof b.pricing === 'object' && b.pricing && 'starter' in b.pricing ? (b.pricing as any).starter : 0;
          return aPrice - bPrice;
        }
        case 'price-high': {
          const aPriceHigh = 'price' in a && typeof a.price === 'string' ? parseFloat(a.price.replace(/[^0-9.]/g, '')) : 
                            'pricing' in a && typeof a.pricing === 'object' && a.pricing && 'starter' in a.pricing ? (a.pricing as any).starter : 0;
          const bPriceHigh = 'price' in b && typeof b.price === 'string' ? parseFloat(b.price.replace(/[^0-9.]/g, '')) : 
                            'pricing' in b && typeof b.pricing === 'object' && b.pricing && 'starter' in b.pricing ? (b.pricing as any).starter : 0;
          return bPriceHigh - aPriceHigh;
        }
        case 'name': {
          return a.name.localeCompare(b.name);
        }
        default:
          return 0;
      }
    });

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden"
      aria-labelledby="services-heading"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          {/* Section Header */}
          <motion.h2
            variants={itemVariants}
            id="services-heading"
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Revolutionary
            </span>
            <br />
            <span className="text-white">Technology Services</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Experience the future of technology with our cutting-edge AI, quantum computing, and autonomous business solutions
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <button
            onClick={() => handleCategoryChange('all')}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
            }`}
            aria-label="Show all services"
          >
            All Services
          </button>
          
          {serviceCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
              }`}
              aria-label={`Filter by ${category.name}`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className={`${
            viewMode === 'grid' 
              ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' 
              : 'space-y-4'
          }`}
        >
          <AnimatePresence>
            {filteredServices.slice(0, displayCount).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.03 }}
                className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group ${
                  viewMode === 'list' ? 'flex items-center space-x-6' : ''
                }`}
              >
                {/* Service Icon */}
                <div className={`${
                  viewMode === 'list' ? 'flex-shrink-0' : 'mb-4'
                }`}>
                  <div className={`w-16 h-16 bg-gradient-to-br ${'color' in service ? service.color : 'from-blue-500 to-purple-600'} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-2xl">{'icon' in service ? service.icon : '🚀'}</div>
                  </div>

                  {/* Service Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Pricing */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-white">${service.price}</span>
                      <span className="text-gray-400">{service.period}</span>
                    </div>
                    {'popular' in service && service.popular && (
                      <div className="flex-shrink-0 ml-2">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                          <Star className="w-3 h-3 mr-1" />
                          Popular
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Service Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-400">{service.delivery}</div>
                      <div className="text-sm text-gray-400">Delivery</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400">{service.successRate}</div>
                      <div className="text-sm text-gray-400">Success Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400">24/7</div>
                      <div className="text-sm text-gray-400">Support</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-white mb-4">Key Features</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div className="flex gap-3">
                    <Link href={`/services/${service.id}`} passHref>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group"
                        aria-label={`Learn more about ${service.name}`}
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                    </Link>
                    
                    <Link href="/contact" passHref>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300"
                        aria-label="Get started with this service"
                      >
                        Get Started
                      </motion.button>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center space-x-1">
                                                    <Clock className="w-3 h-3" />
                          <span>{'price' in service && typeof service.price === 'string' ? (service as any).setupTime :
                                'pricing' in service && typeof service.pricing === 'object' && service.pricing && 'setupTime' in service.pricing ? (service.pricing as any).setupTime : 'Custom'}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <DollarSign className="w-3 h-3" />
                          <span>ROI: {(service as any).roi || 'Contact us'}</span>
                        </span>
                      </div>
                      <a
                        href={'link' in service ? service.link : service.slug}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <span>Learn More</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More */}
        {filteredServices.length > displayCount && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setDisplayCount((c) => c + 24)}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold shadow-lg shadow-cyan-500/20 transition-transform hover:scale-105"
            >
              Load more ({filteredServices.length - displayCount} more)
            </button>
          </div>
        )}

        {/* No Results */}
        {filteredServices.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-2">No services found</h3>
            <p className="text-gray-400 mb-6">
              Try adjusting your search terms or category filters
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200"
            >
              Clear Filters
            </button>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-16"
        >
          <Link href="/services" passHref>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 flex items-center gap-3 mx-auto group"
              aria-label="View all our services"
            >
              View All Services
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default UltraAdvancedServicesShowcase2025;