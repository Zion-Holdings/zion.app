import React, { useState, useEffect } from 'react';
import Layout from './layout/Layout';
import UltraFuturisticBackground2038 from './backgrounds/UltraFuturisticBackground2038';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Play, Star, Users, Award, TrendingUp, Brain, Shield, Rocket, Loader2, ChevronDown,
  Zap, Atom, Cpu, Globe, Target, Lightbulb, Briefcase, BookOpen, ShieldCheck, Heart, ShoppingCart, Network
} from 'lucide-react';

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
      <p className="text-xl text-gray-300 mb-2">Loading Zion Tech Group 2038...</p>
      <p className="text-sm text-gray-500">Preparing your quantum future</p>
    </motion.div>
  </div>
);

const Homepage2038: React.FC = () => {
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
      emerald: 'text-emerald-400',
      yellow: 'text-yellow-400',
      red: 'text-red-400',
      orange: 'text-orange-400',
      pink: 'text-pink-400'
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
      <main id="main-content" className="relative z-10" role="main" aria-label="Zion Tech Group 2038 Homepage">
        {/* Hero Section */}
        <section 
          id="hero"
          className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
          aria-labelledby="hero-heading"
        >
          <UltraFuturisticBackground2038 
            intensity="high" 
            theme="quantum-neon"
            enableParticles={true}
            enableWaves={true}
            enableHolograms={true}
          >
            <AnimatePresence>
              {isVisible && (
                <motion.div 
                  className="text-center max-w-6xl mx-auto relative z-10"
                  initial="initial"
                  animate="animate"
                  variants={staggerContainer}
                  exit={{ opacity: 0, y: -50 }}
                >
                  <motion.div variants={fadeInUp}>
                    <div className="flex items-center justify-center mb-6">
                      <div className="relative">
                        <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4">
                          <Zap className="w-12 h-12 text-white" />
                        </div>
                        <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-30 animate-pulse"></div>
                      </div>
                    </div>
                    <h1 
                      id="hero-heading"
                      className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight"
                    >
                      Zion Tech Group
                    </h1>
                    <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-cyan-300 mb-4 font-medium">
                      2038 Edition
                    </p>
                  </motion.div>
                  
                  <motion.div variants={fadeInUp}>
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-5xl mx-auto leading-relaxed">
                      Pioneering the quantum future with revolutionary AI, consciousness evolution, and space technology solutions that transcend human potential
                    </p>
                  </motion.div>

                  <motion.div 
                    className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12"
                    variants={fadeInUp}
                  >
                    <button 
                      className="group w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-2xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center justify-center gap-3 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-gray-900"
                      aria-label="Get started with Zion Tech Group 2038 services"
                      onClick={() => window.location.href = '/get-started'}
                    >
                      <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
                      Get Started
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    
                    <button 
                      className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-2xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 focus:ring-offset-2 focus:ring-offset-gray-900"
                      aria-label="Learn more about Zion Tech Group 2038"
                      onClick={() => window.location.href = '/about'}
                    >
                      <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                      Learn More
                    </button>
                  </motion.div>

                  {/* Enhanced Social Proof with better mobile layout */}
                  <motion.div 
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-gray-400"
                    variants={fadeInUp}
                  >
                    <div className="flex flex-col items-center gap-3 p-4 sm:p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:bg-gray-800/50">
                      <Users className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" />
                      <span className="text-base sm:text-lg font-semibold">1000+ Clients</span>
                      <span className="text-xs sm:text-sm text-gray-500">Worldwide</span>
                    </div>
                    <div className="flex flex-col items-center gap-3 p-4 sm:p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 hover:bg-gray-800/50">
                      <Award className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
                      <span className="text-base sm:text-lg font-semibold">Industry Leader</span>
                      <span className="text-xs sm:text-sm text-gray-500">2038</span>
                    </div>
                    <div className="flex flex-col items-center gap-3 p-4 sm:p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-purple-400/50 transition-all duration-300 hover:bg-gray-800/50">
                      <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
                      <span className="text-base sm:text-lg font-semibold">99.99% Uptime</span>
                      <span className="text-xs sm:text-sm text-gray-500">Guaranteed</span>
                    </div>
                    <div className="flex flex-col items-center gap-3 p-4 sm:p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-emerald-400/50 transition-all duration-300 hover:bg-gray-800/50 sm:col-span-2 lg:col-span-1">
                      <Atom className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-400" />
                      <span className="text-base sm:text-lg font-semibold">Quantum Ready</span>
                      <span className="text-xs sm:text-sm text-gray-500">Future-Proof</span>
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
                    <p className="text-xs text-gray-500 mt-2">Scroll to explore the future</p>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </UltraFuturisticBackground2038>
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
              Why Choose Zion Tech Group 2038?
            </motion.h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                { icon: Brain, title: "1000+ Services", description: "Comprehensive technology solutions", color: "cyan" },
                { icon: Shield, title: "99.9% Satisfaction", description: "Client success rate", color: "blue" },
                { icon: Rocket, title: "24/7 Quantum Support", description: "Round-the-clock assistance", color: "purple" },
                { icon: Atom, title: "100+ Industries", description: "Cross-sector expertise", color: "emerald" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.title}
                  className="text-center p-4 sm:p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 group"
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
              Our Revolutionary 2038 Services
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Quantum AI Consciousness Service */}
              <motion.div
                className="p-4 sm:p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
                onClick={() => window.location.href = "/services/quantum-ai-consciousness-evolution-2038"}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    window.location.href = "/services/quantum-ai-consciousness-evolution-2038";
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label="Learn more about Quantum AI Consciousness Evolution 2038"
              >
                <div className="flex items-center justify-between mb-4">
                  {React.createElement(Brain, { 
                    className: "w-10 h-10 sm:w-12 sm:h-12 text-cyan-400 group-hover:scale-110 transition-transform" 
                  })}
                  <span className="px-3 py-1 text-xs font-medium bg-emerald-500/20 text-emerald-400 rounded-full border border-emerald-500/30">
                    New 2038
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3">Quantum AI Consciousness Evolution 2038</h3>
                <p className="text-sm sm:text-base text-gray-400 mb-4">Revolutionary AI platform that combines quantum computing with advanced consciousness algorithms</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
                    Quantum consciousness processing
                  </li>
                  <li className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
                    Advanced emotional intelligence
                  </li>
                  <li className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
                    Human-like understanding
                  </li>
                </ul>
                <div className="mt-4 text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                  Learn more →
                </div>
              </motion.div>

              {/* AI-Powered Customer Success Service */}
              <motion.div
                className="p-4 sm:p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                onClick={() => window.location.href = "/services/ai-powered-customer-success-automation"}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    window.location.href = "/services/ai-powered-customer-success-automation";
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label="Learn more about AI-Powered Customer Success Automation"
              >
                <div className="flex items-center justify-between mb-4">
                  {React.createElement(Users, { 
                    className: "w-10 h-10 sm:w-12 sm:h-12 text-purple-400 group-hover:scale-110 transition-transform" 
                  })}
                  <span className="px-3 py-1 text-xs font-medium bg-red-500/20 text-red-400 rounded-full border border-red-500/30">
                    Hot
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3">AI-Powered Customer Success Automation</h3>
                <p className="text-sm sm:text-base text-gray-400 mb-4">Intelligent customer success automation with predictive analytics</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
                    AI-powered churn prediction
                  </li>
                  <li className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
                    Automated customer onboarding
                  </li>
                  <li className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
                    Intelligent upsell recommendations
                  </li>
                </ul>
                <div className="mt-4 text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                  Learn more →
                </div>
              </motion.div>

              {/* Quantum Edge Computing Service */}
              <motion.div
                className="p-4 sm:p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -5, scale: 1.02 }}
                onClick={() => window.location.href = "/services/quantum-edge-computing-orchestrator"}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    window.location.href = "/services/quantum-edge-computing-orchestrator";
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label="Learn more about Quantum Edge Computing Orchestrator"
              >
                <div className="flex items-center justify-between mb-4">
                  {React.createElement(Network, { 
                    className: "w-10 h-10 sm:w-12 sm:h-12 text-blue-400 group-hover:scale-110 transition-transform" 
                  })}
                  <span className="px-3 py-1 text-xs font-medium bg-emerald-500/20 text-emerald-400 rounded-full border border-emerald-500/30">
                    New 2038
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3">Quantum Edge Computing Orchestrator</h3>
                <p className="text-sm sm:text-base text-gray-400 mb-4">Quantum-powered edge computing orchestration and optimization</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
                    Quantum resource optimization
                  </li>
                  <li className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
                    Intelligent load balancing
                  </li>
                  <li className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
                    5G/6G optimization
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
              Ready to Transform Your Business in 2038?
            </motion.h2>
            <motion.p 
              className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Join thousands of companies already leveraging our cutting-edge quantum technology solutions
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <button 
                className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-2xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-gray-900"
                onClick={() => window.location.href = '/contact'}
                aria-label="Start your quantum transformation journey with Zion Tech Group 2038"
              >
                <Zap className="w-5 h-5 inline mr-2" />
                Start Your Journey
              </button>
              <button 
                className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-2xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 focus:ring-offset-2 focus:ring-offset-gray-900"
                onClick={() => window.location.href = '/services'}
                aria-label="Explore all Zion Tech Group 2038 services"
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

export default Homepage2038;