import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Handshake, 
  Users, 
  Globe, 
  Award, 
  TrendingUp, 
  Zap,
  Star,
  CheckCircle,
  ArrowRight,
  Building,
  Rocket,
  Shield
} from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partnershipTypes = [
    {
      title: 'Technology Partners',
      description: 'Collaborate on cutting-edge AI and quantum technology solutions',
      icon: <Rocket className="w-8 h-8" />,
      color: 'text-blue-400',
      benefits: [
        'Access to exclusive technology platforms',
        'Joint R&D opportunities',
        'Shared intellectual property rights',
        'Technical support and training'
      ]
    },
    {
      title: 'Channel Partners',
      description: 'Resell and distribute our solutions to your customer base',
      icon: <Globe className="w-8 h-8" />,
      color: 'text-green-400',
      benefits: [
        'Competitive commission structure',
        'Marketing and sales support',
        'Product training and certification',
        'Dedicated partner success manager'
      ]
    },
    {
      title: 'Strategic Partners',
      description: 'Long-term collaboration on major initiatives and projects',
      icon: <Handshake className="w-8 h-8" />,
      color: 'text-purple-400',
      benefits: [
        'Exclusive market access',
        'Joint go-to-market strategies',
        'Shared resources and expertise',
        'Priority customer support'
      ]
    },
    {
      title: 'Implementation Partners',
      description: 'Deliver our solutions with your implementation expertise',
      icon: <Shield className="w-8 h-8" />,
      color: 'text-yellow-400',
      benefits: [
        'Implementation certification program',
        'Technical documentation and APIs',
        'Revenue sharing on services',
        '24/7 technical support'
      ]
    }
  ];

  const currentPartners = [
    {
      name: 'QuantumTech Solutions',
      logo: '🔬',
      category: 'Technology Partner',
      description: 'Leading quantum computing research and development',
      partnership: 'Joint quantum algorithm development'
    },
    {
      name: 'AI Dynamics Corp',
      logo: '🤖',
      category: 'Strategic Partner',
      description: 'Advanced AI consciousness research',
      partnership: 'AI ethics and governance framework'
    },
    {
      name: 'Space Innovations Ltd',
      logo: '🚀',
      category: 'Technology Partner',
      description: 'Space technology and satellite systems',
      partnership: 'Space resource mining platform'
    },
    {
      name: 'Enterprise Systems Inc',
      logo: '🏢',
      category: 'Channel Partner',
      description: 'Enterprise IT solutions provider',
      partnership: 'Enterprise AI platform distribution'
    }
  ];

  const partnershipBenefits = [
    {
      title: 'Revenue Growth',
      description: 'Access new markets and revenue streams through our innovative solutions',
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'text-green-400'
    },
    {
      title: 'Technology Access',
      description: 'Get early access to cutting-edge AI and quantum technologies',
      icon: <Zap className="w-6 h-6" />,
      color: 'text-blue-400'
    },
    {
      title: 'Market Expansion',
      description: 'Expand your market reach with our global customer base',
      icon: <Globe className="w-6 h-6" />,
      color: 'text-purple-400'
    },
    {
      title: 'Expert Support',
      description: 'Receive comprehensive training and support from our experts',
      icon: <Users className="w-6 h-6" />,
      color: 'text-yellow-400'
    }
  ];

  return (
    <Layout>
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-[60vh] flex items-center justify-center px-4 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="text-center max-w-4xl mx-auto relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-100 to-blue-100 bg-clip-text text-transparent"
            >
              Partnership Opportunities
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              Join forces with Zion Tech Group to revolutionize technology and create unprecedented value for your customers.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
              >
                Become a Partner
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Partnership Types */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Partnership Types</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Choose the partnership model that best fits your business goals and expertise
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {partnershipTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className={`flex justify-center mb-6 ${type.color}`}>
                    {type.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">{type.title}</h3>
                  <p className="text-gray-300 mb-6 text-center">{type.description}</p>
                  <ul className="space-y-3">
                    {type.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
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
        <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Current Partners</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Meet some of our trusted partners who are already transforming industries with us
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {currentPartners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl">{partner.logo}</div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{partner.name}</h3>
                      <span className="text-purple-400 text-sm">{partner.category}</span>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{partner.description}</p>
                  <div className="p-3 bg-purple-900/20 rounded-lg border border-purple-500/30">
                    <p className="text-purple-200 text-sm">
                      <strong>Partnership:</strong> {partner.partnership}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Why Partner With Us?</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Discover the advantages of partnering with Zion Tech Group
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnershipBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className={`flex justify-center mb-4 ${benefit.color}`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Process */}
        <section className="py-20 px-4 bg-gradient-to-r from-black/50 to-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Partnership Process</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Simple steps to become a Zion Tech Group partner
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Initial Contact',
                  description: 'Reach out to discuss partnership opportunities'
                },
                {
                  step: '02',
                  title: 'Assessment',
                  description: 'We evaluate mutual fit and potential'
                },
                {
                  step: '03',
                  title: 'Agreement',
                  description: 'Sign partnership agreement and terms'
                },
                {
                  step: '04',
                  title: 'Launch',
                  description: 'Begin partnership with full support'
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Partner With Us?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Join our network of innovative partners and help shape the future of technology
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Handshake className="w-5 h-5" />
                  Start Partnership Discussion
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="px-8 py-4 border border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300"
                >
                  Learn More
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