import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Brain, BarChart3, Zap, TrendingUp, Target, Cpu, 
  ArrowRight, Star, Shield, Rocket, CheckCircle, Eye,
  Infinity, Globe, Users, Sparkles, Database
} from 'lucide-react';

const AIAutonomousBusinessIntelligence2044: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "Autonomous Analysis",
      description: "Self-learning AI that continuously analyzes business data",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: BarChart3,
      title: "Predictive Insights",
      description: "Advanced forecasting and trend analysis capabilities",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Target,
      title: "Strategic Recommendations",
      description: "AI-powered business strategy optimization",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Cpu,
      title: "Real-time Processing",
      description: "Instant data analysis and decision support",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const capabilities = [
    "Automated data collection and processing",
    "Predictive analytics and forecasting",
    "Real-time business intelligence dashboards",
    "Autonomous decision-making systems",
    "Market trend analysis and insights",
    "Performance optimization recommendations"
  ];

  const stats = [
    { number: "95%", label: "Accuracy Rate", icon: Star },
    { number: "24/7", label: "Autonomous Operation", icon: Brain },
    { number: "10x", label: "Faster Insights", icon: Zap },
    { number: "∞", label: "Learning Potential", icon: Infinity }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-emerald-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 text-emerald-300 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                Autonomous Business Intelligence 2044
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent mb-6">
                AI Autonomous Business Intelligence
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Transform your business with fully autonomous AI intelligence that continuously 
                learns, analyzes, and provides strategic insights for optimal decision-making.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                <Zap className="w-5 h-5 mr-2" />
                Launch Intelligence Platform
              </button>
              <button className="px-8 py-4 bg-gray-800/50 text-white font-semibold rounded-xl border border-gray-600 hover:bg-gray-700/50 transition-all duration-300 flex items-center justify-center">
                <Eye className="w-5 h-5 mr-2" />
                View Demo
              </button>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary Intelligence Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the cutting-edge autonomous capabilities that make our business 
                intelligence platform the most advanced in the world.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-800/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300 group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 bg-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-10 h-10 text-emerald-400" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our autonomous business intelligence platform delivers unprecedented capabilities 
                that transform how you make business decisions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-r from-emerald-900/20 to-teal-900/20 rounded-2xl p-8 border border-emerald-500/30"
              >
                <h3 className="text-2xl font-semibold text-white mb-6">Core Capabilities</h3>
                <ul className="space-y-4">
                  {capabilities.slice(0, 3).map((capability, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                      {capability}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-r from-teal-900/20 to-cyan-900/20 rounded-2xl p-8 border border-teal-500/30"
              >
                <h3 className="text-2xl font-semibold text-white mb-6">Advanced Features</h3>
                <ul className="space-y-4">
                  {capabilities.slice(3).map((capability, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-teal-400 mr-3 flex-shrink-0" />
                      {capability}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-emerald-900/30 to-teal-900/30 rounded-3xl p-12 border border-emerald-500/30"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the autonomous intelligence revolution and discover how AI can 
                optimize your business operations and decision-making processes.
              </p>
              <button className="px-10 py-5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 flex items-center mx-auto">
                <Brain className="w-6 h-6 mr-3" />
                Get Started
                <ArrowRight className="w-6 h-6 ml-3" />
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AIAutonomousBusinessIntelligence2044;