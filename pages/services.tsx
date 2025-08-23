import React, { useState, useMemo } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Search, Filter, Grid, List, Star, ChevronLeft, ChevronRight,
  ArrowUp, ArrowDown, Eye, Fingerprint, Satellite, Telescope, Microscope, FlaskConical, TargetIcon, Globe2, ShieldCheck, LockKeyhole, Wifi, Bluetooth, Radio, SatelliteDish, Orbit, TrendingUp, Monitor, Building, Code, MessageCircle, BarChart3, Palette, BookOpen, FileText, Handshake, Newspaper, Grid as GridIcon, GraduationCap, HeartIcon, DollarSign, Target, Network, Server, Cpu, Database, Cloud, Lock, Truck, Check, ArrowRight, Sparkles
} from 'lucide-react';
import Link from 'next/link';

// Import service data
import { realMicroSaasServices } from '../data/real-micro-saas-services';
import { innovative2025MicroSaasExpansionV2 } from '../data/innovative-2025-micro-saas-expansion-v2';
import { innovative2025ITServicesExpansionV2 } from '../data/innovative-2025-it-services-expansion-v2';
import { innovative2025AIServicesExpansionV2 } from '../data/innovative-2025-ai-services-expansion-v2';
import { advancedFuturisticServices } from '../data/innovative-2025-advanced-futuristic-services';

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
  // Consolidate all services including the new advanced futuristic services
  const allServices: Service[] = [
    ...realMicroSaasServices,
    ...innovative2025MicroSaasExpansionV2,
    ...innovative2025ITServicesExpansionV2,
    ...innovative2025AIServicesExpansionV2,
    ...advancedFuturisticServices
  ];

  // State management
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Enhanced categories with icons, counts, and colors
  const categories = [
    { id: 'all', name: 'All Services', icon: <Globe2 className="w-5 h-5" />, count: allServices.length, color: 'from-blue-500 to-cyan-500' },
    { id: 'micro-saas', name: 'Micro SAAS', icon: <Satellite className="w-5 h-5" />, count: allServices.filter(s => s.category === 'Micro SAAS').length, color: 'from-purple-500 to-pink-500' },
    { id: 'ai', name: 'AI & Consciousness', icon: <Fingerprint className="w-5 h-5" />, count: allServices.filter(s => s.category?.includes('AI') || s.category?.includes('Consciousness')).length, color: 'from-purple-500 to-pink-500' },
    { id: 'quantum', name: 'Quantum & Space Tech', icon: <Satellite className="w-5 h-5" />, count: allServices.filter(s => s.category?.includes('Quantum') || s.category?.includes('Space')).length, color: 'from-blue-500 to-cyan-500' },
    { id: 'business', name: 'Business Solutions', icon: <Building className="w-5 h-5" />, count: allServices.filter(s => s.category?.includes('Business') || s.category?.includes('Enterprise')).length, color: 'from-green-500 to-emerald-500' },
    { id: 'research', name: 'Research & Development', icon: <FlaskConical className="w-5 h-5" />, count: allServices.filter(s => s.category?.includes('Research') || s.category?.includes('Development')).length, color: 'from-orange-500 to-red-500' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: <ShieldCheck className="w-5 h-5" />, count: allServices.filter(s => s.category?.includes('Security') || s.category?.includes('Cybersecurity')).length, color: 'from-red-500 to-orange-500' },
    { id: 'cloud', name: 'Cloud & Infrastructure', icon: <Cloud className="w-5 h-5" />, count: allServices.filter(s => s.category?.includes('Cloud') || s.category?.includes('Infrastructure')).length, color: 'from-indigo-500 to-purple-500' },
    { id: 'automation', name: 'Automation', icon: <Network className="w-5 h-5" />, count: allServices.filter(s => s.category?.includes('Automation') || s.category?.includes('Process')).length, color: 'from-yellow-500 to-orange-500' }
  ];

  // Filter and sort services
  const filteredServices = useMemo(() => {
    let filtered = allServices;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => {
        if (selectedCategory === 'ai') {
          return service.category?.includes('AI') || service.category?.includes('Consciousness');
        } else if (selectedCategory === 'quantum') {
          return service.category?.includes('Quantum') || service.category?.includes('Space');
        } else if (selectedCategory === 'business') {
          return service.category?.includes('Business') || service.category?.includes('Enterprise');
        } else if (selectedCategory === 'research') {
          return service.category?.includes('Research') || service.category?.includes('Development');
        } else if (selectedCategory === 'cybersecurity') {
          return service.category?.includes('Security') || service.category?.includes('Cybersecurity');
        } else if (selectedCategory === 'cloud') {
          return service.category?.includes('Cloud') || service.category?.includes('Infrastructure');
        } else if (selectedCategory === 'automation') {
          return service.category?.includes('Automation') || service.category?.includes('Process');
        } else {
          return service.category === categories.find(c => c.id === selectedCategory)?.name;
        }
      });
    }

    // Filter by search term
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchLower) ||
        service.description?.toLowerCase().includes(searchLower) ||
        service.tagline?.toLowerCase().includes(searchLower) ||
        service.category?.toLowerCase().includes(searchLower)
      );
    }

    // Sort services
    filtered.sort((a, b) => {
      let aValue: any, bValue: any;

      switch (sortBy) {
        case 'name':
          aValue = a.name;
          bValue = b.name;
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
        case 'launchDate':
          aValue = new Date(a.launchDate || '1900-01-01');
          bValue = new Date(b.launchDate || '1900-01-01');
          break;
        default:
          aValue = a.name;
          bValue = b.name;
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
  const totalPages = Math.ceil(filteredServices.length / itemsPerPage);
  const paginatedServices = filteredServices.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getServiceIcon = (service: Service) => {
    if (service.icon) return service.icon;
    
    // Default icons based on category
    if (service.category?.includes('AI')) return <Fingerprint className="w-6 h-6" />;
    if (service.category?.includes('Quantum')) return <Satellite className="w-6 h-6" />;
    if (service.category?.includes('Space')) return <Satellite className="w-6 h-6" />;
    if (service.category?.includes('Business')) return <Building className="w-6 h-6" />;
    if (service.category?.includes('Security')) return <ShieldCheck className="w-6 h-6" />;
    if (service.category?.includes('Cloud')) return <Cloud className="w-6 h-6" />;
    if (service.category?.includes('Automation')) return <Network className="w-6 h-6" />;
    if (service.category?.includes('Research')) return <FlaskConical className="w-6 h-6" />;
    
    return <Satellite className="w-6 h-6" />;
  };

  const getServiceColor = (service: Service) => {
    if (service.color) return service.color;
    
    // Default colors based on category
    if (service.category?.includes('AI')) return 'from-purple-500 to-pink-600';
    if (service.category?.includes('Quantum')) return 'from-blue-500 to-cyan-600';
    if (service.category?.includes('Space')) return 'from-indigo-500 to-purple-600';
    if (service.category?.includes('Business')) return 'from-green-500 to-emerald-600';
    if (service.category?.includes('Security')) return 'from-red-500 to-orange-600';
    if (service.category?.includes('Cloud')) return 'from-indigo-500 to-purple-600';
    if (service.category?.includes('Automation')) return 'from-yellow-500 to-orange-600';
    if (service.category?.includes('Research')) return 'from-orange-500 to-red-600';
    
    return 'from-gray-500 to-slate-600';
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <SEO 
        title="Revolutionary Services 2041 - Zion Tech Group"
        description="Explore our cutting-edge technology services including AI consciousness, quantum computing, space technology, and more."
        keywords={["services", "AI consciousness", "quantum computing", "space technology", "Zion Tech Group"]}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Revolutionary Services 2041</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive range of cutting-edge technology solutions designed to transform your business and pioneer the future
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">{allServices.length}+</div>
                <div className="text-gray-300">Total Services</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">25+</div>
                <div className="text-gray-300">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-400 mb-2">4.9/5</div>
                <div className="text-gray-300">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">1000+</div>
                <div className="text-gray-300">Happy Customers</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-12 px-4 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
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
                      ? `bg-gradient-to-r ${category.color} text-white border-transparent`
                      : 'bg-gray-800/50 text-gray-300 border-gray-700 hover:bg-gray-700/50'
                  }`}
                >
                  {category.icon}
                  <span>{category.name}</span>
                  <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Sort and View Controls */}
            <div className="flex items-center space-x-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
              >
                <option value="name">Sort by Name</option>
                <option value="price">Sort by Price</option>
                <option value="rating">Sort by Rating</option>
                <option value="popularity">Sort by Popularity</option>
                <option value="launchDate">Sort by Launch Date</option>
              </select>
              
              <button
                onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                className="p-2 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700/50 transition-colors"
              >
                {sortOrder === 'asc' ? <ArrowUp className="w-5 h-5" /> : <ArrowDown className="w-5 h-5" />}
              </button>

              <div className="flex bg-gray-800/50 border border-gray-700 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${
                    viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'
                  } transition-colors`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${
                    viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'
                  } transition-colors`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {filteredServices.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-white mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your search criteria or category filter</p>
            </div>
          ) : (
            <>
              {/* Results Count */}
              <div className="mb-8">
                <p className="text-gray-400">
                  Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, filteredServices.length)} of {filteredServices.length} services
                </p>
              </div>

              {/* Services Grid */}
              <div className={`grid gap-8 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                {paginatedServices.map((service, index) => (
                  <motion.div
                    key={service.id || index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`group ${
                      viewMode === 'list' ? 'flex space-x-6' : ''
                    }`}
                  >
                    <div className={`bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 ${
                      viewMode === 'list' ? 'flex-1' : ''
                    }`}>
                      {/* Service Header */}
                      <div className={`flex items-start space-x-4 ${viewMode === 'list' ? 'mb-4' : 'mb-6'}`}>
                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${getServiceColor(service)} flex items-center justify-center flex-shrink-0`}>
                          {getServiceIcon(service)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                              {service.name}
                            </h3>
                            {service.popular && (
                              <span className="px-2 py-1 text-xs bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full">
                                Popular
                              </span>
                            )}
                          </div>
                          {service.tagline && (
                            <p className="text-gray-400 text-sm">{service.tagline}</p>
                          )}
                        </div>
                      </div>

                      {/* Service Description */}
                      {service.description && (
                        <p className="text-gray-300 mb-4 line-clamp-3">
                          {service.description}
                        </p>
                      )}

                      {/* Service Details */}
                      <div className="space-y-4">
                        {/* Price */}
                        {service.price && (
                          <div className="flex items-center justify-between">
                            <span className="text-gray-400 text-sm">Starting at</span>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-green-400">
                                ${service.price.monthly.toLocaleString()}
                              </div>
                              <div className="text-sm text-gray-400">per month</div>
                            </div>
                          </div>
                        )}

                        {/* Rating */}
                        {service.rating && (
                          <div className="flex items-center space-x-2">
                            <div className="flex items-center space-x-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < Math.floor(service.rating!) ? 'text-yellow-400 fill-current' : 'text-gray-600'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-gray-400 text-sm">
                              {service.rating} ({service.reviews} reviews)
                            </span>
                          </div>
                        )}

                        {/* Features */}
                        {service.features && service.features.length > 0 && (
                          <div>
                            <h4 className="text-sm font-medium text-gray-300 mb-2">Key Features</h4>
                            <div className="grid grid-cols-1 gap-1">
                              {service.features.slice(0, 3).map((feature, i) => (
                                <div key={i} className="flex items-center space-x-2 text-sm text-gray-400">
                                  <Check className="w-3 h-3 text-green-400" />
                                  <span>{feature}</span>
                                </div>
                              ))}
                              {service.features.length > 3 && (
                                <div className="text-xs text-gray-500 mt-1">
                                  +{service.features.length - 3} more features
                                </div>
                              )}
                            </div>
                          </div>
                        )}

                        {/* CTA Button */}
                        <div className="pt-4">
                          <Link href={service.link || `/services/${service.id}`}>
                            <button className="w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg shadow-cyan-500/25 focus:outline-none focus:ring-4 focus:ring-cyan-500/50">
                              <span className="flex items-center justify-center space-x-2">
                                Learn More
                                <ArrowRight className="w-4 h-4" />
                              </span>
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center space-x-2 mt-16">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700/50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Previous
                  </button>
                  
                  {[...Array(totalPages)].map((_, i) => {
                    const page = i + 1;
                    if (
                      page === 1 ||
                      page === totalPages ||
                      (page >= currentPage - 2 && page <= currentPage + 2)
                    ) {
                      return (
                        <button
                          key={page}
                          onClick={() => handlePageChange(page)}
                          className={`px-4 py-2 rounded-lg transition-colors ${
                            currentPage === page
                              ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                              : 'bg-gray-800/50 border border-gray-700 text-gray-300 hover:text-white hover:bg-gray-700/50'
                          }`}
                        >
                          {page}
                        </button>
                      );
                    } else if (
                      page === currentPage - 3 ||
                      page === currentPage + 3
                    ) {
                      return <span key={page} className="px-2 text-gray-500">...</span>;
                    }
                    return null;
                  })}
                  
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700/50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-black/40 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies already leveraging our innovative technology solutions
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 focus:outline-none focus:ring-4 focus:ring-cyan-500/50">
                  <span className="flex items-center gap-2">
                    Get Started Today
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </button>
              </Link>
              <Link href="/demo">
                <button className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-400/50">
                  Request Demo
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;