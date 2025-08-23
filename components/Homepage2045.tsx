import React, { useEffect, useState, useCallback, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, Play, TrendingUp, Brain, Shield, Rocket, Globe, Cpu, Database, Atom, Target, Star, Sparkles as SparklesIcon,
  Brain as BrainIcon, Atom as AtomIcon, Shield as ShieldIcon, Rocket as RocketIcon, Zap, Eye, Heart, Infinity,
  Users, Building, Cloud, Code, Palette, Lightbulb, Award, Clock, CheckCircle, ArrowUpRight, ChevronDown, Menu, X, Phone, Mail
} from 'lucide-react';
import Head from 'next/head';

// Import our new revolutionary services
import { revolutionary2044AdvancedMicroSaas } from '../data/revolutionary-2044-advanced-micro-saas';
import { revolutionary2044ITServices } from '../data/revolutionary-2044-it-services';
import { revolutionary2044AIServices } from '../data/revolutionary-2044-ai-services';
import { realEnterpriseMicroSaas2025 } from '../data/2025-real-enterprise-micro-saas';
import { innovativeITInfrastructureServices2025 } from '../data/2025-innovative-it-infrastructure-services';
import { innovativeAIAutonomousServices2025 } from '../data/2025-innovative-ai-autonomous-services';
import { revolutionary2045AdvancedAIServices } from '../data/revolutionary-2045-advanced-ai-services';
import { revolutionary2045AdvancedITServices } from '../data/revolutionary-2045-advanced-it-services';

// Import our new expansion services
import { innovativeAIAutonomousServicesExpansion2025 } from '../data/2025-innovative-ai-autonomous-services-expansion';
import { innovativeITInfrastructureServicesExpansion2025 } from '../data/2025-innovative-it-infrastructure-services-expansion';
import { innovativeMicroSaasExpansion2025 } from '../data/2025-innovative-micro-saas-expansion';

// Lazy load new components for better performance
const ServiceCard = lazy(() => import('./ServiceCard'));
const PerformanceMetrics = lazy(() => import('./PerformanceMetrics'));
const InteractiveDemo = lazy(() => import('./InteractiveDemo'));
const PerformanceOptimizer = lazy(() => import('./PerformanceOptimizer'));

const Homepage2045: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(false);
  const [userInteraction, setUserInteraction] = useState(false);
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  
  useEffect(() => {
    setIsVisible(true);
    setIsClient(true);
    
    // Auto-rotate featured services
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % 6);
    }, 6000);
    
    // Track mouse movement for parallax effects
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    // Track scroll position
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Update active section based on scroll position
      const sections = ['hero', 'services', 'features', 'stats', 'cta'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Combine all revolutionary services including new expansions
  const allRevolutionaryServices = [
    ...revolutionary2044AdvancedMicroSaas,
    ...revolutionary2044ITServices,
    ...revolutionary2044AIServices,
    ...realEnterpriseMicroSaas2025,
    ...innovativeITInfrastructureServices2025,
    ...innovativeAIAutonomousServices2025,
    ...revolutionary2045AdvancedAIServices,
    ...revolutionary2045AdvancedITServices,
    ...innovativeAIAutonomousServicesExpansion2025,
    ...innovativeITInfrastructureServicesExpansion2025,
    ...innovativeMicroSaasExpansion2025
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
    { id: 'all', name: 'All Services', icon: <SparklesIcon className="w-4 h-4" />, color: 'from-cyan-400 to-blue-500' },
    { id: 'ai', name: 'AI & ML', icon: <BrainIcon className="w-4 h-4" />, color: 'from-purple-400 to-pink-500' },
    { id: 'quantum', name: 'Quantum', icon: <AtomIcon className="w-4 h-4" />, color: 'from-indigo-400 to-purple-500' },
    { id: 'cybersecurity', name: 'Security', icon: <ShieldIcon className="w-4 h-4" />, color: 'from-red-400 to-orange-500' },
    { id: 'infrastructure', name: 'Infrastructure', icon: <RocketIcon className="w-4 h-4" />, color: 'from-green-400 to-teal-500' },
    { id: 'micro-saas', name: 'Micro SAAS', icon: <Cloud className="w-4 h-4" />, color: 'from-blue-400 to-indigo-500' }
  ];

  const featuredServices = allRevolutionaryServices.slice(0, 6);

  return (
    <>
      <Head>
        <title>Zion Tech Group - Revolutionary AI, IT & Micro SAAS Services 2025</title>
        <meta name="description" content="Discover cutting-edge AI services, IT infrastructure solutions, and innovative micro SAAS platforms. Transform your business with autonomous intelligence and quantum computing." />
        <meta name="keywords" content="AI services, IT infrastructure, micro SAAS, quantum computing, autonomous systems, cybersecurity, cloud computing" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Zion Tech Group - Revolutionary AI, IT & Micro SAAS Services 2025" />
        <meta property="og:description" content="Discover cutting-edge AI services, IT infrastructure solutions, and innovative micro SAAS platforms." />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Revolutionary AI, IT & Micro SAAS Services 2025" />
        <meta name="twitter:description" content="Discover cutting-edge AI services, IT infrastructure solutions, and innovative micro SAAS platforms." />
      </Head>

      <div className="min-h-screen bg-black text-white overflow-hidden">
        {/* Futuristic Animated Background */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,212,255,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.1),transparent_50%)]" />
          
          {/* Animated Grid */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(0,212,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,212,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
              animation: 'gridMove 20s linear infinite'
            }} />
          </div>
          
          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`
                }}
                animate={{
                  y: [0, -100, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0]
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity as any,
                  delay: Math.random() * 2
                }}
              />
            ))}
          </div>
        </div>

        {/* Hero Section */}
        <section id="hero" className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="mb-8"
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
                <span className="text-gradient bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Revolutionary AI, IT Infrastructure & Micro SAAS Services for the Future
              </p>
              <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
                Transform your business with autonomous intelligence, quantum computing, and cutting-edge technology solutions
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link href="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-futuristic text-lg px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300"
                >
                  Explore Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-futuristic text-lg px-8 py-4 bg-transparent border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  Get Started
                </motion.button>
              </Link>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto"
            >
              <div className="text-center">
                <Phone className="w-6 h-6 mx-auto mb-2 text-cyan-400" />
                <p className="text-sm text-gray-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <Mail className="w-6 h-6 mx-auto mb-2 text-cyan-400" />
                <p className="text-sm text-gray-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <Building className="w-6 h-6 mx-auto mb-2 text-cyan-400" />
                <p className="text-sm text-gray-400">Middletown, DE</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-gradient">Revolutionary Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our cutting-edge AI, IT infrastructure, and micro SAAS solutions designed for the future
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
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full border-2 transition-all duration-300 ${
                    selectedCategory === category.id
                      ? `border-cyan-500 bg-gradient-to-r ${category.color} text-white`
                      : 'border-gray-600 text-gray-300 hover:border-cyan-500 hover:text-cyan-400'
                  }`}
                >
                  {category.icon}
                  {category.name}
                </motion.button>
              ))}
            </motion.div>

            {/* Services Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {getFilteredServices().slice(0, 9).map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="group relative"
                >
                  <div className="relative p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {service.name}
                      </h3>
                      <p className="text-gray-300 mb-4 line-clamp-3">
                        {service.description}
                      </p>
                      
                      {service.pricing && (
                        <div className="mb-4">
                          <span className="text-cyan-400 font-semibold">
                            Starting at {service.pricing.starter}
                          </span>
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full">
                          {service.category}
                        </span>
                        <Link href={service.slug || `/services/${service.id}`}>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                          >
                            <ArrowRight className="w-5 h-5" />
                          </motion.button>
                        </Link>
                      </div>
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
              <Link href="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-futuristic text-lg px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 transition-all duration-300"
                >
                  View All Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-gradient">Why Choose Zion Tech Group?</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the future of technology with our revolutionary solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <BrainIcon className="w-12 h-12" />,
                  title: "AI-Powered Intelligence",
                  description: "Cutting-edge artificial intelligence and machine learning solutions that transform your business operations.",
                  color: "from-purple-500 to-pink-600"
                },
                {
                  icon: <AtomIcon className="w-12 h-12" />,
                  title: "Quantum Computing",
                  description: "Next-generation quantum computing solutions for unprecedented performance and security.",
                  color: "from-indigo-500 to-purple-600"
                },
                {
                  icon: <ShieldIcon className="w-12 h-12" />,
                  title: "Advanced Security",
                  description: "State-of-the-art cybersecurity solutions with autonomous threat detection and response.",
                  color: "from-red-500 to-orange-600"
                },
                {
                  icon: <RocketIcon className="w-12 h-12" />,
                  title: "Scalable Infrastructure",
                  description: "Cloud-native infrastructure solutions designed for global scale and performance.",
                  color: "from-green-500 to-teal-600"
                },
                {
                  icon: <Cloud className="w-12 h-12" />,
                  title: "Micro SAAS Solutions",
                  description: "Innovative software-as-a-service solutions that drive business growth and efficiency.",
                  color: "from-blue-500 to-indigo-600"
                },
                {
                  icon: <Zap className="w-12 h-12" />,
                  title: "Lightning Fast",
                  description: "Optimized performance and lightning-fast response times for all our services.",
                  color: "from-yellow-500 to-orange-600"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="group relative"
                >
                  <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="relative z-10 text-center">
                      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <div className="text-white">
                          {feature.icon}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      
                      <p className="text-gray-300 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section id="stats" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-gradient">Impressive Numbers</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our track record speaks for itself
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "500+", label: "Services Delivered", icon: <RocketIcon className="w-8 h-8" /> },
                { number: "99.9%", label: "Uptime Guarantee", icon: <ShieldIcon className="w-8 h-8" /> },
                { number: "24/7", label: "Support Available", icon: <Users className="w-8 h-8" /> },
                { number: "50+", label: "Countries Served", icon: <Globe className="w-8 h-8" /> }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 mb-4">
                    <div className="text-white">
                      {stat.icon}
                    </div>
                  </div>
                  
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  
                  <div className="text-gray-300 text-sm md:text-base">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-gradient">Ready to Transform Your Business?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join the future of technology with Zion Tech Group's revolutionary AI, IT infrastructure, and micro SAAS solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-futuristic text-lg px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300"
                  >
                    Get Started Today
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </motion.button>
                </Link>
                <Link href="/services">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-futuristic text-lg px-8 py-4 bg-transparent border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300"
                  >
                    Explore Services
                  </motion.button>
                </Link>
              </div>

              {/* Contact Information */}
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
                <div className="text-center">
                  <Phone className="w-6 h-6 mx-auto mb-2 text-cyan-400" />
                  <p className="text-sm text-gray-400">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <Mail className="w-6 h-6 mx-auto mb-2 text-cyan-400" />
                  <p className="text-sm text-gray-400">kleber@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <Building className="w-6 h-6 mx-auto mb-2 text-cyan-400" />
                  <p className="text-sm text-gray-400">Middletown, DE</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </>
  );
};

export default Homepage2045;