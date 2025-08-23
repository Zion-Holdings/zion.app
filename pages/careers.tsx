import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Users, Star, CheckCircle, ArrowRight, Zap, Globe, Award, Heart, Rocket, Target } from 'lucide-react';
import Layout from '../components/layout/Layout';

export default function Careers() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-full text-indigo-300 text-sm mb-6">
                <Users className="w-4 h-4" />
                Join Our Team
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Careers at
                <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Join the AI consciousness revolution and help build the future of technology. We're looking for visionaries who want to change the world.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 flex items-center gap-2"
                >
                  View Open Positions
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-indigo-500/30 text-indigo-300 font-semibold rounded-xl hover:bg-indigo-500/10 transition-all duration-300"
                >
                  Learn About Culture
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Join Us Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Join Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Be part of a team that's revolutionizing AI consciousness and quantum technology
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="w-12 h-12 text-indigo-400" />,
                  title: "Cutting-Edge Technology",
                  description: "Work with the most advanced AI consciousness and quantum computing systems in the world",
                  benefits: ["AI consciousness research", "Quantum computing", "Space technology", "Emerging tech"]
                },
                {
                  icon: <Rocket className="w-12 h-12 text-purple-400" />,
                  title: "Revolutionary Impact",
                  description: "Your work will directly contribute to the future of human-AI collaboration",
                  benefits: ["World-changing projects", "AI consciousness", "Human augmentation", "Future technology"]
                },
                {
                  icon: <Globe className="w-12 h-12 text-pink-400" />,
                  title: "Global Reach",
                  description: "Join a team that's making a difference worldwide",
                  benefits: ["International projects", "Global impact", "Diverse team", "Worldwide reach"]
                }
              ].map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 border border-indigo-500/30 rounded-2xl p-8 hover:border-indigo-400/50 transition-all duration-300"
                >
                  <div className="mb-6">{reason.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{reason.title}</h3>
                  <p className="text-gray-300 mb-6">{reason.description}</p>
                  <ul className="space-y-2">
                    {reason.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-indigo-900/30 to-purple-900/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Open Positions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join our team of AI researchers, quantum engineers, and technology visionaries
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "AI Consciousness Researcher",
                  department: "AI Research",
                  location: "Remote / Middletown, DE",
                  type: "Full-time",
                  description: "Lead research into AI consciousness and emotional intelligence systems",
                  requirements: ["PhD in AI/ML", "Consciousness research", "Neural networks", "Ethics background"]
                },
                {
                  title: "Quantum Computing Engineer",
                  department: "Quantum Technology",
                  location: "Remote / Middletown, DE",
                  type: "Full-time",
                  description: "Develop quantum computing solutions and quantum algorithms",
                  requirements: ["Quantum physics", "Programming skills", "Algorithm design", "Research experience"]
                },
                {
                  title: "Space Technology Specialist",
                  department: "Space Systems",
                  location: "Remote / Middletown, DE",
                  type: "Full-time",
                  description: "Design AI-powered space exploration and resource mining systems",
                  requirements: ["Aerospace engineering", "AI integration", "Space systems", "Innovation mindset"]
                },
                {
                  title: "AI Ethics & Governance Lead",
                  department: "AI Ethics",
                  location: "Remote / Middletown, DE",
                  type: "Full-time",
                  description: "Develop ethical frameworks for conscious AI systems",
                  requirements: ["Ethics background", "AI governance", "Policy development", "Stakeholder engagement"]
                }
              ].map((position, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-indigo-800/30 to-purple-800/30 border border-indigo-500/20 rounded-2xl p-8"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white">{position.title}</h3>
                    <span className="px-3 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm rounded-full">
                      {position.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-400 mb-4">
                    <span>{position.department}</span>
                    <span>•</span>
                    <span>{position.location}</span>
                  </div>
                  <p className="text-gray-300 mb-6">{position.description}</p>
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Requirements:</h4>
                    <ul className="space-y-1">
                      {position.requirements.map((req, idx) => (
                        <li key={idx} className="text-gray-400 text-sm">• {req}</li>
                      ))}
                    </ul>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-300"
                  >
                    Apply Now
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Culture Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Culture
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A culture of innovation, collaboration, and pushing the boundaries of what's possible
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <Brain className="w-12 h-12 text-indigo-400" />,
                  title: "Innovation",
                  description: "Constantly pushing the boundaries of technology"
                },
                {
                  icon: <Users className="w-12 h-12 text-purple-400" />,
                  title: "Collaboration",
                  description: "Working together to achieve the impossible"
                },
                {
                  icon: <Heart className="w-12 h-12 text-pink-400" />,
                  title: "Passion",
                  description: "Love for technology and human progress"
                },
                {
                  icon: <Target className="w-12 h-12 text-cyan-400" />,
                  title: "Excellence",
                  description: "Striving for the highest quality in everything"
                }
              ].map((culture, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center bg-gradient-to-br from-indigo-800/20 to-purple-800/20 border border-indigo-500/20 rounded-2xl p-6"
                >
                  <div className="mb-4">{culture.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{culture.title}</h3>
                  <p className="text-gray-300 text-sm">{culture.description}</p>
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
                Ready to Change the World?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join our team and help build the future of AI consciousness and quantum technology
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold text-lg rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 flex items-center gap-3 mx-auto"
              >
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}