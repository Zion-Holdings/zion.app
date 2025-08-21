import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Rocket, Brain, Atom, Zap, Sparkles, Shield, 
  Crown, Gem, Target, ArrowRight, Star, TrendingUp,
  CheckCircle, Globe, Cpu, Database
} from 'lucide-react';

export default function UltraFuturisticHero2029() {
  const features = [
    'AI Neuromorphic Computing',
    'Quantum Internet Protocol v2.0',
    'Autonomous Space Mining',
    '6G Network Infrastructure',
    'Edge AI Computing Network',
    'Smart City IoT Management'
  ];

  const stats = [
    { number: '500+', label: 'Active Services', icon: Rocket },
    { number: '50K+', label: 'Happy Customers', icon: Star },
    { number: '99.9%', label: 'Uptime SLA', icon: Shield },
    { number: '24/7', label: 'Global Support', icon: Globe }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-8"
          >
            <Crown className="w-4 h-4 text-cyan-400" />
            <span>2029 Cutting-Edge Technology</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-white via-cyan-300 to-purple-400 bg-clip-text text-transparent">
              Future Technology
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Solutions 2029
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            Experience the next generation of technology with our cutting-edge AI, Quantum Computing, 
            and Emerging Tech solutions. Transform your business with innovative micro SAAS services 
            and enterprise-grade infrastructure.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
          >
            <Link
              href="/services"
              className="group inline-flex items-center space-x-3 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <Link
              href="/contact"
              className="group inline-flex items-center space-x-3 border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:border-cyan-400"
            >
              <span>Get Started</span>
              <Zap className="w-5 h-5 group-hover:text-cyan-300 transition-colors duration-300" />
            </Link>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16 max-w-4xl mx-auto"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="flex items-center space-x-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
              >
                <CheckCircle className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
                <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                  {feature}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                className="text-center group"
              >
                <div className="flex items-center justify-center mb-3">
                  <stat.icon className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Technology Stack */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mt-16"
          >
            <h3 className="text-lg text-gray-400 mb-6">Powered by cutting-edge technology</h3>
            <div className="flex flex-wrap items-center justify-center space-x-8 text-gray-500">
              <div className="flex items-center space-x-2 hover:text-cyan-400 transition-colors duration-300">
                <Brain className="w-6 h-6" />
                <span className="text-sm font-medium">AI/ML</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-purple-400 transition-colors duration-300">
                <Atom className="w-6 h-6" />
                <span className="text-sm font-medium">Quantum</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-blue-400 transition-colors duration-300">
                <Cpu className="w-6 h-6" />
                <span className="text-sm font-medium">Edge Computing</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-green-400 transition-colors duration-300">
                <Database className="w-6 h-6" />
                <span className="text-sm font-medium">IoT</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-pink-400 transition-colors duration-300">
                <Globe className="w-6 h-6" />
                <span className="text-sm font-medium">6G Networks</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 border border-cyan-500/30 rounded-lg opacity-50"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        className="absolute bottom-20 left-20 w-24 h-24 border border-purple-500/30 rounded-full opacity-50"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Neon Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-purple-500/10 via-transparent to-transparent rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-cyan-500/10 via-transparent to-transparent rounded-full blur-3xl animate-pulse delay-1000" />
    </section>
  );
}