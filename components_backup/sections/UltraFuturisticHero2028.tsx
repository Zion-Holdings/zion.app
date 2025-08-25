import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Rocket, Brain, Atom, Shield, Cloud, Database, Code, 
  BarChart3, Star, Zap, Sparkles, ArrowRight, CheckCircle,
  TrendingUp, Users, Globe, Cpu, Lock, Target, Award,
  Phone, Mail, MapPin
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const heroFeatures = [
  {
    icon: Rocket,
    title: '2028 Cutting-Edge',
    description: 'Beyond the future of technology',
    color: 'from-violet-500 to-purple-500'
  },
  {
    icon: Brain,
    title: 'AI Revolution',
    description: 'Next-generation intelligence',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    icon: Atom,
    title: 'Quantum Computing',
    description: 'Unprecedented processing power',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Military-grade protection',
    color: 'from-red-500 to-orange-500'
  }
];

const stats = [
  { number: '500+', label: 'Services Delivered', icon: Star },
  { number: '10,000+', label: 'Happy Customers', icon: Users },
  { number: '99.9%', label: 'Uptime Guarantee', icon: Zap },
  { number: '24/7', label: 'Global Support', icon: Globe }
];

export default function UltraFuturisticHero2028() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm backdrop-blur-sm"
          >
            <Rocket className="w-5 h-5" />
            <span>2028 Future Technology</span>
            <Sparkles className="w-5 h-5" />
          </motion.div>
          
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-6xl md:text-8xl font-bold text-white leading-tight"
          >
            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Revolutionary
            </span>
            <br />
            <span className="text-white">Technology</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Solutions
            </span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed"
          >
            Experience the future of technology with our cutting-edge AI, quantum computing, and innovative solutions that transform industries and redefine possibilities. Leading the digital revolution since 2025.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Link
              href="/contact"
              className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-cyan-600 transition-all duration-200 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 flex items-center space-x-2"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            
            <Link
              href="/2028-services-showcase"
              className="px-8 py-4 border border-purple-500/30 text-purple-300 font-semibold rounded-xl hover:bg-purple-500/10 transition-all duration-200 flex items-center space-x-2"
            >
              <span>Explore 2028 Services</span>
              <TrendingUp className="w-5 h-5" />
            </Link>
          </motion.div>

          {/* Contact Quick Access */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 text-sm"
          >
            <a
              href={`tel:${contactInfo.mobile}`}
              className="flex items-center space-x-2 text-gray-400 hover:text-cyan-300 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>{contactInfo.mobile}</span>
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center space-x-2 text-gray-400 hover:text-cyan-300 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>{contactInfo.email}</span>
            </a>
            <div className="flex items-center space-x-2 text-gray-400">
              <MapPin className="w-4 h-4" />
              <span>{contactInfo.address}</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Hero Features Grid */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {heroFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-center mt-2">
                <h3 className="text-white text-sm font-semibold">{feature.title}</h3>
                <p className="text-gray-400 text-xs">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Statistics Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-0 left-0 right-0 z-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.3 + index * 0.1 }}
                className="text-center group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-6 h-6 text-purple-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Icons */}
        <motion.div
          className="absolute top-20 left-10 text-purple-500/20"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <Brain className="w-16 h-16" />
        </motion.div>

        <motion.div
          className="absolute top-40 right-20 text-cyan-500/20"
          animate={{
            y: [0, 15, 0],
            rotate: [0, -360]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <Atom className="w-20 h-20" />
        </motion.div>

        <motion.div
          className="absolute bottom-40 left-20 text-blue-500/20"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 360]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <Shield className="w-14 h-14" />
        </motion.div>

        <motion.div
          className="absolute bottom-20 right-40 text-emerald-500/20"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -360]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <Cloud className="w-18 h-18" />
        </motion.div>
      </div>
    </section>
  );
}