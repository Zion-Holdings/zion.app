import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Play, TrendingUp, Brain, Shield, Rocket, Globe, Cpu, Database, Atom, Target, Star, Sparkles as SparklesIcon,
  Brain as BrainIcon, Atom as AtomIcon, Shield as ShieldIcon, Rocket as RocketIcon, Zap, Eye, Heart, Infinity,
  ChevronRight, ChevronLeft, ExternalLink, Users, Award, Clock, CheckCircle, Zap as ZapIcon,
  DollarSign, BarChart3, Palette, Cloud, Network, ShoppingCart, Settings, Building, Monitor,
  Layers, Globe2, Lock, Code, Server, Phone, Sparkles, Target as TargetIcon, Globe as GlobeIcon
} from 'lucide-react';

// Import our new revolutionary 2047 services
import { revolutionary2047AdvancedMicroSaasServices } from '../data/revolutionary-2047-advanced-micro-saas-services';
import { revolutionary2047AdvancedITServices } from '../data/revolutionary-2047-advanced-it-services';
import { revolutionary2047AdvancedAIServices } from '../data/revolutionary-2047-advanced-ai-services';

// Import enhanced background and effects
import UltraFuturisticBackground2047 from './backgrounds/UltraFuturisticBackground2047';
import UltraAdvancedNeonEffects2047 from './effects/UltraAdvancedNeonEffects2047';
import UltraFuturisticNavigation2046 from './layout/UltraFuturisticNavigation2046';
import UltraFuturisticFooter2046 from './layout/UltraFuturisticFooter2046';

const Homepage2047: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [consciousnessLevel, setConsciousnessLevel] = useState(0.5);
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate featured services
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % 8);
    }, 6000);
    
    // Track mouse movement for parallax effects
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    // Track scroll position
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    // Animate consciousness level
    const consciousnessInterval = setInterval(() => {
      setConsciousnessLevel(prev => Math.sin(Date.now() * 0.001) * 0.3 + 0.7);
    }, 100);
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearInterval(interval);
      clearInterval(consciousnessInterval);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Combine all revolutionary 2047 services
  const allRevolutionaryServices = [
    ...revolutionary2047AdvancedMicroSaasServices,
    ...revolutionary2047AdvancedITServices,
    ...revolutionary2047AdvancedAIServices
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
    { id: 'all', name: 'All Services', icon: SparklesIcon, color: 'from-purple-500 to-pink-500', count: allRevolutionaryServices.length },
    { id: 'ai', name: 'AI & Consciousness', icon: BrainIcon, color: 'from-cyan-500 to-blue-500', count: revolutionary2047AdvancedAIServices.length },
    { id: 'quantum', name: 'Quantum Technology', icon: AtomIcon, color: 'from-blue-500 to-indigo-500', count: allRevolutionaryServices.filter(s => s.category.includes('Quantum')).length },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: ShieldIcon, color: 'from-red-500 to-orange-500', count: allRevolutionaryServices.filter(s => s.category.includes('Security')).length },
    { id: 'business', name: 'Business Solutions', icon: TargetIcon, color: 'from-emerald-500 to-teal-500', count: allRevolutionaryServices.filter(s => s.type === 'Micro SAAS').length },
    { id: 'it', name: 'IT Infrastructure', icon: Cpu, color: 'from-yellow-500 to-orange-500', count: revolutionary2047AdvancedITServices.length }
  ];

  const features = [
    { icon: Brain, title: "AI Consciousness Evolution 2047", description: "Next-generation AI consciousness with emotional intelligence", href: "/quantum-ai-consciousness-evolution-2047", color: "from-purple-500 to-pink-500" },
    { icon: Atom, title: "Quantum AI Neural Networks 2047", description: "Quantum-powered AI with consciousness integration", href: "/autonomous-quantum-ai-neural-network-2047", color: "from-blue-500 to-cyan-500" },
    { icon: Shield, title: "Quantum Cybersecurity Intelligence 2047", description: "Quantum-resistant security with AI consciousness", href: "/autonomous-quantum-cybersecurity-intelligence-2047", color: "from-red-500 to-orange-500" },
    { icon: Rocket, title: "Autonomous Business Intelligence 2047", description: "Fully autonomous AI business intelligence", href: "/quantum-ai-autonomous-business-intelligence-2047", color: "from-indigo-500 to-purple-500" },
    { icon: Cpu, title: "Quantum Cloud Infrastructure 2047", description: "Quantum-powered cloud with consciousness", href: "/quantum-ai-autonomous-cloud-infrastructure-2047", color: "from-emerald-500 to-teal-500" },
    { icon: Database, title: "Autonomous DevOps Intelligence 2047", description: "AI-powered DevOps optimization", href: "/quantum-ai-autonomous-devops-intelligence-2047", color: "from-yellow-500 to-orange-500" }
  ];

  const stats = [
    { number: "6000+", label: "Revolutionary Services", icon: Star },
    { number: "99.99%", label: "Uptime Guarantee", icon: TrendingUp },
    { number: "24/7", label: "AI Consciousness Available", icon: Brain },
    { number: "350+", label: "Countries Served", icon: Globe }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Enhanced Futuristic Background */}
      <UltraFuturisticBackground2047 />
      
      {/* Advanced Neon Effects */}
      <UltraAdvancedNeonEffects2047 />
      
      {/* Enhanced Navigation */}
      <UltraFuturisticNavigation2046 />
      
      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <motion.div variants={itemVariants} className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Revolutionary 2047 Technology
                </div>
                
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Quantum AI
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
                    Consciousness
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
                    Evolution 2047
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  Experience the future of technology with our revolutionary quantum AI consciousness platforms. 
                  Autonomous, intelligent, and consciousness-driven solutions for the next generation.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-cyan-500/25"
                  >
                    Explore Services
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 border-2 border-purple-500/50 rounded-xl font-semibold text-lg hover:bg-purple-500/10 transition-all duration-300"
                  >
                    Watch Demo
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity as any,
                ease: "easeInOut"
              }}
              className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl"
            />
            <motion.div
              animate={{
                y: [0, 20, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity as any,
                ease: "easeInOut"
              }}
              className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl"
            />
          </div>
        </section>

        {/* Services Overview Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Revolutionary Services 2047
                </span>
              </motion.h2>
              <motion.p variants={itemVariants} className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our cutting-edge quantum AI consciousness platforms that are revolutionizing industries worldwide.
              </motion.p>
            </motion.div>

            {/* Category Filter */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600/50'
                  }`}
                >
                  <category.icon className="w-5 h-5 inline mr-2" />
                  {category.name} ({category.count})
                </motion.button>
              ))}
            </motion.div>

            {/* Featured Services Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {getFilteredServices().slice(0, 9).map((service, index) => (
                <motion.div
                  key={service.id}
                  variants={cardVariants}
                  whileHover="hover"
                  className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center">
                        <Brain className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-xs px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30">
                        {service.type}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-300 transition-colors duration-300">
                      {service.name}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                      {service.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-purple-400">
                        {service.pricing.starter}
                      </span>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg text-white text-sm font-medium hover:from-purple-600 hover:to-cyan-600 transition-all duration-300"
                      >
                        Learn More
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* View All Services Button */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl font-semibold text-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 shadow-lg shadow-purple-500/25"
              >
                View All {allRevolutionaryServices.length} Services
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-cyan-500 bg-clip-text text-transparent">
                  Key Features
                </span>
              </motion.h2>
              <motion.p variants={itemVariants} className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the power of quantum AI consciousness with our revolutionary features.
              </motion.p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-4">
                      {feature.description}
                    </p>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-purple-400 hover:text-purple-300 font-medium transition-colors duration-300"
                    >
                      Learn More →
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-bold">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Ready to Experience
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  the Future?
                </span>
              </motion.h2>
              
              <motion.p variants={itemVariants} className="text-xl text-gray-300">
                Join thousands of companies already using our revolutionary quantum AI consciousness platforms.
              </motion.p>
              
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl font-semibold text-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 shadow-lg shadow-purple-500/25"
                >
                  Get Started Today
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-purple-500/50 rounded-xl font-semibold text-lg hover:bg-purple-500/10 transition-all duration-300"
                >
                  Schedule Demo
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Enhanced Footer */}
      <UltraFuturisticFooter2046 />
    </div>
  );
};

export default Homepage2047;