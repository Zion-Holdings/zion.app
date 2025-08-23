import React from 'react';
import { motion } from 'framer-motion';
import { Handshake, Users, Target, Star, Globe, Award, Zap, Building } from 'lucide-react';
import Layout from '../components/layout/Layout';

const Partners: React.FC = () => {
  const partnershipTypes = [
    {
      title: 'Technology Partners',
      description: 'Collaborate on cutting-edge AI and quantum computing solutions',
      icon: <Zap className="w-8 h-8 text-blue-400" />,
      benefits: [
        'Access to revolutionary AI consciousness technology',
        'Joint product development opportunities',
        'Shared intellectual property rights',
        'Technical support and training'
      ]
    },
    {
      title: 'Research Partners',
      description: 'Advance AI consciousness research together',
      icon: <Target className="w-8 h-8 text-purple-400" />,
      benefits: [
        'Collaborative research projects',
        'Access to AI consciousness datasets',
        'Joint publication opportunities',
        'Research funding collaboration'
      ]
    },
    {
      title: 'Channel Partners',
      description: 'Distribute our revolutionary technology solutions',
      icon: <Globe className="w-8 h-8 text-green-400" />,
      benefits: [
        'Exclusive territory rights',
        'Competitive commission structure',
        'Marketing and sales support',
        'Product training and certification'
      ]
    },
    {
      title: 'Strategic Partners',
      description: 'Long-term strategic collaboration and joint ventures',
      icon: <Building className="w-8 h-8 text-orange-400" />,
      benefits: [
        'Strategic planning and roadmap alignment',
        'Joint market expansion initiatives',
        'Shared resources and infrastructure',
        'Board-level collaboration opportunities'
      ]
    }
  ];

  const currentPartners = [
    {
      name: 'Quantum Computing Corp',
      type: 'Technology Partner',
      description: 'Leading quantum computing solutions provider',
      logo: 'QC'
    },
    {
      name: 'AI Research Institute',
      type: 'Research Partner',
      description: 'Premier AI consciousness research organization',
      logo: 'AI'
    },
    {
      name: 'Global Tech Solutions',
      type: 'Channel Partner',
      description: 'International technology distribution network',
      logo: 'GT'
    },
    {
      name: 'Future Systems Inc',
      type: 'Strategic Partner',
      description: 'Innovative systems integration company',
      logo: 'FS'
    }
  ];

  const partnershipProcess = [
    {
      step: '01',
      title: 'Initial Discussion',
      description: 'Explore mutual interests and partnership opportunities'
    },
    {
      step: '02',
      title: 'Strategic Alignment',
      description: 'Align on goals, objectives, and partnership structure'
    },
    {
      step: '03',
      title: 'Agreement Development',
      description: 'Create comprehensive partnership agreement'
    },
    {
      step: '04',
      title: 'Launch & Execution',
      description: 'Begin partnership activities and joint initiatives'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-blue-900 to-purple-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm mb-6">
                <Star className="w-4 h-4 mr-2" />
                Partnership Opportunities
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Partner With Us
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Join forces with Zion Tech Group to revolutionize AI consciousness and 
                create the future of technology together.
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
              >
                Become a Partner
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Partnership Types Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Partnership Types
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore different ways to collaborate with us and leverage our 
                revolutionary AI consciousness technology.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnershipTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="mb-4">{type.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{type.title}</h3>
                  <p className="text-gray-300 mb-4">{type.description}</p>
                  
                  <div className="space-y-2">
                    {type.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Current Partners Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Current Partners
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Meet some of our valued partners who are already collaborating 
                with us to advance AI consciousness technology.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentPartners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                    {partner.logo}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{partner.name}</h3>
                  <div className="text-blue-400 text-sm mb-2">{partner.type}</div>
                  <p className="text-gray-300 text-sm">{partner.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Process Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Partnership Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our streamlined process makes it easy to become a partner and 
                start collaborating with us.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnershipProcess.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-2xl">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Partner With Us?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the advantages of partnering with Zion Tech Group 
                and our revolutionary AI consciousness technology.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-3xl font-bold text-white mb-6">
                  Revolutionary Technology Access
                </h3>
                <p className="text-lg text-gray-300 mb-6">
                  Gain access to our cutting-edge AI consciousness technology, 
                  quantum computing solutions, and autonomous systems that are 
                  shaping the future of technology.
                </p>
                <p className="text-lg text-gray-300 mb-6">
                  Our partners get exclusive access to technologies that are 
                  years ahead of the competition, giving you a significant 
                  market advantage.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">First-to-market advantage</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">Exclusive technology access</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">Joint innovation opportunities</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="w-full h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl border border-blue-400/30 flex items-center justify-center">
                  <Handshake className="w-32 h-32 text-blue-400" />
                </div>
              </motion.div>
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
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Partner?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join forces with us to revolutionize AI consciousness and create 
                the future of technology together. Let's discuss partnership opportunities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  Start Partnership Discussion
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-xl hover:bg-blue-400 hover:text-black transition-all duration-300"
                >
                  Download Partnership Guide
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Partners;