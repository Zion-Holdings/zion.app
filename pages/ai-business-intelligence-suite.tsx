import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  CheckCircle, ArrowRight, Star, TrendingUp, Phone, Zap, 
  DollarSign, Shield, Mail, MapPin, Rocket, BarChart3,
  Brain, Database, TrendingUp as TrendingUpIcon, Users,
  Target, BarChart, PieChart, Activity, Eye, Lock
} from 'lucide-react';

import Layout from '../components/layout/Layout';
import UltraAdvancedNavigation from '../components/layout/UltraAdvancedNavigation';

export default function AIBusinessIntelligenceSuite() {
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const features = [
    'Real-time data analysis and visualization',
    'AI-powered trend prediction and forecasting',
    'Automated report generation and scheduling',
    'Custom dashboard builder with drag-and-drop',
    'Multi-source data integration (CRM, ERP, Analytics)',
    'Natural language query interface',
    'Predictive analytics and machine learning models',
    'Mobile-responsive dashboards',
    'Role-based access control and security',
    'API access for custom integrations'
  ];

  const useCases = [
    'Sales performance analysis',
    'Customer behavior insights',
    'Financial forecasting',
    'Marketing ROI optimization',
    'Operational efficiency tracking'
  ];

  const integrations = [
    'Salesforce', 'HubSpot', 'Google Analytics', 'Shopify', 
    'QuickBooks', 'Slack', 'Microsoft Teams'
  ];

  const technology = [
    'Python', 'TensorFlow', 'React', 'Node.js', 'PostgreSQL', 
    'Redis', 'AWS', 'Docker'
  ];

  return (
    <Layout>
      <div className="min-h-screen">
        <Head>
          <title>AI Business Intelligence Suite - Zion Tech Group | Transform Data into Insights</title>
          <meta name="description" content="Transform data into actionable insights with our AI-powered business intelligence platform. Real-time analytics, predictive modeling, and automated reporting. Contact: +1 302 464 0950" />
          <meta name="keywords" content="AI business intelligence, data analytics, predictive analytics, business insights, data visualization, AI analytics, business intelligence platform" />
          <meta name="author" content="Zion Tech Group" />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="AI Business Intelligence Suite - Zion Tech Group" />
          <meta property="og:description" content="AI-powered business intelligence platform with real-time analytics and predictive modeling. Contact: +1 302 464 0950" />
          <meta property="og:url" content="https://ziontechgroup.com/ai-business-intelligence-suite" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://ziontechgroup.com/ai-business-intelligence-suite" />
        </Head>

        <UltraAdvancedNavigation />

        {/* Hero Section */}
        <section className="relative z-10 pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }} className="text-center mb-16">
              <motion.div
                initial={{ scale: 0.8, rotate: -5 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.2 }} className="mb-8">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl shadow-2xl mb-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                  <BarChart3 className="w-12 h-12 text-white relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }} className="text-5xl md:text-7xl font-black bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent mb-6">
                AI Business Intelligence Suite
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }} className="text-2xl md:text-3xl text-gray-200 mb-8 max-w-4xl mx-auto font-medium">
                Transform data into actionable insights with <span className="text-blue-400 font-bold">AI-powered analytics</span>
              </motion.p>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }} className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                Advanced AI-powered business intelligence platform that automatically analyzes your business data, identifies trends, and provides actionable recommendations for growth and optimization.
              </motion.p>

              {/* Pricing and CTA */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }} className="bg-gradient-to-r from-blue-500 to-indigo-600 p-1 rounded-2xl shadow-2xl">
                  <div className="bg-gray-900 rounded-2xl px-8 py-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-white mb-2">$299</div>
                      <div className="text-blue-200 text-lg mb-4">per month</div>
                      <div className="text-gray-300 mb-6">21-day free trial</div>
                      <a 
                        href="/contact" className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-200">
                        Start Free Trial
                      </a>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                >
                  <a 
                    href="/contact" className="text-lg px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-2xl hover:shadow-green-500/25">
                    <span className="flex items-center">
                      <Phone className="mr-3 w-5 h-5" />
                      Talk to Expert
                    </span>
                  </a>
                </motion.div>
              </motion.div>

              {/* Key Benefits */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-blue-400 mb-2">400% ROI</div>
                  <div className="text-gray-300">Average customer sees 400% ROI within 6 months</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-green-400 mb-2">2 Hours</div>
                  <div className="text-gray-300">Setup time from installation to first insights</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-purple-400 mb-2">1800+</div>
                  <div className="text-gray-300">Active customers worldwide</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-gray-900/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                  Powerful Features
                </span>
              </h2>
              <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
                Everything you need to transform your business data into actionable intelligence
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }} className="group bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border border-blue-500/30 rounded-2xl p-6 hover:border-blue-400/60 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
                      {feature}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                  Use Cases
                </span>
              </h2>
              <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
                Discover how our AI BI platform transforms different aspects of your business
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }} className="group bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-2xl p-6 hover:border-green-400/60 hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-green-300 transition-colors">
                      {useCase}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology & Integrations */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-gray-900/20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Technology Stack */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold text-white mb-8">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                    Technology Stack
                  </span>
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {technology.map((tech, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }} className="flex items-center space-x-3 p-3 bg-gray-800/40 rounded-lg border border-gray-700/50">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-gray-200">{tech}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Integrations */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold text-white mb-8">
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Integrations
                  </span>
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {integrations.map((integration, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }} className="flex items-center space-x-3 p-3 bg-gray-800/40 rounded-lg border border-gray-700/50">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-200">{integration}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Market Position & ROI */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Market Position & ROI
                </span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }} className="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border border-yellow-500/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Competitive Advantage</h3>
                <p className="text-gray-300 mb-6">
                  Competitive with Tableau ($70-75/user/month), Power BI ($9.99/user/month), and Looker ($30/user/month). 
                  Our advantage: AI-powered insights, automated reporting, and predictive analytics.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-yellow-400" />
                    <span className="text-gray-200">AI-powered trend prediction</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-yellow-400" />
                    <span className="text-gray-200">Automated report generation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-yellow-400" />
                    <span className="text-gray-200">Natural language queries</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }} className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Return on Investment</h3>
                <div className="text-4xl font-bold text-green-400 mb-4">400% ROI</div>
                <p className="text-gray-300 mb-6">
                  Average customer sees 400% ROI within 6 months through improved decision-making and operational efficiency.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <TrendingUpIcon className="w-5 h-5 text-green-400" />
                    <span className="text-gray-200">Improved decision-making</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <TrendingUpIcon className="w-5 h-5 text-green-400" />
                    <span className="text-gray-200">Operational efficiency gains</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <TrendingUpIcon className="w-5 h-5 text-green-400" />
                    <span className="text-gray-200">Reduced manual reporting time</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-gray-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business Intelligence?
              </h2>
              <p className="text-gray-300 text-xl mb-8 leading-relaxed">
                Join 1800+ businesses that have already transformed their data into actionable insights with our AI-powered platform.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <a 
                    href="/contact" className="text-lg px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 shadow-2xl hover:shadow-blue-500/25">
                    <span className="flex items-center">
                      <Rocket className="mr-3 w-5 h-5" />
                      Start Free Trial
                      <ArrowRight className="ml-3 w-5 h-5" />
                    </span>
                  </a>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                >
                  <a 
                    href="/contact" className="text-lg px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-2xl hover:shadow-green-500/25">
                    <span className="flex items-center">
                      <Phone className="mr-3 w-5 h-5" />
                      Talk to Expert
                    </span>
                  </a>
                </motion.div>
              </div>

              <div className="mt-8 text-gray-400">
                <p className="text-blue-400 hover:text-blue-300 text-blue-400 hover:text-blue-300">Contact us: <a href={`tel:${contactInfo.mobile}`} >{contactInfo.mobile}</a> | <a href={`mailto:${contactInfo.email}`} >{contactInfo.email}</a></p>
                <p className="mt-2">{contactInfo.address}</p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}