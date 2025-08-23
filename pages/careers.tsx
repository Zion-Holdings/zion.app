import React from 'react';
import { motion } from 'framer-motion';
import { Users, Rocket, Brain, Globe, Target, Award, Zap, Heart, Shield } from 'lucide-react';
import Layout from '../components/layout/Layout';

export default function Careers() {
  const openPositions = [
    {
      icon: <Brain className="w-12 h-12 text-cyan-400" />,
      title: "AI Research Engineer",
      department: "AI Research",
      location: "Remote / Hybrid",
      type: "Full-time",
      description: "Join our AI consciousness research team developing revolutionary AI systems and quantum computing solutions."
    },
    {
      icon: <Rocket className="w-12 h-12 text-blue-400" />,
      title: "Quantum Computing Specialist",
      department: "Quantum Research",
      location: "Remote / Hybrid",
      type: "Full-time",
      description: "Pioneer the future of quantum computing and quantum AI hybrid systems."
    },
    {
      icon: <Shield className="w-12 h-12 text-purple-400" />,
      title: "Cybersecurity Engineer",
      department: "Security",
      location: "Remote / Hybrid",
      type: "Full-time",
      description: "Build next-generation cybersecurity solutions with zero trust architecture and AI-powered threat detection."
    },
    {
      icon: <Globe className="w-12 h-12 text-green-400" />,
      title: "Cloud Infrastructure Engineer",
      department: "Infrastructure",
      location: "Remote / Hybrid",
      type: "Full-time",
      description: "Design and build scalable cloud infrastructure for enterprise applications and AI platforms."
    },
    {
      icon: <Zap className="w-12 h-12 text-yellow-400" />,
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote / Hybrid",
      type: "Full-time",
      description: "Automate and optimize our development and deployment processes for maximum efficiency."
    },
    {
      icon: <Target className="w-12 h-12 text-pink-400" />,
      title: "Product Manager",
      department: "Product",
      location: "Remote / Hybrid",
      type: "Full-time",
      description: "Lead product strategy and development for our AI and quantum computing platforms."
    }
  ];

  const benefits = [
    {
      icon: <Heart className="w-12 h-12 text-cyan-400" />,
      title: "Health & Wellness",
      description: "Comprehensive health coverage, mental health support, and wellness programs"
    },
    {
      icon: <Globe className="w-12 h-12 text-blue-400" />,
      title: "Remote First",
      description: "Work from anywhere with flexible schedules and global team collaboration"
    },
    {
      icon: <Brain className="w-12 h-12 text-purple-400" />,
      title: "Learning & Growth",
      description: "Continuous learning opportunities, conferences, and career development programs"
    },
    {
      icon: <Award className="w-12 h-12 text-green-400" />,
      title: "Innovation Rewards",
      description: "Recognition and rewards for breakthrough innovations and contributions"
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
                Join Our Mission
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Be part of the team that's building the future of technology, AI consciousness, 
                and quantum computing. Help us accelerate human progress through revolutionary innovation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Open Positions</h2>
              <p className="text-xl text-gray-300">Join our revolutionary team and shape the future of technology</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid md:grid-cols-2 gap-8"
            >
              {openPositions.map((position, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                  className="p-8 bg-black/40 border border-gray-800 rounded-2xl hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0">
                      {position.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full border border-cyan-500/30">
                          {position.department}
                        </span>
                        <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full border border-blue-500/30">
                          {position.location}
                        </span>
                        <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30">
                          {position.type}
                        </span>
                      </div>
                      <p className="text-gray-300 text-sm">{position.description}</p>
                    </div>
                  </div>
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                    Apply Now
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-4 bg-black/30">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Why Join Zion Tech Group?</h2>
              <p className="text-xl text-gray-300">Discover the benefits of being part of our revolutionary team</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="grid md:grid-cols-2 gap-8"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 + index * 0.1 }}
                  className="p-8 bg-black/40 border border-gray-800 rounded-2xl hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-center">{benefit.description}</p>
                </motion.div>
              ))}
            </motion.div>
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
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Build the Future?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Join our team of innovators and help us revolutionize technology and human consciousness.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Apply Now
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