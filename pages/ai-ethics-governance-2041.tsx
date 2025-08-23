import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Brain, Shield, Scale, Users, Zap, Globe, 
  ArrowRight, Star, CheckCircle, TrendingUp,
  Cpu, Network, Database, Lock, Eye, Sparkles,
  BookOpen, Target, MessageCircle, FileText, Gavel, Heart
} from 'lucide-react';

const AIEthicsGovernance2041: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-indigo-900/20 to-purple-900/20">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-400/30 rounded-full text-indigo-400 text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                <span>AI Ethics & Governance 2041</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-600 bg-clip-text text-transparent">
                AI Ethics & Governance 2041
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Comprehensive AI ethics framework and governance systems ensuring responsible, transparent, and beneficial AI development and deployment
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Learn About Ethics
                </button>
                <button className="px-8 py-4 border-2 border-indigo-400 text-indigo-400 font-semibold rounded-lg hover:bg-indigo-400 hover:text-black transition-all duration-300">
                  View Framework
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
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Comprehensive Ethics & Governance Framework
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our framework ensures AI systems are developed and deployed responsibly with human values at the core
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Scale className="w-8 h-8" />,
                  title: "Ethical Decision Making",
                  description: "AI systems that make decisions based on established ethical principles and human values",
                  color: "from-indigo-500 to-purple-500"
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Transparency & Accountability",
                  description: "Clear understanding of AI decision processes and responsibility assignment",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Human-Centric Design",
                  description: "AI systems designed to augment human capabilities and respect human dignity",
                  color: "from-pink-500 to-red-500"
                },
                {
                  icon: <Globe className="w-8 h-8" />,
                  title: "Global Standards",
                  description: "Compliance with international AI ethics standards and regulations",
                  color: "from-red-500 to-orange-500"
                },
                {
                  icon: <Gavel className="w-8 h-8" />,
                  title: "Regulatory Compliance",
                  description: "Built-in compliance with all relevant AI governance frameworks and laws",
                  color: "from-orange-500 to-yellow-500"
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Continuous Monitoring",
                  description: "Real-time ethics monitoring and intervention capabilities",
                  color: "from-yellow-500 to-green-500"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-xl hover:border-indigo-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.color} mb-4`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Ethics Principles */}
        <section className="py-20 px-4 bg-black/30">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Core Ethics Principles
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Fundamental principles that guide our AI development and deployment
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Beneficence", icon: <Heart className="w-6 h-6" />, description: "AI must benefit humanity" },
                { name: "Non-maleficence", icon: <Shield className="w-6 h-6" />, description: "AI must not cause harm" },
                { name: "Autonomy", icon: <Users className="w-6 h-6" />, description: "Respect human autonomy" },
                { name: "Justice", icon: <Scale className="w-6 h-6" />, description: "Fair and equitable AI" }
              ].map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4"
                >
                  <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-400/30 mb-3">
                    {principle.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">{principle.name}</h3>
                  <p className="text-gray-400 text-sm">{principle.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Governance Framework */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Governance & Compliance Framework
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Structured approach to AI governance ensuring responsible development and deployment
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <BookOpen className="w-8 h-8" />,
                  title: "Policy Development",
                  description: "Comprehensive AI policies and guidelines for organizations"
                },
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "Risk Assessment",
                  description: "Systematic evaluation of AI system risks and mitigation strategies"
                },
                {
                  icon: <Eye className="w-8 h-8" />,
                  title: "Oversight & Monitoring",
                  description: "Continuous monitoring and evaluation of AI system behavior"
                }
              ].map((framework, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-xl"
                >
                  <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-400/30 mb-4">
                    {framework.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{framework.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{framework.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-black/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Ready to Implement Ethical AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Ensure your AI systems are developed and deployed responsibly
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Get Ethics Framework
                </button>
                <button className="px-8 py-4 border-2 border-indigo-400 text-indigo-400 font-semibold rounded-lg hover:bg-indigo-400 hover:text-black transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AIEthicsGovernance2041;