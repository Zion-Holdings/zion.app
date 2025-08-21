import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Rocket, Brain, Atom, Globe, Zap, Sparkles, Shield, 
  Target, Crown, Star, TrendingUp, ArrowRight,
  CheckCircle, DollarSign, Users, Clock, Award, Zap as ZapIcon,
  Search, Phone, Mail, MapPin
} from 'lucide-react';
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/2028-services-showcase" />
        
        {/* Open Graph */}
        <meta property="og:title" content="2028 Services Showcase - Zion Tech Group" />
        <meta property="og:description" content="Revolutionary 2028 technology services including AI Consciousness Evolution, Quantum Time Manipulation, and practical business solutions." />
        <meta property="og:url" content="https://ziontechgroup.com/2028-services-showcase" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="2028 Services Showcase - Zion Tech Group" />
        <meta name="twitter:description" content="Revolutionary 2028 technology services including AI Consciousness Evolution, Quantum Time Manipulation, and practical business solutions." />
      </Head>

      <UltraFuturisticNavigation2028 />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,255,0.15),transparent_50%)] animate-spin-slow" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)] animate-pulse" />
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
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
          </motion.div>
        </div>
      </section>

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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 via-blue-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
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
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Footer */}
      <UltraFuturisticFooter2028 />
    </>
  );
}