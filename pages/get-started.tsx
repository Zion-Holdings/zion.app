import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Rocket, Shield, Zap, Target, Award, Globe, Users, CheckCircle, ArrowRight, BookOpen, Code, Video, Headphones, Mail, Phone, MapPin, Clock, Star, Download, ExternalLink } from 'lucide-react';
import { Layout } from '../components/layout/Layout';

const onboardingSteps = [
  {
    id: 1,
    title: 'Assessment & Discovery',
    description: 'We analyze your current technology landscape and identify opportunities for transformation',
    duration: '1-2 weeks',
    deliverables: [
      'Technology audit report',
      'Transformation roadmap',
      'ROI projections',
      'Risk assessment'
    ],
    icon: <Target className="w-8 h-8" />,
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-400/10'
  },
  {
    id: 2,
    title: 'Proof of Concept',
    description: 'Build and test a small-scale version of your solution to validate the approach',
    duration: '2-4 weeks',
    deliverables: [
      'Working prototype',
      'Performance metrics',
      'User feedback',
      'Technical validation'
    ],
    icon: <Rocket className="w-8 h-8" />,
    color: 'text-blue-400',
    bgColor: 'bg-blue-400/10'
  },
  {
    id: 3,
    title: 'Pilot Implementation',
    description: 'Deploy the solution in a controlled environment with real users and data',
    duration: '4-8 weeks',
    deliverables: [
      'Pilot deployment',
      'User training materials',
      'Performance monitoring',
      'Feedback collection'
    ],
    icon: <Shield className="w-8 h-8" />,
    color: 'text-purple-400',
    bgColor: 'bg-purple-400/10'
  },
  {
    id: 4,
    title: 'Full Deployment',
    description: 'Scale the solution across your organization with full support and optimization',
    duration: '8-16 weeks',
    deliverables: [
      'Production deployment',
      'Comprehensive training',
      'Ongoing support',
      'Performance optimization'
    ],
    icon: <Zap className="w-8 h-8" />,
    color: 'text-green-400',
    bgColor: 'bg-green-400/10'
  }
];

const quickStartOptions = [
  {
    title: 'AI Consciousness Platform',
    description: 'Get started with AI emotional intelligence and consciousness systems',
    difficulty: 'Intermediate',
    timeToValue: '2-4 weeks',
    icon: <Brain className="w-8 h-8" />,
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-400/10',
    steps: [
      'Install SDK and dependencies',
      'Configure API credentials',
      'Run sample applications',
      'Integrate with your systems'
    ]
  },
  {
    title: 'Quantum Security Suite',
    description: 'Implement quantum-resistant cybersecurity for your infrastructure',
    difficulty: 'Advanced',
    timeToValue: '4-6 weeks',
    icon: <Shield className="w-8 h-8" />,
    color: 'text-blue-400',
    bgColor: 'bg-blue-400/10',
    steps: [
      'Security assessment',
      'Quantum key distribution setup',
      'Encryption migration',
      'Security testing and validation'
    ]
  },
  {
    title: 'Autonomous Operations',
    description: 'Deploy self-managing IT infrastructure and automation',
    difficulty: 'Intermediate',
    timeToValue: '3-5 weeks',
    icon: <Rocket className="w-8 h-8" />,
    color: 'text-purple-400',
    bgColor: 'bg-purple-400/10',
    steps: [
      'Infrastructure audit',
      'Automation framework setup',
      'Policy configuration',
      'Monitoring and alerting'
    ]
  }
];

const resources = [
  {
    title: 'Getting Started Guide',
    description: 'Comprehensive onboarding documentation for new users',
    type: 'Documentation',
    link: '/docs/getting-started',
    icon: <BookOpen className="w-6 h-6" />,
    color: 'text-cyan-400'
  },
  {
    title: 'Video Tutorials',
    description: 'Step-by-step video guides for common use cases',
    type: 'Videos',
    link: '/resources/videos',
    icon: <Video className="w-6 h-6" />,
    color: 'text-blue-400'
  },
  {
    title: 'API Playground',
    description: 'Interactive environment to test our APIs',
    type: 'Tool',
    link: '/tools/api-playground',
    icon: <Code className="w-6 h-6" />,
    color: 'text-purple-400'
  },
  {
    title: 'Community Forum',
    description: 'Connect with other developers and get help',
    type: 'Community',
    link: '/community',
    icon: <Users className="w-6 h-6" />,
    color: 'text-green-400'
  }
];

const supportOptions = [
  {
    title: '24/7 Technical Support',
    description: 'Round-the-clock assistance for critical issues',
    responseTime: '< 1 hour',
    icon: <Clock className="w-6 h-6" />,
    color: 'text-cyan-400'
  },
  {
    title: 'Dedicated Success Manager',
    description: 'Personal guidance throughout your journey',
    responseTime: '< 4 hours',
    icon: <Users className="w-6 h-6" />,
    color: 'text-blue-400'
  },
  {
    title: 'Expert Consultation',
    description: 'Strategic advice from industry experts',
    responseTime: '< 24 hours',
    icon: <Star className="w-6 h-6" />,
    color: 'text-purple-400'
  },
  {
    title: 'Training & Workshops',
    description: 'Customized training for your team',
    responseTime: 'Scheduled',
    icon: <BookOpen className="w-6 h-6" />,
    color: 'text-green-400'
  }
];

export default function GetStarted() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Get Started Today
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Begin your transformation journey with revolutionary AI consciousness, quantum computing, 
                and autonomous systems. We'll guide you every step of the way.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quick Start Options */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Choose Your Path</h2>
              <p className="text-xl text-gray-300">Select the solution that best fits your needs and get started immediately</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {quickStartOptions.map((option, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                  className="group"
                >
                  <div
                    onClick={() => setSelectedOption(selectedOption === option.title ? null : option.title)}
                    className={`p-8 rounded-2xl border border-gray-800 bg-black/40 hover:bg-black/60 transition-all duration-300 cursor-pointer ${
                      selectedOption === option.title ? 'border-cyan-500/50 bg-cyan-500/10' : 'hover:border-cyan-500/50'
                    }`}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`${option.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center`}>
                        <div className={option.color}>{option.icon}</div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{option.title}</h3>
                        <p className="text-sm text-gray-400">{option.description}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 mb-4 text-sm">
                      <span className="text-cyan-400">Difficulty: {option.difficulty}</span>
                      <span className="text-blue-400">Time to Value: {option.timeToValue}</span>
                    </div>

                    {selectedOption === option.title && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                        className="space-y-3"
                      >
                        <p className="text-sm text-gray-300 font-medium">Implementation Steps:</p>
                        {option.steps.map((step, stepIndex) => (
                          <div key={stepIndex} className="flex items-center gap-2 text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                            <span>{step}</span>
                          </div>
                        ))}
                      </motion.div>
                    )}

                    <div className="mt-6 flex items-center justify-between">
                      <span className="text-xs text-gray-400">
                        Click to {selectedOption === option.title ? 'collapse' : 'expand'}
                      </span>
                      <ArrowRight className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${
                        selectedOption === option.title ? 'rotate-90' : ''
                      }`} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Onboarding Process */}
        <section className="py-20 px-4 bg-black/30">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Our Onboarding Process</h2>
              <p className="text-xl text-gray-300">A structured approach to ensure your success</p>
            </motion.div>

            <div className="relative">
              {/* Connection Line */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 transform -translate-y-1/2 hidden lg:block" />

              <div className="grid lg:grid-cols-4 gap-8">
                {onboardingSteps.map((step, index) => (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                    className="relative"
                  >
                    <div className="text-center">
                      <div className={`${step.bgColor} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 relative z-10`}>
                        <div className={step.color}>{step.icon}</div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">{step.description}</p>
                      
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-800/50 rounded-full text-sm text-cyan-400 mb-4">
                        <Clock className="w-4 h-4" />
                        {step.duration}
                      </div>

                      <div className="space-y-2">
                        {step.deliverables.map((deliverable, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                            <span>{deliverable}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Essential Resources</h2>
              <p className="text-xl text-gray-300">Everything you need to succeed with our platform</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 + index * 0.1 }}
                  className="group"
                >
                  <a href={resource.link}>
                    <div className="p-6 bg-black/40 border border-gray-800 rounded-xl hover:border-cyan-500/50 transition-all duration-300 group-hover:bg-black/60">
                      <div className={`${resource.color} mb-4`}>{resource.icon}</div>
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {resource.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                        {resource.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-cyan-400 font-medium">{resource.type}</span>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Support Options */}
        <section className="py-20 px-4 bg-black/30">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Support & Guidance</h2>
              <p className="text-xl text-gray-300">We're here to help you succeed at every step</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportOptions.map((option, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.6 + index * 0.1 }}
                  className="p-6 bg-black/40 border border-gray-800 rounded-xl hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className={`${option.color} mb-4`}>{option.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{option.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {option.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-cyan-400">
                    <Clock className="w-4 h-4" />
                    {option.responseTime}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Begin?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Start your transformation journey today with our revolutionary technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Our Team
                </a>
                <a
                  href="/quote"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300"
                >
                  Get a Quote
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-20 px-4 bg-black/30">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.0 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Get in Touch</h2>
              <p className="text-xl text-gray-300 mb-8">
                Have questions? Our team is ready to help you get started.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center">
                  <Phone className="w-8 h-8 text-cyan-400 mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                  <p className="text-gray-300">+1 302 464 0950</p>
                </div>
                <div className="flex flex-col items-center">
                  <Mail className="w-8 h-8 text-blue-400 mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                  <p className="text-gray-300">kleber@ziontechgroup.com</p>
                </div>
                <div className="flex flex-col items-center">
                  <MapPin className="w-8 h-8 text-purple-400 mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                  <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}