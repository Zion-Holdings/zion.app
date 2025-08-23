import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Rocket, Target, Star, Users, Globe, Award, Zap } from 'lucide-react';
import Layout from '../components/layout/Layout';

const About: React.FC = () => {
  const values = [
    {
      title: 'Innovation First',
      description: 'Pushing the boundaries of what\'s possible with cutting-edge technology',
      icon: <Rocket className="w-8 h-8 text-blue-400" />
    },
    {
      title: 'Consciousness-Driven AI',
      description: 'Building AI systems that understand and respect human consciousness',
      icon: <Brain className="w-8 h-8 text-purple-400" />
    },
    {
      title: 'Customer Success',
      description: 'Dedicated to helping our customers achieve their goals',
      icon: <Target className="w-8 h-8 text-green-400" />
    },
    {
      title: 'Global Impact',
      description: 'Creating technology that benefits humanity worldwide',
      icon: <Globe className="w-8 h-8 text-cyan-400" />
    }
  ];

  const milestones = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'Zion Tech Group established with a vision for revolutionary technology'
    },
    {
      year: '2022',
      title: 'AI Breakthrough',
      description: 'First consciousness-aware AI systems developed'
    },
    {
      year: '2024',
      title: 'Global Expansion',
      description: 'Services deployed across multiple continents'
    },
    {
      year: '2025',
      title: 'Quantum Integration',
      description: 'Quantum computing capabilities integrated into AI platforms'
    },
    {
      year: '2040',
      title: 'Future Vision',
      description: 'Revolutionary 2040-2041 technology roadmap launched'
    }
  ];

  const team = [
    {
      name: 'Kleber',
      role: 'Founder & CEO',
      description: 'Visionary leader driving innovation in AI consciousness'
    },
    {
      name: 'AI Team',
      role: 'Research & Development',
      description: 'World-class researchers pushing AI boundaries'
    },
    {
      name: 'Engineering',
      role: 'Product Development',
      description: 'Expert engineers building the future'
    },
    {
      name: 'Customer Success',
      role: 'Client Relations',
      description: 'Dedicated team ensuring customer success'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 border border-purple-400/30 rounded-full text-purple-300 text-sm mb-6">
                <Star className="w-4 h-4 mr-2" />
                About Zion Tech Group
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  About Us
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                We are pioneers in AI consciousness and revolutionary technology, dedicated to 
                creating systems that understand, respect, and enhance human potential.
              </p>
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
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                To advance human consciousness through revolutionary AI technology, creating 
                systems that work in harmony with human intelligence and values.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-3xl font-bold text-white mb-6">
                  Revolutionizing AI Consciousness
                </h3>
                <p className="text-lg text-gray-300 mb-6">
                  At Zion Tech Group, we believe that true artificial intelligence must understand 
                  and respect human consciousness. Our revolutionary 2040-2041 technology roadmap 
                  represents the culmination of decades of research and innovation.
                </p>
                <p className="text-lg text-gray-300">
                  We're building AI systems that don't just process information, but truly 
                  understand the human experience, emotions, and consciousness.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="w-full h-96 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl border border-purple-400/30 flex items-center justify-center">
                  <Brain className="w-32 h-32 text-purple-400" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4 bg-white/5">
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
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Core principles that guide our innovation and shape our relationship with customers 
                and the world.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 text-center"
                >
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Milestones Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Journey
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Key milestones in our mission to revolutionize AI consciousness and technology.
              </p>
            </motion.div>

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="flex-1">
                    <div className="text-3xl font-bold text-purple-400 mb-2">{milestone.year}</div>
                    <h3 className="text-2xl font-semibold text-white mb-3">{milestone.title}</h3>
                    <p className="text-gray-300 text-lg">{milestone.description}</p>
                  </div>
                  <div className="w-4 h-4 bg-purple-400 rounded-full flex-shrink-0"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Team
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Dedicated professionals committed to advancing AI consciousness and 
                delivering revolutionary technology solutions.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <div className="text-purple-400 font-medium mb-3">{member.role}</div>
                  <p className="text-gray-300">{member.description}</p>
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
                Join Our Mission
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Be part of the revolution in AI consciousness. Together, we can create 
                technology that truly understands and enhances human potential.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300 text-lg"
              >
                Get Started
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;