import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Users, Target, Award, Globe, 
  ArrowRight, Star, Shield, CheckCircle, TrendingUp,
  Infinity, Eye, Sparkles, Clock, Zap, Crown, Lightbulb,
  Rocket, Brain, Atom, Cpu, Database, Cloud, MessageCircle
} from 'lucide-react';

const LeadershipPage: React.FC = () => {
  const leadershipTeam = [
    {
      name: "Kleber",
      role: "Founder & Chief Executive Officer",
      description: "Visionary leader driving innovation and strategic growth across all business units",
      expertise: ["Strategic Vision", "Innovation Leadership", "Business Development"],
      achievements: ["Founded Zion Tech Group", "2000+ Revolutionary Services", "Global Expansion"],
      image: "/api/placeholder/300/300",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "AI Consciousness Team",
      role: "Chief AI & Consciousness Officer",
      description: "Leading the development of next-generation artificial intelligence and consciousness systems",
      expertise: ["AI Development", "Consciousness Research", "Neural Networks"],
      achievements: ["AI Consciousness Platform", "Autonomous Systems", "Ethical AI"],
      image: "/api/placeholder/300/300",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Quantum Technology Team",
      role: "Chief Quantum Technology Officer",
      description: "Pioneering quantum computing solutions and quantum-resistant cybersecurity",
      expertise: ["Quantum Computing", "Quantum Security", "Quantum Algorithms"],
      achievements: ["Quantum Neural Ecosystem", "Quantum Cybersecurity", "Quantum Internet"],
      image: "/api/placeholder/300/300",
      color: "from-indigo-500 to-purple-500"
    },
    {
      name: "Space Technology Team",
      role: "Chief Space Technology Officer",
      description: "Innovating space exploration and resource intelligence platforms",
      expertise: ["Space Technology", "Resource Intelligence", "Satellite Systems"],
      achievements: ["Space Resource Platform", "Satellite Intelligence", "Space Mining"],
      image: "/api/placeholder/300/300",
      color: "from-pink-500 to-red-500"
    }
  ];

  const advisoryBoard = [
    {
      name: "Technology Advisory Board",
      role: "Strategic Technology Guidance",
      description: "Industry experts providing strategic guidance on emerging technologies",
      expertise: ["Emerging Tech", "Industry Trends", "Strategic Planning"],
      color: "from-emerald-500 to-teal-500"
    },
    {
      name: "AI Ethics Board",
      role: "AI Governance & Ethics",
      description: "Ensuring responsible AI development and ethical technology deployment",
      expertise: ["AI Ethics", "Governance", "Responsible AI"],
      color: "from-amber-500 to-orange-500"
    },
    {
      name: "Innovation Council",
      role: "Innovation Strategy",
      description: "Driving breakthrough innovations and disruptive technology solutions",
      expertise: ["Innovation", "R&D Strategy", "Disruptive Tech"],
      color: "from-rose-500 to-pink-500"
    }
  ];

  const organizationalValues = [
    {
      icon: Crown,
      title: "Leadership Excellence",
      description: "Setting the highest standards in technology leadership and innovation",
      color: "from-yellow-500 to-amber-500"
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "Pioneering breakthrough solutions that transform industries",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Integrity & Trust",
      description: "Building lasting relationships through transparency and ethical practices",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Rocket,
      title: "Future-Focused",
      description: "Anticipating tomorrow's challenges and opportunities today",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
                <Crown className="w-4 h-4 mr-2" />
                Leadership Team
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-6">
                Our Leadership
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Meet the visionary leaders and experts who are driving innovation, 
                shaping the future of technology, and transforming industries worldwide.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Leadership Team Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Executive Leadership
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our leadership team brings together decades of experience in technology, 
                innovation, and business transformation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {leadershipTeam.map((leader, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-800/30 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <div className="flex items-start space-x-6">
                    <div className={`w-24 h-24 bg-gradient-to-r ${leader.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      <Users className="w-12 h-12 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{leader.name}</h3>
                      <p className="text-blue-400 font-semibold mb-3">{leader.role}</p>
                      <p className="text-gray-300 mb-4 leading-relaxed">{leader.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-400 mb-2">Expertise</h4>
                        <div className="flex flex-wrap gap-2">
                          {leader.expertise.map((skill, skillIndex) => (
                            <span key={skillIndex} className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Achievements</h4>
                        <div className="flex flex-wrap gap-2">
                          {leader.achievements.map((achievement, achievementIndex) => (
                            <span key={achievementIndex} className="px-3 py-1 bg-green-500/20 text-green-300 text-xs rounded-full border border-green-500/30">
                              {achievement}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Advisory Board Section */}
        <section className="py-20 px-4 bg-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advisory Boards
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Strategic guidance from industry experts and thought leaders 
                ensuring we stay at the forefront of innovation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {advisoryBoard.map((board, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-800/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group text-center"
                >
                  <div className={`w-20 h-20 bg-gradient-to-r ${board.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Star className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{board.name}</h3>
                  <p className="text-blue-400 font-medium mb-4">{board.role}</p>
                  <p className="text-gray-300 mb-4 leading-relaxed">{board.description}</p>
                  
                  <div className="flex flex-wrap gap-2 justify-center">
                    {board.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Organizational Values Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Leadership Values
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The fundamental principles that guide our leadership decisions 
                and shape our organizational culture.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {organizationalValues.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-800/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group text-center"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-3xl p-12 border border-blue-500/30"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Join Our Leadership Team
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Ready to lead the future of technology? Explore opportunities 
                to join our innovative team and make a global impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  <Users className="w-5 h-5 mr-2" />
                  View Careers
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-xl hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contact Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default LeadershipPage;