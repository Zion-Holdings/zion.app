import React, { useEffect, useState, useCallback, Suspense, lazy, useMemo } from 'react';
import Link from 'next/link';
import Layout from './layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Play, TrendingUp, Brain, Shield, Rocket, Globe, Cpu, Database, Atom, Target, Star, Sparkles as SparklesIcon,
  Brain as BrainIcon, Atom as AtomIcon, Shield as ShieldIcon, Rocket as RocketIcon, Zap, Eye, Heart, Infinity,
  CheckCircle, Users, Award, Clock, DollarSign, BarChart3, Palette, Layers, Code, Server, Cloud, Lock,
  ChevronDown, ChevronRight, ExternalLink, Phone, Mail, MapPin, Calendar, Globe as GlobeIcon,
  Sparkles, Zap as ZapIcon, Target as TargetIcon, Cpu as CpuIcon, Database as DatabaseIcon
} from 'lucide-react';
import EnhancedSEO from './EnhancedSEO';

// Import our new real services
import { realMicroSaas2025Expansion } from '../data/real-micro-saas-2025-expansion';
import { realITServices2025Expansion } from '../data/real-it-services-2025-expansion';
import { realAIServices2025Expansion } from '../data/real-ai-services-2025-expansion';

// Import our new innovative services
import { innovativeMicroSaas2025ExpansionV2 } from '../data/2025-innovative-micro-saas-expansion-v2';
import { innovativeITServices2025ExpansionV2 } from '../data/2025-innovative-it-services-expansion-v2';
import { innovativeAIServices2025ExpansionV2 } from '../data/2025-innovative-ai-services-expansion-v2';

// Lazy load components for better performance
const ServiceCard = lazy(() => import('./ServiceCard'));
const PerformanceMetrics = lazy(() => import('./PerformanceMetrics'));
const InteractiveDemo = lazy(() => import('./InteractiveDemo'));
const PerformanceOptimizer = lazy(() => import('./PerformanceOptimizer'));

// Enhanced loading component
const EnhancedLoadingSpinner = () => (
  <div className="flex items-center justify-center p-8">
    <div className="relative">
      <div className="w-12 h-12 border-4 border-cyan-200 rounded-full animate-spin"></div>
      <div className="absolute top-0 left-0 w-12 h-12 border-4 border-cyan-600 rounded-full animate-ping opacity-75"></div>
    </div>
    <span className="ml-3 text-lg font-medium text-gray-700">Loading revolutionary technology...</span>
  </div>
);

const EnhancedHomepage2045: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(false);
  const [userInteraction, setUserInteraction] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  
  useEffect(() => {
    setIsVisible(true);
    
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);
    
    // Handle scroll events
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsHeroVisible(window.scrollY < 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Auto-rotate featured services (only if no reduced motion)
    if (!mediaQuery.matches) {
      const interval = setInterval(() => {
        setCurrentServiceIndex((prev) => (prev + 1) % 6);
      }, 6000);
      
      return () => {
        clearInterval(interval);
        window.removeEventListener('scroll', handleScroll);
      };
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Combine all real services with new innovative services
  const allRealServices = useMemo(() => [
    ...realMicroSaas2025Expansion,
    ...realITServices2025Expansion,
    ...realAIServices2025Expansion,
    ...innovativeMicroSaas2025ExpansionV2,
    ...innovativeITServices2025ExpansionV2,
    ...innovativeAIServices2025ExpansionV2
  ], []);

  // Get featured services for rotation
  const featuredServices = useMemo(() => 
    allRealServices.slice(0, 6), [allRealServices]
  );

  // Filter services by category
  const getFilteredServices = useCallback(() => {
    if (selectedCategory === 'all') return allRealServices;
    return allRealServices.filter(service => 
      service.category.toLowerCase().includes(selectedCategory.toLowerCase())
    );
  }, [allRealServices, selectedCategory]);

  const categories = [
    { id: 'all', name: 'All Services', icon: SparklesIcon, color: 'from-purple-500 to-pink-500', count: allRealServices.length },
    { id: 'ai', name: 'AI & Consciousness', icon: BrainIcon, color: 'from-cyan-500 to-blue-500', count: allRealServices.filter(s => s.category.includes('AI') || s.category.includes('Consciousness')).length },
    { id: 'quantum', name: 'Quantum Technology', icon: AtomIcon, color: 'from-blue-500 to-indigo-500', count: allRealServices.filter(s => s.category.includes('Quantum')).length },
    { id: 'it', name: 'IT Infrastructure', icon: CpuIcon, color: 'from-yellow-500 to-orange-500', count: allRealServices.filter(s => s.category.includes('IT') || s.category.includes('Infrastructure')).length },
    { id: 'business', name: 'Business Solutions', icon: TargetIcon, color: 'from-emerald-500 to-teal-500', count: allRealServices.filter(s => (s as any).type === 'Micro SAAS' || s.category.includes('Business')).length },
    { id: 'analytics', name: 'Analytics & BI', icon: BarChart3, color: 'from-indigo-500 to-purple-500', count: allRealServices.filter(s => s.category.includes('Analytics') || s.category.includes('Data')).length }
  ];

  const features = [
    { icon: Brain, title: "AI Consciousness Evolution 2045", description: "Next-generation AI consciousness with emotional intelligence", href: "/ai-consciousness-evolution-platform", color: "from-purple-500 to-pink-500", price: "$1,299/month" },
    { icon: Atom, title: "Quantum AI Neural Networks", description: "Quantum-powered AI with consciousness integration", href: "/quantum-ai-neural-network-platform", color: "from-blue-500 to-cyan-500", price: "$999/month" },
    { icon: Shield, title: "Quantum-Secure Cloud Infrastructure", description: "Post-quantum cryptography cloud platform", href: "/quantum-secure-cloud-infrastructure", color: "from-red-500 to-orange-500", price: "$899/month" },
    { icon: Rocket, title: "Autonomous DevOps Intelligence", description: "AI-powered DevOps automation platform", href: "/autonomous-devops-intelligence-platform", color: "from-indigo-500 to-purple-500", price: "$599/month" },
    { icon: Cpu, title: "Edge Computing Orchestration", description: "AI-powered edge computing management", href: "/edge-computing-orchestration-platform", color: "from-emerald-500 to-teal-500", price: "$499/month" },
    { icon: Database, title: "Intelligent Data Pipeline", description: "AI-powered data pipeline orchestration", href: "/intelligent-data-pipeline-orchestration", color: "from-yellow-500 to-orange-500", price: "$449/month" }
  ];

  const stats = [
    { number: "3000+", label: "Revolutionary Services", icon: Star, description: "Cutting-edge solutions" },
    { number: "99.99%", label: "Uptime Guarantee", icon: TrendingUp, description: "Reliable performance" },
    { number: "24/7", label: "AI Support Available", icon: Brain, description: "Always available" },
    { number: "100+", label: "Countries Served", icon: Globe, description: "Global reach" }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "CTO, QuantumTech Corp",
      content: "Zion Tech Group's AI consciousness platform is revolutionary. We've achieved breakthroughs in AI development that seemed impossible just a year ago.",
      rating: 5,
      company: "QuantumTech Corp",
      avatar: "/avatars/sarah-johnson.jpg"
    },
    {
      name: "Michael Chen",
      role: "VP Engineering, DataFlow",
      content: "The quantum-secure cloud infrastructure exceeded our expectations. We're now future-proofed against quantum threats while maintaining peak performance.",
      rating: 5,
      company: "DataFlow",
      avatar: "/avatars/michael-chen.jpg"
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "AI Research Director, NeuroLab",
      content: "Their autonomous AI research assistant is game-changing. We've accelerated our research timeline by 400% and made discoveries we never thought possible.",
      rating: 5,
      company: "NeuroLab",
      avatar: "/avatars/emily-rodriguez.jpg"
    }
  ];

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  const handleCategoryChange = useCallback((categoryId: string) => {
    setSelectedCategory(categoryId);
    setUserInteraction(true);
  }, []);

  const handleGetStarted = useCallback(() => {
    setIsLoading(true);
    // Simulate loading for demo purposes
    setTimeout(() => {
      setIsLoading(false);
      // Navigate to contact page or open contact form
      window.location.href = '/contact';
    }, 1500);
  }, []);

  return (
    <Layout>
      <EnhancedSEO />
      
      <div className="min-h-screen relative overflow-hidden" onMouseMove={handleMouseMove}>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          {/* Enhanced Animated Background */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
            
            {/* Floating geometric shapes with enhanced animations */}
            <motion.div
              animate={{ 
                x: [0, 100, 0],
                y: [0, -50, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 20, repeat: -1, ease: "linear" }}
              className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-2xl"
            />
            
            <motion.div
              animate={{ 
                x: [0, -80, 0],
                y: [0, 60, 0],
                rotate: [0, -180, -360],
                scale: [1, 1.3, 1]
              }}
              transition={{ duration: 25, repeat: -1, ease: "linear" }}
              className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-2xl"
            />
            
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
                rotate: [0, 90, 180, 270, 360]
              }}
              transition={{ duration: 8, repeat: -1, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl"
            />
            
            {/* Enhanced grid pattern overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"></div>
            
            {/* Floating particles */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ duration: 3, repeat: -1, ease: "easeInOut" }}
              className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full"
            />
            <motion.div
              animate={{
                y: [0, 20, 0],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ duration: 4, repeat: -1, ease: "easeInOut" }}
              className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full"
            />
            <motion.div
              animate={{
                x: [0, 15, 0],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ duration: 5, repeat: -1, ease: "easeInOut" }}
              className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-emerald-400 rounded-full"
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              {/* Enhanced Badge */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full px-6 py-3 mb-8 backdrop-blur-sm"
              >
                <SparklesIcon className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-300 font-medium">Revolutionary 2045 Technology</span>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: -1, ease: "linear" }}
                  className="w-2 h-2 bg-cyan-400 rounded-full"
                />
              </motion.div>

              {/* Enhanced Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
              >
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Pioneering the Future
                </span>
                <br />
                <span className="text-white">of Technology</span>
              </motion.h1>

              {/* Enhanced Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
              >
                Experience cutting-edge AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide. 
                From micro SAAS to enterprise infrastructure, we deliver revolutionary technology at scale.
              </motion.p>

              {/* Enhanced CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleGetStarted}
                  disabled={isLoading}
                  className="group relative bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Getting Started...
                      </>
                    ) : (
                      <>
                        Get Started Today
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '0%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    Watch Demo
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-cyan-500/10"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </motion.div>

              {/* Enhanced Social Proof */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="mt-12 pt-8 border-t border-gray-700/30"
              >
                <p className="text-sm text-gray-400 mb-4">Trusted by industry leaders worldwide</p>
                <div className="flex items-center justify-center space-x-8 opacity-60">
                  <div className="text-gray-500 font-semibold">QuantumTech Corp</div>
                  <div className="text-gray-500 font-semibold">DataFlow</div>
                  <div className="text-gray-500 font-semibold">NeuroLab</div>
                  <div className="text-gray-500 font-semibold">InnovateLab</div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Floating Action Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: isHeroVisible ? 1 : 0, scale: isHeroVisible ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-8 right-8 z-50"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full shadow-2xl shadow-cyan-500/25 flex items-center justify-center text-white hover:shadow-cyan-500/40 transition-all duration-300"
            >
              <Phone className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </section>

        {/* Featured Services Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary Services
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Discover our comprehensive portfolio of AI consciousness, quantum computing, and autonomous technology solutions
              </p>
            </motion.div>

            {/* Enhanced Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`group flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600/50 hover:border-cyan-500/30'
                  }`}
                >
                  <category.icon className={`w-5 h-5 group-hover:scale-110 transition-transform ${
                    selectedCategory === category.id ? 'text-white' : 'text-gray-400'
                  }`} />
                  <span>{category.name}</span>
                  <span className="bg-gray-700/50 px-2 py-1 rounded-full text-xs">
                    {category.count}
                  </span>
                </motion.button>
              ))}
            </div>

            {/* Enhanced Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {getFilteredServices().slice(0, 9).map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group cursor-pointer"
                >
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-2xl">{service.icon}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {service.name}
                    </h3>
                    
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-cyan-400 font-bold text-lg">{service.price}</span>
                      {service.popular && (
                        <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full">
                          Popular
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>{service.trialDays} day trial</span>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Enhanced View All Services Button */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center mt-12"
            >
              <Link
                href="/services"
                className="group inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 px-8 py-3 rounded-full font-medium transition-all duration-300 hover:border-cyan-500/50"
              >
                <span>View All Services</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Features Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Experience the future of technology with our revolutionary solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group cursor-pointer"
                >
                  <Link href={feature.href} className="block">
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                        {feature.title}
                      </h3>
                      
                      <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-cyan-400 font-bold text-lg">{feature.price}</span>
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Stats Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center group"
                >
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-10 h-10 text-cyan-400" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-lg font-medium text-cyan-300 mb-2">{stat.label}</div>
                  <div className="text-gray-400">{stat.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Testimonials Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Join thousands of satisfied customers who have transformed their businesses with our technology
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25">
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-white">{testimonial.name}</div>
                        <div className="text-sm text-cyan-300">{testimonial.role}</div>
                        <div className="text-xs text-gray-400">{testimonial.company}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-cyan-500/30 rounded-3xl p-12 backdrop-blur-sm">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Revolutionize Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Join the future of technology with Zion Tech Group. Our revolutionary solutions are designed to transform your business and give you a competitive edge.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleGetStarted}
                    disabled={isLoading}
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40"
                  >
                    {isLoading ? 'Getting Started...' : 'Get Started Today'}
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
                  >
                    <Calendar className="w-5 h-5 inline mr-2" />
                    Schedule Demo
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default EnhancedHomepage2045;