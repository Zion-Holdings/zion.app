import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Megaphone, Target, Users, BarChart3, Zap, Shield, 
  Mail, Calendar, CheckCircle, Star, Globe, Lock, 
  Smartphone, Monitor, TrendingUp
} from 'lucide-react';

export default function AIMarketingAutomationSuite() {
  const features = [
    {
      icon: <Target className="w-6 h-6" />,
      title: 'AI-Powered Audience Targeting',
      description: 'Intelligent audience segmentation and targeting using machine learning to identify your most valuable prospects.'
    },
    {
      icon: <Megaphone className="w-6 h-6" />,
      title: 'Automated Campaign Management',
      description: 'Create, optimize, and manage marketing campaigns automatically with AI-driven insights and recommendations.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Personalized Content Delivery',
      description: 'Deliver personalized content and messaging to each customer based on their behavior and preferences.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Smart Lead Nurturing',
      description: 'Automated lead nurturing workflows that adapt to customer behavior and engagement patterns.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Multi-Channel Orchestration',
      description: 'Coordinate marketing efforts across email, social media, web, and mobile channels seamlessly.'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Advanced Analytics & ROI',
      description: 'Comprehensive marketing analytics with AI-powered insights to optimize campaigns and maximize ROI.'
    }
  ];

  const benefits = [
    'Increase marketing ROI by 300%',
    'Reduce customer acquisition costs by 50%',
    'Improve email open rates by 40%',
    'Boost conversion rates by 60%',
    'Reduce manual work by 80%',
    'Improve customer lifetime value by 45%',
    'Scale marketing operations effortlessly',
    'Gain real-time campaign insights'
  ];

  const integrations = [
    'HubSpot', 'Mailchimp', 'Salesforce', 'Google Analytics',
    'Facebook Ads', 'Google Ads', 'LinkedIn Ads', 'Twitter Ads',
    'Shopify', 'WooCommerce', 'Zapier', 'Slack',
    'Microsoft Teams', 'Discord', 'WhatsApp Business'
  ];

  return (
    <>
      <Head>
        <title>AI Marketing Automation Suite | Zion Tech Group</title>
        <meta name="description" content="Transform your marketing with AI-powered automation. Personalized campaigns, intelligent targeting, and automated lead nurturing." />
        <meta name="keywords" content="AI marketing automation, marketing automation, lead nurturing, campaign management, personalized marketing, marketing analytics" />
        <meta property="og:title" content="AI Marketing Automation Suite | Zion Tech Group" />
        <meta property="og:description" content="Transform your marketing with AI-powered automation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-marketing-automation-suite" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-marketing-automation-suite" />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-900/20 via-purple-900/20 to-blue-900/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4">
                  <Megaphone className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
                AI Marketing Automation Suite
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your marketing with AI-powered automation. Create personalized campaigns, 
                intelligent targeting, and automated lead nurturing that drives growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-200 shadow-lg shadow-pink-500/25"
                >
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-pink-500/30 text-pink-400 rounded-xl font-semibold text-lg hover:bg-pink-500/10 transition-all duration-200"
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
                Powerful Marketing Automation Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our AI platform combines advanced automation with intelligent insights to deliver 
                marketing campaigns that convert and engage your audience.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:border-pink-500/30 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-pink-400">
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
                Transform Your Marketing Results
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Experience dramatic improvements in marketing efficiency, conversion rates, and ROI 
                with our AI-powered marketing automation suite.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6 hover:border-pink-500/30 transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-pink-400" />
                    <span className="text-white font-medium text-sm">{benefit}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Seamless Platform Integrations
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Connect with your existing marketing tools and platforms. Our AI solution 
                integrates with the most popular marketing and advertising platforms.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {integrations.map((integration, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6 hover:border-pink-500/30 transition-all duration-300 group text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Globe className="w-6 h-6 text-pink-400" />
                  </div>
                  <span className="text-white font-medium text-sm">{integration}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-pink-900/20 via-purple-900/20 to-blue-900/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Marketing?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of marketers that have already revolutionized their campaigns 
                with AI automation. Start your free trial today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-200 shadow-lg shadow-pink-500/25"
                >
                  Get Started Now
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-pink-500/30 text-pink-400 rounded-xl font-semibold text-lg hover:bg-pink-500/10 transition-all duration-200"
                >
                  Contact Sales
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}