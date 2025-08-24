import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Brain, Shield, Target, Star, Sparkles, Zap, Users, Award, 
  Clock, CheckCircle, Globe, Code, ChevronRight, ExternalLink, 
  TrendingUp, BarChart3, Lock, Eye, FileText, Settings, Monitor, Smartphone,
  Activity, Target as TargetIcon, Zap as ZapIcon, DollarSign, Rocket,
  Cpu, Network, Database, Play, Building, Factory, Car, Plane, Ship
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function SolutionsPage() {
  const industrySolutions = [
    {
      industry: 'Healthcare',
      description: 'AI-powered diagnostics, patient care optimization, and medical research acceleration',
      icon: Users,
      solutions: [
        'AI Diagnostic Systems',
        'Patient Care Optimization',
        'Medical Research AI',
        'Healthcare Analytics'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      industry: 'Finance',
      description: 'Quantum trading algorithms, risk assessment, and fraud detection systems',
      icon: DollarSign,
      solutions: [
        'Quantum Financial Trading',
        'AI Risk Assessment',
        'Fraud Detection Systems',
        'Portfolio Optimization'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      industry: 'Manufacturing',
      description: 'Smart factory solutions, predictive maintenance, and quality control automation',
      icon: Factory,
      solutions: [
        'Smart Factory Systems',
        'Predictive Maintenance',
        'Quality Control AI',
        'Supply Chain Optimization'
      ],
      color: 'from-orange-500 to-red-500'
    },
    {
      industry: 'Transportation',
      description: 'Autonomous vehicle systems, traffic optimization, and logistics management',
      icon: Car,
      solutions: [
        'Autonomous Systems',
        'Traffic Optimization',
        'Logistics Management',
        'Fleet Analytics'
      ],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const technologySolutions = [
    {
      category: 'AI & Machine Learning',
      description: 'Advanced artificial intelligence solutions for business transformation',
      icon: Brain,
      solutions: [
        'AI Business Intelligence',
        'AI Autonomous Systems',
        'AI Content Generation',
        'AI Customer Experience'
      ],
      color: 'from-cyan-500 to-blue-600'
    },
    {
      category: 'Cybersecurity',
      description: 'Next-generation security solutions powered by quantum computing',
      icon: Shield,
      solutions: [
        'Quantum Cybersecurity',
        'AI Threat Detection',
        'Zero-Trust Architecture',
        'Advanced Monitoring'
      ],
      color: 'from-red-500 to-orange-600'
    },
    {
      category: 'IT Infrastructure',
      description: 'Scalable and intelligent infrastructure management solutions',
      icon: Server,
      solutions: [
        'Edge Computing Orchestration',
        'Cloud Infrastructure Management',
        'AI-Powered Asset Management',
        'Network Optimization'
      ],
      color: 'from-green-500 to-emerald-600'
    },
    {
      category: 'Quantum Technologies',
      description: 'Cutting-edge quantum computing and neural network solutions',
      icon: Atom,
      solutions: [
        'Quantum Neural Networks',
        'Quantum Financial Trading',
        'Quantum Cryptography',
        'Quantum Machine Learning'
      ],
      color: 'from-purple-500 to-pink-600'
    }
  ];

  const useCaseSolutions = [
    {
      useCase: 'Data Analytics & Insights',
      description: 'Transform raw data into actionable business intelligence',
      icon: BarChart3,
      benefits: [
        'Real-time data processing',
        'Predictive analytics',
        'Custom dashboards',
        'Automated reporting'
      ]
    },
    {
      useCase: 'Process Automation',
      description: 'Streamline operations with intelligent automation',
      icon: Zap,
      benefits: [
        'Workflow automation',
        'Intelligent routing',
        'Process optimization',
        'Cost reduction'
      ]
    },
    {
      useCase: 'Customer Experience',
      description: 'Enhance customer interactions with AI-powered solutions',
      icon: Users,
      benefits: [
        'Personalized experiences',
        '24/7 support',
        'Sentiment analysis',
        'Customer journey optimization'
      ]
    },
    {
      useCase: 'Security & Compliance',
      description: 'Protect your business with advanced security measures',
      icon: Lock,
      benefits: [
        'Threat prevention',
        'Compliance management',
        'Real-time monitoring',
        'Incident response'
      ]
    }
  ];

  const successMetrics = [
    {
      metric: 'Performance Improvement',
      value: '+45%',
      description: 'Average performance enhancement across all solutions'
    },
    {
      metric: 'Cost Reduction',
      value: '-32%',
      description: 'Average cost savings for our clients'
    },
    {
      metric: 'Implementation Speed',
      value: '3x Faster',
      description: 'Compared to traditional solutions'
    },
    {
      metric: 'Customer Satisfaction',
      value: '98%',
      description: 'Client satisfaction rate'
    }
  ];

  return (
    <>
      <Head>
        <title>Solutions - Zion Tech Group | Industry & Technology Solutions</title>
        <meta name="description" content="Comprehensive AI, cybersecurity, and IT infrastructure solutions for healthcare, finance, manufacturing, and transportation industries. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="AI solutions, cybersecurity solutions, IT infrastructure, quantum computing, industry solutions, business transformation" />
        <link rel="canonical" href="https://ziontechgroup.com/solutions" />
      </Head>

      <EnhancedNavigation />

      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            >
              Comprehensive Solutions
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-xl text-gray-300 max-w-4xl mx-auto"
            >
              From industry-specific solutions to cutting-edge technology platforms, Zion Tech Group delivers comprehensive solutions that transform businesses and drive innovation across all sectors.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                Get Started
                <Rocket className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 border border-cyan-500/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-200"
              >
                View Services
                <ChevronRight className="w-5 h-5 ml-2" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Industry Solutions Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Industry-Specific Solutions</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Tailored solutions designed to address the unique challenges and opportunities of specific industries.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industrySolutions.map((industry, index) => (
                <motion.div
                  key={industry.industry}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex items-start mb-4">
                    <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${industry.color} mr-4`}>
                      <industry.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{industry.industry}</h3>
                      <p className="text-gray-400 text-sm">{industry.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {industry.solutions.map((solution, solutionIndex) => (
                      <li key={solutionIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {solution}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Solutions Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Technology Platform Solutions</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Advanced technology platforms that power innovation and drive business transformation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {technologySolutions.map((tech, index) => (
                <motion.div
                  key={tech.category}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex items-start mb-4">
                    <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${tech.color} mr-4`}>
                      <tech.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{tech.category}</h3>
                      <p className="text-gray-400 text-sm">{tech.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {tech.solutions.map((solution, solutionIndex) => (
                      <li key={solutionIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {solution}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Case Solutions Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Use Case Solutions</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Targeted solutions for specific business challenges and operational needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCaseSolutions.map((useCase, index) => (
                <motion.div
                  key={useCase.useCase}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 text-center hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 mb-4">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{useCase.useCase}</h3>
                  <p className="text-gray-400 text-sm mb-4">{useCase.description}</p>
                  <ul className="space-y-2 text-left">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300 text-xs">
                        <CheckCircle className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Metrics Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Proven Results</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Our solutions consistently deliver measurable improvements and transformative results for our clients.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {successMetrics.map((metric, index) => (
                <motion.div
                  key={metric.metric}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{metric.value}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{metric.metric}</h3>
                  <p className="text-gray-400 text-sm">{metric.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Process Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Implementation Process</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Our proven methodology ensures successful solution delivery and maximum business impact.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Discovery & Analysis',
                  description: 'Comprehensive assessment of your business needs and technical requirements'
                },
                {
                  step: '02',
                  title: 'Solution Design',
                  description: 'Custom solution architecture tailored to your specific challenges'
                },
                {
                  step: '03',
                  title: 'Implementation',
                  description: 'Agile development and deployment with continuous feedback'
                },
                {
                  step: '04',
                  title: 'Optimization',
                  description: 'Continuous improvement and performance optimization'
                }
              ].map((phase, index) => (
                <motion.div
                  key={phase.step}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white text-2xl font-bold mb-4">
                    {phase.step}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{phase.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{phase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-2xl p-12 border border-cyan-500/20"
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let us help you implement the right solutions to drive innovation and achieve your business goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
                >
                  Get Started
                  <Rocket className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-4 border border-cyan-500/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-200"
                >
                  Explore Services
                  <ChevronRight className="w-5 h-5 ml-2" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <EnhancedFooter />
    </>
  );
}