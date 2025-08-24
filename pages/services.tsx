import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Rocket, Brain, Cloud, Shield, Database, Globe, 
  Zap, Cpu, Lock, Users, Code, BarChart3,
  ArrowRight, CheckCircle, Star, TrendingUp
} from 'lucide-react';

export default function ServicesPage() {
  const serviceCategories = [
    {
      title: 'Micro SaaS Solutions',
      description: 'Scalable, focused software solutions for specific business needs',
      icon: Rocket,
      color: 'from-blue-500 to-cyan-500',
      services: [
        'Custom Software Development',
        'API Integration & Development',
        'Cloud Deployment & Management',
        '24/7 Technical Support',
        'Performance Optimization',
        'Scalability Solutions'
      ],
      link: '/services/micro-saas'
    },
    {
      title: 'AI & Machine Learning',
      description: 'Cutting-edge artificial intelligence solutions for business automation',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      services: [
        'Predictive Analytics',
        'Natural Language Processing',
        'Computer Vision Solutions',
        'Process Automation',
        'AI Chatbots & Assistants',
        'Machine Learning Models'
      ],
      link: '/services/ai-ml'
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Robust cloud solutions for scalability and reliability',
      icon: Cloud,
      color: 'from-green-500 to-blue-500',
      services: [
        'AWS/Azure/GCP Management',
        'Container Orchestration',
        'Serverless Architecture',
        'Disaster Recovery',
        'Cloud Migration',
        'Cost Optimization'
      ],
      link: '/services/cloud-infrastructure'
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your digital assets',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      services: [
        'Threat Detection & Response',
        'Penetration Testing',
        'Compliance Auditing',
        'Incident Response',
        'Security Training',
        'Vulnerability Assessment'
      ],
      link: '/services/cybersecurity'
    },
    {
      title: 'Data Analytics',
      description: 'Transform your data into actionable business insights',
      icon: BarChart3,
      color: 'from-indigo-500 to-purple-500',
      services: [
        'Business Intelligence',
        'Data Visualization',
        'Real-time Analytics',
        'Predictive Modeling',
        'Data Warehousing',
        'ETL Pipeline Development'
      ],
      link: '/services/data-analytics'
    },
    {
      title: 'DevOps & Automation',
      description: 'Streamline development and operations with modern tools',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      services: [
        'CI/CD Pipeline Setup',
        'Infrastructure as Code',
        'Monitoring & Alerting',
        'Performance Testing',
        'Deployment Automation',
        'DevOps Consulting'
      ],
      link: '/services/devops'
    }
  ];

  const technologies = [
    { name: 'React & Next.js', icon: '⚛️', description: 'Modern web development' },
    { name: 'Node.js & Python', icon: '🐍', description: 'Backend & AI development' },
    { name: 'AWS & Azure', icon: '☁️', description: 'Cloud infrastructure' },
    { name: 'Docker & Kubernetes', icon: '🐳', description: 'Container orchestration' },
    { name: 'TensorFlow & PyTorch', icon: '🤖', description: 'Machine learning' },
    { name: 'Blockchain & Web3', icon: '⛓️', description: 'Decentralized solutions' }
  ];

  const stats = [
    { value: '200+', label: 'Services Available', icon: Rocket },
    { value: '99.99%', label: 'Uptime Guarantee', icon: Shield },
    { value: '24/7', label: 'Support Available', icon: Users },
    { value: '21', label: 'Day Free Trial', icon: Star }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <Head>
        <title>Services - Zion Tech Group | Comprehensive Technology Solutions</title>
        <meta name="description" content="Explore our comprehensive range of technology services including micro SaaS solutions, AI & ML, cloud infrastructure, cybersecurity, and more. Transform your business with our expertise." />
        <meta name="keywords" content="technology services, micro SaaS, AI services, cloud infrastructure, cybersecurity, data analytics, DevOps, Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Services - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive technology services for modern businesses" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/services" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Head>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-white mb-8"
            >
              Our <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Services
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              Discover our comprehensive suite of cutting-edge technology services designed to transform your business 
              and drive innovation across all industries.
            </motion.p>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Service <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Categories</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer a comprehensive range of technology services to meet all your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-lg p-8 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-blue-500"
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${category.color} mb-6`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
                <p className="text-gray-300 mb-6">{category.description}</p>
                <ul className="space-y-3 mb-8">
                  {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="text-sm text-gray-400 flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
                <Link 
                  href={category.link}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Cutting-Edge <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Technologies</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We leverage the latest technologies to deliver exceptional results and stay ahead of the curve
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-all duration-300"
              >
                <div className="text-4xl mb-3" aria-hidden="true">{tech.icon}</div>
                <div className="text-white font-medium mb-2">{tech.name}</div>
                <div className="text-sm text-gray-400">{tech.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto"
          >
            Let&apos;s discuss how our technology services can transform your business and drive growth
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 font-bold py-4 px-8 rounded-full text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50"
            >
              Contact Us
            </Link>
            <Link 
              href="/signup" 
              className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50"
            >
              Start Free Trial
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
