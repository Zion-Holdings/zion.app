import React, { useEffect, useState, useCallback, useMemo } from 'react';
import Layout from './layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Play, TrendingUp, Brain, Shield, Rocket, Globe, Cpu, Database, Atom, Target, Star, Sparkles as SparklesIcon,
  Brain as BrainIcon, Atom as AtomIcon, Shield as ShieldIcon, Rocket as RocketIcon, Zap, Eye, Heart, Infinity,
  ChevronRight, ChevronLeft, ExternalLink, Users, Award, Clock, CheckCircle, Zap as ZapIcon
} from 'lucide-react';

// Import our new revolutionary services
import { revolutionary2045AdvancedRealMicroSaas } from '../data/revolutionary-2045-advanced-real-micro-saas';
import { revolutionary2045AdvancedITServices } from '../data/revolutionary-2045-advanced-it-services';
import { revolutionary2045AdvancedAIServices } from '../data/revolutionary-2045-advanced-ai-services';

const Homepage2045: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  // Memoize expensive computations
  const allRevolutionaryServices = useMemo(() => [
    ...revolutionary2045AdvancedRealMicroSaas,
    ...revolutionary2045AdvancedITServices,
    ...revolutionary2045AdvancedAIServices
  ], []);

  const featuredServices = useMemo(() => allRevolutionaryServices.slice(0, 6), [allRevolutionaryServices]);

  const categories = useMemo(() => [
    { id: 'all', name: 'All Services', icon: SparklesIcon, color: 'from-purple-500 to-pink-500', count: allRevolutionaryServices.length },
    { id: 'ai', name: 'AI & Consciousness', icon: BrainIcon, color: 'from-cyan-500 to-blue-500', count: revolutionary2045AdvancedAIServices.length },
    { id: 'quantum', name: 'Quantum Technology', icon: AtomIcon, color: 'from-blue-500 to-indigo-500', count: allRevolutionaryServices.filter(s => s.category.includes('Quantum')).length },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: ShieldIcon, color: 'from-red-500 to-orange-500', count: allRevolutionaryServices.filter(s => s.category.includes('Security')).length },
    { id: 'business', name: 'Business Solutions', icon: Target, color: 'from-emerald-500 to-teal-500', count: allRevolutionaryServices.filter(s => s.type === 'Micro SAAS').length },
    { id: 'it', name: 'IT Infrastructure', icon: Cpu, color: 'from-yellow-500 to-orange-500', count: revolutionary2045AdvancedITServices.length }
  ], [allRevolutionaryServices, revolutionary2045AdvancedAIServices, revolutionary2045AdvancedITServices]);

  const features = useMemo(() => [
    { icon: Brain, title: "AI Consciousness Evolution 2045", description: "Next-generation AI consciousness with emotional intelligence", href: "/ai-consciousness-evolution-platform-2045", color: "from-purple-500 to-pink-500" },
    { icon: Atom, title: "Quantum AI Hybrid Computing", description: "Quantum-powered AI with consciousness integration", href: "/quantum-ai-hybrid-computing-platform-2045", color: "from-blue-500 to-cyan-500" },
    { icon: Shield, title: "Quantum Cybersecurity Intelligence", description: "Quantum-resistant security with AI consciousness", href: "/quantum-cybersecurity-intelligence-2045", color: "from-red-500 to-orange-500" },
    { icon: Rocket, title: "Autonomous Business Intelligence", description: "Fully autonomous AI business intelligence", href: "/autonomous-ai-business-intelligence-2045", color: "from-indigo-500 to-purple-500" },
    { icon: Cpu, title: "Quantum Cloud Infrastructure", description: "Quantum-powered cloud with consciousness", href: "/quantum-cloud-infrastructure-platform-2045", color: "from-emerald-500 to-teal-500" },
    { icon: Database, title: "Autonomous DevOps Intelligence", description: "AI-powered DevOps optimization", href: "/autonomous-devops-intelligence-platform-2045", color: "from-yellow-500 to-orange-500" }
  ], []);

  const stats = useMemo(() => [
    { number: "3000+", label: "Revolutionary Services", icon: Star },
    { number: "99.99%", label: "Uptime Guarantee", icon: TrendingUp },
    { number: "24/7", label: "AI Support Available", icon: Brain },
    { number: "250+", label: "Countries Served", icon: Globe }
  ], []);
  
  useEffect(() => {
    // Simulate loading for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsVisible(true);
    }, 500);
    
    // Auto-rotate featured services
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % 6);
    }, 8000);
    
    // Track mouse movement for parallax effects
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Filter services by category with memoization
  const getFilteredServices = useCallback(() => {
    if (selectedCategory === 'all') return allRevolutionaryServices;
    return allRevolutionaryServices.filter(service => 
      service.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      service.type.toLowerCase().includes(selectedCategory.toLowerCase())
    );
  }, [selectedCategory, allRevolutionaryServices]);

  const handleGetStarted = useCallback(() => {
    if (typeof window !== 'undefined') {
      window.location.href = '/revolutionary-2045-pricing-showcase';
    }
  }, []);

  const handleContact = useCallback(() => {
    if (typeof window !== 'undefined') {
      window.location.href = '/contact';
    }
  }, []);

  const handleWatchDemo = useCallback(() => {
    if (typeof window !== 'undefined') {
      window.location.href = '/services';
    }
  }, []);

  const handleServiceClick = useCallback((service: any) => {
    if (typeof window !== 'undefined') {
      window.location.href = service.slug;
    }
  }, []);

  const handleCategoryChange = useCallback((categoryId: string) => {
    setSelectedCategory(categoryId);
  }, []);

  // Loading state
  if (isLoading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 animate-pulse">
              <Zap className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-3">Loading Zion Tech Group</h2>
            <p className="text-gray-400 text-lg">Preparing revolutionary technology</p>
            <div className="mt-6 flex justify-center">
              <div className="w-2 h-2 bg-cyan-400 rounded-full mx-1 animate-bounce"></div>
              <div className="w-2 h-2 bg-cyan-400 rounded-full mx-1 animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-cyan-400 rounded-full mx-1 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Main Content */}
      <main className="relative z-10" role="main" aria-label="Zion Tech Group Homepage">
        {/* Hero Section */}
        <section 
          className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
          aria-labelledby="hero-heading"
        >
          {/* Enhanced Animated Background */}
          <div className="absolute inset-0 -z-10">
            {/* Floating orbs with neon effects */}
            <div 
              className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse shadow-[0_0_100px_rgba(6,182,212,0.5)]"
              style={{
                transform: `translate(${(mousePosition.x - (typeof window !== 'undefined' ? window.innerWidth / 2 : 0)) * 0.02}px, ${(mousePosition.y - (typeof window !== 'undefined' ? window.innerHeight / 2 : 0)) * 0.02}px)`
              }}
              aria-hidden="true"
            ></div>
            <div 
              className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000 shadow-[0_0_100px_rgba(168,85,247,0.5)]"
              style={{
                transform: `translate(${(mousePosition.x - (typeof window !== 'undefined' ? window.innerWidth / 2 : 0)) * -0.01}px, ${(mousePosition.y - (typeof window !== 'undefined' ? window.innerHeight / 2 : 0)) * -0.01}px)`
              }}
              aria-hidden="true"
            ></div>
            <div 
              className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse delay-500 shadow-[0_0_100px_rgba(16,185,129,0.5)]"
              style={{
                transform: `translate(${(mousePosition.x - (typeof window !== 'undefined' ? window.innerWidth / 2 : 0)) * 0.015}px, ${(mousePosition.y - (typeof window !== 'undefined' ? window.innerHeight / 2 : 0)) * 0.015}px)`
              }}
              aria-hidden="true"
            ></div>
            
            {/* Animated particles with neon trails */}
            <div className="absolute inset-0" aria-hidden="true">
              {[...Array(20)].map((_, i) => (
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
            <div className="absolute inset-0 opacity-20" aria-hidden="true">
              <div className="absolute inset-0" style={{
                backgroundImage: `
                  linear-gradient(rgba(6,182,212,0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(6,182,212,0.1) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px'
              }}></div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="text-center max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <h1 
                id="hero-heading"
                className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6 leading-tight"
              >
                Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Revolutionary Technology Solutions for 2045 and Beyond
              </p>
              <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                Pioneering the future with AI consciousness, quantum computing, and autonomous systems that redefine what's possible
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
              <button
                onClick={handleGetStarted}
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-2xl text-lg shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 hover:from-cyan-400 hover:to-blue-500 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
                aria-label="Get started with Zion Tech Group services"
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <ArrowRight className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button
                onClick={handleWatchDemo}
                className="group relative px-8 py-4 border-2 border-cyan-500/30 text-cyan-400 font-semibold rounded-2xl text-lg hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105 hover:border-cyan-400 focus:outline-none focus:ring-4 focus:ring-cyan-500/30"
                aria-label="Watch demo of Zion Tech Group services"
              >
                <span className="relative z-10">Watch Demo</span>
                <Play className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </button>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
              role="region"
              aria-label="Company Statistics"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-cyan-400" aria-hidden="true" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1" aria-label={`${stat.number} ${stat.label}`}>{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Services Categories Section */}
        <section className="py-20 px-4 relative" aria-labelledby="services-heading">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 id="services-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary Services 2045
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Explore our cutting-edge technology solutions that are shaping the future
              </p>
            </motion.div>

            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-4 mb-12"
              role="tablist"
              aria-label="Service Categories"
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`group relative px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
                  }`}
                  role="tab"
                  aria-selected={selectedCategory === category.id}
                  aria-controls={`${category.id}-panel`}
                >
                  <div className="flex items-center gap-3">
                    <category.icon className="w-5 h-5" aria-hidden="true" />
                    <span>{category.name}</span>
                    <span className="text-xs bg-gray-700/50 px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </div>
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
              role="tabpanel"
              aria-label="Services Grid"
            >
              {getFilteredServices().slice(0, 9).map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative bg-gray-900/50 backdrop-blur-sm rounded-3xl p-6 border border-gray-800/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 cursor-pointer"
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                  onClick={() => handleServiceClick(service)}
                  role="article"
                  aria-label={`${service.name} - ${service.description}`}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleServiceClick(service);
                    }
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Brain className="w-8 h-8 text-cyan-400" aria-hidden="true" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {service.name}
                    </h3>
                    
                    <p className="text-gray-400 mb-4 line-clamp-3">
                      {service.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-cyan-400 font-medium">
                        {service.category}
                      </span>
                      <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
                    </div>
                  </div>
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
                onClick={handleWatchDemo}
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-2xl text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-500/50"
                aria-label="View all Zion Tech Group services"
              >
                <span className="relative z-10">View All Services</span>
                <ArrowRight className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 relative" aria-labelledby="features-heading">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 id="features-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary Features 2045
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Discover the groundbreaking features that set our technology apart
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-800/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-8 h-8 text-white" aria-hidden="true" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-6">
                      {feature.description}
                    </p>
                    
                    <button
                      onClick={() => window.location.href = feature.href}
                      className="group/btn inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 rounded-lg px-2 py-1"
                      aria-label={`Learn more about ${feature.title}`}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 relative" aria-labelledby="cta-heading">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 id="cta-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Future?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Join the revolution and experience technology that's years ahead of its time
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleGetStarted}
                  className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-2xl text-lg shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
                  aria-label="Get started with Zion Tech Group today"
                >
                  <span className="relative z-10">Get Started Today</span>
                  <ArrowRight className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                
                <button
                  onClick={handleContact}
                  className="group relative px-8 py-4 border-2 border-cyan-500/30 text-cyan-400 font-semibold rounded-2xl text-lg hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105 hover:border-cyan-400 focus:outline-none focus:ring-4 focus:ring-cyan-500/30"
                  aria-label="Contact Zion Tech Group"
                >
                  <span className="relative z-10">Contact Us</span>
                  <ArrowRight className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Homepage2045;