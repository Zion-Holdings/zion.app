import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Zap, Code, Rocket, Server, Database, GitBranch, Cloud, Shield, Activity } from 'lucide-react';
import Link from 'next/link';

const DevOpsAutomationPage: React.FC = () => {
  const services = [
    {
      title: 'CI/CD Pipelines',
      description: 'Automated build, test, and deployment workflows',
      icon: <GitBranch className="w-8 h-8" />,
      features: [
        'Automated Testing',
        'Continuous Integration',
        'Continuous Deployment',
        'Release Management',
        'Rollback Capabilities',
        'Multi-Environment Support'
      ],
      href: '/mlops-starter'
    },
    {
      title: 'Infrastructure as Code',
      description: 'Manage infrastructure through code and automation',
      icon: <Code className="w-8 h-8" />,
      features: [
        'Terraform Automation',
        'CloudFormation Templates',
        'Kubernetes Management',
        'Server Provisioning',
        'Configuration Management',
        'Version Control'
      ],
      href: '/advanced-it-infrastructure-services'
    },
    {
      title: 'Monitoring & Observability',
      description: 'Comprehensive monitoring and alerting systems',
      icon: <Activity className="w-8 h-8" />,
      features: [
        'Application Performance',
        'Infrastructure Monitoring',
        'Log Aggregation',
        'Alert Management',
        'Dashboard Creation',
        'Incident Response'
      ],
      href: '/uptime-slo-monitor'
    },
    {
      title: 'Security Automation',
      description: 'Automated security scanning and compliance',
      icon: <Shield className="w-8 h-8" />,
      features: [
        'Vulnerability Scanning',
        'Security Testing',
        'Compliance Automation',
        'Access Management',
        'Audit Logging',
        'Threat Detection'
      ],
      href: '/github-compliance-bot'
    }
  ];

  const tools = [
    {
      title: 'Container Orchestration',
      description: 'Kubernetes and Docker management solutions',
      icon: <Server className="w-6 h-6" />
    },
    {
      title: 'Cloud Platforms',
      description: 'Multi-cloud deployment and management',
      icon: <Cloud className="w-6 h-6" />
    },
    {
      title: 'Database Automation',
      description: 'Automated database management and scaling',
      icon: <Database className="w-6 h-6" />
    },
    {
      title: 'API Management',
      description: 'Automated API development and deployment',
      icon: <Code className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-6">
              DevOps & Automation
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Streamline development workflows with automated DevOps solutions that accelerate delivery and improve reliability
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-200 font-medium text-lg shadow-lg hover:shadow-orange-500/25"
              >
                Get Started
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 border border-orange-500/30 text-orange-400 rounded-xl hover:bg-orange-500/10 transition-all duration-200 font-medium text-lg"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="bg-gray-900/50 backdrop-blur-xl border border-orange-500/30 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl text-white group-hover:scale-110 transition-transform duration-200">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{service.title}</h3>
              </div>
              <p className="text-gray-300 mb-6 text-lg">{service.description}</p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3 text-gray-400">
                    <Zap className="w-5 h-5 text-orange-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={service.href}
                className="inline-flex items-center space-x-2 text-orange-400 hover:text-orange-300 transition-colors duration-200 font-medium"
              >
                <span>Learn More</span>
                <Rocket className="w-5 h-5" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Tools Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            DevOps Tools & Technologies
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We leverage industry-leading tools and technologies to build robust DevOps solutions
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {tools.map((tool, index) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index + 0.6 }}
              className="bg-gray-900/30 backdrop-blur-xl border border-orange-500/20 rounded-xl p-6 text-center hover:border-orange-500/40 transition-all duration-300"
            >
              <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl text-white w-fit mx-auto mb-4">
                {tool.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{tool.title}</h3>
              <p className="text-gray-400 text-sm">{tool.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Benefits of DevOps Automation
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your development process with automated DevOps solutions
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="bg-gray-900/30 backdrop-blur-xl border border-orange-500/20 rounded-xl p-8 text-center">
            <div className="p-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl text-white w-fit mx-auto mb-6">
              <Rocket className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Faster Delivery</h3>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li>Automated Deployments</li>
              <li>Reduced Manual Errors</li>
              <li>Faster Release Cycles</li>
              <li>Streamlined Workflows</li>
              <li>Continuous Integration</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/30 backdrop-blur-xl border border-orange-500/20 rounded-xl p-8 text-center">
            <div className="p-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl text-white w-fit mx-auto mb-6">
              <Shield className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Improved Reliability</h3>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li>Automated Testing</li>
              <li>Rollback Capabilities</li>
              <li>Monitoring & Alerting</li>
              <li>Incident Response</li>
              <li>Performance Optimization</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/30 backdrop-blur-xl border border-orange-500/20 rounded-xl p-8 text-center">
            <div className="p-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl text-white w-fit mx-auto mb-6">
              <Settings className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Cost Optimization</h3>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li>Resource Optimization</li>
              <li>Automated Scaling</li>
              <li>Reduced Downtime</li>
              <li>Efficient Workflows</li>
              <li>Cloud Cost Management</li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-2xl p-12"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Automate Your DevOps?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Our DevOps automation experts are ready to help you build efficient, reliable, and scalable development workflows that accelerate your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-200 font-medium text-lg shadow-lg hover:shadow-orange-500/25"
            >
              Start DevOps Transformation
            </Link>
            <Link
              href="/case-studies"
              className="px-8 py-4 border border-orange-500/30 text-orange-400 rounded-xl hover:bg-orange-500/10 transition-all duration-200 font-medium text-lg"
            >
              View DevOps Case Studies
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DevOpsAutomationPage;