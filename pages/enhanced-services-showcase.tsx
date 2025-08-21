import React, { useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, TrendingUp, Zap, Brain, Rocket, Shield, 
  DollarSign, Users, Clock, CheckCircle, ArrowRight,
  Phone, Mail, MapPin, ExternalLink, Search, Filter,
  Grid, List, ChevronDown, ChevronUp, Sparkles,
  Crown, Award, Target, Globe, Cpu, Database
} from 'lucide-react';
import UltraAdvancedFuturisticMatrixBackground from '../components/ui/UltraAdvancedFuturisticMatrixBackground';
import UltraFuturisticCard from '../components/ui/UltraFuturisticCard';
import { nextGenerationAIServices } from '../data/next-generation-ai-services';
import { cuttingEdgeITServices } from '../data/cutting-edge-it-services';
import { innovativeMicroSaasV2Services } from '../data/innovative-micro-saas-v2';
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';
import { innovativeAIServices } from '../data/innovative-ai-services';
import { quantumSpaceServices } from '../data/quantum-space-services';
import { enterpriseITServices } from '../data/enterprise-it-services';
import { realMarketServices } from '../data/real-market-services';

export default function EnhancedServicesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<string>('name');

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Combine all services for comprehensive showcase
  const allServices = [
    ...nextGenerationAIServices,
    ...cuttingEdgeITServices,
    ...innovativeMicroSaasV2Services,
    ...enhancedRealMicroSaasServices,
    ...innovativeAIServices,
    ...quantumSpaceServices,
    ...enterpriseITServices,
    ...realMarketServices
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀', count: allServices.length },
    { id: 'next-gen-ai', name: 'Next-Gen AI', icon: '🧠', count: nextGenerationAIServices.length },
    { id: 'cutting-edge-it', name: 'Cutting-Edge IT', icon: '⚡', count: cuttingEdgeITServices.length },
    { id: 'innovative-saas', name: 'Innovative SaaS', icon: '💻', count: innovativeMicroSaasV2Services.length },
    { id: 'quantum-space', name: 'Quantum & Space', icon: '⚛️', count: quantumSpaceServices.length },
    { id: 'enterprise', name: 'Enterprise IT', icon: '🏢', count: enterpriseITServices.length }
  ];

  const sortOptions = [
    { id: 'name', name: 'Name A-Z' },
    { id: 'price-low', name: 'Price Low to High' },
    { id: 'price-high', name: 'Price High to Low' },
    { id: 'rating', name: 'Rating' },
    { id: 'customers', name: 'Customer Count' },
    { id: 'popularity', name: 'Popularity' }
  ];

  // Filter and sort services
  const filteredServices = React.useMemo(() => {
    let filtered = allServices.filter(service => {
      const matchesCategory = selectedCategory === 'all' || 
        (selectedCategory === 'next-gen-ai' && nextGenerationAIServices.includes(service)) ||
        (selectedCategory === 'cutting-edge-it' && cuttingEdgeITServices.includes(service)) ||
        (selectedCategory === 'innovative-saas' && innovativeMicroSaasV2Services.includes(service)) ||
        (selectedCategory === 'quantum-space' && quantumSpaceServices.includes(service)) ||
        (selectedCategory === 'enterprise' && enterpriseITServices.includes(service));
      
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           (service.tagline && service.tagline.toLowerCase().includes(searchTerm.toLowerCase()));
      
      return matchesCategory && matchesSearch;
    });

    // Sort services
    switch (sortBy) {
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'price-low':
        filtered.sort((a, b) => parseFloat(a.price.replace(/[$,]/g, '')) - parseFloat(b.price.replace(/[$,]/g, '')));
        break;
      case 'price-high':
        filtered.sort((a, b) => parseFloat(b.price.replace(/[$,]/g, '')) - parseFloat(a.price.replace(/[$,]/g, '')));
        break;
      case 'rating':
        filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case 'customers':
        filtered.sort((a, b) => (b.customers || 0) - (a.customers || 0));
        break;
      case 'popularity':
        filtered.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
        break;
      default:
        break;
    }

    return filtered;
  }, [allServices, selectedCategory, searchTerm, sortBy]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const featuredServices = [
    {
      title: '🚀 Next-Generation AI Services',
      description: 'Revolutionary AI platforms that push the boundaries of what\'s possible',
      services: nextGenerationAIServices.slice(0, 3),
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: '⚡ Cutting-Edge IT Infrastructure',
      description: 'Advanced infrastructure solutions for the modern enterprise',
      services: cuttingEdgeITServices.slice(0, 3),
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: '💻 Innovative Micro SaaS Solutions',
      description: 'Creative and practical SaaS tools for every business need',
      services: innovativeMicroSaasV2Services.slice(0, 3),
      color: 'from-green-500 to-emerald-600'
    }
  ];

  return (
    <UltraAdvancedFuturisticMatrixBackground intensity="high" colorScheme="quantum">
      <div className="min-h-screen">
        <Head>
          <title>Enhanced Services Showcase - Zion Tech Group | 600+ Revolutionary Solutions</title>
          <meta name="description" content="Discover our comprehensive portfolio of 600+ revolutionary AI, quantum computing, and IT services. Achieve 1000% ROI with cutting-edge solutions. Contact: +1 302 464 0950" />
          <meta name="keywords" content="AI services, quantum computing, IT services, micro SaaS, cybersecurity, cloud migration, neural interface, quantum internet, cutting-edge technology" />
          <meta property="og:title" content="Enhanced Services Showcase - Zion Tech Group" />
          <meta property="og:description" content="600+ cutting-edge technology services showcase" />
          <meta property="og:url" content="https://ziontechgroup.com/enhanced-services-showcase" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://ziontechgroup.com/enhanced-services-showcase" />
        </Head>

        {/* Hero Section */}
        <section className="relative z-10 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
                Enhanced Services Showcase
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                600+ Revolutionary AI, Quantum Computing & IT Services
              </p>
              <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
                From next-generation AI to cutting-edge infrastructure, discover solutions that deliver 1000% ROI and transform your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <div className="flex items-center justify-center space-x-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full px-6 py-3 border border-cyan-500/30">
                  <Users className="w-5 h-5 text-cyan-400" />
                  <span className="text-cyan-300 font-semibold">600+ Services</span>
                </div>
                <div className="flex items-center justify-center space-x-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full px-6 py-3 border border-purple-500/30">
                  <TrendingUp className="w-5 h-5 text-purple-400" />
                  <span className="text-purple-300 font-semibold">1000% ROI</span>
                </div>
                <div className="flex items-center justify-center space-x-3 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 rounded-full px-6 py-3 border border-pink-500/30">
                  <Zap className="w-5 h-5 text-pink-400" />
                  <span className="text-pink-300 font-semibold">24/7 Support</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Service Categories */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-6">
                Featured Service Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our most innovative and high-impact service categories
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredServices.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className={`bg-gradient-to-br ${category.color} p-8 rounded-2xl text-white relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
                      <p className="text-lg mb-6 opacity-90">{category.description}</p>
                      
                      <div className="space-y-3">
                        {category.services.map((service, serviceIndex) => (
                          <div key={serviceIndex} className="flex items-center space-x-3 bg-white/10 rounded-lg p-3">
                            <span className="text-2xl">{service.icon}</span>
                            <div className="flex-1">
                              <div className="font-semibold">{service.name}</div>
                              <div className="text-sm opacity-80">{service.price}{service.period}</div>
                            </div>
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        ))}
                      </div>
                      
                      <Button 
                        href={`#${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                        variant="secondary"
                        className="mt-6 w-full"
                      >
                        View All {category.title.split(' ')[0]} Services
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gray-800/60 border border-gray-700 rounded-2xl p-6">
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
                      className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Category Filter */}
                <div className="flex-shrink-0">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name} ({category.count})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sort Options */}
                <div className="flex-shrink-0">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* View Mode Toggle */}
                <div className="flex-shrink-0">
                  <div className="flex bg-gray-700/50 rounded-lg p-1">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-md transition-colors ${
                        viewMode === 'grid' 
                          ? 'bg-cyan-500 text-white' 
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      <Grid className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-md transition-colors ${
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
            </div>
          </div>
        </section>

        {/* Services Grid/List */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className={viewMode === 'grid' 
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                : 'space-y-6'
              }
            >
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className={viewMode === 'grid' ? '' : 'bg-gray-800/60 border border-gray-700 rounded-2xl p-6'}
                >
                  {viewMode === 'grid' ? (
                    <div className="bg-gray-800/60 border border-gray-700 rounded-2xl p-6 hover:border-cyan-500/40 transition-colors h-full">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl">{service.icon}</span>
                          <div>
                            <div className="text-sm text-gray-400">{service.category}</div>
                            <div className="text-xs text-gray-500">{service.setupTime} setup</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                          <div className="text-sm text-gray-400">{service.period}</div>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                      <p className="text-gray-300 mb-3">{service.tagline}</p>
                      <p className="text-gray-400 text-sm mb-4">{service.description}</p>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">Rating:</span>
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-white">{service.rating}</span>
                            <span className="text-gray-400">({service.reviews})</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">Customers:</span>
                          <span className="text-white">{service.customers.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">Trial:</span>
                          <span className="text-white">{service.trialDays} days</span>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Button 
                          href={service.link} 
                          variant="primary"
                          className="flex-1"
                        >
                          Learn More
                          <ExternalLink className="ml-2 w-4 h-4" />
                        </Button>
                        <Button 
                          href="/contact" 
                          variant="secondary"
                          className="flex-1"
                        >
                          Get Started
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center text-2xl">
                          {service.icon}
                        </div>
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                            <p className="text-gray-300 mb-3">{service.tagline}</p>
                            <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                          </div>
                          <div className="text-right ml-4">
                            <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                            <div className="text-sm text-gray-400">{service.period}</div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
                          <div>
                            <span className="text-gray-400">Category:</span>
                            <div className="text-white">{service.category}</div>
                          </div>
                          <div>
                            <span className="text-gray-400">Rating:</span>
                            <div className="flex items-center space-x-1">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span className="text-white">{service.rating}</span>
                            </div>
                          </div>
                          <div>
                            <span className="text-gray-400">Customers:</span>
                            <div className="text-white">{service.customers.toLocaleString()}</div>
                          </div>
                          <div>
                            <span className="text-gray-400">Setup:</span>
                            <div className="text-white">{service.setupTime}</div>
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <Button 
                            href={service.link} 
                            variant="primary"
                            size="sm"
                          >
                            Learn More
                            <ExternalLink className="ml-2 w-4 h-4" />
                          </Button>
                          <Button 
                            href="/contact" 
                            variant="secondary"
                            size="sm"
                          >
                            Get Started
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {filteredServices.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-gray-400 mb-6">Try adjusting your search criteria or browse all categories</p>
                <Button 
                  href="#"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  variant="primary"
                >
                  View All Services
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of companies achieving breakthrough results with our revolutionary services
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="w-6 h-6 text-cyan-400" />
                  <span className="text-lg">{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="w-6 h-6 text-purple-400" />
                  <span className="text-lg">{contactInfo.email}</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <MapPin className="w-6 h-6 text-green-400" />
                  <span className="text-lg">{contactInfo.address}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  href="/contact" 
                  variant="primary"
                  size="lg"
                  className="text-lg px-8 py-4"
                >
                  Start Your Transformation
                  <Rocket className="ml-2 w-6 h-6" />
                </Button>
                <Button 
                  href="/pricing" 
                  variant="secondary"
                  size="lg"
                  className="text-lg px-8 py-4"
                >
                  View Pricing
                  <DollarSign className="ml-2 w-6 h-6" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraAdvancedFuturisticMatrixBackground>
  );
}

// Button component (if not imported)
const Button = ({ 
  href, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children, 
  onClick 
}: {
  href?: string;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl focus:ring-cyan-500',
    secondary: 'bg-gray-700 hover:bg-gray-600 text-white border border-gray-600 hover:border-gray-500 focus:ring-gray-500'
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};