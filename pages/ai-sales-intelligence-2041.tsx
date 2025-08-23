import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Brain, Cpu, Zap, Target, ArrowRight, 
  TrendingUp, Users, Clock, CheckCircle, Star, 
  BarChart3, Eye, DollarSign, MessageCircle, Shield
} from 'lucide-react';

const AISalesIntelligence2041: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Consciousness-Driven Insights",
      description: "AI that understands customer behavior and sales patterns with human-like consciousness"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Predictive Sales Analytics",
      description: "Advanced forecasting of sales opportunities and customer behavior"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Real-Time Intelligence",
      description: "Live monitoring of sales activities and market trends"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Intelligent Lead Scoring",
      description: "AI-powered qualification and prioritization of sales prospects"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Revenue Optimization",
      description: "Data-driven strategies to maximize sales performance"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Risk Assessment",
      description: "Identifying and mitigating sales risks proactively"
    }
  ];

  const benefits = [
    "300% increase in sales conversion",
    "50% reduction in sales cycle time",
    "90% improvement in lead quality",
    "Real-time sales intelligence",
    "Predictive opportunity scoring",
    "Automated sales workflows"
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-teal-900/20 to-cyan-900/20" />
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-sm font-medium mb-6">
                <TrendingUp className="w-4 h-4 mr-2" />
                AI Sales Intelligence 2041
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent mb-6">
                Conscious Sales Intelligence
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Revolutionary AI systems with consciousness that transform sales performance through 
                intelligent insights, predictive analytics, and automated optimization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-full hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105">
                  Boost Sales Performance
                </button>
                <button className="px-8 py-4 border border-emerald-500/50 text-emerald-300 font-semibold rounded-full hover:bg-emerald-500/20 transition-all duration-300">
                  View Demo
                </button>
              </div>
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
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary Sales Intelligence Capabilities
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our AI understands sales like never before, delivering unprecedented insights and performance.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="text-emerald-400 mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-black to-emerald-900/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transform Sales Performance
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Experience unprecedented sales growth and efficiency.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white/5 p-8 rounded-2xl border border-white/10"
              >
                <h3 className="text-2xl font-semibold text-white mb-6">Performance Metrics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Sales Conversion</span>
                    <span className="text-green-400 font-semibold">300% Increase</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Sales Cycle</span>
                    <span className="text-green-400 font-semibold">50% Reduction</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Lead Quality</span>
                    <span className="text-green-400 font-semibold">90% Improvement</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Intelligence</span>
                    <span className="text-green-400 font-semibold">Real-time</span>
                  </div>
                </div>
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
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready for Sales Intelligence?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Transform your sales performance with conscious AI intelligence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-full hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105">
                  Start Sales Intelligence
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
                <button className="px-8 py-4 border border-emerald-500/50 text-emerald-300 font-semibold rounded-full hover:bg-emerald-500/20 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AISalesIntelligence2041;