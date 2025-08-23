import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, Shield, Brain, Activity, Users, Zap, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Button from '../components/ui/Button';

export default function FinancialSolutions() {
  const financialServices = [
    {
      title: 'AI Financial Intelligence',
      description: 'Advanced AI-powered financial analysis and decision support',
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      href: '/ai-financial-intelligence',
      features: ['Real-time analysis', 'Predictive modeling', 'Risk assessment']
    },
    {
      title: 'Financial Risk Management',
      description: 'Comprehensive risk management and mitigation strategies',
      icon: <Shield className="w-8 h-8 text-green-400" />,
      href: '/ai-financial-risk',
      features: ['Risk modeling', 'Compliance monitoring', 'Stress testing']
    },
    {
      title: 'Trading Platform Solutions',
      description: 'Advanced trading platforms with AI-powered insights',
      icon: <TrendingUp className="w-8 h-8 text-blue-400" />,
      href: '/quantum-financial-trading-platform',
      features: ['Algorithmic trading', 'Market analysis', 'Portfolio optimization']
    },
    {
      title: 'Financial Analytics Platform',
      description: 'Comprehensive financial data analytics and reporting',
      icon: <Activity className="w-8 h-8 text-purple-400" />,
      href: '/automated-financial-analytics-platform',
      features: ['Performance metrics', 'ROI tracking', 'Custom dashboards']
    },
    {
      title: 'Regulatory Compliance',
      description: 'Automated compliance monitoring and reporting systems',
      icon: <Users className="w-8 h-8 text-yellow-400" />,
      href: '/privacy-compliance-automation',
      features: ['Regulatory updates', 'Automated reporting', 'Audit trails']
    },
    {
      title: 'Financial Planning AI',
      description: 'AI-powered financial planning and advisory services',
      icon: <Zap className="w-8 h-8 text-emerald-400" />,
      href: '/ai-financial-planning-platform',
      features: ['Goal setting', 'Investment strategies', 'Retirement planning']
    }
  ];

  const benefits = [
    'Enhanced financial decision-making through AI insights',
    'Improved risk management and compliance',
    'Increased operational efficiency and cost reduction',
    'Real-time financial monitoring and alerts',
    'Scalable and secure financial technology solutions',
    'Integration with existing financial systems'
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-blue-900/20 to-purple-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <DollarSign className="w-16 h-16 text-green-400" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Financial Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Revolutionary financial technology solutions that drive growth, manage risk, and ensure compliance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 text-lg">
                Get Financial Solutions
              </Button>
              <Button href="/solutions" variant="outline" className="border-green-500 text-green-400 px-8 py-4 text-lg">
                View All Solutions
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose Our Financial Solutions?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our financial technology solutions are designed to address the complex challenges of modern financial services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-4 p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl"
              >
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-r from-green-900/10 via-blue-900/10 to-purple-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Financial Technology Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive financial solutions designed to transform operations and drive growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {financialServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <ul className="mb-6 space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  href={service.href}
                  className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-900/20 via-blue-900/20 to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Finance?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let our financial technology experts help you implement solutions that drive growth and ensure compliance
            </p>
            <Button href="/contact" className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-10 py-4 text-lg">
              Start Your Financial Transformation
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}