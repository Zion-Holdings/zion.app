import React from 'react';
import { motion } from 'framer-motion';
import { 
  Handshake, Users, Target, Star, CheckCircle, ArrowRight, 
  Globe, Rocket, Brain, Atom, Shield, Award, 
  Mail, Phone, Linkedin, Building, Zap
} from 'lucide-react';
import Link from 'next/link';

export default function Partners() {
  const partnershipTypes = [
    {
      title: 'Technology Partners',
      description: 'Collaborate on cutting-edge AI, quantum computing, and autonomous systems development',
      icon: <Brain className="w-8 h-8" />,
      benefits: [
        'Access to advanced AI consciousness platforms',
        'Quantum computing infrastructure sharing',
        'Joint research and development initiatives',
        'Technology licensing opportunities'
      ]
    },
    {
      title: 'Enterprise Partners',
      description: 'Joint go-to-market strategies for enterprise AI and quantum solutions',
      icon: <Building className="w-8 h-8" />,
      benefits: [
        'Co-marketing and sales enablement',
        'Joint customer success programs',
        'Revenue sharing opportunities',
        'Enterprise solution bundling'
      ]
    },
    {
      title: 'Research Partners',
      description: 'Academic and research institution collaborations for breakthrough innovations',
      icon: <Atom className="w-8 h-8" />,
      benefits: [
        'Joint research publications',
        'Grant funding opportunities',
        'Student internship programs',
        'Technology transfer initiatives'
      ]
    },
    {
      title: 'Channel Partners',
      description: 'Reseller and distribution partnerships for global market reach',
      icon: <Globe className="w-8 h-8" />,
      benefits: [
        'Exclusive territory rights',
        'Technical training and certification',
        'Marketing and sales support',
        'Competitive commission structures'
      ]
    }
  ];

  const currentPartners = [
    {
      name: 'Quantum Computing Institute',
      type: 'Research Partner',
      description: 'Leading quantum computing research collaboration for next-generation algorithms and applications',
      logo: '🔬',
      achievements: ['Joint quantum research papers', 'Shared quantum infrastructure', 'Student exchange programs']
    },
    {
      name: 'AI Ethics Consortium',
      type: 'Technology Partner',
      description: 'Collaborative development of ethical AI frameworks and consciousness guidelines',
      logo: '🤖',
      achievements: ['Ethical AI standards', 'Consciousness research', 'Industry guidelines']
    },
    {
      name: 'Enterprise Solutions Group',
      type: 'Enterprise Partner',
      description: 'Strategic partnership for enterprise AI deployment and digital transformation',
      logo: '🏢',
      achievements: ['Joint customer wins', 'Solution integration', 'Market expansion']
    },
    {
      name: 'Space Technology Alliance',
      type: 'Technology Partner',
      description: 'Collaborative development of space resource mining and autonomous space systems',
      logo: '🚀',
      achievements: ['Space mining technology', 'Autonomous navigation', 'Resource optimization']
    }
  ];

  const partnershipBenefits = [
    {
      title: 'Access to Cutting-Edge Technology',
      description: 'Get early access to our latest AI consciousness platforms and quantum computing solutions',
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: 'Revenue Growth Opportunities',
      description: 'Expand your business with new AI and quantum technology offerings',
      icon: <Target className="w-8 h-8" />
    },
    {
      title: 'Technical Expertise',
      description: 'Leverage our world-class AI and quantum computing expertise',
      icon: <Brain className="w-8 h-8" />
    },
    {
      title: 'Global Market Reach',
      description: 'Access new markets and customers through our global network',
      icon: <Globe className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
          >
            Strategic Partnerships
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12"
          >
            Join forces with Zion Tech Group to accelerate innovation in AI consciousness, 
            quantum computing, and autonomous systems.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              href="#partnership-types"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Explore Partnerships
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              href="/contact"
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Partnership Types Section */}
      <section id="partnership-types" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Partnership Types
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {partnershipTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-cyan-400">
                    {type.icon}
                  </div>
                  <h3 className="text-2xl font-bold">
                    {type.title}
                  </h3>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {type.description}
                </p>
                
                <h4 className="text-lg font-bold mb-4 text-cyan-400">Key Benefits</h4>
                <ul className="space-y-2">
                  {type.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Current Partners
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {currentPartners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">
                    {partner.logo}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">
                      {partner.name}
                    </h3>
                    <p className="text-cyan-400 text-sm">
                      {partner.type}
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {partner.description}
                </p>
                
                <div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Achievements</h4>
                  <div className="space-y-1">
                    {partner.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="text-gray-300 text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Why Partner With Us
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex justify-center mb-4 text-cyan-400">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Partnership Process
          </motion.h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Initial Discussion',
                description: 'Schedule a call to discuss partnership opportunities and mutual goals'
              },
              {
                step: '02',
                title: 'Strategic Alignment',
                description: 'Evaluate strategic fit and identify collaboration opportunities'
              },
              {
                step: '03',
                title: 'Partnership Design',
                description: 'Design partnership structure, terms, and success metrics'
              },
              {
                step: '04',
                title: 'Launch & Execute',
                description: 'Sign agreement and begin collaborative execution'
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {step.description}
                </p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Partner?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's explore how we can work together to accelerate innovation and create 
              breakthrough technologies that will transform industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Partnership Discussion
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <a 
                href="mailto:partnerships@ziontechgroup.com"
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300"
              >
                Email Partnerships Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}