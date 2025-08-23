import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Link, Shield, BarChart3, Zap, Globe, Phone, Mail, MapPin, TrendingUp, Database, Lock } from 'lucide-react';
import UltraFuturisticBackground2030 from '../components/ui/UltraFuturisticBackground2030';
import UltraFuturisticNavigation2030 from '../components/layout/UltraFuturisticNavigation2030';
import UltraFuturisticFooter2030 from '../components/layout/UltraFuturisticFooter2030';

// Service data
const serviceData = {
  name: 'Blockchain Supply Chain Management 2030',
  description: 'Revolutionary blockchain-powered supply chain transparency and traceability',
  price: '$399/month',
  features: [
    {
      title: 'End-to-End Traceability',
      description: 'Complete visibility into every step of your supply chain with immutable blockchain records and real-time tracking.',
      icon: Link
    },
    {
      title: 'Smart Contract Automation',
      description: 'Automated execution of supply chain agreements, payments, and compliance checks using intelligent smart contracts.',
      icon: Zap
    },
    {
      title: 'Real-Time Supply Chain Analytics',
      description: 'Advanced analytics dashboard with predictive insights, risk assessment, and performance optimization.',
      icon: BarChart3
    },
    {
      title: 'Global Supply Chain Network',
      description: 'Connect with suppliers, manufacturers, and distributors worldwide through our decentralized network.',
      icon: Globe
    },
    {
      title: 'Enhanced Security & Compliance',
      description: 'Military-grade security with regulatory compliance automation for food safety, pharmaceuticals, and more.',
      icon: Shield
    },
    {
      title: 'AI-Powered Risk Management',
      description: 'Predictive risk assessment and mitigation using machine learning and blockchain data analysis.',
      icon: Lock
    }
  ],
  marketPosition: 'Leading blockchain-powered supply chain management platform for enterprises seeking complete transparency, traceability, and automation across global supply networks.',
  useCases: [
    'Food safety and traceability',
    'Pharmaceutical supply chains',
    'Luxury goods authentication',
    'Automotive parts tracking',
    'Agricultural supply chains',
    'Retail inventory management'
  ],
  roi: 'Average customer sees 450% ROI within 12 months through improved efficiency, reduced fraud, and enhanced compliance.',
  contactInfo: {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  }
};

export default function BlockchainSupplyChainManagement2030() {
  const { features, marketPosition, useCases, roi, contactInfo } = serviceData;

  return (
    <>
      <Head>
        <title>{serviceData.name} - Zion Tech Group</title>
        <meta name="description" content={serviceData.description} />
        <meta name="keywords" content="blockchain supply chain, supply chain management, blockchain technology, traceability, Zion Tech Group" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content={`${serviceData.name} - Zion Tech Group`} />
        <meta property="og:description" content={serviceData.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/blockchain-supply-chain-management-2030" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${serviceData.name} - Zion Tech Group`} />
        <meta name="twitter:description" content={serviceData.description} />
        <meta name="twitter:image" content="https://ziontechgroup.com/og-image.jpg" />
      </Head>

      <UltraFuturisticBackground2030>
        <UltraFuturisticNavigation2030 />

        <main className="relative z-10">
          {/* Hero Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="max-w-7xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl mb-6">
                  <Link className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-600 bg-clip-text text-transparent">
                    Blockchain Supply Chain Management 2030
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  Transform your supply chain with blockchain-powered transparency, traceability, and automation. Build trust, reduce costs, and ensure compliance across your global network.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              >
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">$399</div>
                  <div className="text-gray-400">/month</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400 mb-2">30 Days</div>
                  <div className="text-gray-400">Free Trial</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400 mb-2">25 Minutes</div>
                  <div className="text-gray-400">Setup Time</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-200">
                  Schedule Demo
                </button>
              </motion.div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/10 to-transparent"></div>
            <div className="max-w-7xl mx-auto relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Revolutionary Features
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Experience the future of supply chain management with blockchain-powered transparency, smart contracts, and intelligent automation.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group cursor-pointer"
                  >
                    <div className="bg-gradient-to-br from-cyan-900/50 to-blue-900/50 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-8 h-full hover:from-cyan-800/60 hover:to-blue-800/60 transition-all duration-300 hover:scale-105">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Market Position Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Market Position
                  </span>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  {marketPosition}
                </p>
              </motion.div>
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/10 to-transparent"></div>
            <div className="max-w-6xl mx-auto relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Use Cases & Applications
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Our Blockchain Supply Chain Management platform is designed for diverse industries and supply chain needs.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {useCases.map((useCase, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 backdrop-blur-xl border border-cyan-500/20 rounded-xl p-6 hover:from-cyan-800/40 hover:to-blue-800/40 transition-all duration-300"
                  >
                    <h3 className="text-lg font-semibold text-white mb-3">{useCase}</h3>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ROI Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                    Proven ROI & Results
                  </span>
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  {roi}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-400 mb-2">450%</div>
                    <div className="text-gray-400">Average ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-cyan-400 mb-2">12 Months</div>
                    <div className="text-gray-400">Time to ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-400 mb-2">1200+</div>
                    <div className="text-gray-400">Happy Customers</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold text-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200">
                    Get Started Today
                  </button>
                  <button className="px-8 py-4 border-2 border-green-400 text-green-400 rounded-xl font-semibold text-lg hover:bg-green-400 hover:text-black transition-all duration-200">
                    View Case Studies
                  </button>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/10 to-transparent"></div>
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready to Transform Your Supply Chain with
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-600 bg-clip-text text-transparent"> Blockchain Technology?</span>
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Contact our team of blockchain experts to discuss how our revolutionary 2030 Supply Chain Management platform can transform your business and create transparent, efficient supply networks.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                  <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200">
                    Schedule Consultation
                  </button>
                  <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-200">
                    View Pricing
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-gray-300">
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="w-5 h-5 text-cyan-400" />
                    <span>{contactInfo.mobile}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="w-5 h-5 text-blue-400" />
                    <span>{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                    <span className="text-sm">{contactInfo.address}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <UltraFuturisticFooter2030 />
      </UltraFuturisticBackground2030>
    </>
  );
}