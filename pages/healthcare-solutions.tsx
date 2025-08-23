import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Brain, Database, Cloud, Lock, Zap, Users, ChartBar, Target } from 'lucide-react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';

const HealthcareSolutions: React.FC = () => {
  const solutions = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'AI-Powered Diagnostics',
      description: 'Advanced machine learning algorithms for early disease detection and accurate diagnosis',
      features: ['Medical image analysis', 'Symptom pattern recognition', 'Predictive health analytics']
    },
    {
      icon: <Database className="w-8 h-8 text-blue-400" />,
      title: 'Healthcare Data Management',
      description: 'Secure, compliant, and intelligent healthcare data infrastructure',
      features: ['HIPAA compliance', 'Real-time data synchronization', 'Advanced analytics dashboard']
    },
    {
      icon: <Shield className="w-8 h-8 text-green-400" />,
      title: 'Cybersecurity & Compliance',
      description: 'Healthcare-specific security solutions meeting industry standards',
      features: ['PHI protection', 'Access control management', 'Audit trail compliance']
    },
    {
      icon: <Cloud className="w-8 h-8 text-purple-400" />,
      title: 'Cloud Healthcare Platform',
      description: 'Scalable cloud infrastructure for healthcare applications',
      features: ['High availability', 'Disaster recovery', 'Cost optimization']
    },
    {
      icon: <Users className="w-8 h-8 text-orange-400" />,
      title: 'Patient Engagement Systems',
      description: 'Digital tools to improve patient experience and outcomes',
      features: ['Telemedicine platforms', 'Patient portals', 'Mobile health apps']
    },
    {
      icon: <ChartBar className="w-8 h-8 text-red-400" />,
      title: 'Healthcare Analytics',
      description: 'Data-driven insights for improved healthcare delivery',
      features: ['Population health analytics', 'Clinical decision support', 'Performance metrics']
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Healthcare Technology Solutions | Zion Tech Group"
        description="Transform healthcare delivery with our advanced technology solutions. AI diagnostics, secure data management, and patient engagement platforms."
        keywords={["healthcare technology", "medical AI", "healthcare data management", "telemedicine", "patient engagement"]}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Healthcare Technology Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Revolutionizing healthcare delivery through cutting-edge technology, AI-powered diagnostics, 
                and secure patient data management systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
                >
                  Schedule Consultation
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all"
                >
                  View Case Studies
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Healthcare Solutions
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                From AI-powered diagnostics to secure patient data management, we provide end-to-end 
                healthcare technology solutions that improve outcomes and reduce costs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all hover:transform hover:scale-105"
                >
                  <div className="mb-4">{solution.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{solution.title}</h3>
                  <p className="text-gray-400 mb-4">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <Target className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Zion Tech Group for Healthcare?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We combine deep healthcare domain expertise with cutting-edge technology to deliver 
                solutions that truly make a difference in patient care.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">HIPAA Compliant</h3>
                <p className="text-gray-400">Full compliance with healthcare privacy regulations</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">AI-Powered</h3>
                <p className="text-gray-400">Advanced machine learning for better outcomes</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Secure by Design</h3>
                <p className="text-gray-400">Enterprise-grade security from the ground up</p>
              </motion.div>
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
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Healthcare Technology?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Let's discuss how our healthcare solutions can improve patient outcomes, 
                reduce costs, and streamline your operations.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
              >
                Get Started Today
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HealthcareSolutions;