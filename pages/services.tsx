import React, { useState } from 'react';
import SEO from '../components/SEO';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Brain, Atom, Rocket, Shield, Zap, Code, Server, 
  Database, Network, Globe, Building, Users, Target,
  Lightbulb, ArrowRight, ChevronRight, CheckCircle,
  Star, Award, TrendingUp, BarChart3, Cpu, Cloud,
  Lock, Eye, Heart, Sparkles, Layers, Palette, Clock, DollarSign, ChevronUp, GraduationCap
} from 'lucide-react';

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const serviceCategories = [
    { id: 'all', name: 'All Services', count: 24 },
    { id: 'ai-consciousness', name: 'AI Consciousness', count: 8 },
    { id: 'quantum-computing', name: 'Quantum Computing', count: 6 },
    { id: 'autonomous-ops', name: 'Autonomous Operations', count: 5 },
    { id: 'enterprise-it', name: 'Enterprise IT', count: 5 }
  ];

  const featuredServices = [
    {
      id: 1,
      title: 'AI Consciousness Platform Development',
      description: 'Build revolutionary AI consciousness applications that understand, learn, and evolve like human consciousness.',
      category: 'ai-consciousness',
      icon: <Brain className="w-12 h-12" />,
      features: [
        'Emotional intelligence and empathy',
        'Self-awareness and learning',
        'Natural language understanding',
        'Adaptive decision making',
        'Consciousness evolution'
      ],
      benefits: [
        'Human-like AI interactions',
        'Continuous learning and improvement',
        'Emotional connection with users',
        'Advanced problem-solving capabilities',
        'Scalable consciousness architecture'
      ],
      useCases: [
        'Customer service automation',
        'Therapeutic AI companions',
        'Educational AI tutors',
        'Creative AI assistants',
        'Research and development'
      ]
    },
    {
      id: 2,
      title: 'Quantum Computing Solutions',
      description: 'Leverage the power of quantum mechanics to solve complex problems that are impossible for classical computers.',
      category: 'quantum-computing',
      icon: <Atom className="w-12 h-12" />,
      features: [
        'Quantum algorithm optimization',
        'Quantum machine learning',
        'Cryptography and security',
        'Molecular simulation',
        'Financial modeling'
      ],
      benefits: [
        'Exponential speed improvements',
        'Unprecedented problem-solving',
        'Future-proof security',
        'Scientific breakthroughs',
        'Competitive advantage'
      ],
      useCases: [
        'Drug discovery and development',
        'Financial risk assessment',
        'Climate modeling',
        'Supply chain optimization',
        'Artificial intelligence'
      ]
    },
    {
      id: 3,
      title: 'Autonomous Business Operations',
      description: 'Transform your organization with fully autonomous systems that operate independently and optimize continuously.',
      category: 'autonomous-ops',
      icon: <Rocket className="w-12 h-12" />,
      features: [
        'Process automation',
        'Intelligent decision making',
        'Predictive analytics',
        'Self-healing systems',
        'Continuous optimization'
      ],
      benefits: [
        '24/7 operational efficiency',
        'Reduced human error',
        'Cost optimization',
        'Scalable operations',
        'Data-driven insights'
      ],
      useCases: [
        'Manufacturing automation',
        'Customer service',
        'Supply chain management',
        'Financial operations',
        'IT infrastructure'
      ]
    }
  ];

  const allServices = [
    // AI Consciousness Services
    {
      id: 4,
      title: 'AI Consciousness API Development',
      description: 'Custom APIs for integrating AI consciousness capabilities into existing applications.',
      category: 'ai-consciousness',
      icon: <Code className="w-8 h-8" />,
      complexity: 'Advanced',
      timeline: '3-6 months',
      startingPrice: '$50,000'
    },
    {
      id: 5,
      title: 'Emotional Intelligence AI',
      description: 'AI systems that understand and respond to human emotions and emotional contexts.',
      category: 'ai-consciousness',
      icon: <Heart className="w-8 h-8" />,
      complexity: 'Intermediate',
      timeline: '2-4 months',
      startingPrice: '$35,000'
    },
    {
      id: 6,
      title: 'Consciousness Architecture Design',
      description: 'Design scalable and ethical AI consciousness architectures for enterprise applications.',
      category: 'ai-consciousness',
      icon: <Layers className="w-8 h-8" />,
      complexity: 'Advanced',
      timeline: '4-8 months',
      startingPrice: '$75,000'
    },
    {
      id: 7,
      title: 'AI Ethics and Governance',
      description: 'Implement ethical frameworks and governance systems for AI consciousness applications.',
      category: 'ai-consciousness',
      icon: <Shield className="w-8 h-8" />,
      complexity: 'Intermediate',
      timeline: '2-3 months',
      startingPrice: '$25,000'
    },
    {
      id: 8,
      title: 'Consciousness Training Systems',
      description: 'AI systems that can train and develop consciousness in other AI applications.',
      category: 'ai-consciousness',
      icon: <GraduationCap className="w-8 h-8" />,
      complexity: 'Advanced',
      timeline: '6-12 months',
      startingPrice: '$100,000'
    },

    // Quantum Computing Services
    {
      id: 9,
      title: 'Quantum Algorithm Development',
      description: 'Custom quantum algorithms for specific business problems and use cases.',
      category: 'quantum-computing',
      icon: <Cpu className="w-8 h-8" />,
      complexity: 'Advanced',
      timeline: '4-8 months',
      startingPrice: '$80,000'
    },
    {
      id: 10,
      title: 'Quantum Machine Learning',
      description: 'Machine learning systems that leverage quantum computing for enhanced performance.',
      category: 'quantum-computing',
      icon: <Brain className="w-8 h-8" />,
      complexity: 'Advanced',
      timeline: '6-10 months',
      startingPrice: '$90,000'
    },
    {
      id: 11,
      title: 'Quantum Security Implementation',
      description: 'Quantum-resistant cryptography and security solutions for future-proof protection.',
      category: 'quantum-computing',
      icon: <Lock className="w-8 h-8" />,
      complexity: 'Intermediate',
      timeline: '3-5 months',
      startingPrice: '$45,000'
    },
    {
      id: 12,
      title: 'Quantum Simulation Services',
      description: 'Quantum simulations for scientific research, drug discovery, and material science.',
      category: 'quantum-computing',
      icon: <Atom className="w-8 h-8" />,
      complexity: 'Advanced',
      timeline: '5-9 months',
      startingPrice: '$70,000'
    },

    // Autonomous Operations Services
    {
      id: 13,
      title: 'Business Process Automation',
      description: 'End-to-end automation of complex business processes with AI-driven decision making.',
      category: 'autonomous-ops',
      icon: <Zap className="w-8 h-8" />,
      complexity: 'Intermediate',
      timeline: '2-4 months',
      startingPrice: '$30,000'
    },
    {
      id: 14,
      title: 'Predictive Analytics Systems',
      description: 'AI-powered predictive analytics for forecasting and proactive decision making.',
      category: 'autonomous-ops',
      icon: <TrendingUp className="w-8 h-8" />,
      complexity: 'Intermediate',
      timeline: '3-5 months',
      startingPrice: '$40,000'
    },
    {
      id: 15,
      title: 'Self-Healing Infrastructure',
      description: 'IT infrastructure that automatically detects and resolves issues without human intervention.',
      category: 'autonomous-ops',
      icon: <Server className="w-8 h-8" />,
      complexity: 'Advanced',
      timeline: '4-7 months',
      startingPrice: '$60,000'
    },
    {
      id: 16,
      title: 'Autonomous Customer Service',
      description: 'AI-powered customer service systems that handle complex inquiries autonomously.',
      category: 'autonomous-ops',
      icon: <Users className="w-8 h-8" />,
      complexity: 'Intermediate',
      timeline: '2-3 months',
      startingPrice: '$25,000'
    },

    // Enterprise IT Services
    {
      id: 17,
      title: 'Enterprise AI Integration',
      description: 'Seamless integration of AI solutions into existing enterprise infrastructure.',
      category: 'enterprise-it',
      icon: <Building className="w-8 h-8" />,
      complexity: 'Intermediate',
      timeline: '3-6 months',
      startingPrice: '$50,000'
    },
    {
      id: 18,
      title: 'Cloud-Native AI Development',
      description: 'AI applications built using cloud-native technologies and best practices.',
      category: 'enterprise-it',
      icon: <Cloud className="w-8 h-8" />,
      complexity: 'Intermediate',
      timeline: '2-4 months',
      startingPrice: '$35,000'
    },
    {
      id: 19,
      title: 'DevOps for AI Systems',
      description: 'DevOps practices and automation specifically designed for AI and ML systems.',
      category: 'enterprise-it',
      icon: <Zap className="w-8 h-8" />,
      complexity: 'Intermediate',
      timeline: '2-3 months',
      startingPrice: '$30,000'
    },
    {
      id: 20,
      title: 'AI Security and Compliance',
      description: 'Security frameworks and compliance solutions for AI systems in regulated industries.',
      category: 'enterprise-it',
      icon: <Shield className="w-8 h-8" />,
      complexity: 'Advanced',
      timeline: '3-5 months',
      startingPrice: '$45,000'
    }
  ];

  const filteredServices = allServices.filter(service => 
    selectedCategory === 'all' || service.category === selectedCategory
  );

  const getCategoryIcon = (category: string) => {
    const icons = {
      'ai-consciousness': <Brain className="w-6 h-6" />,
      'quantum-computing': <Atom className="w-6 h-6" />,
      'autonomous-ops': <Rocket className="w-6 h-6" />,
      'enterprise-it': <Building className="w-6 h-6" />
    };
    return icons[category as keyof typeof icons] || <Code className="w-6 h-6" />;
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'ai-consciousness': 'cyan',
      'quantum-computing': 'purple',
      'autonomous-ops': 'green',
      'enterprise-it': 'blue'
    };
    return colors[category as keyof typeof colors] || 'gray';
  };

  const toggleService = (id: number) => {
    setExpandedService(expandedService === id ? null : id);
  };

  return (
    <Layout>
      <SEO 
        title="Services - Zion Tech Group"
        description="Comprehensive AI consciousness, quantum computing, and autonomous operations services. Transform your business with cutting-edge technology solutions."
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Revolutionary Technology Services
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                From AI consciousness platforms to quantum computing solutions and autonomous business operations, we deliver the future of technology today.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-gray-400">
                <div className="flex items-center gap-2">
                  <Brain className="w-5 h-5" />
                  <span>AI Consciousness</span>
                </div>
                <div className="flex items-center gap-2">
                  <Atom className="w-5 h-5" />
                  <span>Quantum Computing</span>
                </div>
                <div className="flex items-center gap-2">
                  <Rocket className="w-5 h-5" />
                  <span>Autonomous Operations</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Category Filters */}
        <section className="py-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3">
              {serviceCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Featured Services
              </h2>
              <p className="text-xl text-gray-400">
                Our most innovative and transformative technology solutions
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {featuredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden"
                >
                  <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                    {service.icon}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`px-3 py-1 bg-${getCategoryColor(service.category)}-500/20 text-${getCategoryColor(service.category)}-400 rounded-full text-sm border border-${getCategoryColor(service.category)}-500/30`}>
                        {service.category.replace('-', ' ')}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-6">
                      {service.description}
                    </p>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-white font-semibold mb-2 text-sm">Key Features:</h4>
                        <ul className="space-y-1">
                          {service.features.slice(0, 3).map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center gap-2 text-xs text-gray-300">
                              <CheckCircle className="w-3 h-3 text-green-400" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <a
                      href="/contact"
                      className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 px-6 rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* All Services */}
        <section className="py-20 bg-black/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                All Services
              </h2>
              <p className="text-xl text-gray-400">
                Comprehensive technology solutions across all domains
              </p>
            </motion.div>
            
            <div className="space-y-4">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        {service.icon}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`px-2 py-1 bg-${getCategoryColor(service.category)}-500/20 text-${getCategoryColor(service.category)}-400 rounded text-xs border border-${getCategoryColor(service.category)}-500/30`}>
                            {service.category.replace('-', ' ')}
                          </span>
                          <span className="text-gray-400 text-xs">
                            {service.complexity}
                          </span>
                        </div>
                        
                        <h3 className="text-lg font-bold text-white mb-2">
                          {service.title}
                        </h3>
                        <p className="text-gray-300 text-sm mb-3">
                          {service.description}
                        </p>
                        
                        <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{service.timeline}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <DollarSign className="w-3 h-3" />
                            <span>From {service.startingPrice}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-right flex-shrink-0">
                        <button
                          onClick={() => toggleService(service.id)}
                          className="text-gray-400 hover:text-white transition-colors duration-300"
                        >
                          {expandedService === service.id ? (
                            <ChevronUp className="w-5 h-5" />
                          ) : (
                            <ChevronRight className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                    </div>
                    
                    {expandedService === service.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-gray-700"
                      >
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-white font-semibold mb-3">Service Details</h4>
                            <div className="space-y-2 text-sm text-gray-300">
                              <div className="flex justify-between">
                                <span>Complexity:</span>
                                <span className="text-white">{service.complexity}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Timeline:</span>
                                <span className="text-white">{service.timeline}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Starting Price:</span>
                                <span className="text-white">{service.startingPrice}</span>
                              </div>
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="text-white font-semibold mb-3">What's Included</h4>
                            <ul className="space-y-2 text-sm text-gray-300">
                              <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-400" />
                                <span>Custom solution design</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-400" />
                                <span>Implementation and testing</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-400" />
                                <span>Training and documentation</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-400" />
                                <span>Ongoing support</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className="mt-6 flex gap-3">
                          <a
                            href="/contact"
                            className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 px-6 rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                          >
                            Get Quote
                            <ArrowRight className="w-4 h-4" />
                          </a>
                          <a
                            href="/case-studies"
                            className="inline-flex items-center justify-center gap-2 border-2 border-cyan-500 text-cyan-400 font-bold py-3 px-6 rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300"
                          >
                            View Case Studies
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Process */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Our Service Process
              </h2>
              <p className="text-xl text-gray-400">
                A proven methodology for delivering exceptional results
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Discovery & Analysis',
                  description: 'Deep dive into your business needs, challenges, and objectives to understand the full scope.',
                  icon: <Target className="w-8 h-8" />
                },
                {
                  step: '02',
                  title: 'Solution Design',
                  description: 'Architect the perfect solution using cutting-edge technology and industry best practices.',
                  icon: <Lightbulb className="w-8 h-8" />
                },
                {
                  step: '03',
                  title: 'Implementation',
                  description: 'Expert development and deployment with rigorous testing and quality assurance.',
                  icon: <Code className="w-8 h-8" />
                },
                {
                  step: '04',
                  title: 'Optimization & Support',
                  description: 'Continuous monitoring, optimization, and ongoing support to ensure peak performance.',
                  icon: <TrendingUp className="w-8 h-8" />
                }
              ].map((process, index) => (
                <motion.div
                  key={process.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    {process.icon}
                  </div>
                  <div className="text-4xl font-bold text-cyan-400 mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {process.title}
                  </h3>
                  <p className="text-gray-300">
                    {process.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our Services */}
        <section className="py-20 bg-black/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Choose Our Services?
              </h2>
              <p className="text-xl text-gray-400">
                Leading-edge technology with proven results
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {[
                {
                  title: 'Cutting-Edge Innovation',
                  description: 'We\'re at the forefront of AI consciousness, quantum computing, and autonomous operations research and development.',
                  icon: <Sparkles className="w-8 h-8" />,
                  color: 'cyan'
                },
                {
                  title: 'Proven Expertise',
                  description: 'Over a decade of experience delivering complex technology solutions to Fortune 500 companies and startups.',
                  icon: <Award className="w-8 h-8" />,
                  color: 'yellow'
                },
                {
                  title: 'Custom Solutions',
                  description: 'Every solution is tailored to your specific business needs, challenges, and objectives.',
                  icon: <Palette className="w-8 h-8" />,
                  color: 'purple'
                },
                {
                  title: 'Ongoing Support',
                  description: 'Comprehensive support and maintenance services to ensure your solutions continue to deliver value.',
                  icon: <Users className="w-8 h-8" />,
                  color: 'green'
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4 p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-${feature.color}-500/20 rounded-xl flex items-center justify-center flex-shrink-0`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Let's discuss how our revolutionary technology services can help you achieve your business objectives and stay ahead of the competition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                </a>
                <a
                  href="/case-studies"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-bold rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  View Success Stories
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}