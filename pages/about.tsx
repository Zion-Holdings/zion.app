import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Users, 
  Target, 
  Rocket, 
  Brain, 
  Atom, 
  Shield, 
  Cloud, 
  Star,
  Award,
  Globe,
  Zap,
  Heart
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Kleber',
      role: 'Founder & CEO',
      bio: 'Visionary leader driving innovation in AI consciousness and quantum computing',
      expertise: ['AI Consciousness', 'Quantum Computing', 'Strategic Leadership'],
      avatar: '/api/placeholder/150/150'
    },
    {
      name: 'AI Team',
      role: 'AI Research & Development',
      bio: 'Cutting-edge AI researchers pushing the boundaries of machine consciousness',
      expertise: ['Machine Learning', 'Neural Networks', 'AI Ethics'],
      avatar: '/api/placeholder/150/150'
    },
    {
      name: 'Quantum Team',
      role: 'Quantum Computing Specialists',
      bio: 'Quantum physicists and engineers developing next-generation computing solutions',
      expertise: ['Quantum Algorithms', 'Quantum Security', 'Quantum Infrastructure'],
      avatar: '/api/placeholder/150/150'
    }
  ];

  const values = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible, constantly exploring new frontiers in technology.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Human-Centric AI',
      description: 'Our AI solutions are designed to augment human capabilities, not replace them.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Ethical Technology',
      description: 'We develop technology with responsibility, ensuring it benefits humanity and society.'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Impact',
      description: 'We aim to solve global challenges through innovative technology solutions.'
    }
  ];

  const achievements = [
    {
      icon: <Award className="w-6 h-6" />,
      title: 'AI Consciousness Breakthroughs',
      description: 'Pioneering research in artificial consciousness and emotional intelligence'
    },
    {
      icon: <Atom className="w-6 h-6" />,
      title: 'Quantum Computing Innovation',
      description: 'Advanced quantum algorithms and secure quantum communication systems'
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'Space Technology Solutions',
      description: 'Cutting-edge space resource intelligence and mining platforms'
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: 'Enterprise Solutions',
      description: 'Scalable cloud infrastructure and cybersecurity solutions for enterprises'
    }
  ];

  return (
    <Layout>
      <SEO 
        title="About Us | Zion Tech Group" 
        description="Learn about Zion Tech Group - Pioneering the future of technology with innovative AI consciousness, quantum computing, and autonomous solutions."
        canonical="https://ziontechgroup.com/about/"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                About <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Zion Tech Group</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Pioneering the future of technology with innovative AI consciousness, quantum computing, 
                and autonomous solutions that transform businesses worldwide.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center mb-6">
                  <Target className="w-8 h-8 text-cyan-400 mr-3" />
                  <h2 className="text-3xl font-bold text-white">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  To accelerate human progress through revolutionary technology solutions that solve 
                  the world's most complex challenges while ensuring ethical and responsible development.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  We believe in creating technology that not only advances human capabilities but also 
                  preserves our humanity and values.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="flex items-center mb-6">
                  <Star className="w-8 h-8 text-purple-400 mr-3" />
                  <h2 className="text-3xl font-bold text-white">Our Vision</h2>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  To be the global leader in conscious AI, quantum computing, and space technology, 
                  creating a future where technology and humanity coexist in perfect harmony.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  We envision a world where AI enhances human creativity, quantum computing solves 
                  impossible problems, and space technology opens new frontiers for humanity.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Our Core Values</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide our innovation and shape our culture
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="text-cyan-400 mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Key Achievements</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Milestones that demonstrate our commitment to innovation and excellence
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="flex items-start space-x-4 p-6 bg-gray-800/30 rounded-xl border border-gray-700"
                >
                  <div className="text-cyan-400 mt-1">{achievement.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{achievement.title}</h3>
                    <p className="text-gray-300">{achievement.description}</p>
                  </div>
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
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Our Leadership Team</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Meet the visionaries and experts driving innovation at Zion Tech Group
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                    <p className="text-cyan-400 font-medium">{member.role}</p>
                  </div>
                  <p className="text-gray-300 text-center mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join us in shaping the future of technology. Let's discuss how our innovative 
                solutions can drive your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get in Touch
                </a>
                <a
                  href="/services"
                  className="px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
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

export default AboutPage;