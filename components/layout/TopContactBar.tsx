import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Star, Zap, Target, Brain } from 'lucide-react';
import Link from 'next/link';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  hours: '24/7 Support Available'
};

const quickStats = [
  { icon: Star, label: '40+ Services', value: '40+' },
  { icon: Target, label: 'AI Solutions', value: '15+' },
  { icon: Brain, label: 'Quantum Tech', value: '10+' },
  { icon: Zap, label: 'Micro SAAS', value: '15+' }
];

export default function TopContactBar() {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-b border-gray-700/50 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between py-3 space-y-2 lg:space-y-0">
          {/* Contact Information */}
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200"
            >
              <Phone className="w-4 h-4" />
              <a href={`tel:${contactInfo.mobile}`} className="font-medium">
                {contactInfo.mobile}
              </a>
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200"
            >
              <Mail className="w-4 h-4" />
              <a href={`mailto:${contactInfo.email}`} className="font-medium">
                {contactInfo.email}
              </a>
            </motion.div>

            {/* Address */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center space-x-2 text-gray-300"
            >
              <MapPin className="w-4 h-4" />
              <span className="font-medium">{contactInfo.address}</span>
            </motion.div>

            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center space-x-2 text-emerald-400"
            >
              <Clock className="w-4 h-4" />
              <span className="font-medium">{contactInfo.hours}</span>
            </motion.div>
          </div>

          {/* Quick Stats & Actions */}
          <div className="flex items-center space-x-6">
            {/* Quick Stats */}
            <div className="hidden md:flex items-center space-x-4">
              {quickStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center space-x-2 text-xs"
                >
                  <stat.icon className="w-3 h-3 text-cyan-400" />
                  <span className="text-gray-300 font-medium">{stat.value}</span>
                  <span className="text-gray-500">{stat.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Quick Action Buttons */}
            <div className="flex items-center space-x-3">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
              >
                <Link
                  href="/quote"
                  className="inline-flex items-center space-x-2 px-3 py-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-medium rounded-full hover:from-cyan-400 hover:to-blue-500 hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  <Star className="w-3 h-3" />
                  <span>Get Quote</span>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 }}
              >
                <Link
                  href="/demo"
                  className="inline-flex items-center space-x-2 px-3 py-1.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-xs font-medium rounded-full hover:from-emerald-400 hover:to-teal-500 hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  <Zap className="w-3 h-3" />
                  <span>Book Demo</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Service Highlights Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="py-3 border-t border-gray-700/30"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
            <div className="flex items-center space-x-6 text-xs text-gray-400">
              <span className="flex items-center space-x-2">
                <Target className="w-3 h-3 text-cyan-400" />
                <span>Advanced Micro SAAS Solutions</span>
              </span>
              <span className="flex items-center space-x-2">
                <Brain className="w-3 h-3 text-purple-400" />
                <span>AI Consciousness & Quantum Computing</span>
              </span>
              <span className="flex items-center space-x-2">
                <Zap className="w-3 h-3 text-emerald-400" />
                <span>Emerging Technologies</span>
              </span>
            </div>
            
            <div className="flex items-center space-x-2 text-xs">
              <span className="text-gray-500">Visit our live app:</span>
              <a 
                href="https://ziontechgroup.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-200"
              >
                ziontechgroup.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

