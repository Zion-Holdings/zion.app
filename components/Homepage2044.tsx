import React, { useEffect, useState, useCallback, Suspense, lazy } from 'react';
import Layout from './layout/Layout';
import SEOHead from './SEOHead';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Play, TrendingUp, Brain, Shield, Rocket, Globe, Cpu, Database, Atom, Target, Star, Sparkles as SparklesIcon,
  Brain as BrainIcon, Atom as AtomIcon, Shield as ShieldIcon, Rocket as RocketIcon, Infinity,
  Sun, Moon, Search, Menu, X
} from 'lucide-react';
import PerformanceDashboard from './PerformanceDashboard';
import EnhancedSEO from './EnhancedSEO';

// Import our new revolutionary services
import { revolutionary2044AdvancedMicroSaas } from '../data/revolutionary-2044-advanced-micro-saas';
import { revolutionary2044ITServices } from '../data/revolutionary-2044-it-services';
import { revolutionary2044AIServices } from '../data/revolutionary-2044-ai-services';
import { innovative2025AIAutonomousEcosystemV3 } from '../data/2025-innovative-ai-autonomous-ecosystem-v3';
import { emerging2025TechBreakthroughsV4 } from '../data/2025-emerging-tech-breakthroughs-v4';
import { advanced2025ITInfrastructureServicesV2 } from '../data/2025-advanced-it-infrastructure-services-v2';

// Lazy load components for better performance
const TestimonialSection = React.lazy(() => import('./TestimonialSection'));

// Enhanced loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center p-8">
    <div className="relative">
      <div className="w-12 h-12 border-4 border-blue-200 rounded-full animate-spin"></div>
      <div className="absolute top-0 left-0 w-12 h-12 border-4 border-blue-600 rounded-full animate-ping opacity-75"></div>
    </div>
    <span className="ml-3 text-lg font-medium text-gray-700">Loading revolutionary technology...</span>
  </div>
);

// Import new enhanced components
const ThemeToggle = lazy(() => import('./ThemeToggle'));
const ServiceComparisonTool = lazy(() => import('./ServiceComparisonTool'));
const RealTimeChatSupport = lazy(() => import('./RealTimeChatSupport'));
const EnhancedPerformanceMonitor = lazy(() => import('./EnhancedPerformanceMonitor'));

// Lazy load heavy components for better performance
const ServiceCard = lazy(() => import('./ServiceCard'));
const TestimonialsSection = lazy(() => import('./TestimonialsSection'));
const LiveChatWidget = lazy(() => import('./LiveChatWidget'));

// Lazy load heavy components
const ServiceCard = lazy(() => import('./ServiceCard'));

const Homepage2044: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  useEffect(() => {
    setIsVisible(true);
    
    // Simulate loading time for better UX
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    // Auto-rotate featured services
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % 6);
    }, 6000);
    
    return () => {
      clearInterval(interval);
    };
  }, []);

  // Toggle dark mode
  const toggleDarkMode = useCallback(() => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  }, [darkMode]);

  // Filter services by search query
  const getFilteredServices = useCallback(() => {
    let services = [];
    if (selectedCategory === 'all') {
      services = [...revolutionary2044AdvancedMicroSaas, ...revolutionary2044ITServices, ...revolutionary2044AIServices];
    } else {
      services = [...revolutionary2044AdvancedMicroSaas, ...revolutionary2044ITServices, ...revolutionary2044AIServices].filter(service => 
        service.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        service.type.toLowerCase().includes(selectedCategory.toLowerCase())
      );
    }
    
    if (searchQuery) {
      services = services.filter(service => 
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    return services;
  }, [selectedCategory, searchQuery]);

  // Combine all revolutionary services
  const allRevolutionaryServices = [
    ...revolutionary2044AdvancedMicroSaas,
    ...revolutionary2044ITServices,
    ...revolutionary2044AIServices,
    ...innovative2025AIAutonomousEcosystemV3,
    ...emerging2025TechBreakthroughsV4,
    ...advanced2025ITInfrastructureServicesV2
  ];



  const categories = [
    { id: 'all', name: 'All Services', icon: SparklesIcon, color: 'from-purple-500 to-pink-500' },
    { id: 'ai', name: 'AI & Consciousness', icon: BrainIcon, color: 'from-cyan-500 to-blue-500' },
    { id: 'quantum', name: 'Quantum Technology', icon: AtomIcon, color: 'from-blue-500 to-indigo-500' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: ShieldIcon, color: 'from-red-500 to-orange-500' },
    { id: 'space', name: 'Space Technology', icon: RocketIcon, color: 'from-indigo-500 to-purple-500' },
    { id: 'business', name: 'Business Solutions', icon: Target, color: 'from-emerald-500 to-teal-500' }
  ];

  const features = [
    { icon: Brain, title: "AI Consciousness Evolution 2044", description: "Next-generation AI consciousness with emotional intelligence", href: "/ai-consciousness-evolution-2044", color: "from-purple-500 to-pink-500" },
    { icon: Atom, title: "Quantum Neural Networks 2044", description: "Quantum-powered AI with consciousness integration", href: "/quantum-neural-network-platform-2044", color: "from-blue-500 to-cyan-500" },
    { icon: Shield, title: "Quantum Cybersecurity 2044", description: "Quantum-resistant security with AI consciousness", href: "/quantum-cybersecurity-platform-2044", color: "from-red-500 to-orange-500" },
    { icon: Rocket, title: "Space Resource Intelligence 2044", description: "AI-powered space exploration with consciousness", href: "/space-resource-intelligence-2044", color: "from-indigo-500 to-purple-500" },
    { icon: Cpu, title: "Autonomous Business Intelligence 2044", description: "Fully autonomous AI business intelligence", href: "/ai-autonomous-business-intelligence-2044", color: "from-emerald-500 to-teal-500" },
    { icon: Database, title: "Quantum Cloud Infrastructure 2044", description: "Quantum-powered cloud with consciousness", href: "/quantum-cloud-infrastructure-2044", color: "from-yellow-500 to-orange-500" }
  ];

  const stats = [
    { number: "2500+", label: "Revolutionary Services", icon: Star },
    { number: "99.99%", label: "Uptime Guarantee", icon: TrendingUp },
    { number: "24/7", label: "AI Support Available", icon: Brain },
    { number: "200+", label: "Countries Served", icon: Globe }
  ];

  const handleGetStarted = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      window.location.href = '/revolutionary-2044-pricing-showcase';
    }, 500);
  }, []);

  const handleWatchDemo = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      window.location.href = '/services';
    }, 500);
  }, []);

  const handleServiceClick = useCallback((service: { slug: string }) => {
    window.location.href = service.slug;
  }, []);

  // Loading component
  const LoadingSpinner = () => (
    <div className="flex items-center justify-center p-8">
      <Loader2 className="w-8 h-8 text-cyan-400 animate-spin" />
      <span className="ml-3 text-cyan-400">Loading revolutionary services...</span>
    </div>
  );

  return (
    <>
      <EnhancedSEO />
      <Layout>
        {/* Performance Dashboard */}
        <PerformanceDashboard />
        
        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            >
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                className="absolute right-0 top-0 h-full w-80 bg-gray-900/95 backdrop-blur-xl border-l border-gray-700/50"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-xl font-bold text-white">Menu</h3>
                    <button
                      onClick={() => setMobileMenuOpen(false)}
                      className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                    >
                      <X className="w-6 h-6 text-gray-400" />
                    </button>
                  </div>
                  
                  {/* Mobile Search */}
                  <div className="relative mb-6">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search services..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                    />
                  </div>

                  {/* Mobile Navigation */}
                  <nav className="space-y-4">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => {
                          setSelectedCategory(category.id);
                          setMobileMenuOpen(false);
                        }}
                        className={`w-full text-left p-3 rounded-lg transition-colors ${
                          selectedCategory === category.id
                            ? 'bg-cyan-500/20 border border-cyan-500/50 text-cyan-400'
                            : 'text-gray-300 hover:bg-gray-800/50'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <category.icon className="w-5 h-5" />
                          <span>{category.name}</span>
                        </div>
                      </button>
                    ))}
                  </nav>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <main className="relative z-10">
          {/* Hero Section */}
          <section 
            className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
            aria-labelledby="hero-heading"
          >
            {/* Enhanced Animated Background */}
            <div className="absolute inset-0 -z-10">
              {/* Floating orbs with neon effects */}
              <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse shadow-[0_0_100px_rgba(6,182,212,0.5)]"></div>
              <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000 shadow-[0_0_100px_rgba(168,85,247,0.5)]"></div>
              <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse delay-500 shadow-[0_0_100px_rgba(16,185,129,0.5)]"></div>
              
              {/* Animated particles with neon trails */}
              <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-cyan-400/40 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.8)]"
                    animate={{
                      x: [0, 150, 0],
                      y: [0, -150, 0],
                      opacity: [0, 1, 0],
                      scale: [0, 1.5, 0],
                    }}
                    transition={{
                      duration: 8 + i * 0.3,
                      repeat: Infinity as any,
                      delay: i * 0.2,
                      ease: "easeInOut"
                    }}
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                  />
                ))}
              </div>

              {/* Grid pattern with neon glow */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, rgba(6,182,212,0.3) 1px, transparent 0)`,
                  backgroundSize: '60px 60px'
                }}></div>
              </div>

              {/* Floating geometric shapes */}
              <motion.div
                className="absolute top-32 right-32 w-24 h-24 border border-cyan-400/30 rotate-45"
                animate={{
                  rotate: [45, 405],
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity as any,
                  ease: "linear"
                }}
              />
              <motion.div
                className="absolute bottom-32 left-32 w-16 h-16 border border-purple-400/30 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity as any,
                  ease: "easeInOut"
                }}
              />
            </div>

            {/* Top Controls Bar */}
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20 flex items-center space-x-4">
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-3 bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-full hover:bg-gray-800/80 transition-all duration-300 group"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <Sun className="w-5 h-5 text-yellow-400 group-hover:scale-110 transition-transform" />
                ) : (
                  <Moon className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-3 bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-full hover:bg-gray-800/80 transition-all duration-300 lg:hidden"
                aria-label="Open mobile menu"
              >
                <Menu className="w-5 h-5 text-gray-300" />
              </button>
            </div>

            {/* Hero Content */}
            <div className="text-center max-w-7xl mx-auto relative z-10">
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <span className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/40 rounded-full text-purple-300 text-lg font-medium mb-8 shadow-[0_0_30px_rgba(168,85,247,0.3)] backdrop-blur-sm">
                  🚀 Revolutionary 2044 Technology
                </span>
              </motion.div>

              <motion.h1
                id="hero-heading"
                className="text-5xl md:text-7xl lg:text-9xl xl:text-[12rem] font-black mb-10 leading-none px-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(6,182,212,0.5)]">
                  Zion Tech Group
                </span>
              </motion.h1>
              
              <motion.p
                className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-300 mb-16 max-w-6xl mx-auto leading-relaxed font-light px-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 px-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                <button 
                  className="group px-8 md:px-12 py-4 md:py-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-3xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-[0_0_50px_rgba(6,182,212,0.4)] focus:outline-none focus:ring-4 focus:ring-cyan-500/50 text-lg md:text-xl relative overflow-hidden w-full sm:w-auto"
                  onClick={handleGetStarted}
                  aria-label="Get started with Zion Tech Group revolutionary services"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Experience the Future
                    <ArrowRight className="w-5 h-5 md:w-7 md:h-7 ml-2 md:ml-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
                </button>
                <button 
                  className="px-8 md:px-12 py-4 md:py-6 border-2 border-cyan-400 text-cyan-400 font-bold rounded-3xl hover:bg-cyan-400 hover:text-black transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 text-lg md:text-xl shadow-[0_0_30px_rgba(6,182,212,0.3)] backdrop-blur-sm w-full sm:w-auto"
                  onClick={handleWatchDemo}
                  aria-label="Explore our revolutionary services"
                >
                  <span className="flex items-center justify-center">
                    Explore Services
                    <Play className="w-5 h-5 md:w-7 md:h-7 ml-2 md:ml-4" />
                  </span>
                </button>
              </motion.div>

              {/* Search and Filter Section */}
              <motion.div
                className="max-w-4xl mx-auto mb-16 px-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              >
                {/* Search Bar */}
                <div className="relative mb-8">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search for revolutionary services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 text-lg"
                  />
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap justify-center gap-3">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-4 py-2 rounded-full border transition-all duration-300 flex items-center space-x-2 ${
                        selectedCategory === category.id
                          ? 'bg-gradient-to-r ' + category.color + ' border-transparent text-white shadow-lg'
                          : 'bg-gray-900/50 border-gray-700/50 text-gray-300 hover:border-gray-600/50 hover:bg-gray-800/50'
                      }`}
                    >
                      <category.icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{category.name}</span>
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Featured Service Showcase */}
              <motion.div
                className="max-w-6xl mx-auto px-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Featured Revolutionary Services
                  </h2>
                  <p className="text-lg md:text-xl text-gray-400">
                    Experience the future of technology with our cutting-edge solutions
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                                  {getFilteredServices().slice(0, 6).map((service, index) => (
                  <motion.div
                    key={service.id || index}
                    className={`relative group cursor-pointer ${
                      index === currentServiceIndex ? 'scale-105' : 'scale-100'
                    } transition-transform duration-500`}
                    onClick={() => handleServiceClick(service)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                      <div className="relative p-6 md:p-8 bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/50 rounded-3xl backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] hover:shadow-[0_0_80px_rgba(6,182,212,0.3)] transition-all duration-300 group-hover:border-cyan-500/50">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        <div className="relative z-10">
                          <div className="flex items-center justify-between mb-4 md:mb-6">
                            <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                              <Brain className="w-6 h-6 md:w-8 md:h-8 text-white" />
                            </div>
                            <span className="px-2 md:px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-300 text-xs md:text-sm font-medium">
                              {service.type}
                            </span>
                          </div>
                          
                          <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                            {service.name}
                          </h3>
                          
                          <p className="text-gray-400 text-sm leading-relaxed mb-3 md:mb-4">
                            {service.description.substring(0, 120)}...
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <span className="text-xl md:text-2xl font-bold text-cyan-400">
                              {service.pricing.starter}
                            </span>
                            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-gray-500 group-hover:text-cyan-400 transition-colors duration-300" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Show more services button if there are more filtered results */}
                {getFilteredServices().length > 6 && (
                  <div className="text-center mt-8">
                    <button
                      onClick={() => window.location.href = '/services'}
                      className="px-8 py-3 border border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300"
                    >
                      View All {getFilteredServices().length} Services
                    </button>
                  </div>
                )}
              </motion.div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-24 px-4 relative">
            <div className="max-w-7xl mx-auto">
              <motion.div
                className="text-center mb-20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-5xl font-bold text-white mb-6">
                  Revolutionary Technology Features
                </h2>
                <p className="text-xl text-gray-400 max-w-4xl mx-auto">
                  Discover the cutting-edge features that make our 2044 technology revolutionary
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    className="group relative"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative p-8 bg-gradient-to-br from-gray-900/60 to-gray-800/60 border border-gray-700/30 rounded-3xl backdrop-blur-xl hover:border-cyan-500/50 transition-all duration-300 group-hover:shadow-[0_0_50px_rgba(6,182,212,0.2)]">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      <div className="relative z-10">
                        <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(6,182,212,0.3)]`}>
                          <feature.icon className="w-8 h-8 text-white" />
                        </div>
                        
                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                          {feature.title}
                        </h3>
                        
                        <p className="text-gray-400 leading-relaxed mb-6">
                          {feature.description}
                        </p>
                        
                        <a
                          href={feature.href}
                          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-300 group-hover:translate-x-2"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-24 px-4 relative">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center group"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-[0_0_40px_rgba(6,182,212,0.3)] group-hover:shadow-[0_0_60px_rgba(6,182,212,0.5)] transition-all duration-300">
                      <stat.icon className="w-10 h-10 text-white" />
                    </div>
                    
                    <div className="text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {stat.number}
                    </div>
                    
                    <div className="text-gray-400 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-24 px-4 relative">
            <div className="max-w-6xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-5xl font-bold text-white mb-8">
                  Ready to Experience the Future?
                </h2>
                
                <p className="text-xl text-gray-400 mb-12 max-w-4xl mx-auto">
                  Join thousands of businesses already transforming their operations with our revolutionary 2044 technology solutions.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <button 
                    className="px-12 py-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-3xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-[0_0_50px_rgba(6,182,212,0.4)] focus:outline-none focus:ring-4 focus:ring-cyan-500/50 text-xl"
                    onClick={handleGetStarted}
                  >
                    Get Started Today
                    <ArrowRight className="w-6 h-6 ml-3 inline" />
                  </button>
                  
                  <button 
                    className="px-12 py-6 border-2 border-cyan-400 text-cyan-400 font-bold rounded-3xl hover:bg-cyan-400 hover:text-black transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 text-xl"
                    onClick={handleWatchDemo}
                  >
                    Schedule Demo
                    <Play className="w-6 h-6 ml-3 inline" />
                  </button>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default Homepage2044;