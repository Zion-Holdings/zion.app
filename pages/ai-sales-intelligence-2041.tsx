import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { TrendingUp, Target, Users, Brain, Zap, Globe, Shield, Cpu, CheckCircle, Star } from 'lucide-react';

const AISalesIntelligence2041: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-orange-900/20 to-red-900/20">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-full text-orange-300 text-sm mb-6">
                <TrendingUp className="w-4 h-4" />
                AI Sales Intelligence 2041
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent mb-6">
                AI Sales Intelligence 2041
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Revolutionary AI-powered sales intelligence with predictive analytics and consciousness-based decision making
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300">
                  Boost Sales Performance
                </button>
                <button className="px-8 py-4 border border-orange-500/30 text-orange-300 rounded-2xl hover:bg-orange-500/10 transition-all duration-300">
                  View Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                AI Sales Intelligence Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Advanced AI capabilities that revolutionize sales performance and revenue growth
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="w-8 h-8 text-orange-400" />,
                  title: "Predictive Analytics",
                  description: "AI that predicts sales outcomes and identifies winning opportunities"
                },
                {
                  icon: <Target className="w-8 h-8 text-red-400" />,
                  title: "Lead Scoring",
                  description: "Intelligent lead prioritization based on conversion probability"
                },
                {
                  icon: <Users className="w-8 h-8 text-yellow-400" />,
                  title: "Customer Insights",
                  description: "Deep understanding of customer behavior and preferences"
                },
                {
                  icon: <TrendingUp className="w-8 h-8 text-emerald-400" />,
                  title: "Revenue Optimization",
                  description: "Maximize revenue through intelligent pricing and strategy"
                },
                {
                  icon: <Shield className="w-8 h-8 text-blue-400" />,
                  title: "Risk Assessment",
                  description: "Identify and mitigate sales risks before they impact results"
                },
                {
                  icon: <Globe className="w-8 h-8 text-purple-400" />,
                  title: "Market Intelligence",
                  description: "Real-time market analysis and competitive insights"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 bg-black/40 border border-orange-500/20 rounded-2xl hover:border-orange-500/40 transition-all duration-300"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Sales Benefits */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Sales Performance Benefits
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Transform your sales organization with AI-powered intelligence and insights
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Increased Revenue",
                  description: "Boost sales performance and revenue through intelligent insights",
                  icon: <TrendingUp className="w-12 h-12 text-orange-400" />
                },
                {
                  title: "Better Lead Quality",
                  description: "Focus on high-probability opportunities that convert",
                  icon: <Target className="w-12 h-12 text-red-400" />
                },
                {
                  title: "Faster Sales Cycles",
                  description: "Accelerate deals with predictive insights and automation",
                  icon: <Zap className="w-12 h-12 text-yellow-400" />
                },
                {
                  title: "Improved Forecasting",
                  description: "Accurate sales predictions and pipeline management",
                  icon: <CheckCircle className="w-12 h-12 text-emerald-400" />
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 bg-black/40 border border-orange-500/20 rounded-2xl hover:border-orange-500/40 transition-all duration-300"
                >
                  <div className="mb-6">{benefit.icon}</div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-400 text-lg">{benefit.description}</p>
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
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Sales?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Deploy AI-powered sales intelligence that drives real revenue growth
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300">
                Get Started
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AISalesIntelligence2041;