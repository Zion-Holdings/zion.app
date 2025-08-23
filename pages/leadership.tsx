import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Users, Award, Star, Globe, Brain, Atom, Rocket, Shield } from 'lucide-react';

const LeadershipPage: React.FC = () => {
  const seoConfig = {
    title: "Leadership Team | Zion Tech Group - Visionary Technology Leaders",
    description: "Meet the visionary leadership team at Zion Tech Group, driving innovation in AI, quantum computing, and next-generation technology solutions.",
    keywords: "leadership, executive team, Zion Tech Group, technology leaders, AI innovation, quantum computing, management",
    image: "/og-image.svg",
    url: "https://ziontechgroup.com/leadership",
    type: "website"
  };

  const leadershipTeam = [
    {
      name: "Kleber Oliveira",
      title: "Founder & CEO",
      bio: "Visionary technology entrepreneur and AI researcher with over 15 years of experience in cutting-edge technology development. Leading Zion Tech Group's mission to pioneer the future of AI consciousness and quantum computing.",
      expertise: ["AI Consciousness", "Quantum Computing", "Strategic Innovation", "Technology Leadership"],
      icon: <Brain className="w-6 h-6" />
    },
    {
      name: "Dr. Sarah Chen",
      title: "Chief Technology Officer",
      bio: "Former NASA researcher and quantum computing expert with a PhD in Computer Science from MIT. Spearheading breakthrough developments in quantum neural networks and space technology applications.",
      expertise: ["Quantum Computing", "Space Technology", "Neural Networks", "Research & Development"],
      icon: <Atom className="w-6 h-6" />
    },
    {
      name: "Marcus Rodriguez",
      title: "Chief Innovation Officer",
      bio: "Serial entrepreneur and technology futurist with expertise in autonomous systems and AI ethics. Driving innovation in responsible AI development and consciousness evolution.",
      expertise: ["AI Ethics", "Autonomous Systems", "Innovation Strategy", "Future Technology"],
      icon: <Rocket className="w-6 h-6" />
    },
    {
      name: "Dr. Emily Watson",
      title: "Chief Security Officer",
      bio: "Cybersecurity expert with deep experience in quantum-resistant cryptography and zero-trust architectures. Ensuring the highest security standards for our revolutionary technology platforms.",
      expertise: ["Cybersecurity", "Quantum Cryptography", "Zero Trust", "Risk Management"],
      icon: <Shield className="w-6 h-6" />
    },
    {
      name: "David Kim",
      title: "Chief Operations Officer",
      bio: "Operations and scaling expert with experience at major tech companies. Optimizing our global operations and ensuring seamless delivery of cutting-edge solutions.",
      expertise: ["Operations", "Global Scaling", "Process Optimization", "Strategic Planning"],
      icon: <Globe className="w-6 h-6" />
    }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We push the boundaries of what's possible, constantly exploring new frontiers in technology.",
      icon: <Star className="w-8 h-8 text-yellow-400" />
    },
    {
      title: "Ethical AI",
      description: "We develop AI systems that are not only powerful but also responsible and beneficial to humanity.",
      icon: <Brain className="w-8 h-8 text-cyan-400" />
    },
    {
      title: "Quantum Leap",
      description: "We're not just improving technology—we're creating paradigm shifts that redefine possibilities.",
      icon: <Atom className="w-8 h-8 text-blue-400" />
    },
    {
      title: "Global Impact",
      description: "Our solutions address the world's most pressing challenges through innovative technology.",
      icon: <Globe className="w-8 h-8 text-green-400" />
    }
  ];

  return (
    <Layout seo={seoConfig}>
      <div className="min-h-screen py-20">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl font-bold text-white mb-6">
              Leadership Team
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the visionary leaders driving Zion Tech Group's mission to pioneer the future of technology
            </p>
          </motion.div>
        </section>

        {/* Leadership Team */}
        <section className="mb-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Visionary Technology Leaders
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Our leadership team combines decades of experience in cutting-edge technology with a shared vision for the future
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leadershipTeam.map((leader, index) => (
                <motion.div
                  key={leader.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      {leader.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{leader.name}</h3>
                    <p className="text-cyan-400 font-semibold">{leader.title}</p>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    {leader.bio}
                  </p>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-3">Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {leader.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full border border-cyan-500/30"
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

        {/* Company Values */}
        <section className="mb-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                The principles that guide our leadership and drive our innovation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-4xl mx-auto px-4"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Join Our Mission
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Ready to work with visionary technology leaders? Let's discuss how we can transform your business with cutting-edge AI and quantum solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </a>
              <a
                href="/careers"
                className="px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Join Our Team
              </a>
            </div>
          </motion.div>
        </section>
      </div>
    </Layout>
  );
};

export default LeadershipPage;