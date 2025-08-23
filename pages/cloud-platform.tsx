import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Zap, Shield, Database, Code, Rocket, Server, Settings, Globe, Cpu } from 'lucide-react';
import Link from 'next/link';

const CloudPlatformPage: React.FC = () => {
  const services = [
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud infrastructure solutions for enterprise applications',
      icon: <Cloud className="w-8 h-8" />,
      features: [
        'Multi-Cloud Strategy',
        'Infrastructure as Code',
        'Auto-scaling Solutions',
        'High Availability',
        'Disaster Recovery',
        'Cost Optimization'
      ],
      href: '/cloud-landing-zone'
    },
    {
      title: 'DevOps & Automation',
      description: 'Streamlined development and deployment workflows with automation',
      icon: <Settings className="w-8 h-8" />,
      features: [
        'CI/CD Pipelines',
        'Infrastructure Automation',
        'Monitoring & Alerting',
        'Performance Optimization',
        'Security Automation',
        'Compliance Management'
      ],
      href: '/devops-automation'
    },
    {
      title: 'Cloud Security',
      description: 'Comprehensive security solutions for cloud environments',
      icon: <Shield className="w-8 h-8" />,
      features: [
        'Identity & Access Management',
        'Data Encryption',
        'Network Security',
        'Compliance Monitoring',
        'Threat Detection',
        'Security Auditing'
      ],
      href: '/cloud-backup-compliance'
    },
    {
      title: 'Data & Analytics',
      description: 'Advanced data processing and analytics platforms in the cloud',
      icon: <Database className="w-8 h-8" />,
      features: [
        'Big Data Processing',
        'Real-time Analytics',
        'Machine Learning Platforms',
        'Data Warehousing',
        'Business Intelligence',
        'Data Governance'
      ],
      href: '/data-pipeline-health'
    }
  ];

  const platforms = [
    {
      title: 'AWS Solutions',
      description: 'Amazon Web Services infrastructure and managed services',
      icon: <Server className="w-6 h-6" />
    },
    {
      title: 'Azure Integration',
      description: 'Microsoft Azure cloud platform and services',
      icon: <Cloud className="w-6 h-6" />
    },
    {
      title: 'Google Cloud',
      description: 'Google Cloud Platform and AI services',
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: 'Multi-Cloud',
      description: 'Hybrid and multi-cloud strategies',
      icon: <Cpu className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-6">
              Cloud Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Build scalable, secure, and high-performance cloud solutions that drive business growth
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl hover:from-blue-600 hover:to-indigo-600 transition-all duration-200 font-medium text-lg shadow-lg hover:shadow-blue-500/25"
              >
                Get Started
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 border border-blue-500/30 text-blue-400 rounded-xl hover:bg-blue-500/10 transition-all duration-200 font-medium text-lg"
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
              className="bg-gray-900/50 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl text-white group-hover:scale-110 transition-transform duration-200">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{service.title}</h3>
              </div>
              <p className="text-gray-300 mb-6 text-lg">{service.description}</p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3 text-gray-400">
                    <Zap className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={service.href}
                className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium"
              >
                <span>Learn More</span>
                <Rocket className="w-5 h-5" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Cloud Platforms Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Cloud Platform Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We specialize in all major cloud platforms and help you choose the right solution for your business
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index + 0.6 }}
              className="bg-gray-900/30 backdrop-blur-xl border border-blue-500/20 rounded-xl p-6 text-center hover:border-blue-500/40 transition-all duration-300"
            >
              <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl text-white w-fit mx-auto mb-4">
                {platform.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{platform.title}</h3>
              <p className="text-gray-400 text-sm">{platform.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Why Choose Our Cloud Platform?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the benefits of enterprise-grade cloud solutions designed for modern businesses
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="bg-gray-900/30 backdrop-blur-xl border border-blue-500/20 rounded-xl p-8 text-center">
            <div className="p-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl text-white w-fit mx-auto mb-6">
              <Rocket className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Scalability & Performance</h3>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li>Auto-scaling Infrastructure</li>
              <li>High Performance Computing</li>
              <li>Global CDN Networks</li>
              <li>Load Balancing</li>
              <li>Performance Monitoring</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/30 backdrop-blur-xl border border-blue-500/20 rounded-xl p-8 text-center">
            <div className="p-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl text-white w-fit mx-auto mb-6">
              <Shield className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Security & Compliance</h3>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li>Enterprise Security</li>
              <li>Data Encryption</li>
              <li>Compliance Standards</li>
              <li>Access Control</li>
              <li>Audit Logging</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/30 backdrop-blur-xl border border-blue-500/20 rounded-xl p-8 text-center">
            <div className="p-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl text-white w-fit mx-auto mb-6">
              <Settings className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Automation & DevOps</h3>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li>Infrastructure as Code</li>
              <li>CI/CD Pipelines</li>
              <li>Automated Monitoring</li>
              <li>Deployment Automation</li>
              <li>Configuration Management</li>
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
          className="text-center bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/30 rounded-2xl p-12"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Scale with Cloud?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Our cloud platform experts are ready to help you build scalable, secure, and high-performance cloud solutions that drive business growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl hover:from-blue-600 hover:to-indigo-600 transition-all duration-200 font-medium text-lg shadow-lg hover:shadow-blue-500/25"
            >
              Start Cloud Migration
            </Link>
            <Link
              href="/case-studies"
              className="px-8 py-4 border border-blue-500/30 text-blue-400 rounded-xl hover:bg-blue-500/10 transition-all duration-200 font-medium text-lg"
            >
              View Cloud Case Studies
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CloudPlatformPage;