import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Grid, List, Filter, DollarSign, TrendingUp, Target, Star,
  ArrowRight, Check, Palette, Heart, Truck, GraduationCap,
  Building, Cpu, Zap, Globe, Lock, ChartBar, Users, Database, Cloud, Server, Network, Shield
} from 'lucide-react';

// Import our comprehensive service data
import { advancedAIAutomationPlatforms2025 } from '../data/2025-advanced-ai-automation-platforms';
import { emergingTechBreakthroughServices2025 } from '../data/2025-emerging-tech-breakthrough-services';
import { advancedITInfrastructurePlatforms2025 } from '../data/2025-advanced-it-infrastructure-platforms';
import { advancedBusinessIntelligencePlatforms2025 } from '../data/2025-advanced-business-intelligence-platforms';
import { ultimateRealMicroSaasServices2025 } from '../data/2025-ultimate-real-micro-saas-services';

const ComprehensivePricingShowcase2025: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState<'price' | 'roi' | 'popular' | 'rating'>('price');

  // Combine all services for comprehensive pricing showcase
  const allServices = [
    ...advancedAIAutomationPlatforms2025,
    ...emergingTechBreakthroughServices2025,
    ...advancedITInfrastructurePlatforms2025,
    ...advancedBusinessIntelligencePlatforms2025,
    ...ultimateRealMicroSaasServices2025
  ];

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(allServices.map(service => service.category || 'Other')))];

  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
      
      // Price range filtering
      let matchesPrice = true;
      if (priceRange !== 'all') {
        const price = parseFloat(service.price.replace('$', '').replace(',', ''));
        switch (priceRange) {
          case 'low':
            matchesPrice = price <= 299;
            break;
          case 'medium':
            matchesPrice = price > 299 && price <= 699;
            break;
          case 'high':
            matchesPrice = price > 699;
            break;
        }
      }
      
      return matchesSearch && matchesCategory && matchesPrice;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', ''));
        case 'roi':
          return (b.rating || 0) - (a.rating || 0); // Using rating as proxy for ROI
        case 'popular':
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
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

  // Calculate pricing statistics
  const pricingStats = {
    totalServices: allServices.length,
    averagePrice: allServices.reduce((sum, service) => sum + parseFloat(service.price.replace('$', '').replace(',', '')), 0) / allServices.length,
    priceRange: {
      low: allServices.filter(service => parseFloat(service.price.replace('$', '').replace(',', '')) <= 299).length,
      medium: allServices.filter(service => {
        const price = parseFloat(service.price.replace('$', '').replace(',', ''));
        return price > 299 && price <= 699;
      }).length,
      high: allServices.filter(service => parseFloat(service.price.replace('$', '').replace(',', '')) > 699).length
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <SEO 
        title="2025 Comprehensive Pricing Showcase | Zion Tech Group"
        description="Explore our comprehensive pricing for innovative micro SAAS services, AI solutions, and IT infrastructure platforms. Competitive pricing with proven ROI and market validation."
        keywords={[
          'pricing', 'micro SAAS pricing', 'AI services pricing', 'IT infrastructure pricing', 
          'ROI', 'competitive pricing', 'Zion Tech Group'
        ]}
        image="https://ziontechgroup.com/og-pricing-showcase-2025.jpg"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            2025 Comprehensive
            <br />
            <span className="text-white">Pricing Showcase</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transparent, competitive pricing for our comprehensive portfolio of 
            <span className="text-green-400 font-semibold"> innovative micro SAAS services</span> and 
            <span className="text-blue-400 font-semibold"> AI-powered solutions</span> that deliver 
            <span className="text-purple-400 font-semibold"> proven ROI and market advantages</span>
          </motion.p>

          {/* Pricing Statistics */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/30 rounded-2xl p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">{pricingStats.totalServices}</div>
              <div className="text-gray-400">Total Services</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/30 rounded-2xl p-6">
              <div className="text-3xl font-bold text-blue-400 mb-2">${Math.round(pricingStats.averagePrice)}</div>
              <div className="text-gray-400">Average Price</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/30 rounded-2xl p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">{pricingStats.priceRange.low}</div>
              <div className="text-gray-400">Entry Level</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/30 rounded-2xl p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">{pricingStats.priceRange.high}</div>
              <div className="text-gray-400">Enterprise</div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/30 rounded-2xl p-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-green-400">Need Custom Pricing?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-green-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Database className="w-4 h-4 text-blue-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-purple-400" />
                <span>ziontechgroup.com</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services by name or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20"
              />
            </div>

            {/* Filters */}
            <div className="flex items-center space-x-4">
              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-gray-800/50 border border-gray-700/30 rounded-xl text-white focus:outline-none focus:border-green-500/50"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>

              {/* Price Range Filter */}
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="px-4 py-3 bg-gray-800/50 border border-gray-700/30 rounded-xl text-white focus:outline-none focus:border-green-500/50"
              >
                <option value="all">All Prices</option>
                <option value="low">$0 - $299</option>
                <option value="medium">$300 - $699</option>
                <option value="high">$700+</option>
              </select>

              {/* Sort Options */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-4 py-3 bg-gray-800/50 border border-gray-700/30 rounded-xl text-white focus:outline-none focus:border-green-500/50"
              >
                <option value="price">Price: Low to High</option>
                <option value="roi">Highest ROI</option>
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id || index}
                variants={itemVariants}
              >
                <PricingCard service={service} />
              </motion.div>
            ))}
          </motion.div>

          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-gray-400 text-xl mb-4">No services found matching your criteria</div>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                  setPriceRange('all');
                }}
                className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl transition-colors"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Pricing Tiers Overview */}
      <section className="px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Pricing Tiers Overview
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Entry Level */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-3xl p-8"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Entry Level</h3>
                <div className="text-4xl font-bold text-green-400 mb-2">$0 - $299</div>
                <div className="text-gray-400">Perfect for startups and small businesses</div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3 text-sm text-gray-300">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>Essential features and functionality</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-300">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>Quick setup and onboarding</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-300">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>Basic support and documentation</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-300">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>Scalable as you grow</span>
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-sm text-gray-400 mb-2">Services Available</div>
                <div className="text-2xl font-bold text-green-400">{pricingStats.priceRange.low}</div>
              </div>
            </motion.div>

            {/* Mid Market */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-3xl p-8 transform scale-105"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Mid Market</h3>
                <div className="text-4xl font-bold text-blue-400 mb-2">$300 - $699</div>
                <div className="text-gray-400">Ideal for growing companies</div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3 text-sm text-gray-300">
                  <Check className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span>Advanced features and automation</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-300">
                  <Check className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span>Priority support and training</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-300">
                  <Check className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span>Custom integrations and workflows</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-300">
                  <Check className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span>Advanced analytics and reporting</span>
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-sm text-gray-400 mb-2">Services Available</div>
                <div className="text-2xl font-bold text-blue-400">{pricingStats.priceRange.medium}</div>
              </div>
            </motion.div>

            {/* Enterprise */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-500/20 to-violet-500/20 border border-purple-500/30 rounded-3xl p-8"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
                <div className="text-4xl font-bold text-purple-400 mb-2">$700+</div>
                <div className="text-gray-400">For large organizations</div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3 text-sm text-gray-300">
                  <Check className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <span>Full feature suite and customization</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-300">
                  <Check className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <span>Dedicated account management</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-300">
                  <Check className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <span>White-label and reseller options</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-300">
                  <Check className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <span>SLA guarantees and 24/7 support</span>
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-sm text-gray-400 mb-2">Services Available</div>
                <div className="text-2xl font-bold text-purple-400">{pricingStats.priceRange.high}</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-green-500/20 via-blue-500/20 to-purple-500/20 border border-green-500/30 rounded-3xl p-12"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">
              Ready to Choose Your Innovation Path?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our transparent pricing ensures you get the best value for your investment. 
              Start with a free trial and scale as you grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(34,197,94,0.3)]"
              >
                Get Started Today
              </a>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 bg-gray-800/50 border border-gray-700/30 text-white font-semibold rounded-xl hover:bg-gray-700/50 transition-all duration-300"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Enhanced Pricing Card Component
const PricingCard: React.FC<{ service: any }> = ({ service }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group cursor-pointer h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative p-6 bg-gradient-to-br from-gray-900/60 to-gray-800/60 border border-gray-700/30 rounded-2xl backdrop-blur-xl hover:border-green-500/50 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(34,197,94,0.2)] h-full">
        {/* Background Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Header */}
        <div className="relative z-10 mb-4">
          <div className="flex items-center justify-between mb-3">
            <div className={`w-12 h-12 bg-gradient-to-br ${service.color || 'from-green-500 to-blue-600'} rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.3)]`}>
              <span className="text-2xl">{service.icon || '🚀'}</span>
            </div>
            
            {/* Popular Badge */}
            {service.popular && (
              <div className="flex items-center space-x-1 bg-amber-500/20 border border-amber-500/30 rounded-full px-3 py-1">
                <Star className="w-3 h-3 text-amber-400 fill-current" />
                <span className="text-xs text-amber-400 font-medium">Popular</span>
              </div>
            )}
          </div>
          
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
            {service.name}
          </h3>
          
          <p className="text-gray-400 text-sm leading-relaxed mb-3">
            {service.tagline}
          </p>
        </div>

        {/* Pricing Section */}
        <div className="relative z-10 mb-4">
          <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-white mb-1">
              {service.price}
              <span className="text-gray-400 text-lg font-normal">{service.period}</span>
            </div>
            {service.trialDays && (
              <div className="text-green-400 text-sm font-medium">
                {service.trialDays}-day free trial
              </div>
            )}
            <div className="text-xs text-gray-400 mt-1">
              Setup: {service.setupTime}
            </div>
          </div>
        </div>

        {/* ROI and Market Position */}
        <div className="relative z-10 mb-4 space-y-3">
          {service.roi && (
            <div className="bg-gray-800/40 rounded-lg p-3">
              <div className="text-xs text-gray-400 mb-1">Proven ROI</div>
              <div className="text-sm text-green-400 font-medium">{service.roi}</div>
            </div>
          )}
          
          {service.marketPosition && (
            <div className="bg-gray-800/40 rounded-lg p-3">
              <div className="text-xs text-gray-400 mb-1">Market Position</div>
              <div className="text-sm text-gray-300 line-clamp-2">
                {service.marketPosition}
              </div>
            </div>
          )}
        </div>

        {/* Key Features */}
        {service.features && service.features.length > 0 && (
          <div className="relative z-10 mb-4">
            <div className="text-xs text-gray-400 mb-2">Key Features</div>
            <div className="space-y-2">
              {service.features.slice(0, 3).map((feature: string, index: number) => (
                <div key={index} className="flex items-center space-x-2 text-sm text-gray-300">
                  <Check className="w-3 h-3 text-green-400 flex-shrink-0" />
                  <span className="line-clamp-2">{feature}</span>
                </div>
              ))}
              {service.features.length > 3 && (
                <div className="text-xs text-gray-500 text-center pt-2">
                  +{service.features.length - 3} more features
                </div>
              )}
            </div>
          </div>
        )}

        {/* Action Button */}
        <div className="relative z-10">
          <a
            href={service.link || `https://ziontechgroup.com/${service.id}`}
            className="w-full px-4 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white font-medium rounded-xl hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(34,197,94,0.3)] flex items-center justify-center space-x-2"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Hover Effects */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
          animate={{ opacity: isHovered ? 1 : 0 }}
        />
      </div>
    </motion.div>
  );
};

export default ComprehensivePricingShowcase2025;