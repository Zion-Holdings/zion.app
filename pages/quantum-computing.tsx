import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, Rocket, Shield, Zap, Cpu, Globe, 
  Target, Award, Star, Lock, Database, Network
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
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Quantum Computing Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Harness the power of quantum mechanics to solve complex problems that classical computers cannot. 
                Experience the future of computing with Zion Tech Group's quantum solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quantum Computing Overview */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Cpu className="w-8 h-8 text-cyan-400" />
                  <h2 className="text-3xl font-bold text-white">What is Quantum Computing?</h2>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Quantum computing leverages quantum mechanical phenomena like superposition and entanglement 
                  to process information in ways that classical computers cannot. This revolutionary approach 
                  enables exponential speedups for specific problem types.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-gray-300">Quantum superposition for parallel processing</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300">Quantum entanglement for secure communication</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300">Quantum tunneling for optimization problems</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 p-8 rounded-2xl border border-cyan-500/30">
                  <div className="text-center">
                    <Brain className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-4">Quantum Advantage</h3>
                    <p className="text-gray-300">
                      Solve problems in minutes that would take classical computers years to complete
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quantum Services */}
        <section className="py-20 px-4 bg-black/30">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Our Quantum Computing Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive quantum solutions designed for enterprise applications and research
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="w-8 h-8" />,
                  title: "Quantum AI & Machine Learning",
                  description: "Combine quantum computing with AI to create unprecedented machine learning capabilities",
                  features: ["Quantum neural networks", "Quantum feature selection", "Quantum optimization algorithms"]
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Quantum Cryptography",
                  description: "Unbreakable encryption using quantum key distribution and quantum-resistant algorithms",
                  features: ["Quantum key distribution", "Post-quantum cryptography", "Quantum random number generation"]
                },
                {
                  icon: <Database className="w-8 h-8" />,
                  title: "Quantum Database Optimization",
                  description: "Revolutionize database queries and optimization with quantum algorithms",
                  features: ["Quantum search algorithms", "Quantum database indexing", "Quantum query optimization"]
                },
                {
                  icon: <Network className="w-8 h-8" />,
                  title: "Quantum Network Security",
                  description: "Secure communications using quantum entanglement and quantum protocols",
                  features: ["Quantum internet protocols", "Quantum network monitoring", "Quantum firewall systems"]
                },
                {
                  icon: <Rocket className="w-8 h-8" />,
                  title: "Quantum Simulation",
                  description: "Model complex systems with unprecedented accuracy using quantum simulation",
                  features: ["Molecular modeling", "Material science simulation", "Financial modeling"]
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Quantum Optimization",
                  description: "Solve complex optimization problems in logistics, finance, and operations",
                  features: ["Supply chain optimization", "Portfolio optimization", "Route optimization"]
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="text-cyan-400 mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quantum Technologies */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Quantum Technologies We Work With</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge quantum hardware and software platforms
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: "IBM Quantum", description: "IBM Q Experience and Qiskit framework" },
                { name: "Google Quantum", description: "Cirq framework and quantum supremacy" },
                { name: "Microsoft Azure", description: "Quantum Development Kit and Q# language" },
                { name: "Amazon Braket", description: "Managed quantum computing service" },
                { name: "Rigetti", description: "Quantum cloud services and Forest SDK" },
                { name: "D-Wave", description: "Quantum annealing and hybrid solutions" },
                { name: "IonQ", description: "Trapped ion quantum computers" },
                { name: "Custom Solutions", description: "Proprietary quantum algorithms and systems" }
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                  className="text-center p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{tech.name}</h3>
                  <p className="text-gray-400 text-sm">{tech.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 px-4 bg-black/30">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Quantum Computing Use Cases</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real-world applications where quantum computing provides significant advantages
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Financial Services",
                  description: "Portfolio optimization, risk assessment, and algorithmic trading",
                  benefits: ["Faster portfolio optimization", "Real-time risk analysis", "Improved trading algorithms"]
                },
                {
                  title: "Healthcare & Pharmaceuticals",
                  description: "Drug discovery, protein folding, and medical imaging",
                  benefits: ["Accelerated drug discovery", "Protein structure prediction", "Enhanced medical diagnostics"]
                },
                {
                  title: "Logistics & Supply Chain",
                  description: "Route optimization, inventory management, and scheduling",
                  benefits: ["Optimal route planning", "Efficient inventory management", "Complex scheduling solutions"]
                },
                {
                  title: "Cybersecurity",
                  description: "Cryptographic analysis, threat detection, and secure communications",
                  benefits: ["Advanced threat detection", "Quantum-resistant encryption", "Secure quantum networks"]
                },
                {
                  title: "Energy & Utilities",
                  description: "Grid optimization, renewable energy integration, and load balancing",
                  benefits: ["Smart grid optimization", "Renewable energy forecasting", "Efficient load distribution"]
                },
                {
                  title: "Research & Development",
                  description: "Scientific simulations, material science, and climate modeling",
                  benefits: ["Complex system modeling", "Material property prediction", "Climate change analysis"]
                }
              ].map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-700"
                >
                  <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300 mb-4">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center gap-2 text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
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
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Experience Quantum Computing?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join the quantum revolution and discover how our quantum computing solutions can transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border border-cyan-500 text-cyan-400 font-bold rounded-lg hover:bg-cyan-500 hover:text-black transition-all duration-300"
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