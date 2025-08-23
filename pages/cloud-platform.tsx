import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Server, Database, Network, Zap, Shield, Globe, Cpu, ArrowRight, CheckCircle } from 'lucide-react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';

export default function CloudPlatform() {
  const cloudServices = [
    {
      title: 'Multi-Cloud Infrastructure',
      description: 'Seamless deployment and management across AWS, Azure, Google Cloud, and more',
      href: '/multi-cloud-infrastructure',
      icon: <Cloud className="w-8 h-8" />,
      features: ['Multi-Cloud Management', 'Cost Optimization', 'Automated Deployment']
    },
    {
      title: 'Serverless Computing',
      description: 'Event-driven, auto-scaling serverless functions and applications',
      href: '/serverless-computing',
      icon: <Zap className="w-8 h-8" />,
      features: ['Auto-scaling', 'Pay-per-use', 'Zero Server Management']
    },
    {
      title: 'Cloud Security & Compliance',
      description: 'Advanced security measures and compliance frameworks for cloud environments',
      href: '/cloud-security-compliance',
      icon: <Shield className="w-8 h-8" />,
      features: ['Zero Trust Architecture', 'Compliance Automation', 'Threat Detection']
    },
    {
      title: 'Database as a Service',
      description: 'Managed database solutions with high availability and automatic scaling',
      href: '/managed-postgres-ha',
      icon: <Database className="w-8 h-8" />,
      features: ['High Availability', 'Automatic Backups', 'Performance Optimization']
    },
    {
      title: 'Edge Computing',
      description: 'Ultra-low latency computing at the edge for real-time applications',
      href: '/edge-computing-platform',
      icon: <Network className="w-8 h-8" />,
      features: ['Global Edge Network', 'Real-time Processing', 'IoT Integration']
    },
    {
      title: 'Container Orchestration',
      description: 'Kubernetes-based container management and orchestration',
      href: '/container-orchestration',
      icon: <Server className="w-8 h-8" />,
      features: ['Kubernetes Management', 'Auto-scaling', 'Service Mesh']
    }
  ];

  const benefits = [
    'Reduced infrastructure costs by up to 40%',
    '99.99% uptime with global redundancy',
    'Auto-scaling to handle traffic spikes',
    'Enterprise-grade security and compliance',
    'Global content delivery network',
    '24/7 monitoring and expert support'
  ];

  const stats = [
    { value: '99.99%', label: 'Uptime SLA' },
    { value: '< 50ms', label: 'Global Latency' },
    { value: '40%', label: 'Cost Reduction' },
    { value: '150+', label: 'Global Regions' }
  ];

  return (
    <Layout>
      <SEO 
        title="Cloud Platform Solutions | Zion Tech Group"
        description="Comprehensive cloud platform services including multi-cloud infrastructure, serverless computing, edge computing, and managed databases. Scale your business with enterprise cloud solutions."
        keywords={["cloud platform", "multi-cloud", "serverless", "edge computing", "managed databases", "cloud infrastructure"]}
      />

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-green-500/10"></div>
          <div className="container mx-auto max-w-6xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <Cloud className="w-12 h-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-500 to-green-400 bg-clip-text text-transparent mb-6">
                Cloud Platform Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Transform your business with our comprehensive cloud platform. 
                From multi-cloud infrastructure to edge computing, we provide scalable, secure, and cost-effective solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
                >
                  Start Cloud Migration
                </a>
                <a
                  href="/get-started"
                  className="px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300"
                >
                  Get Free Assessment
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Cloud Stats */}
        <section className="py-16 px-4 bg-black/30">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6"
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Cloud Services Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Cloud Services Portfolio</h2>
              <p className="text-xl text-gray-300">Comprehensive cloud solutions for modern businesses</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cloudServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                  className="group"
                >
                  <a
                    href={service.href}
                    className="block p-8 bg-black/40 border border-gray-800 rounded-2xl hover:border-blue-500/50 transition-all duration-300 h-full"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-blue-400 group-hover:text-cyan-400 transition-colors duration-300">
                        {service.icon}
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-blue-400 transition-colors duration-300" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-black/30">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Cloud Platform?</h2>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Our cloud platform combines the best of multiple cloud providers with 
                  advanced automation, security, and optimization to deliver unmatched performance.
                </p>
                
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="relative"
              >
                <div className="w-full h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <Globe className="w-24 h-24 text-blue-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">Global Infrastructure</h3>
                    <p className="text-gray-300">Worldwide cloud presence</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Cloud Architecture Diagram */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Multi-Cloud Architecture</h2>
              <p className="text-xl text-gray-300">Seamlessly orchestrated across multiple cloud providers</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-center p-8 bg-black/40 border border-gray-800 rounded-2xl"
              >
                <Server className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Compute Layer</h3>
                <p className="text-gray-300">Auto-scaling serverless and container infrastructure</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="text-center p-8 bg-black/40 border border-gray-800 rounded-2xl"
              >
                <Database className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Data Layer</h3>
                <p className="text-gray-300">Managed databases with global replication</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="text-center p-8 bg-black/40 border border-gray-800 rounded-2xl"
              >
                <Network className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Network Layer</h3>
                <p className="text-gray-300">Global CDN and edge computing network</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Scale in the Cloud?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Transform your business with our enterprise-grade cloud platform. Start your journey today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
                >
                  Start Cloud Migration
                </a>
                <a
                  href="/multi-cloud-infrastructure"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300"
                >
                  Explore Multi-Cloud
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}