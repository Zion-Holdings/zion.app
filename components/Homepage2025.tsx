import React, { Suspense, lazy, useState, useEffect } from 'react';
import Layout from './layout/Layout';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Star, 
  Brain, Atom, Shield, Zap, TrendingUp, Globe,
  Rocket, Target, Users, Cpu, Play, Pause, Sun, Moon
} from 'lucide-react';

// Lazy load heavy components for better performance
const LazyServiceCard = lazy(() => import('./ui/UltraFuturisticServiceCard2026'));

const Homepage2025: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [currentStatIndex, setCurrentStatIndex] = useState(0);

  // Enhanced animation variants for better performance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  // Auto-rotating stats for better engagement
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStatIndex((prev) => (prev + 1) % statsData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const statsData = [
    {
      number: "50+",
      label: "AI Services",
      description: "Cutting-edge solutions",
      icon: Brain,
      color: "text-cyan-400",
      hoverColor: "group-hover:text-cyan-300"
    },
    {
      number: "100+",
      label: "Quantum Solutions",
      description: "Next-gen computing",
      icon: Atom,
      color: "text-blue-400",
      hoverColor: "group-hover:text-blue-300"
    },
    {
      number: "24/7",
      label: "Autonomous Operations",
      description: "Always available",
      icon: Cpu,
      color: "text-purple-400",
      hoverColor: "group-hover:text-purple-300"
    },
    {
      number: "∞",
      label: "Future Possibilities",
      description: "Unlimited potential",
      icon: Rocket,
      color: "text-green-400",
      hoverColor: "group-hover:text-green-300"
    }
  ];

  const featuredServices = [
    {
      id: 'ai-consciousness',
      name: 'AI Consciousness Evolution',
      tagline: 'Advanced AI consciousness development',
      description: 'Revolutionary platform for developing AI systems with advanced consciousness capabilities',
      price: '$8,999',
      period: '/month',
      features: ['Consciousness Development', 'Ethical Training', 'Safety Protocols'],
      popular: true,
      category: 'AI & Consciousness',
      icon: '🧠'
    },
    {
      id: 'quantum-cybersecurity',
      name: 'Quantum Cybersecurity',
      tagline: 'Quantum-resistant security platform',
      description: 'Advanced cybersecurity with quantum-resistant encryption and AI threat detection',
      price: '$2,499',
      period: '/month',
      features: ['Quantum Encryption', 'AI Threat Detection', 'Zero Trust'],
      popular: true,
      category: 'Quantum & Security',
      icon: '🛡️'
    },
    {
      id: 'autonomous-content',
      name: 'AI Content Factory',
      tagline: 'Fully automated content creation',
      description: 'End-to-end autonomous content creation, optimization, and distribution platform',
      price: '$1,299',
      period: '/month',
      features: ['Content Automation', 'AI Writing', 'Multi-platform Publishing'],
      popular: true,
      category: 'AI & Content',
      icon: '🏭'
    },
    {
      id: 'quantum-supply-chain',
      name: 'Quantum Supply Chain',
      tagline: 'Quantum-optimized logistics',
      description: 'Revolutionary supply chain optimization using quantum algorithms and AI',
      price: '$3,999',
      period: '/month',
      features: ['Quantum Optimization', 'Real-time Tracking', 'Predictive Analytics'],
      popular: false,
      category: 'Quantum & Logistics',
      icon: '🚚'
    }
  ];

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // Add theme persistence logic here
  };

  const toggleVideo = () => {
    setIsVideoPlaying(!isVideoPlaying);
  };

  return (
    <Layout>
      {/* Main Content */}
      <main className="relative z-10" id="main">
        {/* Hero Section */}
        <section 
          className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
          aria-labelledby="hero-heading"
        >
          {/* Enhanced Background Elements with better performance */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg animate-pulse"></div>
            <div className="absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute bottom-32 left-32 w-40 h-40 border border-pink-400/20 transform rotate-45 animate-pulse delay-2000"></div>
            {/* Add floating particles for enhanced visual appeal */}
            <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-cyan-400/40 rounded-full animate-bounce delay-500"></div>
            <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-purple-400/40 rounded-full animate-bounce delay-1000"></div>
          </div>
          
          <div className="text-center max-w-4xl mx-auto relative z-10">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              {/* Theme Toggle */}
              <motion.div
                variants={itemVariants}
                className="absolute top-4 right-4"
              >
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:bg-gray-700/50 transition-all duration-300"
                  aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
                >
                  {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-blue-400" />}
                </button>
              </motion.div>

              {/* Company Badge */}
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-medium backdrop-blur-sm"
                role="banner"
                aria-label="Company recognition"
              >
                <Star className="w-4 h-4" aria-hidden="true" />
                <span>Innovation Leader 2025</span>
              </motion.div>
              
              <motion.h1 
                variants={itemVariants}
                id="hero-heading"
                className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
              >
                Zion Tech Group
              </motion.h1>
              
              <motion.p 
                variants={itemVariants}
                className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
              >
                Pioneering the future of technology with innovative solutions that drive business transformation
              </motion.p>

              {/* Video Preview Section */}
              <motion.div
                variants={itemVariants}
                className="mb-8"
              >
                <div className="relative inline-block">
                  <div className="w-80 h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg border border-cyan-400/30 backdrop-blur-sm flex items-center justify-center">
                    <button
                      onClick={toggleVideo}
                      className="p-4 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300"
                      aria-label={isVideoPlaying ? 'Pause video' : 'Play video'}
                    >
                      {isVideoPlaying ? <Pause className="w-8 h-8 text-white" /> : <Play className="w-8 h-8 text-white ml-1" />}
                    </button>
                  </div>
                  <p className="text-sm text-gray-400 mt-2">Watch our vision for 2040</p>
                </div>
              </motion.div>
              
              {/* Enhanced CTA Section */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
              >
                <Link href="/get-started" aria-label="Get started with our services">
                  <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-black">
                    <span className="flex items-center gap-2">
                      Get Started
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </span>
                  </button>
                </Link>
                <Link href="/services" aria-label="Learn more about our services">
                  <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-black">
                    Learn More
                  </button>
                </Link>
                <Link href="/comprehensive-2025-services-showcase" aria-label="View our 2025 services showcase">
                  <button className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2 focus:ring-offset-black">
                    2025 Services Showcase
                  </button>
                </Link>
              </motion.div>
              
              {/* Enhanced Trust Indicators with auto-rotation */}
              <motion.div
                variants={itemVariants}
                className="flex justify-center"
              >
                <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4 max-w-md">
                  <div className="flex items-center justify-center space-x-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-400">
                        {statsData[currentStatIndex].number}
                      </div>
                      <div className="text-sm text-gray-300">
                        {statsData[currentStatIndex].label}
                      </div>
                      <div className="text-xs text-gray-400">
                        {statsData[currentStatIndex].description}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Stats Section */}
        <section className="py-20 px-4 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine cutting-edge AI, quantum computing, and autonomous systems to deliver unprecedented business value
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {statsData.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group text-center p-6 bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-700/50 mb-4 group-hover:bg-cyan-500/20 transition-all duration-300`}>
                    <stat.icon className={`w-8 h-8 ${stat.color}`} aria-hidden="true" />
                  </div>
                  <div className={`text-3xl font-bold mb-2 ${stat.color}`}>
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-white mb-2">
                    {stat.label}
                  </div>
                  <div className="text-gray-400">
                    {stat.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Featured Services Section */}
        <section className="py-20 px-4 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Featured Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our most innovative and transformative solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative p-6 bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                  <p className="text-sm text-gray-400 mb-2">{service.tagline}</p>
                  <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                    <span className="text-gray-400">{service.period}</span>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link href={`/services/${service.id}`}>
                    <button className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                      Learn More
                    </button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Call to Action Section */}
        <section className="py-20 px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-2xl p-12 backdrop-blur-sm"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join the future of technology with Zion Tech Group. Let's build something extraordinary together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                    Get Started Today
                  </button>
                </Link>
                <Link href="/demo">
                  <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                    Request Demo
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Homepage2025;