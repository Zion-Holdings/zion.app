import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Shield, Lock, Eye, Zap, TrendingUp, Users, 
  Award, ArrowRight, Star, Globe, Database, 
  Cloud, Palette, Heart, Rocket, AlertTriangle
} from 'lucide-react';
import Link from 'next/link';

const securityServices = [
  {
    title: 'Threat Detection & Response',
    description: 'Advanced threat detection systems with real-time monitoring and automated response capabilities.',
    icon: <Eye className="w-8 h-8 text-cyan-400" />,
    features: ['Real-time Monitoring', 'AI-Powered Detection', 'Automated Response', 'Incident Management'],
    href: '/vulnerability-assessment-penetration-testing'
  },
  {
    title: 'Zero Trust Security',
    description: 'Comprehensive zero trust architecture implementation for modern enterprise security.',
    icon: <Lock className="w-8 h-8 text-purple-400" />,
    features: ['Identity Verification', 'Access Control', 'Network Segmentation', 'Continuous Monitoring'],
    href: '/zero-trust-security-platform'
  },
  {
    title: 'Compliance & Governance',
    description: 'SOC2 compliance automation and governance frameworks for regulatory requirements.',
    icon: <Shield className="w-8 h-8 text-green-400" />,
    features: ['SOC2 Compliance', 'Automated Evidence', 'Risk Assessment', 'Policy Management'],
    href: '/soc2-compliance-automation'
  },
  {
    title: 'Quantum Cybersecurity',
    description: 'Future-proof security solutions with quantum-resistant cryptography and quantum key distribution.',
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
    features: ['Post-Quantum Crypto', 'Quantum Key Distribution', 'Future-Proof Security', 'Advanced Encryption'],
    href: '/quantum-cybersecurity'
  },
  {
    title: 'Cloud Security',
    description: 'Comprehensive cloud security solutions for multi-cloud and hybrid environments.',
    icon: <Cloud className="w-8 h-8 text-blue-400" />,
    features: ['Multi-Cloud Security', 'Identity Management', 'Data Protection', 'Compliance Monitoring'],
    href: '/quantum-secure-cloud-infrastructure'
  },
  {
    title: 'Security Automation',
    description: 'Intelligent security automation for threat response and compliance management.',
    icon: <Rocket className="w-8 h-8 text-red-400" />,
    features: ['Automated Response', 'Security Orchestration', 'Compliance Automation', 'Incident Workflows'],
    href: '/soc2-evidence-automation'
  }
];

const securityFeatures = [
  {
    title: '24/7 Monitoring',
    description: 'Continuous security monitoring with real-time threat detection and response',
    icon: <Eye className="w-6 h-6 text-cyan-400" />
  },
  {
    title: 'AI-Powered Detection',
    description: 'Advanced AI algorithms for identifying and responding to security threats',
    icon: <Zap className="w-6 h-6 text-purple-400" />
  },
  {
    title: 'Compliance Ready',
    description: 'Built-in compliance frameworks for SOC2, ISO, and industry standards',
    icon: <Shield className="w-6 h-6 text-green-400" />
  },
  {
    title: 'Zero Trust Architecture',
    description: 'Modern security approach with continuous verification and minimal access',
    icon: <Lock className="w-6 h-6 text-blue-400" />
  }
];

export default function Cybersecurity() {
  return (
    <Layout>
      <SEO 
        title="Cybersecurity Services | Zion Tech Group"
        description="Comprehensive cybersecurity solutions for enterprise protection. Threat detection, zero trust security, compliance automation, and quantum cybersecurity."
        canonical="https://ziontechgroup.com/cybersecurity/"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-gray-800/20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-6">
                <Shield className="w-4 h-4 mr-2" />
                Enterprise Cybersecurity Excellence
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-red-400 via-orange-500 to-yellow-600 bg-clip-text text-transparent">
                Secure
              </span>
              <br />
              <span className="text-white">Digital Future</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Protect your enterprise with cutting-edge cybersecurity solutions. From threat detection 
              to compliance automation, we deliver comprehensive security that adapts to evolving threats.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-red-500/25 transition-all duration-300 transform hover:scale-105"
              >
                Secure Your Business
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                href="/services"
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-2xl hover:border-red-400 hover:text-red-400 transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Floating Security Elements */}
        <div className="absolute top-20 left-10 opacity-20 animate-float">
          <Shield className="w-16 h-16 text-red-400" />
        </div>
        <div className="absolute top-40 right-20 opacity-20 animate-float-delayed">
          <Lock className="w-12 h-12 text-orange-400" />
        </div>
        <div className="absolute bottom-40 left-20 opacity-20 animate-float">
          <Eye className="w-14 h-14 text-yellow-400" />
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our Security?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our cybersecurity solutions combine cutting-edge technology with proven methodologies 
              to deliver comprehensive protection for your enterprise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-red-500/50 hover:bg-gray-800/70 transition-all duration-300 transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-red-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive Security Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our cybersecurity services cover every aspect of enterprise security, 
              from threat prevention to compliance management.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-red-500/50 hover:bg-gray-800/70 transition-all duration-300 transform hover:scale-105"
              >
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-700/50 rounded-xl group-hover:bg-red-500/10 transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <Star className="w-4 h-4 text-red-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href={service.href}
                  className="inline-flex items-center text-red-400 hover:text-red-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Landscape */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Modern Threat Landscape
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Today's cybersecurity challenges require sophisticated solutions that can 
              adapt to evolving threats and protect against sophisticated attacks.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <AlertTriangle className="w-6 h-6 text-red-400 mr-3" />
                  Emerging Threats
                </h3>
                <p className="text-gray-400 mb-4">
                  Stay ahead of sophisticated cyber threats with our advanced detection and response capabilities.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Advanced Persistent Threats (APTs)</li>
                  <li>• Ransomware & Malware</li>
                  <li>• Social Engineering Attacks</li>
                  <li>• Supply Chain Vulnerabilities</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Database className="w-6 h-6 text-blue-400 mr-3" />
                  Data Protection
                </h3>
                <p className="text-gray-400 mb-4">
                  Comprehensive data protection strategies for sensitive information and regulatory compliance.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Data Encryption</li>
                  <li>• Access Control</li>
                  <li>• Data Loss Prevention</li>
                  <li>• Privacy Compliance</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Cloud className="w-6 h-6 text-cyan-400 mr-3" />
                  Cloud Security
                </h3>
                <p className="text-gray-400 mb-4">
                  Secure your cloud infrastructure with comprehensive security controls and monitoring.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Multi-Cloud Security</li>
                  <li>• Identity & Access Management</li>
                  <li>• Cloud Compliance</li>
                  <li>• Security Monitoring</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Shield className="w-6 h-6 text-green-400 mr-3" />
                  Compliance & Governance
                </h3>
                <p className="text-gray-400 mb-4">
                  Automated compliance management for SOC2, ISO, and industry-specific regulations.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• SOC2 Compliance</li>
                  <li>• ISO Standards</li>
                  <li>• Risk Assessment</li>
                  <li>• Policy Management</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-red-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Don't wait for a security breach. Protect your enterprise with 
              comprehensive cybersecurity solutions that adapt to evolving threats.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-red-500/25 transition-all duration-300 transform hover:scale-105"
              >
                Get Security Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                href="/quote"
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-2xl hover:border-red-400 hover:text-red-400 transition-all duration-300"
              >
                Request Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}