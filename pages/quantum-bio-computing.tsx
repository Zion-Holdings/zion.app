import React from 'react';
import { motion } from 'framer-motion';
import { Atom, Dna, Zap, Target, Users, Globe, ArrowRight, Activity } from 'lucide-react';
import Layout from '../components/layout/Layout';

export default function QuantumBioComputing() {
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
                Quantum Bio-Computing
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Revolutionary fusion of quantum computing and biological systems. Harnessing the power of 
                quantum mechanics to solve complex biological problems and advance medical science.
              </p>
            </motion.div>
          </div>
        </section>

        {/* What is Quantum Bio-Computing */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Dna className="w-8 h-8 text-cyan-400" />
                  <h2 className="text-3xl font-bold text-white">What is Quantum Bio-Computing?</h2>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Quantum Bio-Computing represents the convergence of quantum computing principles with 
                  biological systems and processes. By leveraging quantum superposition, entanglement, 
                  and interference, we can model and simulate complex biological phenomena with unprecedented 
                  accuracy and speed.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Our platform enables researchers to tackle previously intractable problems in drug discovery, 
                  protein folding, genetic analysis, and personalized medicine through quantum-enhanced algorithms.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                <div className="w-full h-96 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-2xl border border-green-500/30 flex items-center justify-center">
                  <div className="text-center">
                    <Dna className="w-24 h-24 text-green-400 mx-auto mb-4" />
                    <p className="text-green-400 text-lg font-semibold">Quantum Biology Lab</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 px-4 bg-black/30">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300">Revolutionary quantum bio-computing capabilities</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Atom className="w-12 h-12 text-cyan-400" />,
                  title: "Quantum Protein Folding",
                  description: "Accurate prediction of protein structures using quantum algorithms and simulations."
                },
                {
                  icon: <Zap className="w-12 h-12 text-blue-400" />,
                  title: "Drug Discovery",
                  description: "Quantum-enhanced molecular docking and drug-target interaction modeling."
                },
                {
                  icon: <Target className="w-12 h-12 text-purple-400" />,
                  title: "Genetic Analysis",
                  description: "Advanced genomic sequencing and variant calling using quantum algorithms."
                },
                {
                  icon: <Users className="w-12 h-12 text-green-400" />,
                  title: "Personalized Medicine",
                  description: "Individualized treatment plans based on quantum biological modeling."
                },
                {
                  icon: <Globe className="w-12 h-12 text-yellow-400" />,
                  title: "Biological Networks",
                  description: "Complex biological pathway analysis and systems biology modeling."
                },
                {
                  icon: <Activity className="w-12 h-12 text-pink-400" />,
                  title: "Real-time Monitoring",
                  description: "Live biological system monitoring and predictive analytics."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                  className="p-8 bg-black/40 border border-gray-800 rounded-2xl hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Applications</h2>
              <p className="text-xl text-gray-300">Transformative applications in healthcare and biotechnology</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Pharmaceutical Research",
                  description: "Accelerated drug discovery and development through quantum-enhanced molecular modeling.",
                  benefits: ["Faster drug discovery", "Improved efficacy", "Reduced side effects"]
                },
                {
                  title: "Cancer Research",
                  description: "Advanced cancer genomics and personalized treatment strategies.",
                  benefits: ["Precision medicine", "Targeted therapies", "Better outcomes"]
                },
                {
                  title: "Genetic Disorders",
                  description: "Understanding and treating genetic diseases through quantum genetic analysis.",
                  benefits: ["Early detection", "Personalized treatment", "Disease prevention"]
                },
                {
                  title: "Aging Research",
                  description: "Quantum modeling of aging processes and longevity interventions.",
                  benefits: ["Aging mechanisms", "Longevity research", "Health optimization"]
                }
              ].map((app, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.4 + index * 0.1 }}
                  className="p-8 bg-black/40 border border-gray-800 rounded-2xl hover:border-cyan-500/50 transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold text-white mb-3">{app.title}</h3>
                  <p className="text-gray-300 mb-4">{app.description}</p>
                  <ul className="space-y-2">
                    {app.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-cyan-400">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20 px-4 bg-black/30">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Technology Stack</h2>
              <p className="text-xl text-gray-300">Cutting-edge technologies powering our bio-computing platform</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.8 }}
                className="space-y-6"
              >
                <div className="p-6 bg-black/40 border border-gray-800 rounded-xl">
                  <h3 className="text-xl font-bold text-cyan-400 mb-3">Quantum Algorithms</h3>
                  <p className="text-gray-300">Specialized quantum algorithms for biological problem solving.</p>
                </div>
                <div className="p-6 bg-black/40 border border-gray-800 rounded-xl">
                  <h3 className="text-xl font-bold text-blue-400 mb-3">Molecular Dynamics</h3>
                  <p className="text-gray-300">Quantum-enhanced molecular simulation and dynamics.</p>
                </div>
                <div className="p-6 bg-black/40 border border-gray-800 rounded-xl">
                  <h3 className="text-xl font-bold text-purple-400 mb-3">Machine Learning</h3>
                  <p className="text-gray-300">AI-powered biological pattern recognition and prediction.</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 2.0 }}
                className="space-y-6"
              >
                <div className="p-6 bg-black/40 border border-gray-800 rounded-xl">
                  <h3 className="text-xl font-bold text-green-400 mb-3">High-Performance Computing</h3>
                  <p className="text-gray-300">Massive computational resources for complex biological simulations.</p>
                </div>
                <div className="p-6 bg-black/40 border border-gray-800 rounded-xl">
                  <h3 className="text-xl font-bold text-yellow-400 mb-3">Biological Databases</h3>
                  <p className="text-gray-300">Comprehensive databases of biological structures and pathways.</p>
                </div>
                <div className="p-6 bg-black/40 border border-gray-800 rounded-xl">
                  <h3 className="text-xl font-bold text-pink-400 mb-3">Experimental Validation</h3>
                  <p className="text-gray-300">Lab testing and validation of quantum predictions.</p>
                </div>
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
              transition={{ duration: 0.8, delay: 2.2 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Revolutionize Biology?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Join us in advancing medical science through quantum bio-computing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                >
                  Get Started <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/quantum-services"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300"
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}