import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  CheckCircle, ArrowRight, Star, TrendingUp, Phone, Mail, MapPin, 
  Rocket, Brain, Atom, Shield, Zap, Target, Users, Award, Clock, 
  Heart, Lightbulb, Search, Filter, Grid, List, Globe, Sparkles
} from 'lucide-react';
import { Layout } from '../components/layout/Layout';
import { ultimateFuturisticServices2025 } from '../data/2025-ultimate-futuristic-services';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const categories = [
  'All Services',
  'AI & Autonomous Systems',
  'Quantum & Cloud Infrastructure',
  'Space Technology & AI',
  'Neural Technology & AI',
  'Cybersecurity & AI',
  'Quantum Computing & Finance',
  'Healthcare & AI',
  'Manufacturing & AI',
  'Internet Security & Quantum',
  'Education & AI'
];

const priceRanges = [
  'All Prices',
  'Under $1,000',
  '$1,000 - $2,000',
  '$2,000 - $3,000',
  '$3,000 - $5,000',
  'Over $5,000'
];

export default function Ultimate2035FuturisticServicesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('All Services');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All Prices');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredServices = ultimateFuturisticServices2025.filter(service => {
    const categoryMatch = selectedCategory === 'All Services' || service.category === selectedCategory;
    const priceMatch = selectedPriceRange === 'All Prices' || 
      (selectedPriceRange === 'Under $1,000' && parseInt(service.price.replace(/[$,]/g, '')) < 1000) ||
      (selectedPriceRange === '$1,000 - $2,000' && parseInt(service.price.replace(/[$,]/g, '')) >= 1000 && parseInt(service.price.replace(/[$,]/g, '')) < 2000) ||
      (selectedPriceRange === '$2,000 - $3,000' && parseInt(service.price.replace(/[$,]/g, '')) >= 2000 && parseInt(service.price.replace(/[$,]/g, '')) < 3000) ||
      (selectedPriceRange === '$3,000 - $5,000' && parseInt(service.price.replace(/[$,]/g, '')) >= 3000 && parseInt(service.price.replace(/[$,]/g, '')) < 5000) ||
      (selectedPriceRange === 'Over $5,000' && parseInt(service.price.replace(/[$,]/g, '')) >= 5000);
    const searchMatch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       service.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    
    return categoryMatch && priceMatch && searchMatch;
  });

  const getPriceRange = (price: string) => {
    const numPrice = parseInt(price.replace(/[$,]/g, ''));
    if (numPrice < 1000) return 'Under $1,000';
    if (numPrice < 2000) return '$1,000 - $2,000';
    if (numPrice < 3000) return '$2,000 - $3,000';
    if (numPrice < 5000) return '$3,000 - $5,000';
    return 'Over $5,000';
  };

  return (
    <>
      <Head>
        <title>Ultimate 2035 Futuristic Services Showcase | Zion Tech Group</title>
        <meta name="description" content="Explore our revolutionary 2035 futuristic services including AI autonomous systems, quantum computing, space technology, and neural interfaces. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="AI autonomous systems, quantum computing, space technology, neural interfaces, futuristic services, Zion Tech Group" />
        <meta property="og:title" content="Ultimate 2035 Futuristic Services Showcase | Zion Tech Group" />
        <meta property="og:description" content="Explore our revolutionary 2035 futuristic services including AI autonomous systems, quantum computing, space technology, and neural interfaces." />
        <meta property="og:url" content="https://ziontechgroup.com/ultimate-2035-futuristic-services-showcase" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/ultimate-2035-futuristic-services-showcase" />
      </Head>

      <Layout>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          {/* Futuristic Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.1),transparent_50%)]" />
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                  Ultimate 2035
                </span>
                <br />
                <span className="text-white">Futuristic Services</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Experience the future of technology with our revolutionary AI autonomous systems, 
                quantum computing platforms, space technology solutions, and neural interface developments
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center space-x-2 bg-purple-500/20 border border-purple-500/30 rounded-full px-4 py-2">
                  <Sparkles className="w-5 h-5 text-purple-400" />
                  <span className="text-purple-300">AI Autonomous Systems</span>
                </div>
                <div className="flex items-center space-x-2 bg-blue-500/20 border border-blue-500/30 rounded-full px-4 py-2">
                  <Atom className="w-5 h-5 text-blue-400" />
                  <span className="text-blue-300">Quantum Computing</span>
                </div>
                <div className="flex items-center space-x-2 bg-pink-500/20 border border-pink-500/30 rounded-full px-4 py-2">
                  <Rocket className="w-5 h-5 text-pink-400" />
                  <span className="text-pink-300">Space Technology</span>
                </div>
                <div className="flex items-center space-x-2 bg-green-500/20 border border-green-500/30 rounded-full px-4 py-2">
                  <Brain className="w-5 h-5 text-green-400" />
                  <span className="text-green-300">Neural Interfaces</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Get Started Today
                </Link>
                <Link
                  href="#services"
                  className="inline-flex items-center px-8 py-4 border border-purple-500/30 text-purple-300 font-semibold rounded-xl hover:bg-purple-500/10 transition-all duration-300"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filters Section */}
        <section className="py-12 bg-black/50 border-b border-purple-500/20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Search Bar */}
              <div className="mb-8">
                <div className="relative max-w-2xl mx-auto">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search futuristic services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-gray-900/50 border border-purple-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50"
                  />
                </div>
              </div>

              {/* Filters */}
              <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
                <div className="flex flex-wrap gap-4">
                  {/* Category Filter */}
                  <div className="flex items-center space-x-2">
                    <Filter className="w-5 h-5 text-purple-400" />
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="bg-gray-900/50 border border-purple-500/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                    >
                      {categories.map((category) => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>

                  {/* Price Filter */}
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-purple-400" />
                    <select
                      value={selectedPriceRange}
                      onChange={(e) => setSelectedPriceRange(e.target.value)}
                      className="bg-gray-900/50 border border-purple-500/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                    >
                      {priceRanges.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* View Mode Toggle */}
                <div className="flex items-center space-x-2 bg-gray-900/50 border border-purple-500/30 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-md transition-all duration-200 ${
                      viewMode === 'grid' 
                        ? 'bg-purple-500/20 text-purple-300' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-md transition-all duration-200 ${
                      viewMode === 'list' 
                        ? 'bg-purple-500/20 text-purple-300' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Results Count */}
              <div className="mt-6 text-center">
                <p className="text-gray-400">
                  Showing <span className="text-purple-400 font-semibold">{filteredServices.length}</span> of{' '}
                  <span className="text-purple-400 font-semibold">{ultimateFuturisticServices2025.length}</span> futuristic services
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid/List Section */}
        <section id="services" className="py-20 bg-black">
          <div className="container mx-auto px-4">
            {filteredServices.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="w-24 h-24 bg-purple-500/20 border border-purple-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-12 h-12 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
                <p className="text-gray-400 mb-6">
                  Try adjusting your search criteria or filters to find the perfect futuristic service for your needs.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All Services');
                    setSelectedPriceRange('All Prices');
                  }}
                  className="px-6 py-3 bg-purple-500/20 border border-purple-500/30 text-purple-300 rounded-lg hover:bg-purple-500/30 transition-all duration-200"
                >
                  Clear Filters
                </button>
              </motion.div>
            ) : (
              <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={viewMode === 'grid' ? 'group' : 'flex items-start space-x-6 p-6 bg-gray-900/50 border border-purple-500/20 rounded-2xl hover:border-purple-500/40 transition-all duration-300'}
                  >
                    {viewMode === 'grid' ? (
                      // Grid View
                      <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 hover:from-gray-800 hover:to-gray-700 transition-all duration-300 h-full">
                        <div className="flex items-start justify-between mb-4">
                          <div className="text-4xl">{service.icon}</div>
                          {service.popular && (
                            <div className="flex items-center space-x-1 bg-yellow-500/20 border border-yellow-500/30 rounded-full px-3 py-1">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span className="text-yellow-400 text-sm font-medium">Popular</span>
                            </div>
                          )}
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-200">
                          {service.name}
                        </h3>
                        
                        <p className="text-gray-400 mb-4 line-clamp-2">
                          {service.tagline}
                        </p>
                        
                        <div className="mb-4">
                          <span className="text-2xl font-bold text-purple-400">{service.price}</span>
                          <span className="text-gray-400">{service.period}</span>
                        </div>
                        
                        <div className="space-y-2 mb-6">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <div key={idx} className="flex items-center">
                              <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                              <span className="text-gray-300 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2 text-sm text-gray-400">
                            <Users className="w-4 h-4" />
                            <span>{service.customers}+ customers</span>
                          </div>
                          <Link
                            href={service.link}
                            className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors font-medium group-hover:translate-x-1 transition-transform duration-200"
                          >
                            Learn More
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </div>
                      </div>
                    ) : (
                      // List View
                      <>
                        <div className="text-4xl flex-shrink-0">{service.icon}</div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-200">
                              {service.name}
                            </h3>
                            {service.popular && (
                              <div className="flex items-center space-x-1 bg-yellow-500/20 border border-yellow-500/30 rounded-full px-3 py-1">
                                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                <span className="text-yellow-400 text-sm font-medium">Popular</span>
                              </div>
                            )}
                          </div>
                          
                          <p className="text-gray-400 mb-3">
                            {service.description}
                          </p>
                          
                          <div className="flex items-center space-x-6 mb-4 text-sm text-gray-400">
                            <div className="flex items-center space-x-2">
                              <TrendingUp className="w-4 h-4" />
                              <span>{service.growthRate} growth</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Users className="w-4 h-4" />
                              <span>{service.customers}+ customers</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Star className="w-4 h-4" />
                              <span>{service.rating}/5 ({service.reviews} reviews)</span>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <span className="text-2xl font-bold text-purple-400">{service.price}</span>
                              <span className="text-gray-400">{service.period}</span>
                              <span className="text-sm text-gray-500 bg-gray-800 px-3 py-1 rounded-full">
                                {getPriceRange(service.price)}
                              </span>
                            </div>
                            <Link
                              href={service.link}
                              className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors font-medium group-hover:translate-x-1 transition-transform duration-200"
                            >
                              Learn More
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                          </div>
                        </div>
                      </>
                    )}
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Ready to Experience
                </span>
                <br />
                <span className="text-white">The Future?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform your business with our revolutionary futuristic services. 
                Get in touch with our experts to discuss how we can help you achieve 
                unprecedented technological advancement.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-5 h-5 text-purple-400" />
                  <span>{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <span>{contactInfo.address}</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Us Today
                </Link>
                <Link
                  href="/comprehensive-services-showcase-2025"
                  className="inline-flex items-center px-8 py-4 border border-purple-500/30 text-purple-300 font-semibold rounded-xl hover:bg-purple-500/10 transition-all duration-300"
                >
                  <Globe className="w-5 h-5 mr-2" />
                  View All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
}