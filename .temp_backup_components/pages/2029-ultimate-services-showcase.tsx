import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Rocket, Brain, Atom, Globe, Zap, Sparkles, Shield, 
  Target, Crown, Star, TrendingUp, ArrowRight,
  CheckCircle, DollarSign, Users, Clock, Award, Zap as ZapIcon,
  Search, Phone, Mail, MapPin, Heart, Leaf, Car, GraduationCap, Scale,
  Building, Factory, Camera, Video, Music, Gamepad2, Eye,
  Globe2, Satellite, Dna, Battery, Gamepad, Cpu as CpuIcon
} from 'lucide-react';
import UltraFuturisticNavigation2029 from '../components/layout/UltraFuturisticNavigation2029';
import UltraFuturisticFooter2029 from '../components/layout/UltraFuturisticFooter2029';
import { cuttingEdge2028MicroSaas } from '../data/2028-cutting-edge-micro-saas';
import { practicalBusinessSolutions2028 } from '../data/2028-practical-business-solutions';
import { advancedAIAutonomousServices2028 } from '../data/2028-advanced-ai-autonomous-services';
import { quantumSpaceInnovations2028 } from '../data/2028-quantum-space-innovations';

export default function UltimateServicesShowcase2029() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');

  const allServices = [
    ...cuttingEdge2028MicroSaas,
    ...practicalBusinessSolutions2028,
    ...advancedAIAutonomousServices2028,
    ...quantumSpaceInnovations2028
  ];

  const categories = [
    { id: 'all', name: '🚀 All Services', icon: Rocket, count: allServices.length, color: 'from-violet-600 to-purple-600' },
    { id: 'cutting-edge', name: '⚡ Cutting-Edge', icon: Zap, count: cuttingEdge2028MicroSaas.length, color: 'from-cyan-600 to-blue-600' },
    { id: 'business', name: '🎯 Business Solutions', icon: Target, count: practicalBusinessSolutions2028.length, color: 'from-green-600 to-emerald-600' },
    { id: 'ai-autonomous', name: '🤖 AI & Autonomous', icon: Brain, count: advancedAIAutonomousServices2028.length, color: 'from-emerald-600 to-teal-600' },
    { id: 'quantum-space', name: '⚛️ Quantum & Space', icon: Atom, count: quantumSpaceInnovations2028.length, color: 'from-indigo-600 to-blue-600' },
    { id: 'ai', name: '🧠 AI & ML', icon: Brain, count: allServices.filter(s => s.category.some(c => c.includes('AI') || c.includes('Machine Learning'))).length, color: 'from-pink-600 to-rose-600' },
    { id: 'quantum', name: '🔮 Quantum Tech', icon: Atom, count: allServices.filter(s => s.category.some(c => c.includes('Quantum'))).length, color: 'from-purple-600 to-violet-600' },
    { id: 'enterprise', name: '🏢 Enterprise', icon: Shield, count: allServices.filter(s => s.category.some(c => c.includes('Enterprise'))).length, color: 'from-blue-600 to-cyan-600' }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'low', name: 'Under $5K', range: 'Under $5,000' },
    { id: 'medium', name: '$5K - $15K', range: '$5,000 - $15,000' },
    { id: 'high', name: '$15K - $30K', range: '$15,000 - $30,000' },
    { id: 'premium', name: 'Over $30K', range: 'Over $30,000' }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || 
      (selectedCategory === 'cutting-edge' && cuttingEdge2028MicroSaas.includes(service)) ||
      (selectedCategory === 'business' && practicalBusinessSolutions2028.includes(service)) ||
      (selectedCategory === 'ai-autonomous' && advancedAIAutonomousServices2028.includes(service)) ||
      (selectedCategory === 'quantum-space' && quantumSpaceInnovations2028.includes(service)) ||
      (selectedCategory === 'ai' && service.category.some(c => c.includes('AI') || c.includes('Machine Learning'))) ||
      (selectedCategory === 'quantum' && service.category.some(c => c.includes('Quantum'))) ||
      (selectedCategory === 'enterprise' && service.category.some(c => c.includes('Enterprise')));
    
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.some(c => c.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesPrice = selectedPriceRange === 'all' ||
      (selectedPriceRange === 'low' && parseFloat(service.price.replace(/[$,]/g, '')) < 5000) ||
      (selectedPriceRange === 'medium' && parseFloat(service.price.replace(/[$,]/g, '')) >= 5000 && parseFloat(service.price.replace(/[$,]/g, '')) < 15000) ||
      (selectedPriceRange === 'high' && parseFloat(service.price.replace(/[$,]/g, '')) >= 15000 && parseFloat(service.price.replace(/[$,]/g, '')) < 30000) ||
      (selectedPriceRange === 'premium' && parseFloat(service.price.replace(/[$,]/g, '')) >= 30000);
    
    return matchesCategory && matchesSearch && matchesPrice;
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

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <>
      <Head>
        <title>2029 Ultimate Services Showcase - Zion Tech Group | Revolutionary Technology Solutions</title>
        <meta name="description" content="Explore our revolutionary 2029 services including AI Consciousness Evolution, Quantum Time Manipulation, Space Quantum Communication, and autonomous AI systems. Transform your business with future technology." />
        <meta name="keywords" content="2029 technology, AI consciousness, quantum computing, space technology, autonomous AI, business automation, micro SAAS, Zion Tech Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/2029-ultimate-services-showcase" />
        
        {/* Open Graph */}
        <meta property="og:title" content="2029 Ultimate Services Showcase - Zion Tech Group" />
        <meta property="og:description" content="Revolutionary 2029 technology services including AI Consciousness Evolution, Quantum Time Manipulation, and autonomous AI systems." />
        <meta property="og:url" content="https://ziontechgroup.com/2029-ultimate-services-showcase" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="2029 Ultimate Services Showcase - Zion Tech Group" />
        <meta name="twitter:description" content="Revolutionary 2029 technology services including AI Consciousness Evolution, Quantum Time Manipulation, and autonomous AI systems." />
      </Head>

      <UltraFuturisticNavigation2029 />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,255,0.15),transparent_50%)] animate-spin-slow" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)] animate-pulse" />
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl">
                <Rocket className="w-9 h-9 text-white" />
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-2xl">
                <Brain className="w-9 h-9 text-white" />
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 via-purple-500 to-violet-600 rounded-2xl flex items-center justify-center shadow-2xl">
                <Atom className="w-9 h-9 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                2029 Ultimate
              </span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600 bg-clip-text text-transparent">
                Services Showcase
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Experience the future of technology with our revolutionary AI consciousness, quantum computing, 
              space technology, and autonomous systems. Transform your business with innovations that define tomorrow.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-2xl hover:shadow-cyan-500/25 text-lg"
              >
                Get Started Today
              </Link>
              <Link
                href="/pricing"
                className="px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 font-bold rounded-xl hover:bg-cyan-500/10 transition-all duration-200 text-lg"
              >
                View Pricing
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{allServices.length}+</div>
                <div className="text-gray-400">Revolutionary Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">$500M+</div>
                <div className="text-gray-400">Market Valuation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">99.9%</div>
                <div className="text-gray-400">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">24/7</div>
                <div className="text-gray-400">Support Available</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-16 bg-gray-900/50 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-200"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap items-center space-x-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700/50'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <category.icon className="h-4 w-4" />
                    <span>{category.name}</span>
                    <span className="text-xs opacity-75">({category.count})</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Price Filter */}
            <div className="flex items-center space-x-2">
              {priceRanges.map((range) => (
                <button
                  key={range.id}
                  onClick={() => setSelectedPriceRange(range.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedPriceRange === range.id
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700/50'
                  }`}
                >
                  {range.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group relative"
              >
                <div className="relative p-6 rounded-2xl border border-gray-700/50 bg-gray-800/20 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all duration-300 h-full">
                  {/* Service Header */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                        <Rocket className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-cyan-400">{service.price}</div>
                        <div className="text-xs text-gray-400">per month</div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-200">
                      {service.name}
                    </h3>
                    
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                  </div>

                  {/* Categories */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {service.category.slice(0, 3).map((cat) => (
                        <span
                          key={cat}
                          className="px-2 py-1 bg-gray-700/50 text-cyan-400 text-xs rounded-lg border border-cyan-500/20"
                        >
                          {cat}
                        </span>
                      ))}
                      {service.category.length > 3 && (
                        <span className="px-2 py-1 bg-gray-700/50 text-gray-400 text-xs rounded-lg">
                          +{service.category.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Features Preview */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-gray-300">
                          <CheckCircle className="h-3 w-3 text-cyan-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                      {service.features.length > 3 && (
                        <li className="text-xs text-gray-500">
                          +{service.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Market Info */}
                  <div className="mb-6 space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Market Size:</span>
                      <span className="text-emerald-400 font-medium">{service.marketSize}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">ROI:</span>
                      <span className="text-cyan-400 font-medium">{service.roi}</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="mt-auto">
                    <Link
                      href={`/services/${service.id}`}
                      className="w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25 text-center block group-hover:scale-105 transform transition-transform duration-200"
                    >
                      Learn More
                      <ArrowRight className="inline-block ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-gray-800/50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
              <p className="text-gray-400 mb-8">Try adjusting your search criteria or browse all services</p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchTerm('');
                  setSelectedPriceRange('all');
                }}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 via-blue-900/20 to-purple-900/20 border-t border-cyan-500/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the future of technology with our revolutionary services. 
              Contact us today to discuss how we can help you achieve your goals.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-2xl hover:shadow-cyan-500/25 text-lg"
              >
                Get Started Today
              </Link>
              <div className="flex items-center space-x-4 text-gray-300">
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-cyan-400" />
                  <span>{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-cyan-400" />
                  <span>{contactInfo.email}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <UltraFuturisticFooter2029 />
    </>
  );
}