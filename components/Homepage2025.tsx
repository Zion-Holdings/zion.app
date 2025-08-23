import React, { useState, useEffect } from 'react';
import Layout from './layout/Layout';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Brain, Atom, Shield, Search, MessageCircle, Phone, Mail, Globe, Award, Users, Rocket
} from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

/* eslint-disable no-undef */
const Homepage2025: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [showFloatingActions, setShowFloatingActions] = useState(false);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animation logic can be added here
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Show floating actions after scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingActions(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isLoading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center bg-black">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto mb-6 animate-pulse"></div>
            <h2 className="text-2xl font-bold text-white mb-2">Loading Zion Tech Group</h2>
            <p className="text-gray-400">Preparing the future of technology...</p>
          </motion.div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Theme Toggle - Fixed Position */}
      <div className="fixed top-24 right-6 z-50">
        <ThemeToggle />
      </div>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 left-20 w-32 h-32 border border-cyan-500/20 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-40 right-32 w-24 h-24 border border-purple-500/20 rounded-full"
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-32 left-1/4 w-20 h-20 border border-blue-500/20 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 right-1/3 w-28 h-28 border border-green-500/20 rounded-full"
          />
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          {/* Company Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full px-4 py-2 mb-8 backdrop-blur-sm"
          >
            <Award className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-semibold text-sm">Innovation Leader 2025</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            The Future of
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Technology
            </span>
            is Here
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Zion Tech Group delivers cutting-edge AI, quantum computing, and space technology solutions that transform businesses and drive innovation.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative max-w-2xl mx-auto mb-8"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
              <input
                type="text"
                placeholder="Search our services, solutions, or expertise..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-6 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300">
                Search
              </button>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/demo"
              className="border border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors transition-all duration-300 backdrop-blur-md hover:bg-white/10"
            >
              Request Demo
            </Link>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            <motion.div 
              className="text-center group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors">500+</div>
              <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">Projects Delivered</div>
              <div className="text-xs text-cyan-400/60 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Global Success Stories</div>
            </motion.div>
            <motion.div 
              className="text-center group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2 group-hover:text-purple-300 transition-colors">50+</div>
              <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">AI Solutions</div>
              <div className="text-xs text-purple-400/60 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Cutting-Edge AI</div>
            </motion.div>
            <motion.div 
              className="text-center group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors">25+</div>
              <div className="text-gray-400 text-sm group-hover:text-blue-300 transition-colors">Quantum Services</div>
              <div className="text-xs text-blue-400/60 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Quantum Innovation</div>
            </motion.div>
            <motion.div 
              className="text-center group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2 group-hover:text-green-300 transition-colors">99.9%</div>
              <div className="text-gray-400 text-sm group-hover:text-green-300 transition-colors">Uptime SLA</div>
              <div className="text-xs text-green-400/60 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Reliable Service</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
              <p className="text-gray-400">Bank-grade security protocols and compliance standards</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Global Reach</h3>
              <p className="text-gray-400">Serving clients across 25+ countries worldwide</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Proven Results</h3>
              <p className="text-gray-400">Track record of successful transformations and ROI</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section id="services" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From AI consciousness evolution to quantum space technology, we're building the future today.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/20 rounded-2xl p-8 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300 group hover:scale-105"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI Consciousness Evolution</h3>
              <p className="text-gray-300 mb-6">
                Advanced AI systems that evolve and adapt, pushing the boundaries of machine intelligence.
              </p>
              <Link
                href="/ai-services"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1"
              >
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>

            {/* Quantum Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20 rounded-2xl p-8 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300 group hover:scale-105"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Atom className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Quantum Computing</h3>
              <p className="text-gray-300 mb-6">
                Next-generation quantum systems solving complex problems beyond classical computing limits.
              </p>
              <Link
                href="/quantum-services"
                className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors group-hover:translate-x-1"
              >
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>

            {/* Space Technology */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border border-blue-500/20 rounded-2xl p-8 backdrop-blur-sm hover:border-blue-500/40 transition-all duration-300 group hover:scale-105"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Space Technology</h3>
              <p className="text-gray-300 mb-6">
                Revolutionary space solutions from satellite networks to interplanetary infrastructure.
              </p>
              <Link
                href="/space-technology"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group-hover:translate-x-1"
              >
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Performance & Innovation */}
      <section id="performance" className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Performance & Innovation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our commitment to excellence drives every solution we deliver.
            </p>
          </motion.div>

          {/* Performance Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-gradient-to-br from-cyan-900/20 to-transparent border border-cyan-500/20 rounded-xl"
            >
              <div className="text-4xl font-bold text-cyan-400 mb-2">10x</div>
              <div className="text-gray-400">Performance Improvement</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/20 rounded-xl"
            >
              <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-400">Support Availability</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-gradient-to-br from-blue-900/20 to-transparent border border-blue-500/20 rounded-xl"
            >
              <div className="text-4xl font-bold text-blue-400 mb-2">100%</div>
              <div className="text-gray-400">Client Satisfaction</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-gradient-to-br from-green-900/20 to-transparent border border-green-500/20 rounded-xl"
            >
              <div className="text-4xl font-bold text-green-400 mb-2">50+</div>
              <div className="text-gray-400">Patents Filed</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Floating Action Buttons */}
      <AnimatePresence>
        {showFloatingActions && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 flex flex-col space-y-3 z-40"
          >
            <motion.a
              href="tel:+1-555-0123"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
              title="Call Us"
            >
              <Phone className="w-6 h-6" />
            </motion.a>
            
            <motion.a
              href="mailto:contact@ziontechgroup.com"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
              title="Email Us"
            >
              <Mail className="w-6 h-6" />
            </motion.a>
            
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
              title="Contact Form"
            >
              <MessageCircle className="w-6 h-6" />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Homepage2025;