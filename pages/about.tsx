import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Users, 
  Target, 
  Star, 
  Zap, 
  Brain, 
  Atom, 
  Rocket, 
  Shield, 
  Cloud, 
  TrendingUp,
  CheckCircle,
  Globe,
  Award,
  Heart,
  ArrowRight
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const values = [
    {
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with cutting-edge technology',
      icon: <Zap className="w-8 h-8 text-yellow-500" />
    },
    {
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from code to customer service',
      icon: <Star className="w-8 h-8 text-purple-500" />
    },
    {
      title: 'Integrity',
      description: 'We operate with honesty, transparency, and ethical business practices',
      icon: <CheckCircle className="w-8 h-8 text-green-500" />
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and partnership to achieve greatness',
      icon: <Users className="w-8 h-8 text-blue-500" />
    }
  ];

  const milestones = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'Zion Tech Group was established with a vision to revolutionize technology'
    },
    {
      year: '2022',
      title: 'AI Breakthrough',
      description: 'Launched our first AI consciousness platform'
    },
    {
      year: '2023',
      title: 'Quantum Leap',
      description: 'Introduced quantum computing services'
    },
    {
      year: '2024',
      title: 'Global Expansion',
      description: 'Expanded services to international markets'
    },
    {
      year: '2025',
      description: 'Pioneering the future of technology with revolutionary solutions'
    }
  ];

  const team = [
    {
      name: 'Kleber',
      role: 'Founder & CEO',
      description: 'Visionary leader driving innovation and growth',
      icon: <Users className="w-6 h-6" />
    },
    {
      name: 'AI Team',
      role: 'AI Research & Development',
      description: 'Experts in artificial intelligence and consciousness',
      icon: <Brain className="w-6 h-6" />
    },
    {
      name: 'Quantum Team',
      role: 'Quantum Computing',
      description: 'Pioneers in quantum technology and algorithms',
      icon: <Atom className="w-6 h-6" />
    },
    {
      name: 'Security Team',
      role: 'Cybersecurity',
      description: 'Protecting digital assets with advanced security',
      icon: <Shield className="w-6 h-6" />
    }
  ];

  return (
    <Layout 
      title="About Us - Zion Tech Group"
      description="Learn about Zion Tech Group's mission, values, and commitment to revolutionizing technology"
      canonicalUrl="https://ziontechgroup.com/about"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                About
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  {' '}Zion Tech Group
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Pioneering the future of technology with revolutionary AI consciousness, 
                quantum computing, and autonomous solutions that transform businesses worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/mission"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                >
                  Our Mission
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="/team"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
                >
                  Meet Our Team
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-white mb-6">
                  Our Mission
                </h2>
                <p className="text-xl text-gray-300 mb-6">
                  To accelerate human progress through revolutionary technology solutions 
                  that solve the world's most complex challenges.
                </p>
                <p className="text-lg text-gray-400 mb-8">
                  We believe that technology should serve humanity, not replace it. 
                  Our AI consciousness platforms, quantum computing solutions, and 
                  autonomous systems are designed to augment human capabilities and 
                  create a better future for all.
                </p>
                <a
                  href="/mission"
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300"
                >
                  Learn More About Our Mission
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20">
                  <Target className="w-24 h-24 mx-auto mb-6 text-purple-400" />
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Vision 2045
                  </h3>
                  <p className="text-gray-300">
                    Leading the technological revolution with AI consciousness, 
                    quantum supremacy, and autonomous intelligence.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                These principles guide everything we do and shape our company culture.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-white/10 backdrop-blur-lg rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center border border-white/20">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Milestones Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Our Journey
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From startup to technology leader, discover our key milestones 
                and achievements.
              </p>
            </motion.div>

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year || index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className="flex-1 text-center">
                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                      <div className="text-3xl font-bold text-purple-400 mb-2">
                        {milestone.year}
                      </div>
                      {milestone.title && (
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {milestone.title}
                        </h3>
                      )}
                      <p className="text-gray-300">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-16 h-0.5 bg-purple-500 mx-8"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Our Team
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Meet the brilliant minds behind our revolutionary technology solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-white/10 backdrop-blur-lg rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center border border-white/20">
                    <div className="text-purple-400">
                      {member.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-purple-400 text-sm mb-2">
                    {member.role}
                  </p>
                  <p className="text-gray-300 text-sm">
                    {member.description}
                  </p>
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
                Join Us in Shaping the Future
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Be part of the technological revolution that's transforming 
                the world as we know it.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/careers"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                >
                  Join Our Team
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
                >
                  Get in Touch
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