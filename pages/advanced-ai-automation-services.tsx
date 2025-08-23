import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  CheckCircle, ArrowRight, Star, TrendingUp, Phone, Zap, DollarSign, 
  Shield, Mail, MapPin, Rocket, Brain, Sparkles, Atom, Dna, Users, 
  Globe, Cpu, Target, Microscope, Lock, Cloud, BarChart3, Settings, 
  Eye, Award, Clock, Heart, Lightbulb, Target as TargetIcon, 
  Zap as ZapIcon, Shield as ShieldIcon, Globe as GlobeIcon,
  Search, Code, TestTube, Server, Database, Network, Shield as SecurityIcon
} from 'lucide-react';
import { Layout } from '../components/layout/Layout';
import { advancedAIAutomationServices2025 } from '../data/2025-advanced-ai-automation-services';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const heroStats = [
  { label: 'AI Services Delivered', value: '200+', icon: <Brain className="w-5 h-5" /> },
  { label: 'Happy AI Clients', value: '500+', icon: <Users className="w-5 h-5" /> },
  { label: 'AI Success Rate', value: '99.8%', icon: <Award className="w-5 h-5" /> },
  { label: 'AI ROI Average', value: '500%', icon: <TrendingUp className="w-5 h-5" /> }
];

const serviceCategories = [
  {
    title: 'AI Development Tools',
    description: 'Advanced AI-powered development and testing automation',
    services: advancedAIAutomationServices2025.filter(s => s.category === 'AI Development Tools'),
    icon: Code,
    color: 'from-emerald-500 to-teal-600',
    features: ['Code Review Automation', 'AI Testing', 'DevOps Intelligence']
  },
  {
    title: 'AI Testing & Quality Assurance',
    description: 'Intelligent testing automation with AI-driven insights',
    services: advancedAIAutomationServices2025.filter(s => s.category === 'AI Testing & Quality Assurance'),
    icon: TestTube,
    color: 'from-purple-500 to-indigo-600',
    features: ['Test Generation', 'Performance Testing', 'Quality Assurance']
  },
  {
    title: 'AI DevOps & Infrastructure',
    description: 'Self-managing infrastructure with AI optimization',
    services: advancedAIAutomationServices2025.filter(s => s.category === 'AI DevOps & Infrastructure'),
    icon: Server,
    color: 'from-blue-500 to-indigo-600',
    features: ['Infrastructure Management', 'Deployment Optimization', 'Performance Monitoring']
  },
  {
    title: 'AI Cybersecurity',
    description: 'Proactive threat detection and response with AI',
    services: advancedAIAutomationServices2025.filter(s => s.category === 'AI Cybersecurity'),
    icon: SecurityIcon,
    color: 'from-red-500 to-pink-600',
    features: ['Threat Detection', 'Incident Response', 'Security Automation']
  },
  {
    title: 'AI Data Management',
    description: 'Intelligent data infrastructure with AI automation',
    services: advancedAIAutomationServices2025.filter(s => s.category === 'AI Data Management'),
    icon: Database,
    color: 'from-cyan-500 to-blue-600',
    features: ['Pipeline Management', 'Quality Assurance', 'Governance Automation']
  }
];

const heroFeatures = [
  {
    title: 'AI-Powered Automation',
    description: 'Advanced AI algorithms that automate complex development, testing, and operations tasks.',
    icon: Brain,
    gradient: 'bg-gradient-to-r from-cyan-500 to-blue-600'
  },
  {
    title: 'Intelligent Optimization',
    description: 'AI-driven optimization that continuously improves performance, security, and efficiency.',
    icon: Sparkles,
    gradient: 'bg-gradient-to-r from-purple-500 to-pink-600'
  },
  {
    title: 'Autonomous Operations',
    description: 'Self-managing systems that operate independently with minimal human intervention.',
    icon: Settings,
    gradient: 'bg-gradient-to-r from-green-500 to-emerald-600'
  },
  {
    title: 'Predictive Analytics',
    description: 'AI-powered insights that predict issues before they occur and optimize performance.',
    icon: BarChart3,
    gradient: 'bg-gradient-to-r from-orange-500 to-red-600'
  }
];

const testimonials = [
  {
    name: 'Dr. Michael Chen',
    role: 'CTO, TechFlow Solutions',
    company: 'TechFlow Solutions',
    content: 'Zion Tech Group\'s AI automation platform has revolutionized our development process. We\'ve reduced testing time by 90% and improved code quality significantly.',
    rating: 5,
    avatar: '👨‍💻'
  },
  {
    name: 'Sarah Rodriguez',
    role: 'DevOps Director, CloudScale Inc.',
    company: 'CloudScale Inc.',
    content: 'The autonomous DevOps platform has transformed our infrastructure management. We now have 99.9% uptime with 60% lower operational costs.',
    rating: 5,
    avatar: '👩‍💼'
  },
  {
    name: 'David Kim',
    role: 'Security Manager, SecureNet Corp.',
    company: 'SecureNet Corp.',
    content: 'Their AI security platform provides proactive threat detection that has prevented multiple security incidents. The ROI has been incredible.',
    rating: 5,
    avatar: '👨‍🔒'
  }
];

export default function AdvancedAIAutomationServices() {
  return (
    <Layout>
      <Head>
        <title>Advanced AI Automation Services - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI automation services for development, testing, DevOps, security, and data management. Transform your operations with intelligent automation." />
        <meta name="keywords" content="AI automation, development automation, testing automation, DevOps automation, security automation, data automation" />
        <meta property="og:title" content="Advanced AI Automation Services - Zion Tech Group" />
        <meta property="og:description" content="Revolutionary AI automation services for development, testing, DevOps, security, and data management." />
        <meta property="og:url" content="https://ziontechgroup.com/advanced-ai-automation-services" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/advanced-ai-automation-services" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Advanced AI Automation Services
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your development, testing, DevOps, and security operations with revolutionary AI automation that works 24/7
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {heroStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-2 bg-white/10 backdrop-blur-lg rounded-lg px-4 py-2 border border-cyan-500/30"
                >
                  {stat.icon}
                  <span className="text-cyan-400 font-semibold">{stat.value}</span>
                  <span className="text-gray-300 text-sm">{stat.label}</span>
                </motion.div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#services" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href={`tel:${contactInfo.mobile}`} className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-lg text-white font-semibold rounded-lg border border-cyan-500/30 hover:bg-white/20 transition-all duration-300">
                <Phone className="mr-2 w-5 h-5" />
                Get Started
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose Our AI Automation Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI automation services provide unprecedented efficiency, accuracy, and cost savings across all aspects of technology operations
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {heroFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className={`${feature.gradient} p-1 rounded-xl`}>
                  <div className="bg-gray-900 rounded-xl p-6 h-full">
                    <div className="text-center">
                      <div className={`${feature.gradient} w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                      <p className="text-gray-300">{feature.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              AI Automation Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI automation solutions covering every aspect of modern technology operations
            </p>
          </motion.div>

          <div className="space-y-16">
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="text-center mb-12">
                  <div className={`inline-flex items-center justify-center w-20 h-20 ${category.color} rounded-2xl mb-6`}>
                    <category.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{category.title}</h3>
                  <p className="text-xl text-gray-300 max-w-2xl mx-auto">{category.description}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: serviceIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="relative group"
                    >
                      <div className={`${service.color} p-1 rounded-xl`}>
                        <div className="bg-gray-900 rounded-xl p-6 h-full">
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-3xl">{service.icon}</span>
                            {service.popular && (
                              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                                Popular
                              </span>
                            )}
                          </div>
                          <h4 className="text-xl font-semibold text-white mb-2">{service.name}</h4>
                          <p className="text-gray-300 text-sm mb-4">{service.tagline}</p>
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-2xl font-bold text-white">{service.price}</span>
                            <span className="text-gray-400">{service.period}</span>
                          </div>
                          <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                          <div className="space-y-2 mb-6">
                            {service.features.slice(0, 3).map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                                <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                                {feature}
                              </div>
                            ))}
                          </div>
                          <div className="flex items-center justify-between">
                            <Link
                              href={service.link}
                              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                            >
                              Learn More
                              <ArrowRight className="ml-1 w-4 h-4" />
                            </Link>
                            <Link
                              href={`tel:${contactInfo.mobile}`}
                              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                            >
                              Get Started
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real feedback from organizations that have transformed their operations with our AI automation services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-cyan-500/20"
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{testimonial.avatar}</span>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-cyan-400 text-sm">{testimonial.role}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{testimonial.content}</p>
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Operations with AI Automation?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join hundreds of organizations that have already revolutionized their technology operations with our AI automation services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`tel:${contactInfo.mobile}`}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Now: {contactInfo.mobile}
              </Link>
              <Link
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-lg text-white font-semibold rounded-lg border border-cyan-500/30 hover:bg-white/20 transition-all duration-300"
              >
                <Mail className="mr-2 w-5 h-5" />
                Email Us
              </Link>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-300 mb-2">📍 {contactInfo.address}</p>
              <p className="text-gray-300">🌐 {contactInfo.website}</p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}