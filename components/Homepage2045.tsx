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

// Lazy load new components for better performance
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
    ...innovativeAIAutonomousServices2025
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
    { id: 'space', name: 'Space Technology', icon: RocketIcon, color: 'from-indigo-500 to-purple-500' },
    { id: 'business', name: 'Business Solutions', icon: Target, color: 'from-emerald-500 to-teal-500' }
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
    { number: "200+", label: "Countries Served", icon: Globe }
  ];

  const handleGetStarted = useCallback(() => {
    window.location.href = '/revolutionary-2045-pricing-showcase';
  }, []);

  const handleWatchDemo = useCallback(() => {
    window.location.href = '/services';
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const }
    }
  };

  return (
    <>
      <Head>
        <title>Zion Tech Group - Future Technology Solutions 2045</title>
        <meta name="description" content="Leading the future of technology with revolutionary AI consciousness, quantum computing, and space technology solutions. Transform your business with Zion Tech Group." />
        <meta name="keywords" content="AI consciousness, quantum computing, space technology, cybersecurity, cloud infrastructure, Zion Tech Group" />
        <meta property="og:title" content="Zion Tech Group - Future Technology Solutions 2045" />
        <meta property="og:description" content="Leading the future of technology with revolutionary AI consciousness, quantum computing, and space technology solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Future Technology Solutions 2045" />
        <meta name="twitter:description" content="Leading the future of technology with revolutionary AI consciousness, quantum computing, and space technology solutions." />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>

      <div className="min-h-screen relative overflow-hidden">
        {/* Hero Section */}
        <motion.section 
          className="relative py-32 lg:py-48 px-4 sm:px-6 lg:px-8 text-center"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto">
            {/* Main Heading */}
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
              variants={itemVariants}
            >
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Future Technology
              </span>
              <br />
              <span className="text-white">
                Solutions 2045
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Leading the revolution in AI consciousness, quantum computing, and space technology. 
              Transform your business with the most advanced solutions available.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
              variants={itemVariants}
            >
              <button
                onClick={handleGetStarted}
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-lg font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
              >
                Get Started
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button
                onClick={handleWatchDemo}
                className="group px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 text-lg font-semibold rounded-xl hover:bg-cyan-500/10 hover:border-cyan-500 transition-all duration-300 hover:scale-105"
              >
                <Play className="inline-block mr-2 w-5 h-5" />
                Watch Demo
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
              variants={itemVariants}
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Services Showcase */}
        <motion.section 
          className="py-24 px-4 sm:px-6 lg:px-8 bg-black/50"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <motion.div className="text-center mb-16" variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our cutting-edge technology solutions that are transforming industries and shaping the future
              </p>
            </motion.div>

            {/* Category Filter */}
            <motion.div className="flex flex-wrap justify-center gap-4 mb-12" variants={itemVariants}>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full border-2 transition-all duration-300 hover:scale-105 ${
                    selectedCategory === category.id
                      ? 'border-cyan-500 bg-cyan-500/10 text-cyan-400'
                      : 'border-gray-600 text-gray-400 hover:border-cyan-500/50 hover:text-cyan-400'
                  }`}
                >
                  <category.icon className="w-5 h-5" />
                  <span>{category.name}</span>
                </button>
              ))}
            </motion.div>

            {/* Featured Services Grid */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={itemVariants}
            >
              {getFilteredServices().slice(0, 6).map((service, index) => (
                <motion.div
                  key={service.id}
                  className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Service Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Brain className="w-8 h-8 text-white" />
                  </div>

                  {/* Service Content */}
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Service Features */}
                  <div className="space-y-2 mb-6">
                    {service.features?.slice(0, 3).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-500">
                        <CheckCircle className="w-4 h-4 text-cyan-400" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Service Footer */}
                  <div className="flex items-center justify-between">
                    <div className="text-cyan-400 font-semibold">
                      {service.pricing?.starter || 'Contact for pricing'}
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </motion.div>

            {/* View All Services Button */}
            <motion.div className="text-center mt-12" variants={itemVariants}>
              <Link
                href="/services"
                className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 text-lg font-semibold rounded-xl hover:bg-cyan-500/10 hover:border-cyan-500 transition-all duration-300 hover:scale-105"
              >
                <span>View All Services</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </motion.section>

        {/* Features Section */}
        <motion.section 
          className="py-24 px-4 sm:px-6 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <motion.div className="text-center mb-16" variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the future of technology with our revolutionary solutions and unmatched expertise
              </p>
            </motion.div>

            {/* Features Grid */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={itemVariants}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="group relative bg-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Feature Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Feature Content */}
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-6">
                    {feature.description}
                  </p>

                  {/* Learn More Link */}
                  <Link
                    href={feature.href}
                    className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 group/link"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                  </Link>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="max-w-4xl mx-auto text-center">
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
              Join the future of technology with Zion Tech Group. Our revolutionary solutions are waiting to propel your business forward.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              variants={itemVariants}
            >
              <button
                onClick={handleGetStarted}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-lg font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
              >
                Get Started Today
              </button>
              <Link
                href="/contact"
                className="px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 text-lg font-semibold rounded-xl hover:bg-cyan-500/10 hover:border-cyan-500 transition-all duration-300 hover:scale-105"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default Homepage2045;