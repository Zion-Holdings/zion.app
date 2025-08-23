import React, { useState, useEffect } from 'react';
import Layout from './layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, Star, Users, Award, TrendingUp, Brain, Shield, Rocket, Loader2, ChevronDown } from 'lucide-react';

// Loading fallback component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-900">
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="relative">
        <Loader2 className="w-16 h-16 text-cyan-400 animate-spin mx-auto mb-4" />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
      </div>
      <p className="text-xl text-gray-300 mb-2">Loading Zion Tech Group...</p>
      <p className="text-sm text-gray-500">Preparing your digital transformation journey</p>
    </motion.div>
  </div>
);

const Homepage2025: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Simulate content loading with better timing
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsVisible(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // Intersection Observer for better performance
  useEffect(() => {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new (window as any).IntersectionObserver(
        (entries: any[]) => {
          entries.forEach(() => {
            // Handle intersection if needed
          });
        },
        { threshold: 0.3, rootMargin: '-100px' }
      );

      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => observer.observe(section));

      return () => observer.disconnect();
    }
  }, []);

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

  // Color mapping for dynamic classes
  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      cyan: 'text-cyan-400',
      blue: 'text-blue-400',
      purple: 'text-purple-400',
      emerald: 'text-emerald-400'
    };
    return colorMap[color] || 'text-cyan-400';
  };



  if (isLoading) {
    return <LoadingFallback />;
  }

  return (
    <Layout>
      {/* Skip to main content link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-500 text-white px-4 py-2 rounded-lg z-50"
      >
        Skip to main content
      </a>

      {/* Main Content */}
      <main id="main-content" className="relative z-10" role="main" aria-label="Zion Tech Group Homepage">
        {/* Hero Section */}
        <section 
          id="hero"
          className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
          aria-labelledby="hero-heading"
        >
          {/* Enhanced Background Elements with better performance */}
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
          </motion.div>

          <AnimatePresence>
            {isVisible && (
              <motion.div 
                className="text-center max-w-5xl mx-auto"
                initial="initial"
                animate="animate"
                variants={staggerContainer}
                exit={{ opacity: 0, y: -50 }}
              >
                <motion.div variants={fadeInUp}>
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
                    onClick={() => window.location.href = '/get-started'}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                  <button 
                    className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 focus:ring-offset-2 focus:ring-offset-gray-900"
                    aria-label="Learn more about Zion Tech Group"
                    onClick={() => window.location.href = '/about'}
                  >
                    <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                    Learn More
                  </button>
                </motion.div>

                {/* Enhanced Social Proof with better mobile layout */}
                <motion.div 
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 text-gray-400"
                  variants={fadeInUp}
                >
                  <div className="flex flex-col items-center gap-3 p-4 sm:p-6 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:bg-gray-800/50">
                    <Users className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" />
                    <span className="text-base sm:text-lg font-semibold">500+ Clients</span>
                    <span className="text-xs sm:text-sm text-gray-500">Worldwide</span>
                  </div>
                  <div className="flex flex-col items-center gap-3 p-4 sm:p-6 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 hover:bg-gray-800/50">
                    <Award className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
                    <span className="text-base sm:text-lg font-semibold">Industry Leader</span>
                    <span className="text-xs sm:text-sm text-gray-500">2024</span>
                  </div>
                  <div className="flex flex-col items-center gap-3 p-4 sm:p-6 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-purple-400/50 transition-all duration-300 hover:bg-gray-800/50 sm:col-span-2 lg:col-span-1">
                    <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
                    <span className="text-base sm:text-lg font-semibold">99.9% Uptime</span>
                    <span className="text-xs sm:text-sm text-gray-500">Guaranteed</span>
                  </div>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div 
                  className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2, duration: 0.6 }}
                >
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-cyan-400"
                  >
                    <ChevronDown className="w-6 h-6" />
                  </motion.div>
                  <p className="text-xs text-gray-500 mt-2">Scroll to explore</p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* Enhanced Statistics Section */}
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
                { icon: Brain, title: "500+ Services", description: "Comprehensive technology solutions", color: "cyan" },
                { icon: Shield, title: "98% Satisfaction", description: "Client success rate", color: "blue" },
                { icon: Rocket, title: "24/7 Support", description: "Round-the-clock assistance", color: "purple" },
                { icon: Star, title: "50+ Industries", description: "Cross-sector expertise", color: "emerald" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.title}
                  className="text-center p-4 sm:p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 group"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  tabIndex={0}
                  role="article"
                  aria-labelledby={`stat-${index}`}
                >
                  {React.createElement(stat.icon, { 
                    className: `w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 ${getColorClasses(stat.color)} group-hover:scale-110 transition-transform` 
                  })}
                  <h3 id={`stat-${index}`} className="text-xl sm:text-2xl font-bold text-white mb-2">{stat.title}</h3>
                  <p className="text-sm sm:text-base text-gray-400">{stat.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Enhanced Services Showcase */}
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
                className="p-4 sm:p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
                onClick={() => window.location.href = "/ai-services"}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    window.location.href = "/ai-services";
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label="Learn more about AI & Machine Learning"
              >
                {React.createElement(Brain, { 
                  className: "w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4 text-cyan-400 group-hover:scale-110 transition-transform" 
                })}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3">AI & Machine Learning</h3>
                <p className="text-sm sm:text-base text-gray-400 mb-4">Cutting-edge artificial intelligence solutions for enterprise transformation</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
                    Predictive Analytics
                  </li>
                  <li className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
                    Natural Language Processing
                  </li>
                  <li className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
                    Computer Vision
                  </li>
                </ul>
                <div className="mt-4 text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                  Learn more →
                </div>
              </motion.div>

              {/* Quantum Computing Service */}
              <motion.div
                className="p-4 sm:p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                onClick={() => window.location.href = "/quantum-computing"}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    window.location.href = "/quantum-computing";
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label="Learn more about Quantum Computing"
              >
                {React.createElement(Shield, { 
                  className: "w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4 text-purple-400 group-hover:scale-110 transition-transform" 
                })}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3">Quantum Computing</h3>
                <p className="text-sm sm:text-base text-gray-400 mb-4">Next-generation quantum solutions for complex computational challenges</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
                    Quantum Algorithms
                  </li>
                  <li className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
                    Quantum Security
                  </li>
                  <li className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
                    Quantum Machine Learning
                  </li>
                </ul>
                <div className="mt-4 text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                  Learn more →
                </div>
              </motion.div>

              {/* Space Technology Service */}
              <motion.div
                className="p-4 sm:p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -5, scale: 1.02 }}
                onClick={() => window.location.href = "/space-tech"}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    window.location.href = "/space-tech";
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label="Learn more about Space Technology"
              >
                {React.createElement(Rocket, { 
                  className: "w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4 text-blue-400 group-hover:scale-110 transition-transform" 
                })}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3">Space Technology</h3>
                <p className="text-sm sm:text-base text-gray-400 mb-4">Innovative space tech solutions for terrestrial and extraterrestrial applications</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
                    Satellite Systems
                  </li>
                  <li className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
                    Space Mining
                  </li>
                  <li className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
                    Interplanetary Communication
                  </li>
                </ul>
                <div className="mt-4 text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                  Learn more →
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Enhanced CTA Section */}
        <motion.section 
          id="cta"
          className="py-16 sm:py-20 px-4 bg-gradient-to-r from-cyan-900/30 to-blue-900/30"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          aria-labelledby="cta-heading"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              id="cta-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p 
              className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Join hundreds of companies already leveraging our cutting-edge technology solutions
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <button 
                className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-gray-900"
                onClick={() => window.location.href = '/contact'}
                aria-label="Start your digital transformation journey with Zion Tech Group"
              >
                Start Your Journey
              </button>
              <button 
                className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 focus:ring-offset-2 focus:ring-offset-gray-900"
                onClick={() => window.location.href = '/services'}
                aria-label="Explore all Zion Tech Group services"
              >
                Explore Services
              </button>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </Layout>
  );
};

export default Homepage2025;