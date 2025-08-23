import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Link, Target, Zap, Users, Award, Clock, CheckCircle, Shield, Database, Server, Globe, Lock } from 'lucide-react';

const BlockchainInfrastructure: React.FC = () => {
  const features = [
    {
      icon: Link,
      title: "Distributed Networks",
      description: "Robust blockchain infrastructure with high availability"
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Enterprise-grade security and encryption protocols"
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Scalable blockchain solutions for enterprise use"
    },
    {
      icon: Target,
      title: "Smart Contracts",
      description: "Advanced smart contract development and deployment"
    }
  ];

  const capabilities = [
    "Blockchain network deployment",
    "Smart contract development",
    "Consensus mechanism implementation",
    "Cross-chain interoperability",
    "Security auditing and testing",
    "Performance optimization"
  ];

  const applications = [
    "Supply chain management",
    "Financial services",
    "Digital identity",
    "Asset tokenization",
    "Decentralized finance",
    "Voting systems"
  ];

  return (
    <Layout
      title="Blockchain Infrastructure - Zion Tech Group"
      description="Advanced blockchain infrastructure platform providing enterprise-grade distributed ledger technology and smart contract solutions."
      keywords="blockchain infrastructure, distributed ledger, smart contracts, enterprise blockchain, Zion Tech Group"
    >
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-emerald-900/20 to-teal-900/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.1),transparent_50%)]"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                  <Link className="w-10 h-10 text-white" />
                </div>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Blockchain Infrastructure
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Build the future with our enterprise-grade blockchain infrastructure platform, 
                featuring distributed networks, smart contracts, and advanced security protocols.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-200 transform hover:scale-105">
                  Build Now
                </button>
                <button className="px-8 py-3 border border-green-500 text-green-400 font-semibold rounded-lg hover:bg-green-500 hover:text-white transition-all duration-200">
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
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Revolutionary Features
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Our blockchain infrastructure platform delivers enterprise-grade capabilities
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
                  className="bg-gray-900/50 backdrop-blur-sm border border-green-500/20 rounded-xl p-6 hover:border-green-500/40 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
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
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Core Capabilities
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Advanced blockchain infrastructure capabilities that transform industries
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
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-300 text-lg">{capability}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Real-World Applications
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Transform industries with blockchain infrastructure
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {applications.map((application, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-green-500/20 rounded-xl p-6 hover:border-green-500/40 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">{application}</h3>
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
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Ready to Build on Blockchain?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Create the future with enterprise blockchain infrastructure
              </p>
              <button className="px-10 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold text-lg rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-200 transform hover:scale-105">
                Start Blockchain Development
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default BlockchainInfrastructure;