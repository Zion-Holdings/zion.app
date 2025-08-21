import React, { useState } from 'react';
import Head from 'next/head';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Zap as ZapIcon, Code, BookOpen, Activity, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Filter, Grid, List, ChevronDown, ChevronUp, Sparkles, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Brain, Atom, Globe2, Bot, CheckCircle, XCircle } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import EnhancedFuturisticBackground from '../components/ui/EnhancedFuturisticBackground';
import EnhancedFuturisticCard from '../components/ui/EnhancedFuturisticCard';
import { enhancedMicroSaasServices, serviceCategories, getServicesByCategory, getPopularServices, getServicesByPriceRange } from '../data/enhanced-micro-saas-services';
import { motion } from 'framer-motion';

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [showFilters, setShowFilters] = useState(false);

  const priceRanges = [
    { value: 'All', label: 'All Prices' },
    { value: '0-300', label: '$0 - $300' },
    { value: '301-600', label: '$301 - $600' },
    { value: '601-1000', label: '$601 - $1000' },
    { value: '1001+', label: '$1001+' }
  ];

  const sortOptions = [
    { value: 'name', label: 'Name A-Z' },
    { value: 'price', label: 'Price Low-High' },
    { value: 'popularity', label: 'Most Popular' },
    { value: 'category', label: 'Category' }
  ];

  // Filter and sort services
  let filteredServices = enhancedMicroSaasServices;

  // Category filter
  if (selectedCategory !== 'All') {
    filteredServices = getServicesByCategory(selectedCategory);
  }

  // Price range filter
  if (priceRange !== 'All') {
    const [min, max] = priceRange.split('-').map(p => p === '+' ? Infinity : parseInt(p));
    filteredServices = getServicesByPriceRange(min, max);
  }

  // Search filter
  if (searchQuery) {
    filteredServices = filteredServices.filter(service =>
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // Sort services
  filteredServices.sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''));
      case 'popularity':
        return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
      case 'category':
        return a.category.localeCompare(b.category);
      default:
        return a.name.localeCompare(b.name);
    }
  });

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const popularServices = getPopularServices();

  return (
    <EnhancedFuturisticBackground>
      <Head>
        <title>Micro SaaS Services - Zion Tech Group | Revolutionary AI & Quantum Solutions</title>
        <meta name="description" content="Explore 20+ revolutionary micro SaaS services powered by quantum computing and AI. From cybersecurity to healthcare, autonomous vehicles to blockchain. Starting from $199/month with 30-day free trials." />
        <meta name="keywords" content="micro SaaS services, AI solutions, quantum computing, cybersecurity, healthcare AI, autonomous vehicles, blockchain, fintech, legal tech, space technology, Zion Tech Group" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Micro SaaS Services - Zion Tech Group | Revolutionary AI & Quantum Solutions" />
        <meta property="og:description" content="Explore 20+ revolutionary micro SaaS services powered by quantum computing and AI. From $199/month with 30-day free trials." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/services" />
        <meta property="og:image" content="https://ziontechgroup.com/services-og-image.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Micro SaaS Services - Zion Tech Group" />
        <meta name="twitter:description" content="20+ revolutionary micro SaaS services powered by quantum computing and AI. From $199/month with 30-day free trials." />
        <meta name="twitter:image" content="https://ziontechgroup.com/services-twitter-image.jpg" />
      </Head>

      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Revolutionary
              </span>
              <br />
              <span className="text-white">Micro SaaS Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Discover 20+ cutting-edge micro SaaS solutions powered by quantum computing and AI. 
              Transform your business with enterprise-grade technology starting from $199/month.
            </p>

            {/* Contact Information Banner */}
            <motion.div
              className="bg-black/30 backdrop-blur-lg border border-white/20 rounded-2xl p-6 mb-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center space-y-2">
                  <Phone className="w-6 h-6 text-cyan-400" />
                  <div>
                    <div className="text-sm text-gray-400">Phone</div>
                    <div className="text-white font-semibold">{contactInfo.mobile}</div>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <Mail className="w-6 h-6 text-fuchsia-400" />
                  <div>
                    <div className="text-sm text-gray-400">Email</div>
                    <div className="text-white font-semibold">{contactInfo.email}</div>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <MapPin className="w-6 h-6 text-green-400" />
                  <div>
                    <div className="text-sm text-gray-400">Address</div>
                    <div className="text-white font-semibold text-sm">{contactInfo.address}</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center p-4 bg-black/20 backdrop-blur-lg border border-white/10 rounded-xl">
                <div className="text-2xl font-bold text-cyan-400 mb-1">{enhancedMicroSaasServices.length}+</div>
                <div className="text-gray-400 text-sm">Services</div>
              </div>
              <div className="text-center p-4 bg-black/20 backdrop-blur-lg border border-white/10 rounded-xl">
                <div className="text-2xl font-bold text-fuchsia-400 mb-1">30</div>
                <div className="text-gray-400 text-sm">Day Trials</div>
              </div>
              <div className="text-center p-4 bg-black/20 backdrop-blur-lg border border-white/10 rounded-xl">
                <div className="text-2xl font-bold text-green-400 mb-1">99.9%</div>
                <div className="text-gray-400 text-sm">Uptime</div>
              </div>
              <div className="text-center p-4 bg-black/20 backdrop-blur-lg border border-white/10 rounded-xl">
                <div className="text-2xl font-bold text-yellow-400 mb-1">2500%+</div>
                <div className="text-gray-400 text-sm">Avg ROI</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Filters and Search */}
        <div className="max-w-7xl mx-auto mb-12">
          <motion.div
            className="bg-black/20 backdrop-blur-lg border border-white/10 rounded-2xl p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-black/30 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-4">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-black/30 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                >
                  {serviceCategories.map((category) => (
                    <option key={category} value={category} className="bg-black text-white">
                      {category}
                    </option>
                  ))}
                </select>

                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="px-4 py-3 bg-black/30 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                >
                  {priceRanges.map((range) => (
                    <option key={range.value} value={range.value} className="bg-black text-white">
                      {range.value}
                    </option>
                  ))}
                </select>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 bg-black/30 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value} className="bg-black text-white">
                      {option.value}
                    </option>
                  ))}
                </select>

                {/* View Mode Toggle */}
                <div className="flex border border-white/20 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`px-4 py-3 transition-colors ${
                      viewMode === 'grid' 
                        ? 'bg-cyan-500 text-white' 
                        : 'bg-black/30 text-gray-400 hover:text-white'
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`px-4 py-3 transition-colors ${
                      viewMode === 'list' 
                        ? 'bg-cyan-500 text-white' 
                        : 'bg-black/30 text-gray-400 hover:text-white'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto">
          {filteredServices.length === 0 ? (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-gray-400 mb-6">Try adjusting your search criteria or filters</p>
              <Button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                  setPriceRange('All');
                }}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg"
              >
                Clear Filters
              </Button>
            </motion.div>
          ) : (
            <div className={`grid gap-8 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <EnhancedFuturisticCard
                    title={service.name}
                    description={service.description}
                    icon={service.icon}
                    features={service.features}
                    price={service.price}
                    period={service.period}
                    link={service.link}
                    variant={service.variant}
                    color={service.color}
                    textColor={service.textColor}
                    gradient={service.color}
                    popular={service.popular}
                    contactInfo={service.contactInfo}
                  />
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto mt-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to learn more about our revolutionary micro SaaS services 
              and start your 30-day free trial.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
                <Mail className="w-5 h-5 ml-2" />
              </Button>
              <Button
                href="/pricing"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm transition-all duration-300"
              >
                View Pricing
                <DollarSign className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </EnhancedFuturisticBackground>
  );
}