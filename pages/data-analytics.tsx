import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Database, Brain, Zap, Shield, Globe, Users, Target, Award } from 'lucide-react';
import Layout from '../components/layout/Layout';

export default function DataAnalytics() {
  const services = [
    {
      icon: BarChart3,
      title: 'AI-Powered Decision Engine',
      description: 'Intelligent decision-making platform powered by advanced analytics',
      features: ['Predictive analytics', 'Real-time insights', 'Automated decisions', 'Performance optimization'],
      href: '/ai-powered-decision-engine'
    },
    {
      icon: TrendingUp,
      title: 'AI Revenue Forecasting Copilot',
      description: 'Advanced revenue prediction and financial analytics platform',
      features: ['Revenue forecasting', 'Market analysis', 'Trend identification', 'Financial planning'],
      href: '/ai-revenue-forecasting-copilot'
    },
    {
      icon: Database,
      title: 'Data Contracts & Governance',
      description: 'Comprehensive data management and governance solutions',
      features: ['Data quality', 'Compliance management', 'Data lineage', 'Access control'],
      href: '/data-contracts-governance'
    },
    {
      icon: Brain,
      title: 'Intelligent HR Analytics Platform',
      description: 'AI-driven human resources insights and optimization',
      features: ['Employee analytics', 'Performance metrics', 'Talent insights', 'Workforce planning'],
      href: '/intelligent-hr-analytics-platform'
    },
    {
      icon: Zap,
      title: 'Intelligent Supply Chain Optimization',
      description: 'AI-powered supply chain analytics and optimization',
      features: ['Demand forecasting', 'Inventory analytics', 'Route optimization', 'Risk assessment'],
      href: '/intelligent-supply-chain-optimization'
    },
    {
      icon: Shield,
      title: 'Vendor Risk Automation',
      description: 'Automated vendor risk assessment and monitoring',
      features: ['Risk scoring', 'Compliance monitoring', 'Automated alerts', 'Risk reporting'],
      href: '/vendor-risk-automation'
    }
  ];

  const stats = [
    { number: '100+', label: 'Analytics Models', icon: BarChart3 },
    { number: '24/7', label: 'Real-time Processing', icon: TrendingUp },
    { number: '99.9%', label: 'Data Accuracy', icon: Database },
    { number: '500+', label: 'Data Sources', icon: Brain }
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
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400 bg-clip-text text-transparent mb-6">
                Data Analytics
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Transform your data into actionable insights with our advanced analytics platform. 
                From predictive modeling to real-time business intelligence.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 bg-black/30">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-green-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Data Analytics Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive analytics solutions designed to drive data-driven decision making
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <a href={service.href} className="block">
                    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 h-full hover:bg-gray-700/50 transition-all duration-300 hover:scale-105">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="w-8 h-8 text-green-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-400">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Unlock the Power of Your Data
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let our data analytics experts help you transform insights into action
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border border-green-500 text-green-400 font-semibold rounded-xl hover:bg-green-500/10 transition-all duration-300"
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
}