import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Grid, List, Filter,
  Brain, Atom, Shield, Target, Rocket,
  ArrowRight, Check, Palette, Heart, Truck, GraduationCap,
  Building, Globe, Zap, Lock, Cpu, Database
} from 'lucide-react';

// Import our new Q4 2025 innovative services
import { innovative2025Q4MicroSaasExpansion } from '../data/innovative-2025-q4-micro-saas-expansion';
import { innovative2025Q4ITServicesExpansion } from '../data/innovative-2025-q4-it-services-expansion';
import { innovative2025Q4AIServicesExpansion } from '../data/innovative-2025-q4-ai-services-expansion';
import { innovative2025Q4EmergingTechExpansion } from '../data/innovative-2025-q4-emerging-tech-expansion';

const Innovative2025Q4Showcase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Combine all new services
  const allNewServices = [
    ...innovative2025Q4MicroSaasExpansion,
    ...innovative2025Q4ITServicesExpansion,
    ...innovative2025Q4AIServicesExpansion,
    ...innovative2025Q4EmergingTechExpansion
  ];

  // Filter services based on search and category
  const filteredServices = allNewServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || 
                           service.category.toLowerCase().includes(selectedCategory.toLowerCase());
    
    return matchesSearch && matchesCategory;
  });

  const categories = [
    { id: 'all', name: 'All Services', icon: <Grid className="w-5 h-5" />, count: allNewServices.length },
    { id: 'micro-saas', name: 'Micro SAAS', icon: <Target className="w-5 h-5" />, count: innovative2025Q4MicroSaasExpansion.length },
    { id: 'it-services', name: 'IT Services', icon: <Cpu className="w-5 h-5" />, count: innovative2025Q4ITServicesExpansion.length },
    { id: 'ai-services', name: 'AI Services', icon: <Brain className="w-5 h-5" />, count: innovative2025Q4AIServicesExpansion.length },
    { id: 'emerging-tech', name: 'Emerging Tech', icon: <Atom className="w-5 h-5" />, count: innovative2025Q4EmergingTechExpansion.length }
  ];

  const getServicePrice = (service: any) => {
    if (service.price?.monthly) return `$${service.price.monthly}/month`;
    if (service.price) return service.price;
    return 'Contact for pricing';
  };

  const getServiceFeatures = (service: any) => {
    if (service.features) return service.features.slice(0, 5);
    return [];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <SEO 
        title="Innovative 2025 Q4 Services Showcase | Zion Tech Group"
        description="Discover our latest innovative micro SAAS, IT, AI, and emerging technology services for Q4 2025. Cutting-edge solutions with real implementation and market validation."
        keywords={["innovative services", "micro SAAS", "IT services", "AI services", "emerging technology", "2025", "Zion Tech Group"]}
        image="/og-innovative-2025-q4.jpg"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Innovative 2025 Q4 Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our latest cutting-edge micro SAAS, IT, AI, and emerging technology solutions. 
              Real implementation, market validation, and breakthrough innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-2 text-cyan-400">
                <Check className="w-5 h-5" />
                <span>Real Implementation</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-400">
                <Check className="w-5 h-5" />
                <span>Market Validated</span>
              </div>
              <div className="flex items-center space-x-2 text-purple-400">
                <Check className="w-5 h-5" />
                <span>Breakthrough Innovation</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search innovative services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-500 border-cyan-500 text-white'
                        : 'border-gray-600 text-gray-300 hover:border-cyan-500 hover:text-cyan-400'
                    }`}
                  >
                    {category.icon}
                    <span>{category.name}</span>
                    <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    viewMode === 'grid'
                      ? 'bg-cyan-500 text-white'
                      : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    viewMode === 'list'
                      ? 'bg-cyan-500 text-white'
                      : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            {filteredServices.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-20"
              >
                <div className="text-gray-400 text-xl mb-4">No services found</div>
                <p className="text-gray-500">Try adjusting your search or filter criteria</p>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={`grid gap-6 ${
                  viewMode === 'grid'
                    ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                    : 'grid-cols-1'
                }`}
              >
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`group cursor-pointer ${
                      viewMode === 'list' ? 'flex items-start space-x-6' : ''
                    }`}
                  >
                    <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 p-6 h-full group-hover:border-cyan-400/50 transition-all duration-300 ${
                      viewMode === 'list' ? 'flex-1' : ''
                    }`}>
                      {/* Service Badge */}
                      {service.popular && (
                        <div className="absolute -top-3 -right-3 z-10">
                          <span className="px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-lg">
                            Popular
                          </span>
                        </div>
                      )}

                      <div className={`${viewMode === 'list' ? 'flex items-start space-x-4' : ''}`}>
                        {/* Icon and Price */}
                        <div className={`${viewMode === 'list' ? 'flex-shrink-0' : 'flex items-start justify-between mb-4'}`}>
                          <div className={`p-3 rounded-xl bg-gradient-to-r ${service.color} ${viewMode === 'list' ? 'w-16 h-16' : ''}`}>
                            <span className="text-2xl">{service.icon}</span>
                          </div>
                          {viewMode === 'grid' && (
                            <div className="text-right">
                              <div className="text-2xl font-bold text-white">{getServicePrice(service)}</div>
                            </div>
                          )}
                        </div>

                        {/* Content */}
                        <div className={`${viewMode === 'list' ? 'flex-1' : ''}`}>
                          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                            {service.name}
                          </h3>
                          
                          <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                            {service.description}
                          </p>

                          {viewMode === 'list' && (
                            <div className="text-right mb-4">
                              <div className="text-2xl font-bold text-white">{getServicePrice(service)}</div>
                            </div>
                          )}

                          <div className="mb-4">
                            <span className="inline-block px-3 py-1 bg-gray-700/50 text-cyan-400 text-xs rounded-full">
                              {service.category}
                            </span>
                          </div>

                          <ul className="space-y-2 mb-6">
                            {getServiceFeatures(service).map((feature, idx) => (
                              <li key={idx} className="flex items-center text-sm text-gray-300">
                                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>

                          <button 
                            onClick={() => window.open(service.link, '_blank')}
                            className="w-full py-3 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                          >
                            Learn More
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us to learn more about our innovative services and how they can drive your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-2 text-cyan-400">
                <Globe className="w-5 h-5" />
                <span>https://ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-400">
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2 text-purple-400">
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
            <div className="mt-6 text-gray-400">
              <p>364 E Main St STE 1008 Middletown DE 19709</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Innovative2025Q4Showcase;