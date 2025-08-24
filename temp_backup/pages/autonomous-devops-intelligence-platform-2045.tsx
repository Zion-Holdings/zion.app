import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Cpu, Zap, GitBranch, Cloud, Database, Target, CheckCircle, ArrowRight, Star, Globe, Shield, Rocket } from 'lucide-react';

const AutonomousDevOpsIntelligencePlatform: React.FC = () => {
  const features = [
    {
      icon: Cpu,
      title: "Autonomous Deployment",
      description: "AI-powered automated deployment systems",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Zap,
      title: "Intelligent Monitoring",
      description: "AI-driven system monitoring and alerting",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: GitBranch,
      title: "Smart CI/CD",
      description: "Intelligent continuous integration and delivery",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Cloud,
      title: "Infrastructure as Code",
      description: "Automated infrastructure management",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const capabilities = [
    "Autonomous code deployment and rollback",
    "AI-powered performance optimization",
    "Intelligent error detection and resolution",
    "Automated scaling and load balancing",
    "Smart resource allocation",
    "Predictive maintenance and monitoring"
  ];

  const devOpsAreas = [
    {
      title: "Continuous Integration",
      description: "AI-powered code testing and validation",
      icon: GitBranch
    },
    {
      title: "Continuous Deployment",
      description: "Automated deployment with intelligent rollback",
      icon: Cloud
    },
    {
      title: "Infrastructure Management",
      description: "Automated infrastructure provisioning and scaling",
      icon: Cpu
    },
    {
      title: "Monitoring & Observability",
      description: "Intelligent system monitoring and alerting",
      icon: Zap
    }
  ];

  return (
    <Layout
      title="Autonomous DevOps Intelligence Platform 2045 - Zion Tech Group"
      description="Revolutionary autonomous DevOps platform with AI intelligence, automated deployment, and intelligent monitoring for seamless software delivery."
      keywords="autonomous DevOps, AI DevOps, automated deployment, intelligent monitoring, Zion Tech Group"
    >
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 text-yellow-300 text-sm font-medium mb-6">
                <Cpu className="w-4 h-4 mr-2" />
                Autonomous DevOps Technology
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Autonomous DevOps
                <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Intelligence Platform
                </span>
                <span className="block text-3xl md:text-4xl text-gray-300 mt-4">2045 Edition</span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
                Experience the future of DevOps with our revolutionary autonomous platform. 
                AI-powered deployment, intelligent monitoring, and automated infrastructure management for seamless software delivery.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 flex items-center justify-center"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-yellow-500/30 text-yellow-300 font-semibold rounded-lg hover:bg-yellow-500/10 transition-all duration-300"
                >
                  Platform Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Revolutionary Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the cutting-edge capabilities that make our autonomous DevOps platform truly revolutionary
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group"
                >
                  <div className={`p-6 rounded-2xl bg-gradient-to-br ${feature.color} bg-opacity-10 border border-white/10 hover:border-white/20 transition-all duration-300 h-full`}>
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-20 bg-gradient-to-r from-yellow-500/5 to-orange-500/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Advanced Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Unlock unprecedented DevOps efficiency with our autonomous intelligence platform
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-lg text-gray-300">{capability}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* DevOps Areas Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                DevOps Intelligence Areas
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our platform covers every aspect of modern DevOps and automation
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {devOpsAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="p-8 rounded-2xl bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 hover:border-yellow-500/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mb-6">
                    <area.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{area.title}</h3>
                  <p className="text-gray-300 text-lg">{area.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-3xl p-12">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready for Autonomous DevOps?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Join the autonomous DevOps revolution and transform your software delivery pipeline.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 text-lg"
                >
                  Get Started Now
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AutonomousDevOpsIntelligencePlatform;