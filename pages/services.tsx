import React, { useState } from 'react';
import Head from 'next/head';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Zap as ZapIcon, Code, BookOpen, Activity, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Filter, Grid, List, ChevronDown, ChevronUp, Sparkles, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Brain, Atom, Globe2, Bot, ChevronRight } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import UltraFuturisticCard from '../components/ui/UltraFuturisticCard';
import { enhancedRealMicroSaasServices, serviceCategories, getServicesByCategory, getPopularServices, getServicesByPriceRange } from '../data/enhanced-real-micro-saas-services';
import { motion } from 'framer-motion';
import { ArrowRight as ArrowRightIcon } from 'lucide-react';
import QuantumHolographicBackground from '../components/ui/QuantumHolographicBackground';

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [showFilters, setShowFilters] = useState(false);

  const priceRanges = [
    { value: 'All', label: 'All Prices' },
    { value: '0-50', label: '$0 - $50' },
    { value: '51-100', label: '$51 - $100' },
    { value: '101-200', label: '$101 - $200' },
    { value: '201+', label: '$201+' }
  ];

  const sortOptions = [
    { value: 'name', label: 'Name A-Z' },
    { value: 'price', label: 'Price Low-High' },
    { value: 'popularity', label: 'Most Popular' },
    { value: 'category', label: 'Category' }
  ];

  // Filter and sort services
  let filteredServices = enhancedRealMicroSaasServices;

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

  // Enhanced service categories with better descriptions
  const enhancedCategories = [
    {
      name: 'Quantum Computing & AI',
      description: 'Revolutionary quantum AI solutions with unprecedented computing power',
      icon: <Brain className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Quantum Computing' || s.category === 'AI & Machine Learning').length
    },
    {
      name: 'Autonomous Systems & Robotics',
      description: 'Next-generation autonomous manufacturing and robotics platforms',
      icon: <Factory className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Manufacturing & Industry 4.0' || s.category === 'Robotics & Automation').length
    },
    {
      name: 'Healthcare & Biotechnology',
      description: 'AI-powered biomedical research and drug discovery platforms',
      icon: <FlaskConical className="w-6 h-6" />,
      category: 'Healthcare & Biotechnology'
    },
    {
      name: 'Cybersecurity & Defense',
      description: 'Future-proof cybersecurity and defense technology solutions',
      icon: <Shield className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Cybersecurity' || s.category === 'Defense Technology').length
    },
    {
      name: 'Financial Technology',
      description: 'Quantum-powered financial optimization and trading platforms',
      icon: <DollarSign className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Financial Technology' || s.category === 'Fintech').length
    },
    {
      name: 'Space Technology',
      description: 'AI-powered space exploration and satellite management',
      icon: <Rocket className="w-6 h-6" />,
      count: enhancedRealMicroSaasServices.filter(s => s.category === 'Space Technology' || s.category === 'Aerospace').length
    }
  ];

  // Enhanced contact section
  const enhancedContactSection = (
    <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border border-purple-500/30 rounded-2xl p-8 backdrop-blur-xl mb-12">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-white mb-4">Need Expert Guidance?</h3>
        <p className="text-xl text-purple-200 mb-6">Our team of specialists is ready to help you find the perfect solution</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="text-center p-4 bg-purple-900/30 rounded-xl border border-purple-400/30">
          <Phone className="w-8 h-8 text-purple-400 mx-auto mb-3" />
          <h4 className="text-lg font-semibold text-white mb-2">Call Us</h4>
          <p className="text-purple-200 text-lg font-mono">{contactInfo.mobile}</p>
        </div>
        
        <div className="text-center p-4 bg-purple-900/30 rounded-xl border border-purple-400/30">
          <Mail className="w-8 h-8 text-purple-400 mx-auto mb-3" />
          <h4 className="text-lg font-semibold text-white mb-2">Email Us</h4>
          <p className="text-purple-200 text-lg font-mono">{contactInfo.email}</p>
        </div>
        
        <div className="text-center p-4 bg-purple-900/30 rounded-xl border border-purple-400/30">
          <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-3" />
          <h4 className="text-lg font-semibold text-white mb-2">Visit Us</h4>
          <p className="text-purple-200 text-sm font-mono">{contactInfo.address}</p>
        </div>
      </div>
      
      <div className="text-center">
        <Button 
          href="/contact" 
          variant="primary" 
          size="lg"
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold"
        >
          Get Expert Consultation
        </Button>
        <p className="text-purple-300 mt-4 text-sm">Free consultation • No obligation • Expert guidance</p>
      </div>
    </div>
  );

  // Enhanced service card component
  const EnhancedServiceCard = ({ service, index }: { service: any, index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <UltraFuturisticCard
        variant={service.variant as any}
        className="h-full group-hover:scale-105 transition-transform duration-300"
      >
        <div className="p-6 h-full flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-400/30">
              <span className="text-2xl">{service.icon}</span>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-purple-400">{service.price}</div>
              <div className="text-sm text-gray-400">{service.period}</div>
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
            {service.name}
          </h3>
          
          <p className="text-sm text-gray-400 mb-2 bg-purple-900/20 px-2 py-1 rounded text-center inline-block">
            {service.category}
          </p>
          
          <p className="text-gray-300 mb-4 flex-grow">
            {service.description}
          </p>
          
          <div className="space-y-2 mb-4">
            {service.features.slice(0, 3).map((feature: string, idx: number) => (
              <div key={idx} className="flex items-center text-sm text-gray-400">
                <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                {feature}
              </div>
            ))}
          </div>
          
          <div className="mt-auto space-y-3">
            <div className="flex items-center justify-between text-sm text-gray-400">
              <span>Market: {service.marketSize}</span>
              <span>Growth: {service.growthRate}</span>
            </div>
            
            <div className="flex items-center justify-between text-sm text-gray-400">
              <span>Setup: {service.setupTime}</span>
              <span>Trial: {service.trialDays} days</span>
            </div>
            
            <div className="flex items-center justify-between text-sm text-gray-400">
              <span>Customers: {service.customers.toLocaleString()}</span>
              <span>Rating: {service.rating} ⭐</span>
            </div>
            
            <Button
              href={service.link}
              variant="secondary"
              size="sm"
              className="w-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 hover:from-purple-600/30 hover:to-pink-600/30 border-purple-500/50 text-purple-300 hover:text-white"
            >
              Learn More & Start Trial
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </UltraFuturisticCard>
    </motion.div>
  );

  return (
    <QuantumHolographicBackground variant="holographic">
      <div className="min-h-screen">
        <Head>
          <title>Micro SAAS Services - Zion Tech Group | 500+ Revolutionary Solutions</title>
          <meta name="description" content="Explore 500+ revolutionary micro SAAS services including AI, quantum computing, cybersecurity, and emerging technologies. Start your free trial today." />
          <meta name="keywords" content="micro SAAS services, AI services, quantum computing, cybersecurity, automation, cloud solutions" />
          <meta property="og:title" content="Micro SAAS Services - Zion Tech Group" />
          <meta property="og:description" content="500+ revolutionary micro SAAS services transforming businesses worldwide" />
          <meta property="og:url" content="https://ziontechgroup.com/services" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://ziontechgroup.com/services" />
        </Head>

        {/* Hero Section */}
        <section className="relative py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Revolutionary
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Micro SAAS Services
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Discover 500+ cutting-edge micro SAAS solutions powered by AI, quantum computing, and emerging technologies. 
                Transform your business with solutions that were once science fiction.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-xl font-semibold"
                >
                  Start Free Trial
                  <ArrowRightIcon className="w-6 h-6 ml-2" />
                </Button>
                
                <Button
                  href="/pricing"
                  variant="secondary"
                  size="lg"
                  className="border-purple-500/50 text-purple-300 hover:text-white hover:bg-purple-500/20 px-8 py-4 text-xl font-semibold"
                >
                  View Pricing
                  <DollarSign className="w-6 h-6 ml-2" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            {enhancedContactSection}
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-20 bg-gradient-to-r from-slate-900/50 via-purple-900/30 to-slate-900/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Explore by Category
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Find the perfect solution for your business needs across our comprehensive service categories
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {enhancedCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <UltraFuturisticCard
                    variant="holographic"
                    className="h-full group hover:scale-105 transition-transform duration-300 cursor-pointer"
                    onClick={() => setSelectedCategory(category.name)}
                  >
                    <div className="p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-purple-400/30">
                        {category.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{category.name}</h3>
                      <p className="text-gray-300 mb-4">{category.description}</p>
                      {category.count && (
                        <div className="text-purple-400 font-semibold">
                          {category.count} Services Available
                        </div>
                      )}
                    </div>
                  </UltraFuturisticCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-slate-900/50 via-purple-900/30 to-slate-900/50 rounded-2xl p-8 border border-purple-500/30 mb-12">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Search */}
                <div className="lg:col-span-2">
                  <label className="block text-sm font-medium text-gray-300 mb-2">Search Services</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search for services..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="All">All Categories</option>
                    {serviceCategories.map((category) => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                {/* Price Range Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Price Range</label>
                  <select
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    {priceRanges.map((range) => (
                      <option key={range.value} value={range.value}>{range.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Sort Options */}
              <div className="mt-6 flex flex-wrap gap-4 items-center">
                <span className="text-sm font-medium text-gray-300">Sort by:</span>
                {sortOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setSortBy(option.value)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      sortBy === option.value
                        ? 'bg-purple-600 text-white'
                        : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-white">
                {filteredServices.length} Services Found
              </h2>
              
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'grid' ? 'bg-purple-600 text-white' : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'list' ? 'bg-purple-600 text-white' : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>

            {filteredServices.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-gray-300 mb-6">Try adjusting your search criteria or browse all categories</p>
                <Button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                    setPriceRange('All');
                  }}
                  variant="secondary"
                  size="lg"
                  className="border-purple-500/50 text-purple-300 hover:text-white hover:bg-purple-500/20"
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className={viewMode === 'grid' ? 'grid lg:grid-cols-2 xl:grid-cols-3 gap-8' : 'space-y-6'}>
                {filteredServices.map((service, index) => (
                  <EnhancedServiceCard key={service.id} service={service} index={index} />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Popular Services */}
        <section className="py-20 bg-gradient-to-r from-slate-900/50 via-purple-900/30 to-slate-900/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Most Popular Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                These are the services our customers love the most. Start with what's proven to work.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {popularServices.slice(0, 6).map((service, index) => (
                <EnhancedServiceCard key={service.id} service={service} index={index} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                href="/services"
                variant="primary"
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold"
              >
                View All Popular Services
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already using our revolutionary micro SAAS solutions. 
                Start your free trial today and experience the future of technology.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-xl font-semibold"
                >
                  Start Free Trial
                  <ArrowRightIcon className="w-6 h-6 ml-2" />
                </Button>
                
                <Button
                  href="/pricing"
                  variant="secondary"
                  size="lg"
                  className="border-purple-500/50 text-purple-300 hover:text-white hover:bg-purple-500/20 px-8 py-4 text-xl font-semibold"
                >
                  View Pricing Plans
                  <DollarSign className="w-6 h-6 ml-2" />
                </Button>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-purple-300 text-lg font-semibold mb-2">Need Help Choosing?</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-gray-400">
                  <span className="flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    {contactInfo.mobile}
                  </span>
                  <span className="flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    {contactInfo.email}
                  </span>
                  <span className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {contactInfo.address}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </QuantumHolographicBackground>
  );
}