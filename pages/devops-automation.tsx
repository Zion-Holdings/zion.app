import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Code, Server, Zap, Target, Users, Award, Clock, CheckCircle, GitBranch, Cloud, Database, Shield } from 'lucide-react';

const DevOpsAutomation: React.FC = () => {
  const features = [
    {
      icon: Code,
      title: "CI/CD Pipelines",
      description: "Automated build, test, and deployment workflows"
    },
    {
      icon: Server,
      title: "Infrastructure as Code",
      description: "Manage infrastructure through code and automation"
    },
    {
      icon: Zap,
      title: "Automated Testing",
      description: "Comprehensive testing automation and quality assurance"
    },
    {
      icon: Target,
      title: "Deployment Automation",
      description: "Streamlined deployment processes and rollback capabilities"
    }
  ];

  const capabilities = [
    "Continuous integration and deployment",
    "Infrastructure automation",
    "Automated testing and quality gates",
    "Monitoring and observability",
    "Security scanning and compliance",
    "Performance optimization"
  ];

  const benefits = [
    "Faster time to market",
    "Improved code quality",
    "Reduced manual errors",
    "Better collaboration",
    "Enhanced security",
    "Cost optimization"
  ];

  return (
    <Layout
      title="DevOps Automation - Zion Tech Group"
      description="Advanced DevOps automation platform streamlining development, testing, and deployment processes for faster delivery and higher quality."
      keywords="devops automation, CI/CD, infrastructure as code, automated testing, Zion Tech Group"
    >
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/20 via-orange-900/20 to-red-900/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(245,158,11,0.1),transparent_50%)]"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center">
                  <Code className="w-10 h-10 text-white" />
                </div>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                DevOps Automation
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Streamline your development and operations with our advanced DevOps automation platform, 
                featuring CI/CD pipelines, infrastructure as code, and comprehensive testing automation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-200 transform hover:scale-105">
                  Automate Now
                </button>
                <button className="px-8 py-3 border border-yellow-500 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-500 hover:text-white transition-all duration-200">
                  Request Demo
                </button>
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
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Revolutionary Features
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Our DevOps automation platform delivers comprehensive capabilities
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-6 hover:border-yellow-500/40 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-20 bg-gray-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Core Capabilities
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Advanced DevOps automation capabilities that transform your workflow
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-300 text-lg">{capability}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Key Benefits
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Transform your development and operations with DevOps automation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Ready to Automate Your DevOps?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Streamline your development and operations processes
              </p>
              <button className="px-10 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold text-lg rounded-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-200 transform hover:scale-105">
                Start DevOps Automation
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default DevOpsAutomation;