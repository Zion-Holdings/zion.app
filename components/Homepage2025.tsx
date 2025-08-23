import React, { useState, useEffect } from 'react';
import Layout from './layout/Layout';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Brain, Atom, Shield, Zap, Search, MessageCircle, Phone, Mail,
  Play, Sparkles, TrendingUp, Users, Globe
} from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import PerformanceOptimizer from './PerformanceOptimizer';

/* eslint-disable no-undef */
const Homepage2025: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [showFloatingActions, setShowFloatingActions] = useState(false);
  const [activeStat, setActiveStat] = useState(0);

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

    const sections = document.querySelectorAll('section');
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

  // Animate stats counter
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStat((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
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
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Enhanced Animated Background Elements */}
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
          
          {/* Floating particles */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/3 w-2 h-2 bg-cyan-400 rounded-full opacity-60"
          />
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-60"
          />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-blue-400 rounded-full opacity-60"
          />
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          {/* Enhanced Main Title with Interactive Elements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            >
              The Future of
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent relative">
                Technology
                <motion.span
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-2 -right-2"
                >
                  <Sparkles className="w-8 h-8 text-yellow-400" />
                </motion.span>
              </span>
              is Here
            </motion.h1>
            
            {/* Interactive subtitle with typing effect */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              Zion Tech Group delivers cutting-edge AI, quantum computing, and space technology solutions that transform businesses and drive innovation.
            </motion.p>
          </motion.div>

          {/* Enhanced Search Bar with Better UX */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative max-w-2xl mx-auto mb-8"
          >
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400 group-focus-within:text-cyan-400 transition-colors" />
              <input
                type="text"
                placeholder="Search our services, solutions, or expertise..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-6 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm transition-all duration-300 group-hover:bg-white/15 group-hover:border-white/30"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105">
                Search
              </button>
            </div>
            
            {/* Search suggestions */}
            {searchQuery.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-full left-0 right-0 mt-2 bg-gray-900/95 backdrop-blur-sm border border-gray-700 rounded-lg p-4 z-20"
              >
                <div className="text-sm text-gray-400 mb-2">Popular searches:</div>
                <div className="flex flex-wrap gap-2">
                  {['AI Services', 'Quantum Computing', 'Space Technology', 'Enterprise Solutions'].map((suggestion) => (
                    <button
                      key={suggestion}
                      className="px-3 py-1 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-full text-sm transition-colors"
                      onClick={() => setSearchQuery(suggestion)}
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link
              href="/contact"
              className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Get Started Today
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500"
                initial={{ x: '-100%' }}
                whileHover={{ x: '0%' }}
                transition={{ duration: 0.3 }}
              />
            </Link>
            <Link
              href="/demo"
              className="group border border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 backdrop-blur-md hover:bg-white/10 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Request Demo
                <Play className="inline-block ml-2 w-4 h-4 group-hover:scale-110 transition-transform" />
              </span>
            </Link>
          </motion.div>

          {/* Enhanced Quick Stats with Interactive Elements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {[
              { number: '500+', label: 'Projects Delivered', icon: TrendingUp, color: 'text-cyan-400' },
              { number: '50+', label: 'AI Solutions', icon: Brain, color: 'text-purple-400' },
              { number: '25+', label: 'Quantum Services', icon: Atom, color: 'text-blue-400' },
              { number: '99.9%', label: 'Uptime SLA', icon: Shield, color: 'text-green-400' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className={`text-center group cursor-pointer ${index === activeStat ? 'scale-110' : 'scale-100'} transition-transform duration-500`}
                whileHover={{ scale: 1.05 }}
                onClick={() => setActiveStat(index)}
              >
                <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2 flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm group-hover:text-white transition-colors">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* New: Company Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-400"
          >
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              <span>Global Reach</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>500+ Clients</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Enterprise Security</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Services Preview */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-4"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              From AI consciousness evolution to quantum space technology, we're building the future today.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4 text-sm"
            >
              <span className="px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-300">
                AI & Machine Learning
              </span>
              <span className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300">
                Quantum Computing
              </span>
              <span className="px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300">
                Space Technology
              </span>
              <span className="px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-300">
                Enterprise Solutions
              </span>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Enhanced AI Services Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="group bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/20 rounded-2xl p-8 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                  AI Consciousness Evolution
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Advanced AI systems that evolve and adapt, pushing the boundaries of machine intelligence with consciousness-like capabilities.
                </p>
                <div className="flex items-center justify-between">
                  <Link
                    href="/ai-services"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1 duration-300"
                  >
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                  <div className="text-xs text-gray-500 bg-gray-800/50 px-2 py-1 rounded">
                    New
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Enhanced Quantum Services Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20 rounded-2xl p-8 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Atom className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  Quantum Computing
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Next-generation quantum systems solving complex problems beyond classical computing limits with unprecedented speed and accuracy.
                </p>
                <div className="flex items-center justify-between">
                  <Link
                    href="/quantum-services"
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors group-hover:translate-x-1 duration-300"
                  >
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                  <div className="text-xs text-gray-500 bg-gray-800/50 px-2 py-1 rounded">
                    Featured
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Enhanced Space Technology Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="group bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border border-blue-500/20 rounded-2xl p-8 backdrop-blur-sm hover:border-blue-500/40 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                  Space Technology
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Revolutionary space solutions from satellite networks to interplanetary infrastructure, enabling humanity's expansion into space.
                </p>
                <div className="flex items-center justify-between">
                  <Link
                    href="/space-technology"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group-hover:translate-x-1 duration-300"
                  >
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                  <div className="text-xs text-gray-500 bg-gray-800/50 px-2 py-1 rounded">
                    Trending
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Enhanced CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link
              href="/services"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 group"
            >
              Explore All Services
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Performance & Innovation */}
      <section className="py-20 px-4 bg-black">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Security</h3>
              <p className="text-gray-300">
                Military-grade security protocols protecting your most valuable assets.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Lightning Fast</h3>
              <p className="text-gray-300">
                Optimized performance delivering results in milliseconds, not minutes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI-Powered</h3>
              <p className="text-gray-300">
                Intelligent automation that learns and adapts to your business needs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-cyan-900/20">
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
              Join the future of technology with Zion Tech Group
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                href="/demo"
                className="border border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 backdrop-blur-md hover:bg-white/10"
              >
                Request Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floating Action Buttons */}
      <AnimatePresence>
        {showFloatingActions && (
          <>
            {/* Contact Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 100 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: 100 }}
              transition={{ duration: 0.3 }}
              className="fixed bottom-24 right-6 z-50"
            >
              <Link
                href="/contact"
                className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-110 group"
                aria-label="Contact Us"
              >
                <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              </Link>
            </motion.div>

            {/* Phone Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 100 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: 100 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="fixed bottom-36 right-6 z-50"
            >
              <a
                href="tel:+1-302-464-0950"
                className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-110 group"
                aria-label="Call Us"
              >
                <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              </a>
            </motion.div>

            {/* Email Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 100 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: 100 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="fixed bottom-48 right-6 z-50"
            >
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-110 group"
                aria-label="Email Us"
              >
                <Mail className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Performance Optimizer */}
      <PerformanceOptimizer />
    </Layout>
  );
};

export default Homepage2025;