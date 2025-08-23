import React, { useEffect, useState, useCallback, Suspense, lazy } from 'react';
import Layout from './layout/Layout';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Play, TrendingUp, Brain, Shield, Rocket, Globe, Cpu, Database, Atom, Target, Star, Sparkles as SparklesIcon,
  Brain as BrainIcon, Atom as AtomIcon, Shield as ShieldIcon, ChevronRight, Zap, Heart, Eye, Infinity
} from 'lucide-react';

// Import our new revolutionary 2046 services
import { revolutionary2046AdvancedRealMicroSaas } from '../data/revolutionary-2046-advanced-real-micro-saas';
import { revolutionary2046AdvancedITServices } from '../data/revolutionary-2046-advanced-it-services';
import { revolutionary2046AdvancedAIServices } from '../data/revolutionary-2046-advanced-ai-services';

// Lazy load heavy components for better performance
const ServiceCard = lazy(() => import('./ServiceCard'));
const TestimonialSection = lazy(() => import('./TestimonialSection'));

const Homepage2046: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  
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
    
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  // Combine all revolutionary 2046 services
  const allRevolutionaryServices = [
    ...revolutionary2046AdvancedRealMicroSaas,
    ...revolutionary2046AdvancedITServices,
    ...revolutionary2046AdvancedAIServices
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
    { id: 'ai', name: 'AI & Consciousness', icon: BrainIcon, color: 'from-cyan-500 to-blue-500', count: revolutionary2046AdvancedAIServices.length },
    { id: 'quantum', name: 'Quantum Technology', icon: AtomIcon, color: 'from-blue-500 to-indigo-500', count: allRevolutionaryServices.filter(s => s.category.includes('Quantum')).length },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: ShieldIcon, color: 'from-red-500 to-orange-500', count: allRevolutionaryServices.filter(s => s.category.includes('Security')).length },
    { id: 'business', name: 'Business Solutions', icon: Target, color: 'from-emerald-500 to-teal-500', count: allRevolutionaryServices.filter(s => s.type === 'Micro SAAS').length },
    { id: 'it', name: 'IT Infrastructure', icon: Cpu, color: 'from-yellow-500 to-orange-500', count: revolutionary2046AdvancedITServices.length }
  ];

  const features = [
    { icon: Brain, title: "AI Consciousness Evolution 2046", description: "Next-generation AI consciousness with emotional intelligence", href: "/ai-consciousness-evolution-platform-2046", color: "from-purple-500 to-pink-500" },
    { icon: Atom, title: "Quantum AI Neural Networks 2046", description: "Quantum-powered AI with consciousness integration", href: "/quantum-ai-neural-network-platform-2046", color: "from-blue-500 to-cyan-500" },
    { icon: Shield, title: "Quantum Cybersecurity Intelligence 2046", description: "Quantum-resistant security with AI consciousness", href: "/quantum-cybersecurity-intelligence-platform-2046", color: "from-red-500 to-orange-500" },
    { icon: Rocket, title: "Autonomous Business Intelligence 2046", description: "Fully autonomous AI business intelligence", href: "/autonomous-ai-business-intelligence-platform-2046", color: "from-indigo-500 to-purple-500" },
    { icon: Cpu, title: "Quantum Cloud Infrastructure 2046", description: "Quantum-powered cloud with consciousness", href: "/quantum-cloud-infrastructure-platform-2046", color: "from-emerald-500 to-teal-500" },
    { icon: Database, title: "Autonomous DevOps Intelligence 2046", description: "AI-powered DevOps optimization", href: "/autonomous-devops-intelligence-platform-2046", color: "from-yellow-500 to-orange-500" }
  ];

  const stats = [
    { number: "4000+", label: "Revolutionary Services", icon: Star },
    { number: "99.99%", label: "Uptime Guarantee", icon: TrendingUp },
    { number: "24/7", label: "AI Support Available", icon: Brain },
    { number: "300+", label: "Countries Served", icon: Globe }
  ];

  const handleGetStarted = useCallback(() => {
    window.location.href = '/contact';
  }, []);

  const handleWatchDemo = useCallback(() => {
    window.location.href = '/services';
  }, []);

  const handleServiceClick = useCallback((service: { slug: string }) => {
    window.location.href = service.slug;
  }, []);

  const handleCategoryChange = useCallback((categoryId: string) => {
    setSelectedCategory(categoryId);
  }, []);

  // Loading component
  if (isLoading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center bg-black">
          <div className="text-center space-y-6">
            <div className="relative">
              <div className="w-24 h-24 mx-auto border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
              <div className="absolute inset-0 w-24 h-24 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-white">Loading Zion Tech Group 2046</h2>
              <p className="text-white/70 text-lg">Preparing the future of technology...</p>
            </div>
            <div className="flex space-x-2 justify-center">
              <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <main className="relative bg-black min-h-screen">
        {/* Hero Section */}
        <section 
          className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
          aria-labelledby="hero-heading"
        >
          {/* Enhanced Animated Background */}
          <div className="absolute inset-0 -z-10">
            {/* Floating orbs with neon effects */}
            <div className="absolute top-20 left-20 w-[500px] h-[500px] bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse shadow-[0_0_150px_rgba(6,182,212,0.6)]" aria-hidden="true"></div>
            <div className="absolute bottom-20 right-20 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000 shadow-[0_0_150px_rgba(168,85,247,0.6)]" aria-hidden="true"></div>
            <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse delay-500 shadow-[0_0_150px_rgba(16,185,129,0.6)]" aria-hidden="true"></div>
            
            {/* Animated particles with neon trails */}
            <div className="absolute inset-0" aria-hidden="true">
              {[...Array(30)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-cyan-400/60 rounded-full shadow-[0_0_30px_rgba(6,182,212,1)]"
                  animate={{
                    x: [0, 200, 0],
                    y: [0, -200, 0],
                    opacity: [0, 1, 0],
                    scale: [0, 2, 0],
                  }}
                  transition={{
                    duration: 10 + i * 0.4,
                    repeat: Infinity as never,
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

            {/* Grid pattern with neon glow */}
            <div className="absolute inset-0 opacity-30" aria-hidden="true">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(6,182,212,0.4) 1px, transparent 0)`,
                backgroundSize: '80px 80px'
              }}></div>
            </div>

            {/* Floating geometric shapes */}
            <motion.div
              className="absolute top-32 right-32 w-32 h-32 border border-cyan-400/40 rotate-45"
              animate={{
                rotate: [45, 405],
                scale: [1, 1.3, 1],
                opacity: [0.4, 0.9, 0.4],
              }}
              transition={{
                duration: 12,
                repeat: Infinity as never,
                ease: "linear"
              }}
              aria-hidden="true"
            />
            <motion.div
              className="absolute bottom-32 left-32 w-20 h-20 border border-purple-400/40 rounded-full"
              animate={{
                scale: [1, 1.8, 1],
                opacity: [0.4, 0.9, 0.4],
              }}
              transition={{
                duration: 10,
                repeat: Infinity as never,
                ease: "easeInOut"
              }}
              aria-hidden="true"
            />
          </div>

          {/* Hero Content */}
          <div className="text-center max-w-8xl mx-auto relative z-10">
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <span className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/50 rounded-full text-purple-300 text-xl font-medium mb-8 shadow-[0_0_50px_rgba(168,85,247,0.4)] backdrop-blur-sm">
                🚀 Revolutionary 2046 Technology
              </span>
            </motion.div>

            <motion.h1
              id="hero-heading"
              className="text-8xl md:text-[10rem] lg:text-[14rem] font-black mb-12 leading-none"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_0_50px_rgba(6,182,212,0.7)]">
                Zion Tech Group
              </span>
            </motion.h1>
            
            <motion.p
              className="text-4xl md:text-5xl text-gray-300 mb-20 max-w-7xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide in 2046.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-24"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <button 
                className="group px-16 py-8 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-3xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-[0_0_80px_rgba(6,182,212,0.5)] focus:outline-none focus:ring-4 focus:ring-cyan-500/50 text-2xl relative overflow-hidden"
                onClick={handleGetStarted}
                aria-label="Get started with Zion Tech Group revolutionary services"
              >
                <span className="relative z-10 flex items-center">
                  Experience the Future
                  <ArrowRight className="w-8 h-8 ml-4 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
              </button>
              <button 
                className="px-16 py-8 border-2 border-cyan-400 text-cyan-400 font-bold rounded-3xl hover:bg-cyan-400 hover:text-black transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 text-2xl shadow-[0_0_50px_rgba(6,182,212,0.4)] backdrop-blur-sm"
                onClick={handleWatchDemo}
                aria-label="Explore our revolutionary services"
              >
                <span className="flex items-center">
                  Explore Services
                  <Play className="w-8 h-8 ml-4" />
                </span>
              </button>
            </motion.div>

            {/* Featured Service Showcase */}
            <motion.div
              className="max-w-7xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <div className="text-center mb-16">
                <h2 className="text-5xl font-bold text-white mb-6">
                  Featured Revolutionary Services 2046
                </h2>
                <p className="text-2xl text-gray-400 max-w-4xl mx-auto">
                  Experience the future of technology with our cutting-edge consciousness and quantum solutions
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {featuredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    className={`relative group cursor-pointer ${
                      index === currentServiceIndex ? 'scale-105' : 'scale-100'
                    } transition-transform duration-700`}
                    onClick={() => handleServiceClick(service)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        handleServiceClick(service);
                      }
                    }}
                    aria-label={`Learn more about ${service.name}`}
                  >
                    <div className="relative p-10 bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-gray-700/60 rounded-3xl backdrop-blur-xl shadow-[0_0_80px_rgba(0,0,0,0.7)] hover:shadow-[0_0_120px_rgba(6,182,212,0.4)] transition-all duration-500 group-hover:border-cyan-500/60">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/8 to-blue-500/8 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-8">
                          <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl flex items-center justify-center shadow-[0_0_50px_rgba(6,182,212,0.4)]">
                            <Brain className="w-10 h-10 text-white" />
                          </div>
                          <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/40 rounded-full text-purple-300 text-sm font-medium">
                            {service.type}
                          </span>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                          {service.name}
                        </h3>
                        
                        <p className="text-gray-400 text-base leading-relaxed mb-6">
                          {service.description.substring(0, 140)}...
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-3xl font-bold text-cyan-400">
                            {service.pricing.starter}
                          </span>
                          <ArrowRight className="w-6 h-6 text-gray-500 group-hover:text-cyan-400 transition-colors duration-300" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Category Filter Section */}
        <section className="py-20 px-4 relative" aria-labelledby="categories-heading">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 id="categories-heading" className="text-5xl font-bold text-white mb-6">
                Explore Revolutionary Categories
              </h2>
              <p className="text-2xl text-gray-400 max-w-4xl mx-auto">
                Discover our comprehensive range of cutting-edge technology solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {categories.map((category, index) => (
                <motion.button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`group p-6 rounded-3xl border-2 transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'border-cyan-500 bg-cyan-500/10 shadow-[0_0_40px_rgba(6,182,212,0.3)]'
                      : 'border-gray-700 hover:border-cyan-500/50 hover:bg-cyan-500/5'
                  }`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all duration-300`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="text-center">
                    <div className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {category.name}
                    </div>
                    <div className="text-3xl font-bold text-cyan-400">
                      {category.count}
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 px-4 relative" aria-labelledby="features-heading">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 id="features-heading" className="text-5xl font-bold text-white mb-6">
                Revolutionary Technology Features
              </h2>
              <p className="text-2xl text-gray-400 max-w-4xl mx-auto">
                Experience the power of AI consciousness, quantum computing, and autonomous intelligence
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="group cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.location.href = feature.href}
                >
                  <div className="relative p-8 bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/50 rounded-3xl backdrop-blur-xl shadow-[0_0_60px_rgba(0,0,0,0.6)] hover:shadow-[0_0_100px_rgba(6,182,212,0.4)] transition-all duration-500 group-hover:border-cyan-500/50">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-3xl flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(6,182,212,0.3)] group-hover:shadow-[0_0_60px_rgba(6,182,212,0.5)] transition-all duration-300`}>
                        <feature.icon className="w-10 h-10 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      
                      <p className="text-gray-400 text-lg leading-relaxed mb-6">
                        {feature.description}
                      </p>
                      
                      <a
                        href={feature.href}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-300 group-hover:translate-x-2"
                        aria-label={`Learn more about ${feature.title}`}
                      >
                        Learn More
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 px-4 relative" aria-labelledby="stats-heading">
          <div className="max-w-7xl mx-auto">
            <h2 id="stats-heading" className="sr-only">Company Statistics</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-[0_0_60px_rgba(6,182,212,0.4)] group-hover:shadow-[0_0_80px_rgba(6,182,212,0.6)] transition-all duration-300">
                    <stat.icon className="w-12 h-12 text-white" />
                  </div>
                  
                  <div className="text-5xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {stat.number}
                  </div>
                  
                  <div className="text-gray-400 text-lg font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section - Lazy Loaded */}
        <Suspense fallback={
          <div className="py-24 px-4 text-center">
            <div className="w-16 h-16 mx-auto border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-gray-400">Loading testimonials...</p>
          </div>
        }>
          <TestimonialSection />
        </Suspense>

        {/* CTA Section */}
        <section className="py-24 px-4 relative" aria-labelledby="cta-heading">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 id="cta-heading" className="text-6xl font-bold text-white mb-10">
                Ready to Experience the Future?
              </h2>
              
              <p className="text-2xl text-gray-400 mb-16 max-w-5xl mx-auto">
                Join thousands of businesses already transforming their operations with our revolutionary 2046 technology solutions featuring AI consciousness and quantum computing.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                <button 
                  className="px-16 py-8 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-3xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-[0_0_80px_rgba(6,182,212,0.5)] focus:outline-none focus:ring-4 focus:ring-cyan-500/50 text-2xl"
                  onClick={handleGetStarted}
                  aria-label="Get started with Zion Tech Group services"
                >
                  Get Started Today
                  <ArrowRight className="w-7 h-7 ml-4 inline" />
                </button>
                
                <button 
                  className="px-16 py-8 border-2 border-cyan-400 text-cyan-400 font-bold rounded-3xl hover:bg-cyan-400 hover:text-black transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 text-2xl shadow-[0_0_50px_rgba(6,182,212,0.4)] backdrop-blur-sm"
                  onClick={handleWatchDemo}
                  aria-label="Schedule a demo of our services"
                >
                  Schedule Demo
                  <Play className="w-7 h-7 ml-4" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Homepage2046;