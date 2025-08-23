import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
>>>>>>> 916d02471c24718d698d51219f240472f9d52b96
import { 
  Search, Grid, List, Star, CheckCircle, Shield, 
  Brain, Cloud, Zap, Users, TrendingUp, Lock,
  ArrowRight, Check, Palette, Heart, Truck, GraduationCap,
  Building, Star, Users, TrendingUp, Zap, Globe, Eye, Phone, Mail, MapPin
} from 'lucide-react';

// Import our new service data
import { advancedEnterpriseServices2025 } from '../data/2025-advanced-enterprise-services-expansion';
import { innovativeMicroSaasExpansion2025 } from '../data/2025-innovative-micro-saas-expansion';
import { cuttingEdgeITInfrastructureServices } from '../data/2025-cutting-edge-it-infrastructure';

const contact = {
>>>>>>> 916d02471c24718d698d51219f240472f9d52b96
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const allServices = [
  ...advancedEnterpriseServices2025,
      ...innovativeMicroSaasExpansion2025,
  ...cuttingEdgeITInfrastructureServices
];

  // Combine all services
  const allServices = [
    ...real2025AdvancedMicroSaas,
    ...real2025AdvancedITServices,
    ...real2025AdvancedAIServices,
    ...real2025EmergingTechServices
  ];

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
        case 'price':
          return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''));
        case 'rating':
          return b.rating - a.rating;
        case 'customers':
          return b.customers - a.customers;
        default:
>>>>>>> 916d02471c24718d698d51219f240472f9d52b96
          return a.name.localeCompare(b.name);
        case 'price':
          return (a.price?.monthly || 0) - (b.price?.monthly || 0);
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
        case 'popularity':
        default:
          return (b.customers || 0) - (a.customers || 0);
      }
    });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <SEO 
        title="2025 Advanced Micro SAAS Services Showcase | Zion Tech Group"
        description="Discover our comprehensive portfolio of advanced micro SAAS services including cybersecurity, AI/ML, fintech, blockchain, healthcare, and biotech solutions. Real, innovative, and market-ready services."
        keywords={["micro SAAS", "cybersecurity", "AI services", "blockchain", "fintech", "healthcare", "biotech", "Zion Tech Group"]}
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              2025 Advanced Micro SAAS Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Cutting-edge, real, and innovative micro SAAS solutions across cybersecurity, AI/ML, fintech, blockchain, healthcare, and biotech
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-white">
                <div className="text-2xl font-bold">{allAdvancedServices.length}+</div>
                <div className="text-sm">Advanced Services</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-white">
                <div className="text-2xl font-bold">99.9%</div>
                <div className="text-sm">Uptime Guarantee</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-white">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm">Expert Support</div>
              </div>
            </div>
const categories = [
  {
    id: 'all',
    name: 'All Services',
    icon: <Grid className="w-6 h-6" />,
    color: 'from-gray-500 to-slate-500',
    description: 'Complete portfolio of advanced services'
  },
  {
    id: 'ai-services',
    name: 'AI Services',
    icon: <Brain className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-600',
    description: 'Advanced artificial intelligence solutions'
  },
  {
    id: 'it-infrastructure',
    name: 'IT Infrastructure',
    icon: <Cpu className="w-6 h-6" />,
    color: 'from-blue-500 to-cyan-600',
    description: 'Modern infrastructure and cloud solutions'
  },
  {
    id: 'micro-saas',
    name: 'Micro SAAS',
    icon: <Rocket className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-600',
    description: 'Innovative micro software solutions'
  }
];

// Create unified services array
const allServices = [
  ...real2025AdvancedAIServices,
  ...real2025ITInfrastructureServices,
  ...real2025InnovativeMicroSaas
];

const AdvancedServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || 
      (selectedCategory === 'ai-services' && service.category.includes('AI')) ||
      (selectedCategory === 'it-infrastructure' && (service.category.includes('Infrastructure') || service.category.includes('Cloud') || service.category.includes('DevOps'))) ||
      (selectedCategory === 'micro-saas' && (service.category.includes('Finance') || service.category.includes('HR') || service.category.includes('Supply Chain') || service.category.includes('Content') || service.category.includes('Sales')));
    
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => {
        const category = getServiceCategory(service).toLowerCase();
        if (selectedCategory === 'enterprise') return category.includes('enterprise') || category.includes('legal') || category.includes('financial');
        if (selectedCategory === 'micro-saas') return category.includes('marketing') || category.includes('social') || category.includes('customer') || category.includes('project');
        if (selectedCategory === 'infrastructure') return category.includes('infrastructure') || category.includes('network') || category.includes('data center') || category.includes('edge');
        if (selectedCategory === 'ai-ml') return category.includes('ai') || category.includes('machine learning') || category.includes('nlp') || category.includes('ml');
        if (selectedCategory === 'quantum') return category.includes('quantum') || category.includes('quantum-resistant');
        return false;
      });
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tagline.toLowerCase().includes(searchTerm.toLowerCase()) ||
        getServiceCategory(service).toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredServices(filtered);
  }, [selectedCategory, searchTerm]);

  const ServiceCard = ({ service }: { service: any }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 ${
        service.popular ? 'ring-2 ring-blue-500' : ''
      }`}
    >
      {service.popular && (
        <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
          <Star className="w-4 h-4" />
          Popular
        </div>
      )}
      
      <div className={`h-32 bg-gradient-to-br ${service.color} flex items-center justify-center`}>
        <span className="text-4xl">{service.icon}</span>
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {service.name}
          </h3>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {service.tagline}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            {getServicePricing(service)}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {service.trialDays} day trial
          </span>
        </div>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {service.setupTime} setup
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-blue-500" />
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {(service.customers || 0).toLocaleString()}+ customers
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-500" />
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {service.rating}/5 ({service.reviews} reviews)
            </span>
          </div>
        </div>
        
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>
          <div className="space-y-1">
            {getServiceFeatures(service).slice(0, 3).map((feature: string, index: number) => (
              <div key={index} className="flex items-center gap-2">
                <Check className="w-3 h-3 text-green-500" />
                <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
              </div>
            ))}
            {getServiceFeatures(service).length > 3 && (
              <span className="text-sm text-gray-500 dark:text-gray-400">
                +{getServiceFeatures(service).length - 3} more features
              </span>
            )}
          </div>
        </div>
        
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">ROI & Benefits:</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {service.roi}
          </p>
        </div>
        
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Market Position:</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {service.marketPosition}
          </p>
        </div>
        
        <div className="flex items-center justify-between">
          <a
            href={service.link}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            Learn More
            <ArrowRight className="w-4 h-4" />
          </a>
          
          <a
            href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.name}`}
            className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-3 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </motion.div>
  );

  const ServiceList = ({ service }: { service: any }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 ${
        service.popular ? 'ring-2 ring-blue-500' : ''
      }`}
    >
      <div className="p-6">
        <div className="flex items-start gap-6">
          <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
            <span className="text-3xl">{service.icon}</span>
          </div>
          
          <div className="flex-1">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {service.name}
                  {service.popular && (
                    <span className="ml-3 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </span>
                  )}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  {service.tagline}
                </p>
              </div>
              
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {getServicePricing(service)}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {service.trialDays} day trial
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {service.setupTime} setup
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-500" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {(service.customers || 0).toLocaleString()}+ customers
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {service.rating}/5 ({service.reviews} reviews)
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>
                <div className="space-y-1">
                  {getServiceFeatures(service).slice(0, 4).map((feature: string, index: number) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="w-3 h-3 text-green-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">ROI & Benefits:</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  {service.roi}
                </p>
                
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Market Position:</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {service.marketPosition}
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <a
                href={service.link}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </a>
              
              <a
                href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.name}`}
                className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-3 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="2025 Advanced Services Showcase - Zion Tech Group"
        description="Discover our comprehensive portfolio of advanced AI services, micro SAAS solutions, and cutting-edge IT infrastructure. Real, innovative, and market-ready solutions for modern businesses."
        keywords="AI services, micro SAAS, IT infrastructure, quantum computing, enterprise solutions, Zion Tech Group"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
          >
            2025 Advanced Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Pioneering the future with cutting-edge AI, infrastructure, and micro SAAS solutions that drive business transformation
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a 
              href={`mailto:${contactInfo.email}`}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </a>
            <a 
              href={`tel:${contactInfo.mobile}`}
              className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              Call Now
            </a>
=======
>>>>>>> 916d02471c24718d698d51219f240472f9d52b96
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-1 rounded-lg mb-4">
                <div className="bg-slate-800 p-4 rounded-lg">
                  <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                  <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                  <p className="text-gray-300">{contact.mobile}</p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-1 rounded-lg mb-4">
                <div className="bg-slate-800 p-4 rounded-lg">
                  <Mail className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                  <p className="text-gray-300">{contact.email}</p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-1 rounded-lg mb-4">
                <div className="bg-slate-800 p-4 rounded-lg">
                  <MapPin className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                  <p className="text-gray-300">{contact.address}</p>
                </div>
              </div>
>>>>>>> 916d02471c24718d698d51219f240472f9d52b96
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex-shrink-0">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <div className="flex-shrink-0">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  <option value="name">Sort by Name</option>
                  <option value="price">Sort by Price</option>
                  <option value="rating">Sort by Rating</option>
                  <option value="customers">Sort by Customers</option>
                </select>
              </div>

              {/* View Mode */}
              <div className="flex-shrink-0">
                <div className="flex bg-slate-700/50 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-md transition-colors ${
                      viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-md transition-colors ${
                      viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid/List */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              {filteredServices.length} Advanced Services Found
            </h2>
            <p className="text-gray-400">
              Discover cutting-edge solutions designed for modern businesses
            </p>
          </div>

          <AnimatePresence mode="wait">
            {viewMode === 'grid' ? (
>>>>>>> 916d02471c24718d698d51219f240472f9d52b96
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 ${
                  viewMode === 'list' ? 'flex' : ''
                }`}
              >
                {/* Service Header */}
                <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{service.icon}</span>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{service.name}</h3>
                        <p className="text-sm text-gray-400">{service.category}</p>
                      </div>
                    </div>
                    {service.popular && (
                      <span className="px-2 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-medium rounded-full">
                        Popular
                      </span>
                    )}
                  </div>

                  <p className="text-gray-300 mb-4">{service.description}</p>

                  {/* Pricing */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-cyan-400">${service.price.monthly}</span>
                      <span className="text-gray-400">/month</span>
                    </div>
                    <p className="text-sm text-gray-500">${service.price.yearly}/year (save ${(service.price.monthly * 12 - service.price.yearly).toLocaleString()})</p>
                  </div>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                    <div className="grid grid-cols-1 gap-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Benefits:</h4>
                    <div className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                          <TrendingUp className="w-4 h-4 text-blue-400" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={service.link}
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                    >
                      Learn More
                    </a>
                    <a
                      href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.name}`}
                      className="px-4 py-2 border border-cyan-500 text-cyan-400 font-medium rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
                    >
                      Contact
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-300 mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your search terms or category filter</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Our team of experts is ready to help you implement these cutting-edge solutions and drive real business results.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a 
              href={`mailto:${contactInfo.email}?subject=Business Transformation Consultation`}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Schedule Consultation
            </a>
            <a 
              href={`tel:${contactInfo.mobile}`}
              className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              Call {contactInfo.mobile}
            </a>
          </motion.div>
        </div>
      </section>
>>>>>>> 916d02471c24718d698d51219f240472f9d52b96
    </div>
  );
};

export default AdvancedServicesShowcase;
