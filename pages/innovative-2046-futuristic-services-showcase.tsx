import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Play, Star, Users, Award, TrendingUp, Brain, Shield, Rocket, 
  Loader2, ChevronDown, Zap, Globe, Lock, Cpu, Database, Cloud, Palette, Heart,
  Phone, Mail, MapPin, Search, Grid, List, Sparkles, Target, BarChart3, 
  Lightbulb, Code, Server, Network, ShieldCheck, BrainCircuit, Atom, Satellite,
  Quantum, Neural, Robot, Climate, Finance, Home, Fitness, Project, Support
} from 'lucide-react';
import Link from 'next/link';

// Import our new innovative 2046 services
import { innovative2046AIServices } from '../data/innovative-2046-ai-services';
import { innovative2046ITServices } from '../data/innovative-2046-it-services';
import { innovative2046MicroSAASServices } from '../data/innovative-2046-micro-saas-services';

// Enhanced loading component with quantum effects
const QuantumLoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-900 to-cyan-900 relative overflow-hidden">
    {/* Quantum particle effects */}
    <div className="absolute inset-0">
      {[...Array(100)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
          animate={{
            x: [0, Math.random() * 1200],
            y: [0, Math.random() * 800],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
          }}
        />
      ))}
    </div>
    
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="text-center relative z-10"
    >
      <div className="relative">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="w-32 h-32 mx-auto mb-8"
        >
          <div className="w-full h-full bg-gradient-to-r from-cyan-400 via-purple-600 to-pink-500 rounded-full blur-2xl opacity-40 animate-pulse"></div>
          <div className="absolute inset-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center">
            <Quantum className="w-16 h-16 text-white" />
          </div>
        </motion.div>
      </div>
      <motion.h1 
        className="text-4xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Loading Zion Tech Group 2046...
      </motion.h1>
      <p className="text-xl text-gray-300 mb-3">Preparing your quantum digital transformation journey</p>
      <p className="text-lg text-gray-400">Neural AI • Quantum Computing • Autonomous Systems</p>
    </motion.div>
  </div>
);

const Innovative2046FuturisticServicesShowcase: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsVisible(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Intersection Observer for better performance
  useEffect(() => {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new (window as any).IntersectionObserver(
        (entries: any[]) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        { threshold: 0.3 }
      );

      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => observer.observe(section));

      return () => observer.disconnect();
    }
  }, []);

  if (isLoading) {
    return <QuantumLoadingFallback />;
  }

  const allServices = [
    ...innovative2046AIServices,
    ...innovative2046ITServices,
    ...innovative2046MicroSAASServices
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = ['all', 'AI & Machine Learning', 'Quantum Computing', 'Cybersecurity', 'Edge Computing', 'Personal Finance', 'Smart Home', 'Health & Fitness', 'Project Management', 'Customer Support'];

  return (
    <Layout seo={{
      title: 'Innovative 2046 Futuristic Services Showcase | Zion Tech Group',
      description: 'Discover our cutting-edge 2046 services including Neural AI, Quantum Computing, Autonomous Systems, and more. Transform your business with next-generation technology.',
      keywords: '2046 services, neural AI, quantum computing, autonomous systems, futuristic technology, Zion Tech Group',
      url: 'https://ziontechgroup.com/innovative-2046-futuristic-services-showcase'
    }}>
      <div className="relative min-h-screen">
        {/* Hero Section */}
        <section id="hero" className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-cyan-900/20"></div>
          <div className="relative z-10 container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-6xl mx-auto"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-8"
              >
                <Sparkles className="w-5 h-5 text-cyan-400 mr-2" />
                <span className="text-cyan-400 font-medium">Innovative 2046 Services</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight"
              >
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Future of Technology
                </span>
                <br />
                <span className="text-white">Starts Here</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
              >
                Experience the next generation of AI, Quantum Computing, and Autonomous Systems. 
                Our 2046 services represent the cutting edge of technological innovation, designed to 
                transform industries and redefine what's possible.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Link href="#services">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full flex items-center gap-2 hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300"
                  >
                    Explore Services
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
                
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-full flex items-center gap-2 hover:bg-cyan-500/10 transition-all duration-300"
                  >
                    <Phone className="w-5 h-5" />
                    Contact Us
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section id="search-filter" className="py-12 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-6xl mx-auto"
            >
              {/* Search Bar */}
              <div className="relative mb-8">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for innovative 2046 services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-3 mb-8">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25'
                        : 'bg-gray-800/50 text-gray-300 border border-gray-700 hover:bg-gray-700/50 hover:border-cyan-500/30'
                    }`}
                  >
                    {category === 'all' ? 'All Services' : category}
                  </motion.button>
                ))}
              </div>

              {/* View Mode Toggle */}
              <div className="flex justify-between items-center mb-8">
                <div className="text-gray-400">
                  <span className="font-medium text-white">{filteredServices.length}</span> services found
                </div>
                
                <div className="flex items-center gap-2 bg-gray-800/50 rounded-full p-1 border border-gray-700">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-full transition-all duration-300 ${
                      viewMode === 'grid' 
                        ? 'bg-cyan-500 text-white' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-full transition-all duration-300 ${
                      viewMode === 'list' 
                        ? 'bg-cyan-500 text-white' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-6xl mx-auto"
            >
              {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredServices.map((service, index) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ y: -10, scale: 1.02 }}
                      className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-3xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20"
                    >
                      {/* Service Icon */}
                      <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        {getServiceIcon(service.category)}
                      </div>

                      {/* Service Content */}
                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                          {service.name}
                        </h3>
                        
                        <p className="text-gray-300 text-lg leading-relaxed">
                          {service.tagline}
                        </p>
                        
                        <p className="text-gray-400 leading-relaxed">
                          {service.description}
                        </p>

                        {/* Price */}
                        <div className="flex items-center justify-between">
                          <span className="text-3xl font-bold text-cyan-400">
                            {service.price}
                          </span>
                          <div className="flex items-center gap-2">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < Math.floor(service.rating)
                                      ? 'text-yellow-400 fill-current'
                                      : 'text-gray-600'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-gray-400 text-sm">
                              ({service.reviews})
                            </span>
                          </div>
                        </div>

                        {/* Features Preview */}
                        <div className="space-y-2">
                          <h4 className="font-semibold text-white">Key Features:</h4>
                          <ul className="space-y-1">
                            {service.features.slice(0, 3).map((feature, idx) => (
                              <li key={idx} className="text-gray-400 text-sm flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Contact Info */}
                        <div className="pt-4 border-t border-gray-700/50">
                          <div className="flex items-center gap-4 text-sm text-gray-400">
                            <div className="flex items-center gap-2">
                              <Phone className="w-4 h-4" />
                              {service.contactInfo.phone}
                            </div>
                            <div className="flex items-center gap-2">
                              <Mail className="w-4 h-4" />
                              {service.contactInfo.email}
                            </div>
                          </div>
                        </div>

                        {/* CTA Button */}
                        <Link href={service.link}>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full mt-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                          >
                            Learn More
                          </motion.button>
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="space-y-6">
                  {filteredServices.map((service, index) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="group bg-gradient-to-r from-gray-900/80 to-gray-800/80 rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500"
                    >
                      <div className="flex flex-col lg:flex-row gap-8">
                        {/* Service Icon */}
                        <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          {getServiceIcon(service.category)}
                        </div>

                        {/* Service Content */}
                        <div className="flex-1 space-y-4">
                          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                            <div>
                              <h3 className="text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 mb-2">
                                {service.name}
                              </h3>
                              <p className="text-gray-300 text-xl leading-relaxed">
                                {service.tagline}
                              </p>
                            </div>
                            
                            <div className="text-right">
                              <span className="text-4xl font-bold text-cyan-400 block">
                                {service.price}
                              </span>
                              <div className="flex items-center justify-end gap-2 mt-2">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-5 h-5 ${
                                      i < Math.floor(service.rating)
                                        ? 'text-yellow-400 fill-current'
                                        : 'text-gray-600'
                                    }`}
                                  />
                                ))}
                                <span className="text-gray-400 text-sm ml-2">
                                  ({service.reviews})
                                </span>
                              </div>
                            </div>
                          </div>
                          
                          <p className="text-gray-400 leading-relaxed text-lg">
                            {service.description}
                          </p>

                          {/* Features and Benefits */}
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div>
                              <h4 className="font-semibold text-white text-lg mb-3">Key Features:</h4>
                              <ul className="space-y-2">
                                {service.features.map((feature, idx) => (
                                  <li key={idx} className="text-gray-400 flex items-center gap-2">
                                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold text-white text-lg mb-3">Benefits:</h4>
                              <ul className="space-y-2">
                                {service.benefits.map((benefit, idx) => (
                                  <li key={idx} className="text-gray-400 flex items-center gap-2">
                                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                    {benefit}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          {/* Contact and CTA */}
                          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 pt-6 border-t border-gray-700/50">
                            <div className="flex items-center gap-6 text-sm text-gray-400">
                              <div className="flex items-center gap-2">
                                <Phone className="w-4 h-4" />
                                {service.contactInfo.phone}
                              </div>
                              <div className="flex items-center gap-2">
                                <Mail className="w-4 h-4" />
                                {service.contactInfo.email}
                              </div>
                              <div className="flex items-center gap-2">
                                <Globe className="w-4 h-4" />
                                {service.contactInfo.website}
                              </div>
                            </div>
                            
                            <Link href={service.link}>
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                              >
                                Explore Service
                              </motion.button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
                Ready to Transform Your Business with{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  2046 Technology?
                </span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                Join the future of technology with our innovative 2046 services. 
                Contact us today to discuss how we can help you implement cutting-edge 
                solutions that will give you a competitive advantage.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full flex items-center gap-2 hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300"
                  >
                    <Phone className="w-5 h-5" />
                    Get Started Today
                  </motion.button>
                </Link>
                
                <Link href="/services">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-4 border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-full flex items-center gap-2 hover:bg-cyan-500/10 transition-all duration-300"
                  >
                    <ArrowRight className="w-5 h-5" />
                    View All Services
                  </motion.button>
                </Link>
              </div>

              {/* Contact Information */}
              <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                  <p className="text-cyan-400 font-medium">+1 302 464 0950</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                  <p className="text-cyan-400 font-medium">kleber@ziontechgroup.com</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
                  <p className="text-cyan-400 font-medium">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

// Helper function to get appropriate icon for service category
function getServiceIcon(category: string) {
  const categoryLower = category.toLowerCase();
  
  if (categoryLower.includes('neural') || categoryLower.includes('ai')) return <Brain className="w-8 h-8 text-white" />;
  if (categoryLower.includes('quantum')) return <Quantum className="w-8 h-8 text-white" />;
  if (categoryLower.includes('robotics') || categoryLower.includes('autonomous')) return <Robot className="w-8 h-8 text-white" />;
  if (categoryLower.includes('climate') || categoryLower.includes('environmental')) return <Climate className="w-8 h-8 text-white" />;
  if (categoryLower.includes('financial') || categoryLower.includes('finance')) return <Finance className="w-8 h-8 text-white" />;
  if (categoryLower.includes('smart home') || categoryLower.includes('home')) return <Home className="w-8 h-8 text-white" />;
  if (categoryLower.includes('fitness') || categoryLower.includes('health')) return <Fitness className="w-8 h-8 text-white" />;
  if (categoryLower.includes('project')) return <Project className="w-8 h-8 text-white" />;
  if (categoryLower.includes('support') || categoryLower.includes('customer')) return <Support className="w-8 h-8 text-white" />;
  if (categoryLower.includes('cybersecurity') || categoryLower.includes('security')) return <Shield className="w-8 h-8 text-white" />;
  if (categoryLower.includes('edge') || categoryLower.includes('computing')) return <Cpu className="w-8 h-8 text-white" />;
  if (categoryLower.includes('devops')) return <Code className="w-8 h-8 text-white" />;
  
  return <Star className="w-8 h-8 text-white" />;
}

export default Innovative2046FuturisticServicesShowcase;