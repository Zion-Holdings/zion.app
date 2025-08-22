import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Zap, Brain, Atom, Rocket, Star, 
  TrendingUp, Shield, Globe, Cpu, Sparkles,
  Play, CheckCircle, Award, Users, Clock, Phone, Mail
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const features = [
  {
    icon: Brain,
    title: 'AI Consciousness',
    description: 'Develop genuine AI consciousness and emotional intelligence'
  },
  {
    icon: Atom,
    title: 'Quantum Computing',
    description: 'Leverage quantum algorithms for exponential performance'
  },
  {
    icon: Rocket,
    title: 'Space Technology',
    description: 'Automated space exploration and resource utilization'
  },
  {
    icon: Shield,
    title: 'Quantum Security',
    description: 'Unbreakable encryption with quantum key distribution'
  }
];

const stats = [
  { number: '500+', label: 'Active Clients', icon: Users },
  { number: '99.9%', label: 'Uptime SLA', icon: Clock },
  { number: '24/7', label: 'Support', icon: Shield },
  { number: '2030', label: 'Future Ready', icon: Star }
];

export default function UltraFuturisticHero2030() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
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
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Welcome to 2030 - The Future is Now
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Zion Tech Group
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            Pioneering the future with{' '}
            <span className="text-purple-400 font-semibold">AI Consciousness</span>,{' '}
            <span className="text-cyan-400 font-semibold">Quantum Computing</span>, and{' '}
            <span className="text-emerald-400 font-semibold">Space Technology</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto"
          >
            Transform your business with cutting-edge micro SAAS solutions, enterprise IT services, and revolutionary AI platforms that define the next decade of technological innovation.
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
        >
          <Link
            href="/contact"
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-2xl text-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25"
          >
            <span className="relative z-10 flex items-center">
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>

          <Link
            href="/services"
            className="group px-8 py-4 border-2 border-purple-500/30 text-purple-300 font-semibold rounded-2xl text-lg hover:bg-purple-500/10 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105"
          >
            <span className="flex items-center">
              Explore Services
              <Play className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
            </span>
          </Link>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 + index * 0.1 }}
              className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-purple-500/30 transition-all duration-300 transform hover:scale-105 hover:bg-white/10"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.8 + index * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-purple-400" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.0 }}
          className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded-2xl p-8 backdrop-blur-sm"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Ready to Transform Your Business?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Phone className="w-6 h-6 text-purple-400 mb-2" />
              <span className="text-gray-300 text-sm">Call Us</span>
              <a href={`tel:${contactInfo.mobile}`} className="text-white font-semibold hover:text-purple-400 transition-colors">
                {contactInfo.mobile}
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-6 h-6 text-cyan-400 mb-2" />
              <span className="text-gray-300 text-sm">Email Us</span>
              <a href={`mailto:${contactInfo.email}`} className="text-white font-semibold hover:text-cyan-400 transition-colors">
                {contactInfo.email}
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Globe className="w-6 h-6 text-emerald-400 mb-2" />
              <span className="text-gray-300 text-sm">Visit Us</span>
              <a href={contactInfo.website} className="text-white font-semibold hover:text-emerald-400 transition-colors">
                {contactInfo.website.replace('https://', '')}
              </a>
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 text-sm mb-4">Trusted by leading companies worldwide</p>
          <div className="flex items-center justify-center space-x-8 opacity-60">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-gray-300 text-sm">ISO 27001 Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-yellow-400" />
              <span className="text-gray-300 text-sm">Award Winning</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-blue-400" />
              <span className="text-gray-300 text-sm">Industry Leader</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-2 h-2 bg-purple-400 rounded-full"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-32 left-32 w-3 h-3 bg-cyan-400 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-1 h-1 bg-emerald-400 rounded-full"
          animate={{
            scale: [1, 3, 1],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </section>
  );
}