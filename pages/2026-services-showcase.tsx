import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Brain, Cpu, Shield, Cloud, Database, Globe, Rocket, Zap, 
  TrendingUp, Lock, Star, Users, Clock, DollarSign, ArrowRight,
  Phone, Mail, MapPin, ChevronDown
} from 'lucide-react';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import UltraAdvancedNavigation from '../components/layout/UltraAdvancedNavigation';
import { innovative2026Services } from '../data/innovative-2026-services';
import { emergingTech2026Services } from '../data/emerging-tech-2026-services';
import { enterpriseIT2026Services } from '../data/enterprise-it-2026-services';

export default function Services2026Showcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'popular' | 'price' | 'rating' | 'newest'>('popular');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Combine all 2026 services
  const all2026Services = [
    ...innovative2026Services,
    ...emergingTech2026Services,
    ...enterpriseIT2026Services
  ];

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(all2026Services.map(s => s.category.split('&')[0].trim())))];
  
  // Filter and sort services
  const filteredServices = all2026Services
    .filter(service => selectedCategory === 'All' || service.category.includes(selectedCategory))
    .sort((a, b) => {
      switch (sortBy) {
        case 'popular':
          return b.popular ? 1 : -1;
        case 'price':
          return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
          return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime();
        default:
          return 0;
      }
    });

  const categoryIcons: { [key: string]: React.ComponentType<any> } = {
    'AI': Brain,
    'Quantum': Cpu,
    'Cybersecurity': Shield,
    'Cloud': Cloud,
    'Blockchain': Database,
    'IoT': Globe,
    'Space': Rocket,
    'Biotech': Brain,
    'Metaverse': Globe,
    'Autonomous': Zap,
    'DevOps': Zap,
    'Analytics': TrendingUp,
    'Infrastructure': Database,
    'Identity': Lock,
    'Backup': Database,
    'Network': Globe,
    'API': Database,
    'Migration': Cloud,
    'Zero Trust': Shield,
    'Data Center': Database
  };

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
    <UltraAdvancedFuturisticBackground 
      intensity="extreme" 
      colorScheme="quantum-fusion"
      particleCount={500}
      animationSpeed={2.0}
      enableHolographic={true}
      enableQuantumEffects={true}
    >
      <Head>
        <title>2026 Services Showcase - Zion Tech Group | Next-Generation Solutions</title>
        <meta name="description" content="Explore our revolutionary 2026 services including AI, quantum computing, space technology, biotech, and enterprise IT solutions. Contact: +1 302 464 0950" />
        <meta name="keywords" content="2026 services, AI 2026, quantum computing 2026, space technology, biotech AI, enterprise IT, Zion Tech Group" />
        <meta name="author" content="Zion Tech Group" />
        <meta property="og:title" content="2026 Services Showcase - Zion Tech Group" />
        <meta property="og:description" content="Next-generation technology solutions for 2026 and beyond" />
        <meta property="og:url" content="https://ziontechgroup.com/2026-services-showcase" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/2026-services-showcase" />
      </Head>

      <UltraAdvancedNavigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                2026 Services Showcase
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Experience the future of technology with our revolutionary 2026 services. 
              From AI consciousness simulation to quantum space mining, discover solutions that will transform your business.
            </p>

            {/* Service Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                  {all2026Services.length}+
                </div>
                <div className="text-gray-400">2026 Services</div>
              </motion.div>
              
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">
                  {all2026Services.filter(s => s.category.includes('AI')).length}+
                </div>
                <div className="text-gray-400">AI Solutions</div>
              </motion.div>
              
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">
                  {all2026Services.filter(s => s.category.includes('Quantum')).length}+
                </div>
                <div className="text-gray-400">Quantum Tech</div>
              </motion.div>
              
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">
                  {all2026Services.filter(s => s.category.includes('IT')).length}+
                </div>
                <div className="text-gray-400">IT Services</div>
              </motion.div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                <Phone className="mr-2 w-5 h-5" />
                Contact Us Today
              </motion.a>
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300"
              >
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters and Controls */}
      <section id="services" className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Category Filter */}
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => {
                  const Icon = categoryIcons[category] || Globe;
                  const isActive = selectedCategory === category;
                  
                  return (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ${
                        isActive
                          ? 'border-cyan-400 bg-cyan-400/20 text-cyan-400'
                          : 'border-gray-600 text-gray-400 hover:border-gray-500 hover:text-gray-300'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {category}
                    </button>
                  );
                })}
              </div>

              {/* Sort and View Controls */}
              <div className="flex items-center gap-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  <option value="popular">Most Popular</option>
                  <option value="price">Price: Low to High</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest First</option>
                </select>

                <div className="flex border border-gray-600 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`px-3 py-2 transition-colors ${
                      viewMode === 'grid'
                        ? 'bg-cyan-400 text-black'
                        : 'bg-gray-800 text-gray-400 hover:text-gray-300'
                    }`}
                  >
                    Grid
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`px-3 py-2 transition-colors ${
                      viewMode === 'list'
                        ? 'bg-cyan-400 text-black'
                        : 'bg-gray-800 text-gray-400 hover:text-gray-300'
                    }`}
                  >
                    List
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className={`grid gap-6 ${
              viewMode === 'grid'
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                : 'grid-cols-1'
            }`}
          >
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className={viewMode === 'list' ? 'col-span-1' : ''}
              >
                <div className={`bg-gray-800/60 border border-gray-700 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300 hover:transform hover:scale-105 ${
                  viewMode === 'list' ? 'flex items-center gap-6' : ''
                }`}>
                  {/* Service Icon */}
                  <div className={`text-4xl mb-4 ${viewMode === 'list' ? 'flex-shrink-0' : ''}`}>
                    {service.icon}
                  </div>

                  {/* Service Content */}
                  <div className={viewMode === 'list' ? 'flex-1' : ''}>
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-gray-300 text-sm mb-2">
                          {service.tagline}
                        </p>
                      </div>
                      {service.popular && (
                        <div className="flex items-center space-x-1 text-yellow-400 text-sm">
                          <Star className="w-4 h-4 fill-current" />
                          <span>Popular</span>
                        </div>
                      )}
                    </div>

                    {/* Price and Stats */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-cyan-400">
                        {service.price}
                        <span className="text-gray-400 text-lg">{service.period}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <Users className="w-4 h-4" />
                        <span>{service.customers?.toLocaleString() || 'N/A'}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-4">
                      <div className="text-sm text-gray-400 mb-2">Key Features:</div>
                      <ul className="space-y-1">
                        {service.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-300">
                            <span className="text-green-400 mr-2">✓</span>
                            <span className="line-clamp-1">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Market Info */}
                    <div className="mb-4 p-3 bg-gray-700/40 rounded-lg">
                      <div className="text-xs text-gray-400 mb-1">Market Position</div>
                      <div className="text-sm text-gray-300 line-clamp-2">
                        {service.marketPosition}
                      </div>
                    </div>

                    {/* ROI & Setup */}
                    <div className="flex items-center justify-between mb-4 text-sm">
                      <div className="flex items-center space-x-1 text-green-400">
                        <TrendingUp className="w-4 h-4" />
                        <span>{service.roi.split(' ')[0]} ROI</span>
                      </div>
                      <div className="flex items-center space-x-1 text-blue-400">
                        <Clock className="w-4 h-4" />
                        <span>{service.setupTime}</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <a
                        href={service.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-xl text-center text-sm font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                      <a
                        href="/contact"
                        className="flex-1 bg-gray-700/60 text-white px-4 py-2 rounded-xl text-center text-sm font-medium hover:bg-gray-600/60 transition-all duration-300 border border-gray-600 hover:border-gray-500"
                      >
                        Contact Us
                      </a>
                    </div>

                    {/* Contact Info */}
                    <div className="mt-4 pt-4 border-t border-gray-700">
                      <div className="text-xs text-gray-400 mb-2">Contact Information:</div>
                      <div className="text-xs text-gray-300 space-y-1">
                        <div>📱 {service.contactInfo.mobile}</div>
                        <div>✉️ {service.contactInfo.email}</div>
                        <div>🌐 {service.contactInfo.website}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Experience the Future?
              </h3>
              <p className="text-gray-300 mb-8 max-w-3xl mx-auto text-lg">
                Our 2026 services represent the cutting edge of technology. Contact our team of experts to discuss how these revolutionary solutions can transform your business with unprecedented ROI and innovation.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center gap-3 text-cyan-400">
                  <Phone className="w-6 h-6" />
                  <span className="text-lg">+1 302 464 0950</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-purple-400">
                  <Mail className="w-6 h-6" />
                  <span className="text-lg">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-pink-400">
                  <MapPin className="w-6 h-6" />
                  <span className="text-lg">364 E Main St STE 1008 Middletown DE 19709</span>
                </div>
              </div>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-lg"
              >
                <Phone className="mr-2 w-5 h-5" />
                Get Started with 2026 Services
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </UltraAdvancedFuturisticBackground>
  );
}