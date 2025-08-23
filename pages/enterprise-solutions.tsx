import React from 'react';
import { motion } from 'framer-motion';
import { Building, Shield, Users, Globe, Zap, Brain, Cpu, Rocket, Target, Award } from 'lucide-react';
import Layout from '../components/layout/Layout';

export default function EnterpriseSolutions() {
  const solutions = [
    {
      icon: Building,
      title: 'Enterprise AI Solutions',
      description: 'Scalable AI platforms designed for enterprise-scale operations',
      features: ['AI governance', 'Scalable infrastructure', 'Enterprise security', 'Performance optimization'],
      href: '/enterprise-ai-solutions'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Comprehensive security solutions for large organizations',
      features: ['Zero trust architecture', 'Threat detection', 'Compliance management', 'Incident response'],
      href: '/enterprise-security'
    },
    {
      icon: Users,
      title: 'Enterprise HR Solutions',
      description: 'AI-powered human resources management for enterprise organizations',
      features: ['Workforce analytics', 'Talent management', 'Performance optimization', 'Compliance tracking'],
      href: '/enterprise-hr-solutions'
    },
    {
      icon: Globe,
      title: 'Global Infrastructure',
      description: 'Worldwide infrastructure and deployment solutions',
      features: ['Multi-region deployment', 'Global CDN', 'Load balancing', 'Disaster recovery'],
      href: '/global-infrastructure'
    },
    {
      icon: Zap,
      title: 'Enterprise Automation',
      description: 'Large-scale process automation and optimization',
      features: ['Workflow automation', 'Process optimization', 'Performance monitoring', 'Scalability'],
      href: '/enterprise-automation'
    },
    {
      icon: Brain,
      title: 'Enterprise Analytics',
      description: 'Advanced analytics and business intelligence for enterprises',
      features: ['Big data processing', 'Real-time analytics', 'Predictive modeling', 'Business intelligence'],
      href: '/enterprise-analytics'
    }
  ];

  const stats = [
    { number: '500+', label: 'Enterprise Clients', icon: Building },
    { number: '99.99%', label: 'Uptime', icon: Shield },
    { number: '24/7', label: 'Support', icon: Users },
    { number: '50+', label: 'Countries', icon: Globe }
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
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400 bg-clip-text text-transparent mb-6">
                Enterprise Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Enterprise-grade solutions designed to scale with your organization. 
                From AI platforms to global infrastructure and security.
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
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-indigo-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Enterprise Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive solutions designed to meet the complex needs of enterprise organizations
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <a href={solution.href} className="block">
                    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 h-full hover:bg-gray-700/50 transition-all duration-300 hover:scale-105">
                      <div className="w-16 h-16 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <solution.icon className="w-8 h-8 text-indigo-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">{solution.title}</h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">{solution.description}</p>
                      <ul className="space-y-2">
                        {solution.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-400">
                            <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
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
                Scale Your Enterprise
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let our enterprise experts help you build scalable solutions for your organization
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </a>
                <a
                  href="/solutions"
                  className="px-8 py-4 border border-indigo-500 text-indigo-400 font-semibold rounded-xl hover:bg-indigo-500/10 transition-all duration-300"
                >
                  View All Solutions
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}