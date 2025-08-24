import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { BarChart3, Brain, Target, Users, TrendingUp, CheckCircle, ArrowRight, Star, Globe, Cpu, Shield, Rocket, Clock, PieChart, LineChart, Activity, Zap, Eye } from 'lucide-react';

const AIPoweredSalesAnalytics: React.FC = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Live sales performance insights",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Brain,
      title: "AI Intelligence",
      description: "Intelligent data analysis",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Target,
      title: "Predictive Insights",
      description: "Future performance forecasting",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Users,
      title: "Team Performance",
      description: "Individual and team analytics",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  const analyticsFeatures = [
    "Real-time sales performance tracking",
    "AI-powered predictive analytics",
    "Advanced reporting and dashboards",
    "Performance benchmarking and comparison",
    "ROI analysis and optimization",
    "Custom metric creation and tracking"
  ];

  const analyticsAreas = [
    {
      title: "Performance Tracking",
      description: "Comprehensive sales performance monitoring and analysis",
      icon: Activity,
      benefits: ["Real-time metrics", "Performance trends", "Goal tracking"]
    },
    {
      title: "Predictive Analytics",
      description: "AI-powered forecasting and future performance prediction",
      icon: Brain,
      benefits: ["Sales forecasting", "Trend prediction", "Risk assessment"]
    },
    {
      title: "Team Analytics",
      description: "Individual and team performance insights and optimization",
      icon: Users,
      benefits: ["Individual metrics", "Team comparison", "Performance coaching"]
    },
    {
      title: "ROI Analysis",
      description: "Comprehensive return on investment analysis and optimization",
      icon: TrendingUp,
      benefits: ["Cost analysis", "Revenue tracking", "Optimization insights"]
    }
  ];

  const benefits = [
    "Increase sales performance by 200%",
    "Improve forecasting accuracy by 85%",
    "Reduce sales cycle time by 40%",
    "Boost conversion rates by 150%",
    "Optimize resource allocation",
    "Make data-driven decisions"
  ];

  const dashboardFeatures = [
    {
      feature: "Real-time Dashboards",
      description: "Live performance monitoring with instant updates",
      icon: Eye
    },
    {
      feature: "Custom Reports",
      description: "Tailored reporting for specific business needs",
      icon: BarChart3
    },
    {
      feature: "Predictive Models",
      description: "AI-powered forecasting and trend analysis",
      icon: Brain
    },
    {
      feature: "Performance Alerts",
      description: "Automated notifications for key performance changes",
      icon: Zap
    }
  ];

  return (
    <Layout
      title="AI-powered Sales Analytics 2045 - Zion Tech Group"
      description="Revolutionary AI-powered sales analytics platform that provides real-time insights, predictive analytics, and comprehensive performance tracking for maximum sales optimization."
      keywords="AI sales analytics, sales analytics, sales performance, sales forecasting, Zion Tech Group"
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
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 text-indigo-300 text-sm font-medium mb-6">
                <BarChart3 className="w-4 h-4 mr-2" />
                Sales Analytics Technology
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                AI-powered
                <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Sales Analytics
                </span>
                <span className="block text-3xl md:text-4xl text-gray-300 mt-4">2045 Edition</span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
                Unlock the power of data with our revolutionary AI analytics platform. 
                Real-time insights, predictive analytics, and comprehensive performance tracking for maximum sales optimization.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center"
                >
                  Start Analytics
                  <ArrowRight className="ml-2 w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-indigo-500/30 text-indigo-300 font-semibold rounded-lg hover:bg-indigo-500/10 transition-all duration-300"
                >
                  Analytics Demo
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
                Discover the cutting-edge capabilities that make our sales analytics platform truly revolutionary
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

        {/* Analytics Features Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-500/5 to-purple-500/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Analytics Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful analytics capabilities that transform your sales insights
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {analyticsFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-lg text-gray-300">{feature}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Analytics Areas Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Analytics Areas
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive analytics coverage for every aspect of sales performance
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {analyticsAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="p-8 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/30 hover:border-indigo-500/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                    <area.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{area.title}</h3>
                  <p className="text-gray-300 text-lg mb-6">{area.description}</p>
                  <ul className="space-y-2">
                    {area.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-indigo-500 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Dashboard Features Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-500/5 to-purple-500/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Dashboard Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful dashboard capabilities for comprehensive analytics
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {dashboardFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center p-6"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.feature}</h3>
                  <p className="text-gray-300">{feature.description}</p>
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
                Analytics Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See the incredible impact of AI-powered sales analytics
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
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
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
              <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/30 rounded-3xl p-12">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready for Sales Analytics?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Unlock the power of data with AI-powered sales analytics and optimize your performance.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 text-lg"
                >
                  Start Analytics Now
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AIPoweredSalesAnalytics;