import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Head from 'next/head';
import { 
  Zap, Sun, Moon, Search, Menu, X, ArrowRight, Brain as BrainIcon, 
  Atom as AtomIcon, Shield as ShieldIcon, Rocket as RocketIcon, Globe, Cpu
} from 'lucide-react';
import ServiceCard from './ServiceCard';

// Import accessibility component
import EnhancedAccessibilityEnhancer from './EnhancedAccessibilityEnhancer';

// Import performance monitor
import EnhancedPerformanceMonitor from './EnhancedPerformanceMonitor';

// Import our new revolutionary services
import { revolutionary2044AdvancedMicroSaas } from '../data/revolutionary-2044-advanced-micro-saas';
import { revolutionary2044ITServices } from '../data/revolutionary-2044-it-services';
import { revolutionary2044AIServices } from '../data/revolutionary-2044-ai-services';
import { realEnterpriseMicroSaas2025 } from '../data/2025-real-enterprise-micro-saas';
import { innovativeITInfrastructureServices2025 } from '../data/2025-innovative-it-infrastructure-services';
import { innovativeAIAutonomousServices2025 } from '../data/2025-innovative-ai-autonomous-services';

const Homepage2045: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    // Auto-rotate featured services
    const interval = setInterval(() => {
      // setCurrentServiceIndex((prev) => (prev + 1) % 6); // This line was removed
    }, 6000);
    
    // Track scroll for header effects
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('zion-theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Theme toggle handler
  const toggleTheme = useCallback(() => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem('zion-theme', newTheme ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newTheme);
  }, [isDarkMode]);

  // Combine all revolutionary services
  const allRevolutionaryServices = [
    ...revolutionary2044AdvancedMicroSaas,
    ...revolutionary2044ITServices,
    ...revolutionary2044AIServices,
    ...realEnterpriseMicroSaas2025,
    ...innovativeITInfrastructureServices2025,
    ...innovativeAIAutonomousServices2025
  ];

  // Filter services by category and search
  const getFilteredServices = () => {
    let filtered = allRevolutionaryServices;
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => 
        service.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        service.type.toLowerCase().includes(selectedCategory.toLowerCase())
      );
    }
    
    if (searchQuery) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    return filtered;
  };

  const categories = [
    { id: 'all', name: 'All Services', icon: Zap, color: 'from-purple-500 to-pink-500' },
    { id: 'ai', name: 'AI & Consciousness', icon: BrainIcon, color: 'from-cyan-500 to-blue-500' },
    { id: 'quantum', name: 'Quantum Technology', icon: AtomIcon, color: 'from-blue-500 to-indigo-500' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: ShieldIcon, color: 'from-red-500 to-orange-500' },
    { id: 'space', name: 'Space Technology', icon: RocketIcon, color: 'from-indigo-500 to-purple-500' },
    { id: 'enterprise', name: 'Enterprise Solutions', icon: Globe, color: 'from-green-500 to-teal-500' }
  ];

  // Get featured services for rotation
  // const featuredServices = allRevolutionaryServices.slice(0, 6);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.2
      }
    }
  };

  // Parallax effect for mouse movement
  // const getParallaxStyle = (depth: number) => ({
  //   transform: `translate(${mousePosition.x * depth * 0.01}px, ${mousePosition.y * depth * 0.01}px)`
  // });

  return (
    <>
      <Head>
        <title>Zion Tech Group - Revolutionary 2045 Technology Solutions</title>
        <meta name="description" content="Experience the future of technology with Zion Tech Group's revolutionary AI consciousness, quantum computing, and autonomous solutions. Transform your business with cutting-edge innovation." />
        <meta name="keywords" content="AI consciousness, quantum computing, autonomous solutions, space technology, cybersecurity, business intelligence, Zion Tech Group, 2045 technology" />
        <meta property="og:title" content="Zion Tech Group - Revolutionary 2045 Technology" />
        <meta property="og:description" content="Pioneering the future of technology with revolutionary AI consciousness and quantum computing solutions." />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Revolutionary 2045 Technology" />
        <meta name="twitter:description" content="Pioneering the future of technology with revolutionary AI consciousness and quantum computing solutions." />
        <link rel="canonical" href="https://ziontechgroup.com" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https://ziontechgroup.com",
              "logo": "https://ziontechgroup.com/logo.png",
              "description": "Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "364 E Main St STE 1008",
                "addressLocality": "Middletown",
                "addressRegion": "DE",
                "postalCode": "19709",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-302-464-0950",
                "contactType": "customer service",
                "email": "kleber@ziontechgroup.com"
              },
              "sameAs": [
                "https://github.com/Zion-Holdings",
                "https://linkedin.com/company/zion-tech-group"
              ]
            })
          }}
        />
      </Head>

      <div className={`min-h-screen ${isDarkMode ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'} relative overflow-hidden transition-colors duration-300`}>
        {/* Enhanced Header */}
        <motion.header 
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled 
              ? 'bg-black/90 backdrop-blur-md border-b border-gray-800/50' 
              : 'bg-transparent'
          }`}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="flex items-center justify-between h-16 lg:h-20">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-2">
                <motion.div
                  className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Zap className="w-6 h-6 text-white" />
                </motion.div>
                <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Zion Tech
                </span>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-8">
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
                <Link href="/solutions" className="text-gray-300 hover:text-white transition-colors">
                  Solutions
                </Link>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </nav>

              {/* Right side controls */}
              <div className="flex items-center space-x-4">
                {/* Search */}
                <div className="relative hidden md:block">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent w-64"
                  />
                </div>

                {/* Theme Toggle */}
                <motion.button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg bg-gray-800/50 border border-gray-700/50 text-gray-300 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Toggle theme"
                >
                  {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </motion.button>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="lg:hidden p-2 rounded-lg bg-gray-800/50 border border-gray-700/50 text-gray-300 hover:text-white transition-colors"
                  aria-label="Toggle mobile menu"
                >
                  {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                className="lg:hidden bg-black/95 backdrop-blur-md border-t border-gray-800/50"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="px-4 py-6 space-y-4">
                  <Link href="/services" className="block text-gray-300 hover:text-white transition-colors">
                    Services
                  </Link>
                  <Link href="/solutions" className="block text-gray-300 hover:text-white transition-colors">
                    Solutions
                  </Link>
                  <Link href="/about" className="block text-gray-300 hover:text-white transition-colors">
                    About
                  </Link>
                  <Link href="/contact" className="block text-gray-300 hover:text-white transition-colors">
                    Contact
                  </Link>
                  
                  {/* Mobile Search */}
                  <div className="relative pt-4">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search services..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>

        {/* Hero Section */}
        <motion.section 
          className="relative min-h-screen flex items-center justify-center px-4 lg:px-8 pt-20"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 4,
                repeat: -1,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
              animate={{
                y: [0, -15, 0],
                x: [0, -8, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 5,
                repeat: -1,
                ease: "easeInOut",
                delay: 1
              }}
            />
            <motion.div
              className="absolute bottom-32 left-1/3 w-40 h-40 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-full blur-3xl"
              animate={{
                y: [0, -25, 0],
                x: [0, 12, 0],
                scale: [1, 1.15, 1]
              }}
              transition={{
                duration: 6,
                repeat: -1,
                ease: "easeInOut",
                delay: 2
              }}
            />
          </div>

          <div className="relative z-10 text-center max-w-6xl mx-auto">
            {/* Main Heading */}
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
              variants={itemVariants}
            >
              Zion Tech Group
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Pioneering the Future of Technology with Revolutionary AI Consciousness, 
              Quantum Computing, and Autonomous Solutions
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              variants={itemVariants}
            >
              <Link href="/services">
                <motion.button 
                  className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center gap-2">
                    Explore Services
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10" />
                </motion.button>
              </Link>
              
              <Link href="/contact">
                <motion.button 
                  className="px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-full text-lg hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
              variants={itemVariants}
            >
              {[
                { number: '500+', label: 'Global Clients' },
                { number: '99.9%', label: 'Uptime' },
                { number: '24/7', label: 'Support' },
                { number: '2045', label: 'Technology' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Featured Services Section */}
        <motion.section 
          className="py-20 px-4 lg:px-8 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div className="text-center mb-16" variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary Technology Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the future with our cutting-edge AI consciousness, quantum computing, 
                and autonomous solutions that transform businesses worldwide.
              </p>
            </motion.div>

            {/* Category Filter */}
            <motion.div className="flex flex-wrap justify-center gap-4 mb-12" variants={itemVariants}>
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center gap-2">
                    <category.icon className="w-5 h-5" />
                    {category.name}
                  </span>
                </motion.button>
              ))}
            </motion.div>

            {/* Services Grid */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
            >
              {getFilteredServices().slice(0, 9).map((service, index) => (
                <motion.div
                  key={service.id || index}
                  variants={itemVariants}
                  className="group"
                >
                  {/* Removed Suspense as it's not needed for ServiceCard */}
                    <ServiceCard service={service} />
                </motion.div>
              ))}
            </motion.div>

            {/* View All Services Button */}
            <motion.div className="text-center mt-12" variants={itemVariants}>
              <Link href="/services">
                <motion.button 
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-full text-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center gap-2">
                    View All Services
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.section>

        {/* Technology Showcase */}
        <motion.section 
          className="py-20 px-4 lg:px-8 bg-gradient-to-b from-black to-gray-900/50 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div className="text-center mb-16" variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Cutting-Edge Technology Stack
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our revolutionary technology combines AI consciousness, quantum computing, 
                and autonomous systems to deliver unprecedented capabilities.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: BrainIcon,
                  title: "AI Consciousness Evolution",
                  description: "Next-generation AI with emotional intelligence and self-awareness capabilities",
                  color: "from-cyan-500 to-blue-600"
                },
                {
                  icon: AtomIcon,
                  title: "Quantum Computing Platform",
                  description: "Quantum-powered solutions for complex computational challenges",
                  color: "from-blue-500 to-indigo-600"
                },
                {
                  icon: ShieldIcon,
                  title: "Zero-Trust Security",
                  description: "Advanced cybersecurity with autonomous threat detection and response",
                  color: "from-red-500 to-orange-600"
                },
                {
                  icon: RocketIcon,
                  title: "Space Technology",
                  description: "Innovative solutions for space exploration and satellite systems",
                  color: "from-indigo-500 to-purple-600"
                },
                {
                  icon: Globe,
                  title: "Global Infrastructure",
                  description: "Worldwide network with edge computing and autonomous optimization",
                  color: "from-green-500 to-teal-600"
                },
                {
                  icon: Cpu,
                  title: "Autonomous Systems",
                  description: "Self-managing and self-optimizing technology infrastructure",
                  color: "from-purple-500 to-pink-600"
                }
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  className="group relative p-8 bg-gray-800/30 rounded-2xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:bg-gray-800/50"
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <tech.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{tech.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{tech.description}</p>
                  
                  {/* Hover Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section 
          className="py-20 px-4 lg:px-8 text-center relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              variants={itemVariants}
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 mb-8"
              variants={itemVariants}
            >
              Join the future of technology with Zion Tech Group. Our revolutionary solutions 
              are designed to propel your business into the next generation.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={itemVariants}
            >
              <Link href="/contact">
                <motion.button 
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Your Journey
                </motion.button>
              </Link>
              <Link href="/services">
                <motion.button 
                  className="px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-full text-lg hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300"
                >
                  Learn More
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.section>

        {/* Enhanced Footer */}
        <footer className="bg-gray-900/80 border-t border-gray-800/50 py-16 px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Zion Tech Group</h3>
                <p className="text-gray-400 mb-4">
                  Pioneering the future of technology with revolutionary AI consciousness, 
                  quantum computing, and autonomous solutions.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <span className="sr-only">GitHub</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="/services" className="hover:text-white transition-colors">AI & Consciousness</a></li>
                  <li><a href="/services" className="hover:text-white transition-colors">Quantum Computing</a></li>
                  <li><a href="/services" className="hover:text-white transition-colors">Cybersecurity</a></li>
                  <li><a href="/services" className="hover:text-white transition-colors">Space Technology</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                  <li><a href="/team" className="hover:text-white transition-colors">Our Team</a></li>
                  <li><a href="/careers" className="hover:text-white transition-colors">Careers</a></li>
                  <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
                <div className="text-gray-400 space-y-2">
                  <p>kleber@ziontechgroup.com</p>
                  <p>+1 302 464 0950</p>
                  <p>364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-800/50 mt-12 pt-8 text-center text-gray-400">
              <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
            </div>
          </div>
        </footer>

        {/* Accessibility Enhancement */}
        <EnhancedAccessibilityEnhancer />
        
        {/* Performance Monitor */}
        <EnhancedPerformanceMonitor />
      </div>
    </>
  );
};

export default Homepage2045;