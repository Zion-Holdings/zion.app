import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Star, Award, TrendingUp, Users } from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const companyStats = [
  { icon: Star, value: '500+', label: 'Services Delivered' },
  { icon: Users, value: '1000+', label: 'Happy Clients' },
  { icon: TrendingUp, value: '99.9%', label: 'Uptime Guarantee' },
  { icon: Award, value: '25+', label: 'Industry Awards' }
];

export default function TopContactBar() {
  return (
    <div className="relative bg-gradient-to-r from-cyan-900/20 via-blue-900/20 to-purple-900/20 border-b border-cyan-500/30 backdrop-blur-sm">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(6,182,212,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between py-3 space-y-2 lg:space-y-0">
          {/* Contact Information */}
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center space-x-2 text-cyan-300 hover:text-cyan-200 transition-colors duration-200 group"
            >
              <div className="p-1.5 bg-cyan-500/20 rounded-lg group-hover:bg-cyan-500/30 transition-all duration-200">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <a href={`tel:${contactInfo.mobile}`} className="font-medium hover:underline">
                {contactInfo.mobile}
              </a>
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center space-x-2 text-cyan-300 hover:text-cyan-200 transition-colors duration-200 group"
            >
              <div className="p-1.5 bg-cyan-500/20 rounded-lg group-hover:bg-cyan-500/30 transition-all duration-200">
                <Mail className="w-3.5 h-3.5" />
              </div>
              <a href={`mailto:${contactInfo.email}`} className="font-medium hover:underline">
                {contactInfo.email}
              </a>
            </motion.div>

            {/* Address */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center space-x-2 text-cyan-300 hover:text-cyan-200 transition-colors duration-200 group"
            >
              <div className="p-1.5 bg-cyan-500/20 rounded-lg group-hover:bg-cyan-500/30 transition-all duration-200">
                <MapPin className="w-3.5 h-3.5" />
              </div>
              <span className="font-medium">{contactInfo.address}</span>
            </motion.div>

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center space-x-2 text-cyan-300 hover:text-cyan-200 transition-colors duration-200 group"
            >
              <div className="p-1.5 bg-cyan-500/20 rounded-lg group-hover:bg-cyan-500/30 transition-all duration-200">
                <Clock className="w-3.5 h-3.5" />
              </div>
              <span className="font-medium">24/7 Support</span>
            </motion.div>
          </div>

          {/* Company Stats */}
          <div className="hidden lg:flex items-center space-x-6">
            {companyStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="flex items-center space-x-2 text-xs"
              >
                <div className="p-1 bg-cyan-500/20 rounded-md">
                  <stat.icon className="w-3 h-3 text-cyan-400" />
                </div>
                <div className="text-right">
                  <div className="font-bold text-cyan-300">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center space-x-2"
          >
            <a
              href="/contact"
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
            >
              Get Started Today
              <TrendingUp className="w-4 h-4 ml-2" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </div>
  );
}

