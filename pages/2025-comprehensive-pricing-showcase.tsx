import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Grid, List, Filter, Star, Users, TrendingUp,
  Brain, Atom, Shield, Target, Rocket, Building, Cpu,
  ArrowRight, Check, DollarSign, Clock, Zap, Globe
} from 'lucide-react';

// Import our new 2025 service data
import { enterpriseAIAutomationServices2025 } from '../data/2025-enterprise-ai-automation-services';
import { innovativeITInfrastructureServices2025 } from '../data/2025-innovative-it-infrastructure-services';
import { innovativeMicroSaasSolutions2025 } from '../data/2025-innovative-micro-saas-solutions';
import { cuttingEdgeAIServices2025 } from '../data/2025-cutting-edge-ai-services';

// Import existing service data
import { advancedAIAutomationServices2025 } from '../data/2025-advanced-ai-automation-services';

const ComprehensivePricingShowcase2025 = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('price-low');

  // Combine all services
  const allServices = [
    ...enterpriseAIAutomationServices2025,
    ...innovativeITInfrastructureServices2025,
    ...innovativeMicroSaasSolutions2025,
    ...cuttingEdgeAIServices2025,
    ...advancedAIAutomationServices2025
  ];

  const categories = [
    {
      id: 'all',
      name: 'All Services',
      icon: <Grid className="w-6 h-6" />,
      color: 'from-gray-500 to-slate-500',
      count: allServices.length
    },
    {
      id: 'ai-automation',
      name: 'AI Automation',
      icon: <Brain className="w-6 h-6" />,
      color: 'from-blue-500 to-purple-500',
      count: allServices.filter(s => s.category.toLowerCase().includes('ai automation')).length
    },
    {
      id: 'it-infrastructure',
      name: 'IT Infrastructure',
      icon: <Building className="w-6 h-6" />,
      color: 'from-indigo-500 to-purple-500',
      count: allServices.filter(s => s.category.toLowerCase().includes('it infrastructure')).length
    },
    {
      id: 'micro-saas',
      name: 'Micro SAAS',
      icon: <Target className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
      count: allServices.filter(s => s.category.toLowerCase().includes('micro saas')).length
    },
    {
      id: 'ai-services',
      name: 'AI Services',
      icon: <Atom className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
      count: allServices.filter(s => s.category.toLowerCase().includes('ai services')).length
    }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'budget', name: 'Budget', range: '$0 - $500' },
    { id: 'mid-range', name: 'Mid-Range', range: '$500 - $2,000' },
    { id: 'enterprise', name: 'Enterprise', range: '$2,000 - $5,000' },
    { id: 'premium', name: 'Premium', range: '$5,000+' }
  ];

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || 
                             service.category.toLowerCase().includes(selectedCategory.replace('-', ' '));
      
      const matchesPrice = priceRange === 'all' || (() => {
        const price = parseFloat(service.price.replace('$', '').replace(',', ''));
        switch (priceRange) {
          case 'budget': return price <= 500;
          case 'mid-range': return price > 500 && price <= 2000;
          case 'enterprise': return price > 2000 && price <= 5000;
          case 'premium': return price > 5000;
          default: return true;
        }
      })();
      
      return matchesSearch && matchesCategory && matchesPrice;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', ''));
        case 'price-high':
          return parseFloat(b.price.replace('$', '').replace(',', '')) - parseFloat(a.price.replace('$', '').replace(',', ''));
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
        case 'popularity':
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
        case 'customers':
          return (b.customers || 0) - (a.customers || 0);
        default:
          return 0;
      }
    });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const getPriceRange = (price: string) => {
    const numPrice = parseFloat(price.replace('$', '').replace(',', ''));
    if (numPrice <= 500) return 'budget';
    if (numPrice <= 2000) return 'mid-range';
    if (numPrice <= 5000) return 'enterprise';
    return 'premium';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="2025 Comprehensive Pricing Showcase | Zion Tech Group"
        description="Explore our complete 2025 service portfolio with transparent pricing, features, and ROI benefits. From AI automation to quantum computing, find the perfect solution for your business."
        keywords={["2025 pricing", "service costs", "AI automation pricing", "IT infrastructure pricing", "micro SAAS pricing", "transparent pricing"]}
        image="/og-pricing-showcase-2025.jpg"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                2025 Comprehensive
              </span>
              <br />
              <span className="text-white">Pricing Showcase</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transparent pricing for our complete portfolio of innovative services. 
              Compare features, ROI benefits, and find the perfect solution for your business needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl mb-2">💰</div>
                <div className="text-2xl font-bold text-white">$99</div>
                <div className="text-gray-400 text-sm">Starting Price</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🚀</div>
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-gray-400 text-sm">Services Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">⭐</div>
                <div className="text-2xl font-bold text-white">4.8</div>
                <div className="text-gray-400 text-sm">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">👥</div>
                <div className="text-2xl font-bold text-white">10K+</div>
                <div className="text-gray-400 text-sm">Happy Customers</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              {/* Category Filter */}
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div className="relative">
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  {priceRanges.map((range) => (
                    <option key={range.id} value={range.id}>
                      {range.name} - {range.range}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="popularity">Most Popular</option>
                  <option value="customers">Most Customers</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Results Summary */}
          <div className="mb-8 text-center">
            <p className="text-gray-300">
              Showing <span className="text-white font-semibold">{filteredServices.length}</span> of{' '}
              <span className="text-white font-semibold">{allServices.length}</span> services
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl"
              >
                {/* Service Header */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{service.icon}</div>
                    <div className="flex items-center space-x-2">
                      {service.popular && (
                        <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-xs font-bold rounded-full">
                          Popular
                        </span>
                      )}
                      <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                        getPriceRange(service.price) === 'budget' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                        getPriceRange(service.price) === 'mid-range' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                        getPriceRange(service.price) === 'enterprise' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' :
                        'bg-pink-500/20 text-pink-400 border border-pink-500/30'
                      }`}>
                        {getPriceRange(service.price).charAt(0).toUpperCase() + getPriceRange(service.price).slice(1)}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 text-lg mb-4">{service.tagline}</p>
                  
                  {/* Price and Rating */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-3xl font-bold text-white">
                      {service.price}
                      <span className="text-gray-400 text-xl">{service.period}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="text-white font-semibold">{service.rating}</span>
                      <span className="text-gray-400">({service.reviews})</span>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="space-y-3 mb-6">
                    <h4 className="text-white font-semibold text-lg">Key Features:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 4 && (
                        <div className="text-gray-400 text-sm">
                          +{service.features.length - 4} more features
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Market Info */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/5 p-3 rounded-lg">
                      <div className="text-gray-400 text-sm">Market Size</div>
                      <div className="text-white font-semibold">{service.marketSize}</div>
                    </div>
                    <div className="bg-white/5 p-3 rounded-lg">
                      <div className="text-gray-400 text-sm">Growth Rate</div>
                      <div className="text-green-400 font-semibold">{service.growthRate}</div>
                    </div>
                    <div className="bg-white/5 p-3 rounded-lg">
                      <div className="text-gray-400 text-sm">Customers</div>
                      <div className="text-white font-semibold">{service.customers.toLocaleString()}</div>
                    </div>
                    <div className="bg-white/5 p-3 rounded-lg">
                      <div className="text-gray-400 text-sm">Setup Time</div>
                      <div className="text-white font-semibold">{service.setupTime}</div>
                    </div>
                  </div>

                  {/* ROI Benefits */}
                  <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 p-4 rounded-lg mb-6">
                    <h4 className="text-white font-semibold mb-2">ROI Benefits</h4>
                    <p className="text-gray-300">{service.roi}</p>
                  </div>

                  {/* Technology Stack */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-2">Technology Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technology.slice(0, 3).map((tech, index) => (
                        <span key={index} className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded">
                          {tech}
                        </span>
                      ))}
                      {service.technology.length > 3 && (
                        <span className="px-2 py-1 bg-white/10 text-gray-400 text-xs rounded">
                          +{service.technology.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Service Footer */}
                <div className="bg-white/5 p-6 border-t border-white/10">
                  <div className="flex flex-col space-y-4">
                    <a
                      href={service.link}
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-xl font-semibold text-center hover:from-purple-600 hover:to-pink-600 transition-all duration-200 flex items-center justify-center space-x-2"
                    >
                      <span>Learn More & Get Started</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    
                    <div className="text-center">
                      <p className="text-gray-400 text-sm mb-2">Contact Information</p>
                      <div className="space-y-1 text-xs text-gray-300">
                        <p>📱 {service.contactInfo.mobile}</p>
                        <p>✉️ {service.contactInfo.email}</p>
                        <p>📍 {service.contactInfo.address}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your search criteria or filters</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Need Help Choosing the Right Service?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our team of experts is here to help you find the perfect solution for your business needs
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl mb-2">📱</div>
                <h3 className="text-white font-semibold mb-1">Call Us</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">✉️</div>
                <h3 className="text-white font-semibold mb-1">Email Us</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🌐</div>
                <h3 className="text-white font-semibold mb-1">Visit Us</h3>
                <p className="text-gray-300">ziontechgroup.com</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Service%20Consultation%20Request"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-8 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
              >
                Request Free Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="bg-white/10 text-white py-3 px-8 rounded-xl font-semibold border border-white/20 hover:bg-white/20 transition-all duration-200"
              >
                Call for Pricing
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensivePricingShowcase2025;