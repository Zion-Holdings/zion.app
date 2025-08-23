import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Shield, Brain, Scale, Lock, Users, CheckCircle, 
  Eye, Heart, Globe, BookOpen, Award, 
  TrendingUp, Zap, Target, Database
} from 'lucide-react';

const AIEthicsGovernanceFramework: React.FC = () => {
  const frameworkFeatures = [
    {
      title: "Ethical AI Guidelines",
      icon: <Scale className="w-8 h-8 text-blue-400" />,
      description: "Comprehensive ethical guidelines and principles for responsible AI development and deployment",
      features: [
        "Fairness and bias prevention",
        "Transparency and explainability",
        "Privacy protection",
        "Accountability frameworks"
      ]
    },
    {
      title: "Governance Structures",
      icon: <Shield className="w-8 h-8 text-green-400" />,
      description: "Robust governance frameworks that ensure AI systems operate within ethical boundaries",
      features: [
        "Policy development",
        "Compliance monitoring",
        "Risk assessment",
        "Stakeholder engagement"
      ]
    },
    {
      title: "Responsible AI Practices",
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      description: "Best practices and methodologies for developing and deploying AI systems responsibly",
      features: [
        "Design principles",
        "Testing protocols",
        "Monitoring systems",
        "Continuous improvement"
      ]
    },
    {
      title: "Compliance & Auditing",
      icon: <Lock className="w-8 h-8 text-red-400" />,
      description: "Comprehensive compliance frameworks and auditing processes for AI systems",
      features: [
        "Regulatory compliance",
        "Audit trails",
        "Performance monitoring",
        "Incident response"
      ]
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-purple-900/20 to-indigo-900/20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-full">
                  <Shield className="w-12 h-12 text-purple-400" />
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent mb-6">
                AI Ethics & Governance Framework
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-8">
                Comprehensive framework for responsible AI development, deployment, and governance 
                that ensures ethical practices and regulatory compliance across all AI systems.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105">
                  Explore Framework
                </button>
                <button className="px-8 py-4 border border-purple-400/30 text-purple-400 font-semibold rounded-lg hover:bg-purple-400/10 transition-all duration-300">
                  Request Consultation
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Framework Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Comprehensive Framework Components
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Our AI ethics and governance framework provides a complete solution for 
                responsible AI development and deployment with robust oversight and compliance.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {frameworkFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-purple-400/30 transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    {feature.icon}
                    <h3 className="text-2xl font-bold text-white ml-3">{feature.title}</h3>
                  </div>
                  <p className="text-white/70 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((feat, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-white/80">
                        <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Framework Benefits
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Implement our comprehensive framework to ensure responsible AI development, 
                build trust with stakeholders, and maintain regulatory compliance.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Shield className="w-8 h-8 text-green-400" />,
                  title: "Risk Mitigation",
                  description: "Identify and mitigate potential risks associated with AI development and deployment."
                },
                {
                  icon: <Users className="w-8 h-8 text-blue-400" />,
                  title: "Stakeholder Trust",
                  description: "Build and maintain trust with customers, partners, and regulatory bodies."
                },
                {
                  icon: <Award className="w-8 h-8 text-purple-400" />,
                  title: "Compliance Assurance",
                  description: "Ensure adherence to all relevant regulations and industry standards."
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6"
                >
                  <div className="flex justify-center mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-white/70">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Implement Responsible AI?
              </h2>
              <p className="text-xl text-white/70 mb-8">
                Join us in building a future of responsible AI development. Ensure ethical practices, 
                regulatory compliance, and stakeholder trust with our comprehensive framework.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105">
                  Get Started Today
                </button>
                <button className="px-8 py-4 border border-purple-400/30 text-purple-400 font-semibold rounded-lg hover:bg-purple-400/10 transition-all duration-300">
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

export default AIEthicsGovernanceFramework;