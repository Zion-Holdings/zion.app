import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Handshake, Users, Globe, Target, Award, 
  ArrowRight, Star, Sparkles, Building, 
  CheckCircle, TrendingUp, Lightbulb, Zap,
  Cpu, Brain, Rocket, Shield, Database, MessageCircle
} from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partnershipTypes = [
    {
      icon: <Handshake className="w-12 h-12 text-cyan-400" />,
      title: 'Technology Partners',
      description: 'Collaborate with leading technology providers to deliver comprehensive solutions',
      benefits: [
        'Access to cutting-edge technology platforms',
        'Joint go-to-market strategies',
        'Technical integration support',
        'Revenue sharing opportunities'
      ],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: <Users className="w-12 h-12 text-purple-400" />,
      title: 'Channel Partners',
      description: 'Resell and implement our solutions to your customer base',
      benefits: [
        'Competitive pricing and margins',
        'Sales and technical training',
        'Marketing support and materials',
        'Dedicated partner success manager'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Globe className="w-12 h-12 text-green-400" />,
      title: 'Global Partners',
      description: 'Expand your reach with our international presence and expertise',
      benefits: [
        'Local market knowledge and support',
        'Multi-language capabilities',
        'Regional compliance expertise',
        'Cultural adaptation services'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Target className="w-12 h-12 text-orange-400" />,
      title: 'Strategic Partners',
      description: 'Deep integration and co-innovation for market leadership',
      benefits: [
        'Joint product development',
        'Shared intellectual property',
        'Exclusive market access',
        'Strategic investment opportunities'
      ],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const currentPartners = [
    {
      name: 'Microsoft',
      logo: 'MS',
      category: 'Technology Partner',
      description: 'Azure cloud infrastructure and AI services integration',
      partnership: 'Strategic'
    },
    {
      name: 'AWS',
      logo: 'AWS',
      category: 'Technology Partner',
      description: 'Cloud computing and machine learning platform collaboration',
      partnership: 'Strategic'
    },
    {
      name: 'Google Cloud',
      logo: 'GC',
      category: 'Technology Partner',
      description: 'AI/ML and data analytics platform partnership',
      partnership: 'Technology'
    },
    {
      name: 'IBM',
      logo: 'IBM',
      category: 'Technology Partner',
      description: 'Quantum computing and enterprise AI solutions',
      partnership: 'Innovation'
    },
    {
      name: 'Salesforce',
      logo: 'SF',
      category: 'Platform Partner',
      description: 'CRM integration and business automation',
      partnership: 'Technology'
    },
    {
      name: 'Oracle',
      logo: 'OR',
      category: 'Technology Partner',
      description: 'Database and enterprise application integration',
      partnership: 'Technology'
    }
  ];

  const partnershipBenefits = [
    {
      icon: <TrendingUp className="w-8 h-8 text-green-400" />,
      title: 'Revenue Growth',
      description: 'Access new markets and customer segments through our extensive network'
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-yellow-400" />,
      title: 'Innovation Access',
      description: 'Leverage cutting-edge AI and quantum computing technologies'
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-400" />,
      title: 'Risk Mitigation',
      description: 'Share development costs and technical risks with experienced partners'
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-400" />,
      title: 'Speed to Market',
      description: 'Accelerate product development and deployment timelines'
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-400" />,
      title: 'Global Reach',
      description: 'Expand your presence to new markets and regions'
    },
    {
      icon: <Award className="w-8 h-8 text-pink-400" />,
      title: 'Brand Enhancement',
      description: 'Strengthen your market position through strategic partnerships'
    }
  ];

  return (
    <Layout>
      <main className="relative z-10 pt-8">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Partner With Us
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join our ecosystem of innovative partners and together, let's shape the future of technology
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center"
                >
                  Become a Partner
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="#partnership-types"
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Partnership Types */}
        <section id="partnership-types" className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Partnership Opportunities
              </h2>
              <p className="text-xl text-gray-300">
                Choose the partnership model that aligns with your business goals and growth strategy
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {partnershipTypes.map((type, index) => (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    {type.icon}
                    <h3 className="text-2xl font-bold text-white ml-4">{type.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{type.description}</p>
                  <ul className="space-y-3">
                    {type.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
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
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Our Current Partners
              </h2>
              <p className="text-xl text-gray-300">
                Join an elite group of technology leaders and innovators
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentPartners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {partner.logo}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                    <p className="text-cyan-400 text-sm mb-3">{partner.category}</p>
                    <p className="text-gray-300 text-sm mb-4">{partner.description}</p>
                    <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs border border-cyan-500/30">
                      {partner.partnership} Partnership
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-20 px-4 bg-gradient-to-r from-black/50 to-gray-900/50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Why Partner With Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300">
                Discover the advantages of joining our technology ecosystem
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partnershipBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/30"
                >
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Process */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                How to Become a Partner
              </h2>
              <p className="text-xl text-gray-300">
                Simple steps to start your partnership journey with us
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Initial Contact',
                  description: 'Reach out to discuss partnership opportunities and alignment',
                  icon: <MessageCircle className="w-8 h-8 text-cyan-400" />
                },
                {
                  step: '02',
                  title: 'Discovery & Alignment',
                  description: 'Deep dive into capabilities, goals, and mutual benefits',
                  icon: <Target className="w-8 h-8 text-purple-400" />
                },
                {
                  step: '03',
                  title: 'Partnership Agreement',
                  description: 'Define terms, responsibilities, and success metrics',
                  icon: <Handshake className="w-8 h-8 text-green-400" />
                },
                {
                  step: '04',
                  title: 'Launch & Growth',
                  description: 'Execute partnership plan and scale success together',
                  icon: <Rocket className="w-8 h-8 text-orange-400" />
                }
              ].map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="relative">
                    <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-full flex items-center justify-center border border-gray-700/50">
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Success Stories */}
        <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Partner Success Stories
              </h2>
              <p className="text-xl text-gray-300">
                Real results from our collaborative partnerships
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {[
                {
                  company: 'TechCorp Solutions',
                  result: '300% Revenue Increase',
                  description: 'Through our AI automation partnership, TechCorp achieved unprecedented growth in their enterprise software division.',
                  metrics: ['300% revenue growth', '50% cost reduction', 'New market entry']
                },
                {
                  company: 'InnovateLab',
                  result: 'Market Leadership',
                  description: 'Our quantum computing collaboration positioned InnovateLab as the leading provider in their industry segment.',
                  metrics: ['Market leader position', 'Patent portfolio expansion', 'Global customer base']
                }
              ].map((story, index) => (
                <motion.div
                  key={story.company}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/30"
                >
                  <div className="flex items-center mb-4">
                    <Star className="w-6 h-6 text-yellow-400 mr-2" />
                    <h3 className="text-xl font-bold text-white">{story.company}</h3>
                  </div>
                  <div className="text-2xl font-bold text-cyan-400 mb-4">{story.result}</div>
                  <p className="text-gray-300 mb-6">{story.description}</p>
                  <div className="space-y-2">
                    {story.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {metric}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Ready to Partner With Us?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join our ecosystem and together, let's create the future of technology
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center"
                >
                  Start Partnership Discussion
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  Explore Our Solutions
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default PartnersPage;