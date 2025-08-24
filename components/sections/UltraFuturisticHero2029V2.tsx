import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, TrendingUp, Zap, Shield, Brain, Atom, Rocket, Target, CheckCircle, Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import Button from '../ui/Button';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const heroStats = [
  { label: 'Services Delivered', value: '500+', icon: CheckCircle },
  { label: 'Client Satisfaction', value: '99.2%', icon: Star },
  { label: 'ROI Improvement', value: '300%+', icon: TrendingUp },
  { label: 'Global Reach', value: '50+ Countries', icon: Target }
];

const featuredServices = [
  {
    name: 'AI Business Predictor Pro',
    description: '95% accuracy business predictions with quantum-enhanced AI',
    price: '$2,999/month',
    href: '/ai-business-predictor-pro',
    icon: Brain,
    color: 'from-purple-600 via-pink-600 to-rose-600'
  },
  {
    name: 'Quantum Secure Communication',
    description: 'Unbreakable quantum encryption for enterprise',
    price: '$8,999/month',
    href: '/quantum-secure-communication-enterprise',
    icon: Shield,
    color: 'from-blue-600 via-indigo-600 to-purple-600'
  },
  {
    name: 'Space Mining Operations',
    description: 'Automated asteroid mining and resource extraction',
    price: '$75,999/month',
    href: '/space-mining-operations-platform',
    icon: Rocket,
    color: 'from-teal-600 via-emerald-600 to-green-600'
  }
];

export default function UltraFuturisticHero2029V2() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -150, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-40 right-20 w-40 h-40 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -150, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 left-1/2 w-36 h-36 bg-gradient-to-r from-green-500/20 to-yellow-500/20 rounded-full blur-3xl"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Hero Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-900/50 via-pink-900/50 to-rose-900/50 border border-purple-500/30 rounded-full px-6 py-3 mb-8"
        >
          <Zap className="h-5 w-5 text-yellow-400" />
          <span className="text-purple-200 font-medium">2029 Revolutionary Technology Services</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8"
        >
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
            Transform Your Business
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
            With Revolutionary
          </span>
          <br />
          <span className="bg-gradient-to-r from-green-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
            AI & Quantum Tech
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-purple-200 mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          Experience the future of technology with our cutting-edge AI consciousness platforms, 
          quantum computing solutions, and space mining operations. 
          <span className="text-purple-300 font-semibold"> 95% accuracy, 300% ROI improvement, and 99.2% client satisfaction.</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
        >
          <Link href="/services">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 hover:from-purple-700 hover:via-pink-700 hover:to-rose-700 text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-purple-500/25"
            >
              Explore Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          
          <Link href="/contact">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-purple-500/50 text-purple-200 hover:bg-purple-500/10 px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300"
            >
              Get Started Today
            </Button>
          </Link>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {heroStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-3">
                <stat.icon className="h-8 w-8 text-purple-400" />
              </div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-purple-300 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-purple-200 mb-8">
            Featured Revolutionary Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                className="group"
              >
                <Link href={service.href}>
                  <div className="bg-gradient-to-br from-black/50 to-purple-900/20 border border-purple-500/30 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-purple-200 mb-2 group-hover:text-purple-300 transition-colors duration-300">
                      {service.name}
                    </h3>
                    <p className="text-purple-300 mb-4 text-sm leading-relaxed">
                      {service.description}
                    </p>
                    <div className="text-2xl font-bold text-purple-400">
                      {service.price}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="bg-gradient-to-r from-purple-900/30 via-blue-900/30 to-cyan-900/30 border border-purple-500/30 rounded-2xl p-8 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-purple-200 mb-6">
            Ready to Transform Your Business?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-purple-400" />
              <div>
                <div className="text-sm text-purple-300">Phone</div>
                <div className="text-purple-200 font-semibold">{contactInfo.mobile}</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-purple-400" />
              <div>
                <div className="text-sm text-purple-300">Email</div>
                <div className="text-purple-200 font-semibold">{contactInfo.email}</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Target className="h-5 w-5 text-purple-400" />
              <div>
                <div className="text-sm text-purple-300">Location</div>
                <div className="text-purple-200 font-semibold">{contactInfo.address}</div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 hover:from-purple-700 hover:via-pink-700 hover:to-rose-700 text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300"
              >
                Contact Us Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-purple-500/50 rounded-full flex justify-center"
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
}