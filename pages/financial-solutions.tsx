import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { TrendingUp, Shield, Brain, Users, Zap, Globe, Cpu, CheckCircle, Star, DollarSign } from 'lucide-react';

const FinancialSolutions: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-emerald-900/20 to-green-900/20">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-500/30 rounded-full text-emerald-300 text-sm mb-6">
                <TrendingUp className="w-4 h-4" />
                Financial Solutions
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-400 via-green-400 to-blue-400 bg-clip-text text-transparent mb-6">
                Financial Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Revolutionary AI-powered financial technology that transforms banking, trading, and risk management
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300">
                  Transform Finance
                </button>
                <button className="px-8 py-4 border border-emerald-500/30 text-emerald-300 rounded-2xl hover:bg-emerald-500/10 transition-all duration-300">
                  View Solutions
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
                Financial Technology Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Advanced AI capabilities that revolutionize financial services and risk management
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="w-8 h-8 text-emerald-400" />,
                  title: "AI Trading",
                  description: "Advanced AI-powered trading algorithms and strategies"
                },
                {
                  icon: <Shield className="w-8 h-8 text-green-400" />,
                  title: "Risk Management",
                  description: "Intelligent risk assessment and mitigation systems"
                },
                {
                  icon: <TrendingUp className="w-8 h-8 text-blue-400" />,
                  title: "Market Analysis",
                  description: "Real-time market intelligence and predictive analytics"
                },
                {
                  icon: <Users className="w-8 h-8 text-cyan-400" />,
                  title: "Customer Insights",
                  description: "Deep understanding of customer financial behavior"
                },
                {
                  icon: <Zap className="w-8 h-8 text-purple-400" />,
                  title: "Fraud Detection",
                  description: "Advanced fraud detection and prevention systems"
                },
                {
                  icon: <Globe className="w-8 h-8 text-orange-400" />,
                  title: "Global Finance",
                  description: "Worldwide financial services and cross-border solutions"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 bg-black/40 border border-emerald-500/20 rounded-2xl hover:border-emerald-500/40 transition-all duration-300"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Financial Benefits */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Financial Benefits
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Transform financial services with AI-powered solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Increased Returns",
                  description: "Higher investment returns through AI-powered strategies",
                  icon: <TrendingUp className="w-12 h-12 text-emerald-400" />
                },
                {
                  title: "Risk Reduction",
                  description: "Lower financial risks through intelligent management",
                  icon: <Shield className="w-12 h-12 text-green-400" />
                },
                {
                  title: "Cost Efficiency",
                  description: "Reduced operational costs through automation",
                  icon: <DollarSign className="w-12 h-12 text-blue-400" />
                },
                {
                  title: "Better Compliance",
                  description: "Enhanced regulatory compliance and reporting",
                  icon: <CheckCircle className="w-12 h-12 text-cyan-400" />
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 bg-black/40 border border-emerald-500/20 rounded-2xl hover:border-emerald-500/40 transition-all duration-300"
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
                Ready to Transform Finance?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Deploy AI-powered financial solutions that drive better returns
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300">
                Get Started
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default FinancialSolutions;
