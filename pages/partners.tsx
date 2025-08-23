import React from 'react';
import { motion } from 'framer-motion';
import { 
  Handshake, 
  Users, 
  Target, 
  Award, 
  Globe, 
  Brain, 
  Atom, 
  Shield, 
  Rocket,
  Star,
  CheckCircle,
  TrendingUp,
  Zap,
  Heart,
  Briefcase,
  Network,
  Gift,
  Headphones
} from 'lucide-react';
import Link from 'next/link';

export default function Partners() {
  const partnershipTypes = [
    {
      name: 'Technology Partners',
      description: 'Integrate our AI and quantum solutions into your platforms',
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      benefits: [
        'API access to our AI services',
        'White-label solutions',
        'Joint go-to-market strategies',
        'Technical integration support'
      ],
      color: 'from-cyan-500 to-blue-600'
    },
    {
      name: 'Channel Partners',
      description: 'Resell our solutions and earn recurring revenue',
      icon: <Network className="w-8 h-8 text-purple-400" />,
      benefits: [
        'Competitive commission rates',
        'Marketing and sales support',
        'Training and certification',
        'Dedicated partner manager'
      ],
      color: 'from-purple-500 to-pink-600'
    },
    {
      name: 'Strategic Partners',
      description: 'Collaborate on innovative solutions and market expansion',
      icon: <Handshake className="w-8 h-8 text-emerald-400" />,
      benefits: [
        'Joint product development',
        'Market expansion support',
        'Shared intellectual property',
        'Executive-level collaboration'
      ],
      color: 'from-emerald-500 to-teal-600'
    },
    {
      name: 'Academic Partners',
      description: 'Research collaboration and talent development',
      icon: <Atom className="w-8 h-8 text-indigo-400" />,
      benefits: [
        'Research collaboration opportunities',
        'Student internship programs',
        'Joint publications and patents',
        'Access to cutting-edge technology'
      ],
      color: 'from-indigo-500 to-purple-600'
    }
  ];

  const partnerBenefits = [
    {
      icon: <TrendingUp className="w-8 h-8 text-green-400" />,
      title: 'Revenue Growth',
      description: 'Access to high-margin AI and quantum technology solutions with proven market demand.'
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-400" />,
      title: 'Market Expansion',
      description: 'Expand your offerings into emerging technology markets with our innovative solutions.'
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-400" />,
      title: 'Technology Leadership',
      description: 'Position your company as a technology leader with access to cutting-edge AI and quantum solutions.'
    },
    {
      icon: <Users className="w-8 h-8 text-pink-400" />,
      title: 'Expert Support',
      description: 'Dedicated technical and business support to ensure your success and customer satisfaction.'
    }
  ];

  const successStories = [
    {
      company: 'TechCorp Solutions',
      industry: 'Enterprise Software',
      partnership: 'Technology Integration',
      results: 'Increased revenue by 40% through AI-powered automation solutions',
      logo: 'TC'
    },
    {
      company: 'Global Systems Inc.',
      industry: 'Consulting Services',
      partnership: 'Channel Partnership',
      results: 'Successfully deployed quantum computing solutions to 50+ enterprise clients',
      logo: 'GS'
    },
    {
      company: 'Innovation Labs',
      industry: 'Research & Development',
      partnership: 'Strategic Collaboration',
      results: 'Joint development of breakthrough AI consciousness technology',
      logo: 'IL'
    }
  ];

  const partnerPrograms = [
    {
      name: 'Starter Partner',
      requirements: 'Basic business relationship',
      benefits: [
        'Access to partner portal',
        'Basic marketing materials',
        'Email support',
        'Standard commission rates'
      ],
      color: 'from-gray-500 to-gray-600'
    },
    {
      name: 'Silver Partner',
      requirements: 'Active sales engagement',
      benefits: [
        'Everything in Starter',
        'Enhanced marketing support',
        'Dedicated partner manager',
        'Increased commission rates',
        'Training and certification'
      ],
      color: 'from-gray-400 to-gray-500'
    },
    {
      name: 'Gold Partner',
      requirements: 'Significant revenue contribution',
      benefits: [
        'Everything in Silver',
        'Priority technical support',
        'Custom marketing campaigns',
        'Exclusive partner events',
        'Highest commission rates'
      ],
      color: 'from-yellow-500 to-orange-600'
    },
    {
      name: 'Platinum Partner',
      requirements: 'Strategic partnership level',
      benefits: [
        'Everything in Gold',
        'Executive relationship management',
        'Custom solution development',
        'Joint market expansion',
        'Equity participation opportunities'
      ],
      color: 'from-purple-500 to-pink-600'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Partner With Us
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-8">
              Join our global partner ecosystem and help shape the future of AI, quantum computing, and emerging technologies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300">
                Become a Partner
              </Link>
              <Link href="#partnership-types" className="px-8 py-4 border-2 border-cyan-500/40 text-cyan-300 font-semibold rounded-full hover:bg-cyan-500/10 transition-all duration-300">
                Explore Opportunities
              </Link>
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
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Partnership Opportunities</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Choose the partnership model that best fits your business goals and expertise.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipTypes.map((type, index) => (
              <motion.div
                key={type.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">{type.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center">{type.name}</h3>
                <p className="text-white/70 text-sm mb-4 text-center">{type.description}</p>
                <ul className="space-y-2">
                  {type.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-white/70 text-xs">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Why Partner With Us?</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Discover the advantages of joining our partner ecosystem and growing your business with cutting-edge technology.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-white/70 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Programs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Partner Programs</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Choose the partner program that matches your commitment level and business objectives.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerPrograms.map((program, index) => (
              <motion.div
                key={program.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
                  program.name === 'Gold Partner' 
                    ? 'border-cyan-500 bg-gradient-to-br from-cyan-500/10 to-blue-500/10' 
                    : 'border-white/20 bg-gradient-to-br from-white/5 to-white/10'
                }`}
              >
                {program.name === 'Gold Partner' && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-full">
                      Recommended
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{program.name}</h3>
                  <p className="text-white/70 text-sm mb-4">{program.requirements}</p>
                </div>

                <ul className="space-y-3 mb-6">
                  {program.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-white/70 text-xs">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`w-full px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                    program.name === 'Gold Partner'
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'border-2 border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/10'
                  }`}
                >
                  Apply Now
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Partner Success Stories</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              See how our partners are achieving remarkable results with our technology solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">{story.logo}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{story.company}</h3>
                    <p className="text-cyan-400 text-sm">{story.industry}</p>
                  </div>
                </div>
                <p className="text-white/70 text-sm mb-3">
                  <strong>Partnership:</strong> {story.partnership}
                </p>
                <p className="text-white/80 text-sm">{story.results}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Join Our Partner Ecosystem?</h2>
            <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto">
              Partner with us to access cutting-edge technology solutions and grow your business in the AI and quantum computing revolution.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300">
                Start Partnership
              </Link>
              <Link href="/services" className="px-8 py-4 border-2 border-cyan-500/40 text-cyan-300 font-semibold rounded-full hover:bg-cyan-500/10 transition-all duration-300">
                Explore Solutions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}