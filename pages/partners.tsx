import React from 'react';
import { motion } from 'framer-motion';
import { Users, Handshake, Globe, Rocket, Star, ArrowRight, CheckCircle, Award, Target, Zap, Building, Code } from 'lucide-react';
import Link from 'next/link';
import Button from '../components/ui/Button';

export default function Partners() {
  const partnershipTypes = [
    {
      title: 'Technology Partners',
      description: 'Collaborate on cutting-edge technology development',
      icon: <Code className="w-8 h-8 text-cyan-400" />,
      benefits: ['Joint R&D projects', 'Technology licensing', 'Co-innovation labs'],
      examples: ['AI research institutions', 'Quantum computing companies', 'Space technology firms']
    },
    {
      title: 'Channel Partners',
      description: 'Distribute and implement our solutions globally',
      icon: <Globe className="w-8 h-8 text-blue-400" />,
      benefits: ['Revenue sharing', 'Training and certification', 'Marketing support'],
      examples: ['System integrators', 'Consulting firms', 'VARs and resellers']
    },
    {
      title: 'Strategic Partners',
      description: 'Long-term strategic alliances for market expansion',
      icon: <Handshake className="w-8 h-8 text-green-400" />,
      benefits: ['Market access', 'Joint go-to-market', 'Investment opportunities'],
      examples: ['Enterprise software companies', 'Cloud providers', 'Industry leaders']
    },
    {
      title: 'Academic Partners',
      description: 'Research collaboration and talent development',
      icon: <Building className="w-8 h-8 text-purple-400" />,
      benefits: ['Research grants', 'Student programs', 'Publication opportunities'],
      examples: ['Universities', 'Research institutes', 'Think tanks']
    }
  ];

  const currentPartners = [
    {
      name: 'TechCorp Solutions',
      type: 'Technology Partner',
      logo: 'TC',
      description: 'Leading AI research and development collaboration',
      achievements: ['Joint AI platform', '5 research papers', 'Patent portfolio']
    },
    {
      name: 'Quantum Dynamics',
      type: 'Technology Partner',
      logo: 'QD',
      description: 'Quantum computing research and development',
      achievements: ['Quantum algorithms', 'Hardware integration', 'Security protocols']
    },
    {
      name: 'Space Innovations Inc',
      type: 'Strategic Partner',
      logo: 'SI',
      description: 'Space technology and exploration collaboration',
      achievements: ['Resource mining', 'Satellite systems', 'Mission planning']
    },
    {
      name: 'Global Systems',
      type: 'Channel Partner',
      logo: 'GS',
      description: 'Enterprise solution implementation',
      achievements: ['100+ deployments', '24/7 support', 'Training programs']
    }
  ];

  const partnershipBenefits = [
    'Access to cutting-edge AI and quantum technology',
    'Revenue sharing and profit margins up to 40%',
    'Comprehensive training and certification programs',
    'Dedicated partner support and resources',
    'Joint marketing and lead generation',
    'Technology roadmap influence and early access'
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <Handshake className="w-16 h-16 text-blue-400" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-600 bg-clip-text text-transparent mb-6">
              Partnership Opportunities
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Join our ecosystem of technology partners and help shape the future of AI, quantum computing, and space technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="#partnership-types" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 text-lg">
                Explore Partnerships
              </Button>
              <Button href="/contact" variant="outline" className="border-blue-500 text-blue-400 px-8 py-4 text-lg">
                Become a Partner
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Partner With Us?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive benefits and opportunities for strategic partnerships
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnershipBenefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-4 p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl"
              >
                <CheckCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section id="partnership-types" className="py-20 bg-gradient-to-r from-blue-900/10 via-purple-900/10 to-cyan-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Partnership Types
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Multiple partnership models to fit your business goals and capabilities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnershipTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="mb-6">
                  {type.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{type.title}</h3>
                <p className="text-gray-400 mb-6">{type.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {type.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-blue-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3">Examples:</h4>
                  <ul className="space-y-2">
                    {type.examples.map((example, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <Star className="w-4 h-4 text-yellow-400 mr-2" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button href="/contact" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                  Learn More
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Partners
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Meet some of our strategic partners who are helping us build the future
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {currentPartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                    {partner.logo}
                  </div>
                  <span className="inline-block bg-blue-500/20 text-blue-400 text-xs px-3 py-1 rounded-full">
                    {partner.type}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{partner.name}</h3>
                <p className="text-gray-400 mb-6">{partner.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {partner.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <Award className="w-4 h-4 text-yellow-400 mr-2" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link 
                  href="/contact"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-20 bg-gradient-to-r from-blue-900/10 via-purple-900/10 to-cyan-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Partnership Process
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Simple steps to become a valued partner in our ecosystem
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Initial Contact</h3>
              <p className="text-gray-400">Reach out to discuss partnership opportunities</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Evaluation</h3>
              <p className="text-gray-400">We assess mutual fit and opportunities</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Agreement</h3>
              <p className="text-gray-400">Finalize partnership terms and agreement</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Launch</h3>
              <p className="text-gray-400">Begin collaboration and joint initiatives</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-cyan-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join our ecosystem and help shape the future of technology together
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-4 text-lg">
                Start Partnership Discussion
              </Button>
              <Button href="/about" variant="outline" className="border-blue-500 text-blue-400 px-10 py-4 text-lg">
                Learn More About Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}