import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building, 
  Users, 
  Globe, 
  Shield, 
  Cloud, 
  Database, 
  Cpu, 
  Zap, 
  Target, 
  BarChart3,
  Brain,
  Rocket,
  Atom,
  Code,
  Lock,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';
import Layout from '../../components/layout/Layout';

const EnterpriseSolutionsPage: React.FC = () => {
  const solutions = [
    {
      title: 'Enterprise AI & Machine Learning',
      description: 'Scalable AI solutions that transform business operations and drive innovation across your organization.',
      icon: Brain,
      features: [
        'Custom AI model development',
        'Predictive analytics platforms',
        'Natural language processing',
        'Computer vision solutions',
        'AI-powered automation',
        'Machine learning operations (MLOps)'
      ],
      benefits: ['Increased efficiency', 'Better decision making', 'Cost reduction', 'Competitive advantage']
    },
    {
      title: 'Quantum Computing Solutions',
      description: 'Next-generation quantum computing platforms designed for enterprise-scale problems and optimization.',
      icon: Atom,
      features: [
        'Quantum algorithm development',
        'Quantum machine learning',
        'Optimization problems',
        'Cryptography solutions',
        'Quantum simulation',
        'Hybrid quantum-classical systems'
      ],
      benefits: ['Exponential speedup', 'Complex problem solving', 'Future-proof technology', 'Research leadership']
    },
    {
      title: 'Enterprise Cybersecurity',
      description: 'Comprehensive security solutions protecting your digital assets and ensuring compliance.',
      icon: Shield,
      features: [
        'Zero-trust architecture',
        'Advanced threat detection',
        'Incident response',
        'Compliance automation',
        'Security awareness training',
        'Penetration testing'
      ],
      benefits: ['Risk mitigation', 'Regulatory compliance', 'Customer trust', 'Business continuity']
    },
    {
      title: 'Cloud Infrastructure & Migration',
      description: 'Modern cloud solutions that scale with your business and optimize costs.',
      icon: Cloud,
      features: [
        'Multi-cloud strategy',
        'Cloud migration services',
        'DevOps automation',
        'Container orchestration',
        'Serverless architecture',
        'Cost optimization'
      ],
      benefits: ['Scalability', 'Cost efficiency', 'Operational agility', 'Global reach']
    },
    {
      title: 'Data & Analytics Platforms',
      description: 'Enterprise data solutions that turn information into actionable insights.',
      icon: Database,
      features: [
        'Data warehouse design',
        'Real-time analytics',
        'Business intelligence',
        'Data governance',
        'Predictive modeling',
        'Data visualization'
      ],
      benefits: ['Data-driven decisions', 'Operational insights', 'Customer understanding', 'Process optimization']
    },
    {
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation services that modernize your business operations.',
      icon: Zap,
      features: [
        'Process automation',
        'Legacy system modernization',
        'Digital workflow design',
        'Change management',
        'Technology assessment',
        'Implementation support'
      ],
      benefits: ['Operational efficiency', 'Employee productivity', 'Customer experience', 'Market competitiveness']
    }
  ];

  const industries = [
    {
      name: 'Financial Services',
      description: 'Secure, compliant, and scalable solutions for banking, insurance, and fintech.',
      icon: BarChart3,
      solutions: ['Regulatory compliance', 'Risk management', 'Fraud detection', 'Customer analytics']
    },
    {
      name: 'Healthcare',
      description: 'HIPAA-compliant solutions that improve patient care and operational efficiency.',
      icon: Users,
      solutions: ['Electronic health records', 'Telemedicine platforms', 'Predictive diagnostics', 'Supply chain optimization']
    },
    {
      name: 'Manufacturing',
      description: 'Smart manufacturing solutions that optimize production and reduce costs.',
      icon: Cpu,
      solutions: ['IoT integration', 'Predictive maintenance', 'Quality control', 'Supply chain management']
    },
    {
      name: 'Retail & E-commerce',
      description: 'Omnichannel solutions that enhance customer experience and drive sales.',
      icon: Target,
      solutions: ['Customer analytics', 'Inventory management', 'Personalization', 'Supply chain optimization']
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Assessment',
      description: 'We analyze your current technology landscape and identify opportunities for improvement.',
      icon: Target
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'We develop a comprehensive roadmap aligned with your business objectives.',
      icon: BarChart3
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Our expert team executes the solution with minimal disruption to your operations.',
      icon: Code
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'We continuously monitor and optimize the solution for maximum performance.',
      icon: Zap
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Enterprise{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Transform your enterprise with cutting-edge technology solutions designed for scale, 
                security, and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  Get Enterprise Quote
                </a>
                <a
                  href="/solutions"
                  className="px-8 py-4 border border-cyan-400/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400/10 transition-all duration-300"
                >
                  View All Solutions
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solutions Overview */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Comprehensive Enterprise Solutions
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Our enterprise solutions are designed to address the most complex business challenges 
                with cutting-edge technology and proven methodologies.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{solution.title}</h3>
                      <p className="text-gray-300">{solution.description}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {solution.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-3">Business Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <span
                          key={benefitIndex}
                          className="px-3 py-1 bg-cyan-400/10 text-cyan-400 text-sm rounded-full border border-cyan-400/20"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Solutions */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Industry-Specific Solutions
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Tailored solutions designed for the unique challenges and requirements of your industry.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="bg-gradient-to-r from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                      <industry.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{industry.name}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{industry.description}</p>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-3">Key Solutions:</h4>
                    <div className="space-y-2">
                      {industry.solutions.map((solution, solutionIndex) => (
                        <div key={solutionIndex} className="flex items-center text-sm text-gray-300">
                          <Star className="w-4 h-4 text-yellow-400 mr-2" />
                          {solution}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Process */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Our Implementation Process
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                A proven methodology that ensures successful delivery and maximum value for your enterprise.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="bg-gradient-to-r from-cyan-400/10 to-blue-500/10 border border-cyan-400/20 rounded-3xl p-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Enterprise?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our enterprise solutions can drive innovation, 
                efficiency, and growth for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  Schedule Consultation
                </a>
                <a
                  href="/case-studies"
                  className="px-8 py-4 border border-cyan-400/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400/10 transition-all duration-300"
                >
                  View Case Studies
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default EnterpriseSolutionsPage;