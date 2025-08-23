import React, { useEffect, useState, useCallback, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, Play, TrendingUp, Brain, Shield, Rocket, Globe, Cpu, Database, Atom, Target, Star, Sparkles as SparklesIcon,
  Brain as BrainIcon, Atom as AtomIcon, Shield as ShieldIcon, Rocket as RocketIcon, Zap, Eye, Heart, Infinity,
  Users, Building, Cloud, Code, Palette, Lightbulb, Award, Clock, CheckCircle, ArrowUpRight, ChevronDown, Menu, X,
  Truck, Server
} from 'lucide-react';
import Head from 'next/head';

// Import our new revolutionary services
import { revolutionary2044AdvancedMicroSaas } from '../data/revolutionary-2044-advanced-micro-saas';
import { revolutionary2044ITServices } from '../data/revolutionary-2044-it-services';
import { revolutionary2044AIServices } from '../data/revolutionary-2044-ai-services';
import { realEnterpriseMicroSaas2025 } from '../data/2025-real-enterprise-micro-saas';
import { innovativeITInfrastructureServices2025 } from '../data/2025-innovative-it-infrastructure-services';
import { innovativeAIAutonomousServices2025 } from '../data/2025-innovative-ai-autonomous-services';
import { revolutionary2045AdvancedAIServices } from '../data/revolutionary-2045-advanced-ai-services';
import { revolutionary2045AdvancedITServices } from '../data/revolutionary-2045-advanced-it-services';

// Import our new innovative services expansion
import { innovativeAIAutonomousServices2025Expansion } from '../data/2025-innovative-ai-autonomous-services-expansion';
import { innovativeITInfrastructureServices2025Expansion } from '../data/2025-innovative-it-infrastructure-services-expansion';
import { innovativeMicroSaasServices2025Expansion } from '../data/2025-innovative-micro-saas-expansion';

// Lazy load new components for better performance
const ServiceCard = lazy(() => import('./ServiceCard'));
const PerformanceMetrics = lazy(() => import('./PerformanceMetrics'));
const InteractiveDemo = lazy(() => import('./InteractiveDemo'));
const PerformanceOptimizer = lazy(() => import('./PerformanceOptimizer'));

const Homepage2045: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(false);
  const [userInteraction, setUserInteraction] = useState(false);
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  
  useEffect(() => {
    setIsVisible(true);
    setIsClient(true);
    
    // Auto-rotate featured services
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % 6);
    }, 6000);
    
    // Track mouse movement for parallax effects
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    // Track scroll position
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Update active section based on scroll position
      const sections = ['hero', 'services', 'features', 'stats', 'cta'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Combine all revolutionary services
  const allRevolutionaryServices = [
    ...revolutionary2044AdvancedMicroSaas,
    ...revolutionary2044ITServices,
    ...revolutionary2044AIServices,
    ...realEnterpriseMicroSaas2025,
    ...innovativeITInfrastructureServices2025,
    ...innovativeAIAutonomousServices2025,
    ...innovativeAIAutonomousServices2025Expansion,
    ...innovativeITInfrastructureServices2025Expansion,
    ...innovativeMicroSaasServices2025Expansion
  ];

  // Filter services by category
  const getFilteredServices = () => {
    if (selectedCategory === 'all') return allRevolutionaryServices;
    
    const category = categoryData.find(cat => cat.id === selectedCategory);
    if (!category) return allRevolutionaryServices;
    
    return allRevolutionaryServices.filter(service => {
      const serviceCategory = service.category?.toLowerCase() || '';
      const serviceType = service.type?.toLowerCase() || '';
      const categoryName = category.name.toLowerCase();
      
      return serviceCategory.includes(categoryName) || 
             serviceType.includes(categoryName) ||
             serviceCategory.includes(selectedCategory.toLowerCase()) ||
             serviceType.includes(selectedCategory.toLowerCase());
    });
  };

  const categoryData = [
    { id: 'all', name: 'All Services', icon: SparklesIcon, color: 'from-purple-500 to-pink-500', count: allRevolutionaryServices.length },
    { id: 'ai', name: 'AI & Autonomous', icon: BrainIcon, color: 'from-cyan-500 to-blue-500', count: allRevolutionaryServices.filter(s => s.category.includes('AI') || s.category.includes('Autonomous')).length },
    { id: 'quantum', name: 'Quantum Technology', icon: AtomIcon, color: 'from-blue-500 to-indigo-500', count: allRevolutionaryServices.filter(s => s.category.includes('Quantum')).length },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: ShieldIcon, color: 'from-red-500 to-orange-500', count: allRevolutionaryServices.filter(s => s.category.includes('Security') || s.category.includes('Cybersecurity')).length },
    { id: 'it', name: 'IT Infrastructure', icon: Cpu, color: 'from-yellow-500 to-orange-500', count: allRevolutionaryServices.filter(s => s.category.includes('IT') || s.category.includes('Infrastructure')).length },
    { id: 'micro-saas', name: 'Micro SAAS', icon: Target, color: 'from-emerald-500 to-teal-500', count: allRevolutionaryServices.filter(s => s.type === 'Micro SAAS').length },
    { id: 'business-intelligence', name: 'Business Intelligence', icon: Target, color: 'from-purple-500 to-pink-500', count: allRevolutionaryServices.filter(s => s.category.includes('Business') || s.category.includes('Intelligence')).length },
    { id: 'content-creation', name: 'Content Creation', icon: Code, color: 'from-cyan-500 to-blue-500', count: allRevolutionaryServices.filter(s => s.category.includes('Content') || s.category.includes('Creation')).length },
    { id: 'customer-service', name: 'Customer Service', icon: Users, color: 'from-green-500 to-emerald-500', count: allRevolutionaryServices.filter(s => s.category.includes('Customer') || s.category.includes('Service')).length },
    { id: 'supply-chain', name: 'Supply Chain', icon: Truck, color: 'from-orange-500 to-red-500', count: allRevolutionaryServices.filter(s => s.category.includes('Supply') || s.category.includes('Chain')).length },
    { id: 'edge-computing', name: 'Edge Computing', icon: Server, color: 'from-indigo-500 to-purple-500', count: allRevolutionaryServices.filter(s => s.category.includes('Edge') || s.category.includes('Computing')).length },
    { id: 'devops', name: 'DevOps', icon: Code, color: 'from-yellow-500 to-orange-500', count: allRevolutionaryServices.filter(s => s.category.includes('DevOps') || s.category.includes('Orchestration')).length }
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
    { number: "3000+", label: "Revolutionary Services", icon: Star },
    { number: "99.99%", label: "Uptime Guarantee", icon: TrendingUp },
    { number: "24/7", label: "AI Support Available", icon: Brain },
    { number: "250+", label: "Countries Served", icon: Globe }
  ];

  const handleGetStarted = useCallback(() => {
    window.location.href = '/contact';
  }, []);

  const handleWatchDemo = useCallback(() => {
    window.location.href = '/services';
  }, []);

  const handleServiceClick = useCallback((service: any) => {
    window.location.href = service.slug;
  }, []);

  const handleCategoryChange = useCallback((categoryId: string) => {
    setSelectedCategory(categoryId);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  // Don't render until client-side
  if (!isClient) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="text-center">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity as any, ease: "linear" }}
            className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4"
          >
            <Zap className="w-8 h-8 text-white" />
          </motion.div>
          <h2 className="text-2xl font-bold text-white mb-2">Loading...</h2>
          <p className="text-gray-400">Preparing revolutionary technology</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Zion Tech Group - Revolutionary 2045 Technology Solutions | AI Consciousness & Quantum Computing</title>
        <meta name="description" content="Experience the future of technology with Zion Tech Group's revolutionary AI consciousness, quantum computing, and autonomous solutions. Transform your business with cutting-edge innovation that thinks, learns, and evolves." />
        <meta name="keywords" content="AI consciousness, quantum computing, autonomous solutions, space technology, cybersecurity, business intelligence, Zion Tech Group, 2045 technology, AI evolution, quantum AI" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Zion Tech Group - Revolutionary 2045 Technology" />
        <meta property="og:description" content="Pioneering the future of technology with revolutionary AI consciousness and quantum computing solutions." />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        <meta property="og:site_name" content="Zion Tech Group" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Revolutionary 2045 Technology" />
        <meta name="twitter:description" content="Pioneering the future of technology with revolutionary AI consciousness and quantum computing solutions." />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-image.jpg" />
        <link rel="canonical" href="https://ziontechgroup.com" />
        <meta name="theme-color" content="#06b6d4" />
        <meta name="msapplication-TileColor" content="#06b6d4" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>

      {/* Mobile Navigation */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-cyan-500/20">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-bold text-lg">Zion Tech</span>
          </div>
          <button
            onClick={toggleMobileMenu}
            className="p-2 text-gray-300 hover:text-white transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-black/95 border-t border-cyan-500/20"
            >
              <div className="px-4 py-4 space-y-4">
                <Link href="/services" className="block text-gray-300 hover:text-cyan-400 transition-colors py-2">
                  Services
                </Link>
                <Link href="/about" className="block text-gray-300 hover:text-cyan-400 transition-colors py-2">
                  About
                </Link>
                <Link href="/contact" className="block text-gray-300 hover:text-cyan-400 transition-colors py-2">
                  Contact
                </Link>
                <Link href="/blog" className="block text-gray-300 hover:text-cyan-400 transition-colors py-2">
                  Blog
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
        {/* Floating Background Elements */}
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <motion.div
            className="absolute top-20 left-20 w-2 h-2 bg-cyan-400/40 rounded-full"
            animate={{
              scale: [1, 2, 1],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 4,
              repeat: Infinity as any,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-40 right-40 w-3 h-3 bg-purple-400/40 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity as any,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-40 left-40 w-2 h-2 bg-blue-400/40 rounded-full"
            animate={{
              scale: [1, 2, 1],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 5,
              repeat: Infinity as any,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Hero Section */}
        <section id="hero" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen flex items-center">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20"></div>
          <div className="relative max-w-7xl mx-auto text-center z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
                <SparklesIcon className="w-4 h-4 mr-2" />
                Revolutionary Technology 2045
              </div>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Welcome to the Future of
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent block"> Technology 2045</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
            >
              Experience the next generation of AI consciousness, quantum computing, and autonomous systems. 
              Transform your business with revolutionary technology that thinks, learns, and evolves.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <button
                onClick={handleGetStarted}
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-lg transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
              >
                <span className="flex items-center justify-center">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button
                onClick={handleWatchDemo}
                className="px-8 py-4 bg-transparent border-2 border-cyan-500 text-cyan-300 font-bold rounded-xl hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 text-lg transform hover:scale-105"
              >
                <span className="flex items-center justify-center">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </span>
              </button>
            </motion.div>

            {/* Stats Preview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-center mb-12"
            >
              Explore Our Revolutionary Services
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {categoryData.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`group px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 border-2 border-cyan-400'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700/50 hover:border-cyan-500/50'
                  }`}
                >
                  <span className="flex items-center space-x-2">
                    <category.icon className="w-5 h-5" />
                    <span>{category.name}</span>
                    <span className="bg-gray-700/50 px-2 py-1 rounded-full text-xs font-bold">
                      {category.count}
                    </span>
                  </span>
                </motion.button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {getFilteredServices().slice(0, 9).map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-700/50 transition-all duration-300 cursor-pointer border border-gray-700/50 hover:border-cyan-500/50 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10"
                  onClick={() => handleServiceClick(service)}
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🚀</div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">{service.name}</h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>
                  <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              ))}
            </div>
            
            {getFilteredServices().length > 9 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mt-12"
              >
                <Link
                  href="/services"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-lg transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
                >
                  View All Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </motion.div>
            )}
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-center mb-12"
            >
              Revolutionary Features 2045
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 group-hover:border-cyan-500/50 transition-all duration-300 transform group-hover:scale-105">
                    <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <Link
                      href={feature.href}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1 transition-transform"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl p-12 border border-cyan-500/20"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Experience the Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of forward-thinking companies already transforming their business with revolutionary AI and quantum technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleGetStarted}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-lg transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
                >
                  Start Your Journey
                </button>
                <button
                  onClick={handleWatchDemo}
                  className="px-8 py-4 bg-transparent border-2 border-cyan-500 text-cyan-300 font-bold rounded-xl hover:bg-cyan-500/10 transition-all duration-300 text-lg transform hover:scale-105"
                >
                  Schedule Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Homepage2045;