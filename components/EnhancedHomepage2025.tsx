import React, { useState, useEffect, useCallback } from 'react';
import Layout from './layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Play, Star, Users, Award, TrendingUp, Brain, 
  Shield, Rocket, Loader2, ChevronDown, Search, Filter,
  Globe, Zap, Target, Cpu, Database, Cloud, Lock
} from 'lucide-react';

// Enhanced loading component with better UX
const EnhancedLoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="relative">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-20 h-20 border-4 border-cyan-400 border-t-transparent rounded-full mx-auto mb-6"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
      </div>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-2xl text-white mb-3 font-semibold"
      >
        Loading Zion Tech Group...
      </motion.p>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-gray-400"
      >
        Preparing your digital transformation journey
      </motion.p>
    </motion.div>
  </div>
);

// Enhanced service showcase component
const ServiceShowcase = () => {
  const [activeService, setActiveService] = useState(0);
  
  const services = [
    {
      icon: <Brain className="w-12 h-12" />,
      title: "AI & Machine Learning",
      description: "Advanced AI solutions for enterprise transformation",
      color: "from-cyan-500 to-blue-600",
      features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Autonomous Systems"]
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Cybersecurity",
      description: "Enterprise-grade security and compliance solutions",
      color: "from-purple-500 to-pink-600",
      features: ["Zero Trust Architecture", "Threat Intelligence", "Compliance Automation", "Incident Response"]
    },
    {
      icon: <Rocket className="w-12 h-12" />,
      title: "Space Technology",
      description: "Innovative space tech applications and solutions",
      color: "from-emerald-500 to-teal-600",
      features: ["Satellite Systems", "Space Mining", "Interplanetary Communication", "Space Tourism"]
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Quantum Computing",
      description: "Next-generation quantum solutions and applications",
      color: "from-orange-500 to-red-600",
      features: ["Quantum Algorithms", "Quantum Cryptography", "Quantum Machine Learning", "Quantum Networks"]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900/50 to-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          Our Revolutionary Services
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer group ${
                  activeService === index ? 'ring-2 ring-cyan-400/50' : ''
                }`}
                onClick={() => setActiveService(index)}
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} p-3 mb-4 group-hover:scale-110 transition-transform`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
          
          {/* Active Service Details */}
          <motion.div
            key={activeService}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${services[activeService].color} p-4 mb-6`}>
              <div className="text-white">
                {services[activeService].icon}
              </div>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">{services[activeService].title}</h3>
            <p className="text-lg text-gray-300 mb-6">{services[activeService].description}</p>
            <ul className="space-y-3">
              {services[activeService].features.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3 text-gray-300"
                >
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Enhanced statistics component
const EnhancedStatistics = () => {
  const stats = [
    { icon: Brain, title: "500+ Services", description: "Comprehensive technology solutions", color: "cyan", value: "500+" },
    { icon: Shield, title: "98% Satisfaction", description: "Client success rate", color: "blue", value: "98%" },
    { icon: Rocket, title: "24/7 Support", description: "Round-the-clock assistance", color: "purple", value: "24/7" },
    { icon: Star, title: "50+ Industries", description: "Cross-sector expertise", color: "emerald", value: "50+" }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-800/50 to-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        >
          Why Choose Zion Tech Group?
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-8 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${stat.color === 'cyan' ? 'from-cyan-500 to-blue-600' : stat.color === 'blue' ? 'from-blue-500 to-indigo-600' : stat.color === 'purple' ? 'from-purple-500 to-pink-600' : 'from-emerald-500 to-teal-600'} p-4 mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-3">{stat.value}</div>
              <h3 className="text-xl font-bold text-white mb-2">{stat.title}</h3>
              <p className="text-gray-400">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Enhanced hero section
const EnhancedHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
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

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.1, 1, 1.1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"
        />
      </div>

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
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight">
                Zion Tech Group
              </h1>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-10 max-w-5xl mx-auto leading-relaxed">
                Pioneering the future of technology with innovative solutions that drive business transformation and unlock human potential
              </p>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
              variants={fadeInUp}
            >
              <button 
                className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center justify-center gap-3 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-gray-900"
                aria-label="Get started with Zion Tech Group services"
              >
                Get Started
                <ArrowRight className="w-5 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                className="w-full sm:w-auto px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 focus:ring-offset-2 focus:ring-offset-gray-900"
                aria-label="Learn more about Zion Tech Group"
              >
                <Play className="w-5 h-6" />
                Learn More
              </button>
            </motion.div>

            {/* Enhanced Social Proof */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-gray-400"
              variants={fadeInUp}
            >
              <div className="flex flex-col items-center gap-3 p-6 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:bg-gray-800/50">
                <Users className="w-8 h-8 text-cyan-400" />
                <span className="text-lg font-semibold">500+ Clients</span>
                <span className="text-sm text-gray-500">Worldwide</span>
              </div>
              <div className="flex flex-col items-center gap-3 p-6 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 hover:bg-gray-800/50">
                <Award className="w-8 h-8 text-blue-400" />
                <span className="text-lg font-semibold">Industry Leader</span>
                <span className="text-sm text-gray-500">2024</span>
              </div>
              <div className="flex flex-col items-center gap-3 p-6 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-purple-400/50 transition-all duration-300 hover:bg-gray-800/50">
                <TrendingUp className="w-8 h-8 text-purple-400" />
                <span className="text-lg font-semibold">99.9% Uptime</span>
                <span className="text-sm text-gray-500">Guaranteed</span>
              </div>
            </motion.div>

            {/* Enhanced Scroll Indicator */}
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
                <ChevronDown className="w-8 h-8" />
              </motion.div>
              <p className="text-sm text-gray-500 mt-3">Scroll to explore</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

// Main enhanced homepage component
const EnhancedHomepage2025: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <EnhancedLoadingFallback />;
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
        <EnhancedHero />
        <EnhancedStatistics />
        <ServiceShowcase />
      </main>
    </Layout>
  );
};

export default EnhancedHomepage2025;