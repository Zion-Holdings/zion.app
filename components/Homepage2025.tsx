import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Layout from './layout/Layout';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Brain, Atom, Shield, Zap, Search, MessageCircle, Phone, Mail,
  ChevronDown, Star, TrendingUp, Users, Globe, Rocket, Cpu, Database
} from 'lucide-react';
import PerformanceOptimizer from './PerformanceOptimizer';
import SEOEnhancer from './SEOEnhancer';

/* eslint-disable no-undef */
const Homepage2025: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [showFloatingActions, setShowFloatingActions] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Memoized animation variants for better performance
  const fadeInUp = useMemo(() => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  }), []);

  const staggerContainer = useMemo(() => ({
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }), []);

  // Intersection Observer for animations and section tracking
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute('data-section');
            if (sectionId) {
              setActiveSection(sectionId);
            }
          }
        });
      },
      { threshold: 0.3, rootMargin: '-50px' }
    );

    const sections = document.querySelectorAll('[data-section]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Simulate loading state with better UX
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Show floating actions after scroll with throttling
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setShowFloatingActions(window.scrollY > 300);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Memoized search suggestions
  const searchSuggestions = useMemo(() => [
    'AI Consciousness Evolution',
    'Quantum Neural Networks',
    'Space Resource Mining',
    'Autonomous Business Operations',
    'Brain-Computer Interface'
  ], []);

  // Handle search with better UX
  const handleSearch = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Implement search functionality
      console.log('Searching for:', searchQuery);
    }
  }, [searchQuery]);

  // Enhanced loading component
  if (isLoading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center bg-black">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full mx-auto mb-6 animate-pulse"></div>
              <div className="absolute inset-0 w-24 h-24 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full animate-ping opacity-20"></div>
            </div>
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-3xl font-bold text-white mb-3"
            >
              Loading Zion Tech Group
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-400 text-lg"
            >
              Preparing the future of technology...
            </motion.p>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-6 flex justify-center space-x-2"
            >
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* SEO Enhancement */}
      <SEOEnhancer 
        title="Zion Tech Group - Future Technology Solutions"
        description="Zion Tech Group delivers cutting-edge AI, quantum computing, and space technology solutions that transform businesses and drive innovation across industries."
        keywords={[
          'AI Technology',
          'Quantum Computing', 
          'Space Technology',
          'Machine Learning',
          'Artificial Intelligence',
          'Technology Solutions',
          'Enterprise IT',
          'Digital Transformation',
          'Innovation',
          'Future Technology'
        ]}
        image="/og-image.jpg"
        url="https://ziontechgroup.com"
        type="website"
      />

      {/* Hero Section */}
      <section 
        data-section="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Enhanced Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 left-20 w-32 h-32 border border-cyan-500/20 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-40 right-32 w-24 h-24 border border-purple-500/20 rounded-full"
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-32 left-1/4 w-20 h-20 border border-blue-500/20 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 right-1/3 w-28 h-28 border border-green-500/20 rounded-full"
          />
          {/* New floating particles */}
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-1/3 left-1/2 w-2 h-2 bg-pink-400 rounded-full"
          />
          <motion.div
            animate={{ 
              y: [0, 15, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-cyan-400 rounded-full"
          />
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
            >
              The Future of
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Technology
              </span>
              is Here
            </motion.h1>
            
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
            >
              Zion Tech Group delivers cutting-edge AI, quantum computing, and space technology solutions that transform businesses and drive innovation across industries.
            </motion.p>

            {/* Enhanced Search Bar */}
            <motion.div
              variants={fadeInUp}
              className="relative max-w-2xl mx-auto mb-8"
            >
              <form onSubmit={handleSearch} className="relative">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search our services, solutions, or expertise..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                    className="w-full pl-14 pr-6 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                  />
                  <button 
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
                  >
                    Search
                  </button>
                </div>
                
                {/* Search Suggestions */}
                <AnimatePresence>
                  {isSearchFocused && searchQuery.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-0 right-0 mt-2 bg-gray-900/95 backdrop-blur-xl border border-white/20 rounded-lg overflow-hidden z-50"
                    >
                      {searchSuggestions
                        .filter(suggestion => 
                          suggestion.toLowerCase().includes(searchQuery.toLowerCase())
                        )
                        .map((suggestion, index) => (
                          <button
                            key={index}
                            onClick={() => setSearchQuery(suggestion)}
                            className="w-full px-4 py-3 text-left text-white hover:bg-white/10 transition-colors duration-200 flex items-center space-x-3"
                          >
                            <Search className="w-4 h-4 text-gray-400" />
                            <span>{suggestion}</span>
                          </button>
                        ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>

            {/* Enhanced CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Link
                href="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                href="/demo"
                className="group border border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 backdrop-blur-md hover:bg-white/10 flex items-center justify-center space-x-2"
              >
                <span>Request Demo</span>
                <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
              </Link>
            </motion.div>

            {/* Enhanced Quick Stats */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
            >
              {[
                { number: '500+', label: 'Projects Delivered', icon: Star, color: 'cyan' },
                { number: '50+', label: 'AI Solutions', icon: Brain, color: 'purple' },
                { number: '25+', label: 'Quantum Services', icon: Atom, color: 'blue' },
                { number: '99.9%', label: 'Uptime SLA', icon: Shield, color: 'green' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="text-center group"
                >
                  <div className={`text-3xl md:text-4xl font-bold text-${stat.color}-400 mb-2 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm flex items-center justify-center space-x-2">
                    <stat.icon className="w-4 h-4" />
                    <span>{stat.label}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-400 text-sm flex flex-col items-center space-y-2"
          >
            <span>Scroll to explore</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </section>

      {/* Enhanced Services Preview */}
      <section 
        data-section="services"
        className="py-20 px-4 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Technology Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From AI consciousness evolution to quantum space mining, we're building the future today.
            </p>
          </motion.div>

          {/* Enhanced Service Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'AI & Consciousness',
                description: 'Revolutionary AI platforms that evolve and adapt',
                icon: Brain,
                color: 'cyan',
                features: ['Consciousness Evolution', 'Emotional Intelligence', 'Autonomous Operations']
              },
              {
                title: 'Quantum Technology',
                description: 'Breakthrough quantum computing solutions',
                icon: Atom,
                color: 'purple',
                features: ['Neural Networks', 'Financial Trading', 'Materials Discovery']
              },
              {
                title: 'Space Technology',
                description: 'Next-generation space exploration and mining',
                icon: Rocket,
                color: 'blue',
                features: ['Resource Mining', 'AI-Powered Systems', 'Colonization Services']
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-r from-${category.color}-500 to-${category.color}-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
                <p className="text-gray-300 mb-6">{category.description}</p>
                <ul className="space-y-2">
                  {category.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-gray-400">
                      <div className={`w-2 h-2 bg-${category.color}-400 rounded-full`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New Interactive Features Section */}
      <section 
        data-section="features"
        className="py-20 px-4 bg-black"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Interactive
              <span className="block bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Technology Showcase
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience our cutting-edge solutions through interactive demonstrations and real-time analytics.
            </p>
          </motion.div>

          {/* Interactive Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-white">Real-Time AI Analytics</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Monitor your AI systems in real-time with our advanced analytics dashboard. 
                  Track performance, identify bottlenecks, and optimize operations instantly.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Response Time', value: '< 50ms', color: 'green' },
                  { label: 'Accuracy', value: '99.7%', color: 'blue' },
                  { label: 'Uptime', value: '99.99%', color: 'purple' },
                  { label: 'Efficiency', value: '94.2%', color: 'cyan' }
                ].map((metric, index) => (
                  <div key={index} className="bg-gray-900/50 p-4 rounded-lg border border-white/10">
                    <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                    <div className="text-sm text-gray-400">{metric.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-white/10">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-white font-semibold">AI Performance Monitor</h4>
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  </div>
                  <div className="space-y-3">
                    {[
                      { name: 'Neural Processing', value: 87, color: 'cyan' },
                      { name: 'Memory Usage', value: 64, color: 'purple' },
                      { name: 'Learning Rate', value: 92, color: 'green' },
                      { name: 'Adaptation Speed', value: 78, color: 'blue' }
                    ].map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-300">{item.name}</span>
                          <span className="text-white">{item.value}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.value}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`h-2 bg-gradient-to-r from-${item.color}-400 to-${item.color}-600 rounded-full`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action */}
      <section 
        data-section="cta"
        className="py-20 px-4 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Your Business?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the future of technology with Zion Tech Group. Our AI-powered solutions are designed to scale with your business and drive unprecedented growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Start Your Journey</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                href="/demo"
                className="group border border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 backdrop-blur-md hover:bg-white/10 flex items-center justify-center space-x-2"
              >
                <span>Schedule Demo</span>
                <Rocket className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floating Action Buttons */}
      <AnimatePresence>
        {showFloatingActions && (
          <>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: -100 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: -100 }}
              className="fixed bottom-24 left-4 z-50"
            >
              <Link
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white p-4 rounded-full shadow-2xl shadow-cyan-500/25 hover:scale-110 transition-all duration-300 flex items-center justify-center"
                aria-label="Quick Contact"
              >
                <MessageCircle className="w-6 h-6" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 100 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: 100 }}
              className="fixed bottom-24 right-4 z-50"
            >
              <Link
                href="/demo"
                className="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-4 rounded-full shadow-2xl shadow-purple-500/25 hover:scale-110 transition-all duration-300 flex items-center justify-center"
                aria-label="Quick Demo"
              >
                <Rocket className="w-6 h-6" />
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Performance Optimizer */}
      <PerformanceOptimizer 
        onOptimizationComplete={(metrics) => {
          console.log('Performance optimization completed:', metrics);
        }}
      />
    </Layout>
  );
};

export default Homepage2025;