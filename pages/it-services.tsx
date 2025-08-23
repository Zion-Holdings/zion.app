import React from 'react';
import Layout from '../components/layout/Layout';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Shield, Server, Cloud, Database, Network, Lock, 
  Zap, Users, BarChart3, ArrowRight, Star, CheckCircle,
  Globe, Cpu, HardDrive, Wifi
} from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      category: 'Cloud Infrastructure',
      services: [
        {
          name: 'Quantum-Secure Cloud Infrastructure',
          description: 'Next-generation cloud platforms with quantum encryption and advanced security',
          href: '/quantum-secure-cloud-infrastructure',
          featured: true,
          icon: <Cloud className="w-6 h-6" />
        },
        {
          name: 'Edge Computing Orchestration',
          description: 'Distributed edge computing solutions for low-latency applications',
          href: '/edge-computing-orchestration-platform',
          featured: true,
          icon: <Zap className="w-6 h-6" />
        },
        {
          name: 'Multi-Cloud Disaster Recovery',
          description: 'Comprehensive disaster recovery across multiple cloud providers',
          href: '/multi-cloud-disaster-recovery',
          icon: <Server className="w-6 h-6" />
        }
      ]
    },
    {
      category: 'Security & Compliance',
      services: [
        {
          name: 'Zero Trust Security Platform',
          description: 'Advanced security framework with continuous verification',
          href: '/zero-trust-security-platform',
          featured: true,
          icon: <Lock className="w-6 h-6" />
        },
        {
          name: 'SOC 2 Compliance Automation',
          description: 'Automated compliance management and evidence collection',
          href: '/soc2-compliance-automation',
          icon: <Shield className="w-6 h-6" />
        },
        {
          name: 'Vulnerability Assessment & Penetration Testing',
          description: 'Comprehensive security testing and vulnerability management',
          href: '/vulnerability-assessment-penetration-testing',
          icon: <CheckCircle className="w-6 h-6" />
        }
      ]
    },
    {
      category: 'DevOps & Automation',
      services: [
        {
          name: 'AI-Powered DevOps Platform',
          description: 'Intelligent automation for development and operations',
          href: '/ai-powered-devops-platform',
          featured: true,
          icon: <Cpu className="w-6 h-6" />
        },
        {
          name: 'Autonomous IT Operations Center',
          description: 'Self-managing IT infrastructure with AI-driven operations',
          href: '/autonomous-it-operations-center',
          icon: <BarChart3 className="w-6 h-6" />
        },
        {
          name: 'Infrastructure Drift Detector',
          description: 'Automated detection and remediation of configuration drift',
          href: '/infrastructure-drift-detector',
          icon: <HardDrive className="w-6 h-6" />
        }
      ]
    },
    {
      category: 'Data & Analytics',
      services: [
        {
          name: 'RAG Evaluation Lab',
          description: 'Advanced evaluation and testing for RAG systems',
          href: '/rag-evaluation-lab',
          featured: true,
          icon: <Database className="w-6 h-6" />
        },
        {
          name: 'Data Pipeline Health Monitor',
          description: 'Real-time monitoring and optimization of data pipelines',
          href: '/data-pipeline-health',
          icon: <BarChart3 className="w-6 h-6" />
        },
        {
          name: 'Database Performance Monitor',
          description: 'Comprehensive database performance optimization',
          href: '/database-performance-monitor',
          icon: <Server className="w-6 h-6" />
        }
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              IT Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Enterprise-grade IT infrastructure, security, and automation solutions that power modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
              >
                Get Started
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/demo"
                className="border border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 backdrop-blur-md hover:bg-white/10"
              >
                Request Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Enterprise IT Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From cloud infrastructure to security automation, our IT services ensure your business operates at peak efficiency.
            </p>
          </motion.div>

          <div className="space-y-16">
            {itServices.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold text-white mb-8 text-center">
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                      viewport={{ once: true }}
                      className={`bg-gradient-to-br from-gray-900/50 to-gray-800/50 border rounded-2xl p-6 backdrop-blur-sm hover:border-blue-500/40 transition-all duration-300 ${
                        service.featured ? 'border-blue-500/30' : 'border-gray-700/50'
                      }`}
                    >
                      {service.featured && (
                        <div className="flex items-center mb-4">
                          <Star className="w-5 h-5 text-yellow-400 mr-2" />
                          <span className="text-yellow-400 text-sm font-semibold">Featured</span>
                        </div>
                      )}
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-4">
                        {service.icon}
                      </div>
                      <h4 className="text-xl font-bold text-white mb-3">{service.name}</h4>
                      <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                      <Link
                        href={service.href}
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                      >
                        Learn More <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900/20 to-indigo-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Modernize Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our IT solutions can optimize your operations and enhance security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
              >
                Start Your IT Transformation
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/solutions"
                className="border border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 backdrop-blur-md hover:bg-white/10"
              >
                View Solutions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ITServicesPage;

