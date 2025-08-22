import React from 'react';
import SEO from '../components/SEO';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Brain, Rocket, Shield, Atom, Globe, Users, Award, 
  Target, Lightbulb, Zap, Star, Building, MapPin, Phone, Mail,
  Linkedin, Github, Twitter, ExternalLink
} from 'lucide-react';

export default function TeamPage() {
  const leadership = [
    {
      name: 'Kleber',
      role: 'Founder & CEO',
      bio: 'Visionary technology leader with 20+ years of experience in AI, quantum computing, and enterprise solutions. Passionate about pushing the boundaries of what\'s possible.',
      expertise: ['AI & Machine Learning', 'Quantum Computing', 'Enterprise Architecture', 'Strategic Innovation'],
      image: '/images/team/kleber.jpg',
      linkedin: 'https://linkedin.com/in/kleber-zion',
      github: 'https://github.com/kleber-zion',
      twitter: 'https://twitter.com/kleberzion'
    }
  ];

  const coreTeam = [
    {
      name: 'AI Research Team',
      role: 'AI & Consciousness Division',
      bio: 'Leading the development of revolutionary AI consciousness technology and emotional intelligence systems.',
      expertise: ['AI Consciousness', 'Emotional Intelligence', 'Neural Networks', 'Cognitive Computing'],
      image: '/images/team/ai-team.jpg',
      members: 12
    },
    {
      name: 'Quantum Computing Team',
      role: 'Quantum Technologies Division',
      bio: 'Pioneering breakthroughs in quantum computing, cryptography, and quantum-enhanced solutions.',
      expertise: ['Quantum Algorithms', 'Quantum Cryptography', 'Quantum Machine Learning', 'Quantum Materials'],
      image: '/images/team/quantum-team.jpg',
      members: 8
    },
    {
      name: 'Enterprise Solutions Team',
      role: 'Enterprise IT Division',
      bio: 'Delivering world-class enterprise infrastructure, security, and automation solutions.',
      expertise: ['Cloud Architecture', 'DevOps Automation', 'Cybersecurity', 'Infrastructure as Code'],
      image: '/images/team/enterprise-team.jpg',
      members: 15
    },
    {
      name: 'Micro SAAS Team',
      role: 'Business Solutions Division',
      bio: 'Creating innovative business automation and intelligence solutions for modern enterprises.',
      expertise: ['Business Process Automation', 'Data Analytics', 'CRM Intelligence', 'Supply Chain Optimization'],
      image: '/images/team/saas-team.jpg',
      members: 10
    }
  ];

  const advisors = [
    {
      name: 'Dr. Sarah Chen',
      role: 'AI Ethics Advisor',
      bio: 'Leading expert in AI ethics and governance, ensuring responsible AI development.',
      expertise: ['AI Ethics', 'Governance Frameworks', 'Responsible AI', 'Policy Development'],
      image: '/images/team/sarah-chen.jpg',
      linkedin: 'https://linkedin.com/in/sarah-chen-ai-ethics'
    },
    {
      name: 'Prof. Michael Rodriguez',
      role: 'Quantum Computing Advisor',
      bio: 'Renowned quantum physicist and researcher in quantum computing applications.',
      expertise: ['Quantum Physics', 'Quantum Algorithms', 'Quantum Materials', 'Research & Development'],
      image: '/images/team/michael-rodriguez.jpg',
      linkedin: 'https://linkedin.com/in/michael-rodriguez-quantum'
    }
  ];

  const values = [
    {
      title: 'Innovation Excellence',
      description: 'Constantly pushing boundaries and exploring new frontiers in technology',
      icon: <Lightbulb className="w-8 h-8 text-yellow-400" />
    },
    {
      title: 'Collaborative Growth',
      description: 'Fostering a culture of learning, sharing, and continuous improvement',
      icon: <Users className="w-8 h-8 text-blue-400" />
    },
    {
      title: 'Client-Centric Focus',
      description: 'Every decision and innovation is driven by client success and value',
      icon: <Target className="w-8 h-8 text-green-400" />
    },
    {
      title: 'Future-Ready Mindset',
      description: 'Building solutions that prepare businesses for tomorrow\'s challenges',
      icon: <Rocket className="w-8 h-8 text-purple-400" />
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Our Team - Zion Tech Group"
        description="Meet the visionary leaders and talented professionals driving innovation at Zion Tech Group. Discover our expertise in AI, quantum computing, and enterprise solutions."
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Meet Our Team
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Visionary leaders, brilliant minds, and passionate innovators working together to revolutionize technology and shape the future.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-gray-400">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>50+ Team Members</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  <span>Global Expertise</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  <span>Industry Leaders</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Leadership Team
              </h2>
              <p className="text-xl text-gray-400">
                Visionary leaders driving innovation and strategic direction
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-1 gap-8 max-w-5xl mx-auto">
              {leadership.map((leader, index) => (
                <motion.div
                  key={leader.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex flex-col lg:flex-row gap-8 p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="w-40 h-40 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center">
                      <Users className="w-20 h-20 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {leader.name}
                    </h3>
                    <div className="text-xl text-cyan-400 mb-4">
                      {leader.role}
                    </div>
                    <p className="text-gray-300 text-lg mb-6">
                      {leader.bio}
                    </p>
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Areas of Expertise:</h4>
                      <div className="flex flex-wrap gap-2">
                        {leader.expertise.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-4">
                      {leader.linkedin && (
                        <a
                          href={leader.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                        >
                          <Linkedin className="w-4 h-4" />
                          LinkedIn
                        </a>
                      )}
                      {leader.github && (
                        <a
                          href={leader.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors duration-300"
                        >
                          <Github className="w-4 h-4" />
                          GitHub
                        </a>
                      )}
                      {leader.twitter && (
                        <a
                          href={leader.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors duration-300"
                        >
                          <Twitter className="w-4 h-4" />
                          Twitter
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Team */}
        <section className="py-20 bg-black/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Core Team Divisions
              </h2>
              <p className="text-xl text-gray-400">
                Specialized teams delivering excellence in their domains
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {coreTeam.map((team, index) => (
                <motion.div
                  key={team.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Users className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {team.name}
                      </h3>
                      <div className="text-cyan-400 mb-2">
                        {team.role}
                      </div>
                      <div className="text-gray-400 text-sm">
                        {team.members} team members
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6">
                    {team.bio}
                  </p>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {team.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm border border-purple-500/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Advisors */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Advisory Board
              </h2>
              <p className="text-xl text-gray-400">
                Industry experts and thought leaders guiding our strategic direction
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {advisors.map((advisor, index) => (
                <motion.div
                  key={advisor.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex gap-6 p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                      <Award className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {advisor.name}
                    </h3>
                    <div className="text-lg text-green-400 mb-3">
                      {advisor.role}
                    </div>
                    <p className="text-gray-300 mb-4">
                      {advisor.bio}
                    </p>
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {advisor.expertise.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm border border-green-500/30"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    {advisor.linkedin && (
                      <a
                        href={advisor.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
                      >
                        <Linkedin className="w-4 h-4" />
                        View Profile
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Values */}
        <section className="py-20 bg-black/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Our Team Values
              </h2>
              <p className="text-xl text-gray-400">
                The principles that unite us and drive our success
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex gap-6 p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-300">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Our Team */}
        <section className="py-20 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Join Our Team
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We're always looking for brilliant minds, passionate innovators, and technology enthusiasts who want to shape the future. Join us in revolutionizing technology and making a difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/careers"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  View Open Positions
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-bold rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300"
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
}