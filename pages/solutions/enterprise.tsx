import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Building, Users, Target, Award, ArrowRight, CheckCircle,
  Brain, Shield, Cloud, Database, Network, Settings,
  Zap, Globe, Lock, Server, Cpu, Atom, Rocket,
  TrendingUp, BarChart3, Lightbulb, Star, Clock, ShoppingCart
} from 'lucide-react';

const EnterpriseSolutionsPage: React.FC = () => {
  const enterpriseFeatures = [
    {
      title: 'Scalable Architecture',
      description: 'Built to handle enterprise-scale workloads with automatic scaling and load balancing',
      icon: Building,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Enterprise Security',
      description: 'Multi-layered security with SOC 2 compliance, encryption, and advanced threat protection',
      icon: Shield,
      color: 'from-red-500 to-red-600'
    },
    {
      title: 'Global Deployment',
      description: 'Multi-region deployment with edge computing capabilities for global performance',
      icon: Globe,
      color: 'from-green-500 to-green-600'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock enterprise support with dedicated account managers',
      icon: Clock,
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const enterpriseSolutions = [
    {
      title: 'Enterprise AI Platform',
      description: 'Comprehensive AI platform designed for enterprise-scale operations with advanced consciousness capabilities',
      category: 'AI & Machine Learning',
      features: ['Multi-tenant architecture', 'Advanced security', 'Scalable processing', 'Custom model training'],
      icon: Brain,
      color: 'from-cyan-500 to-cyan-600',
      href: '/services/enterprise-ai-platform'
    },
    {
      title: 'Quantum Enterprise Infrastructure',
      description: 'Quantum-enhanced infrastructure solutions for enterprise computing and data processing',
      category: 'Quantum Computing',
      features: ['Quantum encryption', 'Hybrid quantum-classical', 'Enterprise integration', 'Performance optimization'],
      icon: Atom,
      color: 'from-purple-500 to-purple-600',
      href: '/services/quantum-enterprise-infrastructure'
    },
    {
      title: 'Enterprise Cybersecurity Suite',
      description: 'Comprehensive cybersecurity solution with AI-powered threat detection and response',
      category: 'Cybersecurity',
      features: ['Threat intelligence', 'Automated response', 'Compliance tools', 'Security analytics'],
      icon: Shield,
      color: 'from-red-500 to-red-600',
      href: '/services/enterprise-cybersecurity-suite'
    },
    {
      title: 'Cloud Infrastructure Management',
      description: 'Enterprise-grade cloud infrastructure with autonomous management and optimization',
      category: 'Cloud & Infrastructure',
      features: ['Multi-cloud support', 'Auto-scaling', 'Cost optimization', 'Performance monitoring'],
      icon: Cloud,
      color: 'from-blue-500 to-blue-600',
      href: '/services/cloud-infrastructure-management'
    },
    {
      title: 'Enterprise Data Analytics',
      description: 'Advanced analytics platform for enterprise data processing and business intelligence',
      category: 'Data & Analytics',
      features: ['Real-time processing', 'Advanced analytics', 'Data governance', 'Business intelligence'],
      icon: BarChart3,
      color: 'from-green-500 to-green-600',
      href: '/services/enterprise-data-analytics'
    },
    {
      title: 'Autonomous DevOps Platform',
      description: 'AI-powered DevOps automation for enterprise software development and deployment',
      category: 'DevOps & Automation',
      features: ['CI/CD automation', 'Infrastructure as code', 'Monitoring & alerting', 'Performance optimization'],
      icon: Zap,
      color: 'from-yellow-500 to-yellow-600',
      href: '/services/autonomous-devops-platform'
    }
  ];

  const enterpriseBenefits = [
    {
      title: 'Cost Optimization',
      description: 'Reduce operational costs by up to 40% through intelligent automation and resource optimization',
      icon: TrendingUp,
      metric: '40%'
    },
    {
      title: 'Performance Improvement',
      description: 'Achieve up to 10x performance improvements with quantum-enhanced computing and AI optimization',
      icon: Zap,
      metric: '10x'
    },
    {
      title: 'Security Enhancement',
      description: 'Strengthen security posture with 99.99% threat detection rate and automated response',
      icon: Shield,
      metric: '99.99%'
    },
    {
      title: 'Scalability',
      description: 'Scale from startup to enterprise with seamless growth and automatic resource management',
      icon: Building,
      metric: 'Unlimited'
    }
  ];

  const industries = [
    {
      name: 'Financial Services',
      description: 'Banking, insurance, and fintech solutions with regulatory compliance',
      icon: TrendingUp,
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'Healthcare',
      description: 'AI-powered healthcare solutions with HIPAA compliance and patient data security',
      icon: Shield,
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Manufacturing',
      description: 'Smart manufacturing with IoT integration and predictive maintenance',
      icon: Cpu,
      color: 'from-purple-500 to-purple-600'
    },
    {
      name: 'Retail & E-commerce',
      description: 'Omnichannel retail solutions with AI-powered customer insights',
      icon: ShoppingCart,
      color: 'from-orange-500 to-orange-600'
    },
    {
      name: 'Energy & Utilities',
      description: 'Smart grid management and renewable energy optimization',
      icon: Zap,
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      name: 'Government',
      description: 'Secure government solutions with FedRAMP compliance and advanced security',
      icon: Building,
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <>
      <Head>
        <title>Enterprise Solutions - Zion Tech Group</title>
        <meta name="description" content="Enterprise-grade technology solutions designed for large-scale implementations. Scalable, secure, and optimized for enterprise needs." />
        <meta name="keywords" content="enterprise solutions, enterprise technology, scalable solutions, enterprise AI, enterprise security, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/solutions/enterprise" />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-purple-900/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]"></div>
          
          <div className="relative max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
                Enterprise Solutions
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Scalable, secure, and intelligent technology solutions designed for enterprise-scale operations. 
                Transform your business with our revolutionary AI, quantum computing, and autonomous systems.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                  Get Enterprise Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link href="/solutions" className="inline-flex items-center px-6 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300">
                  View All Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enterprise Features */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Built for Enterprise</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our solutions are designed from the ground up to meet enterprise requirements for scale, security, and performance
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {enterpriseFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl mb-6`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise Solutions */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Enterprise Solutions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions designed for enterprise-scale operations and growth
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {enterpriseSolutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden group"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${solution.color} rounded-lg`}>
                        <solution.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                        {solution.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {solution.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{solution.description}</p>
                    <ul className="space-y-2 mb-6">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link href={solution.href} className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 group">
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise Benefits */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Enterprise Benefits</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Measurable improvements that drive business value and competitive advantage
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {enterpriseBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="text-4xl font-bold text-cyan-400 mb-4">{benefit.metric}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Industries We Serve</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our enterprise solutions are tailored for specific industry requirements and compliance needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${industry.color} rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <industry.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {industry.name}
                  </h3>
                  <p className="text-gray-400">{industry.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Enterprise?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join leading enterprises already leveraging our revolutionary technology solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                  Schedule Enterprise Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link href="/case-studies" className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300">
                  View Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default EnterpriseSolutionsPage;