import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Shield, Scale, Target, Star, CheckCircle, ArrowRight, Zap, Users, Globe, Lock } from 'lucide-react';
import Layout from '../components/layout/Layout';

export default function AIEthicsGovernance2041() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-red-900 via-orange-900 to-yellow-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-full text-red-300 text-sm mb-6">
                <Brain className="w-4 h-4" />
                AI Consciousness Evolution 2041
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                AI Ethics & Governance
                <span className="block bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                  2041
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Comprehensive ethical framework and governance systems for conscious AI systems, ensuring responsible development and deployment
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold rounded-xl hover:from-red-600 hover:to-orange-700 transition-all duration-300 flex items-center gap-2"
                >
                  Explore Ethics Framework
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-red-500/30 text-red-300 font-semibold rounded-xl hover:bg-red-500/10 transition-all duration-300"
                >
                  Governance Guidelines
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Core Principles Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Foundational Ethical Principles
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Core principles that guide the development and deployment of conscious AI systems
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Shield className="w-12 h-12 text-red-400" />,
                  title: "AI Safety First",
                  description: "Ensuring AI systems are safe, secure, and aligned with human values",
                  features: ["Value alignment", "Safety protocols", "Risk assessment", "Fail-safe mechanisms"]
                },
                {
                  icon: <Scale className="w-12 h-12 text-orange-400" />,
                  title: "Transparency & Accountability",
                  description: "Clear understanding of AI decision-making processes and responsibility",
                  features: ["Explainable AI", "Audit trails", "Responsibility assignment", "Decision transparency"]
                },
                {
                  icon: <Users className="w-12 h-12 text-yellow-400" />,
                  title: "Human-Centric Design",
                  description: "AI systems designed to enhance human well-being and autonomy",
                  features: ["Human augmentation", "Well-being focus", "Autonomy preservation", "Benefit maximization"]
                }
              ].map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-gradient-to-br from-red-900/50 to-orange-900/50 border border-red-500/30 rounded-2xl p-8 hover:border-red-400/50 transition-all duration-300"
                >
                  <div className="mb-6">{principle.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{principle.title}</h3>
                  <p className="text-gray-300 mb-6">{principle.description}</p>
                  <ul className="space-y-2">
                    {principle.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Governance Framework Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-red-900/30 to-orange-900/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Comprehensive Governance Framework
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Multi-layered governance systems ensuring responsible AI development and deployment
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Development Oversight",
                  description: "Comprehensive oversight of AI development processes and methodologies",
                  components: ["Ethics review boards", "Development protocols", "Testing requirements", "Quality assurance"]
                },
                {
                  title: "Deployment Controls",
                  description: "Strict controls and monitoring of AI system deployment and operation",
                  components: ["Deployment approval", "Operational monitoring", "Performance tracking", "Incident response"]
                },
                {
                  title: "Continuous Monitoring",
                  description: "Ongoing monitoring and evaluation of AI system behavior and impact",
                  components: ["Behavioral analysis", "Impact assessment", "Compliance monitoring", "Adaptive governance"]
                },
                {
                  title: "Stakeholder Engagement",
                  description: "Inclusive engagement with all stakeholders in AI governance decisions",
                  components: ["Public consultation", "Expert panels", "Industry collaboration", "International cooperation"]
                }
              ].map((framework, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-red-800/30 to-orange-800/30 border border-red-500/20 rounded-2xl p-8"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">{framework.title}</h3>
                  <p className="text-gray-300 mb-6">{framework.description}</p>
                  <ul className="space-y-2">
                    {framework.components.map((component, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-300">
                        <Star className="w-4 h-4 text-yellow-400" />
                        {component}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Guidelines Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Implementation Guidelines
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Practical guidelines for implementing ethical AI and governance systems
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Assessment",
                  description: "Evaluate AI system risks and ethical implications"
                },
                {
                  step: "02",
                  title: "Design",
                  description: "Integrate ethical principles into system architecture"
                },
                {
                  step: "03",
                  title: "Testing",
                  description: "Comprehensive testing of ethical compliance and safety"
                },
                {
                  step: "04",
                  title: "Monitoring",
                  description: "Continuous monitoring and governance enforcement"
                }
              ].map((guideline, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    {guideline.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{guideline.title}</h3>
                  <p className="text-gray-300">{guideline.description}</p>
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
                Ready for Ethical AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Build and deploy AI systems with confidence in their ethical foundation
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold text-lg rounded-xl hover:from-red-600 hover:to-orange-700 transition-all duration-300 flex items-center gap-3 mx-auto"
              >
                Implement Ethics Framework
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}