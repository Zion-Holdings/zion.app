import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Grid, List, Filter, Star, TrendingUp, Award, Clock, CheckCircle,
  Brain, Atom, Shield, Target, Rocket, ArrowRight, Check, Palette, Heart, Truck, GraduationCap,
  Building, Cpu, Database, Cloud, Lock, Zap, Eye, Users, Globe, Code, Layers, Phone, Mail, MapPin
} from 'lucide-react';
import Link from 'next/link';

// Import our new innovative services
import { innovativeMicroSaasSolutions2025V2 } from '../data/2025-innovative-micro-saas-expansion-v2';
import { innovativeITServices2025V2 } from '../data/2025-innovative-it-services-expansion-v2';
import { innovativeAIServices2025V2 } from '../data/2025-innovative-ai-services-expansion-v2';

const EnhancedServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating' | 'popularity'>('name');
  const [isLoading, setIsLoading] = useState(false);

  // Combine all services
  const allServices = [
    ...innovativeMicroSaasSolutions2025V2,
    ...innovativeITServices2025V2,
    ...innovativeAIServices2025V2
  ];

  // Filter and sort services
  const getFilteredServices = () => {
    let filtered = allServices;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => 
        service.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        service.type.toLowerCase().includes(selectedCategory.toLowerCase())
      );
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tagline.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          const priceA = parseFloat(a.pricing.starter.replace(/[^0-9.]/g, ''));
          const priceB = parseFloat(b.pricing.starter.replace(/[^0-9.]/g, ''));
          return priceA - priceB;
        case 'rating':
          return b.rating - a.rating;
        case 'popularity':
          return b.customers - a.customers;
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  };

  const filteredServices = getFilteredServices();

  const categories = [
    { id: 'all', name: 'All Services', icon: Layers, count: allServices.length, color: 'from-purple-500 to-pink-500' },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain, count: innovativeAIServices2025V2.length, color: 'from-cyan-500 to-blue-500' },
    { id: 'it', name: 'IT Infrastructure', icon: Cpu, count: innovativeITServices2025V2.length, color: 'from-blue-500 to-indigo-500' },
    { id: 'saas', name: 'Micro SAAS', icon: Target, count: innovativeMicroSaasSolutions2025V2.length, color: 'from-emerald-500 to-teal-500' },
    { id: 'security', name: 'Cybersecurity', icon: Shield, count: allServices.filter(s => s.category.includes('Security') || s.type.includes('Security')).length, color: 'from-red-500 to-orange-500' },
    { id: 'quantum', name: 'Quantum Technology', icon: Atom, count: allServices.filter(s => s.technology.includes('Quantum')).length, color: 'from-indigo-500 to-purple-500' }
  ];

  const contactInfo = {
    mobile: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008 Middletown DE 19709",
    website: "https://ziontechgroup.com"
  };

  return (
    <>
      <SEO 
        title="Innovative Technology Services - Zion Tech Group"
        description="Discover cutting-edge AI, quantum computing, and IT infrastructure services. Transform your business with our revolutionary technology solutions."
        keywords={["AI services", "quantum computing", "IT infrastructure", "cybersecurity", "micro SAAS", "business solutions"]}
        canonical="https://ziontechgroup.com/enhanced-services"
      />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Innovative
              </span>
              <br />
              <span className="text-white">Technology Services</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with cutting-edge AI, quantum computing, and IT infrastructure solutions. 
              Choose from {allServices.length}+ innovative services designed for the future.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-black/20 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 backdrop-blur-xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Controls */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'border-cyan-400 bg-cyan-400/10 text-cyan-400'
                      : 'border-gray-600 text-gray-300 hover:border-cyan-400/50 hover:text-cyan-400'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                  <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-xs">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>

            {/* View Controls */}
            <div className="flex items-center space-x-4">
              {/* Sort Dropdown */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-black/20 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-cyan-400"
              >
                <option value="name">Sort by Name</option>
                <option value="price">Sort by Price</option>
                <option value="rating">Sort by Rating</option>
                <option value="popularity">Sort by Popularity</option>
              </select>

              {/* View Mode Toggle */}
              <div className="flex bg-black/20 border border-white/20 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'grid' ? 'bg-cyan-400/20 text-cyan-400' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'list' ? 'bg-cyan-400/20 text-cyan-400' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-gray-300">
              Showing {filteredServices.length} of {allServices.length} services
            </p>
          </div>

          {/* Services Grid/List */}
          <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={viewMode === 'grid' ? 'group' : ''}
              >
                {viewMode === 'grid' ? (
                  // Grid View
                  <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 h-full group-hover:transform group-hover:scale-105">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <Brain className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-right">
                        <span className="text-sm text-cyan-400 font-medium">{service.category}</span>
                        <div className="flex items-center space-x-1 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 ${
                                i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'
                              }`}
                            />
                          ))}
                          <span className="text-xs text-gray-400 ml-1">({service.reviews})</span>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {service.name}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">Starting at:</span>
                        <span className="text-2xl font-bold text-white">{service.pricing.starter}</span>
                      </div>
                      
                      <div className="flex items-center space-x-2 text-xs text-gray-400">
                        <Users className="w-3 h-3" />
                        <span>{service.customers} customers</span>
                        <Clock className="w-3 h-3 ml-2" />
                        <span>Launched {new Date(service.launchDate).toLocaleDateString()}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {service.technology.slice(0, 3).map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-cyan-400/10 text-cyan-400 text-xs rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <Link
                        href={service.slug}
                        className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center space-x-1"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                ) : (
                  // List View
                  <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300">
                    <div className="flex items-center space-x-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Brain className="w-8 h-8 text-white" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-xl font-semibold text-white truncate">
                            {service.name}
                          </h3>
                          <span className="text-2xl font-bold text-white ml-4">
                            {service.pricing.starter}
                          </span>
                        </div>
                        
                        <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                          {service.description}
                        </p>
                        
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <span className="flex items-center space-x-1">
                            <Users className="w-4 h-4" />
                            <span>{service.customers} customers</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span>{service.rating}/5 ({service.reviews} reviews)</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{new Date(service.launchDate).toLocaleDateString()}</span>
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-end space-y-3">
                        <span className="text-sm text-cyan-400 font-medium">{service.category}</span>
                        <Link
                          href={service.slug}
                          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-sm"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
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
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-400/20 rounded-3xl p-8 md:p-12 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Transform</span> Your Business?
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our team of experts is ready to help you implement the perfect technology solution. 
              Get in touch today to start your transformation journey.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>{contactInfo.address}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Get Started Today
              </Link>
              
              <Link
                href="/solutions"
                className="border border-cyan-400/50 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300"
              >
                View Solutions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default EnhancedServicesPage;