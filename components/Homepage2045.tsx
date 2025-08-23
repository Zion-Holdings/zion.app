import React, { useEffect, useState, useCallback, Suspense, lazy } from 'react';
import Layout from './layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Play, TrendingUp, Brain, Shield, Rocket, Globe, Cpu, Database, Atom, Target, Star, Sparkles as SparklesIcon,
  Brain as BrainIcon, Atom as AtomIcon, Shield as ShieldIcon, Rocket as RocketIcon, Zap, Eye, Heart, Infinity,
  ChevronDown, CheckCircle, Users, Award, Clock, DollarSign, BarChart3, Layers, Zap as ZapIcon, Phone, Mail, MapPin
} from 'lucide-react';
import Head from 'next/head';

// Import our new revolutionary 2045 services
import { revolutionary2045AdvancedMicroSaas } from '../data/revolutionary-2045-advanced-micro-saas';
import { revolutionary2045ITServices } from '../data/revolutionary-2045-it-services';
import { revolutionary2045AIServices } from '../data/revolutionary-2045-ai-services';

// Lazy load components for better performance
const ServiceCard = lazy(() => import('./ServiceCard'));
const PerformanceMetrics = lazy(() => import('./PerformanceMetrics'));
const InteractiveDemo = lazy(() => import('./InteractiveDemo'));
const PerformanceOptimizer = lazy(() => import('./PerformanceOptimizer'));

const Homepage2045: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(false);
  const [userInteraction, setUserInteraction] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  
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
    
    // Track scroll for parallax effects
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Combine all revolutionary 2045 services
  const allRevolutionaryServices = [
    ...revolutionary2045AdvancedMicroSaas,
    ...revolutionary2045ITServices,
    ...revolutionary2045AIServices
  ];

  // Get featured services for rotation
  const featuredServices = allRevolutionaryServices.slice(0, 6);

  // Filter services by category
  const getFilteredServices = () => {
    if (selectedCategory === 'all') return allRevolutionaryServices;
    return allRevolutionaryServices.filter(service => 
      service.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      service.type.toLowerCase().includes(selectedCategory.toLowerCase())
    );
  };

  const categories = [
    { id: 'all', name: 'All Services', icon: SparklesIcon, color: 'from-purple-500 to-pink-500' },
    { id: 'ai', name: 'AI & Consciousness', icon: BrainIcon, color: 'from-cyan-500 to-blue-500' },
    { id: 'quantum', name: 'Quantum Technology', icon: AtomIcon, color: 'from-blue-500 to-indigo-500' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: ShieldIcon, color: 'from-red-500 to-orange-500' },
    { id: 'infrastructure', name: 'Infrastructure', icon: Cpu, color: 'from-emerald-500 to-teal-500' },
    { id: 'business', name: 'Business Solutions', icon: Target, color: 'from-yellow-500 to-orange-500' }
  ];

  const features = [
    { icon: Brain, title: "AI Consciousness Evolution 2045", description: "Next-generation AI consciousness with emotional intelligence", href: "/ai-consciousness-evolution-2045", color: "from-purple-500 to-pink-500" },
    { icon: Atom, title: "Quantum Neural Networks 2045", description: "Quantum-powered AI with consciousness integration", href: "/quantum-neural-network-platform-2045", color: "from-blue-500 to-cyan-500" },
    { icon: Shield, title: "Quantum Cybersecurity 2045", description: "Quantum-resistant security with AI consciousness", href: "/quantum-cybersecurity-platform-2045", color: "from-red-500 to-orange-500" },
    { icon: Rocket, title: "Space Resource Intelligence 2045", description: "AI-powered space exploration with consciousness", href: "/space-resource-intelligence-2045", color: "from-indigo-500 to-purple-500" },
    { icon: Cpu, title: "Autonomous Business Intelligence 2045", description: "Fully autonomous AI business intelligence", href: "/ai-autonomous-business-intelligence-2045", color: "from-emerald-500 to-teal-500" },
    { icon: Database, title: "Quantum Cloud Infrastructure 2045", description: "Quantum-powered cloud with consciousness", href: "/quantum-cloud-infrastructure-2045", color: "from-yellow-500 to-orange-500" }
  ];

  const stats = [
    { number: "2500+", label: "Revolutionary Services", icon: Star },
    { number: "99.99%", label: "Uptime Guarantee", icon: TrendingUp },
    { number: "24/7", label: "AI Support Available", icon: Brain },
    { number: "250+", label: "Countries Served", icon: Globe }
  ];

  const handleGetStarted = useCallback(() => {
    window.location.href = '/revolutionary-2045-pricing-showcase';
  }, []);

  const handleWatchDemo = useCallback(() => {
    window.location.href = '/services';
  }, []);

  const handleCategoryChange = useCallback((category: string) => {
    setSelectedCategory(category);
    setUserInteraction(true);
  }, []);

  // Parallax effect for background elements
  const parallaxStyle = {
    transform: `translateY(${scrollY * 0.5}px)`,
  };

  return (
    <>
      <Head>
        <title>Zion Tech Group - Revolutionary 2045 Technology Solutions</title>
        <meta name="description" content="Discover the future of technology with Zion Tech Group's revolutionary 2045 micro SAAS services, IT solutions, and AI innovations. Experience consciousness-driven AI, quantum computing, and autonomous systems." />
        <meta name="keywords" content="AI 2045, quantum computing, micro SAAS, IT services, autonomous systems, consciousness AI, futuristic technology" />
        <meta property="og:title" content="Zion Tech Group - Revolutionary 2045 Technology Solutions" />
        <meta property="og:description" content="Discover the future of technology with Zion Tech Group's revolutionary 2045 micro SAAS services, IT solutions, and AI innovations." />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="relative min-h-screen overflow-hidden">
        {/* Enhanced Futuristic Background */}
        <div className="fixed inset-0 z-0">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-blue-900/20 animate-pulse" />
          
          {/* Floating geometric shapes */}
          <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/30 rounded-full animate-spin-slow" />
          <div className="absolute top-40 right-32 w-24 h-24 border border-purple-400/30 rotate-45 animate-pulse" />
          <div className="absolute bottom-32 left-32 w-40 h-40 border border-blue-400/30 rounded-full animate-bounce-slow" />
          
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>

        {/* Main Content */}
        <div className="relative z-10">
          {/* Hero Section */}
          <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
              {/* Main Heading */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="mb-8"
              >
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
                  Revolutionary 2045
                </h1>
                <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-4">
                  Technology Solutions
                </h2>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  Experience the future with consciousness-driven AI, quantum computing, and autonomous systems that redefine what's possible.
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              >
                <button
                  onClick={handleGetStarted}
                  className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-full text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
                >
                  <span className="flex items-center gap-2">
                    Get Started
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                </button>
                
                <button
                  onClick={handleWatchDemo}
                  className="group relative px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-full text-lg hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  <span className="flex items-center gap-2">
                    <Play className="w-5 h-5" />
                    Watch Demo
                  </span>
                </button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
              >
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <stat.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div className="text-2xl lg:text-3xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Services Showcase Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              {/* Section Header */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                  Revolutionary 2045 Services
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Discover our cutting-edge micro SAAS solutions, IT services, and AI innovations that are shaping the future of technology.
                </p>
              </motion.div>

              {/* Category Filter */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-wrap justify-center gap-4 mb-12"
              >
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    className={`group relative px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg'
                        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600/50'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <category.icon className="w-5 h-5" />
                      {category.name}
                    </span>
                    {selectedCategory === category.id && (
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                    )}
                  </button>
                ))}
              </motion.div>

              {/* Services Grid */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {getFilteredServices().slice(0, 9).map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
                  >
                    {/* Service Header */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-gray-400 text-sm">{service.tagline}</p>
                    </div>

                    {/* Service Details */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs">
                          {service.category}
                        </span>
                        <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs">
                          {service.type}
                        </span>
                      </div>
                      
                      <p className="text-gray-300 text-sm line-clamp-3">{service.description}</p>
                    </div>

                    {/* Pricing */}
                    <div className="mb-4">
                      <div className="text-lg font-bold text-white">
                        Starting at {service.pricing.starter}
                      </div>
                    </div>

                    {/* Features Preview */}
                    <div className="mb-6">
                      <div className="text-sm text-gray-400 mb-2">Key Features:</div>
                      <div className="grid grid-cols-1 gap-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                            <CheckCircle className="w-3 h-3 text-cyan-400" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button
                      onClick={() => window.location.href = service.slug}
                      className="w-full group/btn relative px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg text-sm hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                    >
                      <span className="flex items-center justify-center gap-2">
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </span>
                    </button>
                  </motion.div>
                ))}
              </motion.div>

              {/* View All Services Button */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-center mt-12"
              >
                <button
                  onClick={() => window.location.href = '/services'}
                  className="group relative px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  <span className="flex items-center gap-2">
                    View All Services
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </motion.div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                  Why Choose Zion Tech Group?
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  We're not just building the future – we're living it. Experience technology that thinks, learns, and evolves with you.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105"
                  >
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-full h-full text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-400 mb-6">{feature.description}</p>
                    <button
                      onClick={() => window.location.href = feature.href}
                      className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                  Ready to Experience the Future?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Contact us today to learn how our revolutionary 2045 technology solutions can transform your business.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                    <div className="text-white font-semibold">Phone</div>
                    <div className="text-gray-400">+1 302 464 0950</div>
                  </div>
                  <div className="text-center">
                    <Mail className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                    <div className="text-white font-semibold">Email</div>
                    <div className="text-gray-400">kleber@ziontechgroup.com</div>
                  </div>
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                    <div className="text-white font-semibold">Address</div>
                    <div className="text-gray-400">364 E Main St STE 1008<br />Middletown DE 19709</div>
                  </div>
                </div>

                <button
                  onClick={() => window.location.href = '/contact'}
                  className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-full text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
                >
                  <span className="flex items-center gap-2">
                    Get Started Today
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </motion.div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Homepage2045;