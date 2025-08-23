import React, { useState, useEffect } from 'react';
import Layout from './layout/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Play, Star, Users, Award, TrendingUp, Brain, Shield, Rocket, 
  Loader2, ChevronDown, Zap, Globe, Lock, Cpu, Database, Cloud, Palette, Heart,
  Phone, Mail, MapPin, Search, Grid, List
} from 'lucide-react';
import Link from 'next/link';

// Import our new innovative services
import { innovative2040FuturisticServices } from '../data/innovative-2040-futuristic-services';
import { innovative2040ITServices } from '../data/innovative-2040-it-services';

// Loading fallback component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-900">
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="relative">
        <Loader2 className="w-16 h-16 text-cyan-400 animate-spin mx-auto mb-4" />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
      </div>
      <p className="text-xl text-gray-300 mb-2">Loading Zion Tech Group 2040...</p>
      <p className="text-sm text-gray-500">Preparing your futuristic digital transformation journey</p>
    </motion.div>
  </div>
);

const Homepage2040: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    // Simulate content loading with better timing
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsVisible(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // Intersection Observer for better performance
  useEffect(() => {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new (window as any).IntersectionObserver(
        (entries: any[]) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        { threshold: 0.3, rootMargin: '-100px' }
      );

      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => observer.observe(section));

      return () => observer.disconnect();
    }
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const backgroundVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 1.2, ease: "easeOut" }
  };

  const getColorClasses = (index: number) => {
    const colors = [
      'from-cyan-400 to-blue-500',
      'from-purple-400 to-pink-500',
      'from-emerald-400 to-teal-500',
      'from-orange-400 to-red-500',
      'from-indigo-400 to-purple-500',
      'from-yellow-400 to-orange-500'
    ];
    return colors[index % colors.length];
  };

  if (isLoading) {
    return <LoadingFallback />;
  }

  return (
    <Layout>
      <AnimatePresence>
        {isVisible && (
          <main className="relative z-10">
            {/* Hero Section */}
            <section 
              id="hero"
              className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
              aria-labelledby="hero-heading"
            >
              {/* Enhanced Animated Background */}
              <motion.div 
                className="absolute inset-0 -z-10"
                variants={backgroundVariants}
                initial="initial"
                animate="animate"
              >
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
                        repeat: Infinity,
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

                {/* SVG Pattern Background */}
                <div className="absolute inset-0 bg-gray-800/20"></div>
              </motion.div>

              {/* Hero Content */}
              <div className="relative z-10 max-w-7xl mx-auto text-center">
                <motion.div
                  variants={fadeInUp}
                  initial="initial"
                  animate="animate"
                  className="space-y-8"
                >
                  {/* Main Heading */}
                  <div className="space-y-6">
                    <motion.h1 
                      className="text-5xl md:text-7xl font-bold"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                        Zion Tech Group
                      </span>
                      <br />
                      <span className="text-white">2040</span>
                    </motion.h1>
                    
                    <motion.p 
                      className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    >
                      Pioneering the future of technology with innovative AI, quantum computing, 
                      and cutting-edge micro SaaS solutions that transform businesses and unlock human potential.
                    </motion.p>
                  </div>

                  {/* Contact Information */}
                  <motion.div 
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <div className="flex items-center space-x-3 text-cyan-400">
                      <Phone className="w-5 h-5" />
                      <span>+1 302 464 0950</span>
                    </div>
                    <div className="flex items-center space-x-3 text-blue-400">
                      <Mail className="w-5 h-5" />
                      <span>kleber@ziontechgroup.com</span>
                    </div>
                    <div className="flex items-center space-x-3 text-purple-400">
                      <MapPin className="w-5 h-5" />
                      <span>364 E Main St STE 1008 Middletown DE 19709</span>
                    </div>
                  </motion.div>

                  {/* CTA Buttons */}
                  <motion.div 
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    <button 
                      className="px-10 py-5 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-2xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 text-lg shadow-2xl hover:shadow-cyan-400/25"
                      onClick={() => window.location.href = '/innovative-2040-futuristic-services-showcase'}
                      aria-label="Explore our innovative 2040 services"
                    >
                      Explore 2040 Services
                      <ArrowRight className="w-6 h-6 ml-3 inline" />
                    </button>
                    
                    <button 
                      className="px-10 py-5 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-2xl hover:bg-cyan-400 hover:text-black transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 text-lg"
                      onClick={() => window.location.href = '/services'}
                      aria-label="Explore our revolutionary services"
                    >
                      Explore Services
                      <Play className="w-6 h-6 ml-3 inline" />
                    </button>
                  </motion.div>
                </motion.div>
              </div>

              {/* Scroll Indicator */}
              <motion.div 
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-cyan-400"
                >
                  <ChevronDown className="w-8 h-8" />
                </motion.div>
              </motion.div>
            </section>

            {/* Featured Services Section */}
            <section id="featured-services" className="py-20 px-4 bg-gray-900/50">
              <div className="max-w-7xl mx-auto">
                <motion.div
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">2040 Services</span>
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Discover our most innovative and cutting-edge technology solutions designed for the future
                  </p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {innovative2040FuturisticServices.slice(0, 6).map((service, index) => (
                    <motion.div
                      key={service.id}
                      variants={fadeInUp}
                      className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/25"
                    >
                      {/* Service Icon */}
                      <div className={`w-16 h-16 bg-gradient-to-r ${getColorClasses(index)} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <Rocket className="w-8 h-8 text-white" />
                      </div>

                      {/* Service Content */}
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                        {service.name}
                      </h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {service.tagline}
                      </p>

                      {/* Service Features */}
                      <div className="space-y-2 mb-6">
                        {service.features.slice(0, 3).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Service Price */}
                      <div className="mb-6">
                        <span className="text-2xl font-bold text-cyan-400">
                          {service.price}
                        </span>
                      </div>

                      {/* CTA Button */}
                      <Link 
                        href={service.link}
                        className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 group-hover:shadow-lg group-hover:shadow-cyan-400/25"
                      >
                        Learn More
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>

                {/* View All Services Button */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-center mt-12"
                >
                  <Link 
                    href="/innovative-2040-futuristic-services-showcase"
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-2xl hover:bg-cyan-400 hover:text-black transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 text-lg"
                  >
                    View All 2040 Services
                    <ArrowRight className="w-6 h-6 ml-3" />
                  </Link>
                </motion.div>
              </div>
            </section>

            {/* Why Choose Us Section */}
            <section id="why-choose-us" className="py-20 px-4 bg-gray-900">
              <div className="max-w-7xl mx-auto">
                <motion.div
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Why Choose <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Zion Tech Group</span>
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    We combine cutting-edge technology with proven expertise to deliver solutions that drive real business transformation
                  </p>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {[
                    {
                      icon: Brain,
                      title: "AI-First Approach",
                      description: "Every solution is built with artificial intelligence at its core, ensuring maximum efficiency and innovation"
                    },
                    {
                      icon: Shield,
                      title: "Enterprise Security",
                      description: "Bank-grade security protocols and compliance standards protect your business and data"
                    },
                    {
                      icon: Zap,
                      title: "Lightning Fast",
                      description: "Optimized performance and rapid deployment ensure your solutions are always ahead of the curve"
                    },
                    {
                      icon: Users,
                      title: "Expert Team",
                      description: "Our specialists bring decades of combined experience in cutting-edge technology implementation"
                    },
                    {
                      icon: Globe,
                      title: "Global Reach",
                      description: "24/7 support and worldwide deployment capabilities to serve your business anywhere"
                    },
                    {
                      icon: Heart,
                      title: "Customer Success",
                      description: "We're committed to your success with ongoing support, training, and optimization"
                    }
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="group text-center p-6 hover:bg-gray-800/50 rounded-2xl transition-all duration-300"
                    >
                      <div className={`w-20 h-20 bg-gradient-to-r ${getColorClasses(index)} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <feature.icon className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {feature.description}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </section>

            {/* CTA Section */}
            <section id="cta" className="py-20 px-4 bg-gradient-to-r from-gray-900 to-blue-900/20">
              <div className="max-w-4xl mx-auto text-center">
                <motion.div
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="space-y-8"
                >
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Ready to Transform Your <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Business?</span>
                  </h2>
                  <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                    Join thousands of businesses already leveraging our innovative 2040 technology solutions. 
                    Start your digital transformation journey today.
                  </p>
                  
                  {/* Contact Information */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
                    <div className="flex items-center space-x-3 text-cyan-400">
                      <Phone className="w-5 h-5" />
                      <span>+1 302 464 0950</span>
                    </div>
                    <div className="flex items-center space-x-3 text-blue-400">
                      <Mail className="w-5 h-5" />
                      <span>kleber@ziontechgroup.com</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <button 
                      className="px-10 py-5 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-2xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 text-lg shadow-2xl hover:shadow-cyan-400/25"
                      onClick={() => window.location.href = '/contact'}
                    >
                      Get Started Today
                      <ArrowRight className="w-6 h-6 ml-3 inline" />
                    </button>
                    
                    <button 
                      className="px-10 py-5 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-2xl hover:bg-cyan-400 hover:text-black transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 text-lg"
                      onClick={() => window.location.href = '/innovative-2040-futuristic-services-showcase'}
                    >
                      Explore Services
                      <Search className="w-6 h-6 ml-3 inline" />
                    </button>
                  </div>
                </motion.div>
              </div>
            </section>
          </main>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Homepage2040;