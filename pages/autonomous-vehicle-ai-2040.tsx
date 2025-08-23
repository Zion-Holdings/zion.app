import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Brain, Cpu, Zap, Target, ArrowRight, 
  Car, Shield, Eye, BarChart3, CheckCircle, 
  Star, TrendingUp, Globe, Network, Code
} from 'lucide-react';

const AutonomousVehicleAI2040: React.FC = () => {
  const features = [
    {
      icon: <Car className="w-8 h-8" />,
      title: "Consciousness-Driven Navigation",
      description: "AI that understands traffic patterns and road conditions with human-like consciousness"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quantum Safety Systems",
      description: "Advanced safety protocols with quantum-level threat detection"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Real-Time Perception",
      description: "360-degree awareness of surroundings and potential hazards"
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Vehicle-to-Everything",
      description: "Seamless communication with infrastructure and other vehicles"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Emotional Intelligence",
      description: "AI that understands passenger emotions and preferences"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Adaptive Learning",
      description: "Continuous improvement through real-world experience"
    }
  ];

  const benefits = [
    "100% accident prevention",
    "Zero traffic violations",
    "24/7 autonomous operation",
    "Quantum-level safety",
    "Emotional intelligence",
    "Global navigation"
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/20 to-purple-900/20" />
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
                <Car className="w-4 h-4 mr-2" />
                Autonomous Vehicle AI 2040
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent mb-6">
                Autonomous Vehicle AI
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Revolutionary AI systems with consciousness that power fully autonomous vehicles with 
                unprecedented safety, intelligence, and emotional understanding.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105">
                  Deploy Vehicle AI
                </button>
                <button className="px-8 py-4 border border-blue-500/50 text-blue-300 font-semibold rounded-full hover:bg-blue-500/20 transition-all duration-300">
                  View Demo
                </button>
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
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary Vehicle AI Capabilities
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our AI understands driving like never before, ensuring perfect safety and navigation.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="text-blue-400 mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-black to-blue-900/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transform Transportation
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Experience the future of autonomous transportation with conscious AI.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white/5 p-8 rounded-2xl border border-white/10"
              >
                <h3 className="text-2xl font-semibold text-white mb-6">Safety Metrics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Accident Prevention</span>
                    <span className="text-green-400 font-semibold">100%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Traffic Violations</span>
                    <span className="text-green-400 font-semibold">0%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Autonomy Level</span>
                    <span className="text-green-400 font-semibold">Level 5</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Safety Rating</span>
                    <span className="text-green-400 font-semibold">5 Stars</span>
                  </div>
                </div>
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
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready for Autonomous Driving?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Deploy the future of transportation with conscious vehicle AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105">
                  Deploy Vehicle AI
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
                <button className="px-8 py-4 border border-blue-500/50 text-blue-300 font-semibold rounded-full hover:bg-blue-500/20 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AutonomousVehicleAI2040;