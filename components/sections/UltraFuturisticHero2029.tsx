import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Play, Star, Zap, Brain, Atom, Rocket, Dna, Globe2, CheckCircle } from 'lucide-react';

export default function UltraFuturisticHero2029() {
  const features = [
    { icon: Brain, text: '2029 AI Services', color: 'from-violet-500 to-purple-500' },
    { icon: Atom, text: 'Quantum Innovation', color: 'from-indigo-500 to-blue-500' },
    { icon: Rocket, text: 'Space Technology', color: 'from-blue-500 to-cyan-500' },
    { icon: Dna, text: 'Biotech Breakthroughs', color: 'from-emerald-500 to-teal-500' },
    { icon: Globe2, text: 'Metaverse Solutions', color: 'from-orange-500 to-red-500' }
  ];

  const stats = [
    { number: '500+', label: 'Innovative Services' },
    { number: '50+', label: 'Technology Categories' },
    { number: '99.9%', label: 'Success Rate' },
    { number: '24/7', label: 'Global Support' }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Revolutionary
            </span>
            <br />
            <span className="text-white">2029 Technology</span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Experience the future with our cutting-edge AI, quantum computing, space technology, 
            biotechnology, and metaverse solutions that were once science fiction.
          </p>
        </motion.div>

        {/* Feature Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.text}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full bg-gradient-to-r ${feature.color} text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
            >
              <feature.icon className="w-5 h-5" />
              <span>{feature.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <Link
            href="/services"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <span>Explore 2029 Services</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>

          <Link
            href="/contact"
            className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-purple-500/50 rounded-2xl hover:bg-purple-500/20 transition-all duration-300 backdrop-blur-sm"
          >
            <span className="flex items-center space-x-2">
              <span>Get Started Today</span>
              <Zap className="w-5 h-5 group-hover:animate-pulse" />
            </span>
          </Link>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              className="text-center group"
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-400"
        >
          <div className="flex items-center space-x-2">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 border-2 border-white/20"
                ></div>
              ))}
            </div>
            <span className="text-sm">Trusted by 10,000+ companies</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm">5.0/5.0 Rating</span>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            ></motion.div>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
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
        className="absolute top-1/4 right-10 w-20 h-20 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 rounded-full blur-xl"
      ></motion.div>

      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-1/4 left-10 w-16 h-16 bg-gradient-to-br from-pink-400/20 to-purple-600/20 rounded-full blur-xl"
      ></motion.div>
    </section>
  );
}