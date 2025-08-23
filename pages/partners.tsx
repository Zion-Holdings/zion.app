import React from 'react';
import { motion } from 'framer-motion';
import { 
  Handshake, 
  Users, 
  Globe, 
  Award, 
  Target, 
  Zap,
  Star,
  CheckCircle,
  TrendingUp,
  Building2,
  Rocket,
  Shield,
  Brain,
  Atom
} from 'lucide-react';

export default function PartnersPage() {
  const partnershipTypes = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'Technology Partners',
      description: 'Collaborate on cutting-edge AI, quantum computing, and space technology solutions.',
      benefits: ['Access to proprietary technology', 'Joint R&D opportunities', 'Revenue sharing models'],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Channel Partners',
      description: 'Resell and implement our solutions in your markets with comprehensive support.',
      benefits: ['Competitive margins', 'Training and certification', 'Marketing support'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Innovation Partners',
      description: 'Co-develop breakthrough solutions for emerging markets and technologies.',
      benefits: ['IP sharing opportunities', 'Market expansion support', 'Strategic collaboration'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Strategic Partners',
      description: 'Long-term partnerships for enterprise solutions and market leadership.',
      benefits: ['Exclusive market access', 'Joint go-to-market strategies', 'Investment opportunities'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const currentPartners = [
    {
      name: 'Quantum Computing Corp',
      logo: <Atom className="w-16 h-16 text-cyan-400" />,
      description: 'Leading quantum computing infrastructure provider',
      partnership: 'Technology Partner',
      since: '2023'
    },
    {
      name: 'AI Research Institute',
      logo: <Brain className="w-16 h-16 text-purple-400" />,
      description: 'Premier AI research and development organization',
      partnership: 'Innovation Partner',
      since: '2022'
    },
    {
      name: 'Space Tech Ventures',
      logo: <Rocket className="w-16 h-16 text-blue-400" />,
      description: 'Space technology and exploration company',
      partnership: 'Strategic Partner',
      since: '2024'
    },
    {
      name: 'Enterprise Solutions Inc',
      logo: <Building2 className="w-16 h-16 text-green-400" />,
      description: 'Enterprise software and consulting services',
      partnership: 'Channel Partner',
      since: '2023'
    }
  ];

  const partnershipBenefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Revenue Growth',
      description: 'Access to new markets and revenue streams through our innovative solutions.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Technology Access',
      description: 'Early access to cutting-edge AI and quantum computing technologies.'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Global Reach',
      description: 'Expand your presence to new markets with our international network.'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Brand Enhancement',
      description: 'Strengthen your brand through association with innovative technology leaders.'
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Expert Support',
      description: 'Comprehensive training, certification, and ongoing support programs.'
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: 'Innovation Leadership',
      description: 'Position yourself at the forefront of technological advancement.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-blue-500/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
              Partnership Opportunities
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Join forces with Zion Tech Group to revolutionize technology and create 
              unprecedented value for your customers and markets.
            </p>
            <div className="flex items-center justify-center gap-4 text-cyan-400">
              <Handshake className="w-8 h-8" />
              <span className="text-lg font-semibold">Building the Future Together</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Partnership Models
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the partnership model that best aligns with your business goals and growth strategy.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {partnershipTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${type.color} rounded-xl flex items-center justify-center mb-6`}>
                  {type.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{type.title}</h3>
                <p className="text-gray-300 mb-6">{type.description}</p>
                <ul className="space-y-2">
                  {type.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
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
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Our Current Partners
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the innovative companies already partnering with us to shape the future of technology.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentPartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  {partner.logo}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{partner.name}</h3>
                <p className="text-gray-300 text-sm mb-3">{partner.description}</p>
                <div className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-semibold rounded-full border border-cyan-500/30">
                  {partner.partnership}
                </div>
                <div className="text-xs text-gray-400 mt-2">Partner since {partner.since}</div>
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
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Why Partner With Us?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the unique advantages of partnering with Zion Tech Group.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnershipBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="text-cyan-400 mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Partnership Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Simple steps to start your partnership journey with Zion Tech Group.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Initial Contact',
                description: 'Reach out to discuss partnership opportunities and alignment.'
              },
              {
                step: '02',
                title: 'Discovery & Alignment',
                description: 'Deep dive into your business goals and partnership fit.'
              },
              {
                step: '03',
                title: 'Partnership Agreement',
                description: 'Define terms, responsibilities, and success metrics.'
              },
              {
                step: '04',
                title: 'Launch & Growth',
                description: 'Execute partnership and scale success together.'
              }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join our network of innovative partners and help shape the future of technology together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Start Partnership Discussion
              </a>
              <a
                href="/services"
                className="px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Explore Our Solutions
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}