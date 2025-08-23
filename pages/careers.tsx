import React from 'react';
import { motion } from 'framer-motion';
import { Users, Rocket, Brain, Globe, Shield, Zap, Target, Award } from 'lucide-react';
import Layout from '../components/layout/Layout';

export default function Careers() {
  const openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'AI Research',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      description: 'Join our AI research team to develop cutting-edge machine learning models and AI systems.',
      requirements: ['PhD in Computer Science or related field', '5+ years ML/AI experience', 'Python, PyTorch, TensorFlow', 'Research publication record']
    },
    {
      title: 'Quantum Computing Researcher',
      department: 'Quantum Research',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      description: 'Research and develop quantum algorithms and quantum computing solutions.',
      requirements: ['PhD in Physics or Computer Science', 'Quantum computing experience', 'Qiskit, Cirq knowledge', 'Algorithm development skills']
    },
    {
      title: 'Cybersecurity Engineer',
      department: 'Security',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      description: 'Build and maintain secure systems and implement zero trust architectures.',
      requirements: ['BS in Computer Science', '3+ years security experience', 'Zero trust knowledge', 'Compliance expertise']
    },
    {
      title: 'Full Stack Developer',
      department: 'Engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      description: 'Develop modern web applications and contribute to our platform development.',
      requirements: ['BS in Computer Science', 'React, Node.js experience', 'Cloud platform knowledge', 'API development skills']
    }
  ];

  const benefits = [
    {
      icon: Rocket,
      title: 'Innovation Culture',
      description: 'Work on cutting-edge technology that shapes the future'
    },
    {
      icon: Globe,
      title: 'Remote First',
      description: 'Work from anywhere with flexible schedules'
    },
    {
      icon: Brain,
      title: 'Learning & Growth',
      description: 'Continuous learning opportunities and career development'
    },
    {
      icon: Shield,
      title: 'Health & Wellness',
      description: 'Comprehensive health coverage and wellness programs'
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
                Join Our Team
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Be part of a team that's revolutionizing technology and shaping the future. 
                Work on cutting-edge AI, quantum computing, and cybersecurity solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Open Positions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join us in building the future of technology
              </p>
            </motion.div>

            <div className="grid gap-8">
              {openPositions.map((position, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <h3 className="text-2xl font-bold text-white">{position.title}</h3>
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30">
                          {position.type}
                        </span>
                      </div>
                      <div className="flex items-center gap-6 text-gray-400 mb-4">
                        <span className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          {position.department}
                        </span>
                        <span className="flex items-center gap-2">
                          <Globe className="w-4 h-4" />
                          {position.location}
                        </span>
                      </div>
                      <p className="text-gray-300 mb-6 leading-relaxed">{position.description}</p>
                      <div>
                        <h4 className="text-white font-semibold mb-3">Requirements:</h4>
                        <ul className="space-y-2">
                          {position.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="flex items-center gap-2 text-gray-300">
                              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="lg:text-right">
                      <a
                        href="/contact"
                        className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                      >
                        Apply Now
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-4 bg-black/30">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Work With Us
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We offer more than just a job - we offer a mission and a community
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-10 h-10 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
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
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Join Us?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Don't see a position that fits? Send us your resume and let's discuss opportunities
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Us
                </a>
                <a
                  href="/about"
                  className="px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300"
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}