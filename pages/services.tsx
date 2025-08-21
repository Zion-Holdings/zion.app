import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Grid, 
  List, 
  Star, 
  Zap, 
  Shield, 
  Cpu, 
  Brain, 
  Globe, 
  Eye, 
  Atom, 
  Rocket,
  ArrowRight,
  ExternalLink,
  CheckCircle,
  TrendingUp,
  Clock,
  DollarSign,
  Users,
  Target,
  Award,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import EnhancedFuturisticBackground from '../components/ui/EnhancedFuturisticBackground';
import { expandedMicroSaasServices, serviceCategories, getServicesByCategory } from '../data/expanded-micro-saas-services';

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'popularity' | 'roi'>('popularity');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Filter and sort services
  const filteredServices = expandedMicroSaasServices
    .filter(service => {
      const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
      const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.tagline.toLowerCase().includes(searchQuery.toLowerCase());
      const price = parseFloat(service.price.replace('$', '').replace(',', ''));
      const matchesPrice = price >= priceRange[0] && price <= priceRange[1];
      
      return matchesCategory && matchesSearch && matchesPrice;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price':
          return parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', ''));
        case 'popularity':
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
        case 'roi':
          const aRoi = parseFloat(a.roi.replace('%', '').replace('+', ''));
          const bRoi = parseFloat(b.roi.replace('%', '').replace('+', ''));
          return bRoi - aRoi;
        default:
          return 0;
      }
    });

  const categoryStats = serviceCategories.map(category => {
    const count = category === 'All' 
      ? expandedMicroSaasServices.length 
      : expandedMicroSaasServices.filter(service => service.category === category).length;
    return { category, count };
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <EnhancedFuturisticBackground variant="quantum-field" intensity="medium">
      <div className="min-h-screen">
        <Head>
          <title>100+ Micro SaaS Services | Zion Tech Group - Complete Portfolio</title>
          <meta name="description" content="Explore our complete portfolio of 100+ real micro SaaS services. AI, quantum computing, blockchain, cybersecurity, and emerging technology solutions with proven ROI." />
          <meta name="keywords" content="micro SaaS services, AI solutions, quantum computing, blockchain, cybersecurity, data analytics, IoT platform, emerging technologies" />
          <meta name="author" content="Zion Tech Group" />
          <meta property="og:title" content="100+ Micro SaaS Services | Zion Tech Group" />
          <meta property="og:description" content="Complete portfolio of real micro SaaS services with proven ROI and enterprise-grade solutions." />
          <meta property="og:url" content="https://ziontechgroup.com/services" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://ziontechgroup.com/services" />
        </Head>

        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="container mx-auto px-4 text-center">
            <motion.div 
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 futuristic-glow">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  100+ Micro SaaS Services
                </span>
                <br />
                <span className="text-white">Ready to Transform Your Business</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Access enterprise-grade micro SaaS solutions across AI, quantum computing, blockchain, 
                cybersecurity, and emerging technologies. Each service is built for immediate business impact.
              </p>
              
              {/* Service Count Stats */}
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {categoryStats.slice(0, 4).map((stat, index) => (
                  <motion.div key={index} variants={itemVariants} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.count}+</div>
                    <div className="text-gray-400 text-sm">{stat.category === 'All' ? 'Total Services' : stat.category}</div>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <Button
                  href="#services"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  Explore Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  href="/contact"
                  variant="outline"
                  className="border-2 border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
                >
                  Get Started
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Filters and Controls */}
        <section className="py-12" id="services">
          <div className="container mx-auto px-4">
            <motion.div 
              className="bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-end">
                {/* Search */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Search Services</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search by name, description, or technology..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/5 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-colors"
                    />
                  </div>
                </div>

                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-colors"
                  >
                    {serviceCategories.map((category) => (
                      <option key={category} value={category}>
                        {category} ({category === 'All' ? expandedMicroSaasServices.length : expandedMicroSaasServices.filter(service => service.category === category).length})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sort By */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Sort By</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="w-full px-4 py-3 bg-white/5 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-colors"
                  >
                    <option value="popularity">Popularity</option>
                    <option value="name">Name</option>
                    <option value="price">Price</option>
                    <option value="roi">ROI</option>
                  </select>
                </div>

                {/* View Mode */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-3 rounded-xl transition-all duration-200 ${
                      viewMode === 'grid' 
                        ? 'bg-cyan-500/20 border border-cyan-400/50 text-cyan-400' 
                        : 'bg-white/5 border border-gray-600/50 text-gray-400 hover:bg-white/10'
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-3 rounded-xl transition-all duration-200 ${
                      viewMode === 'list' 
                        ? 'bg-cyan-500/20 border border-cyan-400/50 text-cyan-400' 
                        : 'bg-white/5 border border-gray-600/50 text-gray-400 hover:bg-white/10'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Price Range */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-300 mb-2">Price Range: ${priceRange[0]} - ${priceRange[1]}</label>
                <div className="flex items-center space-x-4">
                  <input
                    type="range"
                    min="0"
                    max="10000"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                    className="flex-1"
                  />
                  <input
                    type="range"
                    min="0"
                    max="10000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="flex-1"
                  />
                </div>
              </div>
            </motion.div>

            {/* Results Count */}
            <motion.div 
              className="text-center mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-gray-300">
                Showing <span className="text-cyan-400 font-semibold">{filteredServices.length}</span> services
                {selectedCategory !== 'All' && ` in ${selectedCategory}`}
                {searchQuery && ` matching "${searchQuery}"`}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid/List */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${viewMode}-${selectedCategory}-${searchQuery}-${sortBy}`}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className={viewMode === 'grid' 
                  ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' 
                  : 'space-y-6'
                }
              >
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    variants={itemVariants}
                    className={viewMode === 'grid' ? '' : 'bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6'}
                  >
                    {viewMode === 'grid' ? (
                      <Card className="h-full bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 group">
                        <div className="p-6">
                          {/* Service Header */}
                          <div className="flex items-start justify-between mb-4">
                            <div className="text-4xl mb-3">{service.icon}</div>
                            {service.popular && (
                              <div className="flex items-center space-x-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                                <Star className="w-3 h-3" />
                                <span>Popular</span>
                              </div>
                            )}
                          </div>

                          {/* Service Info */}
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                            {service.name}
                          </h3>
                          <p className="text-gray-300 text-sm mb-4">{service.tagline}</p>
                          
                          {/* Price */}
                          <div className="flex items-center justify-between mb-4">
                            <div className="text-2xl font-bold text-cyan-400">
                              {service.price}<span className="text-gray-400 text-lg">{service.period}</span>
                            </div>
                            <div className="text-sm text-gray-400">
                              {service.trialDays} day trial
                            </div>
                          </div>

                          {/* Features */}
                          <div className="space-y-2 mb-6">
                            {service.features.slice(0, 3).map((feature, idx) => (
                              <div key={idx} className="flex items-center text-sm text-gray-300">
                                <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                                {feature}
                              </div>
                            ))}
                          </div>

                          {/* Stats */}
                          <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="text-center p-3 bg-white/5 rounded-xl">
                              <div className="text-lg font-bold text-cyan-400">{service.roi}</div>
                              <div className="text-xs text-gray-400">ROI</div>
                            </div>
                            <div className="text-center p-3 bg-white/5 rounded-xl">
                              <div className="text-lg font-bold text-purple-400">{service.setupTime}</div>
                              <div className="text-xs text-gray-400">Setup</div>
                            </div>
                          </div>

                          {/* CTA */}
                          <div className="flex space-x-3">
                            <Button
                                  href={service.link}
                                  className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 group-hover:scale-105"
                                >
                                  Learn More
                                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                                <Button
                                  href="/contact"
                                  variant="outline"
                                  className="px-4 py-3 border border-gray-600/50 text-gray-300 hover:border-cyan-400/50 hover:text-cyan-400 rounded-xl transition-all duration-300"
                                >
                                  Contact
                                </Button>
                              </div>
                        </div>
                      </Card>
                    ) : (
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
                        {/* Service Info */}
                        <div className="lg:col-span-2">
                          <div className="flex items-start space-x-4">
                            <div className="text-4xl">{service.icon}</div>
                            <div className="flex-1">
                              <div className="flex items-center space-x-3 mb-2">
                                <h3 className="text-xl font-bold text-white">{service.name}</h3>
                                {service.popular && (
                                  <div className="flex items-center space-x-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                                    <Star className="w-3 h-3" />
                                    <span>Popular</span>
                                  </div>
                                )}
                              </div>
                              <p className="text-gray-300 mb-3">{service.description}</p>
                              <div className="flex flex-wrap gap-2">
                                {service.technology.slice(0, 3).map((tech, idx) => (
                                  <span key={idx} className="px-2 py-1 bg-white/5 rounded-lg text-xs text-gray-300">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Service Stats & CTA */}
                        <div className="text-center space-y-4">
                          <div className="text-3xl font-bold text-cyan-400">
                            {service.price}<span className="text-gray-400 text-lg">{service.period}</span>
                          </div>
                          <div className="text-sm text-gray-400 mb-4">
                            {service.trialDays} day trial • {service.setupTime} setup
                          </div>
                          <Button
                            href={service.link}
                            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-3 rounded-xl font-semibold transition-all duration-300"
                          >
                            Learn More
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* No Results */}
            {filteredServices.length === 0 && (
              <motion.div 
                className="text-center py-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-gray-300 mb-6">
                  Try adjusting your search criteria or browse all services
                </p>
                <Button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                    setPriceRange([0, 10000]);
                  }}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                >
                  View All Services
                </Button>
              </motion.div>
            )}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div 
              className="max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 futuristic-glow">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Contact our team to discuss your specific needs and get personalized recommendations 
                for the perfect micro SaaS solutions for your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  Contact Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  href="/pricing"
                  variant="outline"
                  className="border-2 border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
                >
                  View Pricing
                </Button>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="p-4">
                  <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                  <div className="text-white font-semibold">Phone</div>
                  <a href={`tel:${contactInfo.mobile}`} className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className="p-4">
                  <Mail className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                  <div className="text-white font-semibold">Email</div>
                  <a href={`mailto:${contactInfo.email}`} className="text-purple-400 hover:text-purple-300 transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="p-4">
                  <MapPin className="w-8 h-8 text-green-400 mx-auto mb-3" />
                  <div className="text-white font-semibold">Address</div>
                  <div className="text-gray-300 text-sm">
                    {contactInfo.address}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </EnhancedFuturisticBackground>
  );
}