import React, { useEffect, useState, useCallback, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, Play, TrendingUp, Brain, Shield, Rocket, Globe, Cpu, Database, Atom, Target, Star, Sparkles as SparklesIcon,
  Brain as BrainIcon, Atom as AtomIcon, Shield as ShieldIcon, Rocket as RocketIcon, Zap, Eye, Heart, Infinity,
  Users, Building, Cloud, Code, Palette, Lightbulb, Award, Clock, CheckCircle, ArrowUpRight
} from 'lucide-react';
import Head from 'next/head';

// Import our new revolutionary services
import { revolutionary2044AdvancedMicroSaas } from '../data/revolutionary-2044-advanced-micro-saas';
import { revolutionary2044ITServices } from '../data/revolutionary-2044-it-services';
import { revolutionary2044AIServices } from '../data/revolutionary-2044-ai-services';
import { realEnterpriseMicroSaas2025 } from '../data/2025-real-enterprise-micro-saas';
import { innovativeITInfrastructureServices2025 } from '../data/2025-innovative-it-infrastructure-services';
import { innovativeAIAutonomousServices2025 } from '../data/2025-innovative-ai-autonomous-services';
import { realInnovativeMicroSaas2025V2 } from '../data/2025-real-innovative-micro-saas-v2';
import { innovativeITInfrastructureServices2025V2 } from '../data/2025-innovative-it-infrastructure-services-v2';
import { innovativeAIAutonomousServices2025V2 } from '../data/2025-innovative-ai-autonomous-services-v2';

// Lazy load new components for better performance
const ServiceCard = lazy(() => import('./ServiceCard'));
const PerformanceMetrics = lazy(() => import('./PerformanceMetrics'));
const InteractiveDemo = lazy(() => import('./InteractiveDemo'));
const PerformanceOptimizer = lazy(() => import('./PerformanceOptimizer'));

const Homepage2045: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(false);
  const [userInteraction, setUserInteraction] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  
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
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Combine all revolutionary services
  const allRevolutionaryServices = [
    ...revolutionary2044AdvancedMicroSaas,
    ...revolutionary2044ITServices,
    ...revolutionary2044AIServices,
    ...realEnterpriseMicroSaas2025,
    ...innovativeITInfrastructureServices2025,
    ...innovativeAIAutonomousServices2025,
    ...realInnovativeMicroSaas2025V2,
    ...innovativeITInfrastructureServices2025V2,
    ...innovativeAIAutonomousServices2025V2
  ];

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
    { id: 'space', name: 'Space Technology', icon: RocketIcon, color: 'from-indigo-500 to-purple-500' },
    { id: 'enterprise', name: 'Enterprise Solutions', icon: Building, color: 'from-green-500 to-teal-500' }
  ];

  // Get featured services for rotation
  const featuredServices = allRevolutionaryServices.slice(0, 6);

  // Animation variants
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

  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut" as const
      }
    }
  };



  // Parallax effect for mouse movement
  const getParallaxStyle = (depth: number) => ({
    transform: `translate(${mousePosition.x * depth * 0.01}px, ${mousePosition.y * depth * 0.01}px)`
  });

  return (
    <>
      <Head>
        <title>Zion Tech Group - Revolutionary 2045 Technology Solutions</title>
        <meta name="description" content="Experience the future of technology with Zion Tech Group's revolutionary AI consciousness, quantum computing, and autonomous solutions. Transform your business with cutting-edge innovation." />
        <meta name="keywords" content="AI consciousness, quantum computing, autonomous solutions, space technology, cybersecurity, business intelligence, Zion Tech Group, 2045 technology" />
        <meta property="og:title" content="Zion Tech Group - Revolutionary 2045 Technology" />
        <meta property="og:description" content="Pioneering the future of technology with revolutionary AI consciousness and quantum computing solutions." />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>

      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        {/* Hero Section */}
        <motion.section 
          className="relative min-h-screen flex items-center justify-center px-4 lg:px-8"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: 999, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: 999, ease: "easeInOut", delay: 1 }}
            />
            <motion.div
              className="absolute bottom-32 left-1/3 w-40 h-40 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-full blur-3xl"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: 999, ease: "easeInOut", delay: 2 }}
            />
          </div>

          <div className="relative z-10 text-center max-w-6xl mx-auto">
            {/* Main Heading */}
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6 text-neon-cyan"
              variants={itemVariants}
            >
              Zion Tech Group
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Pioneering the Future of Technology with Revolutionary AI Consciousness, 
              Quantum Computing, and Autonomous Solutions
            </motion.p>

            {/* Enhanced Subtitle */}
            <motion.div 
              className="mb-8"
              variants={itemVariants}
            >
              <p className="text-lg md:text-xl text-cyan-300 mb-4">
                🚀 25+ Revolutionary Micro SAAS Services • 🔒 Enterprise-Grade Security • 🌐 Global Infrastructure
              </p>
              <p className="text-base md:text-lg text-gray-400">
                From AI Content Creation to Quantum Cybersecurity • Trusted by 500+ Enterprises Worldwide
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
              variants={itemVariants}
            >
              <Link href="/services">
                <motion.button 
                  className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 glow-cyan"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center gap-2">
                    🚀 Explore 25+ Services
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10" />
                </motion.button>
              </Link>
              
              <Link href="/contact">
                <motion.button 
                  className="px-8 py-4 border-2 border-purple-500/50 text-purple-400 font-semibold rounded-full text-lg hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300 transform hover:scale-105 glow-purple"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  💎 Get Started Today
                </motion.button>
              </Link>

              <Link href="/pricing">
                <motion.button 
                  className="px-8 py-4 border-2 border-pink-500/50 text-pink-400 font-semibold rounded-full text-lg hover:bg-pink-500/10 hover:border-pink-400 transition-all duration-300 transform hover:scale-105 glow-pink"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  💰 View Pricing
                </motion.button>
              </Link>
            </motion.div>

            {/* Enhanced Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
              variants={itemVariants}
            >
              {[
                { number: '500+', label: 'Global Clients', icon: '🌍', color: 'text-cyan-400' },
                { number: '99.9%', label: 'Uptime SLA', icon: '⚡', color: 'text-green-400' },
                { number: '24/7', label: 'Expert Support', icon: '🛡️', color: 'text-purple-400' },
                { number: '25+', label: 'Micro SAAS', icon: '🚀', color: 'text-pink-400' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={`text-4xl mb-2 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.icon}
                  </div>
                  <div className={`text-2xl md:text-3xl font-bold ${stat.color} mb-2 group-hover:text-white transition-colors duration-300`}>
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Featured Services Section */}
        <motion.section 
          className="py-20 px-4 lg:px-8 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div className="text-center mb-16" variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-neon-cyan">
                🚀 Revolutionary Technology Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
                Experience the future with our cutting-edge AI consciousness, quantum computing, 
                and autonomous solutions that transform businesses worldwide.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full">🤖 AI & Machine Learning</span>
                <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full">⚛️ Quantum Computing</span>
                <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full">☁️ Cloud Infrastructure</span>
                <span className="px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full">🔒 Cybersecurity</span>
                <span className="px-3 py-1 bg-pink-500/10 border border-pink-500/20 rounded-full">📊 Business Intelligence</span>
              </div>
            </motion.div>

            {/* Category Filter */}
            <motion.div className="flex flex-wrap justify-center gap-4 mb-12" variants={itemVariants}>
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center gap-2">
                    <category.icon className="w-5 h-5" />
                    {category.name}
                  </span>
                </motion.button>
              ))}
            </motion.div>

            {/* Services Grid */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
            >
              {getFilteredServices().slice(0, 9).map((service, index) => (
                <motion.div
                  key={service.id || index}
                  variants={itemVariants}
                  className="group"
                >
                  <Suspense fallback={
                    <div className="bg-gray-800/50 rounded-2xl p-6 h-64 animate-pulse">
                      <div className="bg-gray-700 h-8 w-3/4 rounded mb-4"></div>
                      <div className="bg-gray-700 h-4 w-full rounded mb-2"></div>
                      <div className="bg-gray-700 h-4 w-2/3 rounded"></div>
                    </div>
                  }>
                    <ServiceCard service={service} />
                  </Suspense>
                </motion.div>
              ))}
            </motion.div>

            {/* View All Services Button */}
            <motion.div className="text-center mt-12" variants={itemVariants}>
              <Link href="/services">
                <motion.button 
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-full text-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center gap-2">
                    View All Services
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.section>

        {/* Technology Showcase */}
        <motion.section 
          className="py-20 px-4 lg:px-8 bg-gradient-to-b from-black to-gray-900/50 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div className="text-center mb-16" variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Cutting-Edge Technology Stack
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our revolutionary technology combines AI consciousness, quantum computing, 
                and autonomous systems to deliver unprecedented capabilities.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: BrainIcon,
                  title: "AI Consciousness Evolution",
                  description: "Next-generation AI with emotional intelligence and self-awareness capabilities",
                  color: "from-cyan-500 to-blue-600"
                },
                {
                  icon: AtomIcon,
                  title: "Quantum Computing Platform",
                  description: "Quantum-powered solutions for complex computational challenges",
                  color: "from-blue-500 to-indigo-600"
                },
                {
                  icon: ShieldIcon,
                  title: "Zero-Trust Security",
                  description: "Advanced cybersecurity with autonomous threat detection and response",
                  color: "from-red-500 to-orange-600"
                },
                {
                  icon: RocketIcon,
                  title: "Space Technology",
                  description: "Innovative solutions for space exploration and satellite systems",
                  color: "from-indigo-500 to-purple-600"
                },
                {
                  icon: Globe,
                  title: "Global Infrastructure",
                  description: "Worldwide network with edge computing and autonomous optimization",
                  color: "from-green-500 to-teal-600"
                },
                {
                  icon: Cpu,
                  title: "Autonomous Systems",
                  description: "Self-managing and self-optimizing technology infrastructure",
                  color: "from-purple-500 to-pink-600"
                }
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  className="group relative p-8 bg-gray-800/30 rounded-2xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:bg-gray-800/50"
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <tech.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{tech.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{tech.description}</p>
                  
                  {/* Hover Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section 
          className="py-20 px-4 lg:px-8 text-center relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              variants={itemVariants}
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 mb-8"
              variants={itemVariants}
            >
              Join the future of technology with Zion Tech Group. Our revolutionary solutions 
              are designed to propel your business into the next generation.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={itemVariants}
            >
              <Link href="/contact">
                <motion.button 
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Your Journey
                </motion.button>
              </Link>
              <Link href="/services">
                <motion.button 
                  className="px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-full text-lg hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300"
                >
                  Learn More
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section 
          className="py-20 px-4 lg:px-8 relative bg-gradient-to-r from-gray-900 to-black"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto text-center">
            <motion.div className="mb-12" variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-neon-purple">
                🚀 Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Join 500+ enterprises worldwide who trust Zion Tech Group for their digital transformation journey.
                Get started today with our revolutionary technology solutions.
              </p>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-3 gap-8 mb-12"
              variants={itemVariants}
            >
              <div className="text-center p-6 bg-gray-800/50 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                <div className="text-4xl mb-4">📞</div>
                <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                <p className="text-gray-400 mb-4">Speak with our experts</p>
                <a href="tel:+13024640950" className="text-purple-400 hover:text-purple-300 font-medium">
                  +1 302 464 0950
                </a>
              </div>

              <div className="text-center p-6 bg-gray-800/50 rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                <div className="text-4xl mb-4">✉️</div>
                <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                <p className="text-gray-400 mb-4">Get detailed information</p>
                <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 font-medium">
                  kleber@ziontechgroup.com
                </a>
              </div>

              <div className="text-center p-6 bg-gray-800/50 rounded-xl border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300">
                <div className="text-4xl mb-4">📍</div>
                <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-gray-400 mb-4">Our headquarters</p>
                <p className="text-pink-400 font-medium">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Link href="/contact" className="btn-futuristic glow-purple hover:glow-pink transition-all duration-300">
                🚀 Start Your Transformation Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default Homepage2045;