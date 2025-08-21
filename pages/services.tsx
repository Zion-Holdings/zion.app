import React, { useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Filter, Star, CheckCircle, ArrowRight, 
  Brain, Atom, Shield, Rocket, Target, Microscope,
  Phone, Mail, MapPin, TrendingUp, Users, Award,
  ExternalLink, Zap, Globe, Cpu, Database, Lock, Briefcase, Code
} from 'lucide-react';

// Import existing 2034 service data
import { ultimateFuturisticServices2034 } from '../data/2034-ultimate-futuristic-services';
// Import new 2034 services from remote
import { cuttingEdge2034Services } from '../data/2034-cutting-edge-innovations';
import { emergingTech2034Services } from '../data/2034-emerging-tech-breakthroughs';
// Import new micro SAAS and AI services
import { innovativeMicroSaasSolutions } from '../data/2034-innovative-micro-saas-solutions';
import { cuttingEdgeAIServices } from '../data/2034-cutting-edge-ai-services';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

// Create unified services array with all services
const allServices = [
  ...ultimateFuturisticServices2034,
  ...cuttingEdge2034Services,
  ...emergingTech2034Services,
  ...innovativeMicroSaasSolutions,
  ...cuttingEdgeAIServices
];

// Helper function to get service pricing display
const getServicePricing = (service: any) => {
  if (service.pricing.monthly) {
    return {
      display: service.pricing.monthly,
      yearly: service.pricing.yearly,
      enterprise: service.pricing.enterprise
    };
  } else if (service.pricing.starter) {
    return {
      display: service.pricing.starter,
      yearly: service.pricing.professional,
      enterprise: service.pricing.enterprise
    };
  }
  return {
    display: 'Contact for pricing',
    yearly: 'Contact for pricing',
    enterprise: 'Contact for pricing'
  };
};

// Helper function to get service features
const getServiceFeatures = (service: any) => {
  return service.features || [];
};

// Helper function to get service category
const getServiceCategory = (service: any) => {
  return service.category || 'Other';
};

const serviceCategories = [
  {
    id: 'all',
    title: '🚀 All Services',
    description: 'Complete portfolio of revolutionary technology solutions',
    icon: Star,
    color: 'from-cyan-500 to-purple-500',
    services: allServices,
    gradient: 'from-cyan-500/20 to-purple-500/20'
  },
  {
    id: 'AI & Consciousness',
    title: '🧠 AI & Consciousness',
    description: 'Revolutionary AI consciousness and emotional intelligence platforms',
    icon: Brain,
    color: 'from-pink-500 to-rose-500',
    services: allServices.filter(s => getServiceCategory(s) === 'AI & Consciousness'),
    gradient: 'from-pink-500/20 to-rose-500/20'
  },
  {
    id: 'Quantum & Emerging Tech',
    title: '⚛️ Quantum & Emerging Tech',
    description: 'Quantum computing, DNA computing, and beyond',
    icon: Atom,
    color: 'from-cyan-500 to-blue-500',
    services: allServices.filter(s => getServiceCategory(s) === 'Quantum & Emerging Tech'),
    gradient: 'from-cyan-500/20 to-blue-500/20'
  },
  {
    id: 'Space & Metaverse',
    title: '🌌 Space & Metaverse',
    description: 'Space mining, metaverse development, and more',
    icon: Rocket,
    color: 'from-purple-500 to-indigo-500',
    services: allServices.filter(s => getServiceCategory(s) === 'Space & Metaverse'),
    gradient: 'from-purple-500/20 to-indigo-500/20'
  },
  {
    id: 'Enterprise IT',
    title: '🏙️ Enterprise IT',
    description: 'Autonomous operations and zero-trust security',
    icon: Shield,
    color: 'from-green-500 to-emerald-500',
    services: allServices.filter(s => getServiceCategory(s) === 'Enterprise IT'),
    gradient: 'from-green-500/20 to-emerald-500/20'
  },
  {
    id: 'Micro SaaS',
    title: '🎯 Micro SaaS',
    description: 'Innovative solutions for every business need',
    icon: Target,
    color: 'from-yellow-500 to-orange-500',
    services: allServices.filter(s => getServiceCategory(s) === 'Micro SaaS'),
    gradient: 'from-yellow-500/20 to-orange-500/20'
  },
  {
    id: 'Research & Development',
    title: '🔬 Research & Development',
    description: 'Breakthrough technologies and innovations',
    icon: Microscope,
    color: 'from-blue-500 to-cyan-500',
    services: allServices.filter(s => getServiceCategory(s) === 'Research & Development'),
    gradient: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    id: 'AI Services',
    title: '🤖 AI Services',
    description: 'Cutting-edge artificial intelligence solutions',
    icon: Cpu,
    color: 'from-indigo-500 to-purple-500',
    services: allServices.filter(s => getServiceCategory(s) === 'AI Services'),
    gradient: 'from-indigo-500/20 to-purple-500/20'
  },
  {
    id: 'Business Solutions',
    title: '💼 Business Solutions',
    description: 'Comprehensive business and productivity tools',
    icon: Briefcase,
    color: 'from-emerald-500 to-teal-500',
    services: allServices.filter(s => getServiceCategory(s) === 'Business Solutions'),
    gradient: 'from-emerald-500/20 to-teal-500/20'
  },
  {
    id: 'Development Tools',
    title: '🛠️ Development Tools',
    description: 'Developer productivity and collaboration tools',
    icon: Code,
    color: 'from-orange-500 to-red-500',
    services: allServices.filter(s => getServiceCategory(s) === 'Development Tools'),
    gradient: 'from-orange-500/20 to-red-500/20'
  }
];

export default function ServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  const filteredServices = serviceCategories
    .find(cat => cat.id === selectedCategory)?.services || []
    .filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      if (priceRange === 'all') return matchesSearch;
      
      // Handle different pricing structures
      let priceValue = 0;
      if (service.pricing.monthly) {
        priceValue = parseInt(service.pricing.monthly.replace(/[^0-9]/g, ''));
      } else if (service.pricing.starter) {
        priceValue = parseInt(service.pricing.starter.replace(/[^0-9]/g, ''));
      }
      
      switch (priceRange) {
        case 'low':
          return matchesSearch && priceValue < 2000;
        case 'medium':
          return matchesSearch && priceValue >= 2000 && priceValue < 4000;
        case 'high':
          return matchesSearch && priceValue >= 4000;
        default:
          return matchesSearch;
      }
    });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Consciousness':
        return <Brain className="w-6 h-6 text-pink-400" />;
      case 'Quantum & Emerging Tech':
        return <Atom className="w-6 h-6 text-cyan-400" />;
      case 'Space & Metaverse':
        return <Rocket className="w-6 h-6 text-purple-400" />;
      case 'Enterprise IT':
        return <Shield className="w-6 h-6 text-green-400" />;
      case 'Micro SaaS':
        return <Target className="w-6 h-6 text-yellow-400" />;
      case 'Research & Development':
        return <Microscope className="w-6 h-6 text-blue-400" />;
      case 'AI Services':
        return <Cpu className="w-6 h-6 text-indigo-400" />;
      case 'Business Solutions':
        return <Briefcase className="w-6 h-6 text-emerald-400" />;
      case 'Development Tools':
        return <Code className="w-6 h-6 text-orange-400" />;
      default:
        return <Star className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <>
      <Head>
        <title>Revolutionary Services 2034 | Zion Tech Group - AI Consciousness, Quantum Computing, Space Tech</title>
        <meta name="description" content="Discover our revolutionary 2034 technology services: AI consciousness platforms, quantum computing solutions, space mining automation, metaverse development, and cutting-edge micro SAAS solutions." />
        <meta name="keywords" content="AI consciousness, quantum computing, space technology, metaverse, micro SAAS, enterprise IT, cybersecurity, 2034 services, future technology" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Revolutionary Services 2034 | Zion Tech Group" />
        <meta property="og:description" content="AI consciousness, quantum computing, space technology, and micro SAAS solutions for tomorrow." />
        <meta property="og:url" content="https://ziontechgroup.com/services" />
        <meta property="og:type" content="website" />
        
        {/* Contact Information */}
        <meta name="contact:phone" content="+1 302 464 0950" />
        <meta name="contact:email" content="kleber@ziontechgroup.com" />
        <meta name="contact:address" content="364 E Main St STE 1008 Middletown DE 19709" />
        
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Head>

      <div className="min-h-screen bg-black text-white pt-24">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500/5 to-purple-600/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-pink-500/5 to-cyan-500/5 rounded-full blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 rounded-full text-cyan-300 text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2 text-cyan-400" />
                2034 Future Technology Services
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Revolutionary <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Services</span> for Tomorrow
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the future with our cutting-edge AI consciousness platforms, quantum computing solutions, 
                space technology innovations, and revolutionary micro SAAS services that transform businesses and advance humanity.
              </p>
            </motion.div>

            {/* Search and Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-12"
            >
              <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                {/* Search */}
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search revolutionary services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-black/50 border border-cyan-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500"
                  />
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-2">
                  {serviceCategories.map((category) => (
                    <motion.button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-4 py-2 rounded-lg border transition-all duration-200 flex items-center space-x-2 ${
                        selectedCategory === category.id
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-600 border-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                          : 'bg-black/50 border-cyan-500/30 text-gray-300 hover:border-cyan-500/50 hover:text-cyan-300'
                      }`}
                    >
                      <category.icon className="w-4 h-4" />
                      <span className="hidden sm:inline">{category.title.replace(/[\u{1F680}\u{1F9E0}\u{26AB}\u{1F30C}\u{1F3D9}\u{1F3AF}\u{1F52C}]/gu, '').trim()}</span>
                    </motion.button>
                  ))}
                </div>

                {/* Price Filter */}
                <div className="flex items-center space-x-2">
                  <Filter className="w-5 h-5 text-cyan-400" />
                  <select
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="px-3 py-2 bg-black/50 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500"
                  >
                    <option value="all">All Prices</option>
                    <option value="low">Under $2K/month</option>
                    <option value="medium">$2K - $4K/month</option>
                    <option value="high">Over $4K/month</option>
                  </select>
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
                Showing <span className="text-cyan-400 font-semibold">{filteredServices.length}</span> revolutionary services
                {selectedCategory !== 'all' && ` in ${serviceCategories.find(cat => cat.id === selectedCategory)?.title.replace(/[\u{1F680}\u{1F9E0}\u{26AB}\u{1F30C}\u{1F3D9}\u{1F3AF}\u{1F52C}]/gu, '').trim()}`}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredServices.length > 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="group relative"
                  >
                    <div className={`relative bg-gradient-to-br ${serviceCategories.find(cat => cat.id === getServiceCategory(service))?.gradient || 'from-gray-500/20 to-slate-500/20'} border border-cyan-500/30 rounded-2xl p-6 h-full backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300`}>
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
                          {service.description}
                        </p>
                      </div>

                      {/* Features Preview */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-cyan-300 mb-3">Key Features</h4>
                        <div className="space-y-2">
                          {getServiceFeatures(service).slice(0, 3).map((feature, idx) => (
                            <div key={idx} className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
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
                          {getServicePricing(service).display}
                        </div>
                        <div className="text-xs text-gray-400">
                          {getServicePricing(service).yearly}
                        </div>
                      </div>

                      {/* Market Info */}
                      <div className="mb-6">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-400">Market Size:</span>
                          <span className="text-green-400 font-medium">{service.marketSize}</span>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col space-y-3">
                        <motion.a
                          href={service.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 shadow-lg shadow-cyan-500/25"
                        >
                          <span>View Demo</span>
                          <ExternalLink className="w-4 h-4" />
                        </motion.a>
                        
                        <motion.a
                          href={`mailto:${service.contact}?subject=Inquiry about ${service.name}`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex items-center justify-center space-x-2 px-4 py-3 bg-black/50 border border-cyan-500/30 text-cyan-300 font-medium rounded-lg hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all duration-200"
                        >
                          <Mail className="w-4 h-4" />
                          <span>Contact Sales</span>
                        </motion.a>
                      </div>

                      {/* Hover Effect Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
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
                  Try adjusting your search terms or filters to find the revolutionary services you're looking for.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setPriceRange('all');
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 border border-cyan-500/30 rounded-3xl p-12 text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Shape <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Tomorrow</span>?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join the revolution and transform your business with cutting-edge technology. 
                Our team of experts is ready to guide you into the future.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-lg rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 shadow-2xl shadow-cyan-500/25"
                >
                  <span>Get Started Today</span>
                  <ArrowRight className="w-6 h-6" />
                </motion.a>
                
                <motion.a
                  href="tel:+13024640950"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-black/50 border-2 border-cyan-500/50 text-cyan-300 font-bold text-lg rounded-xl hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-200"
                >
                  <Phone className="w-6 h-6" />
                  <span>Call +1 302 464 0950</span>
                </motion.a>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
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
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}