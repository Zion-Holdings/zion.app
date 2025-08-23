import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Bot, 
  Cpu, 
  Eye, 
  Zap, 
  Shield, 
  BarChart3,
  Users,
  Globe,
  CheckCircle,
  ArrowRight,
  Play,
  Cog,
  Target
} from 'lucide-react';

const AIAutonomousRoboticsPlatform: React.FC = () => {
  const platformComponents = [
    {
      icon: <Bot className="w-6 h-6" />,
      title: "Autonomous Robots",
      description: "Self-navigating robots with advanced AI decision-making capabilities"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "AI Control System",
      description: "Centralized AI brain managing all robotic operations and coordination"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Computer Vision",
      description: "Advanced visual processing for object recognition and navigation"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Power Management",
      description: "Intelligent energy optimization and autonomous charging systems"
    }
  ];

  const capabilities = [
    "Autonomous navigation and pathfinding",
    "Real-time obstacle detection and avoidance",
    "Multi-robot coordination and swarm intelligence",
    "Adaptive learning and behavior modification",
    "Human-robot collaboration and safety protocols",
    "Remote monitoring and control systems",
    "Predictive maintenance and self-diagnostics",
    "Scalable deployment across multiple environments"
  ];

  const applications = [
    {
      industry: "Manufacturing",
      useCases: ["Assembly Lines", "Quality Control", "Material Handling", "Warehouse Automation"]
    },
    {
      industry: "Healthcare",
      useCases: ["Surgical Assistance", "Patient Care", "Medical Supply Delivery", "Sanitization"]
    },
    {
      industry: "Agriculture",
      useCases: ["Crop Monitoring", "Harvesting", "Soil Analysis", "Pest Control"]
    },
    {
      industry: "Logistics",
      useCases: ["Package Sorting", "Inventory Management", "Last-Mile Delivery", "Storage Optimization"]
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-red-600/20" />
          <div className="relative max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Autonomous Robotics Platform
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform industries with intelligent robots that learn, adapt, and operate 
                autonomously across complex environments
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                  <Play className="w-5 h-5 inline mr-2" />
                  Watch Demo
                </button>
                <button className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                  Deploy Robots
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Platform Components */}
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
                Platform Architecture
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our robotics platform combines cutting-edge hardware with advanced AI software
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {platformComponents.map((component, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 text-center"
                >
                  <div className="text-orange-400 mb-4 flex justify-center">{component.icon}</div>
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
                Our autonomous robotics platform delivers enterprise-grade functionality
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
                  <CheckCircle className="w-6 h-6 text-orange-400 flex-shrink-0" />
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
                Industry Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our robotics platform is transforming operations across diverse industries
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
                  <h3 className="text-xl font-semibold text-white mb-4 text-center">{application.industry}</h3>
                  <ul className="space-y-2">
                    {application.useCases.map((useCase, useCaseIndex) => (
                      <li key={useCaseIndex} className="flex items-center text-gray-300">
                        <ArrowRight className="w-4 h-4 text-orange-400 mr-2 flex-shrink-0" />
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
                <div className="text-4xl font-bold text-orange-400 mb-2">90%</div>
                <div className="text-gray-300 text-lg">Efficiency Increase</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold text-red-400 mb-2">24/7</div>
                <div className="text-gray-300 text-lg">Operation</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
                <div className="text-gray-300 text-lg">Accuracy</div>
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
                Ready to Automate with Robots?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Deploy intelligent autonomous robots to transform your operations
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                  Deploy Now
                </button>
                <button className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
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

export default AIAutonomousRoboticsPlatform;