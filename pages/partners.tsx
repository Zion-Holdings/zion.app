import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Users, Award, Target, Globe, Zap, 
  Brain, Atom, Shield, Rocket, Star,
  CheckCircle, ArrowRight, Handshake, Building,
  TrendingUp, Globe2, Cpu, Database
} from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partnershipTypes = [
    {
      icon: <Building className="w-12 h-12 text-blue-400" />,
      title: 'Technology Partners',
      description: 'Collaborate on cutting-edge AI, quantum computing, and space technology solutions.',
      benefits: [
        'Joint product development',
        'Shared intellectual property',
        'Market expansion opportunities',
        'Technical expertise exchange'
      ],
      examples: ['Microsoft Azure', 'AWS', 'Google Cloud', 'IBM Quantum']
    },
    {
      icon: <Handshake className="w-12 h-12 text-green-400" />,
      title: 'Strategic Partners',
      description: 'Form long-term strategic alliances to dominate emerging technology markets.',
      benefits: [
        'Market leadership positioning',
        'Shared customer base',
        'Joint go-to-market strategies',
        'Investment and funding opportunities'
      ],
      examples: ['SpaceX', 'NASA', 'DARPA', 'Major Universities']
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-purple-400" />,
      title: 'Channel Partners',
      description: 'Resell and implement our solutions to expand market reach and customer base.',
      benefits: [
        'High-margin reseller opportunities',
        'Technical training and certification',
        'Marketing and sales support',
        'Recurring revenue streams'
      ],
      examples: ['System Integrators', 'Consulting Firms', 'VARs', 'MSPs']
    },
    {
      icon: <Globe2 className="w-12 h-12 text-orange-400" />,
      title: 'Global Partners',
      description: 'Expand internationally through strategic partnerships in key global markets.',
      benefits: [
        'Local market expertise',
        'Regulatory compliance support',
        'Cultural and language adaptation',
        'Regional customer relationships'
      ],
      examples: ['European Tech Firms', 'Asian Innovation Hubs', 'Latin American Partners']
    }
  ];

  const currentPartners = [
    {
      name: 'Microsoft',
      logo: 'M',
      category: 'Technology Partner',
      description: 'Strategic partnership in AI and cloud computing solutions.',
      achievements: ['Joint AI research projects', 'Azure integration', 'Enterprise solutions']
    },
    {
      name: 'IBM',
      logo: 'I',
      category: 'Quantum Computing Partner',
      description: 'Collaboration on quantum computing research and development.',
      achievements: ['Quantum algorithm development', 'Research publications', 'Joint patents']
    },
    {
      name: 'SpaceX',
      logo: 'S',
      category: 'Space Technology Partner',
      description: 'Partnership in space resource intelligence and mining platforms.',
      achievements: ['Satellite data integration', 'Space mining research', 'Technology transfer']
    },
    {
      name: 'Stanford University',
      logo: 'S',
      category: 'Academic Partner',
      description: 'Research collaboration in AI consciousness and quantum computing.',
      achievements: ['Joint research papers', 'Student exchange programs', 'Innovation labs']
    }
  ];

  const partnershipBenefits = [
    {
      icon: <Star className="w-8 h-8 text-yellow-400" />,
      title: 'Access to Cutting-Edge Technology',
      description: 'Get early access to our revolutionary AI, quantum, and space technology platforms.'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-400" />,
      title: 'Expert Team Support',
      description: 'Work directly with our world-class researchers and engineers.'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-400" />,
      title: 'Revenue Growth Opportunities',
      description: 'Tap into new markets and customer segments with our innovative solutions.'
    },
    {
      icon: <Award className="w-8 h-8 text-purple-400" />,
      title: 'Market Leadership',
      description: 'Position yourself as a leader in emerging technology markets.'
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
      title: 'Strategic Alignment',
      description: 'Evaluate strategic fit, market opportunities, and partnership structure.',
      duration: '2-4 weeks'
    },
    {
      step: '03',
      title: 'Partnership Agreement',
      description: 'Negotiate and finalize partnership terms, responsibilities, and revenue sharing.',
      duration: '4-6 weeks'
    },
    {
      step: '04',
      title: 'Launch & Execution',
      description: 'Begin joint initiatives, marketing campaigns, and go-to-market activities.',
      duration: 'Ongoing'
    }
  ];

  return (
    <Layout seo={{
      title: 'Partners - Zion Tech Group | Strategic Technology Partnerships',
      description: 'Partner with Zion Tech Group to access cutting-edge AI, quantum computing, and space technology solutions. Join our ecosystem of innovation.',
      keywords: 'partners, partnerships, Zion Tech Group, technology partnerships, AI partners, quantum computing',
      url: 'https://ziontechgroup.com/partners'
    }}>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
          <div className="relative z-10 container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6">
                Strategic Technology Partnerships
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                Join our ecosystem of innovation and help shape the future of technology. 
                Partner with Zion Tech Group to access cutting-edge AI, quantum computing, and space technology solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-white">
                <div className="flex items-center space-x-3">
                  <Handshake className="w-6 h-6 text-blue-400" />
                  <span className="text-lg">50+ Active Partners</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-6 h-6 text-purple-400" />
                  <span className="text-lg">Global Reach</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-6 h-6 text-yellow-400" />
                  <span className="text-lg">Mutual Success</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Partnership Types */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Partnership Opportunities
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Choose the partnership model that best fits your business goals and strategic objectives.
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {partnershipTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="mb-6">{type.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{type.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{type.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Benefits</h4>
                    <ul className="space-y-2">
                      {type.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Example Partners</h4>
                    <div className="flex flex-wrap gap-2">
                      {type.examples.map((example, exampleIndex) => (
                        <span 
                          key={exampleIndex}
                          className="px-3 py-1 bg-blue-600/20 text-blue-300 text-sm rounded-full border border-blue-500/30"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Current Partners */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Our Current Partners
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Meet some of the innovative organizations already partnering with Zion Tech Group 
                to revolutionize technology and drive industry transformation.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {currentPartners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold">
                      {partner.logo}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{partner.name}</h3>
                      <p className="text-blue-400 font-medium">{partner.category}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">{partner.description}</p>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2 uppercase tracking-wide">Key Achievements</h4>
                    <div className="space-y-1">
                      {partner.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-center space-x-2">
                          <Star className="w-3 h-3 text-yellow-400" />
                          <span className="text-gray-400 text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Why Partner With Us?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Discover the unique advantages of partnering with Zion Tech Group and 
                how we can accelerate your success in emerging technology markets.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {partnershipBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="mb-4 flex justify-center">{benefit.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Process */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Partnership Process
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our streamlined partnership process ensures a smooth and efficient 
                journey from initial discussion to successful collaboration.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {partnershipProcess.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400 mb-3 leading-relaxed">{step.description}</p>
                  <div className="inline-block px-3 py-1 bg-blue-600/20 text-blue-300 text-sm rounded-full border border-blue-500/30">
                    {step.duration}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Partner With Us?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join our ecosystem of innovation and help shape the future of technology. 
                Let's discuss how we can create mutual success together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Partnership Discussion
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="mailto:partnerships@ziontechgroup.com"
                  className="inline-flex items-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:border-purple-500 hover:text-purple-400 transition-all duration-300"
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

export default PartnersPage;