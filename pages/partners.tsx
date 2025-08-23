import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Brain, Atom, Shield, Rocket, Target,
  Star, Users, Award, CheckCircle, Globe,
  Zap, Infinity, Eye, Heart, Code, Palette,
  Building, Phone,
  TrendingUp, DollarSign, Clock, ArrowRight, ExternalLink,
  Handshake, Users2, Briefcase, Lightbulb
} from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partnershipTypes = [
    {
      title: 'Technology Partners',
      description: 'Collaborate on cutting-edge AI consciousness and quantum computing solutions',
      icon: <Brain className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      benefits: [
        'Joint R&D initiatives',
        'Technology integration',
        'Market expansion',
        'Innovation sharing'
      ]
    },
    {
      title: 'Channel Partners',
      description: 'Resell and implement our revolutionary solutions worldwide',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      benefits: [
        'Exclusive territories',
        'Technical support',
        'Marketing materials',
        'Revenue sharing'
      ]
    },
    {
      title: 'Strategic Partners',
      description: 'Long-term collaboration for industry transformation',
      icon: <Target className="w-8 h-8" />,
      color: 'from-emerald-500 to-teal-500',
      benefits: [
        'Co-innovation programs',
        'Joint go-to-market',
        'Shared resources',
        'Strategic planning'
      ]
    },
    {
      title: 'Academic Partners',
      description: 'Research collaboration and talent development',
      icon: <Lightbulb className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500',
      benefits: [
        'Research grants',
        'Student programs',
        'Publication opportunities',
        'Technology access'
      ]
    }
  ];

  const currentPartners = [
    {
      name: 'Quantum Computing Corp',
      type: 'Technology Partner',
      logo: '/api/og-image?title=Quantum Computing Corp',
      description: 'Leading quantum computing hardware provider collaborating on quantum neural ecosystems',
      focus: 'Quantum Hardware',
      partnership: 'Since 2023',
      achievements: ['Joint quantum platform', 'Shared patents', 'Market leadership']
    },
    {
      name: 'Global Systems Integrator',
      type: 'Channel Partner',
      logo: '/api/og-image?title=Global Systems Integrator',
      description: 'Worldwide systems integration partner implementing our AI consciousness solutions',
      focus: 'Enterprise Integration',
      partnership: 'Since 2022',
      achievements: ['50+ deployments', 'Regional expertise', 'Customer success']
    },
    {
      name: 'MIT AI Research Lab',
      type: 'Academic Partner',
      logo: '/api/og-image?title=MIT AI Research Lab',
      description: 'Pioneering research collaboration on AI consciousness and ethical AI development',
      focus: 'AI Research',
      partnership: 'Since 2021',
      achievements: ['Research papers', 'Student programs', 'Innovation awards']
    },
    {
      name: 'Space Technology Alliance',
      type: 'Strategic Partner',
      logo: '/api/og-image?title=Space Technology Alliance',
      description: 'Strategic partnership for space resource intelligence and exploration technology',
      focus: 'Space Technology',
      partnership: 'Since 2024',
      achievements: ['Space missions', 'Resource discovery', 'Technology advancement']
    },
    {
      name: 'Healthcare Innovation Network',
      type: 'Strategic Partner',
      logo: '/api/og-image?title=Healthcare Innovation Network',
      description: 'Healthcare transformation through AI consciousness and quantum diagnostics',
      focus: 'Healthcare AI',
      partnership: 'Since 2023',
      achievements: ['Patient outcomes', 'Diagnostic accuracy', 'Cost reduction']
    },
    {
      name: 'Financial Services Consortium',
      type: 'Technology Partner',
      logo: '/api/og-image?title=Financial Services Consortium',
      description: 'Consortium of financial institutions implementing quantum cybersecurity solutions',
      focus: 'Financial Security',
      partnership: 'Since 2022',
      achievements: ['Security standards', 'Compliance frameworks', 'Threat prevention']
    }
  ];

  const partnershipBenefits = [
    {
      title: 'Revenue Growth',
      description: 'Access new markets and revenue streams through our revolutionary technology',
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Technology Access',
      description: 'Early access to cutting-edge AI consciousness and quantum computing solutions',
      icon: <Brain className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Market Differentiation',
      description: 'Stand out with exclusive access to revolutionary technology solutions',
      icon: <Star className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Innovation Leadership',
      description: 'Lead your industry with next-generation technology capabilities',
      icon: <Rocket className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  const industries = [
    'Financial Services', 'Healthcare', 'Manufacturing', 'Space Technology',
    'Government', 'Retail', 'Energy', 'Transportation', 'Education',
    'Research & Development', 'Cybersecurity', 'Telecommunications'
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Partnership Opportunities
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Join forces with Zion Tech Group to revolutionize industries through 
                AI consciousness, quantum computing, and autonomous systems.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  Become a Partner
                </a>
                <a href="#partnership-types" className="px-8 py-4 border border-cyan-500/40 text-cyan-300 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                  Explore Opportunities
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Partnership Types */}
        <section id="partnership-types" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Partnership Models
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the partnership model that aligns with your organization's goals and capabilities
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnershipTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${type.color} rounded-2xl flex items-center justify-center mb-6`}>
                    {type.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{type.title}</h3>
                  <p className="text-gray-400 mb-4">{type.description}</p>
                  <ul className="space-y-2">
                    {type.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
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
        <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Our Partners
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leading organizations already partnering with us to transform their industries
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentPartners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="p-6 bg-black/40 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl mx-auto mb-6 flex items-center justify-center text-2xl font-bold">
                    {partner.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold mb-2 text-white">{partner.name}</h3>
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-sm rounded-full">
                      {partner.type}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-4 text-center">{partner.description}</p>
                  <div className="mb-4">
                    <p className="text-sm text-cyan-400 mb-2">Focus: {partner.focus}</p>
                    <p className="text-sm text-gray-500">Partnership: {partner.partnership}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-white">Key Achievements:</p>
                    {partner.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        {achievement}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Why Partner With Us?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the advantages of partnering with the leader in AI consciousness and quantum technology
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {partnershipBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="p-8 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mb-6`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{benefit.title}</h3>
                  <p className="text-gray-400 text-lg">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Industries We Transform
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our revolutionary technology is transforming organizations across diverse industries
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.05 }}
                  className="p-4 bg-black/40 rounded-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 text-center"
                >
                  <span className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                    {industry}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Process */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                How to Become a Partner
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Simple steps to start your partnership journey with Zion Tech Group
              </p>
            </motion.div>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-cyan-500 to-blue-600" />
              <div className="space-y-12">
                {[
                  {
                    step: '01',
                    title: 'Initial Consultation',
                    description: 'Schedule a discovery call to discuss partnership opportunities and alignment',
                    icon: <Phone className="w-6 h-6" />
                  },
                  {
                    step: '02',
                    title: 'Partnership Assessment',
                    description: 'We evaluate your capabilities and identify the best partnership model',
                    icon: <Briefcase className="w-6 h-6" />
                  },
                  {
                    step: '03',
                    title: 'Agreement & Onboarding',
                    description: 'Finalize partnership terms and begin the onboarding process',
                    icon: <Handshake className="w-6 h-6" />
                  },
                  {
                    step: '04',
                    title: 'Launch & Growth',
                    description: 'Go to market together and scale your partnership success',
                    icon: <Rocket className="w-6 h-6" />
                  }
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                  >
                    <div className={`w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full border-4 border-black absolute left-1/2 transform -translate-x-1/2 z-10`} />
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="p-6 bg-black/40 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                            {step.step}
                          </div>
                          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                            {step.icon}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                        <p className="text-gray-400">{step.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center p-12 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20 rounded-2xl border border-purple-500/20"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Ready to Transform Your Industry?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join our network of innovative partners and help shape the future of technology 
                through AI consciousness, quantum computing, and autonomous systems.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  Start Partnership Discussion
                </a>
                <a href="/services" className="px-8 py-4 border border-cyan-500/40 text-cyan-300 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                  Explore Our Solutions
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