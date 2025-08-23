import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  DollarSign, Zap, Target, Shield, TrendingUp, Globe, 
  CheckCircle, Star, BarChart3, Lock, Smartphone, Monitor, 
  Award, MessageCircle, Cpu
} from 'lucide-react';

export default function AIFinancialIntelligence() {
  const features = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: 'Financial Data Analysis',
      description: 'Advanced AI-powered financial data analysis with real-time market insights and trend identification.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Investment Intelligence',
      description: 'Revolutionary investment intelligence with AI algorithms that identify opportunities and risks.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Risk Assessment',
      description: 'Intelligent risk assessment with AI-powered analysis of market volatility and portfolio exposure.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Compliance Monitoring',
      description: 'Advanced compliance monitoring with automated regulatory reporting and risk management.'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Performance Analytics',
      description: 'Comprehensive performance analytics with AI-powered insights and optimization recommendations.'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Global Market Intelligence',
      description: 'Access to global market intelligence with cross-border analysis and international opportunities.'
    }
  ];

  const benefits = [
    'Improve investment returns by 300%',
    'Reduce risk exposure by 70%',
    'Increase market insights by 500%',
    'Accelerate decision making by 200%',
    'Enable 24/7 market monitoring',
    'Optimize portfolio performance',
    'Scale financial operations globally',
    'Future-proof financial strategy'
  ];

  const useCases = [
    'Investment Analysis', 'Risk Management', 'Portfolio Optimization',
    'Market Intelligence', 'Compliance Monitoring', 'Performance Analytics',
    'Financial Planning', 'Asset Allocation', 'Trading Strategies',
    'Financial Reporting', 'Market Research', 'Investment Strategy'
  ];

  return (
    <>
      <Head>
        <title>AI Financial Intelligence | Zion Tech Group</title>
        <meta name="description" content="Revolutionize financial intelligence with AI-powered analysis, investment insights, and risk management for optimal financial performance." />
        <meta name="keywords" content="AI financial intelligence, financial analysis, investment intelligence, risk management, portfolio optimization, financial technology" />
        <meta property="og:title" content="AI Financial Intelligence | Zion Tech Group" />
        <meta property="og:description" content="Revolutionize financial intelligence with AI-powered analysis." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-financial-intelligence" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-financial-intelligence" />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/20 via-amber-900/20 to-orange-900/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-2xl flex items-center justify-center mb-4">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 bg-clip-text text-transparent mb-6">
                AI Financial Intelligence
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Revolutionize financial intelligence with AI-powered analysis, 
                investment insights, and risk management for optimal financial performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-amber-600 text-white rounded-xl font-semibold text-lg hover:from-yellow-600 hover:to-amber-700 transition-all duration-200 shadow-lg shadow-yellow-500/25"
                >
                  Unlock Intelligence
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-yellow-500/30 text-yellow-400 rounded-xl font-semibold text-lg hover:bg-yellow-500/10 transition-all duration-200"
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
                Revolutionary Financial Intelligence Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our platform combines cutting-edge AI with financial expertise to deliver 
                intelligence solutions that maximize returns and minimize risk.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:border-yellow-500/30 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-yellow-500/20 to-amber-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-yellow-400">
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
                Transform Financial Intelligence
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Experience revolutionary improvements in investment returns, risk management, and 
                market insights with our AI financial intelligence platform.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6 hover:border-yellow-500/30 transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-yellow-400" />
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
                Financial Intelligence Solutions for Every Need
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                From investment analysis to risk management, our platform provides AI-powered 
                solutions for every aspect of financial intelligence and decision making.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6 hover:border-yellow-500/30 transition-all duration-300 group text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-amber-600/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Cpu className="w-6 h-6 text-yellow-400" />
                  </div>
                  <span className="text-white font-medium text-sm">{useCase}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-yellow-900/20 via-amber-900/20 to-orange-900/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Unlock Financial Intelligence?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the select group of financial professionals leading the future of AI-powered intelligence. 
                Experience unprecedented insights and performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-amber-600 text-white rounded-xl font-semibold text-lg hover:from-yellow-600 hover:to-amber-700 transition-all duration-200 shadow-lg shadow-yellow-500/25"
                >
                  Unlock Intelligence Now
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-yellow-500/30 text-yellow-400 rounded-xl font-semibold text-lg hover:bg-yellow-500/10 transition-all duration-200"
                >
                  Contact Finance Team
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}