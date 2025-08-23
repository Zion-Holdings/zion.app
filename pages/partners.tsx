import React from 'react';
import { motion } from 'framer-motion';
import { Users, Handshake, Star, Globe, Rocket, Brain, Atom, Shield, Target, Award, Check } from 'lucide-react';
import Layout from '../components/layout/Layout';

const partnershipTypes = [
  {
    name: 'Technology Partners',
    description: 'Collaborate on cutting-edge technology development and innovation',
    benefits: [
      'Joint R&D initiatives',
      'Technology licensing opportunities',
      'Co-innovation programs',
      'Market expansion support'
    ],
    icon: <Brain className="w-8 h-8 text-cyan-400" />,
    color: 'from-cyan-500 to-blue-600'
  },
  {
    name: 'Channel Partners',
    description: 'Resell and distribute our solutions to your customer base',
    benefits: [
      'Competitive margins',
      'Marketing support',
      'Technical training',
      'Sales enablement tools'
    ],
    icon: <Target className="w-8 h-8 text-green-400" />,
    color: 'from-green-500 to-emerald-600'
  },
  {
    name: 'Strategic Partners',
    description: 'Long-term strategic alliances for market leadership',
    benefits: [
      'Exclusive market access',
      'Joint go-to-market strategies',
      'Shared intellectual property',
      'Investment opportunities'
    ],
    icon: <Star className="w-8 h-8 text-yellow-400" />,
    color: 'from-yellow-500 to-orange-600'
  },
  {
    name: 'Academic Partners',
    description: 'Research collaborations with leading universities and institutions',
    benefits: [
      'Joint research projects',
      'Student internship programs',
      'Technology transfer opportunities',
      'Publication collaborations'
    ],
    icon: <Globe className="w-8 h-8 text-purple-400" />,
    color: 'from-purple-500 to-pink-600'
  }
];

const existingPartners = [
  {
    name: 'Quantum Computing Corp',
    logo: '🔬',
    description: 'Leading quantum computing hardware manufacturer',
    partnership: 'Technology Partner',
    year: '2024'
  },
  {
    name: 'AI Research Institute',
    logo: '🧠',
    description: 'Premier AI research organization',
    partnership: 'Academic Partner',
    year: '2023'
  },
  {
    name: 'Space Exploration Ltd',
    logo: '🚀',
    description: 'Advanced space technology company',
    partnership: 'Strategic Partner',
    year: '2024'
  },
  {
    name: 'Global Tech Solutions',
    logo: '🌐',
    description: 'Enterprise technology consulting firm',
    partnership: 'Channel Partner',
    year: '2023'
  }
];

const partnerBenefits = [
  {
    title: 'Revenue Growth',
    description: 'Access new markets and revenue streams through our innovative solutions',
    icon: <Target className="w-6 h-6 text-green-400" />
  },
  {
    title: 'Technology Access',
    description: 'Get early access to cutting-edge AI, quantum, and space technologies',
    icon: <Brain className="w-6 h-6 text-cyan-400" />
  },
  {
    title: 'Market Expansion',
    description: 'Expand your reach into new industries and geographic markets',
    icon: <Globe className="w-6 h-6 text-blue-400" />
  },
  {
    title: 'Innovation Leadership',
    description: 'Position yourself as a technology leader in your industry',
    icon: <Rocket className="w-6 h-6 text-orange-400" />
  }
];

export default function Partners() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-green-500/10" />
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-green-600 bg-clip-text text-transparent mb-6">
                Partnership Opportunities
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Join forces with Zion Tech Group to shape the future of technology and create unprecedented value for your customers
              </p>
            </motion.div>
          </div>
        </section>

        {/* Partnership Types */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-6">
                Partnership Models
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the partnership model that best aligns with your business goals and objectives
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {partnershipTypes.map((type, index) => (
                <motion.div
                  key={type.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-blue-400/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    {type.icon}
                    <h3 className="text-2xl font-bold text-white">{type.name}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{type.description}</p>
                  <ul className="space-y-3">
                    {type.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <Check className="w-5 h-5 text-green-400 mr-3" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Existing Partners */}
        <section className="py-20 px-4 bg-black/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-green-500 bg-clip-text text-transparent mb-6">
                Our Partners
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leading organizations that have chosen to partner with us in shaping the future
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {existingPartners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center hover:border-purple-400/50 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{partner.logo}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{partner.name}</h3>
                  <p className="text-sm text-gray-400 mb-3">{partner.description}</p>
                  <div className="inline-block px-3 py-1 bg-gradient-to-r from-purple-500 to-blue-600 text-white text-xs font-semibold rounded-full mb-2">
                    {partner.partnership}
                  </div>
                  <div className="text-xs text-gray-500">Since {partner.year}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Benefits */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-6">
                Why Partner With Us?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the advantages of partnering with Zion Tech Group
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {partnerBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl"
                >
                  <div className="flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent mb-6">
                Ready to Partner?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how we can create value together and shape the future of technology
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Partnership Discussion
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  Download Partnership Guide
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}