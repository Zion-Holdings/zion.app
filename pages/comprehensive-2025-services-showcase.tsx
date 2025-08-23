import React, { useState, useMemo } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Search, Grid3X3, List, Star, ArrowRight, 
  Brain, Atom, Shield, Zap, Rocket, Cpu, BarChart3,
  TrendingUp, Award, CheckCircle,
  Phone, Mail, MapPin
} from 'lucide-react';
import Link from 'next/link';

// Import all service data
import { innovativeMicroSaasServices2025 } from '../data/2025-innovative-micro-saas-expansion-v2';
import { innovativeAIServices2025 } from '../data/2025-innovative-ai-services-expansion-v2';
import { innovativeITServices2025 } from '../data/2025-innovative-it-services-expansion-v2';
import { innovative2038ITInfrastructureServices } from '../data/innovative-2038-it-infrastructure-services';
import { innovative2037AIServices } from '../data/innovative-2037-ai-services';
import { innovative2038CuttingEdgeServices } from '../data/innovative-2038-cutting-edge-services';

const Comprehensive2025ServicesShowcase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'category'>('name');

  // Combine all services
  const allServices = useMemo(() => [
    ...innovativeMicroSaasServices2025,
    ...innovativeAIServices2025,
    ...innovativeITServices2025,
    ...innovative2038ITInfrastructureServices,
    ...innovative2037AIServices,
    ...innovative2038CuttingEdgeServices
  ], []);

  // Get unique categories
  const categories = useMemo(() => {
    const cats = [...new Set(allServices.map(service => service.category))];
    return ['all', ...cats.sort()];
  }, [allServices]);

  // Filter and sort services
  const filteredServices = useMemo(() => {
    let filtered = allServices.filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name': {
          return a.name.localeCompare(b.name);
        }
        case 'price': {
          const priceA = getServicePrice(a);
          const priceB = getServicePrice(b);
          return priceA - priceB;
        }
        case 'category': {
          return a.category.localeCompare(b.category);
        }
        default: {
          return 0;
        }
      }
    });

    return filtered;
  }, [allServices, searchTerm, selectedCategory, sortBy]);

  // Helper function to get service price for sorting
  const getServicePrice = (service: any): number => {
    if (service.pricing?.starter) {
      const price = parseFloat(service.pricing.starter.replace(/[^0-9.]/g, ''));
      return isNaN(price) ? 0 : price;
    }
    if (service.pricing?.monthly) return service.pricing.monthly;
    if (service.price?.monthly) return service.price.monthly;
    if (typeof service.price === 'string') {
      const price = parseFloat(service.price.replace(/[^0-9.]/g, ''));
      return isNaN(price) ? 0 : price;
    }
    if (service.marketPrice) {
      const price = parseFloat(service.marketPrice.replace(/[^0-9.]/g, ''));
      return isNaN(price) ? 0 : price;
    }
    return 0;
  };

  // Helper function to get service pricing display
  const getServicePricing = (service: any): string => {
    if (service.pricing?.starter) return service.pricing.starter;
    if (service.pricing?.monthly) return `$${service.pricing.monthly}/month`;
    if (service.price?.monthly) return `$${service.price.monthly}/month`;
    if (typeof service.price === 'string') return service.price;
    if (service.marketPrice) return service.marketPrice;
    return 'Contact for pricing';
  };

  // Get category icon
  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'ai':
      case 'artificial intelligence':
        return <Brain className="w-5 h-5" />;
      case 'quantum':
      case 'quantum computing':
        return <Atom className="w-5 h-5" />;
      case 'cybersecurity':
      case 'security':
        return <Shield className="w-5 h-5" />;
      case 'automation':
        return <Zap className="w-5 h-5" />;
      case 'micro saas':
      case 'saas':
        return <Rocket className="w-5 h-5" />;
      case 'it infrastructure':
      case 'infrastructure':
        return <Cpu className="w-5 h-5" />;
      case 'data analytics':
      case 'analytics':
        return <BarChart3 className="w-5 h-5" />;
      default:
        return <Star className="w-5 h-5" />;
    }
  };

  // Get category color
  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'ai':
      case 'artificial intelligence':
        return 'from-purple-500 to-pink-500';
      case 'quantum':
      case 'quantum computing':
        return 'from-blue-500 to-cyan-500';
      case 'cybersecurity':
      case 'security':
        return 'from-red-500 to-pink-500';
      case 'automation':
        return 'from-orange-500 to-red-500';
      case 'micro saas':
      case 'saas':
        return 'from-green-500 to-emerald-500';
      case 'it infrastructure':
      case 'infrastructure':
        return 'from-indigo-500 to-purple-500';
      case 'data analytics':
      case 'analytics':
        return 'from-cyan-500 to-blue-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <Layout>
      <main className="relative z-10 min-h-screen" role="main" aria-label="Comprehensive 2025 Services Showcase">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-black/50 to-purple-900/20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
          <div className="max-w-7xl mx-auto relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Comprehensive 2025 Services Showcase
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Discover our complete portfolio of revolutionary technology solutions designed to transform your business and drive unprecedented growth
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center space-x-2 text-cyan-400">
                  <Star className="w-5 h-5" />
                  <span className="text-lg font-semibold">{allServices.length}+ Services Available</span>
                </div>
                <div className="flex items-center space-x-2 text-purple-400">
                  <TrendingUp className="w-5 h-5" />
                  <span className="text-lg font-semibold">Cutting-Edge Technology</span>
                </div>
                <div className="flex items-center space-x-2 text-green-400">
                  <Award className="w-5 h-5" />
                  <span className="text-lg font-semibold">Industry Leading</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 px-4 bg-black/30">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center space-x-4">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                >
                  {categories.map(category => (
                    <option key={category} value={category} className="bg-gray-800 text-white">
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>

                {/* Sort */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                >
                  <option value="name" className="bg-gray-800 text-white">Sort by Name</option>
                  <option value="price" className="bg-gray-800 text-white">Sort by Price</option>
                  <option value="category" className="bg-gray-800 text-white">Sort by Category</option>
                </select>

                {/* View Mode Toggle */}
                <div className="flex items-center space-x-2 bg-white/10 border border-white/20 rounded-xl p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-all duration-200 ${
                      viewMode === 'grid' 
                        ? 'bg-cyan-500 text-white' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                    aria-label="Grid view"
                  >
                    <Grid3X3 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg transition-all duration-200 ${
                      viewMode === 'list' 
                        ? 'bg-cyan-500 text-white' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                    aria-label="List view"
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Results Count */}
            <div className="mt-6 text-center">
              <p className="text-gray-300">
                Showing <span className="text-cyan-400 font-semibold">{filteredServices.length}</span> of{' '}
                <span className="text-purple-400 font-semibold">{allServices.length}</span> services
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid/List */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            {filteredServices.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-gray-500 to-gray-600 rounded-full flex items-center justify-center">
                  <Search className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
                <p className="text-gray-300 mb-8">
                  Try adjusting your search terms or category filter to find what you're looking for.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                >
                  Clear Filters
                </button>
              </motion.div>
            ) : (
              <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`group ${
                      viewMode === 'grid' 
                        ? 'bg-gradient-to-br from-white/5 to-white/10 border border-white/20 rounded-2xl p-8 hover:border-cyan-500/40 transition-all duration-300 hover:transform hover:scale-105'
                        : 'bg-gradient-to-r from-white/5 to-white/10 border border-white/20 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300'
                    }`}
                  >
                    {/* Service Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className={`w-16 h-16 bg-gradient-to-r ${getCategoryColor(service.category)} rounded-2xl flex items-center justify-center`}>
                          {getCategoryIcon(service.category)}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                            {service.name}
                          </h3>
                          <div className="flex items-center space-x-2 mt-2">
                            <span className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${getCategoryColor(service.category)} bg-opacity-20 text-white`}>
                              {service.category}
                            </span>
                            {'popular' in service && service.popular && (
                              <span className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 bg-opacity-20 text-yellow-400">
                                Popular
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      {viewMode === 'list' && (
                        <div className="text-right">
                          <div className="text-2xl font-bold text-cyan-400">
                            {getServicePricing(service)}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Service Description */}
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Service Features */}
                    {service.features && service.features.length > 0 && (
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">Key Features</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.features.slice(0, 6).map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-2 text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                        {service.features.length > 6 && (
                          <p className="text-xs text-gray-500 mt-2">
                            +{service.features.length - 6} more features
                          </p>
                        )}
                      </div>
                    )}

                    {/* Service Benefits */}
                    {'benefits' in service && service.benefits && service.benefits.length > 0 && (
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">Benefits</h4>
                        <div className="space-y-2">
                          {service.benefits.slice(0, 3).map((benefit, idx) => (
                            <div key={idx} className="flex items-start space-x-2 text-sm text-gray-300">
                              <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Service Footer */}
                    <div className="flex items-center justify-between pt-6 border-t border-white/10">
                      {viewMode === 'grid' && (
                        <div className="text-2xl font-bold text-cyan-400">
                          {getServicePricing(service)}
                        </div>
                      )}
                      <div className="flex items-center space-x-4">
                        {service.rating && (
                          <div className="flex items-center space-x-1 text-yellow-400">
                            <Star className="w-4 h-4 fill-current" />
                            <span className="text-sm font-medium">{service.rating}</span>
                          </div>
                        )}
                        <Link href={`/services#${service.id}`}>
                          <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                            <span>Learn More</span>
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-black/50 to-gray-900/50">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our team of technology experts is ready to help you implement these innovative solutions and drive unprecedented growth for your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/contact">
                  <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                    Get Started Today
                  </button>
                </Link>
                <Link href="/services">
                  <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300">
                    View All Services
                  </button>
                </Link>
                <a href="tel:+1 302 464 0950">
                  <button className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-xl hover:bg-purple-400 hover:text-black transition-all duration-300">
                    Call Us Now
                  </button>
                </a>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                  <a href="tel:+1 302 464 0950" className="text-cyan-400 hover:text-cyan-300 text-lg font-semibold transition-colors">
                    +1 302 464 0950
                  </a>
                </div>

                <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300 text-lg font-semibold transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>

                <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
                  <p className="text-green-400 text-lg font-semibold">
                    364 E Main St STE 1008<br />
                    Middletown DE 19709
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Comprehensive2025ServicesShowcase;