import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Users, Zap, Target, Shield, TrendingUp, Globe, 
  CheckCircle, Star, BarChart3, Lock, Smartphone, Monitor, 
  Award, MessageCircle, Cpu
} from 'lucide-react';

export default function AICustomerSuccessPlatform() {
  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Customer Behavior Analysis',
      description: 'Advanced AI-powered customer behavior analysis with real-time insights and predictive modeling.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Predictive Churn Prevention',
      description: 'Revolutionary predictive churn prevention with AI algorithms that identify at-risk customers.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Personalized Engagement',
      description: 'Intelligent personalized engagement with AI-driven customer journey optimization.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Customer Health Monitoring',
      description: 'Advanced customer health monitoring with automated risk assessment and intervention.'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Success Metrics Analytics',
      description: 'Comprehensive success metrics analytics with AI-powered insights and optimization.'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Global Customer Support',
      description: '24/7 global customer support with AI-powered automation and human-like interactions.'
    }
  ];

  const benefits = [
    'Reduce customer churn by 80%',
    'Improve customer satisfaction by 90%',
    'Increase retention rates by 200%',
    'Accelerate customer success by 300%',
    'Enable proactive customer care',
    'Optimize customer journeys',
    'Scale customer success globally',
    'Future-proof customer relationships'
  ];

  const useCases = [
    'Customer Analytics', 'Churn Prevention', 'Engagement Optimization',
    'Health Monitoring', 'Success Metrics', 'Journey Mapping',
    'Proactive Support', 'Personalization', 'Customer Care',
    'Retention Strategies', 'Success Planning', 'Relationship Management'
  ];

  return (
    <>
      <Head>
        <title>AI Customer Success Platform | Zion Tech Group</title>
        <meta name="description" content="Revolutionize customer success with AI-powered behavior analysis, churn prevention, and personalized engagement for optimal customer relationships." />
        <meta name="keywords" content="AI customer success platform, customer behavior analysis, churn prevention, customer engagement, customer success, AI technology" />
        <meta property="og:title" content="AI Customer Success Platform | Zion Tech Group" />
        <meta property="og:description" content="Revolutionize customer success with AI-powered behavior analysis." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-customer-success-platform" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-customer-success-platform" />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-900/20 via-blue-900/20 to-indigo-900/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent mb-6">
                AI Customer Success Platform
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Revolutionize customer success with AI-powered behavior analysis, 
                churn prevention, and personalized engagement for optimal customer relationships.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-xl font-semibold text-lg hover:from-sky-600 hover:to-blue-700 transition-all duration-200 shadow-lg shadow-sky-500/25"
                >
                  Transform Success
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-sky-500/30 text-sky-400 rounded-xl font-semibold text-lg hover:bg-sky-500/10 transition-all duration-200"
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
                Revolutionary Customer Success Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our platform combines cutting-edge AI with customer success expertise to deliver 
                solutions that maximize customer satisfaction and retention.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:border-sky-500/30 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-sky-500/20 to-blue-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-sky-400">
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
                Transform Customer Success
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Experience revolutionary improvements in customer retention, satisfaction, and 
                engagement with our AI customer success platform.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6 hover:border-sky-500/30 transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-sky-400" />
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
                Customer Success Solutions for Every Need
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                From customer analytics to churn prevention, our platform provides AI-powered 
                solutions for every aspect of customer success and relationship management.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6 hover:border-sky-500/30 transition-all duration-300 group text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-sky-500/20 to-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Cpu className="w-6 h-6 text-sky-400" />
                  </div>
                  <span className="text-white font-medium text-sm">{useCase}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-sky-900/20 via-blue-900/20 to-indigo-900/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Customer Success?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the select group of companies leading the future of AI-powered customer success. 
                Experience unprecedented customer satisfaction and retention.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-xl font-semibold text-lg hover:from-sky-600 hover:to-blue-700 transition-all duration-200 shadow-lg shadow-sky-500/25"
                >
                  Transform Success Now
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-sky-500/30 text-sky-400 rounded-xl font-semibold text-lg hover:bg-sky-500/10 transition-all duration-200"
                >
                  Contact Success Team
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}