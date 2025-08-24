import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Star, Users, TrendingUp, DollarSign, Clock, CheckCircle, ArrowRight, Rocket, Brain, Atom, Shield, Globe, Factory, Leaf, Gamepad2, GraduationCap, Heart, CreditCard, Zap, Phone, Mail } from 'lucide-react';
import { allInnovative2026Services, innovative2026ServiceStats, popularInnovative2026Services, topRatedInnovative2026Services, highROIInnovative2026Services } from '../data/comprehensive-2026-services-index';

export default function Innovative2026ServicesShowcase() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Filter services based on search and category
  const filteredServices = useMemo(() => {
    let filtered = allInnovative2026Services;

    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service =>
        service.category.toLowerCase().includes(selectedCategory.toLowerCase())
      );
    }

    if (selectedPriceRange !== 'all') {
      filtered = filtered.filter(service => {
        const price = parseInt(service.price.replace(/[^0-9]/g, ''));
        switch (selectedPriceRange) {
          case 'low':
            return price < 1000;
          case 'medium':
            return price >= 1000 && price < 5000;
          case 'high':
            return price >= 5000;
          default:
            return true;
        }
      });
    }

    // Sort services
    switch (sortBy) {
      case 'price':
        return filtered.sort((a, b) => parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, '')));
      case 'rating':
        return filtered.sort((a, b) => b.rating - a.rating);
      case 'customers':
        return filtered.sort((a, b) => b.customers - a.customers);
      default:
        return filtered.sort((a, b) => a.name.localeCompare(b.name));
    }
  }, [searchTerm, selectedCategory, selectedPriceRange, sortBy]);

  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀', count: allInnovative2026Services.length },
    { id: 'ai', name: 'AI & Machine Learning', icon: '🧠', count: innovative2026ServiceStats.aiServices },
    { id: 'blockchain', name: 'Blockchain & Web3', icon: '⛓️', count: innovative2026ServiceStats.blockchainServices },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: '🛡️', count: innovative2026ServiceStats.cybersecurityServices },
    { id: 'quantum', name: 'Quantum & Space', icon: '⚛️', count: innovative2026ServiceStats.spaceQuantumServices },
    { id: 'healthcare', name: 'Healthcare & Biotech', icon: '🏥', count: innovative2026ServiceStats.healthcareBiotechServices },
    { id: 'fintech', name: 'Financial Technology', icon: '💳', count: innovative2026ServiceStats.fintechServices },
    { id: 'education', name: 'Education & Research', icon: '🎓', count: innovative2026ServiceStats.educationResearchServices },
    { id: 'manufacturing', name: 'Manufacturing & Logistics', icon: '🏭', count: innovative2026ServiceStats.manufacturingLogisticsServices },
    { id: 'energy', name: 'Energy & Sustainability', icon: '⚡', count: innovative2026ServiceStats.energySustainabilityServices },
    { id: 'entertainment', name: 'Entertainment & Media', icon: '🎬', count: innovative2026ServiceStats.entertainmentMediaServices }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'low', name: 'Under $1K/month', range: 'Under $1K' },
    { id: 'medium', name: '$1K - $5K/month', range: '$1K - $5K' },
    { id: 'high', name: '$5K+/month', range: '$5K+' }
  ];

  const sortOptions = [
    { id: 'name', name: 'Name' },
    { id: 'price', name: 'Price' },
    { id: 'rating', name: 'Rating' },
    { id: 'customers', name: 'Customers' }
  ];

  return (
    <>
      <Head>
        <title>Innovative 2026 Services Showcase | Zion Tech Group</title>
        <meta name="description" content="Discover our cutting-edge innovative 2026 services including AI, Quantum Computing, Blockchain, Cybersecurity, and more. Transform your business with next-generation technology solutions." />
        <meta name="keywords" content="innovative services 2026, AI services, quantum computing, blockchain, cybersecurity, fintech, healthcare technology, space technology" />
        <meta property="og:title" content="Innovative 2026 Services Showcase | Zion Tech Group" />
        <meta property="og:description" content="Discover our cutting-edge innovative 2026 services including AI, Quantum Computing, Blockchain, Cybersecurity, and more." />
        <meta property="og:url" content="https://ziontechgroup.com/innovative-2026-services-showcase" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/innovative-2026-services-showcase" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                  Innovative 2026
                </span>
                <br />
                <span className="text-white">Services Showcase</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Discover the future of technology with our cutting-edge innovative services. 
                From AI consciousness simulation to quantum space mining, we're building tomorrow's solutions today.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                  <span className="text-2xl font-bold">{innovative2026ServiceStats.totalServices}+</span>
                  <span className="ml-2 text-gray-300">Innovative Services</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                  <span className="text-2xl font-bold">2026</span>
                  <span className="ml-2 text-gray-300">Future-Ready</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                  <span className="text-2xl font-bold">100%</span>
                  <span className="ml-2 text-gray-300">Real Implementation</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="py-16 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8"
            >
              {categories.slice(1).map((category) => (
                <div key={category.id} className="text-center">
                  <div className="text-3xl mb-2">{category.icon}</div>
                  <div className="text-2xl font-bold text-white">{category.count}</div>
                  <div className="text-sm text-gray-400">{category.name}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Search */}
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search innovative services..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Category Filter */}
                <div className="lg:w-48">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-3 bg-white/20 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name} ({category.count})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Price Filter */}
                <div className="lg:w-48">
                  <select
                    value={selectedPriceRange}
                    onChange={(e) => setSelectedPriceRange(e.target.value)}
                    className="w-full px-4 py-3 bg-white/20 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    {priceRanges.map((range) => (
                      <option key={range.id} value={range.id}>
                        {range.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sort */}
                <div className="lg:w-48">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-4 py-3 bg-white/20 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.id} value={option.id}>
                        Sort by {option.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl">{service.icon}</div>
                      {service.popular && (
                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-3 py-1 rounded-full">
                          Popular
                        </div>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{service.tagline}</p>

                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-purple-400">{service.price}</div>
                      <div className="flex items-center text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="ml-1 text-white">{service.rating}</span>
                      </div>
                    </div>

                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">{service.description}</p>

                    <div className="flex items-center justify-between mb-4">
                      <div className="text-xs text-gray-500">
                        <Users className="w-4 h-4 inline mr-1" />
                        {service.customers.toLocaleString()}+ customers
                      </div>
                      <div className="text-xs text-gray-500">
                        <Clock className="w-4 h-4 inline mr-1" />
                        {service.setupTime}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <span
                          key={idx}
                          className="bg-white/10 text-white text-xs px-2 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={service.link}
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4 rounded-xl text-center font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {filteredServices.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-gray-400">Try adjusting your search criteria or filters.</p>
              </motion.div>
            )}
          </div>
        </div>

        {/* Contact Section */}
        <div className="py-16 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Our innovative 2026 services are designed to give you a competitive edge in the rapidly evolving technology landscape. 
                Contact us today to learn how we can help you stay ahead of the curve.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${contactInfo.mobile}`}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  {contactInfo.mobile}
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="bg-white/10 backdrop-blur-sm text-white py-3 px-6 rounded-xl font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
                >
                  <Mail className="mr-2 w-5 h-5" />
                  {contactInfo.email}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}