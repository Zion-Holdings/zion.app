import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Grid, List, Star, ArrowRight, 
  Brain, Rocket,
  Check, Building, Cpu,
  Phone, Mail
} from 'lucide-react';
import Link from 'next/link';

// Import our new service data
import { innovative2038MicroSaasServices } from '../data/innovative-2038-micro-saas-services';
import { innovative2038ITServices } from '../data/innovative-2038-it-services';
import { innovative2038AIServices } from '../data/innovative-2038-ai-services';

// Combine all services
const allServices = [
  ...innovative2038MicroSaasServices,
  ...innovative2038ITServices,
  ...innovative2038AIServices
];

// Service categories
const categories = [
  {
    id: 'all',
    name: 'All Services',
    icon: <Grid className="w-6 h-6" />,
    color: 'from-gray-500 to-slate-500',
    description: 'Complete portfolio of all innovative services'
  },
  {
    id: 'micro-saas',
    name: 'Micro SAAS',
    icon: <Rocket className="w-6 h-6" />,
    color: 'from-cyan-500 to-blue-500',
    description: 'Innovative micro SAAS solutions'
  },
  {
    id: 'it-services',
    name: 'IT Services',
    icon: <Cpu className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500',
    description: 'Advanced IT infrastructure and solutions'
  },
  {
    id: 'ai-services',
    name: 'AI Services',
    icon: <Brain className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-500',
    description: 'Cutting-edge AI and machine learning'
  }
];

// Helper function to get service category
const getServiceCategory = (service: any) => {
  if (service.category) {
    if (service.category.includes('Micro') || service.category.includes('SAAS')) return 'micro-saas';
    if (service.category.includes('IT') || service.category.includes('Infrastructure')) return 'it-services';
    if (service.category.includes('AI') || service.category.includes('Machine Learning')) return 'ai-services';
  }
  return 'other';
};

// Helper function to get service pricing
const getServicePricing = (service: any) => {
  if (service.pricing?.starter) return service.pricing.starter;
  if (service.pricing?.monthly) return `$${service.pricing.monthly}/month`;
  if (service.price?.monthly) return `$${service.price.monthly}/month`;
  return 'Contact for pricing';
};

// Helper function to get service features
const getServiceFeatures = (service: any) => {
  if (service.features) return service.features;
  if (service.keyFeatures) return service.keyFeatures;
  return [];
};

// Helper function to get service description
const getServiceDescription = (service: any) => {
  if (service.description) return service.description;
  if (service.tagline) return service.tagline;
  return 'No description available';
};

const Innovative2038ServicesShowcase: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'rating' | 'price'>('name');
  const [filteredServices, setFilteredServices] = useState(allServices);

  // Filter and sort services
  useEffect(() => {
    let filtered = allServices;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => getServiceCategory(service) === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
        case 'price': {
          const priceA = parseFloat(a.pricing?.starter?.replace(/[^0-9.]/g, '') || '0');
          const priceB = parseFloat(b.pricing?.starter?.replace(/[^0-9.]/g, '') || '0');
          return priceA - priceB;
        }
        default:
          return a.name.localeCompare(b.name);
      }
    });

    setFilteredServices(filtered);
  }, [searchQuery, selectedCategory, sortBy]);

  const getCategoryColor = (category: string) => {
    const cat = categories.find(c => c.id === category);
    return cat ? cat.color : 'from-gray-500 to-slate-500';
  };

  const getCategoryIcon = (category: string) => {
    const cat = categories.find(c => c.id === category);
    return cat ? cat.icon : <Grid className="w-6 h-6" />;
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <SEO 
        title="Innovative 2038 Services Showcase - Zion Tech Group"
        description="Discover our cutting-edge 2038 services including AI, quantum computing, micro SAAS, and IT solutions. Transform your business with next-generation technology."
        keywords={["AI services", "quantum computing", "micro SAAS", "IT services", "2038 technology", "Zion Tech Group"]}
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 left-20 w-32 h-32 border border-cyan-500/20 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-40 right-32 w-24 h-24 border border-purple-500/20 rounded-full"
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-32 left-1/4 w-20 h-20 border border-blue-500/20 rounded-full"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Innovative 2038
            </span>
            <br />
            Services Showcase
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
          >
            Experience the future of technology with our revolutionary AI, quantum computing, and micro SAAS solutions. 
            Transform your business with cutting-edge innovation and unparalleled performance.
          </motion.p>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-2xl mx-auto"
          >
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">Get Started Today</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center justify-center">
                <Phone className="w-4 h-4 mr-2 text-purple-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center">
                <Mail className="w-4 h-4 mr-2 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center">
                <Building className="w-4 h-4 mr-2 text-purple-400" />
                <span>Middletown DE 19709</span>
              </div>
            </div>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
              <input
                type="text"
                placeholder="Search our innovative services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-6 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-6 py-3 rounded-full border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? `bg-gradient-to-r ${category.color} border-transparent text-white shadow-lg`
                      : 'border-white/20 text-gray-300 hover:border-white/40 hover:bg-white/10'
                  }`}
                >
                  {category.icon}
                  <span className="ml-2">{category.name}</span>
                </button>
              ))}
            </div>

            {/* View and Sort Controls */}
            <div className="flex flex-wrap justify-center items-center gap-4">
              {/* View Mode Toggle */}
              <div className="flex items-center bg-white/10 rounded-full p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-full transition-all duration-300 ${
                    viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-full transition-all duration-300 ${
                    viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              {/* Sort Dropdown */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'name' | 'rating' | 'price')}
                className="bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <option value="name">Sort by Name</option>
                <option value="rating">Sort by Rating</option>
                <option value="price">Sort by Price</option>
              </select>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Results Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mb-12"
          >
            <p className="text-gray-400">
              Showing {filteredServices.length} of {allServices.length} innovative services
            </p>
          </motion.div>

          {/* Services Display */}
          <AnimatePresence mode="wait">
            {filteredServices.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <Search className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-gray-400 mb-2">No services found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria</p>
              </motion.div>
            ) : (
              <motion.div
                key={`${viewMode}-${selectedCategory}-${searchQuery}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className={
                  viewMode === 'grid'
                    ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                    : 'space-y-6'
                }
              >
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25 ${
                      viewMode === 'list' ? 'flex items-start space-x-6' : ''
                    }`}
                  >
                    {/* Service Icon and Category */}
                    <div className={`flex items-center mb-4 ${viewMode === 'list' ? 'flex-shrink-0' : ''}`}>
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${getCategoryColor(getServiceCategory(service))} flex items-center justify-center mr-3`}>
                        {getCategoryIcon(getServiceCategory(service))}
                      </div>
                      <div>
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(getServiceCategory(service))} text-white`}>
                          {getServiceCategory(service).replace('-', ' ').toUpperCase()}
                        </span>
                      </div>
                    </div>

                    {/* Service Content */}
                    <div className={viewMode === 'list' ? 'flex-1' : ''}>
                      <h3 className="text-xl font-bold mb-2 text-white hover:text-cyan-400 transition-colors">
                        {service.name}
                      </h3>
                      
                      <p className="text-gray-300 mb-4 line-clamp-3">
                        {getServiceDescription(service)}
                      </p>

                      {/* Rating */}
                      <div className="flex items-center mb-4">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(service.rating || 0)
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-600'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="ml-2 text-sm text-gray-400">
                          {service.rating} ({service.rating ? Math.floor(service.rating * 20) : 0}% satisfaction)
                        </span>
                      </div>

                      {/* Pricing */}
                      <div className="mb-4">
                        <span className="text-2xl font-bold text-cyan-400">
                          {getServicePricing(service)}
                        </span>
                        <span className="text-sm text-gray-400 ml-2">starting price</span>
                      </div>

                      {/* Key Features */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wide">
                          Key Features
                        </h4>
                        <div className="grid grid-cols-1 gap-2">
                          {getServiceFeatures(service).slice(0, 3).map((feature, idx) => (
                            <div key={idx} className="flex items-center text-sm text-gray-300">
                              <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              <span className="line-clamp-1">{feature}</span>
                            </div>
                          ))}
                          {getServiceFeatures(service).length > 3 && (
                            <div className="text-sm text-gray-500">
                              +{getServiceFeatures(service).length - 3} more features
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Technology Stack */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wide">
                          Technology
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technology?.slice(0, 3).map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300 border border-white/20"
                            >
                              {tech}
                            </span>
                          ))}
                          {service.technology && service.technology.length > 3 && (
                            <span className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300 border border-white/20">
                              +{service.technology.length - 3}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <div className="flex space-x-3">
                        <Link
                          href={service.link}
                          className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 text-center"
                        >
                          Learn More
                          <ArrowRight className="inline-block ml-2 w-4 h-4" />
                        </Link>
                        <Link
                          href="/contact"
                          className="px-4 py-3 border border-white/20 text-white rounded-xl hover:border-cyan-500/50 hover:bg-white/10 transition-all duration-300"
                        >
                          Contact
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Ready to Transform Your Business?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8"
          >
            Join the future of technology with our innovative 2038 services. 
            Get in touch today to discover how we can revolutionize your operations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/services"
              className="border border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 backdrop-blur-md hover:bg-white/10"
            >
              View All Services
            </Link>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="text-center">
              <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-gray-300">+1 302 464 0950</p>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-300">kleber@ziontechgroup.com</p>
            </div>
            <div className="text-center">
              <Building className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Address</h3>
              <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Innovative2038ServicesShowcase;