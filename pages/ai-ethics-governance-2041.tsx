import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Brain, Shield, Scale, Users, Globe, Lock, CheckCircle, AlertTriangle, Heart, Zap } from 'lucide-react';

const AIEthicsGovernance2041: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-emerald-900/20 to-blue-900/20">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 border border-emerald-500/30 rounded-full text-emerald-300 text-sm mb-6">
                <Shield className="w-4 h-4" />
                AI Ethics & Governance 2041
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6">
                AI Ethics & Governance 2041
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Comprehensive framework for ethical AI development, deployment, and governance with consciousness-based decision making
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300">
                  Implement Ethics Framework
                </button>
                <button className="px-8 py-4 border border-emerald-500/30 text-emerald-300 rounded-2xl hover:bg-emerald-500/10 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ethical AI Framework
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our comprehensive approach ensures AI systems operate with ethical consciousness and responsible governance
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Scale className="w-8 h-8 text-emerald-400" />,
                  title: "Ethical Decision Making",
                  description: "AI systems that make decisions based on ethical principles and moral reasoning"
                },
                {
                  icon: <Shield className="w-8 h-8 text-blue-400" />,
                  title: "Responsible AI",
                  description: "Development and deployment practices that prioritize human well-being and safety"
                },
                {
                  icon: <Users className="w-8 h-8 text-cyan-400" />,
                  title: "Human-Centric Design",
                  description: "AI systems designed to augment human capabilities while preserving human dignity"
                },
                {
                  icon: <Globe className="w-8 h-8 text-purple-400" />,
                  title: "Global Standards",
                  description: "Compliance with international AI ethics guidelines and regulatory frameworks"
                },
                {
                  icon: <Lock className="w-8 h-8 text-orange-400" />,
                  title: "Privacy Protection",
                  description: "Advanced privacy safeguards and data protection mechanisms"
                },
                {
                  icon: <CheckCircle className="w-8 h-8 text-green-400" />,
                  title: "Transparency",
                  description: "Clear explanations of AI decision-making processes and outcomes"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 bg-black/40 border border-emerald-500/20 rounded-2xl hover:border-emerald-500/40 transition-all duration-300"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Governance Principles */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Governance Principles
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Core principles that guide our AI governance and ethical decision-making processes
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Accountability",
                  description: "Clear responsibility for AI system outcomes and decision-making processes",
                  icon: <CheckCircle className="w-12 h-12 text-emerald-400" />
                },
                {
                  title: "Fairness",
                  description: "Elimination of bias and discrimination in AI systems and outcomes",
                  icon: <Scale className="w-12 h-12 text-blue-400" />
                },
                {
                  title: "Safety",
                  description: "Robust safety measures and risk assessment protocols",
                  icon: <Shield className="w-12 h-12 text-cyan-400" />
                },
                {
                  title: "Human Control",
                  description: "Maintenance of human oversight and control over AI systems",
                  icon: <Users className="w-12 h-12 text-purple-400" />
                }
              ].map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 bg-black/40 border border-emerald-500/20 rounded-2xl hover:border-emerald-500/40 transition-all duration-300"
                >
                  <div className="mb-6">{principle.icon}</div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{principle.title}</h3>
                  <p className="text-gray-400 text-lg">{principle.description}</p>
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
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Implement Ethical AI?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Build AI systems that operate with ethical consciousness and responsible governance
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300">
                Get Started
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AIEthicsGovernance2041;