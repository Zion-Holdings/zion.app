import React, { useEffect, useState, useCallback, Suspense, lazy } from 'react';
import Layout from './layout/Layout';
import SEOHead from './SEOHead';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Play, TrendingUp, Brain, Shield, Rocket, Globe, Cpu, Database, Atom, Target, Star, Sparkles as SparklesIcon,
  Brain as BrainIcon, Atom as AtomIcon, Shield as ShieldIcon, Rocket as RocketIcon, Zap, Eye, Heart, Infinity,
  Search, Filter, Moon, Sun, Loader2
} from 'lucide-react';

// Import our new revolutionary services
import { revolutionary2044AdvancedMicroSaas } from '../data/revolutionary-2044-advanced-micro-saas';
import { revolutionary2044ITServices } from '../data/revolutionary-2044-it-services';
import { revolutionary2044AIServices } from '../data/revolutionary-2044-ai-services';

// Lazy load heavy components for better performance
const ServiceCard = lazy(() => import('./ServiceCard'));
const TestimonialsSection = lazy(() => import('./TestimonialsSection'));
const LiveChatWidget = lazy(() => import('./LiveChatWidget'));

const Homepage2044: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [searchQuery, setSearchQuery] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate featured services
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % 6);
    }, 6000);
    
    // Track mouse movement for parallax effects
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Check user's preferred color scheme
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Combine all revolutionary services
  const allRevolutionaryServices = [
    ...revolutionary2044AdvancedMicroSaas,
    ...revolutionary2044ITServices,
    ...revolutionary2044AIServices
  ];

  // Get featured services for rotation
  const featuredServices = allRevolutionaryServices.slice(0, 6);

  // Filter services by category and search query
  const getFilteredServices = () => {
    let filtered = allRevolutionaryServices;
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => 
        service.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        service.type.toLowerCase().includes(selectedCategory.toLowerCase())
      );
    }
    
    if (searchQuery.trim()) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    return filtered;
  };

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
    { number: "2000+", label: "Revolutionary Services", icon: Star },
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

  const handleServiceClick = useCallback((service: any) => {
    setIsLoading(true);
    setTimeout(() => {
      window.location.href = service.slug;
    }, 300);
  }, []);

  const toggleTheme = useCallback(() => {
    setIsDarkMode(prev => !prev);
    // Apply theme change to document
    document.documentElement.classList.toggle('dark');
  }, []);

  const handleSearch = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    // Search functionality is already implemented in getFilteredServices
  }, []);

  const filteredServices = getFilteredServices();

  return (
    <>
      <SEOHead />
      <Layout>
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

            {/* Theme Toggle Button */}
            <motion.button
              className="absolute top-8 right-8 z-20 p-3 bg-gray-900/80 border border-gray-700/50 rounded-full backdrop-blur-xl hover:bg-gray-800/80 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
            >
              {isDarkMode ? (
                <Sun className="w-6 h-6 text-yellow-400" />
              ) : (
                <Moon className="w-6 h-6 text-blue-400" />
              )}
            </motion.button>

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
                className="text-7xl md:text-9xl lg:text-[12rem] font-black mb-10 leading-none"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(6,182,212,0.5)]">
                  Zion Tech Group
                </span>
              </motion.h1>
              
              <motion.p
                className="text-3xl md:text-4xl text-gray-300 mb-16 max-w-6xl mx-auto leading-relaxed font-light"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                <button 
                  className="group px-12 py-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-3xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-[0_0_50px_rgba(6,182,212,0.4)] focus:outline-none focus:ring-4 focus:ring-cyan-500/50 text-xl relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={handleGetStarted}
                  disabled={isLoading}
                  aria-label="Get started with Zion Tech Group revolutionary services"
                >
                  <span className="relative z-10 flex items-center">
                    {isLoading ? (
                      <>
                        <Loader2 className="w-7 h-7 mr-4 animate-spin" />
                        Loading...
                      </>
                    ) : (
                      <>
                        Experience the Future
                        <ArrowRight className="w-7 h-7 ml-4 group-hover:translate-x-2 transition-transform duration-300" />
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
                </button>
                <button 
                  className="px-12 py-6 border-2 border-cyan-400 text-cyan-400 font-bold rounded-3xl hover:bg-cyan-400 hover:text-black transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 text-xl shadow-[0_0_30px_rgba(6,182,212,0.3)] backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={handleWatchDemo}
                  disabled={isLoading}
                  aria-label="Explore our revolutionary services"
                >
                  <span className="flex items-center">
                    {isLoading ? (
                      <>
                        <Loader2 className="w-7 h-7 mr-4 animate-spin" />
                        Loading...
                      </>
                    ) : (
                      <>
                        Explore Services
                        <Play className="w-7 h-7 ml-4" />
                      </>
                    )}
                  </span>
                </button>
              </motion.div>

              {/* Enhanced Search and Filter Section */}
              <motion.div
                className="max-w-4xl mx-auto mb-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              >
                <div className="relative">
                  <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4">
                    <div className="relative flex-1">
                      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search revolutionary services..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-12 pr-4 py-4 bg-gray-900/80 border border-gray-700/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 focus:border-cyan-500/50 backdrop-blur-xl"
                        aria-label="Search services"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => setShowFilters(!showFilters)}
                      className="px-6 py-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/40 rounded-2xl text-purple-300 font-medium hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-500/50 backdrop-blur-xl flex items-center gap-2"
                      aria-label="Toggle service filters"
                    >
                      <Filter className="w-5 h-5" />
                      Filters
                    </button>
                  </form>
                  
                  {/* Filter Categories */}
                  <AnimatePresence>
                    {showFilters && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-6 overflow-hidden"
                      >
                        <div className="flex flex-wrap gap-3 justify-center">
                          {categories.map((category) => (
                            <button
                              key={category.id}
                              onClick={() => setSelectedCategory(category.id)}
                              className={`px-4 py-2 rounded-full border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 ${
                                selectedCategory === category.id
                                  ? 'bg-gradient-to-r ' + category.color + ' border-transparent text-white shadow-lg'
                                  : 'bg-gray-900/60 border-gray-700/50 text-gray-300 hover:border-cyan-500/50 hover:text-cyan-400'
                              }`}
                              aria-label={`Filter by ${category.name}`}
                            >
                              <span className="flex items-center gap-2">
                                <category.icon className="w-4 h-4" />
                                {category.name}
                              </span>
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>

              {/* Featured Service Showcase */}
              <motion.div
                className="max-w-6xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              >
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-white mb-4">
                    Featured Revolutionary Services
                  </h2>
                  <p className="text-xl text-gray-400">
                    Experience the future of technology with our cutting-edge solutions
                  </p>
                  {searchQuery && (
                    <p className="text-lg text-cyan-400 mt-2">
                      Showing {filteredServices.length} results for "{searchQuery}"
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredServices.slice(0, 6).map((service, index) => (
                    <Suspense key={service.id} fallback={
                      <div className="relative p-8 bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/50 rounded-3xl backdrop-blur-xl animate-pulse">
                        <div className="w-16 h-16 bg-gray-700 rounded-2xl mb-6"></div>
                        <div className="h-6 bg-gray-700 rounded mb-3"></div>
                        <div className="h-4 bg-gray-700 rounded mb-4"></div>
                        <div className="h-4 bg-gray-700 rounded"></div>
                      </div>
                    }>
                      <ServiceCard
                        service={service}
                        index={index}
                        currentServiceIndex={currentServiceIndex}
                        onClick={() => handleServiceClick(service)}
                      />
                    </Suspense>
                  ))}
                </div>
                
                {filteredServices.length === 0 && (
                  <div className="text-center py-12">
                    <div className="w-24 h-24 bg-gray-800/50 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Search className="w-12 h-12 text-gray-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                    <p className="text-gray-400 mb-6">Try adjusting your search or filters</p>
                    <button
                      onClick={() => {
                        setSearchQuery('');
                        setSelectedCategory('all');
                      }}
                      className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
                    >
                      Clear Filters
                    </button>
                  </div>
                )}
              </motion.div>
            </div>
          </section>

          {/* Testimonials Section */}
          <Suspense fallback={
            <div className="py-24 px-4">
              <div className="max-w-7xl mx-auto text-center">
                <div className="animate-pulse">
                  <div className="h-16 bg-gray-700 rounded mb-6 max-w-2xl mx-auto"></div>
                  <div className="h-6 bg-gray-700 rounded mb-20 max-w-4xl mx-auto"></div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="p-8 bg-gray-800/50 rounded-3xl animate-pulse">
                        <div className="w-12 h-12 bg-gray-700 rounded-2xl mb-6"></div>
                        <div className="h-4 bg-gray-700 rounded mb-4"></div>
                        <div className="h-4 bg-gray-700 rounded mb-6"></div>
                        <div className="h-4 bg-gray-700 rounded mb-4"></div>
                        <div className="h-4 bg-gray-700 rounded"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          }>
            <TestimonialsSection />
          </Suspense>

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
                    transition={{ duration: 0.6, delay: index * 0.1 }}
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
                    transition={{ duration: 0.6, delay: index * 0.1 }}
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
                    disabled={isLoading}
                  >
                    Get Started Today
                    <ArrowRight className="w-6 h-6 ml-3 inline" />
                  </button>
                  <button 
                    className="px-12 py-6 border-2 border-cyan-400 text-cyan-400 font-bold rounded-3xl hover:bg-cyan-400 hover:text-black transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 text-xl"
                    onClick={handleWatchDemo}
                    disabled={isLoading}
                  >
                    Schedule Demo
                    <Play className="w-6 h-6 ml-3 inline" />
                  </button>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Live Chat Widget */}
          <Suspense fallback={null}>
            <LiveChatWidget />
          </Suspense>
        </main>
      </Layout>
    </>
  );
};

export default Homepage2044;