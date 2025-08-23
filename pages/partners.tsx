import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, Atom, Shield, Rocket, Target, Star, 
  Users, Award, Globe, Zap, CheckCircle,
  ArrowRight, Building, Heart, Eye, Code,
  Handshake, Network, TrendingUp, Briefcase, Globe2
} from 'lucide-react';

export default function PartnersPage() {
  const partnershipTypes = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Technology Partners',
      description: 'Collaborate on AI consciousness, quantum computing, and space technology innovations',
      benefits: [
        'Access to cutting-edge research and development',
        'Joint intellectual property opportunities',
        'Shared technology infrastructure',
        'Collaborative innovation programs'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Atom className="w-8 h-8" />,
      title: 'Research Partners',
      description: 'Academic and research institutions working on breakthrough technologies',
      benefits: [
        'Joint research publications and patents',
        'Access to research facilities and resources',
        'Student and faculty exchange programs',
        'Grant and funding collaboration'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Enterprise Partners',
      description: 'Large organizations seeking AI and quantum technology solutions',
      benefits: [
        'Custom AI and quantum solutions',
        'Priority access to new technologies',
        'Dedicated support and consulting',
        'Strategic technology roadmaps'
      ],
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Startup Partners',
      description: 'Innovative startups in AI, quantum, and space technology',
      benefits: [
        'Technology licensing and partnerships',
        'Investment and funding opportunities',
        'Access to our customer network',
        'Mentorship and technical support'
      ],
      color: 'from-emerald-500 to-teal-500'
    }
  ];

  const currentPartners = [
    {
      name: 'MIT AI Research Lab',
      type: 'Research Partner',
      description: 'Collaborating on AI consciousness and ethical AI development',
      logo: '/images/partners/mit-ai-lab.png',
      achievements: ['Joint research papers', 'AI ethics framework', 'Student programs']
    },
    {
      name: 'IBM Quantum',
      type: 'Technology Partner',
      description: 'Quantum computing infrastructure and algorithm development',
      logo: '/images/partners/ibm-quantum.png',
      achievements: ['Quantum cloud access', 'Algorithm optimization', 'Hardware collaboration']
    },
    {
      name: 'NASA Ames Research Center',
      type: 'Space Technology Partner',
      description: 'AI-powered space exploration and resource intelligence',
      logo: '/images/partners/nasa-ames.png',
      achievements: ['Space AI systems', 'Resource mapping', 'Autonomous navigation']
    },
    {
      name: 'Stanford AI Lab',
      type: 'Research Partner',
      description: 'Advanced AI consciousness and neural network research',
      logo: '/images/partners/stanford-ai.png',
      achievements: ['Consciousness research', 'Neural architectures', 'Ethical AI']
    }
  ];

  const partnershipBenefits = [
    {
      icon: <Network className="w-8 h-8" />,
      title: 'Global Network Access',
      description: 'Connect with our worldwide network of technology leaders, researchers, and innovators',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Revenue Growth',
      description: 'Access new markets and customers through our established relationships and technology platforms',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Innovation Leadership',
      description: 'Position your organization at the forefront of AI consciousness and quantum technology',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <Globe2 className="w-8 h-8" />,
      title: 'Market Expansion',
      description: 'Expand into new geographic and technology markets with our global presence',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Partner With Us
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Join forces with Zion Tech Group to accelerate the future of AI consciousness, 
              quantum computing, and space technology. Together, we can achieve the impossible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#partnership-opportunities"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                Explore Partnerships
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 rounded-2xl font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partnership Types */}
      <section id="partnership-opportunities" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Partnership Opportunities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the partnership model that best fits your organization's goals and expertise
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {partnershipTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-black/50 border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r ${type.color} flex items-center justify-center`}>
                  {type.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{type.title}</h3>
                <p className="text-gray-300 mb-6">{type.description}</p>
                <h4 className="font-semibold text-cyan-400 mb-3">Key Benefits:</h4>
                <ul className="space-y-2">
                  {type.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Our Current Partners
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leading organizations already collaborating with us to shape the future
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {currentPartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-black/30 border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold">{partner.name}</h3>
                      <span className="px-3 py-1 text-xs bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30">
                        {partner.type}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-4">{partner.description}</p>
                    <div>
                      <h4 className="font-semibold text-cyan-400 mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {partner.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-center gap-2 text-sm text-gray-400">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Why Partner With Us?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the advantages of joining our ecosystem of innovation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {partnershipBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-black/50 border border-white/10"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${benefit.color} flex items-center justify-center flex-shrink-0`}>
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Partnership Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Simple steps to start collaborating with Zion Tech Group
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Initial Contact',
                description: 'Reach out to discuss partnership opportunities and alignment'
              },
              {
                step: '02',
                title: 'Strategy Session',
                description: 'Deep dive into goals, capabilities, and collaboration areas'
              },
              {
                step: '03',
                title: 'Partnership Design',
                description: 'Customize partnership structure and terms'
              },
              {
                step: '04',
                title: 'Launch & Execute',
                description: 'Begin collaboration and start achieving results'
              }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-2xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Ready to Partner?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can work together to accelerate the future of technology. 
              Our team is ready to explore partnership opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                Start Partnership Discussion
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="mailto:partnerships@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 rounded-2xl font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
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