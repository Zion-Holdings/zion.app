import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Cpu, Brain, Rocket, Shield, Zap, Target, Atom, 
  Lock, Cloud, Settings, Eye, Award, Clock, Heart, 
  Lightbulb, Search, Grid, List, TrendingUp, 
  User, ShoppingCart, Bell, HelpCircle, FileText, 
  Video, Headphones, Code, Database, Network, Server, 
  Monitor, Smartphone, Camera, Gamepad2, Palette, 
  Music, Film, BookOpenCheck, Building, MessageCircle, 
  Sparkles, ArrowRight, CheckCircle, Star, Globe, Wrench
} from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      id: 'enterprise-it',
      name: 'Enterprise IT Solutions',
      description: 'Comprehensive enterprise infrastructure and management',
      features: ['Infrastructure Management', 'Cloud Migration', 'Security Implementation', 'Performance Optimization'],
      price: '$2,999',
      period: 'month',
      popular: true,
      icon: <Building className="w-8 h-8" />
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity Services',
      description: 'Advanced security solutions for modern threats',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Incident Response', 'Security Training'],
      price: '$2,499',
      period: 'month',
      popular: false,
      icon: <Shield className="w-8 h-8" />
    },
    {
      id: 'cloud-solutions',
      name: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and services',
      features: ['Cloud Architecture', 'Migration Services', 'Optimization', 'Multi-cloud Management'],
      price: '$1,999',
      period: 'month',
      popular: false,
      icon: <Cloud className="w-8 h-8" />
    },
    {
      id: 'devops-automation',
      name: 'DevOps Automation',
      description: 'Streamlined development and operations',
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring', 'Automation'],
      price: '$1,799',
      period: 'month',
      popular: false,
      icon: <Settings className="w-8 h-8" />
    },
    {
      id: 'data-management',
      name: 'Data Management',
      description: 'Comprehensive data solutions and analytics',
      features: ['Data Strategy', 'Analytics Platform', 'Governance', 'Business Intelligence'],
      price: '$2,299',
      period: 'month',
      popular: false,
      icon: <Database className="w-8 h-8" />
    },
    {
      id: 'network-infrastructure',
      name: 'Network Infrastructure',
      description: 'Robust networking and connectivity solutions',
      features: ['Network Design', 'Security Implementation', 'Performance Monitoring', 'Scalability'],
      price: '$1,599',
      period: 'month',
      popular: false,
      icon: <Network className="w-8 h-8" />
    }
  ];

  const itCapabilities = [
    {
      title: 'Infrastructure Management',
      description: 'Comprehensive IT infrastructure solutions',
      icon: <Server className="w-6 h-6" />
    },
    {
      title: 'Cloud Services',
      description: 'Multi-cloud and hybrid solutions',
      icon: <Cloud className="w-6 h-6" />
    },
    {
      title: 'Security & Compliance',
      description: 'Advanced cybersecurity and compliance',
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: 'DevOps & Automation',
      description: 'Streamlined development operations',
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: 'Data & Analytics',
      description: 'Data-driven insights and solutions',
      icon: <Database className="w-6 h-6" />
    },
    {
      title: 'Network Solutions',
      description: 'Robust networking infrastructure',
      icon: <Network className="w-6 h-6" />
    }
  ];

  return (
    <Layout>
      <SEO 
        title="IT Services & Solutions - Zion Tech Group"
        description="Comprehensive IT services and solutions for modern enterprises. From infrastructure to cybersecurity, we deliver reliable technology solutions."
        keywords="IT services, enterprise IT, cybersecurity, cloud solutions, DevOps, data management, network infrastructure"
      />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-[60vh] flex items-center justify-center px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600 bg-clip-text text-transparent">
                IT Services & Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive technology solutions that drive business transformation and operational excellence
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </a>
                <a 
                  href="/contact" 
                  className="px-8 py-4 border-2 border-emerald-400 text-emerald-400 font-semibold rounded-lg hover:bg-emerald-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  Schedule Demo
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* IT Capabilities */}
        <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                IT Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                End-to-end IT solutions covering every aspect of modern business technology
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itCapabilities.map((capability, index) => (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-emerald-500 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-emerald-500/20 rounded-lg mr-3">
                      {capability.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{capability.title}</h3>
                  </div>
                  <p className="text-gray-300">{capability.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                IT Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of IT solutions and services
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border transition-all duration-300 hover:scale-105 ${
                    service.popular 
                      ? 'border-emerald-500 shadow-lg shadow-emerald-500/25' 
                      : 'border-gray-700 hover:border-emerald-500'
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="inline-flex p-3 bg-emerald-500/20 rounded-full mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="text-3xl font-bold text-emerald-400 mb-2">
                      {service.price}
                      <span className="text-lg text-gray-400">/{service.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a 
                    href="/contact" 
                    className="w-full block text-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-300"
                  >
                    Get Started
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                Ready to Transform Your IT?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Partner with us to build a robust, scalable, and secure technology foundation for your business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your IT Transformation
                </a>
                <a 
                  href="/contact" 
                  className="px-8 py-4 border-2 border-emerald-400 text-emerald-400 font-semibold rounded-lg hover:bg-emerald-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  Schedule Consultation
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default ITServicesPage;

