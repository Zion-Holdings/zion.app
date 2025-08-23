import React, { useEffect, useState, useCallback } from 'react';
import Layout from './layout/Layout';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Play, Users, TrendingUp, Brain, Shield, Rocket, Globe, Lock, Cpu, Database, Cloud, BarChart3,
  Atom, Target, Zap, Infinity, Sparkles, Star, Eye, Heart, Code, Palette, Layers, CheckCircle,
  DollarSign, Clock, Award, Shield as ShieldIcon, Zap as ZapIcon, Globe as GlobeIcon, Phone
} from 'lucide-react';
import Link from 'next/link';

// Import our new revolutionary services
import { revolutionary2040FuturisticServices } from '../data/revolutionary-2040-futuristic-services';
import { revolutionary2041AdvancedServices } from '../data/revolutionary-2041-advanced-services';
import { realPracticalMicroSaas2025 } from '../data/real-practical-micro-saas-2025';
import { advancedITEnterpriseServices2025 } from '../data/advanced-it-enterprise-services-2025';
import { specializedAIServices2025 } from '../data/specialized-ai-services-2025';

const Homepage2025: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  
  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate featured services
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % 3);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  // Combine all services
  const allServices = [
    ...realPracticalMicroSaas2025,
    ...advancedITEnterpriseServices2025,
    ...specializedAIServices2025,
    ...revolutionary2040FuturisticServices,
    ...revolutionary2041AdvancedServices
  ];

  // Get featured services for rotation
  const featuredServices = allServices.slice(0, 6);

  const features = [
    { icon: Brain, title: "AI-Powered Solutions", description: "Advanced AI and machine learning for business transformation", href: "/ai-services", color: "from-purple-500 to-pink-500" },
    { icon: Atom, title: "Quantum Technology", description: "Next-generation quantum computing and security", href: "/quantum-services", color: "from-blue-500 to-cyan-500" },
    { icon: Shield, title: "Enterprise Security", description: "Comprehensive cybersecurity and compliance automation", href: "/enterprise-it", color: "from-red-500 to-orange-500" },
    { icon: Rocket, title: "Micro SAAS", description: "Professional micro SAAS solutions for modern businesses", href: "/services", color: "from-emerald-500 to-teal-500" },
    { icon: Cpu, title: "IT Automation", description: "Intelligent IT automation and DevOps solutions", href: "/enterprise-it", color: "from-indigo-500 to-purple-500" },
    { icon: Database, title: "Data Analytics", description: "Advanced analytics and business intelligence", href: "/ai-services", color: "from-yellow-500 to-orange-500" }
  ];

  const stats = [
    { number: "1000+", label: "Professional Services", icon: Star },
    { number: "99.99%", label: "Uptime Guarantee", icon: TrendingUp },
    { number: "24/7", label: "AI Support Available", icon: Brain },
    { number: "100+", label: "Countries Served", icon: Globe }
  ];

  const benefits = [
    { icon: Zap, title: "10x Faster Deployment", description: "Automate processes and deploy solutions in record time" },
    { icon: Shield, title: "Enterprise Security", description: "Bank-level security with comprehensive compliance" },
    { icon: TrendingUp, title: "Scalable Growth", description: "Solutions that grow with your business needs" },
    { icon: Users, title: "Expert Support", description: "24/7 technical support from industry experts" },
    { icon: DollarSign, title: "Cost Optimization", description: "Reduce operational costs by up to 60%" },
    { icon: Clock, title: "Time Savings", description: "Save hundreds of hours with intelligent automation" }
  ];

  const handleGetStarted = useCallback(() => {
    window.location.href = '/contact';
  }, []);

  const handleWatchDemo = useCallback(() => {
    window.location.href = '/services';
  }, []);

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <Layout>
      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section 
          className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
          aria-labelledby="hero-heading"
        >
          {/* Enhanced Animated Background */}
          <div className="absolute inset-0 -z-10">
            {/* Floating orbs */}
            <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
            
            {/* Animated particles */}
            <div className="absolute inset-0">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
                  animate={{
                    x: [0, 100, 0],
                    y: [0, -100, 0],
                    opacity: [0, 0.8, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 6 + i * 0.5,
                    repeat: Infinity as any,
                    delay: i * 0.3,
                    ease: "easeInOut"
                  }}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </div>

            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `
                  linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '100px 100px'
              }} />
            </div>
          </div>

          {/* Hero Content */}
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Revolutionizing Technology Since 2025
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                id="hero-heading"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
              >
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Future-Ready
                </span>
                <br />
                <span className="text-white">
                  Technology Solutions
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
              >
                Transform your business with cutting-edge AI, automation, and quantum technology solutions. 
                From micro SAAS to enterprise IT, we deliver innovation that drives growth.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <button
                  onClick={handleGetStarted}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  Get Started Today
                  <ArrowRight className="inline-block ml-2 w-5 h-5" />
                </button>
                <button
                  onClick={handleWatchDemo}
                  className="px-8 py-4 border border-cyan-500/50 hover:border-cyan-400 text-cyan-400 hover:text-white hover:bg-cyan-500/10 font-semibold rounded-lg text-lg transition-all duration-200 transform hover:scale-105"
                >
                  <Play className="inline-block mr-2 w-5 h-5" />
                  Explore Services
                </button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Comprehensive Technology Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From AI-powered automation to quantum computing, we provide the tools you need to stay ahead of the competition.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link href={feature.href} className="block">
                    <div className={`p-8 rounded-2xl bg-gradient-to-br ${feature.color} bg-opacity-10 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 group-hover:scale-105 h-full`}>
                      <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                      <div className="mt-6 flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-200">
                        <span className="text-sm font-medium">Learn More</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-transparent to-black/20 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We don't just provide technology solutions – we deliver transformative results that drive your business forward.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-10 h-10 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Services Section */}
        <section className="py-20 px-4 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our most popular and innovative solutions that are transforming businesses worldwide.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredServices.slice(0, 3).map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link href={service.slug} className="block">
                    <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 group-hover:scale-105 h-full">
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center">
                          <Brain className="w-8 h-8 text-cyan-400" />
                        </div>
                        <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-medium rounded-full">
                          {service.type}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-4">{service.name}</h3>
                      <p className="text-gray-300 leading-relaxed mb-6">{service.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="text-cyan-400 font-semibold">{service.pricing.starter}</div>
                        <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-200">
                          <span className="text-sm font-medium">Learn More</span>
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-4 border border-cyan-500/50 hover:border-cyan-400 text-cyan-400 hover:text-white hover:bg-cyan-500/10 font-semibold rounded-lg text-lg transition-all duration-200 transform hover:scale-105"
              >
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Join thousands of businesses that have already revolutionized their operations with our cutting-edge technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={handleGetStarted}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  Start Your Transformation
                  <ArrowRight className="inline-block ml-2 w-5 h-5" />
                </button>
                <a
                  href={`tel:${contactInfo.mobile}`}
                  className="px-8 py-4 border border-cyan-500/50 hover:border-cyan-400 text-cyan-400 hover:text-white hover:bg-cyan-500/10 font-semibold rounded-lg text-lg transition-all duration-200 transform hover:scale-105"
                >
                  <Phone className="inline-block mr-2 w-5 h-5" />
                  Call Us Now
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Homepage2025;