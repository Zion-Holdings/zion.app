import React from 'react';
import { motion } from 'framer-motion';
import { 
  DollarSign, 
  Shield, 
  TrendingUp, 
  Lock, 
  Database, 
  Cloud, 
  Activity, 
  Users,
  Smartphone,
  Monitor,
  Zap,
  Target,
  BarChart3,
  CreditCard,
  Building2
} from 'lucide-react';
import Link from 'next/link';

const financialSolutions = [
  {
    title: 'AI-Powered Trading',
    description: 'Advanced algorithmic trading and market analysis using quantum computing',
    icon: <TrendingUp className="w-8 h-8 text-green-400" />,
    features: [
      'Quantum financial algorithms',
      'Real-time market analysis',
      'Risk assessment models',
      'Automated trading strategies'
    ],
    href: '/quantum-financial-trading'
  },
  {
    title: 'Blockchain Infrastructure',
    description: 'Secure, scalable blockchain solutions for financial institutions',
    icon: <Shield className="w-8 h-8 text-blue-400" />,
    features: [
      'DeFi platform development',
      'Smart contract automation',
      'Cross-chain interoperability',
      'Regulatory compliance tools'
    ],
    href: '/blockchain-infrastructure-platform'
  },
  {
    title: 'RegTech Solutions',
    description: 'Regulatory technology for compliance and risk management',
    icon: <Lock className="w-8 h-8 text-purple-400" />,
    features: [
      'KYC/AML automation',
      'Regulatory reporting',
      'Risk monitoring',
      'Compliance dashboards'
    ],
    href: '/regtech-solutions'
  },
  {
    title: 'Financial Analytics',
    description: 'Comprehensive financial data analysis and insights',
    icon: <BarChart3 className="w-8 h-8 text-orange-400" />,
    features: [
      'Portfolio optimization',
      'Risk modeling',
      'Performance analytics',
      'Predictive insights'
    ],
    href: '/financial-analytics-platform'
  },
  {
    title: 'Digital Banking Platform',
    description: 'Modern digital banking infrastructure and services',
    icon: <Building2 className="w-8 h-8 text-cyan-400" />,
    features: [
      'Core banking systems',
      'Mobile banking apps',
      'Payment processing',
      'Customer management'
    ],
    href: '/digital-banking-platform'
  },
  {
    title: 'Cybersecurity & Fraud Detection',
    description: 'Advanced security solutions for financial institutions',
    icon: <Shield className="w-8 h-8 text-red-400" />,
    features: [
      'Fraud detection AI',
      'Threat intelligence',
      'Secure authentication',
      'Incident response'
    ],
    href: '/ai-powered-cybersecurity'
  }
];

const FinancialSolutions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Financial Technology Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Revolutionizing finance with AI, quantum computing, and blockchain technology for secure, efficient, and innovative financial services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-full hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link 
                href="/pricing" 
                className="px-8 py-4 border-2 border-green-500 text-green-400 font-semibold rounded-full hover:bg-green-500 hover:text-white transition-all duration-300"
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive Financial Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From quantum trading to blockchain infrastructure, we provide cutting-edge financial technology solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {financialSolutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="mb-6">
                  {solution.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                <p className="text-gray-300 mb-6">{solution.description}</p>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-400">
                      <Zap className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  href={solution.href}
                  className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors font-semibold"
                >
                  Learn More
                  <Target className="w-4 h-4 ml-2" />
                </Link>
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
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-3xl p-12"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Finance?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading financial institutions in leveraging cutting-edge technology for better performance and security
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-full hover:from-green-600 hover:to-blue-700 transition-all duration-300"
              >
                Schedule Consultation
              </Link>
              <Link 
                href="/resources" 
                className="px-8 py-4 border-2 border-green-500 text-green-400 font-semibold rounded-full hover:bg-green-500 hover:text-white transition-all duration-300"
              >
                View Resources
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FinancialSolutions;