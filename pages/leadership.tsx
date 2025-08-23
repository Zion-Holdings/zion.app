import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Star, 
  Award, 
  Linkedin, 
  Twitter, 
  Globe, 
  Brain, 
  Rocket, 
  Shield, 
  Cloud,
  Zap,
  Target,
  Lightbulb,
  BarChart3,
  Cpu,
  Database,
  Code,
  Atom
} from 'lucide-react';
import Layout from '../components/layout/Layout';

const LeadershipPage: React.FC = () => {
  const leadershipTeam = [
    {
      name: 'Dr. Sarah Chen',
      title: 'Chief Executive Officer',
      bio: 'Visionary leader with 20+ years in quantum computing and AI. Former CTO at leading tech companies, PhD in Computer Science from MIT.',
      expertise: ['Quantum Computing', 'AI Strategy', 'Enterprise Leadership'],
      icon: Brain,
      linkedin: '#',
      twitter: '#',
      achievements: ['Forbes 30 Under 30', 'MIT Technology Review Innovator', '100+ Patents']
    },
    {
      name: 'Marcus Rodriguez',
      title: 'Chief Technology Officer',
      bio: 'Pioneering space technology expert with deep experience in satellite systems, quantum communications, and advanced robotics.',
      expertise: ['Space Technology', 'Quantum Communications', 'Robotics'],
      icon: Rocket,
      linkedin: '#',
      twitter: '#',
      achievements: ['NASA Innovation Award', 'Space Foundation Pioneer', '50+ Space Missions']
    },
    {
      name: 'Dr. Elena Petrova',
      title: 'Chief Security Officer',
      bio: 'Cybersecurity expert specializing in quantum-resistant cryptography, zero-trust architectures, and advanced threat detection.',
      expertise: ['Quantum Security', 'Zero-Trust', 'Threat Intelligence'],
      icon: Shield,
      linkedin: '#',
      twitter: '#',
      achievements: ['Black Hat Speaker', 'DEF CON Champion', 'Security Hall of Fame']
    },
    {
      name: 'David Kim',
      title: 'Chief Cloud Officer',
      bio: 'Cloud infrastructure specialist with expertise in edge computing, quantum cloud platforms, and distributed systems.',
      expertise: ['Cloud Architecture', 'Edge Computing', 'Quantum Cloud'],
      icon: Cloud,
      linkedin: '#',
      twitter: '#',
      achievements: ['AWS Community Hero', 'Google Cloud Expert', 'Cloud Native Champion']
    },
    {
      name: 'Dr. Amanda Foster',
      title: 'Chief Data Officer',
      bio: 'Data science leader specializing in quantum machine learning, predictive analytics, and ethical AI development.',
      expertise: ['Quantum ML', 'Predictive Analytics', 'Ethical AI'],
      icon: Database,
      linkedin: '#',
      twitter: '#',
      achievements: ['Kaggle Grandmaster', 'Data Science Leader', 'AI Ethics Pioneer']
    },
    {
      name: 'James Thompson',
      title: 'Chief Innovation Officer',
      bio: 'Innovation strategist focused on emerging technologies, strategic partnerships, and disruptive business models.',
      expertise: ['Emerging Tech', 'Strategic Partnerships', 'Innovation Strategy'],
      icon: Lightbulb,
      linkedin: '#',
      twitter: '#',
      achievements: ['Innovation Leader Award', 'Patent Master', 'Startup Mentor']
    }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible, embracing cutting-edge technologies to solve tomorrow\'s challenges.',
      icon: Zap
    },
    {
      title: 'Quantum Excellence',
      description: 'We strive for quantum-level precision and performance in everything we do, from code to customer experience.',
      icon: Atom
    },
    {
      title: 'Global Impact',
      description: 'Our solutions reach beyond borders, creating positive change for humanity and the planet.',
      icon: Globe
    },
    {
      title: 'Ethical Technology',
      description: 'We develop technology that serves humanity, prioritizing safety, privacy, and responsible innovation.',
      icon: Shield
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Meet Our{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Leadership Team
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Visionary leaders driving the future of technology through innovation, 
                expertise, and unwavering commitment to excellence.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Executive Leadership
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Our leadership team brings together decades of experience across the most 
                cutting-edge technologies and industries.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leadershipTeam.map((leader, index) => (
                <motion.div
                  key={leader.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all duration-300 group"
                >
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <leader.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{leader.name}</h3>
                    <p className="text-cyan-400 font-semibold">{leader.title}</p>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{leader.bio}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {leader.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-cyan-400/10 text-cyan-400 text-xs rounded-full border border-cyan-400/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">Achievements:</h4>
                    <div className="space-y-1">
                      {leader.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-center text-xs text-gray-400">
                          <Award className="w-3 h-3 text-yellow-400 mr-2" />
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center space-x-3 pt-4 border-t border-gray-700/50">
                    <a href={leader.linkedin} className="text-gray-400 hover:text-blue-400 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href={leader.twitter} className="text-gray-400 hover:text-blue-400 transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                The principles that guide our leadership and shape our company culture.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="bg-gradient-to-r from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-gradient-to-r from-cyan-400/10 to-blue-500/10 border border-cyan-400/20 rounded-3xl p-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Join Our Mission
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Ready to work with visionary leaders who are shaping the future of technology? 
                Let's discuss how we can transform your business together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  Get in Touch
                </a>
                <a
                  href="/careers"
                  className="px-8 py-4 border border-cyan-400/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400/10 transition-all duration-300"
                >
                  Join Our Team
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