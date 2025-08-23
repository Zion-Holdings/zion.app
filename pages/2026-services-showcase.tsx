import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Star, Users, TrendingUp, DollarSign, Clock, CheckCircle, ArrowRight, Rocket, Brain, Atom, Sparkles, Shield, Zap, Globe, Cpu, Database, Cloud, Smartphone, Palette, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Code, BookOpen, Activity, Play, Mail, Phone, MapPin, Filter, Grid, List, ChevronDown, ChevronUp, FlaskConical, Dna, Car, Leaf, Factory, Truck, Microscope, GraduationCap, ShieldCheck, Globe2, Bot, ChevronRight, Crown, Infinity } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import UltraFuturisticCard from '../components/ui/UltraFuturisticCard';
import { innovative2026MicroSaasServicesV2 } from '../data/innovative-2026-micro-saas-v2';
import { emergingTech2026ServicesV2 } from '../data/emerging-tech-2026-services-v2';
import { enterpriseIT2026ServicesV2 } from '../data/enterprise-it-2026-services-v2';

export default function Services2026ShowcasePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');

  // Map service variants to supported card variants
  const mapServiceVariantToCardVariant = (serviceVariant: string): 'default' | 'holographic' | 'quantum' | 'cyberpunk' | 'neural' | 'quantum-holographic' | 'quantum-advanced' | 'holographic-advanced' | 'neural-quantum' | 'quantum-cyberpunk' | 'holographic-neural' | 'quantum-holographic-advanced' | 'quantum-matrix' | 'neural-cyberpunk' | 'holographic-quantum' | 'quantum-neural-advanced' | 'cyberpunk-holographic' | 'quantum-space' | 'ai-futuristic' | 'quantum-entanglement' | 'holographic-matrix' | 'neural-quantum-cyberpunk' | 'enterprise-futuristic' | 'quantum-futuristic' | 'holographic-futuristic' | 'quantum-iot' | 'quantum-logistics' | 'quantum-financial' | 'quantum-energy' | 'quantum-neural' | 'quantum-cyberpunk' => {
    if (serviceVariant.includes('quantum') && serviceVariant.includes('ai')) return 'quantum-advanced';
    if (serviceVariant.includes('quantum')) return 'quantum';
    if (serviceVariant.includes('ai')) return 'ai-futuristic';
    if (serviceVariant.includes('holographic')) return 'holographic';
    if (serviceVariant.includes('neural')) return 'neural';
    if (serviceVariant.includes('cyberpunk')) return 'cyberpunk';
    if (serviceVariant.includes('enterprise')) return 'enterprise-futuristic';
    if (serviceVariant.includes('cloud')) return 'quantum-advanced';
    if (serviceVariant.includes('security')) return 'cyberpunk';
    if (serviceVariant.includes('data')) return 'neural';
    if (serviceVariant.includes('mobility')) return 'holographic';
    if (serviceVariant.includes('network')) return 'quantum-advanced';
    if (serviceVariant.includes('backup')) return 'quantum-advanced';
    if (serviceVariant.includes('itsm')) return 'enterprise-futuristic';
    if (serviceVariant.includes('monitoring')) return 'neural';
    if (serviceVariant.includes('blockchain')) return 'quantum-advanced';
    if (serviceVariant.includes('metaverse')) return 'holographic';
    if (serviceVariant.includes('iot')) return 'quantum-iot';
    if (serviceVariant.includes('edge')) return 'quantum-advanced';
    if (serviceVariant.includes('ar')) return 'holographic';
    if (serviceVariant.includes('digital-twin')) return 'quantum-advanced';
    if (serviceVariant.includes('5g')) return 'quantum-advanced';
    if (serviceVariant.includes('biometric')) return 'cyberpunk';
    if (serviceVariant.includes('autonomous')) return 'ai-futuristic';
    if (serviceVariant.includes('revolutionary')) return 'quantum-advanced';
    if (serviceVariant.includes('consulting')) return 'enterprise-futuristic';
    if (serviceVariant.includes('api')) return 'quantum-advanced';
    if (serviceVariant.includes('integration')) return 'quantum-advanced';
    if (serviceVariant.includes('analytics')) return 'neural';
    return 'default';
  };

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Combine all 2026 services
  const all2026Services = [
    ...innovative2026MicroSaasServicesV2,
    ...emergingTech2026ServicesV2,
    ...enterpriseIT2026ServicesV2
  ];

  // Enhanced categories for 2026
  const categories = [
    { id: 'all', name: 'All 2026 Services', icon: '🚀', count: all2026Services.length },
    { id: 'ai', name: 'AI & Machine Learning', icon: '🧠', count: all2026Services.filter(s => s.category.includes('AI')).length },
    { id: 'quantum', name: 'Quantum & Emerging Tech', icon: '⚛️', count: all2026Services.filter(s => s.category.includes('Quantum') || s.category.includes('Emerging')).length },
    { id: 'enterprise', name: 'Enterprise IT', icon: '🏢', count: all2026Services.filter(s => s.category.includes('Enterprise') || s.category.includes('IT')).length },
    { id: 'micro-saas', name: 'Micro SaaS', icon: '💻', count: all2026Services.filter(s => s.category.includes('SaaS')).length }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'low', name: 'Under $1K/month', range: 'Under $1K' },
    { id: 'medium', name: '$1K - $5K/month', range: '$1K - $5K' },
    { id: 'high', name: '$5K - $20K/month', range: '$5K - $20K' },
    { id: 'premium', name: '$20K+/month', range: '$20K+' }
  ];

  const sortOptions = [
    { id: 'name', name: 'Name A-Z' },
    { id: 'price-low', name: 'Price Low to High' },
    { id: 'price-high', name: 'Price High to Low' },
    { id: 'popularity', name: 'Most Popular' },
    { id: 'newest', name: 'Newest First' }
  ];

  // Filter and sort services
  const filteredServices = useMemo(() => {
    let filtered = all2026Services;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => {
        if (selectedCategory === 'ai') return service.category.includes('AI');
        if (selectedCategory === 'quantum') return service.category.includes('Quantum') || service.category.includes('Emerging');
        if (selectedCategory === 'enterprise') return service.category.includes('Enterprise') || service.category.includes('IT');
        if (selectedCategory === 'micro-saas') return service.category.includes('SaaS');
        return true;
      });
    }

    // Price range filter
    if (selectedPriceRange !== 'all') {
      filtered = filtered.filter(service => {
        const price = parseInt(service.price.replace('$', '').replace(',', ''));
        if (selectedPriceRange === 'low') return price < 1000;
        if (selectedPriceRange === 'medium') return price >= 1000 && price < 5000;
        if (selectedPriceRange === 'high') return price >= 5000 && price < 20000;
        if (selectedPriceRange === 'premium') return price >= 20000;
        return true;
      });
    }

    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return parseInt(a.price.replace('$', '').replace(',', '')) - parseInt(b.price.replace('$', '').replace(',', ''));
        case 'price-high':
          return parseInt(b.price.replace('$', '').replace(',', '')) - parseInt(a.price.replace('$', '').replace(',', ''));
        case 'popularity':
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
        case 'newest':
          return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime();
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, selectedPriceRange, sortBy, all2026Services]);

  return (
    <UltraFuturisticBackground 
      intensity="high" 
      variant="quantum"
    >
      <div className="min-h-screen">
        <Head>
          <title>2026 Services Showcase - Zion Tech Group | Revolutionary AI, Quantum & IT Solutions</title>
          <meta name="description" content="Explore our revolutionary 2026 services including AI-powered platforms, quantum computing, emerging technologies, and enterprise IT solutions. Contact: +1 302 464 0950" />
          <meta name="keywords" content="2026 services, AI services, quantum computing, emerging technology, enterprise IT, micro SaaS, neuromorphic computing, DNA computing, photonic computing, holographic displays, swarm robotics, quantum internet, biometric authentication, zero trust, edge computing, 5G networks" />
          <meta name="author" content="Zion Tech Group" />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="2026 Services Showcase - Zion Tech Group" />
          <meta property="og:description" content="Revolutionary AI, quantum computing, and emerging technology services for 2026 and beyond." />
          <meta property="og:url" content="https://ziontechgroup.com/2026-services-showcase" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://ziontechgroup.com/2026-services-showcase" />
        </Head>

        {/* Hero Section */}
        <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-transparent to-cyan-900/30"></div>
          <div className="max-w-7xl mx-auto relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                2026 Services Showcase
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Discover our revolutionary AI, quantum computing, and emerging technology services that will define the future of business and technology.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-3">
                  <span className="text-purple-300 font-semibold">{all2026Services.length}+ Revolutionary Services</span>
                </div>
                <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-full px-6 py-3">
                  <span className="text-cyan-300 font-semibold">AI-Powered Solutions</span>
                </div>
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-500/30 rounded-full px-6 py-3">
                  <span className="text-green-300 font-semibold">Quantum Computing</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
              {/* Search Bar */}
              <div className="relative mb-8">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search 2026 services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-gray-800/50 border border-gray-600/50 rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              {/* Filters */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full bg-gray-800/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name} ({category.count})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Price Range Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Price Range</label>
                  <select
                    value={selectedPriceRange}
                    onChange={(e) => setSelectedPriceRange(e.target.value)}
                    className="w-full bg-gray-800/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    {priceRanges.map((range) => (
                      <option key={range.id} value={range.id}>
                        {range.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sort Options */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Sort By</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full bg-gray-800/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Results Count */}
              <div className="text-center">
                <p className="text-gray-400">
                  Showing <span className="text-purple-400 font-semibold">{filteredServices.length}</span> of{' '}
                  <span className="text-purple-400 font-semibold">{all2026Services.length}</span> 2026 services
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <AnimatePresence mode="wait">
              {filteredServices.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-20"
                >
                  <div className="text-gray-400 text-xl mb-4">No services found matching your criteria</div>
                  <Button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('all');
                      setSelectedPriceRange('all');
                      setSortBy('name');
                    }}
                    variant="secondary"
                  >
                    Clear Filters
                  </Button>
                </motion.div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredServices.map((service, index) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <UltraFuturisticCard
                        variant={mapServiceVariantToCardVariant(service.variant)}
                        className="h-full group hover:scale-105 transition-transform duration-300"
                      >
                        <div className="p-6 h-full flex flex-col">
                          {/* Service Header */}
                          <div className="flex items-start justify-between mb-4">
                            <div className="text-4xl mb-2">{service.icon}</div>
                            {service.popular && (
                              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                                POPULAR
                              </div>
                            )}
                          </div>

                          {/* Service Info */}
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                            {service.name}
                          </h3>
                          <p className="text-gray-300 text-sm mb-4 flex-grow">
                            {service.description}
                          </p>

                          {/* Price */}
                          <div className="mb-4">
                            <div className="text-2xl font-bold text-white">
                              {service.price}
                              <span className="text-gray-400 text-lg font-normal">{service.period}</span>
                            </div>
                            <div className="text-sm text-gray-400">
                              {service.trialDays}-day free trial • Setup in {service.setupTime}
                            </div>
                          </div>

                          {/* Features */}
                          <div className="mb-6">
                            <div className="text-sm text-gray-300 mb-2">Key Features:</div>
                            <div className="space-y-1">
                              {service.features.slice(0, 3).map((feature, idx) => (
                                <div key={idx} className="flex items-center text-xs text-gray-400">
                                  <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                                  {feature}
                                </div>
                              ))}
                              {service.features.length > 3 && (
                                <div className="text-xs text-gray-500 mt-1">
                                  +{service.features.length - 3} more features
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Stats */}
                          <div className="grid grid-cols-2 gap-4 mb-6 text-xs">
                            <div className="text-center">
                              <div className="text-gray-400">Customers</div>
                              <div className="text-white font-semibold">{service.customers.toLocaleString()}</div>
                            </div>
                            <div className="text-center">
                              <div className="text-gray-400">Rating</div>
                              <div className="text-white font-semibold flex items-center justify-center">
                                <Star className="w-3 h-3 text-yellow-400 mr-1" />
                                {service.rating}
                              </div>
                            </div>
                          </div>

                          {/* CTA */}
                          <div className="mt-auto">
                            <Link href={service.link}>
                              <Button
                                variant="primary"
                                className="w-full group-hover:scale-105 transition-transform"
                              >
                                Learn More
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </UltraFuturisticCard>
                    </motion.div>
                  ))}
                </div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our 2026 services are designed to give you a competitive edge in the rapidly evolving technology landscape.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button variant="primary" size="lg">
                    <Phone className="w-5 h-5 mr-2" />
                    Contact Us
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button variant="secondary" size="lg">
                    <DollarSign className="w-5 h-5 mr-2" />
                    View Pricing
                  </Button>
                </Link>
              </div>
              <div className="mt-8 text-gray-400">
                <p>Mobile: {contactInfo.mobile} | Email: {contactInfo.email}</p>
                <p>{contactInfo.address}</p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraFuturisticBackground>
  );
}