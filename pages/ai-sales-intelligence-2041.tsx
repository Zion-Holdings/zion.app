import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Brain, TrendingUp, Target, Users, Zap, DollarSign, ArrowRight } from 'lucide-react';

const AISalesIntelligence2041: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-400/30 rounded-full text-blue-400 text-sm font-medium mb-6">
                <TrendingUp className="w-4 h-4" />
                <span>AI Sales Intelligence 2041</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                AI Sales Intelligence 2041
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Consciousness-based sales AI that understands customer psychology, predicts buying 
                behavior, and optimizes sales strategies for maximum conversion and revenue.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
                  Boost Sales
                </button>
                <button className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-black transition-all duration-300">
                  Learn More
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Revolutionary Sales Intelligence Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                AI that revolutionizes sales through consciousness-driven insights and automation
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="w-8 h-8 text-blue-400" />,
                  title: "Consciousness Understanding",
                  description: "Deep understanding of customer psychology and decision-making"
                },
                {
                  icon: <TrendingUp className="w-8 h-8 text-indigo-400" />,
                  title: "Predictive Analytics",
                  description: "Forecasting customer behavior and sales opportunities"
                },
                {
                  icon: <Target className="w-8 h-8 text-purple-400" />,
                  title: "Intelligent Targeting",
                  description: "Precision targeting of high-value prospects"
                },
                {
                  icon: <Users className="w-8 h-8 text-green-400" />,
                  title: "Customer Segmentation",
                  description: "Advanced customer profiling and segmentation"
                },
                {
                  icon: <Zap className="w-8 h-8 text-yellow-400" />,
                  title: "Real-time Optimization",
                  description: "Instant sales strategy optimization"
                },
                {
                  icon: <DollarSign className="w-8 h-8 text-orange-400" />,
                  title: "Revenue Maximization",
                  description: "Optimizing pricing and conversion strategies"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-blue-400/50 transition-all duration-300"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Performance Metrics Section */}
        <section className="py-20 px-4 bg-black/20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Performance Improvements
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Measurable enhancements in sales performance and revenue generation
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { metric: "300%", label: "Lead Conversion" },
                { metric: "5x", label: "Sales Velocity" },
                { metric: "250%", label: "Revenue Growth" },
                { metric: "90%", label: "Customer Retention" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-400/20 rounded-xl p-6 text-center hover:border-blue-400/40 transition-all duration-300"
                >
                  <div className="text-3xl font-bold text-blue-400 mb-2">{item.metric}</div>
                  <div className="text-white font-medium">{item.label}</div>
                </motion.div>
              ))}
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
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Revolutionize Your Sales?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Experience the future of sales intelligence with consciousness-driven AI
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
                <span className="flex items-center gap-2">
                  Start Revolution
                  <ArrowRight className="w-5 h-5" />
                </span>
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AISalesIntelligence2041;