import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Zap, Shield, Users, Globe } from 'lucide-react';
import AnimatedBackground from '../ui/AnimatedBackground';
import Button from '../ui/Button';

const FuturisticHero: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Get started in minutes with our streamlined onboarding process',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with SOC 2 compliance and 99.9% uptime',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Users,
      title: '24/7 Support',
      description: 'Round-the-clock expert support for all your business needs',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Globe,
      title: 'Global Infrastructure',
      description: 'Worldwide CDN distribution for optimal performance',
      color: 'from-purple-500 to-pink-600'
    }
  ];

  const stats = [
    { number: '45+', label: 'Real Micro SaaS Services' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '14 Days', label: 'Free Trial' },
    { number: '24/7', label: 'Expert Support' }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground variant="quantum" intensity="medium" />
      
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0 futuristic-bg">
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="absolute inset-0 data-stream-bg opacity-10" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-black mb-6 futuristic-font">
            <span className="neon-text-blue">Zion</span>
            <span className="text-white">Tech</span>
            <span className="neon-text-purple">Group</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            The future of <span className="neon-text-cyan">micro SaaS</span> is here. 
            Discover <span className="neon-text-green">45+ real services</span> that solve 
            actual business problems with <span className="neon-text-pink">AI-powered intelligence</span>.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Button
            href="/micro-saas"
            className="btn-futuristic text-lg px-8 py-4 text-white font-semibold"
          >
            Explore Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            href="/contact"
            variant="outline"
            className="border-2 border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black text-lg px-8 py-4 font-semibold transition-all duration-300"
          >
            Get Started
          </Button>
        </motion.div>

        {/* Floating Tech Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center items-center gap-8 mb-12"
        >
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="text-4xl opacity-60 hover:opacity-100 transition-opacity duration-300"
          >
            🤖
          </motion.div>
          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="text-4xl opacity-60 hover:opacity-100 transition-opacity duration-300"
          >
            🔗
          </motion.div>
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="text-4xl opacity-60 hover:opacity-100 transition-opacity duration-300"
          >
            ⚛️
          </motion.div>
          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="text-4xl opacity-60 hover:opacity-100 transition-opacity duration-300"
          >
            🌐
          </motion.div>
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="text-4xl opacity-60 hover:opacity-100 transition-opacity duration-300"
          >
            🚗
          </motion.div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold neon-text-blue mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm md:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
              className="group"
            >
              <div className="relative p-6 rounded-xl bg-gray-900/50 border border-gray-700/50 hover:border-neon-blue/50 transition-all duration-300 hover:transform hover:scale-105">
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-neon-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-neon-blue transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-2 h-2 border-l-2 border-t-2 border-neon-blue/50 rounded-tl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-0 right-0 w-2 h-2 border-r-2 border-t-2 border-neon-blue/50 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-l-2 border-b-2 border-neon-blue/50 rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-r-2 border-b-2 border-neon-blue/50 rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 text-sm mb-4">Trusted by innovative companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-white">🚀</div>
            <div className="text-2xl font-bold text-white">⚡</div>
            <div className="text-2xl font-bold text-white">🔮</div>
            <div className="text-2xl font-bold text-white">🌟</div>
            <div className="text-2xl font-bold text-white">💎</div>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-neon-blue rounded-full opacity-60 animate-pulse" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-neon-purple rounded-full opacity-60 animate-pulse delay-1000" />
      <div className="absolute bottom-40 left-20 w-2 h-2 bg-neon-green rounded-full opacity-60 animate-pulse delay-2000" />
      <div className="absolute bottom-20 right-10 w-3 h-3 bg-neon-pink rounded-full opacity-60 animate-pulse delay-3000" />

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center text-gray-400">
          <span className="text-sm mb-2">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default FuturisticHero;