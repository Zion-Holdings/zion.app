import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Users, Handshake, Globe, Rocket, Shield, Target, Star, Award, Building, Zap } from 'lucide-react';

const Partners: React.FC = () => {
  const partnershipTypes = [
    {
      title: 'Technology Partners',
      description: 'Integrate with leading technology platforms and tools',
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      benefits: [
        'API Integration Support',
        'Joint Go-to-Market',
        'Technical Collaboration',
        'Revenue Sharing'
      ]
    },
    {
      title: 'Channel Partners',
      description: 'Resell and distribute our solutions to your customers',
      icon: <Users className="w-8 h-8 text-blue-400" />,
      benefits: [
        'Competitive Margins',
        'Sales Enablement',
        'Marketing Support',
        'Training & Certification'
      ]
    },
    {
      title: 'Strategic Partners',
      description: 'Deep collaboration on joint solutions and markets',
      icon: <Handshake className="w-8 h-8 text-green-400" />,
      benefits: [
        'Joint Product Development',
        'Market Expansion',
        'Shared Resources',
        'Long-term Relationships'
      ]
    }
  ];

  const currentPartners = [
    {
      name: 'Microsoft Azure',
      logo: '🔵',
      description: 'Cloud infrastructure and AI services partnership',
      category: 'Technology'
    },
    {
      name: 'Amazon Web Services',
      logo: '🟠',
      description: 'Cloud computing and machine learning collaboration',
      category: 'Technology'
    },
    {
      name: 'Google Cloud',
      logo: '🔴',
      description: 'AI and quantum computing partnership',
      category: 'Technology'
    },
    {
      name: 'IBM',
      logo: '🔵',
      description: 'Quantum computing and enterprise solutions',
      category: 'Strategic'
    }
  ];

  const partnershipBenefits = [
    {
      title: 'Revenue Growth',
      description: 'Access new markets and customer segments',
      icon: <Target className="w-6 h-6 text-green-400" />
    },
    {
      title: 'Technology Innovation',
      description: 'Collaborate on cutting-edge solutions',
      icon: <Rocket className="w-6 h-6 text-blue-400" />
    },
    {
      title: 'Market Expansion',
      description: 'Enter new geographic regions and industries',
      icon: <Globe className="w-6 h-6 text-purple-400" />
    },
    {
      title: 'Risk Mitigation',
      description: 'Share resources and expertise',
      icon: <Shield className="w-6 h-6 text-cyan-400" />
    }
  ];

  const industries = [
    'Healthcare & Life Sciences',
    'Financial Services',
    'Manufacturing',
    'Retail & E-commerce',
    'Energy & Utilities',
    'Government & Defense',
    'Education',
    'Transportation & Logistics'
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Partnership Opportunities
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join forces with Zion Tech Group to deliver innovative technology solutions and create mutual value for our customers
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Become a Partner
                </button>
                <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                  View Partnership Guide
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Partnership Types */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Partnership Models
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Choose the partnership model that best fits your business strategy and goals
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {partnershipTypes.map((type, index) => (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="mb-6">
                    {type.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{type.title}</h3>
                  <p className="text-gray-400 mb-6">{type.description}</p>
                  <ul className="space-y-3">
                    {type.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Current Partners */}
        <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Our Partners
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Trusted by leading technology companies and organizations worldwide
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {currentPartners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl border border-white/10 rounded-xl p-6 text-center hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{partner.logo}</div>
                  <h3 className="text-xl font-bold mb-2 text-white">{partner.name}</h3>
                  <p className="text-gray-400 mb-3">{partner.description}</p>
                  <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                    {partner.category}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Why Partner With Us?
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Discover the advantages of partnering with Zion Tech Group
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnershipBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Target Industries
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                We're looking for partners in these key industries and more
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl border border-white/10 rounded-lg p-4 text-center hover:border-cyan-400/30 transition-all duration-300"
                >
                  <span className="text-gray-300">{industry}</span>
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Ready to Partner?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can work together to create value for our customers
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Start Partnership Discussion
                </button>
                <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                  Download Partnership Guide
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Partners;