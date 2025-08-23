import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Lock, Eye, Server, Database, Code, Users, AlertTriangle, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const CybersecurityPage: React.FC = () => {
  const services = [
    {
      title: 'AI-Powered Cybersecurity',
      description: 'Advanced threat detection and response using artificial intelligence',
      icon: <Shield className="w-8 h-8" />,
      features: [
        'AI Threat Detection',
        'Behavioral Analysis',
        'Automated Response',
        'Predictive Security',
        'Machine Learning Models',
        'Real-time Monitoring'
      ],
      href: '/ai-powered-cybersecurity'
    },
    {
      title: 'Quantum Cybersecurity',
      description: 'Next-generation security solutions using quantum technology',
      icon: <Lock className="w-8 h-8" />,
      features: [
        'Quantum Key Distribution',
        'Post-Quantum Cryptography',
        'Quantum-Safe Communication',
        'Quantum Random Numbers',
        'Quantum Threat Detection'
      ],
      href: '/quantum-cybersecurity'
    },
    {
      title: 'Zero Trust Security',
      description: 'Comprehensive zero trust architecture implementation',
      icon: <Eye className="w-8 h-8" />,
      features: [
        'Identity Verification',
        'Access Control',
        'Network Segmentation',
        'Continuous Monitoring',
        'Least Privilege Access',
        'Multi-Factor Authentication'
      ],
      href: '/zero-trust-security-platform'
    },
    {
      title: 'Cloud Security',
      description: 'Enterprise cloud infrastructure security solutions',
      icon: <Server className="w-8 h-8" />,
      features: [
        'Cloud Access Security',
        'Data Protection',
        'Compliance Management',
        'Threat Prevention',
        'Security Monitoring',
        'Incident Response'
      ],
      href: '/cloud-landing-zone'
    }
  ];

  const solutions = [
    {
      title: 'Vulnerability Assessment',
      description: 'Comprehensive security testing and penetration testing services',
      icon: <AlertTriangle className="w-6 h-6" />
    },
    {
      title: 'SOC2 Compliance',
      description: 'Automated compliance and evidence management',
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: 'Data Protection',
      description: 'Advanced data security and privacy solutions',
      icon: <Database className="w-6 h-6" />
    },
    {
      title: 'Incident Response',
      description: '24/7 security monitoring and rapid response',
      icon: <Users className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-pink-500/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Cybersecurity
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Protect your business with cutting-edge cybersecurity solutions powered by AI and quantum technology
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl hover:from-red-600 hover:to-pink-600 transition-all duration-200 font-medium text-lg shadow-lg hover:shadow-red-500/25"
              >
                Get Started
              </Link>
              <Link
                href="/security"
                className="px-8 py-4 border border-red-500/30 text-red-400 rounded-xl hover:bg-red-500/10 transition-all duration-200 font-medium text-lg"
              >
                View Security Services
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="bg-gray-900/50 backdrop-blur-xl border border-red-500/30 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl text-white group-hover:scale-110 transition-transform duration-200">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{service.title}</h3>
              </div>
              <p className="text-gray-300 mb-6 text-lg">{service.description}</p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3 text-gray-400">
                    <Zap className="w-5 h-5 text-red-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={service.href}
                className="inline-flex items-center space-x-2 text-red-400 hover:text-red-300 transition-colors duration-200 font-medium"
              >
                <span>Learn More</span>
                <Shield className="w-5 h-5" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Solutions Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Comprehensive Security Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From assessment to compliance, we provide end-to-end cybersecurity protection
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index + 0.6 }}
              className="bg-gray-900/30 backdrop-blur-xl border border-red-500/20 rounded-xl p-6 text-center hover:border-red-500/40 transition-all duration-300"
            >
              <div className="p-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl text-white w-fit mx-auto mb-4">
                {solution.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{solution.title}</h3>
              <p className="text-gray-400 text-sm">{solution.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Security Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Advanced Security Features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Built with enterprise-grade security and compliance standards
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="bg-gray-900/30 backdrop-blur-xl border border-red-500/20 rounded-xl p-8 text-center">
            <div className="p-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl text-white w-fit mx-auto mb-6">
              <Code className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">AI & Automation</h3>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li>Machine Learning Detection</li>
              <li>Automated Response</li>
              <li>Behavioral Analysis</li>
              <li>Threat Intelligence</li>
              <li>Predictive Security</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/30 backdrop-blur-xl border border-red-500/20 rounded-xl p-8 text-center">
            <div className="p-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl text-white w-fit mx-auto mb-6">
              <Database className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Compliance & Governance</h3>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li>SOC2 Compliance</li>
              <li>GDPR & Privacy</li>
              <li>HIPAA Security</li>
              <li>PCI DSS</li>
              <li>ISO 27001</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/30 backdrop-blur-xl border border-red-500/20 rounded-xl p-8 text-center">
            <div className="p-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl text-white w-fit mx-auto mb-6">
              <Shield className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Threat Protection</h3>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li>Endpoint Protection</li>
              <li>Network Security</li>
              <li>Email Security</li>
              <li>Web Application Security</li>
              <li>Cloud Security</li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/30 rounded-2xl p-12"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Our cybersecurity experts are ready to help you build a robust security foundation that protects your business from evolving threats.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl hover:from-red-600 hover:to-pink-600 transition-all duration-200 font-medium text-lg shadow-lg hover:shadow-red-500/25"
            >
              Schedule Security Assessment
            </Link>
            <Link
              href="/case-studies"
              className="px-8 py-4 border border-red-500/30 text-red-400 rounded-xl hover:bg-red-500/10 transition-all duration-200 font-medium text-lg"
            >
              View Security Case Studies
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CybersecurityPage;