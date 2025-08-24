import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { 
  Brain, Shield, Zap, Globe, Code, Rocket, 
  Database, Lock, Cloud, Network, Cpu, Atom
} from 'lucide-react';

export default function Services() {
  const serviceCategories = [
    {
      title: "AI & Machine Learning",
      description: "Advanced artificial intelligence solutions that transform business operations",
      icon: Brain,
      color: "from-blue-500 to-cyan-500",
      services: [
        "AI-Powered Business Intelligence",
        "Machine Learning Models",
        "Natural Language Processing",
        "Computer Vision Solutions",
        "Predictive Analytics",
        "AI Content Generation"
      ]
    },
    {
      title: "Quantum Computing",
      description: "Next-generation computing power for complex problem solving",
      icon: Atom,
      color: "from-purple-500 to-pink-500",
      services: [
        "Quantum Algorithm Development",
        "Quantum Cryptography",
        "Quantum Machine Learning",
        "Quantum Financial Modeling",
        "Quantum Optimization",
        "Quantum Simulation"
      ]
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security solutions for modern digital threats",
      icon: Shield,
      color: "from-red-500 to-orange-500",
      services: [
        "Threat Detection & Response",
        "Identity & Access Management",
        "Security Operations Center",
        "Compliance Automation",
        "Penetration Testing",
        "Security Training"
      ]
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions for enterprise needs",
      icon: Cloud,
      color: "from-green-500 to-emerald-500",
      services: [
        "Cloud Migration",
        "Multi-Cloud Management",
        "DevOps Automation",
        "Container Orchestration",
        "Serverless Architecture",
        "Cloud Security"
      ]
    },
    {
      title: "Blockchain & DeFi",
      description: "Decentralized solutions for modern finance and business",
      icon: Code,
      color: "from-yellow-500 to-orange-500",
      services: [
        "Smart Contract Development",
        "DeFi Platform Solutions",
        "Blockchain Integration",
        "Cryptocurrency Solutions",
        "NFT Development",
        "Web3 Infrastructure"
      ]
    },
    {
      title: "Space Technology",
      description: "Cutting-edge solutions for space exploration and satellite systems",
      icon: Rocket,
      color: "from-indigo-500 to-purple-500",
      services: [
        "Satellite Communication",
        "Space Data Analytics",
        "Orbital Mechanics",
        "Space Mission Planning",
        "Satellite Constellation Management",
        "Space Debris Tracking"
      ]
    }
  ];

  const features = [
    {
      title: "Enterprise-Grade Security",
      description: "Bank-level security with SOC 2 compliance and advanced encryption",
      icon: Lock
    },
    {
      title: "24/7 Monitoring",
      description: "Continuous monitoring and automated incident response",
      icon: Network
    },
    {
      title: "Scalable Architecture",
      description: "Built to grow with your business needs",
      icon: Cpu
    },
    {
      title: "AI-Powered Automation",
      description: "Intelligent automation that learns and improves over time",
      icon: Brain
    }
  ];

  return (
    <Layout>
      <div className="text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-32 pb-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Our Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive technology solutions that drive innovation and transform businesses across industries
              </p>
            </motion.div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/10 hover:border-white/20 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">{category.title}</h3>
                    <p className="text-gray-400 mb-6">{category.description}</p>
                    <ul className="space-y-2">
                      {category.services.map((service) => (
                        <li key={service} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Our Services?</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Built with enterprise-grade technology and security in mind
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="flex items-start space-x-4 p-6 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-all duration-300"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Contact our team to discuss your specific needs and discover how our services can transform your business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                  Schedule Consultation
                </button>
                <button className="border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                  View Case Studies
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}