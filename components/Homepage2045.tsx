import React, { useState, useEffect, useMemo, useCallback } from 'react';
import dynamic from 'next/dynamic';
import Layout from './layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Play, Star, Users, Award, TrendingUp, Brain, Rocket, 
  ChevronDown, Search, Grid, Sparkles, 
  Accessibility, Eye
} from 'lucide-react';

// Import our new innovative services
import { innovative2045AdvancedServices } from '../data/innovative-2045-advanced-services';
import { innovative2045ITServices } from '../data/innovative-2045-it-services';
import { innovative2045MicroSAASServices } from '../data/innovative-2045-micro-saas-services';

// Lazy load heavy components for better performance
const ServiceCard = dynamic(() => import('./ServiceCard'), {
  loading: () => <div className="animate-pulse bg-gray-800 rounded-lg h-64" />,
  ssr: false
});

const ContactForm = dynamic(() => import('./ContactForm'), {
  loading: () => <div className="animate-pulse bg-gray-800 rounded-lg h-96" />,
  ssr: false
});

// Enhanced loading fallback with better accessibility
const LoadingFallback = () => (
  <div 
    className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden"
    role="status"
    aria-live="polite"
    aria-label="Loading Zion Tech Group website"
  >
    {/* Animated background particles */}
    <div className="absolute inset-0" aria-hidden="true">
      {[...Array(50)].map((_, i) => (
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
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isAccessibilityMode, setIsAccessibilityMode] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isHighContrast, setIsHighContrast] = useState(false);

  // Memoize expensive computations
  const allServices = useMemo(() => [
    ...innovative2045AdvancedServices,
    ...innovative2045ITServices,
    ...innovative2045MicroSAASServices
  ], []);

  const filteredServices = useMemo(() => 
    allServices.filter(service => {
      const matchesCategory = selectedCategory === 'all' || service.category.includes(selectedCategory);
      const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    }), [allServices, selectedCategory, searchQuery]
  );

  const categories = useMemo(() => 
    ['all', 'AI', 'Quantum', 'IT', 'Micro SAAS', 'Cybersecurity', 'Space', 'Blockchain'], 
    []
  );

  // Accessibility preferences
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setIsReducedMotion(prefersReducedMotion);
  }, []);

  // Performance optimization with debounced search
  const debouncedSearch = useCallback(
    (() => {
      let timeoutId: NodeJS.Timeout;
      return (query: string) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => setSearchQuery(query), 300);
      };
    })(),
    []
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Enhanced Intersection Observer for better performance
  useEffect(() => {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new (window as any).IntersectionObserver(
        (entries: any[]) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Handle intersection if needed
            }
          });
        },
        { 
          threshold: 0.3, 
          rootMargin: '-100px',
          // Use passive listeners for better performance
          passive: true
        }
      );

      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => observer.observe(section));

      return () => observer.disconnect();
    }
  }, []);

  // Enhanced animation variants with accessibility support
  const fadeInUp = {
    initial: { opacity: 0, y: isReducedMotion ? 0 : 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: isReducedMotion ? 0.1 : 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: isReducedMotion ? 0 : 0.1,
        delayChildren: isReducedMotion ? 0 : 0.2
      }
    }
  };

  // Accessibility toggle handlers
  const toggleAccessibilityMode = useCallback(() => {
    setIsAccessibilityMode(prev => !prev);
    document.documentElement.classList.toggle('accessibility-mode');
  }, []);

  const toggleHighContrast = useCallback(() => {
    setIsHighContrast(prev => !prev);
    document.documentElement.classList.toggle('high-contrast');
  }, []);

  if (isLoading) {
    return <LoadingFallback />;
  }

  return (
    <Layout>
      <AnimatePresence>
        {isVisible && (
          <div className="relative min-h-screen">
            {/* Accessibility Controls */}
            <div className="fixed top-20 right-4 z-50 flex flex-col gap-2">
              <button
                onClick={toggleAccessibilityMode}
                className={`p-3 rounded-full shadow-lg transition-all duration-300 ${
                  isAccessibilityMode 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
                aria-label={`${isAccessibilityMode ? 'Disable' : 'Enable'} accessibility mode`}
                title="Accessibility Mode"
              >
                <Accessibility className="w-5 h-5" />
              </button>
              <button
                onClick={toggleHighContrast}
                className={`p-3 rounded-full shadow-lg transition-all duration-300 ${
                  isHighContrast 
                    ? 'bg-yellow-600 text-black' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
                aria-label={`${isHighContrast ? 'Disable' : 'Enable'} high contrast mode`}
                title="High Contrast"
              >
                <Eye className="w-5 h-5" />
              </button>
            </div>

            {/* Animated Background with performance optimizations */}
            <div className="fixed inset-0 -z-10" aria-hidden="true">
              <div className={`absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 ${
                isHighContrast ? 'contrast-150' : ''
              }`}></div>
              
              {/* Floating geometric shapes - reduced for performance */}
              {!isReducedMotion && [...Array(10)].map((_, i) => (
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
                />
              ))}
              
              {/* Animated particles - reduced count for performance */}
              {!isReducedMotion && [...Array(50)].map((_, i) => (
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
                />
              ))}
            </div>

            {/* Hero Section */}
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
                  >
                    <Sparkles className="w-12 h-12 text-cyan-400" />
                  </motion.div>
                  
                  <h1 className="text-6xl md:text-8xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                      Zion Tech Group
                    </span>
                  </h1>
                  
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                    <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                      2045
                    </span>
                  </h2>
                  
                  <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
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
                    className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full text-lg shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-2"
                  >
                    <Rocket className="w-5 h-5" />
                    Explore Services
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-full text-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center gap-2"
                  >
                    <Play className="w-5 h-5" />
                    Watch Demo
                  </motion.button>
                </motion.div>

                {/* Floating stats */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-20"
                >
                  {[
                    { icon: Users, value: '2,500+', label: 'Enterprise Clients' },
                    { icon: Award, value: '99.9%', label: 'Uptime SLA' },
                    { icon: TrendingUp, value: '500%', label: 'Performance Boost' },
                    { icon: Star, value: '4.9/5', label: 'Customer Rating' }
                  ].map((stat) => (
                    <motion.div
                      key={stat.label}
                      whileHover={{ scale: 1.05 }}
                      className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm"
                    >
                      <div className="inline-block p-3 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 mb-4">
                        <stat.icon className="w-8 h-8 text-cyan-400" />
                      </div>
                      <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                      <div className="text-gray-300">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-20 px-4">
              <div className="max-w-7xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                      Revolutionary Services
                    </span>
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Experience the future of technology with our cutting-edge AI, quantum computing, and space technology solutions.
                  </p>
                </motion.div>

                {/* Search and Filter */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="mb-12"
                >
                  <div className="max-w-2xl mx-auto">
                    <div className="relative">
                      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search for innovative services..."
                        value={searchQuery}
                        onChange={(e) => debouncedSearch(e.target.value)}
                        className="w-full px-12 py-4 bg-white/5 border border-white/10 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Category Filter */}
                  <div className="flex flex-wrap justify-center gap-3 mt-6">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-6 py-2 rounded-full transition-all duration-300 ${
                          selectedCategory === category
                            ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                            : 'bg-white/5 text-gray-300 hover:bg-white/10'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                  variants={staggerContainer}
                  initial="initial"
                  animate="animate"
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {filteredServices.slice(0, 9).map((service) => (
                    <motion.div
                      key={service.id}
                      variants={fadeInUp}
                      className="group"
                    >
                      <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-sm">
                        <div className="flex items-start justify-between mb-4">
                          <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-400/20 to-blue-500/20">
                            <Star className="w-6 h-6 text-cyan-400" />
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                          {service.name}
                        </h3>
                        
                        <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                          {service.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {service.category.slice(0, 3).map((cat) => (
                            <span
                              key={cat}
                              className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600/50"
                            >
                              {cat}
                            </span>
                          ))}
                        </div>
                        
                        <button className="w-full py-3 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg group-hover:shadow-cyan-500/25">
                          Learn More
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* View All Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-center mt-12"
                >
                  <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-full text-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center gap-2 mx-auto">
                    View All Services
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </motion.div>
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 px-4">
              <div className="max-w-7xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                      Ready to Transform?
                    </span>
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Let's discuss how our revolutionary technology solutions can drive your business into the future.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="max-w-4xl mx-auto"
                >
                  <ContactForm isReducedMotion={isReducedMotion} />
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