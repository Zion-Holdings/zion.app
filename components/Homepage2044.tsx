import React, { useEffect, useState, useCallback, useMemo } from 'react';
import Layout from './layout/Layout';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Play, TrendingUp, Brain, Shield, Rocket, Globe, Cpu, Database, Atom, Target, Star, Sparkles as SparklesIcon,
  Brain as BrainIcon, Atom as AtomIcon, Shield as ShieldIcon, Rocket as RocketIcon, Zap, Eye, Heart, Infinity,
  ChevronDown, CheckCircle, Users, Award, Clock
} from 'lucide-react';
import { Service } from '../types';

// Import our new revolutionary services
import { revolutionary2044AdvancedMicroSaas } from '../data/revolutionary-2044-advanced-micro-saas';
import { revolutionary2044ITServices } from '../data/revolutionary-2044-it-services';
import { revolutionary2044AIServices } from '../data/revolutionary-2044-ai-services';
import { innovative2025AIAutonomousEcosystemV3 } from '../data/2025-innovative-ai-autonomous-ecosystem-v3';
import { emerging2025TechBreakthroughsV4 } from '../data/2025-emerging-tech-breakthroughs-v4';
import { advanced2025ITInfrastructureServicesV2 } from '../data/2025-advanced-it-infrastructure-services-v2';

// Import our new 2025 real enterprise AI services
import { realEnterpriseAIServices2025 } from '../data/2025-real-enterprise-ai-services';
import { innovativeITInfrastructureServices2025 } from '../data/2025-innovative-it-infrastructure-services';
import { innovativeMicroSaasSolutions2025 } from '../data/2025-innovative-micro-saas-solutions';

// Lazy load new components for better performance
const ServiceCard = lazy(() => import('./ServiceCard'));
const TestimonialsSection = lazy(() => import('./TestimonialsSection'));
const LiveChatWidget = lazy(() => import('./LiveChatWidget'));

// Lazy load heavy components
const ServiceCard = lazy(() => import('./ServiceCard'));

// Loading skeleton component
const LoadingSkeleton = () => (
  <div className="animate-pulse">
    <div className="h-8 bg-gray-700 rounded mb-4"></div>
    <div className="h-4 bg-gray-700 rounded mb-2"></div>
    <div className="h-4 bg-gray-700 rounded w-3/4"></div>
  </div>
);

interface Service {
  id: string;
  name: string;
  description: string;
  type: string;
  category: string;
  pricing: {
    starter: string;
  };
  slug: string;
}

const Homepage2044: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  // Memoize expensive computations
  const allRevolutionaryServices = useMemo(() => [
    ...revolutionary2044AdvancedMicroSaas,
    ...revolutionary2044ITServices,
    ...revolutionary2044AIServices
  ], []);

  const featuredServices = useMemo(() => 
    allRevolutionaryServices.slice(0, 6), [allRevolutionaryServices]
  );

  const getFilteredServices = useCallback(() => {
    if (selectedCategory === 'all') return allRevolutionaryServices;
    return allRevolutionaryServices.filter(service => 
      service.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      service.type.toLowerCase().includes(selectedCategory.toLowerCase())
    );
  }, [selectedCategory, allRevolutionaryServices]);

  const categories = useMemo(() => [
    { id: 'all', name: 'All Services', icon: SparklesIcon, color: 'from-purple-500 to-pink-500' },
    { id: 'ai', name: 'AI & Consciousness', icon: BrainIcon, color: 'from-cyan-500 to-blue-500' },
    { id: 'quantum', name: 'Quantum Technology', icon: AtomIcon, color: 'from-blue-500 to-indigo-500' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: ShieldIcon, color: 'from-red-500 to-orange-500' },
    { id: 'space', name: 'Space Technology', icon: RocketIcon, color: 'from-indigo-500 to-purple-500' },
    { id: 'business', name: 'Business Solutions', icon: Target, color: 'from-emerald-500 to-teal-500' }
  ], []);

  const features = useMemo(() => [
    { icon: Brain, title: "AI Consciousness Evolution 2044", description: "Next-generation AI consciousness with emotional intelligence", href: "/ai-consciousness-evolution-2044", color: "from-purple-500 to-pink-500" },
    { icon: Atom, title: "Quantum Neural Networks 2044", description: "Quantum-powered AI with consciousness integration", href: "/quantum-neural-network-platform-2044", color: "from-blue-500 to-cyan-500" },
    { icon: Shield, title: "Quantum Cybersecurity 2044", description: "Quantum-resistant security with AI consciousness", href: "/quantum-cybersecurity-platform-2044", color: "from-red-500 to-orange-500" },
    { icon: Rocket, title: "Space Resource Intelligence 2044", description: "AI-powered space exploration with consciousness", href: "/space-resource-intelligence-2044", color: "from-indigo-500 to-purple-500" },
    { icon: Cpu, title: "Autonomous Business Intelligence 2044", description: "Fully autonomous AI business intelligence", href: "/ai-autonomous-business-intelligence-2044", color: "from-emerald-500 to-teal-500" },
    { icon: Database, title: "Quantum Cloud Infrastructure 2044", description: "Quantum-powered cloud with consciousness", href: "/quantum-cloud-infrastructure-2044", color: "from-yellow-500 to-orange-500" }
  ];

  const stats = useMemo(() => [
    { number: "2000+", label: "Revolutionary Services", icon: Star, description: "Cutting-edge solutions" },
    { number: "99.99%", label: "Uptime Guarantee", icon: TrendingUp, description: "Reliable performance" },
    { number: "24/7", label: "AI Support Available", icon: Brain, description: "Always there for you" },
    { number: "200+", label: "Countries Served", icon: Globe, description: "Global reach" }
  ], []);

  const handleGetStarted = useCallback(() => {
    // Add analytics tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'cta_click', { cta_type: 'get_started' });
    }
    window.location.href = '/revolutionary-2044-pricing-showcase';
  }, []);

  const handleWatchDemo = useCallback(() => {
    // Add analytics tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'cta_click', { cta_type: 'explore_services' });
    }
    window.location.href = '/services';
  }, []);

  const handleServiceClick = useCallback((service: any) => {
    // Add analytics tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'service_click', { service_name: service.name });
    }
    window.location.href = service.slug;
  }, []);

  const handleCategoryChange = useCallback((categoryId: string) => {
    setSelectedCategory(categoryId);
    // Add analytics tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'category_filter', { category: categoryId });
    }
  }, []);

  useEffect(() => {
    // Performance optimization: Use requestIdleCallback for non-critical operations
    const initializePage = () => {
      setIsVisible(true);
      setIsLoading(false);
    };

    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(initializePage);
    } else {
      setTimeout(initializePage, 100);
    }
    
    // Auto-rotate featured services with better performance
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % 6);
    }, 6000);
    
    // Track mouse movement for parallax effects with throttling
    let ticking = false;
    const handleMouseMove = (e: MouseEvent) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setMousePosition({ x: e.clientX, y: e.clientY });
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    // Track scroll progress for performance monitoring
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.body.offsetHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Loading state
  if (isLoading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center"
          >
            <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-cyan-400 text-lg">Loading Zion Tech Group...</p>
          </motion.div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-500 to-purple-600"
          style={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section 
          className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
          aria-labelledby="hero-heading"
        >
          {/* Enhanced Animated Background with Performance Optimizations */}
          <div className="absolute inset-0 -z-10">
            {/* Floating orbs with neon effects - optimized for performance */}
            <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse shadow-[0_0_100px_rgba(6,182,212,0.5)]"></div>
            <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000 shadow-[0_0_100px_rgba(168,85,247,0.5)]"></div>
            <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse delay-500 shadow-[0_0_100px_rgba(16,185,129,0.5)]"></div>
            
            {/* Optimized animated particles - reduced count for better performance */}
            <div className="absolute inset-0">
              {[...Array(10)].map((_, i) => (
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

            {/* Floating geometric shapes - optimized animations */}
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
        </div>
      </Layout>
    );
  }

  return (
    <>
      <Head>
        <title>Zion Tech Group - Revolutionary 2044 Technology Solutions | AI Consciousness & Quantum Computing</title>
        <meta name="description" content="Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide. Experience the future with Zion Tech Group." />
        <meta name="keywords" content="AI consciousness, quantum computing, space technology, cybersecurity, autonomous solutions, business intelligence, Zion Tech Group" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/" />
        <meta property="og:title" content="Zion Tech Group - Revolutionary 2044 Technology Solutions" />
        <meta property="og:description" content="Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions." />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://ziontechgroup.com/" />
        <meta property="twitter:title" content="Zion Tech Group - Revolutionary 2044 Technology Solutions" />
        <meta property="twitter:description" content="Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions." />
        <meta property="twitter:image" content="https://ziontechgroup.com/og-image.jpg" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Zion Tech Group",
              "description": "Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions",
              "url": "https://ziontechgroup.com",
              "logo": "https://ziontechgroup.com/logo.png",
              "sameAs": [
                "https://linkedin.com/company/ziontechgroup",
                "https://twitter.com/ziontechgroup",
                "https://github.com/ziontechgroup"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "availableLanguage": "English"
              }
            })
          }}
        />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//cdn.jsdelivr.net" />
      </Head>

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
                className="group px-12 py-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-3xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-[0_0_50px_rgba(6,182,212,0.4)] focus:outline-none focus:ring-4 focus:ring-cyan-500/50 text-xl relative overflow-hidden"
                onClick={handleGetStarted}
                aria-label="Get started with Zion Tech Group revolutionary services"
              >
                <span className="relative z-10 flex items-center">
                  Experience the Future
                  <ArrowRight className="w-7 h-7 ml-4 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
              </button>
              <button 
                className="px-12 py-6 border-2 border-cyan-400 text-cyan-400 font-bold rounded-3xl hover:bg-cyan-400 hover:text-black transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 text-xl shadow-[0_0_30px_rgba(6,182,212,0.3)] backdrop-blur-sm"
                onClick={handleWatchDemo}
                aria-label="Explore our revolutionary services"
              >
                <span className="flex items-center">
                  Explore Services
                  <Play className="w-7 h-7 ml-4" />
                </span>
              </button>
            </motion.div>

            {/* Enhanced Stats Section */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center group cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                    <stat.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-gray-300 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-500">
                    {stat.description}
                  </div>
                </motion.div>
              ))}
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
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    className={`px-6 py-3 rounded-full border transition-all duration-300 flex items-center gap-2 ${
                      selectedCategory === category.id
                        ? `bg-gradient-to-r ${category.color} text-white border-transparent shadow-lg`
                        : 'bg-gray-900/50 text-gray-300 border-gray-600 hover:border-gray-500 hover:text-white'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    {category.name}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {getFilteredServices().slice(0, 6).map((service, index) => (
                  <motion.div
                    key={service.id}
                    className={`relative group cursor-pointer ${
                      index === currentServiceIndex ? 'scale-105' : 'scale-100'
                    } transition-transform duration-500`}
                    onClick={() => handleServiceClick(service)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="relative p-8 bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/50 rounded-3xl backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] hover:shadow-[0_0_80px_rgba(6,182,212,0.3)] transition-all duration-300 group-hover:border-cyan-500/50">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      <div className="relative z-10">
                        <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.3)] mb-6">
                          <feature.icon className="w-8 h-8 text-white" />
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                          {feature.title}
                        </h3>
                        
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

        {/* Enhanced Features Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-transparent to-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold text-white mb-6">
                Revolutionary <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Features</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Discover the cutting-edge capabilities that set Zion Tech Group apart in the 2044 technology landscape
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
                  whileHover={{ y: -10 }}
                >
                  <div className="relative p-8 bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/50 rounded-3xl backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_80px_rgba(6,182,212,0.3)] transition-all duration-300 group-hover:border-cyan-500/50">
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-5 rounded-3xl group-hover:opacity-10 transition-opacity duration-300`}></div>
                    
                    <div className="relative z-10">
                      <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      
                      <p className="text-gray-400 text-sm leading-relaxed mb-6">
                        {feature.description}
                      </p>
                      
                      <a
                        href={feature.href}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 group-hover:gap-2"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 transition-transform duration-300" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
                Join thousands of forward-thinking companies already leveraging our revolutionary 2044 technology solutions
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button 
                  className="group px-12 py-6 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold rounded-3xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-[0_0_50px_rgba(168,85,247,0.4)] focus:outline-none focus:ring-4 focus:ring-purple-500/50 text-xl"
                  onClick={handleGetStarted}
                >
                  <span className="flex items-center">
                    Start Your Journey
                    <Rocket className="w-7 h-7 ml-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
                
                <button 
                  className="px-12 py-6 border-2 border-purple-400 text-purple-400 font-bold rounded-3xl hover:bg-purple-400 hover:text-black transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-400/50 text-xl"
                  onClick={handleWatchDemo}
                >
                  <span className="flex items-center">
                    Schedule Demo
                    <Play className="w-7 h-7 ml-4" />
                  </span>
                </button>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default Homepage2044;