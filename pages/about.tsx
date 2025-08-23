import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Target, Users, Globe, Award, Zap, Shield, Brain, Atom } from 'lucide-react';

const About: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-blue-900/20 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                <Target className="w-4 h-4 mr-2" />
                About Zion Tech Group
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Pioneering the
                <span className="block bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Future of Technology
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Zion Tech Group is a revolutionary technology company at the forefront of AI, quantum computing, 
                and space technology. We're building the future, one breakthrough at a time.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
                <p className="text-xl text-gray-300 mb-6">
                  To accelerate human progress through revolutionary technology solutions that solve the world's 
                  most complex challenges and unlock unprecedented possibilities.
                </p>
                <p className="text-lg text-gray-400">
                  We believe in the power of technology to transform lives, businesses, and society. 
                  Our mission is to make the impossible possible.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-8 rounded-2xl border border-gray-700/50"
              >
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-gray-300 mb-4">
                  To be the leading force in technological innovation, creating a future where:
                </p>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start">
                    <Zap className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                    AI and humans collaborate seamlessly
                  </li>
                  <li className="flex items-start">
                    <Atom className="w-5 h-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" />
                    Quantum computing solves impossible problems
                  </li>
                  <li className="flex items-start">
                    <Globe className="w-5 h-5 text-emerald-400 mr-3 mt-0.5 flex-shrink-0" />
                    Space technology expands human horizons
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                    Cybersecurity protects our digital future
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/10 to-indigo-900/10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Our Core Values</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="w-8 h-8" />,
                  title: "Innovation First",
                  description: "We push the boundaries of what's possible, always seeking the next breakthrough",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "Excellence",
                  description: "We strive for excellence in everything we do, from code to customer experience",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Collaboration",
                  description: "We believe in the power of teamwork and diverse perspectives",
                  color: "from-emerald-500 to-teal-500"
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Integrity",
                  description: "We operate with honesty, transparency, and ethical principles",
                  color: "from-orange-500 to-red-500"
                },
                {
                  icon: <Globe className="w-8 h-8" />,
                  title: "Global Impact",
                  description: "We create solutions that benefit humanity worldwide",
                  color: "from-indigo-500 to-purple-500"
                },
                {
                  icon: <Award className="w-8 h-8" />,
                  title: "Continuous Learning",
                  description: "We embrace change and continuously evolve our knowledge and skills",
                  color: "from-green-500 to-emerald-500"
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${value.color} mb-6`}>
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Stats */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">By the Numbers</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Our impact and achievements in numbers
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "500+", label: "Enterprise Clients", color: "text-blue-400" },
                { number: "50+", label: "Countries Served", color: "text-purple-400" },
                { number: "99.9%", label: "Uptime Guarantee", color: "text-emerald-400" },
                { number: "24/7", label: "Global Support", color: "text-orange-400" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className={`text-5xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
                  <div className="text-gray-400 text-lg">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-900/10 to-purple-900/10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Our Leadership Team</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Visionary leaders driving innovation and growth
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Kleber",
                  role: "Founder & CEO",
                  description: "Visionary leader with 20+ years in technology innovation",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  name: "AI Research Team",
                  role: "AI & Consciousness",
                  description: "World-class researchers pushing the boundaries of AI",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  name: "Quantum Team",
                  role: "Quantum Computing",
                  description: "Leading experts in quantum algorithms and systems",
                  color: "from-emerald-500 to-teal-500"
                }
              ].map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-8 rounded-2xl border border-gray-700/50 text-center"
                >
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${member.color} mb-6 text-2xl font-bold text-white`}>
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-blue-400 mb-4">{member.role}</p>
                  <p className="text-gray-400">{member.description}</p>
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
              <h2 className="text-4xl font-bold text-white mb-6">
                Join Us in Building the Future
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Ready to be part of the technological revolution? Let's create something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105">
                  Get in Touch
                </button>
                <button className="px-8 py-4 border border-blue-500/30 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-300">
                  View Careers
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;