import React, { useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Filter, Star, Users, TrendingUp, 
  DollarSign, Clock, CheckCircle, ArrowRight,
  Brain, Rocket, Dna, Globe, Shield, Wifi, 
  Package, Bot, Car, Building2, Monitor, Cpu, 
  Zap, Atom, Database, Cloud, Lock, Code,
  Phone, Mail, MapPin, ExternalLink, Award,
  Target, Sparkles, Crown, Infinity, Zap as ZapIcon
} from 'lucide-react';
import { revolutionary2025Services } from '../data/revolutionary-2025-services';
import { nextGenInnovations2025 } from '../data/next-gen-innovations-2025';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import Card from '../components/ui/Card';

export default function RevolutionaryServicesShowcase() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');

  const allServices = [
    ...revolutionary2025Services,
    ...nextGenInnovations2025
  ];

  // Enhanced category mapping
  const categories = [
    { id: 'all', name: 'All Revolutionary Services', icon: '🚀', count: allServices.length },
    { id: 'ai', name: 'AI & Consciousness', icon: '🧠', count: allServices.filter(s => s.category.includes('AI')).length },
    { id: 'quantum', name: 'Quantum Computing', icon: '⚛️', count: allServices.filter(s => s.category.includes('Quantum')).length },
    { id: 'emerging', name: 'Emerging Tech', icon: '🌟', count: allServices.filter(s => s.category.includes('Emerging') || s.category.includes('Next-Gen')).length },
    { id: 'business', name: 'Business & Finance', icon: '💼', count: allServices.filter(s => s.category.includes('Business') || s.category.includes('Finance')).length },
    { id: 'industry', name: 'Industry 4.0', icon: '🏭', count: allServices.filter(s => s.category.includes('Manufacturing') || s.category.includes('Industry')).length }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'low', name: 'Under $10K/month', range: 'Under $10K' },
    { id: 'medium', name: '$10K - $25K/month', range: '$10K - $25K' },
    { id: 'high', name: '$25K+/month', range: '$25K+' }
  ];

  const sortOptions = [
    { id: 'name', name: 'Name A-Z' },
    { id: 'price-low', name: 'Price Low to High' },
    { id: 'price-high', name: 'Price High to Low' },
    { id: 'rating', name: 'Rating' },
    { id: 'customers', name: 'Customer Count' }
  ];

  // Filter and sort services
  const filteredServices = React.useMemo(() => {
    const parsePriceToNumber = (price: any): number => {
      if (typeof price === 'number') return price;
      if (typeof price === 'string') {
        const match = price.replace(/[^0-9.]/g, '');
        const parsed = parseFloat(match || '0');
        return isNaN(parsed) ? 0 : parsed;
      }
      return 0;
    };

    let filtered = allServices.filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || 
                             (selectedCategory === 'ai' && service.category.includes('AI')) ||
                             (selectedCategory === 'quantum' && service.category.includes('Quantum')) ||
                             (selectedCategory === 'emerging' && (service.category.includes('Emerging') || service.category.includes('Next-Gen'))) ||
                             (selectedCategory === 'business' && (service.category.includes('Business') || service.category.includes('Finance'))) ||
                             (selectedCategory === 'industry' && (service.category.includes('Manufacturing') || service.category.includes('Industry')));

      const matchesPrice = selectedPriceRange === 'all' ||
                          (selectedPriceRange === 'low' && parsePriceToNumber(service.price) < 10000) ||
                          (selectedPriceRange === 'medium' && parsePriceToNumber(service.price) >= 10000 && parsePriceToNumber(service.price) <= 25000) ||
                          (selectedPriceRange === 'high' && parsePriceToNumber(service.price) > 25000);

      return matchesSearch && matchesCategory && matchesPrice;
    });

    // Sort services
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => parsePriceToNumber(a.price) - parsePriceToNumber(b.price));
        break;
      case 'price-high':
        filtered.sort((a, b) => parsePriceToNumber(b.price) - parsePriceToNumber(a.price));
        break;
      case 'rating':
        filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case 'customers':
        filtered.sort((a, b) => (b.customers || 0) - (a.customers || 0));
        break;
      default:
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    return filtered;
  }, [allServices, searchTerm, selectedCategory, selectedPriceRange, sortBy]);

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <UltraAdvancedFuturisticBackground>
      <Head>
        <title>Revolutionary 2025 Services Showcase | Zion Tech Group - 1000+ Cutting-Edge Solutions</title>
        <meta name="description" content="Discover 1000+ revolutionary AI, quantum computing, and emerging technology services for 2025. Achieve 1000% ROI with our cutting-edge solutions. Contact: +1 302 464 0950" />
        <meta name="keywords" content="revolutionary AI services, quantum computing 2025, emerging technology, Industry 4.0, autonomous systems, bioinformatics, cybersecurity, energy optimization" />
        <meta name="author" content="Zion Tech Group" />
        <meta property="og:title" content="Revolutionary 2025 Services Showcase | Zion Tech Group" />
        <meta property="og:description" content="1000+ cutting-edge services with 1000% ROI guarantee. Contact: +1 302 464 0950" />
        <meta property="og:url" content="https://ziontechgroup.com/revolutionary-services-showcase" />
        <link rel="canonical" href="https://ziontechgroup.com/revolutionary-services-showcase" />
      </Head>

      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
              Revolutionary 2025 Services
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-6">
              1000+ Cutting-Edge AI, Quantum & Emerging Technology Solutions
            </p>
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-4xl mx-auto">
              Experience the future of technology with our revolutionary services that deliver 1000% ROI. 
              From AI consciousness simulation to quantum bioinformatics, we're redefining what's possible.
            </p>
            
            {/* Contact Information */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <div className="flex items-center gap-2 text-gray-300">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Mail className="w-5 h-5 text-purple-400" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-5 h-5 text-pink-400" />
                <span>{contactInfo.address}</span>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 p-6 rounded-2xl border border-cyan-500/30">
                <div className="text-4xl mb-2">🚀</div>
                <h3 className="text-xl font-semibold text-white mb-2">First-to-Market</h3>
                <p className="text-gray-300 text-sm">Pioneering solutions that don't exist elsewhere</p>
              </div>
              <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-6 rounded-2xl border border-purple-500/30">
                <div className="text-4xl mb-2">💰</div>
                <h3 className="text-xl font-semibold text-white mb-2">1000% ROI</h3>
                <p className="text-gray-300 text-sm">Proven returns on investment across all services</p>
              </div>
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 p-6 rounded-2xl border border-green-500/30">
                <div className="text-4xl mb-2">⚡</div>
                <h3 className="text-xl font-semibold text-white mb-2">Quantum Speed</h3>
                <p className="text-gray-300 text-sm">Leveraging quantum computing for unmatched performance</p>
              </div>
            </div>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-6">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search revolutionary services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                  />
                </div>

                {/* Category Filter */}
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>

                {/* Price Range Filter */}
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500"
                >
                  {priceRanges.map((range) => (
                    <option key={range.id} value={range.id}>
                      {range.name}
                    </option>
                  ))}
                </select>

                {/* Sort */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                >
                  {sortOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card
                      className="h-full group hover:scale-105 transition-transform duration-300 bg-gray-800/50 border border-gray-700 hover:border-cyan-500/50"
                    >
                      <div className="p-6">
                        {/* Service Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="text-4xl">{service.icon}</div>
                          {service.popular && (
                            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                              POPULAR
                            </div>
                          )}
                        </div>

                        {/* Service Name and Tagline */}
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-gray-300 text-sm mb-4">
                          {service.tagline}
                        </p>

                        {/* Price */}
                        <div className="flex items-baseline gap-2 mb-4">
                          <span className="text-3xl font-bold text-cyan-400">
                            {service.price}
                          </span>
                          <span className="text-gray-400">{service.period}</span>
                        </div>

                        {/* Description */}
                        <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                          {service.description}
                        </p>

                        {/* Key Features */}
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                          <ul className="space-y-1">
                            {service.features.slice(0, 3).map((feature, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-xs text-gray-400">
                                <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Market Info */}
                        <div className="bg-gray-800/30 rounded-lg p-3 mb-4">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-gray-400">Market Size:</span>
                            <span className="text-green-400 font-semibold">{service.marketSize}</span>
                          </div>
                          <div className="flex items-center justify-between text-xs mt-1">
                            <span className="text-gray-400">Growth Rate:</span>
                            <span className="text-purple-400 font-semibold">{service.growthRate}</span>
                          </div>
                        </div>

                        {/* ROI and Contact */}
                        <div className="space-y-3">
                          <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 p-3 rounded-lg border border-green-500/30">
                            <p className="text-xs text-green-400 font-semibold text-center">
                              {service.roi}
                            </p>
                          </div>
                          
                          <div className="flex gap-2">
                            <a
                              href={service.link}
                              className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold py-2 px-4 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center gap-2"
                            >
                              Learn More
                              <ArrowRight className="w-4 h-4" />
                            </a>
                            <a
                              href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.name}`}
                              className="bg-gradient-to-r from-purple-500 to-pink-600 text-white text-sm font-semibold py-2 px-4 rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-200 flex items-center justify-center"
                            >
                              <Mail className="w-4 h-4" />
                            </a>
                          </div>
                        </div>

                        {/* Contact Information */}
                        <div className="mt-4 pt-4 border-t border-gray-700">
                          <div className="text-xs text-gray-400 space-y-1">
                            <div className="flex items-center gap-2">
                              <Phone className="w-3 h-3 text-cyan-400" />
                              <span>{contactInfo.mobile}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Mail className="w-3 h-3 text-purple-400" />
                              <span>{contactInfo.email}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl border border-cyan-500/30 p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Revolutionize Your Business?
              </h2>
              <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
                Join the future of technology with our revolutionary services. 
                Get started today and achieve 1000% ROI with cutting-edge AI, quantum computing, and emerging technologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${contactInfo.mobile}`}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-3 px-8 rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call {contactInfo.mobile}
                </a>
                <a
                  href={`mailto:${contactInfo.email}?subject=Revolutionary Services Inquiry`}
                  className="bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold py-3 px-8 rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Email Us
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
}