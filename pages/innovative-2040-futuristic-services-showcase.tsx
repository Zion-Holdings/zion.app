import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Grid, List, Filter, Star, Users, TrendingUp,
  Brain, Atom, Shield, Target, Rocket, ArrowRight, Check,
  Zap, Globe, Lock, Cpu, Database, Cloud, Palette, Heart, Phone, Mail, MapPin, Server, Code
} from 'lucide-react';

// Import our new innovative 2045 services
import { innovative2045AdvancedServices } from '../data/innovative-2045-advanced-services';
import { innovative2045ITServices } from '../data/innovative-2045-it-services';
import { innovative2045MicroSAASServices } from '../data/innovative-2045-micro-saas-services';

// Import existing service data for comprehensive showcase
import { realMicroSaasServices } from '../data/real-micro-saas-services';
import { innovativeAIServices } from '../data/innovative-ai-services';
import { enterpriseITServices } from '../data/enterprise-it-services';

// Create a unified service interface that works with all service types
interface UnifiedService {
  id: string;
  name: string;
  tagline?: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  popular?: boolean;
  icon?: string;
  color?: string;
  textColor?: string;
  link: string;
  category: string;
  realService?: boolean;
  technology?: string[];
  technologyStack?: string[];
  integrations?: string[];
  useCases?: string[];
  roi?: string;
  competitors?: string[];
  marketSize?: string;
  growthRate?: string;
  contactInfo?: {
    mobile?: string;
    phone?: string;
    email: string;
    address?: string;
    website: string;
  };
  realImplementation?: string | boolean;
  implementationDetails?: string;
  launchDate?: string;
  customers: string | number;
  rating: number;
  reviews: number;
}

const Innovative2040FuturisticServicesShowcase: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'popularity' | 'category'>('name');
  const [isLoading, setIsLoading] = useState(true);

  // Convert and combine all services to unified format
  const allServices: UnifiedService[] = [
    // Convert new 2045 services to unified format
    ...innovative2045AdvancedServices.map(service => ({
      ...service,
      tagline: service.tagline,
      popular: service.rating >= 4.8,
      icon: 'brain',
      color: 'cyan',
      realService: true,
      technology: service.technologyStack,
      customers: service.customers,
      realImplementation: service.realImplementation
    })),
    ...innovative2045ITServices.map(service => ({
      ...service,
      tagline: service.tagline,
      popular: service.rating >= 4.8,
      icon: 'server',
      color: 'blue',
      realService: true,
      technology: service.technologyStack,
      customers: service.customers,
      realImplementation: service.realImplementation
    })),
    ...innovative2045MicroSAASServices.map(service => ({
      ...service,
      tagline: service.tagline,
      popular: service.rating >= 4.8,
      icon: 'code',
      color: 'emerald',
      realService: true,
      technology: service.technologyStack,
      customers: service.customers,
      realImplementation: service.realImplementation
    })),
    // Convert existing services to unified format
    ...realMicroSaasServices.map(service => ({
      ...service,
      tagline: service.tagline || '',
      popular: service.popular || false,
      icon: service.icon || 'code',
      color: service.color || 'emerald',
      realService: true, // MicroSaasService doesn't have this property, so we set it to true
      technology: service.techStack || [], // Use techStack instead of technology
      customers: service.customers || 0,
      realImplementation: service.realImplementation || false,
      // Convert price to string format
      price: `$${service.price.monthly}/month`
    })),
    ...innovativeAIServices.map(service => ({
      ...service,
      tagline: service.tagline || '',
      popular: service.popular || false,
      icon: service.icon || 'brain',
      color: service.color || 'purple',
      realService: service.realService || false,
      technology: service.technology || [],
      customers: service.customers || 0,
      realImplementation: service.realImplementation || false,
      // Price is already a string in innovativeAIServices
      price: service.price
    })),
    ...enterpriseITServices.map(service => ({
      ...service,
      tagline: service.tagline || '',
      popular: service.popular || false,
      icon: service.icon || 'server',
      color: service.color || 'blue',
      realService: service.realService || false,
      technology: service.technology || [],
      customers: service.customers || 0,
      realImplementation: service.realImplementation || false,
      // Price is already a string in enterpriseITServices
      price: service.price
    }))
  ];

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(allServices.map(service => service.category)))];

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price': {
          const aPrice = parseFloat(a.price.replace(/[^0-9.]/g, ''));
          const bPrice = parseFloat(b.price.replace(/[^0-9.]/g, ''));
          return aPrice - bPrice;
        }
        case 'popularity':
          return b.rating - a.rating;
        case 'category':
          return a.category.localeCompare(b.category);
        default:
          return a.name.localeCompare(b.name);
      }
    });

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const getIconComponent = (iconName: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'brain': <Brain className="w-6 h-6" />,
      'server': <Server className="w-6 h-6" />,
      'code': <Code className="w-6 h-6" />,
      'atom': <Atom className="w-6 h-6" />,
      'shield': <Shield className="w-6 h-6" />,
      'rocket': <Rocket className="w-6 h-6" />,
      'target': <Target className="w-6 h-6" />,
      'globe': <Globe className="w-6 h-6" />,
      'cloud': <Cloud className="w-6 h-6" />,
      'database': <Database className="w-6 h-6" />,
      'cpu': <Cpu className="w-6 h-6" />,
      'lock': <Lock className="w-6 h-6" />,
      'heart': <Heart className="w-6 h-6" />,
      'palette': <Palette className="w-6 h-6" />,
      'zap': <Zap className="w-6 h-6" />
    };
    return iconMap[iconName] || <Brain className="w-6 h-6" />;
  };

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      'cyan': 'from-cyan-400 to-blue-500',
      'blue': 'from-blue-400 to-indigo-500',
      'emerald': 'from-emerald-400 to-teal-500',
      'purple': 'from-purple-400 to-pink-500',
      'red': 'from-red-400 to-orange-500',
      'orange': 'from-orange-400 to-yellow-500',
      'yellow': 'from-yellow-400 to-orange-500',
      'green': 'from-green-400 to-emerald-500',
      'indigo': 'from-indigo-400 to-purple-500',
      'pink': 'from-pink-400 to-rose-500'
    };
    return colorMap[color] || 'from-gray-400 to-gray-500';
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400 mx-auto mb-4"></div>
          <p className="text-xl text-gray-300">Loading innovative services...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <SEO
        title="Innovative 2040 Futuristic Services Showcase | Zion Tech Group"
        description="Discover our revolutionary portfolio of AI, quantum computing, and space technology solutions that are reshaping industries and defining the future."
        keywords={[
          "AI services", "quantum computing", "space technology", "cybersecurity", 
          "cloud solutions", "micro SAAS", "Zion Tech Group"
        ]}
      />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Innovative 2040
              </span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Futuristic Services Showcase
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Discover our revolutionary portfolio of AI, quantum computing, and space technology solutions 
              that are reshaping industries and defining the future. Experience the power of tomorrow's technology today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="px-4 pb-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-white/5 to-white/10 border border-white/10 rounded-2xl p-6 backdrop-blur-sm"
          >
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search for innovative services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-12 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-3">
                {categories.slice(0, 8).map((category) => (
                  <motion.button
                    key={category}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                        : 'bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10'
                    }`}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'grid' 
                      ? 'bg-cyan-500 text-white' 
                      : 'bg-white/5 text-gray-400 hover:bg-white/10'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'list' 
                      ? 'bg-cyan-500 text-white' 
                      : 'bg-white/5 text-gray-400 hover:bg-white/10'
                  }`}
                >
                  <List className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Results Count */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="flex items-center justify-between">
              <div className="text-gray-300">
                Showing <span className="text-white font-semibold">{filteredServices.length}</span> of{' '}
                <span className="text-white font-semibold">{allServices.length}</span> innovative services
              </div>
              <div className="text-gray-400 text-sm">
                {selectedCategory !== 'All' && `Filtered by: ${selectedCategory}`}
              </div>
            </div>
          </motion.div>

          {/* Services Display */}
          {viewMode === 'grid' ? (
            <motion.div
              variants={{
                animate: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
              initial="initial"
              animate="animate"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.02,
                    y: -10,
                    boxShadow: "0 25px 50px -12px rgba(6, 182, 212, 0.25)"
                  }}
                  className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-500"
                >
                  {/* Service Header */}
                  <div className="mb-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`inline-block p-3 rounded-xl bg-gradient-to-r ${getColorClasses(service.color || 'cyan')} bg-opacity-20 group-hover:scale-110 transition-transform duration-300`}>
                        {getIconComponent(service.icon || 'brain')}
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-cyan-400 mb-1">{service.price}</div>
                        <div className="text-sm text-gray-400">Starting Price</div>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {service.name}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Category Badge */}
                    <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${getColorClasses(service.color || 'cyan')} text-white border border-white/30`}>
                      {service.category}
                    </div>
                  </div>

                  {/* Features Preview */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <Check className="w-4 h-4 text-cyan-400" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      {service.rating} ({service.reviews})
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4 text-cyan-400" />
                      {typeof service.customers === 'string' ? service.customers : `${service.customers}+`}
                    </div>
                  </div>

                  {/* Technology Stack */}
                  {service.technology && service.technology.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Technology Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technology.slice(0, 3).map((tech, idx) => (
                          <span key={idx} className="px-2 py-1 bg-white/5 rounded-md text-xs text-gray-300 border border-white/10">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              variants={{
                animate: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
              initial="initial"
              animate="animate"
              className="space-y-6"
            >
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Service Icon */}
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 bg-gradient-to-r ${getColorClasses(service.color || 'cyan')} bg-opacity-20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        {getIconComponent(service.icon || 'brain')}
                      </div>
                    </div>

                    {/* Service Content */}
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                            {service.name}
                          </h3>
                          <p className="text-gray-300 leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold text-cyan-400 mb-1">{service.price}</div>
                          <div className="text-sm text-gray-400">Starting Price</div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Features */}
                        <div>
                          <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features</h4>
                          <ul className="space-y-1">
                            {service.features.slice(0, 3).map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                                <Check className="w-3 h-3 text-cyan-400 mt-1 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Stats */}
                        <div>
                          <h4 className="text-sm font-semibold text-gray-300 mb-2">Performance</h4>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm text-gray-300">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              {service.rating} ({service.reviews})
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-300">
                              <Users className="w-4 h-4 text-cyan-400" />
                              {typeof service.customers === 'string' ? service.customers : `${service.customers}+`}
                            </div>
                            {service.launchDate && (
                              <div className="flex items-center gap-2 text-sm text-gray-300">
                                <TrendingUp className="w-4 h-4 text-green-400" />
                                {service.launchDate}
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Technology */}
                        {service.technology && service.technology.length > 0 && (
                          <div>
                            <h4 className="text-sm font-semibold text-gray-300 mb-2">Technology</h4>
                            <div className="flex flex-wrap gap-2">
                              {service.technology.slice(0, 3).map((tech, idx) => (
                                <span key={idx} className="px-2 py-1 bg-white/5 rounded-md text-xs text-gray-300 border border-white/10">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Category and CTA */}
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-6 pt-6 border-t border-white/10">
                        <div className="flex items-center gap-4">
                          <div className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${getColorClasses(service.color || 'cyan')} text-white border border-white/30`}>
                            {service.category}
                          </div>
                          {service.marketSize && (
                            <div className="text-sm text-gray-400">
                              Market Size: {service.marketSize}
                            </div>
                          )}
                        </div>
                        
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center gap-2"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* No Results */}
          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-20"
            >
              <div className="w-24 h-24 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">No Services Found</h3>
              <p className="text-gray-300 mb-8 max-w-md mx-auto">
                Try adjusting your search criteria or browse all categories to discover our innovative services.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              >
                View All Services
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Ready to Transform?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Join the future of technology with Zion Tech Group. Let's build tomorrow together.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full text-xl shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-3"
              >
                <Rocket className="w-6 h-6" />
                Start Your Journey
                <ArrowRight className="w-6 h-6" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-full text-xl hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center gap-3"
              >
                <Phone className="w-6 h-6" />
                Contact Sales
              </motion.button>
            </div>

            {/* Contact Info */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Phone, label: 'Phone', value: '+1 302 464 0950' },
                { icon: Mail, label: 'Email', value: 'kleber@ziontechgroup.com' },
                { icon: MapPin, label: 'Address', value: '364 E Main St STE 1008, Middletown DE 19709' }
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm"
                >
                  <div className="inline-block p-3 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 mb-4">
                    <contact.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="text-lg font-semibold text-white mb-2">{contact.label}</div>
                  <div className="text-gray-300">{contact.value}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Innovative2040FuturisticServicesShowcase;