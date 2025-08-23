import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Handshake, Users, Globe, Zap, Brain, Atom, 
  ArrowRight, CheckCircle, Star, Building, Shield
} from 'lucide-react';
import Link from 'next/link';

const Partners: React.FC = () => {
  const partnershipTypes = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Technology Partners',
      description: 'Collaborate on cutting-edge AI, quantum computing, and cybersecurity solutions',
      benefits: [
        'Access to our advanced technology stack',
        'Joint product development opportunities',
        'Shared intellectual property rights',
        'Technical support and training'
      ],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: 'Channel Partners',
      description: 'Resell and distribute our solutions to your customer base',
      benefits: [
        'Competitive commission structure',
        'Marketing and sales support',
        'Product training and certification',
        'Dedicated partner success manager'
      ],
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Partners',
      description: 'Expand our reach into new markets and regions',
      benefits: [
        'Exclusive territory rights',
        'Local market expertise support',
        'Cultural adaptation assistance',
        'Joint go-to-market strategies'
      ],
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Security Partners',
      description: 'Collaborate on cybersecurity and compliance solutions',
      benefits: [
        'Shared security research and development',
        'Joint compliance initiatives',
        'Security certification programs',
        'Threat intelligence sharing'
      ],
      color: 'from-orange-500 to-red-600'
    }
  ];

  const partnerBenefits = [
    {
      title: 'Revenue Growth',
      description: 'Access new markets and revenue streams through our innovative solutions',
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: 'Technology Access',
      description: 'Leverage our cutting-edge AI and quantum computing technologies',
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: 'Market Expansion',
      description: 'Enter new markets with our proven solutions and support',
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: 'Innovation Partnership',
      description: 'Collaborate on next-generation technology development',
      icon: <Atom className="w-6 h-6" />
    }
  ];

  const existingPartners = [
    {
      name: 'QuantumTech Solutions',
      logo: 'QT',
      industry: 'Quantum Computing',
      partnership: 'Technology Partner',
      description: 'Leading provider of quantum computing infrastructure and solutions.',
      year: '2023'
    },
    {
      name: 'AISecure Systems',
      logo: 'AS',
      industry: 'Cybersecurity',
      partnership: 'Security Partner',
      description: 'Specialized in AI-powered cybersecurity and threat detection.',
      year: '2023'
    },
    {
      name: 'CloudScale Dynamics',
      logo: 'CD',
      industry: 'Cloud Infrastructure',
      partnership: 'Technology Partner',
      description: 'Enterprise cloud infrastructure and scaling solutions.',
      year: '2024'
    },
    {
      name: 'DataFlow Analytics',
      logo: 'DA',
      industry: 'Business Intelligence',
      partnership: 'Channel Partner',
      description: 'Advanced analytics and business intelligence solutions.',
      year: '2024'
    }
  ];

  const partnershipProcess = [
    {
      step: '01',
      title: 'Initial Discussion',
      description: 'Schedule a meeting to discuss partnership opportunities and mutual goals.',
      duration: '1-2 weeks'
    },
    {
      step: '02',
      title: 'Partnership Assessment',
      description: 'Evaluate compatibility, market fit, and potential for collaboration.',
      duration: '2-3 weeks'
    },
    {
      step: '03',
      title: 'Agreement Development',
      description: 'Draft and negotiate partnership terms and conditions.',
      duration: '3-4 weeks'
    },
    {
      step: '04',
      title: 'Launch & Support',
      description: 'Execute partnership agreement and provide ongoing support.',
      duration: 'Ongoing'
    }
  ];

  return (
    <Layout
      title="Partners - Zion Tech Group"
      description="Partner with Zion Tech Group to expand your business and access cutting-edge technology solutions."
      keywords="partners, partnerships, technology partners, channel partners, Zion Tech Group"
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
                  <Handshake className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Partners
                </h1>
              </div>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Grow together with strategic partnerships
              </p>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Join our network of technology partners and expand your business with 
                cutting-edge AI, quantum computing, and cybersecurity solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Partnership Types */}
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
                Partnership Types
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Choose the partnership model that best fits your business goals
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {partnershipTypes.map((type, index) => (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-3xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${type.color} rounded-2xl flex items-center justify-center mb-6`}>
                    {type.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{type.title}</h3>
                  <p className="text-gray-300 mb-6">{type.description}</p>
                  <ul className="space-y-3">
                    {type.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Benefits */}
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
                Why Partner With Us?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Discover the advantages of partnering with Zion Tech Group
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {partnerBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-blue-500/50 transition-all duration-300 text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Existing Partners */}
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
                Our Partners
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Meet some of our trusted technology partners
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {existingPartners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                      {partner.logo}
                    </div>
                    <div className="text-right">
                      <span className="bg-purple-500/20 text-purple-400 text-xs font-semibold px-2 py-1 rounded-full">
                        {partner.partnership}
                      </span>
                      <div className="text-sm text-gray-400 mt-1">{partner.year}</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                  <div className="text-sm text-purple-400 mb-3">{partner.industry}</div>
                  <p className="text-gray-300 text-sm mb-4">{partner.description}</p>
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-gray-400">Trusted Partner</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Process */}
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
                Partnership Process
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Simple steps to become a Zion Tech Group partner
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {partnershipProcess.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-green-500/50 transition-all duration-300 text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300 text-sm mb-3">{step.description}</p>
                  <div className="text-xs text-green-400 font-semibold">{step.duration}</div>
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
                Ready to Partner With Us?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                Let's discuss how we can grow together and create innovative solutions for your customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-2xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Partnership Discussion
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <a
                  href="mailto:partnerships@ziontechgroup.com"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-500/30 text-purple-400 font-semibold rounded-2xl hover:border-purple-500/50 hover:text-purple-300 transition-all duration-300"
                >
                  Email Partnerships Team
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Partners;