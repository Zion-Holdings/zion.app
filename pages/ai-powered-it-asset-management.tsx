import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Cpu, Database, Shield, Network, Zap, Target, BarChart3, Cloud, Server, Monitor } from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';
import EnhancedContactForm from '../components/EnhancedContactForm';

export default function AIPoweredITAssetManagement() {
  const features = [
    {
      icon: Cpu,
      title: "Asset Discovery",
      description: "Automated discovery and inventory of all IT assets across your infrastructure",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Database,
      title: "Intelligent Tracking",
      description: "AI-powered asset lifecycle management and performance monitoring",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Shield,
      title: "Security Compliance",
      description: "Automated security audits and compliance monitoring for all assets",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Network,
      title: "Predictive Maintenance",
      description: "AI-driven predictive analytics for proactive asset maintenance",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Cost Optimization",
      description: "Reduce IT costs by up to 40% through intelligent asset management"
    },
    {
      icon: Target,
      title: "Risk Reduction",
      description: "Minimize security risks and compliance violations"
    },
    {
      icon: BarChart3,
      title: "Performance Insights",
      description: "Real-time performance analytics and optimization recommendations"
    },
    {
      icon: Cloud,
      title: "Scalability",
      description: "Easily scale asset management across growing infrastructure"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900">
      <Head>
        <title>AI-Powered IT Asset Management - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered IT asset management platform with automated discovery, intelligent tracking, and predictive maintenance." />
        <meta name="keywords" content="IT asset management, AI asset tracking, infrastructure management, predictive maintenance, security compliance" />
        <meta property="og:title" content="AI-Powered IT Asset Management - Zion Tech Group" />
        <meta property="og:description" content="Revolutionary AI-powered IT asset management platform with automated discovery and intelligent tracking." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-powered-it-asset-management" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-powered-it-asset-management" />
      </Head>

      <EnhancedNavigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                AI-Powered IT Asset
                <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Management
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your IT infrastructure with intelligent asset management that
                discovers, tracks, and optimizes every component automatically.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300"
              >
                Optimize Your Assets
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Platform Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT asset management powered by cutting-edge AI technology
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
                >
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Business Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your IT operations with intelligent asset management
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center mb-4 mx-auto">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Optimize Your IT Assets?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the future of intelligent IT asset management
              </p>
              <EnhancedContactForm />
            </motion.div>
          </div>
        </section>
      </main>

      <EnhancedFooter />
    </div>
  );
}