import React, { Suspense, lazy, useState, useEffect } from 'react';
import Layout from './layout/Layout';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Star, 
  Brain, Atom, Shield, Zap, TrendingUp, Globe,
  Rocket, Target, Users, Cpu, Eye, Network,
  Car, Search, TestTube, Globe as PlanetIcon, Lock, Palette,
  FileText, BarChart3, Heart, Truck, ShieldCheck,
  Sparkles, Infinity as InfinityIcon, Zap as Lightning
} from 'lucide-react';

// Import new service data
import { innovativeMicroSaasServices2025V2 } from '../data/2025-innovative-micro-saas-expansion-v2';
import { emergingTechServices2025V2 } from '../data/2025-emerging-tech-services-v2';

// Lazy load heavy components for better performance
const LazyServiceCard = lazy(() => import('./ui/UltraFuturisticServiceCard2026'));

const Homepage2040: React.FC = () => {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % innovativeMicroSaasServices2025V2.length);
    }, 5000);
    return () => clearInterval(interval);
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

  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: -1,
        ease: "easeInOut" as const
      }
    }
  };

  const statsData = [
    {
      number: "100+",
      label: "Innovative Services",
      description: "Cutting-edge solutions",
      icon: Sparkles,
      color: "text-cyan-400",
      hoverColor: "group-hover:text-cyan-300"
    },
    {
      number: "∞",
      label: "Future Possibilities",
      description: "Unlimited potential",
      icon: InfinityIcon,
      color: "text-purple-400",
      hoverColor: "group-hover:text-purple-300"
    },
    {
      number: "24/7",
      label: "Autonomous Operations",
      description: "Always available",
      icon: Cpu,
      color: "text-blue-400",
      hoverColor: "group-hover:text-blue-300"
    },
    {
      number: "10x",
      label: "Performance Boost",
      description: "Quantum enhancement",
      icon: Lightning,
      color: "text-green-400",
      hoverColor: "group-hover:text-green-300"
    }
  ];

  // Combine all services for showcase
  const allServices = [...innovativeMicroSaasServices2025V2, ...emergingTechServices2025V2];
  const featuredServices = allServices.filter(service => service.popular).slice(0, 6);

  const serviceCategories = [
    {
      name: "AI & Machine Learning",
      icon: Brain,
      count: allServices.filter(s => s.category.includes('AI')).length,
      color: "from-pink-500 to-rose-600"
    },
    {
      name: "Quantum Technology",
      icon: Atom,
      count: allServices.filter(s => s.category.includes('Quantum')).length,
      color: "from-blue-500 to-cyan-600"
    },
    {
      name: "Emerging Tech",
      icon: Rocket,
      count: allServices.filter(s => s.category.includes('Emerging') || s.category.includes('Space')).length,
      color: "from-purple-500 to-indigo-600"
    },
    {
      name: "Cybersecurity",
      icon: Shield,
      count: allServices.filter(s => s.category.includes('Security') || s.category.includes('Cyber')).length,
      color: "from-green-500 to-emerald-600"
    }
  ];

  return (
    <Layout>
      {/* Main Content */}
      <main className="relative z-10" id="main">
        {/* Hero Section with Enhanced Background */}
        <section 
          className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
          aria-labelledby="hero-heading"
        >
          {/* Enhanced Futuristic Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Animated geometric shapes */}
            <motion.div 
              variants={floatingVariants}
              animate="float"
              className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg"
            ></motion.div>
            <motion.div 
              variants={floatingVariants}
              animate="float"
              style={{ animationDelay: '1s' }}
              className="absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full"
            ></motion.div>
            <motion.div 
              variants={floatingVariants}
              animate="float"
              style={{ animationDelay: '2s' }}
              className="absolute bottom-32 left-32 w-40 h-40 border border-pink-400/20 transform rotate-45"
            ></motion.div>
            
            {/* Quantum particle effects */}
            <div className="absolute inset-0">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: Math.random() * 3
                  }}
                />
              ))}
            </div>
          </div>
          
          <div className="text-center max-w-6xl mx-auto relative z-10">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              {/* Enhanced Company Badge */}
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-lg font-medium backdrop-blur-sm"
                role="banner"
                aria-label="Company recognition"
              >
                <Star className="w-5 h-5 animate-pulse" aria-hidden="true" />
                <span>Innovation Leader 2040</span>
                <Sparkles className="w-5 h-5 animate-pulse" aria-hidden="true" />
              </motion.div>
              
              <motion.h1 
                variants={itemVariants}
                id="hero-heading"
                className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent leading-tight"
              >
                Zion Tech Group
              </motion.h1>
              
              <motion.p 
                variants={itemVariants}
                className="text-2xl md:text-3xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed"
              >
                Pioneering the future of technology with revolutionary AI, quantum computing, and autonomous solutions that transform businesses worldwide
              </motion.p>
              
              {/* Enhanced CTA Section */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
              >
                <Link href="/get-started" aria-label="Get started with our services">
                  <button className="group px-10 py-5 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold text-lg rounded-xl hover:from-cyan-600 hover:via-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-cyan-500/25 focus:outline-none focus:ring-4 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-black">
                    <span className="flex items-center gap-3">
                      Get Started
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" aria-hidden="true" />
                    </span>
                  </button>
                </Link>
                <Link href="/services" aria-label="Learn more about our services">
                  <button className="px-10 py-5 border-3 border-cyan-400 text-cyan-400 font-bold text-lg rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-black">
                    Explore Services
                  </button>
                </Link>
                <Link href="/pricing" aria-label="View our pricing">
                  <button className="px-10 py-5 border-3 border-purple-400 text-purple-400 font-bold text-lg rounded-xl hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300 focus:ring-offset-2 focus:ring-offset-black">
                    View Pricing
                  </button>
                </Link>
              </motion.div>
              
              {/* Enhanced Trust Indicators */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap justify-center gap-8 text-sm text-gray-400"
              >
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-green-400" />
                  <span>SOC 2 Type II Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-blue-400" />
                  <span>Global Infrastructure</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-purple-400" />
                  <span>10,000+ Happy Customers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span>4.9/5 Rating</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Stats Section */}
        <section className="py-20 px-4 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {statsData.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="group text-center p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="w-8 h-8 text-white" aria-hidden="true" />
                  </div>
                  <div className={`text-4xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.number}
                  </div>
                  <div className="text-xl font-semibold text-white mb-2">{stat.label}</div>
                  <div className="text-gray-400">{stat.description}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Enhanced Service Categories */}
        <section className="py-20 px-4 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.h2 
                variants={itemVariants}
                className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent"
              >
                Revolutionary Service Categories
              </motion.h2>
              <motion.p 
                variants={itemVariants}
                className="text-xl text-gray-300 max-w-3xl mx-auto"
              >
                Explore our cutting-edge technology solutions across multiple domains
              </motion.p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  variants={itemVariants}
                  className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                >
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  <div className="relative z-10">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${category.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="w-8 h-8 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{category.name}</h3>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">{category.count}</div>
                    <div className="text-gray-400">Innovative Services</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Enhanced Featured Services Section */}
        <section className="py-20 px-4 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.h2 
                variants={itemVariants}
                className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent"
              >
                Featured Revolutionary Services
              </motion.h2>
              <motion.p 
                variants={itemVariants}
                className="text-xl text-gray-300 max-w-3xl mx-auto"
              >
                Discover our most popular and innovative technology solutions
              </motion.p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {featuredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="text-4xl">{service.icon}</div>
                    {service.popular && (
                      <div className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-sm font-bold rounded-full">
                        Popular
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">{service.name}</h3>
                  <p className="text-gray-400 mb-4">{service.tagline}</p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-3xl font-bold text-cyan-400">
                      ${service.price.monthly}
                      <span className="text-lg text-gray-400">/month</span>
                    </div>
                    <div className="text-sm text-gray-400">
                      {service.rating} ⭐ ({service.reviews})
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-gray-300">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link href={service.link}>
                    <button className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                      Learn More
                    </button>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-20 px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.h2 
                variants={itemVariants}
                className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent"
              >
                Ready to Transform Your Business?
              </motion.h2>
              <motion.p 
                variants={itemVariants}
                className="text-xl text-gray-300 max-w-2xl mx-auto"
              >
                Join thousands of companies already leveraging our revolutionary technology solutions
              </motion.p>
              
              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-6 justify-center"
              >
                <Link href="/contact" aria-label="Contact us">
                  <button className="px-12 py-5 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold text-lg rounded-xl hover:from-cyan-600 hover:via-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-cyan-500/25">
                    Contact Us Today
                  </button>
                </Link>
                <Link href="/demo" aria-label="Request a demo">
                  <button className="px-12 py-5 border-3 border-cyan-400 text-cyan-400 font-bold text-lg rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                    Request Demo
                  </button>
                </Link>
              </motion.div>
              
              <motion.div
                variants={itemVariants}
                className="flex items-center justify-center gap-8 text-sm text-gray-400"
              >
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-400" />
                  <span>Enterprise Security</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-yellow-400" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-blue-400" />
                  <span>Proven Results</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Homepage2040;