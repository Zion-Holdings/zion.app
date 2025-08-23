import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, Rocket, Shield, Zap, Globe, Cpu, 
  Atom, Network, Lock, Database, Cloud, Target 
} from 'lucide-react';
import Layout from '../components/layout/Layout';

export default function QuantumComputing() {
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
              <div className="flex justify-center mb-6">
                <Atom className="w-20 h-20 text-cyan-400" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Quantum Computing Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Harness the power of quantum mechanics to solve previously impossible problems. 
                Our quantum computing platform delivers exponential computational power for the most complex challenges.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quantum Capabilities */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Quantum Computing Capabilities</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Our quantum computing platform leverages cutting-edge quantum technologies to deliver unprecedented computational power
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-cyan-400 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Cpu className="w-8 h-8 text-cyan-400" />
                  <h3 className="text-xl font-bold text-white">Quantum Processing</h3>
                </div>
                <p className="text-gray-300">
                  Advanced quantum processors with 1000+ qubits, enabling complex calculations in seconds that would take classical computers millennia.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-blue-400 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Network className="w-8 h-8 text-blue-400" />
                  <h3 className="text-xl font-bold text-white">Quantum Networks</h3>
                </div>
                <p className="text-gray-300">
                  Secure quantum communication networks using quantum entanglement for unhackable data transmission and ultra-secure communications.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-purple-400 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Lock className="w-8 h-8 text-purple-400" />
                  <h3 className="text-xl font-bold text-white">Quantum Security</h3>
                </div>
                <p className="text-gray-300">
                  Post-quantum cryptography and quantum-resistant algorithms ensuring your data remains secure even against quantum attacks.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quantum Applications */}
        <section className="py-20 px-4 bg-black/30">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Quantum Applications</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Discover how quantum computing is revolutionizing industries across the globe
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <Brain className="w-8 h-8" />,
                  title: "AI & Machine Learning",
                  description: "Quantum-enhanced neural networks and optimization algorithms",
                  color: "text-cyan-400"
                },
                {
                  icon: <Database className="w-8 h-8" />,
                  title: "Financial Modeling",
                  description: "Risk assessment, portfolio optimization, and market prediction",
                  color: "text-green-400"
                },
                {
                  icon: <Rocket className="w-8 h-8" />,
                  title: "Drug Discovery",
                  description: "Molecular simulation and pharmaceutical research acceleration",
                  color: "text-blue-400"
                },
                {
                  icon: <Globe className="w-8 h-8" />,
                  title: "Climate Modeling",
                  description: "Complex environmental simulations and climate prediction",
                  color: "text-purple-400"
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Cybersecurity",
                  description: "Quantum-resistant encryption and threat detection",
                  color: "text-red-400"
                },
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "Logistics Optimization",
                  description: "Route planning and supply chain optimization",
                  color: "text-yellow-400"
                },
                {
                  icon: <Cloud className="w-8 h-8" />,
                  title: "Cloud Computing",
                  description: "Quantum cloud infrastructure and hybrid computing",
                  color: "text-indigo-400"
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Energy Systems",
                  description: "Grid optimization and renewable energy modeling",
                  color: "text-pink-400"
                }
              ].map((app, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
                  className="bg-gray-800/30 p-6 rounded-lg border border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`${app.color} mb-3`}>
                    {app.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{app.title}</h3>
                  <p className="text-gray-300 text-sm">{app.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quantum Platform Features */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Quantum Platform Features</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Our comprehensive quantum computing platform provides everything you need to harness quantum power
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <h3 className="text-2xl font-bold text-white mb-6">Quantum Development Tools</h3>
                <ul className="space-y-4">
                  {[
                    "Quantum programming languages (Q#, Python with Qiskit)",
                    "Visual quantum circuit designer",
                    "Quantum algorithm library",
                    "Real-time quantum state visualization",
                    "Quantum error correction tools",
                    "Hybrid classical-quantum workflows"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                <h3 className="text-2xl font-bold text-white mb-6">Enterprise Integration</h3>
                <ul className="space-y-4">
                  {[
                    "RESTful quantum APIs",
                    "Cloud-native deployment",
                    "Multi-cloud quantum access",
                    "Enterprise security compliance",
                    "Scalable quantum resources",
                    "24/7 quantum operations support"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Go Quantum?</h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Transform your business with the power of quantum computing. Our experts are ready to help you harness the future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
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