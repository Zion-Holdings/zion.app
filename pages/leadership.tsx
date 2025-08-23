import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Star, 
  Users, 
  Award, 
  Building, 
  Globe, 
  Brain, 
  Rocket, 
  Shield,
  Linkedin,
  Twitter,
  Mail
} from 'lucide-react';

const LeadershipPage: React.FC = () => {
  const leadershipTeam = [
    {
      name: 'Dr. Sarah Chen',
      title: 'Chief Executive Officer',
      bio: 'Visionary leader with 20+ years in quantum computing and AI research. Former CTO at leading tech companies.',
      expertise: ['Quantum Computing', 'AI Strategy', 'Technology Innovation'],
      image: '/images/leadership/sarah-chen.jpg',
      linkedin: 'https://linkedin.com/in/sarah-chen',
      twitter: 'https://twitter.com/sarahchen',
      email: 'sarah.chen@ziontechgroup.com'
    },
    {
      name: 'Marcus Rodriguez',
      title: 'Chief Technology Officer',
      bio: 'Expert in space technology and advanced computing systems. Led development of multiple breakthrough technologies.',
      expertise: ['Space Technology', 'Advanced Computing', 'System Architecture'],
      image: '/images/leadership/marcus-rodriguez.jpg',
      linkedin: 'https://linkedin.com/in/marcus-rodriguez',
      twitter: 'https://twitter.com/marcusrodriguez',
      email: 'marcus.rodriguez@ziontechgroup.com'
    },
    {
      name: 'Dr. Elena Petrova',
      title: 'Chief Research Officer',
      bio: 'Leading researcher in AI consciousness and neural networks. Published author with 50+ research papers.',
      expertise: ['AI Consciousness', 'Neural Networks', 'Research Strategy'],
      image: '/images/leadership/elena-petrova.jpg',
      linkedin: 'https://linkedin.com/in/elena-petrova',
      twitter: 'https://twitter.com/elenapetrova',
      email: 'elena.petrova@ziontechgroup.com'
    },
    {
      name: 'James Thompson',
      title: 'Chief Security Officer',
      bio: 'Cybersecurity expert specializing in quantum-resistant encryption and zero-trust architectures.',
      expertise: ['Cybersecurity', 'Quantum Encryption', 'Zero Trust'],
      image: '/images/leadership/james-thompson.jpg',
      linkedin: 'https://linkedin.com/in/james-thompson',
      twitter: 'https://twitter.com/jamesthompson',
      email: 'james.thompson@ziontechgroup.com'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Leadership Team
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Meet the visionary leaders driving Zion Tech Group's mission to revolutionize technology 
                and shape the future of AI, quantum computing, and space technology.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Leadership Team Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
              {leadershipTeam.map((leader, index) => (
                <motion.div
                  key={leader.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-8 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/20">
                    {/* Background Effects */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5 rounded-2xl" />
                    
                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{leader.name}</h3>
                          <p className="text-cyan-400 font-semibold">{leader.title}</p>
                        </div>
                        <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center">
                          <Star className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      {/* Bio */}
                      <p className="text-gray-300 mb-6 leading-relaxed">{leader.bio}</p>

                      {/* Expertise */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Expertise</h4>
                        <div className="flex flex-wrap gap-2">
                          {leader.expertise.map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-sm rounded-full border border-cyan-400/20"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Social Links */}
                      <div className="flex items-center space-x-4">
                        <a
                          href={leader.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-blue-600/20 text-blue-400 rounded-lg hover:bg-blue-600/30 transition-colors"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                        <a
                          href={leader.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-sky-500/20 text-sky-400 rounded-lg hover:bg-sky-500/30 transition-colors"
                        >
                          <Twitter className="w-5 h-5" />
                        </a>
                        <a
                          href={`mailto:${leader.email}`}
                          className="p-2 bg-green-600/20 text-green-400 rounded-lg hover:bg-green-600/30 transition-colors"
                        >
                          <Mail className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Leadership Principles
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Guided by innovation, integrity, and a commitment to pushing the boundaries of what's possible.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Brain,
                  title: 'Innovation First',
                  description: 'Constantly pushing the boundaries of technology and exploring new possibilities.'
                },
                {
                  icon: Shield,
                  title: 'Integrity & Trust',
                  description: 'Building trust through transparency, ethical practices, and reliable delivery.'
                },
                {
                  icon: Users,
                  title: 'Collaboration',
                  description: 'Fostering partnerships and teamwork to achieve breakthrough results.'
                },
                {
                  icon: Rocket,
                  title: 'Future-Focused',
                  description: 'Anticipating tomorrow\'s challenges and developing solutions today.'
                }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Join Our Mission
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Ready to work with visionary leaders who are shaping the future of technology? 
                Let's explore how we can collaborate to achieve extraordinary results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Get in Touch
                </a>
                <a
                  href="/careers"
                  className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
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

export default LeadershipPage;