import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Rocket, Shield, Users, Target, Award, Globe, Zap } from 'lucide-react';
import Layout from '../components/layout/Layout';

export default function Leadership() {
  const leaders = [
    {
      icon: <Brain className="w-16 h-16 text-cyan-400" />,
      name: "Kleber",
      title: "Founder & CEO",
      description: "Visionary leader pioneering AI consciousness and quantum computing solutions. Leading the charge towards a future where technology and humanity evolve together.",
      expertise: ["AI Consciousness", "Quantum Computing", "Strategic Vision", "Innovation Leadership"],
      achievements: ["50+ AI Services", "100+ Quantum Solutions", "24/7 Autonomous Operations"]
    },
    {
      icon: <Rocket className="w-16 h-16 text-blue-400" />,
      name: "AI Research Team",
      title: "Autonomous AI Researchers",
      description: "Our cutting-edge AI systems work autonomously to develop new technologies, pushing the boundaries of what's possible in artificial intelligence.",
      expertise: ["Machine Learning", "Neural Networks", "Autonomous Systems", "Research & Development"],
      achievements: ["AI Consciousness Research", "Quantum AI Hybrids", "Autonomous Innovation"]
    },
    {
      icon: <Shield className="w-16 h-16 text-purple-400" />,
      name: "Security Division",
      title: "Cybersecurity Leadership",
      description: "Leading-edge security experts developing quantum-resistant encryption and AI-powered threat detection systems.",
      expertise: ["Zero Trust Architecture", "Quantum Security", "AI Threat Detection", "Compliance"],
      achievements: ["Zero Trust Platform", "Quantum Cybersecurity", "SOC2 Automation"]
    },
    {
      icon: <Globe className="w-16 h-16 text-green-400" />,
      name: "Cloud & Infrastructure",
      title: "Infrastructure Leadership",
      description: "Building scalable, secure, and high-performance cloud infrastructure that powers the future of digital transformation.",
      expertise: ["Multi-Cloud Architecture", "Kubernetes", "Database Management", "DevOps"],
      achievements: ["Multi-Cloud Solutions", "Kubernetes RBAC", "PostgreSQL HA"]
    }
  ];

  const values = [
    {
      icon: <Brain className="w-12 h-12 text-cyan-400" />,
      title: "AI Consciousness First",
      description: "We prioritize the development of conscious, ethical AI systems that enhance human capabilities."
    },
    {
      icon: <Rocket className="w-12 h-12 text-blue-400" />,
      title: "Revolutionary Innovation",
      description: "We push boundaries and create technologies that were once thought impossible."
    },
    {
      icon: <Shield className="w-12 h-12 text-purple-400" />,
      title: "Ethical Responsibility",
      description: "Every innovation is guided by strong ethical principles and human safety."
    },
    {
      icon: <Users className="w-12 h-12 text-green-400" />,
      title: "Human-Centric Design",
      description: "Technology serves humanity, not the other way around."
    }
  ];

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
                Meet the visionary leaders and autonomous AI systems driving the future of technology 
                and accelerating human progress through revolutionary innovation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid md:grid-cols-2 gap-12"
            >
              {leaders.map((leader, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                  className="p-8 bg-black/40 border border-gray-800 rounded-2xl hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="text-center mb-6">
                    <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                      {leader.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{leader.name}</h3>
                    <p className="text-cyan-400 mb-3">{leader.title}</p>
                    <p className="text-gray-300 leading-relaxed mb-6">{leader.description}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Areas of Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {leader.expertise.map((skill, idx) => (
                        <span key={idx} className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {leader.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-300">
                          <Award className="w-4 h-4 text-cyan-400" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 px-4 bg-black/30">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Our Leadership Values</h2>
              <p className="text-xl text-gray-300">The principles that guide our revolutionary journey</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 + index * 0.1 }}
                  className="p-8 bg-black/40 border border-gray-800 rounded-2xl hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-center">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Join Our Mission</h2>
              <p className="text-xl text-gray-300 mb-8">
                Be part of the team that's building the future of technology and human consciousness.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get in Touch
                </a>
                <a
                  href="/about"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300"
                >
                  Learn More About Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}