import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Shield, 
  Database, 
  Brain, 
  Cpu, 
  Zap, 
  Target, 
  CheckCircle, 
  Star,
  Lock,
  Globe,
  Users,
  CreditCard,
  TrendingUp,
  Activity,
  FileText,
  Calculator,
  DollarSign
} from 'lucide-react';
import Layout from '../../components/layout/Layout';

const FinancialSolutionsPage: React.FC = () => {
  const solutions = [
    {
      title: 'AI-Powered Trading Platforms',
      description: 'Advanced algorithmic trading systems that leverage machine learning for optimal investment decisions.',
      icon: TrendingUp,
      features: [
        'Real-time market analysis',
        'Predictive modeling',
        'Risk management',
        'Portfolio optimization',
        'Automated trading',
        'Performance analytics'
      ],
      benefits: ['Increased returns', 'Risk reduction', '24/7 trading', 'Data-driven decisions']
    },
    {
      title: 'Blockchain & DeFi Solutions',
      description: 'Decentralized finance platforms and blockchain infrastructure for modern financial services.',
      icon: Globe,
      features: [
        'Smart contract development',
        'DeFi protocol design',
        'Cross-chain interoperability',
        'Token economics',
        'Governance systems',
        'Security auditing'
      ],
      benefits: ['Transparency', 'Reduced costs', 'Global access', 'Innovation']
    },
    {
      title: 'RegTech & Compliance',
      description: 'Regulatory technology solutions that automate compliance and reduce regulatory risk.',
      icon: Shield,
      features: [
        'KYC/AML automation',
        'Regulatory reporting',
        'Compliance monitoring',
        'Audit trails',
        'Risk assessment',
        'Policy management'
      ],
      benefits: ['Cost reduction', 'Risk mitigation', 'Regulatory compliance', 'Operational efficiency']
    },
    {
      title: 'Financial Analytics & BI',
      description: 'Comprehensive business intelligence solutions for financial data analysis and reporting.',
      icon: BarChart3,
      features: [
        'Real-time dashboards',
        'Predictive analytics',
        'Financial modeling',
        'Performance metrics',
        'Custom reporting',
        'Data visualization'
      ],
      benefits: ['Better insights', 'Faster decisions', 'Improved performance', 'Cost optimization']
    },
    {
      title: 'Payment & Banking Solutions',
      description: 'Modern payment processing and digital banking infrastructure for financial institutions.',
      icon: CreditCard,
      features: [
        'Payment gateway integration',
        'Digital wallets',
        'Cross-border payments',
        'Fraud detection',
        'Multi-currency support',
        'API-first architecture'
      ],
      benefits: ['Faster transactions', 'Lower costs', 'Better security', 'Global reach']
    },
    {
      title: 'Risk Management & Fraud Detection',
      description: 'Advanced risk assessment and fraud prevention systems using AI and machine learning.',
      icon: Lock,
      features: [
        'Real-time fraud detection',
        'Risk scoring models',
        'Behavioral analysis',
        'Anomaly detection',
        'Compliance monitoring',
        'Incident response'
      ],
      benefits: ['Fraud prevention', 'Risk reduction', 'Cost savings', 'Customer protection']
    }
  ];

  const industries = [
    {
      name: 'Traditional Banking',
      description: 'Digital transformation solutions for established financial institutions.',
      icon: Users,
      solutions: ['Core banking modernization', 'Digital channels', 'Customer experience', 'Operational efficiency']
    },
    {
      name: 'Fintech Startups',
      description: 'Scalable technology infrastructure for innovative financial services companies.',
      icon: Zap,
      solutions: ['MVP development', 'Scalable architecture', 'Regulatory compliance', 'Market launch']
    },
    {
      name: 'Investment Management',
      description: 'Advanced analytics and trading platforms for investment professionals.',
      icon: TrendingUp,
      solutions: ['Portfolio management', 'Risk analytics', 'Trading algorithms', 'Performance reporting']
    },
    {
      name: 'Insurance & Risk',
      description: 'Technology solutions for insurance companies and risk management firms.',
      icon: Shield,
      solutions: ['Claims processing', 'Risk assessment', 'Customer portals', 'Analytics platforms']
    }
  ];

  const compliance = [
    {
      title: 'PCI DSS',
      description: 'Payment Card Industry Data Security Standard compliance for payment processing.',
      icon: Lock,
      features: ['Data encryption', 'Access controls', 'Network security', 'Regular audits']
    },
    {
      title: 'SOC 2 Type II',
      description: 'Service Organization Control 2 certification for financial services.',
      icon: CheckCircle,
      features: ['Security controls', 'Availability monitoring', 'Processing integrity', 'Confidentiality']
    },
    {
      title: 'GDPR & Privacy',
      description: 'General Data Protection Regulation compliance for data privacy.',
      icon: Shield,
      features: ['Data protection', 'Privacy by design', 'Consent management', 'Data portability']
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Financial{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Technology Solutions
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Revolutionizing financial services with cutting-edge technology that drives innovation, 
                security, and compliance in the digital economy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  Get Fintech Quote
                </a>
                <a
                  href="/solutions"
                  className="px-8 py-4 border border-cyan-400/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400/10 transition-all duration-300"
                >
                  View All Solutions
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solutions Overview */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Fintech Solutions
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Our comprehensive fintech solutions address the evolving needs of modern financial 
                services, from traditional banking to cutting-edge DeFi platforms.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{solution.title}</h3>
                      <p className="text-gray-300">{solution.description}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {solution.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-3">Business Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <span
                          key={benefitIndex}
                          className="px-3 py-1 bg-cyan-400/10 text-cyan-400 text-sm rounded-full border border-cyan-400/20"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Solutions */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Industry-Specific Solutions
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Tailored fintech solutions designed for the unique challenges and requirements 
                of different financial services sectors.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="bg-gradient-to-r from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                      <industry.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{industry.name}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{industry.description}</p>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-3">Key Solutions:</h4>
                    <div className="space-y-2">
                      {industry.solutions.map((solution, solutionIndex) => (
                        <div key={solutionIndex} className="flex items-center text-sm text-gray-300">
                          <Star className="w-4 h-4 text-yellow-400 mr-2" />
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
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Compliance & Security
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Our fintech solutions meet the highest standards of compliance and security 
                required in the financial services industry.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {compliance.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="bg-gradient-to-r from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-300 mb-6">{item.description}</p>
                  <div className="space-y-2">
                    {item.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center justify-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="bg-gradient-to-r from-cyan-400/10 to-blue-500/10 border border-cyan-400/20 rounded-3xl p-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Transform Financial Services?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our fintech solutions can drive innovation, 
                ensure compliance, and create competitive advantages for your financial organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  Schedule Fintech Consultation
                </a>
                <a
                  href="/case-studies"
                  className="px-8 py-4 border border-cyan-400/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400/10 transition-all duration-300"
                >
                  View Financial Case Studies
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