import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Home, Zap, Target, Shield, TrendingUp, Globe, 
  CheckCircle, Star, BarChart3, Lock, Smartphone, Monitor, 
  Award, MessageCircle, Cpu
} from 'lucide-react';

export default function AIRealEstatePlatform() {
  const features = [
    {
      icon: <Home className="w-6 h-6" />,
      title: 'Property Valuation',
      description: 'Advanced AI-powered property valuation with real-time market analysis and predictive pricing models.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Market Analysis',
      description: 'Revolutionary market analysis with AI algorithms that identify trends and investment opportunities.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Investment Intelligence',
      description: 'Intelligent investment intelligence with AI-powered ROI analysis and risk assessment.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Risk Assessment',
      description: 'Advanced risk assessment with automated market volatility analysis and portfolio protection.'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Portfolio Optimization',
      description: 'Comprehensive portfolio optimization with AI-powered asset allocation and performance analytics.'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Global Market Access',
      description: 'Access to global real estate markets with AI-powered cross-border analysis and opportunities.'
    }
  ];

  const benefits = [
    'Improve investment returns by 300%',
    'Reduce risk exposure by 70%',
    'Increase market insights by 500%',
    'Accelerate decision making by 200%',
    'Enable 24/7 market monitoring',
    'Optimize portfolio performance',
    'Scale real estate operations globally',
    'Future-proof investment strategy'
  ];

  const useCases = [
    'Property Investment', 'Market Analysis', 'Portfolio Management',
    'Risk Assessment', 'Valuation Models', 'Investment Intelligence',
    'Real Estate Analytics', 'Market Research', 'Portfolio Optimization',
    'Investment Strategy', 'Market Prediction', 'Asset Management'
  ];

  return (
    <>
      <Head>
        <title>AI Real Estate Platform | Zion Tech Group</title>
        <meta name="description" content="Revolutionize real estate with AI-powered property valuation, market analysis, and investment intelligence for optimal returns." />
        <meta name="keywords" content="AI real estate platform, property valuation, market analysis, investment intelligence, real estate technology, AI investment" />
        <meta property="og:title" content="AI Real Estate Platform | Zion Tech Group" />
        <meta property="og:description" content="Revolutionize real estate with AI-powered property valuation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-real-estate-platform" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-real-estate-platform" />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-amber-900/20 to-yellow-900/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center mb-4">
                  <Home className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent mb-6">
                AI Real Estate Platform
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Revolutionize real estate with AI-powered property valuation, 
                market analysis, and investment intelligence for optimal returns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-xl font-semibold text-lg hover:from-orange-600 hover:to-amber-700 transition-all duration-200 shadow-lg shadow-orange-500/25"
                >
                  Unlock Opportunities
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-orange-500/30 text-orange-400 rounded-xl font-semibold text-lg hover:bg-orange-500/10 transition-all duration-200"
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
                Revolutionary Real Estate Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our platform combines cutting-edge AI with real estate expertise to deliver 
                investment solutions that maximize returns and minimize risk.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:border-orange-500/30 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500/20 to-amber-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-orange-400">
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
                Transform Real Estate Investment
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Experience revolutionary improvements in investment returns, risk management, and 
                market insights with our AI real estate platform.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6 hover:border-orange-500/30 transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-400" />
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
                Real Estate Solutions for Every Need
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                From property investment to market analysis, our platform provides AI-powered 
                solutions for every aspect of real estate and investment management.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6 hover:border-orange-500/30 transition-all duration-300 group text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-amber-600/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Cpu className="w-6 h-6 text-orange-400" />
                  </div>
                  <span className="text-white font-medium text-sm">{useCase}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-900/20 via-amber-900/20 to-yellow-900/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Unlock Real Estate Opportunities?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the select group of investors leading the future of AI-powered real estate. 
                Experience unprecedented returns and insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-xl font-semibold text-lg hover:from-orange-600 hover:to-amber-700 transition-all duration-200 shadow-lg shadow-orange-500/25"
                >
                  Unlock Opportunities Now
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-orange-500/30 text-orange-400 rounded-xl font-semibold text-lg hover:bg-orange-500/10 transition-all duration-200"
                >
                  Contact Real Estate Team
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}