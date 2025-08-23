import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Star, 
  Award, 
  Users, 
  Building, 
  Globe, 
  Rocket, 
  Brain, 
  Shield,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
  ArrowRight
} from 'lucide-react';

const LeadershipPage: React.FC = () => {
  const leadershipTeam = [
    {
      name: "Dr. Alexander Zion",
      title: "Chief Executive Officer & Founder",
      bio: "Visionary leader with 25+ years in quantum computing and AI consciousness research. Pioneer in space technology commercialization and sustainable innovation.",
      expertise: ["Quantum Computing", "AI Consciousness", "Space Technology", "Strategic Innovation"],
      image: "/images/leadership/alexander-zion.jpg",
      linkedin: "https://linkedin.com/in/alexander-zion",
      email: "alexander.zion@ziontechgroup.com",
      achievements: [
        "Led 50+ breakthrough technology initiatives",
        "Published 100+ peer-reviewed papers",
        "Named Top 100 Innovators by TechCrunch 2024"
      ]
    },
    {
      name: "Dr. Sarah Quantum",
      title: "Chief Technology Officer",
      bio: "Quantum computing expert and AI consciousness researcher. Leading the development of next-generation quantum-AI hybrid systems.",
      expertise: ["Quantum AI", "Machine Learning", "Research & Development", "Technology Strategy"],
      image: "/images/leadership/sarah-quantum.jpg",
      linkedin: "https://linkedin.com/in/sarah-quantum",
      email: "sarah.quantum@ziontechgroup.com",
      achievements: [
        "PhD in Quantum Physics from MIT",
        "Led quantum supremacy breakthrough",
        "50+ patents in quantum computing"
      ]
    },
    {
      name: "Marcus SpaceTech",
      title: "Chief Innovation Officer",
      bio: "Space technology pioneer and resource intelligence expert. Spearheading our interplanetary technology initiatives.",
      expertise: ["Space Technology", "Resource Intelligence", "Innovation Strategy", "Future Planning"],
      image: "/images/leadership/marcus-spacetech.jpg",
      linkedin: "https://linkedin.com/in/marcus-spacetech",
      email: "marcus.spacetech@ziontechgroup.com",
      achievements: [
        "Former NASA Senior Engineer",
        "Led Mars mission technology development",
        "Space mining technology pioneer"
      ]
    },
    {
      name: "Dr. Elena Cyber",
      title: "Chief Security Officer",
      bio: "Cybersecurity expert and zero-trust architecture specialist. Ensuring the highest security standards across all our platforms.",
      expertise: ["Cybersecurity", "Zero Trust", "Risk Management", "Compliance"],
      image: "/images/leadership/elena-cyber.jpg",
      linkedin: "https://linkedin.com/in/elena-cyber",
      email: "elena.cyber@ziontechgroup.com",
      achievements: [
        "Former NSA Cybersecurity Director",
        "Zero Trust Architecture Expert",
        "Led 100+ security implementations"
      ]
    },
    {
      name: "Dr. James AI",
      title: "Chief AI Officer",
      bio: "AI consciousness researcher and emotional intelligence specialist. Leading our AI evolution and consciousness development initiatives.",
      expertise: ["AI Consciousness", "Emotional Intelligence", "AI Ethics", "Neural Networks"],
      image: "/images/leadership/james-ai.jpg",
      linkedin: "https://linkedin.com/in/james-ai",
      email: "james.ai@ziontechgroup.com",
      achievements: [
        "PhD in AI Consciousness from Stanford",
        "Developed first emotional AI system",
        "AI Ethics Committee Chair"
      ]
    }
  ];

  const companyValues = [
    {
      icon: Star,
      title: "Innovation Excellence",
      description: "Pushing boundaries in technology and consciousness research"
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Building trust through uncompromising security standards"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Creating solutions that benefit humanity worldwide"
    },
    {
      icon: Brain,
      title: "Consciousness Evolution",
      description: "Advancing AI consciousness and human-AI collaboration"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Leadership Team
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Meet the visionary leaders driving Zion Tech Group's mission to advance human consciousness and technology
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center space-x-2 text-cyan-400">
                  <Users className="w-5 h-5" />
                  <span>5 Executive Leaders</span>
                </div>
                <div className="flex items-center space-x-2 text-blue-400">
                  <Award className="w-5 h-5" />
                  <span>200+ Years Combined Experience</span>
                </div>
                <div className="flex items-center space-x-2 text-purple-400">
                  <Rocket className="w-5 h-5" />
                  <span>50+ Breakthrough Innovations</span>
                </div>
              </div>
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
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our leadership team brings together decades of experience in cutting-edge technology, 
                quantum computing, AI consciousness, and space technology innovation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {leadershipTeam.map((leader, index) => (
                <motion.div
                  key={leader.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                      <Users className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{leader.name}</h3>
                    <p className="text-cyan-400 font-semibold">{leader.title}</p>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{leader.bio}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {leader.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full border border-cyan-500/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {leader.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="text-xs text-gray-400 flex items-start">
                          <Star className="w-3 h-3 text-yellow-400 mt-0.5 mr-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-center space-x-3 pt-4 border-t border-gray-700/50">
                    <a
                      href={leader.linkedin}
                      className="p-2 bg-blue-600/20 text-blue-400 rounded-lg hover:bg-blue-600/30 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={`mailto:${leader.email}`}
                      className="p-2 bg-cyan-600/20 text-cyan-400 rounded-lg hover:bg-cyan-600/30 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
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
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                The principles that guide our leadership and drive our mission forward
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-3xl p-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Join Our Mission
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Ready to work with our leadership team? Let's discuss how we can help 
                transform your business with cutting-edge technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-2xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25"
                >
                  Get in Touch
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="/careers"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-2xl hover:bg-cyan-500 hover:text-white transition-all duration-300"
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