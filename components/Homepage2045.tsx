import React, { useEffect, useState, useCallback, Suspense, lazy } from 'react';
import Layout from './layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Play, TrendingUp, Brain, Shield, Rocket, Globe, Cpu, Database, Atom, Target, Star, Sparkles as SparklesIcon,
  Brain as BrainIcon, Atom as AtomIcon, Shield as ShieldIcon, Rocket as RocketIcon, Zap, Eye, Heart, Infinity,
  ChevronRight, ChevronLeft, ExternalLink, Users, Award, Clock, CheckCircle, Zap as ZapIcon,
  Sun, Moon, Search, Menu, X
} from 'lucide-react';

// Import our new innovative services
import { innovative2045AdvancedServices } from '../data/innovative-2045-advanced-services';
import { innovative2045ITServices } from '../data/innovative-2045-it-services';
import { innovative2045MicroSAASServices } from '../data/innovative-2045-micro-saas-services';

// Enhanced loading fallback component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden">
    {/* Enhanced animated background particles */}
    <div className="absolute inset-0">
      {[...Array(100)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
          animate={{
            x: [0, Math.random() * 1000],
            y: [0, Math.random() * 1000],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            ease: "easeInOut"
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
      transition={{ duration: 1 }}
      className="text-center relative z-10"
    >
      <div className="relative">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 3, repeat: Infinity, ease: "linear" },
            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
          className="w-32 h-32 mx-auto mb-8"
        >
          <div className="w-full h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full blur-xl opacity-40 animate-pulse"></div>
          <div className="absolute inset-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
            <Brain className="w-16 h-16 text-white" />
          </div>
        </motion.div>
      </div>
      <motion.h1 
        className="text-4xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Loading Zion Tech Group 2045...
      </motion.h1>
      <p className="text-xl text-gray-300 mb-3">Preparing your futuristic digital transformation journey</p>
      <p className="text-lg text-gray-400">Quantum AI • Neural Interfaces • Space Technology</p>
      
      {/* Loading progress bar */}
      <motion.div 
        className="w-64 h-2 bg-gray-700 rounded-full mx-auto mt-8 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.div>
  </div>
);

// Lazy load heavy components
const LazyServiceCard = lazy(() => import('./ServiceCard'));
const LazyTestimonialSection = lazy(() => import('./TestimonialSection'));

const Homepage2045: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('zion-theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
    
    setIsVisible(true);
    setIsLoading(false);
    
    // Auto-rotate featured services
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % 6);
    }, 8000);
    
    // Track mouse movement for parallax effects
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Theme toggle handler
  const toggleTheme = useCallback(() => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem('zion-theme', newTheme ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newTheme);
  }, [isDarkMode]);

  // Search functionality
  const filteredServices = useCallback(() => {
    const allServices = [
      ...revolutionary2045AdvancedRealMicroSaas,
      ...revolutionary2045AdvancedITServices,
      ...revolutionary2045AdvancedAIServices
    ];
    
    if (!searchQuery) return allServices;
    
    return allServices.filter(service => 
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  // Combine all revolutionary services
  const allRevolutionaryServices = [
    ...revolutionary2045AdvancedRealMicroSaas,
    ...revolutionary2045AdvancedITServices,
    ...revolutionary2045AdvancedAIServices
  ];

      return () => observer.disconnect();
    }
  }, []);

  // Enhanced animations
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  // Filter services by category
  const getFilteredServices = () => {
    const services = filteredServices();
    if (selectedCategory === 'all') return services;
    return services.filter(service => 
      service.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      service.type.toLowerCase().includes(selectedCategory.toLowerCase())
    );
  };

  const backgroundVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 1.5, ease: "easeOut" }
  };

  const features = [
    { icon: Brain, title: "AI Consciousness Evolution 2045", description: "Next-generation AI consciousness with emotional intelligence", href: "/ai-consciousness-evolution-2045", color: "from-purple-500 to-pink-500" },
    { icon: Atom, title: "Quantum Consciousness Computing 2045", description: "Quantum-powered consciousness with infinite scalability", href: "/quantum-consciousness-computing-2045", color: "from-blue-500 to-cyan-500" },
    { icon: Cloud, title: "Quantum Cloud Infrastructure 2045", description: "Quantum-powered cloud with infinite scalability", href: "/quantum-cloud-infrastructure-2045", color: "from-emerald-500 to-teal-500" },
    { icon: Rocket, title: "Space-Based Computing 2045", description: "Orbital computing with global coverage", href: "/space-based-computing-infrastructure-2045", color: "from-indigo-500 to-purple-500" },
    { icon: Shield, title: "Quantum Cybersecurity 2045", description: "Quantum-resistant security with AI consciousness", href: "/quantum-cybersecurity-platform-2045", color: "from-red-500 to-orange-500" },
    { icon: Target, title: "Autonomous Business Automation 2045", description: "Fully autonomous business process automation", href: "/autonomous-business-process-automation-2045", color: "from-yellow-500 to-orange-500" },
    { icon: Heart, title: "Bio-Digital Health Platform 2045", description: "Seamless bio-digital health integration", href: "/bio-digital-health-platform-2045", color: "from-pink-500 to-red-500" },
    { icon: BookOpen, title: "Quantum Education Platform 2045", description: "Quantum-powered immersive learning", href: "/quantum-education-platform-2045", color: "from-green-500 to-blue-500" }
  ];

  // Enhanced scroll to section function
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, []);

  const handleServiceClick = useCallback((service: any) => {
    window.location.href = service.slug;
  }, []);

  const handleCategoryChange = useCallback((categoryId: string) => {
    setSelectedCategory(categoryId);
  }, []);

  // Loading skeleton component
  const LoadingSkeleton = () => (
    <div className="animate-pulse">
      <div className="h-64 bg-gray-700 rounded-lg mb-4"></div>
      <div className="h-4 bg-gray-700 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-700 rounded w-1/2"></div>
    </div>
  );

  if (isLoading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400 mx-auto mb-4"></div>
            <p className="text-cyan-400 text-xl">Loading Zion Tech Group...</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Enhanced Header with Search and Theme Toggle */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Zion Tech Group
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-gray-300 hover:text-cyan-400 transition-colors">Home</a>
              <a href="/services" className="text-gray-300 hover:text-cyan-400 transition-colors">Services</a>
              <a href="/about" className="text-gray-300 hover:text-cyan-400 transition-colors">About</a>
              <a href="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors">Contact</a>
            </nav>

            {/* Search Bar */}
            <div className="hidden md:flex items-center space-x-4 flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                />
              </div>
            </div>

            {/* Theme Toggle and Mobile Menu */}
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2 text-gray-400 hover:text-cyan-400 transition-colors"
                aria-label="Toggle theme"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-gray-400 hover:text-cyan-400 transition-colors"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden border-t border-gray-800/50"
              >
                <div className="py-4 space-y-4">
                  <a href="/" className="block text-gray-300 hover:text-cyan-400 transition-colors">Home</a>
                  <a href="/services" className="block text-gray-300 hover:text-cyan-400 transition-colors">Services</a>
                  <a href="/about" className="block text-gray-300 hover:text-cyan-400 transition-colors">About</a>
                  <a href="/contact" className="block text-gray-300 hover:text-cyan-400 transition-colors">Contact</a>
                  
                  {/* Mobile Search */}
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search services..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 pt-16">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-cyan-900/20" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]" />
            
            {/* Floating Elements */}
            <motion.div
              animate={{ 
                x: [0, 100, 0],
                y: [0, -100, 0],
                rotate: [0, 360, 0]
              }}
              transition={{ 
                duration: 20,
                repeat: -1,
                ease: "linear"
              }}
              className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg"
            />
            <motion.div
              animate={{ 
                x: [0, -100, 0],
                y: [0, 100, 0],
                rotate: [0, -360, 0]
              }}
              transition={{ 
                duration: 25,
                repeat: -1,
                ease: "linear"
              }}
              className="absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full"
            />
            <motion.div
              animate={{ 
                x: [0, 150, 0],
                y: [0, -150, 0],
                rotate: [0, 720, 0]
              }}
              transition={{ 
                duration: 30,
                repeat: -1,
                ease: "linear"
              }}
              className="absolute bottom-32 left-32 w-40 h-40 border border-pink-400/20 transform rotate-45"
            />
          </div>

            {/* Enhanced Hero Section */}
            <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 py-20">
              <div className="max-w-7xl mx-auto text-center relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="mb-12"
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="inline-block p-6 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 border border-cyan-400/30 mb-8 backdrop-blur-sm"
                  >
                    <Sparkles className="w-16 h-16 text-cyan-400" />
                  </motion.div>
                  
                  <motion.h1 
                    className="text-7xl md:text-9xl font-black mb-8 leading-tight"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                  >
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                      Zion Tech Group
                    </span>
                  </motion.h1>
                  
                  <motion.h2 
                    className="text-4xl md:text-6xl font-bold text-white mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                  >
                    <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                      2045
                    </span>
                  </motion.h2>
                  
                  <motion.p 
                    className="text-2xl md:text-3xl text-gray-300 mb-16 max-w-5xl mx-auto leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                  >
                    Pioneering the future with revolutionary AI, quantum computing, and space technology solutions. 
                    Transform your business with cutting-edge innovations that define tomorrow.
                  </motion.p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20"
                >
                  <motion.button
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(6, 182, 212, 0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection('services')}
                    className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full text-xl shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-3 group"
                  >
                    <Rocket className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                    Explore Services
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(168, 85, 247, 0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-5 border-2 border-purple-400 text-purple-400 font-bold rounded-full text-xl hover:bg-purple-400 hover:text-gray-900 transition-all duration-300 flex items-center gap-3 group backdrop-blur-sm"
                  >
                    <Play className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                    Watch Demo
                  </motion.button>
                </motion.div>

                {/* Enhanced Floating Stats */}
                <motion.div
                  key={stat.label}
                  className="text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1 }}
                  className="grid grid-cols-1 md:grid-cols-4 gap-8"
                >
                  {[
                    { icon: Users, value: '2,500+', label: 'Enterprise Clients', color: 'from-blue-400 to-cyan-500' },
                    { icon: Award, value: '99.9%', label: 'Uptime SLA', color: 'from-emerald-400 to-teal-500' },
                    { icon: TrendingUp, value: '500%', label: 'Performance Boost', color: 'from-orange-400 to-red-500' },
                    { icon: Star, value: '4.9/5', label: 'Customer Rating', color: 'from-purple-400 to-pink-500' }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ 
                        scale: 1.05,
                        y: -10,
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                      }}
                      className="text-center p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-500"
                    >
                      <div className={`inline-block p-4 rounded-2xl bg-gradient-to-r ${stat.color} mb-6`}>
                        <stat.icon className="w-10 h-10 text-white" />
                      </div>
                      <div className="text-4xl font-bold text-white mb-3">{stat.value}</div>
                      <div className="text-gray-300 text-lg">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </section>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <button
                  onClick={handleGetStarted}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
                  aria-label="Get started with Zion Tech Group services"
                >
                  <span className="flex items-center space-x-2">
                    Get Started Today
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </button>
                <button
                  onClick={handleWatchDemo}
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
                  aria-label="Watch demo of our services"
                >
                  <h2 className="text-6xl md:text-7xl font-bold mb-8">
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                      Revolutionary Services
                    </span>
                  </h2>
                  <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                    Discover our cutting-edge portfolio of AI, quantum computing, and space technology solutions 
                    that are reshaping industries and defining the future.
                  </p>
                </motion.div>

                {/* Enhanced Controls */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-16"
                >
                  {/* Category Filter */}
                  <div className="flex flex-wrap justify-center gap-3">
                    {categories.map((category) => (
                      <motion.button
                        key={category}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                          selectedCategory === category
                            ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                            : 'bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 hover:border-cyan-400/30'
                        }`}
                      >
                        {category}
                      </motion.button>
                    ))}
                  </div>

                  {/* View Mode and Sort Controls */}
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 bg-white/5 rounded-full p-1 border border-white/10">
                      <button
                        onClick={() => setViewMode('grid')}
                        className={`p-2 rounded-full transition-all duration-300 ${
                          viewMode === 'grid' 
                            ? 'bg-cyan-500 text-white' 
                            : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        <Grid className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => window.location.href = feature.href}
                        className={`px-8 py-4 bg-gradient-to-r ${feature.color} text-white font-medium rounded-xl hover:opacity-90 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-opacity-50`}
                        aria-label={`Explore ${feature.title} service`}
                      >
                        <List className="w-5 h-5" />
                      </button>
                    </div>

                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value as any)}
                      className="bg-white/5 border border-white/10 rounded-full px-4 py-2 text-white focus:outline-none focus:border-cyan-400 transition-all duration-300"
                    >
                      <option value="popularity">Most Popular</option>
                      <option value="name">Name A-Z</option>
                      <option value="category">Category</option>
                    </select>
                  </div>
                </motion.div>

                {/* Enhanced Search Bar */}
                <motion.div
                  key={service.id}
                  className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl border border-gray-700/50 p-6 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="max-w-3xl mx-auto mb-16"
                >
                  <div className="relative group">
                    <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6 group-focus-within:text-cyan-400 transition-colors duration-300" />
                    <input
                      type="text"
                      placeholder="Search for innovative services..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-16 py-5 bg-white/5 border border-white/10 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all duration-300 text-lg"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery('')}
                        className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        ×
                      </button>
                    )}
                  </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? `bg-gradient-to-r ${category.color} text-white`
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                  aria-label={`Filter services by ${category.name}`}
                >
                  {filteredServices.map((service, index) => (
                    <motion.div
                      key={service.id}
                      variants={fadeInUp}
                      whileHover={{ 
                        scale: 1.02,
                        y: -10,
                        boxShadow: "0 25px 50px -12px rgba(6, 182, 212, 0.25)"
                      }}
                      className={`group relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-500 ${
                        viewMode === 'list' ? 'flex items-start gap-6' : ''
                      }`}
                    >
                      {/* Service Icon */}
                      <div className={`inline-block p-4 rounded-2xl bg-gradient-to-r from-cyan-400/20 to-blue-500/20 mb-6 group-hover:scale-110 transition-transform duration-300 ${
                        viewMode === 'list' ? 'flex-shrink-0' : ''
                      }`}>
                        <Brain className="w-8 h-8 text-cyan-400" />
                      </div>

                      {/* Service Content */}
                      <div className={`${viewMode === 'list' ? 'flex-1' : ''}`}>
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                          {service.name}
                        </h3>
                        
                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {service.description}
                        </p>

                        {/* Service Features */}
                        <div className="space-y-2 mb-6">
                          {service.features && service.features.slice(0, 3).map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                              <CheckCircle className="w-4 h-4 text-emerald-400" />
                              {feature}
                            </div>
                          ))}
                        </div>

                                                 {/* Service Meta */}
                         <div className="flex items-center justify-between">
                           <div className="flex items-center gap-4 text-sm text-gray-400">
                             <span className="flex items-center gap-1">
                               <Star className="w-4 h-4 text-yellow-400" />
                               {service.rating || 'N/A'} ({service.reviews || 0})
                             </span>
                             <span className="flex items-center gap-1">
                               <DollarSign className="w-4 h-4" />
                               {service.price || 'Custom'}
                             </span>
                           </div>
                           
                           <motion.button
                             whileHover={{ scale: 1.05 }}
                             whileTap={{ scale: 0.95 }}
                             className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium rounded-full hover:shadow-lg transition-all duration-300"
                           >
                             Learn More
                           </motion.button>
                         </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* No Results Message */}
                {filteredServices.length === 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-16"
                  >
                    <Search className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-400 mb-2">No services found</h3>
                    <p className="text-gray-500">Try adjusting your search or filter criteria</p>
                  </motion.div>
                )}
              </div>
            </section>

            {/* Enhanced CTA Section */}
            <section className="relative py-24 px-4">
              <div className="max-w-6xl mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                  onClick={() => handleServiceClick(service)}
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      handleServiceClick(service);
                    }
                  }}
                  aria-label={`Learn more about ${service.name}`}
                >
                  <h2 className="text-5xl md:text-6xl font-bold mb-8">
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                      Ready to Transform Your Business?
                    </span>
                  </h2>
                  <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                    Join thousands of forward-thinking companies already leveraging our cutting-edge technology solutions. 
                    The future is now, and it starts with Zion Tech Group.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full text-xl shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-3"
                    >
                      <Rocket className="w-6 h-6" />
                      Get Started Today
                    </motion.button>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.features?.slice(0, 3).map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="px-2 py-1 bg-cyan-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-xs"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    <div className="mt-auto">
                      <button className="w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg group-hover:shadow-cyan-500/25 focus:outline-none focus:ring-4 focus:ring-cyan-500/50">
                        <span className="flex items-center justify-center space-x-2">
                          Learn More
                          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* View All Services Button */}
            <div className="text-center mt-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/services'}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25 focus:outline-none focus:ring-4 focus:ring-purple-500/50"
                aria-label="View all available services"
              >
                <span className="flex items-center space-x-2">
                  View All Services
                  <ArrowRight className="w-5 h-5" />
                </span>
              </motion.button>
            </div>
          </div>
        </section>

        {/* Lazy Loaded Testimonials */}
        <Suspense fallback={<LoadingSkeleton />}>
          <LazyTestimonialSection />
        </Suspense>

        {/* Call to Action */}
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Experience the
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"> Future</span>?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us to learn more about our revolutionary 2045 technology solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleGetStarted}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
                  aria-label="Get started with Zion Tech Group"
                >
                  <span className="flex items-center space-x-2">
                    Get Started Today
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </button>
                <button
                  onClick={handleWatchDemo}
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
                  aria-label="View all services"
                >
                  View All Services
                </button>
              </div>
              
              <motion.button
                onClick={handleGetStarted}
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center">
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Homepage2045;
