import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Atom, TrendingUp, DollarSign, Shield, Zap, Target, ArrowRight } from 'lucide-react';

const QuantumFinancialIntelligence2040: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-full text-green-400 text-sm font-medium mb-6">
                <TrendingUp className="w-4 h-4" />
                <span>Quantum Financial Intelligence 2040</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
                Quantum Financial Intelligence 2040
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Revolutionary quantum financial AI that combines quantum computing power with 
                consciousness-driven insights for unprecedented financial intelligence and trading.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105">
                  Start Trading
                </button>
                <button className="px-8 py-4 border-2 border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-400 hover:text-black transition-all duration-300">
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
                Revolutionary Financial Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                AI that revolutionizes finance through quantum computing and consciousness
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Atom className="w-8 h-8 text-green-400" />,
                  title: "Quantum Computing",
                  description: "Quantum processing for financial calculations"
                },
                {
                  icon: <TrendingUp className="w-8 h-8 text-emerald-400" />,
                  title: "Predictive Analytics",
                  description: "Advanced market prediction and analysis"
                },
                {
                  icon: <DollarSign className="w-8 h-8 text-teal-400" />,
                  title: "Portfolio Optimization",
                  description: "Intelligent investment strategy optimization"
                },
                {
                  icon: <Shield className="w-8 h-8 text-blue-400" />,
                  title: "Risk Management",
                  description: "Advanced risk assessment and mitigation"
                },
                {
                  icon: <Zap className="w-8 h-8 text-purple-400" />,
                  title: "Real-time Trading",
                  description: "Instant market analysis and execution"
                },
                {
                  icon: <Target className="w-8 h-8 text-yellow-400" />,
                  title: "Precision Targeting",
                  description: "Exact financial opportunity identification"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-green-400/50 transition-all duration-300"
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
                Performance Metrics
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Unprecedented financial performance and intelligence capabilities
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { metric: "500%", label: "Return Increase" },
                { metric: "1000x", label: "Speed Gain" },
                { metric: "99.9%", label: "Accuracy" },
                { metric: "24/7", label: "Trading" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-400/20 rounded-xl p-6 text-center hover:border-green-400/40 transition-all duration-300"
                >
                  <div className="text-3xl font-bold text-green-400 mb-2">{item.metric}</div>
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
                Ready for Quantum Finance?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Experience the future of financial intelligence with quantum AI
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105">
                <span className="flex items-center gap-2">
                  Start Trading
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

export default QuantumFinancialIntelligence2040;