import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Brain, Atom, Shield, Cloud, Rocket, Target, Users, Heart, DollarSign, Cog, FileText, 
  Calendar, Lightbulb, HelpCircle, Monitor, Star, Award, TrendingUp, Globe, 
  Lock, Palette, Cpu, Layers, Globe2, Truck, Zap, ArrowRight, CheckCircle, ShoppingCart
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const mainServices = [
    {
      name: 'Artificial Intelligence Services',
      description: 'Revolutionary AI solutions including consciousness evolution, neural networks, and cognitive computing',
      icon: <Brain className="w-8 h-8" />,
      href: '/ai-services',
      color: 'from-purple-500 to-pink-500',
      features: [
        'AI Consciousness Evolution',
        'Neural Network Platforms',
        'Cognitive Computing',
        'Machine Learning Solutions',
        'AI Strategy Consulting',
        'Custom AI Development'
      ],
      benefits: [
        'Enhanced Decision Making',
        'Automated Processes',
        'Predictive Analytics',
        'Cost Reduction',
        'Competitive Advantage',
        'Scalable Solutions'
      ]
    },
    {
      name: 'Quantum Computing Services',
      description: 'Next-generation quantum computing infrastructure, AI integration, and industry solutions',
      icon: <Atom className="w-8 h-8" />,
      href: '/quantum-services',
      color: 'from-blue-500 to-indigo-500',
      features: [
        'Quantum Infrastructure',
        'Quantum AI Integration',
        'Quantum Cybersecurity',
        'Financial Intelligence',
        'Materials Discovery',
        'Logistics Optimization'
      ],
      benefits: [
        'Exponential Speed',
        'Quantum Supremacy',
        'Unbreakable Security',
        'Complex Problem Solving',
        'Future-Proof Technology',
        'Research Advancement'
      ]
    },
    {
      name: 'Cybersecurity Services',
      description: 'Comprehensive security solutions including threat protection, cloud security, and compliance',
      icon: <Shield className="w-8 h-8" />,
      href: '/cybersecurity-services',
      color: 'from-green-500 to-emerald-500',
      features: [
        'Threat Detection & Response',
        'Cloud Security Management',
        'Data Protection',
        'Network Security',
        'Compliance Solutions',
        'Security Training'
      ],
      benefits: [
        '360° Protection',
        'Real-time Response',
        'Regulatory Compliance',
        'Risk Mitigation',
        'Business Continuity',
        'Customer Trust'
      ]
    },
    {
      name: 'Cloud Computing Services',
      description: 'Scalable cloud solutions including migration, security, DevOps, and cost optimization',
      icon: <Cloud className="w-8 h-8" />,
      href: '/cloud-services',
      color: 'from-cyan-500 to-blue-500',
      features: [
        'Cloud Migration',
        'Multi-Cloud Management',
        'DevOps Integration',
        'Security & Compliance',
        'Cost Optimization',
        'AI & ML Platforms'
      ],
      benefits: [
        'Scalability',
        'Cost Efficiency',
        'Global Reach',
        'Security First',
        'Performance',
        'Flexibility'
      ]
    }
  ];

  const specializedServices = [
    {
      name: 'AI Consciousness Evolution',
      description: 'Advanced AI systems with emotional intelligence and self-awareness',
      href: '/ai-consciousness-evolution-2045',
      icon: <Brain className="w-6 h-6" />,
      category: 'AI'
    },
    {
      name: 'Quantum AI Neural Networks',
      description: 'Quantum-powered artificial intelligence with consciousness integration',
      href: '/quantum-ai-neural-network-platform-2045',
      icon: <Atom className="w-6 h-6" />,
      category: 'Quantum'
    },
    {
      name: 'Quantum Cybersecurity Platform',
      description: 'Quantum-resistant security solutions for the post-quantum era',
      href: '/quantum-cybersecurity-platform-2045',
      icon: <Shield className="w-6 h-6" />,
      category: 'Security'
    },
    {
      name: 'Cloud AI Platform',
      description: 'AI and machine learning platform on cloud infrastructure',
      href: '/cloud-ai-platform',
      icon: <Cloud className="w-6 h-6" />,
      category: 'Cloud'
    },
    {
      name: 'Zero Trust Security',
      description: 'Comprehensive zero trust architecture implementation',
      href: '/zero-trust-security',
      icon: <Lock className="w-6 h-6" />,
      category: 'Security'
    },
    {
      name: 'DevOps as a Service',
      description: 'Complete DevOps pipeline implementation and management',
      href: '/devops-as-a-service',
      icon: <Cog className="w-6 h-6" />,
      category: 'Cloud'
    }
  ];

  const industrySolutions = [
    {
      industry: 'Financial Services',
      solutions: [
        'AI-Powered Trading Algorithms',
        'Quantum Financial Intelligence',
        'Cybersecurity & Compliance',
        'Cloud Infrastructure'
      ],
      icon: <DollarSign className="w-8 h-8" />
    },
    {
      industry: 'Healthcare',
      solutions: [
        'AI Diagnostics & Imaging',
        'Quantum Drug Discovery',
        'Patient Data Security',
        'Cloud-Based Systems'
      ],
      icon: <Heart className="w-8 h-8" />
    },
    {
      industry: 'Manufacturing',
      solutions: [
        'AI Process Optimization',
        'Quantum Materials Research',
        'IoT Security',
        'Smart Factory Solutions'
      ],
      icon: <Cog className="w-8 h-8" />
    },
    {
      industry: 'Retail & E-commerce',
      solutions: [
        'AI Customer Analytics',
        'Personalization Engines',
        'Fraud Detection',
        'Scalable Infrastructure'
      ],
      icon: <ShoppingCart className="w-8 h-8" />
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Assessment',
      description: 'We analyze your current technology landscape and identify opportunities for improvement',
      icon: <Target className="w-8 h-8" />
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'Develop a comprehensive roadmap tailored to your business goals and requirements',
      icon: <FileText className="w-8 h-8" />
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Execute the solution with our expert team, ensuring minimal disruption to your operations',
      icon: <Rocket className="w-8 h-8" />
    },
    {
      step: '04',
      title: 'Optimization & Support',
      description: 'Continuous monitoring, optimization, and 24/7 support to ensure peak performance',
      icon: <Monitor className="w-8 h-8" />
    }
  ];

  return (
    <Layout
      title="Services - Zion Tech Group"
      description="Comprehensive technology services including AI, quantum computing, cybersecurity, and cloud solutions. Transform your business with our expert services."
      keywords="services, AI services, quantum computing, cybersecurity, cloud services, Zion Tech Group"
      canonicalUrl="https://ziontechgroup.com/services"
    >
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-600 bg-clip-text text-transparent">
                Our Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Comprehensive technology solutions that drive innovation, enhance security, 
              and accelerate your digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-200 shadow-lg hover:shadow-indigo-500/25"
                onClick={() => document.getElementById('main-services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Services
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-indigo-500 text-indigo-400 rounded-lg font-semibold text-lg hover:bg-indigo-500 hover:text-white transition-all duration-200"
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section id="main-services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Core Service Areas
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our four main service areas work together to provide comprehensive 
              technology solutions for modern businesses.
            </p>
          </motion.div>

          <div className="space-y-12">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-3xl border border-gray-700/50 overflow-hidden"
              >
                <div className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mr-4`}>
                          {service.icon}
                        </div>
                        <h3 className="text-3xl font-bold text-white">{service.name}</h3>
                      </div>
                      <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <Link href={service.href}>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`px-6 py-3 bg-gradient-to-r ${service.color} text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200 flex items-center`}
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </motion.button>
                      </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="text-gray-300 text-sm flex items-center">
                              <Star className="w-3 h-3 text-blue-400 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                          <TrendingUp className="w-5 h-5 text-green-400 mr-2" />
                          Benefits
                        </h4>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="text-gray-300 text-sm flex items-center">
                              <Star className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-20 bg-gradient-to-r from-indigo-900/10 to-purple-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Specialized Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced, cutting-edge solutions that address specific business challenges 
              and unlock new possibilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specializedServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link href={service.href}>
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 hover:border-indigo-500/40 transition-all duration-300 h-full">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                        {service.icon}
                      </div>
                      <span className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-300 rounded-full border border-indigo-500/30">
                        {service.category}
                      </span>
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                      {service.name}
                    </h4>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex items-center text-indigo-400 group-hover:text-indigo-300 transition-colors">
                      <span className="text-sm font-medium">Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored technology solutions designed to address the unique challenges 
              and opportunities of specific industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industrySolutions.map((industry, index) => (
              <motion.div
                key={industry.industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 hover:border-indigo-500/40 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mr-4">
                    {industry.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{industry.industry}</h3>
                </div>
                <ul className="space-y-3">
                  {industry.solutions.map((solution, solutionIndex) => (
                    <li key={solutionIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-indigo-400 mr-3 flex-shrink-0" />
                      {solution}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-gradient-to-r from-indigo-900/10 to-purple-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery and 
              maximum value for your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-indigo-900/20 to-purple-900/20 rounded-3xl p-12 border border-indigo-500/20">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Let's discuss how our comprehensive technology services can help you 
                achieve your business goals and stay ahead of the competition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-200 shadow-lg hover:shadow-indigo-500/25"
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Start Your Project
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-indigo-500 text-indigo-400 rounded-lg font-semibold text-lg hover:bg-indigo-500 hover:text-white transition-all duration-200"
                >
                  Schedule Consultation
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;