import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  DollarSign, 
  Shield, 
  Database, 
  Cpu, 
  Zap, 
  Lock, 
  Globe, 
  Target,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Users,
  Server,
  Network,
  Smartphone,
  Code,
  Brain,
  Atom,
  Rocket,
  Activity,
  CreditCard,
  PiggyBank,
  Building,
  Calculator
} from 'lucide-react';
import Layout from '../../components/layout/Layout';
import SEO from '../../components/SEO';

const FinancialSolutionsPage: React.FC = () => {
  const solutions = [
    {
      title: 'AI-Powered Financial Analytics',
      description: 'Advanced analytics and machine learning for financial decision making and risk assessment',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      features: [
        'Predictive market analysis',
        'Risk assessment models',
        'Portfolio optimization',
        'Fraud detection systems',
        'Credit scoring algorithms',
        'Real-time market insights'
      ],
      benefits: [
        '25% improvement in investment returns',
        '90% reduction in fraud incidents',
        'Real-time risk monitoring',
        'Data-driven decision making'
      ]
    },
    {
      title: 'Quantum Financial Computing',
      description: 'Leverage quantum computing for complex financial modeling and optimization',
      icon: Atom,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Portfolio optimization',
        'Risk modeling',
        'Option pricing',
        'Monte Carlo simulations',
        'Stress testing',
        'Regulatory compliance'
      ],
      benefits: [
        '1000x faster calculations',
        'Enhanced risk management',
        'Improved regulatory compliance',
        'Competitive advantage'
      ]
    },
    {
      title: 'Blockchain & DeFi Solutions',
      description: 'Secure and transparent financial infrastructure using blockchain technology',
      icon: Code,
      color: 'from-indigo-500 to-purple-500',
      features: [
        'Smart contract development',
        'DeFi platform creation',
        'Tokenization services',
        'Cross-border payments',
        'Identity verification',
        'Asset management'
      ],
      benefits: [
        'Reduced transaction costs',
        'Increased transparency',
        '24/7 global access',
        'Enhanced security'
      ]
    },
    {
      title: 'Financial Cybersecurity',
      description: 'Advanced security solutions to protect financial data and transactions',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      features: [
        'Multi-factor authentication',
        'Encryption protocols',
        'Threat detection',
        'Compliance monitoring',
        'Incident response',
        'Security audits'
      ],
      benefits: [
        '99.99% security uptime',
        'Regulatory compliance',
        'Reduced fraud risk',
        'Customer trust'
      ]
    },
    {
      title: 'RegTech & Compliance',
      description: 'Automated regulatory compliance and reporting solutions',
      icon: Building,
      color: 'from-green-500 to-emerald-500',
      features: [
        'Automated reporting',
        'Compliance monitoring',
        'Regulatory updates',
        'Audit trails',
        'Risk assessment',
        'Policy management'
      ],
      benefits: [
        '50% reduction in compliance costs',
        'Automated regulatory updates',
        'Reduced audit time',
        'Enhanced transparency'
      ]
    },
    {
      title: 'Digital Banking & Payments',
      description: 'Modern digital banking infrastructure and payment processing solutions',
      icon: CreditCard,
      color: 'from-yellow-500 to-orange-500',
      features: [
        'Mobile banking apps',
        'Payment processing',
        'Digital wallets',
        'API banking',
        'Real-time payments',
        'Multi-currency support'
      ],
      benefits: [
        'Enhanced customer experience',
        'Reduced operational costs',
        'Increased transaction speed',
        'Global reach'
      ]
    }
  ];

  const industries = [
    {
      name: 'Investment Banking',
      icon: BarChart3,
      solutions: ['Portfolio management', 'Risk analytics', 'Trading algorithms', 'Compliance automation'],
      color: 'from-emerald-500 to-green-500'
    },
    {
      name: 'Retail Banking',
      icon: Users,
      solutions: ['Digital transformation', 'Customer analytics', 'Mobile banking', 'Security enhancement'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Insurance',
      icon: Shield,
      solutions: ['Risk assessment', 'Claims processing', 'Fraud detection', 'Customer engagement'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Fintech Startups',
      icon: Rocket,
      solutions: ['Platform development', 'Regulatory compliance', 'Security infrastructure', 'Scalability solutions'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const compliance = [
    {
      title: 'PCI DSS',
      description: 'Payment Card Industry Data Security Standard compliance',
      icon: CreditCard,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'SOX Compliance',
      description: 'Sarbanes-Oxley Act compliance for financial reporting',
      icon: Building,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'GDPR',
      description: 'General Data Protection Regulation compliance',
      icon: Lock,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Basel III',
      description: 'International banking regulations compliance',
      icon: Globe,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Financial Technology Solutions - Zion Tech Group"
        description="Transform your financial services with cutting-edge technology solutions including AI analytics, quantum computing, blockchain, and advanced cybersecurity."
        keywords={["financial technology", "fintech", "AI analytics", "quantum computing", "blockchain", "cybersecurity", "Zion Tech Group"]}
      />
      
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-blue-900/20 to-purple-900/20" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
                Financial Technology Solutions
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Revolutionizing financial services with cutting-edge technology that enhances security, 
                improves efficiency, and drives innovation in the financial industry.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </a>
                <a
                  href="#solutions"
                  className="px-8 py-4 border-2 border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-400 hover:text-black transition-all duration-300"
                >
                  Explore Solutions
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section id="solutions" className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Comprehensive Financial Solutions
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our financial technology solutions combine artificial intelligence, quantum computing, 
                blockchain, and advanced analytics to deliver secure and efficient financial services.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="group relative"
                >
                  <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-green-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-400/20">
                    {/* Icon */}
                    <div className={`w-16 h-16 mb-6 rounded-full bg-gradient-to-br ${solution.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {solution.title}
                    </h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {solution.description}
                    </p>
                    
                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {solution.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">
                        Business Benefits
                      </h4>
                      <ul className="space-y-2">
                        {solution.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                            <Star className="w-4 h-4 text-yellow-400 mr-3 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* CTA */}
                    <a
                      href="/contact"
                      className="inline-flex items-center text-green-400 hover:text-green-300 font-semibold transition-colors duration-200"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Solutions */}
        <section className="py-20 relative bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Industry-Specific Solutions
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Tailored solutions designed for the unique challenges and opportunities in your financial sector.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="group relative"
                >
                  <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-green-400/50 transition-all duration-300">
                    {/* Icon */}
                    <div className={`w-16 h-16 mb-6 rounded-full bg-gradient-to-br ${industry.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <industry.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {industry.name}
                    </h3>
                    
                    {/* Solutions */}
                    <div className="space-y-3">
                      {industry.solutions.map((solution, solutionIndex) => (
                        <div key={solutionIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {solution}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance & Security */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Compliance & Security
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our financial solutions meet the highest standards of regulatory compliance and data security.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {compliance.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  className="text-center group"
                >
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 relative bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Financial Services?
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Let's discuss how our financial technology solutions can enhance security, 
                improve efficiency, and drive innovation in your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Schedule Consultation
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border-2 border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-400 hover:text-black transition-all duration-300"
                >
                  View All Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default FinancialSolutionsPage;