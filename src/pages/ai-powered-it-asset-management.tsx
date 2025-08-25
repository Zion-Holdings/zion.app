import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Server, Shield, BarChart3, Zap, Database, Network, HardDrive, Cpu } from 'lucide-react';

const AIPoweredITAssetManagement = () => {
  const features = [
    {
      icon: Server,
      title: 'Intelligent Asset Discovery',
      description: 'AI-powered scanning and discovery of all IT assets across your infrastructure.'
    },
    {
      icon: Shield,
      title: 'Security Compliance',
      description: 'Automated security assessment and compliance monitoring for all assets.'
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'AI-driven insights for asset lifecycle management and optimization.'
    },
    {
      icon: Zap,
      title: 'Real-time Monitoring',
      description: 'Continuous monitoring and alerting for asset performance and health.'
    },
    {
      icon: Database,
      title: 'Centralized Inventory',
      description: 'Comprehensive asset database with detailed tracking and history.'
    },
    {
      icon: Network,
      title: 'Network Mapping',
      description: 'Visual network topology and asset relationship mapping.'
    }
  ];

  const assetTypes = [
    {
      title: 'Hardware Assets',
      description: 'Servers, workstations, networking equipment, and peripherals.',
      icon: '🖥️',
      features: ['Server inventory', 'Workstation tracking', 'Network devices', 'Peripheral management']
    },
    {
      title: 'Software Assets',
      description: 'Licenses, applications, and software inventory management.',
      icon: '💾',
      features: ['License tracking', 'Software inventory', 'Version control', 'Compliance monitoring']
    },
    {
      title: 'Cloud Resources',
      description: 'Cloud instances, storage, and service monitoring.',
      icon: '☁️',
      features: ['Cloud instances', 'Storage monitoring', 'Service tracking', 'Cost optimization']
    },
    {
      title: 'Network Infrastructure',
      description: 'Network topology, bandwidth, and connectivity management.',
      icon: '🌐',
      features: ['Network mapping', 'Bandwidth monitoring', 'Connectivity tracking', 'Performance analysis']
    }
  ];

  const benefits = [
    {
      metric: '100%',
      label: 'Asset Visibility',
      description: 'Complete visibility across all IT assets'
    },
    {
      metric: '40%',
      label: 'Cost Reduction',
      description: 'Significant reduction in IT asset costs'
    },
    {
      metric: '90%',
      label: 'Compliance',
      description: 'Automated compliance and audit readiness'
    },
    {
      metric: '24/7',
      label: 'Monitoring',
      description: 'Round-the-clock asset monitoring'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              AI-Powered IT Asset Management
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionize your IT asset management with AI-driven insights, automated discovery, 
              and intelligent monitoring for complete infrastructure visibility and control.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105"
              >
                Get Free Assessment
              </Link>
              <Link
                to="/services/it-infrastructure"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/20 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Transform Your IT Asset Management
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience unprecedented control and visibility over your IT infrastructure.
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
                <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">
                  {benefit.metric}
                </div>
                <div className="text-lg font-semibold text-white mb-2">{benefit.label}</div>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-blue-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Advanced AI Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered platform delivers intelligent insights and automation for comprehensive asset management.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Asset Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Comprehensive Asset Coverage
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From hardware to cloud resources, manage every aspect of your IT infrastructure.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {assetTypes.map((assetType, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-cyan-500/30"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="text-4xl">{assetType.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{assetType.title}</h3>
                    <p className="text-gray-300">{assetType.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {assetType.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-gray-300">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
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
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-12 rounded-3xl border border-cyan-500/30"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Master Your IT Assets?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get complete visibility and control over your IT infrastructure with AI-powered asset management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
              </Link>
              <Link
                to="/pricing"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/20 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIPoweredITAssetManagement;