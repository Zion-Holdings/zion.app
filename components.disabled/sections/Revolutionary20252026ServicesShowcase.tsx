import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, Rocket, Shield, Atom, Cpu, Cloud, Target,
  ArrowRight, Star, Zap, Users, Award, Globe, Search,
  Filter, ChevronDown, ExternalLink, Sparkles, Eye,
  Lock, Clock, CheckCircle, TrendingUp, DollarSign, Phone,
  Mail, MapPin, Globe as GlobeIcon, Grid, List
} from 'lucide-react';

// Import our new revolutionary services
import { revolutionary20252026MicroSaasServices } from '../../data/revolutionary-2025-2026-micro-saas-services';
import { revolutionary20252026AIServices } from '../../data/revolutionary-2025-2026-ai-services';
import { revolutionary20252026ITInfrastructureServices } from '../../data/revolutionary-2025-2026-it-infrastructure-services';

const Revolutionary20252026ServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('popularity');
  const [viewMode, setViewMode] = useState('grid');

  // Combine all revolutionary services
  const allServices = [
    ...revolutionary20252026MicroSaasServices,
    ...revolutionary20252026AIServices,
    ...revolutionary20252026ITInfrastructureServices
  ];

  // Categories
  const categories = [
    { id: 'all', name: 'All Revolutionary Services', icon: <Globe className="w-5 h-5" />, count: allServices.length },
    { id: 'micro-saas', name: 'Micro SAAS Solutions', icon: <Rocket className="w-5 h-5" />, count: revolutionary20252026MicroSaasServices.length },
    { id: 'ai', name: 'AI & Machine Learning', icon: <Brain className="w-5 h-5" />, count: revolutionary20252026AIServices.length },
    { id: 'it-infrastructure', name: 'IT Infrastructure', icon: <Cpu className="w-5 h-5" />, count: revolutionary20252026ITInfrastructureServices.length }
  ];

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesCategory = selectedCategory === 'all' || 
        service.category.toLowerCase().includes(selectedCategory) ||
        service.name.toLowerCase().includes(selectedCategory);
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'popularity':
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
        case 'price-low':
          return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
        case 'price-high':
          return parseFloat(b.price.replace(/[^0-9.]/g, '')) - parseFloat(a.price.replace(/[^0-9.]/g, ''));
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <section className="relative bg-black text-white py-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5" />
        
        {/* Animated grid */}
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '200px 200px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '200px 200px']
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6"
          >
            Revolutionary 2025-2026 Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8"
          >
            Experience the future of technology with our cutting-edge micro SAAS, AI, and IT infrastructure solutions. 
            Built for tomorrow, available today.
          </motion.p>
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto border border-gray-700"
          >
            <h3 className="text-lg font-semibold text-cyan-400 mb-4">Get Started Today</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <Phone className="w-4 h-4 text-green-400" />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span className="text-xs">{contactInfo.address}</span>
              </div>
            </div>
            <div className="mt-4 text-center">
              <a
                href={contactInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <GlobeIcon className="w-4 h-4" />
                <span>Visit {contactInfo.website}</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-8"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
                <span className="bg-gray-700/50 px-2 py-1 rounded-full text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Search and Sort */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-8 flex flex-col sm:flex-row gap-4 justify-between items-center"
        >
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search revolutionary services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex items-center space-x-4">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              <option value="popularity">Most Popular</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name A-Z</option>
            </select>
            
            <div className="flex bg-gray-800/50 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'}`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'}`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}
        >
          <AnimatePresence>
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 ${
                  viewMode === 'list' ? 'flex items-start space-x-6' : ''
                }`}
              >
                {/* Service Icon and Header */}
                <div className={`${viewMode === 'list' ? 'flex-shrink-0' : 'text-center mb-4'}`}>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-3xl mx-auto`}>
                    {service.icon}
                  </div>
                  {service.popular && (
                    <div className="mt-2 inline-flex items-center space-x-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      <Star className="w-3 h-3" />
                      <span>Popular</span>
                    </div>
                  )}
                </div>

                {/* Service Content */}
                <div className={`${viewMode === 'list' ? 'flex-1' : ''}`}>
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 mb-3">{service.tagline}</p>
                  
                  {/* Pricing */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                      <span className="text-gray-400">{service.period}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-300">{service.rating}</span>
                      <span className="text-xs text-gray-500">({service.reviews})</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">{service.description}</p>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                    <div className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-xs text-gray-500">
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Market Info */}
                  <div className="grid grid-cols-2 gap-4 mb-4 text-xs">
                    <div>
                      <span className="text-gray-500">Market Size:</span>
                      <div className="text-cyan-400 font-medium">{service.marketSize}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Growth Rate:</span>
                      <div className="text-green-400 font-medium">{service.growthRate}</div>
                    </div>
                  </div>

                  {/* ROI and Benefits */}
                  <div className="mb-4 p-3 bg-gray-800/50 rounded-lg">
                    <h4 className="text-sm font-semibold text-green-400 mb-1">ROI & Benefits:</h4>
                    <p className="text-xs text-gray-300">{service.roi}</p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <span>Learn More</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <button className="px-4 py-2 border border-cyan-500 text-cyan-400 rounded-lg text-sm font-medium hover:bg-cyan-500 hover:text-white transition-all duration-300">
                      Contact Sales
                    </button>
                  </div>

                  {/* Trial Info */}
                  <div className="mt-4 text-center">
                    <div className="inline-flex items-center space-x-2 bg-gray-800/50 px-3 py-1 rounded-full">
                      <Clock className="w-3 h-3 text-yellow-400" />
                      <span className="text-xs text-gray-300">
                        {service.trialDays}-day free trial • Setup in {service.setupTime}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
              Join hundreds of forward-thinking companies already leveraging our revolutionary services. 
              Get started today and experience the future of technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${contactInfo.email}?subject=Revolutionary Services Inquiry`}
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg text-lg font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Contact Us Today</span>
              </a>
              <a
                href={`tel:${contactInfo.mobile}`}
                className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg text-lg font-medium hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Revolutionary20252026ServicesShowcase;