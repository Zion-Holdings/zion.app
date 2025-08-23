import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Server, Globe, Zap, Shield, Database, Lock, ArrowRight, CheckCircle, Rocket } from 'lucide-react';
import Link from 'next/link';
import Layout from '../components/layout/Layout';

const CloudPlatform: React.FC = () => {
  const features = [
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Multi-Cloud Management',
      description: 'Unified management across AWS, Azure, GCP, and private clouds'
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: 'Auto-Scaling Infrastructure',
      description: 'Intelligent scaling based on demand and performance metrics'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Enterprise Security',
      description: 'Advanced security with zero-trust architecture and compliance'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Managed Databases',
      description: 'High-availability databases with automated backups and recovery'
    }
  ];

  const services = [
    {
      title: 'Cloud Landing Zone',
      description: 'Secure, scalable cloud foundation for enterprise workloads',
      href: '/cloud-landing-zone',
      icon: <Cloud className="w-6 h-6" />
    },
    {
      title: 'Quantum Cloud Infrastructure',
      description: 'Next-generation cloud with quantum computing capabilities',
      href: '/quantum-cloud-infrastructure',
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: 'Multi-Cloud Disaster Recovery',
      description: 'Comprehensive disaster recovery across multiple cloud providers',
      href: '/multi-cloud-disaster-recovery',
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: 'Managed PostgreSQL HA',
      description: 'High-availability PostgreSQL with automated management',
      href: '/managed-postgres-ha',
      icon: <Database className="w-6 h-6" />
    },
    {
      title: 'Kubernetes Management',
      description: 'Enterprise-grade Kubernetes orchestration and management',
      href: '/kubernetes-rbac-auditor',
      icon: <Server className="w-6 h-6" />
    },
    {
      title: 'Zero Downtime Migration',
      description: 'Seamless migration to cloud with zero business disruption',
      href: '/zero-downtime-migration',
      icon: <Rocket className="w-6 h-6" />
    }
  ];

  const cloudCapabilities = [
    'Infrastructure as Code (IaC)',
    'Container Orchestration',
    'Serverless Computing',
    'Microservices Architecture',
    'API Management & Gateway',
    'Monitoring & Observability',
    'Cost Optimization',
    'Compliance & Governance'
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Cloud Platform
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">
                  Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Enterprise-grade cloud infrastructure designed for scalability, 
                security, and performance
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
                >
                  Get Started
                  <Cloud className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300"
                >
                  View All Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Cloud Platform Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced cloud infrastructure designed for modern enterprise needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="text-blue-400 mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Cloud Capabilities Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Cloud Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive cloud services to accelerate your digital transformation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cloudCapabilities.map((capability, index) => (
                <motion.div
                  key={capability}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-400" />
                    <span className="text-white font-medium">{capability}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Cloud Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Specialized cloud services to optimize your infrastructure
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="text-blue-400 mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Scale in the Cloud?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Transform your infrastructure with enterprise-grade cloud solutions
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-full text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
              >
                Start Your Cloud Journey
                <Cloud className="w-6 h-6 ml-3" />
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CloudPlatform;