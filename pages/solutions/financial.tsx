import React from 'react';
import SEO from '../../components/SEO';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Brain, 
  Shield, 
  Database, 
  Cloud, 
  ArrowRight,
  CheckCircle,
  Star,
  DollarSign,
  Globe,
  Rocket,
  Activity,
  Zap,
  Lock,
  BarChart3,
  Cpu
} from 'lucide-react';
import UltraFuturisticBackground from '../../components/ui/UltraFuturisticBackground';

const FinancialSolutionsPage: React.FC = () => {
  const solutions = [
    {
      title: 'AI Financial Intelligence',
      description: 'Advanced AI algorithms for financial analysis and decision making',
      icon: <Brain className="w-8 h-8" />,
      features: ['Risk Assessment', 'Portfolio Optimization', 'Market Prediction', 'Fraud Detection'],
      href: '/ai-financial-intelligence',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Quantum Financial Trading',
      description: 'Quantum-powered trading algorithms for superior market performance',
      icon: <Cpu className="w-8 h-8" />,
      features: ['High-Frequency Trading', 'Quantum Risk Models', 'Market Arbitrage', 'Portfolio Rebalancing'],
      href: '/quantum-financial-trading-platform',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Financial Analytics Platform',
      description: 'Comprehensive data analytics for financial insights and optimization',
      icon: <BarChart3 className="w-8 h-8" />,
      features: ['Real-time Analytics', 'Predictive Modeling', 'Compliance Reporting', 'Performance Tracking'],
      href: '/financial-analytics-platform',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Blockchain Infrastructure',
      description: 'Secure and scalable blockchain solutions for financial services',
      icon: <Shield className="w-8 h-8" />,
      features: ['Smart Contracts', 'DeFi Platforms', 'Cross-border Payments', 'Asset Tokenization'],
      href: '/blockchain-infrastructure-platform',
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'RegTech Solutions',
      description: 'Regulatory technology for compliance and risk management',
      icon: <Lock className="w-8 h-8" />,
      features: ['KYC/AML Automation', 'Regulatory Reporting', 'Risk Monitoring', 'Compliance Auditing'],
      href: '/regtech-solutions',
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  const stats = [
    { label: 'Financial Institutions', value: '150+', icon: <DollarSign className="w-6 h-6" /> },
    { label: 'Assets Under Management', value: '$50B+', icon: <TrendingUp className="w-6 h-6" /> },
    { label: 'AI Accuracy Rate', value: '99.8%', icon: <Star className="w-6 h-6" /> },
    { label: 'Compliance Standards', value: '100%', icon: <CheckCircle className="w-6 h-6" /> }
  ];

  const features = [
    {
      icon: <Lock className="w-6 h-6" />,
      title: 'Bank-Grade Security',
      description: 'Enterprise-level security with multi-layer encryption'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Real-time Processing',
      description: 'Instant financial analysis and decision support'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Global Compliance',
      description: 'Meets international financial regulations'
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'Scalable Architecture',
      description: 'Grows with your financial institution needs'
    }
  ];

  return (
    <UltraFuturisticBackground variant="quantum">
      <div className="min-h-screen">
        <SEO 
          title="Financial Solutions - Zion Tech Group | AI-Powered Financial Technology" 
          description="Transform financial services with Zion Tech Group's AI intelligence, quantum trading, analytics, blockchain, and RegTech solutions. Bank-grade security and global compliance." 
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
              Revolutionizing financial services with AI-powered intelligence, quantum computing, advanced analytics, and blockchain technology. Drive growth, reduce risk, and ensure compliance.
            </motion.p>
            
            {/* Stats Grid */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="flex justify-center mb-2 text-cyan-400">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              className="text-4xl font-bold text-center text-white mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Our Financial Solutions
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${solution.color} flex items-center justify-center mb-4`}>
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{solution.title}</h3>
                  <p className="text-gray-300 mb-4">{solution.description}</p>
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={solution.href}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              className="text-4xl font-bold text-center text-white mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Why Choose Our Financial Solutions?
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-4xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Ready to Transform Financial Services?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Join the financial technology revolution with our AI-powered solutions. Increase efficiency, reduce costs, and stay ahead of the competition.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 hover:scale-105"
              >
                Get Started Today <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraFuturisticBackground>
  );
};

export default FinancialSolutionsPage;