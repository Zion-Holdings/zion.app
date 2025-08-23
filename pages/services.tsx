import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import { 
  Search, 
  Filter, 
  SortAsc, 
  SortDesc, 
  ArrowRight, 
  Phone, 
  Mail, 
  Star,
  Zap,
  Atom,
  Check,
  Code,
  Shield,
  Brain,
  Database,
  Cloud,
  Lock,
  Network,
  Server,
  Cpu,
  Globe,
  BarChart3,
  Users,
  Target,
  TrendingUp,
  Rocket,
  Sparkles,
  Building
} from 'lucide-react';

// Import service data
import { realMicroSaasServices } from '../data/real-micro-saas-services';
import { innovative2025MicroSaasExpansionV2 } from '../data/innovative-2025-micro-saas-expansion-v2';
import { innovative2025ITServicesExpansionV2 } from '../data/innovative-2025-it-services-expansion-v2';
import { innovative2025AIServicesExpansionV2 } from '../data/innovative-2025-ai-services-expansion-v2';

// Define a unified Service interface
interface Service {
  id?: string;
  slug?: string;
  name: string;
  tagline?: string;
  description?: string;
  category?: string;
  price?: {
    monthly: number;
    yearly: number;
    currency: string;
    trialDays: number;
    setupTime: string;
  };
  features?: string[];
  benefits?: string[];
  targetAudience?: string[];
  marketPosition?: string;
  competitors?: string[];
  techStack?: string[];
  realImplementation?: boolean;
  implementationDetails?: string;
  roi?: string;
  useCases?: string[];
  integrations?: string[];
  support?: string;
  compliance?: string[];
  link?: string;
  icon?: string;
  color?: string;
  popular?: boolean;
  launchDate?: string;
  customers?: number;
  rating?: number;
  reviews?: number;
}

const ServicesPage: React.FC = () => {
  // Consolidate all services
  const allServices: Service[] = [
    ...realMicroSaasServices,
    ...innovative2025MicroSaasExpansionV2,
    ...innovative2025ITServicesExpansionV2,
    ...innovative2025AIServicesExpansionV2
  ];

  // State management
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Categories with icons, counts, and colors
  const categories = [
    { id: 'all', name: 'All Services', icon: <Globe className="w-5 h-5" />, count: allServices.length, color: 'from-blue-500 to-cyan-500' },
    { id: 'micro-saas', name: 'Micro SAAS', icon: <Rocket className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Micro SAAS').length, color: 'from-purple-500 to-pink-500' },
    { id: 'it-services', name: 'IT Services', icon: <Server className="w-5 h-5" />, count: allServices.filter(s => s.category === 'IT Services').length, color: 'from-green-500 to-emerald-500' },
    { id: 'ai-services', name: 'AI Services', icon: <Brain className="w-5 h-5" />, count: allServices.filter(s => s.category === 'AI Services').length, color: 'from-orange-500 to-red-500' },
    { id: 'quantum-tech', name: 'Quantum Tech', icon: <Atom className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Quantum Technology').length, color: 'from-indigo-500 to-purple-500' },
    { id: 'enterprise', name: 'Enterprise', icon: <Building className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Enterprise IT').length, color: 'from-gray-500 to-slate-500' }
  ];

  // Helper functions
  const getServiceCategory = (service: Service): string => {
    return service.category || 'Other';
  };

  const getServicePricing = (service: Service): string => {
    if (service.price) {
      return `$${service.price.monthly}/month`;
    }
    return 'Contact for pricing';
  };

  const getServiceFeatures = (service: Service): string[] => {
    return service.features || [];
  };

  const getServiceDescription = (service: Service): string => {
    return service.description || service.tagline || 'Innovative service solution';
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Micro SAAS':
        return <Rocket className="w-4 h-4 text-purple-400" />;
      case 'IT Services':
        return <Server className="w-4 h-4 text-green-400" />;
      case 'AI Services':
        return <Brain className="w-4 h-4 text-orange-400" />;
      case 'Quantum Technology':
        return <Atom className="w-4 h-4 text-indigo-400" />;
      case 'Enterprise IT':
        return <Building className="w-4 h-4 text-gray-400" />;
      default:
        return <Zap className="w-4 h-4 text-cyan-400" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Micro SAAS':
        return 'from-purple-500 to-pink-500';
      case 'IT Services':
        return 'from-green-500 to-emerald-500';
      case 'AI Services':
        return 'from-orange-500 to-red-500';
      case 'Quantum Technology':
        return 'from-indigo-500 to-purple-500';
      case 'Enterprise IT':
        return 'from-gray-500 to-slate-500';
      default:
        return 'from-cyan-500 to-blue-500';
    }
  };

  // Filter and sort services
  const filteredAndSortedServices = useMemo(() => {
    let filtered = allServices;

    // Filter by category
    if (selectedCategory !== 'all') {
      const categoryMap: { [key: string]: string } = {
        'micro-saas': 'Micro SAAS',
        'it-services': 'IT Services',
        'ai-services': 'AI Services',
        'quantum-tech': 'Quantum Technology',
        'enterprise': 'Enterprise IT'
      };
      filtered = filtered.filter(service => service.category === categoryMap[selectedCategory]);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tagline?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort services
    filtered.sort((a, b) => {
      let aValue: any, bValue: any;

      switch (sortBy) {
        case 'name':
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
          break;
        case 'price':
          aValue = a.price?.monthly || 0;
          bValue = b.price?.monthly || 0;
          break;
        case 'rating':
          aValue = a.rating || 0;
          bValue = b.rating || 0;
          break;
        case 'popularity':
          aValue = a.customers || 0;
          bValue = b.customers || 0;
          break;
        default:
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
      }

      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    return filtered;
  }, [allServices, selectedCategory, searchTerm, sortBy, sortOrder]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedServices.length / itemsPerPage);
  const currentPageClamped = Math.min(Math.max(currentPage, 1), totalPages);
  const paginatedServices = filteredAndSortedServices.slice(
    (currentPageClamped - 1) * itemsPerPage,
    currentPageClamped * itemsPerPage
  );

  const toggleSortOrder = () => {
    setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc');
  };

  return (
    <Layout>
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Revolutionary Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Discover our cutting-edge micro SAAS, IT, and AI solutions designed to transform your business and accelerate your digital evolution.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">{allServices.length}+</div>
                  <div className="text-gray-400">Services</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">24/7</div>
                  <div className="text-gray-400">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">99.9%</div>
                  <div className="text-gray-400">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">Global</div>
                  <div className="text-gray-400">Reach</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Service Categories Overview */}
        <section className="py-16 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Service Categories</h2>
              <p className="text-gray-300">Explore our comprehensive range of innovative solutions</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative p-6 rounded-2xl border cursor-pointer transition-all duration-300 hover:scale-105 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-cyan-500/50 shadow-lg shadow-cyan-500/25'
                      : 'bg-white/5 border-gray-700 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/25'
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color}`}>
                      {category.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-1">{category.name}</h3>
                      <p className="text-sm text-gray-400">{category.count} services</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-16 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/5 border border-gray-700 rounded-2xl p-6 backdrop-blur-sm"
            >
              <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                {/* Search */}
                <div className="flex-1 max-w-md">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search services..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                    />
                  </div>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-4 py-2 rounded-lg border transition-all duration-200 ${
                        selectedCategory === category.id
                          ? 'bg-cyan-500/20 border-cyan-500 text-cyan-400'
                          : 'border-gray-600 text-gray-300 hover:border-cyan-500/30 hover:text-cyan-400'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>

                {/* Sort Controls */}
                <div className="flex items-center space-x-3">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                  >
                    <option value="name">Sort by Name</option>
                    <option value="price">Sort by Price</option>
                    <option value="rating">Sort by Rating</option>
                    <option value="popularity">Sort by Popularity</option>
                  </select>
                  <button
                    onClick={toggleSortOrder}
                    className="px-4 py-3 bg-white/5 border border-gray-700 rounded-lg text-white hover:bg-white/10 transition-colors"
                  >
                    {sortOrder === 'asc' ? <SortAsc className="w-5 h-5" /> : <SortDesc className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Services Count */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-8"
            >
              <p className="text-gray-300">
                Showing <span className="text-blue-400 font-semibold">{filteredAndSortedServices.length}</span> services
                {selectedCategory !== 'all' && ` in ${categories.find(cat => cat.id === selectedCategory)?.name}`}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid/List */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {paginatedServices.length > 0 ? (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className={viewMode === 'grid' 
                    ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    : "space-y-6"
                  }
                >
                  {paginatedServices.map((service, index) => (
                    <motion.div
                      key={(service as { id?: string; slug?: string; name: string }).id || (service as { id?: string; slug?: string; name: string }).slug || (service as { id?: string; slug?: string; name: string }).name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ y: -8 }}
                      className={`group relative ${
                        viewMode === 'list' ? 'flex items-start space-x-6' : ''
                      }`}
                    >
                      <div className="relative bg-gradient-to-br from-gray-500/20 to-slate-500/20 border border-cyan-500/30 rounded-2xl p-6 h-full backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300">
                        {/* Popular Badge */}
                        {service.popular && (
                          <div className="absolute -top-3 left-6 px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold rounded-full">
                            Popular
                          </div>
                        )}

                        {/* Category Badge */}
                        <div className="absolute top-4 right-4 flex items-center space-x-2">
                          {getCategoryIcon(getServiceCategory(service))}
                          <span className="text-xs font-medium text-cyan-300 bg-black/50 px-2 py-1 rounded-full">
                            {getServiceCategory(service)}
                          </span>
                        </div>

                        {/* Service Header */}
                        <div className="mb-6">
                          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                            {service.name}
                          </h3>
                          <p className="text-gray-300 text-sm leading-relaxed">
                            {getServiceDescription(service)}
                          </p>
                        </div>

                        {/* Features Preview */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-cyan-300 mb-3">Key Features</h4>
                          <div className="space-y-2">
                            {getServiceFeatures(service).slice(0, 3).map((feature, idx) => (
                              <div key={idx} className="flex items-start space-x-2">
                                <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                <span className="text-xs text-gray-300">{feature}</span>
                              </div>
                            ))}
                            {getServiceFeatures(service).length > 3 && (
                              <div className="text-xs text-cyan-400">
                                +{getServiceFeatures(service).length - 3} more features
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Pricing */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-cyan-300 mb-2">Starting at</h4>
                          <div className="text-2xl font-bold text-white">
                            {getServicePricing(service)}
                          </div>
                        </div>

                        {/* Action Button */}
                        <div className="flex flex-col space-y-3">
                          <motion.a
                            href={(service as { link?: string; slug?: string; name: string }).link || `/services/${((service as { link?: string; slug?: string; name: string }).slug || (service as { link?: string; slug?: string; name: string }).name || 'service').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-lg shadow-cyan-500/25"
                          >
                            <span>Learn More</span>
                            <ArrowRight className="w-4 h-4" />
                          </motion.a>
                          <motion.a
                            href="/contact"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center justify-center space-x-2 px-4 py-3 border border-gray-600 text-gray-200 font-medium rounded-lg hover:bg-white/5 transition-all duration-200"
                          >
                            <span>Contact Sales</span>
                          </motion.a>
                        </div>

                        {/* Hover Effect Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                  <div className="mt-12 flex items-center justify-center gap-2 flex-wrap">
                    <button
                      onClick={() => setCurrentPage(Math.max(1, currentPageClamped - 1))}
                      className="px-4 py-2 rounded-lg border border-blue-500/40 text-blue-300 hover:border-blue-400 disabled:opacity-40"
                      disabled={currentPageClamped === 1}
                    >
                      Previous
                    </button>
                    {Array.from({ length: totalPages }).slice(0, 7).map((_, idx) => {
                      const page = idx + 1;
                      return (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`px-3 py-2 rounded-lg border ${
                            page === currentPageClamped
                              ? 'bg-blue-600/30 border-blue-400 text-white'
                              : 'border-blue-500/30 text-blue-200 hover:border-blue-400'
                          }`}
                        >
                          {page}
                        </button>
                      );
                    })}
                    <button
                      onClick={() => setCurrentPage(Math.min(totalPages, currentPageClamped + 1))}
                      className="px-4 py-2 rounded-lg border border-blue-500/40 text-blue-300 hover:border-blue-400 disabled:opacity-40"
                      disabled={currentPageClamped === totalPages}
                    >
                      Next
                    </button>
                  </div>
                )}
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center py-20"
              >
                <div className="text-6xl mb-6">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
                <p className="text-gray-300 mb-8">
                  Try adjusting your search terms or filters to find the services you're looking for.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Contact us to learn more about our revolutionary services and how they can accelerate your digital transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="tel:+13024640950"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-lg shadow-cyan-500/25"
                >
                  <Phone className="w-5 h-5" />
                  +1 302 464 0950
                </motion.a>
                <motion.a
                  href="mailto:kleber@ziontechgroup.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 px-8 py-4 border border-gray-600 text-gray-200 font-medium rounded-lg hover:bg-white/5 transition-all duration-200"
                >
                  <Mail className="w-5 h-5" />
                  kleber@ziontechgroup.com
                </motion.a>
              </div>
              <div className="mt-8 text-gray-400">
                <p>364 E Main St STE 1008 Middletown DE 19709</p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ServicesPage;