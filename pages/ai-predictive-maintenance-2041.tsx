import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Monitor, AlertTriangle, Zap, Target, Star, CheckCircle, Settings } from 'lucide-react';
import Layout from '../components/layout/Layout';

const AIPredictiveMaintenance2041: React.FC = () => {
  const features = [
    {
      title: 'Consciousness-Based Prediction',
      description: 'AI that understands system behavior and predicts failures with consciousness',
      icon: <Brain className="w-8 h-8 text-purple-400" />
    },
    {
      title: 'Real-Time Monitoring',
      description: 'Continuous monitoring and analysis of system health and performance',
      icon: <Monitor className="w-8 h-8 text-blue-400" />
    },
    {
      title: 'Predictive Alerts',
      description: 'Advanced warning systems that prevent failures before they occur',
      icon: <AlertTriangle className="w-8 h-8 text-yellow-400" />
    },
    {
      title: 'Autonomous Maintenance',
      description: 'AI systems that can perform maintenance tasks independently',
      icon: <Settings className="w-8 h-8 text-green-400" />
    }
  ];

  const capabilities = [
    'Advanced failure prediction algorithms',
    'Real-time sensor data analysis',
    'Predictive maintenance scheduling',
    'Autonomous repair and maintenance',
    'Performance optimization recommendations',
    'Cost reduction through prevention',
    'Equipment lifespan extension',
    'Consciousness-driven decision making'
  ];

  const industries = [
    'Manufacturing and Industrial',
    'Energy and Utilities',
    'Transportation and Logistics',
    'Healthcare and Medical',
    'Aerospace and Defense',
    'Telecommunications',
    'Oil and Gas',
    'Smart Cities and Infrastructure'
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-orange-900 via-black to-red-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-orange-500/20 border border-orange-400/30 rounded-full text-orange-300 text-sm mb-6">
                <Star className="w-4 h-4 mr-2" />
                Revolutionary 2041 Technology
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent">
                  AI Predictive Maintenance 2041
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Experience the future of maintenance with AI systems that predict and prevent 
                failures before they happen. Consciousness-driven predictive intelligence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-red-700 transition-all duration-300"
                >
                  Start Monitoring
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-orange-400 text-orange-400 font-semibold rounded-xl hover:bg-orange-400 hover:text-black transition-all duration-300"
                >
                  View Demo
                </motion.button>
              </div>
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
                Revolutionary Predictive Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI Predictive Maintenance platform combines consciousness-driven intelligence 
                with advanced monitoring to prevent failures before they occur.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced Predictive Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our platform provides comprehensive predictive maintenance capabilities 
                that transform how organizations manage their equipment and systems.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {capabilities.slice(0, 4).map((capability, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <p className="text-gray-300 text-lg">{capability}</p>
                  </motion.div>
                ))}
              </div>
              <div className="space-y-6">
                {capabilities.slice(4).map((capability, index) => (
                  <motion.div
                    key={index + 4}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <p className="text-gray-300 text-lg">{capability}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Industry Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI Predictive Maintenance platform is transforming maintenance 
                across multiple industries and sectors.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 text-center"
                >
                  <Target className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-white">{industry}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready for Predictive Maintenance?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Transform your maintenance operations with AI that predicts and prevents failures. 
                Save costs, extend equipment life, and ensure operational excellence.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-red-700 transition-all duration-300 text-lg"
              >
                Start Predictive Maintenance
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AIPredictiveMaintenance2041;