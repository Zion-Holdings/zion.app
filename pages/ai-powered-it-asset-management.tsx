import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Monitor, Brain, Cpu, Zap, Shield, Globe, 
  Rocket, Target, TrendingUp, Users, CheckCircle,
  ArrowRight, Star, Award, Clock, DollarSign,
  Database, Network, Server, Laptop, Smartphone
} from 'lucide-react';

const AIPoweredITAssetManagement = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Asset Discovery",
      description: "Intelligent detection and cataloging of all IT assets across your network",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Monitor,
      title: "Real-Time Monitoring",
      description: "Continuous monitoring and health assessment of all IT assets",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Security Compliance",
      description: "Automated security audits and compliance monitoring for all assets",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "AI-driven insights for asset lifecycle management and optimization",
      color: "from-red-500 to-orange-500"
    }
  ];

  const assetTypes = [
    "Hardware devices (servers, workstations, mobile devices)",
    "Software licenses and applications",
    "Network infrastructure and equipment",
    "Cloud resources and virtual machines",
    "Security devices and appliances",
    "Peripheral devices and accessories"
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Cost Optimization",
      value: "35%",
      description: "Reduction in IT asset costs"
    },
    {
      icon: Clock,
      title: "Time Savings",
      value: "60%",
      description: "Faster asset management"
    },
    {
      icon: Shield,
      title: "Security Improvement",
      value: "90%",
      description: "Better security compliance"
    },
    {
      icon: TrendingUp,
      title: "Efficiency Boost",
      value: "200%",
      description: "Increased operational efficiency"
    }
  ];

  const capabilities = [
    "Automated asset discovery and inventory",
    "Real-time health monitoring and alerts",
    "Predictive maintenance scheduling",
    "License compliance management",
    "Security vulnerability assessment",
    "Asset lifecycle optimization",
    "Cost allocation and tracking",
    "Integration with existing IT tools"
  ];

  return (
    <>
      <Head>
        <title>AI-Powered IT Asset Management - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered IT asset management platform that provides intelligent discovery, monitoring, and optimization of all your IT infrastructure and assets." />
        <meta name="keywords" content="IT asset management, AI monitoring, asset discovery, IT infrastructure, predictive maintenance" />
        <meta property="og:title" content="AI-Powered IT Asset Management - Zion Tech Group" />
        <meta property="og:description" content="Revolutionary AI-powered IT asset management platform." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-powered-it-asset-management" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full">
                  <Monitor className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI-Powered IT Asset
                <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Management
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your IT operations with intelligent asset management that discovers, 
                monitors, and optimizes every piece of your technology infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-200">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link href="/services" className="inline-flex items-center px-8 py-3 border border-indigo-500 text-indigo-400 font-semibold rounded-lg hover:bg-indigo-500 hover:text-white transition-all duration-200">
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Revolutionary Features
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Experience the future of IT asset management with our AI-powered platform
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-xl border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300"
                >
                  <div className={`inline-flex p-3 bg-gradient-to-r ${feature.color} rounded-lg mb-4`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Asset Types Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-slate-900/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Asset Coverage
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Manage every type of IT asset across your entire infrastructure
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {assetTypes.map((assetType, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-indigo-400 flex-shrink-0" />
                  <span className="text-gray-300">{assetType}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Measurable Results
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                See the real impact of AI-powered asset management on your IT operations
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-xl border border-slate-700/50">
                    <div className="inline-flex p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg mb-4">
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-indigo-400 mb-2">{benefit.value}</div>
                    <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-400 text-sm">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-slate-900/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Capabilities
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Comprehensive asset management capabilities powered by artificial intelligence
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-indigo-400 flex-shrink-0" />
                  <span className="text-gray-300">{capability}</span>
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your IT Asset Management?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Join the AI revolution and optimize your IT infrastructure today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-200 text-lg">
                  Get Started
                  <Monitor className="ml-2 w-6 h-6" />
                </Link>
                <Link href="/services" className="inline-flex items-center px-8 py-4 border border-indigo-500 text-indigo-400 font-semibold rounded-lg hover:bg-indigo-500 hover:text-white transition-all duration-200 text-lg">
                  Explore All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIPoweredITAssetManagement;