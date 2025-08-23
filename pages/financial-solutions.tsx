import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Brain, Shield, Users, Zap, Target, Star, ArrowRight, Activity, TrendingUp, Lock, BarChart3 } from 'lucide-react';
import SEO from '../components/SEO';

const financialServices = [
  {
    title: 'AI Financial Intelligence',
    description: 'Advanced AI-powered financial analysis and decision-making platforms',
    icon: <Brain className="w-8 h-8 text-cyan-400" />,
    href: '/ai-financial-intelligence',
    features: ['Risk Assessment', 'Portfolio Optimization', 'Market Analysis']
  },
  {
    title: 'Quantum Financial Trading',
    description: 'Quantum computing solutions for high-frequency trading and financial modeling',
    icon: <Zap className="w-8 h-8 text-purple-400" />,
    href: '/quantum-financial-trading',
    features: ['Algorithmic Trading', 'Risk Management', 'Performance Optimization']
  },
  {
    title: 'Financial Analytics Platform',
    description: 'Comprehensive financial data analytics and reporting solutions',
    icon: <BarChart3 className="w-8 h-8 text-green-400" />,
    href: '/financial-analytics-platform',
    features: ['Real-time Analytics', 'Custom Reporting', 'Data Visualization']
  },
  {
    title: 'Blockchain Financial Services',
    description: 'Secure blockchain-based financial transactions and smart contracts',
    icon: <Lock className="w-8 h-8 text-blue-400" />,
    href: '/blockchain-financial-services',
    features: ['Smart Contracts', 'DeFi Solutions', 'Secure Transactions']
  },
  {
    title: 'Regulatory Compliance',
    description: 'Automated compliance monitoring and reporting for financial institutions',
    icon: <Shield className="w-8 h-8 text-red-400" />,
    href: '/financial-compliance-automation',
    features: ['Regulatory Monitoring', 'Automated Reporting', 'Compliance Auditing']
  },
  {
    title: 'Financial Planning AI',
    description: 'Intelligent financial planning and wealth management platforms',
    icon: <Target className="w-8 h-8 text-yellow-400" />,
    href: '/ai-financial-planning-platform',
    features: ['Personalized Planning', 'Goal Tracking', 'Investment Advice']
  }
];

export default function FinancialSolutions() {
  return (
    <>
      <SEO 
        title="Financial Technology Solutions | Zion Tech Group"
        description="Advanced financial technology solutions including AI intelligence, quantum trading, blockchain services, and regulatory compliance automation."
        canonical="https://ziontechgroup.com/financial-solutions"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-6">
                Financial Technology Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Revolutionary financial technology that transforms trading, risk management, and financial decision-making through AI and quantum computing.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all duration-300"
                >
                  Explore Financial Solutions
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-green-500 text-green-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-500 hover:text-white transition-all duration-300"
                >
                  Financial Consultation
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Financial Technology Portfolio
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive financial solutions designed to optimize trading, enhance risk management, and drive financial innovation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {financialServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300 group"
                >
                  <div className="mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <Star className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <motion.a
                    href={service.href}
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center text-green-400 hover:text-green-300 font-semibold group-hover:text-green-300 transition-colors"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Financial Innovation Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900/20 to-emerald-900/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Financial Innovation Frontiers
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Cutting-edge technologies that are revolutionizing financial services and trading
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: 'AI Trading',
                  description: 'Intelligent algorithmic trading and market analysis',
                  icon: <Brain className="w-12 h-12 text-cyan-400" />
                },
                {
                  title: 'Quantum Computing',
                  description: 'Quantum algorithms for financial optimization',
                  icon: <Zap className="w-12 h-12 text-purple-400" />
                },
                {
                  title: 'Blockchain',
                  description: 'Secure decentralized financial transactions',
                  icon: <Lock className="w-12 h-12 text-blue-400" />
                },
                {
                  title: 'Risk Management',
                  description: 'Advanced risk assessment and mitigation',
                  icon: <Shield className="w-12 h-12 text-red-400" />
                }
              ].map((innovation, index) => (
                <motion.div
                  key={innovation.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="mb-4 flex justify-center">
                    {innovation.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {innovation.title}
                  </h3>
                  <p className="text-gray-400">
                    {innovation.description}
                  </p>
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
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Financial Operations?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Discover how our financial technology solutions can optimize trading, enhance risk management, and drive innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all duration-300"
                >
                  Financial Assessment
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-green-500 text-green-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-500 hover:text-white transition-all duration-300"
                >
                  View Case Studies
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}