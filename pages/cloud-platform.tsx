import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Cloud, Database, Globe, Zap, TrendingUp, Users, 
  Award, ArrowRight, Star, Shield, Lock, 
  Palette, Heart, Rocket, Server, Cpu
} from 'lucide-react';
import Link from 'next/link';

const cloudServices = [
  {
    title: 'Cloud Infrastructure',
    description: 'Scalable cloud infrastructure solutions for enterprise applications and workloads.',
    icon: <Server className="w-8 h-8 text-cyan-400" />,
    features: ['Auto-scaling', 'Load Balancing', 'High Availability', 'Disaster Recovery'],
    href: '/quantum-cloud-infrastructure'
  },
  {
    title: 'Database Solutions',
    description: 'Managed database services with high performance and reliability guarantees.',
    icon: <Database className="w-8 h-8 text-purple-400" />,
    features: ['Managed PostgreSQL', 'High Availability', 'Backup & Recovery', 'Performance Optimization'],
    href: '/managed-postgres-ha'
  },
  {
    title: 'Multi-Cloud Management',
    description: 'Unified management across multiple cloud providers for optimal cost and performance.',
    icon: <Globe className="w-8 h-8 text-green-400" />,
    features: ['Multi-Cloud Strategy', 'Cost Optimization', 'Unified Monitoring', 'Portability'],
    href: '/multi-cloud-disaster-recovery'
  },
  {
    title: 'Cloud Security',
    description: 'Comprehensive security solutions for cloud environments and applications.',
    icon: <Shield className="w-8 h-8 text-red-400" />,
    features: ['Identity Management', 'Data Protection', 'Compliance Monitoring', 'Threat Detection'],
    href: '/quantum-secure-cloud-infrastructure'
  },
  {
    title: 'DevOps & CI/CD',
    description: 'Automated deployment pipelines and infrastructure as code solutions.',
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
    features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Automated Testing', 'Deployment Automation'],
    href: '/zero-downtime-migration'
  },
  {
    title: 'Cloud Migration',
    description: 'Seamless migration services from on-premises to cloud infrastructure.',
    icon: <Rocket className="w-8 h-8 text-blue-400" />,
    features: ['Migration Planning', 'Zero Downtime', 'Data Transfer', 'Performance Optimization'],
    href: '/zero-downtime-migration'
  }
];

const cloudBenefits = [
  {
    title: 'Scalability',
    description: 'Scale resources up or down based on demand automatically',
    icon: <TrendingUp className="w-6 h-6 text-cyan-400" />
  },
  {
    title: 'Cost Efficiency',
    description: 'Pay only for resources you use with flexible pricing models',
    icon: <Award className="w-6 h-6 text-purple-400" />
  },
  {
    title: 'Global Reach',
    description: 'Deploy applications worldwide with edge computing capabilities',
    icon: <Globe className="w-6 h-6 text-blue-400" />
  },
  {
    title: 'Security First',
    description: 'Enterprise-grade security with built-in compliance frameworks',
    icon: <Shield className="w-6 h-6 text-green-400" />
  }
];

export default function CloudPlatform() {
  return (
    <Layout>
      <SEO 
        title="Cloud Platform Services | Zion Tech Group"
        description="Enterprise cloud platform solutions for scalable infrastructure, database management, multi-cloud strategy, and cloud security."
        canonical="https://ziontechgroup.com/cloud-platform/"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-gray-800/20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                <Cloud className="w-4 h-4 mr-2" />
                Cloud Platform Excellence
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-600 bg-clip-text text-transparent">
                Cloud
              </span>
              <br />
              <span className="text-white">Transformation</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Accelerate your digital transformation with enterprise-grade cloud solutions. 
              From infrastructure to security, we deliver scalable cloud platforms that drive innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
              >
                Start Cloud Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                href="/services"
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-2xl hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Floating Cloud Elements */}
        <div className="absolute top-20 left-10 opacity-20 animate-float">
          <Cloud className="w-16 h-16 text-blue-400" />
        </div>
        <div className="absolute top-40 right-20 opacity-20 animate-float-delayed">
          <Server className="w-12 h-12 text-cyan-400" />
        </div>
        <div className="absolute bottom-40 left-20 opacity-20 animate-float">
          <Database className="w-14 h-14 text-teal-400" />
        </div>
      </section>

      {/* Cloud Benefits */}
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
              Why Cloud Platform?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Cloud platforms provide the foundation for modern digital transformation, 
              offering scalability, flexibility, and cost efficiency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cloudBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-blue-500/50 hover:bg-gray-800/70 transition-all duration-300 transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Cloud Platform Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our comprehensive cloud platform services cover every aspect of cloud transformation, 
              from infrastructure to security and optimization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cloudServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-blue-500/50 hover:bg-gray-800/70 transition-all duration-300 transform hover:scale-105"
              >
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-700/50 rounded-xl group-hover:bg-blue-500/10 transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <Star className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href={service.href}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Architecture */}
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
              Cloud Architecture Excellence
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our cloud architecture designs prioritize scalability, security, and performance 
              to deliver robust and future-ready solutions.
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
                  <Cpu className="w-6 h-6 text-cyan-400 mr-3" />
                  Microservices Architecture
                </h3>
                <p className="text-gray-400 mb-4">
                  Build scalable applications with microservices architecture for better maintainability and deployment flexibility.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Service Decomposition</li>
                  <li>• Independent Deployment</li>
                  <li>• Scalable Components</li>
                  <li>• Technology Diversity</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Shield className="w-6 h-6 text-green-400 mr-3" />
                  Security by Design
                </h3>
                <p className="text-gray-400 mb-4">
                  Integrated security controls and compliance frameworks built into every layer of the cloud architecture.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Identity & Access Management</li>
                  <li>• Data Encryption</li>
                  <li>• Network Security</li>
                  <li>• Compliance Monitoring</li>
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
                  <TrendingUp className="w-6 h-6 text-blue-400 mr-3" />
                  Auto-scaling Infrastructure
                </h3>
                <p className="text-gray-400 mb-4">
                  Dynamic resource allocation that automatically scales based on demand and performance requirements.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Load-based Scaling</li>
                  <li>• Performance Optimization</li>
                  <li>• Cost Management</li>
                  <li>• Resource Efficiency</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Database className="w-6 h-6 text-purple-400 mr-3" />
                  Data Management
                </h3>
                <p className="text-gray-400 mb-4">
                  Comprehensive data solutions including storage, backup, recovery, and analytics capabilities.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Data Storage Solutions</li>
                  <li>• Backup & Recovery</li>
                  <li>• Data Analytics</li>
                  <li>• Data Governance</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform with Cloud?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Accelerate your digital transformation with enterprise-grade cloud solutions. 
              Our experts are ready to guide your cloud journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
              >
                Start Cloud Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                href="/quote"
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-2xl hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
              >
                Request Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}