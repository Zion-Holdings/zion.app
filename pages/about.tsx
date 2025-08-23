import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Building, Users, Target, Globe, Zap, Cpu, CheckCircle, Star, Heart, Rocket, Shield } from 'lucide-react';

const About: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-purple-900/20 to-blue-900/20">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm mb-6">
                <Building className="w-4 h-4" />
                About Zion Tech Group
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6">
                About Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and space technology solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300">
                  Learn More
                </button>
                <button className="px-8 py-4 border border-purple-500/30 text-purple-300 rounded-2xl hover:bg-purple-500/10 transition-all duration-300">
                  Contact Us
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                To revolutionize technology and human consciousness through AI, quantum computing, and space exploration
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Cpu className="w-12 h-12 text-purple-400" />,
                  title: "AI Consciousness",
                  description: "Developing AI systems with genuine consciousness and emotional intelligence"
                },
                {
                  icon: <Cpu className="w-12 h-12 text-blue-400" />,
                  title: "Quantum Computing",
                  description: "Advancing quantum computing for solving previously impossible problems"
                },
                {
                  icon: <Rocket className="w-12 h-12 text-cyan-400" />,
                  title: "Space Technology",
                  description: "Pioneering space exploration and resource utilization technologies"
                }
              ].map((mission, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 bg-black/40 border border-purple-500/20 rounded-2xl hover:border-purple-500/40 transition-all duration-300 text-center"
                >
                  <div className="mb-6 flex justify-center">{mission.icon}</div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{mission.title}</h3>
                  <p className="text-gray-400 text-lg">{mission.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Values
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Core principles that guide our innovation and development
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Heart className="w-8 h-8 text-purple-400" />,
                  title: "Human-Centric",
                  description: "Technology that serves and enhances human well-being"
                },
                {
                  icon: <Shield className="w-8 h-8 text-blue-400" />,
                  title: "Ethical AI",
                  description: "Responsible development of AI with consciousness"
                },
                {
                  icon: <Globe className="w-8 h-8 text-cyan-400" />,
                  title: "Global Impact",
                  description: "Solutions that benefit humanity worldwide"
                },
                {
                  icon: <Zap className="w-8 h-8 text-emerald-400" />,
                  title: "Innovation",
                  description: "Continuous breakthrough innovation and research"
                },
                {
                  icon: <Users className="w-8 h-8 text-orange-400" />,
                  title: "Collaboration",
                  description: "Working together to achieve the impossible"
                },
                {
                  icon: <Star className="w-8 h-8 text-yellow-400" />,
                  title: "Excellence",
                  description: "Uncompromising quality in everything we do"
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 bg-black/40 border border-purple-500/20 rounded-2xl hover:border-purple-500/40 transition-all duration-300"
                >
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
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
                Join the Future
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Partner with us to revolutionize technology and human consciousness
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300">
                Get in Touch
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;