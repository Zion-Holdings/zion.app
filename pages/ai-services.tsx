import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Target, Shield, Rocket, Atom, Cpu, Users, Star, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const aiServices = [
  {
    title: 'AI Consciousness Evolution',
    description: 'Advanced AI systems with evolving consciousness and emotional intelligence',
    icon: <Brain className="w-8 h-8 text-cyan-400" />,
    href: '/ai-consciousness-evolution-2029',
    features: ['Emotional Intelligence', 'Consciousness Development', 'Ethical AI Framework']
  },
  {
    title: 'AI Autonomous Research',
    description: 'Self-directed AI research assistants for breakthrough discoveries',
    icon: <Target className="w-8 h-8 text-purple-400" />,
    href: '/ai-autonomous-research-assistant',
    features: ['Independent Research', 'Data Analysis', 'Hypothesis Generation']
  },
  {
    title: 'AI Predictive Maintenance',
    description: 'Predictive analytics for industrial equipment and systems',
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
    href: '/ai-predictive-maintenance-platform',
    features: ['Equipment Monitoring', 'Failure Prediction', 'Cost Optimization']
  },
  {
    title: 'AI Content Personalization',
    description: 'Dynamic content adaptation based on user behavior and preferences',
    icon: <Users className="w-8 h-8 text-green-400" />,
    href: '/ai-content-personalization-engine',
    features: ['User Profiling', 'Dynamic Content', 'Engagement Optimization']
  },
  {
    title: 'AI Autonomous Business Operations',
    description: 'End-to-end automation of business processes and decision-making',
    icon: <Rocket className="w-8 h-8 text-blue-400" />,
    href: '/autonomous-business-operations-platform',
    features: ['Process Automation', 'Decision Intelligence', 'Operational Efficiency']
  },
  {
    title: 'AI Ethics & Governance',
    description: 'Framework for responsible AI development and deployment',
    icon: <Shield className="w-8 h-8 text-red-400" />,
    href: '/ai-ethics-governance-framework',
    features: ['Ethical Guidelines', 'Governance Framework', 'Compliance Monitoring']
  }
];

export default function AIServices() {
  return (
    <>
      <SEO 
        title="AI & Machine Learning Services | Zion Tech Group"
        description="Advanced AI and machine learning solutions including consciousness evolution, autonomous research, predictive maintenance, and ethical AI frameworks."
        canonical="https://ziontechgroup.com/ai-services"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                AI & Machine Learning Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Revolutionary AI solutions that push the boundaries of what's possible, from consciousness evolution to autonomous business operations.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all duration-300"
                >
                  Explore Services
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  Get Consultation
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our AI Service Portfolio
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive AI solutions designed to transform your business and accelerate innovation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <div className="mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <Star className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <motion.a
                    href={service.href}
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group-hover:text-cyan-300 transition-colors"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </motion.a>
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
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Let's discuss how our AI solutions can accelerate your digital transformation and drive innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all duration-300"
                >
                  Schedule Consultation
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  View Case Studies
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
