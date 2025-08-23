import React, { useEffect, useState, useCallback } from 'react';
import Layout from './layout/Layout';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Play, Users, TrendingUp, Brain, Shield, Rocket, Globe, Lock, Cpu, Database, Cloud, BarChart3,
  Atom, Target, Zap, Infinity, Sparkles, Star, Eye, Heart, Code, Palette, Layers, Search, Sun, Moon, Bell
} from 'lucide-react';

// Import our new revolutionary services
import { revolutionary2040FuturisticServices } from '../data/revolutionary-2040-futuristic-services';
import { revolutionary2041AdvancedServices } from '../data/revolutionary-2041-advanced-services';

const Homepage2040: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showNotifications, setShowNotifications] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate featured services
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % 3);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  // Add structured data for SEO
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "description": "Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide.",
      "url": "https://ziontechgroup.com",
      "logo": "https://ziontechgroup.com/logo.png",
      "sameAs": [
        "https://linkedin.com/company/ziontechgroup",
        "https://twitter.com/ziontechgroup"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-800-ZION-TECH",
        "contactType": "customer service"
      },
      "offers": {
        "@type": "Offer",
        "description": "Revolutionary AI consciousness, quantum computing, and autonomous solutions"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  // Combine all revolutionary services
  const allRevolutionaryServices = [...revolutionary2040FuturisticServices, ...revolutionary2041AdvancedServices];

  // Get featured services for rotation
  const featuredServices = allRevolutionaryServices.slice(0, 6);

  // Filter services based on search query
  const filteredServices = allRevolutionaryServices.filter(service =>
    service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.tagline.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const features = [
    { icon: Brain, title: "AI Consciousness Evolution", description: "Next-generation AI consciousness and emotional intelligence", href: "/ai-consciousness-evolution-2040", color: "from-purple-500 to-pink-500" },
    { icon: Atom, title: "Quantum Computing", description: "Revolutionary quantum computing with consciousness integration", href: "/quantum-neural-ecosystem-2040", color: "from-blue-500 to-cyan-500" },
    { icon: Shield, title: "Future Cybersecurity", description: "Quantum-resistant security with consciousness-based protection", href: "/quantum-cybersecurity-future-2040", color: "from-red-500 to-orange-500" },
    { icon: Rocket, title: "Space Technology", description: "AI-powered space resource intelligence and management", href: "/space-resource-intelligence-2040", color: "from-indigo-500 to-purple-500" },
    { icon: Cpu, title: "Autonomous Systems", description: "Fully autonomous AI systems with consciousness", href: "/ai-autonomous-research-2041", color: "from-emerald-500 to-teal-500" },
    { icon: Database, title: "Business Intelligence", description: "Autonomous business intelligence with consciousness insights", href: "/autonomous-business-intelligence-2040", color: "from-yellow-500 to-orange-500" }
  ];

  const stats = [
    { number: "1000+", label: "Revolutionary Services", icon: Star },
    { number: "99.99%", label: "Uptime Guarantee", icon: TrendingUp },
    { number: "24/7", label: "AI Support Available", icon: Brain },
    { number: "100+", label: "Countries Served", icon: Globe }
  ];

  const handleGetStarted = useCallback(() => {
    window.location.href = '/revolutionary-2040-2041-pricing-showcase';
  }, []);

  const handleWatchDemo = useCallback(() => {
    window.location.href = '/services';
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  return (
    <Layout>
      {/* Main Content */}
      <main className="relative z-10">
        {/* Enhanced Hero Section with Search */}
        <section 
          className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
          aria-labelledby="hero-heading"
        >
          {/* Enhanced Animated Background */}
          <div className="absolute inset-0 -z-10">
            {/* Floating orbs */}
            <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
            
            {/* Animated particles */}
            <div className="absolute inset-0">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
                  animate={{
                    x: [0, 100, 0],
                    y: [0, -100, 0],
                    opacity: [0, 0.8, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 6 + i * 0.5,
                    repeat: Infinity as any,
                    delay: i * 0.3,
                    ease: "easeInOut"
                  }}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </div>

            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                backgroundSize: '50px 50px'
              }}></div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="text-center max-w-6xl mx-auto relative z-10">
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-6">
                🚀 Revolutionary 2040-2041 Technology
              </span>
            </motion.div>

            <motion.h1
              id="hero-heading"
              className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </motion.h1>
            
            <motion.p
              className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide.
            </motion.p>

            {/* Enhanced Search Bar */}
            <motion.div
              className="max-w-2xl mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search our revolutionary services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-12 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300"
                  aria-label="Search revolutionary services"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                    aria-label="Clear search"
                  >
                    ×
                  </button>
                )}
              </div>
              
              {/* Search Results Dropdown */}
              {searchQuery && filteredServices.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute z-50 w-full mt-2 bg-black/90 backdrop-blur-sm border border-white/20 rounded-xl max-h-96 overflow-y-auto"
                >
                  {filteredServices.slice(0, 5).map((service, index) => (
                    <div
                      key={index}
                      className="p-4 hover:bg-white/10 cursor-pointer border-b border-white/10 last:border-b-0"
                      onClick={() => {
                        window.location.href = service.slug || '/services';
                        setSearchQuery('');
                      }}
                    >
                      <h4 className="text-white font-medium">{service.name}</h4>
                      <p className="text-gray-400 text-sm">{service.tagline}</p>
                    </div>
                  ))}
                </motion.div>
              )}
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <button 
                className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-2xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 text-lg"
                onClick={handleGetStarted}
                aria-label="Get started with Zion Tech Group revolutionary services"
              >
                Experience the Future
                <ArrowRight className="w-6 h-6 ml-3 inline" />
              </button>
              <button 
                className="px-10 py-5 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-2xl hover:bg-cyan-400 hover:text-black transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 text-lg"
                onClick={handleWatchDemo}
                aria-label="Explore our revolutionary services"
              >
                Explore Services
                <Play className="w-6 h-6 ml-3 inline" />
              </button>
            </motion.div>

            {/* Theme Toggle and Notifications */}
            <motion.div
              className="flex justify-center gap-4 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            >
              <button
                onClick={toggleDarkMode}
                className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
              >
                {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-blue-400" />}
              </button>
              
              <button
                onClick={toggleNotifications}
                className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 relative"
                aria-label="Toggle notifications"
              >
                <Bell className="w-5 h-5 text-cyan-400" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
              </button>
            </motion.div>

            {/* Featured Service Showcase */}
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Featured Revolutionary Service</h3>
                  <p className="text-gray-400">Experience the cutting edge of technology</p>
                </div>
                
                <motion.div
                  key={currentServiceIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 p-4">
                    <Brain className="w-full h-full text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    {featuredServices[currentServiceIndex]?.name}
                  </h4>
                  <p className="text-gray-300 mb-4">
                    {featuredServices[currentServiceIndex]?.tagline}
                  </p>
                  <button 
                    className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
                    onClick={() => window.location.href = featuredServices[currentServiceIndex]?.slug || '/services'}
                  >
                    Learn More
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Social Proof Section */}
        <section className="py-24 px-4" aria-labelledby="stats-heading">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 id="stats-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
                Trusted by Industry Leaders
              </h2>
              <p className="text-2xl text-gray-400 max-w-3xl mx-auto">
                Join thousands of companies already transforming their business with our revolutionary solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ y: -10, scale: 1.05 }}
                >
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-cyan-500/30">
                    <stat.icon className="w-10 h-10 text-cyan-400" aria-hidden="true" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-3">{stat.number}</div>
                  <div className="text-gray-400 text-lg">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Features Section */}
        <section className="py-24 px-4" aria-labelledby="features-heading">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 id="features-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-2xl text-gray-400 max-w-4xl mx-auto">
                Our revolutionary suite of cutting-edge technologies and services sets us apart in the industry
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 p-8 cursor-pointer"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ y: -15, scale: 1.03 }}
                  onClick={() => window.location.href = feature.href}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      window.location.href = feature.href;
                    }
                  }}
                  aria-label={`Learn more about ${feature.title}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  <div className="relative">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} p-4 mb-6`}>
                      <feature.icon className="w-full h-full text-white" aria-hidden="true" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed text-lg">{feature.description}</p>
                    <div className="mt-6 flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      <span className="text-base font-medium">Learn More</span>
                      <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Services Preview */}
        <section className="py-24 px-4" aria-labelledby="services-heading">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 id="services-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Revolutionary Services
              </h2>
              <p className="text-2xl text-gray-400 max-w-4xl mx-auto">
                From AI consciousness evolution to quantum computing solutions, we're building the future today
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Brain, title: "AI & Consciousness", description: "Revolutionary AI consciousness and emotional intelligence", gradient: "from-purple-500 to-pink-500", href: "/ai-consciousness-evolution-2040", count: "15+ Services" },
                { icon: Atom, title: "Quantum Computing", description: "Next-generation quantum computing with consciousness", gradient: "from-cyan-500 to-blue-500", href: "/quantum-neural-ecosystem-2040", count: "12+ Services" },
                { icon: Shield, title: "Future Cybersecurity", description: "Quantum-resistant security with consciousness protection", gradient: "from-red-500 to-orange-500", href: "/quantum-cybersecurity-future-2040", count: "8+ Services" },
                { icon: Cloud, title: "Cloud Infrastructure", description: "Quantum cloud infrastructure with consciousness optimization", gradient: "from-emerald-500 to-teal-500", href: "/quantum-cloud-infrastructure-2041", count: "10+ Services" },
                { icon: BarChart3, title: "Business Intelligence", description: "Autonomous business intelligence with consciousness insights", gradient: "from-indigo-500 to-purple-500", href: "/autonomous-business-intelligence-2040", count: "6+ Services" },
                { icon: Lock, title: "Advanced Security", description: "Future-proof security with consciousness integration", gradient: "from-yellow-500 to-orange-500", href: "/ai-ethics-governance-2041", count: "9+ Services" }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 cursor-pointer"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  onClick={() => window.location.href = service.href}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      window.location.href = service.href;
                    }
                  }}
                  aria-label={`Learn more about ${service.title}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  <div className="relative p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} p-3`}>
                        <service.icon className="w-full h-full text-white" aria-hidden="true" />
                      </div>
                      <span className="text-sm text-gray-400">{service.count}</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-300 leading-relaxed text-lg mb-6">{service.description}</p>
                    <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      <span className="text-base font-medium">Explore Services</span>
                      <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-24 px-4" aria-labelledby="cta-heading">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl p-16 border border-cyan-400/20"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 id="cta-heading" className="text-5xl md:text-6xl font-bold text-white mb-8">
                Ready to Transform Your Business?
              </h2>
              <p className="text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
                Join thousands of companies already leveraging our revolutionary technology solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button 
                  className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-2xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 text-lg"
                  onClick={() => window.location.href = '/revolutionary-2040-2041-pricing-showcase'}
                  aria-label="Start your journey with Zion Tech Group"
                >
                  Start Your Journey
                  <ArrowRight className="w-6 h-6 ml-3 inline" />
                </button>
                <button 
                  className="px-10 py-5 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-2xl hover:bg-cyan-400 hover:text-black transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 text-lg"
                  onClick={() => window.location.href = '/services'}
                  aria-label="Explore our revolutionary services"
                >
                  Explore Services
                  <Play className="w-6 h-6 ml-3 inline" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Notifications Panel */}
        {showNotifications && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="fixed top-20 right-4 z-50 w-80 bg-black/95 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Notifications</h3>
              <button
                onClick={toggleNotifications}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Close notifications"
              >
                ×
              </button>
            </div>
            <div className="space-y-3">
              <div className="p-3 bg-cyan-500/20 border border-cyan-500/30 rounded-lg">
                <p className="text-sm text-cyan-300">New AI consciousness features available!</p>
                <span className="text-xs text-gray-400">2 hours ago</span>
              </div>
              <div className="p-3 bg-purple-500/20 border border-purple-500/30 rounded-lg">
                <p className="text-sm text-purple-300">Quantum computing platform updated</p>
                <span className="text-xs text-gray-400">1 day ago</span>
              </div>
              <div className="p-3 bg-green-500/20 border border-green-500/30 rounded-lg">
                <p className="text-sm text-green-300">New security features deployed</p>
                <span className="text-xs text-gray-400">3 days ago</span>
              </div>
            </div>
          </motion.div>
        )}
      </main>
    </Layout>
  );
};

export default Homepage2040;