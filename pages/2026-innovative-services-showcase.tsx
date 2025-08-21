import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Search, Filter, Star, CheckCircle, ArrowRight, 
  Brain, Atom, Shield, Rocket, Target, Microscope,
  Phone, Mail, MapPin, TrendingUp, Users, Award,
  Zap, Globe, Cpu, Database, Lock, Cloud,
  Sparkles, Layers, Grid, Palette, Eye, Code,
  BarChart3, Settings, Wrench, ShieldCheck
} from 'lucide-react';

// Import all the 2026 innovative services
import { innovativeMicroSaasServices2026 } from '../data/2026-innovative-micro-saas-services';
import { innovativeAIServices2026 } from '../data/2026-innovative-ai-services';
import { innovativeITServices2026 } from '../data/2026-innovative-it-services';
import { emergingTechServices2026 } from '../data/2026-emerging-tech-services';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    id: 'ai-consciousness-2026',
    title: '🧠 AI & Consciousness 2026',
    description: 'Revolutionary AI consciousness and emotional intelligence platforms',
    icon: Brain,
    color: 'from-violet-500 to-purple-500',
    services: [...innovativeAIServices2026],
    gradient: 'from-violet-500/20 to-indigo-500/20',
    badge: 'New 2026'
  },
  {
    id: 'quantum-emerging-2026',
    title: '⚛️ Quantum & Emerging Tech 2026',
    description: 'Quantum computing, DNA computing, and breakthrough technologies',
    icon: Atom,
    color: 'from-indigo-500 to-blue-500',
    services: [...emergingTechServices2026],
    gradient: 'from-indigo-500/20 to-cyan-500/20',
    badge: 'Hot 2026'
  },
  {
    id: 'enterprise-it-2026',
    title: '🏙️ Enterprise IT 2026',
    description: 'Autonomous operations and zero-trust security',
    icon: Shield,
    color: 'from-blue-500 to-cyan-500',
    services: [...innovativeITServices2026],
    gradient: 'from-blue-500/20 to-teal-500/20',
    badge: 'Enterprise 2026'
  },
  {
    id: 'micro-saas-2026',
    title: '🎯 Micro SAAS 2026',
    description: 'Innovative solutions for every business need',
    icon: Target,
    color: 'from-green-500 to-yellow-500',
    services: [...innovativeMicroSaasServices2026],
    gradient: 'from-green-500/20 to-orange-500/20',
    badge: 'Popular 2026'
  }
];

const filterOptions = [
  { id: 'all', label: 'All Services', count: serviceCategories.reduce((acc, cat) => acc + cat.services.length, 0) },
  { id: 'ai', label: 'AI & Consciousness', count: innovativeAIServices2026.length },
  { id: 'quantum', label: 'Quantum & Emerging', count: emergingTechServices2026.length },
  { id: 'enterprise', label: 'Enterprise IT', count: innovativeITServices2026.length },
  { id: 'saas', label: 'Micro SAAS', count: innovativeMicroSaasServices2026.length }
];

export default function InnovativeServicesShowcase2026() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');

  const priceRanges = [
    { id: 'all', label: 'All Prices' },
    { id: 'low', label: 'Under $100/month' },
    { id: 'medium', label: '$100 - $500/month' },
    { id: 'high', label: '$500+/month' }
  ];

  const getFilteredServices = () => {
    let filtered = serviceCategories.flatMap(cat => cat.services);

    // Filter by category
    if (selectedCategory !== 'all') {
      const categoryMap = {
        'ai': 'AI Consciousness',
        'quantum': 'Quantum',
        'enterprise': 'Enterprise',
        'saas': 'Micro SAAS'
      };
      filtered = filtered.filter(service => 
        service.category.includes(categoryMap[selectedCategory as keyof typeof categoryMap])
      );
    }

    // Filter by price range
    if (selectedPriceRange !== 'all') {
      filtered = filtered.filter(service => {
        const price = service.pricing.starter.price;
        switch (selectedPriceRange) {
          case 'low': return price < 100;
          case 'medium': return price >= 100 && price <= 500;
          case 'high': return price > 500;
          default: return true;
        }
      });
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    return filtered;
  };

  const filteredServices = getFilteredServices();

  return (
    <>
      <Head>
        <title>2026 Innovative Services Showcase | Zion Tech Group</title>
        <meta name="description" content="Explore our revolutionary 2026 innovative services including AI consciousness, quantum computing, emerging technologies, and micro SAAS solutions." />
        <meta name="keywords" content="2026 innovative services, AI consciousness, quantum computing, emerging technologies, micro SAAS, Zion Tech Group" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="2026 Innovative Services Showcase - Zion Tech Group" />
        <meta property="og:description" content="Explore our revolutionary 2026 innovative services including AI consciousness, quantum computing, and emerging technologies." />
        <meta property="og:url" content="https://ziontechgroup.com/2026-innovative-services-showcase" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/2026-innovative-services-showcase" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black"></div>
        
        {/* Background Elements */}
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
            className="mb-8"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-300 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              2026 Innovative Services
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Revolutionary
              </span>
              <br />
              <span className="text-white">Technology Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our cutting-edge 2026 innovative services that are transforming industries and pushing the boundaries of what's possible with AI consciousness, quantum computing, and emerging technologies.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {[
              { number: '40+', label: 'Innovative Services', icon: Star, color: 'text-cyan-400' },
              { number: '2026', label: 'Latest Technology', icon: TrendingUp, color: 'text-purple-400' },
              { number: '99.9%', label: 'Success Rate', icon: Shield, color: 'text-green-400' },
              { number: '24/7', label: 'Expert Support', icon: Zap, color: 'text-pink-400' }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-gradient-to-r from-slate-900/50 to-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-black/50 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-6 shadow-2xl shadow-cyan-500/20">
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search innovative services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-black/50 border border-cyan-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                />
              </div>
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">Service Category</label>
                <div className="flex flex-wrap gap-2">
                  {filterOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setSelectedCategory(option.id)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        selectedCategory === option.id
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25'
                          : 'bg-black/50 border border-cyan-500/30 text-gray-300 hover:border-cyan-500/50 hover:text-cyan-300'
                      }`}
                    >
                      {option.label} ({option.count})
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">Price Range</label>
                <div className="flex flex-wrap gap-2">
                  {priceRanges.map((range) => (
                    <button
                      key={range.id}
                      onClick={() => setSelectedPriceRange(range.id)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        selectedPriceRange === range.id
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25'
                          : 'bg-black/50 border border-cyan-500/30 text-gray-300 hover:border-cyan-500/50 hover:text-cyan-300'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results Count */}
            <div className="mt-6 text-center">
              <p className="text-gray-400">
                Showing <span className="text-cyan-400 font-semibold">{filteredServices.length}</span> innovative services
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative bg-black/50 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-6 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 overflow-hidden"
                >
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Service Header */}
                  <div className="relative z-10 mb-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                          {service.name}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Category Badge */}
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-300 text-xs font-medium">
                      {service.category}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="relative z-10 mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-400 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    {service.features.length > 3 && (
                      <p className="text-cyan-400 text-sm mt-2">+{service.features.length - 3} more features</p>
                    )}
                  </div>

                  {/* Pricing */}
                  <div className="relative z-10 mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">Starting From</h4>
                    <div className="flex items-baseline space-x-2">
                      <span className="text-3xl font-bold text-white">${service.pricing.starter.price}</span>
                      <span className="text-gray-400">/{service.pricing.starter.period}</span>
                    </div>
                  </div>

                  {/* Market Info */}
                  <div className="relative z-10 mb-6">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-400">Market Size:</span>
                        <div className="text-cyan-400 font-semibold">{service.marketSize}</div>
                      </div>
                      <div>
                        <span className="text-gray-400">Target:</span>
                        <div className="text-purple-400 font-semibold">{service.targetAudience.split(',')[0]}</div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="relative z-10">
                    <Link
                      href={service.website}
                      className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 group-hover:shadow-xl group-hover:shadow-cyan-500/30"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>

                  {/* Contact Info */}
                  <div className="relative z-10 mt-4 text-center">
                    <p className="text-gray-400 text-xs mb-2">Contact us for custom solutions</p>
                    <div className="flex items-center justify-center space-x-4 text-xs">
                      <a href={`tel:${contactInfo.mobile}`} className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                        {contactInfo.mobile}
                      </a>
                      <a href={`mailto:${contactInfo.email}`} className="text-purple-400 hover:text-purple-300 transition-colors duration-300">
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
              <p className="text-gray-400 mb-6">
                Try adjusting your search criteria or filters to find the innovative services you're looking for.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedPriceRange('all');
                }}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900/50 to-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our 2026 innovative services are designed to give you the competitive edge. 
              Contact us today to discuss how we can help you leverage the latest technologies.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30"
              >
                Get Started Today
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 bg-transparent border-2 border-cyan-500/50 text-cyan-300 rounded-xl font-semibold hover:bg-cyan-500/10 hover:border-cyan-500 transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}