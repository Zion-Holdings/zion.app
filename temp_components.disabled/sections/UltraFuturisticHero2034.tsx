import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Star, TrendingUp, Award, Crown, 
  Brain, Atom, Cpu, Rocket, Zap, Sparkles,
  CheckCircle, Users, Globe, Shield, Infinity, Phone, Mail, MapPin
} from 'lucide-react';
import { cuttingEdgeInnovations2034 } from '../../data/2034-cutting-edge-innovations';
import { enterpriseInnovations2034 } from '../../data/2034-enterprise-innovations';

const stats = [
  { icon: Users, value: '10,000+', label: 'Happy Customers', color: 'text-blue-400' },
  { icon: TrendingUp, value: '500%+', label: 'ROI Guaranteed', color: 'text-green-400' },
  { icon: Award, value: '50+', label: 'Industry Awards', color: 'text-yellow-400' },
  { icon: Globe, value: '150+', label: 'Countries Served', color: 'text-purple-400' }
];

const features = [
  'AI Consciousness Evolution',
  'Quantum Computing Integration',
  'Space Technology Solutions',
  'Autonomous Business Systems',
  'Zero-Trust Security',
  'Metaverse Development'
];

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

export default function UltraFuturisticHero2034() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-blue-900/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center space-y-8">
          
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-center space-x-3">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-2xl flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div className="text-left">
                <span className="text-sm font-medium text-purple-400 bg-purple-900/30 px-3 py-1 rounded-full">
                  🚀 2034 Innovation Leader
                </span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                The Future of
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Technology
              </span>
              <br />
              <span className="bg-gradient-to-r from-teal-400 via-green-400 to-emerald-400 bg-clip-text text-transparent">
                is Here
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Experience revolutionary AI consciousness, quantum computing, space technology, and autonomous business solutions. 
              Transform your business with cutting-edge innovations that deliver 500%+ ROI.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Link
              href="/contact"
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white rounded-2xl font-semibold text-lg hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25"
            >
              <span className="flex items-center space-x-2">
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </Link>
            
            <Link
              href="/pricing"
              className="px-8 py-4 border-2 border-purple-500/30 text-purple-400 rounded-2xl font-semibold text-lg hover:bg-purple-500/10 transition-all duration-300"
            >
              View Pricing Plans
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pt-8"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className={`w-12 h-12 bg-gray-800/50 rounded-xl flex items-center justify-center mx-auto ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-8"
          >
            <div className="flex flex-wrap items-center justify-center gap-4 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 bg-gray-800/30 border border-purple-500/20 rounded-full px-4 py-2 text-sm text-gray-300"
                >
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Service Showcase */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="space-y-8"
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Revolutionary Services for 2034
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our cutting-edge micro SAAS solutions, IT services, and AI innovations that are transforming industries worldwide.
            </p>
          </div>

          {/* Featured Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* AI Consciousness Evolution */}
            <motion.div
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gradient-to-br from-violet-900/50 via-purple-900/50 to-indigo-900/50 border border-purple-500/30 rounded-2xl p-6 backdrop-blur-sm hover:border-purple-400/50 transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">AI Consciousness Evolution</h3>
                  <p className="text-sm text-purple-300">Next-generation AI platform</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Advanced AI consciousness development and management platform with ethical framework integration.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-purple-400">$4,999</span>
                <Link
                  href="/ai-consciousness-evolution-platform-2034"
                  className="text-purple-300 hover:text-purple-200 text-sm font-medium flex items-center space-x-1"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Quantum AI Hybrid Computing */}
            <motion.div
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gradient-to-br from-indigo-900/50 via-blue-900/50 to-cyan-900/50 border border-blue-500/30 rounded-2xl p-6 backdrop-blur-sm hover:border-blue-400/50 transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Atom className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Quantum AI Hybrid</h3>
                  <p className="text-sm text-blue-300">Quantum-classical computing</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Revolutionary platform combining quantum computing power with classical AI algorithms.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-blue-400">$8,999</span>
                <Link
                  href="/quantum-ai-hybrid-computing-2034"
                  className="text-blue-300 hover:text-blue-200 text-sm font-medium flex items-center space-x-1"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Space Mining Automation */}
            <motion.div
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gradient-to-br from-teal-900/50 via-emerald-900/50 to-green-900/50 border border-teal-500/30 rounded-2xl p-6 backdrop-blur-sm hover:border-teal-400/50 transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Space Mining Automation</h3>
                  <p className="text-sm text-teal-300">Autonomous space operations</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Revolutionary platform for autonomous space mining operations and resource extraction.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-teal-400">$15,999</span>
                <Link
                  href="/space-mining-automation-platform-2034"
                  className="text-teal-300 hover:text-teal-200 text-sm font-medium flex items-center space-x-1"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* View All Services CTA */}
          <div className="text-center pt-8">
            <Link
              href="/services"
              className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 text-lg font-medium transition-colors duration-200"
            >
              <span>View All 50+ Revolutionary Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Contact Information */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="bg-gradient-to-r from-purple-900/30 via-pink-900/30 to-blue-900/30 border border-purple-500/30 rounded-2xl p-8 backdrop-blur-sm"
        >
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold text-white">Ready to Transform Your Business?</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Join thousands of businesses already experiencing unprecedented growth with our revolutionary technology solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-purple-400" />
                <span className="text-white">{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-purple-400" />
                <span className="text-white">{contactInfo.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span className="text-white">{contactInfo.address}</span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                <span>Schedule a Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}