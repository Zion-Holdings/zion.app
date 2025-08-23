import React, { useState, useEffect, useCallback } from 'react';
import Layout from './layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, Star, Users, Award, TrendingUp, Brain, Shield, Rocket, Loader2, ChevronDown, Sparkles, Globe, Zap } from 'lucide-react';

// Enhanced Loading fallback component with better UX
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center relative"
    >
      <div className="relative mb-6">
        <Loader2 className="w-16 h-16 text-cyan-400 animate-spin mx-auto" />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 border-2 border-cyan-400/30 rounded-full"
        />
      </div>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-xl text-gray-300 mb-2 font-semibold"
      >
        Loading Zion Tech Group...
      </motion.p>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-sm text-gray-500"
      >
        Preparing your digital transformation journey
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="mt-4 flex justify-center space-x-2"
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
            className="w-2 h-2 bg-cyan-400 rounded-full"
          />
        ))}
      </motion.div>
    </motion.div>
  </div>
);

const Homepage2025: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [currentSection, setCurrentSection] = useState('hero');

  // Optimized loading with better timing
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Small delay for smooth transition
      setTimeout(() => setIsVisible(true), 100);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  // Enhanced Intersection Observer for better performance and navigation
  useEffect(() => {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new (window as any).IntersectionObserver(
        (entries: any[]) => {
          entries.forEach((entry: any) => {
            if (entry.isIntersecting) {
              setCurrentSection(entry.target.id);
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

  // Smooth scroll to section
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  // Enhanced animation variants
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
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 1.5, ease: "easeOut" as const }
    }
  };

  // Enhanced color mapping for dynamic classes
  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      cyan: 'text-cyan-400',
      blue: 'text-blue-400',
      purple: 'text-purple-400',
      emerald: 'text-emerald-400',
      pink: 'text-pink-400',
      orange: 'text-orange-400'
    };
    return colorMap[color] || 'text-cyan-400';
  };

  if (isLoading) {
    return <LoadingFallback />;
  }

  return (
    <Layout>
      {/* Enhanced Skip to main content link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-500 text-white px-4 py-2 rounded-lg z-50 font-semibold shadow-lg transition-all duration-200 hover:bg-cyan-600"
      >
        Skip to main content
      </a>

      {/* Enhanced Progress Indicator */}
      <motion.div 
        className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <motion.div 
          className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
        />
      </motion.div>

      {/* Main Content */}
      <main id="main-content" className="relative z-10" role="main" aria-label="Zion Tech Group Homepage">
        {/* Enhanced Hero Section */}
        <section 
          id="hero"
          className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
          aria-labelledby="hero-heading"
        >
          {/* Enhanced Background Elements with better performance and visual appeal */}
          <motion.div 
            className="absolute inset-0 -z-10"
            variants={backgroundVariants}
            initial="initial"
            animate="animate"
            aria-hidden="true"
          >
            <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
            <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-emerald-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
            <div className="absolute bottom-1/4 left-1/4 w-56 h-56 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-300"></div>
          </motion.div>

          <AnimatePresence>
            {isVisible && (
              <motion.div 
                className="text-center max-w-6xl mx-auto"
                initial="initial"
                animate="animate"
                variants={staggerContainer}
                exit={{ opacity: 0, y: -50 }}
              >
                <motion.div variants={fadeInUp}>
                  <div className="relative mb-6">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 w-24 h-24 border border-cyan-400/30 rounded-full mx-auto"
                    />
                    <Sparkles className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                  </div>
                  <h1 
                    id="hero-heading"
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight"
                  >
                    Zion Tech Group
                  </h1>
                </motion.div>
                
                <motion.div variants={fadeInUp}>
                  <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                    Pioneering the future of technology with innovative solutions that drive business transformation and unlock human potential
                  </p>
                </motion.div>

                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12"
                  variants={fadeInUp}
                >
                  <button 
                    className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center justify-center gap-2 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-gray-900"
                    aria-label="Get started with Zion Tech Group services"
                    onClick={() => scrollToSection('services')}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                  <button 
                    className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 focus:ring-offset-2 focus:ring-offset-gray-900"
                    aria-label="Learn more about Zion Tech Group"
                    onClick={() => scrollToSection('about')}
                  >
                    <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                    Learn More
                  </button>
                </motion.div>

                {/* Enhanced Social Proof with better mobile layout and animations */}
                <motion.div 
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 text-gray-400"
                  variants={fadeInUp}
                >
                  <motion.div 
                    className="flex flex-col items-center gap-3 p-4 sm:p-6 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:bg-gray-800/50 group"
                    whileHover={{ y: -5, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Users className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400 group-hover:scale-110 transition-transform" />
                    <span className="text-base sm:text-lg font-semibold">500+ Clients</span>
                    <span className="text-xs sm:text-sm text-gray-500">Worldwide</span>
                  </motion.div>
                  <motion.div 
                    className="flex flex-col items-center gap-3 p-4 sm:p-6 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 hover:bg-gray-800/50 group"
                    whileHover={{ y: -5, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Award className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 group-hover:scale-110 transition-transform" />
                    <span className="text-base sm:text-lg font-semibold">Industry Leader</span>
                    <span className="text-xs sm:text-sm text-gray-500">2024</span>
                  </motion.div>
                  <motion.div 
                    className="flex flex-col items-center gap-3 p-4 sm:p-6 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-purple-400/50 transition-all duration-300 hover:bg-gray-800/50 sm:col-span-2 lg:col-span-1 group"
                    whileHover={{ y: -5, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400 group-hover:scale-110 transition-transform" />
                    <span className="text-base sm:text-lg font-semibold">99.9% Uptime</span>
                    <span className="text-xs sm:text-sm text-gray-500">Guaranteed</span>
                  </motion.div>
                </motion.div>

                {/* Enhanced Scroll indicator with better UX */}
                <motion.div 
                  className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2, duration: 0.6 }}
                >
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-cyan-400 cursor-pointer"
                    onClick={() => scrollToSection('statistics')}
                    role="button"
                    tabIndex={0}
                    aria-label="Scroll to next section"
                    onKeyDown={(e) => e.key === 'Enter' && scrollToSection('statistics')}
                  >
                    <ChevronDown className="w-6 h-6" />
                  </motion.div>
                  <p className="text-xs text-gray-500 mt-2">Scroll to explore</p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* Enhanced Statistics Section with better animations and accessibility */}
        <motion.section 
          id="statistics"
          className="py-16 sm:py-20 px-4 bg-gradient-to-b from-gray-900/50 to-gray-800/50"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          aria-labelledby="statistics-heading"
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              id="statistics-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Why Choose Zion Tech Group?
            </motion.h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                { icon: Brain, title: "500+ Services", description: "Comprehensive technology solutions", color: "cyan", metric: "500+" },
                { icon: Shield, title: "98% Satisfaction", description: "Client success rate", color: "blue", metric: "98%" },
                { icon: Rocket, title: "24/7 Support", description: "Round-the-clock assistance", color: "purple", metric: "24/7" },
                { icon: Star, title: "50+ Industries", description: "Cross-sector expertise", color: "emerald", metric: "50+" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.title}
                  className="text-center p-4 sm:p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 group cursor-pointer"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  tabIndex={0}
                  role="article"
                  aria-labelledby={`stat-${index}`}
                  onClick={() => scrollToSection('services')}
                  onKeyDown={(e) => e.key === 'Enter' && scrollToSection('services')}
                >
                  {React.createElement(stat.icon, { 
                    className: `w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 ${getColorClasses(stat.color)} group-hover:scale-110 transition-transform` 
                  })}
                  <h3 id={`stat-${index}`} className="text-xl sm:text-2xl font-bold text-white mb-2">{stat.title}</h3>
                  <p className="text-sm sm:text-base text-gray-400 mb-3">{stat.description}</p>
                  <div className={`text-2xl font-bold ${getColorClasses(stat.color)}`}>{stat.metric}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Enhanced Services Showcase with better visual hierarchy */}
        <motion.section 
          id="services"
          className="py-16 sm:py-20 px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          aria-labelledby="services-heading"
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              id="services-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Our Revolutionary Services
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* AI & Machine Learning Service */}
              <motion.div
                className="p-4 sm:p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 group cursor-pointer relative overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.location.href = '/ai-services'}
                role="button"
                tabIndex={0}
                aria-label="Learn more about AI & Machine Learning services"
                onKeyDown={(e) => e.key === 'Enter' && (window.location.href = '/ai-services')}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-cyan-500/20 rounded-lg">
                      <Brain className="w-6 h-6 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">AI & Machine Learning</h3>
                  </div>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    Advanced artificial intelligence solutions that transform your business operations and unlock new possibilities.
                  </p>
                  <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>

              {/* Quantum Computing Service */}
              <motion.div
                className="p-4 sm:p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 group cursor-pointer relative overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.location.href = '/quantum-computing'}
                role="button"
                tabIndex={0}
                aria-label="Learn more about Quantum Computing services"
                onKeyDown={(e) => e.key === 'Enter' && (window.location.href = '/quantum-computing')}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-500/20 rounded-lg">
                      <Zap className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Quantum Computing</h3>
                  </div>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    Next-generation quantum solutions that solve complex problems beyond classical computing capabilities.
                  </p>
                  <div className="flex items-center gap-2 text-blue-400 text-sm font-medium">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>

              {/* Space Technology Service */}
              <motion.div
                className="p-4 sm:p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-purple-400/50 transition-all duration-300 group cursor-pointer relative overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.location.href = '/space-tech'}
                role="button"
                tabIndex={0}
                aria-label="Learn more about Space Technology services"
                onKeyDown={(e) => e.key === 'Enter' && (window.location.href = '/space-tech')}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-purple-500/20 rounded-lg">
                      <Rocket className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Space Technology</h3>
                  </div>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    Innovative space tech applications that push the boundaries of what's possible in aerospace and beyond.
                  </p>
                  <div className="flex items-center gap-2 text-purple-400 text-sm font-medium">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Enhanced CTA Section */}
            <motion.div 
              className="text-center mt-12 sm:mt-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <button 
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center justify-center gap-3 mx-auto focus:outline-none focus:ring-4 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-gray-900"
                aria-label="View all Zion Tech Group services"
                onClick={() => window.location.href = '/services'}
              >
                <Globe className="w-5 h-5" />
                View All Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </motion.section>

        {/* New About Section */}
        <motion.section 
          id="about"
          className="py-16 sm:py-20 px-4 bg-gradient-to-b from-gray-800/50 to-gray-900/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          aria-labelledby="about-heading"
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              id="about-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              About Zion Tech Group
            </motion.h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                  Pioneering the Future of Technology
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  At Zion Tech Group, we believe in the power of innovation to transform businesses and unlock human potential. Our team of experts combines cutting-edge technology with deep industry knowledge to deliver solutions that drive real results.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  From AI and quantum computing to space technology and cybersecurity, we're at the forefront of the digital revolution, helping organizations navigate the complexities of tomorrow's technology landscape.
                </p>
                <button 
                  className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                  onClick={() => window.location.href = '/about'}
                  aria-label="Learn more about Zion Tech Group"
                >
                  <Users className="w-5 h-5" />
                  Learn More About Us
                </button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Brain, label: "AI Innovation", color: "cyan" },
                    { icon: Shield, label: "Security First", color: "blue" },
                    { icon: Rocket, label: "Space Tech", color: "purple" },
                    { icon: Zap, label: "Quantum Power", color: "emerald" }
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-center group hover:border-cyan-400/50 transition-all duration-300"
                      whileHover={{ y: -5, scale: 1.02 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      {React.createElement(item.icon, { 
                        className: `w-8 h-8 mx-auto mb-3 ${getColorClasses(item.color)} group-hover:scale-110 transition-transform` 
                      })}
                      <p className="text-white font-semibold">{item.label}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </main>
    </Layout>
  );
};

export default Homepage2025;