import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Users, Handshake, Globe, Target, Star, ArrowRight,
  CheckCircle, Play, BookOpen, MessageCircle, Phone,
  Building, Award, Zap, Shield, Brain, Rocket
} from 'lucide-react';

const Partners: React.FC = () => {
  const partnershipTypes = [
    {
      icon: <Building className="w-6 h-6" />,
      title: 'Technology Partners',
      description: 'Collaborate on cutting-edge technology solutions and joint product development.',
      benefits: [
        'Access to our technology stack',
        'Joint go-to-market strategies',
        'Shared R&D resources',
        'Co-innovation opportunities'
      ]
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Channel Partners',
      description: 'Distribute our solutions through your established sales channels and networks.',
      benefits: [
        'Competitive commission structure',
        'Marketing and sales support',
        'Training and certification',
        'Dedicated partner success team'
      ]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Strategic Partners',
      description: 'Long-term strategic relationships for market expansion and innovation.',
      benefits: [
        'Exclusive partnership agreements',
        'Shared intellectual property',
        'Joint venture opportunities',
        'Board-level collaboration'
      ]
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'Startup Partners',
      description: 'Support emerging technology companies with mentorship and resources.',
      benefits: [
        'Access to our innovation lab',
        'Mentorship from industry experts',
        'Investment opportunities',
        'Market access support'
      ]
    }
  ];

  const industries = [
    'Artificial Intelligence & Machine Learning',
    'Quantum Computing & Cryptography',
    'Space Technology & Satellite Systems',
    'Blockchain & Web3 Solutions',
    'Edge Computing & IoT',
    'Metaverse & Virtual Reality',
    'Cybersecurity & Privacy',
    'Cloud Infrastructure & DevOps'
  ];

  const successStories = [
    {
      company: 'TechCorp Solutions',
      industry: 'AI & Machine Learning',
      result: 'Increased revenue by 300% through joint AI solution development',
      testimonial: 'Working with Zion Tech Group has transformed our AI capabilities and market position.'
    },
    {
      company: 'QuantumSecure Inc',
      industry: 'Quantum Technology',
      result: 'Launched breakthrough quantum encryption product in 6 months',
      testimonial: 'The partnership accelerated our time-to-market by leveraging Zion\'s quantum expertise.'
    },
    {
      company: 'SpaceData Systems',
      industry: 'Space Technology',
      result: 'Expanded to 15 new markets with satellite data solutions',
      testimonial: 'Zion\'s global reach and technical expertise opened doors we never thought possible.'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-sm font-medium mb-6">
                <Handshake className="w-4 h-4 mr-2" />
                Partnership Opportunities
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Partner With Zion Tech Group
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Join our global network of technology partners and together we'll shape the future 
                of AI, quantum computing, space technology, and beyond.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
                  Become a Partner
                </button>
                <button className="px-8 py-4 border border-cyan-400/20 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-200">
                  <Play className="w-5 h-5 inline mr-2" />
                  Watch Partnership Overview
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Partnership Types Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Partnership Opportunities
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Choose the partnership model that best fits your business goals and objectives
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {partnershipTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-cyan-400/10 rounded-lg flex items-center justify-center mb-6">
                    {type.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {type.title}
                  </h3>
                  <p className="text-gray-400 mb-6">
                    {type.description}
                  </p>
                  <ul className="space-y-3">
                    {type.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Industries We Serve
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Partner with us across diverse technology sectors and markets
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-cyan-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-cyan-400" />
                  </div>
                  <p className="text-white font-medium text-sm">{industry}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Partner Success Stories
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                See how our partners have achieved remarkable results through collaboration
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6"
                >
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-white mb-2">{story.company}</h3>
                    <p className="text-cyan-400 text-sm">{story.industry}</p>
                  </div>
                  <p className="text-gray-300 mb-4">{story.result}</p>
                  <blockquote className="text-gray-400 italic text-sm">
                    "{story.testimonial}"
                  </blockquote>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-blue-600/10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Partner With Us?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join our global network and together we'll create the technologies of tomorrow
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
                  Start Partnership Discussion
                </button>
                <a
                  href="/contact"
                  className="px-8 py-4 border border-cyan-400/20 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-200"
                >
                  Contact Partnership Team
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