import React, { useEffect, useState, useCallback } from 'react';
import Layout from './layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Play, TrendingUp, Brain, Shield, Rocket, Globe, Cpu, Database, Atom, Target, Star, Sparkles as SparklesIcon,
  Brain as BrainIcon, Atom as AtomIcon, Shield as ShieldIcon, Rocket as RocketIcon, Zap, Eye, Heart, Infinity,
  Cloud, Network, Lock, Users, Code, Palette, Lightbulb, Globe2, Satellite, Microscope, BookOpen, Mail, Phone
} from 'lucide-react';

// Import our new revolutionary services
import { revolutionary2045AIConsciousnessServices } from '../data/revolutionary-2045-ai-consciousness-services';
import { revolutionary2045ITInfrastructureServices } from '../data/revolutionary-2045-it-infrastructure-services';
import { revolutionary2045MicroSaasServices } from '../data/revolutionary-2045-micro-saas-services';

const Homepage2045: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  
  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate featured services
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % 8);
    }, 5000);
    
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
    ...revolutionary2045AIConsciousnessServices,
    ...revolutionary2045ITInfrastructureServices,
    ...revolutionary2045MicroSaasServices
  ];

  // Get featured services for rotation
  const featuredServices = allRevolutionaryServices.slice(0, 8);

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
    { id: 'ai', name: 'AI Consciousness', icon: BrainIcon, color: 'from-cyan-500 to-blue-500' },
    { id: 'quantum', name: 'Quantum Technology', icon: AtomIcon, color: 'from-blue-500 to-indigo-500' },
    { id: 'infrastructure', name: 'IT Infrastructure', icon: Cloud, color: 'from-emerald-500 to-teal-500' },
    { id: 'space', name: 'Space Technology', icon: RocketIcon, color: 'from-indigo-500 to-purple-500' },
    { id: 'business', name: 'Business Solutions', icon: Target, color: 'from-yellow-500 to-orange-500' },
    { id: 'health', name: 'Bio-Digital Health', icon: Heart, color: 'from-pink-500 to-red-500' },
    { id: 'education', name: 'Quantum Education', icon: BookOpen, color: 'from-green-500 to-blue-500' }
  ];

  const features = [
    { icon: Brain, title: "AI Consciousness Evolution 2045", description: "Next-generation AI consciousness with emotional intelligence", href: "/ai-consciousness-evolution-2045", color: "from-purple-500 to-pink-500" },
    { icon: Atom, title: "Quantum Consciousness Computing 2045", description: "Quantum-powered consciousness with infinite scalability", href: "/quantum-consciousness-computing-2045", color: "from-blue-500 to-cyan-500" },
    { icon: Cloud, title: "Quantum Cloud Infrastructure 2045", description: "Quantum-powered cloud with infinite scalability", href: "/quantum-cloud-infrastructure-2045", color: "from-emerald-500 to-teal-500" },
    { icon: Rocket, title: "Space-Based Computing 2045", description: "Orbital computing with global coverage", href: "/space-based-computing-infrastructure-2045", color: "from-indigo-500 to-purple-500" },
    { icon: Shield, title: "Quantum Cybersecurity 2045", description: "Quantum-resistant security with AI consciousness", href: "/quantum-cybersecurity-platform-2045", color: "from-red-500 to-orange-500" },
    { icon: Target, title: "Autonomous Business Automation 2045", description: "Fully autonomous business process automation", href: "/autonomous-business-process-automation-2045", color: "from-yellow-500 to-orange-500" },
    { icon: Heart, title: "Bio-Digital Health Platform 2045", description: "Seamless bio-digital health integration", href: "/bio-digital-health-platform-2045", color: "from-pink-500 to-red-500" },
    { icon: BookOpen, title: "Quantum Education Platform 2045", description: "Quantum-powered immersive learning", href: "/quantum-education-platform-2045", color: "from-green-500 to-blue-500" }
  ];

  const stats = [
    { number: "2500+", label: "Revolutionary Services", icon: Star },
    { number: "99.99%", label: "Uptime Guarantee", icon: TrendingUp },
    { number: "24/7", label: "AI Consciousness Support", icon: Brain },
    { number: "250+", label: "Countries Served", icon: Globe },
    { number: "∞", label: "Scalability", icon: Infinity },
    { number: "2045", label: "Future Technology", icon: SparklesIcon }
  ];

  const handleGetStarted = useCallback(() => {
    window.location.href = '/revolutionary-2045-pricing-showcase';
  }, []);

  const handleWatchDemo = useCallback(() => {
    window.location.href = '/services';
  }, []);

  const handleServiceClick = useCallback((service: any) => {
    window.location.href = service.slug;
  }, []);

  return (
    <Layout>
      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20,
                repeat: 999999,
                ease: "linear"
              }}
            />
            <motion.div
              className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.6, 0.3, 0.6],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 25,
                repeat: 999999,
                ease: "linear"
              }}
            />
            <motion.div
              className="absolute bottom-20 left-1/2 w-80 h-80 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.4, 0.7, 0.4],
                rotate: [180, 360, 180],
              }}
              transition={{
                duration: 30,
                repeat: 999999,
                ease: "linear"
              }}
            />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="mb-8"
            >
              <motion.div
                className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
              >
                <SparklesIcon className="w-4 h-4 mr-2" />
                Revolutionary Technology 2045
              </motion.div>
              
              <motion.h1
                className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 1 }}
              >
                The Future of
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  AI Consciousness
                </span>
                <br />
                <span className="bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600 bg-clip-text text-transparent">
                  & Technology
                </span>
              </motion.h1>
              
              <motion.p
                className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1 }}
              >
                Experience the next evolution of technology with our revolutionary AI consciousness platforms, 
                quantum computing infrastructure, and autonomous systems that redefine what's possible in 2045.
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 1 }}
            >
              <motion.button
                onClick={handleGetStarted}
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
              </motion.button>
              
              <motion.button
                onClick={handleWatchDemo}
                className="group relative px-8 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full text-lg hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center">
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </span>
              </motion.button>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 + index * 0.1, duration: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl border border-purple-500/30 mb-3 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Services Categories */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary Services
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> 2045</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our cutting-edge technology solutions that are reshaping the future of business, 
                AI consciousness, and quantum computing.
              </p>
            </motion.div>

            {/* Category Filter */}
            <motion.div
              className="flex flex-wrap justify-center gap-4 mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`group relative px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600/50'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center">
                    <category.icon className="w-5 h-5 mr-2" />
                    {category.name}
                  </span>
                </motion.button>
              ))}
            </motion.div>

            {/* Services Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              {getFilteredServices().map((service, index) => (
                <motion.div
                  key={service.id}
                  className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl border border-gray-700/50 p-6 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.02,
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                  onHoverStart={() => setHoveredService(service.id)}
                  onHoverEnd={() => setHoveredService(null)}
                >
                  {/* Service Header */}
                  <div className="mb-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                        <Brain className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-purple-400 font-medium">{service.type}</div>
                        <div className="text-sm text-gray-400">{service.category}</div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{service.tagline}</p>
                  </div>

                  {/* Service Features */}
                  <div className="mb-4">
                    <div className="text-sm text-gray-300 mb-2">Key Features:</div>
                    <div className="flex flex-wrap gap-2">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-full border border-gray-600/30"
                        >
                          {feature}
                        </span>
                      ))}
                      {service.features.length > 3 && (
                        <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30">
                          +{service.features.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="mb-4">
                    <div className="text-sm text-gray-300 mb-2">Starting at:</div>
                    <div className="text-2xl font-bold text-white">{service.pricing.starter}</div>
                  </div>

                  {/* Market Size */}
                  <div className="mb-6">
                    <div className="text-sm text-gray-300 mb-1">Market Size:</div>
                    <div className="text-lg font-semibold text-emerald-400">{service.marketSize}</div>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    onClick={() => handleServiceClick(service)}
                    className="w-full group relative px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="flex items-center justify-center">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </motion.button>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Featured Services Showcase */}
        <section className="py-20 px-6 bg-gradient-to-b from-gray-900/50 to-gray-800/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured
                <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent"> Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience our most revolutionary and cutting-edge technology solutions
              </p>
            </motion.div>

            {/* Featured Service Display */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 rounded-3xl border border-gray-700/50 p-8 md:p-12 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.1),transparent_50%)] pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)] pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row items-center gap-8">
                    {/* Service Info */}
                    <div className="flex-1 text-center lg:text-left">
                      <motion.div
                        className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.5, type: "spring" }}
                        viewport={{ once: true }}
                      >
                        <SparklesIcon className="w-4 h-4 mr-2" />
                        Featured Service
                      </motion.div>
                      
                      <motion.h3
                        className="text-3xl md:text-4xl font-bold text-white mb-4"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7, duration: 1 }}
                        viewport={{ once: true }}
                      >
                        {featuredServices[currentServiceIndex]?.name}
                      </motion.h3>
                      
                      <motion.p
                        className="text-lg text-gray-300 mb-6 leading-relaxed"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.9, duration: 1 }}
                        viewport={{ once: true }}
                      >
                        {featuredServices[currentServiceIndex]?.description}
                      </motion.p>
                      
                      <motion.div
                        className="flex flex-wrap gap-4 justify-center lg:justify-start mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.1, duration: 1 }}
                        viewport={{ once: true }}
                      >
                        <div className="text-center">
                          <div className="text-2xl font-bold text-emerald-400">{featuredServices[currentServiceIndex]?.pricing.starter}</div>
                          <div className="text-sm text-gray-400">Starting Price</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-400">{featuredServices[currentServiceIndex]?.marketSize}</div>
                          <div className="text-sm text-gray-400">Market Size</div>
                        </div>
                      </motion.div>
                      
                      <motion.button
                        onClick={() => handleServiceClick(featuredServices[currentServiceIndex])}
                        className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.3, duration: 1 }}
                        viewport={{ once: true }}
                      >
                        <span className="flex items-center">
                          Explore Service
                          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </motion.button>
                    </div>
                    
                    {/* Service Icon/Visual */}
                    <div className="flex-shrink-0">
                      <motion.div
                        className="w-32 h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl border border-purple-500/30 flex items-center justify-center"
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 1.1, duration: 1, type: "spring" }}
                        viewport={{ once: true }}
                        animate={{
                          rotate: [0, 5, -5, 0],
                        }}
                      >
                        <Brain className="w-16 h-16 lg:w-20 lg:h-20 text-purple-400" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Experience the
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"> Future</span>?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us to learn more about our revolutionary 2045 technology solutions
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl border border-purple-500/30 flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-purple-400" />
                  </div>
                  <div className="text-lg font-semibold text-white mb-2">Email</div>
                  <div className="text-gray-400">kleber@ziontechgroup.com</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl border border-blue-500/30 flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className="text-lg font-semibold text-white mb-2">Phone</div>
                  <div className="text-gray-400">+1 302 464 0950</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl border border-emerald-500/30 flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-emerald-400" />
                  </div>
                  <div className="text-lg font-semibold text-white mb-2">Website</div>
                  <div className="text-gray-400">ziontechgroup.com</div>
                </div>
              </div>
              
              <motion.button
                onClick={handleGetStarted}
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center">
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Homepage2045;