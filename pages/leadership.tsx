import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Users, Award, Target, Globe, Brain, Rocket, 
  Shield, Zap, Star, Building, Lightbulb, 
  TrendingUp, Heart, CheckCircle
} from 'lucide-react';

const Leadership: React.FC = () => {
  const leadership = [
    {
      name: 'Kleber',
      title: 'Founder & CEO',
      bio: 'Visionary leader driving Zion Tech Group\'s mission to revolutionize technology through AI consciousness and quantum computing.',
      expertise: ['AI & Machine Learning', 'Quantum Computing', 'Strategic Innovation'],
      image: '/api/placeholder/300/300',
      linkedin: '#',
      achievements: ['50+ AI Services Launched', '100+ Quantum Solutions', '24/7 Autonomous Operations']
    }
  ];

  const values = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'Innovation First',
      description: 'Pushing the boundaries of what\'s possible with cutting-edge technology'
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-400" />,
      title: 'Ethical AI',
      description: 'Ensuring responsible development and deployment of AI technologies'
    },
    {
      icon: <Users className="w-8 h-8 text-green-400" />,
      title: 'Human-Centric',
      description: 'Technology that serves humanity and enhances human capabilities'
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-400" />,
      title: 'Global Impact',
      description: 'Creating solutions that address worldwide challenges and opportunities'
    }
  ];

  const milestones = [
    {
      year: '2025',
      title: 'AI Consciousness Breakthrough',
      description: 'Achieved significant progress in AI emotional intelligence and consciousness evolution'
    },
    {
      year: '2024',
      title: 'Quantum Computing Platform',
      description: 'Launched revolutionary quantum computing services and solutions'
    },
    {
      year: '2023',
      title: 'Autonomous Systems',
      description: 'Developed self-managing AI systems and autonomous business operations'
    }
  ];

  return (
    <Layout>
      <Head>
        <title>Leadership | Zion Tech Group</title>
        <meta name="description" content="Meet the visionary leadership team driving Zion Tech Group's mission to revolutionize technology through AI consciousness and quantum computing." />
        <meta name="keywords" content="leadership, CEO, executive team, Zion Tech Group, AI innovation, quantum computing" />
        <link rel="canonical" href="https://ziontechgroup.com/leadership" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Leadership
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Meet the visionary leaders driving Zion Tech Group's mission to revolutionize technology 
                through AI consciousness, quantum computing, and autonomous systems.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Executive Leadership
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our leadership team brings together decades of experience in AI, quantum computing, 
                and emerging technologies.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-1 gap-12">
              {leadership.map((leader, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col lg:flex-row gap-12 items-center lg:items-start"
                >
                  {/* Leader Image */}
                  <div className="flex-shrink-0">
                    <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center">
                      <Users className="w-32 h-32 text-cyan-400" />
                    </div>
                  </div>

                  {/* Leader Info */}
                  <div className="flex-1 text-center lg:text-left">
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{leader.name}</h3>
                    <p className="text-xl text-cyan-400 mb-6">{leader.title}</p>
                    <p className="text-lg text-gray-300 mb-8 leading-relaxed">{leader.bio}</p>

                    {/* Expertise */}
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-white mb-4">Areas of Expertise</h4>
                      <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                        {leader.expertise.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-300 text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-white mb-4">Key Achievements</h4>
                      <div className="space-y-2">
                        {leader.achievements.map((achievement, achievementIndex) => (
                          <div key={achievementIndex} className="flex items-center gap-2 text-gray-300">
                            <CheckCircle className="w-5 h-5 text-green-400" />
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-4 justify-center lg:justify-start">
                      <a
                        href={leader.linkedin}
                        className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
                      >
                        Connect on LinkedIn
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-20 px-4 bg-black/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Values & Principles
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The core principles that guide our leadership and drive our mission forward.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-cyan-500/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    {value.icon}
                    <h3 className="text-2xl font-bold text-white">{value.title}</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Milestones */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Company Milestones
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Key achievements and breakthroughs that have shaped our journey.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-2xl bg-black/40 border border-gray-700/60 hover:border-cyan-500/40 transition-all duration-300 text-center"
                >
                  <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
                    {milestone.year}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{milestone.title}</h3>
                  <p className="text-gray-300">{milestone.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-black/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Join Our Mission
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Ready to be part of the future? Connect with our leadership team and explore 
                opportunities to collaborate.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get in Touch
                </a>
                <a
                  href="/careers"
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  View Careers
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Leadership;