import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Brain, Rocket, Zap, Shield, Target, ArrowRight, Play, Star, Cog, Wrench, Globe } from 'lucide-react';
import Layout from '../components/layout/Layout';

export default function AutonomousSystems() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Autonomous Systems
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Revolutionary self-operating intelligent systems that work 24/7 to optimize, 
                innovate, and transform your business operations.
              </p>
            </motion.div>
          </div>
        </section>

        {/* What Are Autonomous Systems */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-4xl font-bold text-white mb-6">What Are Autonomous Systems?</h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Autonomous systems are AI-powered platforms that operate independently, 
                  making intelligent decisions and taking actions without human intervention. 
                  They continuously learn, adapt, and optimize their performance.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Brain className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold">Self-Learning Intelligence</h4>
                      <p className="text-gray-300 text-sm">Continuously improve through experience and data analysis</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Cog className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold">Independent Operation</h4>
                      <p className="text-gray-300 text-sm">Function autonomously with minimal human oversight</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Target className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold">Goal-Oriented Actions</h4>
                      <p className="text-gray-300 text-sm">Take strategic actions to achieve defined objectives</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                <div className="p-8 bg-black/40 border border-gray-800 rounded-2xl">
                  <div className="text-center mb-6">
                    <Cpu className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">Autonomous Operations</h3>
                    <p className="text-gray-300">24/7 intelligent system management</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-black/30 rounded-lg">
                      <span className="text-gray-300">System Monitoring</span>
                      <span className="text-green-400 text-sm">Active</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-black/30 rounded-lg">
                      <span className="text-gray-300">Performance Optimization</span>
                      <span className="text-green-400 text-sm">Active</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-black/30 rounded-lg">
                      <span className="text-gray-300">Threat Detection</span>
                      <span className="text-green-400 text-sm">Active</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-black/30 rounded-lg">
                      <span className="text-gray-300">Resource Management</span>
                      <span className="text-green-400 text-sm">Active</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Autonomous Systems */}
        <section className="py-20 px-4 bg-black/30">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Core Autonomous Systems</h2>
              <p className="text-xl text-gray-300">Our flagship autonomous platforms revolutionizing business operations</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="w-12 h-12 text-cyan-400" />,
                  title: "AI Autonomous Business Operations Engine",
                  description: "Complete business process automation with intelligent decision-making",
                  features: ["Process optimization", "Intelligent routing", "Performance analytics"],
                  href: "/autonomous-business-operations-engine"
                },
                {
                  icon: <Rocket className="w-12 h-12 text-blue-400" />,
                  title: "AI Autonomous DevOps Platform",
                  description: "Self-managing development and operations infrastructure",
                  features: ["Auto-scaling", "Deployment automation", "Performance monitoring"],
                  href: "/ai-autonomous-devops-platform"
                },
                {
                  icon: <Zap className="w-12 h-12 text-purple-400" />,
                  title: "AI Autonomous Content Factory",
                  description: "Automated content creation and management system",
                  features: ["Content generation", "SEO optimization", "Distribution automation"],
                  href: "/ai-autonomous-content-factory"
                },
                {
                  icon: <Shield className="w-12 h-12 text-green-400" />,
                  title: "AI Autonomous Customer Success",
                  description: "Proactive customer support and success management",
                  features: ["Issue prediction", "Automated resolution", "Success tracking"],
                  href: "/ai-autonomous-customer-success"
                },
                {
                  icon: <Target className="w-12 h-12 text-yellow-400" />,
                  title: "AI Autonomous Sales Intelligence",
                  description: "Intelligent sales process automation and optimization",
                  features: ["Lead scoring", "Opportunity tracking", "Performance analytics"],
                  href: "/ai-sales-intelligence-automation"
                },
                {
                  icon: <Globe className="w-12 h-12 text-pink-400" />,
                  title: "AI Autonomous Ecosystem Manager",
                  description: "Comprehensive business ecosystem coordination",
                  features: ["Partner management", "Resource optimization", "Growth automation"],
                  href: "/ai-autonomous-ecosystem-manager"
                }
              ].map((system, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                  className="group p-6 bg-black/40 border border-gray-800 rounded-2xl hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">{system.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center">{system.title}</h3>
                  <p className="text-gray-300 mb-4 text-center leading-relaxed">{system.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {system.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-gray-300 text-sm">• {feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-center">
                    <a
                      href={system.href}
                      className="inline-flex items-center space-x-2 px-4 py-2 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-black transition-all duration-300"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How Autonomous Systems Work */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">How Autonomous Systems Work</h2>
              <p className="text-xl text-gray-300">The intelligent workflow that powers our autonomous technology</p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  icon: <Brain className="w-12 h-12 text-cyan-400" />,
                  title: "1. Data Collection",
                  description: "Continuous gathering of relevant data from multiple sources"
                },
                {
                  icon: <Cog className="w-12 h-12 text-blue-400" />,
                  title: "2. Analysis & Learning",
                  description: "AI-powered analysis and pattern recognition for continuous improvement"
                },
                {
                  icon: <Target className="w-12 h-12 text-purple-400" />,
                  title: "3. Decision Making",
                  description: "Intelligent decision-making based on learned patterns and goals"
                },
                {
                  icon: <Rocket className="w-12 h-12 text-green-400" />,
                  title: "4. Autonomous Action",
                  description: "Execution of decisions and continuous optimization of processes"
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-4">{step.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-4 bg-black/30">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Benefits of Autonomous Systems</h2>
              <p className="text-xl text-gray-300">Transform your business with intelligent automation</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Zap className="w-12 h-12 text-yellow-400" />,
                  title: "24/7 Operation",
                  description: "Continuous operation without breaks, holidays, or human limitations"
                },
                {
                  icon: <Target className="w-12 h-12 text-green-400" />,
                  title: "Increased Efficiency",
                  description: "Optimized processes and reduced operational costs through automation"
                },
                {
                  icon: <Brain className="w-12 h-12 text-cyan-400" />,
                  title: "Intelligent Decisions",
                  description: "Data-driven decision making that improves over time"
                },
                {
                  icon: <Shield className="w-12 h-12 text-purple-400" />,
                  title: "Enhanced Security",
                  description: "Proactive threat detection and automated security responses"
                },
                {
                  icon: <Rocket className="w-12 h-12 text-blue-400" />,
                  title: "Scalability",
                  description: "Easily scale operations without proportional increase in human resources"
                },
                {
                  icon: <Star className="w-12 h-12 text-pink-400" />,
                  title: "Competitive Advantage",
                  description: "Stay ahead with cutting-edge autonomous technology"
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.6 + index * 0.1 }}
                  className="p-6 bg-black/40 border border-gray-800 rounded-2xl hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center">{benefit.title}</h3>
                  <p className="text-gray-300 text-center leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Automate Your Future?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Experience the power of autonomous systems that work tirelessly to optimize 
                your business operations and drive exponential growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300"
                >
                  View All Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}