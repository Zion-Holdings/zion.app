import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle, ArrowRight, Star, TrendingUp, Phone, Zap, DollarSign, 
  Shield, Mail, MapPin, Rocket, Brain, Sparkles, Atom, Dna, Users, 
  Globe, Cpu, Target, Microscope, Lock, Cloud, BarChart3, Settings, 
  Eye, Award, Clock, Heart, Lightbulb, Search, Filter, Grid, List,
  ChevronDown, ChevronUp, ExternalLink, Play, Pause, Volume2, VolumeX
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
  'Customer Success',
  'Sales Intelligence',
  'Content Marketing',
  'HR & Recruitment',
  'Financial Analytics',
  'Supply Chain',
  'Legal Technology',
  'Healthcare',
  'Real Estate',
  'Education'
];

export default function UltimateRealMicroSaasShowcase2025() {
  const [selectedCategory, setSelectedCategory] = useState('All Services');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('popular');
  const [viewMode, setViewMode] = useState('grid');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const filteredServices = ultimateRealMicroSaasServices2025.filter(service => {
    const matchesCategory = selectedCategory === 'All Services' || service.category.includes(selectedCategory);
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return b.popular ? 1 : -1;
      case 'price-low':
        return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''));
      case 'price-high':
        return parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', ''));
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime();
      default:
        return 0;
    }
  });

  const toggleAudio = () => setIsPlaying(!isPlaying);
  const toggleMute = () => setIsMuted(!isMuted);

  return (
    <Layout>
      <Head>
        <title>Ultimate Real Micro SAAS Services 2025 | Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive collection of real, innovative micro SAAS services for 2025. AI-powered solutions for business growth and digital transformation." />
        <meta name="keywords" content="micro SAAS, AI services, business solutions, digital transformation, Zion Tech Group" />
        <meta property="og:title" content="Ultimate Real Micro SAAS Services 2025 | Zion Tech Group" />
        <meta property="og:description" content="Discover our comprehensive collection of real, innovative micro SAAS services for 2025." />
        <meta property="og:url" content="https://ziontechgroup.com/ultimate-real-micro-saas-showcase-2025" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/ultimate-real-micro-saas-showcase-2025" />
      </Head>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,212,255,0.1),transparent_50%)]" />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-20"
              animate={{
                x: [0, Math.random() * 1000 - 500],
                y: [0, Math.random() * 1000 - 500],
                scale: [0, 1, 0],
                opacity: [0, 0.5, 0]
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Ultimate Real Micro SAAS
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Services 2025
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Discover our comprehensive collection of real, innovative micro SAAS services that are transforming businesses worldwide. 
              AI-powered solutions designed for growth, efficiency, and competitive advantage.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            {[
              { number: '10+', label: 'Real Services', icon: Star, color: 'text-cyan-400' },
              { number: '500+', label: 'Happy Customers', icon: Users, color: 'text-purple-400' },
              { number: '99.9%', label: 'Uptime', icon: Shield, color: 'text-green-400' },
              { number: '24/7', label: 'Support', icon: Zap, color: 'text-pink-400' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className={`text-3xl md:text-4xl font-bold mb-2 ${stat.color}`}>
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="#services">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center gap-2">
                <Rocket className="w-5 h-5" />
                Explore Services
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Get Started
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Real Micro SAAS Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our collection of real, market-ready micro SAAS services that are already helping businesses grow and succeed.
            </p>
          </motion.div>

          {/* Filters and Controls */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-12 space-y-6"
          >
            {/* Search and Category Filters */}
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              <div className="flex flex-col sm:flex-row gap-4 flex-1 max-w-2xl">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                  />
                </div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                >
                  {categories.map(category => (
                    <option key={category} value={category} className="bg-gray-800 text-white">
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* View Mode and Sort */}
              <div className="flex items-center gap-4">
                <div className="flex items-center bg-white/5 rounded-lg p-1 border border-white/10">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded ${viewMode === 'grid' ? 'bg-purple-500 text-white' : 'text-gray-400 hover:text-white'}`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded ${viewMode === 'list' ? 'bg-purple-500 text-white' : 'text-gray-400 hover:text-white'}`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                >
                  <option value="popular">Most Popular</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest First</option>
                </select>
              </div>
            </div>

            {/* Results Count */}
            <div className="text-center text-gray-400">
              Showing {sortedServices.length} of {ultimateRealMicroSaasServices2025.length} services
            </div>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className={`grid gap-8 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}
          >
            {sortedServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group relative ${
                  viewMode === 'grid' 
                    ? 'bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300 hover:scale-105' 
                    : 'bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300'
                }`}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                    POPULAR
                  </div>
                )}

                {/* Service Header */}
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{service.icon}</div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">{service.price}</div>
                      <div className="text-sm text-gray-400">{service.period}</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {service.tagline}
                  </p>
                </div>

                {/* Service Details */}
                <div className="space-y-4">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Key Features */}
                  <div>
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-purple-400" />
                      Key Features
                    </h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 3 && (
                        <li className="text-sm text-purple-400">
                          +{service.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Market Position */}
                  <div className="bg-white/5 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <Target className="w-4 h-4 text-cyan-400" />
                      Market Position
                    </h4>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {service.marketPosition}
                    </p>
                  </div>

                  {/* ROI and Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-white/5 rounded-lg">
                      <div className="text-lg font-bold text-green-400">{service.roi.split(' ')[0]}</div>
                      <div className="text-xs text-gray-400">ROI</div>
                    </div>
                    <div className="text-center p-3 bg-white/5 rounded-lg">
                      <div className="text-lg font-bold text-purple-400">{service.customers}+</div>
                      <div className="text-xs text-gray-400">Customers</div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-400">
                      {service.rating} ({service.reviews} reviews)
                    </span>
                  </div>

                  {/* Pricing Tiers */}
                  <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg p-4 border border-purple-500/20">
                    <h4 className="text-white font-semibold mb-3 text-center">Pricing Tiers</h4>
                    <div className="space-y-2">
                      {Object.entries(service.pricingTiers).map(([tier, details]) => (
                        <div key={tier} className="flex justify-between items-center text-sm">
                          <span className="text-gray-300 capitalize">{tier}</span>
                          <span className="text-purple-400 font-semibold">{details.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link href={service.link}>
                    <button className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 flex items-center justify-center gap-2">
                      Get Started
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>

                  {/* Contact Info */}
                  <div className="mt-4 text-center text-xs text-gray-400">
                    <p>Contact: {contactInfo.mobile}</p>
                    <p>{contactInfo.email}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* No Results */}
          {sortedServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your search criteria or browse all services.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl p-12 border border-purple-500/20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses already using our AI-powered micro SAAS services to drive growth, efficiency, and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Contact Us Today
                </button>
              </Link>
              <Link href="/comprehensive-services-showcase-2025">
                <button className="px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  View All Services
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}