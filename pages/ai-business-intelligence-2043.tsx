import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { BarChart3, Brain, Target, TrendingUp, Users, Shield, Globe, Zap } from 'lucide-react';

const AIBusinessIntelligence2043: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-emerald-900/20 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
                <BarChart3 className="w-4 h-4 mr-2" />
                AI Business Intelligence 2043
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Revolutionary
                <span className="block bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  Business Intelligence
                </span>
                Powered by AI
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transform your business with next-generation AI-powered business intelligence. 
                Real-time insights, predictive analytics, and autonomous decision-making capabilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 border border-emerald-500/30 text-emerald-400 font-semibold rounded-lg hover:bg-emerald-500/10 transition-all duration-300">
                  Watch Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Revolutionary BI Features
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Advanced capabilities that redefine business intelligence and analytics
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="w-8 h-8" />,
                  title: "AI-Powered Analytics",
                  description: "Advanced machine learning algorithms for deep data insights and pattern recognition",
                  color: "from-emerald-500 to-teal-500"
                },
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  title: "Predictive Intelligence",
                  description: "Forecast future trends and outcomes with unprecedented accuracy",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "Real-time Insights",
                  description: "Instant access to critical business metrics and performance indicators",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Collaborative Intelligence",
                  description: "Team-based analytics and shared insights across the organization",
                  color: "from-orange-500 to-red-500"
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Secure Data Processing",
                  description: "Enterprise-grade security for sensitive business data and analytics",
                  color: "from-indigo-500 to-purple-500"
                },
                {
                  icon: <Globe className="w-8 h-8" />,
                  title: "Global Intelligence",
                  description: "Multi-region data processing and global business insights",
                  color: "from-green-500 to-emerald-500"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-8 rounded-2xl border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} mb-6`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Analytics Dashboard Preview */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-900/10 to-teal-900/10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Advanced Analytics Dashboard
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Powerful visualization tools and interactive dashboards for comprehensive business insights
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-8 rounded-2xl border border-gray-700/50"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {[
                  { metric: "Revenue Growth", value: "+23.5%", change: "+5.2%", color: "text-green-400" },
                  { metric: "Customer Satisfaction", value: "94.8%", change: "+2.1%", color: "text-blue-400" },
                  { metric: "Market Share", value: "18.3%", change: "+1.7%", color: "text-purple-400" },
                  { metric: "Efficiency Score", value: "87.2%", change: "+3.4%", color: "text-emerald-400" }
                ].map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-gray-800/50 rounded-xl">
                    <p className="text-gray-400 text-sm mb-2">{stat.metric}</p>
                    <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                    <p className="text-green-400 text-sm">{stat.change}</p>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <p className="text-gray-400 mb-4">Interactive dashboards with real-time data updates</p>
                <button className="px-6 py-3 bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 rounded-lg hover:bg-emerald-500/30 transition-all duration-300">
                  Explore Dashboard
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Transform Your Business
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Revolutionary use cases that drive business transformation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Financial Intelligence",
                  description: "Advanced financial modeling, risk assessment, and investment optimization with AI-powered insights",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  title: "Customer Intelligence",
                  description: "Deep customer behavior analysis, segmentation, and personalized marketing strategies",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  title: "Operational Intelligence",
                  description: "Real-time operational monitoring, predictive maintenance, and process optimization",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  title: "Market Intelligence",
                  description: "Competitive analysis, market trend prediction, and strategic planning insights",
                  color: "from-orange-500 to-red-500"
                }
              ].map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-8 rounded-2xl border border-gray-700/50"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${useCase.color} mb-6`}>
                    <Target className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-400 text-lg">{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Join the AI business intelligence revolution. Start your transformation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105">
                  Get Started Now
                </button>
                <button className="px-8 py-4 border border-emerald-500/30 text-emerald-400 font-semibold rounded-lg hover:bg-emerald-500/10 transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AIBusinessIntelligence2043;