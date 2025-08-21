import React, { useState } from 'react';
import Head from 'next/head';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Zap as ZapIcon, Code, BookOpen, Activity, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Filter, Grid, List, ChevronDown, ChevronUp, Sparkles, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Brain, Atom, Globe2, Bot, CheckCircle, XCircle } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import UltraFuturisticCard from '../components/ui/UltraFuturisticCard';
import { enhancedRealMicroSaasServices, serviceCategories, getServicesByCategory, getPopularServices, getServicesByPriceRange } from '../data/enhanced-real-micro-saas-services';
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
    { value: '0-50', label: '$0 - $50' },
    { value: '51-100', label: '$51 - $100' },
    { value: '101-150', label: '$101 - $150' },
    { value: '151+', label: '$151+' }
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

  return (
    <UltraFuturisticBackground variant="quantum-holographic-advanced" className="min-h-screen">
      <Head>
        <title>AI-Powered Micro SaaS Services | Zion Tech Group - Revolutionary Technology Solutions</title>
        <meta name="description" content="Discover our comprehensive portfolio of AI-powered micro SaaS services including content generation, customer service automation, sales automation, data analytics, legal tech, and HR solutions." />
        <meta name="keywords" content="AI micro SaaS services, AI content generation, AI customer service, AI sales automation, AI data analytics, AI legal tech, AI HR tech, Zion Tech Group" />
        <meta property="og:title" content="AI-Powered Micro SaaS Services | Zion Tech Group" />
        <meta property="og:description" content="Discover our revolutionary AI-powered micro SaaS services" />
        <meta property="og:url" content="https://ziontechgroup.com/services" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Head>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                AI-Powered Micro SaaS Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Transform your business with our revolutionary AI-powered micro SaaS solutions. From content creation to customer service automation, we provide cutting-edge technology that drives real results.
              </p>
            </motion.div>

            {/* Contact Information */}
            <motion.div 
              className="text-center text-gray-400 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="mb-2">
                <Phone className="inline w-4 h-4 mr-2" />
                {contactInfo.mobile} | 
                <Mail className="inline w-4 h-4 mx-2" />
                {contactInfo.email}
              </p>
              <p className="text-sm">
                <MapPin className="inline w-4 h-4 mr-2" />
                {contactInfo.address}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <UltraFuturisticCard variant="quantum-advanced" className="p-6">
              <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                {/* Search */}
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>

                {/* Category Filter */}
                <div className="flex items-center gap-4">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    {serviceCategories.map((category) => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>

                  {/* Price Range Filter */}
                  <select
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    {priceRanges.map((range) => (
                      <option key={range.value} value={range.value}>{range.label}</option>
                    ))}
                  </select>

                  {/* Sort Options */}
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>

                  {/* View Mode Toggle */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'bg-gray-800/50 text-gray-400'}`}
                    >
                      <Grid className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-cyan-500 text-white' : 'bg-gray-800/50 text-gray-400'}`}
                    >
                      <List className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </UltraFuturisticCard>
          </div>
        </section>

        {/* Popular Services */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-fuchsia-400 to-purple-500 bg-clip-text text-transparent">
                Most Popular Services
              </h2>
              <p className="text-lg text-gray-300">
                Our most sought-after AI-powered solutions that are transforming businesses worldwide
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularServices.slice(0, 6).map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <UltraFuturisticCard
                    variant={service.variant as any}
                    className="h-full cursor-pointer"
                    onClick={() => window.open(service.link, '_blank')}
                  >
                    <div className="text-center">
                      <div className="text-4xl mb-4">{service.icon}</div>
                      {service.popular && (
                        <div className="inline-flex items-center px-2 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-xs mb-3">
                          <Star className="w-3 h-3 mr-1 fill-current" />
                          Popular
                        </div>
                      )}
                      <h3 className="text-xl font-bold text-white mb-2">
                        {service.name}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4">
                        {service.tagline}
                      </p>
                      <div className="text-sm text-gray-400 mb-2">{service.category}</div>
                      <div className="text-lg font-bold text-cyan-400 mb-4">
                        {service.price}{service.period}
                      </div>
                      <div className="flex items-center justify-center space-x-2 mb-4">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                        <span className="text-gray-400 text-sm">({service.rating})</span>
                      </div>
                      <div className="text-xs text-gray-500 mb-4">
                        {service.customers.toLocaleString()} customers • {service.reviews} reviews
                      </div>
                      <div className="inline-flex items-center text-blue-400 text-sm hover:text-blue-300 transition-colors">
                        Learn More <ArrowRight className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  </UltraFuturisticCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* All Services */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                All AI-Powered Services
              </h2>
              <p className="text-lg text-gray-300">
                Complete portfolio of revolutionary micro SaaS solutions
              </p>
            </motion.div>

            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <UltraFuturisticCard
                      variant={service.variant as any}
                      className="h-full cursor-pointer"
                      onClick={() => window.open(service.link, '_blank')}
                    >
                      <div className="text-center">
                        <div className="text-4xl mb-4">{service.icon}</div>
                        {service.popular && (
                          <div className="inline-flex items-center px-2 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-xs mb-3">
                            <Star className="w-3 h-3 mr-1 fill-current" />
                            Popular
                          </div>
                        )}
                        <h3 className="text-xl font-bold text-white mb-2">
                          {service.name}
                        </h3>
                        <p className="text-gray-300 text-sm mb-4">
                          {service.tagline}
                        </p>
                        <div className="text-sm text-gray-400 mb-2">{service.category}</div>
                        <div className="text-lg font-bold text-cyan-400 mb-4">
                          {service.price}{service.period}
                        </div>
                        <div className="text-xs text-gray-500 mb-4 line-clamp-2">
                          {service.description}
                        </div>
                        <div className="flex items-center justify-center space-x-2 mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-current" />
                            ))}
                          </div>
                          <span className="text-gray-400 text-sm">({service.rating})</span>
                        </div>
                        <div className="text-xs text-gray-500 mb-4">
                          {service.customers.toLocaleString()} customers • {service.reviews} reviews
                        </div>
                        <div className="inline-flex items-center text-blue-400 text-sm hover:text-blue-300 transition-colors">
                          Learn More <ArrowRight className="w-4 h-4 ml-1" />
                        </div>
                      </div>
                    </UltraFuturisticCard>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <UltraFuturisticCard
                      variant={service.variant as any}
                      className="cursor-pointer"
                      onClick={() => window.open(service.link, '_blank')}
                    >
                      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                        <div className="text-6xl">{service.icon}</div>
                        <div className="flex-1 text-center md:text-left">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                            <div>
                              <h3 className="text-2xl font-bold text-white mb-2">
                                {service.name}
                              </h3>
                              <p className="text-gray-300 mb-2">{service.tagline}</p>
                              <div className="text-sm text-gray-400">{service.category}</div>
                            </div>
                            <div className="mt-4 md:mt-0">
                              <div className="text-2xl font-bold text-cyan-400 mb-2">
                                {service.price}{service.period}
                              </div>
                              {service.popular && (
                                <div className="inline-flex items-center px-2 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-xs">
                                  <Star className="w-3 h-3 mr-1 fill-current" />
                                  Popular
                                </div>
                              )}
                            </div>
                          </div>
                          <p className="text-gray-400 mb-4">{service.description}</p>
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center space-x-2">
                                <div className="flex text-yellow-400">
                                  {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-current" />
                                  ))}
                                </div>
                                <span className="text-gray-400 text-sm">({service.rating})</span>
                              </div>
                              <div className="text-sm text-gray-500">
                                {service.customers.toLocaleString()} customers • {service.reviews} reviews
                              </div>
                            </div>
                            <div className="inline-flex items-center text-blue-400 text-sm hover:text-blue-300 transition-colors">
                              Learn More <ArrowRight className="w-4 h-4 ml-1" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </UltraFuturisticCard>
                  </motion.div>
                ))}
              </div>
            )}

            {filteredServices.length === 0 && (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-white mb-2">No services found</h3>
                <p className="text-gray-400">Try adjusting your search criteria or filters</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Choose the perfect AI-powered service for your business and start your free trial today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg"
                  onClick={() => window.open('/pricing', '_blank')}
                >
                  View Pricing
                  <DollarSign className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  className="bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700 text-white px-8 py-4 text-lg"
                  onClick={() => window.open('/contact', '_blank')}
                >
                  Contact Sales
                  <MessageSquare className="ml-2 w-5 h-5" />
                </Button>
              </div>
              <div className="mt-8 text-gray-400">
                <p className="mb-2">
                  <Phone className="inline w-4 h-4 mr-2" />
                  {contactInfo.mobile} | 
                  <Mail className="inline w-4 h-4 mx-2" />
                  {contactInfo.email}
                </p>
                <p className="text-sm">
                  <MapPin className="inline w-4 h-4 mr-2" />
                  {contactInfo.address}
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraFuturisticBackground>
  );
}