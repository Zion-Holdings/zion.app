import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Server, Database, Cloud, Shield, Zap, 
  Users, Building, Globe, Cpu, Network,
  ArrowRight, CheckCircle, Star, TrendingUp
} from 'lucide-react';
import Link from 'next/link';

const EnterpriseITSolutions: React.FC = () => {
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

  const enterpriseServices = [
    {
      icon: <Server className="w-8 h-8" />,
      title: 'Enterprise Infrastructure',
      description: 'Scalable, secure, and high-performance infrastructure solutions',
      features: ['Cloud Migration', 'Data Center Optimization', 'Network Architecture', 'Disaster Recovery'],
      price: 'Custom Pricing'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Data Management & Analytics',
      description: 'Comprehensive data solutions for enterprise insights',
      features: ['Big Data Analytics', 'Data Warehousing', 'Business Intelligence', 'Data Governance'],
      price: 'From $5,000/month'
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Multi-Cloud Solutions',
      description: 'Hybrid and multi-cloud strategies for optimal performance',
      features: ['Cloud Strategy', 'Multi-Cloud Management', 'Cost Optimization', 'Security & Compliance'],
      price: 'From $3,500/month'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Enterprise Security',
      description: 'Comprehensive security solutions for modern enterprises',
      features: ['Zero Trust Architecture', 'Threat Detection', 'Compliance Management', 'Security Audits'],
      price: 'From $4,500/month'
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'AI & Automation',
      description: 'Intelligent automation for enterprise processes',
      features: ['Process Automation', 'AI Integration', 'Machine Learning', 'Predictive Analytics'],
      price: 'From $6,000/month'
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation consulting',
      features: ['Strategy Development', 'Technology Roadmap', 'Change Management', 'Implementation Support'],
      price: 'Custom Pricing'
    }
  ];

  const industries = [
    'Healthcare', 'Finance', 'Manufacturing', 'Retail', 'Government', 'Education', 'Energy', 'Transportation'
  ];

  const benefits = [
    '24/7 Support & Monitoring',
    'Scalable Solutions',
    'Compliance & Security',
    'Cost Optimization',
    'Performance Optimization',
    'Future-Proof Technology'
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            Enterprise IT Solutions
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-blue-200 mb-8 max-w-4xl mx-auto"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            Transform your enterprise with cutting-edge technology solutions designed for scale, security, and innovation
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2">
              Get Started <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/case-studies" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              View Case Studies
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Enterprise Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From infrastructure to innovation, we provide end-to-end solutions that drive business transformation
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {enterpriseServices.map((service, index) => (
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

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Industry Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We serve enterprises across diverse industries with tailored solutions and deep domain knowledge
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <Building className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900">{industry}</h3>
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
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              We deliver enterprise-grade solutions with the agility and innovation of a startup
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
              Ready to Transform Your Enterprise?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how our enterprise IT solutions can drive innovation and growth for your organization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2">
                Schedule Consultation <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/services" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                Explore All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default EnterpriseITSolutions;