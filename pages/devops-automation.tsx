import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Settings, GitBranch, Server, Database, Shield, Zap, 
  Globe, Cpu, Network, ArrowRight, CheckCircle, 
  Star, TrendingUp, Lock, Users, Workflow
} from 'lucide-react';
import Link from 'next/link';

const DevOpsAutomation: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const devopsServices = [
    {
      icon: <GitBranch className="w-8 h-8" />,
      title: 'CI/CD Pipelines',
      description: 'Automated build, test, and deployment workflows',
      features: ['Automated Testing', 'Code Quality Gates', 'Deployment Automation', 'Rollback Capabilities'],
      price: 'From $3,500/month'
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: 'Infrastructure as Code',
      description: 'Manage infrastructure through code and automation',
      features: ['Terraform/CloudFormation', 'Configuration Management', 'Environment Provisioning', 'Version Control'],
      price: 'From $4,000/month'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'DevSecOps',
      description: 'Integrate security into your DevOps pipeline',
      features: ['Security Scanning', 'Vulnerability Management', 'Compliance Automation', 'Security Testing'],
      price: 'From $4,500/month'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Database DevOps',
      description: 'Automate database deployments and management',
      features: ['Migration Automation', 'Schema Management', 'Data Versioning', 'Backup Automation'],
      price: 'From $3,000/month'
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: 'Process Automation',
      description: 'Automate repetitive tasks and workflows',
      features: ['Task Automation', 'Workflow Orchestration', 'Integration Automation', 'Monitoring'],
      price: 'From $2,500/month'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Performance Monitoring',
      description: 'Real-time monitoring and alerting systems',
      features: ['Application Monitoring', 'Infrastructure Monitoring', 'Alert Management', 'Performance Analytics'],
      price: 'From $2,000/month'
    }
  ];

  const tools = [
    { name: 'Jenkins', logo: '🔧', description: 'CI/CD Automation' },
    { name: 'Docker', logo: '🐳', description: 'Containerization' },
    { name: 'Kubernetes', logo: '☸️', description: 'Container Orchestration' },
    { name: 'Terraform', logo: '🏗️', description: 'Infrastructure as Code' },
    { name: 'Ansible', logo: '⚡', description: 'Configuration Management' },
    { name: 'Prometheus', logo: '📊', description: 'Monitoring & Alerting' }
  ];

  const benefits = [
    'Faster Deployments',
    'Reduced Errors',
    'Improved Collaboration',
    'Cost Optimization',
    'Better Security',
    'Scalable Operations'
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-orange-600 via-red-600 to-purple-700 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            DevOps & Automation
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-orange-100 mb-8 max-w-4xl mx-auto"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            Streamline your development and operations with intelligent automation that accelerates delivery and improves quality
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <Link href="/contact" className="bg-white hover:bg-gray-100 text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2">
              Start Automation <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/case-studies" className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              View Success Stories
            </Link>
          </motion.div>
        </div>
      </section>

      {/* DevOps Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive DevOps Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From CI/CD to infrastructure automation, we provide end-to-end DevOps solutions that drive efficiency and innovation
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {devopsServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="text-orange-600 mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-2xl font-bold text-orange-600">{service.price}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Industry-Standard Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage proven tools and technologies to build robust DevOps solutions
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-orange-50 to-red-100 rounded-lg p-8 text-center hover:shadow-lg transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-6xl mb-4">{tool.logo}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{tool.name}</h3>
                <p className="text-gray-600">{tool.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-orange-900 to-red-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              DevOps Benefits
            </h2>
            <p className="text-xl text-orange-200 max-w-3xl mx-auto">
              Transform your development and operations with automation and best practices
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={itemVariants}
              >
                <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Automate Your DevOps?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how our DevOps automation can accelerate your development and operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2">
                Get DevOps Consultation <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/services" className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                Explore All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default DevOpsAutomation;