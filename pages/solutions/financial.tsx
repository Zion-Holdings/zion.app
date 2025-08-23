import React from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  DollarSign, 
  Shield, 
  Database, 
  Cpu, 
  TrendingUp, 
  Lock, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Target,
  Rocket,
  Brain,
  Atom,
  CreditCard,
  Wallet,
  PiggyBank,
  Calculator,
  PieChart,
  LineChart,
  Building
} from 'lucide-react';
import Link from 'next/link';

const FinancialTechnologyPage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: "Financial Security",
      description: "Bank-grade security and fraud prevention systems",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Database,
      title: "Real-time Analytics",
      description: "Instant financial data insights and reporting",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Cpu,
      title: "AI-Powered Trading",
      description: "Advanced algorithmic trading and risk management",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Lock,
      title: "Blockchain Security",
      description: "Decentralized and immutable financial transactions",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "AI-driven market forecasting and trend analysis",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Globe,
      title: "Global Payments",
      description: "Cross-border payment processing and currency conversion",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const solutions = [
    {
      title: "AI Financial Risk Platform",
      description: "Advanced AI-powered financial risk assessment and management",
      features: ["Risk Modeling", "Portfolio Optimization", "Stress Testing", "Regulatory Compliance"],
      href: "/ai-financial-risk"
    },
    {
      title: "Quantum Financial Trading",
      description: "Next-generation quantum computing for financial markets",
      features: ["Quantum Algorithms", "High-Frequency Trading", "Market Analysis", "Risk Management"],
      href: "/quantum-financial-trading"
    },
    {
      title: "Blockchain Payment Platform",
      description: "Secure and transparent blockchain-based payment solutions",
      features: ["Smart Contracts", "Cross-border Payments", "Tokenization", "DeFi Integration"],
      href: "/blockchain-payment-platform"
    },
    {
      title: "Financial Data Analytics",
      description: "Comprehensive financial data management and insights",
      features: ["Real-time Reporting", "Predictive Analytics", "Compliance Monitoring", "Performance Tracking"],
      href: "/financial-data-analytics"
    }
  ];

  const stats = [
    { number: "$50B+", label: "Transaction Volume", description: "Processed annually" },
    { number: "99.99%", label: "Security Rate", description: "Bank-grade protection" },
    { number: "150+", label: "Countries", description: "Global financial reach" },
    { number: "1M+", label: "Active Users", description: "Trusted worldwide" }
  ];

  const useCases = [
    {
      title: "Digital Banking",
      description: "Modern banking solutions for the digital age",
      icon: CreditCard,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Investment Management",
      description: "AI-powered portfolio optimization and management",
      icon: PieChart,
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Payment Processing",
      description: "Secure and fast payment solutions",
      icon: Wallet,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Regulatory Compliance",
      description: "Automated compliance monitoring and reporting",
      icon: Shield,
      color: "from-red-500 to-orange-500"
    }
  ];

  const industries = [
    {
      title: "Traditional Banking",
      description: "Modernize legacy banking systems with AI and blockchain",
      icon: Building,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Fintech Startups",
      description: "Scalable infrastructure for innovative financial services",
      icon: Rocket,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Investment Firms",
      description: "Advanced trading and portfolio management tools",
      icon: TrendingUp,
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Insurance Companies",
      description: "AI-powered risk assessment and claims processing",
      icon: Shield,
      color: "from-red-500 to-orange-500"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-blue-900/20 to-purple-900/20" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
                Financial Technology
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Revolutionizing finance with cutting-edge technology solutions that drive innovation, security, and growth in the financial sector.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-600 text-white rounded-xl font-semibold hover:from-emerald-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Financial Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  href="/solutions" 
                  className="inline-flex items-center px-8 py-4 border border-gray-600 text-gray-300 rounded-xl font-semibold hover:border-emerald-500 hover:text-emerald-400 transition-all duration-300"
                >
                  View All Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Financial Innovation Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Built for the financial industry with security, compliance, and performance at the core.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/20"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400 text-lg">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Financial Solutions Portfolio
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive financial technology solutions designed to transform banking, trading, and financial services.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-emerald-500/50 transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                  <p className="text-gray-400 mb-6">{solution.description}</p>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-emerald-400" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link 
                    href={solution.href}
                    className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors duration-300"
                  >
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Financial Use Cases
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Real-world applications of our financial technology solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-emerald-500/50 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${useCase.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-400 text-lg">{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Financial Industries We Serve
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive solutions for all sectors of the financial industry.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-emerald-500/50 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{industry.title}</h3>
                  <p className="text-gray-400 text-lg">{industry.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Financial Impact & Scale
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Proven results in transforming financial services and operations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xl font-semibold text-white mb-2">{stat.label}</div>
                  <div className="text-gray-400">{stat.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-emerald-900/20 via-blue-900/20 to-purple-900/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Finance?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Let's discuss how our financial technology solutions can drive innovation, security, and growth in your financial operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-600 text-white rounded-xl font-semibold hover:from-emerald-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Schedule Financial Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  href="/solutions" 
                  className="inline-flex items-center px-8 py-4 border border-gray-600 text-gray-300 rounded-xl font-semibold hover:border-emerald-500 hover:text-emerald-400 transition-all duration-300"
                >
                  Explore All Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default FinancialTechnologyPage;