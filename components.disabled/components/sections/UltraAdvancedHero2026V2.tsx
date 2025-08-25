import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Star, TrendingUp, Phone, Mail, MapPin, Rocket, Brain, Sparkles, Globe, Shield } from 'lucide-react';
import Link from 'next/link';

const UltraAdvancedHero2026V2: React.FC = () => {
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  const floatingElements = [
    { icon: '🚀', delay: 0, position: 'top-20 left-10' },
    { icon: '⚡', delay: 1, position: 'top-40 right-20' },
    { icon: '🌟', delay: 2, position: 'bottom-40 left-20' },
    { icon: '💎', delay: 3, position: 'bottom-20 right-10' },
    { icon: '🔮', delay: 4, position: 'top-1/2 left-1/4' },
    { icon: '⚛️', delay: 5, position: 'top-1/2 right-1/4' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-pink-900/10 via-transparent to-blue-900/10"></div>
        
        {/* Animated circles */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/3 via-pink-500/3 to-cyan-500/3 rounded-full blur-3xl animate-spin-slow"></div>
        
        {/* Floating elements */}
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className={`absolute ${element.position} text-4xl opacity-20`}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              delay: element.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {element.icon}
          </motion.div>
        ))}
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full px-6 py-3 backdrop-blur-sm">
            <Zap className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300 font-medium">2026 Revolutionary Technology</span>
            <Star className="w-4 h-4 text-yellow-400" />
          </motion.div>

          {/* Main heading */}
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Zion Tech Group
            </span>
            <br />
            <span className="text-white">
              Revolutionary
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI & IT Solutions
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Experience the future with our cutting-edge AI, quantum computing, and IT services. 
            <span className="text-purple-400 font-semibold"> 1000+ innovative solutions</span> designed to transform your business and achieve 
            <span className="text-cyan-400 font-semibold"> 1000% ROI</span>.
          </motion.p>

          {/* Stats */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">1000+</div>
              <div className="text-gray-400 text-sm md:text-base">Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">1000%</div>
              <div className="text-gray-400 text-sm md:text-base">ROI Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-400 text-sm md:text-base">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">Global</div>
              <div className="text-gray-400 text-sm md:text-base">Reach</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Link
              href="/services"
              className="group inline-flex items-center space-x-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25"
            >
              <Rocket className="w-6 h-6 group-hover:animate-bounce" />
              <span>Explore Services</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="/contact"
              className="group inline-flex items-center space-x-3 border-2 border-purple-500/50 text-purple-300 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300 backdrop-blur-sm"
            >
              <Phone className="w-5 h-5" />
              <span>Free Consultation</span>
            </Link>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-12"
          >
            <div className="flex items-center justify-center space-x-3 text-gray-300 hover:text-purple-300 transition-colors">
              <Phone className="w-5 h-5" />
              <span className="text-sm md:text-base">{contactInfo.mobile}</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-300 hover:text-cyan-300 transition-colors">
              <Mail className="w-5 h-5" />
              <span className="text-sm md:text-base">{contactInfo.email}</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-300 hover:text-green-300 transition-colors">
              <MapPin className="w-5 h-5" />
              <span className="text-sm md:text-base">{contactInfo.address}</span>
            </div>
          </motion.div>

          {/* Trust indicators */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center justify-center space-x-8 text-gray-400 text-sm"
          >
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-green-400" />
              <span>Enterprise Security</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-blue-400" />
              <span>Global Infrastructure</span>
            </div>
            <div className="flex items-center space-x-2">
              <Brain className="w-4 h-4 text-purple-400" />
              <span>AI-Powered</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-purple-400/50 rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-purple-400 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default UltraAdvancedHero2026V2;