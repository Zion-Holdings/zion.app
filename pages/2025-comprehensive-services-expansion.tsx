import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Grid, List, Filter,
  Brain, Atom, Shield, Target, Rocket,
  ArrowRight, Check, Star, Phone, Mail, MapPin,
  Building, Cpu, Zap, Globe, Lock, BarChart3
} from 'lucide-react';

// Import our new service data
import { innovativeMicroSaasExpansionV2 } from '../data/2025-innovative-micro-saas-expansion-v2';
import { innovativeITInfrastructureExpansion } from '../data/2025-innovative-it-infrastructure-expansion';
import { innovativeAIServicesExpansion } from '../data/2025-innovative-ai-services-expansion';

// Create unified services array
const allNewServices = [
  ...innovativeMicroSaasExpansionV2,
  ...innovativeITInfrastructureExpansion,
  ...innovativeAIServicesExpansion
];

const categories = [
  {
    id: 'all',
    name: 'All New Services',
    icon: <Grid className="w-6 h-6" />,
    color: 'from-gray-500 to-slate-500',
    description: 'Complete portfolio of new innovative services'
  },
  {
    id: 'micro-saas',
    name: 'Micro SAAS Solutions',
    icon: <Target className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-500',
    description: 'Innovative business solutions and automation'
  },
  {
    id: 'it-infrastructure',
    name: 'IT Infrastructure',
    icon: <Building className="w-6 h-6" />,
    color: 'from-indigo-500 to-purple-500',
    description: 'Advanced infrastructure and security solutions'
  },
  {
    id: 'ai-services',
    name: 'AI Services',
    icon: <Brain className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500',
    description: 'Cutting-edge AI and machine learning services'
  }
];

const sortOptions = [
  { value: 'name', label: 'Name A-Z' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'popular', label: 'Most Popular' },
  { value: 'newest', label: 'Newest First' },
  { value: 'rating', label: 'Highest Rated' }
];

export default function ComprehensiveServicesExpansion2025() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const pageSize = 12;

  // Simulate loading state for better UX
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsVisible(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // Filter services based on search and category
  const filteredServices = allNewServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (selectedCategory === 'all') return matchesSearch;
    
    const serviceCategory = service.category.toLowerCase();
    return matchesSearch && serviceCategory.includes(selectedCategory.toLowerCase());
  });

  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'price-low':
        return parseInt(a.price.replace('$', '')) - parseInt(b.price.replace('$', ''));
      case 'price-high':
        return parseInt(b.price.replace('$', '')) - parseInt(a.price.replace('$', ''));
      case 'popular':
        return b.popular ? 1 : -1;
      case 'newest':
        return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime();
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  // Pagination
  const totalPages = Math.ceil(sortedServices.length / pageSize);
  const paginatedServices = sortedServices.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getServiceCategory = (service: any) => {
    if (service.category) return service.category;
    return 'Other';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="2025 Comprehensive Services Expansion - Zion Tech Group"
        description="Discover our latest innovative micro SAAS, IT infrastructure, and AI services. Transform your business with cutting-edge solutions from Zion Tech Group."
        keywords={["micro SAAS", "IT infrastructure", "AI services", "business automation", "cybersecurity", "cloud solutions", "Zion Tech Group"]}
        image="/og-image.svg"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20" />
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            2025 Comprehensive Services
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Expansion
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Transform your business with our latest innovative micro SAAS, IT infrastructure, and AI services. 
            Built for the future, delivered today.
          </motion.p>
          
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 max-w-2xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="flex flex-col items-center">
                <Phone className="w-6 h-6 text-blue-400 mb-2" />
                <p className="text-sm text-gray-300">Mobile</p>
                <p className="text-white font-semibold">+1 302 464 0950</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-6 h-6 text-purple-400 mb-2" />
                <p className="text-sm text-gray-300">Email</p>
                <p className="text-white font-semibold">kleber@ziontechgroup.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-6 h-6 text-pink-400 mb-2" />
                <p className="text-sm text-gray-300">Address</p>
                <p className="text-white font-semibold text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg'
                      : 'bg-white/10 backdrop-blur-lg text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category.icon}
                  <span className="ml-2">{category.name}</span>
                </button>
              ))}
            </div>

            {/* Sort and View */}
            <div className="flex gap-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value} className="bg-gray-800 text-white">
                    {option.label}
                  </option>
                ))}
              </select>

              <div className="flex bg-white/10 backdrop-blur-lg rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-all duration-200 ${
                    viewMode === 'grid' ? 'bg-blue-500 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-all duration-200 ${
                    viewMode === 'list' ? 'bg-blue-500 text-white' : 'text-gray-400 hover:text-white'
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
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {isLoading ? (
            <div className="text-center py-20">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500 mx-auto"></div>
              <p className="text-gray-400 mt-4">Loading innovative services...</p>
            </div>
          ) : (
            <AnimatePresence>
              {isVisible && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  {paginatedServices.length === 0 ? (
                    <div className="text-center py-20">
                      <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-gray-300 mb-2">No services found</h3>
                      <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
                    </div>
                  ) : (
                    <>
                      <div className={`grid gap-6 ${
                        viewMode === 'grid' 
                          ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                          : 'grid-cols-1'
                      }`}>
                        {paginatedServices.map((service, index) => (
                          <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                              viewMode === 'list' ? 'flex gap-6' : ''
                            }`}
                          >
                            {viewMode === 'list' && (
                              <div className="flex-shrink-0">
                                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-2xl`}>
                                  {service.icon}
                                </div>
                              </div>
                            )}
                            
                            <div className="flex-1">
                              <div className="flex items-start justify-between mb-4">
                                <div>
                                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                                  <p className="text-gray-300 text-sm mb-3">{service.tagline}</p>
                                </div>
                                {viewMode === 'grid' && (
                                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-xl`}>
                                    {service.icon}
                                  </div>
                                )}
                              </div>

                              <p className="text-gray-400 mb-4 line-clamp-3">{service.description}</p>

                              {/* Features */}
                              <div className="mb-4">
                                <div className="flex flex-wrap gap-2">
                                  {service.features.slice(0, 3).map((feature, idx) => (
                                    <span
                                      key={idx}
                                      className="px-2 py-1 bg-white/10 rounded-md text-xs text-gray-300"
                                    >
                                      {feature}
                                    </span>
                                  ))}
                                  {service.features.length > 3 && (
                                    <span className="px-2 py-1 bg-blue-500/20 rounded-md text-xs text-blue-400">
                                      +{service.features.length - 3} more
                                    </span>
                                  )}
                                </div>
                              </div>

                              {/* Pricing and Rating */}
                              <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-2">
                                  <span className="text-2xl font-bold text-white">{service.price}</span>
                                  <span className="text-gray-400">{service.period}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                  <span className="text-white text-sm">{service.rating}</span>
                                  <span className="text-gray-400 text-sm">({service.reviews})</span>
                                </div>
                              </div>

                              {/* Market Info */}
                              <div className="mb-4 text-xs text-gray-400">
                                <p><strong>Market Size:</strong> {service.marketSize}</p>
                                <p><strong>Growth Rate:</strong> {service.growthRate}</p>
                              </div>

                              {/* ROI */}
                              <div className="mb-4 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                                <p className="text-green-400 text-sm font-medium">ROI Benefits:</p>
                                <p className="text-green-300 text-xs">{service.roi}</p>
                              </div>

                              {/* CTA */}
                              <div className="flex gap-2">
                                <a
                                  href={service.link}
                                  className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg text-center font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-200 flex items-center justify-center gap-2"
                                >
                                  Learn More
                                  <ArrowRight className="w-4 h-4" />
                                </a>
                                <a
                                  href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.name}`}
                                  className="px-4 py-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all duration-200 flex items-center justify-center"
                                >
                                  <Mail className="w-4 h-4" />
                                </a>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Pagination */}
                      {totalPages > 1 && (
                        <div className="flex justify-center mt-12">
                          <div className="flex gap-2">
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                              <button
                                key={page}
                                onClick={() => handlePageChange(page)}
                                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                                  currentPage === page
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-white/10 backdrop-blur-lg text-gray-300 hover:bg-white/20'
                                }`}
                              >
                                {page}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-lg rounded-3xl p-12 border border-white/20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of businesses already leveraging our innovative services to drive growth, 
              efficiency, and competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Service Consultation Request"
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Get Free Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="bg-white/10 backdrop-blur-lg border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}