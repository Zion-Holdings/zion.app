import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, Star, TrendingUp, Phone, Mail, MapPin, 
  Rocket, Brain, Atom, Sparkles, Zap, Shield,
  CheckCircle, Users, Globe, Award, Target
} from 'lucide-react';

const UltraAdvancedHero2026 = () => {
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const stats = [
    { label: 'Services', value: '1000+', icon: Rocket, color: 'from-purple-500 to-pink-500' },
    { label: 'AI Solutions', value: '150+', icon: Brain, color: 'from-blue-500 to-cyan-500' },
    { label: 'Quantum Tech', value: '75+', icon: Atom, color: 'from-green-500 to-emerald-500' },
    { label: 'Global Reach', value: '50+', icon: Globe, color: 'from-yellow-500 to-orange-500' }
  ];

  const features = [
    'AI Consciousness Simulation',
    'Quantum Neural Interfaces',
    'Autonomous Business Intelligence',
    'Holographic Metaverse Development',
    'Space Debris Management AI',
    'Quantum Internet Security'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Advanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-cyan-900/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-cyan-900/10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.15),transparent_50%)]"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(120,119,198,0.15),transparent_50%)]"></div>
      </div>

      {/* Floating Elements */}
      <motion.div
        variants={floatingVariants}
        animate="float"
        className="absolute top-1/4 left-1/5 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"
      />
      <motion.div
        variants={floatingVariants}
        animate="float"
        transition={{ delay: 1 }}
        className="absolute bottom-1/4 right-1/5 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"
      />
      <motion.div
        variants={floatingVariants}
        animate="float"
        transition={{ delay: 2 }}
        className="absolute top-1/2 left-1/2 w-24 h-24 bg-pink-500/10 rounded-full blur-3xl"
      />

      {/* Animated Light Rays */}
      <motion.div
        className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500/30 to-transparent"
        animate={{
          opacity: [0.2, 0.8, 0.2],
          scaleY: [0.8, 1.2, 0.8]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent"
        animate={{
          opacity: [0.3, 0.9, 0.3],
          scaleY: [1.2, 0.8, 1.2]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30 rounded-full px-6 py-3 mb-8"
          >
            <Sparkles className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300 font-medium">2026 Revolutionary Technology</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              The Future of
            </span>
            <br />
            <span className="text-white">Technology is Here</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
          >
            Experience groundbreaking AI, quantum computing, and emerging technology solutions that will transform industries and redefine what's possible in the digital age.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold rounded-2xl hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              <span>Start Your Transformation</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="/revolutionary-2025-services-showcase"
              className="inline-flex items-center px-8 py-4 border-2 border-purple-500/50 text-purple-300 font-bold rounded-2xl hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300"
            >
              <Rocket className="w-5 h-5 mr-2" />
              <span>Explore Services</span>
            </Link>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="text-center group"
              >
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Features Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="flex items-center space-x-3 p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300 font-medium">{feature}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30 rounded-3xl p-8 max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Ready to Transform Your Business?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3 text-center md:text-left">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">Call Us</div>
                  <div className="text-purple-300">{contactInfo.mobile}</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 text-center md:text-left">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">Email Us</div>
                  <div className="text-cyan-300">{contactInfo.email}</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 text-center md:text-left">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">Visit Us</div>
                  <div className="text-emerald-300 text-sm">{contactInfo.address}</div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors font-medium"
              >
                Schedule a Consultation <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="flex items-center justify-center space-x-8 text-gray-400">
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-yellow-400" />
                <span className="text-sm">Industry Leader</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-blue-400" />
                <span className="text-sm">1000+ Clients</span>
              </div>
              <div className="flex items-center space-x-2">
                <Target className="w-5 h-5 text-green-400" />
                <span className="text-sm">1000% ROI Guarantee</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-purple-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default UltraAdvancedHero2026;