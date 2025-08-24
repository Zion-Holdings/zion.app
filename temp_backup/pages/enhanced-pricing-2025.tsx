import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  CheckCircle, Star, TrendingUp, Users, Award, Clock, Heart, 
  Brain, Rocket, Shield, Zap, Target, Atom, Globe, Cpu, Lock, 
  Cloud, BarChart3, Settings, Eye, Phone, Mail, MapPin, ArrowRight,
  ChevronDown, ChevronUp, Filter, Search
} from 'lucide-react';
import Layout from '../components/layout/Layout';
import { innovativeRealMicroSaasServices2025 } from '../data/2025-innovative-real-micro-saas-services';
import { innovativeAIServicesEnhanced2025 } from '../data/2025-innovative-ai-services-enhanced';
import { innovativeITServicesEnhanced2025 } from '../data/2025-innovative-it-services-enhanced';
import { emergingTechServicesEnhanced2025 } from '../data/2025-emerging-tech-services-enhanced';
import { advancedAIAutomationServices2025 } from '../data/2025-advanced-ai-automation-services';
import { advancedITInfrastructureServices2025 } from '../data/2025-advanced-it-infrastructure-services';
import { innovativeBusinessSolutions2025 } from '../data/2025-innovative-business-solutions';
import { cuttingEdgeAIServices2025 } from '../data/2025-cutting-edge-ai-services';
import { innovativeBusinessSolutionsEnhanced2025 } from '../data/2025-innovative-business-solutions-enhanced';
import { emergingTechnologyServicesEnhanced2025 } from '../data/2025-emerging-technology-services-enhanced';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

// Combine all services
const allServices = [
  ...innovativeRealMicroSaasServices2025,
  ...innovativeAIServicesEnhanced2025,
  ...innovativeITServicesEnhanced2025,
  ...emergingTechServicesEnhanced2025,
  ...advancedAIAutomationServices2025,
  ...advancedITInfrastructureServices2025,
  ...innovativeBusinessSolutions2025,
  ...cuttingEdgeAIServices2025,
  ...innovativeBusinessSolutionsEnhanced2025,
  ...emergingTechnologyServicesEnhanced2025
];

const categories = [
  'All Categories',
  'AI & Consciousness',
  'Quantum & Emerging Tech',
  'Enterprise IT',
  'Micro SAAS',
  'Advanced AI Automation',
  'Advanced IT Infrastructure',
  'Innovative Business Solutions',
  'Cutting Edge AI',
  'Enhanced Business Solutions',
  'Emerging Technology'
];

const priceRanges = [
  'All Prices',
  'Under $100',
  '$100 - $299',
  '$300 - $599',
  '$600 - $999',
  '$1000+'
];

export default function EnhancedPricing2025() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All Prices');
  const [sortBy, setSortBy] = useState('popularity');
  const [showFilters, setShowFilters] = useState(false);

  // Filter services based on search, category, and price
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All Categories' || 
                           service.category.includes(selectedCategory.replace('All Categories', ''));
    
    const matchesPrice = selectedPriceRange === 'All Prices' || 
                        (() => {
                          const price = parseInt(service.price.replace('$', '').replace(',', ''));
                          switch(selectedPriceRange) {
                            case 'Under $100': return price < 100;
                            case '$100 - $299': return price >= 100 && price <= 299;
                            case '$300 - $599': return price >= 300 && price <= 599;
                            case '$600 - $999': return price >= 600 && price <= 999;
                            case '$1000+': return price >= 1000;
                            default: return true;
                          }
                        })();
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch(sortBy) {
      case 'popularity':
        return b.popular ? 1 : -1;
      case 'price-low':
        return parseInt(a.price.replace('$', '').replace(',', '')) - parseInt(b.price.replace('$', '').replace(',', ''));
      case 'price-high':
        return parseInt(b.price.replace('$', '').replace(',', '')) - parseInt(a.price.replace('$', '').replace(',', ''));
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime();
      default:
        return 0;
    }
  });

  // Group services by category for comparison
  const servicesByCategory = sortedServices.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {} as Record<string, typeof allServices>);

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

  return (
    <Layout>
      <Head>
        <title>Enhanced Pricing 2025 | Zion Tech Group</title>
        <meta name="description" content="Comprehensive pricing for all our innovative AI, IT, and business solutions. Compare services, view market positions, and find the perfect solution for your needs." />
        <link rel="canonical" href="https://ziontechgroup.com/enhanced-pricing-2025" />
      </Head>

      <div className="min-h-screen pt-8 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Enhanced Pricing 2025
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto">
            Transparent pricing for {allServices.length}+ innovative services. 
            Compare with market leaders and see our competitive advantages.
          </p>
          
          {/* Pricing Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-black/30 rounded-2xl border border-cyan-500/30 p-6">
              <div className="text-3xl font-bold text-cyan-400">$99</div>
              <div className="text-slate-400">Starting Price</div>
            </div>
            <div className="bg-black/30 rounded-2xl border border-purple-500/30 p-6">
              <div className="text-3xl font-bold text-purple-400">60%</div>
              <div className="text-slate-400">Cost Savings</div>
            </div>
            <div className="bg-black/30 rounded-2xl border border-pink-500/30 p-6">
              <div className="text-3xl font-bold text-pink-400">500%</div>
              <div className="text-slate-400">Average ROI</div>
            </div>
            <div className="bg-black/30 rounded-2xl border border-green-500/30 p-6">
              <div className="text-3xl font-bold text-green-400">14</div>
              <div className="text-slate-400">Days Free Trial</div>
            </div>
          </div>
        </motion.div>

        {/* Search and Filters */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="max-w-6xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services by name, description, or category..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-black/50 border border-slate-700 rounded-2xl pl-12 pr-4 py-4 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
              />
            </div>

            {/* Filters Toggle */}
            <div className="flex justify-between items-center mb-6">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 bg-black/30 border border-slate-700 rounded-xl px-4 py-2 text-slate-300 hover:border-cyan-500 transition-colors"
              >
                <Filter className="w-4 h-4" />
                Filters
                {showFilters ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>

              <div className="flex items-center gap-4">
                <span className="text-slate-400">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-black/30 border border-slate-700 rounded-xl px-4 py-2 text-slate-300 focus:outline-none focus:border-cyan-500"
                >
                  <option value="popularity">Popularity</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Rating</option>
                  <option value="newest">Newest</option>
                </select>
              </div>
            </div>

            {/* Filters */}
            {showFilters && (
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                <div>
                  <label className="block text-slate-400 mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full bg-black/30 border border-slate-700 rounded-xl px-4 py-2 text-slate-300 focus:outline-none focus:border-cyan-500"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-slate-400 mb-2">Price Range</label>
                  <select
                    value={selectedPriceRange}
                    onChange={(e) => setSelectedPriceRange(e.target.value)}
                    className="w-full bg-black/30 border border-slate-700 rounded-xl px-4 py-2 text-slate-300 focus:outline-none focus:border-cyan-500"
                  >
                    {priceRanges.map(range => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>
              </motion.div>
            )}

            {/* Results Count */}
            <div className="text-slate-400 mb-6">
              Showing {sortedServices.length} of {allServices.length} services
            </div>
          </div>
        </motion.div>

        {/* Services by Category */}
        <motion.div 
          className="max-w-7xl mx-auto space-y-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {Object.entries(servicesByCategory).map(([category, services]) => (
            <motion.div key={category} variants={itemVariants}>
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {category}
                </h2>
                <p className="text-slate-400 text-lg">
                  {services.length} service{services.length !== 1 ? 's' : ''} available
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service) => (
                  <motion.div
                    key={service.id}
                    variants={itemVariants}
                    className="group relative"
                  >
                    <div className="bg-black/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 h-full hover:border-cyan-500/50 hover:bg-black/60 transition-all duration-300 hover:scale-105">
                      {/* Service Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="text-4xl">{service.icon}</div>
                        <div className="flex items-center gap-2">
                          {service.popular && (
                            <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs px-2 py-1 rounded-full">
                              Popular
                            </span>
                          )}
                          <div className="flex items-center gap-1 text-yellow-400">
                            <Star className="w-4 h-4 fill-current" />
                            <span className="text-sm text-slate-300">{service.rating}</span>
                          </div>
                        </div>
                      </div>

                      {/* Service Info */}
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-slate-300 text-sm mb-4 line-clamp-3">
                        {service.description}
                      </p>

                      {/* Price */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-2xl font-bold text-cyan-400">
                          {service.price}
                          <span className="text-sm text-slate-400">{service.period}</span>
                        </div>
                        <div className="text-sm text-slate-400">
                          {service.trialDays} days free
                        </div>
                      </div>

                      {/* Market Position */}
                      <div className="mb-6 p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                        <div className="text-sm font-semibold text-blue-400 mb-1">Market Position</div>
                        <p className="text-xs text-slate-300 line-clamp-3">
                          {service.marketPosition}
                        </p>
                      </div>

                      {/* ROI */}
                      <div className="mb-6 p-3 bg-green-500/10 border border-green-500/20 rounded-xl">
                        <div className="text-sm font-semibold text-green-400 mb-1">Proven ROI</div>
                        <p className="text-xs text-slate-300">{service.roi}</p>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        <Link
                          href={service.link}
                          className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white text-sm font-semibold py-3 px-4 rounded-xl text-center transition-all duration-300 hover:scale-105"
                        >
                          Learn More
                        </Link>
                        <Link
                          href={`/contact?service=${service.id}`}
                          className="bg-black/50 border border-slate-600 hover:border-cyan-500 text-slate-300 text-sm font-semibold py-3 px-4 rounded-xl transition-all duration-300 hover:bg-black/70"
                        >
                          Contact
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Section */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Contact our team to discuss pricing, implementation, and how our services can transform your business.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center gap-3 text-slate-300">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-slate-300">
                <Mail className="w-5 h-5 text-purple-400" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-slate-300">
                <MapPin className="w-5 h-5 text-pink-400" />
                <span>{contactInfo.address}</span>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white text-lg font-semibold py-4 px-8 rounded-2xl transition-all duration-300 hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}