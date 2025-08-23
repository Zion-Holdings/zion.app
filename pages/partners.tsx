import React from 'react';
import { motion } from 'framer-motion';
import { 
  Handshake, Users, Award, Target, Globe, 
  Zap, Shield, Brain, Rocket, Building,
  CheckCircle, Star, TrendingUp, Lightbulb,
  ChevronRight, ExternalLink
} from 'lucide-react';
import Link from 'next/link';
import Layout from '../components/layout/Layout';

const PartnersPage: React.FC = () => {
  const partnerCategories = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI & Technology Partners',
      description: 'Leading AI research institutions and technology innovators',
      partners: [
        { name: 'OpenAI', logo: '🤖', description: 'Advanced AI research and development' },
        { name: 'Anthropic', logo: '🧠', description: 'AI safety and research' },
        { name: 'Google AI', logo: '🔍', description: 'Machine learning and research' },
        { name: 'Microsoft AI', logo: '🪟', description: 'Enterprise AI solutions' }
      ]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Quantum Computing Partners',
      description: 'Pioneers in quantum computing and quantum technologies',
      partners: [
        { name: 'IBM Quantum', logo: '⚛️', description: 'Quantum computing platform' },
        { name: 'Google Quantum', logo: '🔬', description: 'Quantum supremacy research' },
        { name: 'Rigetti', logo: '🌌', description: 'Quantum cloud services' },
        { name: 'D-Wave', logo: '🔥', description: 'Quantum annealing solutions' }
      ]
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Space Technology Partners',
      description: 'Space exploration and satellite technology leaders',
      partners: [
        { name: 'SpaceX', logo: '🚀', description: 'Space transportation and exploration' },
        { name: 'Blue Origin', logo: '🌍', description: 'Space tourism and research' },
        { name: 'NASA', logo: '🛰️', description: 'Space research and exploration' },
        { name: 'ESA', logo: '🌌', description: 'European space agency' }
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Cybersecurity Partners',
      description: 'Enterprise security and threat protection experts',
      partners: [
        { name: 'CrowdStrike', logo: '🦅', description: 'Endpoint security solutions' },
        { name: 'Palo Alto Networks', logo: '🛡️', description: 'Network security' },
        { name: 'Fortinet', logo: '🔒', description: 'Unified threat management' },
        { name: 'Check Point', logo: '✅', description: 'Security management' }
      ]
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Access to Cutting-Edge Technology',
      description: 'Early access to the latest AI, quantum, and space technologies'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Global Market Reach',
      description: 'Expand your business presence across international markets'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Expert Support Network',
      description: 'Connect with industry experts and thought leaders'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Certification Programs',
      description: 'Professional certifications and training opportunities'
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Innovation Collaboration',
      description: 'Joint research and development opportunities'
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Quality Assurance',
      description: 'Access to our proven methodologies and best practices'
    }
  ];

  const partnershipLevels = [
    {
      name: 'Strategic Partner',
      description: 'Deep integration and joint go-to-market strategies',
      features: ['Exclusive technology access', 'Joint marketing campaigns', 'Priority support', 'Revenue sharing'],
      color: 'from-blue-600 to-purple-600'
    },
    {
      name: 'Technology Partner',
      description: 'Technology integration and joint development',
      features: ['API access', 'Technical support', 'Joint development', 'Market access'],
      color: 'from-green-600 to-blue-600'
    },
    {
      name: 'Solution Partner',
      description: 'Solution delivery and implementation support',
      features: ['Solution delivery', 'Implementation support', 'Training programs', 'Certification'],
      color: 'from-orange-600 to-red-600'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-blue-600/20 rounded-full">
                  <Handshake className="w-16 h-16 text-blue-400" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Strategic <span className="text-blue-400">Partnerships</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Join forces with Zion Tech Group and our network of world-class technology 
                partners to accelerate innovation and drive business transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                >
                  Become a Partner
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  href="#partnership-levels"
                  className="inline-flex items-center px-8 py-4 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Partner Categories */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Our Partner Ecosystem</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Strategic alliances with industry leaders across AI, quantum computing, 
                space technology, and cybersecurity
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {partnerCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 rounded-lg p-8 border border-gray-700"
                >
                  <div className="flex items-center mb-6 text-blue-400">
                    {category.icon}
                    <h3 className="text-2xl font-semibold text-white ml-3">{category.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{category.description}</p>
                  <div className="space-y-4">
                    {category.partners.map((partner, pIndex) => (
                      <div key={partner.name} className="flex items-center p-3 bg-gray-800/50 rounded-lg">
                        <div className="text-2xl mr-3">{partner.logo}</div>
                        <div>
                          <h4 className="font-semibold text-white">{partner.name}</h4>
                          <p className="text-sm text-gray-400">{partner.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Partnership Benefits</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the advantages of partnering with Zion Tech Group and our ecosystem
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-colors"
                >
                  <div className="flex justify-center mb-4 text-blue-400">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Levels */}
        <section id="partnership-levels" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Partnership Levels</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the partnership level that best fits your business objectives and goals
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {partnershipLevels.map((level, index) => (
                <motion.div
                  key={level.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 rounded-lg p-8 border border-gray-700 hover:border-blue-500/50 transition-colors"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${level.color} rounded-lg flex items-center justify-center mb-6 mx-auto`}>
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">{level.name}</h3>
                  <p className="text-gray-300 mb-6 text-center">{level.description}</p>
                  <ul className="space-y-3">
                    {level.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Partner with Us?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join our ecosystem of technology innovators and transform your business 
                with cutting-edge solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                >
                  Start Partnership Discussion
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  href="/case-studies"
                  className="inline-flex items-center px-8 py-4 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors"
                >
                  View Success Stories
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default PartnersPage;