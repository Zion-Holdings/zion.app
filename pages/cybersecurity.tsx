import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Zap, Globe, Brain, Server, Users, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Layout from '../components/layout/Layout';

const Cybersecurity: React.FC = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Advanced Threat Protection',
      description: 'Real-time detection and prevention of sophisticated cyber attacks'
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'Zero Trust Security',
      description: 'Comprehensive security framework with continuous verification'
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: '24/7 Monitoring',
      description: 'Round-the-clock security monitoring and incident response'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'AI-Powered Security',
      description: 'Machine learning algorithms for threat detection and response'
    }
  ];

  const services = [
    {
      title: 'Quantum Cybersecurity',
      description: 'Next-generation security using quantum encryption',
      href: '/quantum-cybersecurity',
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: 'Zero Trust Network Architecture',
      description: 'Secure network design with continuous verification',
      href: '/zero-trust-network-architecture',
      icon: <Lock className="w-6 h-6" />
    },
    {
      title: 'Vulnerability Assessment',
      description: 'Comprehensive security testing and penetration testing',
      href: '/vulnerability-assessment-penetration-testing',
      icon: <Eye className="w-6 h-6" />
    },
    {
      title: 'SOC2 Compliance',
      description: 'Automated compliance and evidence management',
      href: '/soc2-compliance-automation',
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: 'Secrets Management',
      description: 'Automated secrets rotation and management',
      href: '/secrets-rotation-automation',
      icon: <Server className="w-6 h-6" />
    },
    {
      title: 'AI-Powered Security',
      description: 'Intelligent threat detection and response',
      href: '/ai-powered-cybersecurity',
      icon: <Brain className="w-6 h-6" />
    }
  ];

  const securityLayers = [
    'Network Security & Firewalls',
    'Endpoint Protection & EDR',
    'Identity & Access Management',
    'Data Encryption & Privacy',
    'Threat Intelligence & Monitoring',
    'Incident Response & Recovery',
    'Compliance & Governance',
    'Security Awareness Training'
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-purple-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Cybersecurity
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-purple-500">
                  Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Protect your business with enterprise-grade cybersecurity solutions 
                powered by AI and quantum technology
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-red-500/25 transition-all duration-300"
                >
                  Security Assessment
                  <Shield className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center px-8 py-4 border-2 border-red-500 text-red-400 font-semibold rounded-full hover:bg-red-500 hover:text-white transition-all duration-300"
                >
                  View All Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
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
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Enterprise Security Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive cybersecurity solutions designed for modern enterprises
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-red-500/50 transition-all duration-300"
                >
                  <div className="text-red-400 mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Layers Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Multi-Layer Security Architecture
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Defense in depth with multiple security layers protecting your infrastructure
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {securityLayers.map((layer, index) => (
                <motion.div
                  key={layer}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 hover:border-red-500/50 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-red-400" />
                    <span className="text-white font-medium">{layer}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
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
                Cybersecurity Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Specialized security services to protect your digital assets
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-red-500/50 transition-all duration-300"
                >
                  <div className="text-red-400 mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
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
                Secure Your Business Today
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Don't wait until it's too late. Get comprehensive cybersecurity protection now.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-red-500 to-purple-600 text-white font-semibold rounded-full text-lg hover:shadow-2xl hover:shadow-red-500/25 transition-all duration-300"
              >
                Get Security Assessment
                <Shield className="w-6 h-6 ml-3" />
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Cybersecurity;