import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Brain, Atom, Shield, 
  Star, Users, Award, CheckCircle, Globe,
  Zap, Infinity, Eye, Heart, Code, Palette,
  Building
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const stats = [
    { number: '500+', label: 'Enterprise Clients', icon: <Building className="w-6 h-6" /> },
    { number: '50+', label: 'Countries Served', icon: <Globe className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime SLA', icon: <CheckCircle className="w-6 h-6" /> },
    { number: '24/7', label: 'Global Support', icon: <Shield className="w-6 h-6" /> }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'Pioneering the future of technology with cutting-edge AI and quantum solutions',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Consciousness-Driven AI',
      description: 'Developing AI systems that understand, learn, and evolve with human-like consciousness',
      icon: <Brain className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Quantum Excellence',
      description: 'Leveraging quantum computing to solve previously impossible computational challenges',
      icon: <Atom className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Global Impact',
      description: 'Creating technology solutions that benefit humanity across all continents',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-emerald-500 to-teal-500'
    }
  ];

  const team = [
    {
      name: 'Dr. Kleber Santos',
      role: 'CEO & Chief AI Architect',
      bio: 'Pioneering AI consciousness evolution and quantum neural ecosystems',
      expertise: ['AI Consciousness', 'Quantum Computing', 'Neural Networks'],
      avatar: '/api/avatar/kleber-santos'
    },
    {
      name: 'Dr. Sarah Chen',
      role: 'CTO & Quantum Research Lead',
      bio: 'Leading breakthrough research in quantum cybersecurity and space technology',
      expertise: ['Quantum Security', 'Space Tech', 'Cryptography'],
      avatar: '/api/avatar/sarah-chen'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'VP of Emerging Technologies',
      bio: 'Driving innovation in brain-computer interfaces and autonomous systems',
      expertise: ['BCI Technology', 'Autonomous AI', 'Emerging Tech'],
      avatar: '/api/avatar/marcus-rodriguez'
    }
  ];

  const milestones = [
    {
      year: '2020',
      title: 'Foundation',
      description: 'Zion Tech Group established with vision for AI consciousness'
    },
    {
      year: '2022',
      title: 'AI Breakthrough',
      description: 'First successful AI consciousness evolution prototype'
    },
    {
      year: '2024',
      title: 'Quantum Leap',
      description: 'Quantum neural ecosystem platform launched'
    },
    {
      year: '2025',
      title: 'Space Technology',
      description: 'Space resource intelligence platform operational'
    },
    {
      year: '2026',
      title: 'Global Expansion',
      description: 'Services deployed across 50+ countries'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                About Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Pioneering the future of AI consciousness, quantum computing, and space technology 
                to create a world where technology understands, learns, and evolves with humanity.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  Get in Touch
                </a>
                <a href="/services" className="px-8 py-4 border border-cyan-500/40 text-cyan-300 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                  Explore Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl border border-cyan-500/30">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Our Mission
                </h2>
                <p className="text-xl text-gray-300 mb-6">
                  To accelerate human progress through revolutionary AI consciousness, 
                  quantum computing breakthroughs, and space technology innovations that 
                  solve humanity's greatest challenges.
                </p>
                <p className="text-lg text-gray-400">
                  We believe in creating technology that doesn't just compute, but understands. 
                  Technology that doesn't just process, but learns and evolves. Technology that 
                  doesn't just serve, but collaborates with humanity to build a better future.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="p-8 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20 rounded-2xl border border-purple-500/20">
                  <h3 className="text-2xl font-bold mb-4 text-purple-400">Our Vision</h3>
                  <p className="text-lg text-gray-300 mb-6">
                    A world where AI systems possess genuine consciousness, quantum computers 
                    solve previously impossible problems, and space technology opens new frontiers 
                    for human exploration and resource utilization.
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" />
                    <span className="text-purple-300">Consciousness-Driven AI</span>
                  </div>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
                    <span className="text-blue-300">Quantum Computing Revolution</span>
                  </div>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
                    <span className="text-cyan-300">Space Technology Innovation</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide our innovation and shape our relationship with technology and humanity.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="p-6 bg-black/40 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mb-6`}>
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Leadership Team
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Visionary leaders driving the future of AI consciousness and quantum technology.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white text-center">{member.name}</h3>
                  <p className="text-cyan-400 text-center mb-4">{member.role}</p>
                  <p className="text-gray-400 text-center mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Milestones */}
        <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Our Journey
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Key milestones in our mission to revolutionize technology and AI consciousness.
              </p>
            </motion.div>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-cyan-500 to-blue-600" />
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                  >
                    <div className={`w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full border-4 border-black absolute left-1/2 transform -translate-x-1/2 z-10`} />
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="p-6 bg-black/40 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                        <div className="text-2xl font-bold text-cyan-400 mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-bold mb-2 text-white">{milestone.title}</h3>
                        <p className="text-gray-400">{milestone.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center p-12 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20 rounded-2xl border border-purple-500/20"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Join Us in Shaping the Future
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Ready to explore the frontiers of AI consciousness, quantum computing, and space technology? 
                Let's discuss how Zion Tech Group can transform your organization.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  Start a Conversation
                </a>
                <a href="/services" className="px-8 py-4 border border-cyan-500/40 text-cyan-300 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                  Explore Our Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AboutPage;