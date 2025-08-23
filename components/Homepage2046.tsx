import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Play, TrendingUp, Brain, Shield, Rocket, Globe, Cpu, Database, Atom, Target, Star, Sparkles as SparklesIcon,
  Brain as BrainIcon, Atom as AtomIcon, Shield as ShieldIcon, Rocket as RocketIcon, Zap, Eye, Heart, Infinity,
  ChevronRight, ChevronLeft, ExternalLink, Users, Award, Clock, CheckCircle, Zap as ZapIcon,
  DollarSign, BarChart3, Palette, Cloud, Network, ShoppingCart, Settings, Building, Monitor,
  Layers, Globe2, Lock, Code, Server, Phone
} from 'lucide-react';

// Import our new revolutionary 2046 services
import { revolutionary2046AdvancedMicroSaasServices } from '../data/revolutionary-2046-advanced-micro-saas-services';
import { revolutionary2046AdvancedITServices } from '../data/revolutionary-2046-advanced-it-services';
import { revolutionary2046AdvancedAIServices } from '../data/revolutionary-2046-advanced-ai-services';

// Import our new additional 2025 services
import { additionalRealMicroSaasServices2025 } from '../data/2025-additional-real-micro-saas-services';
import { additionalITInfrastructureServices2025 } from '../data/2025-additional-it-infrastructure-services';
import { additionalAIServices2025 } from '../data/2025-additional-ai-services';

// Import enhanced background and effects
import UltraFuturisticBackground2046 from './backgrounds/UltraFuturisticBackground2046';
import UltraAdvancedNeonEffects2046 from './effects/UltraAdvancedNeonEffects2046';
import UltraFuturisticNavigation2046 from './layout/UltraFuturisticNavigation2046';
import UltraFuturisticFooter2046 from './layout/UltraFuturisticFooter2046';

const Homepage2046: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [consciousnessLevel, setConsciousnessLevel] = useState(0.5);
  
  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate featured services
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % 6);
    }, 8000);
    
    // Track mouse movement for parallax effects
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    // Animate consciousness level
    const consciousnessInterval = setInterval(() => {
      setConsciousnessLevel(prev => Math.sin(Date.now() * 0.001) * 0.3 + 0.7);
    }, 100);
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearInterval(interval);
      clearInterval(consciousnessInterval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Combine all revolutionary 2046 services and additional 2025 services
  const allRevolutionaryServices = [
    ...revolutionary2046AdvancedMicroSaasServices,
    ...revolutionary2046AdvancedITServices,
    ...revolutionary2046AdvancedAIServices,
    ...additionalRealMicroSaasServices2025,
    ...additionalITInfrastructureServices2025,
    ...additionalAIServices2025
  ];

  // Get featured services for rotation
  const featuredServices = allRevolutionaryServices.slice(0, 6);

  // Filter services by category
  const getFilteredServices = () => {
    if (selectedCategory === 'all') return allRevolutionaryServices;
    return allRevolutionaryServices.filter(service => 
      service.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      (service as any).type?.toLowerCase().includes(selectedCategory.toLowerCase())
    );
  };

  const categories = [
    { id: 'all', name: 'All Services', icon: SparklesIcon, color: 'from-purple-500 to-pink-500', count: allRevolutionaryServices.length },
    { id: 'ai', name: 'AI & Consciousness', icon: BrainIcon, color: 'from-cyan-500 to-blue-500', count: revolutionary2046AdvancedAIServices.length },
    { id: 'quantum', name: 'Quantum Technology', icon: AtomIcon, color: 'from-blue-500 to-indigo-500', count: allRevolutionaryServices.filter(s => s.category.includes('Quantum')).length },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: ShieldIcon, color: 'from-red-500 to-orange-500', count: allRevolutionaryServices.filter(s => s.category.includes('Security')).length },
    { id: 'business', name: 'Business Solutions', icon: Target, color: 'from-emerald-500 to-teal-500', count: allRevolutionaryServices.filter(s => (s as any).type === 'Micro SAAS').length },
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
    { number: "6000+", label: "Revolutionary Services", icon: Star },
    { number: "99.99%", label: "Uptime Guarantee", icon: TrendingUp },
    { number: "24/7", label: "AI Consciousness Available", icon: Brain },
    { number: "300+", label: "Countries Served", icon: Globe }
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  return (
    <UltraFuturisticBackground2046 theme="quantum-consciousness" intensity="high">
      <div className="min-h-screen relative overflow-hidden">
        <UltraFuturisticNavigation2046 />
          {/* Hero Section */}
          <section className="relative pt-20 pb-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="text-center relative z-10"
              >
                <motion.div variants={itemVariants} className="mb-8">
                  <UltraAdvancedNeonEffects2046 variant="quantum-consciousness" intensity="high" consciousness={consciousnessLevel}>
                    <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
                      Zion Tech Group 2046
                    </h1>
                  </UltraAdvancedNeonEffects2046>
                  <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                    Revolutionary AI Consciousness, Quantum Technology, and Autonomous Intelligence Platforms
                  </p>
                </motion.div>

                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                  <UltraAdvancedNeonEffects2046 variant="quantum-consciousness" intensity="medium">
                    <button
                      onClick={handleGetStarted}
                      className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                    >
                      Get Started <ArrowRight className="w-5 h-5" />
                    </button>
                  </UltraAdvancedNeonEffects2046>
                  
                  <UltraAdvancedNeonEffects2046 variant="holographic" intensity="medium">
                    <button
                      onClick={handleWatchDemo}
                      className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                    >
                      <Play className="w-5 h-5" /> Watch Demo
                    </button>
                  </UltraAdvancedNeonEffects2046>
                </motion.div>

                {/* Stats Section */}
                <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                  {stats.map((stat, index) => (
                    <UltraAdvancedNeonEffects2046 key={index} variant="quantum" intensity="medium">
                      <div className="text-center">
                        <div className="flex justify-center mb-2">
                          <stat.icon className="w-8 h-8 text-cyan-400" />
                        </div>
                        <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.number}</div>
                        <div className="text-gray-400 text-sm">{stat.label}</div>
                      </div>
                    </UltraAdvancedNeonEffects2046>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Featured Services Section */}
          <section className="relative py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="text-center mb-16"
              >
                <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Revolutionary Services 2046
                </motion.h2>
                <motion.p variants={itemVariants} className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Experience the future with our cutting-edge AI consciousness, quantum technology, and autonomous intelligence platforms
                </motion.p>
              </motion.div>

              {/* Featured Services Grid */}
              <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {featuredServices.map((service, index) => (
                  <UltraAdvancedNeonEffects2046 key={service.id} variant="quantum-consciousness" intensity="medium">
                    <motion.div
                      className="bg-black/40 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 h-full hover:border-cyan-400/40 transition-all duration-300 cursor-pointer group"
                      onClick={() => handleServiceClick(service)}
                      whileHover={{ scale: 1.05, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="mb-6">
                        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4">
                          <Brain className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400 text-sm">Starting at</span>
                          <span className="text-cyan-400 font-semibold">
                            {(service as any).pricing?.starter || `$${(service as any).price?.monthly || 'Contact'}/mo`}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400 text-sm">Market Size</span>
                          <span className="text-purple-400 font-semibold">
                            {(service as any).marketSize || 'Contact for details'}
                          </span>
                        </div>
                      </div>
                      
                      <div className="mt-6 pt-6 border-t border-gray-700">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400 text-sm">Category</span>
                          <span className="text-emerald-400 font-semibold">{service.category}</span>
                        </div>
                      </div>
                    </motion.div>
                  </UltraAdvancedNeonEffects2046>
                ))}
              </motion.div>

              {/* View All Services Button */}
              <motion.div variants={itemVariants} className="text-center">
                <UltraAdvancedNeonEffects2046 variant="quantum-consciousness" intensity="high">
                  <button
                    onClick={() => window.location.href = '/services'}
                    className="px-12 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-full text-xl hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-3 mx-auto"
                  >
                    View All Revolutionary Services
                    <ArrowRight className="w-6 h-6" />
                  </button>
                </UltraAdvancedNeonEffects2046>
              </motion.div>
            </div>
          </section>

          {/* Features Section */}
          <section className="relative py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="text-center mb-16"
              >
                <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Revolutionary Features 2046
                </motion.h2>
                <motion.p variants={itemVariants} className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Discover the cutting-edge features that define the future of technology
                </motion.p>
              </motion.div>

              <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <UltraAdvancedNeonEffects2046 key={index} variant="quantum-holographic" intensity="medium">
                    <motion.div
                      className="bg-black/40 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8 h-full hover:border-purple-400/40 transition-all duration-300 group"
                      whileHover={{ scale: 1.05, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed mb-6">
                        {feature.description}
                      </p>
                      <a
                        href={feature.href}
                        className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors group-hover:gap-2"
                      >
                        Learn More <ArrowRight className="w-4 h-4 ml-1 transition-transform" />
                      </a>
                    </motion.div>
                  </UltraAdvancedNeonEffects2046>
                ))}
              </motion.div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="relative py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Experience the Future?
                </motion.h2>
                <motion.p variants={itemVariants} className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
                  Join thousands of forward-thinking organizations already leveraging our revolutionary 2046 technology platforms
                </motion.p>
                
                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <UltraAdvancedNeonEffects2046 variant="quantum-consciousness" intensity="high">
                    <button
                      onClick={handleGetStarted}
                      className="px-12 py-5 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full text-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
                    >
                      Start Your Journey <Rocket className="w-6 h-6" />
                    </button>
                  </UltraAdvancedNeonEffects2046>
                  
                  <UltraAdvancedNeonEffects2046 variant="holographic" intensity="medium">
                    <button
                      onClick={() => window.location.href = '/contact'}
                      className="px-12 py-5 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full text-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
                    >
                      <Phone className="w-6 h-6" /> Contact Us
                    </button>
                  </UltraAdvancedNeonEffects2046>
                </motion.div>
              </motion.div>
            </div>
          </section>
        </div>
        <UltraFuturisticFooter2046 />
      </UltraFuturisticBackground2046>
  );
};

export default Homepage2046;