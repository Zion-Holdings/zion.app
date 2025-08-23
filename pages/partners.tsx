import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Handshake, Users, Globe, Award, Star, Zap, Building, Rocket } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partnershipTypes = [
    {
      title: "Technology Partners",
      description: "Collaborate with leading technology providers to deliver integrated solutions",
      icon: <Zap className="w-8 h-8" />,
      benefits: ["Joint product development", "Technical integration", "Shared innovation", "Market expansion"]
    },
    {
      title: "Channel Partners",
      description: "Resell and distribute our revolutionary technology solutions worldwide",
      icon: <Globe className="w-8 h-8" />,
      benefits: ["Revenue sharing", "Marketing support", "Training programs", "Dedicated support"]
    },
    {
      title: "Strategic Partners",
      description: "Long-term partnerships for market leadership and innovation",
      icon: <Handshake className="w-8 h-8" />,
      benefits: ["Joint ventures", "Research collaboration", "Market leadership", "Shared resources"]
    },
    {
      title: "Solution Partners",
      description: "Integrate our technology into your existing solutions and services",
      icon: <Building className="w-8 h-8" />,
      benefits: ["API access", "Custom integration", "White-label options", "Technical support"]
    }
  ];

  const partnerBenefits = [
    {
      title: "Revenue Growth",
      description: "Access to revolutionary technology that drives customer demand",
      icon: <Star className="w-6 h-6" />
    },
    {
      title: "Market Expansion",
      description: "Reach new markets and customer segments with our solutions",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Technical Innovation",
      description: "Stay ahead with cutting-edge AI and quantum computing technology",
      icon: <Rocket className="w-6 h-6" />
    },
    {
      title: "Dedicated Support",
      description: "Comprehensive support and training for your team",
      icon: <Users className="w-6 h-6" />
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

export default PartnersPage;