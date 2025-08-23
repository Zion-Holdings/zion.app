import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Zap, Brain, Cpu, Globe, Users, Target, Award } from 'lucide-react';
import Layout from '../components/layout/Layout';

export default function Cybersecurity() {
  const services = [
    {
      icon: Shield,
      title: 'Zero Trust Security Platform',
      description: 'Comprehensive zero trust architecture for modern enterprises',
      features: ['Identity verification', 'Continuous monitoring', 'Micro-segmentation', 'Threat prevention'],
      href: '/zero-trust-security-platform'
    },
    {
      icon: Lock,
      title: 'Zero Trust Network Architecture',
      description: 'Advanced network security with zero trust principles',
      features: ['Network segmentation', 'Access control', 'Traffic monitoring', 'Security policies'],
      href: '/zero-trust-network-architecture'
    },
    {
      icon: Eye,
      title: 'Vulnerability Assessment & Penetration Testing',
      description: 'Comprehensive security testing and assessment services',
      features: ['Security audits', 'Penetration testing', 'Vulnerability scanning', 'Risk assessment'],
      href: '/vulnerability-assessment-penetration-testing'
    },
    {
      icon: Brain,
      title: 'AI-Powered Threat Detection',
      description: 'Intelligent security monitoring and threat response',
      features: ['Machine learning', 'Behavioral analysis', 'Real-time alerts', 'Automated response'],
      href: '/ai-powered-threat-detection'
    },
    {
      icon: Cpu,
      title: 'Quantum Cybersecurity Platform',
      description: 'Future-proof security solutions for the quantum era',
      features: ['Post-quantum cryptography', 'Quantum key distribution', 'Threat detection', 'Secure communications'],
      href: '/quantum-cybersecurity-platform'
    },
    {
      icon: Zap,
      title: 'Incident Response & Automation',
      description: 'Rapid incident response with automated security operations',
      features: ['24/7 monitoring', 'Automated response', 'Incident management', 'Recovery planning'],
      href: '/incident-automation-suite'
    }
  ];

  const stats = [
    { number: '99.9%', label: 'Threat Detection', icon: Shield },
    { number: '24/7', label: 'Security Monitoring', icon: Eye },
    { number: '100+', label: 'Security Solutions', icon: Lock },
    { number: '500+', label: 'Protected Clients', icon: Users }
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
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-red-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent mb-6">
                Cybersecurity
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Advanced cybersecurity solutions that protect your digital assets and ensure business continuity. 
                From zero trust architecture to quantum-resistant security.
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
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-red-400" />
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
                Cybersecurity Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive security solutions designed to protect your organization from evolving threats
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
                      <div className="w-16 h-16 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="w-8 h-8 text-red-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-400">
                            <div className="w-2 h-2 bg-red-400 rounded-full"></div>
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
                Secure Your Digital Future
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let our cybersecurity experts help you build a robust security foundation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold rounded-xl hover:from-red-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border border-red-500 text-red-400 font-semibold rounded-xl hover:bg-red-500/10 transition-all duration-300"
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
};

export default CybersecurityPage;