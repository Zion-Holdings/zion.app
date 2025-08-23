import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Handshake, Users, Globe, Zap, Brain, Atom, 
  ArrowRight, CheckCircle, Star, Building, Shield,
  Award, Rocket
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
      description: 'Get early access to our latest AI consciousness and quantum computing technologies',
      icon: <Brain className="w-6 h-6" />
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

  const successStories = [
    {
      company: "TechCorp Solutions",
      industry: "Enterprise Software",
      result: "Increased revenue by 300% through AI consciousness platform integration",
      testimonial: "Zion Tech Group's partnership transformed our business model and opened new markets we never thought possible."
    },
    {
      company: "Quantum Systems Inc",
      industry: "Cybersecurity",
      result: "Achieved market leadership in quantum-resistant security solutions",
      testimonial: "Our partnership with Zion Tech Group gave us access to revolutionary quantum technology that set us apart from competitors."
    },
    {
      company: "Global Innovations",
      industry: "Consulting Services",
      result: "Expanded service portfolio to include AI and quantum solutions",
      testimonial: "Partnering with Zion Tech Group allowed us to offer cutting-edge technology solutions that our clients demand."
    }
  ];

  return (
    <Layout 
      title="Partnerships - Zion Tech Group"
      description="Join our partner ecosystem and leverage revolutionary AI consciousness, quantum computing, and autonomous technology solutions to grow your business."
    >
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Partnership Opportunities
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Join our global partner ecosystem and leverage revolutionary AI consciousness, 
                quantum computing, and autonomous technology solutions to accelerate your business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Become a Partner
                </a>
                <a
                  href="#partnership-types"
                  className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Partnership Types Section */}
        <section id="partnership-types" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Partnership Types</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Choose the partnership model that best fits your business goals and capabilities
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {partnershipTypes.map((type, index) => (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg mr-4">
                      {type.icon}
                    </div>
                    <h3 className="text-2xl font-semibold">{type.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{type.description}</p>
                  <ul className="space-y-2 mb-6">
                    {type.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-400">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Why Partner With Us?</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Discover the advantages of joining our revolutionary technology ecosystem
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnerBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="text-center"
                >
                  <div className="p-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <div className="text-cyan-400">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
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
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Partner Success Stories</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                See how our partners have transformed their businesses through our technology
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <motion.div
                  key={story.company}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
                >
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold mb-2">{story.company}</h3>
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30">
                      {story.industry}
                    </span>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-cyan-400 mb-2">Result:</h4>
                    <p className="text-gray-300">{story.result}</p>
                  </div>
                  <blockquote className="text-gray-400 italic">
                    "{story.testimonial}"
                  </blockquote>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Process Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">How to Become a Partner</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Simple steps to join our partner ecosystem and start growing your business
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Initial Contact",
                  description: "Reach out to discuss partnership opportunities and alignment"
                },
                {
                  step: "2",
                  title: "Assessment",
                  description: "We evaluate your business model and partnership potential"
                },
                {
                  step: "3",
                  title: "Agreement",
                  description: "Sign partnership agreement and begin onboarding process"
                },
                {
                  step: "4",
                  title: "Launch",
                  description: "Go to market with our revolutionary technology solutions"
                }
              ].map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
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
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <h2 className="text-4xl font-bold mb-6">Ready to Partner With Us?</h2>
              <p className="text-xl text-gray-400 mb-8">
                Join our ecosystem and start leveraging revolutionary technology to grow your business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Partnership Discussion
                </a>
                <a
                  href="mailto:partnerships@ziontechgroup.com"
                  className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
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