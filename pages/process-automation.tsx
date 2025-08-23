import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Zap, Bot, Workflow, Clock, TrendingUp, Shield, Rocket, Cpu } from 'lucide-react';

export default function ProcessAutomation() {
  const features = [
    {
      icon: Zap,
      title: "Intelligent Automation",
      description: "AI-powered automation that learns and improves over time"
    },
    {
      icon: Bot,
      title: "RPA Solutions",
      description: "Robotic Process Automation for repetitive tasks and workflows"
    },
    {
      icon: Workflow,
      title: "Workflow Management",
      description: "Design, deploy, and monitor complex business processes"
    },
    {
      icon: Clock,
      title: "24/7 Operations",
      description: "Automated systems that work around the clock without breaks"
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Monitor and optimize automation performance in real-time"
    },
    {
      icon: Shield,
      title: "Secure Automation",
      description: "Enterprise-grade security for all automated processes"
    }
  ];

  const services = [
    {
      title: "Business Process Automation",
      href: "/business-process-automation",
      description: "Automate complex business workflows and processes"
    },
    {
      title: "AI Workflow Orchestrator",
      href: "/ai-workflow-orchestrator",
      description: "Intelligent workflow management with AI decision making"
    },
    {
      title: "Document Processing",
      href: "/document-processing-automation",
      description: "Automate document classification, extraction, and processing"
    },
    {
      title: "Customer Service Automation",
      href: "/customer-service-automation",
      description: "Automate customer interactions and support processes"
    },
    {
      title: "Financial Process Automation",
      href: "/financial-process-automation",
      description: "Automate accounting, invoicing, and financial workflows"
    },
    {
      title: "HR Process Automation",
      href: "/hr-process-automation",
      description: "Streamline HR processes from recruitment to offboarding"
    }
  ];

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
                Process Automation
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Transform your business operations with intelligent automation. 
                Reduce costs, increase efficiency, and eliminate manual errors.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="p-6 bg-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mb-4">
                    <feature.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 bg-black/30">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Automation Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive automation solutions for every business process
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.a
                  key={index}
                  href={service.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="p-6 bg-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 hover:bg-gray-700/50 transition-all duration-300 group"
                >
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300">{service.description}</p>
                  <div className="mt-4 flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    <span className="text-sm">Learn More</span>
                    <Rocket className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Automate Your Processes?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let our automation experts help you streamline your operations
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-2xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border border-cyan-500 text-cyan-400 font-bold rounded-2xl hover:bg-cyan-500/10 transition-all duration-300"
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