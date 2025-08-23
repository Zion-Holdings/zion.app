import React from 'react';
import Layout from '../../components/layout/Layout';
import { motion } from 'framer-motion';
import { Shield, Zap, Target, Users, Lock, Rocket, Star, CheckCircle, Eye, AlertTriangle, Key, Globe } from 'lucide-react';

const CybersecurityPage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Advanced Threat Protection',
      description: 'Multi-layered security systems that detect and neutralize sophisticated cyber threats'
    },
    {
      icon: Eye,
      title: '24/7 Monitoring',
      description: 'Continuous surveillance and real-time threat detection across all systems'
    },
    {
      icon: Lock,
      title: 'Zero-Trust Security',
      description: 'Comprehensive access control and identity verification systems'
    },
    {
      icon: Key,
      title: 'Encryption & Privacy',
      description: 'State-of-the-art encryption and data protection protocols'
    },
    {
      icon: AlertTriangle,
      title: 'Incident Response',
      description: 'Rapid response teams and automated threat mitigation systems'
    },
    {
      icon: Globe,
      title: 'Global Security Network',
      description: 'Worldwide security infrastructure and threat intelligence sharing'
    }
  ];

  const services = [
    'Penetration testing and vulnerability assessment',
    'Security architecture design and implementation',
    'Compliance and regulatory adherence',
    'Security awareness training and education',
    'Incident response and disaster recovery',
    'Cloud security and infrastructure protection'
  ];

  const benefits = [
    'Comprehensive protection against all threat vectors',
    'Real-time threat detection and response',
    'Compliance with industry standards and regulations',
    'Reduced risk of data breaches and cyber attacks',
    'Enhanced customer trust and brand reputation',
    'Cost-effective security solutions and ROI'
  ];

  return (
    <Layout
      title="Cybersecurity Solutions - Zion Tech Group"
      description="Advanced cybersecurity and protection services that safeguard your digital assets with cutting-edge security technology and 24/7 monitoring."
      keywords="cybersecurity, threat protection, zero-trust security, encryption, incident response, Zion Tech Group"
    >
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm font-medium mb-6">
                <Shield className="w-4 h-4 mr-2" />
                Cybersecurity Platform
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent mb-6">
                Advanced Cybersecurity Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Protect your digital assets with our comprehensive cybersecurity solutions featuring advanced threat detection, zero-trust security, and 24/7 monitoring.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105">
                  Secure Your Systems
                </button>
                <button className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:border-red-500 hover:bg-red-500/10 transition-all duration-300">
                  Security Assessment
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Security Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our cybersecurity platform provides enterprise-grade protection with cutting-edge technology and expert security professionals.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/60 hover:border-red-500/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Cybersecurity Services
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive security services designed to protect your organization from evolving cyber threats.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                {services.slice(0, 3).map((service, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <p className="text-gray-300 text-lg">{service}</p>
                  </div>
                ))}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                {services.slice(3).map((service, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <p className="text-gray-300 text-lg">{service}</p>
                  </div>
                ))}
              </motion.div>
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
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Cybersecurity?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Experience enterprise-grade security with our comprehensive cybersecurity solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/40 hover:border-red-500/50 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <Star className="w-5 h-5 text-red-400 flex-shrink-0" />
                    <p className="text-gray-300">{benefit}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Secure Your Future?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Protect your organization with our comprehensive cybersecurity solutions and expert security professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105">
                  Get Security Assessment
                </button>
                <button className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:border-red-500 hover:bg-red-500/10 transition-all duration-300">
                  Contact Security Team
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CybersecurityPage;