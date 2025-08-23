import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Monitor, Brain, Zap, Shield, TrendingUp, Cpu, CheckCircle, Star, AlertTriangle, Wrench } from 'lucide-react';

const AIPredictiveMaintenance2041: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-emerald-900/20 to-green-900/20">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-500/30 rounded-full text-emerald-300 text-sm mb-6">
                <Monitor className="w-4 h-4" />
                AI Predictive Maintenance 2041
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-400 via-green-400 to-blue-400 bg-clip-text text-transparent mb-6">
                AI Predictive Maintenance 2041
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Revolutionary AI-powered predictive maintenance with consciousness-based monitoring and autonomous repair systems
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300">
                  Deploy Maintenance AI
                </button>
                <button className="px-8 py-4 border border-emerald-500/30 text-emerald-300 rounded-2xl hover:bg-emerald-500/10 transition-all duration-300">
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
                Predictive Maintenance Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Advanced AI capabilities that revolutionize equipment maintenance and operational efficiency
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="w-8 h-8 text-emerald-400" />,
                  title: "Predictive Analytics",
                  description: "AI that predicts equipment failures before they occur"
                },
                {
                  icon: <Monitor className="w-8 h-8 text-green-400" />,
                  title: "Real-time Monitoring",
                  description: "Continuous monitoring of equipment health and performance"
                },
                {
                  icon: <Zap className="w-8 h-8 text-blue-400" />,
                  title: "Autonomous Repair",
                  description: "Self-repairing systems with minimal human intervention"
                },
                {
                  icon: <Shield className="w-8 h-8 text-cyan-400" />,
                  title: "Preventive Actions",
                  description: "Proactive maintenance to prevent costly breakdowns"
                },
                {
                  icon: <TrendingUp className="w-8 h-8 text-purple-400" />,
                  title: "Performance Optimization",
                  description: "Continuous optimization of equipment efficiency"
                },
                {
                  icon: <AlertTriangle className="w-8 h-8 text-orange-400" />,
                  title: "Early Warning Systems",
                  description: "Advanced alerting for potential maintenance issues"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 bg-black/40 border border-emerald-500/20 rounded-2xl hover:border-emerald-500/40 transition-all duration-300"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Maintenance Benefits */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Maintenance Benefits
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Transform your operations with AI-powered predictive maintenance
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Reduced Downtime",
                  description: "Minimize equipment failures and unplanned maintenance stops",
                  icon: <Zap className="w-12 h-12 text-emerald-400" />
                },
                {
                  title: "Cost Savings",
                  description: "Lower maintenance costs through predictive planning",
                  icon: <TrendingUp className="w-12 h-12 text-green-400" />
                },
                {
                  title: "Extended Equipment Life",
                  description: "Optimize maintenance schedules to maximize equipment lifespan",
                  icon: <Star className="w-12 h-12 text-blue-400" />
                },
                {
                  title: "Safety Improvements",
                  description: "Prevent safety incidents through proactive maintenance",
                  icon: <Shield className="w-12 h-12 text-cyan-400" />
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 bg-black/40 border border-emerald-500/20 rounded-2xl hover:border-emerald-500/40 transition-all duration-300"
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
                Ready for Predictive Maintenance?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Deploy AI-powered maintenance that prevents failures and optimizes operations
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300">
                Get Started
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AIPredictiveMaintenance2041;