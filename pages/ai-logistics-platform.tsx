import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Truck, Zap, Target, Shield, TrendingUp, Globe, 
  CheckCircle, Star, BarChart3, Lock, Smartphone, Monitor, 
  Award, MessageCircle, Cpu
} from 'lucide-react';

export default function AILogisticsPlatform() {
  const features = [
    {
      icon: <Truck className="w-6 h-6" />,
      title: 'Route Optimization',
      description: 'Advanced AI-powered route optimization with real-time traffic analysis and dynamic path planning.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Demand Forecasting',
      description: 'Revolutionary demand forecasting with AI algorithms that predict supply chain needs and optimize inventory.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Supply Chain Optimization',
      description: 'Intelligent supply chain optimization with AI-driven efficiency improvements and cost reduction.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Real-Time Tracking',
      description: 'Advanced real-time tracking with automated monitoring and proactive issue resolution.'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Performance Analytics',
      description: 'Comprehensive performance analytics with AI-powered insights and optimization recommendations.'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Global Logistics',
      description: '24/7 global logistics operations with AI-powered automation and cross-border coordination.'
    }
  ];

  const benefits = [
    'Reduce delivery time by 60%',
    'Improve efficiency by 200%',
    'Reduce costs by 50%',
    'Increase customer satisfaction by 150%',
    'Enable real-time optimization',
    'Optimize supply chains',
    'Scale logistics globally',
    'Future-proof operations'
  ];

  const useCases = [
    'Route Optimization', 'Demand Forecasting', 'Supply Chain Management',
    'Real-Time Tracking', 'Performance Analytics', 'Inventory Management',
    'Fleet Management', 'Warehouse Optimization', 'Last-Mile Delivery',
    'Logistics Analytics', 'Resource Planning', 'Operations Management'
  ];

  return (
    <>
      <Head>
        <title>AI Logistics Platform | Zion Tech Group</title>
        <meta name="description" content="Revolutionize logistics with AI-powered route optimization, demand forecasting, and supply chain optimization for maximum efficiency." />
        <meta name="keywords" content="AI logistics platform, route optimization, demand forecasting, supply chain optimization, logistics technology, AI transportation" />
        <meta property="og:title" content="AI Logistics Platform | Zion Tech Group" />
        <meta property="og:description" content="Revolutionize logistics with AI-powered route optimization." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-logistics-platform" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-logistics-platform" />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-indigo-900/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4">
                  <Truck className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent mb-6">
                AI Logistics Platform
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Revolutionize logistics with AI-powered route optimization, 
                demand forecasting, and supply chain optimization for maximum efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-lg shadow-cyan-500/25"
                >
                  Optimize Logistics
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-cyan-500/30 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-200"
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
                Revolutionary Logistics Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our platform combines cutting-edge AI with logistics expertise to deliver 
                solutions that maximize efficiency and minimize costs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-cyan-400">
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
                Transform Logistics
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Experience revolutionary improvements in delivery speed, efficiency, and 
                cost reduction with our AI logistics platform.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
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
                Logistics Solutions for Every Need
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                From route optimization to supply chain management, our platform provides AI-powered 
                solutions for every aspect of logistics and transportation.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300 group text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Cpu className="w-6 h-6 text-cyan-400" />
                  </div>
                  <span className="text-white font-medium text-sm">{useCase}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-900/20 via-blue-900/20 to-indigo-900/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Optimize Logistics?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the select group of logistics providers leading the future of AI-powered operations. 
                Experience unprecedented efficiency and cost savings.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-lg shadow-cyan-500/25"
                >
                  Optimize Logistics Now
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-cyan-500/30 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-200"
                >
                  Contact Logistics Team
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}