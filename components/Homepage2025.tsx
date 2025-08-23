import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Layout from './layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, Star, Brain, Shield, Rocket, Loader2, ChevronDown, Sparkles, Zap, Globe } from 'lucide-react';

// Enhanced loading fallback with better performance
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
      
      {/* Enhanced loading progress indicator */}
      <div className="mt-6 w-64 mx-auto">
        <div className="w-full bg-gray-700 rounded-full h-2">
          <motion.div
            className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </div>
      </div>
    </motion.div>
  </div>
);

// Optimized animation variants
const animationVariants = {
  fadeInUp: {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  },
  staggerContainer: {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  },
  backgroundVariants: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 1.5, ease: "easeOut" }
    }
  },
  slideInFromLeft: {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  },
  slideInFromRight: {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  }
} as const;

const Homepage2025: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  // Memoized color mapping for better performance
  const getColorClasses = useCallback((color: string) => {
    const colorMap: { [key: string]: string } = {
      cyan: 'text-cyan-400',
      blue: 'text-blue-400',
      purple: 'text-purple-400',
      emerald: 'text-emerald-400',
      pink: 'text-pink-400',
      orange: 'text-orange-400'
    };
    return colorMap[color] || 'text-cyan-400';
  }, []);

  // Enhanced loading simulation with better timing
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Stagger the visibility for better UX
      setTimeout(() => setIsVisible(true), 200);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  // Enhanced scroll handling with throttling
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Enhanced scroll handling for performance
          const sections = document.querySelectorAll('section[id]');
          sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
              section.classList.add('in-view');
            }
          });
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Enhanced intersection observer for better performance
  useEffect(() => {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new (window as any).IntersectionObserver(
        (entries: any[]) => {
          entries.forEach((entry: any) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-in');
            }
          });
        },
        { 
          threshold: 0.3, 
          rootMargin: '-100px',
          root: null
        }
      );

      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => observer.observe(section));

      return () => observer.disconnect();
    }
  }, []);

  // Memoized statistics data for better performance
  const statisticsData = useMemo(() => [
    { icon: Brain, title: "500+ Services", description: "Comprehensive technology solutions", color: "cyan" },
    { icon: Shield, title: "98% Satisfaction", description: "Client success rate", color: "blue" },
    { icon: Rocket, title: "24/7 Support", description: "Round-the-clock assistance", color: "purple" },
    { icon: Star, title: "50+ Industries", description: "Cross-sector expertise", color: "emerald" }
  ], []);

  // Enhanced service showcase data
  const servicesData = useMemo(() => [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Advanced AI solutions for enterprise transformation",
      features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision"],
      color: "cyan",
      href: "/ai-services"
    },
    {
      icon: Zap,
      title: "Quantum Computing",
      description: "Next-generation quantum solutions for complex problems",
      features: ["Quantum Algorithms", "Quantum Security", "Quantum Optimization"],
      color: "purple",
      href: "/quantum-computing"
    },
    {
      icon: Rocket,
      title: "Space Technology",
      description: "Innovative space tech applications and solutions",
      features: ["Satellite Management", "Space Analytics", "Mission Planning"],
      color: "pink",
      href: "/space-tech"
    },
    {
      icon: Globe,
      title: "Micro SAAS",
      description: "Rapid deployment solutions for instant ROI",
      features: ["Quick Setup", "Scalable Architecture", "Cost Effective"],
      color: "orange",
      href: "/micro-saas"
    }
  ], []);

  if (isLoading) {
    return <LoadingFallback />;
  }

  return (
    <Layout>
      {/* Enhanced skip to main content link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-500 text-white px-4 py-2 rounded-lg z-50 shadow-lg transition-all duration-200 hover:bg-cyan-600"
        aria-label="Skip to main content"
      >
        Skip to main content
      </a>

      {/* Main Content */}
      <main id="main-content" className="relative z-10" role="main" aria-label="Zion Tech Group Homepage">
        {/* Enhanced Hero Section */}
        <section 
          id="hero"
          className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
          aria-labelledby="hero-heading"
        >
          {/* Enhanced Background Elements with better performance */}
          <motion.div 
            className="absolute inset-0 -z-10"
            variants={animationVariants.backgroundVariants}
            initial="initial"
            animate="animate"
            aria-hidden="true"
          >
            <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
            <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-emerald-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
            
            {/* Enhanced floating elements */}
            <div className="absolute top-1/3 left-1/3 w-32 h-32 border border-cyan-400/20 rounded-full animate-spin-slow"></div>
            <div className="absolute bottom-1/3 right-1/3 w-24 h-24 border border-purple-400/20 transform rotate-45 animate-pulse"></div>
          </motion.div>

          <AnimatePresence>
            {isVisible && (
              <motion.div 
                className="text-center max-w-5xl mx-auto"
                initial="initial"
                animate="animate"
                variants={animationVariants.staggerContainer}
                exit={{ opacity: 0, y: -50 }}
              >
                {/* Enhanced main heading with better typography */}
                <motion.div variants={animationVariants.fadeInUp}>
                  <div className="mb-4">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3, duration: 0.8 }}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full px-4 py-2 text-sm text-cyan-400 mb-6"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>Revolutionary Technology Solutions</span>
                    </motion.div>
                  </div>
                  
                  <h1 
                    id="hero-heading"
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight"
                  >
                    Zion Tech Group
                  </h1>
                </motion.div>
                
                <motion.div variants={animationVariants.fadeInUp}>
                  <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                    Pioneering the future of technology with innovative solutions that drive business transformation and unlock human potential
                  </p>
                </motion.div>

                {/* Enhanced CTA buttons with better accessibility */}
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12"
                  variants={animationVariants.fadeInUp}
                >
                  <button 
                    className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center justify-center gap-2 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-gray-900"
                    aria-label="Get started with Zion Tech Group services"
                    onClick={() => window.location.href = '/get-started'}
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                  <button 
                    className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 focus:ring-offset-2 focus:ring-offset-gray-900"
                    aria-label="Learn more about Zion Tech Group"
                    onClick={() => window.location.href = '/about'}
                  >
                    <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Learn More</span>
                  </button>
                </motion.div>

                {/* Enhanced Social Proof with better mobile layout */}
                <motion.div 
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-gray-400"
                  variants={animationVariants.fadeInUp}
                >
                  {statisticsData.map((stat, index) => (
                    <motion.div
                      key={stat.title}
                      className="flex flex-col items-center gap-3 p-4 sm:p-6 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:bg-gray-800/50 group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -5, scale: 1.02 }}
                      tabIndex={0}
                      role="article"
                      aria-labelledby={`stat-${index}`}
                    >
                      {React.createElement(stat.icon, { 
                        className: `w-6 h-6 sm:w-8 sm:h-8 ${getColorClasses(stat.color)} group-hover:scale-110 transition-transform` 
                      })}
                      <h3 id={`stat-${index}`} className="text-base sm:text-lg font-semibold text-white">{stat.title}</h3>
                      <span className="text-xs sm:text-sm text-gray-500">{stat.description}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Enhanced scroll indicator */}
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
              {statisticsData.map((stat, index) => (
                <motion.div
                  key={stat.title}
                  className="text-center p-4 sm:p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 group cursor-pointer"
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
              {servicesData.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="p-6 sm:p-8 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 group cursor-pointer"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  onClick={() => window.location.href = service.href}
                  tabIndex={0}
                  role="article"
                  aria-labelledby={`service-${index}`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r from-${service.color}-500/20 to-${service.color}-600/20 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      {React.createElement(service.icon, { 
                        className: `w-6 h-6 ${getColorClasses(service.color)}` 
                      })}
                    </div>
                    <div className="flex-1">
                      <h3 id={`service-${index}`} className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 mb-4">{service.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-400 text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Enhanced CTA Section */}
        <motion.section 
          id="cta"
          className="py-16 sm:py-20 px-4 bg-gradient-to-b from-gray-800/50 to-gray-900/50"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Ready to Transform Your Business?
            </motion.h2>
            
            <motion.p 
              className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Join hundreds of companies already leveraging our revolutionary technology solutions to drive unprecedented growth and efficiency.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <button 
                className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center justify-center gap-2 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-gray-900"
                aria-label="Schedule a consultation with Zion Tech Group"
                onClick={() => window.location.href = '/contact'}
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                className="w-full sm:w-auto px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-xl hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 focus:outline-none focus:ring-4 focus:ring-purple-400/50 focus:ring-offset-2 focus:ring-offset-gray-900"
                aria-label="View Zion Tech Group case studies"
                onClick={() => window.location.href = '/case-studies'}
              >
                <span>View Case Studies</span>
                <Play className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </Layout>
  );
};

export default Homepage2025;