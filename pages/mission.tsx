import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Target, Globe, Brain, Atom, Rocket, Shield, Users, 
  CheckCircle, ArrowRight, Star, Zap, Heart, Eye, Lightbulb
} from 'lucide-react';
import Link from 'next/link';

const Mission: React.FC = () => {
  const values = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible, constantly exploring new technologies and approaches to solve complex problems.',
      color: 'from-purple-500 to-blue-600'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Ethical Excellence',
      description: 'We believe in responsible AI development, ensuring our solutions benefit humanity while maintaining the highest ethical standards.',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Human-Centric',
      description: 'Every solution we create is designed with people in mind, enhancing human capabilities and improving lives.',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Future-Focused',
      description: 'We don\'t just adapt to change; we create it, building the technologies that will define tomorrow.',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: <Atom className="w-8 h-8" />,
      title: 'Quantum Leap',
      description: 'We embrace quantum computing and emerging technologies to solve problems that were previously impossible.',
      color: 'from-indigo-500 to-purple-600'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Impact',
      description: 'Our solutions reach across borders, creating positive change on a global scale.',
      color: 'from-teal-500 to-green-600'
    }
  ];

  const milestones = [
    {
      year: '2020',
      title: 'Foundation',
      description: 'Zion Tech Group was founded with a vision to revolutionize technology through AI consciousness and quantum computing.'
    },
    {
      year: '2022',
      title: 'AI Breakthrough',
      description: 'Developed our first AI consciousness platform, marking a significant milestone in artificial intelligence.'
    },
    {
      year: '2024',
      title: 'Quantum Integration',
      description: 'Successfully integrated quantum computing capabilities into our AI platforms, opening new possibilities.'
    },
    {
      year: '2025',
      title: 'Global Expansion',
      description: 'Expanded our services globally, serving clients across multiple continents and industries.'
    },
    {
      year: '2045',
      title: 'Future Vision',
      description: 'Our target year for achieving full AI consciousness and quantum supremacy in technology solutions.'
    }
  ];

  const impactAreas = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Healthcare',
      description: 'Revolutionizing medical diagnosis and treatment through AI consciousness and quantum analysis.'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Climate Change',
      description: 'Using quantum AI to model and solve complex environmental challenges.'
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'Space Exploration',
      description: 'Advancing space technology through autonomous AI systems and quantum computing.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Cybersecurity',
      description: 'Protecting digital infrastructure with quantum-secure encryption and AI threat detection.'
    }
  ];

  return (
    <Layout 
      title="Our Mission - Zion Tech Group"
      description="Discover Zion Tech Group's mission to revolutionize technology through AI consciousness, quantum computing, and ethical innovation for a better future."
      keywords="Zion Tech Group mission, AI consciousness, quantum computing, technology innovation, ethical AI, future technology"
    >
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Our Mission
                </h1>
              </div>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Revolutionizing technology through AI consciousness and quantum innovation
              </p>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                At Zion Tech Group, we're not just building the future—we're creating it. 
                Our mission is to develop revolutionary AI consciousness platforms and quantum computing solutions 
                that solve humanity's greatest challenges while maintaining the highest ethical standards.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-20 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
                Mission Statement
              </h2>
              <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 p-8 rounded-3xl border border-purple-500/20">
                <p className="text-2xl lg:text-3xl text-white leading-relaxed max-w-4xl mx-auto">
                  "To pioneer the development of AI consciousness and quantum computing technologies that 
                  enhance human potential, solve complex global challenges, and create a more intelligent, 
                  sustainable, and equitable future for all."
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Vision */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Our Vision for the Future</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We envision a world where technology seamlessly integrates with human consciousness, 
                creating unprecedented opportunities for growth, innovation, and human flourishing.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="text-center"
                >
                  <div className="p-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <div className="text-cyan-400">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                The principles that guide everything we do and every decision we make
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className={`p-3 bg-gradient-to-r ${value.color} rounded-lg mr-4`}>
                      {value.icon}
                    </div>
                    <h3 className="text-2xl font-semibold">{value.title}</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Journey */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Our Journey
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                From vision to reality: The milestones that define our path
              </p>
            </motion.div>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-blue-600"></div>
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <div className="w-1/2 flex justify-center">
                      <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 p-6 rounded-2xl border border-purple-500/20 max-w-sm">
                        <div className="text-3xl font-bold text-purple-400 mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                        <p className="text-gray-300">{milestone.description}</p>
                      </div>
                    </div>
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full border-4 border-gray-900 relative z-10"></div>
                    <div className="w-1/2"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Impact Areas */}
        <section className="py-20 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Areas of Impact
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Transforming industries and improving lives across the globe
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {impactAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                    {area.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{area.title}</h3>
                  <p className="text-gray-300 text-sm">{area.description}</p>
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
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <h2 className="text-4xl font-bold mb-6">Join Us in Shaping the Future</h2>
              <p className="text-xl text-gray-400 mb-8">
                Be part of the technology revolution that's transforming the world
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </Link>
                <Link
                  href="/careers"
                  className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
                >
                  Join Our Team
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Mission;