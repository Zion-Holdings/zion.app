import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Cloud, Server, Database, Shield, Zap, Brain, Cpu, Users, Target } from 'lucide-react';
import Layout from '../components/layout/Layout';

export default function CloudPlatform() {
  const services = [
    {
      icon: Cloud,
      title: 'Multi-Cloud Disaster Recovery',
      description: 'Comprehensive disaster recovery across multiple cloud platforms',
      features: ['Cross-platform backup', 'Automated failover', 'RTO optimization', 'Data protection'],
      href: '/multi-cloud-disaster-recovery'
    },
    {
      icon: Database,
      title: 'Managed PostgreSQL High Availability',
      description: 'Enterprise-grade PostgreSQL with high availability and performance',
      features: ['Automatic failover', 'Performance tuning', 'Backup management', '24/7 monitoring'],
      href: '/managed-postgresql-ha'
    },
    {
      icon: Server,
      title: 'Kubernetes RBAC Auditor',
      description: 'Advanced Kubernetes security and access control management',
      features: ['Role-based access control', 'Security auditing', 'Compliance reporting', 'Policy enforcement'],
      href: '/kubernetes-rbac-auditor'
    },
    {
      icon: Shield,
      title: 'Zero Trust Network Architecture',
      description: 'Secure cloud networking with zero trust principles',
      features: ['Network segmentation', 'Identity verification', 'Continuous monitoring', 'Threat prevention'],
      href: '/zero-trust-network-architecture'
    },
    {
      icon: Zap,
      title: 'Serverless Cron Manager',
      description: 'Automated task scheduling and execution in the cloud',
      features: ['Task scheduling', 'Resource optimization', 'Cost management', 'Monitoring & alerts'],
      href: '/serverless-cron-manager'
    },
    {
      icon: Brain,
      title: 'LLM Gateway & Cost Control',
      description: 'Intelligent language model management and cost optimization',
      features: ['Model routing', 'Cost tracking', 'Performance monitoring', 'Usage analytics'],
      href: '/llm-gateway'
    }
  ];

  const stats = [
    { number: '99.99%', label: 'Uptime', icon: Cloud },
    { number: '24/7', label: 'Monitoring', icon: Shield },
    { number: '50+', label: 'Cloud Services', icon: Server },
    { number: '1000+', label: 'Deployments', icon: Zap }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-400 bg-clip-text text-transparent mb-6">
                Cloud Platform
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Enterprise-grade cloud infrastructure and platform services that scale with your business. 
                From disaster recovery to managed databases and Kubernetes security.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 bg-black/30">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Cloud Platform Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive cloud solutions designed to optimize performance, security, and scalability
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <a href={service.href} className="block">
                    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 h-full hover:bg-gray-700/50 transition-all duration-300 hover:scale-105">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="w-8 h-8 text-blue-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-400">
                            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Scale Your Cloud Infrastructure
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let our cloud experts help you build a robust and scalable cloud platform
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border border-blue-500 text-blue-400 font-semibold rounded-xl hover:bg-blue-500/10 transition-all duration-300"
                >
                  View All Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}