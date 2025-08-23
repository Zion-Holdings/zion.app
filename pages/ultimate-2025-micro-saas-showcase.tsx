import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  CheckCircle, ArrowRight, Star, TrendingUp, Phone, Zap, DollarSign, Shield, Mail, MapPin, Rocket, Brain, Sparkles, Atom, Dna, Users, Globe, Cpu, Target, Microscope, Lock, Cloud, BarChart3, Settings, Eye, Award, Clock, Heart, Lightbulb, Search, Filter, Grid, List, ChevronDown, ChevronUp
} from 'lucide-react';
import Layout from '../components/layout/Layout';
import { ultimateRealMicroSaasServices2025 } from '../data/2025-ultimate-real-micro-saas-services';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const categories = [
  'All Services',
  'Customer Success & Retention',
  'Supply Chain & Logistics',
  'Financial Planning & Analysis',
  'Human Resources & Analytics',
  'Sales Intelligence & Automation',
  'Business Intelligence & Decision Support',
  'Content Marketing & Automation',
  'Customer Relationship Management'
];

const pricingTiers = [
  { name: 'Starter', range: '$199 - $299' },
  { name: 'Professional', range: '$399 - $599' },
  { name: 'Enterprise', range: '$799 - $899' }
];

export default function Ultimate2025MicroSaasShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('All Services');
  const [selectedPricing, setSelectedPricing] = useState('All Pricing');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('popularity');

  const filteredServices = ultimateRealMicroSaasServices2025.filter(service => {
    const matchesCategory = selectedCategory === 'All Services' || service.category === selectedCategory;
    const matchesPricing = selectedPricing === 'All Pricing' || 
      (selectedPricing === 'Starter' && parseInt(service.price.replace('$', '')) <= 299) ||
      (selectedPricing === 'Professional' && parseInt(service.price.replace('$', '')) > 299 && parseInt(service.price.replace('$', '')) <= 599) ||
      (selectedPricing === 'Enterprise' && parseInt(service.price.replace('$', '')) > 599);
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesPricing && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'popularity':
        return b.popular ? 1 : -1;
      case 'price-low':
        return parseInt(a.price.replace('$', '')) - parseInt(b.price.replace('$', ''));
      case 'price-high':
        return parseInt(b.price.replace('$', '')) - parseInt(a.price.replace('$', ''));
      case 'rating':
        return b.rating - a.rating;
      case 'customers':
        return b.customers - a.customers;
      default:
        return 0;
    }
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <Layout>
      <Head>
        <title>Ultimate 2025 Micro SAAS Services Showcase | Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive collection of real, innovative micro SAAS services for 2025. AI-powered solutions for modern businesses with proven ROI and market validation." />
        <meta name="keywords" content="micro SAAS, AI services, business automation, customer success, supply chain optimization, financial planning, HR analytics, sales intelligence" />
        <meta property="og:title" content="Ultimate 2025 Micro SAAS Services Showcase | Zion Tech Group" />
        <meta property="og:description" content="Discover our comprehensive collection of real, innovative micro SAAS services for 2025." />
        <meta property="og:url" content="https://ziontechgroup.com/ultimate-2025-micro-saas-showcase" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/ultimate-2025-micro-saas-showcase" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Futuristic Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-blue-900/20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Ultimate 2025
              <br />
              Micro SAAS Services
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our comprehensive collection of real, innovative micro SAAS services that are transforming businesses in 2025. 
              AI-powered solutions with proven ROI and market validation.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-cyan-400 mb-2">
                  {ultimateRealMicroSaasServices2025.length}+
                </div>
                <div className="text-gray-400">Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-blue-400 mb-2">
                  {ultimateRealMicroSaasServices2025.reduce((sum, service) => sum + service.customers, 0).toLocaleString()}+
                </div>
                <div className="text-gray-400">Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-purple-400 mb-2">
                  {ultimateRealMicroSaasServices2025.reduce((sum, service) => sum + service.rating, 0) / ultimateRealMicroSaasServices2025.length}⭐
                </div>
                <div className="text-gray-400">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-green-400 mb-2">
                  300%+
                </div>
                <div className="text-gray-400">Average ROI</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#services" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                <Rocket className="w-5 h-5 mr-2" />
                Explore Services
              </Link>
              <Link href="/contact" className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300">
                <Phone className="w-5 h-5 mr-2" />
                Get Started
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search Section */}
      <section className="py-12 bg-gray-900/50 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white pr-10 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            </div>

            {/* Pricing Filter */}
            <div className="relative">
              <select
                value={selectedPricing}
                onChange={(e) => setSelectedPricing(e.target.value)}
                className="appearance-none bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white pr-10 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                <option value="All Pricing">All Pricing</option>
                {pricingTiers.map((tier) => (
                  <option key={tier.name} value={tier.name}>{tier.name} ({tier.range})</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            </div>

            {/* Sort */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white pr-10 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                <option value="popularity">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="customers">Most Customers</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            </div>

            {/* View Mode Toggle */}
            <div className="flex bg-gray-800 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'}`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'}`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}
          >
            {sortedServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className={`bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 ${
                  viewMode === 'list' ? 'flex' : ''
                }`}
              >
                {viewMode === 'grid' ? (
                  // Grid View
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl">{service.icon}</div>
                      {service.popular && (
                        <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                          Popular
                        </span>
                      )}
                    </div>

                    {/* Title and Tagline */}
                    <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{service.tagline}</p>

                    {/* Price */}
                    <div className="flex items-baseline mb-4">
                      <span className="text-3xl font-bold text-cyan-400">{service.price}</span>
                      <span className="text-gray-400 ml-1">{service.period}</span>
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
                    <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                      <div>
                        <div className="text-lg font-bold text-cyan-400">{service.rating}</div>
                        <div className="text-xs text-gray-400">Rating</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-blue-400">{service.customers}</div>
                        <div className="text-xs text-gray-400">Customers</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-purple-400">{service.trialDays}</div>
                        <div className="text-xs text-gray-400">Trial Days</div>
                      </div>
                    </div>

                    {/* CTA */}
                    <Link
                      href={service.link}
                      className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                ) : (
                  // List View
                  <div className="flex-1 p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-4xl flex-shrink-0">{service.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="text-xl font-bold text-white">{service.name}</h3>
                            <p className="text-gray-400 text-sm">{service.tagline}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                            <div className="text-gray-400 text-sm">{service.period}</div>
                          </div>
                        </div>
                        
                        <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                        
                        <div className="flex items-center space-x-6 text-sm text-gray-400 mb-4">
                          <span>⭐ {service.rating} Rating</span>
                          <span>👥 {service.customers} Customers</span>
                          <span>🆓 {service.trialDays} Day Trial</span>
                          {service.popular && (
                            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-2 py-1 rounded text-xs">
                              Popular
                            </span>
                          )}
                        </div>
                        
                        <Link
                          href={service.link}
                          className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {sortedServices.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-gray-400 mb-6">Try adjusting your filters or search terms</p>
              <button
                onClick={() => {
                  setSelectedCategory('All Services');
                  setSelectedPricing('All Pricing');
                  setSearchTerm('');
                }}
                className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses already using our AI-powered micro SAAS services. 
              Get started today with a free consultation and discover how we can help you achieve your goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                <Phone className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Link>
              <a href={`tel:${contactInfo.mobile}`} className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <Phone className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                <div className="text-white font-semibold">Phone</div>
                <a href={`tel:${contactInfo.mobile}`} className="text-cyan-400 hover:text-cyan-300">
                  {contactInfo.mobile}
                </a>
              </div>
              <div className="text-center">
                <Mail className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                <div className="text-white font-semibold">Email</div>
                <a href={`mailto:${contactInfo.email}`} className="text-cyan-400 hover:text-cyan-300">
                  {contactInfo.email}
                </a>
              </div>
              <div className="text-center">
                <MapPin className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                <div className="text-white font-semibold">Address</div>
                <div className="text-cyan-400">{contactInfo.address}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}