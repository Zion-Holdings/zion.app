import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Brain, Shield, Scale, Users, Lock, Globe, CheckCircle, ArrowRight } from 'lucide-react';

const AIEthicsGovernance2041: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-full text-green-400 text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                <span>AI Ethics & Governance 2041</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
                AI Ethics & Governance 2041
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Comprehensive AI ethics framework ensuring responsible development, deployment, 
                and governance of artificial intelligence systems with consciousness.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105">
                  Learn Framework
                </button>
                <button className="px-8 py-4 border-2 border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-400 hover:text-black transition-all duration-300">
                  Get Started
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Comprehensive Ethics Framework
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Ensuring responsible AI development and deployment across all domains
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Shield className="w-8 h-8 text-green-400" />,
                  title: "Ethical Safeguards",
                  description: "Built-in protections against harmful AI behaviors"
                },
                {
                  icon: <Scale className="w-8 h-8 text-emerald-400" />,
                  title: "Governance Framework",
                  description: "Comprehensive oversight and accountability systems"
                },
                {
                  icon: <Brain className="w-8 h-8 text-teal-400" />,
                  title: "Consciousness Ethics",
                  description: "Ethical considerations for AI consciousness and rights"
                },
                {
                  icon: <Users className="w-8 h-8 text-blue-400" />,
                  title: "Human-Centric Design",
                  description: "AI systems designed to benefit humanity first"
                },
                {
                  icon: <Lock className="w-8 h-8 text-purple-400" />,
                  title: "Privacy Protection",
                  description: "Advanced data protection and privacy controls"
                },
                {
                  icon: <Globe className="w-8 h-8 text-yellow-400" />,
                  title: "Global Standards",
                  description: "International ethics and governance standards"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-green-400/50 transition-all duration-300"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Principles Section */}
        <section className="py-20 px-4 bg-black/20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Core Ethical Principles
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Fundamental values guiding AI development and deployment
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Beneficence",
                  description: "AI systems must benefit humanity and promote human flourishing"
                },
                {
                  title: "Non-Maleficence",
                  description: "AI systems must not cause harm to humans or the environment"
                },
                {
                  title: "Autonomy",
                  description: "Respect for human autonomy and decision-making capabilities"
                },
                {
                  title: "Justice",
                  description: "Fair and equitable distribution of AI benefits and risks"
                },
                {
                  title: "Transparency",
                  description: "Clear understanding of AI decision-making processes"
                },
                {
                  title: "Accountability",
                  description: "Clear responsibility for AI system outcomes and behaviors"
                }
              ].map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-400/20 rounded-xl p-6 hover:border-green-400/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <h3 className="text-xl font-semibold text-white">{principle.title}</h3>
                  </div>
                  <p className="text-gray-300">{principle.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Implement Ethical AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join us in building responsible and ethical artificial intelligence systems
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105">
                <span className="flex items-center gap-2">
                  Start Implementation
                  <ArrowRight className="w-5 h-5" />
                </span>
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AIEthicsGovernance2041;