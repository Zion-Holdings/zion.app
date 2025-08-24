<<<<<<< HEAD
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Brain, Atom, Globe, Zap, Sparkles, Shield, Target, Crown, Star, TrendingUp, ArrowRight, CheckCircle, DollarSign, Users, Clock, Award, Search, Phone, Mail, MapPin, Heart, Leaf, Car, GraduationCap, Scale, Building, Factory, Camera, Video, Music, Gamepad2 } from 'lucide-react';
import UltraFuturisticNavigation2028 from '../components/layout/UltraFuturisticNavigation2028';
import UltraFuturisticFooter2028 from '../components/layout/UltraFuturisticFooter2028';
import { cuttingEdge2028MicroSaas } from '../data/2028-cutting-edge-micro-saas';
import { practicalBusinessSolutions2028 } from '../data/2028-practical-business-solutions';

export default function ServicesShowcase2028() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const allServices = [
    ...cuttingEdge2028MicroSaas,
    ...practicalBusinessSolutions2028
  ];

  const categories = [
    { id: 'all', name: '🚀 All Services', icon: Rocket, count: allServices.length },
    { id: 'cutting-edge', name: '⚡ Cutting-Edge', icon: Zap, count: cuttingEdge2028MicroSaas.length },
    { id: 'business', name: '🎯 Business Solutions', icon: Target, count: practicalBusinessSolutions2028.length },
    { id: 'ai', name: '🤖 AI & ML', icon: Brain, count: allServices.filter(s => s.category.some(c => c.includes('AI') || c.includes('Machine Learning'))).length },
    { id: 'quantum', name: '⚛️ Quantum Tech', icon: Atom, count: allServices.filter(s => s.category.some(c => c.includes('Quantum'))).length },
    { id: 'enterprise', name: '🏢 Enterprise', icon: Shield, count: allServices.filter(s => s.category.some(c => c.includes('Enterprise'))).length }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || 
      (selectedCategory === 'cutting-edge' && cuttingEdge2028MicroSaas.includes(service)) ||
      (selectedCategory === 'business' && practicalBusinessSolutions2028.includes(service)) ||
      (selectedCategory === 'ai' && service.category.some(c => c.includes('AI') || c.includes('Machine Learning'))) ||
      (selectedCategory === 'quantum' && service.category.some(c => c.includes('Quantum'))) ||
      (selectedCategory === 'enterprise' && service.category.some(c => c.includes('Enterprise')));
    
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.some(c => c.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <>
      <Head>
        <title>2028 Services Showcase - Zion Tech Group | Cutting-Edge Technology Solutions</title>
        <meta name="description" content="Explore our revolutionary 2028 services including AI Consciousness Evolution, Quantum Time Manipulation, Autonomous AI Civilization, and practical business solutions. Transform your business with future technology." />
        <meta name="keywords" content="2028 technology, AI consciousness, quantum computing, space technology, business automation, micro SAAS, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/2028-services-showcase/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="2028 Services Showcase - Zion Tech Group" />
        <meta property="og:description" content="Revolutionary 2028 technology services including AI Consciousness Evolution, Quantum Time Manipulation, and practical business solutions." />
        <meta property="og:url" content="https://ziontechgroup.com/2028-services-showcase" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="2028 Services Showcase - Zion Tech Group" />
        <meta name="twitter:description" content="Revolutionary 2028 technology services including AI Consciousness Evolution, Quantum Time Manipulation, and practical business solutions." />
=======
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  CheckCircle, ArrowRight, Star, TrendingUp, Phone, Zap, 
  DollarSign, Shield, Mail, MapPin, Rocket, Brain, Sparkles,
  Globe, Atom, Heart, Leaf, Car, GraduationCap, Scale,
  Building, Factory, Camera, Video, Music, Gamepad2
} from 'lucide-react';
import UltraFuturisticNavigation2028 from '../components/layout/UltraFuturisticNavigation2028';
import UltraFuturisticFooter2028 from '../components/layout/UltraFuturisticFooter2028';
import { futuristic2028Services } from '../data/2028-futuristic-innovations';
import { emergingTech2028Services } from '../data/2028-emerging-tech-services';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    title: '🚀 2028 Futuristic Innovations',
    description: 'Beyond the future of technology',
    icon: Rocket,
    color: 'from-violet-600 to-purple-600',
    services: futuristic2028Services.slice(0, 4)
  },
  {
    title: '🏙️ Smart City & Infrastructure',
    description: 'Intelligent urban solutions',
    icon: Building,
    color: 'from-blue-600 to-cyan-600',
    services: emergingTech2028Services.filter(s => s.category.includes('Smart City') || s.category.includes('Infrastructure')).slice(0, 4)
  },
  {
    title: '⚛️ Quantum & Advanced Tech',
    description: 'Quantum computing and beyond',
    icon: Atom,
    color: 'from-indigo-600 to-blue-600',
    services: futuristic2028Services.filter(s => s.category.includes('Quantum')).slice(0, 4)
  },
  {
    title: '🤖 AI & Machine Learning',
    description: 'Next-generation AI solutions',
    icon: Brain,
    color: 'from-emerald-600 to-teal-600',
    services: emergingTech2028Services.filter(s => s.category.includes('AI')).slice(0, 4)
  },
  {
    title: '⛓️ Blockchain & Web3',
    description: 'Decentralized solutions',
    icon: Globe,
    color: 'from-orange-600 to-red-600',
    services: emergingTech2028Services.filter(s => s.category.includes('Blockchain')).slice(0, 4)
  },
  {
    title: '🚗 Autonomous & Mobility',
    description: 'Self-driving and mobility solutions',
    icon: Car,
    color: 'from-red-600 to-pink-600',
    services: futuristic2028Services.filter(s => s.category.includes('Autonomous')).slice(0, 4)
  }
];

export default function ServicesShowcase2028() {
  return (
    <>
      <Head>
        <title>2028 Futuristic Services Showcase - Zion Tech Group</title>
        <meta name="description" content="Explore our cutting-edge 2028 services including AI, quantum computing, autonomous systems, and futuristic innovations. Transform your business with next-generation technology." />
        <meta name="keywords" content="2028 technology, AI services, quantum computing, autonomous systems, futuristic innovations, Zion Tech Group" />
        <meta property="og:title" content="2028 Futuristic Services Showcase - Zion Tech Group" />
        <meta property="og:description" content="Explore our cutting-edge 2028 services including AI, quantum computing, autonomous systems, and futuristic innovations." />
        <meta property="og:url" content="https://ziontechgroup.com/2028-services-showcase" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/2028-services-showcase" />
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-1bb4
      </Head>

      <UltraFuturisticNavigation2028 />

      {/* Hero Section */}
<<<<<<< HEAD
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,255,0.15),transparent_50%)] animate-spin-slow" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)] animate-pulse" />
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
=======
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-900/20 to-blue-900/20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-1bb4
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
<<<<<<< HEAD
            className="mb-8"
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full px-6 py-3 mb-6">
              <Rocket className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-mono text-sm">2028 Future Technology</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                2028 Services
              </span>
              <br />
              <span className="text-white">Showcase</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Experience the future of technology with our revolutionary 2028 services. From AI Consciousness Evolution 
              to Quantum Time Manipulation, we're building tomorrow's solutions today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all duration-300 border border-cyan-400/50 hover:border-cyan-300 flex items-center space-x-2"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-cyan-500/50 text-cyan-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 flex items-center space-x-2"
              >
                <span>Contact Us</span>
                <Phone className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            {[
              { icon: Rocket, value: '50+', label: 'Cutting-Edge Services' },
              { icon: Brain, value: '25+', label: 'AI Solutions' },
              { icon: Atom, value: '15+', label: 'Quantum Technologies' },
              { icon: Users, value: '1000+', label: 'Happy Clients' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-cyan-400/70">{stat.label}</div>
              </motion.div>
            ))}
=======
            className="space-y-8"
          >
            <div className="inline-flex items-center space-x-2 bg-purple-900/30 border border-purple-500/30 rounded-full px-6 py-3 text-purple-300 text-sm">
              <Sparkles className="w-4 h-4" />
              <span>2028 Future Technology</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Futuristic
              </span>
              <br />
              <span className="text-white">Services</span>
            </h1>

            <p className="text-xl md:text-2xl text-purple-200 max-w-4xl mx-auto leading-relaxed">
              Experience the future of technology with our cutting-edge 2028 services. 
              From AI consciousness to quantum internet, we're building tomorrow's solutions today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25 flex items-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/revolutionary-2028-pricing"
                className="px-8 py-4 border border-purple-500/30 text-purple-300 rounded-xl hover:bg-purple-900/30 transition-all duration-300 flex items-center space-x-2"
              >
                <span>View Pricing</span>
                <DollarSign className="w-5 h-5" />
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">50+</div>
                <div className="text-purple-300">Innovative Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">99.9%</div>
                <div className="text-blue-300">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400">500+</div>
                <div className="text-pink-300">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">24/7</div>
                <div className="text-cyan-300">Support Available</div>
              </div>
            </div>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-1bb4
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>

              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'border-cyan-500/50 bg-cyan-500/20 text-cyan-400'
                        : 'border-gray-600 text-gray-300 hover:border-cyan-500/30 hover:text-cyan-400'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{category.name.split(' ').slice(1).join(' ')}</span>
                    <span className="text-xs bg-gray-700 px-2 py-1 rounded-full">{category.count}</span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group relative bg-gradient-to-br from-gray-900/80 to-black/80 border border-cyan-500/30 rounded-2xl p-6 hover:border-cyan-500/50 hover:bg-gray-900/90 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                {/* Service Header */}
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-xl flex items-center justify-center">
                      <Rocket className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-cyan-400 font-mono">{service.price}</div>
                      <div className="text-xs text-cyan-400/70">Starting Price</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.name}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                {/* Categories */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.category.slice(0, 3).map((cat) => (
                    <span
                      key={cat}
                      className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs text-cyan-400"
                    >
                      {cat}
                    </span>
                  ))}
                  {service.category.length > 3 && (
                    <span className="px-3 py-1 bg-gray-700/50 border border-gray-600 rounded-full text-xs text-gray-400">
                      +{service.category.length - 3} more
                    </span>
                  )}
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features</h4>
                  <div className="space-y-2">
                    {service.features.slice(0, 3).map((feature) => (
                      <div key={feature} className="flex items-center space-x-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <div className="text-xs text-cyan-400/70">
                        +{service.features.length - 3} more features
                      </div>
                    )}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Benefits</h4>
                  <div className="space-y-2">
                    {service.benefits.slice(0, 2).map((benefit) => (
                      <div key={benefit} className="flex items-center space-x-2 text-sm text-gray-300">
                        <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Market Info */}
                <div className="mb-6 p-4 bg-gray-800/50 rounded-xl border border-gray-700/50">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-cyan-400/70">Market Size</div>
                      <div className="text-white font-semibold">{service.marketSize}</div>
                    </div>
                    <div>
                      <div className="text-cyan-400/70">ROI</div>
                      <div className="text-white font-semibold">{service.roi}</div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Link
                    href={service.contact.website}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-center py-3 px-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 border border-cyan-400/50 hover:border-cyan-300"
                  >
                    Learn More
                  </Link>
                  
                  <Link
                    href={`/contact?service=${service.id}`}
                    className="px-4 py-3 border border-cyan-500/50 text-cyan-400 rounded-xl hover:bg-cyan-500/10 transition-all duration-300"
                  >
                    Contact
                  </Link>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="w-24 h-24 bg-gray-800/50 border border-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
              <p className="text-gray-400 mb-6">Try adjusting your search terms or category filters.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
=======
      {/* Services Categories */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Explore Our <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Service Categories</span>
            </h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Discover our comprehensive range of futuristic services designed to transform your business 
              and propel you into the future of technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative p-8 bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-2xl hover:border-purple-500/60 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3">{category.title}</h3>
                    <p className="text-purple-300 mb-6">{category.description}</p>

                    <div className="space-y-3 mb-6">
                      {category.services.slice(0, 3).map((service) => (
                        <div key={service.id} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-purple-200 text-sm">{service.name}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={`/services#${category.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                      className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors group"
                    >
                      <span>Explore More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-gradient-to-br from-purple-900/10 to-blue-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Our most innovative and in-demand services that are revolutionizing industries worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {futuristic2028Services.slice(0, 6).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative p-8 bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-2xl hover:border-purple-500/60 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl">{service.icon}</div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-purple-400">{service.price}</div>
                        <div className="text-sm text-purple-300">{service.period}</div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3">{service.name}</h3>
                    <p className="text-purple-300 mb-4">{service.description}</p>

                    <div className="mb-6">
                      <div className="flex items-center space-x-2 mb-2">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="text-white font-medium">{service.rating}</span>
                        <span className="text-purple-300">({service.reviews} reviews)</span>
                      </div>
                      <div className="text-sm text-purple-300">
                        <span className="font-medium">Market Size:</span> {service.marketSize}
                      </div>
                      <div className="text-sm text-purple-300">
                        <span className="font-medium">Growth Rate:</span> {service.growthRate}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <Link
                        href={service.link}
                        className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                      >
                        Learn More
                      </Link>
                      <div className="text-right">
                        <div className="text-sm text-purple-300">Setup Time</div>
                        <div className="text-white font-medium">{service.setupTime}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Analysis */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Market <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Insights</span>
            </h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Understand the market dynamics and growth potential of our futuristic services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-2xl"
            >
              <TrendingUp className="w-16 h-16 text-green-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Market Growth</h3>
              <p className="text-purple-300 mb-6">
                Our services target markets with exponential growth potential, 
                with some sectors growing at 300-800% annually.
              </p>
              <div className="text-3xl font-bold text-green-400">500%+</div>
              <div className="text-purple-300">Average Annual Growth</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/30 rounded-2xl"
            >
              <DollarSign className="w-16 h-16 text-blue-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Market Size</h3>
              <p className="text-blue-300 mb-6">
                Combined market size of our service categories exceeds 
                $500 billion with rapid expansion expected.
              </p>
              <div className="text-3xl font-bold text-blue-400">$500B+</div>
              <div className="text-blue-300">Total Addressable Market</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-gradient-to-br from-pink-900/20 to-rose-900/20 border border-pink-500/30 rounded-2xl"
            >
              <Shield className="w-16 h-16 text-pink-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Competitive Edge</h3>
              <p className="text-pink-300 mb-6">
                First-to-market solutions with proprietary technology 
                and AI algorithms that competitors cannot replicate.
              </p>
              <div className="text-3xl font-bold text-pink-400">90%</div>
              <div className="text-pink-300">Market Share in Niche</div>
            </motion.div>
          </div>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-1bb4
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 via-blue-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
=======
      <section className="py-20 bg-gradient-to-r from-purple-900/30 to-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-1bb4
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
<<<<<<< HEAD
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business with{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                2028 Technology?
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join the future of technology with our revolutionary services. From AI consciousness to quantum computing, 
              we're building tomorrow's solutions today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all duration-300 border border-cyan-400/50 hover:border-cyan-300"
              >
                Get Started Today
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-cyan-500/50 text-cyan-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300"
              >
                Schedule a Demo
              </motion.button>
            </div>

            {/* Contact Info */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500/20 border border-cyan-500/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-white font-semibold mb-2">Call Us</div>
                <div className="text-cyan-400">+1 302 464 0950</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500/20 border border-cyan-500/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-white font-semibold mb-2">Email Us</div>
                <div className="text-cyan-400">kleber@ziontechgroup.com</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500/20 border border-cyan-500/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-white font-semibold mb-2">Visit Us</div>
                <div className="text-cyan-400">364 E Main St STE 1008<br />Middletown DE 19709</div>
=======
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Transform</span> Your Business?
            </h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Join hundreds of forward-thinking companies already leveraging our futuristic services 
              to gain competitive advantages and drive innovation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25 flex items-center space-x-2"
              >
                <span>Start Your Journey</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/case-studies"
                className="px-8 py-4 border border-purple-500/30 text-purple-300 rounded-xl hover:bg-purple-900/30 transition-all duration-300 flex items-center space-x-2"
              >
                <span>View Case Studies</span>
                <TrendingUp className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex items-center justify-center space-x-8 text-purple-300">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>30-Day Free Trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>24/7 Expert Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Money-Back Guarantee</span>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-1bb4
              </div>
            </div>
          </motion.div>
        </div>
      </section>
<<<<<<< HEAD
      
      {/* Footer */}
=======

>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-1bb4
      <UltraFuturisticFooter2028 />
    </>
  );
}