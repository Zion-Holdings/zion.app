import React, { useEffect, useMemo, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Check, Star, Zap, Shield, Users, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Target, Building, Rocket, Award, DollarSign, ChartBar, Lock, Cpu as CpuIcon, Database, Cloud, Smartphone, Palette, Search, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Zap as ZapIcon, Code, BookOpen, Activity, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Filter, Grid3X3, List, ChevronDown, ChevronUp, Sparkles, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Brain, Atom, Globe2, Bot, ChevronRight, LinkIcon, Building2 } from 'lucide-react';
import Button from '../components/ui/Button';
import UltraFuturisticMatrixBackground from '../components/ui/UltraFuturisticMatrixBackground';
import UltraFuturisticServiceCard from '../components/ui/UltraFuturisticServiceCard';
import Card from '../components/ui/Card';
import { motion } from 'framer-motion';
import { enhancedRealMicroSaasServices, serviceCategories } from '../data/enhanced-real-micro-saas-services';

export default function ServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [showFilters, setShowFilters] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const categoryFromQuery = (router.query.category as string) || (router.query.cat as string);
    if (categoryFromQuery) {
      try {
        const decoded = decodeURIComponent(categoryFromQuery);
        setSelectedCategory(decoded);
      } catch {
        setSelectedCategory(categoryFromQuery);
      }
    }
  }, [router.query.category, router.query.cat]);

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

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Filtering and sorting handled in memoized computation below
  const filteredServices = useMemo(() => {
    let filtered = enhancedRealMicroSaasServices;

    if (selectedCategory && selectedCategory !== 'All') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (priceRange !== 'All') {
      const [minStr, maxStr] = priceRange.split('-');
      const min = parseInt(minStr || '0', 10) || 0;
      const max = maxStr === '+' ? Number.POSITIVE_INFINITY : parseInt(maxStr || '0', 10) || Number.POSITIVE_INFINITY;
      filtered = filtered.filter(service => {
        const price = parseFloat(service.price.replace('$', '').replace(',', ''));
        return price >= min && price <= max;
      });
    }

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', ''));
        case 'rating':
          return b.rating - a.rating;
        case 'roi':
          return parseFloat(a.roi.replace('%', '').replace(',', '')) - parseFloat(b.roi.replace('%', '').replace(',', ''));
        case 'category':
          return a.category.localeCompare(b.category);
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy, priceRange]);

  const heroStats = [
    { value: '200+', label: 'Revolutionary Services', color: 'text-cyan-400', icon: <CpuIcon className="w-6 h-6" /> },
    { value: '99.99%', label: 'Uptime Guarantee', color: 'text-fuchsia-400', icon: <ShieldCheck className="w-6 h-6" /> },
    { value: '30+', label: 'Day Free Trials', color: 'text-blue-400', icon: <Clock className="w-6 h-6" /> },
    { value: '800%+', label: 'Average ROI', color: 'text-green-400', icon: <TrendingUp className="w-6 h-6" /> },
  ];

  return (
    <UltraFuturisticMatrixBackground>
      <Head>
        <title>Services - Zion Tech Group | 200+ Revolutionary Micro SaaS Solutions</title>
        <meta name="description" content="Explore 200+ revolutionary micro SaaS services including AI, quantum computing, autonomous systems, and cutting-edge technology solutions. Transform your business today." />
        <meta name="keywords" content="micro SaaS, AI services, quantum computing, autonomous systems, space technology, cybersecurity, manufacturing AI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Services - Zion Tech Group | 200+ Revolutionary Micro SaaS Solutions" />
        <meta property="og:description" content="Explore 200+ revolutionary micro SaaS services including AI, quantum computing, autonomous systems, and cutting-edge technology solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/services" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Services - Zion Tech Group | 200+ Revolutionary Micro SaaS Solutions" />
        <meta name="twitter:description" content="Explore 200+ revolutionary micro SaaS services including AI, quantum computing, autonomous systems, and cutting-edge technology solutions." />
        <meta name="twitter:image" content="https://ziontechgroup.com/og-image.jpg" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                200+ Revolutionary
              </span>
              <br />
              <span className="text-white">Micro SaaS Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Transform your business with cutting-edge AI, quantum computing, autonomous systems, 
              and breakthrough technology solutions. Each service delivers immediate value and exponential ROI.
            </p>
          </motion.div>

          {/* Hero Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          >
            {heroStats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-4 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-700/50"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`${stat.color} mb-2 flex justify-center`}>
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-400 leading-tight">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 max-w-2xl mx-auto mb-12"
          >
            <h3 className="text-xl font-semibold text-white mb-4">Ready to Get Started?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="flex flex-col items-center space-y-2">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span className="text-sm text-gray-300">{contactInfo.mobile}</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span className="text-sm text-gray-300">{contactInfo.email}</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span className="text-sm text-gray-300">{contactInfo.address}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search Section */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Search */}
              <div className="flex-1 w-full">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex items-center space-x-3">
                <Filter className="text-gray-400 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  <option value="">All Categories</option>
                  {serviceCategories.map((category) => (
                    <option key={category.name} value={category.name}>{category.name}</option>
                  ))}
                </select>
              </div>

              {/* Sort By */}
              <div className="flex items-center space-x-3">
                <span className="text-gray-400 text-sm">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'name' | 'price' | 'rating' | 'roi')}
                  className="px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  <option value="name">Name</option>
                  <option value="price">Price</option>
                  <option value="rating">Rating</option>
                  <option value="roi">ROI</option>
                </select>
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center space-x-2 bg-gray-800/50 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'grid' 
                      ? 'bg-cyan-500 text-white' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Grid3X3 className="w-5 h-5" />
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
      </section>

      {/* Services Display Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          {/* Results Count */}
          <div className="mb-8">
            <p className="text-gray-300">
              Showing <span className="text-white font-semibold">{filteredServices.length}</span> of{' '}
              <span className="text-white font-semibold">{enhancedRealMicroSaasServices.length}</span> services
            </p>
          </div>

          {/* Services Grid/List */}
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <UltraFuturisticServiceCard service={service} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gray-900/80 border border-gray-700/50 backdrop-blur-xl">
                    <div className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-semibold rounded-full">
                              {service.category}
                            </span>
                            <span className="px-3 py-1 bg-gray-700 text-gray-300 text-xs font-semibold rounded-full">
                              {service.variant}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                          <p className="text-gray-300 mb-3">{service.description}</p>
                          
                          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                            <div className="flex items-center space-x-1">
                              <Star className="w-4 h-4 text-yellow-400" />
                              <span>{service.rating}/5.0</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Users className="w-4 h-4 text-blue-400" />
                              <span>{service.customers}+ users</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <TrendingUp className="w-4 h-4 text-green-400" />
                              <span>ROI</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4 text-purple-400" />
                              <span>{service.trialDays} days trial</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex flex-col items-end space-y-3">
                          <div className="text-right">
                            <div className="text-3xl font-bold text-white">${service.price}</div>
                            <div className="text-gray-400 text-sm">per month</div>
                          </div>
                          
                          <div className="flex space-x-2">
                            <Button
                              href={`/services/${service.id}`}
                              className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-lg font-semibold transition-all duration-300"
                            >
                              <ArrowRight className="w-4 h-4 mr-2" />
                              Details
                            </Button>
                            <Button
                              href="/contact"
                              variant="outline"
                              className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300"
                            >
                              Contact
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}

          {/* No Results */}
          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center py-16"
            >
              <div className="text-gray-400 text-lg mb-4">No services found matching your criteria</div>
              <Button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('');
                }}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Clear Filters
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to
              {' '}<span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Transform</span>
              {' '}Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses already achieving exponential growth with our revolutionary technology solutions. 
              Get started today with a free consultation and discover how we can accelerate your success.
            </p>
            
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center space-y-3">
                  <Phone className="w-8 h-8 text-cyan-400" />
                  <div>
                    <div className="text-sm text-gray-400">Phone</div>
                    <div className="text-white font-semibold">{contactInfo.mobile}</div>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-3">
                  <Mail className="w-8 h-8 text-cyan-400" />
                  <div>
                    <div className="text-sm text-gray-400">Email</div>
                    <div className="text-white font-semibold">{contactInfo.email}</div>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-3">
                  <MapPin className="w-8 h-8 text-cyan-400" />
                  <div>
                    <div className="text-sm text-gray-400">Address</div>
                    <div className="text-white font-semibold text-sm">{contactInfo.address}</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Start Free Consultation
              </Button>
              <Button
                href="/pricing"
                variant="outline"
                className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
              >
                <DollarSign className="w-5 h-5 mr-2" />
                View Pricing
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </UltraFuturisticMatrixBackground>
  );
}