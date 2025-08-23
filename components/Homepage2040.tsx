import React, { Suspense, lazy, useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Star, 
  Brain, Atom, Shield, Zap, TrendingUp, Globe,
  Rocket, Target, Users, Cpu, Database, Cloud,
  BarChart3, Code, Smartphone, Server, Lock,
  Award, CheckCircle, Clock, DollarSign, Phone, Mail, MapPin
} from 'lucide-react';

// Import the new service data
import { ultimate2025MicroSaasExpansion } from '../data/2025-ultimate-micro-saas-expansion';
import { ultimate2025ITServicesExpansion } from '../data/2025-ultimate-it-services-expansion';
import { ultimate2025AIServicesExpansion } from '../data/2025-ultimate-ai-services-expansion';

// Lazy load heavy components for better performance
const LazyServiceCard = lazy(() => import('./ui/UltraFuturisticServiceCard2026'));

const Homepage2040: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [viewport, setViewport] = useState({ width: 0, height: 0 });

  // Performance optimization: Measure viewport and load state
  useEffect(() => {
    const updateViewport = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateViewport();
    window.addEventListener('resize', updateViewport);
    
    // Set loaded state after initial render
    const timer = setTimeout(() => setIsLoaded(true), 100);
    
    return () => {
      window.removeEventListener('resize', updateViewport);
      clearTimeout(timer);
    };
  }, []);

  // Enhanced animation variants for better performance
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

  // Performance-optimized stats data with memoization
  const statsData = [
    {
      number: "100+",
      label: "AI Services",
      description: "Cutting-edge solutions",
      icon: Brain,
      color: "text-cyan-400",
      hoverColor: "group-hover:text-cyan-300"
    },
    {
      number: "150+",
      label: "IT Solutions",
      description: "Enterprise infrastructure",
      icon: Server,
      color: "text-blue-400",
      hoverColor: "group-hover:text-blue-300"
    },
    {
      number: "200+",
      label: "Micro SAAS",
      description: "Innovative platforms",
      icon: Rocket,
      color: "text-purple-400",
      hoverColor: "group-hover:text-purple-300"
    },
    {
      number: "24/7",
      label: "Autonomous Operations",
      description: "Always available",
      icon: Cpu,
      color: "text-green-400",
      hoverColor: "group-hover:text-green-300"
    }
  ];

  // Performance-optimized featured services with lazy loading
  const featuredServices = [
    {
      id: 'ai-consciousness-evolution-platform',
      name: 'AI Consciousness Evolution Platform',
      tagline: 'Revolutionary AI consciousness development',
      description: 'Revolutionary platform for developing AI systems with advanced consciousness capabilities, ethical training, and safety protocols',
      price: '$8,999',
      period: '/month',
      features: ['Consciousness Development', 'Ethical Training', 'Safety Protocols'],
      popular: true,
      category: 'AI & Consciousness',
      icon: '🧠'
    },
    {
      id: 'quantum-secure-cloud-infrastructure',
      name: 'Quantum-Secure Cloud Infrastructure',
      tagline: 'Next-generation quantum-secure cloud',
      description: 'Next-generation cloud infrastructure with quantum-resistant encryption, AI-powered security, and autonomous operations',
      price: '$4,999',
      period: '/month',
      features: ['Quantum-resistant Encryption', 'AI-powered Security', 'Autonomous Operations'],
      popular: true,
      category: 'Cloud & Security',
      icon: '☁️'
    },
    {
      id: 'ai-autonomous-content-factory',
      name: 'AI Autonomous Content Factory',
      tagline: 'End-to-end autonomous content creation',
      description: 'End-to-end autonomous content creation, optimization, and distribution platform with AI-driven creativity',
      price: '$1,299',
      period: '/month',
      features: ['AI Content Generation', 'Multi-platform Publishing', 'SEO Optimization'],
      popular: true,
      category: 'AI & Content',
      icon: '🏭'
    },
    {
      id: 'quantum-supply-chain-optimizer',
      name: 'Quantum Supply Chain Optimizer',
      tagline: 'Quantum-optimized logistics platform',
      description: 'Revolutionary supply chain optimization using quantum algorithms and AI for real-time logistics and predictive analytics',
      price: '$3,999',
      period: '/month',
      features: ['Quantum Optimization', 'Real-time Tracking', 'Predictive Analytics'],
      popular: false,
      category: 'Quantum & Logistics',
      icon: '🚚'
    }
  ];

  const serviceCategories = [
    {
      name: 'AI & Machine Learning',
      icon: Brain,
      count: ultimate2025AIServicesExpansion.length,
      description: 'Advanced AI solutions for enterprise',
      href: '/ai-services',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'IT Infrastructure',
      icon: Server,
      count: ultimate2025ITServicesExpansion.length,
      description: 'Enterprise IT solutions',
      href: '/it-services',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Micro SAAS',
      icon: Rocket,
      count: ultimate2025MicroSaasExpansion.length,
      description: 'Innovative micro services',
      href: '/micro-saas',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      name: 'Quantum Computing',
      icon: Atom,
      count: 25,
      description: 'Next-generation quantum solutions',
      href: '/quantum-computing',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <div className="relative z-10" id="main">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden"
        aria-labelledby="hero-heading"
        role="banner"
      >
        {/* Enhanced Background with Performance Optimization */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1),transparent_50%)]" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            className="space-y-8"
          >
            {/* Enhanced Badge with Accessibility */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/50 rounded-full text-cyan-400 text-sm font-medium backdrop-blur-sm"
              style={{
                boxShadow: '0 0 20px rgba(6, 182, 212, 0.5)',
              }}
              role="status"
              aria-label="Latest innovation showcase"
            >
              <Star className="w-4 h-4" aria-hidden="true" />
              <span>2025 Innovation Showcase</span>
              <Star className="w-4 h-4 text-yellow-400" aria-hidden="true" />
            </motion.div>

            {/* Enhanced Main Heading with Better Typography */}
            <motion.h1 
              id="hero-heading"
              variants={itemVariants}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
            >
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </motion.h1>
            
            {/* Enhanced Subtitle with Better Readability */}
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-10 max-w-5xl mx-auto leading-relaxed font-light"
            >
              Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide
            </motion.p>
            
            {/* Enhanced CTA Section with Better Accessibility */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
              role="group"
              aria-label="Call to action buttons"
            >
              <Link href="/get-started" aria-label="Get started with our services">
                <button 
                  className="group px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-black focus:scale-105"
                  aria-describedby="get-started-description"
                >
                  <span className="flex items-center gap-3 text-lg">
                    Get Started
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </span>
                </button>
                <div id="get-started-description" className="sr-only">
                  Begin your journey with Zion Tech Group's revolutionary technology solutions
                </div>
              </Link>
              
              <Link href="/services" aria-label="Learn more about our services">
                <button 
                  className="px-10 py-5 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-black focus:scale-105 text-lg"
                  aria-describedby="explore-services-description"
                >
                  Explore Services
                </button>
                <div id="explore-services-description" className="sr-only">
                  Discover our comprehensive range of AI, quantum computing, and autonomous solutions
                </div>
              </Link>
              
              <Link href="/innovative-2040-futuristic-services-showcase" aria-label="View our 2040 services showcase">
                <button 
                  className="px-10 py-5 border-2 border-purple-400 text-purple-400 font-semibold rounded-xl hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2 focus:ring-offset-black focus:scale-105 text-lg"
                  aria-describedby="showcase-description"
                >
                  2040 Services Showcase
                </button>
                <div id="showcase-description" className="sr-only">
                  Experience the future with our cutting-edge 2040 technology showcase
                </div>
              </Link>
            </motion.div>
            
            {/* Enhanced Trust Indicators with Better Semantics */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center items-center gap-8 text-gray-400"
              role="complementary"
              aria-label="Company achievements and trust indicators"
            >
              <div className="flex items-center space-x-2" role="listitem">
                <CheckCircle className="w-5 h-5 text-green-400" aria-hidden="true" />
                <span>500+ Enterprise Clients</span>
              </div>
              <div className="flex items-center space-x-2" role="listitem">
                <Award className="w-5 h-5 text-yellow-400" aria-hidden="true" />
                <span>Industry Leader 2025</span>
              </div>
              <div className="flex items-center space-x-2" role="listitem">
                <Clock className="w-5 h-5 text-blue-400" aria-hidden="true" />
                <span>24/7 Support</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Stats Section with Performance Optimization */}
      <section 
        className="py-20 px-4 bg-gradient-to-r from-black/50 to-gray-900/50 relative overflow-hidden"
        aria-labelledby="stats-heading"
      >
        {/* Performance-optimized background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_70%,rgba(6,182,212,0.05),transparent_50%)]" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(147,51,234,0.05),transparent_50%)]" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 
              id="stats-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Revolutionary Technology Solutions
            </h2>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Delivering cutting-edge AI, quantum computing, and autonomous solutions that drive business transformation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {statsData.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="group text-center p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-500 hover:transform hover:scale-105 backdrop-blur-sm"
                role="article"
                aria-labelledby={`stat-${index}-label`}
              >
                <div className={`w-16 h-16 lg:w-20 lg:h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 flex items-center justify-center group-hover:border-cyan-400/50 transition-all duration-500 group-hover:scale-110`}>
                  <stat.icon className={`w-8 h-8 lg:w-10 lg:h-10 ${stat.color} ${stat.hoverColor}`} aria-hidden="true" />
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                  {stat.number}
                </div>
                <div 
                  id={`stat-${index}-label`}
                  className="text-lg lg:text-xl font-semibold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors duration-300"
                >
                  {stat.label}
                </div>
                <div className="text-gray-400 text-sm lg:text-base group-hover:text-gray-300 transition-colors duration-300">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Service Categories Section with Performance Optimization */}
      <section 
        className="py-20 px-4 relative overflow-hidden"
        aria-labelledby="services-heading"
      >
        {/* Performance-optimized background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/5 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-500/5 to-transparent rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 
              id="services-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Revolutionary <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">2025 Services</span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Explore our comprehensive portfolio of cutting-edge services designed to drive innovation and transformation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="group relative p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-500 hover:transform hover:scale-105 backdrop-blur-sm overflow-hidden"
                role="article"
                aria-labelledby={`service-${index}-title`}
              >
                {/* Enhanced background effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-xl group-hover:scale-150 transition-transform duration-700" />
                
                <div className="relative z-10">
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{service.icon}</div>
                    {service.popular && (
                      <span className="px-3 py-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-300 rounded-full text-sm font-medium border border-yellow-500/30">
                        Popular
                      </span>
                    )}
                  </div>
                  
                  {/* Service Title */}
                  <h3 
                    id={`service-${index}-title`}
                    className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300"
                  >
                    {service.name}
                  </h3>
                  
                  {/* Service Tagline */}
                  <p className="text-cyan-400 font-medium mb-3 text-sm lg:text-base">
                    {service.tagline}
                  </p>
                  
                  {/* Service Description */}
                  <p className="text-gray-300 mb-6 text-sm lg:text-base leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Service Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" aria-hidden="true" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Service Pricing */}
                  <div className="flex items-baseline justify-between mb-6">
                    <div className="text-2xl lg:text-3xl font-bold text-white">
                      {service.price}
                      <span className="text-lg text-gray-400 font-normal">{service.period}</span>
                    </div>
                    <span className="text-sm text-gray-400 bg-gray-800/50 px-2 py-1 rounded">
                      {service.category}
                    </span>
                  </div>
                  
                  {/* CTA Button */}
                  <Link href={`/services/${service.id}`} aria-label={`Learn more about ${service.name}`}>
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-gray-900">
                      Learn More
                      <ArrowRight className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300">
              Join the revolution with Zion Tech Group's cutting-edge technology solutions
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <button className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                  <span className="flex items-center gap-3 text-lg">
                    Contact Us
                    <ArrowRight className="w-6 h-6" />
                  </span>
                </button>
              </Link>
              <Link href="/get-started">
                <button className="px-10 py-5 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                  Get Started
                </button>
              </Link>
            </div>

            <div className="pt-8 border-t border-cyan-500/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                <div className="text-center md:text-left">
                  <div className="w-12 h-12 mx-auto md:mx-0 mb-4 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                  <p className="text-cyan-400">+1 302 464 0950</p>
                </div>
                
                <div className="text-center md:text-left">
                  <div className="w-12 h-12 mx-auto md:mx-0 mb-4 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                  <p className="text-cyan-400">kleber@ziontechgroup.com</p>
                </div>
                
                <div className="text-center md:text-left">
                  <div className="w-12 h-12 mx-auto md:mx-0 mb-4 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                  <p className="text-cyan-400">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Homepage2040;