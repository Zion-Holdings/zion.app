import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Brain, Shield, Rocket, Cpu, Database, Atom, Users, Award, 
  Target, Star, Globe, Code, Server, Zap, Heart, Eye, Lightbulb,
  ChevronRight, ArrowRight, CheckCircle, Clock, TrendingUp
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

const ServicesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const serviceCategories = [
    { id: 'all', name: 'All Services', icon: Star, color: 'from-purple-500 to-pink-500' },
    { id: 'ai', name: 'AI & ML', icon: Brain, color: 'from-blue-500 to-cyan-500' },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, color: 'from-indigo-500 to-purple-500' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-orange-500' },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cpu, color: 'from-green-500 to-emerald-500' },
    { id: 'data', name: 'Data Analytics', icon: Database, color: 'from-yellow-500 to-orange-500' }
  ];

  const allServices = [
    // AI & Machine Learning Services
    {
      id: 'ai-autonomous-ecosystem',
      name: 'AI Autonomous Ecosystem',
      category: 'ai',
      description: 'Revolutionary autonomous AI solutions that adapt and evolve independently',
      features: ['Self-learning algorithms', 'Autonomous decision making', 'Continuous optimization', 'Scalable architecture'],
      price: 'From $50,000',
      setupTime: '4-6 weeks',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      popular: true
    },
    {
      id: 'quantum-ai-neural-networks',
      name: 'Quantum AI Neural Networks',
      category: 'ai',
      description: 'Quantum-powered AI with advanced consciousness capabilities and neural processing',
      features: ['Quantum neural processing', 'Consciousness simulation', 'Advanced pattern recognition', 'Quantum memory systems'],
      price: 'From $75,000',
      setupTime: '8-12 weeks',
      icon: Atom,
      color: 'from-blue-500 to-cyan-500',
      popular: true
    },
    {
      id: 'ai-powered-automation',
      name: 'AI-Powered Automation',
      category: 'ai',
      description: 'Intelligent automation systems that streamline business processes',
      features: ['Process automation', 'Workflow optimization', 'Intelligent routing', 'Performance analytics'],
      price: 'From $25,000',
      setupTime: '2-4 weeks',
      icon: Zap,
      color: 'from-green-500 to-emerald-500'
    },

    // Quantum Computing Services
    {
      id: 'quantum-cryptography',
      name: 'Quantum Cryptography',
      category: 'quantum',
      description: 'Quantum-resistant security solutions for the post-quantum era',
      features: ['Quantum key distribution', 'Post-quantum algorithms', 'Secure communication', 'Future-proof encryption'],
      price: 'From $100,000',
      setupTime: '12-16 weeks',
      icon: Shield,
      color: 'from-red-500 to-orange-500'
    },
    {
      id: 'quantum-algorithms',
      name: 'Quantum Algorithm Development',
      category: 'quantum',
      description: 'Custom quantum algorithms for complex computational problems',
      features: ['Custom algorithm design', 'Quantum optimization', 'Performance benchmarking', 'Integration support'],
      price: 'From $60,000',
      setupTime: '6-10 weeks',
      icon: Code,
      color: 'from-indigo-500 to-purple-500'
    },

    // Cybersecurity Services
    {
      id: 'quantum-cybersecurity',
      name: 'Quantum Cybersecurity',
      category: 'cybersecurity',
      description: 'Advanced threat detection and quantum-resistant security systems',
      features: ['Threat intelligence', 'Quantum-resistant encryption', 'Real-time monitoring', 'Incident response'],
      price: 'From $45,000',
      setupTime: '4-8 weeks',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      popular: true
    },
    {
      id: 'ai-threat-detection',
      name: 'AI Threat Detection',
      category: 'cybersecurity',
      description: 'AI-powered security monitoring and threat prevention',
      features: ['Behavioral analysis', 'Anomaly detection', 'Predictive security', 'Automated response'],
      price: 'From $35,000',
      setupTime: '3-6 weeks',
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },

    // Cloud & DevOps Services
    {
      id: 'autonomous-devops',
      name: 'Autonomous DevOps',
      category: 'cloud',
      description: 'AI-powered DevOps optimization and automation platform',
      features: ['CI/CD automation', 'Infrastructure as code', 'Performance monitoring', 'Auto-scaling'],
      price: 'From $30,000',
      setupTime: '3-5 weeks',
      icon: Cpu,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'cloud-infrastructure',
      name: 'Cloud Infrastructure',
      category: 'cloud',
      description: 'Scalable cloud solutions and edge computing optimization',
      features: ['Multi-cloud deployment', 'Edge computing', 'Load balancing', 'Cost optimization'],
      price: 'From $40,000',
      setupTime: '4-8 weeks',
      icon: Server,
      color: 'from-blue-500 to-cyan-500'
    },

    // Data Analytics Services
    {
      id: 'data-analytics',
      name: 'Advanced Data Analytics',
      category: 'data',
      description: 'Big data processing, predictive analytics, and business intelligence',
      features: ['Data processing', 'Predictive modeling', 'Business intelligence', 'Real-time analytics'],
      price: 'From $35,000',
      setupTime: '4-7 weeks',
      icon: Database,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 'edge-computing',
      name: 'Edge Computing Orchestration',
      category: 'cloud',
      description: 'Advanced edge computing optimization and management platform',
      features: ['Edge optimization', 'Distributed computing', 'Latency reduction', 'Bandwidth optimization'],
      price: 'From $50,000',
      setupTime: '6-10 weeks',
      icon: Server,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === activeCategory);

  const stats = [
    { number: '500+', label: 'Services Delivered', icon: CheckCircle, color: 'text-cyan-400' },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield, color: 'text-green-400' },
    { number: '24/7', label: 'Global Support', icon: Clock, color: 'text-purple-400' },
    { number: '2500%', label: 'Average ROI', icon: TrendingUp, color: 'text-yellow-400' }
  ];

  return (
    <>
      <Head>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Explore Zion Tech Group's comprehensive services including AI, quantum computing, cybersecurity, cloud infrastructure, and data analytics solutions." />
        <meta name="robots" content="index, follow" />
      </Head>

      <EnhancedNavigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent mb-8">
                Our Services
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-12">
                Revolutionary AI, quantum computing, and autonomous systems that transform how businesses operate, 
                innovate, and compete in the digital age.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="text-center"
                >
                  <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
                  <div className="text-white/70">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Service Categories</h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Choose from our comprehensive range of cutting-edge technology services
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {serviceCategories.map((category, index) => (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-3 px-6 py-3 rounded-full border transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'border-cyan-500 bg-cyan-500/20 text-cyan-400'
                      : 'border-white/20 text-white/70 hover:border-white/40 hover:text-white'
                  }`}
                >
                  <category.icon className="w-5 h-5" />
                  <span>{category.name}</span>
                </motion.button>
              ))}
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group"
                >
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    {service.popular && (
                      <div className="flex items-center space-x-1 px-3 py-1 bg-yellow-500/20 border border-yellow-500/30 rounded-full">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-yellow-400 text-sm font-medium">Popular</span>
                      </div>
                    )}
                  </div>

                  {/* Service Content */}
                  <h3 className="text-xl font-semibold text-white mb-3">{service.name}</h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-4">{service.description}</p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan-400" />
                        <span className="text-white/80">{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <div className="text-sm text-white/60">
                        +{service.features.length - 3} more features
                      </div>
                    )}
                  </div>

                  {/* Service Details */}
                  <div className="flex items-center justify-between text-sm text-white/60 mb-6">
                    <span>{service.price}</span>
                    <span>Setup: {service.setupTime}</span>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-2 group">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our Services */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Services?</h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                We deliver cutting-edge technology solutions with proven results and exceptional support
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Brain,
                  title: 'AI-First Approach',
                  description: 'Every solution is built with artificial intelligence at its core, ensuring maximum efficiency and innovation.',
                  color: 'from-purple-500 to-pink-500'
                },
                {
                  icon: Shield,
                  title: 'Enterprise Security',
                  description: 'Bank-grade security and compliance built into every service, protecting your most valuable assets.',
                  color: 'from-red-500 to-orange-500'
                },
                {
                  icon: Rocket,
                  title: 'Rapid Deployment',
                  description: 'Get up and running in weeks, not months, with our streamlined implementation process.',
                  color: 'from-blue-500 to-cyan-500'
                },
                {
                  icon: Users,
                  title: 'Expert Support',
                  description: '24/7 access to world-class engineers and technology experts across all time zones.',
                  color: 'from-green-500 to-emerald-500'
                },
                {
                  icon: Award,
                  title: 'Proven Results',
                  description: 'Track record of delivering measurable ROI and transformative business outcomes.',
                  color: 'from-indigo-500 to-purple-500'
                },
                {
                  icon: Globe,
                  title: 'Global Scale',
                  description: 'Solutions that scale from startup to enterprise, serving clients worldwide.',
                  color: 'from-yellow-500 to-orange-500'
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} p-4 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-white/70 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Process */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Our Service Process</h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                A streamlined approach to delivering exceptional technology solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Discovery & Analysis',
                  description: 'We analyze your needs and design a customized solution strategy',
                  icon: Target
                },
                {
                  step: '02',
                  title: 'Solution Design',
                  description: 'Our experts design and architect the perfect solution for your business',
                  icon: Lightbulb
                },
                {
                  step: '03',
                  title: 'Implementation',
                  description: 'Rapid deployment with continuous testing and optimization',
                  icon: Code
                },
                {
                  step: '04',
                  title: 'Support & Evolution',
                  description: 'Ongoing support and continuous improvement of your solution',
                  icon: Heart
                }
              ].map((process, index) => (
                <motion.div
                  key={process.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-2 border-cyan-500/30 flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-cyan-400">{process.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{process.title}</h3>
                  <p className="text-white/70 leading-relaxed">{process.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-xl rounded-3xl p-12 border border-white/10"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Let's discuss how our revolutionary services can accelerate your growth and drive innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                  Get Free Consultation
                </button>
                <button className="px-8 py-4 bg-slate-800/50 hover:bg-slate-800/80 rounded-full font-semibold text-white border border-white/20 transition-all duration-300">
                  View Case Studies
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <EnhancedFooter />
    </>
  );
};

export default ServicesPage;
