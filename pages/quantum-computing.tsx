import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Cpu, Brain, Atom, Zap, Shield, Globe, Rocket, Database } from 'lucide-react';

export default function QuantumComputing() {
  const features = [
    {
      icon: Cpu,
      title: "Quantum Processing Power",
      description: "Harness the power of quantum bits (qubits) for exponentially faster computations"
    },
    {
      icon: Brain,
      title: "AI Integration",
      description: "Seamlessly integrate quantum computing with advanced AI algorithms"
    },
    {
      icon: Atom,
      title: "Quantum Algorithms",
      description: "Custom quantum algorithms optimized for your specific use cases"
    },
    {
      icon: Shield,
      title: "Quantum Security",
      description: "Unbreakable encryption using quantum key distribution"
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Access quantum computing resources worldwide through our cloud platform"
    },
    {
      icon: Database,
      title: "Quantum Databases",
      description: "Revolutionary database systems leveraging quantum superposition"
    }
  ];

  const services = [
    {
      title: "Quantum AI Platform",
      href: "/quantum-ai-cognitive",
      description: "Advanced AI systems powered by quantum computing"
    },
    {
      title: "Quantum Cybersecurity",
      href: "/quantum-cybersecurity",
      description: "Next-generation security using quantum principles"
    },
    {
      title: "Quantum Financial Trading",
      href: "/quantum-financial-trading",
      description: "High-frequency trading with quantum speed and accuracy"
    },
    {
      title: "Quantum Energy Optimization",
      href: "/quantum-energy",
      description: "Optimize energy systems using quantum algorithms"
    },
    {
      title: "Quantum IoT Platform",
      href: "/quantum-iot",
      description: "Internet of Things enhanced with quantum capabilities"
    },
    {
      title: "Quantum Neural Networks",
      href: "/quantum-neural-network-platform",
      description: "Neural networks that leverage quantum entanglement"
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
                Quantum Computing
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Experience the future of computing with our quantum solutions. 
                Solve previously impossible problems with exponential speed and accuracy.
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
              <h2 className="text-4xl font-bold text-white mb-4">Quantum Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive suite of quantum computing solutions
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
                Ready to Experience Quantum Computing?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our quantum computing experts to discuss how we can transform your business
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