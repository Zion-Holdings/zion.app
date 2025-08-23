import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Search, Star, DollarSign, CheckCircle,
  ArrowRight, Rocket, Phone, Mail, MapPin, Grid, List,
  ChevronDown, Brain, Shield, Cloud, Palette, Heart, Zap
} from 'lucide-react';
import { innovative2037AiServices } from '../data/innovative-2037-ai-services';
import { innovative2037ItServices } from '../data/innovative-2037-it-services';
import { innovative2037MicroSaasServices } from '../data/innovative-2037-micro-saas';

export default function Innovative2037ServicesShowcase() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Combine all services
  const allServices = [
    ...innovative2037AiServices,
    ...innovative2037ItServices,
    ...innovative2037MicroSaasServices
  ];

  // Dynamic category counts
  const aiCount = allServices.filter(service =>
    service.category?.includes('AI') || service.category?.includes('Machine Learning')
  ).length;
  const itCount = allServices.filter(service =>
    service.category?.includes('IT') || service.category?.includes('Technology')
  ).length;
  const microSaasCount = allServices.filter(service =>
    service.category?.includes('Micro SAAS') || service.category?.includes('Business')
  ).length;
  const emergingCount = allServices.filter(service =>
    service.category?.includes('Emerging') || service.category?.includes('Innovation')
  ).length;

  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀', count: allServices.length },
    { id: 'ai', name: 'AI & Machine Learning', icon: '🧠', count: aiCount },
    { id: 'it', name: 'IT & Technology', icon: '⚡', count: itCount },
    { id: 'micro-saas', name: 'Micro SAAS', icon: '💼', count: microSaasCount },
    { id: 'emerging', name: 'Emerging Tech', icon: '✨', count: emergingCount }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'low', name: 'Under $500/month', range: 'Under $500' },
    { id: 'medium', name: '$500 - $2K/month', range: '$500 - $2K' },
    { id: 'high', name: '$2K - $5K/month', range: '$2K - $5K' },
    { id: 'enterprise', name: '$5K+/month', range: '$5K+' }
  ];

  // Filter and sort services
  const filteredServices = useMemo(() => {
    let filtered = allServices.filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = selectedCategory === 'all' ||
        (selectedCategory === 'ai' && service.category.includes('AI')) ||
        (selectedCategory === 'it' && service.category.includes('IT')) ||
        (selectedCategory === 'micro-saas' && service.category.includes('Micro SAAS')) ||
        (selectedCategory === 'emerging' && service.category.includes('Emerging'));

      const matchesPrice = selectedPriceRange === 'all' ||
        (selectedPriceRange === 'low' && service.price !== 'Custom pricing' && parseInt(service.price.replace(/[^0-9]/g, '')) < 500) ||
        (selectedPriceRange === 'medium' && service.price !== 'Custom pricing' && parseInt(service.price.replace(/[^0-9]/g, '')) >= 500 && parseInt(service.price.replace(/[^0-9]/g, '')) <= 2000) ||
        (selectedPriceRange === 'high' && service.price !== 'Custom pricing' && parseInt(service.price.replace(/[^0-9]/g, '')) > 2000 && parseInt(service.price.replace(/[^0-9]/g, '')) <= 5000) ||
        (selectedPriceRange === 'enterprise' && service.price !== 'Custom pricing' && parseInt(service.price.replace(/[^0-9]/g, '')) > 5000);

      return matchesSearch && matchesCategory && matchesPrice;
    });

    // Sort services
    switch (sortBy) {
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'price':
        filtered.sort((a, b) => {
          const priceA = a.price === 'Custom pricing' ? 999999 : parseInt(a.price.replace(/[^0-9]/g, ''));
          const priceB = b.price === 'Custom pricing' ? 999999 : parseInt(b.price.replace(/[^0-9]/g, ''));
          return priceA - priceB;
        });
        break;
      case 'popularity':
        filtered.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime());
        break;
      default:
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    return filtered;
  }, [allServices, searchTerm, selectedCategory, selectedPriceRange, sortBy]);

  const getCategoryIcon = (category: string) => {
    if (category.includes('AI')) return '🧠';
    if (category.includes('IT')) return '⚡';
    if (category.includes('Micro SAAS')) return '💼';
    if (category.includes('Healthcare')) return '🏥';
    if (category.includes('Security')) return '🛡️';
    if (category.includes('Quantum')) return '⚛️';
    return '✨';
  };

  const getCategoryColor = (category: string) => {
    if (category.includes('AI')) return 'from-blue-600 to-cyan-700';
    if (category.includes('IT')) return 'from-purple-600 to-indigo-700';
    if (category.includes('Micro SAAS')) return 'from-green-600 to-emerald-700';
    if (category.includes('Healthcare')) return 'from-red-600 to-pink-700';
    if (category.includes('Security')) return 'from-orange-600 to-red-700';
    if (category.includes('Quantum')) return 'from-indigo-600 to-purple-700';
    return 'from-gray-600 to-slate-700';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>Innovative 2037 Services Showcase - Zion Tech Group</title>
        <meta name="description" content="Discover cutting-edge AI, IT, and Micro SAAS services for 2037. Transform your business with Zion Tech Group's innovative solutions." />
        <link rel="canonical" href="https://ziontechgroup.com/innovative-2037-services-showcase" />
      </Head>

      {/* Header */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-6">
              Innovative 2037 Services Showcase
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-8">
              Discover the future of technology with our cutting-edge AI, IT, and Micro SAAS services. 
              Transform your business with solutions designed for tomorrow's challenges.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Rocket className="w-4 h-4 text-purple-400" />
                <span>{allServices.length} Innovative Services</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>4.8+ Average Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Enterprise Ready</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black/30 rounded-2xl border border-purple-500/30 p-6">
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services by name, description, or category..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 bg-black/50 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
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
                <label className="block text-sm font-medium text-slate-300 mb-2">Price Range</label>
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="w-full px-3 py-2 bg-black/50 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  {priceRanges.map((range) => (
                    <option key={range.id} value={range.id}>
                      {range.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort By */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 bg-black/50 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="name">Name</option>
                  <option value="price">Price</option>
                  <option value="popularity">Popularity</option>
                  <option value="rating">Rating</option>
                  <option value="newest">Newest</option>
                </select>
              </div>

              {/* View Mode */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">View</label>
                <div className="flex bg-black/50 border border-purple-500/30 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`flex-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      viewMode === 'grid'
                        ? 'bg-purple-500 text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Grid className="w-4 h-4 mx-auto" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`flex-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      viewMode === 'list'
                        ? 'bg-purple-500 text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <List className="w-4 h-4 mx-auto" />
                  </button>
                </div>
              </div>
            </div>

            {/* Results Count */}
            <div className="text-center">
              <p className="text-slate-400">
                Showing {filteredServices.length} of {allServices.length} services
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid/List */}
      <div className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-black/30 rounded-2xl border border-purple-500/30 overflow-hidden hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  {/* Service Header */}
                  <div className={`p-6 bg-gradient-to-r ${getCategoryColor(service.category)}`}>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-2xl">{getCategoryIcon(service.category)}</span>
                      {service.popular && (
                        <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-semibold">
                          Popular
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-white/80 text-sm leading-relaxed">{service.tagline}</p>
                  </div>

                  {/* Service Content */}
                  <div className="p-6">
                    <p className="text-slate-300 text-sm mb-4 line-clamp-3">{service.description}</p>
                    
                    {/* Features Preview */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-purple-400 mb-2">Key Features:</h4>
                      <div className="space-y-1">
                        {service.features.slice(0, 3).map((feature, i) => (
                          <div key={i} className="flex items-center space-x-2 text-xs text-slate-400">
                            <CheckCircle className="w-3 h-3 text-green-400" />
                            <span className="line-clamp-1">{feature}</span>
                          </div>
                        ))}
                        {service.features.length > 3 && (
                          <div className="text-xs text-slate-500">
                            +{service.features.length - 3} more features
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Pricing & Rating */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-white">
                        {service.price}
                        <span className="text-slate-400 text-sm">{service.period}</span>
                      </div>
                      <div className="flex items-center text-yellow-400">
                        <Star className="w-4 h-4 mr-1" />
                        <span className="font-semibold">{service.rating.toFixed(1)}</span>
                      </div>
                    </div>

                    {/* Trial Info */}
                    <div className="text-xs text-slate-400 mb-4">
                      {service.trialDays}-day free trial • Setup: {service.setupTime}
                    </div>

                    {/* CTA Button */}
                    <Link
                      href={service.link}
                      className="block w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-3 px-4 rounded-lg font-semibold hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-105"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 inline ml-2" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-black/30 rounded-2xl border border-purple-500/30 p-6 hover:border-purple-400/50 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    {/* Service Info */}
                    <div className="flex-1">
                      <div className="flex items-start gap-4 mb-3">
                        <span className="text-3xl">{getCategoryIcon(service.category)}</span>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-bold text-white">{service.name}</h3>
                            {service.popular && (
                              <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-semibold">
                                Popular
                              </span>
                            )}
                          </div>
                          <p className="text-slate-300 mb-2">{service.tagline}</p>
                          <p className="text-slate-400 text-sm">{service.description}</p>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                        {service.features.slice(0, 6).map((feature, i) => (
                          <div key={i} className="flex items-center space-x-2 text-sm text-slate-400">
                            <CheckCircle className="w-3 h-3 text-green-400" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pricing & CTA */}
                    <div className="lg:text-right space-y-3">
                      <div className="text-3xl font-bold text-white">
                        {service.price}
                        <span className="text-slate-400 text-lg">{service.period}</span>
                      </div>
                      <div className="flex items-center justify-center lg:justify-end text-yellow-400">
                        <Star className="w-4 h-4 mr-1" />
                        <span className="font-semibold">{service.rating.toFixed(1)}</span>
                        <span className="text-slate-400 text-sm ml-2">({service.reviews} reviews)</span>
                      </div>
                      <div className="text-xs text-slate-400">
                        {service.trialDays}-day free trial • Setup: {service.setupTime}
                      </div>
                      <Link
                        href={service.link}
                        className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-6 rounded-lg font-semibold hover:from-purple-500 hover:to-pink-500 transition-all duration-300"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 inline ml-2" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Contact Section */}
      <div className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl border border-purple-500/30 p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-lg text-slate-300 mb-6">
              Get in touch with our team to discuss how our innovative 2037 services can help you 
              achieve your business goals and stay ahead of the competition.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-3 text-slate-300">
                <Phone className="w-5 h-5 text-purple-400" />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-slate-300">
                <Mail className="w-5 h-5 text-pink-400" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-slate-300">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span className="text-sm">{contactInfo.address}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${contactInfo.mobile}`}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-8 rounded-lg font-semibold hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5 inline mr-2" />
                Call Now
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="border border-purple-500/30 text-white py-3 px-8 rounded-lg font-semibold hover:bg-purple-500/20 transition-all duration-300"
              >
                <Mail className="w-5 h-5 inline mr-2" />
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}