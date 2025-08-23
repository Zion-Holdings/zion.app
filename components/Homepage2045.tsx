import React, { useEffect, useState, useCallback } from 'react';
import Layout from './layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Play, TrendingUp, Brain, Shield, Rocket, Globe, Cpu, Database, Atom, Target, Star, Sparkles as SparklesIcon,
  Brain as BrainIcon, Atom as AtomIcon, Shield as ShieldIcon, Rocket as RocketIcon, Zap, Eye, Heart, Infinity,
  ChevronRight, ChevronLeft, ExternalLink, Users, Award, Clock, CheckCircle, Zap as ZapIcon,
  ArrowUpRight, Sparkles, Target as TargetIcon, Globe as GlobeIcon, Mail, Phone, MapPin
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
  const [isTyping, setIsTyping] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
    
    // Start typing animation
    setTimeout(() => setIsTyping(true), 1000);
    
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
      clearInterval(interval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Combine all revolutionary services
  const allRevolutionaryServices = [
    ...revolutionary2045AdvancedRealMicroSaas,
    ...revolutionary2045AdvancedITServices,
    ...revolutionary2045AdvancedAIServices
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
    { id: 'all', name: 'All Services', icon: SparklesIcon, color: 'from-purple-500 to-pink-500', count: allRevolutionaryServices.length },
    { id: 'ai', name: 'AI & Consciousness', icon: BrainIcon, color: 'from-cyan-500 to-blue-500', count: revolutionary2045AdvancedAIServices.length },
    { id: 'quantum', name: 'Quantum Technology', icon: AtomIcon, color: 'from-blue-500 to-indigo-500', count: allRevolutionaryServices.filter(s => s.category.includes('Quantum')).length },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: ShieldIcon, color: 'from-red-500 to-orange-500', count: allRevolutionaryServices.filter(s => s.category.includes('Security')).length },
    { id: 'business', name: 'Business Solutions', icon: Target, color: 'from-emerald-500 to-teal-500', count: allRevolutionaryServices.filter(s => s.type === 'Micro SAAS').length },
    { id: 'it', name: 'IT Infrastructure', icon: Cpu, color: 'from-yellow-500 to-orange-500', count: revolutionary2045AdvancedITServices.length }
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
    { number: "3000+", label: "Revolutionary Services", icon: Star, description: "Cutting-edge solutions" },
    { number: "99.99%", label: "Uptime Guarantee", icon: TrendingUp, description: "Reliable performance" },
    { number: "24/7", label: "AI Support Available", icon: Brain, description: "Always here to help" },
    { number: "250+", label: "Countries Served", icon: Globe, description: "Global reach" }
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

  return (
    <Layout>
      {/* Main Content */}
      <main className="relative z-10">
        {/* Enhanced Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Enhanced Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-cyan-900/20" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]" />
            
            {/* Enhanced Floating Elements with Better Animation */}
            <motion.div
              animate={{ 
                x: [0, 100, 0],
                y: [0, -100, 0],
                rotate: [0, 360, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 20,
                repeat: -1,
                ease: "linear"
              }}
              className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg backdrop-blur-sm"
            />
            <motion.div
              animate={{ 
                x: [0, -100, 0],
                y: [0, 100, 0],
                rotate: [0, -360, 0],
                scale: [1, 0.9, 1]
              }}
              transition={{ 
                duration: 25,
                repeat: -1,
                ease: "linear"
              }}
              className="absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full backdrop-blur-sm"
            />
            <motion.div
              animate={{ 
                x: [0, 150, 0],
                y: [0, -150, 0],
                rotate: [0, 720, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 30,
                repeat: -1,
                ease: "linear"
              }}
              className="absolute bottom-32 left-32 w-40 h-40 border border-pink-400/20 transform rotate-45 backdrop-blur-sm"
            />
            
            {/* New Floating Elements */}
            <motion.div
              animate={{ 
                x: [0, -80, 0],
                y: [0, -80, 0],
                rotate: [0, 180, 0],
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{ 
                duration: 15,
                repeat: -1,
                ease: "easeInOut"
              }}
              className="absolute top-1/2 right-1/4 w-16 h-16 border border-emerald-400/20 rounded-lg backdrop-blur-sm"
            />
          </div>

          {/* Enhanced Hero Content */}
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
              transition={{ duration: 1 }}
              className="space-y-8"
            >
              {/* Enhanced Main Heading with Typing Effect */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="relative"
                >
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                    <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                      Zion Tech Group
                    </span>
                  </h1>
                  
                  {/* Enhanced Subtitle with Better Typography */}
                  <motion.h2 
                    className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white/90 mt-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                  >
                    Revolutionary Technology Solutions for{' '}
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                      2045 and Beyond
                    </span>
                  </motion.h2>
                  
                  {/* Enhanced Description with Better Readability */}
                  <motion.p 
                    className="text-lg md:text-xl text-white/70 max-w-4xl mx-auto mt-6 leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                  >
                    Experience the future of technology with our cutting-edge{' '}
                    <span className="text-cyan-400 font-medium">AI consciousness</span>,{' '}
                    <span className="text-purple-400 font-medium">quantum computing</span>, and{' '}
                    <span className="text-pink-400 font-medium">autonomous systems</span>. 
                    Transform your business with revolutionary micro SAAS solutions that operate with true intelligence.
                  </motion.p>
                </motion.div>

                {/* Enhanced CTA Buttons with Better Visual Hierarchy */}
                <motion.div 
                  className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.8 }}
                >
                  <button
                    onClick={handleGetStarted}
                    className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-2xl text-xl transition-all duration-300 hover:from-cyan-600 hover:to-purple-600 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 transform hover:-translate-y-1"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      Get Started Today
                      <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                  
                  <button
                    onClick={handleWatchDemo}
                    className="group px-10 py-5 border-2 border-white/20 text-white font-bold rounded-2xl text-xl transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400 hover:bg-white/5 hover:scale-105 transform hover:-translate-y-1 backdrop-blur-sm"
                  >
                    <span className="flex items-center gap-3">
                      <Play className="w-6 h-6" />
                      Explore Services
                    </span>
                  </button>
                </motion.div>

                {/* Enhanced Stats with Better Visual Design */}
                <motion.div 
                  className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  {stats.map((stat, index) => (
                    <motion.div 
                      key={index} 
                      className="text-center group"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex justify-center mb-4">
                        <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl border border-cyan-400/30">
                          <stat.icon className="w-8 h-8 text-cyan-400 group-hover:text-purple-400 transition-colors duration-300" />
                        </div>
                      </div>
                      <div className="text-3xl md:text-4xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 mb-2">
                        {stat.number}
                      </div>
                      <div className="text-sm font-semibold text-white/90 group-hover:text-white transition-colors duration-300 mb-1">
                        {stat.label}
                      </div>
                      <div className="text-xs text-white/60 group-hover:text-white/80 transition-colors duration-300">
                        {stat.description}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Category Filter */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Explore Our{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Revolutionary Services
                </span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                Discover cutting-edge technology solutions across multiple domains, from AI consciousness to quantum computing
              </p>
            </motion.div>

            {/* Enhanced Category Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`group relative px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-2xl shadow-cyan-500/25 transform scale-105'
                      : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10 hover:border-cyan-400/30'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${
                      selectedCategory === category.id 
                        ? 'bg-white/20' 
                        : 'bg-white/5 group-hover:bg-cyan-400/20'
                    }`}>
                      <category.icon className="w-5 h-5" />
                    </div>
                    {category.name}
                    <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                      selectedCategory === category.id
                        ? 'bg-white/20 text-white'
                        : 'bg-white/10 text-white/70 group-hover:bg-cyan-400/20 group-hover:text-cyan-400'
                    }`}>
                      {category.count}
                    </span>
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {getFilteredServices().map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onHoverStart={() => setHoveredService(service.id)}
                  onHoverEnd={() => setHoveredService(null)}
                  whileHover={{ y: -8 }}
                  className="group relative"
                >
                  <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full transition-all duration-300 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/25 hover:scale-105 overflow-hidden">
                    {/* Enhanced Service Header */}
                    <div className="mb-8">
                      <div className="flex items-start justify-between mb-6">
                        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/25">
                          <Brain className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-sm bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full font-semibold shadow-lg">
                          {service.type}
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300 leading-tight">
                        {service.name}
                      </h3>
                      
                      <p className="text-white/70 text-base leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Enhanced Service Features */}
                    <div className="mb-8">
                      <h4 className="text-base font-semibold text-white/90 mb-4 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-cyan-400" />
                        Key Features
                      </h4>
                      <div className="space-y-3">
                        {service.features.slice(0, 3).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-3 text-sm text-white/70">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                        {service.features.length > 3 && (
                          <div className="text-sm text-cyan-400 font-medium mt-3">
                            +{service.features.length - 3} more features
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Enhanced Service Benefits */}
                    <div className="mb-8">
                      <h4 className="text-base font-semibold text-white/90 mb-4 flex items-center gap-2">
                        <ZapIcon className="w-4 h-4 text-yellow-400" />
                        Benefits
                      </h4>
                      <div className="space-y-3">
                        {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center gap-3 text-sm text-white/70">
                            <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Enhanced Service Footer */}
                    <div className="mt-auto">
                      <div className="flex items-center justify-between mb-6">
                        <div className="text-3xl font-bold text-cyan-400">
                          {service.pricing.starter}
                        </div>
                        <div className="text-sm text-white/50">
                          Starting from
                        </div>
                      </div>
                      
                      <button
                        onClick={() => handleServiceClick(service)}
                        className="w-full group/btn relative px-6 py-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 text-cyan-400 font-semibold rounded-2xl transition-all duration-300 hover:from-cyan-500/30 hover:to-purple-500/30 hover:border-cyan-400/50 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
                      >
                        <span className="flex items-center justify-center gap-3">
                          Learn More
                          <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                        </span>
                      </button>
                    </div>

                    {/* Enhanced Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    
                    {/* Enhanced Background Pattern */}
                    <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full blur-3xl" />
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-400 to-purple-500 rounded-full blur-2xl" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Enhanced Load More Button */}
            {getFilteredServices().length > 12 && (
              <motion.div 
                className="text-center mt-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <button className="group px-10 py-5 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-2xl text-xl transition-all duration-300 hover:from-cyan-600 hover:to-purple-600 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 transform hover:-translate-y-1">
                  <span className="flex items-center gap-3">
                    Load More Services
                    <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </span>
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* Enhanced Featured Services Showcase */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Revolutionary Services
                </span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                Experience our most advanced and innovative technology solutions
              </p>
            </motion.div>

            {/* Enhanced Featured Services Carousel */}
            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    className="w-full"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8 }}
                  >
                    <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 h-full transition-all duration-300 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/25 hover:scale-105 overflow-hidden">
                      {/* Featured Badge */}
                      <div className="absolute top-6 right-6">
                        <div className="text-sm bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full font-semibold shadow-lg">
                          Featured
                        </div>
                      </div>
                      
                      {/* Enhanced Service Icon */}
                      <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-cyan-500/25">
                        <Brain className="w-10 h-10 text-white" />
                      </div>
                      
                      {/* Enhanced Service Title */}
                      <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-cyan-400 transition-colors duration-300 leading-tight">
                        {service.name}
                      </h3>
                      
                      {/* Enhanced Service Description */}
                      <p className="text-white/70 text-base leading-relaxed mb-8">
                        {service.description}
                      </p>
                      
                      {/* Enhanced Service Details */}
                      <div className="space-y-4 mb-8">
                        <div className="flex items-center gap-3 text-sm text-white/70">
                          <div className="w-3 h-3 bg-cyan-400 rounded-full" />
                          <span>Market Size: <span className="text-cyan-400 font-medium">{service.marketSize}</span></span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-white/70">
                          <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                          <span className="text-yellow-400 font-medium">{service.competitiveAdvantage}</span>
                        </div>
                      </div>
                      
                      {/* Enhanced CTA Button */}
                      <button
                        onClick={() => handleServiceClick(service)}
                        className="w-full group/btn relative px-6 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-2xl transition-all duration-300 hover:from-cyan-600 hover:to-purple-600 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
                      >
                        <span className="flex items-center justify-center gap-3">
                          Explore Service
                          <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                        </span>
                      </button>
                      
                      {/* Enhanced Background Pattern */}
                      <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-pink-400 to-purple-500 rounded-full blur-2xl" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-white/70 leading-relaxed max-w-4xl mx-auto">
                  Join the future of technology with our revolutionary{' '}
                  <span className="text-cyan-400 font-medium">AI consciousness</span>,{' '}
                  <span className="text-purple-400 font-medium">quantum computing</span>, and{' '}
                  <span className="text-pink-400 font-medium">autonomous systems</span>. 
                  Contact us today to discover how we can help you achieve unprecedented success.
                </p>
              </div>
              
              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button
                  onClick={handleGetStarted}
                  className="group relative px-12 py-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-2xl text-xl transition-all duration-300 hover:from-cyan-600 hover:to-purple-600 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 transform hover:-translate-y-1"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Get Started Today
                    <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
                
                <a
                  href="tel:+1 302 464 0950"
                  className="group px-12 py-6 border-2 border-white/20 text-white font-bold rounded-2xl text-xl transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400 hover:bg-white/5 hover:scale-105 transform hover:-translate-y-1 backdrop-blur-sm"
                >
                  <span className="flex items-center gap-3">
                    <Clock className="w-6 h-6" />
                    Call Now
                  </span>
                </a>
              </div>
              
              {/* Enhanced Contact Information */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
                <div className="space-y-4 text-sm text-white/70">
                  <div className="flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <span>kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4 text-purple-400" />
                    <span>+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <MapPin className="w-4 h-4 text-pink-400" />
                    <span>364 E Main St STE 1008 Middletown DE 19709</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Homepage2045;