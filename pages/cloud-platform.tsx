import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Zap, Shield, Cpu, Database, Globe, Lock, Server } from 'lucide-react';
import Link from 'next/link';

const CloudPlatformPage: React.FC = () => {
  const services = [
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable and resilient cloud infrastructure solutions',
      icon: <Server className="w-8 h-8 text-blue-400" />,
      features: ['Multi-Cloud Strategy', 'Auto-scaling', 'Load Balancing', 'High Availability']
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Streamlined development and deployment pipelines',
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      features: ['Automated Testing', 'Continuous Deployment', 'Infrastructure as Code', 'Monitoring & Alerting']
    },
    {
      title: 'Cloud Security',
      description: 'Comprehensive cloud security and compliance',
      icon: <Shield className="w-8 h-8 text-green-400" />,
      features: ['Identity Management', 'Data Encryption', 'Compliance Monitoring', 'Threat Detection']
    },
    {
      title: 'Data & Analytics',
      description: 'Cloud-native data processing and analytics',
      icon: <Database className="w-8 h-8 text-purple-400" />,
      features: ['Data Warehousing', 'Real-time Analytics', 'Machine Learning', 'Business Intelligence']
    }
  ];

  const cloudProviders = [
    'AWS', 'Azure', 'Google Cloud', 'IBM Cloud', 'Oracle Cloud', 'DigitalOcean'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Cloud Platform
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Accelerate your digital transformation with enterprise-grade cloud solutions. 
            From infrastructure to applications, we help you build, deploy, and scale in the cloud.
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
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Cloud Providers Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Multi-Cloud Expertise
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {cloudProviders.map((provider, index) => (
              <div key={index} className="bg-white/20 rounded-lg p-4 text-center">
                <div className="text-white font-semibold">{provider}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Cloud Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">50%</div>
            <div className="text-gray-300">Cost Reduction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">99.9%</div>
            <div className="text-gray-300">Uptime SLA</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-300">Support</div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Scale in the Cloud?
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Let's discuss how our cloud solutions can accelerate your business growth and digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Get Cloud Assessment
              </Link>
              <Link 
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors duration-300"
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

export default CloudPlatformPage;