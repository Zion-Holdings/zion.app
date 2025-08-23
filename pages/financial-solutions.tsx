import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Brain, Shield, TrendingUp, Target, Zap, Globe, Award } from 'lucide-react';
import Layout from '../components/layout/Layout';

export default function FinancialSolutions() {
  const solutions = [
    {
      icon: <Brain className="w-12 h-12 text-cyan-400" />,
      title: "AI-Powered Trading",
      description: "Quantum AI trading algorithms for financial market optimization",
      href: "/quantum-financial-trading-platform"
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-400" />,
      title: "Financial Security",
      description: "Advanced cybersecurity and fraud detection for financial institutions",
      href: "/quantum-cybersecurity-platform"
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-purple-400" />,
      title: "Risk Analytics",
      description: "AI-driven risk assessment and portfolio optimization",
      href: "/ai-powered-decision-engine"
    },
    {
      icon: <Target className="w-12 h-12 text-green-400" />,
      title: "Compliance Automation",
      description: "Automated regulatory compliance and reporting systems",
      href: "/soc2-compliance-automation"
    },
    {
      icon: <Zap className="w-12 h-12 text-yellow-400" />,
      title: "Process Automation",
      description: "Intelligent automation for financial operations and workflows",
      href: "/ai-autonomous-business-operations"
    },
    {
      icon: <Globe className="w-12 h-12 text-pink-400" />,
      title: "Global Infrastructure",
      description: "Multi-cloud infrastructure for global financial services",
      href: "/multi-cloud-disaster-recovery"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Financial Technology Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Transform your financial services with AI-powered trading, quantum cybersecurity, 
                and intelligent automation solutions designed for the modern financial industry.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                  className="p-8 bg-black/40 border border-gray-800 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 group cursor-pointer"
                  onClick={() => window.location.href = solution.href}
                >
                  <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 text-center">{solution.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-center">{solution.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Financial Services?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let our financial technology experts help you build the future of finance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                </a>
                <a
                  href="/solutions"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300"
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
}