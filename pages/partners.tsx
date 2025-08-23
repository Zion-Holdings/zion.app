import React from 'react';
import { motion } from 'framer-motion';
import { Handshake, Users, Star, CheckCircle, ArrowRight, Zap, Globe, Award, Heart, Rocket, Target, Building, Brain, Atom, Code, Shield } from 'lucide-react';
import Layout from '../components/layout/Layout';

export default function Partners() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 rounded-full text-emerald-300 text-sm mb-6">
                <Handshake className="w-4 h-4" />
                Partnership Opportunities
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Strategic
                <span className="block bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Partnerships
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Join forces with Zion Tech Group to accelerate the future of AI consciousness and quantum technology
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 flex items-center gap-2"
                >
                  Become a Partner
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-emerald-500/30 text-emerald-300 font-semibold rounded-xl hover:bg-emerald-500/10 transition-all duration-300"
                >
                  Partnership Programs
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Partnership Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Partner With Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Access to revolutionary AI consciousness technology and quantum computing solutions
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="w-12 h-12 text-emerald-400" />,
                  title: "AI Consciousness Technology",
                  description: "Access to the most advanced AI consciousness and emotional intelligence systems",
                  benefits: ["Consciousness AI", "Emotional intelligence", "Autonomous systems", "Ethical AI"]
                },
                {
                  icon: <Atom className="w-12 h-12 text-teal-400" />,
                  title: "Quantum Computing Solutions",
                  description: "Cutting-edge quantum computing and quantum-resistant security technology",
                  benefits: ["Quantum algorithms", "Quantum security", "Quantum cloud", "Quantum networking"]
                },
                {
                  icon: <Rocket className="w-12 h-12 text-cyan-400" />,
                  title: "Space Technology",
                  description: "Revolutionary space exploration and resource mining technologies",
                  benefits: ["Space mining", "Autonomous navigation", "Resource intelligence", "Space systems"]
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-gradient-to-br from-emerald-900/50 to-teal-900/50 border border-emerald-500/30 rounded-2xl p-8 hover:border-emerald-400/50 transition-all duration-300"
                >
                  <div className="mb-6">{benefit.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300 mb-6">{benefit.description}</p>
                  <ul className="space-y-2">
                    {benefit.benefits.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Types Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-emerald-900/30 to-teal-900/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Partnership Types
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the partnership model that best fits your organization's goals
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Technology Integration",
                  description: "Integrate our AI consciousness and quantum technologies into your existing systems",
                  features: ["API access", "SDK integration", "Custom development", "Technical support"],
                  icon: <Code className="w-16 h-16 text-emerald-400" />
                },
                {
                  title: "Joint Development",
                  description: "Collaborate on research and development of new technologies and solutions",
                  features: ["Shared R&D", "Co-innovation", "Patent sharing", "Joint publications"],
                  icon: <Users className="w-16 h-16 text-teal-400" />
                },
                {
                  title: "Distribution & Resale",
                  description: "Resell our technologies and solutions to your customer base",
                  features: ["White-label solutions", "Revenue sharing", "Marketing support", "Training programs"],
                  icon: <Globe className="w-16 h-16 text-cyan-400" />
                },
                {
                  title: "Strategic Alliance",
                  description: "Long-term strategic partnership for mutual growth and market expansion",
                  features: ["Market expansion", "Joint ventures", "Strategic planning", "Resource sharing"],
                  icon: <Target className="w-16 h-16 text-emerald-400" />
                }
              ].map((partnership, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-emerald-800/30 to-teal-800/30 border border-emerald-500/20 rounded-2xl p-8"
                >
                  <div className="flex items-center gap-4 mb-6">
                    {partnership.icon}
                    <h3 className="text-2xl font-bold text-white">{partnership.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{partnership.description}</p>
                  <ul className="space-y-2">
                    {partnership.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-300">
                        <Star className="w-4 h-4 text-yellow-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Partnership Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how our partners are transforming their industries with our technology
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  company: "TechCorp Industries",
                  industry: "Manufacturing",
                  success: "Implemented AI consciousness systems for predictive maintenance, reducing downtime by 40%",
                  icon: <Building className="w-12 h-12 text-emerald-400" />
                },
                {
                  company: "Quantum Solutions Inc",
                  industry: "Financial Services",
                  success: "Deployed quantum-resistant security solutions, protecting $2B+ in digital assets",
                  icon: <Shield className="w-12 h-12 text-teal-400" />
                },
                {
                  company: "Space Dynamics",
                  industry: "Aerospace",
                  success: "Integrated space resource intelligence for autonomous satellite operations",
                  icon: <Rocket className="w-12 h-12 text-cyan-400" />
                }
              ].map((story, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-emerald-800/20 to-teal-800/20 border border-emerald-500/20 rounded-2xl p-8"
                >
                  <div className="mb-6">{story.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{story.company}</h3>
                  <p className="text-emerald-400 text-sm mb-4">{story.industry}</p>
                  <p className="text-gray-300">{story.success}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Process Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-emerald-900/30 to-teal-900/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Partnership Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Simple steps to become a strategic partner with Zion Tech Group
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Initial Contact",
                  description: "Reach out to discuss partnership opportunities"
                },
                {
                  step: "02",
                  title: "Discovery",
                  description: "Explore mutual goals and technology fit"
                },
                {
                  step: "03",
                  title: "Partnership Design",
                  description: "Design the optimal partnership structure"
                },
                {
                  step: "04",
                  title: "Launch",
                  description: "Execute and launch the partnership"
                }
              ].map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{process.title}</h3>
                  <p className="text-gray-300">{process.description}</p>
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
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Partner?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join forces with us to accelerate the future of AI consciousness and quantum technology
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold text-lg rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 flex items-center gap-3 mx-auto"
              >
                Start Partnership Discussion
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}