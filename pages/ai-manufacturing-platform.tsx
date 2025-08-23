import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Factory, Zap, Target, Shield, TrendingUp, Globe, 
  CheckCircle, Star, BarChart3, Lock, Smartphone, Monitor, 
  Award, MessageCircle, Cpu
} from 'lucide-react';

export default function AIManufacturingPlatform() {
  const features = [
    {
      icon: <Factory className="w-6 h-6" />,
      title: 'Predictive Maintenance',
      description: 'Advanced AI-powered predictive maintenance with real-time equipment monitoring and failure prediction.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Quality Control',
      description: 'Revolutionary quality control with AI algorithms that detect defects and ensure product excellence.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Production Optimization',
      description: 'Intelligent production optimization with AI-driven efficiency improvements and resource allocation.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Supply Chain Management',
      description: 'Advanced supply chain management with automated inventory control and demand forecasting.'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Performance Analytics',
      description: 'Comprehensive performance analytics with AI-powered insights and optimization recommendations.'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Global Operations',
      description: '24/7 global manufacturing operations with AI-powered automation and remote monitoring.'
    }
  ];

  const benefits = [
    'Reduce downtime by 80%',
    'Improve quality by 90%',
    'Increase efficiency by 200%',
    'Reduce costs by 60%',
    'Enable predictive maintenance',
    'Optimize production schedules',
    'Scale manufacturing globally',
    'Future-proof operations'
  ];

  const useCases = [
    'Predictive Maintenance', 'Quality Control', 'Production Optimization',
    'Supply Chain Management', 'Performance Analytics', 'Inventory Control',
    'Equipment Monitoring', 'Process Automation', 'Demand Forecasting',
    'Manufacturing Analytics', 'Resource Planning', 'Operations Management'
  ];

  return (
    <>
      <Head>
        <title>AI Manufacturing Platform | Zion Tech Group</title>
        <meta name="description" content="Revolutionize manufacturing with AI-powered predictive maintenance, quality control, and production optimization for maximum efficiency." />
        <meta name="keywords" content="AI manufacturing platform, predictive maintenance, quality control, production optimization, manufacturing technology, AI automation" />
        <meta property="og:title" content="AI Manufacturing Platform | Zion Tech Group" />
        <meta property="og:description" content="Revolutionize manufacturing with AI-powered predictive maintenance." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-manufacturing-platform" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-manufacturing-platform" />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-gray-900/20 to-zinc-900/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-500 to-gray-600 rounded-2xl flex items-center justify-center mb-4">
                  <Factory className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-400 via-gray-400 to-zinc-400 bg-clip-text text-transparent mb-6">
                AI Manufacturing Platform
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Revolutionize manufacturing with AI-powered predictive maintenance, 
                quality control, and production optimization for maximum efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-slate-500 to-gray-600 text-white rounded-xl font-semibold text-lg hover:from-slate-600 hover:to-gray-700 transition-all duration-200 shadow-lg shadow-slate-500/25"
                >
                  Transform Manufacturing
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-slate-500/30 text-slate-400 rounded-xl font-semibold text-lg hover:bg-slate-500/10 transition-all duration-200"
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
                Revolutionary Manufacturing Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our platform combines cutting-edge AI with manufacturing expertise to deliver 
                solutions that maximize efficiency and minimize downtime.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:border-slate-500/30 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-slate-500/20 to-gray-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-slate-400">
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
                Transform Manufacturing
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Experience revolutionary improvements in efficiency, quality, and 
                productivity with our AI manufacturing platform.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6 hover:border-slate-500/30 transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-slate-400" />
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
                Manufacturing Solutions for Every Need
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                From predictive maintenance to quality control, our platform provides AI-powered 
                solutions for every aspect of manufacturing and operations management.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6 hover:border-slate-500/30 transition-all duration-300 group text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-500/20 to-gray-600/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Cpu className="w-6 h-6 text-slate-400" />
                  </div>
                  <span className="text-white font-medium text-sm">{useCase}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-slate-900/20 via-gray-900/20 to-zinc-900/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Manufacturing?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the select group of manufacturers leading the future of AI-powered operations. 
                Experience unprecedented efficiency and quality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-slate-500 to-gray-600 text-white rounded-xl font-semibold text-lg hover:from-slate-600 hover:to-gray-700 transition-all duration-200 shadow-lg shadow-slate-500/25"
                >
                  Transform Manufacturing Now
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-slate-500/30 text-slate-400 rounded-xl font-semibold text-lg hover:bg-slate-500/10 transition-all duration-200"
                >
                  Contact Manufacturing Team
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}