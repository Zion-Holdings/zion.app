import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  DollarSign, Brain, Shield, Zap, Target, Users, Award, Clock,
  TrendingUp, BarChart3, Lock, Cloud, Settings, Eye, Heart, Lightbulb
} from 'lucide-react';

const FinancialSolutions: React.FC = () => {
  const financialServices = [
    {
      title: "AI-Powered Financial Intelligence",
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      services: [
        { name: "AI Financial Intelligence", href: "/ai-financial-intelligence", featured: true },
        { name: "AI Financial Planning Platform", href: "/ai-financial-planning-platform", featured: true },
        { name: "AI Revenue Forecasting", href: "/ai-revenue-forecasting-copilot" },
        { name: "AI Financial Analytics", href: "/automated-financial-analytics-platform" }
      ]
    },
    {
      title: "Quantum Financial Technology",
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      services: [
        { name: "Quantum Financial Trading Platform", href: "/quantum-financial-trading", featured: true },
        { name: "Quantum Risk Analysis", href: "/quantum-risk-analysis" },
        { name: "Quantum Portfolio Optimization", href: "/quantum-portfolio-optimization" },
        { name: "Quantum Market Prediction", href: "/quantum-market-prediction" }
      ]
    },
    {
      title: "Financial Security & Compliance",
      icon: <Shield className="w-8 h-8 text-green-400" />,
      services: [
        { name: "Financial Data Security", href: "/financial-data-security" },
        { name: "Regulatory Compliance Solutions", href: "/regulatory-compliance-solutions" },
        { name: "Anti-Money Laundering AI", href: "/anti-money-laundering-ai" },
        { name: "Fraud Detection Systems", href: "/fraud-detection-systems" }
      ]
    },
    {
      title: "Financial Operations & Management",
      icon: <Target className="w-8 h-8 text-blue-400" />,
      services: [
        { name: "Financial Process Automation", href: "/financial-process-automation" },
        { name: "Treasury Management Systems", href: "/treasury-management-systems" },
        { name: "Investment Portfolio Management", href: "/investment-portfolio-management" },
        { name: "Financial Reporting Platforms", href: "/financial-reporting-platforms" }
      ]
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-green-900/20 to-emerald-900/20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full">
                  <DollarSign className="w-12 h-12 text-green-400" />
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 via-emerald-400 to-green-400 bg-clip-text text-transparent mb-6">
                Financial Technology Solutions
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-8">
                Revolutionary financial technology solutions that leverage AI and quantum computing 
                to optimize financial operations, enhance security, and drive growth.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105">
                  Explore Financial Solutions
                </button>
                <button className="px-8 py-4 border border-green-400/30 text-green-400 font-semibold rounded-lg hover:bg-green-400/10 transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Financial Services Categories */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Complete Financial Technology Portfolio
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Our comprehensive financial solutions cover every aspect of modern finance, 
                from AI-powered intelligence to quantum trading platforms.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {financialServices.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-green-400/30 transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    {category.icon}
                    <h3 className="text-2xl font-bold text-white ml-3">{category.title}</h3>
                  </div>
                  <div className="space-y-3">
                    {category.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center justify-between">
                        <a
                          href={service.href}
                          className="text-white/80 hover:text-white transition-colors flex items-center"
                        >
                          {service.featured && (
                            <Award className="w-4 h-4 text-yellow-400 mr-2" />
                          )}
                          {service.name}
                        </a>
                        {service.featured && (
                          <span className="text-xs bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-2 py-1 rounded-full">
                            Featured
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Financial Operations?
              </h2>
              <p className="text-xl text-white/70 mb-8">
                Join us in revolutionizing financial technology. Optimize operations, 
                enhance security, and drive growth with our cutting-edge solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105">
                  Get Started Today
                </button>
                <button className="px-8 py-4 border border-green-400/30 text-green-400 font-semibold rounded-lg hover:bg-green-400/10 transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default FinancialSolutions;