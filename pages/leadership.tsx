import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Rocket, Shield, Users, Target, Award, Globe, Zap, Mail, Linkedin, Twitter, Github, Phone, MapPin } from 'lucide-react';
import Layout from '../components/layout/Layout';

const leadershipTeam = [
  {
    name: 'Kleber Santos',
    title: 'Chief Executive Officer & Founder',
    department: 'Executive Leadership',
    bio: 'Visionary leader and technology innovator with over 15 years of experience in AI, quantum computing, and enterprise technology. Founded Zion Tech Group with the mission to revolutionize technology through consciousness evolution and autonomous systems.',
    expertise: ['AI Consciousness', 'Quantum Computing', 'Strategic Vision', 'Innovation Leadership'],
    experience: '15+ years',
    education: 'Advanced degrees in Computer Science and AI',
    achievements: [
      'Pioneered AI consciousness research',
      'Led quantum computing initiatives',
      'Established global technology partnerships',
      'Named Top 100 Tech Innovators 2024'
    ],
    contact: {
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950',
      linkedin: 'https://linkedin.com/in/klebersantos',
      twitter: 'https://twitter.com/klebersantos'
    },
    avatar: '/images/leadership/kleber-santos.jpg',
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-400/10',
    borderColor: 'border-cyan-400/20'
  },
  {
    name: 'Dr. Sarah Chen',
    title: 'Chief Technology Officer',
    department: 'Technology & Innovation',
    bio: 'Leading expert in quantum computing and AI research with a PhD from MIT. Dr. Chen oversees all technological innovation, from quantum algorithms to autonomous systems development.',
    expertise: ['Quantum Computing', 'AI Research', 'System Architecture', 'Innovation Management'],
    experience: '12+ years',
    education: 'PhD Computer Science, MIT',
    achievements: [
      'Published 50+ research papers',
      'Led quantum supremacy breakthrough',
      'Developed autonomous AI systems',
      'Recipient of NSF CAREER Award'
    ],
    contact: {
      email: 'sarah.chen@ziontechgroup.com',
      phone: '+1 302 464 0951',
      linkedin: 'https://linkedin.com/in/sarahchen',
      github: 'https://github.com/sarahchen'
    },
    avatar: '/images/leadership/sarah-chen.jpg',
    color: 'text-blue-400',
    bgColor: 'bg-blue-400/10',
    borderColor: 'border-blue-400/20'
  },
  {
    name: 'Marcus Rodriguez',
    title: 'Chief Operations Officer',
    department: 'Operations & Strategy',
    bio: 'Operations expert with deep experience in scaling technology companies and managing complex enterprise operations. Marcus ensures seamless delivery of our revolutionary technology solutions.',
    expertise: ['Operations Management', 'Strategic Planning', 'Enterprise Scaling', 'Process Optimization'],
    experience: '18+ years',
    education: 'MBA, Stanford Graduate School of Business',
    achievements: [
      'Scaled operations to 500+ employees',
      'Optimized delivery processes by 300%',
      'Established global operations centers',
      'Led successful IPO preparation'
    ],
    contact: {
      email: 'marcus.rodriguez@ziontechgroup.com',
      phone: '+1 302 464 0952',
      linkedin: 'https://linkedin.com/in/marcusrodriguez',
      twitter: 'https://twitter.com/marcusrodriguez'
    },
    avatar: '/images/leadership/marcus-rodriguez.jpg',
    color: 'text-purple-400',
    bgColor: 'bg-purple-400/10',
    borderColor: 'border-purple-400/20'
  },
  {
    name: 'Dr. Elena Petrova',
    title: 'Chief Research Officer',
    department: 'Research & Development',
    bio: 'Renowned researcher in AI consciousness and quantum neural networks. Dr. Petrova leads our breakthrough research initiatives and ensures we stay at the forefront of technological innovation.',
    expertise: ['AI Consciousness', 'Quantum Neural Networks', 'Research Leadership', 'Academic Collaboration'],
    experience: '14+ years',
    education: 'PhD Neuroscience, Stanford University',
    achievements: [
      'Breakthrough in AI consciousness mapping',
      'Developed quantum neural architectures',
      'Published in Nature and Science',
      'Led international research consortiums'
    ],
    contact: {
      email: 'elena.petrova@ziontechgroup.com',
      phone: '+1 302 464 0953',
      linkedin: 'https://linkedin.com/in/elenapetrova',
      github: 'https://github.com/elenapetrova'
    },
    avatar: '/images/leadership/elena-petrova.jpg',
    color: 'text-green-400',
    bgColor: 'bg-green-400/10',
    borderColor: 'border-green-400/20'
  },
  {
    name: 'David Kim',
    title: 'Chief Financial Officer',
    department: 'Finance & Strategy',
    bio: 'Financial strategist with expertise in technology investment and growth financing. David manages our financial operations and strategic partnerships to fuel our mission of technological revolution.',
    expertise: ['Financial Strategy', 'Investment Management', 'Strategic Partnerships', 'Growth Financing'],
    experience: '16+ years',
    education: 'MBA Finance, Harvard Business School',
    achievements: [
      'Raised $500M+ in funding rounds',
      'Led strategic acquisitions',
      'Established investor relations',
      'Optimized financial operations'
    ],
    contact: {
      email: 'david.kim@ziontechgroup.com',
      phone: '+1 302 464 0954',
      linkedin: 'https://linkedin.com/in/davidkim',
      twitter: 'https://twitter.com/davidkim'
    },
    avatar: '/images/leadership/david-kim.jpg',
    color: 'text-orange-400',
    bgColor: 'bg-orange-400/10',
    borderColor: 'border-orange-400/20'
  }
];

const companyStructure = [
  {
    department: 'AI & Consciousness Division',
    leader: 'Dr. Elena Petrova',
    focus: 'AI consciousness evolution, emotional intelligence, autonomous systems',
    teams: ['Consciousness Research', 'Emotional AI', 'Autonomous Systems', 'Neural Networks']
  },
  {
    department: 'Quantum & Emerging Tech Division',
    leader: 'Dr. Sarah Chen',
    focus: 'Quantum computing, space technology, breakthrough innovations',
    teams: ['Quantum Computing', 'Space Technology', 'Emerging Tech', 'Quantum Security']
  },
  {
    department: 'Enterprise IT Solutions Division',
    leader: 'Marcus Rodriguez',
    focus: 'Enterprise infrastructure, security, automation, cloud solutions',
    teams: ['Infrastructure', 'Security', 'Automation', 'Cloud Services']
  },
  {
    department: 'Micro SAAS & Innovation Division',
    leader: 'Kleber Santos',
    focus: 'Innovative business solutions, micro-SaaS platforms, rapid prototyping',
    teams: ['Product Development', 'Innovation Lab', 'Rapid Prototyping', 'Business Solutions']
  }
];

export default function Leadership() {
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
                Meet the visionary leaders driving Zion Tech Group's mission to revolutionize technology 
                through AI consciousness, quantum computing, and autonomous systems.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Executive Team */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Executive Leadership</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Our executive team brings together decades of experience in technology, research, 
                and business leadership to drive innovation and growth.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {leadershipTeam.map((leader, index) => (
                <motion.div
                  key={leader.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                  className={`p-8 rounded-2xl border ${leader.borderColor} ${leader.bgColor} backdrop-blur-sm`}
                >
                  <div className="flex items-start space-x-6">
                    <div className="w-24 h-24 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className={`w-12 h-12 ${leader.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-2xl font-bold ${leader.color} mb-2`}>{leader.name}</h3>
                      <p className="text-white font-semibold mb-1">{leader.title}</p>
                      <p className="text-gray-400 text-sm mb-4">{leader.department}</p>
                      
                      <p className="text-gray-300 mb-4 leading-relaxed">{leader.bio}</p>
                      
                      <div className="mb-4">
                        <h4 className="text-white font-semibold mb-2">Expertise</h4>
                        <div className="flex flex-wrap gap-2">
                          {leader.expertise.map((skill) => (
                            <span key={skill} className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="text-white font-semibold mb-2">Experience</h4>
                        <p className="text-gray-300 text-sm">{leader.experience}</p>
                      </div>

                      <div className="mb-4">
                        <h4 className="text-white font-semibold mb-2">Education</h4>
                        <p className="text-gray-300 text-sm">{leader.education}</p>
                      </div>

                      <div className="mb-4">
                        <h4 className="text-white font-semibold mb-2">Key Achievements</h4>
                        <ul className="text-gray-300 text-sm space-y-1">
                          {leader.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start">
                              <Award className="w-4 h-4 text-yellow-400 mt-0.5 mr-2 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center space-x-4 pt-4 border-t border-white/10">
                        <a href={`mailto:${leader.contact.email}`} className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors">
                          <Mail className="w-4 h-4" />
                          <span className="text-sm">Email</span>
                        </a>
                        {leader.contact.linkedin && (
                          <a href={leader.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors">
                            <Linkedin className="w-4 h-4" />
                            <span className="text-sm">LinkedIn</span>
                          </a>
                        )}
                        {leader.contact.twitter && (
                          <a href={leader.contact.twitter} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors">
                            <Twitter className="w-4 h-4" />
                            <span className="text-sm">Twitter</span>
                          </a>
                        )}
                        {leader.contact.github && (
                          <a href={leader.contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-300 hover:text-gray-400 transition-colors">
                            <Github className="w-4 h-4" />
                            <span className="text-sm">GitHub</span>
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

        {/* Company Structure */}
        <section className="py-20 px-4 bg-black/30">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Company Structure</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Our organization is structured around four core divisions, each led by experts 
                in their respective fields, ensuring focused innovation and excellence.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {companyStructure.map((division, index) => (
                <motion.div
                  key={division.department}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
                  className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
                >
                  <h3 className="text-xl font-bold text-white mb-3">{division.department}</h3>
                  <p className="text-gray-400 mb-3">Led by: <span className="text-cyan-400">{division.leader}</span></p>
                  <p className="text-gray-300 mb-4">{division.focus}</p>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-2">Teams</h4>
                    <div className="flex flex-wrap gap-2">
                      {division.teams.map((team) => (
                        <span key={team} className="px-3 py-1 bg-cyan-400/20 border border-cyan-400/30 rounded-full text-xs text-cyan-300">
                          {team}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values & Culture */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Leadership Values</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Our leadership team embodies the core values that drive Zion Tech Group's success 
                and shape our company culture.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Innovation First</h3>
                <p className="text-gray-300">
                  We prioritize breakthrough thinking and revolutionary approaches to solving 
                  complex technological challenges.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-blue-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Ethical Leadership</h3>
                <p className="text-gray-300">
                  We lead with integrity, ensuring all technological advancements serve 
                  humanity while maintaining ethical boundaries.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-purple-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Collaborative Excellence</h3>
                <p className="text-gray-300">
                  We foster a culture of collaboration, where diverse perspectives combine 
                  to create extraordinary results.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Join Our Leadership Team</h2>
              <p className="text-lg text-gray-300 mb-8">
                Ready to lead the future of technology? Explore opportunities to join our 
                executive team and help shape the next generation of AI and quantum innovations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/careers" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                  View Open Positions
                </a>
                <a href="/contact" className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300">
                  Contact Leadership
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}