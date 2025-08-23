import React, { useEffect, useState, useCallback } from 'react';
import Layout from './layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Play, TrendingUp, Brain, Shield, Rocket, Globe, Database, Atom, Target, Star, Sparkles as SparklesIcon,
  Brain as BrainIcon, Atom as AtomIcon, Shield as ShieldIcon, Rocket as RocketIcon, Zap, Eye, Heart, Infinity,
  ChevronRight, ChevronLeft, ExternalLink, Users, Award, Clock, CheckCircle, Zap as ZapIcon,
  Lock, Cloud, Network, Truck, FileText, GraduationCap, DollarSign, Satellite, Cpu, Sparkles,
  ArrowUpRight, ShieldCheck, Zap as ZapIcon2, Globe2, Cpu as CpuIcon, Database as DatabaseIcon
} from 'lucide-react';

// Import our new revolutionary services
import { revolutionary2045AdvancedRealMicroSaas } from '../data/revolutionary-2045-advanced-real-micro-saas';
import { revolutionary2045AdvancedITServices } from '../data/revolutionary-2045-advanced-it-services';
import { revolutionary2045AdvancedAIServices } from '../data/revolutionary-2045-advanced-ai-services';

// Import our new innovative 2025 services
import { innovativeAIAutonomousEcosystemServices2025 } from '../data/2025-innovative-ai-autonomous-ecosystem';
import { cuttingEdgeITInfrastructureInnovations2025 } from '../data/2025-cutting-edge-it-infrastructure-innovations';
import { innovativeMicroSaasBreakthroughs2025 } from '../data/2025-innovative-micro-saas-breakthroughs';

const Homepage2047: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate featured services
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % 8);
    }, 8000);
    
    // Track mouse movement for parallax effects
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Track scroll position
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

  // Combine all revolutionary services
  const allRevolutionaryServices = [
    ...revolutionary2045AdvancedRealMicroSaas,
    ...revolutionary2045AdvancedITServices,
    ...revolutionary2045AdvancedAIServices,
    ...innovativeAIAutonomousEcosystemServices2025,
    ...cuttingEdgeITInfrastructureInnovations2025,
    ...innovativeMicroSaasBreakthroughs2025
  ];

  // Get featured services for rotation
  const featuredServices = allRevolutionaryServices.slice(0, 8);

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
    { id: 'ai', name: 'AI & Consciousness', icon: BrainIcon, color: 'from-cyan-500 to-blue-500', count: allRevolutionaryServices.filter(s => s.category.includes('AI') || s.category.includes('Consciousness')).length },
    { id: 'quantum', name: 'Quantum Technology', icon: AtomIcon, color: 'from-blue-500 to-indigo-500', count: allRevolutionaryServices.filter(s => s.category.includes('Quantum')).length },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: ShieldIcon, color: 'from-red-500 to-orange-500', count: allRevolutionaryServices.filter(s => s.category.includes('Security')).length },
    { id: 'business', name: 'Business Solutions', icon: Target, color: 'from-emerald-500 to-teal-500', count: allRevolutionaryServices.filter(s => (s as any).type === 'Micro SAAS' || s.category.includes('Business')).length },
    { id: 'it', name: 'IT Infrastructure', icon: Cpu, color: 'from-yellow-500 to-orange-500', count: allRevolutionaryServices.filter(s => s.category.includes('IT') || s.category.includes('Infrastructure')).length }
  ];

  const features = [
    { icon: Brain, title: "AI Autonomous Business Orchestrator", description: "Fully autonomous AI system for business operations", href: "/ai-autonomous-business-orchestrator", color: "from-purple-500 to-pink-500" },
    { icon: Shield, title: "Quantum AI Cybersecurity Sentinel", description: "Quantum-powered AI security with consciousness-level detection", href: "/quantum-ai-cybersecurity-sentinel", color: "from-blue-500 to-cyan-500" },
    { icon: Cloud, title: "Quantum Cloud Hybrid Platform", description: "Quantum computing integrated with hybrid cloud", href: "/quantum-cloud-hybrid-platform", color: "from-indigo-500 to-purple-500" },
    { icon: Network, title: "Autonomous Edge Computing Network", description: "Self-managing edge computing with AI optimization", href: "/autonomous-edge-computing-network", color: "from-emerald-500 to-teal-500" },
    { icon: Lock, title: "Zero Trust Quantum Network", description: "Quantum-secured zero trust network infrastructure", href: "/zero-trust-quantum-network", color: "from-red-500 to-orange-500" },
    { icon: FileText, title: "Autonomous Content Creation Suite", description: "AI that creates, edits, and publishes content autonomously", href: "/autonomous-content-creation-suite", color: "from-blue-500 to-indigo-500" }
  ];

  const stats = [
    { number: "5000+", label: "Innovative Services", icon: Star },
    { number: "99.99%", label: "Uptime Guarantee", icon: TrendingUp },
    { number: "24/7", label: "AI Support Available", icon: Brain },
    { number: "300+", label: "Countries Served", icon: Globe }
  ];

  const handleGetStarted = useCallback(() => {
    window.location.href = '/contact';
  }, []);

  const handleWatchDemo = useCallback(() => {
    window.location.href = '/demo';
  }, []);

  const handleServiceClick = useCallback((slug: string) => {
    window.location.href = slug;
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
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
        repeat: Infinity as any,
        ease: "easeInOut" as const
      }
    }
  };

  const glowVariants = {
    animate: {
      boxShadow: [
        "0 0 20px rgba(59, 130, 246, 0.5)",
        "0 0 40px rgba(59, 130, 246, 0.8)",
        "0 0 20px rgba(59, 130, 246, 0.5)"
      ],
      transition: {
        duration: 2,
        repeat: Infinity as any,
        ease: "easeInOut" as const
      }
    }
  };

  return (
    <Layout>
      {/* Hero Section with Futuristic Design */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Animated Background Effects */}
        <div className="absolute inset-0">
          {/* Gradient Mesh */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20"></div>
          
          {/* Animated Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
          
          {/* Floating Particles */}
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full opacity-60"
          />
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full opacity-60"
            style={{ animationDelay: '1s' }}
          />
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-60"
            style={{ animationDelay: '2s' }}
          />
          
          {/* Radial Gradients */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <motion.div
              variants={glowVariants}
              animate="animate"
              className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6 backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Revolutionary Technology 2047
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Future of
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Technology
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Experience the next generation of AI consciousness, quantum computing, and autonomous systems. 
              Transform your business with revolutionary technology that thinks, learns, and evolves.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleGetStarted}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <ArrowRight className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleWatchDemo}
                className="group px-8 py-4 border-2 border-blue-500/30 text-blue-400 font-semibold rounded-xl hover:bg-blue-500/10 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm"
              >
                <Play className="w-5 h-5 mr-2 inline-block group-hover:scale-110 transition-transform duration-300" />
                Watch Demo
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity as any }}
            className="w-6 h-10 border-2 border-blue-400/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity as any }}
              className="w-1 h-3 bg-blue-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="text-center group"
              >
                <div className="relative">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center border border-blue-500/30 backdrop-blur-sm group-hover:border-blue-500/50 transition-all duration-300"
                  >
                    <stat.icon className="w-8 h-8 text-blue-400" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold text-white mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                  >
                    {stat.number}
                  </motion.div>
                  <p className="text-gray-400 text-sm md:text-base">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our cutting-edge technology solutions that are reshaping the future of business and technology.
            </p>
          </motion.div>

          {/* Service Categories */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                variants={itemVariants}
                onClick={() => setSelectedCategory(category.id)}
                className={`group px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700 hover:border-gray-600'
                }`}
              >
                <category.icon className="w-5 h-5 inline-block mr-2" />
                {category.name}
                <span className="ml-2 px-2 py-1 bg-gray-700/50 rounded-full text-xs">
                  {category.count}
                </span>
              </motion.button>
            ))}
          </motion.div>

          {/* Services Grid */}
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
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm overflow-hidden"
              >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Service Icon */}
                <div className="relative z-10 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center border border-blue-500/30">
                    <Brain className="w-6 h-6 text-blue-400" />
                  </div>
                </div>

                {/* Service Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {service.description}
                  </p>
                  
                  {/* Pricing */}
                  {service.pricing && (
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-blue-400">
                        {service.pricing.starter}
                      </span>
                      <span className="text-gray-500 text-sm ml-2">starting from</span>
                    </div>
                  )}

                  {/* Features Preview */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="px-2 py-1 bg-gray-700/50 rounded-md text-xs text-gray-300"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => handleServiceClick(service.slug)}
                    className="group/btn w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                  >
                    Learn More
                    <ArrowUpRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* View All Services Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-center mt-12"
          >
            <button
              onClick={() => window.location.href = '/services'}
              className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-cyan-700 transition-all duration-300 shadow-lg shadow-purple-500/25"
            >
              View All Services
              <ArrowRight className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of AI consciousness, quantum computing, and autonomous systems.
            </p>
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
                key={feature.title}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm overflow-hidden"
              >
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Feature Icon */}
                <div className="relative z-10 mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Feature Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {feature.description}
                  </p>
                  
                  {/* Learn More Link */}
                  <a
                    href={feature.href}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 group/link"
                  >
                    Learn More
                    <ArrowUpRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the future of technology with our revolutionary AI consciousness and quantum computing solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleGetStarted}
                className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/contact'}
                className="px-8 py-4 border-2 border-blue-500/30 text-blue-400 font-semibold rounded-xl hover:bg-blue-500/10 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm"
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Homepage2047;