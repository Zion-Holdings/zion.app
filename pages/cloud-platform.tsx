import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Cloud, Server, Database, Shield, Zap, 
  Globe, Cpu, Network, ArrowRight, CheckCircle, 
  Star, TrendingUp, Lock, Users
} from 'lucide-react';
import Link from 'next/link';

const CloudPlatform: React.FC = () => {
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

  const cloudServices = [
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud Migration',
      description: 'Seamless migration to cloud infrastructure with zero downtime',
      features: ['Assessment & Planning', 'Data Migration', 'Application Modernization', 'Performance Optimization'],
      price: 'From $15,000'
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: 'Multi-Cloud Management',
      description: 'Unified management across AWS, Azure, Google Cloud, and private clouds',
      features: ['Centralized Control', 'Cost Optimization', 'Security Management', 'Performance Monitoring'],
      price: 'From $2,500/month'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Cloud Database Solutions',
      description: 'Scalable, secure, and high-performance database services',
      features: ['Managed Databases', 'Auto-scaling', 'Backup & Recovery', 'Performance Tuning'],
      price: 'From $1,500/month'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Cloud Security',
      description: 'Comprehensive security for cloud environments',
      features: ['Identity Management', 'Data Encryption', 'Threat Detection', 'Compliance'],
      price: 'From $3,000/month'
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: 'Cloud Networking',
      description: 'High-performance networking solutions for cloud applications',
      features: ['Load Balancing', 'CDN Services', 'VPN Solutions', 'Network Security'],
      price: 'From $2,000/month'
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'Serverless Computing',
      description: 'Event-driven, scalable computing without server management',
      features: ['Function as a Service', 'Auto-scaling', 'Pay-per-use', 'Event Processing'],
      price: 'From $500/month'
    }
  ];

  const cloudProviders = [
    { name: 'AWS', logo: '☁️', description: 'Amazon Web Services' },
    { name: 'Azure', logo: '🔷', description: 'Microsoft Azure' },
    { name: 'Google Cloud', logo: '🔵', description: 'Google Cloud Platform' },
    { name: 'Private Cloud', logo: '🏢', description: 'On-premises Solutions' }
  ];

  const benefits = [
    'Scalability & Flexibility',
    'Cost Optimization',
    'Global Availability',
    'Security & Compliance',
    'Disaster Recovery',
    '24/7 Monitoring'
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            Cloud Platform Solutions
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            Accelerate your digital transformation with enterprise-grade cloud solutions designed for scale, security, and innovation
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <Link href="/contact" className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2">
              Start Cloud Journey <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/services" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              Explore Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Cloud Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Cloud Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From migration to management, we provide end-to-end cloud solutions that drive business growth
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {cloudServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="text-blue-600 mb-4">{service.icon}</div>
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
                <div className="text-2xl font-bold text-blue-600">{service.price}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Cloud Providers Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Multi-Cloud Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with all major cloud providers to give you the best solutions for your needs
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {cloudProviders.map((provider, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-8 text-center hover:shadow-lg transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-6xl mb-4">{provider.logo}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{provider.name}</h3>
                <p className="text-gray-600">{provider.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Cloud Benefits
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Transform your business with the power of cloud computing
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
              Ready to Scale with Cloud?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how our cloud solutions can accelerate your business transformation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2">
                Get Cloud Consultation <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/case-studies" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                View Success Stories
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default CloudPlatform;