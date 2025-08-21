import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Rocket, Brain, Atom, Globe, Zap, Sparkles, Shield, 
  ArrowRight, Star, TrendingUp, CheckCircle, Play,
  Dna, Satellite, Microchip, CpuIcon, Building, Phone, Mail, MapPin
} from 'lucide-react';

const UltraFuturisticHero2029 = () => {
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const heroStats = [
    { number: '500+', label: 'Revolutionary Services', icon: Rocket },
    { number: '$50B+', label: 'Market Opportunity', icon: TrendingUp },
    { number: '99.9%', label: 'Success Rate', icon: CheckCircle },
    { number: '24/7', label: 'Global Support', icon: Globe }
  ];

  const featuredServices = [
    {
      name: 'AI Emotional Intelligence Platform',
      description: 'Real-time emotion detection and response',
      price: '$3,999/month',
      icon: Brain,
      color: 'from-violet-500 to-purple-600',
      href: '/ai-emotional-intelligence-platform-2029'
    },
    {
      name: 'Quantum Financial Optimization',
      description: 'Quantum-powered financial optimization',
      price: '$12,999/month',
      icon: Atom,
      color: 'from-indigo-500 to-blue-600',
      href: '/quantum-financial-optimization-platform-2029'
    },
    {
      name: 'Autonomous Space Mining Platform',
      description: 'Asteroid and lunar mining operations',
      price: '$25,999/month',
      icon: Satellite,
      color: 'from-blue-500 to-cyan-600',
      href: '/autonomous-space-mining-platform-2029'
    },
    {
      name: 'DNA Computing Platform',
      description: 'Molecular computing with DNA',
      price: '$19,999/month',
      icon: Dna,
      color: 'from-emerald-500 to-teal-600',
      href: '/dna-computing-platform-2029'
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-40 right-20 w-40 h-40 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -80, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 left-1/3 w-24 h-24 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-8"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            🚀 2029 Revolutionary Technology Services
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Future of Technology
            </span>
            <br />
            <span className="text-white">Starts Here</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            Experience the revolution with our cutting-edge 2029 services. From quantum computing and AI consciousness to space mining and DNA computing - we're building the future today.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Link
              href="/contact"
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
            >
              <span className="flex items-center">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            </Link>

            <Link
              href="/services"
              className="group px-8 py-4 border-2 border-purple-500/50 hover:border-purple-400 text-purple-300 hover:text-white font-bold rounded-2xl text-lg transition-all duration-300 hover:bg-purple-500/10"
            >
              <span className="flex items-center">
                <Play className="mr-2 w-5 h-5" />
                Explore Services
              </span>
            </Link>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-300 text-sm"
          >
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-purple-400" />
              <span>{contactInfo.mobile}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-purple-400" />
              <span>{contactInfo.email}</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-purple-400" />
              <span>{contactInfo.address}</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {heroStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.2 + index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-gradient-to-b from-white/5 to-white/10 border border-white/10 backdrop-blur-sm"
            >
              <div className="flex justify-center mb-3">
                <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500/20 to-blue-500/20">
                  <stat.icon className="w-6 h-6 text-purple-400" />
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Services */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Featured <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">2029 Services</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.5 + index * 0.1 }}
                className="group relative"
              >
                <Link href={service.href}>
                  <div className="relative p-6 rounded-2xl bg-gradient-to-b from-white/5 to-white/10 border border-white/10 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
                    {/* Background Glow */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                    
                    {/* Icon */}
                    <div className="relative z-10 flex justify-center mb-4">
                      <div className={`p-4 rounded-xl bg-gradient-to-r ${service.color} bg-opacity-20`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10 text-center">
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                        {service.name}
                      </h3>
                      <p className="text-sm text-gray-400 mb-3">
                        {service.description}
                      </p>
                      <div className="text-lg font-bold text-purple-400">
                        {service.price}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="text-center"
        >
          <p className="text-gray-400 mb-4">Trusted by leading organizations worldwide</p>
          <div className="flex items-center justify-center space-x-8 text-gray-500">
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span>ISO 27001 Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-green-400" />
              <span>SOC 2 Type II</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-blue-400" />
              <span>99.9% Uptime SLA</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UltraFuturisticHero2029;