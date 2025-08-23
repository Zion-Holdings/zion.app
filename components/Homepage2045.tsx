import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Layout from './layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Play, Star, Users, Award, TrendingUp, Brain, Shield, Rocket, 
  Loader2, ChevronDown, Zap, Globe, Lock, Cpu, Database, Cloud, Palette, Heart,
  Phone, Mail, MapPin, Search, Grid, List, Sparkles, Target, BarChart3, 
  Lightbulb, Code, Server, Network, ShieldCheck, BrainCircuit, Atom, Satellite,
  CheckCircle, ArrowUpRight, Clock, DollarSign
} from 'lucide-react';
import Link from 'next/link';

// Import our new innovative services
import { innovative2045AdvancedServices } from '../data/innovative-2045-advanced-services';
import { innovative2045ITServices } from '../data/innovative-2045-it-services';
import { innovative2045MicroSAASServices } from '../data/innovative-2045-micro-saas-services';

// Enhanced loading fallback component with better accessibility
const LoadingFallback = () => (
  <div 
    className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden"
    role="status"
    aria-label="Loading Zion Tech Group website"
  >
    {/* Animated background particles */}
    <div className="absolute inset-0" aria-hidden="true">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full"
          animate={{
            x: [0, Math.random() * 1000],
            y: [0, Math.random() * 1000],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "linear"
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
      transition={{ duration: 0.8 }}
      className="text-center relative z-10"
    >
      <div className="relative">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-24 h-24 mx-auto mb-6"
          aria-hidden="true"
        >
          <div className="w-full h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute inset-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
            <Brain className="w-12 h-12 text-white" />
          </div>
        </motion.div>
      </div>
      <motion.h1 
        className="text-3xl font-bold text-white mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Loading Zion Tech Group 2045...
      </motion.h1>
      <p className="text-lg text-gray-300 mb-2">Preparing your futuristic digital transformation journey</p>
      <p className="text-sm text-gray-400">Quantum AI • Neural Interfaces • Space Technology</p>
    </motion.div>
  </div>
);

const Homepage2045: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Memoize expensive computations
  const allServices = useMemo(() => [
    ...innovative2045AdvancedServices,
    ...innovative2045ITServices,
    ...innovative2045MicroSAASServices
  ], []);

  const filteredServices = useMemo(() => {
    return allServices.filter(service => {
      const matchesCategory = selectedCategory === 'all' || service.category.includes(selectedCategory);
      const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [allServices, selectedCategory, searchQuery]);

  const categories = useMemo(() => ['all', 'AI', 'Quantum', 'IT', 'Micro SAAS', 'Cybersecurity', 'Space', 'Blockchain'], []);

  // Performance optimization: Debounced search
  const debouncedSearch = useCallback(
    (() => {
      let timeoutId: NodeJS.Timeout;
      return (value: string) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => setSearchQuery(value), 300);
      };
    })(),
    []
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsVisible(true);
    }, 800); // Reduced loading time for better UX

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
        { threshold: 0.3, rootMargin: '-100px' }
      );

      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => observer.observe(section));

      return () => observer.disconnect();
    }
  }, []);

  // Enhanced animations with better performance
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const backgroundVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 1.2, ease: "easeOut" }
  };

  const getColorClasses = (index: number) => {
    const colors = [
      'from-cyan-400 to-blue-500',
      'from-purple-400 to-pink-500',
      'from-emerald-400 to-teal-500',
      'from-orange-400 to-red-500',
      'from-indigo-400 to-purple-500',
      'from-yellow-400 to-orange-500'
    ];
    return colors[index % colors.length];
  };

  if (isLoading) {
    return <LoadingFallback />;
  }

  return (
    <Layout>
      <AnimatePresence>
        {isVisible && (
          <div className="relative min-h-screen">
            {/* Enhanced Animated Background */}
            <div className="fixed inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900"></div>
              
              {/* Floating geometric shapes with reduced count for better performance */}
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-32 h-32 border border-cyan-400/20 rounded-lg"
                  animate={{
                    x: [0, Math.random() * 100 - 50],
                    y: [0, Math.random() * 100 - 50],
                    rotate: [0, 360],
                    opacity: [0.1, 0.3, 0.1],
                  }}
                  transition={{
                    duration: Math.random() * 10 + 10,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    left: Math.random() * 100 + '%',
                    top: Math.random() * 100 + '%',
                  }}
                  aria-hidden="true"
                />
              ))}
              
              {/* Animated particles with reduced count */}
              {[...Array(60)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
                  animate={{
                    y: [0, -1000],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: Math.random() * 5 + 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    left: Math.random() * 100 + '%',
                    top: '100%',
                  }}
                  aria-hidden="true"
                />
              ))}
            </div>

            {/* Enhanced Hero Section */}
            <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 py-20">
              <div className="max-w-7xl mx-auto text-center relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="mb-8"
                >
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="inline-block p-4 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 border border-cyan-400/30 mb-6"
                    aria-hidden="true"
                  >
                    <Sparkles className="w-12 h-12 text-cyan-400" />
                  </motion.div>
                  
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                      Zion Tech Group
                    </span>
                  </h1>
                  
                  <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
                    <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                      2045
                    </span>
                  </h2>
                  
                  <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                    Pioneering the future with revolutionary AI, quantum computing, and space technology solutions. 
                    Transform your business with cutting-edge innovations that define tomorrow.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full text-lg shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-2 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
                    aria-label="Explore our services"
                  >
                    <Rocket className="w-5 h-5" />
                    Explore Services
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-full text-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center gap-2 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
                    aria-label="Watch our demo video"
                  >
                    <Play className="w-5 h-5" />
                    Watch Demo
                  </motion.button>
                </motion.div>

                {/* Enhanced Floating stats */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 mt-16 lg:mt-20"
                >
                  {[
                    { icon: Users, value: '2,500+', label: 'Enterprise Clients', color: 'from-cyan-400 to-blue-500' },
                    { icon: Award, value: '99.9%', label: 'Uptime SLA', color: 'from-emerald-400 to-teal-500' },
                    { icon: TrendingUp, value: '500%', label: 'Performance Boost', color: 'from-purple-400 to-pink-500' },
                    { icon: Star, value: '4.9/5', label: 'Customer Rating', color: 'from-yellow-400 to-orange-500' }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="text-center p-4 lg:p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300"
                    >
                      <div className={`inline-block p-3 rounded-full bg-gradient-to-r ${stat.color}/20 mb-4`}>
                        <stat.icon className="w-6 h-6 lg:w-8 lg:h-8 text-cyan-400" />
                      </div>
                      <div className="text-2xl lg:text-3xl font-bold text-white mb-2">{stat.value}</div>
                      <div className="text-sm lg:text-base text-gray-300">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </section>

            {/* Enhanced Services Section */}
            <section id="services" className="relative py-20 px-4">
              <div className="max-w-7xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                      Revolutionary Services
                    </span>
                  </h2>
                  <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                    Discover our cutting-edge portfolio of AI, quantum computing, and space technology solutions 
                    that are reshaping industries and defining the future.
                  </p>
                </motion.div>

                {/* Enhanced Category Filter */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex flex-wrap justify-center gap-3 lg:gap-4 mb-12"
                >
                  {categories.map((category) => (
                    <motion.button
                      key={category}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 lg:px-6 py-2 lg:py-3 rounded-full font-medium transition-all duration-300 text-sm lg:text-base ${
                        selectedCategory === category
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                          : 'bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10'
                      }`}
                      aria-label={`Filter services by ${category}`}
                    >
                      {category}
                    </motion.button>
                  ))}
                </motion.div>

                {/* Enhanced Search Bar */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="max-w-2xl mx-auto mb-12"
                >
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search for innovative services..."
                      defaultValue={searchQuery}
                      onChange={(e) => debouncedSearch(e.target.value)}
                      onFocus={() => setIsSearchFocused(true)}
                      onBlur={() => setIsSearchFocused(false)}
                      className={`w-full px-12 py-4 bg-white/5 border rounded-full text-white placeholder-gray-400 focus:outline-none transition-all duration-300 ${
                        isSearchFocused ? 'border-cyan-400 shadow-lg shadow-cyan-400/25' : 'border-white/10'
                      }`}
                      aria-label="Search services"
                    />
                  </div>
                </motion.div>

                {/* Enhanced Services Grid */}
                <motion.div
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                >
                  {filteredServices.slice(0, 9).map((service, index) => (
                    <motion.div
                      key={service.id}
                      variants={fadeInUp}
                      whileHover={{ 
                        scale: 1.02,
                        y: -10,
                        boxShadow: "0 25px 50px -12px rgba(6, 182, 212, 0.25)"
                      }}
                      className="group relative p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-500"
                    >
                      {/* Service Icon */}
                      <div className="inline-block p-4 rounded-2xl bg-gradient-to-r from-cyan-400/20 to-blue-500/20 mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Brain className="w-8 h-8 text-cyan-400" />
                      </div>

                      {/* Service Content */}
                      <div className="mb-6">
                        <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                          {service.name}
                        </h3>
                        <p className="text-gray-300 mb-4 leading-relaxed text-sm lg:text-base">
                          {service.description}
                        </p>
                        
                        {/* Enhanced Price Display */}
                        <div className="flex items-center gap-2 mb-4">
                          <DollarSign className="w-5 h-5 text-cyan-400" />
                          <span className="text-xl lg:text-2xl font-bold text-cyan-400">
                            {service.price}
                          </span>
                        </div>

                        {/* Category Badge */}
                        <div className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-purple-400/20 to-pink-500/20 text-purple-300 border border-purple-400/30">
                          {service.category}
                        </div>
                      </div>

                      {/* Enhanced Features Preview */}
                      <div className="mb-6">
                        <h4 className="text-base lg:text-lg font-semibold text-white mb-3 flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-emerald-400" />
                          Key Features:
                        </h4>
                        <ul className="space-y-2">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Enhanced Stats */}
                      <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span>{service.rating}</span>
                          <span className="text-gray-500">({service.reviews})</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4 text-cyan-400" />
                          <span>{service.customers}</span>
                        </div>
                      </div>

                      {/* Enhanced CTA Button */}
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center gap-2 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
                        aria-label={`Learn more about ${service.name}`}
                      >
                        Learn More
                        <ArrowUpRight className="w-4 h-4" />
                      </motion.button>

                      {/* Enhanced Hover Effect Overlay */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Enhanced View All Services Button */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center mt-16"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold rounded-full text-lg shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 flex items-center gap-3 mx-auto focus:outline-none focus:ring-4 focus:ring-purple-400/50"
                    aria-label="View all available services"
                  >
                    <Grid className="w-5 h-5" />
                    View All Services
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </motion.div>
              </div>
            </section>

            {/* Enhanced Contact Section */}
            <section id="contact" className="relative py-20 px-4">
              <div className="max-w-4xl mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                      Ready to Transform?
                    </span>
                  </h2>
                  <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                    Join the future of technology with Zion Tech Group. Let's build tomorrow together.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
                    {[
                      { icon: Phone, label: 'Phone', value: '+1 302 464 0950', href: 'tel:+13024640950' },
                      { icon: Mail, label: 'Email', value: 'kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com' },
                      { icon: MapPin, label: 'Address', value: '364 E Main St STE 1008, Middletown DE 19709', href: '#' }
                    ].map((contact, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300"
                      >
                        <div className="inline-block p-3 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 mb-4">
                          <contact.icon className="w-6 h-6 text-cyan-400" />
                        </div>
                        <div className="text-lg font-semibold text-white mb-2">{contact.label}</div>
                        {contact.href && contact.href !== '#' ? (
                          <a 
                            href={contact.href}
                            className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 break-words"
                            aria-label={`${contact.label}: ${contact.value}`}
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <div className="text-gray-300 break-words">{contact.value}</div>
                        )}
                      </motion.div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full text-xl shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-3 mx-auto focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
                    aria-label="Start your transformation journey with Zion Tech Group"
                  >
                    <Rocket className="w-6 h-6" />
                    Start Your Journey
                    <ArrowRight className="w-6 h-6" />
                  </motion.button>
                </motion.div>
              </div>
            </section>
          </div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Homepage2045;