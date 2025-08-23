import React, { useEffect, useState, useCallback, Suspense, lazy, useMemo } from 'react';
import Link from 'next/link';
import Layout from './layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Play, TrendingUp, Brain, Shield, Rocket, Globe, Cpu, Database, Atom, Target, Star, Sparkles as SparklesIcon,
  Brain as BrainIcon, Atom as AtomIcon, Shield as ShieldIcon, Rocket as RocketIcon, Zap, Eye, Heart, Infinity,
  CheckCircle, Users, Award, Clock, DollarSign, BarChart3, Palette, Layers, Code, Server, Cloud, Lock,
  Phone, Mail, MapPin, ExternalLink, ChevronRight, ChevronDown, Search, Menu, X
} from 'lucide-react';
import EnhancedSEO from './EnhancedSEO';

// Import our new real services
import { realMicroSaas2025Expansion } from '../data/real-micro-saas-2025-expansion';
import { realITServices2025Expansion } from '../data/real-it-services-2025-expansion';
import { realAIServices2025Expansion } from '../data/real-ai-services-2025-expansion';
import { innovativeMicroSaas2025ExpansionV2 } from '../data/2025-innovative-micro-saas-expansion-v2';
import { innovativeITServices2025ExpansionV2 } from '../data/2025-innovative-it-services-expansion-v2';
import { innovativeAIServicesExpansionV22025 } from '../data/2025-innovative-ai-services-expansion-v2';

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

const EnhancedHomepage2046: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(false);
  const [userInteraction, setUserInteraction] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  useEffect(() => {
    setIsVisible(true);
    
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);
    
    // Auto-rotate featured services (only if no reduced motion)
    if (!mediaQuery.matches) {
      const interval = setInterval(() => {
        setCurrentServiceIndex((prev) => (prev + 1) % 8);
      }, 6000);
      
      return () => clearInterval(interval);
    }
  }, []);

  // Combine all real services
  const allRealServices = useMemo(() => [
    ...realMicroSaas2025Expansion,
    ...realITServices2025Expansion,
    ...realAIServices2025Expansion,
    ...innovativeMicroSaas2025ExpansionV2,
    ...innovativeITServices2025ExpansionV2,
    ...innovativeAIServicesExpansionV22025
  ], []);

  // Get featured services for rotation
  const featuredServices = useMemo(() => 
    allRealServices.slice(0, 8), [allRealServices]
  );

  // Filter services by category
  const getFilteredServices = useCallback(() => {
    if (selectedCategory === 'all') return allRealServices;
    return allRealServices.filter(service => 
      service.category.toLowerCase().includes(selectedCategory.toLowerCase())
    );
  }, [allRealServices, selectedCategory]);

  // Filter services by search query
  const getSearchedServices = useCallback(() => {
    if (!searchQuery.trim()) return getFilteredServices();
    const query = searchQuery.toLowerCase();
    return getFilteredServices().filter(service =>
      service.name.toLowerCase().includes(query) ||
      service.description.toLowerCase().includes(query) ||
      service.category.toLowerCase().includes(query) ||
      (service as any).tagline?.toLowerCase().includes(query)
    );
  }, [searchQuery, getFilteredServices]);

  const categories = [
    { id: 'all', name: 'All Services', icon: SparklesIcon, color: 'from-purple-500 to-pink-500', count: allRealServices.length },
    { id: 'ai', name: 'AI & Machine Learning', icon: BrainIcon, color: 'from-cyan-500 to-blue-500', count: allRealServices.filter(s => s.category.toLowerCase().includes('ai')).length },
    { id: 'it', name: 'IT Infrastructure', icon: Cpu, color: 'from-blue-500 to-indigo-500', count: allRealServices.filter(s => s.category.toLowerCase().includes('it')).length },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: ShieldIcon, color: 'from-red-500 to-orange-500', count: allRealServices.filter(s => s.category.toLowerCase().includes('cyber')).length },
    { id: 'quantum', name: 'Quantum Technology', icon: Atom, color: 'from-purple-500 to-pink-500', count: allRealServices.filter(s => s.category.toLowerCase().includes('quantum')).length },
    { id: 'space', name: 'Space Technology', icon: Rocket, color: 'from-orange-500 to-red-500', count: allRealServices.filter(s => s.category.toLowerCase().includes('space')).length }
  ];

  const features = [
    { icon: Brain, title: "AI Consciousness Evolution Platform", description: "Advanced AI consciousness development and ethical AI training", href: "/services/ai-consciousness-evolution-platform", color: "from-purple-500 to-pink-500", price: "$2,499/month" },
    { icon: Atom, title: "Quantum Neural Network Platform", description: "Quantum-powered neural networks with AI consciousness capabilities", href: "/services/quantum-neural-network-platform", color: "from-indigo-500 to-purple-500", price: "$1,899/month" },
    { icon: Cloud, title: "Quantum Cloud Infrastructure Platform", description: "Next-generation quantum-ready cloud infrastructure with AI optimization", href: "/services/quantum-cloud-infrastructure-platform", color: "from-blue-500 to-cyan-500", price: "$1,499/month" },
    { icon: Rocket, title: "Space Resource Mining Intelligence", description: "AI-powered space resource discovery and mining optimization", href: "/services/space-resource-mining-intelligence", color: "from-orange-500 to-red-500", price: "$1,299/month" },
    { icon: Cpu, title: "Autonomous DevOps Intelligence Platform", description: "AI-powered DevOps automation with intelligent deployment", href: "/services/autonomous-devops-intelligence-platform", color: "from-green-500 to-emerald-500", price: "$699/month" },
    { icon: Shield, title: "Quantum Cybersecurity Threat Intelligence", description: "Quantum-resistant cybersecurity with AI-powered threat detection", href: "/services/quantum-cybersecurity-threat-intelligence", color: "from-red-500 to-pink-500", price: "$799/month" }
  ];

  const stats = [
    { number: "2500+", label: "Revolutionary Services", icon: Star, description: "Cutting-edge solutions" },
    { number: "99.99%", label: "Uptime Guarantee", icon: TrendingUp, description: "Reliable performance" },
    { number: "24/7", label: "Expert Support", icon: Users, description: "Always available" },
    { number: "75+", label: "Industry Solutions", icon: Award, description: "Proven track record" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      content: "Zion Tech Group's AI consciousness platform transformed our research capabilities, accelerating development by 300% and opening new frontiers in AI development.",
      rating: 5,
      company: "TechCorp",
      avatar: "👩‍💼"
    },
    {
      name: "Michael Chen",
      role: "VP Engineering, DataFlow",
      content: "The quantum cloud infrastructure exceeded our expectations. We've reduced costs by 40% while improving performance by 60%.",
      rating: 5,
      company: "DataFlow",
      avatar: "👨‍💻"
    },
    {
      name: "Emily Rodriguez",
      role: "Security Director, SecureNet",
      content: "Their quantum cybersecurity platform is revolutionary. We've prevented 95% of potential security incidents with autonomous threat response.",
      rating: 5,
      company: "SecureNet",
      avatar: "👩‍🔬"
    }
  ];

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  const handleCategoryChange = useCallback((categoryId: string) => {
    setSelectedCategory(categoryId);
    setUserInteraction(true);
  }, []);

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  }, []);

  return (
    <Layout>
      <EnhancedSEO />
      
      <div className="min-h-screen relative overflow-hidden" onMouseMove={handleMouseMove}>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
            
            {/* Matrix Rain Effect */}
            <div className="absolute inset-0 opacity-20">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute text-cyan-400 text-xs matrix-rain"
                  style={{
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${3 + Math.random() * 2}s`
                  }}
                >
                  {String.fromCharCode(0x30A0 + Math.random() * 96)}
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full px-6 py-3 mb-8 neon-border"
              >
                <SparklesIcon className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-300 font-medium neon-text">Revolutionary 2046 Technology</span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-bold mb-8">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent neon-text">
                  Pioneering the Future
                </span>
                <br />
                <span className="text-white">of Technology</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Experience cutting-edge AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide. 
                From micro SAAS to enterprise infrastructure, we deliver revolutionary technology at scale.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 neon-glow"
                >
                  Explore Services
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 cyber-border"
                >
                  <Play className="w-5 h-5 inline mr-2" />
                  Watch Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-16 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Discover Revolutionary Services
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Explore our comprehensive portfolio of cutting-edge technology solutions
              </p>
            </motion.div>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-2xl mx-auto mb-8"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for services, technologies, or solutions..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:bg-gray-800/80 transition-all duration-200"
                />
              </div>
            </motion.div>

            {/* Category Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-3 mb-8"
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700 hover:border-cyan-500/30'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <category.icon className="w-4 h-4" />
                    <span>{category.name}</span>
                    <span className="text-xs bg-gray-700/50 px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </div>
                </button>
              ))}
            </motion.div>

            {/* Services Count */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center text-gray-400"
            >
              Showing {getSearchedServices().length} of {allRealServices.length} revolutionary services
            </motion.div>
          </div>
        </section>

        {/* Featured Services Section */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured Revolutionary Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the future of technology with our most innovative and cutting-edge solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <Link href={feature.href} className="block">
                    <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-cyan-500/30 hover:bg-gray-900/80 transition-all duration-300 hover:scale-105">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-200">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 mb-4 leading-relaxed">
                        {feature.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-cyan-400">
                          {feature.price}
                        </span>
                        <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 transition-colors duration-200" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mb-4 border border-cyan-500/30">
                    <stat.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2 neon-text">
                    {stat.number}
                  </div>
                  <div className="text-lg font-medium text-gray-300 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-400">
                    {stat.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how Zion Tech Group is transforming businesses with revolutionary technology
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className="text-4xl mr-4">{testimonial.avatar}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                      <p className="text-gray-400">{testimonial.role}</p>
                      <p className="text-sm text-gray-500">{testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join the revolution and experience the future of technology with Zion Tech Group
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 neon-glow"
                >
                  Get Started Today
                </Link>
                <Link
                  href="/services"
                  className="border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 cyber-border"
                >
                  Explore All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default EnhancedHomepage2046;