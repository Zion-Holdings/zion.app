import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Brain, Cpu, Database, Globe, Lock, Activity } from 'lucide-react';
import Link from 'next/link';

const HealthcareSolutionsPage: React.FC = () => {
  const solutions = [
    {
      title: 'Electronic Health Records',
      description: 'Secure, compliant EHR systems with AI-powered insights',
      icon: <Database className="w-8 h-8 text-blue-400" />,
      features: ['HIPAA Compliance', 'AI-Powered Analytics', 'Interoperability', 'Patient Portal']
    },
    {
      title: 'Telemedicine Platforms',
      description: 'Advanced telehealth solutions for remote patient care',
      icon: <Globe className="w-8 h-8 text-green-400" />,
      features: ['Video Consultations', 'Remote Monitoring', 'Prescription Management', 'Insurance Integration']
    },
    {
      title: 'AI Diagnostics',
      description: 'Machine learning-powered diagnostic assistance tools',
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      features: ['Image Analysis', 'Predictive Analytics', 'Clinical Decision Support', 'Risk Assessment']
    },
    {
      title: 'Healthcare Security',
      description: 'Comprehensive cybersecurity for healthcare organizations',
      icon: <Shield className="w-8 h-8 text-red-400" />,
      features: ['HIPAA Compliance', 'Data Encryption', 'Access Control', 'Audit Logging']
    }
  ];

  const complianceStandards = [
    'HIPAA', 'HITECH', 'SOC 2', 'ISO 27001', 'NIST', 'FDA Compliance'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-blue-900">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Healthcare
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
              Technology Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform healthcare delivery with cutting-edge technology solutions. 
            From AI-powered diagnostics to secure patient management systems, we help healthcare organizations innovate and improve patient outcomes.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                {solution.icon}
                <h3 className="text-2xl font-bold text-white ml-4">{solution.title}</h3>
              </div>
              <p className="text-gray-300 mb-6">{solution.description}</p>
              <ul className="space-y-2">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
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
          className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Healthcare Compliance & Security
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {complianceStandards.map((standard, index) => (
              <div key={index} className="bg-white/20 rounded-lg p-4 text-center">
                <div className="text-white font-semibold">{standard}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Healthcare Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid md:grid-cols-4 gap-6 mb-16"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">99.9%</div>
            <div className="text-gray-300">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">HIPAA</div>
            <div className="text-gray-300">Compliant</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-300">Support</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">100%</div>
            <div className="text-gray-300">Secure</div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Transform Healthcare with Technology
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how our healthcare solutions can improve patient care and operational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Get Healthcare Assessment
              </Link>
              <Link 
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300"
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

export default HealthcareSolutionsPage;