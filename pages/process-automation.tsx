import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Settings, Cpu, Brain, Shield, Globe, Rocket, Users, Target, Award } from 'lucide-react';
import Layout from '../components/layout/Layout';

export default function ProcessAutomation() {
  const services = [
    {
      icon: Zap,
      title: 'AI Autonomous Business Operations',
      description: 'Fully automated business processes powered by artificial intelligence',
      features: ['Process automation', 'Decision automation', 'Workflow optimization', 'Performance monitoring'],
      href: '/ai-autonomous-business-operations'
    },
    {
      icon: Settings,
      title: 'Incident Automation Suite',
      description: 'Automated incident response and management system',
      features: ['Automated detection', 'Response automation', 'Escalation management', 'Resolution tracking'],
      href: '/incident-automation-suite'
    },
    {
      icon: Cpu,
      title: 'Incident Copilot',
      description: 'AI-powered incident management and resolution assistant',
      features: ['Intelligent routing', 'Automated responses', 'Knowledge base', 'Learning system'],
      href: '/incident-copilot'
    },
    {
      icon: Brain,
      title: 'Intelligent Content Automation Platform',
      description: 'AI-driven content creation and management automation',
      features: ['Content generation', 'Workflow automation', 'Quality control', 'Distribution management'],
      href: '/intelligent-content-automation-platform'
    },
    {
      icon: Shield,
      title: 'SOC 2 Compliance Automation',
      description: 'Automated compliance management and evidence collection',
      features: ['Compliance monitoring', 'Evidence collection', 'Audit automation', 'Risk assessment'],
      href: '/soc2-compliance-automation'
    },
    {
      icon: Globe,
      title: 'Browser Automation Cloud',
      description: 'Cloud-based browser automation for testing and data extraction',
      features: ['Cross-browser testing', 'Data extraction', 'Performance testing', 'Scalable execution'],
      href: '/browser-automation-cloud'
    }
  ];

  const stats = [
    { number: '90%', label: 'Process Efficiency', icon: Zap },
    { number: '24/7', label: 'Automation', icon: Settings },
    { number: '100+', label: 'Automated Processes', icon: Cpu },
    { number: '500+', label: 'Automated Tasks', icon: Brain }
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
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-400 bg-clip-text text-transparent mb-6">
                Process Automation
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Transform your business operations with intelligent automation solutions. 
                From workflow optimization to AI-powered decision making.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 bg-black/30">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-yellow-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Process Automation Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive automation solutions designed to streamline operations and boost productivity
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <a href={service.href} className="block">
                    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 h-full hover:bg-gray-700/50 transition-all duration-300 hover:scale-105">
                      <div className="w-16 h-16 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="w-8 h-8 text-yellow-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-400">
                            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Automate Your Success
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let our automation experts help you streamline operations and boost efficiency
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-semibold rounded-xl hover:from-yellow-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border border-yellow-500 text-yellow-400 font-semibold rounded-xl hover:bg-yellow-500/10 transition-all duration-300"
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