import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, Brain, Shield, Rocket, Globe, Cpu, Database, Atom, Target, Star, Sparkles as SparklesIcon,
  Brain as BrainIcon, Atom as AtomIcon, Shield as ShieldIcon, Rocket as RocketIcon, Zap, MessageCircle,
  X, Menu, Linkedin, Twitter, Github, Search, TrendingUp, Users, Award
} from 'lucide-react';
import SEOOptimizer from './SEOOptimizer';

// Import our new revolutionary services
import { revolutionary2044AdvancedMicroSaas } from '../data/revolutionary-2044-advanced-micro-saas';
import { revolutionary2044ITServices } from '../data/revolutionary-2044-it-services';
import { revolutionary2044AIServices } from '../data/revolutionary-2044-ai-services';
import { realPracticalMicroSaasServices2025 } from '../data/2025-real-practical-micro-saas-services';
import { advancedAIITSpecializedServices2025 } from '../data/2025-advanced-ai-it-specialized-services';
import { innovative2025ITInfrastructureServices } from '../data/2025-innovative-it-infrastructure-services';

const EnhancedHomepage2045: React.FC = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(false);
  
  // Memoize services data for better performance
  const allRevolutionaryServices = useMemo(() => [
    ...revolutionary2044AdvancedMicroSaas,
    ...revolutionary2044ITServices,
    ...revolutionary2044AIServices,
    ...realPracticalMicroSaasServices2025,
    ...advancedAIITSpecializedServices2025,
    ...innovative2025ITInfrastructureServices
  ], []);

  // Filtered services based on search and category
  const filteredServices = useMemo(() => {
    let filtered = allRevolutionaryServices;
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(s => {
        if (selectedCategory === 'ai') return s.category.includes('AI') || s.category.includes('Machine Learning');
        if (selectedCategory === 'quantum') return s.category.includes('Quantum');
        if (selectedCategory === 'cybersecurity') return s.category.includes('Security');
        if (selectedCategory === 'business') return s.type === 'Micro SAAS';
        if (selectedCategory === 'it') return s.category.includes('IT') || s.category.includes('Infrastructure');
        return true;
      });
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(s => 
        s.name.toLowerCase().includes(query) ||
        s.description.toLowerCase().includes(query) ||
        s.category.toLowerCase().includes(query) ||
        s.tagline?.toLowerCase().includes(query)
      );
    }
    
    return filtered.slice(0, 6); // Show only first 6 for performance
  }, [allRevolutionaryServices, selectedCategory, searchQuery]);

  const categories = [
    { id: 'all', name: 'All Services', icon: SparklesIcon, color: 'from-purple-500 to-pink-500', count: allRevolutionaryServices.length },
    { id: 'ai', name: 'AI & Machine Learning', icon: BrainIcon, color: 'from-cyan-500 to-blue-500', count: allRevolutionaryServices.filter(s => s.category.includes('AI') || s.category.includes('Machine Learning')).length },
    { id: 'quantum', name: 'Quantum Technology', icon: AtomIcon, color: 'from-blue-500 to-indigo-500', count: allRevolutionaryServices.filter(s => s.category.includes('Quantum')).length },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: ShieldIcon, color: 'from-red-500 to-orange-500', count: allRevolutionaryServices.filter(s => s.category.includes('Security')).length },
    { id: 'business', name: 'Business Solutions', icon: Target, color: 'from-emerald-500 to-teal-500', count: allRevolutionaryServices.filter(s => s.type === 'Micro SAAS').length },
    { id: 'it', name: 'IT Infrastructure', icon: Cpu, color: 'from-yellow-500 to-orange-500', count: allRevolutionaryServices.filter(s => s.category.includes('IT') || s.category.includes('Infrastructure')).length }
  ];

  const features = [
    { icon: Brain, title: "AI Consciousness Evolution 2045", description: "Next-generation AI consciousness with emotional intelligence", href: "/ai-consciousness-evolution-platform-2045", color: "from-purple-500 to-pink-500" },
    { icon: Atom, title: "Quantum AI Hybrid Computing", description: "Quantum-powered AI with consciousness integration", href: "/quantum-ai-hybrid-computing-platform-2045", color: "from-blue-500 to-cyan-500" },
    { icon: Shield, title: "Quantum Cybersecurity Intelligence", description: "Quantum-resistant security with AI consciousness", href: "/quantum-cybersecurity-intelligence-2045", color: "from-red-500 to-orange-500" },
    { icon: Rocket, title: "Autonomous Business Intelligence", description: "Fully autonomous AI business intelligence", href: "/autonomous-ai-business-intelligence-2045", color: "from-indigo-500 to-purple-500" },
    { icon: Cpu, title: "Quantum Cloud Infrastructure", description: "Quantum-powered cloud with consciousness", href: "/quantum-cloud-infrastructure-platform-2045", color: "from-emerald-500 to-teal-500" },
    { icon: Database, title: "Autonomous DevOps Intelligence", description: "AI-powered DevOps optimization", href: "/autonomous-devops-intelligence-platform-2045", color: "from-yellow-500 to-orange-500" }
  ];

  const stats = [
    { number: "5000+", label: "Revolutionary Services", icon: Star, description: "Cutting-edge solutions" },
    { number: "99.99%", label: "Uptime Guarantee", icon: TrendingUp, description: "Reliable performance" },
    { number: "24/7", label: "AI Support Available", icon: Brain, description: "Always here to help" },
    { number: "250+", label: "Countries Served", icon: Globe, description: "Global reach" }
  ];

  // Enhanced animations
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: "easeOut" }
  };

  // Handle search with debouncing
  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    setIsLoading(true);
    // Simulate search delay for better UX
    setTimeout(() => setIsLoading(false), 300);
  }, []);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowMobileMenu(false);
        setIsSearchFocused(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // SEO data for the homepage
  const seoData = {
    title: "Zion Tech Group - Revolutionary AI & IT Services 2045",
    description: "Discover the future of technology with Zion Tech Group's revolutionary AI, quantum computing, and IT infrastructure services. Transform your business with cutting-edge solutions.",
    keywords: "AI services, quantum computing, IT infrastructure, cybersecurity, micro SAAS, business automation, Zion Tech Group",
    canonical: "https://ziontechgroup.com",
    ogImage: "/og-image.svg",
    ogType: "website",
    additionalMeta: [
      { name: "geo.region", content: "US-DE" },
      { name: "geo.placename", content: "Middletown, Delaware" },
      { name: "business:contact:phone", content: "+1-302-464-0950" },
      { name: "business:contact:email", content: "kleber@ziontechgroup.com" }
    ]
  };

  return (
    <SEOOptimizer data={seoData}>
      <div className="min-h-screen bg-black text-white overflow-hidden">
        {/* Enhanced Animated Background */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.3),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,rgba(120,219,255,0.3),transparent_50%)]"></div>
          
          {/* Enhanced Floating Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-20"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -100, 0],
                  opacity: [0.2, 0.8, 0.2],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: 999999,
                  ease: "linear"
                }}
              />
            ))}
          </div>
        </div>

        {/* Enhanced Navigation */}
        <nav className="relative z-50 bg-black/20 backdrop-blur-xl border-b border-cyan-500/20 sticky top-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center space-x-2"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </motion.div>

              {/* Enhanced Search Bar */}
              <div className="hidden md:flex flex-1 max-w-md mx-8">
                <div className="relative w-full">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                    className="w-full pl-10 pr-4 py-2 bg-gray-900/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200"
                    aria-label="Search services"
                  />
                  {isLoading && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    >
                      <div className="w-4 h-4 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {[
                  { name: 'Home', href: '/' },
                  { name: 'Services', href: '/services' },
                  { name: 'Solutions', href: '/solutions' },
                  { name: 'About', href: '/about' },
                  { name: 'Contact', href: '/contact' }
                ].map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 relative group"
                    whileHover={{ scale: 1.05 }}
                    aria-label={`Navigate to ${item.name}`}
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
                  </motion.a>
                ))}
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="hidden md:block"
              >
                <Link href="/contact">
                  <motion.button
                    className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Get started with Zion Tech Group"
                  >
                    Get Started
                  </motion.button>
                </Link>
              </motion.div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-gray-300 hover:text-cyan-400 p-2"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                aria-label="Toggle mobile menu"
                aria-expanded={showMobileMenu}
              >
                {showMobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Enhanced Mobile Menu */}
          <AnimatePresence>
            {showMobileMenu && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden bg-black/90 backdrop-blur-xl border-t border-cyan-500/20"
              >
                <div className="px-4 py-4 space-y-4">
                  {/* Mobile Search */}
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search services..."
                      value={searchQuery}
                      onChange={(e) => handleSearch(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 bg-gray-900/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
                      aria-label="Search services on mobile"
                    />
                  </div>
                  
                  {[
                    { name: 'Home', href: '/' },
                    { name: 'Services', href: '/services' },
                    { name: 'Solutions', href: '/solutions' },
                    { name: 'About', href: '/about' },
                    { name: 'Contact', href: '/contact' }
                  ].map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-2"
                      onClick={() => setShowMobileMenu(false)}
                      aria-label={`Navigate to ${item.name}`}
                    >
                      {item.name}
                    </a>
                  ))}
                  <Link href="/contact">
                    <button 
                      className="w-full px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
                      aria-label="Get started with Zion Tech Group"
                    >
                      Get Started
                    </button>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        {/* Enhanced Hero Section */}
        <section className="relative z-10 pt-20 pb-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Revolutionary
                </span>
                <br />
                <span className="text-white">Technology Solutions</span>
                <br />
                <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                  2045
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Transform your business with cutting-edge AI, quantum computing, and next-generation IT infrastructure. 
                Experience the future of technology with Zion Tech Group.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <Link href="/services">
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25 flex items-center space-x-2"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Explore our services"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-200 flex items-center space-x-2"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Contact us for more information"
                >
                  <span>Contact Us</span>
                  <MessageCircle className="w-5 h-5" />
                </motion.button>
              </Link>
            </motion.div>

            {/* Enhanced Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="text-center group cursor-pointer"
                  whileHover={{ y: -5 }}
                >
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm md:text-base font-medium">{stat.label}</div>
                  <div className="text-gray-500 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {stat.description}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Enhanced Services Categories */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Service Categories
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our comprehensive range of revolutionary technology services designed to transform your business
              </p>
            </motion.div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600/30'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`Filter by ${category.name}`}
                >
                  {category.name} ({category.count})
                </motion.button>
              ))}
            </div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {categories.map((category) => (
                <motion.div
                  key={category.id}
                  variants={fadeInUp}
                  className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 cursor-pointer"
                  whileHover={{ y: -10, scale: 1.02 }}
                  onClick={() => setSelectedCategory(category.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setSelectedCategory(category.id)}
                  aria-label={`Select ${category.name} category`}
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{category.name}</h3>
                  <div className="text-cyan-400 font-semibold text-lg mb-4">{category.count} Services</div>
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="w-6 h-6 text-cyan-400" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Enhanced Featured Services with Search Results */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  {searchQuery ? 'Search Results' : 'Featured Services'}
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {searchQuery 
                  ? `Found ${filteredServices.length} services matching "${searchQuery}"`
                  : 'Experience the cutting-edge technology that\'s shaping the future of business'
                }
              </p>
            </motion.div>

            {searchQuery && filteredServices.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <div className="text-gray-400 text-lg mb-4">No services found matching your search.</div>
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Clear search and show all services
                </button>
              </motion.div>
            )}

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {(searchQuery ? filteredServices : features).map((feature, index) => (
                <motion.div
                  key={feature.title || feature.name}
                  variants={fadeInUp}
                  className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10"
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title || feature.name}</h3>
                  <p className="text-gray-400 mb-6">{feature.description || feature.tagline}</p>
                  {feature.pricing && (
                    <div className="mb-4">
                      <div className="text-cyan-400 font-semibold">Starting at {feature.pricing.starter}</div>
                    </div>
                  )}
                  <Link href={feature.href || feature.slug || '#'}>
                    <motion.button
                      className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      aria-label={`Learn more about ${feature.title || feature.name}`}
                    >
                      Learn More
                    </motion.button>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 backdrop-blur-xl rounded-3xl p-12 border border-cyan-500/20"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Ready to Transform
                </span>
                <br />
                <span className="text-white">Your Business?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of businesses already leveraging our revolutionary technology solutions. 
                The future is now.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <motion.button
                    className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Get started with Zion Tech Group today"
                  >
                    Get Started Today
                  </motion.button>
                </Link>
                <Link href="/services">
                  <motion.button
                    className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="View all our services"
                  >
                    View All Services
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Footer */}
        <footer className="relative z-10 bg-black/90 backdrop-blur-xl border-t border-cyan-500/20 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Zion Tech Group
                  </span>
                </div>
                <p className="text-gray-400 mb-4">
                  Revolutionary technology solutions for the future of business.
                </p>
                <div className="flex space-x-4">
                  <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors" aria-label="Visit our LinkedIn page">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors" aria-label="Visit our Twitter page">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="https://github.com/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors" aria-label="Visit our GitHub page">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-white font-semibold mb-4">Services</h3>
                <ul className="space-y-2">
                  <li><a href="/services?category=ai" className="text-gray-400 hover:text-cyan-400 transition-colors">AI & Machine Learning</a></li>
                  <li><a href="/services?category=quantum" className="text-gray-400 hover:text-cyan-400 transition-colors">Quantum Computing</a></li>
                  <li><a href="/services?category=cybersecurity" className="text-gray-400 hover:text-cyan-400 transition-colors">Cybersecurity</a></li>
                  <li><a href="/services?category=it" className="text-gray-400 hover:text-cyan-400 transition-colors">IT Infrastructure</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-white font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><a href="/about" className="text-gray-400 hover:text-cyan-400 transition-colors">About Us</a></li>
                  <li><a href="/team" className="text-gray-400 hover:text-cyan-400 transition-colors">Our Team</a></li>
                  <li><a href="/careers" className="text-gray-400 hover:text-cyan-400 transition-colors">Careers</a></li>
                  <li><a href="/contact" className="text-gray-400 hover:text-cyan-400 transition-colors">Contact</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-white font-semibold mb-4">Contact</h3>
                <div className="space-y-2 text-gray-400">
                  <p>+1 302 464 0950</p>
                  <p>kleber@ziontechgroup.com</p>
                  <p>364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
              <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </SEOOptimizer>
  );
};

export default EnhancedHomepage2045;