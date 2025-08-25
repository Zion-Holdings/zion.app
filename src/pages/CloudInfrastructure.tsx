import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Server, 
  Shield, 
  Zap, 
  Database, 
  Globe, 
  ArrowRight, 
  CheckCircle, 
  Play,
  Code,
  BarChart3,
  MessageSquare,
  Phone,
  Mail,
  Lock,
  Cpu,
  HardDrive,
  Wifi,
  TrendingUp,
  DollarSign
} from 'lucide-react';

export default function CloudInfrastructure() {
  const [selectedProvider, setSelectedProvider] = useState('aws');

  const cloudProviders = [
    {
      id: 'aws',
      name: 'Amazon Web Services',
      logo: 'AWS',
      description: 'Leading cloud platform with comprehensive services',
      features: ['EC2, S3, Lambda', 'RDS, DynamoDB', 'CloudFront, Route 53'],
      icon: Cloud
    },
    {
      id: 'azure',
      name: 'Microsoft Azure',
      logo: 'Azure',
      description: 'Enterprise-grade cloud solutions',
      features: ['Virtual Machines', 'Azure SQL', 'App Service, Functions'],
      icon: Server
    },
    {
      id: 'gcp',
      name: 'Google Cloud Platform',
      logo: 'GCP',
      description: 'Innovative cloud technologies',
      features: ['Compute Engine', 'Cloud Storage', 'BigQuery, AI Platform'],
      icon: Globe
    }
  ];

  const cloudServices = [
    {
      title: 'Infrastructure as Code',
      description: 'Automate cloud infrastructure deployment and management',
      icon: Code,
      features: ['Terraform', 'CloudFormation', 'ARM Templates', 'Deployment Automation']
    },
    {
      title: 'Container Orchestration',
      description: 'Manage and scale containerized applications',
      icon: Cpu,
      features: ['Kubernetes', 'Docker', 'ECS/EKS', 'Azure AKS', 'GKE']
    },
    {
      title: 'Serverless Computing',
      description: 'Build and run applications without managing servers',
      icon: Zap,
      features: ['AWS Lambda', 'Azure Functions', 'Cloud Functions', 'Event-driven Architecture']
    },
    {
      title: 'Database Solutions',
      description: 'Managed database services for optimal performance',
      icon: Database,
      features: ['RDS, Aurora', 'Azure SQL', 'Cloud SQL', 'NoSQL Options']
    },
    {
      title: 'Security & Compliance',
      description: 'Enterprise-grade security and compliance features',
      icon: Shield,
      features: ['IAM & Access Control', 'Encryption', 'Compliance Frameworks', 'Security Monitoring']
    },
    {
      title: 'Monitoring & Analytics',
      description: 'Comprehensive monitoring and observability',
      icon: BarChart3,
      features: ['CloudWatch', 'Azure Monitor', 'Stackdriver', 'Log Management']
    }
  ];

  const benefits = [
    { title: 'Scalability', description: 'Scale resources up or down based on demand', icon: TrendingUp },
    { title: 'Cost Optimization', description: 'Pay only for what you use with smart resource management', icon: DollarSign },
    { title: 'High Availability', description: '99.9%+ uptime with multi-region deployments', icon: Shield },
    { title: 'Security', description: 'Enterprise-grade security with compliance certifications', icon: Lock },
    { title: 'Performance', description: 'Global CDN and edge computing for optimal speed', icon: Zap },
    { title: 'Disaster Recovery', description: 'Automated backup and recovery solutions', icon: HardDrive }
  ];

  const stats = [
    { number: '99.9%', label: 'Uptime SLA', icon: Shield },
    { number: '50%', label: 'Cost Reduction', icon: TrendingUp },
    { number: '10x', label: 'Faster Deployment', icon: Zap },
    { number: '24/7', label: 'Monitoring', icon: Wifi }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center">
                <Cloud className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Cloud Infrastructure
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                {' '}That Scales{' '}
              </span>
              With Your Business
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Build, deploy, and manage robust cloud infrastructure across AWS, Azure, and Google Cloud. 
              Our expertise ensures optimal performance, security, and cost efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
              >
                Get Cloud Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <button className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-200 border border-white/20">
                <Play className="w-5 h-5 mr-2" />
                View Architecture
              </button>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="text-center p-6 bg-white/10 backdrop-blur-md rounded-lg border border-white/20"
              >
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Cloud Providers Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Multi-Cloud Expertise</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We work with all major cloud providers to give you the best solution for your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {cloudProviders.map((provider, index) => (
              <motion.button
                key={provider.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedProvider(provider.id)}
                className={`p-6 rounded-lg transition-all duration-200 text-left ${
                  selectedProvider === provider.id
                    ? 'bg-gradient-to-r from-cyan-400/20 to-purple-600/20 border-cyan-400/50'
                    : 'bg-white/10 hover:bg-white/20 border-white/20'
                } border`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 rounded-lg flex items-center justify-center ${
                    selectedProvider === provider.id
                      ? 'bg-gradient-to-br from-cyan-400 to-purple-600'
                      : 'bg-white/20'
                  }`}>
                    <provider.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{provider.name}</h3>
                    <p className="text-gray-300 text-sm mb-3">{provider.description}</p>
                    <ul className="space-y-1">
                      {provider.features.map((feature, idx) => (
                        <li key={idx} className="text-xs text-gray-400">• {feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Provider Details */}
          <motion.div
            key={selectedProvider}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-8 bg-white/10 backdrop-blur-md rounded-lg border border-white/20"
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">
                {cloudProviders.find(p => p.id === selectedProvider)?.name} Solutions
              </h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Comprehensive cloud infrastructure solutions tailored for {cloudProviders.find(p => p.id === selectedProvider)?.name} 
                with best practices, security, and cost optimization.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cloudServices.map((service, index) => (
                <div key={service.title} className="p-6 bg-white/5 rounded-lg border border-white/10">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-3">{service.title}</h4>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-xs text-gray-400">• {feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Why Choose Cloud Infrastructure?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Modern cloud solutions provide unprecedented flexibility, security, and cost efficiency
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:border-cyan-400/50 transition-all duration-200 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-400/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Move to the Cloud?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's design and implement a cloud infrastructure that grows with your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
              >
                Start Cloud Migration
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-200 border border-white/20"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 bg-white/10 backdrop-blur-md rounded-lg border border-white/20"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-gray-300">+1 (302) 464-0950</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 bg-white/10 backdrop-blur-md rounded-lg border border-white/20"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <p className="text-gray-300">kleber@ziontechgroup.com</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 bg-white/10 backdrop-blur-md rounded-lg border border-white/20"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-gray-300">Delaware, United States</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}