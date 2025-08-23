import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  DollarSign, 
  TrendingUp, 
  Shield, 
  Database, 
  Cloud, 
  Lock, 
  Activity, 
  Users, 
  Zap, 
  ArrowRight,
  CheckCircle,
  Star,
  BarChart3,
  Globe,
  CreditCard,
  PieChart
} from 'lucide-react';
import Link from 'next/link';

const FinancialSolutions: React.FC = () => {
  const solutions = [
    {
      title: 'AI Financial Risk Management',
      description: 'Advanced AI algorithms for real-time risk assessment and mitigation',
      icon: <Shield className="w-8 h-8 text-green-400" />,
      features: ['Real-time risk monitoring', 'Predictive analytics', 'Portfolio optimization', 'Compliance tracking'],
      href: '/ai-financial-risk'
    },
    {
      title: 'Blockchain Infrastructure',
      description: 'Secure, scalable blockchain solutions for financial transactions',
      icon: <Database className="w-8 h-8 text-blue-400" />,
      features: ['Smart contracts', 'DeFi platforms', 'Cross-border payments', 'Asset tokenization'],
      href: '/blockchain-infrastructure-platform'
    },
    {
      title: 'Quantum Financial Trading',
      description: 'Quantum computing-powered trading algorithms and market analysis',
      icon: <TrendingUp className="w-8 h-8 text-purple-400" />,
      features: ['Quantum algorithms', 'High-frequency trading', 'Market prediction', 'Risk optimization'],
      href: '/quantum-financial-trading'
    },
    {
      title: 'Financial Data Analytics',
      description: 'Comprehensive financial data analysis and reporting platforms',
      icon: <BarChart3 className="w-8 h-8 text-cyan-400" />,
      features: ['Real-time dashboards', 'Custom reporting', 'Data visualization', 'Performance metrics'],
      href: '/financial-data-analytics'
    },
    {
      title: 'Payment Processing Solutions',
      description: 'Secure, scalable payment processing and gateway services',
      icon: <CreditCard className="w-8 h-8 text-orange-400" />,
      features: ['Multi-currency support', 'Fraud detection', 'PCI compliance', 'API integration'],
      href: '/payment-processing-solutions'
    },
    {
      title: 'Regulatory Compliance',
      description: 'Automated compliance monitoring and reporting for financial institutions',
      icon: <Lock className="w-8 h-8 text-red-400" />,
      features: ['KYC/AML automation', 'Regulatory reporting', 'Audit trails', 'Compliance dashboards'],
      href: '/regulatory-compliance-solutions'
    }
  ];

  const benefits = [
    'Enhanced risk management through AI-powered analytics',
    'Improved operational efficiency and cost reduction',
    'Real-time compliance monitoring and reporting',
    'Enhanced security and fraud prevention',
    'Better customer experience and service delivery',
    'Scalable solutions for growing financial institutions'
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center mb-6">
                <DollarSign className="w-16 h-16 text-green-400" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent mb-6">
                Financial Technology Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transforming the financial industry with cutting-edge AI, blockchain, 
                and quantum computing solutions for the digital economy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-cyan-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Financial Solutions
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  href="/market-pricing"
                  className="inline-flex items-center px-8 py-4 border border-green-500/50 text-green-400 font-semibold rounded-xl hover:bg-green-500/10 transition-all duration-300"
                >
                  View Pricing
                </Link>
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
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Comprehensive Financial Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From AI-powered risk management to blockchain infrastructure, 
                we provide end-to-end financial technology solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="mb-6">
                    {solution.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                  <p className="text-gray-300 mb-6">{solution.description}</p>
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href={solution.href}
                    className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
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
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine cutting-edge technology with deep financial expertise 
                to deliver solutions that drive growth and innovation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <Star className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">{benefit}</p>
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
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Finance?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our financial technology solutions can 
                revolutionize your financial institution or business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-cyan-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Financial Transformation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  href="/case-studies"
                  className="inline-flex items-center px-8 py-4 border border-green-500/50 text-green-400 font-semibold rounded-xl hover:bg-green-500/10 transition-all duration-300"
                >
                  View Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default FinancialSolutions;