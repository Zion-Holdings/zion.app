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
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 1.5, ease: "easeOut" as const }
    }
  };

  // Color mapping for dynamic classes
  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      cyan: 'text-cyan-400',
      blue: 'text-blue-400',
      purple: 'text-purple-400',
      emerald: 'text-emerald-400'
    };
    return colorMap[color] || 'text-cyan-400';
  };

  if (isLoading) {
    return <LoadingFallback />;
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
          
          {/* Floating Elements */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl"
          />
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 3, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-20 left-1/4 w-20 h-20 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-xl"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium backdrop-blur-sm">
                <Zap className="w-4 h-4 mr-2" />
                Welcome to the Future of Technology
              </div>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
              <br />
              <span className="text-white">2040</span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-5xl mx-auto leading-relaxed">
              Pioneering the future with <span className="text-cyan-400 font-semibold">quantum computing</span>, 
              <span className="text-blue-400 font-semibold"> AI-powered solutions</span>, and 
              <span className="text-purple-400 font-semibold"> cutting-edge micro SaaS services</span> that transform businesses and unlock human potential
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
              <div className="flex items-center space-x-3 text-purple-400">
                <MapPin className="w-5 h-5" />
                <span>364 E Main St STE 1008 Middletown DE 19709</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
              >
                Explore Our Services
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-full font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 text-lg"
              >
                Watch Demo
                <Play className="w-4 h-4 ml-2 inline" />
              </motion.button>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">500+</div>
                <div className="text-gray-400 text-sm">Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">10K+</div>
                <div className="text-gray-400 text-sm">Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">99.9%</div>
                <div className="text-gray-400 text-sm">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">24/7</div>
                <div className="text-gray-400 text-sm">Support</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 text-cyan-400" />
        </motion.div>
      </section>

      {/* Featured Services Section */}
      <section id="featured-services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Innovative Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our most cutting-edge solutions that are shaping the future of technology
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Featured Service 1 */}
            <motion.div
              variants={fadeInUp}
              className="group relative bg-gray-800/50 border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-500/50 hover:bg-gray-800/70 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                Popular
              </div>
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-indigo-700 rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                🧠
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                Quantum AI Neural Interface
              </h3>
              <p className="text-gray-300 mb-4">
                Direct brain-computer interface powered by quantum AI
              </p>
              <div className="text-2xl font-bold text-cyan-400 mb-4">
                $15,999<span className="text-sm text-gray-400">/month</span>
              </div>
              <Link href="/innovative-2040-futuristic-services-showcase">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                >
                  Learn More
                </motion.button>
              </Link>
            </motion.div>

            {/* Featured Service 2 */}
            <motion.div
              variants={fadeInUp}
              className="group relative bg-gray-800/50 border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-500/50 hover:bg-gray-800/70 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                🌟
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                Holographic Quantum Workspace
              </h3>
              <p className="text-gray-300 mb-4">
                3D holographic collaboration powered by quantum computing
              </p>
              <div className="text-2xl font-bold text-cyan-400 mb-4">
                $8,999<span className="text-sm text-gray-400">/month</span>
              </div>
              <Link href="/innovative-2040-futuristic-services-showcase">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                >
                  Learn More
                </motion.button>
              </Link>
            </motion.div>

            {/* Featured Service 3 */}
            <motion.div
              variants={fadeInUp}
              className="group relative bg-gray-800/50 border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-500/50 hover:bg-gray-800/70 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-green-700 rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                ⏰
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                AI Time Series Prediction
              </h3>
              <p className="text-gray-300 mb-4">
                Predict the future with quantum-enhanced AI algorithms
              </p>
              <div className="text-2xl font-bold text-cyan-400 mb-4">
                $12,999<span className="text-sm text-gray-400">/month</span>
              </div>
              <Link href="/innovative-2040-futuristic-services-showcase">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                >
                  Learn More
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/innovative-2040-futuristic-services-showcase">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-full font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 text-lg"
              >
                View All Services
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
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

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">AI-First Approach</h3>
              <p className="text-gray-400">Every solution is powered by advanced artificial intelligence and machine learning</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Enterprise Security</h3>
              <p className="text-gray-400">Bank-grade security with quantum-resistant encryption and compliance standards</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Rocket className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Innovation Leader</h3>
              <p className="text-gray-400">First-to-market solutions with quantum computing and cutting-edge technology</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Expert Support</h3>
              <p className="text-gray-400">24/7 dedicated support with industry experts and comprehensive documentation</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-800/50 to-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of companies already leveraging our innovative solutions to stay ahead of the competition
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <p className="text-cyan-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <p className="text-blue-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-purple-400">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
              >
                Schedule a Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-full font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 text-lg"
              >
                Download Brochure
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Homepage2040;