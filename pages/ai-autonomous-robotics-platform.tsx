import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Bot, Cpu, Zap, Target, Users, Globe, Brain, Rocket, Shield } from 'lucide-react';

const AIAutonomousRoboticsPlatform: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-orange-900/20 to-red-900/20">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-red-500 to-pink-400 bg-clip-text text-transparent">
                AI Autonomous Robotics Platform
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Next-generation robotics platform powered by advanced AI that enables robots to operate independently, learn continuously, and adapt to dynamic environments
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-300">
                  Autonomous Navigation
                </span>
                <span className="px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full text-red-300">
                  AI Learning
                </span>
                <span className="px-4 py-2 bg-pink-500/20 border border-pink-500/30 rounded-full text-pink-300">
                  Adaptive Behavior
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Core Capabilities */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Core Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our robotics platform combines cutting-edge AI with advanced robotics hardware for unprecedented autonomy
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Bot,
                  title: "Autonomous Navigation",
                  description: "Advanced SLAM algorithms and path planning for complex environments",
                  color: "from-orange-500 to-red-500"
                },
                {
                  icon: Brain,
                  title: "AI Decision Making",
                  description: "Real-time cognitive processing for intelligent behavior and problem-solving",
                  color: "from-red-500 to-pink-500"
                },
                {
                  icon: Zap,
                  title: "Adaptive Learning",
                  description: "Continuous improvement through experience and environmental interaction",
                  color: "from-pink-500 to-purple-500"
                },
                {
                  icon: Target,
                  title: "Precision Control",
                  description: "High-accuracy motor control and sensor fusion for precise operations",
                  color: "from-purple-500 to-blue-500"
                },
                {
                  icon: Shield,
                  title: "Safety Systems",
                  description: "Built-in safety protocols and collision avoidance mechanisms",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: Globe,
                  title: "Multi-Environment",
                  description: "Operates seamlessly across indoor, outdoor, and hazardous environments",
                  color: "from-cyan-500 to-green-500"
                }
              ].map((capability, index) => (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${capability.color} p-4 mb-4`}>
                    <capability.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{capability.title}</h3>
                  <p className="text-gray-300">{capability.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Architecture */}
        <section className="py-20 px-4 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent">
                Platform Architecture
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Understanding the sophisticated architecture that powers our autonomous robotics platform
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <h3 className="text-3xl font-bold text-white mb-6">System Components</h3>
                <div className="space-y-6">
                  {[
                    {
                      title: "Perception Layer",
                      description: "Advanced sensors and computer vision for environmental understanding",
                      icon: Cpu
                    },
                    {
                      title: "Cognition Engine",
                      description: "AI-powered decision making and planning algorithms",
                      icon: Brain
                    },
                    {
                      title: "Control System",
                      description: "Precise motor control and actuator management",
                      icon: Zap
                    },
                    {
                      title: "Safety Monitor",
                      description: "Real-time safety checks and emergency protocols",
                      icon: Shield
                    }
                  ].map((item, index) => (
                    <div key={item.title} className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 p-3 flex-shrink-0">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                        <p className="text-gray-300">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Technical Specifications</h3>
                <ul className="space-y-4">
                  {[
                    "Multi-modal sensor fusion (LiDAR, cameras, IMU)",
                    "Real-time AI inference (< 100ms latency)",
                    "Advanced SLAM with loop closure detection",
                    "Dynamic obstacle avoidance and path planning",
                    "Multi-robot coordination and swarm intelligence",
                    "Cloud-connected learning and updates"
                  ].map((spec, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <div className="w-3 h-3 bg-orange-400 rounded-full mr-3"></div>
                      {spec}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-orange-500 bg-clip-text text-transparent">
                Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Versatile robotics platform for diverse industrial and commercial applications
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Manufacturing",
                  description: "Automated assembly, quality inspection, and material handling",
                  icon: Cpu,
                  color: "from-orange-500 to-red-500"
                },
                {
                  title: "Logistics",
                  description: "Warehouse automation, package sorting, and delivery systems",
                  icon: Rocket,
                  color: "from-red-500 to-pink-500"
                },
                {
                  title: "Healthcare",
                  description: "Surgical assistance, patient care, and medical logistics",
                  icon: Users,
                  color: "from-pink-500 to-purple-500"
                },
                {
                  title: "Agriculture",
                  description: "Precision farming, crop monitoring, and automated harvesting",
                  icon: Globe,
                  color: "from-purple-500 to-blue-500"
                },
                {
                  title: "Construction",
                  description: "Site inspection, material transport, and safety monitoring",
                  icon: Shield,
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  title: "Research",
                  description: "Exploration, data collection, and experimental automation",
                  icon: Brain,
                  color: "from-cyan-500 to-green-500"
                }
              ].map((application, index) => (
                <motion.div
                  key={application.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + 0.1 * index }}
                  className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center"
                >
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${application.color} p-5 mx-auto mb-6`}>
                    <application.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{application.title}</h3>
                  <p className="text-gray-300">{application.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                Ready to Deploy Autonomous Robots?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Transform your operations with our intelligent robotics platform
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-300"
                >
                  Get Started
                </a>
                <a
                  href="/ai-autonomous-ecosystem"
                  className="px-8 py-4 border border-white/30 text-white font-semibold rounded-xl hover:border-white/50 transition-all duration-300"
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AIAutonomousRoboticsPlatform;