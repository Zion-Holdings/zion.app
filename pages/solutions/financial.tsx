import React from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Shield, 
  Brain, 
  DollarSign, 
  Database, 
  Cpu, 
  Globe, 
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Lock,
  Activity,
  Rocket,
  Users
} from 'lucide-react';

const FinancialSolutionsPage: React.FC = () => {
  const fintechSolutions = [
    {
      title: "AI Financial Intelligence Platform",
      description: "Advanced AI-powered financial analysis and decision-making platform for institutions",
      features: ["Risk assessment", "Portfolio optimization", "Market prediction", "Regulatory compliance"],
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      href: "/ai-financial-intelligence"
    },
    {
      title: "Quantum Financial Trading",
      description: "Quantum computing-powered trading algorithms for ultra-fast market analysis",
      features: ["Quantum algorithms", "Real-time analysis", "Risk management", "High-frequency trading"],
      icon: Cpu,
      color: "from-blue-500 to-cyan-500",
      href: "/quantum-financial-trading"
    },
    {
      title: "Blockchain Financial Services",
      description: "Secure blockchain-based financial services and decentralized finance solutions",
      features: ["Smart contracts", "DeFi protocols", "Cross-border payments", "Asset tokenization"],
      icon: Globe,
      color: "from-emerald-500 to-teal-500",
      href: "/blockchain-financial-services"
    },
    {
      title: "Financial Cybersecurity",
      description: "Comprehensive security solutions designed specifically for financial institutions",
      features: ["Fraud detection", "Compliance monitoring", "Data encryption", "Access control"],
      icon: Shield,
      color: "from-red-500 to-orange-500",
      href: "/cybersecurity"
    },
    {
      title: "RegTech Compliance Platform",
      description: "Automated regulatory compliance and reporting for financial institutions",
      features: ["Automated reporting", "Compliance monitoring", "Risk assessment", "Audit trails"],
      icon: Lock,
      color: "from-indigo-500 to-purple-500",
      href: "/regtech-compliance-platform"
    },
    {
      title: "Financial Data Analytics",
      description: "Advanced analytics platform for financial insights and business intelligence",
      features: ["Real-time analytics", "Predictive modeling", "Custom dashboards", "Data governance"],
      icon: BarChart3,
      color: "from-yellow-500 to-orange-500",
      href: "/data-analytics"
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Regulatory Compliant",
      description: "Full compliance with financial regulations and standards"
    },
    {
      icon: Brain,
      title: "AI-Powered",
      description: "Advanced AI consciousness for improved financial decision-making"
    },
    {
      icon: Zap,
      title: "Real-time",
      description: "Instant access to financial data and market insights"
    },
    {
      icon: Users,
      title: "Institution-Grade",
      description: "Built for the security and reliability financial institutions require"
    }
  ];

  const useCases = [
    "Banks & Credit Unions",
    "Investment Firms",
    "Insurance Companies",
    "Fintech Startups",
    "Payment Processors",
    "Cryptocurrency Exchanges",
    "Regulatory Bodies",
    "Financial Advisors"
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Financial Technology Solutions
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Revolutionizing finance with AI consciousness, quantum computing, and blockchain technology 
                for the modern financial institution
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center space-x-2 text-cyan-400">
                  <DollarSign className="w-5 h-5" />
                  <span>Financial Innovation</span>
                </div>
                <div className="flex items-center space-x-2 text-blue-400">
                  <Brain className="w-5 h-5" />
                  <span>AI-Powered Intelligence</span>
                </div>
                <div className="flex items-center space-x-2 text-purple-400">
                  <Shield className="w-5 h-5" />
                  <span>Regulatory Compliant</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Fintech Technology Solutions
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive solutions designed to transform financial services and drive innovation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {fintechSolutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 group"
                >
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${solution.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{solution.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{solution.description}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-300 flex items-center">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={solution.href}
                    className="inline-flex items-center w-full justify-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Why Choose Zion Tech Group for Fintech?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Financial technology solutions with the innovation and security your institution needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Financial Institutions We Serve
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our fintech solutions are trusted by diverse financial organizations worldwide
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.0 + index * 0.05 }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 text-center hover:border-cyan-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
                >
                  <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{useCase}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-3xl p-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Transform Financial Services?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our fintech solutions can help you innovate, comply with regulations, 
                and deliver superior financial services to your customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-2xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25"
                >
                  Schedule Fintech Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="/solutions"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-2xl hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  View All Solutions
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