import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle, ArrowRight, Star, TrendingUp, Phone, Mail, MapPin, 
  Rocket, Brain, Atom, Shield, Award, Zap, Cloud, Target, Search,
  Filter, Grid, List, DollarSign, Users, Clock, Eye, Heart,
  Globe, BarChart3, Cpu, Database, Network, Lock, Sparkles
} from 'lucide-react';
import Layout from '../components/layout/Layout';
import { comprehensiveRealServices2025 } from '../data/2025-comprehensive-real-services';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    id: 'ai-ml',
    name: 'AI & Machine Learning',
    icon: Brain,
    color: 'from-purple-500 to-pink-600',
    description: 'Cutting-edge AI solutions that transform business operations'
  },
  {
    id: 'customer-success',
    name: 'Customer Success',
    icon: Users,
    color: 'from-blue-500 to-cyan-600',
    description: 'AI-powered tools to enhance customer experience and retention'
  },
  {
    id: 'supply-chain',
    name: 'Supply Chain',
    icon: Network,
    color: 'from-green-500 to-emerald-600',
    description: 'Intelligent optimization for logistics and inventory management'
  },
  {
    id: 'financial-planning',
    name: 'Financial Planning',
    icon: DollarSign,
    color: 'from-yellow-500 to-orange-600',
    description: 'AI-driven financial analysis and planning solutions'
  },
  {
    id: 'sales-intelligence',
    name: 'Sales Intelligence',
    icon: Target,
    color: 'from-red-500 to-pink-600',
    description: 'Smart sales tools that boost conversion and revenue'
  },
  {
    id: 'hr-analytics',
    name: 'HR Analytics',
    icon: BarChart3,
    color: 'from-indigo-500 to-purple-600',
    description: 'Data-driven insights for human resources optimization'
  },
  {
    id: 'decision-intelligence',
    name: 'Decision Intelligence',
    icon: Cpu,
    color: 'from-teal-500 to-blue-600',
    description: 'AI-powered decision support and business intelligence'
  },
  {
    id: 'content-marketing',
    name: 'Content Marketing',
    icon: Sparkles,
    color: 'from-pink-500 to-rose-600',
    description: 'Intelligent content creation and marketing automation'
  },
  {
    id: 'crm-intelligence',
    name: 'CRM & Customer Intelligence',
    icon: Database,
    color: 'from-cyan-500 to-blue-600',
    description: 'Advanced customer relationship management solutions'
  },
  {
    id: 'business-intelligence',
    name: 'Business Intelligence',
    icon: Globe,
    color: 'from-violet-500 to-purple-600',
    description: 'Comprehensive business analytics and reporting platforms'
  }
];

export default function ServicesOverview2025() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Filter services based on selections
  const filteredServices = comprehensiveRealServices2025.filter(service => {
    const categoryMatch = selectedCategory === 'all' || 
                         service.category.toLowerCase().includes(selectedCategory.replace('-', ' '));
    
    const searchMatch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       service.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    return categoryMatch && searchMatch;
  });

  const getCategoryServices = (categoryId: string) => {
    if (categoryId === 'all') return comprehensiveRealServices2025;
    const categoryName = serviceCategories.find(cat => cat.id === categoryId)?.name;
    return comprehensiveRealServices2025.filter(service => 
      service.category.includes(categoryName || '')
    );
  };

  const getCategoryStats = (categoryId: string) => {
    const services = getCategoryServices(categoryId);
    const totalRevenue = services.reduce((sum, service) => {
      const price = parseInt(service.price.replace('$', ''));
      return sum + (price * service.customers);
    }, 0);
    
    return {
      serviceCount: services.length,
      totalCustomers: services.reduce((sum, service) => sum + service.customers, 0),
      averageRating: services.reduce((sum, service) => sum + service.rating, 0) / services.length || 0,
      totalRevenue: totalRevenue
    };
  };

  return (
    <>
      <Head>
        <title>Services Overview 2025 | Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive portfolio of AI-powered micro SAAS services, IT solutions, and business intelligence platforms. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="AI services, micro SAAS, IT solutions, business automation, customer success, supply chain optimization, financial planning, sales intelligence, Zion Tech Group" />
        <meta property="og:title" content="Services Overview 2025 | Zion Tech Group" />
        <meta property="og:description" content="Explore our comprehensive portfolio of AI-powered micro SAAS services, IT solutions, and business intelligence platforms." />
        <meta property="og:url" content="https://ziontechgroup.com/services-overview-2025" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/services-overview-2025" />
      </Head>

      <Layout>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,211,238,0.05),transparent_50%)]" />
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-blue-500 to-pink-600 bg-clip-text text-transparent">
                  Services Overview
                </span>
                <br />
                <span className="text-white">2025</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Discover our comprehensive portfolio of <span className="text-purple-400 font-semibold">AI-powered micro SAAS services</span>, 
                cutting-edge IT solutions, and revolutionary business intelligence platforms. 
                <span className="text-blue-400 font-semibold"> Transform your business</span> with proven technology that delivers measurable results.
              </p>
              
              {/* Overall Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">{comprehensiveRealServices2025.length}+</div>
                  <div className="text-gray-400">Real Services</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">$2.5B+</div>
                  <div className="text-gray-400">Market Coverage</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400 mb-2">95%</div>
                  <div className="text-gray-400">AI Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">400%</div>
                  <div className="text-gray-400">Average ROI</div>
                </div>
              </div>

              {/* Contact CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-purple-500/25"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </Link>
                <a
                  href={`tel:${contactInfo.mobile}`}
                  className="px-8 py-4 border border-purple-500/30 text-purple-400 font-semibold rounded-xl hover:bg-purple-500/10 transition-all duration-300"
                >
                  <Phone className="w-5 h-5 mr-2 inline" />
                  {contactInfo.mobile}
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-gray-900 border-b border-gray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-2 bg-gray-800 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-all duration-300 ${
                    viewMode === 'grid' ? 'bg-purple-500 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-all duration-300 ${
                    viewMode === 'list' ? 'bg-purple-500 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Category Overview */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                  Service Categories
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our diverse range of AI-powered services organized by business function and industry focus
              </p>
            </motion.div>

            {/* Category Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
              {serviceCategories.map((category, index) => {
                const stats = getCategoryStats(category.id);
                const IconComponent = category.icon;
                
                return (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group cursor-pointer"
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <div className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 h-full ${
                      selectedCategory === category.id ? 'ring-2 ring-purple-500/50' : ''
                    }`}>
                      {/* Category Icon */}
                      <div className={`text-4xl mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                        <IconComponent className="w-12 h-12" />
                      </div>
                      
                      {/* Category Info */}
                      <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
                      <p className="text-gray-400 text-sm mb-4 line-clamp-2">{category.description}</p>
                      
                      {/* Category Stats */}
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Services:</span>
                          <span className="text-white font-semibold">{stats.serviceCount}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Customers:</span>
                          <span className="text-white font-semibold">{stats.totalCustomers.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Rating:</span>
                          <span className="text-white font-semibold">{stats.averageRating.toFixed(1)}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* All Services Option */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === 'all'
                    ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white shadow-2xl shadow-purple-500/25'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700'
                }`}
              >
                <Globe className="w-5 h-5 mr-2 inline" />
                View All Services ({comprehensiveRealServices2025.length})
              </button>
            </motion.div>
          </div>
        </section>

        {/* Services Display */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            {/* Results Header */}
            <div className="flex flex-col lg:flex-row items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {selectedCategory === 'all' ? 'All Services' : serviceCategories.find(cat => cat.id === selectedCategory)?.name}
                </h3>
                <p className="text-gray-400">
                  Showing <span className="text-purple-400 font-semibold">{filteredServices.length}</span> of{' '}
                  <span className="text-purple-400 font-semibold">{comprehensiveRealServices2025.length}</span> services
                </p>
              </div>
              
              {selectedCategory !== 'all' && (
                <button
                  onClick={() => setSelectedCategory('all')}
                  className="px-4 py-2 text-purple-400 hover:text-white transition-colors duration-300"
                >
                  ← Back to All Categories
                </button>
              )}
            </div>

            {viewMode === 'grid' ? (
              /* Grid View */
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 h-full relative overflow-hidden">
                      {/* Popular Badge */}
                      {service.popular && (
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-600 text-white text-xs font-semibold rounded-full">
                            Popular
                          </span>
                        </div>
                      )}

                      {/* Service Icon */}
                      <div className="text-6xl mb-6">{service.icon}</div>
                      
                      {/* Service Info */}
                      <h3 className="text-2xl font-bold text-white mb-3">{service.name}</h3>
                      <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>
                      
                      {/* Price */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="text-3xl font-bold text-purple-400">
                          {service.price}
                          <span className="text-lg text-gray-400">{service.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-5 h-5 text-yellow-400 fill-current" />
                          <span className="text-white font-semibold">{service.rating}</span>
                          <span className="text-gray-400">({service.reviews})</span>
                        </div>
                      </div>

                      {/* Key Features */}
                      <div className="space-y-2 mb-6">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Category and Setup */}
                      <div className="flex items-center justify-between mb-6 text-sm">
                        <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full">
                          {service.category}
                        </span>
                        <span className="text-gray-400">
                          Setup: {service.setupTime}
                        </span>
                      </div>

                      {/* Key Benefits */}
                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-3">Key Benefits:</h4>
                        <div className="space-y-2">
                          {service.keyBenefits.slice(0, 2).map((benefit, idx) => (
                            <div key={idx} className="flex items-center">
                              <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                              <span className="text-gray-300 text-sm">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <Link
                        href={service.link}
                        className="block w-full text-center px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 inline" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              /* List View */
              <div className="space-y-6">
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                      <div className="flex flex-col lg:flex-row gap-6 items-start">
                        {/* Service Icon and Basic Info */}
                        <div className="flex items-start gap-4">
                          <div className="text-4xl">{service.icon}</div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-2xl font-bold text-white">{service.name}</h3>
                              {service.popular && (
                                <span className="px-2 py-1 bg-gradient-to-r from-purple-500 to-pink-600 text-white text-xs font-semibold rounded-full">
                                  Popular
                                </span>
                              )}
                            </div>
                            <p className="text-gray-300 mb-3">{service.description}</p>
                            <div className="flex items-center gap-4 text-sm text-gray-400">
                              <span>Category: {service.category}</span>
                              <span>Setup: {service.setupTime}</span>
                              <span>Trial: {service.trialDays} days</span>
                            </div>
                          </div>
                        </div>

                        {/* Price and Rating */}
                        <div className="text-right">
                          <div className="text-3xl font-bold text-purple-400 mb-2">
                            {service.price}
                            <span className="text-lg text-gray-400">{service.period}</span>
                          </div>
                          <div className="flex items-center justify-end gap-1 mb-2">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-white font-semibold">{service.rating}</span>
                            <span className="text-gray-400">({service.reviews})</span>
                          </div>
                          <span className="text-sm text-gray-400">
                            {service.customers} customers
                          </span>
                        </div>
                      </div>

                      {/* Features and Benefits */}
                      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                          <div className="space-y-2">
                            {service.features.slice(0, 4).map((feature, idx) => (
                              <div key={idx} className="flex items-center">
                                <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                                <span className="text-gray-300 text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-3">Key Benefits:</h4>
                          <div className="space-y-2">
                            {service.keyBenefits.slice(0, 4).map((benefit, idx) => (
                              <div key={idx} className="flex items-center">
                                <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                                <span className="text-gray-300 text-sm">{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* CTA and Additional Info */}
                      <div className="mt-6 flex flex-col lg:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <span>Market: {service.marketSize}</span>
                          <span>Growth: {service.growthRate}</span>
                          <span>ROI: {service.roi}</span>
                        </div>
                        <Link
                          href={service.link}
                          className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2 inline" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* No Results */}
            {filteredServices.length === 0 && (
              <div className="text-center py-20">
                <div className="text-6xl mb-6">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
                <p className="text-gray-400 mb-6">
                  Try adjusting your search terms or category selection to find what you're looking for.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchQuery('');
                  }}
                  className="px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition-all duration-300"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                  Ready to Transform
                </span>
                <br />
                <span className="text-white">Your Business?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Let's discuss how our innovative AI-powered services can help you achieve your business goals. 
                Get in touch with our experts today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
                <a
                  href={`tel:${contactInfo.mobile}`}
                  className="flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {contactInfo.mobile}
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center px-6 py-3 border border-purple-500/30 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  {contactInfo.email}
                </a>
              </div>

              <div className="text-center text-gray-400">
                <p className="mb-2">{contactInfo.address}</p>
                <p>Visit us at: <a href={contactInfo.website} className="text-purple-400 hover:text-purple-300 transition-colors">{contactInfo.website}</a></p>
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
}