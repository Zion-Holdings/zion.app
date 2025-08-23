import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Users, Star, Award, Linkedin, Twitter, Globe, Brain, 
  Rocket, Shield, Atom, Cpu, Database, Cloud, Target,
  TrendingUp, Lightbulb, Zap, Sparkles
} from 'lucide-react';

const Leadership: React.FC = () => {
  const leadershipTeam = [
    {
      name: "Kleber Santos",
      title: "Founder & CEO",
      bio: "Visionary leader driving Zion Tech Group's mission to pioneer the future of technology through AI consciousness, quantum computing, and autonomous solutions.",
      expertise: ["AI & Machine Learning", "Quantum Technology", "Strategic Innovation"],
      avatar: "/api/placeholder/200/200",
      linkedin: "https://linkedin.com/in/kleber-santos",
      twitter: "https://twitter.com/klebersantos",
      achievements: ["15+ Years Tech Leadership", "AI Innovation Award 2024", "Quantum Computing Pioneer"]
    },
    {
      name: "Dr. Sarah Chen",
      title: "Chief Technology Officer",
      bio: "Leading-edge technologist specializing in quantum computing, AI consciousness, and next-generation infrastructure solutions.",
      expertise: ["Quantum Computing", "AI Consciousness", "Cloud Infrastructure"],
      avatar: "/api/placeholder/200/200",
      linkedin: "https://linkedin.com/in/sarah-chen",
      twitter: "https://twitter.com/sarahchen",
      achievements: ["PhD Computer Science", "Quantum Research Leader", "AI Ethics Expert"]
    },
    {
      name: "Marcus Rodriguez",
      title: "Chief Innovation Officer",
      bio: "Driving breakthrough innovations in space technology, autonomous systems, and futuristic business solutions.",
      expertise: ["Space Technology", "Autonomous Systems", "Business Innovation"],
      avatar: "/api/placeholder/200/200",
      linkedin: "https://linkedin.com/in/marcus-rodriguez",
      twitter: "https://twitter.com/marcusrodriguez",
      achievements: ["Space Tech Innovator", "Autonomous Systems Expert", "Business Transformation Leader"]
    },
    {
      name: "Dr. Elena Petrova",
      title: "Chief AI Officer",
      bio: "Pioneering AI consciousness research and development, leading the evolution of emotional intelligence in artificial intelligence.",
      expertise: ["AI Consciousness", "Emotional Intelligence", "Neural Networks"],
      avatar: "/api/placeholder/200/200",
      linkedin: "https://linkedin.com/in/elena-petrova",
      twitter: "https://twitter.com/elenapetrova",
      achievements: ["PhD AI Research", "Consciousness Expert", "Neural Innovation Leader"]
    },
    {
      name: "James Thompson",
      title: "Chief Security Officer",
      bio: "Cybersecurity expert leading quantum-resistant security solutions and zero-trust architecture implementations.",
      expertise: ["Quantum Cybersecurity", "Zero Trust Security", "Threat Intelligence"],
      avatar: "/api/placeholder/200/200",
      linkedin: "https://linkedin.com/in/james-thompson",
      twitter: "https://twitter.com/jamesthompson",
      achievements: ["Cybersecurity Expert", "Quantum Security Pioneer", "Zero Trust Architect"]
    }
  ];

  const values = [
    {
      icon: Brain,
      title: "Innovation First",
      description: "We push the boundaries of what's possible, constantly exploring new frontiers in technology."
    },
    {
      icon: Shield,
      title: "Security & Trust",
      description: "Building secure, reliable solutions that our clients can trust with their most critical operations."
    },
    {
      icon: Rocket,
      title: "Future-Focused",
      description: "We don't just adapt to change; we create the future of technology and business."
    },
    {
      icon: Users,
      title: "Human-Centric",
      description: "Technology serves humanity. We build solutions that enhance human capabilities and experiences."
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Leadership Team
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Meet the visionary leaders driving Zion Tech Group's mission to pioneer the future of technology through AI consciousness, quantum computing, and autonomous solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Meet Our Leadership
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our leadership team brings together decades of experience in cutting-edge technology, innovation, and business transformation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leadershipTeam.map((leader, index) => (
                <motion.div
                  key={leader.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="text-center mb-6">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 p-1">
                      <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                        <Users className="w-16 h-16 text-cyan-400" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{leader.name}</h3>
                    <p className="text-cyan-400 font-semibold mb-3">{leader.title}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{leader.bio}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-2" />
                      Expertise
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {leader.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-cyan-400/10 text-cyan-400 text-xs rounded-full border border-cyan-400/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 flex items-center">
                      <Award className="w-4 h-4 text-purple-400 mr-2" />
                      Achievements
                    </h4>
                    <ul className="space-y-2">
                      {leader.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="text-gray-300 text-sm flex items-center">
                          <Sparkles className="w-3 h-3 text-purple-400 mr-2" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-center space-x-4">
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
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                The principles that guide our leadership and drive our mission to transform the future of technology.
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
                  className="text-center group"
                >
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl p-5 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-full h-full text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Join Our Mission
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Ready to be part of the future? Connect with our leadership team and discover how we can transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get in Touch
                </a>
                <a
                  href="/careers"
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300"
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

export default Leadership;