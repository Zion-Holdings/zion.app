import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Network, 
  Cpu, 
  Brain, 
  Zap, 
  Shield, 
  BarChart3,
  Users,
  Globe,
  CheckCircle,
  ArrowRight,
  Play,
  Layers,
  Database
} from 'lucide-react';

const AIAutonomousEcosystem: React.FC = () => {
  const ecosystemComponents = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Core Engine",
      description: "Centralized intelligence hub managing all autonomous operations and decision-making"
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "Neural Network Grid",
      description: "Distributed computing network enabling scalable AI processing and learning"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Knowledge Repository",
      description: "Centralized data lake with real-time learning and knowledge sharing capabilities"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security Framework",
      description: "Multi-layered security protecting the entire ecosystem from threats"
    }
  ];

  const capabilities = [
    "Self-organizing and self-healing infrastructure",
    "Distributed learning across all nodes",
    "Real-time adaptation to changing conditions",
    "Intelligent resource allocation and optimization",
    "Seamless integration with existing systems",
    "Scalable architecture supporting millions of nodes",
    "Advanced threat detection and response",
    "Continuous performance monitoring and optimization"
  ];

  const applications = [
    {
      domain: "Smart Cities",
      useCases: ["Traffic Management", "Energy Optimization", "Public Safety", "Infrastructure Monitoring"]
    },
    {
      domain: "Industrial IoT",
      useCases: ["Predictive Maintenance", "Quality Control", "Supply Chain Optimization", "Energy Management"]
    },
    {
      domain: "Healthcare",
      useCases: ["Patient Monitoring", "Drug Discovery", "Diagnostic Assistance", "Resource Planning"]
    },
    {
      domain: "Financial Services",
      useCases: ["Risk Assessment", "Fraud Detection", "Trading Optimization", "Customer Service"]
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20" />
          <div className="relative max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Autonomous Ecosystem
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Experience the future of interconnected AI systems with our autonomous ecosystem that 
                learns, adapts, and evolves across all connected platforms
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                  <Play className="w-5 h-5 inline mr-2" />
                  Explore Ecosystem
                </button>
                <button className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                  Get Started
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Ecosystem Components */}
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
                Ecosystem Architecture
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our autonomous ecosystem is built on a foundation of interconnected AI components 
                that work together seamlessly
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {ecosystemComponents.map((component, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 text-center"
                >
                  <div className="text-purple-400 mb-4 flex justify-center">{component.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{component.title}</h3>
                  <p className="text-gray-300">{component.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
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
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our ecosystem delivers unprecedented levels of autonomy and intelligence
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{capability}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Section */}
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
                Real-World Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our autonomous ecosystem is transforming industries across the globe
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {applications.map((application, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
                >
                  <h3 className="text-xl font-semibold text-white mb-4 text-center">{application.domain}</h3>
                  <ul className="space-y-2">
                    {application.useCases.map((useCase, useCaseIndex) => (
                      <li key={useCaseIndex} className="flex items-center text-gray-300">
                        <ArrowRight className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                        {useCase}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold text-purple-400 mb-2">100x</div>
                <div className="text-gray-300 text-lg">Faster Learning</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold text-blue-400 mb-2">99.9%</div>
                <div className="text-gray-300 text-lg">Uptime Reliability</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold text-green-400 mb-2">∞</div>
                <div className="text-gray-300 text-lg">Scalability</div>
              </motion.div>
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
                Ready to Join the Ecosystem?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Connect your systems to the future of autonomous AI intelligence
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                  Connect Now
                </button>
                <button className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AIAutonomousEcosystem;