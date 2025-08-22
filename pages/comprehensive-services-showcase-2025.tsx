import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  innovativeRealMicroSaasServices2025 
} from '../data/2025-innovative-real-micro-saas-services';
import { 
  innovativeAIServicesEnhanced2025 
} from '../data/2025-innovative-ai-services-enhanced';
import { 
  innovativeITServicesEnhanced2025 
} from '../data/2025-innovative-it-services-enhanced';
import { 
  emergingTechServicesEnhanced2025 
} from '../data/2025-emerging-tech-services-enhanced';
import { advancedAIAutomationServices } from '../data/2026-advanced-ai-automation-services';
import { quantumCybersecurityServices } from '../data/2026-quantum-cybersecurity-services';
import { innovativeMicroSaasServices2026 } from '../data/2026-innovative-micro-saas-expansion';
import UltraFuturisticBackground2026 from '../components/ui/UltraFuturisticBackground2026';
import UltraFuturisticServiceCard2026 from '../components/ui/UltraFuturisticServiceCard2026';
import { 
  Search, 
  Filter, 
  Grid, 
  List, 
  Star, 
  TrendingUp, 
  Zap, 
  Shield, 
  Cpu, 
  Rocket,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Globe
} from 'lucide-react';

const ComprehensiveServicesShowcase2025: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'popularity' | 'category'>('popularity');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Combine all services
  const allServices = [
    ...innovativeRealMicroSaasServices2025,
    ...innovativeAIServicesEnhanced2025,
    ...innovativeITServicesEnhanced2025,
    ...emergingTechServicesEnhanced2025,
    ...advancedAIAutomationServices,
    ...quantumCybersecurityServices,
    ...innovativeMicroSaasServices2026
  ];

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category)))];

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price':
          return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
        case 'popularity':
          return (b.rating || 0) - (a.rating || 0);
        case 'category':
          return a.category.localeCompare(b.category);
        default:
          return 0;
      }
    });

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'ai & consciousness':
        return <Cpu className="w-5 h-5" />;
      case 'micro saas':
        return <Rocket className="w-5 h-5" />;
      case 'ai automation':
        return <Zap className="w-5 h-5" />;
      case 'quantum cybersecurity':
        return <Shield className="w-5 h-5" />;
      case 'it solutions':
        return <Cpu className="w-5 h-5" />;
      case 'emerging technologies':
        return <TrendingUp className="w-5 h-5" />;
      default:
        return <Star className="w-5 h-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'ai & consciousness':
        return 'from-purple-500 to-pink-500';
      case 'micro saas':
        return 'from-cyan-500 to-blue-500';
      case 'ai automation':
        return 'from-blue-500 to-cyan-500';
      case 'quantum cybersecurity':
        return 'from-green-500 to-emerald-500';
      case 'it solutions':
        return 'from-indigo-500 to-purple-500';
      case 'emerging technologies':
        return 'from-yellow-500 to-orange-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <>
      <UltraFuturisticBackground2026 intensity="high" theme="quantum" />
      
      {/* Header */}
      <header className="relative z-10 pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-600 bg-clip-text text-transparent">
                Complete Services Showcase
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Discover our comprehensive suite of revolutionary AI, quantum computing, and micro SAAS solutions that transform businesses and industries.
            </p>
            
            {/* Contact Info Banner */}
            <div className="bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl p-6 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3">
                  <Phone className="w-6 h-6 text-cyan-400" />
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors font-semibold">
                      +1 302 464 0950
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-6 h-6 text-purple-400" />
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300 transition-colors font-semibold">
                      kleber@ziontechgroup.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6 text-pink-400" />
                  <div>
                    <p className="text-gray-400 text-sm">Address</p>
                    <p className="text-gray-300 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Filters and Controls */}
      <section className="relative z-10 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl p-6"
          >
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-black/40 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              {/* Category Filter */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-black/40 border border-white/20 rounded-xl text-white focus:outline-none focus:border-cyan-400 transition-colors appearance-none cursor-pointer"
                >
                  {categories.map((category) => (
                    <option key={category} value={category} className="bg-black text-white">
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort By */}
              <div className="relative">
                <TrendingUp className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="w-full pl-10 pr-4 py-3 bg-black/40 border border-white/20 rounded-xl text-white focus:outline-none focus:border-cyan-400 transition-colors appearance-none cursor-pointer"
                >
                  <option value="popularity" className="bg-black text-white">Sort by Popularity</option>
                  <option value="name" className="bg-black text-white">Sort by Name</option>
                  <option value="price" className="bg-black text-white">Sort by Price</option>
                  <option value="category" className="bg-black text-white">Sort by Category</option>
                </select>
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 rounded-xl transition-all duration-300 ${
                    viewMode === 'grid'
                      ? 'bg-cyan-500 text-white'
                      : 'bg-black/40 text-gray-400 hover:text-white hover:bg-black/60'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 rounded-xl transition-all duration-300 ${
                    viewMode === 'list'
                      ? 'bg-cyan-500 text-white'
                      : 'bg-black/40 text-gray-400 hover:text-white hover:bg-black/60'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Results Count */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-gray-300">
                Showing <span className="text-cyan-400 font-semibold">{filteredServices.length}</span> of{' '}
                <span className="text-cyan-400 font-semibold">{allServices.length}</span> services
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative z-10 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredServices.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-6">🔍</div>
              <h3 className="text-2xl font-semibold text-white mb-4">No services found</h3>
              <p className="text-gray-400 mb-8">Try adjusting your search terms or category filter.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Clear Filters
              </button>
            </motion.div>
          ) : (
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8' : 'space-y-6'}>
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className={viewMode === 'list' ? 'bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl p-6' : ''}
                >
                  {viewMode === 'list' ? (
                    <div className="flex items-start space-x-6">
                      <div className="text-4xl">{service.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                          {service.popular && (
                            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs px-2 py-1 rounded-full font-semibold">
                              Popular
                            </span>
                          )}
                        </div>
                        <p className="text-gray-300 mb-3">{service.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                          <span className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-yellow-400" />
                            <span>{service.rating || 'N/A'}</span>
                          </span>
                          <span>•</span>
                          <span>{service.category}</span>
                          <span>•</span>
                          <span className="text-cyan-400 font-semibold">{service.price}{service.period}</span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <a
                            href={service.link}
                            className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-sm"
                          >
                            <span>Learn More</span>
                            <ArrowRight className="w-4 h-4" />
                          </a>
                          <a
                            href="mailto:kleber@ziontechgroup.com"
                            className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                          >
                            Contact Sales
                          </a>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <UltraFuturisticServiceCard2026 service={service} />
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Category Overview */}
      <section className="relative z-10 py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Service Categories
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Explore our comprehensive range of innovative solutions across multiple technology domains.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.filter(cat => cat !== 'all').map((category, index) => {
              const categoryServices = allServices.filter(service => service.category === category);
              const avgRating = categoryServices.reduce((sum, service) => sum + (service.rating || 0), 0) / categoryServices.length;
              
              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all duration-300 cursor-pointer group"
                  onClick={() => setSelectedCategory(category)}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${getCategoryColor(category)} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {getCategoryIcon(category)}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{category}</h3>
                  <p className="text-gray-400 mb-4">
                    {categoryServices.length} innovative services
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <Star className="w-5 h-5 text-yellow-400" />
                      <span className="text-white font-semibold">{avgRating.toFixed(1)}</span>
                    </div>
                    <span className="text-cyan-400 text-sm font-semibold">
                      {categoryServices.filter(s => s.popular).length} Popular
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative z-10 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Ready to Transform Your Business?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our team today to learn how our innovative services can revolutionize your operations and drive unprecedented growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Call Us Now
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
              >
                Send Email
              </a>
            </div>

            <div className="bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl mb-2">📱</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                  <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">✉️</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🌐</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Website</h3>
                  <a href="https://ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    ziontechgroup.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ComprehensiveServicesShowcase2025;