import React from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Shield, Cpu, Database, Users, Activity, 
  Zap, Target, Award, CheckCircle, ArrowRight,
  Lock, Eye, AlertTriangle, Globe
} from 'lucide-react';

const Cybersecurity: React.FC = () => {
  const services = [
    {
      title: 'Advanced Threat Detection',
      description: 'AI-powered threat detection and response systems',
      features: [
        'Real-time threat monitoring',
        'Behavioral analysis',
        'Automated response',
        'Threat intelligence'
      ],
      icon: Eye,
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Zero-Trust Security',
      description: 'Comprehensive zero-trust security architecture implementation',
      features: [
        'Identity verification',
        'Access control',
        'Network segmentation',
        'Continuous monitoring'
      ],
      icon: Shield,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Data Protection & Privacy',
      description: 'Advanced data encryption and privacy compliance solutions',
      features: [
        'Data encryption',
        'Privacy compliance',
        'Data loss prevention',
        'Audit trails'
      ],
      icon: Lock,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Incident Response',
      description: 'Rapid incident response and recovery services',
      features: [
        '24/7 monitoring',
        'Incident investigation',
        'Recovery planning',
        'Forensic analysis'
      ],
      icon: AlertTriangle,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const benefits = [
    'Enhanced security posture',
    'Reduced risk exposure',
    'Compliance assurance',
    'Rapid threat response',
    'Cost-effective security',
    'Future-proof protection'
  ];

  return (
    <Layout 
      title="Cybersecurity Services - Zion Tech Group"
      description="Revolutionary cybersecurity services for advanced threat detection, zero-trust security, and comprehensive protection."
      keywords="cybersecurity, threat detection, zero-trust security, data protection, incident response, Zion Tech Group"
    >
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-400 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                Cybersecurity Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Protecting your digital assets with advanced cybersecurity solutions that detect threats, 
                prevent breaches, and ensure comprehensive protection.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 rounded-xl font-semibold text-lg hover:from-red-600 hover:to-orange-700 transition-all duration-300"
                >
                  Get Started
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-red-500 text-red-400 rounded-xl font-semibold text-lg hover:bg-red-500 hover:text-white transition-all duration-300"
                >
                  Learn More
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
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Comprehensive Cybersecurity Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our cutting-edge cybersecurity solutions address the most critical threats 
                and provide comprehensive protection for your organization.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl p-8 border border-gray-700/50 hover:border-red-500/50 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our cybersecurity services deliver measurable results and transform 
                the way organizations protect their digital assets.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg text-gray-300">{benefit}</p>
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
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Secure Your Future?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join leading organizations that trust Zion Tech Group 
                to deliver comprehensive cybersecurity protection.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 rounded-xl font-semibold text-lg hover:from-red-600 hover:to-orange-700 transition-all duration-300"
                >
                  Schedule a Consultation
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-red-500 text-red-400 rounded-xl font-semibold text-lg hover:bg-red-500 hover:text-white transition-all duration-300"
                >
                  View Case Studies
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Cybersecurity;