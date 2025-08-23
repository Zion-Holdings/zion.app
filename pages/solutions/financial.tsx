import React from 'react';
import SEO from '../../components/SEO';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Brain, 
  Shield, 
  Database, 
  Cpu, 
  CheckCircle,
  ArrowRight,
  Star,
  Globe,
  BarChart3,
  Target,
  Zap,
  FileText,
  Users,
  Lock
} from 'lucide-react';
import UltraFuturisticBackground from '../../components/ui/UltraFuturisticBackground';

const FinancialSolutionsPage: React.FC = () => {
  const financialSolutions = [
    {
      title: 'Financial AI Platform',
      description: 'AI-powered solutions for trading, risk management, and financial analysis',
      icon: <Brain className="w-8 h-8" />,
      features: ['Algorithmic Trading', 'Risk Assessment', 'Market Analysis', 'Portfolio Optimization'],
      href: '/services/financial-ai-platform',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Financial Cybersecurity',
      description: 'Advanced security solutions for financial institutions and fintech companies',
      icon: <Shield className="w-8 h-8" />,
      features: ['Fraud Detection', 'Compliance Monitoring', 'Threat Intelligence', 'Secure Transactions'],
      href: '/services/financial-cybersecurity',
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Financial Data Management',
      description: 'Secure financial data management and analytics platform',
      icon: <Database className="w-8 h-8" />,
      features: ['Real-time Data', 'Regulatory Compliance', 'Data Analytics', 'Risk Modeling'],
      href: '/services/financial-data-management',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Financial Process Automation',
      description: 'Automate financial workflows for improved efficiency and compliance',
      icon: <Cpu className="w-8 h-8" />,
      features: ['Trade Processing', 'Settlement Automation', 'Compliance Reporting', 'Risk Monitoring'],
      href: '/services/financial-process-automation',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Financial Analytics Platform',
      description: 'Data-driven insights for financial decision making and risk management',
      icon: <BarChart3 className="w-8 h-8" />,
      features: ['Performance Analytics', 'Risk Metrics', 'Portfolio Analysis', 'Market Intelligence'],
      href: '/services/financial-analytics-platform',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Blockchain Solutions',
      description: 'Secure blockchain and distributed ledger technology for financial services',
      icon: <Lock className="w-8 h-8" />,
      features: ['Smart Contracts', 'Digital Assets', 'Cross-border Payments', 'Identity Verification'],
      href: '/services/blockchain-solutions',
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  const financialFeatures = [
    {
      title: 'Regulatory Compliant',
      description: 'Built to meet financial industry regulations and compliance requirements',
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: 'High Performance',
      description: 'Low-latency solutions for high-frequency trading and real-time operations',
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: 'Secure',
      description: 'Enterprise-grade security for sensitive financial data and transactions',
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: 'Scalable',
      description: 'Solutions that scale with your financial operations and growth',
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const stats = [
    { label: 'Financial Institutions', value: '200+', icon: <TrendingUp className="w-6 h-6" /> },
    { label: 'Trading Volume', value: '$50B+', icon: <BarChart3 className="w-6 h-6" /> },
    { label: 'Compliance Standards', value: '30+', icon: <CheckCircle className="w-6 h-6" /> },
    { label: 'Uptime Guarantee', value: '99.99%', icon: <Star className="w-6 h-6" /> }
  ];

  return (
    <UltraFuturisticBackground variant="quantum">
      <div className="min-h-screen">
        <SEO 
          title="Financial Solutions - Zion Tech Group | Advanced Financial Technology Solutions" 
          description="Transform financial operations with Zion Tech Group's AI-powered, compliant technology solutions including AI platforms, cybersecurity, data management, and blockchain." 
          canonical="https://ziontechgroup.com/solutions/financial/" 
        />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Financial Solutions
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transform financial operations with our AI-powered, compliant technology solutions designed to enhance trading, risk management, and financial analysis.
            </motion.p>
            
            {/* Stats Grid */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2 text-cyan-400">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Financial Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Financial Solutions?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our financial solutions are built with performance, security, and compliance in mind, ensuring your institution can operate efficiently and securely.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {financialFeatures.map((feature, index) => (
                <div key={index} className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-sm">
                  <div className="flex justify-center mb-4 text-cyan-400">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Financial Solutions Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">Financial Solutions Portfolio</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our comprehensive range of financial technology solutions designed to enhance trading, risk management, and financial operations.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {financialSolutions.map((solution, index) => (
                <motion.div
                  key={index}
                  className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                >
                  <div className={`flex justify-center mb-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300`}>
                    {solution.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">{solution.title}</h3>
                  <p className="text-gray-400 text-center mb-6">{solution.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="text-center">
                    <a
                      href={solution.href}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1 transition-transform duration-300"
                    >
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Financial Operations?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our financial solutions can enhance trading, improve risk management, and streamline your financial operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  View All Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraFuturisticBackground>
  );
};

export default FinancialSolutionsPage;