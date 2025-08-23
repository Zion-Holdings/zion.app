import React, { Suspense, lazy } from 'react';
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
        className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
        aria-labelledby="hero-heading"
      >
        {/* Background Elements with reduced animation for better performance */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-32 w-40 h-40 border border-pink-400/20 transform rotate-45 animate-pulse delay-2000"></div>
        </div>
        
        <div className="text-center max-w-6xl mx-auto relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Company Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-medium"
              role="banner"
              aria-label="Company recognition"
            >
              <Star className="w-5 h-5" aria-hidden="true" />
              <span>Innovation Leader 2025</span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              id="hero-heading"
              className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            >
              Zion Tech Group
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-2xl md:text-3xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed"
            >
              Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide
            </motion.p>
            
            {/* Enhanced CTA Section */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
            >
              <Link href="/get-started" aria-label="Get started with our services">
                <button className="group px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-black">
                  <span className="flex items-center gap-3 text-lg">
                    Get Started
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </span>
                </button>
              </Link>
              <Link href="/services" aria-label="Learn more about our services">
                <button className="px-10 py-5 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-black text-lg">
                  Explore Services
                </button>
              </Link>
              <Link href="/innovative-2040-futuristic-services-showcase" aria-label="View our 2040 services showcase">
                <button className="px-10 py-5 border-2 border-purple-400 text-purple-400 font-semibold rounded-xl hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2 focus:ring-offset-black text-lg">
                  2040 Services Showcase
                </button>
              </Link>
            </motion.div>
            
            {/* Trust Indicators */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center items-center gap-8 text-gray-400"
            >
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>500+ Enterprise Clients</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-yellow-400" />
                <span>Industry Leader 2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-blue-400" />
                <span>24/7 Support</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-black/50 to-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary Technology Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Delivering cutting-edge AI, quantum computing, and autonomous solutions that drive business transformation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statsData.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group text-center p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 flex items-center justify-center group-hover:border-cyan-400/50 transition-all duration-300`}>
                  <stat.icon className={`w-8 h-8 ${stat.color} ${stat.hoverColor}`} />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-cyan-400 mb-2">{stat.label}</div>
                <div className="text-gray-400">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our extensive portfolio of revolutionary technology solutions across multiple domains
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link href={category.href}>
                  <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:transform hover:scale-105 h-full">
                    <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${category.color} bg-opacity-20 border border-cyan-400/30 flex items-center justify-center group-hover:border-cyan-400/50 transition-all duration-300`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-gray-300 mb-6">
                      {category.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-cyan-400">
                        {category.count}+
                      </span>
                      <span className="text-sm text-gray-400">Services</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-black/50 to-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured Revolutionary Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our most innovative and cutting-edge technology solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/services/${service.id}`}>
                  <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:transform hover:scale-105 h-full">
                    <div className="flex items-start justify-between mb-6">
                      <div className="text-4xl">{service.icon}</div>
                      {service.popular && (
                        <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium rounded-full">
                          Popular
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {service.name}
                    </h3>
                    
                    <p className="text-gray-300 mb-4">
                      {service.tagline}
                    </p>
                    
                    <p className="text-gray-400 mb-6">
                      {service.description}
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-cyan-400">
                          {service.price}
                        </span>
                        <span className="text-gray-400">{service.period}</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-sm rounded-full border border-cyan-400/20"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link href="/services">
              <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-black">
                <span className="flex items-center gap-2">
                  View All Services
                  <ArrowRight className="w-5 h-5" />
                </span>
              </button>
            </Link>
          </motion.div>
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