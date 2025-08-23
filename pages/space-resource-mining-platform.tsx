import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Rocket, Zap, Target, Shield, TrendingUp, Globe, 
  CheckCircle, Star, BarChart3, Lock, Smartphone, Monitor, 
  Award, MessageCircle, Cpu
} from 'lucide-react';

export default function SpaceResourceMiningPlatform() {
  const features = [
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'Space Mining Operations',
      description: 'Advanced space mining operations with autonomous spacecraft and resource extraction systems.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Resource Mapping',
      description: 'AI-powered resource mapping and identification across asteroids, moons, and planetary bodies.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Autonomous Extraction',
      description: 'Fully autonomous resource extraction with robotic systems and AI-driven operations.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Safety Protocols',
      description: 'Advanced safety protocols and risk management for space mining operations.'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Resource Processing',
      description: 'In-space resource processing and refinement for immediate use or transport to Earth.'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Logistics Management',
      description: 'Comprehensive logistics management for space mining operations and resource transportation.'
    }
  ];

  const benefits = [
    'Access unlimited space resources',
    'Reduce Earth resource dependency by 80%',
    'Enable space colonization by 2030',
    'Create new economic opportunities',
    'Accelerate space exploration by 500%',
    'Enable sustainable resource extraction',
    'Scale space operations globally',
    'Future-proof resource security'
  ];

  const useCases = [
    'Asteroid Mining', 'Lunar Operations', 'Planetary Mining',
    'Resource Mapping', 'Autonomous Extraction', 'Space Logistics',
    'Resource Processing', 'Safety Management', 'Colonization Support',
    'Economic Development', 'Space Infrastructure', 'Resource Security'
  ];

  return (
    <>
      <Head>
        <title>Space Resource Mining Platform | Zion Tech Group</title>
        <meta name="description" content="Pioneer space resource mining with AI-powered operations, autonomous extraction, and resource mapping across the solar system." />
        <meta name="keywords" content="space resource mining platform, asteroid mining, lunar operations, space exploration, autonomous extraction, space technology" />
        <meta property="og:title" content="Space Resource Mining Platform | Zion Tech Group" />
        <meta property="og:description" content="Pioneer space resource mining with AI-powered operations." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/space-resource-mining-platform" />
        <link rel="canonical" href="https://ziontechgroup.com/space-resource-mining-platform" />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-cyan-900/20 to-indigo-900/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-4">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-6">
                Space Resource Mining Platform
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Pioneer space resource mining with AI-powered operations, 
                autonomous extraction, and resource mapping across the solar system.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-200 shadow-lg shadow-blue-500/25"
                >
                  Join the Mission
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-blue-500/30 text-blue-400 rounded-xl font-semibold text-lg hover:bg-blue-500/10 transition-all duration-200"
                >
                  Watch Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary Space Mining Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our platform combines advanced AI with space technology to deliver 
                mining solutions that unlock the resources of the solar system.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-cyan-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-blue-400">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transform Space Exploration
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Experience revolutionary improvements in space resource access, exploration capabilities, and 
                economic opportunities with our space mining platform.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-400" />
                    <span className="text-white font-medium text-sm">{benefit}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Space Mining Solutions for Every Need
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                From asteroid mining to lunar operations, our platform provides AI-powered 
                solutions for every aspect of space resource extraction and exploration.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300 group text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-600/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Cpu className="w-6 h-6 text-blue-400" />
                  </div>
                  <span className="text-white font-medium text-sm">{useCase}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900/20 via-cyan-900/20 to-indigo-900/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Mine the Stars?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the select group of pioneers leading the future of space resource mining. 
                Be part of humanity's expansion into the solar system.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-200 shadow-lg shadow-blue-500/25"
                >
                  Join the Mission
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-blue-500/30 text-blue-400 rounded-xl font-semibold text-lg hover:bg-blue-500/10 transition-all duration-200"
                >
                  Contact Space Team
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}