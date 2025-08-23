import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, GitBranch, Server, Shield, Cpu, Brain, 
  Globe, Target, CheckCircle, ArrowRight, Users,
  Rocket, Star, Database, Network, BarChart3, GitCommit,
  Workflow, Cloud, Lock, RefreshCw, TrendingUp, ToggleLeft
} from 'lucide-react';
import Link from 'next/link';

const DevOpsAutomation: React.FC = () => {
  const automationServices = [
    {
      title: 'CI/CD Pipeline Automation',
      description: 'End-to-end automation of build, test, and deployment processes with intelligent orchestration',
      features: ['Automated Testing', 'Smart Deployment', 'Rollback Capabilities', 'Multi-environment Support'],
      icon: <GitBranch className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Infrastructure as Code',
      description: 'Manage and provision infrastructure using declarative configuration files and automation',
      features: ['Terraform Integration', 'Cloud Agnostic', 'Version Control', 'Automated Provisioning'],
      icon: <Server className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Container Orchestration',
      description: 'Automated deployment, scaling, and management of containerized applications',
      features: ['Kubernetes Native', 'Auto-scaling', 'Service Discovery', 'Load Balancing'],
      icon: <Cpu className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Monitoring & Observability',
      description: 'Comprehensive monitoring with automated alerting and intelligent incident response',
      features: ['Real-time Metrics', 'Automated Alerts', 'Log Aggregation', 'Performance Analytics'],
      icon: <BarChart3 className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Security Automation',
      description: 'Automated security scanning, compliance checks, and vulnerability management',
      features: ['SAST/DAST Scanning', 'Compliance Automation', 'Threat Detection', 'Security Patching'],
      icon: <Shield className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Workflow Automation',
      description: 'Streamline development workflows with intelligent automation and collaboration tools',
      features: ['Code Review Automation', 'Release Management', 'Team Collaboration', 'Process Optimization'],
      icon: <Workflow className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const platformFeatures = [
    {
      title: 'AI-Powered Automation',
      description: 'Machine learning algorithms that continuously optimize and improve automation processes',
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: 'Multi-Cloud Support',
      description: 'Deploy and manage applications across multiple cloud providers seamlessly',
      icon: <Cloud className="w-6 h-6" />
    },
    {
      title: 'Zero-Downtime Deployments',
      description: 'Advanced deployment strategies ensure continuous service availability',
      icon: <RefreshCw className="w-6 h-6" />
    },
    {
      title: 'Security First',
      description: 'Built-in security scanning and compliance automation at every stage',
      icon: <Lock className="w-6 h-6" />
    },
    {
      title: 'Real-time Monitoring',
      description: 'Live monitoring with instant alerts and automated incident response',
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: 'Scalable Architecture',
      description: 'Auto-scaling infrastructure that grows with your application needs',
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  const useCases = [
    {
      title: 'Microservices Deployment',
      description: 'Automated deployment and scaling of microservices architecture',
      icon: <Server className="w-8 h-8" />
    },
    {
      title: 'Multi-Environment Management',
      description: 'Consistent deployment across development, staging, and production',
      icon: <GitBranch className="w-8 h-8" />
    },
    {
      title: 'Database Migrations',
      description: 'Automated database schema updates and data migrations',
      icon: <Database className="w-8 h-8" />
    },
    {
      title: 'Security Compliance',
      description: 'Automated security checks and compliance validation',
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: 'Performance Optimization',
      description: 'Continuous performance monitoring and optimization',
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: 'Disaster Recovery',
      description: 'Automated backup and recovery procedures',
      icon: <RefreshCw className="w-8 h-8" />
    }
  ];

  const tools = [
    'Git & GitHub Actions',
    'Jenkins & GitLab CI',
    'Terraform & Ansible',
    'Kubernetes & Docker',
    'Prometheus & Grafana',
    'ELK Stack',
    'SonarQube & Snyk',
    'Jira & Confluence'
  ];

  const benefits = [
    {
      number: '90%',
      label: 'Faster Deployments',
      description: 'Automated pipelines reduce deployment time from hours to minutes'
    },
    {
      number: '75%',
      label: 'Fewer Errors',
      description: 'Automated testing and validation eliminate human error'
    },
    {
      number: '60%',
      label: 'Cost Reduction',
      description: 'Eliminate manual processes and reduce operational overhead'
    },
    {
      number: '99.9%',
      label: 'Uptime',
      description: 'Automated monitoring and recovery ensure maximum availability'
    }
  ];

  const deploymentStrategies = [
    {
      name: 'Blue-Green Deployment',
      description: 'Zero-downtime deployments with instant rollback capability',
      icon: <RefreshCw className="w-6 h-6" />
    },
    {
      name: 'Canary Releases',
      description: 'Gradual rollout to minimize risk and validate changes',
      icon: <Target className="w-6 h-6" />
    },
    {
      name: 'Rolling Updates',
      description: 'Seamless updates with continuous service availability',
      icon: <GitCommit className="w-6 h-6" />
    },
    {
      name: 'Feature Flags',
      description: 'Safe feature releases with instant enable/disable capability',
      icon: <ToggleLeft className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              DevOps Automation
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Streamline your development and operations with AI-powered automation, intelligent CI/CD pipelines, 
              and seamless infrastructure management. Deploy faster, safer, and more reliably.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#services" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Explore Services
              </Link>
              <Link href="/contact" className="border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                Get Started
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 360] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-20 left-10 text-cyan-400/20"
          >
            <Zap className="w-16 h-16" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 25, 0], scale: [1, 1.3, 1] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-40 right-20 text-purple-400/20"
          >
            <GitBranch className="w-12 h-12" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [360, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-40 left-20 text-blue-400/20"
          >
            <Server className="w-14 h-14" />
          </motion.div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our DevOps Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of DevOps with AI-powered automation and intelligent orchestration
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platformFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Services */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/5 to-purple-500/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Automation Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive DevOps automation solutions designed for modern development teams
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {automationServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-xl overflow-hidden hover:border-cyan-500/40 transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center`}>
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment Strategies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Advanced Deployment Strategies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Deploy with confidence using proven strategies that ensure zero downtime and instant rollback
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {deploymentStrategies.map((strategy, index) => (
              <motion.div
                key={strategy.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl border border-cyan-500/20 rounded-xl p-6 text-center hover:border-cyan-500/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  {strategy.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{strategy.name}</h3>
                <p className="text-gray-300 text-sm">{strategy.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/5 to-purple-500/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our DevOps automation platform powers development teams across industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/40 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-gray-300">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Integration */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Integrate with Your Tools
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Seamlessly integrate with your existing development and operations tools
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl border border-cyan-500/20 rounded-xl p-6 text-center hover:border-cyan-500/40 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <GitBranch className="w-6 h-6" />
                </div>
                <p className="text-gray-300 text-sm">{tool}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Metrics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/5 to-purple-500/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Teams using our DevOps automation platform see dramatic improvements in efficiency and reliability
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{benefit.number}</div>
                <div className="text-lg font-semibold text-cyan-400 mb-2">{benefit.label}</div>
                <div className="text-gray-300 text-sm">{benefit.description}</div>
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
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Automate Your DevOps?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform your development and operations with intelligent automation. 
              Deploy faster, safer, and more reliably than ever before.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </Link>
              <Link href="/case-studies" className="border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DevOpsAutomation;