import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Shield, Brain, ChartLine, Lock, Zap, Users, TrendingUp, Target, Globe } from 'lucide-react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';

const FinancialSolutions: React.FC = () => {
  const solutions = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'AI-Powered Trading',
      description: 'Advanced algorithmic trading systems with machine learning capabilities',
      features: ['Real-time market analysis', 'Risk management algorithms', 'Portfolio optimization']
    },
    {
      icon: <Shield className="w-8 h-8 text-green-400" />,
      title: 'Financial Security',
      description: 'Comprehensive cybersecurity solutions for financial institutions',
      features: ['Fraud detection', 'Compliance monitoring', 'Secure transactions']
    },
    {
      icon: <ChartLine className="w-8 h-8 text-blue-400" />,
      title: 'Risk Analytics',
      description: 'Advanced risk assessment and management platforms',
      features: ['Credit risk modeling', 'Market risk analysis', 'Operational risk assessment']
    },
    {
      icon: <DollarSign className="w-8 h-8 text-yellow-400" />,
      title: 'Payment Solutions',
      description: 'Secure and efficient payment processing systems',
      features: ['Multi-currency support', 'Real-time settlement', 'Compliance automation']
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-400" />,
      title: 'Investment Management',
      description: 'Intelligent portfolio management and advisory services',
      features: ['Asset allocation', 'Performance tracking', 'Tax optimization']
    },
    {
      icon: <Globe className="w-8 h-8 text-orange-400" />,
      title: 'Global Finance',
      description: 'Cross-border financial services and compliance',
      features: ['International payments', 'Regulatory compliance', 'Currency management']
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Financial Technology Solutions | Zion Tech Group"
        description="Transform your financial operations with our advanced technology solutions. AI trading, risk management, and secure payment systems."
        keywords={["financial technology", "fintech", "AI trading", "risk management", "payment solutions", "cybersecurity"]}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent mb-6">
                Financial Technology Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Revolutionizing financial services through cutting-edge technology, AI-powered trading, 
                and secure risk management systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-cyan-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all"
                >
                  Schedule Demo
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-green-500 text-green-400 rounded-lg font-semibold hover:bg-green-500/10 transition-all"
                >
                  View Solutions
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Financial Solutions
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                From AI-powered trading to secure payment processing, we provide end-to-end 
                financial technology solutions that drive growth and reduce risk.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-green-500/50 transition-all hover:transform hover:scale-105"
                >
                  <div className="mb-4">{solution.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{solution.title}</h3>
                  <p className="text-gray-400 mb-4">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <Target className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Zion Tech Group for Financial Technology?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We combine deep financial domain expertise with cutting-edge technology to deliver 
                solutions that truly make a difference in financial operations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Regulatory Compliant</h3>
                <p className="text-gray-400">Full compliance with financial regulations</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">AI-Powered</h3>
                <p className="text-gray-400">Advanced machine learning for better decisions</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Secure by Design</h3>
                <p className="text-gray-400">Enterprise-grade security from the ground up</p>
              </motion.div>
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
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Financial Technology?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Let's discuss how our financial solutions can improve efficiency, 
                reduce risk, and drive growth in your operations.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-gradient-to-r from-green-500 to-cyan-600 text-white rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-green-500/25 transition-all"
              >
                Get Started Today
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default FinancialSolutions;