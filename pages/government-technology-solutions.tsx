import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Brain, Cpu, Database, Globe, Building, Users } from 'lucide-react';
import Link from 'next/link';

const GovernmentTechnologySolutionsPage: React.FC = () => {
  const solutions = [
    {
      title: 'Digital Government',
      description: 'Modern digital platforms for government services',
      icon: <Building className="w-8 h-8 text-blue-400" />,
      features: ['Citizen Portals', 'Digital Services', 'Mobile Applications', 'API Integration']
    },
    {
      title: 'Cybersecurity & Compliance',
      description: 'Government-grade security and compliance solutions',
      icon: <Shield className="w-8 h-8 text-green-400" />,
      features: ['FedRAMP Compliance', 'FISMA Standards', 'Zero Trust Security', 'Incident Response']
    },
    {
      title: 'Data Analytics',
      description: 'AI-powered analytics for government decision making',
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      features: ['Predictive Analytics', 'Performance Metrics', 'Data Visualization', 'Reporting Tools']
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Secure cloud solutions for government agencies',
      icon: <Cpu className="w-8 h-8 text-yellow-400" />,
      features: ['Multi-Cloud Strategy', 'Hybrid Solutions', 'Disaster Recovery', 'Compliance Monitoring']
    }
  ];

  const complianceStandards = [
    'FedRAMP', 'FISMA', 'NIST', 'SOC 2', 'ISO 27001', 'CJIS'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-blue-900">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Government
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-blue-400">
              Technology Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform government services with secure, compliant technology solutions. 
            From digital transformation to cybersecurity, we help government agencies serve citizens better.
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
                    <div className="w-2 h-2 bg-slate-400 rounded-full mr-3"></div>
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
          className="bg-gradient-to-r from-slate-600 to-blue-600 rounded-2xl p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Government Compliance & Security
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {complianceStandards.map((standard, index) => (
              <div key={index} className="bg-white/20 rounded-lg p-4 text-center">
                <div className="text-white font-semibold">{standard}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Government Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid md:grid-cols-4 gap-6 mb-16"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">FedRAMP</div>
            <div className="text-gray-300">Authorized</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">FISMA</div>
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
          <div className="bg-gradient-to-r from-blue-600 to-slate-600 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Transform Government Services
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how our government technology solutions can improve citizen services and operational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Get Government Assessment
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

export default GovernmentTechnologySolutionsPage;