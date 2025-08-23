import React from 'react';
import Head from 'next/head';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  CheckCircle, 
  Shield, 
  Zap, 
  Target, 
  BarChart3, 
  DollarSign, 
  Clock,
  ArrowRight,
  Star,
  Calculator,
  Globe,
  Bot,
  Smartphone,
  Mail,
  Phone,
  Eye,
  AlertTriangle,
  Lightbulb,
  PieChart,
  LineChart
} from 'lucide-react';

export default function AIRevenueForecastingCopilot() {
  const features = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Predictive Revenue Modeling',
      description: 'AI-powered forecasting using historical data, market trends, and predictive analytics'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Real-time Analytics',
      description: 'Live monitoring and analysis of revenue performance with instant insights'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Goal Setting & Tracking',
      description: 'Intelligent goal setting and progress tracking with automated alerts'
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Strategic Insights',
      description: 'Actionable recommendations for revenue optimization and growth strategies'
    }
  ];

  const capabilities = [
    'Machine Learning Forecasting',
    'Seasonal Pattern Recognition',
    'Market Trend Analysis',
    'Customer Behavior Modeling',
    'Risk Assessment',
    'Scenario Planning',
    'Performance Benchmarking',
    'Automated Reporting',
    'Integration APIs',
    'Real-time Dashboards'
  ];

  const useCases = [
    'Sales Forecasting',
    'Budget Planning',
    'Investment Decisions',
    'Resource Allocation',
    'Pricing Strategy',
    'Market Expansion',
    'Product Launch Planning',
    'Customer Acquisition'
  ];

  const benefits = [
    'Improved Accuracy',
    'Faster Decision Making',
    'Risk Mitigation',
    'Cost Reduction',
    'Better Planning',
    'Increased Revenue',
    'Competitive Advantage',
    'Data-Driven Insights'
  ];

  return (
    <Layout>
      <Head>
        <title>AI Revenue Forecasting Copilot | Zion Tech Group</title>
        <meta name="description" content="AI-powered revenue forecasting and financial planning system. Predict future revenue with machine learning and advanced analytics." />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-revenue-forecasting-copilot" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 mb-6">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600 bg-clip-text text-transparent mb-6">
                AI Revenue Forecasting Copilot
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                AI-powered revenue forecasting and financial planning system. 
                Predict future revenue with machine learning and advanced analytics.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="/contact" 
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-full hover:from-emerald-600 hover:to-teal-700 transition-all duration-300"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a 
                  href="/pricing" 
                  className="inline-flex items-center px-8 py-4 border-2 border-emerald-500 text-emerald-400 font-semibold rounded-full hover:bg-emerald-500 hover:text-white transition-all duration-300"
                >
                  View Pricing
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Intelligent Revenue Forecasting
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI Revenue Forecasting Copilot provides accurate predictions 
                and strategic insights for better financial planning.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                  className="p-8 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-emerald-500/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-400">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-20 px-4 bg-black/30">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powered by cutting-edge AI and machine learning for intelligent financial forecasting.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={capability}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                  className="p-6 rounded-xl bg-black/40 border border-gray-700/60 hover:border-emerald-500/40 transition-all duration-300 text-center"
                >
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    <span className="text-white font-semibold text-sm">{capability}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Business Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive revenue forecasting solutions for various business scenarios.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
                  className="p-6 rounded-xl bg-black/40 border border-gray-700/60 hover:border-emerald-500/40 transition-all duration-300 text-center"
                >
                  <div className="text-white font-semibold">{useCase}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-black/30">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Business Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your financial planning with AI-powered revenue forecasting.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 + index * 0.1 }}
                  className="p-6 rounded-xl bg-black/40 border border-gray-700/60 hover:border-emerald-500/40 transition-all duration-300 text-center"
                >
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <Star className="w-5 h-5 text-emerald-400" />
                    <span className="text-white font-semibold text-sm">{benefit}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="text-center p-12 rounded-3xl bg-gradient-to-r from-emerald-500/20 to-teal-600/20 border border-emerald-500/30"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Predict Your Revenue?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Make data-driven financial decisions with intelligent AI forecasting. 
                Get started with our AI Revenue Forecasting Copilot today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="/contact" 
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-full hover:from-emerald-600 hover:to-teal-700 transition-all duration-300"
                >
                  Contact Our Experts
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a 
                  href="/market-pricing" 
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300"
                >
                  View Pricing
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}