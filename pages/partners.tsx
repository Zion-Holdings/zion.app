import React from 'react';
import SEO from '../components/SEO';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Brain, Rocket, Shield, Atom, Globe, Users, Award, 
  Target, Lightbulb, Zap, Star, Building, MapPin, Phone, Mail,
  Handshake, Briefcase, TrendingUp, Globe2, Users2, CheckCircle,
  ExternalLink, ArrowRight
} from 'lucide-react';

export default function PartnersPage() {
  const partnershipTypes = [
    {
      title: 'Technology Partners',
      description: 'Collaborate on cutting-edge AI, quantum computing, and emerging technology solutions.',
      benefits: [
        'Joint product development',
        'Technology integration',
        'Shared intellectual property',
        'Co-marketing opportunities'
      ],
      icon: <Brain className="w-12 h-12 text-cyan-400" />
    },
    {
      title: 'Channel Partners',
      description: 'Resell and implement our solutions to your customer base with competitive margins.',
      benefits: [
        'Competitive commission structure',
        'Sales and technical training',
        'Marketing support and materials',
        'Dedicated partner success manager'
      ],
      icon: <Users2 className="w-12 h-12 text-purple-400" />
    },
    {
      title: 'Strategic Partners',
      description: 'Long-term strategic relationships for joint go-to-market and innovation initiatives.',
      benefits: [
        'Strategic planning collaboration',
        'Joint innovation labs',
        'Shared market expansion',
        'Executive relationship management'
      ],
      icon: <Handshake className="w-12 h-12 text-green-400" />
    },
    {
      title: 'Implementation Partners',
      description: 'Deliver our solutions to enterprise customers with specialized expertise.',
      benefits: [
        'Implementation certification',
        'Technical support and training',
        'Project delivery tools',
        'Revenue sharing opportunities'
      ],
      icon: <Briefcase className="w-12 h-12 text-blue-400" />
    }
  ];

  const existingPartners = [
    {
      name: 'Microsoft Azure',
      logo: '/images/partners/microsoft-azure.png',
      category: 'Cloud Platform',
      description: 'Strategic cloud partnership for AI and quantum computing solutions.',
      partnership: 'Technology Partner',
      website: 'https://azure.microsoft.com'
    },
    {
      name: 'Amazon Web Services',
      logo: '/images/partners/aws.png',
      category: 'Cloud Infrastructure',
      description: 'Preferred cloud provider for enterprise AI and automation solutions.',
      partnership: 'Technology Partner',
      website: 'https://aws.amazon.com'
    },
    {
      name: 'Google Cloud',
      logo: '/images/partners/google-cloud.png',
      category: 'AI & ML Platform',
      description: 'Collaboration on AI research and machine learning solutions.',
      partnership: 'Technology Partner',
      website: 'https://cloud.google.com'
    },
    {
      name: 'IBM',
      logo: '/images/partners/ibm.png',
      category: 'Enterprise Solutions',
      description: 'Strategic partnership for quantum computing and enterprise AI.',
      partnership: 'Strategic Partner',
      website: 'https://www.ibm.com'
    },
    {
      name: 'Deloitte',
      logo: '/images/partners/deloitte.png',
      category: 'Consulting',
      description: 'Implementation partner for enterprise transformation projects.',
      partnership: 'Implementation Partner',
      website: 'https://www2.deloitte.com'
    },
    {
      name: 'Accenture',
      logo: '/images/partners/accenture.png',
      category: 'Digital Transformation',
      description: 'Strategic consulting partner for AI and automation initiatives.',
      partnership: 'Strategic Partner',
      website: 'https://www.accenture.com'
    }
  ];

  const partnerBenefits = [
    {
      title: 'Revenue Growth',
      description: 'Access new markets and revenue streams through our innovative solutions.',
      icon: <TrendingUp className="w-8 h-8 text-green-400" />
    },
    {
      title: 'Technology Innovation',
      description: 'Stay ahead with cutting-edge AI, quantum computing, and automation technologies.',
      icon: <Lightbulb className="w-8 h-8 text-yellow-400" />
    },
    {
      title: 'Market Expansion',
      description: 'Expand your service offerings and reach new customer segments.',
      icon: <Globe2 className="w-8 h-8 text-blue-400" />
    },
    {
      title: 'Competitive Advantage',
      description: 'Differentiate your business with exclusive access to revolutionary technologies.',
      icon: <Star className="w-8 h-8 text-purple-400" />
    }
  ];

  const partnershipProcess = [
    {
      step: 1,
      title: 'Initial Discussion',
      description: 'Schedule a meeting to discuss partnership opportunities and mutual goals.',
      duration: '1-2 weeks'
    },
    {
      step: 2,
      title: 'Partnership Assessment',
      description: 'Evaluate strategic fit, market opportunities, and technical capabilities.',
      duration: '2-3 weeks'
    },
    {
      step: 3,
      title: 'Agreement Development',
      description: 'Negotiate terms, develop partnership agreement, and define success metrics.',
      duration: '3-4 weeks'
    },
    {
      step: 4,
      title: 'Launch & Execution',
      description: 'Execute partnership plan, provide training, and begin joint go-to-market activities.',
      duration: 'Ongoing'
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Partnerships - Zion Tech Group"
        description="Partner with Zion Tech Group to deliver revolutionary AI, quantum computing, and automation solutions. Explore partnership opportunities and grow your business."
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Partner With Us
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Join our ecosystem of innovative partners delivering revolutionary AI, quantum computing, and automation solutions to enterprises worldwide.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-gray-400">
                <div className="flex items-center gap-2">
                  <Handshake className="w-5 h-5" />
                  <span>Strategic Partnerships</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  <span>Revenue Growth</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5" />
                  <span>Innovation Leadership</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Partnership Types */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Partnership Opportunities
              </h2>
              <p className="text-xl text-gray-400">
                Choose the partnership model that best fits your business goals
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {partnershipTypes.map((type, index) => (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-6 mb-6">
                    <div className="flex-shrink-0">
                      {type.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {type.title}
                      </h3>
                      <p className="text-gray-300">
                        {type.description}
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {type.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center gap-3 text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Benefits */}
        <section className="py-20 bg-black/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Partner With Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-400">
                Unlock new opportunities and accelerate your growth
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {partnerBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex gap-6 p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-300">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Process */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Partnership Process
              </h2>
              <p className="text-xl text-gray-400">
                Simple steps to establish a successful partnership
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {partnershipProcess.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex gap-6 p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50"
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                      {step.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 mb-3">
                      {step.description}
                    </p>
                    <div className="text-cyan-400 font-medium">
                      Timeline: {step.duration}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Existing Partners */}
        <section className="py-20 bg-black/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Our Partners
              </h2>
              <p className="text-xl text-gray-400">
                Trusted by industry leaders and innovators worldwide
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {existingPartners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Building className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {partner.name}
                      </h3>
                      <div className="text-cyan-400 mb-2">
                        {partner.category}
                      </div>
                      <div className="text-purple-400 text-sm mb-3">
                        {partner.partnership}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6">
                    {partner.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors duration-300 flex items-center gap-2"
                    >
                      Visit Website
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Partner With Us?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join our ecosystem of innovative partners and help us revolutionize technology while growing your business. Let's discuss how we can work together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  Start Partnership Discussion
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-bold rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  Explore Our Solutions
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}