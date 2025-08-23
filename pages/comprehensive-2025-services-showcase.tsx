import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Grid, List, Filter, Star, ArrowRight, Check,
  Brain, Atom, Rocket, Shield, Cloud, Database, Code, Server,
  Settings, Target, Sparkles, Zap, Globe, Lock, Phone, Mail,
  MapPin, Users, Award, Heart, Factory, ShoppingCart, GraduationCap,
  DollarSign, Car, Palette, Cpu, BarChart3, ChevronDown, ChevronUp
} from 'lucide-react';

// Import our new service data
import { innovativeAIAutomationServices2025 } from '../data/2025-innovative-ai-automation-services';
import { innovativeITInfrastructureServices2025 } from '../data/2025-innovative-it-infrastructure-services';
import { innovativeMicroSaasExpansion2025 } from '../data/2025-innovative-micro-saas-expansion';

const Comprehensive2025ServicesShowcase: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');
  const [showFilters, setShowFilters] = useState(false);

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Combine all services
  const allServices = [
    ...innovativeAIAutomationServices2025.map(service => ({ ...service, category: 'AI Automation' })),
    ...innovativeITInfrastructureServices2025.map(service => ({ ...service, category: 'IT Infrastructure' })),
    ...innovativeMicroSaasExpansion2025.map(service => ({ ...service, category: 'Micro SAAS' }))
  ];

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category)))];

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.tagline.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
        case 'rating':
          return b.rating - a.rating;
        case 'popularity':
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
        default:
          return a.name.localeCompare(b.name);
      }
    });

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const ServiceCard = ({ service }: { service: any }) => (
    <motion.div
      variants={fadeInUp}
      className="group relative bg-black/40 backdrop-blur-xl border border-cyan-500/20 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Popular Badge */}
      {service.popular && (
        <div className="absolute top-4 right-4 z-10">
          <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-medium rounded-full shadow-lg">
            Popular
          </span>
        </div>
      )}

      <div className="relative z-10 p-6">
        {/* Service Icon and Header */}
        <div className="flex items-start justify-between mb-4">
          <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center text-2xl`}>
            {service.icon}
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-white mb-1">{service.price}</div>
            <div className="text-sm text-gray-400">{service.period}</div>
          </div>
        </div>

        {/* Service Info */}
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
          {service.name}
        </h3>
        <p className="text-gray-300 mb-4 leading-relaxed">
          {service.tagline}
        </p>

        {/* Features */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features</h4>
          <div className="space-y-2">
            {service.features.slice(0, 4).map((feature: string, index: number) => (
              <div key={index} className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span className="text-sm text-gray-300">{feature}</span>
              </div>
            ))}
            {service.features.length > 4 && (
              <div className="text-xs text-gray-500">
                +{service.features.length - 4} more features
              </div>
            )}
          </div>
        </div>

        {/* Service Details */}
        <div className="space-y-3 mb-6 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-400">Category:</span>
            <span className="text-cyan-400 font-medium">{service.category}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Setup Time:</span>
            <span className="text-white">{service.setupTime}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Trial:</span>
            <span className="text-white">{service.trialDays} days</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Rating:</span>
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-white">{service.rating}</span>
              <span className="text-gray-400">({service.reviews})</span>
            </div>
          </div>
        </div>

        {/* ROI and Market Info */}
        <div className="mb-6 p-4 bg-gray-900/50 rounded-lg border border-cyan-500/20">
          <h4 className="text-sm font-semibold text-cyan-400 mb-2">ROI & Market</h4>
          <div className="text-xs text-gray-300 space-y-1">
            <div><span className="text-gray-400">Market Size:</span> {service.marketSize}</div>
            <div><span className="text-gray-400">Growth Rate:</span> {service.growthRate}</div>
            <div className="text-green-400 font-medium">{service.roi}</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <a
            href={service.link}
            className="flex-1 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 hover:scale-105 text-center"
          >
            Learn More
          </a>
          <a
            href="/contact"
            className="px-4 py-2 border border-cyan-500/50 text-cyan-400 text-sm font-medium rounded-lg hover:bg-cyan-500/10 hover:border-cyan-500 transition-all duration-200"
          >
            Contact
          </a>
        </div>
      </div>
    </motion.div>
  );

  const ServiceListItem = ({ service }: { service: any }) => (
    <motion.div
      variants={fadeInUp}
      className="group bg-black/40 backdrop-blur-xl border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
    >
      <div className="flex items-start space-x-6">
        {/* Service Icon */}
        <div className={`w-20 h-20 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center text-3xl flex-shrink-0`}>
          {service.icon}
        </div>

        {/* Service Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                {service.name}
              </h3>
              <p className="text-gray-300 text-lg mb-2">{service.tagline}</p>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </div>
            <div className="text-right ml-4">
              <div className="text-3xl font-bold text-white mb-1">{service.price}</div>
              <div className="text-sm text-gray-400">{service.period}</div>
              {service.popular && (
                <span className="inline-block mt-2 px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-medium rounded-full">
                  Popular
                </span>
              )}
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {service.features.map((feature: string, index: number) => (
              <div key={index} className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span className="text-sm text-gray-300">{feature}</span>
              </div>
            ))}
          </div>

          {/* Service Details Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 text-sm">
            <div>
              <span className="text-gray-400">Category:</span>
              <div className="text-cyan-400 font-medium">{service.category}</div>
            </div>
            <div>
              <span className="text-gray-400">Setup Time:</span>
              <div className="text-white">{service.setupTime}</div>
            </div>
            <div>
              <span className="text-gray-400">Trial:</span>
              <div className="text-white">{service.trialDays} days</div>
            </div>
            <div>
              <span className="text-gray-400">Rating:</span>
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-white">{service.rating}</span>
                <span className="text-gray-400">({service.reviews})</span>
              </div>
            </div>
          </div>

          {/* ROI and Market Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 p-4 bg-gray-900/50 rounded-lg border border-cyan-500/20">
            <div>
              <span className="text-sm text-gray-400">Market Size:</span>
              <div className="text-white font-medium">{service.marketSize}</div>
            </div>
            <div>
              <span className="text-sm text-gray-400">Growth Rate:</span>
              <div className="text-white font-medium">{service.growthRate}</div>
            </div>
            <div>
              <span className="text-sm text-gray-400">ROI:</span>
              <div className="text-green-400 font-medium text-sm">{service.roi}</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <a
              href={service.link}
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 hover:scale-105"
            >
              Learn More
            </a>
            <a
              href="/contact"
              className="px-6 py-3 border border-cyan-500/50 text-cyan-400 font-medium rounded-lg hover:bg-cyan-500/10 hover:border-cyan-500 transition-all duration-200"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-black text-white">
      <SEO 
        title="Comprehensive 2025 Services Showcase | Zion Tech Group"
        description="Explore our comprehensive portfolio of innovative AI automation, IT infrastructure, and micro SAAS services. Cutting-edge solutions for the future of business."
        keywords={["AI automation", "IT infrastructure", "micro SAAS", "quantum computing", "space technology", "cybersecurity", "cloud services"]}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-purple-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Comprehensive
              </span>
              <br />
              <span className="text-white">2025 Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Discover our complete portfolio of cutting-edge AI automation, IT infrastructure, and innovative micro SAAS solutions that are transforming businesses worldwide.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">{allServices.length}+</div>
                <div className="text-gray-400">Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">15+</div>
                <div className="text-gray-400">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
                <div className="text-gray-400">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-gray-400">Support</div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search Section */}
      <section className="py-8 border-b border-cyan-500/20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-cyan-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-200"
              />
            </div>

            {/* Filters and Controls */}
            <div className="flex items-center space-x-4">
              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-gray-900/50 border border-cyan-500/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-200"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-gray-900/50 border border-cyan-500/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-200"
              >
                <option value="name">Sort by Name</option>
                <option value="price">Sort by Price</option>
                <option value="rating">Sort by Rating</option>
                <option value="popularity">Sort by Popularity</option>
              </select>

              {/* View Mode Toggle */}
              <div className="flex bg-gray-900/50 border border-cyan-500/20 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-all duration-200 ${
                    viewMode === 'grid' 
                      ? 'bg-cyan-500 text-white' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-all duration-200 ${
                    viewMode === 'list' 
                      ? 'bg-cyan-500 text-white' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-6 text-center">
            <p className="text-gray-400">
              Showing <span className="text-cyan-400 font-medium">{filteredServices.length}</span> of{' '}
              <span className="text-white font-medium">{allServices.length}</span> services
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid/List */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredServices.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-gray-400 mb-6">
                Try adjusting your search criteria or browse all categories
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
              >
                Clear Filters
              </button>
            </motion.div>
          ) : (
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className={
                viewMode === 'grid' 
                  ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                  : 'space-y-8'
              }
            >
              {filteredServices.map((service) => (
                viewMode === 'grid' ? (
                  <ServiceCard key={service.id} service={service} />
                ) : (
                  <ServiceListItem key={service.id} service={service} />
                )
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 via-blue-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Our team of experts is ready to help you implement the perfect solution for your needs. 
              Get started today and experience the future of technology.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Get Started Today
              </a>
              <a
                href="/services"
                className="px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 font-bold rounded-lg hover:bg-cyan-500/10 hover:border-cyan-500 transition-all duration-200"
              >
                View All Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Comprehensive2025ServicesShowcase;