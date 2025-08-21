import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, Zap, Brain, Rocket, Globe, Sparkles, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';
import { aiAutonomousServices2026 } from '../../data/2026-ai-autonomous-services';
import { quantumSpaceTechServices2026 } from '../../data/2026-quantum-space-tech-services';
import { metaverseDigitalRealityServices2026 } from '../../data/2026-metaverse-digital-reality-services';

export default function UltraAdvancedHero2026() {
  const totalServices = aiAutonomousServices2026.length + quantumSpaceTechServices2026.length + metaverseDigitalRealityServices2026.length;
  
  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

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
        duration: 0.8
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-black to-cyan-900/40"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-pink-900/30 via-transparent to-blue-900/30"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.15),transparent_50%)]"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(120,119,198,0.15),transparent_50%)]"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 px-4 py-2 rounded-full border border-purple-500/30">
            <Sparkles className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300 text-sm font-medium">2026 Revolutionary Technology Solutions</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight"
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              The Future
            </span>
            <br />
            <span className="text-white">
              is Now
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-5xl mx-auto leading-relaxed"
          >
            Experience the most advanced AI, quantum computing, and metaverse technologies ever created. 
            <span className="text-purple-400 font-semibold"> 1000% ROI guaranteed</span> with our revolutionary solutions.
          </motion.p>

          {/* Service Statistics */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            <div className="text-center p-4 bg-gradient-to-br from-purple-800/20 to-purple-900/20 backdrop-blur-xl border border-purple-500/20 rounded-2xl">
              <div className="text-3xl font-bold text-purple-400">{aiAutonomousServices2026.length}</div>
              <div className="text-gray-300 text-sm">AI Autonomous Services</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-cyan-800/20 to-cyan-900/20 backdrop-blur-xl border border-cyan-500/20 rounded-2xl">
              <div className="text-3xl font-bold text-cyan-400">{quantumSpaceTechServices2026.length}</div>
              <div className="text-gray-300 text-sm">Quantum Space Tech</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-pink-800/20 to-pink-900/20 backdrop-blur-xl border border-pink-500/20 rounded-2xl">
              <div className="text-3xl font-bold text-pink-400">{metaverseDigitalRealityServices2026.length}</div>
              <div className="text-gray-300 text-sm">Metaverse Services</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-green-800/20 to-green-900/20 backdrop-blur-xl border border-green-500/20 rounded-2xl">
              <div className="text-3xl font-bold text-green-400">∞</div>
              <div className="text-gray-300 text-sm">Possibilities</div>
            </div>
          </motion.div>

          {/* Key Benefits */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-xl border border-blue-500/20 rounded-xl">
              <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0" />
              <span className="text-gray-200 font-medium">First-to-Market Technology</span>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-xl border border-purple-500/20 rounded-xl">
              <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0" />
              <span className="text-gray-200 font-medium">1000% ROI Guaranteed</span>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-xl border border-green-500/20 rounded-xl">
              <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
              <span className="text-gray-200 font-medium">24/7 Autonomous Operation</span>
            </div>
          </motion.div>

          {/* Call to Action Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Link 
              href="/services"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 text-white font-bold text-lg rounded-2xl hover:from-purple-700 hover:via-pink-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              <Rocket className="w-6 h-6 mr-3" />
              Explore All Services
              <ArrowRight className="w-6 h-6 ml-3" />
            </Link>
            
            <Link 
              href="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-purple-500/50 text-purple-300 font-bold text-lg rounded-2xl hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300 transform hover:scale-105"
            >
              <Zap className="w-6 h-6 mr-3" />
              Get Started Today
            </Link>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            variants={itemVariants}
            className="mt-12 p-6 bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-cyan-900/20 backdrop-blur-xl border border-purple-500/20 rounded-2xl max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Ready to Transform Your Business?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">Call Us</div>
                  <div className="text-purple-300">{contactInfo.phone}</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">Email Us</div>
                  <div className="text-cyan-300">{contactInfo.email}</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">Visit Us</div>
                  <div className="text-purple-300 text-sm">{contactInfo.address}</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-gray-400"
          >
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span>4.9/5 Rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-green-400" />
              <span>1000% ROI Guaranteed</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-purple-400" />
              <span>24/7 Support</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 text-6xl opacity-20"
        >
          🚀
        </motion.div>
        
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 left-20 text-6xl opacity-20"
        >
          ⚛️
        </motion.div>
        
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 3, 0]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 left-10 text-5xl opacity-20"
        >
          🧠
        </motion.div>
        
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -3, 0]
          }}
          transition={{ 
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/3 right-10 text-5xl opacity-20"
        >
          🌐
        </motion.div>
      </div>
    </section>
  );
}