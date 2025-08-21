import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, Zap, Brain, Atom, Bot, Heart, Shield, Rocket, TrendingUp, Users, CheckCircle, Play, Sparkles, Globe, Cpu, Database, Network, Cloud, Lock, Eye, Target, BarChart3, Lightbulb, Code, TestTube, Leaf, Car, Microscope, BrainCircuit, Award, Clock, DollarSign, Phone, Mail, MapPin } from 'lucide-react';

export default function UltraAdvancedHero2026V2() {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const featuredServices = [
    {
      name: 'AI Consciousness Platform',
      description: 'Revolutionary AI consciousness development with ethical frameworks',
      icon: <BrainCircuit className="w-8 h-8" />,
      category: 'AI Consciousness',
      price: '$4,999/mo',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      name: 'Quantum Financial Trading',
      description: 'Next-generation quantum AI for institutional trading',
      icon: <Atom className="w-8 h-8" />,
      category: 'Quantum AI',
      price: '$2,499/mo',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'AI Healthcare Diagnostics',
      description: 'Advanced AI-powered medical diagnostics platform',
      icon: <Heart className="w-8 h-8" />,
      category: 'Healthcare AI',
      price: '$1,899/mo',
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Autonomous Robotics',
      description: 'AI-powered autonomous robotics for industry 4.0',
      icon: <Bot className="w-8 h-8" />,
      category: 'Robotics',
      price: '$3,799/mo',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const stats = [
    { label: 'AI Services', value: '50+', icon: <Brain className="w-6 h-6" /> },
    { label: 'Quantum Solutions', value: '25+', icon: <Atom className="w-6 h-6" /> },
    { label: 'Micro SaaS', value: '100+', icon: <Code className="w-6 h-6" /> },
    { label: 'Success Rate', value: '99.9%', icon: <CheckCircle className="w-6 h-6" /> }
  ];

  const benefits = [
    'Up to 100x faster AI processing',
    'Quantum advantage in complex calculations',
    'Revolutionary consciousness development',
    'Industry-leading automation solutions',
    'Global enterprise deployment',
    '24/7 AI-powered support'
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % featuredServices.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Floating Icons */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-32 right-32 text-purple-400/30"
        >
          <Brain className="w-12 h-12" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          className="absolute bottom-32 left-32 text-blue-400/30"
        >
          <Atom className="w-12 h-12" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, delay: 2 }}
          className="absolute top-1/2 left-20 text-pink-400/30"
        >
          <Bot className="w-10 h-10" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full px-4 py-2 mb-8"
          >
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-purple-300 font-medium">Revolutionary 2026 Services</span>
            <span className="text-pink-300">•</span>
            <span className="text-blue-300">AI Consciousness</span>
            <span className="text-pink-300">•</span>
            <span className="text-green-300">Quantum Computing</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8"
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              The Future of
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-green-500 bg-clip-text text-transparent">
              AI & Technology
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Experience revolutionary micro SAAS services, AI consciousness platforms, quantum computing solutions, 
            and cutting-edge technology innovations that will transform your business in 2026 and beyond.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Link
              href="/revolutionary-2026-services-showcase-v2"
              className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 flex items-center gap-3"
            >
              Explore 2026 Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              href="/contact"
              className="group px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-2xl font-semibold text-lg transition-all duration-300 border border-white/20 hover:border-white/30 flex items-center gap-3"
            >
              <Play className="w-5 h-5" />
              Watch Demo
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
                transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-2 text-purple-400">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Featured Services Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Featured Revolutionary Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 1.5 + index * 0.1 }}
                className="group relative"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${service.color} w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-purple-400 font-medium">{service.category}</span>
                    <span className="text-lg font-bold text-purple-400">{service.price}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 1.7 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Why Choose Zion Tech Group?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
                transition={{ duration: 0.6, delay: 1.9 + index * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="p-2 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg mt-1">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </div>
                <span className="text-gray-300">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 2.1 }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center justify-center gap-3">
              <Phone className="w-5 h-5 text-purple-400" />
              <span className="text-gray-300">{contactInfo.mobile}</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Mail className="w-5 h-5 text-purple-400" />
              <span className="text-gray-300">{contactInfo.email}</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <MapPin className="w-5 h-5 text-purple-400" />
              <span className="text-gray-300">{contactInfo.address}</span>
            </div>
          </div>
          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 text-lg font-semibold transform hover:scale-105"
            >
              Get Started Today <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Floating Action Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0 }}
        transition={{ duration: 0.6, delay: 2.5 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <Link
          href="/revolutionary-2026-services-showcase-v2"
          className="group p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 transform hover:scale-110"
        >
          <Star className="w-6 h-6 text-white" />
        </Link>
      </motion.div>
    </section>
  );
}