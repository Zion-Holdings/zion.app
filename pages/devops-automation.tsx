import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import {
  Zap, Cpu, Server, GitBranch, Shield, Cloud,
  ArrowRight, CheckCircle, Star, Infinity, Sparkles,
  Clock, Users, Building, Target, Award, Code,
  Database, Globe, Lock, RefreshCw, Monitor
} from 'lucide-react';

const DevOpsAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Automated CI/CD',
      description: 'Streamlined continuous integration and deployment pipelines for faster releases',
      benefits: ['Automated testing', 'Zero-downtime deployments', 'Rollback capabilities', 'Multi-environment support']
    },
    {
      icon: Cpu,
      title: 'Infrastructure as Code',
      description: 'Manage and provision infrastructure through code for consistency and scalability',
      benefits: ['Terraform support', 'CloudFormation templates', 'Version control', 'Automated provisioning']
    },
    {
      icon: Shield,
      title: 'Security Automation',
      description: 'Automated security scanning and compliance checks throughout the development lifecycle',
      benefits: ['Vulnerability scanning', 'Compliance automation', 'Security testing', 'Policy enforcement']
    },
    {
      icon: Cloud,
      title: 'Multi-Cloud Management',
      description: 'Seamless orchestration across AWS, Azure, Google Cloud, and hybrid environments',
      benefits: ['Cloud agnostic', 'Cost optimization', 'Unified monitoring', 'Disaster recovery']
    }
  ];

  const solutions = [
    {
      title: 'CI/CD Pipeline Automation',
      description: 'End-to-end automation of build, test, and deployment processes',
      features: ['Git integration', 'Automated testing', 'Deployment automation', 'Pipeline monitoring'],
      icon: GitBranch
    },
    {
      title: 'Infrastructure Automation',
      description: 'Automate infrastructure provisioning, scaling, and management',
      features: ['Auto-scaling', 'Load balancing', 'Resource optimization', 'Cost management'],
      icon: Server
    },
    {
      title: 'Monitoring & Observability',
      description: 'Comprehensive monitoring and alerting for all systems and applications',
      features: ['Real-time metrics', 'Log aggregation', 'Alert management', 'Performance insights'],
      icon: Monitor
    },
    {
      title: 'Security & Compliance',
      description: 'Automated security scanning and compliance validation',
      features: ['Vulnerability assessment', 'Compliance reporting', 'Security testing', 'Policy automation'],
      icon: Shield
    }
  ];

  const tools = [
    {
      name: 'Jenkins',
      description: 'Open-source automation server for CI/CD',
      icon: RefreshCw
    },
    {
      name: 'Terraform',
      description: 'Infrastructure as code tool for cloud provisioning',
      icon: Code
    },
    {
      name: 'Kubernetes',
      description: 'Container orchestration platform',
      icon: Globe
    },
    {
      name: 'Docker',
      description: 'Containerization platform for applications',
      icon: Database
    },
    {
      name: 'Ansible',
      description: 'Configuration management and automation',
      icon: Zap
    },
    {
      name: 'Prometheus',
      description: 'Monitoring and alerting toolkit',
      icon: Monitor
    }
  ];

  const benefits = [
    {
      title: 'Faster Deployments',
      description: 'Reduce deployment time from days to minutes with automated pipelines',
      icon: Clock
    },
    {
      title: 'Improved Reliability',
      description: 'Minimize human errors and ensure consistent deployments',
      icon: Shield
    },
    {
      title: 'Cost Optimization',
      description: 'Automate resource management and reduce infrastructure costs',
      icon: Target
    },
    {
      title: 'Enhanced Security',
      description: 'Automated security checks and compliance validation',
      icon: Lock
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-blue-900/20 to-cyan-900/20" />
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/20 text-green-400 text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              DevOps Automation
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6">
              DevOps Automation
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Streamline your development and operations with intelligent automation. 
              From CI/CD pipelines to infrastructure management, accelerate your delivery while maintaining quality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Powerful Automation Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our DevOps automation platform combines industry-leading tools with intelligent workflows
              to deliver faster, more reliable software deployments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 mb-6">
                  <feature.icon className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Automation Solutions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive DevOps automation solutions designed to accelerate your development lifecycle.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-500/20 to-green-500/20 border border-blue-500/30 mr-4">
                    <solution.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{solution.title}</h3>
                </div>
                <p className="text-gray-400 mb-6 leading-relaxed">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <Star className="w-4 h-4 text-yellow-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Supported Tools & Technologies</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Integration with industry-leading DevOps tools and platforms.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 mb-6">
                  <tool.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{tool.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{tool.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Key Benefits</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your development and operations with intelligent automation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mr-4">
                    <benefit.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{benefit.title}</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Automate Your DevOps?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Discover how our DevOps automation platform can accelerate your development
              and improve your operational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold hover:from-green-600 hover:to-blue-600 transition-all duration-200 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/demo"
                className="inline-flex items-center px-8 py-4 rounded-xl border border-green-500/50 text-green-400 font-semibold hover:bg-green-500/10 transition-all duration-200"
              >
                Request Demo
                <Zap className="w-5 h-5 ml-2" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default DevOpsAutomationPage;