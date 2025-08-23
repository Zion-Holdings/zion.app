import React from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Brain, 
  Shield, 
  Cloud, 
  Database, 
  Users, 
  Target, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Cpu,
  Globe,
  Code,
  FileText,
  BarChart3,
  Eye,
  Lock,
  Zap,
  DollarSign
} from 'lucide-react';

const FinancialSolutionsPage: React.FC = () => {
  const solutions = [
    {
      title: 'Financial AI & Analytics',
      description: 'AI-powered solutions for financial analysis and decision making',
      icon: <Brain className="w-8 h-8" />,
      features: [
        'Risk assessment models',
        'Fraud detection',
        'Portfolio optimization',
        'Predictive analytics'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Financial Cybersecurity',
      description: 'Advanced security solutions for financial institutions',
      icon: <Shield className="w-8 h-8" />,
      features: [
        'PCI DSS compliance',
        'Fraud prevention',
        'Threat detection',
        'Security monitoring'
      ],
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Financial Cloud Infrastructure',
      description: 'Secure cloud solutions designed for financial workloads',
      icon: <Cloud className="w-8 h-8" />,
      features: [
        'Regulatory compliance',
        'Data sovereignty',
        'High availability',
        'Cost optimization'
      ],
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Financial Data Management',
      description: 'Comprehensive data solutions for financial organizations',
      icon: <Database className="w-8 h-8" />,
      features: [
        'Real-time processing',
        'Data governance',
        'Compliance automation',
        'Data quality assurance'
      ],
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Digital Banking Platforms',
      description: 'Modern digital banking solutions for financial institutions',
      icon: <Globe className="w-8 h-8" />,
      features: [
        'Mobile banking apps',
        'Online banking portals',
        'API integration',
        'User experience design'
      ],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Financial Process Automation',
      description: 'Automation solutions to improve financial operations',
      icon: <Zap className="w-8 h-8" />,
      features: [
        'Payment processing',
        'Compliance reporting',
        'Risk management',
        'Performance monitoring'
      ],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const compliance = [
    'PCI DSS',
    'SOC 2 Type II',
    'ISO 27001',
    'NIST Cybersecurity Framework',
    'GDPR',
    'SOX Compliance'
  ];

  const benefits = [
    'Financial industry expertise',
    'Regulatory compliance',
    '24/7 support',
    'Proven financial track record',
    'Scalable solutions',
    'Cost-effective implementation'
  ];

  const caseStudies = [
    {
      organization: 'Regional Bank',
      project: 'Digital Banking Platform',
      result: 'Increased customer engagement by 200%',
      description: 'Modernized digital banking experience with mobile-first design'
    },
    {
      organization: 'Investment Firm',
      project: 'AI Risk Management',
      result: 'Reduced risk exposure by 35%',
      description: 'Implemented AI-powered risk assessment and portfolio optimization'
    },
    {
      organization: 'Credit Union',
      project: 'Process Automation',
      result: 'Improved operational efficiency by 45%',
      description: 'Automated loan processing and compliance reporting'
    }
  ];

  return (
    <Layout 
      title="Financial Solutions - Zion Tech Group"
      description="Secure, compliant technology solutions for financial institutions. AI analytics, cybersecurity, cloud infrastructure, and digital banking platforms."
      keywords="financial solutions, financial AI, financial cybersecurity, PCI DSS, digital banking, financial cloud, Zion Tech Group"
    >
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/20 via-orange-900/20 to-red-900/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <TrendingUp className="w-16 h-16 text-yellow-400 mr-4" />
                <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 bg-clip-text text-transparent">
                  Financial Solutions
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Secure, compliant technology solutions designed specifically for financial institutions. 
                From AI analytics to digital banking, we help drive innovation and compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                  Financial Inquiry
                </button>
                <button className="border border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                  Compliance Overview
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Financial Technology Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our financial solutions are built with security, compliance, and innovation in mind. 
                Each solution is designed to meet the unique challenges of financial institutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:border-yellow-500/50 transition-all duration-300 group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {solution.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                  <p className="text-gray-300 mb-6">{solution.description}</p>
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                    Learn More
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-20 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Financial Compliance & Certifications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We maintain the highest levels of financial compliance and security certifications 
                to ensure your institution meets regulatory requirements.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {compliance.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{cert}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Financial Institutions Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We understand the unique challenges of financial technology and deliver 
                solutions that drive innovation while maintaining compliance.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Star className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Financial Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how financial institutions have improved their operations with our solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseStudies.map((story, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <DollarSign className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{story.organization}</h3>
                  <p className="text-yellow-400 mb-2">{story.project}</p>
                  <p className="text-2xl font-bold text-green-400 mb-4">{story.result}</p>
                  <p className="text-gray-300">{story.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Financial Institution?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Let's discuss how our financial solutions can drive innovation, 
                improve compliance, and enhance customer experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                  Contact Financial Team
                </button>
                <button className="border border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                  Download Financial Brochure
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default FinancialSolutionsPage;