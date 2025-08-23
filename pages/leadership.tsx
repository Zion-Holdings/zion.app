import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Target, Globe, Brain, Rocket, Shield, Zap } from 'lucide-react';
import Layout from '../components/layout/Layout';

export default function Leadership() {
  const leadership = [
    {
      name: 'Kleber Santos',
      title: 'CEO & Founder',
      description: 'Visionary leader with 15+ years of experience in AI, quantum computing, and technology innovation.',
      expertise: ['AI Strategy', 'Quantum Computing', 'Technology Innovation', 'Business Development'],
      image: '/images/leadership/kleber-santos.jpg'
    },
    {
      name: 'Dr. Sarah Chen',
      title: 'Chief Technology Officer',
      description: 'Leading our technical vision with expertise in AI, machine learning, and quantum technologies.',
      expertise: ['AI Research', 'Machine Learning', 'Quantum Computing', 'Technical Architecture'],
      image: '/images/leadership/sarah-chen.jpg'
    },
    {
      name: 'Michael Rodriguez',
      title: 'Chief Security Officer',
      description: 'Cybersecurity expert ensuring our solutions meet the highest security standards.',
      expertise: ['Cybersecurity', 'Zero Trust', 'Compliance', 'Risk Management'],
      image: '/images/leadership/michael-rodriguez.jpg'
    },
    {
      name: 'Dr. Emily Watson',
      title: 'Chief Research Officer',
      description: 'Leading breakthrough research in quantum computing and AI consciousness.',
      expertise: ['Quantum Research', 'AI Consciousness', 'Research Strategy', 'Innovation'],
      image: '/images/leadership/emily-watson.jpg'
    }
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible through continuous innovation and research.'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Building secure, reliable solutions that our clients can trust with their most critical operations.'
    },
    {
      icon: Users,
      title: 'Human-Centric',
      description: 'Technology should enhance human capabilities, not replace them. We focus on human-AI collaboration.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Our solutions address global challenges and create positive impact across industries and communities.'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Leadership Team
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Meet the visionary leaders driving innovation and transformation at Zion Tech Group. 
                Our leadership team combines deep expertise with forward-thinking vision.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12">
              {leadership.map((leader, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Users className="w-12 h-12 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{leader.name}</h3>
                      <p className="text-cyan-400 font-semibold mb-4">{leader.title}</p>
                      <p className="text-gray-300 mb-6 leading-relaxed">{leader.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {leader.expertise.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-20 px-4 bg-black/30">
          <div className="container mx-auto max-w-6xl">
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
                The principles that guide our decisions and shape our culture
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-10 h-10 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Join Our Mission
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Be part of a team that's shaping the future of technology
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/careers"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  View Careers
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300"
                >
                  Contact Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}