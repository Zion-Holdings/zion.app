import React from 'react';
import Layout from './layout/Layout';
import UltraFuturisticServiceCard2026 from './ui/UltraFuturisticServiceCard2026';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const Homepage2025: React.FC = () => {
  const featuredServices = [
    {
      id: 'quantum-ai-orchestrator',
      name: 'Quantum AI Orchestrator',
      tagline: 'Orchestrate quantum and classical AI workflows seamlessly',
      description: 'A revolutionary platform that orchestrates hybrid quantum-classical AI workflows, enabling businesses to leverage quantum computing for complex optimization problems while maintaining classical AI capabilities for routine tasks.',
      price: '$2,499',
      period: 'month',
      features: ['Hybrid quantum-classical workflow orchestration', 'Quantum algorithm optimization', 'Real-time quantum resource allocation', 'Cross-platform quantum backend support'],
      popular: true,
      category: 'Quantum AI',
      icon: '⚛️🧠',
      variant: 'quantum-futuristic'
    },
    {
      id: 'ai-ethics-compliance-suite',
      name: 'AI Ethics & Compliance Suite',
      tagline: 'Ensure responsible AI deployment with automated compliance',
      description: 'Comprehensive AI ethics and compliance platform that automatically monitors, audits, and ensures responsible AI deployment across your organization.',
      price: '$899',
      period: 'month',
      features: ['Automated AI bias detection', 'Real-time compliance monitoring', 'Multi-jurisdiction regulatory compliance', 'AI model explainability'],
      popular: true,
      category: 'AI Governance',
      icon: '⚖️🤖',
      variant: 'ai-futuristic'
    },
    {
      id: 'quantum-cloud-infrastructure',
      name: 'Quantum Cloud Infrastructure',
      tagline: 'Next-generation cloud infrastructure powered by quantum computing',
      description: 'Revolutionary cloud infrastructure platform that integrates quantum computing resources with classical cloud services, enabling unprecedented performance and capabilities.',
      price: '$3,999',
      period: 'month',
      features: ['Hybrid quantum-classical cloud architecture', 'Quantum resource allocation', 'Advanced load balancing', 'Multi-cloud orchestration'],
      popular: true,
      category: 'Quantum Infrastructure',
      icon: '☁️⚛️',
      variant: 'quantum-futuristic'
    },
    {
      id: 'metaverse-business-platform',
      name: 'Metaverse Business Platform',
      tagline: 'Build and monetize your business in the metaverse',
      description: 'Complete platform for businesses to establish presence, conduct commerce, and engage customers in the metaverse, with tools for virtual storefronts, events, and immersive experiences.',
      price: '$1,299',
      period: 'month',
      features: ['3D virtual storefront builder', 'Metaverse commerce and payments', 'Virtual event hosting', 'AR/VR experience creation'],
      popular: false,
      category: 'Metaverse',
      icon: '🌐🏢',
      variant: 'metaverse-futuristic'
    },
    {
      id: 'quantum-cybersecurity-suite',
      name: 'Quantum Cybersecurity Suite',
      tagline: 'Future-proof your security with quantum-resistant cryptography',
      description: 'Advanced cybersecurity platform that implements quantum-resistant cryptographic algorithms and provides real-time threat detection using quantum computing principles.',
      price: '$1,799',
      period: 'month',
      features: ['Quantum-resistant cryptographic algorithms', 'Real-time quantum threat detection', 'Post-quantum cryptography migration', 'Advanced encryption key management'],
      popular: true,
      category: 'Quantum Security',
      icon: '🔐⚛️',
      variant: 'quantum-futuristic'
    },
    {
      id: 'ai-powered-supply-chain-optimizer',
      name: 'AI-Powered Supply Chain Optimizer',
      tagline: 'Optimize your supply chain with AI-driven insights and automation',
      description: 'Intelligent supply chain optimization platform that uses AI and machine learning to predict demand, optimize inventory, reduce costs, and improve efficiency.',
      price: '$1,499',
      period: 'month',
      features: ['AI-powered demand forecasting', 'Dynamic inventory optimization', 'Route optimization', 'Real-time supply chain monitoring'],
      popular: false,
      category: 'Supply Chain AI',
      icon: '📦🤖',
      variant: 'ai-futuristic'
    }
  ];

  const stats = [
    { number: '500+', label: 'Active Services', icon: '🚀' },
    { number: '10,000+', label: 'Happy Customers', icon: '😊' },
    { number: '99.9%', label: 'Uptime SLA', icon: '⚡' },
    { number: '24/7', label: 'Support', icon: '🛡️' }
  ];

  return (
    <Layout>
      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
                x: [0, 50, 0],
                y: [0, -50, 0]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.6, 0.3, 0.6],
                x: [0, -50, 0],
                y: [0, 50, 0]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          <div className="text-center max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight">
                Zion Tech Group
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-xl md:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Pioneering the future of technology with innovative solutions that drive business transformation
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-lg rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-2xl shadow-cyan-500/25"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 border-2 border-cyan-400 text-cyan-400 font-semibold text-lg rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300"
              >
                Learn More
              </motion.button>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-24 px-4 relative">
          {/* Section Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Our Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our comprehensive suite of cutting-edge technology solutions designed to transform your business
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <UltraFuturisticServiceCard2026
                    service={service}
                    variant={service.variant as any}
                  />
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Technology Stack Section */}
        <section className="py-24 px-4 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Technology Stack
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Built with cutting-edge technologies and frameworks to deliver exceptional performance and scalability
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {[
                { name: 'Quantum Computing', icon: '⚛️', color: 'from-purple-500 to-pink-600' },
                { name: 'AI/ML', icon: '🧠', color: 'from-cyan-500 to-blue-600' },
                { name: 'Cloud Native', icon: '☁️', color: 'from-blue-500 to-indigo-600' },
                { name: 'Blockchain', icon: '🔗', color: 'from-green-500 to-emerald-600' },
                { name: 'IoT', icon: '🌐', color: 'from-orange-500 to-red-600' },
                { name: 'AR/VR', icon: '🥽', color: 'from-pink-500 to-purple-600' }
              ].map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-br ${tech.color} rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300`}>
                    {tech.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {tech.name}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 bg-gradient-to-r from-cyan-900/20 to-purple-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                Join thousands of businesses already leveraging our cutting-edge technology solutions to stay ahead of the competition
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold text-lg rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-2xl shadow-cyan-500/25"
                >
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 border-2 border-purple-400 text-purple-400 font-semibold text-lg rounded-xl hover:bg-purple-400 hover:text-black transition-all duration-300"
                >
                  Schedule Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Homepage2025;