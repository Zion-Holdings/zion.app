import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Grid, List, Filter, Star,
  Brain, Atom, Shield, Target, Rocket,
  ArrowRight, Check, Palette, Heart, Truck, GraduationCap,
  Building, Globe, Zap, Lock, Cpu, Database,
  DollarSign, Users, TrendingUp, Clock, Award
} from 'lucide-react';

// Import our new Q4 2025 innovative services
import { innovative2025Q4MicroSaasExpansion } from '../data/innovative-2025-q4-micro-saas-expansion';
import { innovative2025Q4ITServicesExpansion } from '../data/innovative-2025-q4-it-services-expansion';
import { innovative2025Q4AIServicesExpansion } from '../data/innovative-2025-q4-ai-services-expansion';
import { innovative2025Q4EmergingTechExpansion } from '../data/innovative-2025-q4-emerging-tech-expansion';

const Comprehensive2025Q4ServicesOverview: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  // Combine all new services
  const allNewServices = [
    ...innovative2025Q4MicroSaasExpansion,
    ...innovative2025Q4ITServicesExpansion,
    ...innovative2025Q4AIServicesExpansion,
    ...innovative2025Q4EmergingTechExpansion
  ];

  // Filter and sort services
  const filteredServices = allNewServices
    .filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || 
                             service.category.toLowerCase().includes(selectedCategory.toLowerCase());
      
      const matchesPrice = selectedPriceRange === 'all' || 
                          (() => {
                            const price = typeof service.price === 'object' ? service.price.monthly : 0;
                            switch (selectedPriceRange) {
                              case 'under-500': return price < 500;
                              case '500-1000': return price >= 500 && price < 1000;
                              case '1000-2000': return price >= 1000 && price < 2000;
                              case 'over-2000': return price >= 2000;
                              default: return true;
                            }
                          })();
      
      return matchesSearch && matchesCategory && matchesPrice;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price':
          return (typeof a.price === 'object' ? a.price.monthly : 0) - (typeof b.price === 'object' ? b.price.monthly : 0);
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
        case 'popularity':
          return (b.customers || 0) - (a.customers || 0);
        default:
          return 0;
      }
    });

  const categories = [
    { id: 'all', name: 'All Services', icon: <Grid className="w-5 h-5" />, count: allNewServices.length },
    { id: 'micro-saas', name: 'Micro SAAS', icon: <Target className="w-5 h-5" />, count: innovative2025Q4MicroSaasExpansion.length },
    { id: 'it-services', name: 'IT Services', icon: <Cpu className="w-5 h-5" />, count: innovative2025Q4ITServicesExpansion.length },
    { id: 'ai-services', name: 'AI Services', icon: <Brain className="w-5 h-5" />, count: innovative2025Q4AIServicesExpansion.length },
    { id: 'emerging-tech', name: 'Emerging Tech', icon: <Atom className="w-5 h-5" />, count: innovative2025Q4EmergingTechExpansion.length }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', count: allNewServices.length },
    { id: 'under-500', name: 'Under $500/month', count: allNewServices.filter(s => (typeof s.price === 'object' ? s.price.monthly : 0) < 500).length },
    { id: '500-1000', name: '$500 - $1,000/month', count: allNewServices.filter(s => (typeof s.price === 'object' ? s.price.monthly : 0) >= 500 && (typeof s.price === 'object' ? s.price.monthly : 0) < 1000).length },
    { id: '1000-2000', name: '$1,000 - $2,000/month', count: allNewServices.filter(s => (typeof s.price === 'object' ? s.price.monthly : 0) >= 1000 && (typeof s.price === 'object' ? s.price.monthly : 0) < 2000).length },
    { id: 'over-2000', name: 'Over $2,000/month', count: allNewServices.filter(s => (typeof s.price === 'object' ? s.price.monthly : 0) >= 2000).length }
  ];

  const sortOptions = [
    { id: 'name', name: 'Name', icon: <Target className="w-4 h-4" /> },
    { id: 'price', name: 'Price', icon: <DollarSign className="w-4 h-4" /> },
    { id: 'rating', name: 'Rating', icon: <Star className="w-4 h-4" /> },
    { id: 'popularity', name: 'Popularity', icon: <TrendingUp className="w-4 h-4" /> }
  ];

  const getServicePrice = (service: any) => {
    if (service.price?.monthly) return `$${service.price.monthly}/month`;
    if (service.price) return service.price;
    return 'Contact for pricing';
  };

  const getServiceFeatures = (service: any) => {
    if (service.features) return service.features.slice(0, 6);
    return [];
  };

  const getServiceBenefits = (service: any) => {
    if (service.benefits) return service.benefits.slice(0, 3);
    return [];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <SEO 
        title="Comprehensive 2025 Q4 Services Overview | Zion Tech Group"
        description="Complete overview of our innovative 2025 Q4 services including micro SAAS, IT, AI, and emerging technology solutions. Detailed pricing, features, and ROI analysis."
        keywords={["comprehensive services", "2025 Q4", "micro SAAS", "IT services", "AI services", "emerging technology", "pricing", "ROI", "Zion Tech Group"]}
        image="/og-comprehensive-2025-q4.jpg"
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
              Comprehensive 2025 Q4 Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Complete overview of our innovative micro SAAS, IT, AI, and emerging technology solutions. 
              Real implementation, market validation, and detailed ROI analysis.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">{allNewServices.length}</div>
                <div className="text-gray-400">Total Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">4</div>
                <div className="text-gray-400">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">100%</div>
                <div className="text-gray-400">Real Implementation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">300%+</div>
                <div className="text-gray-400">Average ROI</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Advanced Search and Filter Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="space-y-6">
              {/* Search */}
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search comprehensive services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>

              {/* Filters */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name} ({category.count})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Price Range Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Price Range</label>
                  <select
                    value={selectedPriceRange}
                    onChange={(e) => setSelectedPriceRange(e.target.value)}
                    className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    {priceRanges.map((range) => (
                      <option key={range.id} value={range.id}>
                        {range.name} ({range.count})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sort By */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Sort By</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Results Count */}
              <div className="text-center text-gray-400">
                Showing {filteredServices.length} of {allNewServices.length} services
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
                className="grid gap-8"
              >
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group cursor-pointer"
                  >
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 p-8 group-hover:border-cyan-400/50 transition-all duration-300">
                      {/* Service Badge */}
                      {service.popular && (
                        <div className="absolute -top-3 -right-3 z-10">
                          <span className="px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-lg">
                            Popular
                          </span>
                        </div>
                      )}

                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left Column - Icon and Basic Info */}
                        <div className="lg:col-span-1">
                          <div className="flex items-start justify-between mb-6">
                            <div className={`p-4 rounded-xl bg-gradient-to-r ${service.color}`}>
                              <span className="text-4xl">{service.icon}</span>
                            </div>
                            <div className="text-right">
                              <div className="text-3xl font-bold text-white">{getServicePrice(service)}</div>
                              <div className="text-sm text-gray-400">Starting Price</div>
                            </div>
                          </div>

                          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                            {service.name}
                          </h3>
                          
                          <p className="text-gray-400 mb-6 leading-relaxed">
                            {service.description}
                          </p>

                          <div className="space-y-3 mb-6">
                            <div className="flex items-center space-x-2 text-sm text-gray-300">
                              <span className="inline-block px-3 py-1 bg-gray-700/50 text-cyan-400 text-xs rounded-full">
                                {service.category}
                              </span>
                            </div>
                            
                            {service.rating && (
                              <div className="flex items-center space-x-2 text-sm text-gray-300">
                                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                <span>{service.rating}/5.0</span>
                                <span className="text-gray-500">({service.reviews} reviews)</span>
                              </div>
                            )}

                            {service.customers && (
                              <div className="flex items-center space-x-2 text-sm text-gray-300">
                                <Users className="w-4 h-4 text-blue-400" />
                                <span>{service.customers.toLocaleString()} customers</span>
                              </div>
                            )}
                          </div>

                          <button 
                            onClick={() => window.open(service.link, '_blank')}
                            className="w-full py-3 px-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                          >
                            Learn More & Get Started
                          </button>
                        </div>

                        {/* Right Column - Features and Benefits */}
                        <div className="lg:col-span-2">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Features */}
                            <div>
                              <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                                <Check className="w-5 h-5 text-cyan-400 mr-2" />
                                Key Features
                              </h4>
                              <ul className="space-y-2">
                                {getServiceFeatures(service).map((feature, idx) => (
                                  <li key={idx} className="flex items-start text-sm text-gray-300">
                                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2 mt-2 flex-shrink-0" />
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Benefits */}
                            <div>
                              <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                                <TrendingUp className="w-5 h-5 text-green-400 mr-2" />
                                Key Benefits
                              </h4>
                              <ul className="space-y-2">
                                {getServiceBenefits(service).map((benefit, idx) => (
                                  <li key={idx} className="flex items-start text-sm text-gray-300">
                                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 mt-2 flex-shrink-0" />
                                    <span>{benefit}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          {/* Additional Info */}
                          <div className="mt-6 pt-6 border-t border-gray-700">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                              {service.roi && (
                                <div className="text-center">
                                  <div className="text-cyan-400 font-semibold">ROI</div>
                                  <div className="text-gray-300">{service.roi}</div>
                                </div>
                              )}
                              {('setupTime' in service ? service.setupTime : (typeof service.price === 'object' && service.price.setupTime)) && (
                                <div className="text-center">
                                  <div className="text-blue-400 font-semibold">Setup Time</div>
                                  <div className="text-gray-300">{('setupTime' in service ? service.setupTime : (typeof service.price === 'object' ? service.price.setupTime : ''))}</div>
                                </div>
                              )}
                              {('trialDays' in service ? service.trialDays : (typeof service.price === 'object' && service.price.trialDays)) && (
                                <div className="text-center">
                                  <div className="text-purple-400 font-semibold">Free Trial</div>
                                  <div className="text-gray-300">{('trialDays' in service ? service.trialDays : (typeof service.price === 'object' ? service.price.trialDays : 0))} days</div>
                                </div>
                              )}
                            </div>
                          </div>
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
              Contact us to learn more about our comprehensive services and how they can drive your success.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center space-x-2 text-cyan-400">
                <Globe className="w-5 h-5" />
                <span>https://ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-blue-400">
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-purple-400">
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

export default Comprehensive2025Q4ServicesOverview;