import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Network, Brain, Zap, Globe, Shield, Database, 
  Cpu, Server, Cloud, Lock, CheckCircle, 
  TrendingUp, Users, Settings, Activity
} from 'lucide-react';

const AIAutonomousEcosystemManager: React.FC = () => {
  const ecosystemFeatures = [
    {
      title: "Intelligent System Orchestration",
      icon: <Cpu className="w-8 h-8 text-blue-400" />,
      description: "AI-powered orchestration that automatically manages and optimizes complex system interactions",
      features: [
        "Dynamic resource allocation",
        "Load balancing automation",
        "Performance optimization",
        "System health monitoring"
      ]
    },
    {
      title: "Autonomous Decision Making",
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      description: "Self-learning AI that makes intelligent decisions to maintain ecosystem stability and efficiency",
      features: [
        "Predictive analytics",
        "Risk assessment",
        "Adaptive responses",
        "Continuous learning"
      ]
    },
    {
      title: "Seamless Integration",
      icon: <Network className="w-8 h-8 text-green-400" />,
      description: "Connect and manage diverse systems, applications, and services within a unified ecosystem",
      features: [
        "API management",
        "Data synchronization",
        "Cross-platform compatibility",
        "Real-time communication"
      ]
    },
    {
      title: "Security & Compliance",
      icon: <Shield className="w-8 h-8 text-red-400" />,
      description: "Advanced security protocols and compliance management across the entire ecosystem",
      features: [
        "Threat detection",
        "Access control",
        "Audit trails",
        "Regulatory compliance"
      ]
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-blue-900/20 to-indigo-900/20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full">
                  <Network className="w-12 h-12 text-blue-400" />
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent mb-6">
                AI Autonomous Ecosystem Manager
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-8">
                Revolutionary AI system that autonomously manages, optimizes, and orchestrates 
                complex digital ecosystems with intelligent decision-making and seamless integration.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105">
                  Explore Ecosystem
                </button>
                <button className="px-8 py-4 border border-blue-400/30 text-blue-400 font-semibold rounded-lg hover:bg-blue-400/10 transition-all duration-300">
                  Request Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Ecosystem Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced Ecosystem Capabilities
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Our autonomous ecosystem manager combines cutting-edge AI with comprehensive 
                system management to create a self-optimizing digital environment.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {ecosystemFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-blue-400/30 transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    {feature.icon}
                    <h3 className="text-2xl font-bold text-white ml-3">{feature.title}</h3>
                  </div>
                  <p className="text-white/70 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((feat, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-white/80">
                        <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                        {feat}
                      </li>
                    ))}
                  </ul>
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
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transformative Benefits
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Experience unprecedented efficiency, reliability, and optimization 
                with AI-powered autonomous ecosystem management.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Zap className="w-8 h-8 text-yellow-400" />,
                  title: "Maximum Efficiency",
                  description: "Automated optimization and resource management for peak system performance."
                },
                {
                  icon: <Shield className="w-8 h-8 text-green-400" />,
                  title: "Enhanced Reliability",
                  description: "Proactive monitoring and autonomous problem resolution for system stability."
                },
                {
                  icon: <TrendingUp className="w-8 h-8 text-blue-400" />,
                  title: "Scalable Growth",
                  description: "Seamless expansion and integration as your ecosystem grows and evolves."
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6"
                >
                  <div className="flex justify-center mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-white/70">{benefit.description}</p>
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
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Automate Your Ecosystem?
              </h2>
              <p className="text-xl text-white/70 mb-8">
                Join us in the future of autonomous system management. Maximize efficiency, 
                reliability, and growth with AI-powered ecosystem orchestration.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105">
                  Get Started Today
                </button>
                <button className="px-8 py-4 border border-blue-400/30 text-blue-400 font-semibold rounded-lg hover:bg-blue-400/10 transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AIAutonomousEcosystemManager;