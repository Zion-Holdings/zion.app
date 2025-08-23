import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Zap, Cpu, Database, Globe, AlertTriangle } from 'lucide-react';
import Link from 'next/link';

const CybersecurityPage: React.FC = () => {
  const services = [
    {
      title: 'Threat Detection & Response',
      description: 'Advanced threat detection and automated incident response systems',
      icon: <Eye className="w-8 h-8 text-blue-400" />,
      features: ['AI-Powered Threat Detection', 'Real-time Monitoring', 'Automated Response', 'Threat Intelligence']
    },
    {
      title: 'Identity & Access Management',
      description: 'Comprehensive identity management and access control solutions',
      icon: <Lock className="w-8 h-8 text-green-400" />,
      features: ['Multi-Factor Authentication', 'Single Sign-On', 'Privileged Access Management', 'Identity Governance']
    },
    {
      title: 'Zero Trust Security',
      description: 'Modern zero trust architecture for comprehensive security',
      icon: <Shield className="w-8 h-8 text-purple-400" />,
      features: ['Network Segmentation', 'Continuous Verification', 'Least Privilege Access', 'Micro-segmentation']
    },
    {
      title: 'Security Operations Center',
      description: '24/7 security monitoring and incident management',
      icon: <Cpu className="w-8 h-8 text-yellow-400" />,
      features: ['24/7 Monitoring', 'Incident Response', 'Security Analytics', 'Compliance Reporting']
    }
  ];

  const complianceFrameworks = [
    'SOC 2 Type II', 'ISO 27001', 'NIST Cybersecurity Framework', 'GDPR', 'HIPAA', 'PCI DSS'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-orange-900">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Cybersecurity
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
              Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Protect your organization with enterprise-grade cybersecurity solutions. 
            From threat detection to compliance management, we provide comprehensive security that adapts to evolving threats.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                {service.icon}
                <h3 className="text-2xl font-bold text-white ml-4">{service.title}</h3>
              </div>
              <p className="text-gray-300 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Compliance Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Compliance & Certifications
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {complianceFrameworks.map((framework, index) => (
              <div key={index} className="bg-white/20 rounded-lg p-4 text-center">
                <div className="text-white font-semibold">{framework}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Security Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid md:grid-cols-4 gap-6 mb-16"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">99.9%</div>
            <div className="text-gray-300">Threat Detection Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">&lt;5min</div>
            <div className="text-gray-300">Response Time</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-300">Monitoring</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">100%</div>
            <div className="text-gray-300">Compliance Success</div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Secure Your Digital Future
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Don't wait for a breach to happen. Let's discuss how our cybersecurity solutions can protect your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Get Security Assessment
              </Link>
              <Link 
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CybersecurityPage;