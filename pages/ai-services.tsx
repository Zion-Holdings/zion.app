import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Shield, Database, Code, Rocket, Atom, Globe } from 'lucide-react';
import Link from 'next/link';

const AIServicesPage: React.FC = () => {
  const services = [
    {
      title: 'AI & Machine Learning Solutions',
      description: 'Cutting-edge artificial intelligence and machine learning services for enterprise transformation',
      icon: <Brain className="w-8 h-8" />,
      features: [
        'Custom AI Model Development',
        'Machine Learning Pipeline Automation',
        'Natural Language Processing',
        'Computer Vision Solutions',
        'Predictive Analytics',
        'AI-Powered Decision Support'
      ],
      href: '/ai-autonomous-ecosystem'
    },
    {
      title: 'Quantum AI Integration',
      description: 'Next-generation quantum computing combined with artificial intelligence',
      icon: <Atom className="w-8 h-8" />,
      features: [
        'Quantum Neural Networks',
        'Quantum Machine Learning',
        'Hybrid Classical-Quantum AI',
        'Quantum Optimization Algorithms',
        'Quantum-Safe AI Systems'
      ],
      href: '/quantum-ai-brain-computer-interface'
    },
    {
      title: 'AI-Powered Cybersecurity',
      description: 'Advanced security solutions leveraging artificial intelligence',
      icon: <Shield className="w-8 h-8" />,
      features: [
        'Threat Detection & Response',
        'Behavioral Analysis',
        'Automated Incident Response',
        'AI-Powered Risk Assessment',
        'Security Automation'
      ],
      href: '/ai-powered-cybersecurity'
    },
    {
      title: 'AI Data Analytics',
      description: 'Intelligent data processing and analytics solutions',
      icon: <Database className="w-8 h-8" />,
      features: [
        'Big Data Processing',
        'Real-time Analytics',
        'Predictive Modeling',
        'Data Visualization',
        'Automated Reporting'
      ],
      href: '/data-pipeline-health'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
              AI Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Transform your business with cutting-edge artificial intelligence solutions
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl hover:from-cyan-600 hover:to-purple-600 transition-all duration-200 font-medium text-lg shadow-lg hover:shadow-cyan-500/25"
              >
                Get Started
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl hover:bg-cyan-500/10 transition-all duration-200 font-medium text-lg"
              >
                View All Services
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
              className="bg-gray-900/50 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl text-white group-hover:scale-110 transition-transform duration-200">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{service.title}</h3>
              </div>
              <p className="text-gray-300 mb-6 text-lg">{service.description}</p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3 text-gray-400">
                    <Zap className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={service.href}
                className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 font-medium"
              >
                <span>Learn More</span>
                <Rocket className="w-5 h-5" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-2xl p-12"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Our AI experts are ready to help you implement cutting-edge artificial intelligence solutions that drive real business results.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl hover:from-cyan-600 hover:to-purple-600 transition-all duration-200 font-medium text-lg shadow-lg hover:shadow-cyan-500/25"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/case-studies"
              className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl hover:bg-cyan-500/10 transition-all duration-200 font-medium text-lg"
            >
              View Case Studies
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AIServicesPage;
