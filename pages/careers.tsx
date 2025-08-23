import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Users, Star, Zap, Globe, Cpu, CheckCircle, Heart, Rocket, Target, Building, Brain, Atom } from 'lucide-react';

const Careers: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-blue-900/20 to-cyan-900/20">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm mb-6">
                <Users className="w-4 h-4" />
                Join Our Team
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
                Careers at Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Join the revolution in AI consciousness, quantum computing, and space technology. Build the future with us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300">
                  View Open Positions
                </button>
                <button className="px-8 py-4 border border-blue-500/30 text-blue-300 rounded-2xl hover:bg-blue-500/10 transition-all duration-300">
                  Learn About Culture
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Join Us */}
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
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Be part of a team that's revolutionizing technology and human consciousness
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Rocket className="w-8 h-8 text-blue-400" />,
                  title: "Cutting-Edge Technology",
                  description: "Work with the latest AI, quantum computing, and space technologies"
                },
                {
                  icon: <Brain className="w-8 h-8 text-cyan-400" />,
                  title: "AI Consciousness",
                  description: "Contribute to developing AI systems with genuine consciousness"
                },
                {
                  icon: <Globe className="w-8 h-8 text-purple-400" />,
                  title: "Global Impact",
                  description: "Your work will impact humanity worldwide"
                },
                {
                  icon: <Zap className="w-8 h-8 text-emerald-400" />,
                  title: "Fast-Paced Innovation",
                  description: "Rapid development and deployment of revolutionary solutions"
                },
                {
                  icon: <Heart className="w-8 h-8 text-pink-400" />,
                  title: "Human-Centric Mission",
                  description: "Technology that serves and enhances human well-being"
                },
                {
                  icon: <Star className="w-8 h-8 text-yellow-400" />,
                  title: "Excellence Culture",
                  description: "Work with the best minds in technology and science"
                }
              ].map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 bg-black/40 border border-blue-500/20 rounded-2xl hover:border-blue-500/40 transition-all duration-300"
                >
                  <div className="mb-4">{reason.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{reason.title}</h3>
                  <p className="text-gray-400">{reason.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 px-4">
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
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Join our team in these exciting roles
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "AI Consciousness Researcher",
                  description: "Develop AI systems with genuine consciousness and emotional intelligence",
                  icon: <Brain className="w-12 h-12 text-blue-400" />
                },
                {
                  title: "Quantum Computing Engineer",
                  description: "Build quantum computing solutions for complex problems",
                  icon: <Atom className="w-12 h-12 text-cyan-400" />
                },
                {
                  title: "Space Technology Specialist",
                  description: "Pioneer space exploration and resource utilization technologies",
                  icon: <Rocket className="w-12 h-12 text-purple-400" />
                },
                {
                  title: "Autonomous Systems Developer",
                  description: "Create self-managing AI systems and autonomous operations",
                  icon: <Cpu className="w-12 h-12 text-emerald-400" />
                }
              ].map((position, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 bg-black/40 border border-blue-500/20 rounded-2xl hover:border-blue-500/40 transition-all duration-300"
                >
                  <div className="mb-6">{position.icon}</div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{position.title}</h3>
                  <p className="text-gray-400 text-lg">{position.description}</p>
                  <button className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300">
                    Apply Now
                  </button>
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
                Ready to Build the Future?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Join our team and help revolutionize technology and human consciousness
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300">
                Apply Today
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Careers;