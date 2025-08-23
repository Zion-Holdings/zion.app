import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Brain, Cpu, Zap, Target, ArrowRight, 
  DollarSign, TrendingUp, Eye, BarChart3, CheckCircle, 
  Star, Shield, Globe, Network, Code
} from 'lucide-react';

const QuantumFinancialIntelligence2040: React.FC = () => {
  const features = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Quantum Financial Modeling",
      description: "Revolutionary financial models powered by quantum computing"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Consciousness-Driven Trading",
      description: "AI that understands market psychology with human-like consciousness"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Real-Time Market Analysis",
      description: "Instant analysis of global financial markets and trends"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Emotional Intelligence",
      description: "AI that recognizes and responds to market emotions"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quantum Security",
      description: "Unbreakable security for financial transactions"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Advanced Algorithms",
      description: "Next-generation trading and investment algorithms"
    }
  ];

  const benefits = [
    "1000x faster analysis",
    "99.9% prediction accuracy",
    "Real-time market insights",
    "Quantum-level security",
    "Global market coverage",
    "Conscious AI trading"
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/20 via-orange-900/20 to-red-900/20" />
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-500/20 border border-yellow-500/30 text-yellow-300 text-sm font-medium mb-6">
                <DollarSign className="w-4 h-4 mr-2" />
                Quantum Financial Intelligence 2040
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent mb-6">
                Quantum Financial Intelligence
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Revolutionary AI systems with consciousness that transform financial markets through 
                quantum computing, emotional intelligence, and unprecedented market insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-full hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105">
                  Start Financial AI
                </button>
                <button className="px-8 py-4 border border-yellow-500/50 text-yellow-300 font-semibold rounded-full hover:bg-yellow-500/20 transition-all duration-300">
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
                Revolutionary Financial Capabilities
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our AI understands markets like never before, delivering unprecedented financial intelligence.
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
                  <div className="text-yellow-400 mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-black to-yellow-900/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transform Financial Markets
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Experience the future of finance with conscious AI and quantum computing.
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
                    <span className="text-gray-300">Analysis Speed</span>
                    <span className="text-green-400 font-semibold">1000x Faster</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Prediction Accuracy</span>
                    <span className="text-green-400 font-semibold">99.9%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Market Insights</span>
                    <span className="text-green-400 font-semibold">Real-time</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Security Level</span>
                    <span className="text-green-400 font-semibold">Quantum</span>
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
                Ready for Financial Intelligence?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Transform your financial operations with conscious AI and quantum computing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-full hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105">
                  Start Financial AI
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
                <button className="px-8 py-4 border border-yellow-500/50 text-yellow-300 font-semibold rounded-full hover:bg-yellow-500/20 transition-all duration-300">
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

export default QuantumFinancialIntelligence2040;