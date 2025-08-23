import React from 'react';
import { motion } from 'framer-motion';
import { 
  DollarSign, 
  TrendingUp, 
  Shield, 
  Brain, 
  Database, 
  Cloud, 
  Zap, 
  Users,
  ArrowRight,
  CheckCircle,
  Star,
  Activity,
  Monitor,
  CreditCard,
  BarChart3,
  Lock,
  Globe,
  Building,
  PieChart,
  Calculator
} from 'lucide-react';
import Link from 'next/link';

export default function FinancialSolutions() {
  const solutions = [
    {
      title: "AI-Powered Trading",
      description: "Advanced algorithmic trading and market analysis using artificial intelligence",
      icon: <TrendingUp className="w-8 h-8 text-green-400" />,
      features: ["Algorithmic trading", "Market prediction", "Risk assessment", "Portfolio optimization"],
      href: "/quantum-financial-trading"
    },
    {
      title: "Financial Data Analytics",
      description: "Comprehensive financial data analysis and business intelligence solutions",
      icon: <BarChart3 className="w-8 h-8 text-blue-400" />,
      features: ["Real-time analytics", "Predictive modeling", "Risk management", "Performance tracking"],
      href: "/financial-analytics"
    },
    {
      title: "Blockchain & FinTech",
      description: "Next-generation financial technology and blockchain solutions",
      icon: <Globe className="w-8 h-8 text-purple-400" />,
      features: ["Cryptocurrency platforms", "Smart contracts", "DeFi solutions", "Digital payments"],
      href: "/blockchain-solutions"
    },
    {
      title: "Regulatory Compliance",
      description: "Automated compliance monitoring and regulatory reporting systems",
      icon: <Shield className="w-8 h-8 text-orange-400" />,
      features: ["KYC/AML automation", "Regulatory reporting", "Compliance monitoring", "Audit trails"],
      href: "/regulatory-compliance"
    },
    {
      title: "Payment Processing",
      description: "Secure and scalable payment processing and transaction management",
      icon: <CreditCard className="w-8 h-8 text-cyan-400" />,
      features: ["Multi-currency support", "Fraud detection", "Payment analytics", "API integration"],
      href: "/payment-processing"
    },
    {
      title: "Financial Security",
      description: "Advanced cybersecurity and fraud prevention for financial institutions",
      icon: <Lock className="w-8 h-8 text-red-400" />,
      features: ["Fraud detection", "Data encryption", "Access control", "Threat monitoring"],
      href: "/financial-cybersecurity"
    }
  ];

  const benefits = [
    "Increased trading performance and profitability",
    "Enhanced risk management and compliance",
    "Improved operational efficiency and automation",
    "Better customer experience and engagement",
    "Reduced operational costs and manual errors",
    "Real-time insights and decision making"
  ];

  const useCases = [
    {
      title: "Investment Banks",
      description: "Advanced trading platforms and risk management solutions",
      icon: <Building className="w-6 h-6" />
    },
    {
      title: "Hedge Funds",
      description: "AI-powered trading algorithms and portfolio optimization",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Retail Banks",
      description: "Digital banking and customer experience solutions",
      icon: <CreditCard className="w-6 h-6" />
    },
    {
      title: "Insurance Companies",
      description: "Risk assessment and claims processing automation",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "FinTech Startups",
      description: "Innovative financial technology platforms and services",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Asset Management",
      description: "Portfolio management and investment analytics platforms",
      icon: <PieChart className="w-6 h-6" />
    }
  ];

  const technologies = [
    "Artificial Intelligence & Machine Learning",
    "Quantum Computing",
    "Blockchain & Distributed Ledger",
    "Cloud Computing & APIs",
    "Big Data Analytics",
    "Cybersecurity & Compliance"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
              Financial Technology
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionize financial services with cutting-edge technology solutions. From AI-powered trading 
              to blockchain innovation, we're transforming the future of finance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Get Started
              </Link>
              <Link href="/case-studies" className="border border-green-500 text-green-400 hover:bg-green-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Financial Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to enhance financial services and drive innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300 group"
              >
                <div className="mb-4">{solution.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{solution.title}</h3>
                <p className="text-gray-300 mb-4">{solution.description}</p>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  href={solution.href}
                  className="inline-flex items-center text-green-400 hover:text-green-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our Financial Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of cutting-edge financial technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-green-400" />
                </div>
                <p className="text-lg text-white font-medium">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Financial Organizations We Serve
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our solutions are designed for financial institutions of all sizes and types
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-lg p-6 text-center hover:border-green-500/50 transition-all duration-300"
              >
                <div className="text-green-400 mb-3 flex justify-center">{useCase.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                <p className="text-gray-300 text-sm">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Cutting-Edge Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We leverage the latest technologies to deliver innovative financial solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((technology, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-lg p-6 text-center hover:border-blue-500/50 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white">{technology}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Finance?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our financial technology solutions can drive innovation and growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Schedule a Consultation
              </Link>
              <Link href="/pricing" className="border border-green-500 text-green-400 hover:bg-green-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}