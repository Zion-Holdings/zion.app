import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Server, Database, Target, Zap, Users, Award, Clock, CheckCircle, Shield, Globe, Layers, FileText } from 'lucide-react';

const ITAssetManagement: React.FC = () => {
  const features = [
    {
      icon: Server,
      title: "Asset Discovery",
      description: "Automated discovery and inventory management"
    },
    {
      icon: Database,
      title: "Centralized Database",
      description: "Unified asset database and tracking system"
    },
    {
      icon: Target,
      title: "Lifecycle Management",
      description: "Complete asset lifecycle tracking and management"
    },
    {
      icon: Zap,
      title: "Automated Updates",
      description: "Real-time asset information updates"
    }
  ];

  const capabilities = [
    "Automated asset discovery and inventory",
    "Asset lifecycle tracking and management",
    "Software license management",
    "Hardware asset tracking",
    "Compliance and audit reporting",
    "Cost optimization and planning"
  ];

  const benefits = [
    "Improved asset visibility",
    "Reduced manual tracking errors",
    "Better compliance and audit trails",
    "Optimized asset utilization",
    "Cost savings and optimization",
    "Streamlined operations"
  ];

  return (
    <Layout
      title="IT Asset Management - Zion Tech Group"
      description="Comprehensive IT asset management platform providing automated discovery, lifecycle tracking, and centralized management for all IT assets."
      keywords="IT asset management, asset discovery, lifecycle management, inventory tracking, Zion Tech Group"
    >
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-gray-900/20 to-zinc-900/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(100,116,139,0.1),transparent_50%)]"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-slate-500 to-gray-500 rounded-2xl flex items-center justify-center">
                  <Server className="w-10 h-10 text-white" />
                </div>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-400 via-gray-400 to-zinc-400 bg-clip-text text-transparent">
                IT Asset Management
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Streamline your IT operations with our comprehensive asset management platform, 
                featuring automated discovery, lifecycle tracking, and centralized management.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-gradient-to-r from-slate-500 to-gray-500 text-white font-semibold rounded-lg hover:from-slate-600 hover:to-gray-600 transition-all duration-200 transform hover:scale-105">
                  Manage Assets
                </button>
                <button className="px-8 py-3 border border-slate-500 text-slate-400 font-semibold rounded-lg hover:bg-slate-500 hover:text-white transition-all duration-200">
                  Request Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-slate-400 to-gray-400 bg-clip-text text-transparent">
                Revolutionary Features
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Our IT asset management platform delivers comprehensive capabilities
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
                  className="bg-gray-900/50 backdrop-blur-sm border border-slate-500/20 rounded-xl p-6 hover:border-slate-500/40 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-slate-500 to-gray-500 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-20 bg-gray-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-slate-400 to-gray-400 bg-clip-text text-transparent">
                Core Capabilities
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Advanced IT asset management capabilities that transform operations
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
                  className="flex items-center space-x-4"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-slate-500 to-gray-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-300 text-lg">{capability}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-slate-400 to-gray-400 bg-clip-text text-transparent">
                Key Benefits
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Transform your IT operations with asset management
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-slate-500 to-gray-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-slate-400 to-gray-400 bg-clip-text text-transparent">
                Ready to Manage IT Assets?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Streamline IT operations with comprehensive asset management
              </p>
              <button className="px-10 py-4 bg-gradient-to-r from-slate-500 to-gray-500 text-white font-semibold text-lg rounded-lg hover:from-slate-600 hover:to-gray-600 transition-all duration-200 transform hover:scale-105">
                Start IT Asset Management
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ITAssetManagement;