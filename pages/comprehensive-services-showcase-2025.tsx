import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Search, Filter, Star, Users, TrendingUp, 
  Brain, Atom, Shield, Rocket, Globe, 
  Cpu, Target, Microscope, Lock, Cloud,
  BarChart3, Settings, Eye, Award, Clock,
  ArrowRight, Phone, Mail, MapPin, Zap,
  DollarSign, CheckCircle, X, ChevronDown
} from 'lucide-react';
import Layout from '../components/layout/Layout';
import { innovativeRealMicroSaasServices2025 } from '../data/2025-innovative-real-micro-saas-services';
import { innovativeAIServicesEnhanced2025 } from '../data/2025-innovative-ai-services-enhanced';
import { innovativeITServicesEnhanced2025 } from '../data/2025-innovative-it-services-enhanced';
import { emergingTechServicesEnhanced2025 } from '../data/2025-emerging-tech-services-enhanced';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const allServices = [
  ...innovativeRealMicroSaasServices2025.map(service => ({ ...service, category: 'Micro SAAS' })),
  ...innovativeAIServicesEnhanced2025.map(service => ({ ...service, category: 'AI & Consciousness' })),
  ...innovativeITServicesEnhanced2025.map(service => ({ ...service, category: 'Enterprise IT' })),
  ...emergingTechServicesEnhanced2025.map(service => ({ ...service, category: 'Quantum & Emerging Tech' }))
];

const categories = [
  { id: 'all', name: 'All Services', icon: Globe, color: 'from-cyan-500 to-blue-600' },
  { id: 'Micro SAAS', name: 'Micro SAAS', icon: Rocket, color: 'from-teal-500 to-emerald-600' },
  { id: 'AI & Consciousness', name: 'AI & Consciousness', icon: Brain, color: 'from-violet-500 to-purple-600' },
  { id: 'Enterprise IT', name: 'Enterprise IT', icon: Shield, color: 'from-blue-500 to-cyan-600' },
  { id: 'Quantum & Emerging Tech', name: 'Quantum & Emerging Tech', icon: Atom, color: 'from-indigo-500 to-blue-600' }
];

const pricingRanges = [
  { id: 'all', name: 'All Prices', min: 0, max: Infinity },
  { id: 'budget', name: 'Budget ($0 - $100)', min: 0, max: 100 },
  { id: 'mid-range', name: 'Mid-Range ($100 - $500)', min: 100, max: 500 },
  { id: 'premium', name: 'Premium ($500 - $1000)', min: 500, max: 1000 },
  { id: 'enterprise', name: 'Enterprise ($1000+)', min: 1000, max: Infinity }
];

// Helper function to extract numeric price from price string
const extractPrice = (priceString: string): number => {
  const match = priceString.match(/\$([\d,]+)/);
  if (match) {
    return parseInt(match[1].replace(/,/g, ''), 10);
  }
  return 0;
};

export default function ComprehensiveServicesShowcase2025() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPricing, setSelectedPricing] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('name');

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const servicePrice = extractPrice(service.price);
    const matchesPricing = selectedPricing === 'all' || 
      (servicePrice >= pricingRanges.find(p => p.id === selectedPricing)?.min! &&
       servicePrice <= pricingRanges.find(p => p.id === selectedPricing)?.max!);
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesPricing && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'price':
        return extractPrice(a.price) - extractPrice(b.price);
      case 'category':
        return a.category.localeCompare(b.category);
      default:
        return 0;
    }
  });

  const getCategoryIcon = (category: string) => {
    const cat = categories.find(c => c.id === category);
    return cat ? cat.icon : Globe;
  };

  const getCategoryColor = (category: string) => {
    const cat = categories.find(c => c.id === category);
    return cat ? cat.color : 'from-gray-500 to-gray-600';
  };

  return (
    <Layout>
      <Head>
        <title>Comprehensive Services Showcase 2025 | Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive portfolio of revolutionary technology services including AI consciousness, quantum computing, enterprise IT, and innovative micro SAAS solutions." />
        <meta name="keywords" content="AI services, quantum computing, enterprise IT, micro SAAS, technology solutions, Zion Tech Group" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Comprehensive Services Showcase 2025 - Zion Tech Group" />
        <meta property="og:description" content="Explore our revolutionary technology services portfolio." />
        <meta property="og:url" content="https://ziontechgroup.com/comprehensive-services-showcase-2025" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/comprehensive-services-showcase-2025" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-black via-slate-900 to-black">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-32 w-28 h-28 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Comprehensive
              </span>
              <br />
              <span className="text-white">Services Showcase</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Discover our revolutionary portfolio of {allServices.length}+ cutting-edge technology services designed to transform your business and propel you into the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">{allServices.length}+</div>
                <div className="text-gray-400">Services Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">4</div>
                <div className="text-gray-400">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">24/7</div>
                <div className="text-gray-400">Support</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Category Filter */}
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Pricing Filter */}
            <div className="relative">
              <select
                value={selectedPricing}
                onChange={(e) => setSelectedPricing(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                {pricingRanges.map((range) => (
                  <option key={range.id} value={range.id}>
                    {range.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            {/* Sort */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                <option value="name">Sort by Name</option>
                <option value="price">Sort by Price</option>
                <option value="category">Sort by Category</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link href={service.link}>
                  <div className="relative p-6 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 group-hover:shadow-2xl group-hover:shadow-cyan-500/20 h-full">
                    {/* Popular Badge */}
                    {service.popular && (
                      <div className="absolute -top-3 -right-3">
                        <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          Popular
                        </span>
                      </div>
                    )}

                    {/* Service Icon */}
                    <div className="text-4xl mb-4">{service.icon}</div>

                    {/* Service Info */}
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">{service.tagline}</p>
                    
                    {/* Price */}
                    <div className="flex items-center mb-4">
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                      <span className="text-gray-400 ml-1">{service.period}</span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-4">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          <span className="text-gray-300 truncate">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Category Badge */}
                    <div className="flex items-center justify-between">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getCategoryColor(service.category)} text-white`}>
                        {service.category}
                      </span>
                      <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {sortedServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No Services Found</h3>
              <p className="text-gray-400 mb-6">Try adjusting your filters or search terms.</p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedPricing('all');
                  setSearchQuery('');
                }}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get started with our revolutionary technology solutions today and experience 
              unprecedented growth and efficiency.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300">
                  Contact Us Today
                </button>
              </Link>
              <Link href="/pricing">
                <button className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300">
                  View Pricing
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}