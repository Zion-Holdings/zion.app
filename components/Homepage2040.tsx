import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, Star, Users, Award, Brain, Atom, Rocket, 
  Shield, Cloud, Database, Code, Server, Zap, Palette,
  Cpu, BarChart3, Settings, Target, CheckCircle, Play,
  ChevronRight, ChevronLeft, Phone, Mail, MapPin, Sun, Moon,
  Menu, X, Search, Globe, TrendingUp, Lightbulb, Sparkles
} from 'lucide-react';

// Enhanced types for better TypeScript support
interface HeroSlide {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  textColor: string;
  link: string;
  bgImage?: string;
}

interface FeaturedService {
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  link: string;
  category: string;
  rating: number;
}

interface Stat {
  number: string;
  label: string;
  icon: React.ReactNode;
  description: string;
}

const Homepage2040: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Performance optimization: Memoize expensive computations
  const contactInfo = useMemo(() => ({
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  }), []);

  const heroSlides: HeroSlide[] = useMemo(() => [
    {
      title: "AI Consciousness Evolution",
      subtitle: "Revolutionary AI consciousness platform with emotional intelligence and self-awareness",
      description: "Experience the future of AI with our groundbreaking consciousness evolution platform that develops emotional intelligence, self-awareness, and advanced cognitive capabilities.",
      icon: <Brain className="w-16 h-16" />,
      color: "from-purple-600 to-indigo-700",
      textColor: "text-purple-400",
      link: "/ai-consciousness-evolution-2040"
    },
    {
      title: "Quantum Neural Ecosystem",
      subtitle: "Hybrid quantum-AI computing for unprecedented computational power",
      description: "Unlock the power of quantum computing combined with advanced AI in our revolutionary neural ecosystem that delivers exponential performance improvements.",
      icon: <Atom className="w-16 h-16" />,
      color: "from-cyan-600 to-blue-700",
      textColor: "text-cyan-400",
      link: "/quantum-neural-ecosystem-2040"
    },
    {
      title: "Space Resource Intelligence",
      subtitle: "Advanced space technology solutions for resource exploration and management",
      description: "Pioneer the future of space exploration with our cutting-edge space resource intelligence platform that revolutionizes how we discover and utilize extraterrestrial resources.",
      icon: <Rocket className="w-16 h-16" />,
      color: "from-pink-600 to-red-700",
      textColor: "text-pink-400",
      link: "/space-resource-intelligence-2040"
    }
  ], []);

  const featuredServices: FeaturedService[] = useMemo(() => [
    {
      name: "AI Autonomous Code Review",
      description: "Automated code quality analysis with AI-powered insights and security scanning",
      icon: <Code className="w-8 h-8" />,
      color: "from-emerald-600 to-teal-700",
      link: "/ai-autonomous-code-review",
      category: "AI & Development",
      rating: 4.9
    },
    {
      name: "Zero Trust Network Architecture",
      description: "Comprehensive zero-trust security implementation with continuous verification",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-600 to-pink-700",
      link: "/zero-trust-network-architecture",
      category: "Security",
      rating: 4.8
    },
    {
      name: "Multi-Cloud Orchestration Platform",
      description: "Unified cloud management platform for seamless multi-cloud operations",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-blue-600 to-indigo-700",
      link: "/multi-cloud-orchestration-platform",
      category: "Cloud",
      rating: 4.7
    },
    {
      name: "AI-Powered Content Generation",
      description: "Advanced AI platform for creating high-quality, personalized content at scale",
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-600 to-pink-700",
      link: "/ai-content-generation-platform",
      category: "AI & Marketing",
      rating: 4.9
    }
  ], []);

  const stats: Stat[] = useMemo(() => [
    { 
      number: "25+", 
      label: "Innovative Services", 
      icon: <Zap className="w-6 h-6" />,
      description: "Cutting-edge solutions across multiple domains"
    },
    { 
      number: "500+", 
      label: "Happy Customers", 
      icon: <Users className="w-6 h-6" />,
      description: "Trusted by businesses worldwide"
    },
    { 
      number: "99.9%", 
      label: "Uptime Guarantee", 
      icon: <CheckCircle className="w-6 h-6" />,
      description: "Reliable performance you can count on"
    },
    { 
      number: "24/7", 
      label: "Expert Support", 
      icon: <Award className="w-6 h-6" />,
      description: "Round-the-clock technical assistance"
    }
  ], []);

  // Performance optimization: Memoize animations
  const fadeInUp = useMemo(() => ({
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  }), []);

  const staggerContainer = useMemo(() => ({
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }), []);

  // Enhanced slide navigation with better UX
  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, [heroSlides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, [heroSlides.length]);

  // Auto-advance slides with pause on hover
  useEffect(() => {
    setIsVisible(true);
    setIsLoading(false);
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroSlides.length]);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        prevSlide();
      } else if (event.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [nextSlide, prevSlide]);

  // Theme toggle
  const toggleTheme = useCallback(() => {
    setIsDarkMode(prev => !prev);
    // You can also persist this to localStorage or context
  }, []);

  // Search functionality
  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    // Implement search logic here
    console.log('Searching for:', query);
  }, []);

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-500 mx-auto mb-4"></div>
          <p className="text-cyan-400 text-xl">Loading the future...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 via-black to-gray-900' 
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
    } overflow-hidden`}>
      
      {/* Enhanced Background Effects */}
      <div className={`absolute inset-0 transition-opacity duration-500 ${
        isDarkMode 
          ? 'bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5' 
          : 'bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10'
      }`}></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_50%)]"></div>
      
      {/* Floating Elements with better performance */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-32 w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-40 left-1/3 w-28 h-28 bg-pink-500/10 rounded-full blur-xl animate-pulse delay-2000"></div>

      {/* Enhanced Header with Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-cyan-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Zion Tech
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/services" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                Services
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                About
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                Contact
              </Link>
              <Link href="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                Blog
              </Link>
            </nav>

            {/* Right side controls */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative hidden sm:block">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="w-64 px-4 py-2 bg-black/30 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-200"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-black/30 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 transition-all duration-200"
                aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg bg-black/30 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 transition-all duration-200"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black/40 backdrop-blur-xl border-t border-cyan-500/30"
            >
              <div className="px-4 py-4 space-y-4">
                <Link href="/services" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                  Services
                </Link>
                <Link href="/about" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                  About
                </Link>
                <Link href="/contact" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                  Contact
                </Link>
                <Link href="/blog" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-200">
                  Blog
                </Link>
                
                {/* Mobile Search */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="w-full px-4 py-2 bg-black/30 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-200"
                  />
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Content */}
          <div className="text-center mb-16">
            <motion.h1
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Welcome to the
              <br />
              <span className="text-6xl md:text-8xl">Future of Technology</span>
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Discover revolutionary AI consciousness, quantum computing, and space technology solutions that will transform your business and propel humanity into the future.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                href="/comprehensive-2025-services-showcase"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 font-semibold group shadow-lg hover:shadow-cyan-500/25"
              >
                Explore Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border border-cyan-500 text-cyan-400 rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-200 font-semibold group"
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </motion.div>
          </div>

          {/* Enhanced Hero Carousel */}
          <motion.div
            className="relative max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="relative overflow-hidden rounded-2xl bg-black/30 backdrop-blur-xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="p-8 md:p-12"
                >
                  <div className="text-center">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${heroSlides[currentSlide].color} mb-6 shadow-lg`}>
                      {heroSlides[currentSlide].icon}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                      {heroSlides[currentSlide].title}
                    </h2>
                    <p className={`text-lg font-semibold ${heroSlides[currentSlide].textColor} mb-4`}>
                      {heroSlides[currentSlide].subtitle}
                    </p>
                    <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                      {heroSlides[currentSlide].description}
                    </p>
                    <Link
                      href={heroSlides[currentSlide].link}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Enhanced Carousel Navigation */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentSlide ? 'bg-cyan-400 w-8' : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Enhanced Arrow Navigation */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-all duration-200 hover:scale-110"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-all duration-200 hover:scale-110"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className="text-center p-6 bg-black/30 backdrop-blur-xl rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer group"
                tabIndex={0}
                role="button"
                aria-label={`${stat.label}: ${stat.number}`}
                onKeyPress={(e) => e.key === 'Enter' && console.log(stat.description)}
              >
                <div className="inline-flex p-3 rounded-xl bg-cyan-500/20 text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm mb-2">{stat.label}</div>
                <div className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Featured Services Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured Revolutionary Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the cutting-edge technology that's reshaping industries and defining the future of business
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.name}
                variants={fadeInUp}
                className="group p-6 bg-black/30 backdrop-blur-xl rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
                tabIndex={0}
                role="button"
                aria-label={`Learn more about ${service.name}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-cyan-400 bg-cyan-500/20 px-2 py-1 rounded-full">
                    {service.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-300">{service.rating}</span>
                  </div>
                </div>
                
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">{service.description}</p>
                <Link
                  href={service.link}
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 group-hover:gap-3"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              href="/comprehensive-2025-services-showcase"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 font-semibold group shadow-lg hover:shadow-cyan-500/25"
            >
              View All Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Contact CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-xl rounded-2xl border border-cyan-500/30 p-8 text-center hover:border-cyan-400/50 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get in touch with our team to discuss how our innovative services can drive your success
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center gap-3 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 cursor-pointer">
                <Phone className="w-6 h-6" />
                <span className="font-semibold">{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-purple-400 hover:text-purple-300 transition-colors duration-200 cursor-pointer">
                <Mail className="w-6 h-6" />
                <span className="font-semibold">{contactInfo.email}</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-pink-400 hover:text-pink-300 transition-colors duration-200 cursor-pointer">
                <MapPin className="w-6 h-6" />
                <span className="font-semibold text-sm">{contactInfo.address}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 font-semibold group shadow-lg hover:shadow-cyan-500/25"
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 px-8 py-4 border border-cyan-500 text-cyan-400 rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-200 font-semibold group"
              >
                Request Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floating Action Button */}
      <motion.div
        className="fixed bottom-8 right-8 z-40"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="p-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full shadow-lg hover:shadow-cyan-500/25 hover:scale-110 transition-all duration-200"
          aria-label="Scroll to top"
        >
          <ArrowRight className="w-6 h-6 transform rotate-[-90deg]" />
        </button>
      </motion.div>
    </div>
  );
};

export default Homepage2040;