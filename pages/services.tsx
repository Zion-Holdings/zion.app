import React, { useEffect, useMemo, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Check, Star, TrendingUp, Clock, DollarSign, ShieldCheck, Search, Filter, Grid3X3, List, Phone, Mail, MapPin, ArrowRight, ExternalLink, Brain, Rocket, Globe, Cpu, Lock, Eye, Zap } from 'lucide-react';
import Button from '../components/ui/Button';
import UltraFuturisticMatrixBackground from '../components/ui/UltraFuturisticMatrixBackground';
import UltraFuturisticServiceCard from '../components/ui/UltraFuturisticServiceCard';
import Card from '../components/ui/Card';
import { motion } from 'framer-motion';
import { enhancedRealMicroSaasServices, serviceCategories } from '../data/enhanced-real-micro-saas-services';
import { extraServices } from '../data/extra-services';
import { additionalEnhancedServices } from '../data/additional-real-services';
import { innovativeNewServices, innovativeServiceCategories } from '../data/innovative-new-services';

export default function ServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating' | 'roi' | 'category'>('name');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [showInnovative, setShowInnovative] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const categoryFromQuery = (router.query.category as string) || (router.query.cat as string);
    if (categoryFromQuery) {
      try {
        setSelectedCategory(decodeURIComponent(categoryFromQuery));
      } catch {
        setSelectedCategory(categoryFromQuery);
      }
    }
  }, [router.query.category, router.query.cat]);

  const allServices = useMemo(() => {
    const baseServices = enhancedRealMicroSaasServices.concat(extraServices, additionalEnhancedServices);
    if (showInnovative) {
      // Convert innovative services to match the base service type structure
      const convertedInnovativeServices = innovativeNewServices.map(service => ({
        ...service,
        variant: service.variant as any // Type assertion to handle variant differences
      }));
      return baseServices.concat(convertedInnovativeServices);
    }
    return baseServices;
  }, [showInnovative]);

  const allCategories = useMemo(() => {
    const baseCategories = serviceCategories || [];
    if (showInnovative) {
      return [...baseCategories, ...innovativeServiceCategories];
    }
    return baseCategories;
  }, [showInnovative]);

  // Ensure allCategories is an array of strings
  const categoryOptions = useMemo(() => {
    return allCategories.map(cat => typeof cat === 'string' ? cat : cat.name || 'Unknown');
  }, [allCategories]);

  const filteredServices = useMemo(() => {
    let filtered = allServices.slice();

    if (selectedCategory) {
      filtered = filtered.filter(s => s.category === selectedCategory);
    }
    if (searchTerm) {
      const q = searchTerm.toLowerCase();
      filtered = filtered.filter(s =>
        s.name.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.tagline.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q) ||
        s.technology?.some(t => t.toLowerCase().includes(q)) ||
        s.useCases?.some(u => u.toLowerCase().includes(q))
      );
    }

    // Filter by price range
    filtered = filtered.filter(s => {
      const price = parseFloat(s.price.replace(/[$,]/g, ''));
      return price >= priceRange[0] && price <= priceRange[1];
    });

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return parseFloat(a.price.replace(/[$,]/g, '')) - parseFloat(b.price.replace(/[$,]/g, ''));
        case 'rating':
          return b.rating - a.rating;
        case 'roi': {
          const ra = parseFloat((a.roi.match(/(\d+)/)?.[1] || '0'));
          const rb = parseFloat((b.roi.match(/(\d+)/)?.[1] || '0'));
          return rb - ra;
        }
        case 'category':
          return a.category.localeCompare(b.category);
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy, allServices, priceRange]);

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const heroStats = [
    { value: '250+', label: 'Revolutionary Services', icon: <ShieldCheck className="w-6 h-6 text-cyan-400" /> },
    { value: '99.99%', label: 'Uptime Guarantee', icon: <ShieldCheck className="w-6 h-6 text-fuchsia-400" /> },
    { value: '30+', label: 'Day Free Trials', icon: <Clock className="w-6 h-6 text-blue-400" /> },
    { value: '1000%+', label: 'Average ROI', icon: <TrendingUp className="w-6 h-6 text-green-400" /> }
  ];

  const categoryIcons = {
    'AI & Machine Learning': <Brain className="w-5 h-5" />,
    'Quantum Computing': <Zap className="w-5 h-5" />,
    'IoT & Smart Cities': <Cpu className="w-5 h-5" />,
    'Robotics & Automation': <Rocket className="w-5 h-5" />,
    'Biotechnology & Healthcare': <Eye className="w-5 h-5" />,
    'Cybersecurity': <Lock className="w-5 h-5" />,
    'Analytics & Business Intelligence': <TrendingUp className="w-5 h-5" />,
    'Cloud & Infrastructure': <Globe className="w-5 h-5" />,
    'Quantum AI & BCI': <Brain className="w-5 h-5" />,
    'Autonomous Systems': <Rocket className="w-5 h-5" />,
    'Space Technology': <Rocket className="w-5 h-5" />,
    'Quantum Finance': <DollarSign className="w-5 h-5" />,
    'Metaverse & VR': <Globe className="w-5 h-5" />,
    'Quantum IoT': <Cpu className="w-5 h-5" />,
    'Autonomous Vehicles': <Rocket className="w-5 h-5" />,
    'Smart Energy': <Zap className="w-5 h-5" />
  };

  return (
    <UltraFuturisticMatrixBackground>
      <Head>
        <title>Services - Zion Tech Group | 250+ Micro SaaS, IT and AI Solutions</title>
        <meta name="description" content="Explore 250+ revolutionary micro SaaS, IT services and AI solutions delivering 1000%+ ROI. Quantum AI, autonomous systems, space technology, and more. Free trials available." />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Head>

      {/* Hero */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">All Services</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover our complete portfolio of revolutionary micro SaaS, IT services, and AI solutions. 
              Each service is designed to deliver exceptional value and measurable ROI.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          >
            {heroStats.map((stat, index) => (
              <div key={stat.label} className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-4">
                <div className="flex justify-center mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400 text-center">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-r from-gray-900/50 to-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 max-w-4xl mx-auto mb-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-5 h-5 text-fuchsia-400" />
                <span className="text-gray-300">{contactInfo.email}</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="w-5 h-5 text-green-400" />
                <span className="text-gray-300 text-center">{contactInfo.address}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-r from-gray-900/50 to-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6"
          >
            {/* Search and View Controls */}
            <div className="flex flex-col lg:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services, features, or use cases..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>
              
              <div className="flex gap-2">
                <Button
                  onClick={() => setViewMode('grid')}
                  variant={viewMode === 'grid' ? 'quantum' : 'outline'}
                  size="sm"
                  className="px-4 py-2"
                >
                  <Grid3X3 className="w-4 h-4 mr-2" />
                  Grid
                </Button>
                <Button
                  onClick={() => setViewMode('list')}
                  variant={viewMode === 'list' ? 'quantum' : 'outline'}
                  size="sm"
                  className="px-4 py-2"
                >
                  <List className="w-4 h-4 mr-2" />
                  List
                </Button>
              </div>
            </div>

            {/* Advanced Filters */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                >
                  <option value="">All Categories</option>
                  {categoryOptions.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Sort By */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="w-full px-3 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                >
                  <option value="name">Name</option>
                  <option value="price">Price</option>
                  <option value="rating">Rating</option>
                  <option value="roi">ROI</option>
                  <option value="category">Category</option>
                </select>
              </div>

              {/* Price Range */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Price Range</label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    placeholder="Min"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                    className="w-full px-3 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 10000])}
                    className="w-full px-3 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              {/* Show Innovative Services Toggle */}
              <div className="flex items-end">
                <label className="flex items-center space-x-2 text-sm font-medium text-gray-300">
                  <input
                    type="checkbox"
                    checked={showInnovative}
                    onChange={(e) => setShowInnovative(e.target.checked)}
                    className="w-4 h-4 text-cyan-500 bg-gray-800 border-gray-600 rounded focus:ring-cyan-500 focus:ring-2"
                  />
                  <span>Show Innovative Services</span>
                </label>
              </div>
            </div>

            {/* Results Count */}
            <div className="mt-4 text-sm text-gray-400">
              Showing {filteredServices.length} of {allServices.length} services
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          {filteredServices.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-gray-400 mb-6">Try adjusting your search criteria or filters</p>
              <Button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('');
                  setPriceRange([0, 10000]);
                }}
                variant="quantum"
                size="lg"
              >
                Clear Filters
              </Button>
            </motion.div>
          ) : (
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' : 'space-y-4'}>
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                >
                  {viewMode === 'grid' ? (
                    <UltraFuturisticServiceCard service={service} />
                  ) : (
                    <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300">
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="text-3xl">{service.icon}</div>
                            <div>
                              <h3 className="text-xl font-bold text-white">{service.name}</h3>
                              <p className="text-sm text-gray-400">{service.category}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                            <div className="text-sm text-gray-400">{service.period}</div>
                          </div>
                        </div>
                        
                        <p className="text-gray-300 mb-4">{service.description}</p>
                        
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-white">{service.rating}</span>
                            <span className="text-gray-400">({service.reviews})</span>
                          </div>
                          <div className="text-sm text-green-400 font-semibold">
                            {service.roi.match(/(\d+)/)?.[1]}% ROI
                          </div>
                        </div>
                        
                        <div className="flex gap-2">
                          <Button 
                            href={service.link} 
                            variant="quantum" 
                            size="sm"
                            className="flex-1"
                          >
                            Learn More
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </Button>
                          <Button 
                            href="/contact" 
                            variant="outline" 
                            size="sm"
                            className="flex-1 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white"
                          >
                            Contact Sales
                          </Button>
                        </div>
                      </div>
                    </Card>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-cyan-900/30 via-blue-900/30 to-purple-900/30 backdrop-blur-xl border border-cyan-500/30 rounded-3xl p-12">
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Choose from our extensive portfolio of revolutionary services. Each solution is designed to 
                deliver immediate value and exponential ROI for your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Button 
                  href="/contact" 
                  variant="quantum" 
                  size="xl"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-xl font-bold rounded-2xl shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
                >
                  Start Free Trial
                  <Rocket className="w-6 h-6 ml-2" />
                </Button>
                <Button 
                  href="/pricing" 
                  variant="outline" 
                  size="xl"
                  className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-4 text-xl font-bold rounded-2xl transition-all duration-300"
                >
                  View Pricing
                  <ArrowRight className="w-6 h-6 ml-2" />
                </Button>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center space-y-2">
                  <Phone className="w-6 h-6 text-cyan-400" />
                  <span className="text-gray-300 font-semibold">{contactInfo.mobile}</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <Mail className="w-6 h-6 text-fuchsia-400" />
                  <span className="text-gray-300 font-semibold">{contactInfo.email}</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <MapPin className="w-6 h-6 text-green-400" />
                  <span className="text-gray-300 font-semibold text-sm">{contactInfo.address}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </UltraFuturisticMatrixBackground>
  );
}