import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Bot, Cpu, Zap, Target, Users, Globe, Brain, Rocket, Shield, Workflow } from 'lucide-react';

const AIAutonomousBusinessProcessAutomation: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-emerald-900/20 to-teal-900/20">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-400 bg-clip-text text-transparent">
                AI Autonomous Business Process Automation
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Intelligent automation platform that autonomously manages, optimizes, and executes business processes with minimal human intervention
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-300">
                  Process Automation
                </span>
                <span className="px-4 py-2 bg-teal-500/20 border border-teal-500/30 rounded-full text-teal-300">
                  AI Intelligence
                </span>
                <span className="px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-300">
                  Autonomous Execution
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                Core Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI-powered automation that transforms business operations and drives efficiency
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Workflow,
                  title: "Process Mapping",
                  description: "AI automatically discovers and maps complex business processes",
                  color: "from-emerald-500 to-teal-500"
                },
                {
                  icon: Brain,
                  title: "Intelligent Decision Making",
                  description: "AI agents make autonomous decisions based on business rules and context",
                  color: "from-teal-500 to-cyan-500"
                },
                {
                  icon: Zap,
                  title: "Adaptive Automation",
                  description: "Processes automatically adapt to changing business conditions",
                  color: "from-cyan-500 to-blue-500"
                },
                {
                  icon: Target,
                  title: "Performance Optimization",
                  description: "Continuous improvement through AI-driven analytics and insights",
                  color: "from-blue-500 to-purple-500"
                },
                {
                  icon: Shield,
                  title: "Compliance Management",
                  description: "Built-in regulatory compliance and audit trail capabilities",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: Globe,
                  title: "Multi-Platform Integration",
                  description: "Seamlessly connects with existing enterprise systems and tools",
                  color: "from-pink-500 to-red-500"
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
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Types */}
        <section className="py-20 px-4 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
                Process Types
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Automate diverse business processes across all departments and functions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Finance & Accounting",
                  description: "Invoice processing, expense management, financial reporting",
                  icon: Target,
                  color: "from-emerald-500 to-teal-500"
                },
                {
                  title: "Human Resources",
                  description: "Recruitment, onboarding, performance management",
                  icon: Users,
                  color: "from-teal-500 to-cyan-500"
                },
                {
                  title: "Customer Service",
                  description: "Ticket routing, response automation, customer support",
                  icon: Bot,
                  color: "from-cyan-500 to-blue-500"
                },
                {
                  title: "Supply Chain",
                  description: "Inventory management, order processing, logistics",
                  icon: Rocket,
                  color: "from-blue-500 to-purple-500"
                }
              ].map((processType, index) => (
                <motion.div
                  key={processType.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + 0.1 * index }}
                  className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${processType.color} p-4 mx-auto mb-4`}>
                    <processType.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{processType.title}</h3>
                  <p className="text-gray-300 text-sm">{processType.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Architecture */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-emerald-500 bg-clip-text text-transparent">
                Technology Architecture
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Built on cutting-edge AI and automation technologies for enterprise-grade performance
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <h3 className="text-3xl font-bold text-white mb-6">AI & Automation Stack</h3>
                <div className="space-y-6">
                  {[
                    {
                      title: "Process Discovery AI",
                      description: "Machine learning algorithms that automatically identify and map business processes",
                      icon: Brain
                    },
                    {
                      title: "Decision Engine",
                      description: "AI-powered decision making with business rule processing and context awareness",
                      icon: Cpu
                    },
                    {
                      title: "Workflow Orchestration",
                      description: "Intelligent process orchestration with dynamic routing and optimization",
                      icon: Workflow
                    },
                    {
                      title: "Integration Hub",
                      description: "Seamless connectivity with enterprise systems and third-party applications",
                      icon: Globe
                    }
                  ].map((item, index) => (
                    <div key={item.title} className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 p-3 flex-shrink-0">
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
                transition={{ duration: 0.8, delay: 1.4 }}
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Key Benefits</h3>
                <ul className="space-y-4">
                  {[
                    "90% reduction in manual process handling",
                    "Real-time process monitoring and optimization",
                    "Scalable automation across enterprise functions",
                    "Built-in compliance and audit capabilities",
                    "Seamless integration with existing systems",
                    "AI-driven continuous improvement"
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <div className="w-3 h-3 bg-emerald-400 rounded-full mr-3"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Ready to Automate Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Transform your operations with intelligent, autonomous process automation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-teal-600 transition-all duration-300"
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

export default AIAutonomousBusinessProcessAutomation;