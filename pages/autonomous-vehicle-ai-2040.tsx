import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Car, Brain, Shield, Zap, Globe, Cpu, CheckCircle, Star, Eye, Target, Users } from 'lucide-react';

const AutonomousVehicleAI2040: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-orange-900/20 to-red-900/20">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-full text-orange-300 text-sm mb-6">
                <Car className="w-4 h-4" />
                Autonomous Vehicle AI 2040
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent mb-6">
                Autonomous Vehicle AI 2040
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Revolutionary AI-powered autonomous vehicles with consciousness-based decision making and advanced safety systems
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300">
                  Deploy Autonomous Fleet
                </button>
                <button className="px-8 py-4 border border-orange-500/30 text-orange-300 rounded-2xl hover:bg-orange-500/10 transition-all duration-300">
                  View Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Autonomous Vehicle Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Advanced AI capabilities that revolutionize autonomous transportation and safety
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="w-8 h-8 text-orange-400" />,
                  title: "Consciousness-Based AI",
                  description: "AI systems with consciousness for ethical decision making"
                },
                {
                  icon: <Eye className="w-8 h-8 text-red-400" />,
                  title: "Advanced Perception",
                  description: "Multi-sensor perception and environmental understanding"
                },
                {
                  icon: <Shield className="w-8 h-8 text-yellow-400" />,
                  title: "Safety Systems",
                  description: "Comprehensive safety and collision avoidance systems"
                },
                {
                  icon: <Zap className="w-8 h-8 text-emerald-400" />,
                  title: "Real-time Processing",
                  description: "Instant decision making and response systems"
                },
                {
                  icon: <Globe className="w-8 h-8 text-blue-400" />,
                  title: "Global Navigation",
                  description: "Worldwide autonomous navigation capabilities"
                },
                {
                  icon: <Target className="w-8 h-8 text-purple-400" />,
                  title: "Precision Control",
                  description: "Ultra-precise vehicle control and maneuvering"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 bg-black/40 border border-orange-500/20 rounded-2xl hover:border-orange-500/40 transition-all duration-300"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Vehicle Benefits */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Autonomous Benefits
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Transform transportation with AI-powered autonomous vehicles
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Enhanced Safety",
                  description: "Dramatically reduce accidents and improve road safety",
                  icon: <Shield className="w-12 h-12 text-orange-400" />
                },
                {
                  title: "Efficiency",
                  description: "Optimize routes and reduce traffic congestion",
                  icon: <Zap className="w-12 h-12 text-red-400" />
                },
                {
                  title: "Accessibility",
                  description: "Provide transportation for all individuals",
                  icon: <Users className="w-12 h-12 text-yellow-400" />
                },
                {
                  title: "Environmental Impact",
                  description: "Reduce emissions through optimized driving",
                  icon: <Globe className="w-12 h-12 text-emerald-400" />
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 bg-black/40 border border-orange-500/20 rounded-2xl hover:border-orange-500/40 transition-all duration-300"
                >
                  <div className="mb-6">{benefit.icon}</div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-400 text-lg">{benefit.description}</p>
                </motion.div>
              ))}
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
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready for Autonomous Vehicles?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Deploy the future of transportation with AI-powered autonomous vehicles
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300">
                Get Started
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AutonomousVehicleAI2040;