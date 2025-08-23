import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  MessageCircle, Bot, Clock, Users, Shield, 
  Zap, BarChart3, Headphones, CheckCircle, 
  Star, Globe, Lock, Smartphone, Monitor
} from 'lucide-react';

export default function AICustomerServiceAutomation() {
  const features = [
    {
      icon: <Bot className="w-6 h-6" />,
      title: '24/7 AI Support',
      description: 'Intelligent chatbots that provide instant support around the clock, handling common inquiries and escalating complex issues.'
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'Multi-Channel Support',
      description: 'Seamlessly handle customer inquiries across email, chat, social media, and phone with unified AI responses.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Instant Response',
      description: 'Reduce response times from hours to seconds with AI-powered instant answers and automated workflows.'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Smart Analytics',
      description: 'Track customer satisfaction, response times, and common issues with detailed analytics and insights.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Secure & Compliant',
      description: 'Enterprise-grade security with GDPR compliance, data encryption, and secure customer data handling.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Human Handoff',
      description: 'Seamlessly transfer complex cases to human agents with full context and conversation history.'
    }
  ];

  const benefits = [
    'Reduce support costs by up to 70%',
    'Improve customer satisfaction scores',
    'Handle 10x more inquiries simultaneously',
    'Provide 24/7 customer support',
    'Reduce average response time to under 30 seconds',
    'Increase first-contact resolution rates',
    'Scale support operations effortlessly',
    'Gain valuable customer insights'
  ];

  const integrations = [
    'Zendesk', 'Intercom', 'Freshdesk', 'Help Scout',
    'Slack', 'Microsoft Teams', 'Discord', 'WhatsApp',
    'Facebook Messenger', 'Twitter', 'Instagram',
    'Shopify', 'WooCommerce', 'Magento', 'Salesforce'
  ];

  return (
    <>
      <Head>
        <title>AI Customer Service Automation | Zion Tech Group</title>
        <meta name="description" content="Transform your customer service with AI-powered automation. 24/7 support, instant responses, and intelligent issue resolution." />
        <meta name="keywords" content="AI customer service, chatbot automation, customer support AI, 24/7 support, customer service automation" />
        <meta property="og:title" content="AI Customer Service Automation | Zion Tech Group" />
        <meta property="og:description" content="Transform your customer service with AI-powered automation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-customer-service-automation" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-customer-service-automation" />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-blue-900/20 to-purple-900/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
                AI Customer Service Automation
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Revolutionize your customer service with AI-powered automation. Provide 24/7 support, 
                instant responses, and intelligent issue resolution that delights your customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-xl font-semibold text-lg hover:from-green-600 hover:to-blue-700 transition-all duration-200 shadow-lg shadow-green-500/25"
                >
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-green-500/30 text-green-400 rounded-xl font-semibold text-lg hover:bg-green-500/10 transition-all duration-200"
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
                Powerful Features for Modern Customer Service
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our AI platform combines cutting-edge natural language processing with intelligent 
                automation to deliver exceptional customer experiences.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:border-green-500/30 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500/20 to-blue-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-green-400">
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
                Transform Your Customer Service Operations
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Experience dramatic improvements in efficiency, customer satisfaction, and operational costs 
                with our AI-powered customer service automation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6 hover:border-green-500/30 transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
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
                Connect with your existing customer service tools and platforms. Our AI solution 
                integrates with the most popular helpdesk and communication platforms.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {integrations.map((integration, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6 hover:border-green-500/30 transition-all duration-300 group text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Globe className="w-6 h-6 text-green-400" />
                  </div>
                  <span className="text-white font-medium text-sm">{integration}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-900/20 via-blue-900/20 to-purple-900/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Customer Service?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses that have already revolutionized their customer service 
                with AI automation. Start your free trial today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-xl font-semibold text-lg hover:from-green-600 hover:to-blue-700 transition-all duration-200 shadow-lg shadow-green-500/25"
                >
                  Get Started Now
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-green-500/30 text-green-400 rounded-xl font-semibold text-lg hover:bg-green-500/10 transition-all duration-200"
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