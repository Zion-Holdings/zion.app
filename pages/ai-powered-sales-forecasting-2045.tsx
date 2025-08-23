import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { TrendingUp, Brain, Target, Users, BarChart3, CheckCircle, ArrowRight, Star, Globe, Cpu, Shield, Rocket, Clock, PieChart, LineChart, Activity, Zap, Eye, Calendar, DollarSign, Graph } from 'lucide-react';

const AIPoweredSalesForecasting: React.FC = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "AI-powered sales forecasting",
      color: "from-rose-500 to-pink-500"
    },
    {
      icon: Brain,
      title: "AI Intelligence",
      description: "Intelligent forecasting models",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Target,
      title: "Accuracy",
      description: "High-precision predictions",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Users,
      title: "Team Insights",
      description: "Individual and team forecasting",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  const forecastingFeatures = [
    "AI-powered predictive modeling and analysis",
    "Real-time forecasting with instant updates",
    "Advanced trend analysis and pattern recognition",
    "Multi-scenario forecasting and what-if analysis",
    "Performance benchmarking and comparison",
    "Automated forecasting workflows and alerts"
  ];

  const forecastingAreas = [
    {
      title: "Revenue Forecasting",
      description: "AI-powered revenue prediction and trend analysis",
      icon: DollarSign,
      benefits: ["Revenue prediction", "Trend analysis", "Growth forecasting"]
    },
    {
      title: "Pipeline Forecasting",
      description: "Intelligent sales pipeline forecasting and optimization",
      icon: BarChart3,
      benefits: ["Pipeline analysis", "Conversion prediction", "Timeline forecasting"]
    },
    {
      title: "Market Forecasting",
      description: "Market trend analysis and competitive intelligence",
      icon: Graph,
      benefits: ["Market trends", "Competitive analysis", "Opportunity identification"]
    },
    {
      title: "Performance Forecasting",
      description: "Individual and team performance prediction",
      icon: Users,
      benefits: ["Performance prediction", "Goal setting", "Resource planning"]
    }
  ];

  const benefits = [
    "Improve forecasting accuracy by 85%",
    "Reduce forecasting time by 70%",
    "Increase revenue predictability by 200%",
    "Optimize resource allocation",
    "Make data-driven decisions",
    "Improve planning and strategy"
  ];

  const forecastingModels = [
    {
      model: "Predictive Analytics",
      description: "AI-powered machine learning models for accurate predictions",
      icon: Brain
    },
    {
      model: "Trend Analysis",
      description: "Advanced trend identification and pattern recognition",
      icon: TrendingUp
    },
    {
      model: "Scenario Planning",
      description: "Multiple scenario forecasting for better decision making",
      icon: Target
    },
    {
      model: "Real-time Updates",
      description: "Instant forecasting updates based on new data",
      icon: Zap
    }
  ];

  return (
    <Layout
      title="AI-powered Sales Forecasting 2045 - Zion Tech Group"
      description="Revolutionary AI-powered sales forecasting platform that provides accurate predictions, trend analysis, and comprehensive forecasting for optimal sales planning and strategy."
      keywords="AI sales forecasting, sales forecasting, sales prediction, sales analytics, Zion Tech Group"
    >
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-rose-500/20 to-pink-500/20 border border-rose-500/30 text-rose-300 text-sm font-medium mb-6">
                <TrendingUp className="w-4 h-4 mr-2" />
                Sales Forecasting Technology
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                AI-powered
                <span className="block bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
                  Sales Forecasting
                </span>
                <span className="block text-3xl md:text-4xl text-gray-300 mt-4">2045 Edition</span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
                Predict the future of sales with our revolutionary AI forecasting platform. 
                Accurate predictions, trend analysis, and comprehensive forecasting for optimal sales planning and strategy.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold rounded-lg hover:from-rose-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center"
                >
                  Start Forecasting
                  <ArrowRight className="ml-2 w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-rose-500/30 text-rose-300 font-semibold rounded-lg hover:bg-rose-500/10 transition-all duration-300"
                >
                  Forecasting Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Revolutionary Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the cutting-edge capabilities that make our sales forecasting platform truly revolutionary
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group"
                >
                  <div className={`p-6 rounded-2xl bg-gradient-to-br ${feature.color} bg-opacity-10 border border-white/10 hover:border-white/20 transition-all duration-300 h-full`}>
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Forecasting Features Section */}
        <section className="py-20 bg-gradient-to-r from-rose-500/5 to-pink-500/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Forecasting Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful forecasting capabilities that transform your sales predictions
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {forecastingFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-lg text-gray-300">{feature}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Forecasting Areas Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Forecasting Areas
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive forecasting coverage for every aspect of sales prediction
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {forecastingAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="p-8 rounded-2xl bg-gradient-to-br from-rose-500/10 to-pink-500/10 border border-rose-500/30 hover:border-rose-500/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                    <area.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{area.title}</h3>
                  <p className="text-gray-300 text-lg mb-6">{area.description}</p>
                  <ul className="space-y-2">
                    {area.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-rose-500 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Forecasting Models Section */}
        <section className="py-20 bg-gradient-to-r from-rose-500/5 to-pink-500/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Forecasting Models
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced forecasting models for accurate predictions
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {forecastingModels.map((model, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center p-6"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <model.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{model.model}</h3>
                  <p className="text-gray-300">{model.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Forecasting Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See the incredible impact of AI-powered sales forecasting
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center p-6"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg text-gray-300 font-medium">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-rose-500/10 to-pink-500/10 border border-rose-500/30 rounded-3xl p-12">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready for Sales Forecasting?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Predict the future of sales with AI-powered forecasting and optimize your strategy.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold rounded-lg hover:from-rose-600 hover:to-pink-600 transition-all duration-300 text-lg"
                >
                  Start Forecasting Now
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AIPoweredSalesForecasting;