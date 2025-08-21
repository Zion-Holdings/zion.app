import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Star, TrendingUp, Zap, Shield, 
  Brain, Atom, Rocket, Globe, Cpu, Database,
  CheckCircle, Play, Users, Award, Clock, Phone, Mail, MapPin
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const stats = [
  { label: 'Active Clients', value: '2,500+', icon: Users, color: 'from-blue-500 to-cyan-500' },
  { label: 'Services Delivered', value: '15,000+', icon: CheckCircle, color: 'from-green-500 to-emerald-500' },
  { label: 'Success Rate', value: '99.8%', icon: Award, color: 'from-yellow-500 to-orange-500' },
  { label: 'Response Time', value: '< 2hrs', icon: Clock, color: 'from-purple-500 to-pink-500' }
];

const features = [
  'AI-Powered Solutions',
  'Quantum Computing Ready',
  '24/7 Expert Support',
  'Enterprise-Grade Security',
  'Global Infrastructure',
  'Real-time Analytics'
];

export default function UltraFuturisticHero2029() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1),transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6 backdrop-blur-sm"
          >
            <Star className="w-4 h-4 mr-2 text-yellow-400" />
            Leading Technology Solutions Provider
            <Star className="w-4 h-4 ml-2 text-yellow-400" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Future Technology
            </span>
            <br />
            <span className="text-white">Solutions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Transform your business with cutting-edge AI, quantum computing, and emerging technology solutions. 
            From micro SAAS to enterprise infrastructure, we deliver the future today.
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Link
            href="/contact"
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-semibold text-white text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 transform hover:scale-105"
          >
            <span className="relative z-10 flex items-center">
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>

          <Link
            href="/services"
            className="group px-8 py-4 border-2 border-purple-500/50 rounded-xl font-semibold text-purple-300 text-lg hover:border-purple-400 hover:text-purple-200 transition-all duration-300 backdrop-blur-sm bg-purple-500/10 hover:bg-purple-500/20"
          >
            <span className="flex items-center">
              Explore Services
              <Play className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
            </span>
          </Link>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
              className="text-center"
            >
              <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mb-12"
        >
          <h3 className="text-xl font-semibold text-gray-300 mb-6">Why Choose Zion Tech Group?</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200"
              >
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-sm font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-2xl p-6 border border-purple-500/30 backdrop-blur-sm"
        >
          <h3 className="text-lg font-semibold text-white mb-4">Ready to Transform Your Business?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center justify-center space-x-2 text-purple-300">
              <Phone className="w-4 h-4" />
              <span>{contactInfo.mobile}</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-blue-300">
              <Mail className="w-4 h-4" />
              <span>{contactInfo.email}</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-cyan-300">
              <MapPin className="w-4 h-4" />
              <span>{contactInfo.address}</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 text-purple-500/30"
          animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Brain className="w-12 h-12" />
        </motion.div>
        
        <motion.div
          className="absolute top-40 right-20 text-blue-500/30"
          animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Atom className="w-10 h-10" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-40 left-20 text-green-500/30"
          animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Rocket className="w-14 h-14" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-20 right-10 text-cyan-500/30"
          animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <Globe className="w-11 h-11" />
        </motion.div>
      </div>
    </section>
  );
}