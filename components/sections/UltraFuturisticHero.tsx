import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, TrendingUp, Phone, Zap, DollarSign, Shield, Mail, MapPin, Rocket, Brain, Atom, Globe, Cpu } from 'lucide-react';
import Link from 'next/link';

interface UltraFuturisticHeroProps {
  className?: string;
}

export default function UltraFuturisticHero({ className = '' }: UltraFuturisticHeroProps) {
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const heroStats = [
    { label: 'Services', value: '800+', icon: Rocket, color: 'from-cyan-500 to-blue-600' },
    { label: 'ROI', value: '1000%', icon: TrendingUp, color: 'from-green-500 to-emerald-600' },
    { label: 'Uptime', value: '99.9%', icon: Shield, color: 'from-purple-500 to-pink-600' },
    { label: 'Support', value: '24/7', icon: Zap, color: 'from-orange-500 to-red-600' }
  ];

  const floatingIcons = [
    { icon: Brain, color: 'text-purple-400', position: 'top-20 left-20', delay: 0 },
    { icon: Atom, color: 'text-cyan-400', position: 'top-32 right-32', delay: 0.5 },
    { icon: Globe, color: 'text-green-400', position: 'bottom-32 left-32', delay: 1 },
    { icon: Cpu, color: 'text-pink-400', position: 'bottom-20 right-20', delay: 1.5 }
  ];

  return (
    <section className={`relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Floating Background Icons */}
        <div className="absolute inset-0 pointer-events-none">
          {floatingIcons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.1, scale: 1 }}
              transition={{ duration: 1, delay: item.delay }}
              className={`absolute ${item.position} ${item.color} opacity-20`}
            >
              <item.icon className="w-32 h-32" />
            </motion.div>
          ))}
        </div>

        {/* Main Hero Content */}
        <div className="relative z-10 text-center">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Revolutionary
              </span>{' '}
              AI & Technology
              <br />
              <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Services
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-5xl mx-auto leading-relaxed mb-8"
            >
              Experience the future with our cutting-edge AI, quantum computing, and emerging technology solutions. 
              Achieve unprecedented ROI and transform your business with revolutionary innovation.
            </motion.p>

            {/* Hero Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12"
            >
              {heroStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="text-center group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 text-white rounded-2xl font-semibold hover:from-cyan-600 hover:via-purple-700 hover:to-pink-700 transition-all duration-300 text-lg shadow-2xl hover:shadow-cyan-500/30 group"
                >
                  <Rocket className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                  Start Your Transformation
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/services"
                  className="inline-flex items-center px-8 py-4 bg-gray-800/60 text-white rounded-2xl font-semibold hover:bg-gray-700/60 transition-all duration-300 text-lg border border-gray-600 hover:border-gray-500 shadow-xl"
                >
                  <Globe className="w-6 h-6 mr-3" />
                  Explore Services
                </Link>
              </motion.div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-wrap justify-center items-center gap-8 text-gray-400 text-sm"
            >
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span>Trusted by 1000+ companies</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-green-400" />
                <span>SOC 2 Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-blue-400" />
                <span>99.9% Uptime</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Contact Information Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {/* Phone Contact */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="group bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-500/60 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-xl">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <div className="text-center">
              <div className="text-sm text-cyan-400 font-medium mb-1">Phone</div>
              <div className="text-lg text-white font-semibold">{contactInfo.mobile}</div>
            </div>
          </motion.div>

          {/* Email Contact */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="group bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/50 rounded-2xl p-6 hover:border-purple-500/60 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-xl">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <div className="text-center">
              <div className="text-sm text-purple-400 font-medium mb-1">Email</div>
              <div className="text-lg text-white font-semibold">{contactInfo.email}</div>
            </div>
          </motion.div>

          {/* Address Contact */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="group bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/50 rounded-2xl p-6 hover:border-green-500/60 hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-300"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-xl">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <div className="text-center">
              <div className="text-sm text-green-400 font-medium mb-1">Address</div>
              <div className="text-lg text-white font-semibold">{contactInfo.address}</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-400 text-sm"
          >
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full mx-auto mb-2 flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-gray-400 rounded-full mt-2"
              />
            </div>
            Scroll to explore
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}