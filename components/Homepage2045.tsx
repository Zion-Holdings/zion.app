import React, { useEffect, useState, useCallback, Suspense, lazy, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, Play, TrendingUp, Brain, Shield, Rocket, Globe, Cpu, Database, Atom, Target, Star, Sparkles as SparklesIcon,
  Brain as BrainIcon, Atom as AtomIcon, Shield as ShieldIcon, Rocket as RocketIcon, Zap, Eye, Heart, Infinity,
  Users, Building, Cloud, Code, Palette, Lightbulb, Award, Clock, CheckCircle, ArrowUpRight, ChevronRight,
  ExternalLink, Download, MessageCircle, Phone, Mail, MapPin
} from 'lucide-react';
import Head from 'next/head';
import Image from 'next/image';

// Import our new revolutionary services
import { revolutionary2044AdvancedMicroSaas } from '../data/revolutionary-2044-advanced-micro-saas';
import { revolutionary2044ITServices } from '../data/revolutionary-2044-it-services';
import { revolutionary2044AIServices } from '../data/revolutionary-2044-ai-services';
import { realEnterpriseMicroSaas2025 } from '../data/2025-real-enterprise-micro-saas';
import { innovativeITInfrastructureServices2025 } from '../data/2025-innovative-it-infrastructure-services';
import { innovativeAIAutonomousServices2025 } from '../data/2025-innovative-ai-autonomous-services';

// Lazy load components for better performance
const ServiceCard = lazy(() => import('./ServiceCard'));
const PerformanceMetrics = lazy(() => import('./PerformanceMetrics'));
const InteractiveDemo = lazy(() => import('./InteractiveDemo'));
const PerformanceOptimizer = lazy(() => import('./PerformanceOptimizer'));

// Enhanced loading skeleton
const LoadingSkeleton = () => (
  <div className="bg-gray-800/50 rounded-2xl p-6 h-64 animate-pulse">
    <div className="bg-gray-700 h-8 w-3/4 rounded mb-4"></div>
    <div className="bg-gray-700 h-4 w-full rounded mb-2"></div>
    <div className="bg-gray-700 h-4 w-2/3 rounded"></div>
  </div>
);

const Homepage2045: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(false);
  const [userInteraction, setUserInteraction] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  
  // Memoize services to prevent unnecessary re-renders
  const allRevolutionaryServices = useMemo(() => [
    ...revolutionary2044AdvancedMicroSaas,
    ...revolutionary2044ITServices,
    ...revolutionary2044AIServices,
    ...realEnterpriseMicroSaas2025,
    ...innovativeITInfrastructureServices2025,
    ...innovativeAIAutonomousServices2025
  ], []);

  // Enhanced category definitions with better accessibility
  const categories = useMemo(() => [
    { 
      id: 'all', 
      name: 'All Services', 
      icon: SparklesIcon, 
      color: 'from-purple-500 to-pink-500',
      description: 'View all available services'
    },
    { 
      id: 'ai', 
      name: 'AI & Consciousness', 
      icon: BrainIcon, 
      color: 'from-cyan-500 to-blue-500',
      description: 'Artificial intelligence and consciousness solutions'
    },
    { 
      id: 'quantum', 
      name: 'Quantum Technology', 
      icon: AtomIcon, 
      color: 'from-blue-500 to-indigo-500',
      description: 'Quantum computing and technology solutions'
    },
    { 
      id: 'cybersecurity', 
      name: 'Cybersecurity', 
      icon: ShieldIcon, 
      color: 'from-red-500 to-orange-500',
      description: 'Advanced security and protection solutions'
    },
    { 
      id: 'space', 
      name: 'Space Technology', 
      icon: RocketIcon, 
      color: 'from-indigo-500 to-purple-500',
      description: 'Space exploration and satellite technology'
    },
    { 
      id: 'enterprise', 
      name: 'Enterprise Solutions', 
      icon: Building, 
      color: 'from-green-500 to-teal-500',
      description: 'Enterprise-grade business solutions'
    }
  ], []);

  // Responsive design detection
  useEffect(() => {
    const checkDeviceType = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };

    checkDeviceType();
    window.addEventListener('resize', checkDeviceType);
    return () => window.removeEventListener('resize', checkDeviceType);
  }, []);

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate featured services with better performance
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % 6);
    }, 8000); // Increased to 8 seconds for better UX
    
    // Enhanced mouse tracking with throttling
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
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Filter services by category with memoization
  const getFilteredServices = useCallback(() => {
    if (selectedCategory === 'all') return allRevolutionaryServices;
    return allRevolutionaryServices.filter(service => 
      service.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      service.type?.toLowerCase().includes(selectedCategory.toLowerCase())
    );
  }, [selectedCategory, allRevolutionaryServices]);

  // Enhanced animation variants with better performance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.08,
        ease: "easeOut" as const
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  };

  const heroVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-8, 8, -8],
      transition: {
        duration: 4,
        repeat: Infinity as any,
        ease: "easeInOut" as const
      }
    }
  };

  // Enhanced parallax effect with better performance
  const getParallaxStyle = useCallback((depth: number) => ({
    transform: `translate3d(${mousePosition.x * depth * 0.005}px, ${mousePosition.y * depth * 0.005}px, 0)`,
    willChange: 'transform'
  }), [mousePosition]);

  // Enhanced contact information
  const contactInfo = [
    { icon: Phone, label: 'Call Us', value: '+1 302 464 0950', href: 'tel:+13024640950' },
    { icon: Mail, label: 'Email Us', value: 'kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com' },
    { icon: MapPin, label: 'Visit Us', value: '364 E Main St STE 1008, Middletown DE 19709', href: '#' }
  ];

  return (
    <>
      <Head>
        <title>Zion Tech Group - Revolutionary 2045 Technology Solutions | AI Consciousness & Quantum Computing</title>
        <meta name="description" content="Experience the future of technology with Zion Tech Group's revolutionary AI consciousness, quantum computing, and autonomous solutions. Transform your business with cutting-edge innovation." />
        <meta name="keywords" content="AI consciousness, quantum computing, autonomous solutions, space technology, cybersecurity, business intelligence, Zion Tech Group, 2045 technology, enterprise solutions" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Zion Tech Group - Revolutionary 2045 Technology Solutions" />
        <meta property="og:description" content="Pioneering the future of technology with revolutionary AI consciousness and quantum computing solutions." />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image-2045.jpg" />
        <meta property="og:site_name" content="Zion Tech Group" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Revolutionary 2045 Technology" />
        <meta name="twitter:description" content="Pioneering the future of technology with revolutionary AI consciousness and quantum computing solutions." />
        <meta name="twitter:image" content="https://ziontechgroup.com/og-image-2045.jpg" />
        <link rel="canonical" href="https://ziontechgroup.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      </Head>

      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        {/* Hero Section */}
        <motion.section 
          className="relative min-h-screen flex items-center justify-center px-4 lg:px-8"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          aria-label="Hero section"
        >
          {/* Enhanced Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
              variants={floatingVariants}
              animate="animate"
              aria-hidden="true"
            />
            <motion.div
              className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
              variants={floatingVariants}
              animate="animate"
              style={{ animationDelay: '1s' }}
              aria-hidden="true"
            />
            <motion.div
              className="absolute bottom-32 left-1/3 w-40 h-40 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-full blur-3xl"
              variants={floatingVariants}
              animate="animate"
              style={{ animationDelay: '2s' }}
              aria-hidden="true"
            />
          </div>

          <div className="relative z-10 text-center max-w-6xl mx-auto">
            {/* Enhanced Main Heading */}
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6 leading-tight"
              variants={itemVariants}
            >
              Zion Tech Group
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed px-4"
              variants={itemVariants}
            >
              Pioneering the Future of Technology with Revolutionary AI Consciousness, 
              Quantum Computing, and Autonomous Solutions
            </motion.p>

            {/* Enhanced CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 px-4"
              variants={itemVariants}
            >
              <Link href="/services" aria-label="Explore our services">
                <motion.button 
                  className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full text-base sm:text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-describedby="explore-services-description"
                >
                  <span className="flex items-center gap-2">
                    Explore Services
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10" />
                </motion.button>
              </Link>
              
              <Link href="/contact" aria-label="Get started with us">
                <motion.button 
                  className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-full text-base sm:text-lg hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-describedby="get-started-description"
                >
                  Get Started
                </motion.button>
              </Link>
            </motion.div>

            {/* Enhanced Stats with better accessibility */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto px-4"
              variants={itemVariants}
              role="region"
              aria-label="Company statistics"
            >
              {[
                { number: '500+', label: 'Global Clients', description: 'Satisfied customers worldwide' },
                { number: '99.9%', label: 'Uptime', description: 'Reliable service availability' },
                { number: '24/7', label: 'Support', description: 'Round-the-clock assistance' },
                { number: '2045', label: 'Technology', description: 'Future-ready solutions' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  tabIndex={0}
                  role="button"
                  aria-label={`${stat.label}: ${stat.number}`}
                  aria-describedby={`stat-${index}-description`}
                >
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    {stat.label}
                  </div>
                  <div id={`stat-${index}-description`} className="sr-only">{stat.description}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced Contact Information */}
            <motion.div 
              className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto px-4"
              variants={itemVariants}
              role="region"
              aria-label="Contact information"
            >
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-colors duration-300 group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  aria-label={`${contact.label}: ${contact.value}`}
                >
                  <contact.icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                  <div className="text-left">
                    <div className="text-xs text-gray-400 font-medium">{contact.label}</div>
                    <div className="text-sm text-white group-hover:text-cyan-300 transition-colors">
                      {contact.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Enhanced Featured Services Section */}
        <motion.section 
          className="py-16 sm:py-20 px-4 lg:px-8 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          aria-label="Featured services"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div className="text-center mb-12 sm:mb-16" variants={itemVariants}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary Technology Solutions
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Experience the future with our cutting-edge AI consciousness, quantum computing, 
                and autonomous solutions that transform businesses worldwide.
              </p>
            </motion.div>

            {/* Enhanced Category Filter with better accessibility */}
            <motion.div 
              className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 px-4" 
              variants={itemVariants}
              role="tablist"
              aria-label="Service categories"
            >
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  role="tab"
                  aria-selected={selectedCategory === category.id}
                  aria-label={category.description}
                  tabIndex={selectedCategory === category.id ? 0 : -1}
                >
                  <span className="flex items-center gap-2">
                    <category.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="hidden sm:inline">{category.name}</span>
                    <span className="sm:hidden">{category.name.split(' ')[0]}</span>
                  </span>
                </motion.button>
              ))}
            </motion.div>

            {/* Enhanced Services Grid with better loading */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
              variants={containerVariants}
            >
              {getFilteredServices().slice(0, isMobile ? 6 : isTablet ? 8 : 9).map((service, index) => (
                <motion.div
                  key={service.id || index}
                  variants={itemVariants}
                  className="group"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <Suspense fallback={<LoadingSkeleton />}>
                    <ServiceCard service={service} />
                  </Suspense>
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced View All Services Button */}
            <motion.div className="text-center mt-12" variants={itemVariants}>
              <Link href="/services" aria-label="View all available services">
                <motion.button 
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-full text-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-500/50"
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

        {/* Enhanced Technology Showcase */}
        <motion.section 
          className="py-16 sm:py-20 px-4 lg:px-8 bg-gradient-to-b from-black to-gray-900/50 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          aria-label="Technology showcase"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div className="text-center mb-12 sm:mb-16" variants={itemVariants}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                Cutting-Edge Technology Stack
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Our revolutionary technology combines AI consciousness, quantum computing, 
                and autonomous systems to deliver unprecedented capabilities.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  icon: BrainIcon,
                  title: "AI Consciousness Evolution",
                  description: "Next-generation AI with emotional intelligence and self-awareness capabilities",
                  color: "from-cyan-500 to-blue-600",
                  features: ["Emotional Intelligence", "Self-Awareness", "Adaptive Learning"]
                },
                {
                  icon: AtomIcon,
                  title: "Quantum Computing Platform",
                  description: "Quantum-powered solutions for complex computational challenges",
                  color: "from-blue-500 to-indigo-600",
                  features: ["Quantum Algorithms", "Superposition", "Entanglement"]
                },
                {
                  icon: ShieldIcon,
                  title: "Zero-Trust Security",
                  description: "Advanced cybersecurity with autonomous threat detection and response",
                  color: "from-red-500 to-orange-600",
                  features: ["Threat Detection", "Auto-Response", "Continuous Monitoring"]
                },
                {
                  icon: RocketIcon,
                  title: "Space Technology",
                  description: "Innovative solutions for space exploration and satellite systems",
                  color: "from-indigo-500 to-purple-600",
                  features: ["Satellite Systems", "Space Exploration", "Orbital Mechanics"]
                },
                {
                  icon: Globe,
                  title: "Global Infrastructure",
                  description: "Worldwide network with edge computing and autonomous optimization",
                  color: "from-green-500 to-teal-600",
                  features: ["Edge Computing", "Global Network", "Auto-Optimization"]
                },
                {
                  icon: Cpu,
                  title: "Autonomous Systems",
                  description: "Self-managing and self-optimizing technology infrastructure",
                  color: "from-purple-500 to-pink-600",
                  features: ["Self-Management", "Auto-Optimization", "Predictive Maintenance"]
                }
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  className="group relative p-6 sm:p-8 bg-gray-800/30 rounded-2xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:bg-gray-800/50 cursor-pointer"
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  tabIndex={0}
                  role="button"
                  aria-label={`Learn more about ${tech.title}`}
                  aria-describedby={`tech-${index}-description`}
                >
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r ${tech.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <tech.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">{tech.title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-4" id={`tech-${index}-description`}>{tech.description}</p>
                  
                  {/* Enhanced feature list */}
                  <div className="space-y-2">
                    {tech.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  {/* Hover Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                  
                  {/* Enhanced hover indicator */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight className="w-5 h-5 text-cyan-400" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Enhanced Call to Action */}
        <motion.section 
          className="py-16 sm:py-20 px-4 lg:px-8 text-center relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          aria-label="Call to action"
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
              variants={itemVariants}
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p 
              className="text-lg sm:text-xl text-gray-300 mb-8 px-4"
              variants={itemVariants}
            >
              Join the future of technology with Zion Tech Group. Our revolutionary solutions 
              are designed to propel your business into the next generation.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={itemVariants}
            >
              <Link href="/contact" aria-label="Start your transformation journey">
                <motion.button 
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center gap-2">
                    Start Your Journey
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </motion.button>
              </Link>
              <Link href="/services" aria-label="Learn more about our services">
                <motion.button 
                  className="px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-full text-lg hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center gap-2">
                    Learn More
                    <ExternalLink className="w-5 h-5" />
                  </span>
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.section>

        {/* Hidden descriptions for screen readers */}
        <div className="sr-only">
          <div id="explore-services-description">Navigate to our comprehensive services page to explore all available solutions</div>
          <div id="get-started-description">Contact us to begin your transformation journey with Zion Tech Group</div>
        </div>
      </div>
    </>
  );
};

export default Homepage2045;