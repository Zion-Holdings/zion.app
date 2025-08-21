import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Star, Users, TrendingUp, DollarSign, Clock, CheckCircle, 
  ArrowRight, Rocket, Brain, Atom, Sparkles, Shield, Zap, Globe, 
  Cpu, Database, Cloud, Smartphone, Palette, Filter, Grid, List, 
  ChevronDown, ChevronUp, Mail, Phone, MapPin, ExternalLink
} from 'lucide-react';
import { comprehensiveRealServices } from '../data/2025-comprehensive-real-services';

export default function ComprehensiveServicesShowcase2025() {
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

  // Get unique categories
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(comprehensiveRealServices.map(s => s.category))];
    return [
      { id: 'all', name: 'All Services', icon: '🚀', count: comprehensiveRealServices.length },
      ...uniqueCategories.map(cat => ({
        id: cat.toLowerCase().replace(/\s+/g, '-'),
        name: cat,
        icon: getCategoryIcon(cat),
        count: comprehensiveRealServices.filter(s => s.category === cat).length
      }))
    ];
  }, []);

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'low', name: 'Under $100/month', range: 'Under $100' },
    { id: 'medium', name: '$100 - $300/month', range: '$100 - $300' },
    { id: 'high', name: '$300+/month', range: '$300+' }
  ];

  const sortOptions = [
    { id: 'name', name: 'Name A-Z' },
    { id: 'price-low', name: 'Price Low to High' },
    { id: 'price-high', name: 'Price High to Low' },
    { id: 'rating', name: 'Highest Rated' },
    { id: 'customers', name: 'Most Customers' }
  ];

  // Filter and sort services
  const filteredServices = useMemo(() => {
    let filtered = comprehensiveRealServices.filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || 
                             service.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory;
      
      const matchesPrice = selectedPriceRange === 'all' || 
                          (selectedPriceRange === 'low' && parseInt(service.price.replace('$', '')) < 100) ||
                          (selectedPriceRange === 'medium' && parseInt(service.price.replace('$', '')) >= 100 && parseInt(service.price.replace('$', '')) <= 300) ||
                          (selectedPriceRange === 'high' && parseInt(service.price.replace('$', '')) > 300);
      
      return matchesSearch && matchesCategory && matchesPrice;
    });

    // Sort services
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => parseInt(a.price.replace('$', '')) - parseInt(b.price.replace('$', '')));
        break;
      case 'price-high':
        filtered.sort((a, b) => parseInt(b.price.replace('$', '')) - parseInt(a.price.replace('$', '')));
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'customers':
        filtered.sort((a, b) => b.customers - a.customers);
        break;
      default:
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    return filtered;
  }, [searchTerm, selectedCategory, selectedPriceRange, sortBy]);

  function getCategoryIcon(category: string): string {
    const iconMap: { [key: string]: string } = {
      'AI & Content Creation': '🧠',
      'Customer Success & Support': '👥',
      'Financial Technology': '💰',
      'Healthcare & Biotech': '🏥',
      'E-commerce & Retail': '🛒',
      'Cybersecurity & Compliance': '🔒',
      'Data & Analytics': '📊',
      'Human Resources': '👨‍💼',
      'Legal & Compliance': '⚖️',
      'Manufacturing & IoT': '🏭'
    };
    return iconMap[category] || '🚀';
  }

  function getPriceColor(price: string): string {
    const priceNum = parseInt(price.replace('$', ''));
    if (priceNum < 100) return 'text-green-400';
    if (priceNum < 300) return 'text-yellow-400';
    return 'text-red-400';
  }

  return (
    <Layout>
      <Head>
        <title>Comprehensive Services Showcase 2025 | Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive portfolio of AI-powered micro SAAS services, IT solutions, and innovative technology services. Real, market-validated solutions with proven ROI." />
        <meta name="keywords" content="AI services, micro SAAS, IT solutions, technology services, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/comprehensive-services-showcase-2025" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="relative max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Comprehensive Services Showcase 2025
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Discover our portfolio of real, market-validated AI-powered micro SAAS services, 
                IT solutions, and innovative technology services designed to transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center gap-2">
                  <Mail className="w-5 h-5" />
                  Get Started Today
                </a>
                <a 
                  href={`tel:${contactInfo.mobile}`} className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-200 flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  {contactInfo.mobile}
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: 'Total Services', value: comprehensiveRealServices.length, icon: Rocket, color: 'text-cyan-400' },
                { label: 'Categories', value: categories.length - 1, icon: Grid, color: 'text-purple-400' },
                { label: 'Total Customers', value: comprehensiveRealServices.reduce((sum, s) => sum + s.customers, 0).toLocaleString(), icon: Users, color: 'text-green-400' },
                { label: 'Average Rating', value: (comprehensiveRealServices.reduce((sum, s) => sum + s.rating, 0) / comprehensiveRealServices.length).toFixed(1), icon: Star, color: 'text-yellow-400' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }} className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center text-2xl bg-gray-800/50 border border-gray-700`}>
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-4">
                {/* Category Filter */}
                <div className="relative">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)} className="appearance-none bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent pr-10">
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name} ({category.count})
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                </div>

                {/* Price Filter */}
                <div className="relative">
                  <select
                    value={selectedPriceRange}
                    onChange={(e) => setSelectedPriceRange(e.target.value)} className="appearance-none bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent pr-10">
                    {priceRanges.map(range => (
                      <option key={range.id} value={range.id}>
                        {range.name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                </div>

                {/* Sort */}
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)} className="appearance-none bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent pr-10">
                    {sortOptions.map(option => (
                      <option key={option.id} value={option.id}>
                        {option.name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                </div>

                {/* View Mode */}
                <div className="flex bg-gray-800/50 border border-gray-700 rounded-xl p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'}`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'}`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {filteredServices.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }} className="text-center py-20">
                <div className="text-gray-400 text-xl mb-4">No services found matching your criteria</div>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setSelectedPriceRange('all');
                    setSortBy('name');
                  }} className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200">
                  Clear Filters
                </button>
              </motion.div>
            ) : (
              <div className={`grid gap-8 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                <AnimatePresence>
                  {filteredServices.map((service, index) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`bg-gray-900/50 border border-gray-700/50 rounded-2xl backdrop-blur-sm hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 ${
                        viewMode === 'list' ? 'p-8' : 'p-6'
                      }`}
                    >
                      {/* Service Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="text-4xl mb-2">{getCategoryIcon(service.category)}</div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center text-yellow-400">
                            <Star className="w-4 h-4 fill-current" />
                            <span className="ml-1 text-sm">{service.rating}</span>
                          </div>
                          <div className="text-xs text-gray-400">({service.reviews})</div>
                        </div>
                      </div>

                      {/* Service Info */}
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4 flex-grow">
                        {service.description}
                      </p>

                      {/* Price */}
                      <div className="mb-4">
                        <div className={`text-2xl font-bold ${getPriceColor(service.price)}`}>
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
                      <div className="grid grid-cols-3 gap-4 mb-6 text-xs">
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
                        <div className="text-center">
                          <div className="text-gray-400">Trial</div>
                          <div className="text-white font-semibold">{service.trialDays}d</div>
                        </div>
                      </div>

                      {/* Market Position */}
                      <div className="mb-4 p-3 bg-gray-800/30 rounded-lg">
                        <h4 className="text-xs font-semibold text-gray-200 mb-1">Market Size:</h4>
                        <p className="text-xs text-gray-400">{service.marketSize}</p>
                      </div>

                      {/* ROI */}
                      <div className="mb-4 p-3 bg-green-900/20 border border-green-500/30 rounded-lg">
                        <h4 className="text-xs font-semibold text-green-400 mb-1">ROI Promise:</h4>
                        <p className="text-xs text-green-300">{service.roi}</p>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex space-x-2">
                        <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                          onClick={() => window.open(service.website, '_blank')}
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-1 inline" />
                        </button>
                        <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover:from-purple-600 hover:to-pink-700 transition-all duration-200"
                          onClick={() => window.open(`mailto:${contactInfo.email}?subject=Inquiry about ${service.name}`, '_blank')}
                        >
                          Contact
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}
          </div>
        </section>

        {/* Enhanced Footer CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }} className="bg-gradient-to-r from-cyan-900/50 via-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already using our innovative services to gain competitive advantages and achieve remarkable ROI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                  onClick={() => window.open(`mailto:${contactInfo.email}?subject=Business Transformation Consultation`, '_blank')}
                >
                  <Mail className="w-5 h-5 mr-2 inline" />
                  Schedule Consultation
                </button>
                <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:from-purple-600 hover:to-pink-700 transition-all duration-200"
                  onClick={() => window.open(`tel:${contactInfo.mobile}`, '_blank')}
                >
                  <Phone className="w-5 h-5 mr-2 inline" />
                  Call Now
                </button>
              </div>
              <div className="mt-8 text-sm text-gray-400">
                <p>Contact: {contactInfo.mobile} | {contactInfo.email}</p>
                <p>{contactInfo.address}</p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}