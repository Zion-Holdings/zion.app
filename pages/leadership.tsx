import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Users, Award, Star, Zap, Brain, Globe, Shield, Rocket,
  Linkedin, Twitter, Mail, MapPin, Phone
} from 'lucide-react';

const LeadershipPage: React.FC = () => {
  const leadershipTeam = [
    {
      name: 'Kleber Bacili',
      title: 'Founder & CEO',
      bio: 'Visionary leader driving Zion Tech Group\'s mission to revolutionize enterprise technology through AI, quantum computing, and space technology innovations.',
      expertise: ['AI & Machine Learning', 'Quantum Computing', 'Strategic Leadership'],
      image: '/images/leadership/kleber-bacili.jpg',
      linkedin: 'https://www.linkedin.com/in/kleberbacili',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    {
      name: 'Dr. Sarah Chen',
      title: 'Chief Technology Officer',
      bio: 'Leading-edge technologist specializing in quantum computing, AI consciousness, and next-generation space technology platforms.',
      expertise: ['Quantum Computing', 'AI Consciousness', 'Space Technology'],
      image: '/images/leadership/sarah-chen.jpg',
      linkedin: 'https://www.linkedin.com/in/sarah-chen-ai',
      email: 'sarah@ziontechgroup.com'
    },
    {
      name: 'Marcus Rodriguez',
      title: 'Chief Innovation Officer',
      bio: 'Pioneering innovator focused on autonomous AI systems, brain-computer interfaces, and futuristic technology solutions.',
      expertise: ['Autonomous AI', 'Brain-Computer Interfaces', 'Innovation Strategy'],
      image: '/images/leadership/marcus-rodriguez.jpg',
      linkedin: 'https://www.linkedin.com/in/marcus-rodriguez-ai',
      email: 'marcus@ziontechgroup.com'
    },
    {
      name: 'Dr. Elena Petrova',
      title: 'Chief Research Officer',
      bio: 'Leading research initiatives in quantum cybersecurity, space resource intelligence, and advanced AI consciousness platforms.',
      expertise: ['Quantum Cybersecurity', 'Space Research', 'AI Ethics'],
      image: '/images/leadership/elena-petrova.jpg',
      linkedin: 'https://www.linkedin.com/in/elena-petrova-research',
      email: 'elena@ziontechgroup.com'
    }
  ];

  const companyStats = [
    { label: 'Years of Innovation', value: '15+', icon: <Award className="w-6 h-6" /> },
    { label: 'Global Clients', value: '500+', icon: <Globe className="w-6 h-6" /> },
    { label: 'AI Solutions', value: '200+', icon: <Brain className="w-6 h-6" /> },
    { label: 'Quantum Breakthroughs', value: '50+', icon: <Zap className="w-6 h-6" /> }
  ];

  return (
    <Layout>
      <div className="min-h-screen pt-24 lg:pt-28">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-purple-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Leadership Team
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Meet the visionary leaders driving Zion Tech Group's mission to revolutionize enterprise technology through AI, quantum computing, and space technology innovations.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                {companyStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3 bg-gray-800/50 backdrop-blur-sm rounded-xl px-6 py-4 border border-gray-700/50"
                  >
                    <div className="text-cyan-400">{stat.icon}</div>
                    <div className="text-left">
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Meet Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Visionary Leaders</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our leadership team brings together decades of experience in cutting-edge technology, strategic innovation, and transformative business solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {leadershipTeam.map((leader, index) => (
                <motion.div
                  key={leader.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
                >
                  <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-6">
                    {/* Profile Image */}
                    <div className="flex-shrink-0">
                      <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center">
                        <Users className="w-16 h-16 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-2xl font-bold text-white mb-2">{leader.name}</h3>
                      <p className="text-cyan-400 font-semibold mb-4">{leader.title}</p>
                      <p className="text-gray-300 mb-6 leading-relaxed">{leader.bio}</p>

                      {/* Expertise */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">Expertise</h4>
                        <div className="flex flex-wrap gap-2">
                          {leader.expertise.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-sm rounded-full border border-cyan-500/20"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Contact & Social */}
                      <div className="flex items-center space-x-4">
                        {leader.linkedin && (
                          <a
                            href={leader.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-gray-700/50 hover:bg-cyan-500/20 text-gray-400 hover:text-cyan-400 rounded-lg transition-colors duration-200"
                          >
                            <Linkedin className="w-5 h-5" />
                          </a>
                        )}
                        {leader.email && (
                          <a
                            href={`mailto:${leader.email}`}
                            className="p-2 bg-gray-700/50 hover:bg-cyan-500/20 text-gray-400 hover:text-cyan-400 rounded-lg transition-colors duration-200"
                          >
                            <Mail className="w-5 h-5" />
                          </a>
                        )}
                        {leader.phone && (
                          <a
                            href={`tel:${leader.phone}`}
                            className="p-2 bg-gray-700/50 hover:bg-cyan-500/20 text-gray-400 hover:text-cyan-400 rounded-lg transition-colors duration-200"
                          >
                            <Phone className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20 lg:py-32 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Vision & Mission</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Vision</h3>
                    <p className="text-gray-300 leading-relaxed">
                      To be the global leader in next-generation enterprise technology, pioneering AI consciousness, quantum computing breakthroughs, and space technology innovations that transform how businesses operate and compete in the digital age.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Mission</h3>
                    <p className="text-gray-300 leading-relaxed">
                      To empower enterprises with cutting-edge AI, quantum, and space technology solutions that drive innovation, enhance security, and create sustainable competitive advantages in an increasingly complex and interconnected world.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Transform</span> Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Connect with our leadership team to explore how Zion Tech Group can revolutionize your enterprise technology strategy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  Get in Touch
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300"
                >
                  Explore Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default LeadershipPage;