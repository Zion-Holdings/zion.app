import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Users, Target, Award, Globe, 
  ArrowRight, Star, Shield, CheckCircle, TrendingUp,
  Infinity, Eye, Sparkles, Clock, Zap, Brain, Atom, Rocket
} from 'lucide-react';

const TeamPage: React.FC = () => {
  const leadership = [
    {
      name: "Kleber",
      role: "Founder & CEO",
      description: "Visionary leader driving innovation and strategic growth with over 15 years of experience in cutting-edge technology",
      expertise: ["AI & Consciousness", "Quantum Technology", "Strategic Leadership"],
      color: "from-blue-500 to-cyan-500",
      image: "/images/team/kleber.jpg"
    },
    {
      name: "AI Consciousness Team",
      role: "AI & Consciousness Division",
      description: "Experts in next-generation artificial intelligence and consciousness systems, pioneering emotional AI and self-aware systems",
      expertise: ["Emotional AI", "Consciousness Systems", "Ethical AI Governance"],
      color: "from-purple-500 to-pink-500",
      image: "/images/team/ai-team.jpg"
    },
    {
      name: "Quantum Technology Team",
      role: "Quantum Computing Division",
      description: "Pioneers in quantum computing and quantum-resistant solutions, developing the next generation of computational power",
      expertise: ["Quantum Computing", "Quantum Security", "Quantum Neural Networks"],
      color: "from-indigo-500 to-purple-500",
      image: "/images/team/quantum-team.jpg"
    },
    {
      name: "Space Technology Team",
      role: "Space Technology Division",
      description: "Innovators in space exploration and resource intelligence, developing AI-powered space solutions",
      expertise: ["Space Exploration", "Resource Intelligence", "AI Space Systems"],
      color: "from-cyan-500 to-blue-500",
      image: "/images/team/space-team.jpg"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description: "Pioneering cutting-edge technology solutions that transform industries",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Excellence",
      description: "Delivering world-class quality and reliability in everything we do",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working together with clients to achieve extraordinary results",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Creating positive change across industries and communities worldwide",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const stats = [
    { number: "50+", label: "Expert Team Members", icon: Users },
    { number: "2000+", label: "Revolutionary Services", icon: Zap },
    { number: "99.99%", label: "Client Satisfaction", icon: Star },
    { number: "24/7", label: "Support Available", icon: Clock }
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
                <Users className="w-4 h-4 mr-2" />
                Meet Our Team
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-6">
                Leadership Team
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Meet the visionary leaders and expert teams driving Zion Tech Group's mission 
                to revolutionize technology with AI consciousness, quantum computing, and autonomous solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Leadership Team Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Executive Leadership
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our leadership team brings together decades of experience in cutting-edge technology, 
                AI consciousness, and quantum computing to drive innovation and growth.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {leadership.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                  className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 group"
                >
                  <div className="flex items-start space-x-6">
                    <div className={`w-20 h-20 bg-gradient-to-br ${member.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      {member.name === "Kleber" && <Users className="w-10 h-10 text-white" />}
                      {member.name.includes("AI") && <Brain className="w-10 h-10 text-white" />}
                      {member.name.includes("Quantum") && <Atom className="w-10 h-10 text-white" />}
                      {member.name.includes("Space") && <Rocket className="w-10 h-10 text-white" />}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                      <p className="text-cyan-400 font-semibold mb-3">{member.role}</p>
                      <p className="text-gray-300 mb-4 leading-relaxed">{member.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-full border border-gray-600/50"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Values Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                The principles that guide our mission and drive our success in revolutionizing technology.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                  className="text-center group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
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
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Join Our Mission
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Ready to be part of the future? Explore our career opportunities and join our team 
                of innovators, visionaries, and technology pioneers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  <Users className="w-5 h-5 mr-2" />
                  View Careers
                </button>
                <button className="px-8 py-4 bg-gray-800/50 text-white font-semibold rounded-xl border border-gray-600 hover:bg-gray-700/50 transition-all duration-300 flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Contact Us
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default TeamPage;