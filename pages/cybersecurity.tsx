import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, AlertTriangle, Users, Zap, Server, Globe, ArrowRight, CheckCircle } from 'lucide-react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';

export default function Cybersecurity() {
  const securityServices = [
    {
      title: 'Quantum Cybersecurity',
      description: 'Next-generation quantum-resistant security protocols and encryption',
      href: '/quantum-cybersecurity',
      icon: <Shield className="w-8 h-8" />,
      features: ['Quantum Key Distribution', 'Post-Quantum Cryptography', 'Quantum Random Number Generation']
    },
    {
      title: 'Zero Trust Architecture',
      description: 'Comprehensive zero trust security framework implementation',
      href: '/zero-trust-security-platform',
      icon: <Lock className="w-8 h-8" />,
      features: ['Identity Verification', 'Device Authentication', 'Network Segmentation']
    },
    {
      title: 'AI-Powered Threat Detection',
      description: 'Advanced AI systems for real-time threat identification and response',
      href: '/ai-threat-detection',
      icon: <Eye className="w-8 h-8" />,
      features: ['Behavioral Analysis', 'Anomaly Detection', 'Automated Response']
    },
    {
      title: 'Vulnerability Assessment',
      description: 'Comprehensive security testing and penetration testing services',
      href: '/vulnerability-assessment-penetration-testing',
      icon: <AlertTriangle className="w-8 h-8" />,
      features: ['Penetration Testing', 'Security Audits', 'Compliance Assessment']
    },
    {
      title: 'Identity & Access Management',
      description: 'Advanced IAM solutions with biometric and multi-factor authentication',
      href: '/identity-access-management',
      icon: <Users className="w-8 h-8" />,
      features: ['Single Sign-On', 'Multi-Factor Auth', 'Role-Based Access']
    },
    {
      title: 'Security Operations Center',
      description: '24/7 security monitoring and incident response capabilities',
      href: '/security-operations-center',
      icon: <Server className="w-8 h-8" />,
      features: ['24/7 Monitoring', 'Incident Response', 'Threat Intelligence']
    }
  ];

  const benefits = [
    'Advanced AI-powered threat detection and prevention',
    'Quantum-resistant encryption for future-proof security',
    'Real-time monitoring and automated incident response',
    'Comprehensive compliance with industry standards',
    'Zero trust architecture implementation',
    'Expert security team with 24/7 support'
  ];

  const stats = [
    { value: '99.9%', label: 'Threat Detection Rate' },
    { value: '< 1 min', label: 'Response Time' },
    { value: '24/7', label: 'Security Monitoring' },
    { value: '100%', label: 'Compliance Coverage' }
  ];

  return (
    <Layout>
      <SEO 
        title="Cybersecurity Solutions | Zion Tech Group"
        description="Advanced cybersecurity services including quantum security, AI threat detection, zero trust architecture, and 24/7 security operations. Protect your business with cutting-edge security."
        keywords={["cybersecurity", "quantum security", "AI threat detection", "zero trust", "penetration testing", "security operations"]}
      />

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-orange-500/10 to-yellow-500/10"></div>
          <div className="container mx-auto max-w-6xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                  <Shield className="w-12 h-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-red-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent mb-6">
                Cybersecurity Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Protect your digital assets with our advanced cybersecurity solutions. 
                From quantum-resistant encryption to AI-powered threat detection, we secure your future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-full hover:from-red-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
                >
                  Secure Your Business
                </a>
                <a
                  href="/vulnerability-assessment-penetration-testing"
                  className="px-8 py-4 border-2 border-red-500 text-red-400 font-semibold rounded-full hover:bg-red-500 hover:text-white transition-all duration-300"
                >
                  Get Security Assessment
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Security Stats */}
        <section className="py-16 px-4 bg-black/30">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6"
                >
                  <div className="text-3xl md:text-4xl font-bold text-red-400 mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Services Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Security Services Portfolio</h2>
              <p className="text-xl text-gray-300">Comprehensive cybersecurity solutions for modern threats</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {securityServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                  className="group"
                >
                  <a
                    href={service.href}
                    className="block p-8 bg-black/40 border border-gray-800 rounded-2xl hover:border-red-500/50 transition-all duration-300 h-full"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-red-400 group-hover:text-orange-400 transition-colors duration-300">
                        {service.icon}
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-red-400 transition-colors duration-300" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-orange-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-black/30">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Cybersecurity?</h2>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  In an era of sophisticated cyber threats, our advanced security solutions 
                  provide comprehensive protection using cutting-edge technology and expert knowledge.
                </p>
                
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="relative"
              >
                <div className="w-full h-80 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <Shield className="w-24 h-24 text-red-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">Advanced Protection</h3>
                    <p className="text-gray-300">Multi-layered security defense</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Strengthen Your Security?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Don't leave your business vulnerable. Get comprehensive cybersecurity protection today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-full hover:from-red-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
                >
                  Get Security Consultation
                </a>
                <a
                  href="/quantum-cybersecurity"
                  className="px-8 py-4 border-2 border-orange-500 text-orange-400 font-semibold rounded-full hover:bg-orange-500 hover:text-black transition-all duration-300"
                >
                  Explore Quantum Security
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}