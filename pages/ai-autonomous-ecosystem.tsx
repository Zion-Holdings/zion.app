import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Network, Cpu, Zap, Target, Users, Globe, Brain, Rocket } from 'lucide-react';

const AIAutonomousEcosystem: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-blue-900/20 to-green-900/20">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-500 to-green-400 bg-clip-text text-transparent">
                AI Autonomous Ecosystem
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                A self-organizing, self-optimizing network of AI agents that work together to solve complex problems autonomously
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300">
                  Autonomous Agents
                </span>
                <span className="px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-300">
                  Self-Organization
                </span>
                <span className="px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-300">
                  Collective Intelligence
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Core Features */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                Core Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our autonomous ecosystem combines multiple AI agents with advanced coordination and learning capabilities
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Network,
                  title: "Agent Network",
                  description: "Distributed network of specialized AI agents that communicate and collaborate",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: Cpu,
                  title: "Autonomous Decision Making",
                  description: "Each agent makes independent decisions while considering collective goals",
                  color: "from-cyan-500 to-green-500"
                },
                {
                  icon: Zap,
                  title: "Self-Optimization",
                  description: "Continuous learning and adaptation to improve performance and efficiency",
                  color: "from-green-500 to-yellow-500"
                },
                {
                  icon: Target,
                  title: "Goal Alignment",
                  description: "Agents work together to achieve shared objectives while maintaining autonomy",
                  color: "from-yellow-500 to-orange-500"
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} p-4 mb-4`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Ecosystem Architecture */}
        <section className="py-20 px-4 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-green-500 bg-clip-text text-transparent">
                Ecosystem Architecture
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Understanding how our autonomous AI ecosystem is structured and operates
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <h3 className="text-3xl font-bold text-white mb-6">Multi-Agent System</h3>
                <div className="space-y-6">
                  {[
                    {
                      title: "Specialized Agents",
                      description: "Each agent has specific expertise and capabilities",
                      icon: Brain
                    },
                    {
                      title: "Communication Protocol",
                      description: "Standardized messaging system for agent interaction",
                      icon: Network
                    },
                    {
                      title: "Resource Management",
                      description: "Intelligent allocation and sharing of computational resources",
                      icon: Cpu
                    },
                    {
                      title: "Load Balancing",
                      description: "Automatic distribution of tasks across available agents",
                      icon: Globe
                    }
                  ].map((item, index) => (
                    <div key={item.title} className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 p-3 flex-shrink-0">
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
                <h3 className="text-2xl font-bold text-white mb-6">Key Benefits</h3>
                <ul className="space-y-4">
                  {[
                    "Scalable architecture that grows with your needs",
                    "Fault tolerance through agent redundancy",
                    "Continuous learning and improvement",
                    "Efficient resource utilization",
                    "Rapid problem-solving through parallel processing",
                    "Adaptive response to changing conditions"
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Applications where our autonomous AI ecosystem delivers exceptional value
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Supply Chain Optimization",
                  description: "Autonomous agents coordinate logistics, inventory, and delivery across complex supply networks",
                  icon: Rocket,
                  color: "from-blue-500 to-purple-500"
                },
                {
                  title: "Financial Trading",
                  description: "AI agents analyze markets, execute trades, and manage portfolios autonomously",
                  icon: Target,
                  color: "from-green-500 to-emerald-500"
                },
                {
                  title: "Healthcare Coordination",
                  description: "Medical AI agents collaborate to provide comprehensive patient care and treatment planning",
                  icon: Users,
                  color: "from-purple-500 to-pink-500"
                }
              ].map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + 0.1 * index }}
                  className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center"
                >
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${useCase.color} p-5 mx-auto mb-6`}>
                    <useCase.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                Ready to Deploy Autonomous AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Transform your operations with our intelligent, self-organizing AI ecosystem
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300"
                >
                  Get Started
                </a>
                <a
                  href="/ai-autonomous-research-2041"
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

export default AIAutonomousEcosystem;