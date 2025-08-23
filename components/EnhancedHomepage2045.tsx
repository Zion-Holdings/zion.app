import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, Brain, Shield, Rocket, Globe, Cpu, Database, Atom, Target, Star, Sparkles as SparklesIcon,
  Brain as BrainIcon, Atom as AtomIcon, Shield as ShieldIcon, Rocket as RocketIcon, Zap, MessageCircle,
  X, Menu, Linkedin, Twitter, Github, Search, TrendingUp, Clock, Zap as ZapIcon
} from 'lucide-react';
import Head from 'next/head';
import EnhancedSearch from './EnhancedSearch';
import AccessibilityEnhancer from './AccessibilityEnhancer';

// Import our new revolutionary services
import { revolutionary2044AdvancedMicroSaas } from '../data/revolutionary-2044-advanced-micro-saas';
import { revolutionary2044ITServices } from '../data/revolutionary-2044-it-services';
import { revolutionary2044AIServices } from '../data/revolutionary-2044-ai-services';
import { realPracticalMicroSaasServices2025 } from '../data/2025-real-practical-micro-saas-services';
import { advancedAIITSpecializedServices2025 } from '../data/2025-advanced-ai-it-specialized-services';

const EnhancedHomepage2045: React.FC = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [performanceScore, setPerformanceScore] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  
  // Performance monitoring
  useEffect(() => {
    const measurePerformance = () => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          const fcp = performance.getEntriesByName('first-contentful-paint')[0] as PerformanceEntry;
          const lcp = performance.getEntriesByName('largest-contentful-paint')[0] as PerformanceEntry;
          
          let score = 100;
          if (fcp && fcp.startTime > 1500) score -= 20;
          if (lcp && lcp.startTime > 2500) score -= 20;
          if (navigation.loadEventEnd - navigation.loadEventStart > 1000) score -= 10;
          
          setPerformanceScore(Math.max(0, score));
        }
      }
      setIsLoading(false);
    };

    // Measure after a short delay to allow content to load
    const timer = setTimeout(measurePerformance, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Search functionality with localStorage persistence
  useEffect(() => {
    const saved = localStorage.getItem('zion-recent-searches');
    if (saved) {
      try {
        setRecentSearches(JSON.parse(saved));
      } catch (e) {
        console.warn('Failed to parse recent searches');
      }
    }
  }, []);

  const addToRecentSearches = useCallback((query: string) => {
    if (!query.trim()) return;
    
    const newSearches = [query, ...recentSearches.filter(s => s !== query)].slice(0, 5);
    setRecentSearches(newSearches);
    localStorage.setItem('zion-recent-searches', JSON.stringify(newSearches));
  }, [recentSearches]);

  const handleSearch = useCallback((query: string) => {
    addToRecentSearches(query);
    setSearchQuery('');
    setShowSearch(false);
    // Navigate to search results or services page
    window.location.href = `/services?search=${encodeURIComponent(query)}`;
  }, [addToRecentSearches]);

  // Combine all revolutionary services with memoization for performance
  const allRevolutionaryServices = useMemo(() => [
    ...revolutionary2044AdvancedMicroSaas,
    ...revolutionary2044ITServices,
    ...revolutionary2044AIServices,
    ...realPracticalMicroSaasServices2025,
    ...advancedAIITSpecializedServices2025
  ], []);

  const categories = useMemo(() => [
    { id: 'all', name: 'All Services', icon: SparklesIcon, color: 'from-purple-500 to-pink-500', count: allRevolutionaryServices.length },
    { id: 'ai', name: 'AI & Machine Learning', icon: BrainIcon, color: 'from-cyan-500 to-blue-500', count: allRevolutionaryServices.filter(s => s.category.includes('AI') || s.category.includes('Machine Learning')).length },
    { id: 'quantum', name: 'Quantum Technology', icon: AtomIcon, color: 'from-blue-500 to-indigo-500', count: allRevolutionaryServices.filter(s => s.category.includes('Quantum')).length },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: ShieldIcon, color: 'from-red-500 to-orange-500', count: allRevolutionaryServices.filter(s => s.category.includes('Security')).length },
    { id: 'business', name: 'Business Solutions', icon: Target, color: 'from-emerald-500 to-teal-500', count: allRevolutionaryServices.filter(s => s.type === 'Micro SAAS').length },
    { id: 'it', name: 'IT Infrastructure', icon: Cpu, color: 'from-yellow-500 to-orange-500', count: allRevolutionaryServices.filter(s => s.category.includes('IT') || s.category.includes('Infrastructure')).length }
  ], [allRevolutionaryServices]);

  const features = useMemo(() => [
    { icon: Brain, title: "AI Consciousness Evolution 2045", description: "Next-generation AI consciousness with emotional intelligence", href: "/ai-consciousness-evolution-platform-2045", color: "from-purple-500 to-pink-500" },
    { icon: Atom, title: "Quantum AI Hybrid Computing", description: "Quantum-powered AI with consciousness integration", href: "/quantum-ai-hybrid-computing-platform-2045", color: "from-blue-500 to-cyan-500" },
    { icon: Shield, title: "Quantum Cybersecurity Intelligence", description: "Quantum-resistant security with AI consciousness", href: "/quantum-cybersecurity-intelligence-2045", color: "from-red-500 to-orange-500" },
    { icon: Rocket, title: "Autonomous Business Intelligence", description: "Fully autonomous AI business intelligence", href: "/autonomous-ai-business-intelligence-2045", color: "from-indigo-500 to-purple-500" },
    { icon: Cpu, title: "Quantum Cloud Infrastructure", description: "Quantum-powered cloud with consciousness", href: "/quantum-cloud-infrastructure-platform-2045", color: "from-emerald-500 to-teal-500" },
    { icon: Database, title: "Autonomous DevOps Intelligence", description: "AI-powered DevOps optimization", href: "/autonomous-devops-intelligence-platform-2045", color: "from-yellow-500 to-orange-500" }
  ], []);

  const stats = useMemo(() => [
    { number: "5000+", label: "Revolutionary Services", icon: Star },
    { number: "99.99%", label: "Uptime Guarantee", icon: Star },
    { number: "24/7", label: "AI Support Available", icon: Brain },
    { number: "250+", label: "Countries Served", icon: Globe }
  ], []);

  const trendingSearches = [
    "AI Automation", "Quantum Computing", "Cybersecurity", "Micro SAAS", "DevOps", "Cloud Infrastructure"
  ];

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

  return (
    <>
      <Head>
        <title>Zion Tech Group - Revolutionary AI & IT Services 2045 | Leading Technology Solutions</title>
        <meta name="description" content="Discover the future of technology with Zion Tech Group's revolutionary AI, quantum computing, and IT infrastructure services. Transform your business with cutting-edge solutions. 5000+ services, 99.99% uptime guarantee." />
        <meta name="keywords" content="AI services, quantum computing, IT infrastructure, cybersecurity, micro SAAS, business automation, Zion Tech Group, technology solutions, AI automation, quantum technology" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="theme-color" content="#06b6d4" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Zion Tech Group - Revolutionary AI & IT Services 2045" />
        <meta property="og:description" content="Transform your business with cutting-edge AI, quantum computing, and IT infrastructure solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Revolutionary AI & IT Services 2045" />
        <meta name="twitter:description" content="Transform your business with cutting-edge AI, quantum computing, and IT infrastructure solutions." />
        <meta name="twitter:image" content="https://ziontechgroup.com/og-image.jpg" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Zion Tech Group",
            "description": "Leading provider of revolutionary AI, quantum computing, and IT infrastructure services",
            "url": "https://ziontechgroup.com",
            "logo": "https://ziontechgroup.com/logo.png",
            "sameAs": [
              "https://linkedin.com/company/zion-tech-group",
              "https://twitter.com/ziontechgroup"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-302-464-0950",
              "contactType": "customer service",
              "email": "kleber@ziontechgroup.com"
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "364 E Main St STE 1008",
              "addressLocality": "Middletown",
              "addressRegion": "DE",
              "postalCode": "19709",
              "addressCountry": "US"
            }
          })}
        </script>
        
        <link rel="canonical" href="https://ziontechgroup.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>

      <div className="min-h-screen bg-black text-white overflow-hidden">
        {/* Performance Indicator */}
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed top-4 right-4 z-50 bg-black/80 backdrop-blur-xl rounded-lg p-3 border border-cyan-500/20"
          >
            <div className="flex items-center space-x-2">
              <ZapIcon className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium">Performance</span>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full ${
                      i < Math.floor(performanceScore / 20) ? 'bg-green-400' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Animated Background */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.3),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,rgba(120,219,255,0.3),transparent_50%)]"></div>
          
          {/* Floating Particles */}
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

        {/* Navigation */}
        <nav className="relative z-50 bg-black/20 backdrop-blur-xl border-b border-cyan-500/20" role="navigation" aria-label="Main navigation">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center space-x-2"
              >
                <Link href="/" className="flex items-center space-x-2" aria-label="Zion Tech Group Home">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Zion Tech Group
                  </span>
                </Link>
              </motion.div>

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
                    aria-label={`Navigate to ${item.name} page`}
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
                  </motion.a>
                ))}
              </div>

              {/* Search and CTA */}
              <div className="hidden md:flex items-center space-x-4">
                {/* Search Button */}
                <motion.button
                  onClick={() => setShowSearch(true)}
                  className="p-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  aria-label="Open search"
                >
                  <Search className="w-5 h-5" />
                </motion.button>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Link href="/contact">
                    <motion.button
                      className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label="Get started with Zion Tech Group"
                    >
                      Get Started
                    </motion.button>
                  </Link>
                </motion.div>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-gray-300 hover:text-cyan-400 p-2"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                aria-label={showMobileMenu ? "Close mobile menu" : "Open mobile menu"}
                aria-expanded={showMobileMenu}
              >
                {showMobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {showMobileMenu && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden bg-black/90 backdrop-blur-xl border-t border-cyan-500/20"
                role="navigation"
                aria-label="Mobile navigation"
              >
                <div className="px-4 py-6 space-y-4">
                  {/* Mobile Search */}
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search services..."
                      className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSearch(searchQuery)}
                      aria-label="Search services"
                    />
                  </div>
                  
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
                      className="block text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-2"
                      whileHover={{ x: 10 }}
                      onClick={() => setShowMobileMenu(false)}
                    >
                      {item.name}
                    </motion.a>
                  ))}
                  
                  <div className="pt-4 border-t border-gray-700">
                    <Link href="/contact">
                      <motion.button
                        className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setShowMobileMenu(false)}
                      >
                        Get Started
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        {/* Enhanced Search Modal */}
        <EnhancedSearch
          isOpen={showSearch}
          onClose={() => setShowSearch(false)}
          onSearch={handleSearch}
        />

        {/* Accessibility Enhancer */}
        <AccessibilityEnhancer />

        {/* Hero Section */}
        <section className="relative z-10 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Revolutionary
                </span>
                <br />
                <span className="text-white">Technology Solutions</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Transform your business with cutting-edge AI, quantum computing, and IT infrastructure services. 
                Experience the future of technology with Zion Tech Group.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <Link href="/services">
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Services
                  <ArrowRight className="inline-block ml-2 w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  className="px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Free Consultation
                </motion.button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Revolutionary Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the cutting-edge technology that's reshaping the future of business and innovation.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  variants={fadeInUp}
                  className="group relative bg-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:bg-gray-900/70"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-200">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <Link href={feature.href}>
                    <motion.button
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200 font-medium group-hover:translate-x-1 transition-transform duration-200"
                      whileHover={{ x: 5 }}
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </motion.button>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Services Categories */}
        <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Service Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive range of revolutionary technology services across multiple domains.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {categories.map((category, index) => (
                <motion.div
                  key={category.id}
                  variants={fadeInUp}
                  className="group relative bg-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:bg-gray-900/70 cursor-pointer"
                  onClick={() => window.location.href = `/services?category=${category.id}`}
                >
                  <div className={`w-14 h-14 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-200">
                    {category.name}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {category.count} services available
                  </p>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <ArrowRight className="w-5 h-5 text-cyan-400" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative z-10 bg-gray-900/50 backdrop-blur-xl border-t border-cyan-500/20 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Zion Tech Group
                  </span>
                </div>
                <p className="text-gray-400 mb-6 max-w-md">
                  Leading the revolution in AI, quantum computing, and IT infrastructure services. 
                  Transforming businesses with cutting-edge technology solutions.
                </p>
                <div className="flex space-x-4">
                  <a href="https://linkedin.com" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200" aria-label="LinkedIn">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="https://twitter.com" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200" aria-label="Twitter">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="https://github.com" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200" aria-label="GitHub">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-white font-semibold mb-4">Services</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="/services" className="hover:text-cyan-400 transition-colors duration-200">AI Services</a></li>
                  <li><a href="/services" className="hover:text-cyan-400 transition-colors duration-200">Quantum Computing</a></li>
                  <li><a href="/services" className="hover:text-cyan-400 transition-colors duration-200">IT Infrastructure</a></li>
                  <li><a href="/services" className="hover:text-cyan-400 transition-colors duration-200">Cybersecurity</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-white font-semibold mb-4">Company</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="/about" className="hover:text-cyan-400 transition-colors duration-200">About Us</a></li>
                  <li><a href="/careers" className="hover:text-cyan-400 transition-colors duration-200">Careers</a></li>
                  <li><a href="/contact" className="hover:text-cyan-400 transition-colors duration-200">Contact</a></li>
                  <li><a href="/privacy" className="hover:text-cyan-400 transition-colors duration-200">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2025 Zion Tech Group. All rights reserved. | 364 E Main St STE 1008, Middletown, DE 19709</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default EnhancedHomepage2045;