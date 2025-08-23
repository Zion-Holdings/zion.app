import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Rocket, CheckCircle, ArrowRight, Users, 
  Brain, Atom, Shield, Globe, Zap, Star
} from 'lucide-react';
import Link from 'next/link';

const GetStarted: React.FC = () => {
  const onboardingSteps = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'Schedule a free consultation to discuss your needs and goals',
      duration: '30 minutes',
      icon: <Users className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      step: '02',
      title: 'Solution Design',
      description: 'Our experts design a customized solution for your business',
      duration: '1-2 weeks',
      icon: <Brain className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-600'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'We implement and configure your solution with full support',
      duration: '2-4 weeks',
      icon: <Rocket className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-600'
    },
    {
      step: '04',
      title: 'Launch & Support',
      description: 'Go live with ongoing support and optimization',
      duration: 'Ongoing',
      icon: <Star className="w-6 h-6" />,
      color: 'from-orange-500 to-red-600'
    }
  ];

  const serviceCategories = [
    {
      title: 'AI & Machine Learning',
      description: 'Transform your business with intelligent automation and insights',
      features: [
        'AI consciousness platforms',
        'Machine learning models',
        'Predictive analytics',
        'Natural language processing'
      ],
      icon: <Brain className="w-8 h-8" />,
      color: 'from-purple-500 to-blue-600'
    },
    {
      title: 'Quantum Computing',
      description: 'Leverage next-generation quantum computing for complex problems',
      features: [
        'Quantum algorithms',
        'Hybrid quantum-classical solutions',
        'Optimization problems',
        'Cryptography applications'
      ],
      icon: <Atom className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Cybersecurity',
      description: 'Protect your business with advanced security solutions',
      features: [
        'Threat detection',
        'Compliance automation',
        'Security audits',
        'Incident response'
      ],
      icon: <Shield className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scale your operations with robust cloud solutions',
      features: [
        'Cloud migration',
        'Infrastructure optimization',
        'DevOps automation',
        'Performance monitoring'
      ],
      icon: <Globe className="w-8 h-8" />,
      color: 'from-orange-500 to-red-600'
    }
  ];

  const successStories = [
    {
      company: 'TechCorp Solutions',
      industry: 'Financial Services',
      challenge: 'Needed AI-powered fraud detection',
      solution: 'Implemented our AI consciousness platform',
      results: '95% reduction in fraud attempts, $2M annual savings',
      logo: 'TC'
    },
    {
      company: 'Global Manufacturing',
      industry: 'Manufacturing',
      challenge: 'Required quantum optimization for supply chain',
      solution: 'Deployed quantum computing solution',
      results: '30% improvement in efficiency, $5M cost reduction',
      logo: 'GM'
    },
    {
      company: 'HealthTech Innovations',
      industry: 'Healthcare',
      challenge: 'Cybersecurity compliance and patient data protection',
      solution: 'Comprehensive security and compliance platform',
      results: '100% compliance, zero security incidents',
      logo: 'HI'
    }
  ];

  const faqs = [
    {
      question: 'How long does it take to get started?',
      answer: 'The initial consultation can be scheduled within 24 hours. Full implementation typically takes 2-4 weeks depending on complexity.'
    },
    {
      question: 'What if I need to customize the solution?',
      answer: 'We specialize in custom solutions. Our team will work with you to design and implement exactly what your business needs.'
    },
    {
      question: 'Do you provide training and support?',
      answer: 'Yes, we provide comprehensive training for your team and ongoing support to ensure your success.'
    },
    {
      question: 'Can I start with a small implementation?',
      answer: 'Absolutely! We recommend starting with a pilot project to demonstrate value before scaling up.'
    }
  ];

  return (
    <Layout
      title="Get Started - Zion Tech Group"
      description="Start your journey with Zion Tech Group. Get expert guidance and implementation support for your technology transformation."
      keywords="get started, onboarding, implementation, Zion Tech Group, AI, quantum computing, cybersecurity"
    >
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Get Started
                </h1>
              </div>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Begin your technology transformation journey today
              </p>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Getting started with Zion Tech Group is simple. Our expert team will guide you 
                through every step of the process, from initial consultation to full implementation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Onboarding Steps */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Simple 4-Step Process
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                From consultation to launch, we make it easy to get started
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {onboardingSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 text-center"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg`}>
                    {step.step}
                  </div>
                  <div className={`w-10 h-10 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300 text-sm mb-3">{step.description}</p>
                  <div className="text-xs text-purple-400 font-semibold">{step.duration}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-20 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Choose Your Service
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Select the technology solution that best fits your business needs
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {serviceCategories.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mr-3`}>
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 text-sm font-semibold"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Success Stories
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                See how other businesses have transformed with our solutions
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <motion.div
                  key={story.company}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                      {story.logo}
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-blue-400">{story.industry}</div>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{story.company}</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="text-gray-400 font-semibold">Challenge:</div>
                      <div className="text-gray-300">{story.challenge}</div>
                    </div>
                    <div>
                      <div className="text-gray-400 font-semibold">Solution:</div>
                      <div className="text-gray-300">{story.solution}</div>
                    </div>
                    <div>
                      <div className="text-gray-400 font-semibold">Results:</div>
                      <div className="text-green-400 font-semibold">{story.results}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-black/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-400">
                Get answers to common questions about getting started
              </p>
            </motion.div>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30"
                >
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                Take the first step toward transforming your business with cutting-edge technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-2xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Schedule Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-500/30 text-purple-400 font-semibold rounded-2xl hover:border-purple-500/50 hover:text-purple-300 transition-all duration-300"
                >
                  Call Now: +1 302 464 0950
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default GetStarted;