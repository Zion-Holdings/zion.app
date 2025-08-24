import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Database, Atom, Zap, Cpu, Target, Server, 
  ArrowRight, Star, Shield, CheckCircle, TrendingUp,
  Infinity, Globe, Eye, Sparkles, HardDrive
} from 'lucide-react';

const QuantumDataCenterManagement2044: React.FC = () => {
  const features = [
    {
      icon: Database,
      title: "Quantum Data Centers",
      description: "Quantum-powered data center infrastructure and management",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Atom,
      title: "Quantum Processing",
      description: "Advanced quantum computing capabilities for data centers",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Server,
      title: "Intelligent Management",
      description: "AI-powered data center optimization and automation",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: HardDrive,
      title: "Quantum Storage",
      description: "Quantum-enhanced data storage and retrieval systems",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const capabilities = [
    "Quantum data center infrastructure",
    "Automated resource optimization",
    "Intelligent cooling and power management",
    "Real-time performance monitoring",
    "Quantum security integration",
    "Predictive maintenance systems"
  ];

  const stats = [
    { number: "1000x", label: "Processing Speed", icon: Zap },
    { number: "99.99%", label: "Uptime Guarantee", icon: Star },
    { number: "∞", label: "Scalability", icon: Infinity },
    { number: "24/7", label: "Quantum Active", icon: Atom }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-indigo-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 text-indigo-300 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                Quantum Data Center Management 2044
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Quantum Data Center Management
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Experience the future of data center management with quantum-powered infrastructure 
                that delivers unprecedented performance, efficiency, and scalability.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-xl hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                <Zap className="w-5 h-5 mr-2" />
                Launch Data Center Platform
              </button>
              <button className="px-8 py-4 bg-gray-800/50 text-white font-semibold rounded-xl border border-gray-600 hover:bg-gray-700/50 transition-all duration-300 flex items-center justify-center">
                <Eye className="w-5 h-5 mr-2" />
                View Demo
              </button>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary Data Center Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the cutting-edge quantum capabilities that make our data center 
                management platform the most advanced in the world.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-800/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300 group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 bg-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-10 h-10 text-indigo-400" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced Data Center Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our quantum data center management platform delivers unprecedented capabilities 
                that transform how you manage and optimize your data center infrastructure.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-r from-indigo-900/20 to-purple-900/20 rounded-2xl p-8 border border-indigo-500/30"
              >
                <h3 className="text-2xl font-semibold text-white mb-6">Core Capabilities</h3>
                <ul className="space-y-4">
                  {capabilities.slice(0, 3).map((capability, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-indigo-400 mr-3 flex-shrink-0" />
                      {capability}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-2xl p-8 border border-purple-500/30"
              >
                <h3 className="text-2xl font-semibold text-white mb-6">Advanced Features</h3>
                <ul className="space-y-4">
                  {capabilities.slice(3).map((capability, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                      {capability}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 rounded-3xl p-12 border border-indigo-500/30"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Data Center?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the quantum data center revolution and discover how our platform 
                can optimize your infrastructure and accelerate your applications.
              </p>
              <button className="px-10 py-5 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-xl hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 flex items-center mx-auto">
                <Database className="w-6 h-6 mr-3" />
                Get Started
                <ArrowRight className="w-6 h-6 ml-3" />
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default QuantumDataCenterManagement2044;